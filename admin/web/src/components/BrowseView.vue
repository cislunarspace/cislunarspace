<script setup>
import { ref, computed, onMounted } from 'vue';
import { api } from '../api';

const emit = defineEmits(['edit']);

const type = ref('news');
const q = ref('');
const cat = ref('');
const loading = ref(false);
const items = ref([]);
const error = ref('');
const categories = ref([]);

const TYPE_META = {
  news: { label: '航天动态', plural: 'Space News' },
  glossary: { label: '术语词典', plural: 'Glossary' },
  kb: { label: '知识库章节', plural: '知识库' },
};

async function loadCats() {
  try {
    const data = await api.categories(type.value);
    categories.value = data.categories || [];
  } catch {
    categories.value = [];
  }
}

async function load() {
  loading.value = true;
  error.value = '';
  try {
    const data = await api.listContents(type.value, { q: q.value.trim(), cat: cat.value });
    items.value = data.items || [];
  } catch (err) {
    error.value = err.message;
    items.value = [];
  } finally {
    loading.value = false;
  }
}

async function reloadAll() {
  await loadCats();
  await load();
}

onMounted(reloadAll);

function switchType(t) {
  type.value = t;
  cat.value = '';
  reloadAll();
}

function applyFilter() {
  load();
}

// ---------- 删除流程 ----------
const showModal = ref(false);
const preview = ref(null);
const previewLoading = ref(false);
const deleting = ref(false);
const deleteResult = ref(null);
const deletePaths = ref([]);

async function openDelete(item) {
  const paths = [item.zh?.relPath, item.en?.relPath].filter(Boolean);
  deletePaths.value = paths;
  deleteResult.value = null;
  previewLoading.value = true;
  showModal.value = true;
  preview.value = null;
  try {
    const data = await api.previewDelete(paths);
    preview.value = data;
  } catch (err) {
    preview.value = { error: err.message };
  } finally {
    previewLoading.value = false;
  }
}

function closeModal() {
  showModal.value = false;
  preview.value = null;
  deleteResult.value = null;
}

async function confirmDelete() {
  deleting.value = true;
  try {
    const data = await api.executeDelete(deletePaths.value, true);
    deleteResult.value = data;
    await load();
  } catch (err) {
    deleteResult.value = { error: err.message };
  } finally {
    deleting.value = false;
  }
}

// ---------- 分类管理 ----------
const showCatModal = ref(false);
const catMode = ref('add'); // add | delete
const catType = ref('news');
const catName = ref('');
const catDeleteEntries = ref(false);
const catTarget = ref('');
const catBusy = ref(false);
const catMsg = ref(null);

function openCatManager(t) {
  catType.value = t;
  catMode.value = 'add';
  catName.value = '';
  catDeleteEntries.value = false;
  catTarget.value = '';
  catMsg.value = null;
  showCatModal.value = true;
}

function closeCatModal() {
  showCatModal.value = false;
}

async function submitCategory() {
  catBusy.value = true;
  catMsg.value = null;
  try {
    if (catMode.value === 'add') {
      await api.addCategory(catType.value, catName.value);
      catMsg.value = { type: 'success', text: `已添加分类：${catName.value}` };
    } else {
      const opts = {};
      if (catType.value === 'glossary' && !catDeleteEntries.value) {
        opts.target = catTarget.value;
      }
      if (catType.value === 'news') {
        opts.deleteEntries = catDeleteEntries.value;
      } else {
        opts.deleteEntries = catDeleteEntries.value;
      }
      const r = await api.deleteCategory(catType.value, catName.value, opts);
      catMsg.value = {
        type: 'success',
        text: `已删除分类：${catName.value}（${catDeleteEntries.value ? '连带条目' : '保留条目'}）`,
      };
      if (r.removedTagFrom) catMsg.value.text += `；移除标签 ${r.removedTagFrom.length} 篇`;
      if (r.deletedArticles) catMsg.value.text += `；删除 ${r.deletedArticles.length} 篇`;
      if (r.moved) catMsg.value.text += `；移动条目 ${r.moved.length} 条`;
    }
    // 刷新分类与列表
    if (catType.value === type.value) {
      await reloadAll();
    } else {
      await loadCats();
    }
  } catch (err) {
    catMsg.value = { type: 'error', text: err.message };
  } finally {
    catBusy.value = false;
  }
}

// ---------- 图片预览 ----------
const showImage = ref(null); // { src, alt }

