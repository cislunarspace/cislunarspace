<template>
  <button
    v-if="!isAiChatPage"
    class="sidebar-toggle-btn"
    :class="{ 'is-hidden': isHidden }"
    @click="toggle"
    :title="isHidden ? showLabel : hideLabel"
    aria-label="toggle sidebar"
  >
    <span class="sidebar-toggle-icon">
      <svg
        v-if="!isHidden"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="15 18 9 12 15 6" />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="9 18 15 12 9 6" />
      </svg>
    </span>
    <span class="sidebar-toggle-tooltip">{{ isHidden ? showLabel : hideLabel }}</span>
  </button>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import { useIsEn } from '../composables/useIsEn'

const route = useRoute()
const isEn = useIsEn()
const isHidden = ref(false)

const showLabel = computed(() => (isEn.value ? 'Expand sidebar' : '展开侧边栏'))
const hideLabel = computed(() => (isEn.value ? 'Collapse sidebar' : '收起侧边栏'))

const isAiChatPage = computed(() => {
  const p = route.path
  return p === '/ai-chat' || p === '/ai-chat/' || p === '/en/ai-chat' || p === '/en/ai-chat/'
})

function toggle() {
  isHidden.value = !isHidden.value
  document.documentElement.classList.toggle('sidebar-hidden', isHidden.value)
  try {
    localStorage.setItem('sidebar-hidden', String(isHidden.value))
  } catch {}
}

function onKeyDown(e: KeyboardEvent) {
  // Ctrl/Cmd + B 切换侧边栏
  if ((e.ctrlKey || e.metaKey) && e.key === 'b') {
    e.preventDefault()
    toggle()
  }
}

onMounted(() => {
  try {
    const saved = localStorage.getItem('sidebar-hidden')
    if (saved === 'true') {
      isHidden.value = true
      document.documentElement.classList.add('sidebar-hidden')
    }
  } catch {}

  window.addEventListener('keydown', onKeyDown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeyDown)
})
</script>

<style lang="scss">
.sidebar-toggle-btn {
  position: fixed;
  left: calc(var(--sidebar-width, 20rem) - 1px);
  top: 50%;
  transform: translateY(-50%);
  z-index: 101;

  width: 28px;
  height: 56px;
  padding: 0;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--c-bg-navbar);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  color: var(--c-text-lighter);
  cursor: pointer;

  border-radius: 0 12px 12px 0;
  box-shadow: var(--shadow-md);

  transition: left var(--sn-sidebar-sync-duration) var(--ease-out-expo),
              background 0.25s var(--ease-smooth),
              color 0.25s var(--ease-smooth),
              box-shadow 0.3s var(--ease-smooth),
              transform 0.2s var(--ease-out-back);

  .sidebar-toggle-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s var(--ease-out-expo);
  }

  /* ---- Tooltip ---- */
  .sidebar-toggle-tooltip {
    position: absolute;
    left: calc(100% + 10px);
    top: 50%;
    transform: translateY(-50%) scale(0.9);

    background: var(--c-text);
    color: var(--c-bg);
    font-size: 12px;
    font-weight: 500;
    padding: 4px 10px;
    border-radius: 6px;
    white-space: nowrap;

    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease, transform 0.2s var(--ease-out-expo);
  }

  .sidebar-toggle-tooltip::before {
    content: '';
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    border: 5px solid transparent;
    border-right-color: var(--c-text);
  }

  &:hover {
    color: var(--c-brand);
    background: var(--c-bg);
    box-shadow: var(--shadow-lg);
    transform: translateY(-50%) scale(1.08);

    .sidebar-toggle-tooltip {
      opacity: 1;
      transform: translateY(-50%) scale(1);
    }
  }

  &:active {
    transform: translateY(-50%) scale(0.96);
  }

  /* ---- Sidebar hidden state ---- */
  &.is-hidden {
    left: 0;
    border-radius: 0 12px 12px 0;

    .sidebar-toggle-icon {
      transform: rotate(180deg);
    }
  }
}

/* ---- 当 sidebar 被用户主动隐藏后的额外微交互 ---- */
html.sidebar-hidden .sidebar-toggle-btn {
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }
}
</style>
