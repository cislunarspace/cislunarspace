<script setup>
import { ref, computed } from 'vue';
import {
  NConfigProvider,
  NMessageProvider,
  NDialogProvider,
  NButton,
  NTag,
  NTooltip,
  darkTheme,
} from 'naive-ui';
import BrowseView from './components/BrowseView.vue';
import EditorView from './components/EditorView.vue';
import TrashView from './components/TrashView.vue';
import AiSettingsModal from './components/AiSettingsModal.vue';

const currentView = ref('browse'); // browse | editor | trash
const editingPath = ref(null);
const showAiSettings = ref(false);

function openEditor(path) {
  editingPath.value = path;
  currentView.value = 'editor';
}
function closeEditor() {
  editingPath.value = null;
  currentView.value = 'browse';
}

// ---------- 深浅主题 ----------
const THEME_KEY = 'admin-theme';
const stored = localStorage.getItem(THEME_KEY);
const isDark = ref(
  stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
);

function toggleTheme() {
  isDark.value = !isDark.value;
  localStorage.setItem(THEME_KEY, isDark.value ? 'dark' : 'light');
}

const theme = computed(() => (isDark.value ? darkTheme : null));

const themeOverrides = {
  common: {
    primaryColor: '#2563eb',
    primaryColorHover: '#3b74ef',
    primaryColorPressed: '#1d4ed8',
    borderRadius: '6px',
  },
};
</script>

<template>
  <n-config-provider :theme="theme" :theme-overrides="themeOverrides">
    <n-message-provider>
      <n-dialog-provider>
        <div class="app" :class="isDark ? 'theme-dark' : 'theme-light'">
          <header class="app-header">
            <div class="app-title">
              <span class="logo">◈</span>
              <span>地月空间内容管理器</span>
              <n-tag size="small" type="info" :bordered="false">本地</n-tag>
            </div>
            <nav class="app-nav">
              <n-button
                quaternary
                :type="currentView === 'browse' ? 'primary' : 'default'"
                @click="currentView = 'browse'"
              >
                浏览内容
              </n-button>
              <n-button
                quaternary
                :type="currentView === 'trash' ? 'primary' : 'default'"
                @click="currentView = 'trash'"
              >
                回收站
              </n-button>
              <n-tooltip placement="bottom">
                <template #trigger>
                  <n-button quaternary circle style="margin-left: 8px" @click="showAiSettings = true">
                    ✨
                  </n-button>
                </template>
                AI 设置
              </n-tooltip>
              <n-tooltip placement="bottom">
                <template #trigger>
                  <n-button quaternary circle @click="toggleTheme">
                    {{ isDark ? '☀️' : '🌙' }}
                  </n-button>
                </template>
                {{ isDark ? '切换浅色' : '切换深色' }}
              </n-tooltip>
            </nav>
          </header>

          <main class="app-main">
            <BrowseView v-if="currentView === 'browse'" @edit="openEditor" />
            <EditorView v-else-if="currentView === 'editor'" :path="editingPath" @close="closeEditor" />
            <TrashView v-else />
          </main>

          <footer class="app-footer">
            仅本地使用 · 不执行任何 git 操作 · 删除进回收站 · 操作写日志
          </footer>

          <AiSettingsModal v-model:show="showAiSettings" />
        </div>
      </n-dialog-provider>
    </n-message-provider>
  </n-config-provider>
</template>
