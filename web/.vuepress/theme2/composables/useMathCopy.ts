const COPY_SVG = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>'
const CHECK_SVG = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>'

export function setupMathCopy() {
  document.addEventListener('click', (e) => {
    const btn = (e.target as HTMLElement).closest('.math-copy-btn') as HTMLElement | null
    if (!btn) return
    const wrapper = btn.closest('.math-block-wrapper') as HTMLElement | null
    if (!wrapper) return
    const latex = wrapper.getAttribute('data-latex') || ''
    navigator.clipboard.writeText(latex).then(() => {
      btn.innerHTML = CHECK_SVG
      btn.title = '已复制'
      btn.classList.add('copied')
      setTimeout(() => {
        btn.innerHTML = COPY_SVG
        btn.title = '复制 LaTeX 代码'
        btn.classList.remove('copied')
      }, 1500)
    })
  })
}
