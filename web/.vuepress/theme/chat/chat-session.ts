/**
 * ChatSession — facade that orchestrates router → answer engine → transport.
 *
 * The real work lives in:
 * - chat-router.ts (path selection)
 * - chat-answer-engine.ts (system prompt + history + payload)
 * - chat-context-manager.ts (site context loading + cache)
 * - chat-engine-seams.ts (transport)
 * - chat-stream.ts (SSE stream accumulation)
 *
 * This class wires the components, then delegates the routing and answer
 * phases to module-level orchestrators. Its only logic is the early-return
 * gate that skips the answer phase when the router aborts.
 */
import type { AnswerEngineCallbacks } from './chat-answer-engine';
import { createAnswerEngine, readMessage } from './chat-answer-engine';
import type { ChatContextManager } from './chat-context-manager';
import { createFetchContextManager } from './chat-context-manager';
import type { ChatTransport } from './chat-engine-seams';
import { createFetchTransport, type ChatSessionDeps } from './chat-engine-seams';
import { createLLMRouter, flatIndexFor, type ChatRouter, type RouterStepKey } from './chat-router';
import { runAnswerStream } from './chat-stream';
import type {
  HierarchicalSiteIndex,
  Message,
  NormalizedConfig,
  RouteCallbacks,
  SiteContext,
} from './chat-types';

export class ChatSession {
  private readonly cfg: NormalizedConfig;
  private readonly locale: 'zh' | 'en';
  private readonly siteIndex: HierarchicalSiteIndex;
  private readonly flatIndex: { path: string; title: string }[];
  private readonly router: ChatRouter;
  private readonly answerEngine: ReturnType<typeof createAnswerEngine>;
  private readonly transport: ChatTransport;
  private readonly contextManager: ChatContextManager;

  constructor(
    cfg: NormalizedConfig,
    locale: 'zh' | 'en',
    siteIndex: HierarchicalSiteIndex,
    deps: ChatSessionDeps = {},
  ) {
    this.cfg = cfg;
    this.locale = locale;
    this.siteIndex = siteIndex;
    this.flatIndex = flatIndexFor(siteIndex, locale);
    this.transport = deps.transport ?? createFetchTransport();
    this.contextManager = deps.contextManager ?? createFetchContextManager();
    this.router = deps.router ?? createLLMRouter({ transport: this.transport });
    this.answerEngine =
      deps.answerEngine ?? createAnswerEngine({ contextManager: this.contextManager });
  }

  async loadSiteContext(signal: AbortSignal = new AbortController().signal): Promise<SiteContext> {
    return (await this.contextManager.loadContext(signal)) ?? { zh: {}, en: {} };
  }

  async route(
    question: string,
    history: Message[],
    callbacks: RouteCallbacks,
    signal: AbortSignal,
  ): Promise<void> {
    const paths = await runRoutingPhase({
      question,
      history,
      callbacks,
      signal,
      cfg: this.cfg,
      locale: this.locale,
      siteIndex: this.siteIndex,
      flatIndex: this.flatIndex,
      router: this.router,
    });
    if (paths === null) return; // router-level abort, already surfaced

    await runAnswerPhase({
      paths,
      history,
      callbacks,
      signal,
      cfg: this.cfg,
      locale: this.locale,
      siteIndex: this.siteIndex,
      answerEngine: this.answerEngine,
      transport: this.transport,
    });
  }
}

function toRouterCallbacks(callbacks: RouteCallbacks) {
  return {
    onPathsChosen: (paths: string[]) => callbacks.onPathsChosen(paths),
    onProcessStep: (key: RouterStepKey, detail?: string) => callbacks.onProcessStep(key, detail),
    onProcessStepComplete: (key: RouterStepKey, detail?: string) =>
      callbacks.onProcessStepComplete(key, detail),
  };
}

function toAnswerEngineCallbacks(callbacks: RouteCallbacks): AnswerEngineCallbacks {
  return {
    onExcerptsLoaded: (text) => callbacks.onExcerptsLoaded(text),
    onProcessStep: (key, detail) => callbacks.onProcessStep(key, detail),
    onProcessStepComplete: (key, detail) => callbacks.onProcessStepComplete(key, detail),
    onChunk: (delta) => callbacks.onChunk(delta),
    onComplete: (content, reasoning) => callbacks.onComplete(content, reasoning),
    onError: (errorKey, details) => callbacks.onError(errorKey, details),
  };
}

