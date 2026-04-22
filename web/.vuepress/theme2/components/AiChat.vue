<template>
  <div :class="['ai-chat-root', { 'dark': isDark }]">
    <aside :class="['chat-sidebar', { 'sidebar-open': sidebarOpen }]">
      <div class="sidebar-header">
        <button class="sidebar-new-btn" @click="startNewChat" :disabled="isLoading">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          <span>{{ t('newChat') }}</span>
        </button>
      </div>
      <div class="sidebar-history">
        <div v-if="chatHistory.length === 0" class="sidebar-empty">
          {{ isEn ? 'No conversations yet' : '暂无对话记录' }}
        </div>
        <div
          v-for="(chat, idx) in chatHistory"
          :key="idx"
          :class="['sidebar-item', { active: activeChatIndex === idx }]"
          @click="switchChat(idx)"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          <span class="sidebar-item-title">{{ chat.title }}</span>
          <button class="sidebar-item-delete" @click.stop="deleteChat(idx)" :title="isEn ? 'Delete' : '删除'">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
      </div>
      <div class="sidebar-footer">
        <button class="sidebar-icon-btn" @click="toggleTheme" :title="isDark ? (isEn ? 'Light mode' : '浅色模式') : (isEn ? 'Dark mode' : '深色模式')">
          <svg v-if="isDark" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
          <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
        </button>
      </div>
    </aside>

    <div class="sidebar-overlay" v-if="sidebarOpen" @click="sidebarOpen = false"></div>

    <main class="chat-main">
      <header class="chat-header">
        <button class="header-menu-btn" @click="sidebarOpen = !sidebarOpen" :title="isEn ? 'Menu' : '菜单'">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
        <h1 class="header-title">
          <span v-if="isLoading && loadingPhase === 'router'" class="header-title-pulse">{{ t('routerPhase') }}</span>
          <span v-else>{{ t('toolbarTitle') }}</span>
        </h1>
        <div class="header-actions">
          <button class="header-icon-btn" @click="toggleTheme" :title="isDark ? (isEn ? 'Light mode' : '浅色模式') : (isEn ? 'Dark mode' : '深色模式')">
            <svg v-if="isDark" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          </button>
          <button class="header-icon-btn" @click="startNewChat" :disabled="isLoading" :title="t('newChat')">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
          </button>
        </div>
      </header>

      <div class="chat-messages" ref="messagesContainer">
        <div v-if="messages.length === 0" class="chat-welcome">
          <p class="welcome-eyebrow">{{ t('welcomeEyebrow') }}</p>
          <div class="welcome-icon-wrap">
            <div class="welcome-icon">
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            </div>
          </div>
          <h2 class="welcome-title">{{ t('welcomeTitle') }}</h2>
          <p class="welcome-desc">{{ t('welcomeDesc') }}</p>
          <div class="suggested-grid">
            <button
              v-for="(question, index) in suggestedQuestions"
              :key="index"
              class="suggested-card"
              @click="sendSuggested(question)"
              :disabled="isLoading"
            >
              <span class="suggested-card-text">{{ question }}</span>
              <svg class="suggested-card-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
          </div>
        </div>

        <div
          v-for="(message, index) in messages"
          :key="index"
          :class="['chat-message', message.role === 'user' ? 'user-message' : 'assistant-message']"
        >
          <div class="message-row" :class="{ 'is-assistant-stack': message.role === 'assistant' }">
            <div v-if="message.role === 'assistant'" class="message-avatar assistant-avatar">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a4 4 0 0 0-4 4v2H6a2 2 0 0 0-2 2v10h16V10a2 2 0 0 0-2-2h-2V6a4 4 0 0 0-4-4z"/><circle cx="9" cy="14" r="1" fill="currentColor"/><circle cx="15" cy="14" r="1" fill="currentColor"/></svg>
            </div>
            <div v-if="message.role === 'assistant'" class="assistant-column">
              <div
                v-if="message.processSteps && message.processSteps.length"
                class="assistant-process"
                aria-label="process"
              >
                <p class="assistant-process-title">{{ t('processTitle') }}</p>
                <ul class="assistant-process-list">
                  <li
                    v-for="(ps, pi) in message.processSteps"
                    :key="pi"
                    :class="['process-step', 'process-step--' + (ps.status || 'done')]"
                  >
                    <span class="process-step-icon" aria-hidden="true">
                      <span class="process-step-dot"></span>
                      <span class="process-step-check">✓</span>
                    </span>
                    <div class="process-step-main">
                      <span class="process-step-text">{{ ps.label }}</span>
                      <span v-if="ps.detail" class="process-step-detail">{{ ps.detail }}</span>
                    </div>
                  </li>
                </ul>
              </div>
              <details
                v-if="message.reasoning && String(message.reasoning).trim()"
                class="assistant-reasoning"
                :open="isLoading && index === messages.length - 1 && !getMessageText(message, index)"
              >
                <summary class="assistant-reasoning-summary">{{ t('reasoningTitle') }}</summary>
                <div class="assistant-reasoning-body">{{ message.reasoning }}</div>
              </details>
              <div class="message-content assistant-content">
                <div v-html="renderMessageHtml(message, index)"></div>
                <div
                  v-if="isLoading && message.role === 'assistant' && !message.content && !message.reasoning && index === messages.length - 1"
                  class="typing-dots"
                  role="status"
                >
                  <span></span><span></span><span></span>
                </div>
                <div
                  v-else-if="isLoading && message.role === 'assistant' && (message.reasoning && !message.content) && index === messages.length - 1"
                  class="typing-dots typing-dots--after-reasoning"
                  role="status"
                  :aria-label="t('answerStarting')"
                >
                  <span></span><span></span><span></span>
                </div>
              </div>
            </div>
            <div v-else class="message-content user-content">
              {{ getMessageText(message, index) }}
            </div>
            <div v-if="message.role === 'user'" class="message-avatar user-avatar">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
          </div>
        </div>
      </div>

      <div class="chat-input-wrapper">
        <div class="chat-input-box">
          <textarea
            ref="inputRef"
            v-model="userInput"
            @keydown.enter.exact.prevent="sendMessage"
            @input="autoResize"
            :placeholder="t('inputPlaceholder')"
            :disabled="isLoading || !config"
            rows="1"
            class="chat-textarea"
          ></textarea>
          <button
            class="send-btn"
            @click="sendMessage"
            :disabled="isLoading || !userInput.trim() || !config"
            :title="t('send')"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          </button>
        </div>
        <p class="input-hint">{{ isEn ? 'AI may produce inaccurate information. Press Enter to send.' : 'AI 可能产生不准确的信息，按 Enter 发送' }}</p>
      </div>
    </main>
  </div>
</template>

<script>
import katex from 'katex'
import 'katex/dist/katex.min.css'

import sidebarConfig from '../../sidebar.ts'
import sidebarConfigEn from '../../sidebar-en.ts'

function normalizeApiEndpoint(rawEndpoint) {
  if (typeof rawEndpoint !== 'string') return '/api/ai/v1/chat/completions'

  const endpoint = rawEndpoint.trim()
  if (!endpoint) return '/api/ai/v1/chat/completions'

  if (/^https?:\/\//i.test(endpoint)) {
    try {
      const url = new URL(endpoint, window.location.origin)
      if (url.origin === window.location.origin) {
        return url.pathname + url.search + url.hash
      }
    } catch (e) {
      return '/api/ai/v1/chat/completions'
    }

    return '/api/ai/v1/chat/completions'
  }

  return endpoint.startsWith('/') ? endpoint : `/${endpoint}`
}

function sanitizeClientConfig(config) {
  const nextConfig = Object.assign({}, config || {})
  delete nextConfig.apiKey
  nextConfig.apiEndpoint = normalizeApiEndpoint(nextConfig.apiEndpoint)
  if (nextConfig.twoPhaseRetrieval === undefined) {
    nextConfig.twoPhaseRetrieval = true
  }
  if (nextConfig.routerTemperature == null) {
    nextConfig.routerTemperature = 0.2
  }
  if (nextConfig.twoPhaseContextCharBudget == null) {
    nextConfig.twoPhaseContextCharBudget = 45000
  }
  if (nextConfig.routerMaxPaths == null) {
    nextConfig.routerMaxPaths = 8
  }
  if (nextConfig.stream === undefined) {
    nextConfig.stream = true
  }
  if (!nextConfig.routerModel) {
    nextConfig.routerModel = nextConfig.model
  }
  return nextConfig
}

