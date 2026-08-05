<script setup>
import { ref, onMounted } from 'vue';
import { api } from '../api';

const loading = ref(false);
const error = ref('');
const trash = ref([]); // [{ stamp, files }]
const restoring = ref(false);
const msg = ref(null);

async function load() {
  loading.value = true;
  error.value = '';
  msg.value = null;
  try {
    const data = await api.trash();
    trash.value = data.trash || [];
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
}

onMounted(load);

async function restore(file, stamp) {
  restoring.value = true;
  msg.value = null;
  try {
    const r = await api.restore(file, stamp);
    msg.value = { type: 'success', text: `已恢复 ${file}` };
    await load();
  } catch (err) {
    msg.value = { type: 'error', text: err.message };
  } finally {
    restoring.value = false;
  }
}
</script>

<template>
  <div>
    <div class="toolbar">
      <h2 class="panel-title" style="margin: 0">回收站</h2>
      <button class="btn" :disabled="loading" @click="load">刷新</button>
      <span class="badge">{{ trash.reduce((n, t) => n + t.files.length, 0) }} 个文件</span>
    </div>

    <div v-if="error" class="msg error">{{ error }}</div>
    <div v-if="loading" class="loading">加载中…</div>

    <div v-if="msg" class="msg" :class="msg.type">{{ msg.text }}</div>

    <div v-if="!loading && trash.length === 0" class="empty">
      回收站是空的。删除的文件会移动到这里，恢复时移回 web/ 原位置。
    </div>

    <div v-for="t in trash" :key="t.stamp" class="panel trash-stamp">
      <div class="trash-stamp-title">🗑 {{ t.stamp }}</div>
      <ul class="scope-list">
        <li v-for="f in t.files" :key="f">
          <code>{{ f }}</code>
          <button class="btn small" style="margin-left: 10px" :disabled="restoring" @click="restore(f, t.stamp)">
            恢复
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>
