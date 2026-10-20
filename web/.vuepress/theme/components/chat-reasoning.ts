/** 贴底判定：思考流式增长时只有贴近底部才继续跟随滚动，用户上滚回看不打扰。 */
export function isNearBottom(el: HTMLElement, threshold = 30): boolean {
  return el.scrollHeight - el.scrollTop - el.clientHeight < threshold;
}