function normalizeDocPath(path) {
  if (typeof path !== 'string' || !path.trim()) return ''

  const trimmed = path.trim()
  if (/^https?:\/\//i.test(trimmed)) return trimmed
  if (trimmed === '/') return trimmed
  if (/[.#?]$/.test(trimmed)) return trimmed
  return trimmed.endsWith('/') ? trimmed : `${trimmed}/`
}

function collectSidebarChildren(children, entries) {
  if (!Array.isArray(children)) return

  for (const child of children) {
    if (Array.isArray(child) && child.length >= 2) {
      const path = normalizeDocPath(child[0])
      const title = child[1]
      if (path && title) {
        entries.push({ title, path })
      }
      continue
    }

    if (child && typeof child === 'object') {
      const path = normalizeDocPath(child.path)
      if (path && child.title) {
        entries.push({ title: child.title, path })
      }

      collectSidebarChildren(child.children, entries)
    }
  }
}

function buildSidebarEntries(sidebarConfigObject) {
  const rawEntries = []
  const groups = Object.values(sidebarConfigObject || {})

  for (const group of groups) {
    if (Array.isArray(group)) {
      collectSidebarChildren(group, rawEntries)
    }
  }

  const uniqueEntries = []
  const seen = new Set()

  for (const entry of rawEntries) {
    const key = `${entry.title}@@${entry.path}`
    if (seen.has(key)) continue
    seen.add(key)
    uniqueEntries.push(entry)
  }

  return uniqueEntries
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

// 占位符用私有区字符包裹，避免 %%、_ 等与下划线斜体/其它 Markdown 规则冲突后无法还原（此前会出现 %%KATEX2%% 等残片）
const KATEX_PLACEHOLDER_START = '\uE000K'
const KATEX_PLACEHOLDER_END = '\uE001'

function renderKatex(text) {
  const placeholders = []
  let nextText = String(text || '')

  function pushPlaceholder(source, displayMode) {
    const id = placeholders.length

    try {
      placeholders.push(katex.renderToString(source.trim(), { displayMode, throwOnError: false }))
    } catch (error) {
      placeholders.push(escapeHtml(source))
    }

    return `${KATEX_PLACEHOLDER_START}${id}${KATEX_PLACEHOLDER_END}`
  }

  nextText = nextText.replace(/\$\$([\s\S]+?)\$\$/g, function(_, source) {
    return pushPlaceholder(source, true)
  })

  nextText = nextText.replace(/\\\[([\s\S]+?)\\\]/g, function(_, source) {
    return pushPlaceholder(source, true)
  })

  nextText = nextText.replace(/\\\(([\s\S]+?)\\\)/g, function(_, source) {
    return pushPlaceholder(source, false)
  })

  nextText = nextText.replace(/(^|[^\\$])\$([^$\n]+)\$/g, function(_, prefix, source) {
    return prefix + pushPlaceholder(source, false)
  })

  return {
    text: nextText,
    placeholders
  }
}

function renderInlineMarkdown(text, placeholders) {
  let html = escapeHtml(text)

  // 先展开数学占位符，再跑粗体/斜体/链接，避免 KATEX 下划线或 % 与 Markdown 规则相互破坏
  html = html
    .replace(/\uE000K(\d+)\uE001/g, function (_, id) {
      return placeholders[Number(id)] || ''
    })
    .replace(/%%KATEX_(\d+)%%/g, function (_, id) {
      return placeholders[Number(id)] || ''
    })
    // 少数情况下模型/残存文本会少写一个下划线
    .replace(/%%KATEX(\d+)%%/g, function (_, id) {
      return placeholders[Number(id)] || ''
    })

  html = html.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+|\/[A-Za-z0-9\-_/]+\/?(?:#[A-Za-z0-9\-_]+)?)\)/g, function(_, label, href) {
    return `<a href="${href}" class="chat-link">${label}</a>`
  })

  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
  html = html.replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g, '$1<em>$2</em>')
  html = html.replace(/(^|[^_])_([^_\n]+)_(?!_)/g, '$1<em>$2</em>')

  html = html.replace(/(^|\s)(https?:\/\/[^\s<]+)/g, function(_, prefix, href) {
    return `${prefix}<a href="${href}" class="chat-link">${href}</a>`
  })

  html = html.replace(/(^|\s)(\/[A-Za-z0-9\-_/]+\/?(?:#[A-Za-z0-9\-_]+)?)/g, function(_, prefix, href) {
    return `${prefix}<a href="${href}" class="chat-link">${href}</a>`
  })

  return html
}

function splitTableRowCells(line) {
  const t = String(line).trim()
  if (!t.includes('|')) return []
  const raw = t.startsWith('|') ? t : `|${t}`
  const withEnd = raw.endsWith('|') ? raw : `${raw}|`
  const segs = withEnd.split('|')
  // 去掉因首尾 | 产生的空段
  return segs.slice(1, -1).map(s => s.trim())
}

// GFM 表格分隔行：单元格无正文，仅由 :- 与至少一段横线组成
function isTableAlignmentLine(line) {
  const parts = splitTableRowCells(line)
  if (parts.length < 1) return false
  return parts.every(p => /^[:\-|\s]+$/.test(p) && /-/.test(p) && !/[0-9A-Za-z\u4e00-\u9fff]/.test(p))
}

function isProbableTableRowLine(line) {
  const t = String(line).trim()
  if (!t.includes('|')) return false
  if (isTableAlignmentLine(t)) return false
  return splitTableRowCells(t).length >= 1
}

function renderTableHtml(headerLine, bodyLines, placeholders) {
  const headerCells = splitTableRowCells(headerLine)
  if (headerCells.length === 0) return ''
  const colCount = headerCells.length
  const th = headerCells.map(c => `<th>${renderInlineMarkdown(c, placeholders)}</th>`).join('')

  const trs = bodyLines.map(rowLine => {
    let cells = splitTableRowCells(rowLine)
    if (cells.length < colCount) {
      while (cells.length < colCount) cells.push('')
    } else if (cells.length > colCount) {
      cells = cells.slice(0, colCount)
    }
    return `<tr>${cells.map(c => `<td>${renderInlineMarkdown(c, placeholders)}</td>`).join('')}</tr>`
  })

  return `<div class="chat-md-table-wrap"><table class="chat-md-table"><thead><tr>${th}</tr></thead><tbody>${trs.join('')}</tbody></table></div>`
}

function renderLinkedHtml(text) {
  const katexResult = renderKatex(text)
  const lines = katexResult.text.split('\n')
  const html = []
  let i = 0

  while (i < lines.length) {
    const raw = lines[i]
    const trimmed = String(raw).trim()

    if (!trimmed) {
      i++
      continue
    }

    // GFM 表格：表头行 + 分隔行 + 若干数据行（首行在分隔线之后必须仍是 | 行，否则视为假表头）
    if (i + 1 < lines.length) {
      const nextTrim = String(lines[i + 1]).trim()
      if (isProbableTableRowLine(trimmed) && isTableAlignmentLine(nextTrim)) {
        const firstData = i + 2 < lines.length ? String(lines[i + 2]).trim() : ''
        const isRealTable = !firstData || isProbableTableRowLine(String(lines[i + 2]))
        if (isRealTable) {
          const body = []
          let j = i + 2
          while (j < lines.length) {
            const rowT = String(lines[j]).trim()
            if (!rowT) break
            if (!isProbableTableRowLine(rowT)) break
            body.push(rowT)
            j++
          }
          html.push(renderTableHtml(trimmed, body, katexResult.placeholders))
          i = j
          continue
        }
      }
    }

    const headingMatch = trimmed.match(/^(#{1,6})\s+(.+)$/)
    if (headingMatch) {
      const level = headingMatch[1].length
      html.push(
        `<h${level}>${renderInlineMarkdown(headingMatch[2], katexResult.placeholders)}</h${level}>`
      )
      i++
      continue
    }

    if (trimmed.startsWith('>')) {
      const bq = []
      while (i < lines.length) {
        const lt = String(lines[i]).trim()
        if (!lt) break
        if (!lt.startsWith('>')) break
        bq.push(lt.replace(/^>\s?/, ''))
        i++
      }
      const inner = bq.map(l => renderInlineMarkdown(l, katexResult.placeholders)).join('<br/>')
      html.push(`<blockquote class="chat-md-blockquote">${inner}</blockquote>`)
      continue
    }

    html.push(`<p>${renderInlineMarkdown(raw, katexResult.placeholders)}</p>`)
    i++
  }

  return sanitizeGeneratedHtml(html.join(''))
}

// Strip dangerous attributes from AI-generated HTML to mitigate XSS
function sanitizeGeneratedHtml(html) {
  if (typeof window === 'undefined') return html
  const template = document.createElement('template')
  template.innerHTML = html
  const walker = document.createTreeWalker(template.content, NodeFilter.SHOW_ELEMENT)
  while (walker.nextNode()) {
    const el = walker.currentNode
    for (const attr of [...el.attributes]) {
      const name = attr.name.toLowerCase()
      if (name.startsWith('on') || name === 'srcdoc' || name === 'javascript:') {
        el.removeAttribute(attr.name)
      }
      if (name === 'href' || name === 'src') {
        const val = attr.value.trim().toLowerCase()
        if (val.startsWith('javascript:') || val.startsWith('data:') || val.startsWith('vbscript:')) {
          el.removeAttribute(attr.name)
        }
      }
    }
  }
  return template.innerHTML
}

const zhSidebarEntries = buildSidebarEntries(sidebarConfig)
const enSidebarEntries = buildSidebarEntries(sidebarConfigEn)

const HISTORY_KEY = 'cislunar-chat-history'
const THEME_KEY = 'cislunar-chat-theme'

function loadChatHistory() {
  try {
    const raw = localStorage.getItem(HISTORY_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed
  } catch {
    return []
  }
}

function saveChatHistory(history) {
  try {
    const toSave = history.slice(0, 30)
    localStorage.setItem(HISTORY_KEY, JSON.stringify(toSave))
  } catch {}
}

function getSystemTheme() {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

function loadTheme() {
  try {
    const saved = localStorage.getItem(THEME_KEY)
    if (saved === 'dark') return true
    if (saved === 'light') return false
  } catch {}
  return getSystemTheme()
}

export default {
  name: 'AiChat',
  data() {
    return {
      userInput: '',
      messages: [],
      isLoading: false,
      config: null,
      abortController: null,
      suggestedQuestions: [],
      isDark: loadTheme(),
      sidebarOpen: false,
      chatHistory: loadChatHistory(),
      activeChatIndex: -1,
      siteIndex: { zh: [], en: [] },
      siteContext: null,
      contextLoadPromise: null,
      useTwoPhase: false,
      loadingPhase: ''
    }
  },
  computed: {
    isEn() {
      return (typeof window !== 'undefined' && window.location.pathname.startsWith('/en/'))
    }
  },
  async mounted() {
    this.updateSuggestedQuestions()
    await this.loadConfig()
    this.applyTheme()
  },
  watch: {
    isEn() {
      this.updateSuggestedQuestions()
      if (this.config) {
        this.config.systemPrompt = this.getSystemPrompt()
      }
    },
    isDark() {
      this.applyTheme()
    }
  },
  beforeUnmount() {
    this.abortRequest()
  },
  methods: {
    applyTheme() {
      document.documentElement.setAttribute('data-chat-theme', this.isDark ? 'dark' : 'light')
    },

    toggleTheme() {
      this.isDark = !this.isDark
      try {
        localStorage.setItem(THEME_KEY, this.isDark ? 'dark' : 'light')
      } catch {}
    },

    autoResize() {
      this.$nextTick(() => {
        const el = this.$refs.inputRef
        if (!el) return
        el.style.height = 'auto'
        el.style.height = Math.min(el.scrollHeight, 200) + 'px'
      })
    },

    getChatTitle(messages) {
      const first = messages.find(m => m.role === 'user')
      if (!first) return this.isEn ? 'New Chat' : '新对话'
      const text = first.content.slice(0, 30)
      return text.length < first.content.length ? text + '...' : text
    },

    saveCurrentChat() {
      if (this.messages.length === 0) return

      const title = this.getChatTitle(this.messages)
      const entry = { title, messages: JSON.parse(JSON.stringify(this.messages)), timestamp: Date.now() }

      if (this.activeChatIndex >= 0 && this.activeChatIndex < this.chatHistory.length) {
        this.chatHistory[this.activeChatIndex] = entry
      } else {
        this.chatHistory.unshift(entry)
        this.activeChatIndex = 0
      }

      this.chatHistory = this.chatHistory.filter(chat => chat.messages && chat.messages.length > 0)
      saveChatHistory(this.chatHistory)
    },

    switchChat(idx) {
      if (this.isLoading) return
      this.saveCurrentChat()
      if (idx >= 0 && idx < this.chatHistory.length) {
        this.activeChatIndex = idx
        this.messages = JSON.parse(JSON.stringify(this.chatHistory[idx].messages))
      }
      this.sidebarOpen = false
    },

    deleteChat(idx) {
      this.chatHistory = this.chatHistory.filter((_, i) => i !== idx)
      if (this.activeChatIndex === idx) {
        this.activeChatIndex = -1
        this.messages = []
      } else if (this.activeChatIndex > idx) {
        this.activeChatIndex--
      }
      saveChatHistory(this.chatHistory)
    },

    getMessageText(message, index) {
      if (
        message &&
        message.role === 'assistant' &&
        !message.content &&
        this.isLoading &&
        index === this.messages.length - 1
      ) {
        return ''
      }

      return message.content
    },

    renderMessageHtml(message, index) {
      const text = this.getMessageText(message, index)
      if (!text && this.isLoading && index === this.messages.length - 1) return ''
      const html = renderLinkedHtml(text || '')
      if (this.isLoading && index === this.messages.length - 1 && text) {
        return html + '<span class="cursor-blink">|</span>'
      }
      return html
    },

    t(key) {
      const strings = {
        toolbarTitle: { zh: 'AI 问答', en: 'AI Chat' },
        newChat: { zh: '新对话', en: 'New Chat' },
        welcomeEyebrow: { zh: '地月空间入门指南', en: "Cislunar Space Guide" },
        welcomeTitle: { zh: '地月空间 AI 助手', en: 'Cislunar Space AI Assistant' },
        welcomeDesc: {
          zh: '将先在全站页面中定位相关条目，再基于正文节选与站点索引组织回答',
          en: 'We first find relevant site pages, then answer using their excerpts and the site link index'
        },
        inputPlaceholder: { zh: '输入你的问题...', en: 'Type your question...' },
        send: { zh: '发送', en: 'Send' },
        thinking: { zh: '正在思考...', en: 'Thinking...' },
        routerPhase: { zh: '正在匹配全站相关页面…', en: 'Matching site pages…' },
        processTitle: { zh: '处理过程', en: 'Progress' },
        reasoningTitle: { zh: '思考过程', en: 'Reasoning' },
        answerStarting: { zh: '开始输出回答', en: 'Answer starting' },
        stepNav: { zh: '全站导览，匹配相关页面', en: 'Site map: pick relevant pages' },
        stepExcerpt: { zh: '载入相关页面正文节选', en: 'Load page text excerpts' },
        stepAnswer: { zh: '整理并输出回答', en: 'Compose final answer' },
        stepAnswerAlone: { zh: '正在请求模型并生成回答', en: 'Requesting model and generating' },
        noStrongMatch: { zh: '未在地图中精确定位，将结合全站索引回答', en: 'No strong match; answering with full site index' },
        configError: {
          zh: 'AI 配置加载失败，请检查 /ai-chat-config.json。',
          en: 'AI configuration failed to load. Please check /ai-chat-config.json.'
        },
        emptyReply: {
          zh: '抱歉，未获取到有效回复。',
          en: 'Sorry, no valid response was received.'
        },
        networkError: {
          zh: '请求失败，请检查网络或服务器代理配置。',
          en: 'Request failed. Please check the network or server proxy configuration.'
        }
      }

      const item = strings[key]
      if (!item) return key
      return this.isEn ? item.en : item.zh
    },

    updateSuggestedQuestions() {
      this.suggestedQuestions = this.isEn
        ? [
            'What is cislunar space?',
            'What is the CR3BP model?',
            'What are the characteristics of NRHO orbits?',
            'What are Lagrange points used for?'
          ]
        : [
            '什么是地月空间？',
            'CR3BP 模型是什么？',
            '有谁在研究地月空间？',
            '地月空间研究前沿是什么？'
          ]
    },

    async loadConfig() {
      try {
        const url = '/ai-chat-config.json'
        const response = await fetch(url, { cache: 'no-store' })
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`)
        }

        this.config = sanitizeClientConfig(await response.json())
        this.config.systemPrompt = this.getSystemPrompt()

        try {
          const idxRes = await fetch('/ai-chat-index.json', { cache: 'no-store' })
          if (idxRes.ok) {
            this.siteIndex = await idxRes.json()
            this.useTwoPhase = this.config.twoPhaseRetrieval !== false
          } else {
            this.siteIndex = { zh: [], en: [] }
            this.useTwoPhase = false
          }
        } catch (e) {
          this.siteIndex = { zh: [], en: [] }
          this.useTwoPhase = false
        }
      } catch (error) {
        this.config = null
        this.useTwoPhase = false
        this.messages = [{ role: 'assistant', content: `${this.t('configError')} ${error.message}` }]
      }
    },

    getSidebarIndexText() {
      const entries = this.isEn ? enSidebarEntries : zhSidebarEntries
      return entries.map((entry) => `- ${entry.title}: ${entry.path}`).join('\n')
    },

    getAnswerRulesBlock() {
      if (this.isEn) {
        return `You are the AI assistant for the Cislunar Space Beginner's Guide (cislunar space). Answer in English: concise, accurate, and professional.

When "Relevant page excerpts" are provided in the system message, prioritize them to structure your answer. If they are insufficient, you may add general knowledge about cislunar orbits and missions, and clearly label what comes from the excerpts vs. your general knowledge.

Use clickable Markdown links for this site, e.g. [CR3BP](/en/glossary/cr3bp/). Only link paths that exist in the site index supplied in the same message. Do not invent URLs. Use $...$ and $$...$$ for LaTeX. Prefer clear Markdown structure (headings, lists, tables).`
      }
      return `你是地月空间入门指南网站的 AI 问答助手。请使用中文回答，保持简洁、准确、专业。

若系统消息中提供了「本站节选」，请优先依据节选组织回答；若节选不足，可补充航天与轨道力学方面的通用知识，并明确区分「摘自本站」与「通用知识」。

引用本站时请使用可点击的 Markdown 链接，例如 [地月空间环境](/what-is-cislunarspace/environment/)。同一消息中提供的「站点索引」所列路径均为真实页面，仅可链接其中存在的路径；不要编造 URL。数学公式使用 $ 与 $$ 与 LaTeX。回答结构清晰，适当使用标题与列表。`
    },

    getSystemPrompt() {
      const index = this.getSidebarIndexText()
      if (this.isEn) {
        return `${this.getAnswerRulesBlock()}\n\nSite index (for valid links):\n${index}`
      }
      return `${this.getAnswerRulesBlock()}\n\n站点索引（用于核对可引用链接）：\n${index}`
    },

    getAnswerSystemWithRetrieved(excerptText) {
      const index = this.getSidebarIndexText()
      if (this.isEn) {
        return `${this.getAnswerRulesBlock()}\n\n--- Relevant page excerpts (primary source) ---\n${excerptText}\n\n--- Site index (for additional valid links) ---\n${index}`
      }
      return `${this.getAnswerRulesBlock()}\n\n--- 本站节选（回答时优先依据以下内容） ---\n${excerptText}\n\n--- 站点索引（可引用链接列表） ---\n${index}`
    },

    async loadSiteContext() {
      if (this.siteContext) {
        return this.siteContext
      }
      if (this.contextLoadPromise) {
        return this.contextLoadPromise
      }
      this.contextLoadPromise = fetch('/ai-chat-context.json', { cache: 'no-store' })
        .then((r) => {
          if (!r.ok) throw new Error(`HTTP ${r.status}`)
          return r.json()
        })
        .then((data) => {
          this.siteContext = data
          return data
        })
        .catch(() => {
          this.siteContext = { zh: {}, en: {} }
          return this.siteContext
        })
        .finally(() => {
          this.contextLoadPromise = null
        })
      return this.contextLoadPromise
    },

    buildSiteMapText(loc) {
      const rows = this.siteIndex[loc] || []
      return rows.map((r) => `${r.path}\t${r.title}`).join('\n')
    },

    getRouterSystemPrompt() {
      const max = this.config && this.config.routerMaxPaths != null ? this.config.routerMaxPaths : 8
      if (this.isEn) {
        return `You are a site navigation and retrieval planner for the Cislunar Space Beginner's Guide. You ONLY choose page paths that appear in the site map; paths must match exactly (including trailing slash). Task: for the user question, pick between 3 and ${max} of the most relevant paths to answer it (fewer is OK if only a few apply). You may return an empty "paths" array if nothing in the map is relevant. Reply with ONE JSON object only, no other text, no markdown fences, like: {"paths":["/en/some-page/","/en/glossary/foo/"],"rationale":"one short sentence"}. "paths" is an array of strings. Do not fabricate paths.`
      }
      return `你是本站「全站导览与检索」模块。你只能从站点地图里出现的 path 中选择；path 必须与地图逐字一致（含尾部斜杠）。任务：根据用户问题，在地图中挑选约 3～${max} 个最相关的页面（若确实很少相关也可以更少）。若地图中无帮助，"paths" 用空数组。只输出一个 JSON 对象，不要其他文字、不要用 markdown 代码块，例如：{"paths":["/glossary/cr3bp/","/cislunar-orbits/"],"rationale":"一句话说明"}。"paths" 为字符串数组。不要编造不存在的 path。`
    },

    buildRouterUserMessage(historyMessages, currentText) {
      const tail = historyMessages.slice(-6)
      const parts = []
      if (this.isEn) {
        if (tail.length) {
          parts.push('Recent messages (condensed for routing):')
          for (const m of tail) {
            const c = m.content && m.content.length > 500 ? m.content.slice(0, 500) + '…' : m.content
            parts.push(`${m.role}: ${c}`)
          }
          parts.push('')
        }
        parts.push('Current user question:')
        parts.push(currentText)
      } else {
        if (tail.length) {
          parts.push('（以下为近期对话摘要，供理解指代，选页仍以当前问题为主）')
          for (const m of tail) {
            const c = m.content && m.content.length > 500 ? m.content.slice(0, 500) + '…' : m.content
            parts.push(`${m.role}：${c}`)
          }
          parts.push('')
        }
        parts.push('当前用户问题：')
        parts.push(currentText)
      }
      return parts.join('\n')
    },

    normalizePath(p) {
      if (typeof p !== 'string' || !p.trim()) {
        return null
      }
      let x = p.trim()
      if (!x.startsWith('/')) {
        x = `/${x}`
      }
      if (!x.endsWith('/')) {
        x = `${x}/`
      }
      return x
    },

    normalizeAndValidatePaths(rawPaths, loc) {
      const max = (this.config && this.config.routerMaxPaths) || 8
      const map = (loc === 'en' ? this.siteIndex.en : this.siteIndex.zh) || []
      const allowed = new Set(map.map((r) => r.path))
      const out = []
      if (!Array.isArray(rawPaths)) {
        return out
      }
      for (const r of rawPaths) {
        const p = this.normalizePath(r)
        if (p && allowed.has(p) && out.indexOf(p) === -1) {
          out.push(p)
        }
        if (out.length >= max) break
      }
      return out
    },

    parseRouterResponse(raw) {
      if (typeof raw !== 'string' || !raw.trim()) {
        return { paths: [] }
      }
      let s = raw.trim()
      const fence = s.match(/```(?:json)?\s*([\s\S]*?)```/)
      if (fence) {
        s = fence[1].trim()
      }
      try {
        const o = JSON.parse(s)
        const arr = o.paths
        if (Array.isArray(arr)) {
          return { paths: arr }
        }
      } catch (e) {
      }
      return { paths: [] }
    },

    fallbackKeywordPaths(question, loc) {
      const list = (this.siteIndex[loc] || [])
      if (!list.length || !question) {
        return []
      }
      const max = 4
      const q = question.toLowerCase()
      const terms = q.split(/[\s,，。、；!？?]+/).filter((x) => x.length > 1)
      const scored = list
        .map((item) => {
          const hay = `${item.path} ${item.title}`.toLowerCase()
          let s = 0
          for (const t of terms) {
            if (t.length > 1 && hay.includes(t)) {
              s += 3
            }
          }
          for (const ch of question) {
            if (ch.trim() && hay.includes(String(ch).toLowerCase())) {
              s += 0.2
            }
          }
          return { p: item.path, s }
        })
        .filter((x) => x.s > 0)
        .sort((a, b) => b.s - a.s)
      return scored.slice(0, max).map((x) => x.p)
    },

    buildContextBlob(ctx, loc, paths) {
      const bag = loc === 'en' ? ctx.en : ctx.zh
      const budget = (this.config && this.config.twoPhaseContextCharBudget) || 45000
      const parts = []
      let used = 0
      for (const p of paths) {
        const rec = bag[p]
        if (!rec) {
          continue
        }
        const block = `--- ${p}\n# ${rec.title || p}\n\n${rec.text || ''}\n`
        if (used + block.length > budget) {
          const left = Math.max(0, budget - used - 50)
          if (left < 200) {
            break
          }
          parts.push(`${block.slice(0, left)}…\n[${this.isEn ? 'truncated' : '已截断'}]`)
          break
        }
        used += block.length
        parts.push(block)
      }
      return parts.length ? parts.join('\n') : null
    },

    pushProcessStep(assistantMessage, { label, detail = '' }) {
      if (!assistantMessage.processSteps) {
        assistantMessage.processSteps = []
      }
      for (const s of assistantMessage.processSteps) {
        if (s.status === 'running') s.status = 'done'
      }
      assistantMessage.processSteps.push({ label, status: 'running', detail })
    },

    completeLastProcess(assistantMessage, detail) {
      const s = assistantMessage.processSteps
      if (!s || !s.length) return
      const last = s[s.length - 1]
      if (last.status === 'running') last.status = 'done'
      if (detail != null && String(detail).length) {
        last.detail = detail
      }
    },

    finalizeAllProcessSteps(assistantMessage) {
      if (!assistantMessage || !assistantMessage.processSteps) return
      for (const step of assistantMessage.processSteps) {
        if (step.status === 'running') step.status = 'done'
      }
    },

    formatPathList(paths, loc) {
      if (!Array.isArray(paths) || !paths.length) {
        return ''
      }
      const rows = (this.siteIndex[loc] || []) 
      const map = new Map(rows.map((r) => [r.path, r.title]))
      return paths
        .slice(0, 8)
        .map((p) => map.get(p) || p)
        .join(' · ')
    },

    async callChatJson(payload, signal) {
      const res = await fetch(this.config.apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...payload,
          stream: false
        }),
        signal
      })
      if (!res.ok) {
        const t = await res.text()
        throw new Error(`HTTP ${res.status} ${t}`)
      }
      const data = await res.json()
      return data.choices && data.choices[0] && data.choices[0].message
        ? data.choices[0].message.content
        : ''
    },

    startNewChat() {
      this.saveCurrentChat()
      this.abortRequest()
      this.messages = []
      this.userInput = ''
      this.activeChatIndex = -1
    },

    sendSuggested(question) {
      if (this.isLoading) return
      this.userInput = question
      this.sendMessage()
    },

    abortRequest() {
      if (this.abortController) {
        this.abortController.abort()
        this.abortController = null
      }
      this.isLoading = false
      this.loadingPhase = ''
    },

    async sendMessage() {
      const text = this.userInput.trim()
      if (!text || this.isLoading || !this.config) return

      this.messages.push({ role: 'user', content: text })
      this.userInput = ''
      this.isLoading = true
      this.loadingPhase = 'answer'
      this.scrollToBottom()

      if (this.$refs.inputRef) {
        this.$refs.inputRef.style.height = 'auto'
      }

      const assistantMessage = { role: 'assistant', content: '', reasoning: '', processSteps: [] }
      this.messages.push(assistantMessage)

      this.abortController = new AbortController()

      try {
        const maxHistory = Number(this.config.maxHistoryTurns || 10)
        const historyMessages = this.messages
          .slice(0, -1)
          .slice(-maxHistory * 2)
          .map((message) => ({ role: message.role, content: message.content }))

        let systemPrompt = this.getSystemPrompt()
        let usedTwoPhase = false
        const loc = this.isEn ? 'en' : 'zh'
        const indexRows = this.siteIndex[loc] || []
        if (
          this.useTwoPhase &&
          this.config.twoPhaseRetrieval !== false &&
          indexRows.length
        ) {
          try {
            this.loadingPhase = 'router'
            this.pushProcessStep(assistantMessage, { label: this.t('stepNav') })
            const mapText = this.buildSiteMapText(loc)
            const routerUser = this.buildRouterUserMessage(historyMessages, text)
            const routerBody = {
              model: this.config.routerModel || this.config.model,
              max_tokens: 800,
              temperature: this.config.routerTemperature == null ? 0.2 : this.config.routerTemperature,
              messages: [
                { role: 'system', content: this.getRouterSystemPrompt() },
                {
                  role: 'user',
                  content: `${this.isEn ? 'Site map: one line per row as path<tab>title' : '站点地图：每行 path<tab>title'}\n\n${mapText}\n\n---\n\n${routerUser}`
                }
              ]
            }
            const rawRouter = await this.callChatJson(routerBody, this.abortController.signal)
            this.loadingPhase = 'answer'
            let chosen = this.normalizeAndValidatePaths(
              this.parseRouterResponse(rawRouter).paths,
              loc
            )
            if (chosen.length === 0) {
              chosen = this.fallbackKeywordPaths(text, loc)
            }
            if (chosen.length) {
              this.completeLastProcess(assistantMessage, this.formatPathList(chosen, loc) || (this.isEn ? 'ok' : '已选'))
              this.pushProcessStep(assistantMessage, { label: this.t('stepExcerpt') })
              const ctx = await this.loadSiteContext()
              const blob = this.buildContextBlob(ctx, loc, chosen)
              this.completeLastProcess(
                assistantMessage,
                blob
                  ? (this.isEn ? 'Excerpts loaded' : '已载入正文节选')
                  : (this.isEn ? 'Falling back to site index' : '节选为空，改用全站索引')
              )
              if (blob) {
                systemPrompt = this.getAnswerSystemWithRetrieved(blob)
                usedTwoPhase = true
              }
            } else {
              this.completeLastProcess(assistantMessage, this.t('noStrongMatch'))
            }
            this.pushProcessStep(assistantMessage, { label: this.t('stepAnswer') })
          } catch (routerErr) {
            this.loadingPhase = 'answer'
            if (routerErr && routerErr.name === 'AbortError') {
              this.messages.pop()
              this.isLoading = false
              this.loadingPhase = ''
              this.abortController = null
              return
            }
            if (assistantMessage.processSteps && assistantMessage.processSteps.length) {
              this.completeLastProcess(assistantMessage, this.isEn ? 'error' : '导览未成功')
            }
            this.pushProcessStep(assistantMessage, { label: this.t('stepAnswer') })
            systemPrompt = this.getSystemPrompt()
          }
        } else {
          this.loadingPhase = 'answer'
          this.pushProcessStep(assistantMessage, { label: this.t('stepAnswerAlone') })
        }
        if (!usedTwoPhase) {
          systemPrompt = this.getSystemPrompt()
        }

        const useStream = this.config.stream !== false
        const payload = {
          model: this.config.model,
          messages: [{ role: 'system', content: systemPrompt }, ...historyMessages],
          temperature: this.config.temperature == null ? 0.7 : this.config.temperature,
          stream: useStream
        }

        const response = await fetch(this.config.apiEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload),
          signal: this.abortController.signal
        })

        if (!response.ok) {
          throw new Error(`HTTP ${response.status} ${response.statusText}`)
        }

        if (useStream && response.body && response.body.getReader) {
          await this.readStream(response.body.getReader(), assistantMessage)
        } else {
          const data = await response.json()
          const msg = data.choices?.[0]?.message
          assistantMessage.content = msg?.content || this.t('emptyReply')
          if (msg?.reasoning_content) {
            assistantMessage.reasoning = String(msg.reasoning_content)
          }
        }

        if (!assistantMessage.content.trim()) {
          assistantMessage.content = this.t('emptyReply')
        }
      } catch (error) {
        if (error.name === 'AbortError') {
          this.messages.pop()
          return
        }

        assistantMessage.content = `${this.t('networkError')} ${error.message}`
      } finally {
        this.finalizeAllProcessSteps(assistantMessage)
        this.isLoading = false
        this.loadingPhase = ''
        this.abortController = null
        this.saveCurrentChat()
        this.scrollToBottom()
      }
    },

    async readStream(reader, assistantMessage) {
      const decoder = new TextDecoder('utf-8')
      let buffer = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        buffer += decoder.decode(value, { stream: true })
        const lines = buffer.split('\n')
        buffer = lines.pop() || ''

        for (const line of lines) {
          const trimmed = line.trim()
          if (!trimmed || !trimmed.startsWith('data:')) continue

          const data = trimmed.slice(5).trim()
          if (data === '[DONE]') continue

          try {
            const parsed = JSON.parse(data)
            const delta = parsed.choices?.[0]?.delta
            if (delta && delta.reasoning_content) {
              if (!assistantMessage.reasoning) assistantMessage.reasoning = ''
              assistantMessage.reasoning += delta.reasoning_content
              this.scrollToBottom('auto')
            }
            if (delta && delta.content) {
              assistantMessage.content += delta.content
              this.scrollToBottom('auto')
            }
          } catch (error) {
            console.warn('[AiChat] Failed to parse SSE line:', data.slice(0, 100), error)
          }
        }
      }

      if (buffer.trim().startsWith('data:')) {
        const data = buffer.trim().slice(5).trim()
        if (data && data !== '[DONE]') {
          try {
            const parsed = JSON.parse(data)
            const delta = parsed.choices?.[0]?.delta
            if (delta && delta.reasoning_content) {
              if (!assistantMessage.reasoning) assistantMessage.reasoning = ''
              assistantMessage.reasoning += delta.reasoning_content
            }
            if (delta && delta.content) {
              assistantMessage.content += delta.content
            }
          } catch (error) {
            console.warn('[AiChat] Failed to parse buffered SSE data:', data.slice(0, 100), error)
          }
        }
      }

      try {
        reader.cancel()
      } catch (error) {
        console.warn('[AiChat] Failed to cancel stream reader:', error)
      }
    },

    scrollToBottom(behavior) {
      this.$nextTick(() => {
        const container = this.$refs.messagesContainer
        if (!container) return

        container.scrollTo({
          top: container.scrollHeight,
          behavior: behavior || 'smooth'
        })
      })
    }
  }
}
</script>

<style scoped>
.ai-chat-root {
  /* 与站点 vars.scss 深空青对齐 */
  --chat-bg: transparent;
  --chat-bg-secondary: #f0f9ff;
  --chat-bg-tertiary: #e0f2fe;
  --chat-surface: rgba(255, 255, 255, 0.88);
  --chat-surface-2: #ffffff;
  --chat-border: #e2e8f0;
  --chat-text: #334155;
  --chat-text-primary: #0f172a;
  --chat-text-secondary: #64748b;
  --chat-text-tertiary: #94a3b8;
  --chat-accent: #0ea5e9;
  --chat-accent-hover: #0284c7;
  --chat-user-bubble: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
  --chat-user-text: #ffffff;
  --chat-sidebar-bg: rgba(248, 250, 252, 0.92);
  --chat-sidebar-hover: rgba(14, 165, 233, 0.08);
  --chat-sidebar-active: rgba(14, 165, 233, 0.14);
  --chat-input-bg: rgba(255, 255, 255, 0.95);
  --chat-input-border: #cbd5e1;
  --chat-input-focus: #0ea5e9;
  --chat-assistant-surface: rgba(241, 245, 249, 0.85);
  --chat-shadow-sm: var(--shadow-sm, 0 1px 2px rgba(15, 23, 42, 0.05));
  --chat-shadow-md: var(--shadow-md, 0 4px 12px rgba(15, 23, 42, 0.08));
  --chat-shadow-lg: var(--shadow-lg, 0 12px 32px rgba(15, 23, 42, 0.1));
  --chat-glow: 0 0 0 1px rgba(14, 165, 233, 0.12);
  --chat-radius-sm: 8px;
  --chat-radius-md: 12px;
  --chat-radius-lg: 16px;
  --chat-radius-xl: 20px;
  --chat-scrollbar-thumb: #cbd5e1;
  --chat-scrollbar-track: transparent;
  box-sizing: border-box;
}

.ai-chat-root *,
.ai-chat-root *::before,
.ai-chat-root *::after {
  box-sizing: border-box;
}

.ai-chat-root.dark {
  --chat-bg: transparent;
  --chat-bg-secondary: rgba(30, 41, 59, 0.5);
  --chat-bg-tertiary: #334155;
  --chat-surface: rgba(15, 23, 42, 0.75);
  --chat-surface-2: #1e293b;
  --chat-border: #334155;
  --chat-text: #cbd5e1;
  --chat-text-primary: #f1f5f9;
  --chat-text-secondary: #94a3b8;
  --chat-text-tertiary: #64748b;
  --chat-accent: #38bdf8;
  --chat-accent-hover: #7dd3fc;
  --chat-user-bubble: linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%);
  --chat-user-text: #ffffff;
  --chat-sidebar-bg: rgba(15, 23, 42, 0.88);
  --chat-sidebar-hover: rgba(56, 189, 248, 0.1);
  --chat-sidebar-active: rgba(56, 189, 248, 0.16);
  --chat-input-bg: rgba(30, 41, 59, 0.95);
  --chat-input-border: #475569;
  --chat-input-focus: #38bdf8;
  --chat-assistant-surface: rgba(30, 41, 59, 0.65);
  --chat-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.25);
  --chat-shadow-md: 0 4px 12px rgba(0, 0, 0, 0.35);
  --chat-shadow-lg: 0 12px 32px rgba(0, 0, 0, 0.45);
  --chat-glow: 0 0 0 1px rgba(56, 189, 248, 0.2);
  --chat-scrollbar-thumb: #475569;
  --chat-scrollbar-track: transparent;
}

