<template>
  <div v-if="show" class="copy-page-bottom">
    <button
      class="copy-page-btn"
      :class="{ copied: isCopied }"
      @click="copyPage"
    >
      <svg v-if="!isCopied" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
        <path fill="currentColor" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
        <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
      </svg>
      <span>{{ isCopied ? copiedText : copyText }}</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import { usePage } from 'vuepress/client'

const route = useRoute()
const page = usePage()
const isCopied = ref(false)
let timer: ReturnType<typeof setTimeout> | null = null

const isEn = computed(() => route.path.startsWith('/en/'))
const copyText = computed(() => isEn.value ? 'Copy page' : '复制页面')
const copiedText = computed(() => isEn.value ? 'Copied!' : '已复制')

const show = computed(() => {
  const p = route.path
  if (p === '/' || p === '/en/' || p === '/en') return false
  if (p === '/ai-chat' || p === '/ai-chat/' || p === '/en/ai-chat' || p === '/en/ai-chat/') return false
  const fm = (page.value as any).frontmatter || {}
  if (fm.home) return false
  return true
})

function stripFrontmatter(raw: string): string {
  const match = raw.match(/^---\n[\s\S]*?\n---\n/)
  if (match) {
    return raw.slice(match[0].length)
  }
  return raw
}

async function copyPage() {
  const fm = (page.value as any).frontmatter || {}
  const raw = fm.__rawContent || ''
  if (!raw) return
  const md = stripFrontmatter(raw)
  if (!md) return
  try {
    await navigator.clipboard.writeText(md)
    isCopied.value = true
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => { isCopied.value = false }, 2000)
  } catch (e) {
    console.error('Copy failed:', e)
  }
}

onBeforeUnmount(() => {
  if (timer) clearTimeout(timer)
})
</script>

<style lang="scss">
.copy-page-bottom {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 2.5rem;
  margin-bottom: 1rem;
}

.copy-page-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border: 1px solid var(--c-border, #eaecef);
  border-radius: 6px;
  background: var(--c-bg-light, #f6f8fa);
  color: var(--c-text-lighter, #999);
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    color: var(--c-brand, #3eaf7c);
    border-color: var(--c-brand, #3eaf7c);
    background: var(--c-bg-lighter, #f0f4f8);
  }

  &.copied {
    color: var(--c-brand, #3eaf7c);
    border-color: var(--c-brand, #3eaf7c);
    background: rgba(62, 175, 124, 0.08);
  }
}
</style>
