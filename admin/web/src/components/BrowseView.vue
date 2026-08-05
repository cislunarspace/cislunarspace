<script setup>
import { ref, computed, onMounted, watch, h } from 'vue';
import {
  NRadioGroup,
  NRadioButton,
  NInput,
  NSelect,
  NButton,
  NTag,
  NImage,
  NDataTable,
  NModal,
  NAlert,
  NSpin,
  useMessage,
} from 'naive-ui';
import { api } from '../api';
import SitePreviewModal from './SitePreviewModal.vue';

const emit = defineEmits(['edit']);
const message = useMessage();

const type = ref('news');
const q = ref('');
const cat = ref('');
const loading = ref(false);
const items = ref([]);
const error = ref('');
const categories = ref([]);

const TYPE_OPTIONS = [
  { label: 'Space News', value: 'news' },
  { label: 'Glossary', value: 'glossary' },
  { label: '知识库章节', value: 'kb' },
];

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

// ---------- 搜索防抖：输入停止 300ms 后自动过滤 ----------
let searchTimer = null;
watch(q, () => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(load, 300);
});

const catOptions = computed(() =>
  categories.value.map((c) => ({ label: `${c.name}（${c.count}）`, value: c.name }))
);

// ---------- 删除流程 ----------
const showModal = ref(false);
const preview = ref(null);
const previewLoading = ref(false);
const deleting = ref(false);
const deletePaths = ref([]);