.ai-chat-root {
  display: flex;
  height: 100vh;
  margin: 0;
  width: 100%;
  background: var(--chat-bg);
  color: var(--chat-text);
  font-family: var(--font-family);
  -webkit-font-smoothing: antialiased;
  overflow: hidden;
  transition: background 0.3s ease, color 0.3s ease;
}

.chat-sidebar {
  width: 272px;
  min-width: 272px;
  background: var(--chat-sidebar-bg);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-right: 1px solid var(--chat-border);
  display: flex;
  flex-direction: column;
  transition: background 0.3s ease, border-color 0.3s ease;
}

.sidebar-header {
  padding: 0.75rem;
  border-bottom: 1px solid var(--chat-border);
}

.sidebar-new-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.65rem 0.9rem;
  border: none;
  border-radius: var(--chat-radius-md);
  background: var(--chat-accent);
  color: #fff;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  font-family: var(--font-family-heading);
  box-shadow: var(--chat-glow);
  transition: background 0.2s ease, transform 0.2s var(--ease-out-expo, cubic-bezier(0.16, 1, 0.3, 1));
}

.sidebar-new-btn:hover:not(:disabled) {
  background: var(--chat-accent-hover);
  transform: translateY(-1px);
}

.sidebar-new-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.sidebar-history {
  flex: 1;
  overflow-y: auto;
  padding: 0.5rem;
}

