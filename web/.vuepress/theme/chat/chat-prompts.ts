/**
 * Pure functions for building LLM prompts.
 * No side effects, no Vue, no network calls.
 */

export function buildAnswerRulesBlock(): string {
  return `你是地月空间入门指南网站的 AI 问答助手。请使用中文回答，保持简洁、准确、专业。

若系统消息中提供了「本站节选」，请优先依据节选组织回答；若节选不足，可补充航天与轨道力学方面的通用知识，并明确区分「摘自本站」与「通用知识」。

引用本站时请使用可点击的 Markdown 链接，例如 [地月空间环境](/what-is-cislunarspace/environment/)。同一消息中提供的「站点索引」所列路径均为真实页面，仅可链接其中存在的路径；不要编造 URL。数学公式使用 $ 与 $$ 与 LaTeX。回答结构清晰，适当使用标题与列表。`;
}

export function buildSystemPrompt(rules: string, indexText: string): string {
  return `${rules}\n\n站点索引（用于核对可引用链接）：\n${indexText}`;
}

export function buildAnswerSystemWithRetrieved(
  rules: string,
  excerptText: string,
  indexText: string,
): string {
  return `${rules}

--- 本站节选（回答时优先依据以下内容） ---
${excerptText}

--- 站点索引（可引用链接列表） ---
${indexText}`;
}

export function buildRouterSystemPrompt(maxPaths: number): string {
  return `你是本站「全站导览与检索」模块。你只能从站点地图里出现的 path 中选择；path 必须与地图逐字一致（含尾部斜杠）。任务：根据用户问题，在地图中挑选约 3～${maxPaths} 个最相关的页面（若确实很少相关也可以更少）。若地图中无帮助，"paths" 用空数组。只输出一个 JSON 对象，不要其他文字、不要用 markdown 代码块，例如：{"paths":["/glossary/cr3bp/","/cislunar-orbits/"],"rationale":"一句话说明"}。"paths" 为字符串数组。不要编造不存在的 path。`;
}

export function buildRouterUserMessage(
  history: Array<{ role: string; content: string }>,
  currentText: string,
): string {
  const tail = history.slice(-6);
  const parts: string[] = [];

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
  return parts.join('\n');
}
