<script setup>
import { ref, computed, onMounted, watch, h } from 'vue';
import {
  NRadioGroup,
  NRadioButton,
  NRadio,
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

const type = ref('glossary');
const q = ref('');
const cat = ref('');
const loading = ref(false);
const items = ref([]);
const error = ref('');
const categories = ref([]);

const TYPE_OPTIONS = [
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
    // 过滤后可能选中了已不可见的行，清掉避免误操作
    const keys = new Set(items.value.map((it) => it.relPath));
    checkedRowKeys.value = checkedRowKeys.value.filter((k) => keys.has(k));
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
  checkedRowKeys.value = [];
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

// ---------- 多选与批量删除 ----------
const checkedRowKeys = ref([]);

const selectedItems = computed(() =>
  items.value.filter((it) => checkedRowKeys.value.includes(it.relPath))
);

// ---------- 删除流程 ----------
const showModal = ref(false);
const preview = ref(null);
const previewLoading = ref(false);
const deleting = ref(false);
const deletePaths = ref([]);

async function startDelete(paths) {
  if (!paths.length) return;
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

function openDelete(item) {
  startDelete([item.relPath]);
}

function openBatchDelete() {
  startDelete(selectedItems.value.map((it) => it.relPath));
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
    checkedRowKeys.value = [];
    await load();
    showModal.value = false;
  } catch (err) {
    preview.value = { error: err.message };
  } finally {
    deleting.value = false;
  }
}

// ---------- 拖动修改分类 ----------
const dragging = ref(false);
const dragKeys = ref([]); // 正在拖动的条目 relPath 列表
const hoverCat = ref(''); // 拖动悬停的分类

function rowProps(item) {
  if (type.value === 'kb') return {};
  return {
    draggable: true,
    onDragstart: (e) => {
      // 拖已选中的行 → 拖动整个选中集；否则只拖这一行
      dragKeys.value = checkedRowKeys.value.includes(item.relPath)
        ? [...checkedRowKeys.value]
        : [item.relPath];
      dragging.value = true;
      e.dataTransfer?.setData('text/plain', dragKeys.value.join('\n'));
      if (e.dataTransfer) e.dataTransfer.effectAllowed = 'move';
    },
    onDragend: () => {
      dragging.value = false;
      hoverCat.value = '';
    },
  };
}

const showAssignModal = ref(false);
const assignTarget = ref('');
const assignBusy = ref(false);

function onDropCategory(catName) {
  dragging.value = false;
  hoverCat.value = '';
  if (!dragKeys.value.length) return;
  assignTarget.value = catName;
  showAssignModal.value = true;
}

async function confirmAssign() {
  assignBusy.value = true;
  try {
    const dragged = items.value.filter((it) => dragKeys.value.includes(it.relPath));
    const paths = dragged.map((it) => it.relPath);
    const r = await api.assignCategory(type.value, paths, assignTarget.value);
    const n = r.changed?.length ?? r.moved?.length ?? 0;
    const skip = (r.unchanged?.length ?? 0) + (r.skipped?.length ?? 0);
    let text = `已修改 ${n} 个文件`;
    if (skip) text += `，跳过 ${skip}`;
    if (r.errors?.length) text += `，失败 ${r.errors.length}`;
    if (r.genSidebar && !r.genSidebar.ok) {
      message.warning(`${text}；但 gen-sidebar 失败：${r.genSidebar.message || ''}`);
    } else {
      message.success(text);
    }
    showAssignModal.value = false;
    checkedRowKeys.value = [];
    await reloadAll();
  } catch (err) {
    message.error(err.message);
  } finally {
    assignBusy.value = false;
  }
}

// ---------- 分类管理 ----------
const showCatModal = ref(false);
const catMode = ref('add'); // add | delete
const catType = ref('glossary');
const catName = ref('');
const catParent = ref(null); // glossary 子分类的父分类（null = 顶级）
const catLabelZh = ref(''); // glossary 分类的中文名（注册 taxonomy 用）
const catDeleteEntries = ref(false);
const catTarget = ref('');
const catBusy = ref(false);
const catMsg = ref(null);

function openCatManager(t) {
  catType.value = t;
  catMode.value = 'add';
  catName.value = '';
  catParent.value = null;
  catLabelZh.value = '';
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
      const opts =
        catType.value === 'glossary'
          ? { parent: catParent.value || '', labelZh: catLabelZh.value.trim() }
          : {};
      const r = await api.addCategory(catType.value, catName.value, opts);
      message.success(`已添加分类：${r.slug || catName.value}`);
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
  // 取 image frontmatter 字段，转成可访问的相对路径
  const s = item.image;
  if (!s) return null;
  // ./figures/... 相对当前 md 目录 → 转成 web/ 内相对路径，交给 /api/image 读取
  const mdDir = item.relPath.replace(/\/[^/]+$/, '');
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
  previewPath.value = item.relPath;
  showSitePreview.value = true;
}

// ---------- 表格列 ----------
function statusTag(item) {
  if (item.yamlError) {
    return h(NTag, { size: 'small', type: 'error', bordered: false }, () => 'YAML 错误');
  }
  if (item.draft) {
    return h(NTag, { size: 'small', type: 'info', bordered: false }, () => '草稿');
  }
  return h(NTag, { size: 'small', bordered: false }, () => '正常');
}

function statusKey(item) {
  if (item.yamlError) return 'yaml';
  if (item.draft) return 'draft';
  return 'normal';
}

// 条目在各类型下的展示分类：
// glossary / kb 用所在目录（scan.js 的 section 字段）
function displayCats(item) {
  return item.section ? [item.section] : [];
}

const columns = computed(() => [
  { type: 'selection' },
  {
    title: '标题',
    key: 'title',
    sorter: (a, b) =>
      String(a.title || '').localeCompare(String(b.title || ''), 'zh-Hans-CN'),
    render(item) {
      const title = item.title;
      const path = item.relPath;
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
    filter: (value, item) => displayCats(item).includes(value),
    render(item) {
      const cats = displayCats(item);
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
    sorter: (a, b) => String(a.date || '').localeCompare(String(b.date || '')),
    render: (item) => item.date || '—',
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
      const path = item.relPath;
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

      <template v-if="checkedRowKeys.length">
        <n-tag :bordered="false" type="primary">已选 {{ checkedRowKeys.length }} 条</n-tag>
        <n-button size="small" type="error" ghost @click="openBatchDelete">批量删除</n-button>
        <n-button size="small" text @click="checkedRowKeys = []">清除</n-button>
      </template>

      <div class="toolbar-spacer"></div>

      <n-button v-if="type === 'glossary'" @click="openCatManager(type)">
        分类管理
      </n-button>

      <n-tag :bordered="false">{{ items.length }} 条</n-tag>
    </div>

    <n-alert v-if="error" type="error" style="margin-bottom: 12px">{{ error }}</n-alert>

    <!-- 拖动时浮现的分类放置条 -->
    <div v-if="dragging" class="drop-bar">
      <span class="drop-bar-label">拖到目标分类（{{ dragKeys.length }} 条）：</span>
      <span
        v-for="c in categories"
        :key="c.name"
        class="drop-target"
        :class="{ 'drop-target-hover': hoverCat === c.name }"
        @dragover.prevent
        @dragenter.prevent="hoverCat = c.name"
        @dragleave="hoverCat = ''"
        @drop.prevent="onDropCategory(c.name)"
      >
        {{ c.name }}（{{ c.count }}）
      </span>
    </div>

    <n-data-table
      :columns="columns"
      :data="items"
      :loading="loading"
      :row-key="(item) => item.relPath"
      :checked-row-keys="checkedRowKeys"
      :row-props="rowProps"
      size="small"
      :scroll-x="900"
      @update:checked-row-keys="(keys) => (checkedRowKeys = keys)"
    />

    <!-- 整站效果预览弹窗 -->
    <SitePreviewModal v-model:show="showSitePreview" :path="previewPath" />

    <!-- 拖动修改分类确认弹窗 -->
    <n-modal
      v-model:show="showAssignModal"
      preset="card"
      title="修改分类"
      style="max-width: 520px"
    >
      <p style="margin-top: 0; font-size: 13px">
        将 <strong>{{ dragKeys.length }}</strong> 个条目（含中英镜像）归入分类
        <n-tag size="small" :bordered="false" style="margin: 0 2px">{{ assignTarget }}</n-tag>
      </p>
      <n-alert type="info">
        条目文件将移动到 <code>glossary/{{ assignTarget }}/</code>（中英镜像一起），
        <code>glossary/README.md</code> 索引同步更新。
      </n-alert>
      <template #footer>
        <div style="display: flex; justify-content: flex-end; gap: 10px">
          <n-button @click="showAssignModal = false">取消</n-button>
          <n-button type="primary" :loading="assignBusy" @click="confirmAssign">
            确认修改
          </n-button>
        </div>
      </template>
    </n-modal>

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
      :title="`分类管理 · Glossary 目录`"
      style="max-width: 640px"
    >
      <n-radio-group v-model:value="catMode" size="small" style="margin-bottom: 16px">
        <n-radio-button value="add">➕ 添加分类</n-radio-button>
        <n-radio-button value="delete">🗑 删除分类</n-radio-button>
      </n-radio-group>

      <template v-if="catMode === 'add'">
        <div v-if="catType === 'glossary'" style="margin-bottom: 10px">
          <div class="scope-line" style="margin-bottom: 6px">父分类（不选 = 顶级分类）</div>
          <n-select
            v-model:value="catParent"
            clearable
            placeholder="顶级分类"
            :options="catOptions.filter((o) => !o.value.includes('/'))"
          />
        </div>
        <div style="margin-bottom: 10px">
          <div class="scope-line" style="margin-bottom: 6px">
            新分类名（英文 kebab-case，如 <code>deep-space</code>）
          </div>
          <n-input v-model:value="catName" placeholder="输入分类名…" />
        </div>
        <div v-if="catType === 'glossary'" style="margin-bottom: 10px">
          <div class="scope-line" style="margin-bottom: 6px">中文名（显示在站点侧边栏）</div>
          <n-input v-model:value="catLabelZh" placeholder="缺省用分类名" />
        </div>
        <n-alert type="info">
          添加 glossary 分类会创建 <code>web/glossary/&lt;name&gt;/</code> 与
          <code>web/en/glossary/&lt;name&gt;/</code> 目录（子分类则在父分类目录下），
          并在 <code>taxonomy/data.ts</code> 注册节点，站点侧边栏即可显示。
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
                <span class="muted">（条目移到下面选的目标分类）</span>
              </n-radio>
              <n-radio :value="true">
                连同条目一起删除
                <span class="muted">（删除目录下所有条目）</span>
              </n-radio>
            </div>
          </n-radio-group>
        </div>

        <div v-if="!catDeleteEntries" style="margin-bottom: 12px">
          <div class="scope-line" style="margin-bottom: 6px">条目移往的目标分类</div>
          <n-select
            v-model:value="catTarget"
            placeholder="选择目标分类…"
            :options="catOptions.filter((o) => o.value !== catName)"
          />
        </div>

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