.sidebar-empty {
  text-align: center;
  color: var(--chat-text-tertiary);
  font-size: 0.8125rem;
  padding: 2rem 1rem;
}

.sidebar-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.625rem;
  border-radius: var(--chat-radius-sm);
  cursor: pointer;
  transition: background 0.15s ease;
  color: var(--chat-text-secondary);
  margin-bottom: 2px;
}

.sidebar-item:hover {
  background: var(--chat-sidebar-hover);
  color: var(--chat-text-primary);
}

.sidebar-item.active {
  background: var(--chat-sidebar-active);
  color: var(--chat-text-primary);
}

.sidebar-item-title {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.8125rem;
}

.sidebar-item-delete {
  display: none;
  background: none;
  border: none;
  color: var(--chat-text-tertiary);
  cursor: pointer;
  padding: 2px;
  border-radius: 4px;
  flex-shrink: 0;
}

.sidebar-item:hover .sidebar-item-delete {
  display: flex;
}

.sidebar-item-delete:hover {
  color: #ef4444;
}

.sidebar-footer {
  padding: 0.75rem;
  border-top: 1px solid var(--chat-border);
  display: flex;
  gap: 0.5rem;
}

.sidebar-icon-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: none;
  border-radius: var(--chat-radius-sm);
  background: transparent;
  color: var(--chat-text-secondary);
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;
}