function imageFor(item) {
  // 取 zh 或 en 的 image frontmatter 字段，转成可访问的相对路径
  const s = item.zh?.image || item.en?.image;
  if (!s) return null;
  // ./figures/... 相对当前 md 目录 → 转成 web/ 内相对路径，交给 /api/image 读取
  const mdDir = (item.zh?.relPath || item.en?.relPath).replace(/\/[^/]+$/, '');
  let rel = s.startsWith('./') ? `${mdDir}/${s.slice(2)}` : s;
  rel = rel.replace(/\.\.\//g, '');
  // 去掉前导 / 或 web/ 前缀，得到 web/ 内相对路径
  rel = rel.replace(/^\/+/, '').replace(/^web\//, '');
  return rel;
}

function imageSrc(item) {
  const rel = imageFor(item);
  return rel ? `/api/image?path=${encodeURIComponent(rel)}` : null;
}

// ---------- 页面预览 ----------
const showPreview = ref(null); // { path, html, title }
const previewLoading2 = ref(false);

async function openPreview(item) {
  const p = item.zh?.relPath || item.en?.relPath;
  showPreview.value = null;
  previewLoading2.value = true;
  try {
    const data = await api.content(p);
    // 简易渲染：frontmatter 字段 + markdown 粗渲染
    const title = data.frontmatter?.title || data.path;
    const html = renderMarkdown(data.body);
    showPreview.value = { path: data.path, html, title };
  } catch (err) {
    showPreview.value = { error: err.message };
  } finally {
    previewLoading2.value = false;
  }
}

/** 简易 markdown 渲染：标题/粗体/斜体/链接/列表/段落（非完整引擎，够预览用） */
function renderMarkdown(src) {
  const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const lines = String(src || '').split('\n');
  const out = [];
  for (const line of lines) {
    let l = esc(line);
    let rendered = false;
    const h = l.match(/^(#{1,6})\s+(.*)$/);
    if (h) {
      const level = h[1].length;
      out.push(`<h${level}>${inline(h[2])}</h${level}>`);
      rendered = true;
    } else if (/^\s*[-*]\s+/.test(l)) {
      out.push(`<li>${inline(l.replace(/^\s*[-*]\s+/, ''))}</li>`);
      rendered = true;
    } else if (/^\s*\d+\.\s+/.test(l)) {
      out.push(`<li>${inline(l.replace(/^\s*\d+\.\s+/, ''))}</li>`);
      rendered = true;
    } else if (/^\s*$/.test(l)) {
      out.push('');
      rendered = true;
    }
    if (!rendered) out.push(`<p>${inline(l)}</p>`);
  }
  return out.join('\n');
}

function inline(s) {
  return s
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
}

// ---------- 展示辅助 ----------
const total = computed(() => items.value.length);

function fmtCategory(cats) {
  return Array.isArray(cats) ? cats.join('、') : '';
}

function translateBadge(item) {
  const zh = !!item.zh;
  const en = !!item.en;
  if (zh && en) return '<span class="badge ok">中英齐全</span>';
  if (zh) return '<span class="badge missing">缺英文</span>';
  return '<span class="badge missing">缺中文</span>';
}
</script>

<template>
  <div>
    <div class="toolbar">
      <div class="type-tabs">
        <button
          class="btn"
          :class="{ primary: type === 'news' }"
          @click="switchType('news')"
        >
          Space News
        </button>
        <button
          class="btn"
          :class="{ primary: type === 'glossary' }"
          @click="switchType('glossary')"
        >
          Glossary
        </button>
        <button
          class="btn"
          :class="{ primary: type === 'kb' }"
          @click="switchType('kb')"
        >
          知识库章节
        </button>
      </div>

      <input
        v-model="q"
        class="input"
        :placeholder="'按标题 / 路径 / 分类过滤…'"
        @keyup.enter="applyFilter"
      />

      <select v-model="cat" class="select" @change="applyFilter">
        <option value="">全部分类</option>
        <option v-for="c in categories" :key="c.name" :value="c.name">
          {{ c.name }}（{{ c.count }}）
        </option>
      </select>

      <button class="btn" @click="applyFilter">查询</button>
      <button class="btn small" @click="q = ''; cat = ''; applyFilter()">清空</button>

      <button
        v-if="type === 'news' || type === 'glossary'"
        class="btn"
        style="margin-left: auto"
        @click="openCatManager(type)"
      >
        分类管理
      </button>

      <span v-if="!loading" class="badge">{{ total }} 条</span>
    </div>

    <div v-if="error" class="msg error">{{ error }}</div>
    <div v-if="loading" class="loading">加载中…</div>

    <div v-else class="panel" style="padding: 0; overflow: hidden">
      <table class="table">
        <thead>
          <tr>
            <th>标题</th>
            <th>分类</th>
            <th>日期</th>
            <th>翻译</th>
            <th>状态</th>
            <th style="text-align: center">图片</th>
            <th style="text-align: right">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.pairKey">
            <td>
              {{ item.zh?.title || item.en?.title }}
              <div class="path-cell" style="margin-top: 2px">
                {{ item.zh?.relPath || item.en?.relPath }}
              </div>
            </td>
            <td>
              <span class="badge" v-for="c in (item.zh?.category || item.en?.category || [])" :key="c">
                {{ c }}
              </span>
            </td>
            <td>{{ item.zh?.date || item.en?.date }}</td>
            <td v-html="translateBadge(item)"></td>
            <td>
              <span v-if="item.zh?.draft || item.en?.draft" class="badge draft">草稿</span>
              <span v-if="item.zh?.yamlError || item.en?.yamlError" class="badge yaml-error">YAML 错误</span>
              <span v-if="!item.zh?.yamlError && !item.en?.yamlError && !item.zh?.draft && !item.en?.draft" class="badge">正常</span>
            </td>
            <td style="text-align: center">
              <template v-if="imageSrc(item)">
                <button class="btn small" @click="showImage = { src: imageSrc(item), rel: imageFor(item), alt: item.zh?.title || item.en?.title }">
                  👁 图
                </button>
              </template>
              <span v-else class="muted">—</span>
            </td>
            <td style="text-align: right">
              <div class="row-actions">
                <button
                  class="btn small"
                  @click="emit('edit', item.zh?.relPath || item.en?.relPath)"
                >
                  编辑
                </button>
                <button class="btn small" @click="openPreview(item)">预览</button>
                <button class="btn small ghost-danger" @click="openDelete(item)">
                  删除
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-if="items.length === 0" class="empty">没有匹配的内容</div>
    </div>

    <!-- 图片预览弹窗 -->
    <div v-if="showImage" class="modal-mask" @click.self="showImage = null">
      <div class="modal modal-img">
        <div class="modal-head">
          <span>{{ showImage.alt }}</span>
          <button class="btn small" @click="showImage = null">关闭</button>
        </div>
        <img :src="showImage.src" :alt="showImage.alt" style="max-width: 100%; max-height: 70vh" @error="$event.target.style.display = 'none'" />
        <div class="scope-line" style="margin-top: 8px; word-break: break-all">
          <code>{{ showImage.rel }}</code>
        </div>
      </div>
    </div>

    <!-- 页面预览弹窗 -->
    <div v-if="showPreview" class="modal-mask" @click.self="showPreview = null">
      <div class="modal modal-preview">
        <div class="modal-head">
          <span>{{ showPreview.title }}</span>
          <button class="btn small" @click="showPreview = null">关闭</button>
        </div>
        <div class="scope-line" style="margin-bottom: 8px">
          <code>{{ showPreview.path }}</code>
        </div>
        <div v-if="previewLoading2" class="loading">加载预览…</div>
        <div v-else-if="showPreview.error" class="msg error">{{ showPreview.error }}</div>
        <div v-else class="preview-body" v-html="showPreview.html"></div>
      </div>
    </div>

    <!-- 删除确认弹窗 -->
    <div v-if="showModal" class="modal-mask" @click.self="closeModal">
      <div class="modal">
        <h3>删除确认</h3>
        <p class="modal-sub">
          请核对删除范围。文件将被移动到回收站
          <code>admin/trash/&lt;时间戳&gt;/</code>，可在“回收站”页恢复。删除后会自动重跑
          <code>npm run gen-sidebar</code>。
        </p>

        <div v-if="previewLoading" class="loading">正在计算删除范围…</div>

        <template v-else-if="preview">
          <div v-if="preview.error" class="msg error">{{ preview.error }}</div>
          <template v-else>
            <div class="scope-section">
              <h4>将删除的文件（{{ preview.files.length }}）</h4>
              <ul class="scope-list">
                <li v-for="f in preview.files" :key="f.path">
                  <span v-if="f.type === 'figure'" style="color: var(--accent)">图:</span>
                  {{ f.path }}
                </li>
              </ul>
            </div>

            <div v-if="preview.readmes.length" class="scope-section">
              <h4>将更新的 README 索引（{{ preview.readmes.length }}）</h4>
              <div v-for="r in preview.readmes" :key="r.path" class="scope-line" style="margin-bottom: 6px">
                <code>{{ r.path }}</code>
                <ul class="scope-list" style="max-height: 120px">
                  <li v-for="l in r.lines" :key="l.number">L{{ l.number }}: {{ l.text.slice(0, 120) }}</li>
                </ul>
              </div>
            </div>

            <div v-if="preview.references.length" class="scope-section">
              <h4>
                其他页面的引用（仅提示，不自动修改，共
                {{ preview.references.length }} 处）
              </h4>
              <ul class="scope-list" style="max-height: 140px">
                <li v-for="r in preview.references" :key="r.path">
                  <code>{{ r.path }}</code> — {{ r.lines[0]?.number }}
                </li>
              </ul>
            </div>

            <div v-if="!preview.readmes.length" class="msg info">未发现需要更新的 README 索引行。</div>
          </template>
        </template>

        <div v-if="deleteResult" class="msg success" style="margin-top: 10px">
          已删除 {{ deleteResult.moved?.length }} 个文件
          <template v-if="deleteResult.readmesUpdated?.length">
            ；更新 README：{{ deleteResult.readmesUpdated.length }} 个
          </template>
          <template v-if="deleteResult.genSidebar && !deleteResult.genSidebar.ok">
            ；<b>gen-sidebar 失败</b>：{{ deleteResult.genSidebar.message }}
          </template>
          <div class="scope-line">回收站：<code>{{ deleteResult.trashDir }}</code></div>
        </div>

        <div class="modal-actions">
          <button class="btn" @click="closeModal">关闭</button>
          <button
            v-if="!deleteResult"
            class="btn danger"
            :disabled="!preview || preview.error || previewLoading || preview.files?.length === 0"
            @click="confirmDelete"
          >
            {{ deleting ? '删除中…' : '确认删除' }}
          </button>
        </div>
      </div>
    </div>

    <!-- 分类管理弹窗 -->
    <div v-if="showCatModal" class="modal-mask" @click.self="closeCatModal">
      <div class="modal">
        <div class="modal-head">
          <h3 style="margin: 0">
            分类管理 · {{ catType === 'news' ? 'Space News 标签' : 'Glossary 目录' }}
          </h3>
          <button class="btn small" @click="closeCatModal">关闭</button>
        </div>

        <div class="cat-mode-tabs" style="display: flex; gap: 8px; margin: 14px 0">
          <button class="btn" :class="{ primary: catMode === 'add' }" @click="catMode = 'add'">
            ➕ 添加分类
          </button>
          <button class="btn danger" :class="{ ghost: catMode === 'delete' }" @click="catMode = 'delete'">
            🗑 删除分类
          </button>
        </div>

        <template v-if="catMode === 'add'">
          <div class="field">
            <label>新分类名（英文 kebab-case，如 <code>deep-space</code>）</label>
            <input v-model="catName" class="input" style="width: 100%" placeholder="输入分类名…" />
          </div>
          <div v-if="catType === 'news'" class="msg info" style="margin-top: 10px">
            添加 news 分类会在 <code>taxonomy/data.ts</code> 注册节点（含配色），
            站点侧边栏/分类页即可显示该分类。不修改任何文章。
          </div>
          <div v-else class="msg info" style="margin-top: 10px">
            添加 glossary 分类会创建 <code>web/glossary/&lt;name&gt;/</code> 与
            <code>web/en/glossary/&lt;name&gt;/</code> 两个空目录。
          </div>
        </template>

        <template v-else>
          <div class="field">
            <label>选择要删除的分类</label>
            <select v-model="catName" class="select" style="width: 100%">
              <option value="" disabled>选择分类…</option>
              <option v-for="c in categories" :key="c.name" :value="c.name">
                {{ c.name }}（{{ c.count }} 条）
              </option>
            </select>
          </div>

          <div class="field" style="margin-top: 10px">
            <label>删除方式</label>
            <label class="radio-row">
              <input type="radio" v-model="catDeleteEntries" :value="false" />
              仅删分类，保留条目
              <span v-if="catType === 'news'">（从所有文章移除该标签）</span>
              <span v-else>（条目移到下面选的目标分类）</span>
            </label>
            <label class="radio-row">
              <input type="radio" v-model="catDeleteEntries" :value="true" />
              连同条目一起删除
              <span v-if="catType === 'news'">（删除带该标签的文章）</span>
              <span v-else>（删除目录下所有条目）</span>
            </label>
          </div>

          <div v-if="catType === 'glossary' && !catDeleteEntries" class="field">
            <label>条目移往的目标分类</label>
            <select v-model="catTarget" class="select" style="width: 100%">
              <option value="" disabled>选择目标分类…</option>
              <option v-for="c in categories" :key="c.name" :value="c.name" :disabled="c.name === catName">
                {{ c.name }}
              </option>
            </select>
          </div>

          <div v-if="catType === 'news' && catDeleteEntries" class="msg warn" style="margin-top: 10px">
            警告：将删除带 <code>{{ catName || '该' }}</code> 标签的全部文章（中英镜像），
            文件进入回收站，可恢复。
          </div>
        </template>

        <div v-if="catMsg" class="msg" :class="catMsg.type" style="margin-top: 12px">
          {{ catMsg.text }}
        </div>

        <div class="modal-actions">
          <button class="btn" @click="closeCatModal">关闭</button>
          <button
            class="btn primary"
            :disabled="
              catBusy ||
              !catName ||
              (catMode === 'delete' && catType === 'glossary' && !catDeleteEntries && !catTarget)
            "
            @click="submitCategory"
          >
            {{ catBusy ? '处理中…' : catMode === 'add' ? '添加分类' : '确认删除分类' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
