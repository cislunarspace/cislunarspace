<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import YAML from 'yaml';
import {
  NButton,
  NInput,
  NCheckbox,
  NTag,
  NAlert,
  NSkeleton,
  NCollapse,
  NCollapseItem,
  NCard,
  NTooltip,
  useMessage,
  useDialog,
} from 'naive-ui';
import { api } from '../api';
import SitePreviewModal from './SitePreviewModal.vue';
import AiChatModal from './AiChatModal.vue';

const props = defineProps({
  path: { type: String, required: true },
});
const emit = defineEmits(['close']);

const message = useMessage();
const dialog = useDialog();

const loading = ref(true);
const error = ref('');
const sides = ref([]); // [{ lang, path, body, yamlText, orig, form, changed, rawTouched }]
const kind = ref('glossary');
const saving = ref(false);
const validating = ref(false);
const dirty = ref(false);

const FIELDS = [
  { key: 'title', label: '标题 title' },
  { key: 'description', label: '描述 description', wide: true },
  { key: 'keywords', label: '关键词 keywords', wide: true },
  { key: 'author', label: '作者 author' },
  { key: 'date', label: '日期 date' },
  { key: 'lastUpdated', label: '更新 lastUpdated' },
  { key: 'category', label: '分类 category（逗号分隔）' },
  { key: 'draft', label: '草稿 draft', type: 'checkbox' },
  { key: 'permalink', label: '固定链接 permalink', wide: true },
  { key: 'image', label: '图片 image', wide: true },
  { key: 'layout', label: '布局 layout' },
];

function fmtCategory(v) {
  if (Array.isArray(v)) return v.join(', ');
  return typeof v === 'string' ? v : '';
}

function makeForm(fm) {
  return {
    title: fm.title ?? '',
    description: fm.description ?? '',
    keywords: Array.isArray(fm.keywords) ? fm.keywords.join(', ') : (fm.keywords ?? ''),
    author: fm.author ?? '',
    date: fm.date ?? '',
    lastUpdated: fm.lastUpdated ?? '',
    category: fmtCategory(fm.category),
    draft: fm.draft === true,
    permalink: fm.permalink ?? '',
    image: fm.image ?? '',
    layout: fm.layout ?? '',
  };
}

function initSides(data) {
  kind.value = data.kind || 'glossary';
  const arr = [];
  const primary = {
    lang: data.lang,
    path: data.path,
    body: data.body,
    yamlText: data.rawFrontmatter ?? '',
    orig: data.frontmatter || {},
    form: makeForm(data.frontmatter || {}),
    changed: {},
    rawTouched: false,
  };
  arr.push(primary);
  if (data.mirror) {
    const m = data.mirror;
    arr.push({
      lang: m.lang,
      path: m.path,
      body: m.body,
      yamlText: m.rawFrontmatter ?? '',
      orig: m.frontmatter || {},
      form: makeForm(m.frontmatter || {}),
      changed: {},
      rawTouched: false,
    });
  }
  sides.value = arr;
  dirty.value = false;
}

/** 表单字段变更 → 合并进对象 → 重新序列化 YAML */
function patchForm(side, field) {
  if (side.rawTouched) return;
  const changed = { ...side.changed };
  const val = side.form[field.key];
  if (field.key === 'category') {
    const arr = String(val).split(',').map((s) => s.trim()).filter(Boolean);
    changed.category = arr.length ? arr : '';
  } else if (field.key === 'draft') {
    changed.draft = !!val;
  } else {
    changed[field.key] = String(val ?? '');
  }
  side.changed = changed;
  const merged = { ...side.orig };
  for (const [k, v] of Object.entries(changed)) {
    if (v === '' || v === null || v === undefined || (Array.isArray(v) && v.length === 0)) {
      delete merged[k];
    } else {
      merged[k] = v;
    }
  }
  side.yamlText = YAML.stringify(merged, { lineWidth: 0 });
  // 注意：这里不重新赋值 side.form，避免把用户正在输入的原始文本规范化
  // （例如 category 多分类输入时若回写会折叠成单值），仅更新 yamlText。
  dirty.value = true;
}

/** 直接编辑原始 YAML 文本 */
function onYamlInput(side, value) {
  side.yamlText = value;
  side.rawTouched = true;
  dirty.value = true;
}

/** 放弃手动 YAML 编辑，回到表单生成 */
function resetRaw(side) {
  side.rawTouched = false;
  const merged = { ...side.orig };
  for (const [k, v] of Object.entries(side.changed)) {
    if (v === '' || v === null || (Array.isArray(v) && v.length === 0)) delete merged[k];
    else merged[k] = v;
  }
  side.yamlText = YAML.stringify(merged, { lineWidth: 0 });
  side.form = makeForm(merged);
}

function onBodyInput(side, value) {
  side.body = value;
  dirty.value = true;
}

