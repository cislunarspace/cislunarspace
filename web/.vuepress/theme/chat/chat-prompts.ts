/**
 * Pure functions for building LLM prompts.
 * No side effects, no Vue, no network calls.
 */

export function buildAnswerRulesBlock(locale: 'zh' | 'en'): string {
  if (locale === 'en') {
    return `You are the AI assistant for the Cislunar Space Beginner's Guide (cislunar space). Answer in English: concise, accurate, and professional.

When "Relevant page excerpts" are provided in the system message, prioritize them to structure your answer. If they are insufficient, you may add general knowledge about cislunar orbits and missions, and clearly label what comes from the excerpts vs. your general knowledge.

Use clickable Markdown links for this site, e.g. [CR3BP](/en/glossary/cr3bp/). Only link paths that exist in the site index supplied in the same message. Do not invent URLs. Use $...$ and $$...$$ for LaTeX. Prefer clear Markdown structure (headings, lists, tables).`;
  }
  return `你是地月空间入门指南网站的 AI 问答助手。请使用中文回答，保持简洁、准确、专业。

若系统消息中提供了「本站节选」，请优先依据节选组织回答；若节选不足，可补充航天与轨道力学方面的通用知识，并明确区分「摘自本站」与「通用知识」。

引用本站时请使用可点击的 Markdown 链接，例如 [地月空间环境](/what-is-cislunarspace/environment/)。同一消息中提供的「站点索引」所列路径均为真实页面，仅可链接其中存在的路径；不要编造 URL。数学公式使用 $ 与 $$ 与 LaTeX。回答结构清晰，适当使用标题与列表。`;
}

export function buildSystemPrompt(rules: string, indexText: string, locale: 'zh' | 'en'): string {
  if (locale === 'en') {
    return `${rules}\n\nSite index (for valid links):\n${indexText}`;
  }
  return `${rules}\n\n站点索引（用于核对可引用链接）：\n${indexText}`;
}

export function buildAnswerSystemWithRetrieved(
  rules: string,
  excerptText: string,
  indexText: string,
  locale: 'zh' | 'en',
): string {
  if (locale === 'en') {
    return `${rules}

--- Relevant page excerpts (primary source) ---
${excerptText}

--- Site index (for additional valid links) ---
${indexText}`;
  }
  return `${rules}

--- ${locale === 'zh' ? '本站节选（回答时优先依据以下内容）' : 'Relevant page excerpts (primary source)'} ---
${excerptText}

--- ${locale === 'zh' ? '站点索引（可引用链接列表）' : 'Site index (for additional valid links)'} ---
${indexText}`;
}

export function buildRouterSystemPrompt(locale: 'zh' | 'en', maxPaths: number): string {
  if (locale === 'en') {
    return `You are a site navigation and retrieval planner for the Cislunar Space Beginner's Guide. You ONLY choose page paths that appear in the site map; paths must match exactly (including trailing slash). Task: for the user question, pick between 3 and ${maxPaths} of the most relevant paths to answer it (fewer is OK if only a few apply). You may return an empty "paths" array if nothing in the map is relevant. Reply with ONE JSON object only, no other text, no markdown fences, like: {"paths":["/en/some-page/","/en/glossary/foo/"],"rationale":"one short sentence"}. "paths" is an array of strings. Do not fabricate paths.`;
  }
  return `你是本站「全站导览与检索」模块。你只能从站点地图里出现的 path 中选择；path 必须与地图逐字一致（含尾部斜杠）。任务：根据用户问题，在地图中挑选约 3～${maxPaths} 个最相关的页面（若确实很少相关也可以更少）。若地图中无帮助，"paths" 用空数组。只输出一个 JSON 对象，不要其他文字、不要用 markdown 代码块，例如：{"paths":["/glossary/cr3bp/","/cislunar-orbits/"],"rationale":"一句话说明"}。"paths" 为字符串数组。不要编造不存在的 path。`;
}

export function buildRouterUserMessage(
  history: Array<{ role: string; content: string }>,
  currentText: string,
  locale: 'zh' | 'en',
): string {
  const tail = history.slice(-6);
  const parts: string[] = [];

  if (locale === 'en') {
    if (tail.length) {
      parts.push('Recent messages (condensed for routing):');
      for (const m of tail) {
        const c = m.content && m.content.length > 500 ? m.content.slice(0, 500) + '…' : m.content;
        parts.push(`${m.role}: ${c}`);
      }
      parts.push('');
    }
    parts.push('Current user question:');
    parts.push(currentText);
  } else {
    if (tail.length) {
      parts.push('（以下为近期对话摘要，供理解指代，选页仍以当前问题为主）');
      for (const m of tail) {
        const c = m.content && m.content.length > 500 ? m.content.slice(0, 500) + '…' : m.content;
        parts.push(`${m.role}：${c}`);
      }
      parts.push('');
    }
    parts.push('当前用户问题：');
    parts.push(currentText);
  }
  return parts.join('\n');
}
