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
        <h1 class="header-title">{{ t('toolbarTitle') }}</h1>
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
          <div class="welcome-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
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
          <div class="message-row">
            <div v-if="message.role === 'assistant'" class="message-avatar assistant-avatar">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a4 4 0 0 0-4 4v2H6a2 2 0 0 0-2 2v10h16V10a2 2 0 0 0-2-2h-2V6a4 4 0 0 0-4-4z"/><circle cx="9" cy="14" r="1" fill="currentColor"/><circle cx="15" cy="14" r="1" fill="currentColor"/></svg>
            </div>
            <div
              v-if="message.role === 'assistant'"
              class="message-content assistant-content"
              v-html="renderMessageHtml(message, index)"
            ></div>
            <div v-else class="message-content user-content">
              {{ getMessageText(message, index) }}
            </div>
            <div v-if="message.role === 'user'" class="message-avatar user-avatar">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
          </div>
          <div
            v-if="isLoading && message.role === 'assistant' && !message.content && index === messages.length - 1"
            class="typing-dots"
          >
            <span></span><span></span><span></span>
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

    return `%%KATEX_${id}%%`
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

  html = html.replace(/%%KATEX_(\d+)%%/g, function(_, id) {
    return placeholders[Number(id)] || ''
  })

  return html
}

