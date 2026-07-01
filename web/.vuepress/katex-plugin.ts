/**
 * KaTeX plugin — wraps math blocks with a copy-button overlay.
 */
import mk from '@traptitech/markdown-it-katex'

const COPY_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>`

function escapeAttr(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\n/g, '&#10;')
}

export const katexPlugin = {
  name: 'vuepress-plugin-katex',
  extendsMarkdown: (md) => {
    md.use(mk, { blockClass: 'math-block' })
    const origBlock = md.renderer.rules.math_block!
    md.renderer.rules.math_block = (tokens, idx) => {
      const latex = tokens[idx].content.trim()
      const rendered = origBlock(tokens, idx)
      return `<div class="math-block-wrapper" data-latex="${escapeAttr(latex)}">${rendered}<button class="math-copy-btn" title="复制 LaTeX 代码">${COPY_ICON}</button></div>\n`
    }
  },
}
