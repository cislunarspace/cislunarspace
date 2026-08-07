<script setup>
/**
 * 整站效果预览弹窗
 *
 * iframe 嵌入 VuePress dev server 中的对应页面。
 * dev server 未运行时提供一键启动（首次需几十秒，日志在 admin/logs/site-preview.log）。
 */
import { ref, watch } from 'vue';
import { NModal, NButton, NSpin, NAlert } from 'naive-ui';
import { api } from '../api';

const props = defineProps({
  show: { type: Boolean, default: false },
  path: { type: String, required: true }, // web/ 内 md 相对路径
});
const emit = defineEmits(['update:show']);

const phase = ref('checking'); // checking | stopped | starting | ready | error
const errorMsg = ref('');
const frameUrl = ref('');
const route = ref('');

async function prepare() {
  phase.value = 'checking';
  errorMsg.value = '';
  try {
    const [r, s] = await Promise.all([api.previewRoute(props.path), api.previewStatus()]);
    route.value = r.route;
    if (s.running) {
      frameUrl.value = s.url + r.route;
      phase.value = 'ready';
    } else {
      phase.value = 'stopped';
    }
  } catch (err) {
    errorMsg.value = err.message;
    phase.value = 'error';
  }
}

async function startServer() {
  phase.value = 'starting';
  errorMsg.value = '';
  try {
    const s = await api.previewStart();
    frameUrl.value = s.url + route.value;
    phase.value = 'ready';
  } catch (err) {
    errorMsg.value = err.message;
    phase.value = 'error';
  }
}

function openInBrowser() {
  window.open(frameUrl.value, '_blank', 'noopener');
}

watch(
  () => props.show,
  (v) => {
    if (v) prepare();
  }
);
</script>

<template>
  <n-modal
    :show="show"
    preset="card"
    title="整站效果预览"
    style="max-width: 1100px; width: 92vw"
    @update:show="emit('update:show', $event)"
  >
    <div class="scope-line" style="margin-bottom: 10px">
      <code>{{ path }}</code>
      <template v-if="route"> → <code>{{ route }}</code></template>
    </div>

    <div v-if="phase === 'checking' || phase === 'starting'" style="text-align: center; padding: 48px 0">
      <n-spin />
      <div class="scope-line" style="margin-top: 12px">
        {{ phase === 'checking' ? '正在检查预览服务…' : '正在启动站点预览服务，首次启动可能需要几十秒…' }}
      </div>
    </div>

    <template v-else-if="phase === 'stopped'">
      <n-alert type="info" style="margin-bottom: 12px">
        整站预览依赖站点的 VuePress dev server（<code>web/</code> 下 <code>npm run dev</code>），当前未运行。
        点击下方按钮由管理器代为启动；启动日志见 <code>admin/logs/site-preview.log</code>。
      </n-alert>
      <div style="text-align: center">
        <n-button type="primary" @click="startServer">启动站点预览服务</n-button>
      </div>
    </template>

    <n-alert v-else-if="phase === 'error'" type="error" style="white-space: pre-wrap">
      {{ errorMsg }}
      <div style="margin-top: 8px">
        <n-button size="small" @click="prepare">重试</n-button>
      </div>
    </n-alert>

    <template v-else>
      <iframe
        :src="frameUrl"
        style="width: 100%; height: 72vh; border: 1px solid rgba(128, 128, 128, 0.25); border-radius: 8px; background: #fff"
      ></iframe>
    </template>

    <template #footer>
      <div style="display: flex; justify-content: flex-end; gap: 10px">
        <n-button v-if="phase === 'ready'" @click="openInBrowser">在浏览器新标签打开</n-button>
        <n-button @click="emit('update:show', false)">关闭</n-button>
      </div>
    </template>
  </n-modal>
</template>