async function validateNow() {
  validating.value = true;
  try {
    const all = [];
    for (const s of sides.value) {
      const r = await api.validate({ frontmatterRaw: s.yamlText });
      for (const e of r.errors || []) all.push(`${s.lang.toUpperCase()} ${e}`);
    }
    if (all.length) {
      message.error('校验未通过：' + all.join('；'));
    } else {
      message.success('frontmatter 校验通过。');
    }
  } catch (err) {
    message.error(err.message);
  } finally {
    validating.value = false;
  }
}

async function saveNow() {
  if (saving.value || !dirty.value) return;
  saving.value = true;
  try {
    const saves = sides.value.map((s) => ({
      path: s.path,
      frontmatterRaw: s.yamlText,
      body: s.body,
    }));
    await api.save(saves);
    message.success('已保存。');
    dirty.value = false;
    // 重新加载，刷新 orig 基线
    const data = await api.content(props.path);
    initSides(data);
  } catch (err) {
    message.error(err.message);
  } finally {
    saving.value = false;
  }
}

// ---------- 快捷键 Ctrl/Cmd+S 保存 ----------
function onKeydown(e) {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's') {
    e.preventDefault();
    saveNow();
  }
}

// ---------- 未保存保护 ----------
function onBeforeUnload(e) {
  if (dirty.value) e.preventDefault();
}

function backToList() {
  if (!dirty.value) {
    emit('close');
    return;
  }
  dialog.warning({
    title: '有未保存的修改',
    content: '离开将丢弃当前未保存的修改，确定返回列表吗？',
    positiveText: '丢弃并返回',
    negativeText: '继续编辑',
    onPositiveClick: () => emit('close'),
  });
}

onMounted(async () => {
  window.addEventListener('keydown', onKeydown);
  window.addEventListener('beforeunload', onBeforeUnload);
  try {
    const data = await api.content(props.path);
    initSides(data);
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown);
  window.removeEventListener('beforeunload', onBeforeUnload);
});

// ---------- 整站预览 ----------
const showSitePreview = ref(false);

// ---------- AI 选区润色 ----------
const aiShow = ref(false);
const aiContext = ref({ fieldLabel: '', selectedText: '', fullText: '', hasSelection: false, kind: 'glossary', lang: 'zh' });
let aiTarget = null; // { side, fieldKey, field?, sel? }

/** 在字段 wrapper 的 mouseup/keyup 上捕获原生选区（e.target 是真实 input/textarea） */
function captureSel(side, fieldKey, e) {
  const el = e.target;
  if (typeof el?.selectionStart !== 'number') return;
  if (el.selectionStart === el.selectionEnd) return;
  side.sel = {
    fieldKey,
    start: el.selectionStart,
    end: el.selectionEnd,
    text: el.value.slice(el.selectionStart, el.selectionEnd),
  };
}

function fieldFullText(side, fieldKey) {
  if (fieldKey === 'body') return side.body;
  if (fieldKey === 'yaml') return side.yamlText;
  return String(side.form[fieldKey] ?? '');
}

function openAi(side, fieldKey, fieldLabel) {
  const fullText = fieldFullText(side, fieldKey);
  const sel = side.sel?.fieldKey === fieldKey ? side.sel : null;
  aiTarget = { side, fieldKey, field: FIELDS.find((f) => f.key === fieldKey), sel };
  aiContext.value = {
    fieldLabel,
    selectedText: sel ? sel.text : fullText,
    fullText,
    hasSelection: !!sel,
    kind: kind.value,
    lang: side.lang,
  };
  aiShow.value = true;
}

/** AI 结果写回：走既有的 patchForm/onBodyInput/onYamlInput，保证 dirty 与 YAML 同步不绕开 */
function applyAi(text, mode) {
  if (!aiTarget) return;
  const { side, fieldKey, field, sel } = aiTarget;
  const current = fieldFullText(side, fieldKey);
  const next =
    mode === 'selection' && sel
      ? current.slice(0, sel.start) + text + current.slice(sel.end)
      : text;
  if (fieldKey === 'body') {
    onBodyInput(side, next);
  } else if (fieldKey === 'yaml') {
    onYamlInput(side, next);
  } else {
    side.form[fieldKey] = next;
    patchForm(side, field);
  }
}
</script>