.sidebar-icon-btn:hover {
  background: var(--chat-sidebar-hover);
  color: var(--chat-text-primary);
}

.sidebar-overlay {
  display: none;
}

.chat-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  background: var(--chat-bg);
  transition: background 0.3s ease;
}

.chat-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 1.25rem;
  border-bottom: 1px solid var(--chat-border);
  min-height: 3.25rem;
  background: var(--chat-surface);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: border-color 0.3s ease, background 0.3s ease;
}

.header-menu-btn {
  display: none;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: none;
  border-radius: var(--chat-radius-sm);
  background: transparent;
  color: var(--chat-text-secondary);
  cursor: pointer;
  transition: background 0.15s ease;
}

.header-menu-btn:hover {
  background: var(--chat-sidebar-hover);
}

.header-title {
  font-size: 1rem;
  font-weight: 700;
  font-family: var(--font-family-heading);
  letter-spacing: 0.02em;
  color: var(--chat-text-primary);
  margin: 0;
  border: none;
  padding: 0;
}

.header-title-pulse {
  color: var(--chat-accent);
  font-weight: 600;
  font-size: 0.9rem;
  animation: routerPulse 1.2s ease-in-out infinite;
}

@keyframes routerPulse {
  0%,
  100% { opacity: 0.9; }
  50% { opacity: 0.5; }
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.header-icon-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: none;
  border-radius: var(--chat-radius-sm);
  background: transparent;
  color: var(--chat-text-secondary);
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;
}

