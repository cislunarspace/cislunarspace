/** 与 VPPage 结构一致；若未来主题调整类名，可再追加 fallback */
const PAGE_CONTENT_QUERIES = [
  '.vp-theme-container .vp-page [vp-content]',
  '.vp-page [vp-content]',
] as const

let toolbarListenerAttached = false
let tableDomObserver: MutationObserver | null = null
let tableEnhanceObserverActive = false
let enhanceDebounceT: ReturnType<typeof setTimeout> | null = null
const ENHANCE_DEBOUNCE_MS = 48

function isEnPath(): boolean {
  return (typeof window !== 'undefined' && window.location.pathname.startsWith('/en/'))
}

function t(zh: string, en: string): string {
  return isEnPath() ? en : zh
}

function baseFileStem(): string {
  const path = (typeof window !== 'undefined' && window.location.pathname.replace(/\/$/, '')) || 'page'
  const last = path.split('/').filter(Boolean).pop() || 'table'
  return last.replace(/[^\w\-\u4e00-\u9fff]+/g, '-').replace(/^-+|-+$/g, '') || 'table'
}

function tableRowStrings(tr: HTMLTableRowElement): string[] {
  const out: string[] = []
  for (const cell of Array.from(tr.cells) as HTMLTableCellElement[]) {
    const text = (cell.textContent || '').replace(/\s+/g, ' ').trim()
    const span = Math.max(1, cell.colSpan)
    for (let i = 0; i < span; i++) {
      out.push(i === 0 ? text : '')
    }
  }
  return out
}

function tableToMatrix(table: HTMLTableElement): string[][] {
  return Array.from(table.rows).map((tr) => tableRowStrings(tr))
}