async function openDelete(item) {
  const paths = [item.zh?.relPath, item.en?.relPath].filter(Boolean);
  deletePaths.value = paths;
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

async function confirmDelete() {
  deleting.value = true;
  try {
    const data = await api.executeDelete(deletePaths.value, true);
    let text = `已删除 ${data.moved?.length ?? 0} 个文件`;
    if (data.readmesUpdated?.length) text += `，更新 README ${data.readmesUpdated.length} 个`;
    if (data.genSidebar && !data.genSidebar.ok) {
      message.warning(`${text}；但 gen-sidebar 失败：${data.genSidebar.message}`);
    } else {
      message.success(`${text}，回收站：${data.trashDir}`);
    }
    await load();
    showModal.value = false;
  } catch (err) {
    preview.value = { error: err.message };
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

async function submitCategory() {
  catBusy.value = true;
  catMsg.value = null;
  try {
    if (catMode.value === 'add') {
      await api.addCategory(catType.value, catName.value);
      message.success(`已添加分类：${catName.value}`);
      showCatModal.value = false;
    } else {
      const opts = {};
      if (catType.value === 'glossary' && !catDeleteEntries.value) {
        opts.target = catTarget.value;
      }
      opts.deleteEntries = catDeleteEntries.value;
      const r = await api.deleteCategory(catType.value, catName.value, opts);
      let text = `已删除分类：${catName.value}（${catDeleteEntries.value ? '连带条目' : '保留条目'}）`;
      if (r.removedTagFrom) text += `；移除标签 ${r.removedTagFrom.length} 篇`;
      if (r.deletedArticles) text += `；删除 ${r.deletedArticles.length} 篇`;
      if (r.moved) text += `；移动条目 ${r.moved.length} 条`;
      message.success(text);
      showCatModal.value = false;
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

// ---------- 页面预览（整站效果） ----------
const previewPath = ref('');
const showSitePreview = ref(false);

function openPreview(item) {
  previewPath.value = item.zh?.relPath || item.en?.relPath;
  showSitePreview.value = true;
}

// ---------- 表格列 ----------
function translateTag(item) {
  const zh = !!item.zh;
  const en = !!item.en;
  if (zh && en) return h(NTag, { size: 'small', type: 'success', bordered: false }, () => '中英齐全');
  if (zh) return h(NTag, { size: 'small', type: 'warning', bordered: false }, () => '缺英文');
  return h(NTag, { size: 'small', type: 'warning', bordered: false }, () => '缺中文');
}

function translateKey(item) {
  if (item.zh && item.en) return 'full';
  if (item.zh) return 'no-en';
  return 'no-zh';
}

function statusTag(item) {
  if (item.zh?.yamlError || item.en?.yamlError) {
    return h(NTag, { size: 'small', type: 'error', bordered: false }, () => 'YAML 错误');
  }
  if (item.zh?.draft || item.en?.draft) {
    return h(NTag, { size: 'small', type: 'info', bordered: false }, () => '草稿');
  }
  return h(NTag, { size: 'small', bordered: false }, () => '正常');
}

function statusKey(item) {
  if (item.zh?.yamlError || item.en?.yamlError) return 'yaml';
  if (item.zh?.draft || item.en?.draft) return 'draft';
  return 'normal';
}

const columns = computed(() => [
  {
    title: '标题',
    key: 'title',
    sorter: (a, b) =>
      String(a.zh?.title || a.en?.title || '').localeCompare(
        String(b.zh?.title || b.en?.title || ''),
        'zh-Hans-CN'
      ),
    render(item) {
      const title = item.zh?.title || item.en?.title;
      const path = item.zh?.relPath || item.en?.relPath;
      return h('div', null, [
        h('div', null, title),
        h('div', { class: 'path-cell', style: 'margin-top: 2px' }, path),
      ]);
    },
  },
  {
    title: '分类',
    key: 'category',
    filterMultiple: true,
    filterOptions: categories.value.map((c) => ({ label: `${c.name}（${c.count}）`, value: c.name })),
    filter: (value, item) =>
      (item.zh?.category || item.en?.category || []).includes(value),
    render(item) {
      const cats = item.zh?.category || item.en?.category || [];
      if (!cats.length) return h('span', { class: 'muted' }, '—');
      return h(
        'div',
        { style: 'display: flex; gap: 4px; flex-wrap: wrap' },
        cats.map((c) => h(NTag, { size: 'small', bordered: false }, () => c))
      );
    },
  },
  {
    title: '日期',
    key: 'date',
    width: 120,
    sorter: (a, b) =>
      String(a.zh?.date || a.en?.date || '').localeCompare(String(b.zh?.date || b.en?.date || '')),
    render: (item) => item.zh?.date || item.en?.date || '—',
  },
  {
    title: '翻译',
    key: 'translate',
    width: 96,
    filterOptions: [
      { label: '中英齐全', value: 'full' },
      { label: '缺英文', value: 'no-en' },
      { label: '缺中文', value: 'no-zh' },
    ],
    filter: (value, item) => translateKey(item) === value,
    render: translateTag,
  },
  {
    title: '状态',
    key: 'status',
    width: 96,
    filterOptions: [
      { label: '正常', value: 'normal' },
      { label: '草稿', value: 'draft' },
      { label: 'YAML 错误', value: 'yaml' },
    ],
    filter: (value, item) => statusKey(item) === value,
    render: statusTag,
  },
  {
    title: '图片',
    key: 'image',
    width: 80,
    align: 'center',
    render(item) {
      const src = imageSrc(item);
      if (!src) return h('span', { class: 'muted' }, '—');
      return h(NImage, {
        src,
        width: 56,
        height: 36,
        objectFit: 'cover',
        style: 'border-radius: 4px; display: inline-block',
      });
    },
  },
  {
    title: '操作',
    key: 'actions',
    width: 190,
    align: 'right',
    render(item) {
      const path = item.zh?.relPath || item.en?.relPath;
      return h('div', { class: 'row-actions' }, [
        h(
          NButton,
          { size: 'small', type: 'primary', ghost: true, onClick: () => emit('edit', path) },
          () => '编辑'
        ),
        h(NButton, { size: 'small', onClick: () => openPreview(item) }, () => '预览'),
        h(
          NButton,
          { size: 'small', type: 'error', ghost: true, onClick: () => openDelete(item) },
          () => '删除'
        ),
      ]);
    },
  },
]);
</script>

<template>
  <div>
    <div class="toolbar">
      <n-radio-group :value="type" size="small" @update:value="switchType">
        <n-radio-button v-for="t in TYPE_OPTIONS" :key="t.value" :value="t.value">
          {{ t.label }}
        </n-radio-button>
      </n-radio-group>

      <n-input
        v-model:value="q"
        clearable
        placeholder="按标题 / 路径 / 分类过滤…"
        style="max-width: 260px"
        @keyup.enter="load"
      />

      <n-select
        v-model:value="cat"
        clearable
        placeholder="全部分类"
        :options="catOptions"
        style="max-width: 220px"
        @update:value="load"
      />

      <div class="toolbar-spacer"></div>

      <n-button v-if="type === 'news' || type === 'glossary'" @click="openCatManager(type)">
        分类管理
      </n-button>

      <n-tag :bordered="false">{{ items.length }} 条</n-tag>
    </div>

    <n-alert v-if="error" type="error" style="margin-bottom: 12px">{{ error }}</n-alert>

    <n-data-table
      :columns="columns"
      :data="items"
      :loading="loading"
      :row-key="(item) => item.pairKey"
      size="small"
      :scroll-x="900"
    />

    <!-- 整站效果预览弹窗 -->
    <SitePreviewModal v-model:show="showSitePreview" :path="previewPath" />

    <!-- 删除确认弹窗 -->
    <n-modal
      v-model:show="showModal"
      preset="card"
      title="删除确认"
      style="max-width: 860px"
    >
      <p class="scope-line" style="margin-top: 0; font-size: 13px">
        请核对删除范围。文件将被移动到回收站
        <code>admin/trash/&lt;时间戳&gt;/</code>，可在“回收站”页恢复。删除后会自动重跑
        <code>npm run gen-sidebar</code>。
      </p>

      <div v-if="previewLoading" style="text-align: center; padding: 24px 0">
        <n-spin size="small" />
        <div class="scope-line" style="margin-top: 8px">正在计算删除范围…</div>
      </div>

      <template v-else-if="preview">
        <n-alert v-if="preview.error" type="error">{{ preview.error }}</n-alert>
        <template v-else>
          <div class="scope-section">
            <h4>将删除的文件（{{ preview.files.length }}）</h4>
            <ul class="scope-list">
              <li v-for="f in preview.files" :key="f.path">
                <span v-if="f.type === 'figure'" style="color: #2563eb">图:</span>
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

          <n-alert v-if="!preview.readmes.length" type="info">
            未发现需要更新的 README 索引行。
          </n-alert>
        </template>
      </template>

      <template #footer>
        <div style="display: flex; justify-content: flex-end; gap: 10px">
          <n-button @click="showModal = false">关闭</n-button>
          <n-button
            type="error"
            :loading="deleting"
            :disabled="!preview || preview.error || previewLoading || preview.files?.length === 0"
            @click="confirmDelete"
          >
            确认删除
          </n-button>
        </div>
      </template>
    </n-modal>

    <!-- 分类管理弹窗 -->
    <n-modal
      v-model:show="showCatModal"
      preset="card"
      :title="`分类管理 · ${catType === 'news' ? 'Space News 标签' : 'Glossary 目录'}`"
      style="max-width: 640px"
    >
      <n-radio-group v-model:value="catMode" size="small" style="margin-bottom: 16px">
        <n-radio-button value="add">➕ 添加分类</n-radio-button>
        <n-radio-button value="delete">🗑 删除分类</n-radio-button>
      </n-radio-group>

      <template v-if="catMode === 'add'">
        <div style="margin-bottom: 10px">
          <div class="scope-line" style="margin-bottom: 6px">
            新分类名（英文 kebab-case，如 <code>deep-space</code>）
          </div>
          <n-input v-model:value="catName" placeholder="输入分类名…" />
        </div>
        <n-alert type="info">
          <template v-if="catType === 'news'">
            添加 news 分类会在 <code>taxonomy/data.ts</code> 注册节点（含配色），
            站点侧边栏/分类页即可显示该分类。不修改任何文章。
          </template>
          <template v-else>
            添加 glossary 分类会创建 <code>web/glossary/&lt;name&gt;/</code> 与
            <code>web/en/glossary/&lt;name&gt;/</code> 两个空目录。
          </template>
        </n-alert>
      </template>

      <template v-else>
        <div style="margin-bottom: 12px">
          <div class="scope-line" style="margin-bottom: 6px">选择要删除的分类</div>
          <n-select
            v-model:value="catName"
            placeholder="选择分类…"
            :options="catOptions"
          />
        </div>

        <div style="margin-bottom: 12px">
          <div class="scope-line" style="margin-bottom: 6px">删除方式</div>
          <n-radio-group v-model:value="catDeleteEntries">
            <div style="display: flex; flex-direction: column; gap: 8px">
              <n-radio :value="false">
                仅删分类，保留条目
                <span class="muted" v-if="catType === 'news'">（从所有文章移除该标签）</span>
                <span class="muted" v-else>（条目移到下面选的目标分类）</span>
              </n-radio>
              <n-radio :value="true">
                连同条目一起删除
                <span class="muted" v-if="catType === 'news'">（删除带该标签的文章）</span>
                <span class="muted" v-else>（删除目录下所有条目）</span>
              </n-radio>
            </div>
          </n-radio-group>
        </div>

        <div v-if="catType === 'glossary' && !catDeleteEntries" style="margin-bottom: 12px">
          <div class="scope-line" style="margin-bottom: 6px">条目移往的目标分类</div>
          <n-select
            v-model:value="catTarget"
            placeholder="选择目标分类…"
            :options="catOptions.filter((o) => o.value !== catName)"
          />
        </div>

        <n-alert v-if="catType === 'news' && catDeleteEntries" type="warning">
          警告：将删除带 <code>{{ catName || '该' }}</code> 标签的全部文章（中英镜像），
          文件进入回收站，可恢复。
        </n-alert>
      </template>

      <n-alert v-if="catMsg" :type="catMsg.type" style="margin-top: 12px">
        {{ catMsg.text }}
      </n-alert>

      <template #footer>
        <div style="display: flex; justify-content: flex-end; gap: 10px">
          <n-button @click="showCatModal = false">关闭</n-button>
          <n-button
            type="primary"
            :loading="catBusy"
            :disabled="
              !catName ||
              (catMode === 'delete' && catType === 'glossary' && !catDeleteEntries && !catTarget)
            "
            @click="submitCategory"
          >
            {{ catMode === 'add' ? '添加分类' : '确认删除分类' }}
          </n-button>
        </div>
      </template>
    </n-modal>
  </div>
</template>