.header-icon-btn:hover:not(:disabled) {
  background: var(--chat-sidebar-hover);
  color: var(--chat-text-primary);
}

.header-icon-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 0;
  scroll-behavior: smooth;
}

.chat-messages::-webkit-scrollbar {
  width: 6px;
}

.chat-messages::-webkit-scrollbar-track {
  background: var(--chat-scrollbar-track);
}

.chat-messages::-webkit-scrollbar-thumb {
  background: var(--chat-scrollbar-thumb);
  border-radius: 3px;
}

.chat-messages::-webkit-scrollbar-thumb:hover {
  background: var(--chat-text-tertiary);
}

.sidebar-history::-webkit-scrollbar {
  width: 4px;
}

.sidebar-history::-webkit-scrollbar-track {
  background: transparent;
}

.sidebar-history::-webkit-scrollbar-thumb {
  background: var(--chat-scrollbar-thumb);
  border-radius: 2px;
}

.chat-welcome {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 1.5rem 2rem;
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
  animation: fadeInUp 0.5s var(--ease-out-expo, cubic-bezier(0.16, 1, 0.3, 1));
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}

.welcome-eyebrow {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--chat-accent);
  margin: 0 0 1.25rem;
  padding: 0.35rem 0.85rem;
  border-radius: 999px;
  background: rgba(14, 165, 233, 0.1);
  border: 1px solid rgba(14, 165, 233, 0.22);
  font-family: var(--font-family-heading);
}

