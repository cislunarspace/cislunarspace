<script setup>
import { ref, onMounted } from 'vue';
import YAML from 'yaml';
import { api } from '../api';

const props = defineProps({
  path: { type: String, required: true },
});
const emit = defineEmits(['close']);

const loading = ref(true);
const error = ref('');
const sides = ref([]); // [{ lang, path, body, yamlText, orig, form, changed, rawTouched }]
const kind = ref('news');
const saving = ref(false);
const validating = ref(false);
const msg = ref(null); // { type, text }
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
  kind.value = data.kind || 'news';
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
  msg.value = null;
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
  msg.value = null;
}

/** 直接编辑原始 YAML 文本 */
function onYamlInput(side, value) {
  side.yamlText = value;
  side.rawTouched = true;
  dirty.value = true;
  msg.value = null;
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
  msg.value = null;
}

async function validateNow() {
  validating.value = true;
  msg.value = null;
  try {
    const all = [];
    for (const s of sides.value) {
      const r = await api.validate({ frontmatterRaw: s.yamlText });
      for (const e of r.errors || []) all.push(`${s.lang.toUpperCase()} ${e}`);
    }
    if (all.length) {
      msg.value = { type: 'error', text: '校验未通过：' + all.join('；') };
    } else {
      msg.value = { type: 'success', text: 'frontmatter 校验通过。' };
    }
  } catch (err) {
    msg.value = { type: 'error', text: err.message };
  } finally {
    validating.value = false;
  }
}

async function saveNow() {
  saving.value = true;
  msg.value = null;
  try {
    const saves = sides.value.map((s) => ({
      path: s.path,
      frontmatterRaw: s.yamlText,
      body: s.body,
    }));
    await api.save(saves);
    msg.value = { type: 'success', text: '已保存。' };
    dirty.value = false;
    // 重新加载，刷新 orig 基线
    const data = await api.content(props.path);
    initSides(data);
  } catch (err) {
    msg.value = { type: 'error', text: err.message };
  } finally {
    saving.value = false;
  }
}

onMounted(async () => {
  try {
    const data = await api.content(props.path);
    initSides(data);
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div>
    <div class="editor-header">
      <div>
        <button class="btn small" @click="emit('close')">← 返回列表</button>
        <span class="editor-title" style="margin-left: 10px">
          编辑 · {{ kind === 'news' ? 'Space News' : kind === 'glossary' ? 'Glossary' : '知识库' }}
        </span>
      </div>
      <div class="editor-actions">
        <button class="btn" :disabled="validating || !dirty" @click="validateNow">
          {{ validating ? '校验中…' : '校验 YAML' }}
        </button>
        <button class="btn primary" :disabled="saving" @click="saveNow">
          {{ saving ? '保存中…' : '保存' }}
        </button>
      </div>
    </div>

    <div v-if="loading" class="loading">加载文件…</div>
    <div v-else-if="error" class="msg error">{{ error }}</div>

    <template v-else>
      <div v-if="msg" class="msg" :class="msg.type">{{ msg.text }}</div>

      <div v-if="sides.length === 1" class="msg info">
        该页面只有 {{ sides[0].lang === 'zh' ? '中文' : '英文' }} 版本，暂无对应镜像文件。
      </div>

      <div class="editor-grid">
        <div v-for="side in sides" :key="side.lang" class="editor-col">
          <div class="editor-col-header">
            <span class="lang-tag" :class="{ en: side.lang === 'en' }">
              {{ side.lang === 'zh' ? '中文' : 'English' }}
            </span>
            <code class="path-cell" style="max-width: none">{{ side.path }}</code>
          </div>

          <div v-if="side.rawTouched" class="msg warn" style="margin: 4px 0 10px">
            正在手动编辑原始 YAML，表单快捷编辑已停用。
            <button class="btn small" style="margin-left: 8px" @click="resetRaw(side)">回到表单生成</button>
          </div>

          <!-- 常用字段表单 -->
          <div class="field" v-for="field in FIELDS" :key="field.key">
            <label :for="'fm-' + side.lang + '-' + field.key">{{ field.label }}</label>
            <input
              v-if="field.type !== 'checkbox'"
              :id="'fm-' + side.lang + '-' + field.key"
              class="input"
              :disabled="side.rawTouched"
              v-model="side.form[field.key]"
              @input="patchForm(side, field)"
            />
            <input
              v-else
              type="checkbox"
              :id="'fm-' + side.lang + '-' + field.key"
              :disabled="side.rawTouched"
              v-model="side.form[field.key]"
              @change="patchForm(side, field)"
            />
          </div>

          <!-- 原始 YAML -->
          <details class="raw-yaml">
            <summary>原始 YAML frontmatter（高级）</summary>
            <textarea
              class="textarea yaml-textarea"
              :value="side.yamlText"
              @input="onYamlInput(side, $event.target.value)"
            ></textarea>
          </details>

          <!-- 正文 -->
          <div class="field" style="margin-top: 12px">
            <label>正文 markdown</label>
            <textarea
              class="textarea body-textarea"
              :value="side.body"
              @input="onBodyInput(side, $event.target.value)"
            ></textarea>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