function renderLinkedHtml(text) {
  const katexResult = renderKatex(text)
  const lines = katexResult.text.split('\n')
  const html = []

  for (const line of lines) {
    const trimmed = line.trim()

    if (!trimmed) continue

    const headingMatch = trimmed.match(/^(#{1,6})\s+(.+)$/)
    if (headingMatch) {
      const level = headingMatch[1].length
      html.push(`<h${level}>${renderInlineMarkdown(headingMatch[2], katexResult.placeholders)}</h${level}>`)
      continue
    }

    html.push(`<p>${renderInlineMarkdown(line, katexResult.placeholders)}</p>`)
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
      activeChatIndex: -1
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
      this.chatHistory.splice(idx, 1)
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
        toolbarTitle: { zh: 'AI 问答助手', en: 'AI Chat Assistant' },
        newChat: { zh: '新对话', en: 'New Chat' },
        welcomeTitle: { zh: '地月空间 AI 问答助手', en: 'Cislunar Space AI Assistant' },
        welcomeDesc: {
          zh: '问答助手会根据你的问题，结合本站内容和相关知识进行回答',
          en: 'Ask questions about cislunar space and get AI-powered answers based on this site'
        },
        inputPlaceholder: { zh: '输入你的问题...', en: 'Type your question...' },
        send: { zh: '发送', en: 'Send' },
        thinking: { zh: '正在思考...', en: 'Thinking...' },
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
      } catch (error) {
        this.config = null
        this.messages = [{ role: 'assistant', content: `${this.t('configError')} ${error.message}` }]
      }
    },

    getSystemPrompt() {
      if (this.isEn) {
        const siteIndex = enSidebarEntries
          .map((entry) => `- ${entry.title}: ${entry.path}`)
          .join('\n')

        return `You are the AI assistant for the Cislunar Space Beginner's Guide website. Answer in English, be concise and professional. When relevant, cite real website pages using clickable Markdown links such as [CR3BP](/en/glossary/cr3bp/). Only use pages from the site index below. If information is not from the site, say so clearly.\n\nSite index:\n${siteIndex}`
      }

      const siteIndex = zhSidebarEntries
        .map((entry) => `- ${entry.title}: ${entry.path}`)
        .join('\n')

      return `你是地月空间入门指南网站的 AI 问答助手。请使用中文回答，保持简洁、准确、专业。引用本站内容时，请优先输出可点击的 Markdown 超链接，例如 [地月空间环境](/what-is-cislunarspace/environment/)。只能使用下面站点索引中真实存在的页面；如果内容不是来自本站，请明确说明。\n\n站点索引：\n${siteIndex}`
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
    },

    async sendMessage() {
      const text = this.userInput.trim()
      if (!text || this.isLoading || !this.config) return

      this.messages.push({ role: 'user', content: text })
      this.userInput = ''
      this.isLoading = true
      this.scrollToBottom()

      if (this.$refs.inputRef) {
        this.$refs.inputRef.style.height = 'auto'
      }

      const assistantMessage = { role: 'assistant', content: '' }
      this.messages.push(assistantMessage)

      this.abortController = new AbortController()

      try {
        const maxHistory = Number(this.config.maxHistoryTurns || 10)
        const historyMessages = this.messages
          .slice(0, -1)
          .slice(-maxHistory * 2)
          .map((message) => ({ role: message.role, content: message.content }))

        const payload = {
          model: this.config.model,
          messages: [
            { role: 'system', content: this.config.systemPrompt },
            ...historyMessages
          ],
          temperature: this.config.temperature == null ? 0.7 : this.config.temperature,
          stream: true
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

        if (response.body && response.body.getReader) {
          await this.readStream(response.body.getReader(), assistantMessage)
        } else {
          const data = await response.json()
          assistantMessage.content = data.choices?.[0]?.message?.content || this.t('emptyReply')
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
        this.isLoading = false
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
            const delta = parsed.choices?.[0]?.delta?.content
            if (delta) {
              assistantMessage.content += delta
              this.scrollToBottom('auto')
            }
          } catch (error) {
          }
        }
      }

      if (buffer.trim().startsWith('data:')) {
        const data = buffer.trim().slice(5).trim()
        if (data && data !== '[DONE]') {
          try {
            const parsed = JSON.parse(data)
            const delta = parsed.choices?.[0]?.delta?.content
            if (delta) {
              assistantMessage.content += delta
            }
          } catch (error) {
          }
        }
      }

      try {
        reader.cancel()
      } catch (error) {
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
  --chat-bg: #ffffff;
  --chat-bg-secondary: #f7f7f8;
  --chat-bg-tertiary: #ececf1;
  --chat-border: #c8cdd5;
  --chat-text: #374151;
  --chat-text-primary: #111827;
  --chat-text-secondary: #6b7280;
  --chat-text-tertiary: #9ca3af;
  --chat-accent: #2563eb;
  --chat-accent-hover: #1d4ed8;
  --chat-user-bubble: #2563eb;
  --chat-user-text: #ffffff;
  --chat-sidebar-bg: #f9fafb;
  --chat-sidebar-hover: #f3f4f6;
  --chat-sidebar-active: #e5e7eb;
  --chat-input-bg: #ffffff;
  --chat-input-border: #c8cdd5;
  --chat-input-focus: #2563eb;
  --chat-message-border: #dde1e7;
  --chat-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --chat-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
  --chat-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);
  --chat-radius-sm: 8px;
  --chat-radius-md: 12px;
  --chat-radius-lg: 16px;
  --chat-radius-xl: 24px;
  --chat-scrollbar-thumb: #c1c1c1;
  --chat-scrollbar-track: transparent;
  box-sizing: border-box;
}

.ai-chat-root *,
.ai-chat-root *::before,
.ai-chat-root *::after {
  box-sizing: border-box;
}

.ai-chat-root.dark {
  --chat-bg: #212121;
  --chat-bg-secondary: #2f2f2f;
  --chat-bg-tertiary: #383838;
  --chat-border: #424242;
  --chat-text: #d1d5db;
  --chat-text-primary: #f3f4f6;
  --chat-text-secondary: #9ca3af;
  --chat-text-tertiary: #6b7280;
  --chat-accent: #60a5fa;
  --chat-accent-hover: #93bbfd;
  --chat-user-bubble: #3b82f6;
  --chat-user-text: #ffffff;
  --chat-sidebar-bg: #171717;
  --chat-sidebar-hover: #2a2a2a;
  --chat-sidebar-active: #333333;
  --chat-input-bg: #2f2f2f;
  --chat-input-border: #424242;
  --chat-input-focus: #60a5fa;
  --chat-message-border: #383838;
  --chat-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.3);
  --chat-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
  --chat-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
  --chat-scrollbar-thumb: #555;
  --chat-scrollbar-track: transparent;
}

.ai-chat-root {
  display: flex;
  height: 100vh;
  margin: 0;
  width: 100%;
  background: var(--chat-bg);
  color: var(--chat-text);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
  overflow: hidden;
  transition: background 0.3s ease, color 0.3s ease;
}

.chat-sidebar {
  width: 260px;
  min-width: 260px;
  background: var(--chat-sidebar-bg);
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
  gap: 0.5rem;
  width: 100%;
  padding: 0.6rem 0.75rem;
  border: 1px solid var(--chat-border);
  border-radius: var(--chat-radius-sm);
  background: transparent;
  color: var(--chat-text-primary);
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  transition: background 0.15s ease;
}

.sidebar-new-btn:hover:not(:disabled) {
  background: var(--chat-sidebar-hover);
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
  padding: 0.5rem 1rem;
  border-bottom: 1px solid var(--chat-border);
  min-height: 52px;
  transition: border-color 0.3s ease;
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
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--chat-text-primary);
  margin: 0;
  border: none;
  padding: 0;
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
  padding: 4rem 2rem 2rem;
  max-width: 680px;
  margin: 0 auto;
  text-align: center;
  animation: fadeInUp 0.5s ease;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}

