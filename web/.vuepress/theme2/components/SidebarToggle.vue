<template>
  <button
    v-if="!isAiChatPage"
    class="sidebar-toggle-btn"
    :class="{ 'sidebar-hidden': isHidden }"
    @click="toggle"
    :title="isHidden ? showLabel : hideLabel"
  >
    <svg v-if="!isHidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
      <path fill="currentColor" d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
    </svg>
    <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
      <path fill="currentColor" d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
    </svg>
  </button>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useIsEn } from '../composables/useIsEn'

const route = useRoute()
const isEn = useIsEn()
const isHidden = ref(false)

const showLabel = computed(() => isEn.value ? 'Show sidebar' : '显示侧边栏')
const hideLabel = computed(() => isEn.value ? 'Hide sidebar' : '隐藏侧边栏')

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

onMounted(() => {
  try {
    const saved = localStorage.getItem('sidebar-hidden')
    if (saved === 'true') {
      isHidden.value = true
      document.documentElement.classList.add('sidebar-hidden')
    }
  } catch {}
})
</script>

<style lang="scss">
.sidebar-toggle-btn {
  position: fixed;
  left: var(--sidebar-width, 300px);
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  width: 24px;
  height: 48px;
  border: none;
  border-radius: 0 6px 6px 0;
  background: var(--c-brand, #3eaf7c);
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
  transition: opacity 0.2s, left 0.3s, background 0.2s;

  &:hover {
    opacity: 1;
    background: var(--c-brand-light, #4abf8a);
  }

  &.sidebar-hidden {
    left: 0;
  }
}

@media (max-width: 959px) {
  .sidebar-toggle-btn {
    display: none;
  }
}
</style>
