<script setup>
/**
 * AI 选区润色对话弹窗
 *
 * 打开时带上下文（字段名、选中文本、文件类型/语言），多轮对话，
 * 可把最新一条 AI 回复写回：替换选区 或 替换整个字段。
 */
import { ref, computed, watch, nextTick } from 'vue';
import { NModal, NButton, NInput, NSpin, NAlert, NTag } from 'naive-ui';
import { api } from '../api';

const props = defineProps({
  show: { type: Boolean, default: false },
  // { fieldLabel, selectedText, fullText, hasSelection, kind }
  context: { type: Object, required: true },
});
const emit = defineEmits(['update:show', 'apply']);

const KIND_LABEL = { glossary: '术语词典条目', kb: '知识库章节' };

const messages = ref([]); // [{ role, content }]
const draft = ref('');
const sending = ref(false);
const errorMsg = ref('');
const listEl = ref(null);

const systemPrompt = computed(() => {
  const c = props.context;
  const scope = c.hasSelection ? '用户选中了其中一段文字' : '用户未选中文字，将作用于整个字段';
  return (
    `你在协助编辑一篇${KIND_LABEL[c.kind] || '网页'}的「${c.fieldLabel}」字段` +
    `。${scope}。` +
    '按用户的要求修改或润色这段内容。回复时先给出修改后的完整文本（用 ``` 代码块包裹），' +
    '再用一两句话说明改了什么。不要改动事实，不要增减信息量，除非用户明确要求。'
  );
});

const lastReply = computed(() => {
  for (let i = messages.value.length - 1; i >= 0; i--) {
    if (messages.value[i].role === 'assistant') return messages.value[i].content;
  }
  return '';
});

/** 从 AI 回复中提取要应用的文本：优先 ``` 代码块内容，否则整段回复 */
function extractApplyText(reply) {
  const m = reply.match(/```[^\n]*\n([\s\S]*?)```/);
  return (m ? m[1] : reply).trim();
}

async function send() {
  const text = draft.value.trim();
  if (!text || sending.value) return;
  errorMsg.value = '';
  // 首条消息自动带上选中文本上下文
  const first = messages.value.length === 0;
  const content = first
    ? `这是需要处理的内容：\n\`\`\`\n${props.context.selectedText}\n\`\`\`\n\n${text}`
    : text;
  messages.value.push({ role: 'user', content });
  draft.value = '';
  sending.value = true;
  await scrollDown();
  try {
    const { reply } = await api.aiChat(messages.value, systemPrompt.value);
    messages.value.push({ role: 'assistant', content: reply });
  } catch (err) {
    errorMsg.value = err.message;
  } finally {
    sending.value = false;
    await scrollDown();
  }
}

async function scrollDown() {
  await nextTick();
  if (listEl.value) listEl.value.scrollTop = listEl.value.scrollHeight;
}

function apply(mode) {
  if (!lastReply.value) return;
  emit('apply', extractApplyText(lastReply.value), mode);
  emit('update:show', false);
}

watch(
  () => props.show,
  (v) => {
    if (v) {
      messages.value = [];
      draft.value = '';
      errorMsg.value = '';
    }
  }
);
</script>

<template>
  <n-modal
    :show="show"
    preset="card"
    style="max-width: 720px"
    @update:show="emit('update:show', $event)"
  >
    <template #header>
      ✨ AI 润色 · {{ context.fieldLabel }}
      <n-tag size="tiny" :bordered="false" style="margin-left: 6px">
        {{ context.hasSelection ? '作用于选中文字' : '作用于整个字段' }}
      </n-tag>
    </template>

    <div class="ai-quote">{{ context.selectedText || '（空）' }}</div>

    <div ref="listEl" class="ai-chat-list">
      <div v-if="messages.length === 0" class="scope-line" style="text-align: center; padding: 16px 0">
        输入你的要求，例如「润色这段文字」「压缩到两句话」
      </div>
      <div
        v-for="(m, i) in messages"
        :key="i"
        class="ai-bubble"
        :class="m.role"
      >{{ m.content }}</div>
      <div v-if="sending" style="text-align: center; padding: 8px 0"><n-spin size="small" /></div>
    </div>

    <n-alert v-if="errorMsg" type="error" style="margin-bottom: 10px">{{ errorMsg }}</n-alert>

    <div style="display: flex; gap: 8px; align-items: flex-end">
      <n-input
        v-model:value="draft"
        type="textarea"
        :autosize="{ minRows: 1, maxRows: 4 }"
        placeholder="输入要求，Enter 发送，Shift+Enter 换行"
        @keydown.enter.exact.prevent="send"
      />
      <n-button type="primary" :loading="sending" :disabled="!draft.trim()" @click="send">
        发送
      </n-button>
    </div>

    <template #footer>
      <div style="display: flex; justify-content: flex-end; gap: 10px">
        <n-button @click="emit('update:show', false)">关闭</n-button>
        <n-button :disabled="!lastReply || !context.hasSelection" @click="apply('selection')">
          用最新回复替换选区
        </n-button>
        <n-button type="primary" :disabled="!lastReply" @click="apply('all')">
          用最新回复替换整个字段
        </n-button>
      </div>
    </template>
  </n-modal>
</template>

<style scoped>
.ai-quote {
  max-height: 120px;
  overflow: auto;
  border-left: 3px solid #2563eb;
  padding: 6px 12px;
  margin-bottom: 12px;
  font-size: 13px;
  opacity: 0.85;
  white-space: pre-wrap;
  word-break: break-word;
  background: rgba(128, 128, 128, 0.08);
  border-radius: 0 6px 6px 0;
}

.ai-chat-list {
  max-height: 40vh;
  overflow: auto;
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.ai-bubble {
  max-width: 85%;
  padding: 8px 12px;
  border-radius: 10px;
  font-size: 13px;
  line-height: 1.6;
  white-space: pre-wrap;
  word-break: break-word;
}

.ai-bubble.user {
  align-self: flex-end;
  background: #2563eb;
  color: #fff;
  border-bottom-right-radius: 2px;
}

.ai-bubble.assistant {
  align-self: flex-start;
  background: rgba(128, 128, 128, 0.14);
  border-bottom-left-radius: 2px;
}
</style>
