<script setup>
import { ref, computed } from 'vue';
import BrowseView from './components/BrowseView.vue';
import EditorView from './components/EditorView.vue';
import TrashView from './components/TrashView.vue';

const currentView = ref('browse'); // browse | editor | trash
const editingPath = ref(null);

function openEditor(path) {
  editingPath.value = path;
  currentView.value = 'editor';
}
function closeEditor() {
  editingPath.value = null;
  currentView.value = 'browse';
}
</script>

<template>
  <div class="app">
    <header class="app-header">
      <div class="app-title">
        <span class="logo">◈</span>
        <span>地月空间内容管理器</span>
        <span class="local-badge">本地</span>
      </div>
      <nav class="app-nav">
        <button
          class="nav-btn"
          :class="{ active: currentView === 'browse' }"
          @click="currentView = 'browse'"
        >
          浏览内容
        </button>
        <button
          class="nav-btn"
          :class="{ active: currentView === 'trash' }"
          @click="currentView = 'trash'"
        >
          回收站
        </button>
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
  </div>
</template>