<template>
  <div>
    <div class="toolbar" style="justify-content: space-between">
      <div style="display: flex; align-items: center; gap: 10px">
        <n-button size="small" @click="backToList">← 返回列表</n-button>
        <span style="font-weight: 600; font-size: 15px">
          编辑 · {{ kind === 'glossary' ? 'Glossary' : '知识库' }}
        </span>
        <n-tag v-if="dirty" size="small" type="warning" :bordered="false">未保存</n-tag>
      </div>
      <div style="display: flex; gap: 10px; align-items: center">
        <span class="muted" style="font-size: 12px">Ctrl/⌘+S 保存</span>
        <n-button :loading="validating" :disabled="!dirty" @click="validateNow">
          校验 YAML
        </n-button>
        <n-tooltip :disabled="!dirty" placement="bottom">
          <template #trigger>
            <n-button @click="showSitePreview = true">预览</n-button>
          </template>
          预览展示的是已保存内容；当前有未保存修改，保存后刷新预览
        </n-tooltip>
        <n-button type="primary" :loading="saving" :disabled="!dirty" @click="saveNow">
          保存
        </n-button>
      </div>
    </div>

    <div v-if="loading">
      <n-skeleton text :repeat="2" />
      <n-skeleton text style="width: 60%; margin-top: 8px" />
      <n-skeleton height="200px" style="margin-top: 16px" />
    </div>
    <n-alert v-else-if="error" type="error">{{ error }}</n-alert>

    <template v-else>
      <n-alert v-if="sides.length === 1" type="info" style="margin-bottom: 14px">
        该页面只有 {{ sides[0].lang === 'zh' ? '中文' : '英文' }} 版本，暂无对应镜像文件。
      </n-alert>

      <div class="editor-grid">
        <n-card v-for="side in sides" :key="side.lang" size="small">
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 10px; flex-wrap: wrap">
            <n-tag size="small" :type="side.lang === 'en' ? 'warning' : 'info'" :bordered="false">
              {{ side.lang === 'zh' ? '中文' : 'English' }}
            </n-tag>
            <code class="path-cell" style="max-width: none">{{ side.path }}</code>
          </div>

          <n-alert v-if="side.rawTouched" type="warning" style="margin-bottom: 10px">
            正在手动编辑原始 YAML，表单快捷编辑已停用。
            <n-button size="tiny" style="margin-left: 8px" @click="resetRaw(side)">
              回到表单生成
            </n-button>
          </n-alert>

          <!-- 常用字段表单 -->
          <div
            v-for="field in FIELDS"
            :key="field.key"
            style="margin-bottom: 8px"
            @mouseup="captureSel(side, field.key, $event)"
            @keyup="captureSel(side, field.key, $event)"
          >
            <div class="scope-line" style="margin-bottom: 3px; display: flex; align-items: center; justify-content: space-between">
              <span>{{ field.label }}</span>
              <n-button
                v-if="field.type !== 'checkbox'"
                text
                size="tiny"
                title="选中文字后点我，与 AI 对话润色"
                @click="openAi(side, field.key, field.label)"
              >
                ✨ AI
              </n-button>
            </div>
            <n-checkbox
              v-if="field.type === 'checkbox'"
              :checked="side.form[field.key]"
              :disabled="side.rawTouched"
              @update:checked="side.form[field.key] = $event; patchForm(side, field)"
            />
            <n-input
              v-else
              size="small"
              :value="side.form[field.key]"
              :disabled="side.rawTouched"
              @update:value="side.form[field.key] = $event; patchForm(side, field)"
            />
          </div>

          <!-- 原始 YAML -->
          <n-collapse style="margin-top: 4px">
            <n-collapse-item name="yaml">
              <template #header>
                <span style="display: flex; align-items: center; gap: 8px">
                  原始 YAML frontmatter（高级）
                  <n-button
                    text
                    size="tiny"
                    title="选中文字后点我，与 AI 对话润色"
                    @click.stop="openAi(side, 'yaml', '原始 YAML frontmatter')"
                  >
                    ✨ AI
                  </n-button>
                </span>
              </template>
              <div
                @mouseup="captureSel(side, 'yaml', $event)"
                @keyup="captureSel(side, 'yaml', $event)"
              >
                <n-input
                  type="textarea"
                  size="small"
                  :value="side.yamlText"
                  :autosize="{ minRows: 6, maxRows: 16 }"
                  style="font-family: var(--mono); font-size: 12px"
                  @update:value="onYamlInput(side, $event)"
                />
              </div>
            </n-collapse-item>
          </n-collapse>

          <!-- 正文 -->
          <div
            style="margin-top: 12px"
            @mouseup="captureSel(side, 'body', $event)"
            @keyup="captureSel(side, 'body', $event)"
          >
            <div class="scope-line" style="margin-bottom: 3px; display: flex; align-items: center; justify-content: space-between">
              <span>正文 markdown</span>
              <n-button
                text
                size="tiny"
                title="选中文字后点我，与 AI 对话润色"
                @click="openAi(side, 'body', '正文 markdown')"
              >
                ✨ AI
              </n-button>
            </div>
            <n-input
              type="textarea"
              :value="side.body"
              :autosize="{ minRows: 14, maxRows: 40 }"
              style="font-family: var(--mono); font-size: 12px"
              @update:value="onBodyInput(side, $event)"
            />
          </div>
        </n-card>
      </div>
    </template>

    <SitePreviewModal v-model:show="showSitePreview" :path="path" />
    <AiChatModal v-model:show="aiShow" :context="aiContext" @apply="applyAi" />
  </div>
</template>

<style scoped>
.editor-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
</style>
