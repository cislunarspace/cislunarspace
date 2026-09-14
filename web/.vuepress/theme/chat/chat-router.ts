/**
 * Path selection for the AI Chat flow.
 *
 * The router narrows the whole site down to a handful of relevant page
 * paths in two steps:
 *   1. build a compact "site map" text (path<TAB>title per line) and ask
 *      the LLM to pick paths from it,
 *   2. validate the LLM's answer against the flat index — anything not
 *      present is dropped; an empty result falls back to keyword matching.
 */
import { buildRouterSystemPrompt, buildRouterUserMessage } from './chat-prompts';
import {
  buildSiteMapText,
  fallbackKeywordPaths,
  flattenCategories,
  formatPathList,
  normalizeAndValidatePaths,
  parseRouterResponse,
} from './chat-data-utils';
import type { ChatTransport } from './chat-engine-seams';
import type {
  HierarchicalSiteIndex,
  IndexRow,
  Message,
  NormalizedConfig,
  ProcessStepKey,
} from './chat-types';

export type RouterStepKey = Extract<ProcessStepKey, 'stepNav' | 'stepExcerpt'>;

export interface RouterCallbacks {
  onPathsChosen(paths: string[]): void;
  onProcessStep(stepKey: RouterStepKey, detail?: string): void;
  onProcessStepComplete(stepKey: RouterStepKey, detail?: string): void;
}

export interface RoutingDecision {
  paths: string[];
}

export interface ChatRouter {
  route(params: {
    question: string;
    history: Message[];
    siteIndex: HierarchicalSiteIndex;
    flatIndex: IndexRow[];
    config: NormalizedConfig;
    callbacks: RouterCallbacks;
    signal: AbortSignal;
  }): Promise<RoutingDecision>;
}

export interface LLMRouterDeps {
  transport: ChatTransport;
}

/** Pure-keyword router — no LLM call. Used as a default and as the
 *  fallback when the LLM router fails or returns no usable paths. */
export function createKeywordRouter(): ChatRouter {
  return {
    async route({ question, flatIndex, config, callbacks }) {
      const maxPaths = config.routerMaxPaths ?? 8;
      const chosen = fallbackKeywordPaths(question, flatIndex, maxPaths);
      if (chosen.length) {
        callbacks.onPathsChosen(chosen);
        callbacks.onProcessStepComplete('stepNav', formatPathList(chosen, flatIndex) || '已选');
      }
      return { paths: chosen };
    },
  };
}

/** LLM-based router with keyword fallback on error or empty result. */
export function createLLMRouter(deps: LLMRouterDeps): ChatRouter {
  const { transport } = deps;
  return {
    async route({ question, history, siteIndex, flatIndex, config, callbacks, signal }) {
      const maxPaths = config.routerMaxPaths ?? 8;

      const mapText = buildSiteMapText(siteIndex);
      const routerUser = buildRouterUserMessage(history, question);

      callbacks.onProcessStep('stepNav');

      let rawRouter: string;
      try {
        const data = (await transport.completeJson(
          config.apiEndpoint,
          {
            model: config.routerModel || config.model,
            max_tokens: 800,
            temperature: config.routerTemperature ?? 0.2,
            messages: [
              { role: 'system', content: buildRouterSystemPrompt(maxPaths) },
              {
                role: 'user',
                content: `站点地图：每行 path<tab>title\n\n${mapText}\n\n---\n\n${routerUser}`,
              },
            ],
            stream: false,
          },
          signal,
        )) as { choices?: Array<{ message?: { content?: string } }> };
        rawRouter = data?.choices?.[0]?.message?.content || '';
      } catch (err) {
        if (err instanceof Error && err.name === 'AbortError') throw err;
        callbacks.onProcessStepComplete('stepNav', '导览未成功');
        return createKeywordRouter().route({
          question,
          history,
          siteIndex,
          flatIndex,
          config,
          callbacks,
          signal,
        });
      }

      const validPaths = new Set(flatIndex.map((r) => r.path));
      const chosen = normalizeAndValidatePaths(
        parseRouterResponse(rawRouter).paths,
        validPaths,
        maxPaths,
      );

      if (!chosen.length) {
        return createKeywordRouter().route({
          question,
          history,
          siteIndex,
          flatIndex,
          config,
          callbacks,
          signal,
        });
      }

      callbacks.onPathsChosen(chosen);
      callbacks.onProcessStepComplete('stepNav', formatPathList(chosen, flatIndex) || '已选');
      callbacks.onProcessStep('stepExcerpt');

      return { paths: chosen };
    },
  };
}

/** Helper used by ChatSession — flatten the hierarchical site index. */
export function flatIndexFor(siteIndex: HierarchicalSiteIndex): IndexRow[] {
  return flattenCategories(siteIndex);
}