interface RoutingPhaseInput {
  question: string;
  history: Message[];
  callbacks: RouteCallbacks;
  signal: AbortSignal;
  cfg: NormalizedConfig;
  locale: 'zh' | 'en';
  siteIndex: HierarchicalSiteIndex;
  flatIndex: { path: string; title: string }[];
  router: ChatRouter;
}

/** Run the routing phase: short-circuit to "answer alone" when two-phase
 *  retrieval is off; otherwise call the router. Returns the chosen paths,
 *  or null when the router signaled abort. */
async function runRoutingPhase(input: RoutingPhaseInput): Promise<string[] | null> {
  const { callbacks, cfg, locale, flatIndex } = input;
  const twoPhaseOn = cfg.twoPhaseRetrieval !== false && flatIndex.length > 0;
  if (!twoPhaseOn) {
    callbacks.onProcessStep('stepAnswerAlone');
    return [];
  }

  try {
    const decision = await input.router.route({
      question: input.question,
      history: input.history,
      siteIndex: input.siteIndex,
      flatIndex,
      config: cfg,
      locale,
      callbacks: toRouterCallbacks(callbacks),
      signal: input.signal,
    });
    callbacks.onProcessStepComplete('stepNav', locale === 'en' ? 'ok' : '已选');
    return decision.paths;
  } catch (err) {
    if (err instanceof Error && err.name === 'AbortError') throw err;
    callbacks.onProcessStepComplete('stepNav', locale === 'en' ? 'error' : '导览未成功');
    callbacks.onProcessStep('stepAnswer');
    return [];
  }
}

interface AnswerPhaseInput {
  paths: string[];
  history: Message[];
  callbacks: RouteCallbacks;
  signal: AbortSignal;
  cfg: NormalizedConfig;
  locale: 'zh' | 'en';
  siteIndex: HierarchicalSiteIndex;
  answerEngine: ReturnType<typeof createAnswerEngine>;
  transport: ChatTransport;
}

/** Run the answer phase: build the prompt payload, dispatch to the transport
 *  (stream or non-stream), and surface completions/errors via callbacks. */
async function runAnswerPhase(input: AnswerPhaseInput): Promise<void> {
  const phase = await input.answerEngine.buildAnswerPhase({
    paths: input.paths,
    history: input.history,
    siteIndex: input.siteIndex,
    locale: input.locale,
    config: input.cfg,
    callbacks: toAnswerEngineCallbacks(input.callbacks),
    signal: input.signal,
  });

  if (!phase.usedTwoPhase) input.callbacks.onProcessStep('stepAnswer');

  const useStream = (phase.payload as { stream?: boolean }).stream !== false;
  try {
    if (useStream) {
      const reader = await input.transport.completeStream(
        input.cfg.apiEndpoint,
        phase.payload,
        input.signal,
      );
      if (reader) {
        await runAnswerStream(reader, input.callbacks, input.signal);
        return;
      }
    }
    await completeAnswerFromJson(
      input.transport,
      input.cfg.apiEndpoint,
      phase.payload,
      input.callbacks,
      input.signal,
    );
  } catch (err) {
    if (err instanceof Error && err.name === 'AbortError') throw err;
    input.callbacks.onError('networkError', err instanceof Error ? err.message : String(err));
  }
}

async function completeAnswerFromJson(
  transport: ChatTransport,
  endpoint: string,
  payload: Record<string, unknown>,
  callbacks: RouteCallbacks,
  signal: AbortSignal,
): Promise<void> {
  const data = await transport.completeJson(endpoint, payload, signal);
  const msg = readMessage(data);
  const content = (msg.content || '').trim();
  const reasoning = msg.reasoning_content ? String(msg.reasoning_content) : '';
  if (!content) {
    callbacks.onError('emptyReply');
    return;
  }
  callbacks.onComplete(content, reasoning);
}