.ai-chat-root.dark .welcome-eyebrow {
  background: rgba(56, 189, 248, 0.12);
  border-color: rgba(56, 189, 248, 0.25);
}

.welcome-icon-wrap {
  margin-bottom: 1.35rem;
}

.welcome-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
  color: var(--chat-accent);
  background: linear-gradient(145deg, rgba(14, 165, 233, 0.12) 0%, rgba(2, 132, 199, 0.08) 100%);
  box-shadow: var(--chat-glow), inset 0 1px 0 rgba(255, 255, 255, 0.45);
  border: 1px solid rgba(14, 165, 233, 0.2);
}

.ai-chat-root.dark .welcome-icon {
  background: linear-gradient(145deg, rgba(56, 189, 248, 0.15) 0%, rgba(2, 132, 199, 0.1) 100%);
  box-shadow: var(--chat-glow);
  border-color: rgba(56, 189, 248, 0.3);
}

.welcome-title {
  font-size: clamp(1.35rem, 3.5vw, 1.75rem);
  font-weight: 700;
  font-family: var(--font-family-heading);
  color: var(--chat-text-primary);
  margin: 0 0 0.5rem;
  border: none;
  line-height: 1.3;
}

.welcome-desc {
  font-size: 0.9375rem;
  color: var(--chat-text-secondary);
  margin: 0 0 2rem;
  line-height: 1.6;
}

.suggested-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  width: 100%;
}

.suggested-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0.9rem 1.05rem;
  border: 1px solid var(--chat-border);
  border-radius: var(--chat-radius-md);
  background: var(--chat-surface-2);
  color: var(--chat-text-primary);
  cursor: pointer;
  text-align: left;
  font-size: 0.8125rem;
  line-height: 1.55;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s var(--ease-out-expo, cubic-bezier(0.16, 1, 0.3, 1));
  box-shadow: var(--chat-shadow-sm);
}

.suggested-card:hover:not(:disabled) {
  background: var(--chat-surface-2);
  border-color: var(--chat-accent);
  box-shadow: var(--chat-shadow-md);
  transform: translateY(-2px);
}

.suggested-card:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.suggested-card-text {
  flex: 1;
}

.suggested-card-arrow {
  flex-shrink: 0;
  opacity: 0;
  transition: opacity 0.2s ease, transform 0.2s ease;
  color: var(--chat-accent);
}

.suggested-card:hover .suggested-card-arrow {
  opacity: 1;
  transform: translateX(3px);
}

.chat-message {
  padding: 1.1rem 0;
  animation: messageIn 0.35s var(--ease-smooth, cubic-bezier(0.4, 0, 0.2, 1));
}

@keyframes messageIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

.message-row {
  display: flex;
  gap: 0.75rem;
  max-width: 768px;
  margin: 0 auto;
  padding: 0 1.5rem;
  align-items: flex-start;
}

.message-row.is-assistant-stack {
  align-items: flex-start;
}

.assistant-column {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.assistant-process {
  font-size: 0.8rem;
  line-height: 1.5;
  padding: 0.65rem 0.9rem;
  border-radius: var(--chat-radius-md);
  border: 1px solid var(--chat-border);
  background: rgba(14, 165, 233, 0.06);
  color: var(--chat-text-secondary);
}

.ai-chat-root.dark .assistant-process {
  background: rgba(56, 189, 248, 0.08);
}

.assistant-process-title {
  margin: 0 0 0.45rem;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--chat-accent);
}

.assistant-process-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.process-step {
  display: grid;
  grid-template-columns: 1.125rem minmax(0, 1fr);
  column-gap: 0.5rem;
  align-items: center;
  padding: 0.35rem 0;
  border-bottom: 1px solid var(--chat-border);
}

.process-step:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.process-step-icon {
  grid-column: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.125rem;
  height: 1.125rem;
  box-sizing: border-box;
  flex-shrink: 0;
  background: var(--chat-bg-tertiary);
  border-radius: var(--chat-radius-sm);
}

.process-step-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--chat-text-tertiary);
}

.process-step-check {
  display: none;
  font-size: 0.7rem;
  color: #10b981;
  font-weight: 700;
}

.process-step--running .process-step-dot {
  background: var(--chat-accent);
  animation: processPulse 1s ease-in-out infinite;
}

.process-step--done .process-step-dot {
  display: none;
}

.process-step--done .process-step-check {
  display: block;
}

.process-step-main {
  grid-column: 2;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.process-step-text {
  color: var(--chat-text-primary);
  font-weight: 500;
  line-height: 1.45;
}

.process-step--running .process-step-text {
  color: var(--chat-accent);
}

.process-step-detail {
  font-size: 0.75rem;
  line-height: 1.4;
  color: var(--chat-text-tertiary);
  font-weight: 400;
  word-break: break-word;
}

@keyframes processPulse {
  0%,
  100% { opacity: 1; }
  50% { opacity: 0.4; }
}

.assistant-reasoning {
  font-size: 0.85rem;
  line-height: 1.6;
  border: 1px solid var(--chat-border);
  border-radius: var(--chat-radius-md);
  background: var(--chat-bg-secondary);
  color: var(--chat-text-secondary);
  overflow: hidden;
}

.assistant-reasoning-summary {
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  font-weight: 600;
  color: var(--chat-text-primary);
  list-style: none;
}

.assistant-reasoning-summary::-webkit-details-marker {
  display: none;
}

.assistant-reasoning-body {
  margin: 0;
  padding: 0.5rem 0.75rem 0.75rem;
  border-top: 1px solid var(--chat-border);
  white-space: pre-wrap;
  word-break: break-word;
  max-height: 20rem;
  overflow-y: auto;
}

.user-message {
  background: transparent;
}

.assistant-message {
  background: transparent;
}

.message-avatar {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;
}

.assistant-avatar {
  background: linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%);
  color: #ffffff;
  box-shadow: 0 2px 8px rgba(14, 165, 233, 0.35);
}