function escapeCsvField(s: string): string {
  if (/[",\n\r]/.test(s)) {
    return `"${s.replace(/"/g, '""')}"`
  }
  return s
}

function matrixToCsv(rows: string[][]): string {
  return rows
    .map((row) => row.map(escapeCsvField).join(','))
    .join('\n')
}

function downloadText(filename: string, text: string, mime: string) {
  const blob = new Blob([text], { type: mime })
  const a = document.createElement('a')
  a.href = URL.createObjectURL(blob)
  a.download = filename
  a.rel = 'noopener'
  a.click()
  setTimeout(() => URL.revokeObjectURL(a.href), 2000)
}

async function downloadXlsxMatrix(rows: string[][], filename: string) {
  const XLSX = await import('xlsx')
  const wb = XLSX.utils.book_new()
  const ws = XLSX.utils.aoa_to_sheet(rows)
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1')
  XLSX.writeFile(wb, filename, { bookType: 'xlsx' })
}

let copyFlashTimer: ReturnType<typeof setTimeout> | null = null
function onToolbarClick(e: Event) {
  const btn = (e.target as HTMLElement | null)?.closest(
    'button.vp-table-tool-btn',
  ) as HTMLButtonElement | null
  if (!btn) return
  const block = btn.closest('.vp-table-block') as HTMLElement | null
  const table = block?.querySelector('table') as HTMLTableElement | null
  if (!table) return
  e.preventDefault()
  const action = btn.dataset.tableAction
  if (!action) return

  const matrix = tableToMatrix(table)
  if (!matrix.length) return

  const stem = baseFileStem()
  const n = (block && block.dataset.vpTableIndex) || '1'
  const base = `${stem}-${n}`

  if (action === 'copy') {
    const csv = matrixToCsv(matrix)
    const bom = '\uFEFF'
    void navigator.clipboard.writeText(bom + csv).then(
      () => {
        if (copyFlashTimer) clearTimeout(copyFlashTimer)
        btn.classList.add('vp-table-copied')
        const prev = btn.getAttribute('aria-label') || ''
        btn.setAttribute('data-prev-aria', prev)
        btn.setAttribute('aria-label', t('已复制为 CSV 文本', 'Copied as CSV text'))
        copyFlashTimer = setTimeout(() => {
          btn.classList.remove('vp-table-copied')
          const back = btn.getAttribute('data-prev-aria')
          if (back !== null) {
            if (back) btn.setAttribute('aria-label', back)
            else btn.removeAttribute('aria-label')
            btn.removeAttribute('data-prev-aria')
          }
        }, 1600)
      },
      () => {},
    )
    return
  }

  if (action === 'csv') {
    const csv = matrixToCsv(matrix)
    const bom = '\uFEFF'
    downloadText(`${base}.csv`, bom + csv, 'text/csv;charset=utf-8')
    return
  }

  if (action === 'xlsx') {
    void downloadXlsxMatrix(matrix, `${base}.xlsx`)
  }
}

function wrapTable(table: HTMLTableElement, index0: number) {
  if (table.closest('.vp-table-block')) return

  const block = document.createElement('div')
  block.className = 'vp-table-block'
  block.dataset.vpTableIndex = String(index0 + 1)
  const toolbar = document.createElement('div')
  toolbar.className = 'vp-table-toolbar'
  toolbar.setAttribute('role', 'toolbar')
  toolbar.setAttribute(
    'aria-label',
    t('表格导出', 'Table export'),
  )

  const mk = (action: 'copy' | 'csv' | 'xlsx', label: string, short: string) => {
    const b = document.createElement('button')
    b.type = 'button'
    b.className = 'vp-table-tool-btn'
    b.dataset.tableAction = action
    b.textContent = short
    b.setAttribute('aria-label', label)
    b.title = label
    return b
  }

  toolbar.append(
    mk('copy', t('复制为 CSV 文本到剪贴板', 'Copy as CSV to clipboard'), t('复制', 'Copy')),
    mk('csv', t('下载为 CSV 文件', 'Download CSV file'), 'CSV'),
    mk('xlsx', t('下载为 Excel 文件 (.xlsx)', 'Download Excel (.xlsx)'), 'XLSX'),
  )

  const sc = document.createElement('div')
  sc.className = 'vp-table-scroll'
  const parent = table.parentNode
  if (!parent) return
  parent.insertBefore(block, table)
  sc.appendChild(table)
  block.append(toolbar, sc)
}

function getContentRoots(): HTMLElement[] {
  const seen = new Set<HTMLElement>()
  for (const q of PAGE_CONTENT_QUERIES) {
    document.querySelectorAll(q).forEach((el) => {
      if (el instanceof HTMLElement) seen.add(el)
    })
  }
  if (seen.size) return [...seen]
  document.querySelectorAll('[vp-content]').forEach((el) => {
    if (el instanceof HTMLElement && el.closest('.vp-theme-container')) seen.add(el)
  })
  return [...seen]
}

export function enhanceContentTables() {
  const roots = getContentRoots()
  if (!roots.length) return
  let globalIndex = 0
  roots.forEach((root) => {
    const raw = Array.from(root.querySelectorAll('table')) as HTMLTableElement[]
    const toWrap = raw.filter((t) => !t.closest('.vp-table-block'))
    toWrap.forEach((table) => {
      wrapTable(table, globalIndex)
      globalIndex += 1
    })
  })
}

function scheduleTableEnhanceDebounced() {
  if (typeof window === 'undefined') return
  if (enhanceDebounceT != null) clearTimeout(enhanceDebounceT)
  enhanceDebounceT = setTimeout(() => {
    enhanceDebounceT = null
    enhanceContentTables()
  }, ENHANCE_DEBOUNCE_MS)
}

/**
 * Content 常略晚于路由/commit 才插入 DOM，单次 nextTick+RAF 会错过表格，需观察子树或延时补跑。
 */
export function startTableEnhanceObserver() {
  if (
    tableEnhanceObserverActive
    || typeof window === 'undefined'
    || typeof MutationObserver === 'undefined'
  ) {
    return
  }
  tableEnhanceObserverActive = true

  const connect = () => {
    if (tableDomObserver) return
    const target =
      document.querySelector('.vp-theme-container') || document.querySelector('main') || document.body
    if (!target) return
    tableDomObserver = new MutationObserver(() => {
      scheduleTableEnhanceDebounced()
    })
    tableDomObserver.observe(target, { childList: true, subtree: true })
    enhanceContentTables()
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', connect, { once: true })
  } else {
    connect()
  }
}

export function stopTableEnhanceObserver() {
  tableDomObserver?.disconnect()
  tableDomObserver = null
  tableEnhanceObserverActive = false
  if (enhanceDebounceT != null) {
    clearTimeout(enhanceDebounceT)
    enhanceDebounceT = null
  }
}

export function setupTableToolbar() {
  if (toolbarListenerAttached) return
  document.addEventListener('click', onToolbarClick)
  toolbarListenerAttached = true
}

export function teardownTableToolbar() {
  if (toolbarListenerAttached) {
    document.removeEventListener('click', onToolbarClick)
    toolbarListenerAttached = false
  }
  stopTableEnhanceObserver()
}
