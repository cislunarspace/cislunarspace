<script setup>
/**
 * AI 设置弹窗：provider / baseUrl / apiKey / model，配置存 admin 服务端。
 */
import { ref, watch } from 'vue';
import {
  NModal,
  NButton,
  NInput,
  NSelect,
  NAlert,
  useMessage,
} from 'naive-ui';
import { api } from '../api';

const props = defineProps({
  show: { type: Boolean, default: false },
});
const emit = defineEmits(['update:show']);

const message = useMessage();

const provider = ref('openai');
const baseUrl = ref('');
const apiKey = ref(''); // 留空表示不修改已保存的 key
const model = ref('');
const masked = ref('');
const saving = ref(false);
const testing = ref(false);
const errorMsg = ref('');

const PROVIDER_OPTIONS = [
  { label: 'OpenAI 兼容（OpenAI / DeepSeek / Moonshot / Ollama…）', value: 'openai' },
  { label: 'Anthropic（Claude）', value: 'anthropic' },
];

const BASE_URL_PLACEHOLDER = {
  openai: 'https://api.openai.com/v1',
  anthropic: 'https://api.anthropic.com',
};

async function load() {
  errorMsg.value = '';
  try {
    const cfg = await api.aiConfig();
    provider.value = cfg.provider || 'openai';
    baseUrl.value = cfg.baseUrl || '';
    model.value = cfg.model || '';
    masked.value = cfg.apiKeyMasked || '';
    apiKey.value = '';
  } catch (err) {
    errorMsg.value = err.message;
  }
}

async function save() {
  saving.value = true;
  errorMsg.value = '';
  try {
    const cfg = await api.saveAiConfig({
      provider: provider.value,
      baseUrl: baseUrl.value || BASE_URL_PLACEHOLDER[provider.value],
      apiKey: apiKey.value,
      model: model.value,
    });
    masked.value = cfg.apiKeyMasked || '';
    apiKey.value = '';
    message.success('AI 配置已保存');
  } catch (err) {
    errorMsg.value = err.message;
  } finally {
    saving.value = false;
  }
}

async function test() {
  testing.value = true;
  errorMsg.value = '';
  try {
    await save();
    if (errorMsg.value) return;
    await api.aiChat([{ role: 'user', content: 'ping，回复 pong 即可' }]);
    message.success('连接测试通过');
  } catch (err) {
    errorMsg.value = err.message;
  } finally {
    testing.value = false;
  }
}

watch(
  () => props.show,
  (v) => {
    if (v) load();
  }
);
</script>

<template>
  <n-modal
    :show="show"
    preset="card"
    title="AI 设置"
    style="max-width: 560px"
    @update:show="emit('update:show', $event)"
  >
    <div style="display: flex; flex-direction: column; gap: 12px">
      <div>
        <div class="scope-line" style="margin-bottom: 4px">接口协议</div>
        <n-select v-model:value="provider" :options="PROVIDER_OPTIONS" />
      </div>
      <div>
        <div class="scope-line" style="margin-bottom: 4px">Base URL</div>
        <n-input v-model:value="baseUrl" :placeholder="BASE_URL_PLACEHOLDER[provider]" />
      </div>
      <div>
        <div class="scope-line" style="margin-bottom: 4px">
          API Key
          <span v-if="masked" class="muted">（当前：{{ masked }}，留空表示不修改）</span>
        </div>
        <n-input
          v-model:value="apiKey"
          type="password"
          show-password-on="click"
          :placeholder="masked ? '留空沿用已保存的 key' : '输入 API key'"
        />
      </div>
      <div>
        <div class="scope-line" style="margin-bottom: 4px">模型 model</div>
        <n-input v-model:value="model" placeholder="如 gpt-4o-mini / deepseek-chat / claude-sonnet-4-5" />
      </div>
    </div>

    <n-alert v-if="errorMsg" type="error" style="margin-top: 12px">{{ errorMsg }}</n-alert>

    <div class="scope-line" style="margin-top: 12px">
      配置保存在服务端 <code>admin/ai-config.json</code>（已 gitignore），AI 请求由本地后端代理。
    </div>

    <template #footer>
      <div style="display: flex; justify-content: flex-end; gap: 10px">
        <n-button @click="emit('update:show', false)">关闭</n-button>
        <n-button :loading="testing" @click="test">保存并测试连接</n-button>
        <n-button type="primary" :loading="saving" @click="save">保存</n-button>
      </div>
    </template>
  </n-modal>
</template>