.welcome-icon {
  color: var(--chat-accent);
  margin-bottom: 1.25rem;
  opacity: 0.8;
}

.welcome-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--chat-text-primary);
  margin: 0 0 0.5rem;
  border: none;
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
  padding: 0.875rem 1rem;
  border: 1px solid var(--chat-border);
  border-radius: var(--chat-radius-md);
  background: var(--chat-bg);
  color: var(--chat-text);
  cursor: pointer;
  text-align: left;
  font-size: 0.8125rem;
  line-height: 1.5;
  transition: all 0.2s ease;
  box-shadow: var(--chat-shadow-sm);
}

.suggested-card:hover:not(:disabled) {
  background: var(--chat-bg-secondary);
  border-color: var(--chat-accent);
  box-shadow: var(--chat-shadow-md);
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
  padding: 1.5rem 0;
  animation: messageIn 0.3s ease;
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

.user-message {
  background: transparent;
}

.assistant-message {
  background: var(--chat-bg-secondary);
  border-bottom: 1px solid var(--chat-message-border);
  transition: background 0.3s ease;
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
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: #ffffff;
}

.user-avatar {
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: #ffffff;
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
  padding: 0.625rem 1rem;
  border-radius: var(--chat-radius-lg) var(--chat-radius-lg) 4px var(--chat-radius-lg);
  white-space: pre-wrap;
}

.assistant-content {
  color: var(--chat-text-primary);
  white-space: normal;
}

.assistant-content :deep(p) {
  margin: 0 0 0.75rem;
}

.assistant-content :deep(p:last-child) {
  margin-bottom: 0;
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
  gap: 4px;
  padding: 0 1.5rem;
  max-width: 768px;
  margin: 0.5rem auto 0;
  padding-left: calc(1.5rem + 32px + 0.75rem);
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
  padding: 0 1.5rem 1rem;
  background: var(--chat-bg);
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
  box-shadow: var(--chat-shadow-md), 0 0 0 2px rgba(37, 99, 235, 0.15);
}

.ai-chat-root.dark .chat-input-box:focus-within {
  box-shadow: var(--chat-shadow-md), 0 0 0 2px rgba(96, 165, 250, 0.2);
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

  .typing-dots {
    padding-left: calc(1rem + 32px + 0.75rem);
  }
}
</style>
