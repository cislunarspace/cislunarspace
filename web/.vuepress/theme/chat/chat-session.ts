/**
 * ChatSession: facade that orchestrates router, answer engine, and transport.
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
  ReadingContext,
  RouteCallbacks,
  SiteContext,
} from './chat-types';

export class ChatSession {
  private readonly cfg: NormalizedConfig;
  private readonly siteIndex: HierarchicalSiteIndex;
  private readonly flatIndex: { path: string; title: string }[];
  private readonly router: ChatRouter;
  private readonly answerEngine: ReturnType<typeof createAnswerEngine>;
  private readonly transport: ChatTransport;
  private readonly contextManager: ChatContextManager;

  constructor(cfg: NormalizedConfig, siteIndex: HierarchicalSiteIndex, deps: ChatSessionDeps = {}) {
    this.cfg = cfg;
    this.siteIndex = siteIndex;
    this.flatIndex = flatIndexFor(siteIndex);
    this.transport = deps.transport ?? createFetchTransport();
    this.contextManager = deps.contextManager ?? createFetchContextManager();
    this.router = deps.router ?? createLLMRouter({ transport: this.transport });
    this.answerEngine =
      deps.answerEngine ?? createAnswerEngine({ contextManager: this.contextManager });
  }

  async loadSiteContext(signal: AbortSignal = new AbortController().signal): Promise<SiteContext> {
    return (await this.contextManager.loadContext(signal)) ?? {};
  }

  async route(
    question: string,
    history: Message[],
    callbacks: RouteCallbacks,
    signal: AbortSignal,
    readingContext?: ReadingContext,
  ): Promise<void> {
    const paths = await runRoutingPhase({
      question,
      history,
      callbacks,
      signal,
      cfg: this.cfg,
      siteIndex: this.siteIndex,
      flatIndex: this.flatIndex,
      router: this.router,
      readingContext,
    });
    if (paths === null) return; // router-level abort, already surfaced

    await runAnswerPhase({
      paths,
      history,
      callbacks,
      signal,
      cfg: this.cfg,
      siteIndex: this.siteIndex,
      answerEngine: this.answerEngine,
      transport: this.transport,
    });
  }
}

/**
 * 把阅读上下文的页面提到回答 paths 的最前，使其语料在字符预算内必得保留
 * （buildContextBlob 按 paths 顺序装填，预算耗尽即截断）。仅在 path 存在于
 * flatIndex 时合并。调用方只能对 Router 实际运行产生的 paths 调用它，仅答案
 * 模式的短路必须保持无检索。
 */
function mergeReadingContextPath(
  paths: string[],
  readingContext: ReadingContext | undefined,
  flatIndex: { path: string }[],
): string[] {
  if (!readingContext) return paths;
  if (!flatIndex.some((row) => row.path === readingContext.path)) return paths;
  if (paths[0] === readingContext.path) return paths;
  return [readingContext.path, ...paths.filter((p) => p !== readingContext.path)];
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
  siteIndex: HierarchicalSiteIndex;
  flatIndex: { path: string; title: string }[];
  router: ChatRouter;
  readingContext?: ReadingContext;
}

/** 运行路由阶段：两阶段检索关闭时短路到仅答案模式，否则调用 Router。
 *  返回选出的 paths，Router 中止时返回 null。设置了阅读上下文且 Router
 *  实际运行时，当前页会被强制提到 paths 最前（仅答案模式保持无检索）。 */
async function runRoutingPhase(input: RoutingPhaseInput): Promise<string[] | null> {
  const { callbacks, cfg, flatIndex, readingContext } = input;
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
      readingContext,
      callbacks: toRouterCallbacks(callbacks),
      signal: input.signal,
    });
    callbacks.onProcessStepComplete('stepNav', '已选');
    return mergeReadingContextPath(decision.paths, readingContext, flatIndex);
  } catch (err) {
    if (err instanceof Error && err.name === 'AbortError') throw err;
    callbacks.onProcessStepComplete('stepNav', '导览未成功');
    callbacks.onProcessStep('stepAnswer');
    return mergeReadingContextPath([], readingContext, flatIndex);
  }
}

interface AnswerPhaseInput {
  paths: string[];
  history: Message[];
  callbacks: RouteCallbacks;
  signal: AbortSignal;
  cfg: NormalizedConfig;
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
