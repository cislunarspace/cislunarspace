<script setup>
import { ref, computed, onMounted } from 'vue';
import {
  NButton,
  NTag,
  NAlert,
  NSpin,
  NEmpty,
  NCollapse,
  NCollapseItem,
  NList,
  NListItem,
  useMessage,
  useDialog,
} from 'naive-ui';
import { api } from '../api';

const message = useMessage();
const dialog = useDialog();

const loading = ref(false);
const error = ref('');
const trash = ref([]); // [{ stamp, files }]
const restoring = ref(false);

const totalFiles = computed(() => trash.value.reduce((n, t) => n + t.files.length, 0));

async function load() {
  loading.value = true;
  error.value = '';
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

function confirmRestore(file, stamp) {
  dialog.warning({
    title: '恢复文件',
    content: `将把 ${file} 移回 web/ 原位置，确定恢复吗？`,
    positiveText: '恢复',
    negativeText: '取消',
    onPositiveClick: () => restore(file, stamp),
  });
}

async function restore(file, stamp) {
  restoring.value = true;
  try {
    await api.restore(file, stamp);
    message.success(`已恢复 ${file}`);
    await load();
  } catch (err) {
    message.error(err.message);
  } finally {
    restoring.value = false;
  }
}
</script>

<template>
  <div>
    <div class="toolbar">
      <span style="font-weight: 600; font-size: 15px">回收站</span>
      <n-button size="small" :loading="loading" @click="load">刷新</n-button>
      <n-tag size="small" :bordered="false">{{ totalFiles }} 个文件</n-tag>
    </div>

    <n-alert v-if="error" type="error" style="margin-bottom: 12px">{{ error }}</n-alert>

    <div v-if="loading" style="text-align: center; padding: 32px 0">
      <n-spin size="small" />
    </div>

    <n-empty
      v-else-if="trash.length === 0"
      description="回收站是空的。删除的文件会移动到这里，恢复时移回 web/ 原位置。"
      style="padding: 40px 0"
    />

    <n-collapse v-else :default-expanded-names="trash[0]?.stamp ? [trash[0].stamp] : []">
      <n-collapse-item v-for="t in trash" :key="t.stamp" :name="t.stamp">
        <template #header>
          🗑 <code style="margin-left: 6px">{{ t.stamp }}</code>
          <n-tag size="tiny" :bordered="false" style="margin-left: 8px">{{ t.files.length }} 个</n-tag>
        </template>
        <n-list size="small" bordered>
          <n-list-item v-for="f in t.files" :key="f">
            <code style="font-size: 12px">{{ f }}</code>
            <template #suffix>
              <n-button size="tiny" :disabled="restoring" @click="confirmRestore(f, t.stamp)">
                恢复
              </n-button>
            </template>
          </n-list-item>
        </n-list>
      </n-collapse-item>
    </n-collapse>
  </div>
</template>