.ai-chat-root.dark .assistant-avatar {
  background: linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);
}

.user-avatar {
  background: var(--chat-user-bubble);
  color: #ffffff;
  box-shadow: 0 2px 8px rgba(2, 132, 199, 0.35);
}

.message-content {
  flex: 1;
  min-width: 0;
  line-height: 1.7;
  font-size: 0.9375rem;
  word-break: break-word;
}

.user-content {
  background: var(--chat-user-bubble);
  color: var(--chat-user-text);
  padding: 0.65rem 1.05rem;
  border-radius: var(--chat-radius-lg) var(--chat-radius-lg) 6px var(--chat-radius-lg);
  white-space: pre-wrap;
  box-shadow: 0 2px 8px rgba(2, 132, 199, 0.2);
}

.assistant-content {
  color: var(--chat-text-primary);
  white-space: normal;
  background: var(--chat-assistant-surface);
  border: 1px solid var(--chat-border);
  border-radius: 4px var(--chat-radius-lg) var(--chat-radius-lg) var(--chat-radius-lg);
  padding: 0.75rem 1.05rem;
  box-shadow: var(--chat-shadow-sm);
}

.assistant-content :deep(p) {
  margin: 0 0 0.75rem;
}

.assistant-content :deep(p:last-child) {
  margin-bottom: 0;
}

.assistant-content :deep(.chat-md-blockquote) {
  margin: 0.5rem 0 0.75rem;
  padding: 0.4rem 0.75rem;
  border-left: 3px solid var(--chat-accent, #0ea5e9);
  color: var(--chat-text-secondary, #64748b);
  background: var(--chat-bg-tertiary, rgba(148, 163, 184, 0.12));
  border-radius: 0 4px 4px 0;
  font-size: 0.9em;
}

.assistant-content :deep(.chat-md-table-wrap) {
  margin: 0.5rem 0 0.75rem;
  max-width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.assistant-content :deep(.chat-md-table) {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9em;
  line-height: 1.5;
}

.assistant-content :deep(.chat-md-table th),
.assistant-content :deep(.chat-md-table td) {
  border: 1px solid var(--chat-border, rgba(148, 163, 184, 0.4));
  padding: 0.4rem 0.6rem;
  text-align: left;
  vertical-align: top;
}

.assistant-content :deep(.chat-md-table th) {
  font-weight: 600;
  background: var(--chat-bg-tertiary, rgba(148, 163, 184, 0.15));
}

.assistant-content :deep(h1),
.assistant-content :deep(h2),
.assistant-content :deep(h3),
.assistant-content :deep(h4),
.assistant-content :deep(h5),
.assistant-content :deep(h6) {
  margin: 1rem 0 0.5rem;
  color: var(--chat-text-primary);
  border-bottom: none;
  line-height: 1.35;
}

.assistant-content :deep(h1) { font-size: 1.4rem; }
.assistant-content :deep(h2) { font-size: 1.25rem; }
.assistant-content :deep(h3) { font-size: 1.1rem; }

.assistant-content :deep(strong) {
  font-weight: 700;
  color: var(--chat-text-primary);
}

.assistant-content :deep(em) {
  font-style: italic;
}

.assistant-content :deep(.katex-display) {
  margin: 0.85rem 0;
  overflow-x: auto;
  overflow-y: hidden;
}

.assistant-content :deep(a),
.user-content :deep(a) {
  color: var(--chat-accent);
  text-decoration: none;
  text-underline-offset: 2px;
  border-bottom: 1px solid transparent;
  transition: border-color 0.15s ease;
}

.assistant-content :deep(a:hover),
.user-content :deep(a:hover) {
  color: var(--chat-accent-hover);
  border-bottom-color: var(--chat-accent-hover);
}

.assistant-content :deep(code) {
  background: var(--chat-bg-tertiary);
  padding: 0.15em 0.4em;
  border-radius: 4px;
  font-size: 0.85em;
  font-family: 'SF Mono', 'Fira Code', 'Consolas', monospace;
}

.assistant-content :deep(pre) {
  background: var(--chat-bg-tertiary);
  border-radius: var(--chat-radius-sm);
  padding: 1rem;
  overflow-x: auto;
  margin: 0.75rem 0;
}

.assistant-content :deep(pre code) {
  background: none;
  padding: 0;
  border-radius: 0;
}

.cursor-blink {
  animation: blink 1s step-end infinite;
  color: var(--chat-accent);
  font-weight: 100;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.typing-dots {
  display: flex;
  align-items: center;
  gap: 5px;
  flex-wrap: nowrap;
  box-sizing: border-box;
}

.typing-dots--after-reasoning {
  margin-top: 0.45rem;
  padding-top: 0.45rem;
  border-top: 1px solid var(--chat-border);
}

.typing-dots span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--chat-text-tertiary);
  animation: dotBounce 1.4s infinite ease-in-out;
}

.typing-dots span:nth-child(1) { animation-delay: 0s; }
.typing-dots span:nth-child(2) { animation-delay: 0.2s; }
.typing-dots span:nth-child(3) { animation-delay: 0.4s; }

@keyframes dotBounce {
  0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
  40% { transform: scale(1); opacity: 1; }
}

.chat-input-wrapper {
  padding: 0.75rem 1.5rem 1.1rem;
  background: var(--chat-surface);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-top: 1px solid var(--chat-border);
  transition: background 0.3s ease, border-color 0.3s ease;
}

.chat-input-box {
  max-width: 768px;
  margin: 0 auto;
  display: flex;
  align-items: flex-end;
  gap: 0;
  background: var(--chat-input-bg);
  border: 1px solid var(--chat-input-border);
  border-radius: var(--chat-radius-lg);
  padding: 0.375rem 0.375rem 0.375rem 1rem;
  box-shadow: var(--chat-shadow-md);
  transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.3s ease;
}

.chat-input-box:focus-within {
  border-color: var(--chat-input-focus);
  box-shadow: var(--chat-shadow-md), 0 0 0 3px rgba(14, 165, 233, 0.18);
}

.ai-chat-root.dark .chat-input-box:focus-within {
  box-shadow: var(--chat-shadow-md), 0 0 0 3px rgba(56, 189, 248, 0.2);
}

.chat-textarea {
  flex: 1;
  border: none;
  outline: none;
  resize: none;
  background: transparent;
  color: var(--chat-text-primary);
  font-size: 0.9375rem;
  line-height: 1.5;
  padding: 0.5rem 0;
  max-height: 200px;
  font-family: inherit;
}

.chat-textarea::placeholder {
  color: var(--chat-text-tertiary);
}

.send-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 50%;
  background: var(--chat-accent);
  color: #ffffff;
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.15s ease, opacity 0.15s ease, transform 0.15s ease;
}

.send-btn:hover:not(:disabled) {
  background: var(--chat-accent-hover);
  transform: scale(1.05);
}

.send-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.input-hint {
  text-align: center;
  font-size: 0.75rem;
  color: var(--chat-text-tertiary);
  margin: 0.5rem 0 0;
  padding: 0;
}

@media (max-width: 768px) {
  .ai-chat-root {
    height: 100vh;
    margin: 0;
    width: 100%;
  }

  .chat-sidebar {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 1000;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    box-shadow: none;
  }

  .chat-sidebar.sidebar-open {
    transform: translateX(0);
    box-shadow: var(--chat-shadow-lg);
  }

  .sidebar-overlay {
    display: block;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 999;
    animation: fadeIn 0.2s ease;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .header-menu-btn {
    display: flex;
  }

  .header-actions .header-icon-btn:first-child {
    display: none;
  }

  .suggested-grid {
    grid-template-columns: 1fr;
  }

  .chat-welcome {
    padding: 2rem 1rem 1rem;
  }

  .message-row {
    padding: 0 1rem;
  }

  .chat-input-wrapper {
    padding: 0 0.75rem 0.75rem;
  }
}
</style>
