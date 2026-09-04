<template>
  <div :class="['dialectic-root', { dark: isDark }]">
    <!-- 首页视图 -->
    <div v-if="view === 'home'" class="view-home">
      <header class="home-header">
        <h1 class="home-title">史学思辨</h1>
        <p class="home-subtitle">"辩-证"模型探究</p>
      </header>

      <div class="home-actions">
        <button class="btn-primary" @click="enterDialectic">开始探究</button>
        <button class="btn-secondary" @click="enterDemo">轻量启动：澶渊之盟</button>
      </div>

      <div v-if="reports.length > 0" class="history-section">
        <div class="history-header">
          <span class="history-title">历史报告</span>
          <button class="btn-text" @click="clearHistory">清空</button>
        </div>
        <div class="report-list">
          <div
            v-for="report in reports"
            :key="report.id"
            class="report-item"
            @click="viewReport(report.id)"
          >
            <div class="report-info">
              <span class="report-name">{{ report.title }}</span>
              <span class="report-date">{{ report.date }}</span>
            </div>
            <button class="btn-delete" @click.stop="removeReport(report.id)">删除</button>
          </div>
        </div>
      </div>

      <div v-else class="history-empty">
        <p>暂无历史报告，开始你的第一次探究吧</p>
      </div>
    </div>

    <!-- 报告阅读视图 -->
    <div v-else-if="view === 'report'" class="view-report">
      <div class="report-header">
        <button class="btn-back" @click="goHome">⌂ 首页</button>
        <button class="btn-primary-sm" @click="copyReport">复制报告</button>
        <button class="btn-secondary-sm" @click="startNew">新建探究</button>
      </div>
      <div v-if="notFound" class="report-not-found">
        <p>报告不存在或已被删除</p>
        <button class="btn-secondary" @click="goHome">返回首页</button>
      </div>
      <div v-else class="report-content">
        <pre class="report-text">{{ currentReport?.content }}</pre>
      </div>
    </div>

    <!-- 辩证流程视图 -->
    <div v-else-if="view === 'dialectic'" class="view-dialectic">
      <div class="top-bar">
        <button class="btn-home" @click="goHome"><span>⌂</span><span>首页</span></button>
      </div>

      <div class="progress-track">
        <div :class="['progress-fill', `progress-step-${currentStep}`]"></div>
        <span class="progress-text"
          >Step {{ currentStep + 1 }} / 9 — {{ steps[currentStep].title }}</span
        >
      </div>

      <div class="card-container">
        <div :class="['step-card', cardAnimation]">
          <div class="card-header">
            <span class="step-number">0{{ currentStep + 1 }}</span>
            <span class="step-title">{{ steps[currentStep].title }}</span>
          </div>

          <div class="card-body">
            <p class="guide-text">{{ steps[currentStep].guide }}</p>

            <!-- textarea 类型输入 -->
            <template v-if="steps[currentStep].inputType === 'textarea'">
              <textarea
                class="input-textarea"
                :value="inputs[currentStep].value"
                :placeholder="steps[currentStep].placeholder"
                :aria-label="steps[currentStep].title"
              ></textarea>
              <div
                v-if="currentStep === 0 && showTemplateHint"
                class="template-hint"
                @click="loadTemplate"
              >
                📜 检测到示例主题，点击加载「{{
                  matchedTemplate === 'chanyuan' ? '澶渊之盟' : matchedTemplate
                }}」引导骨架
              </div>
              <div class="ai-bar">
                <span v-if="isAILoading" class="ai-loading">AI 思辨引导思考中……</span>
                <button v-else class="ai-assist-btn" @click="onAIAssist">🧠 AI 思辨引导</button>
              </div>
            </template>

            <!-- select 类型输入 -->
            <template v-else-if="steps[currentStep].inputType === 'select'">
              <fieldset class="radio-group">
                <legend class="radio-legend">{{ steps[currentStep].title }}</legend>
                <label
                  v-for="opt in steps[currentStep].options"
                  :key="opt.value"
                  class="radio-item"
                >
                  <input v-model="inputs[currentStep].level" type="radio" :value="opt.value" />
                  <span>{{ opt.label }}</span>
                </label>
              </fieldset>
              <textarea
                v-if="inputs[currentStep].level"
                class="input-textarea"
                :value="inputs[currentStep].note"
                @input="onNoteInput"
                placeholder="补充说明定级理由与来源情况..."
                aria-label="定级说明"
              ></textarea>
              <div v-else class="placeholder-hint">请先选择证据级别</div>
              <div class="ai-bar">
                <span v-if="isAILoading" class="ai-loading">AI 思辨引导思考中……</span>
                <button v-else class="ai-assist-btn" @click="onAIAssist">🧠 AI 思辨引导</button>
              </div>
            </template>

            <!-- dual-textarea 类型输入 -->
            <template v-else-if="steps[currentStep].inputType === 'dual-textarea'">
              <div class="dual-box">
                <span class="box-label">视角一</span>
                <textarea
                  class="input-textarea half"
                  :value="inputs[currentStep].view1"
                  @input="(e) => onDualInput(e, 'view1')"
                  placeholder="输入第一个理论视角及其演绎解释..."
                  aria-label="视角一"
                ></textarea>
                <span class="box-label">视角二</span>
                <textarea
                  class="input-textarea half"
                  :value="inputs[currentStep].view2"
                  @input="(e) => onDualInput(e, 'view2')"
                  placeholder="输入第二个理论视角及其演绎解释..."
                  aria-label="视角二"
                ></textarea>
              </div>
              <div class="ai-bar">
                <span v-if="isAILoading" class="ai-loading">AI 思辨引导思考中……</span>
                <button v-else class="ai-assist-btn" @click="onAIAssist">🧠 AI 思辨引导</button>
              </div>
            </template>

            <!-- AI 响应 -->
            <div v-if="aiResponse" class="ai-response-box">
              <div v-if="aiReasoning" class="ai-reasoning-wrap">
                <span class="ai-reasoning-title">思考过程</span>
                <div class="ai-reasoning-body">{{ aiReasoning }}</div>
              </div>
              <div class="ai-content">{{ aiResponse }}</div>
              <div class="ai-actions-inline">
                <button class="btn-prev-sm" @click="closeAIAssist">收起</button>
                <button class="btn-submit-sm" @click="adoptPolished">采纳润色版</button>
              </div>
            </div>
          </div>

          <div class="card-footer">
            <button v-if="currentStep > 0" class="btn-prev" @click="prevStep">上一步</button>
            <button class="btn-submit" :disabled="reportLoading" @click="nextStep">
              {{ currentStep === 8 ? '生成报告' : '确认并继续' }}
            </button>
          </div>
        </div>
      </div>

      <!-- 报告生成中遮罩 -->
      <div v-if="reportLoading" class="report-loading-overlay">
        <div class="loading-card">
          <div class="ai-loading">AI 正在撰写报告……</div>
          <p class="loading-hint">报告生成后将自动跳转至阅读页面</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useDialecticHistory } from '../utils/useDialecticHistory';
import type { DialecticReport } from '../utils/useDialecticHistory';
import { steps, TEMPLATES, validateStep } from '../utils/dialectic-prompts';
import type { StepInput } from '../utils/dialectic-prompts';
import { callDialecticAI, generateDialecticReport } from '../utils/dialectic-ai';
import { createChatThemeController } from '../utils/chat-theme-controller';

type View = 'home' | 'dialectic' | 'report';

// --- State ---
const { loadReports, addReport, findReport, deleteReport, clearAllReports } = useDialecticHistory();

const view = ref<View>('home');
const reports = ref<DialecticReport[]>([]);
const currentStep = ref(0);
const inputs = ref<StepInput[]>(
  Array.from({ length: 9 }, () => ({ value: '', level: '', note: '', view1: '', view2: '' })),
);
const cardAnimation = ref('card-enter');
const reportLoading = ref(false);
const aiResponse = ref('');
const aiReasoning = ref('');
const isAILoading = ref(false);
const showTemplateHint = ref(false);
const matchedTemplate = ref<string | null>(null);
const currentReport = ref<DialecticReport | null>(null);
const notFound = ref(false);

// --- Theme (via shared controller) ---
const isDark = ref(false);
const themeCtrl = createChatThemeController(isDark, 'cislunar-dialectic-theme');

// --- Navigation ---
function enterDialectic() {
  view.value = 'dialectic';
  currentStep.value = 0;
  inputs.value = Array.from({ length: 9 }, () => ({
    value: '',
    level: '',
    note: '',
    view1: '',
    view2: '',
  }));
  aiResponse.value = '';
  aiReasoning.value = '';
  isAILoading.value = false;
  cardAnimation.value = 'card-enter';
}

function enterDemo() {
  const tpl = TEMPLATES['chanyuan'];
  if (!tpl) return;
  view.value = 'dialectic';
  currentStep.value = 0;
  inputs.value = JSON.parse(JSON.stringify(tpl.inputs));
  aiResponse.value = '';
  aiReasoning.value = '';
  isAILoading.value = false;
  cardAnimation.value = 'card-enter';
}

function goHome() {
  if (view.value === 'dialectic' && hasAnyInput()) {
    if (!confirm('返回首页将丢失当前进度，确定继续？')) return;
  }
  view.value = 'home';
  reports.value = loadReports();
}

function hasAnyInput(): boolean {
  return inputs.value.some((i) => i.value || i.level || i.note || i.view1 || i.view2);
}

function startNew() {
  enterDialectic();
}

function viewReport(id: number) {
  const report = findReport(id);
  if (report) {
    currentReport.value = report;
    notFound.value = false;
    view.value = 'report';
  } else {
    notFound.value = true;
    view.value = 'report';
  }
}

function clearHistory() {
  if (confirm('确定清空所有历史报告吗？此操作不可恢复。')) {
    clearAllReports();
    reports.value = [];
  }
}

function removeReport(id: number) {
  deleteReport(id);
  reports.value = loadReports();
}

function copyReport() {
  if (!currentReport.value) return;
  navigator.clipboard
    .writeText(currentReport.value.content)
    .then(() => {
      alert('已复制到剪贴板');
    })
    .catch(() => {
      alert('复制失败，请手动复制');
    });
}

// --- Step navigation ---
function nextStep() {
  if (currentStep.value === 8) {
    if (!validateStep(currentStep.value, inputs.value[currentStep.value])) {
      alert('请先完成当前步骤');
      return;
    }
    doGenerateReport();
    return;
  }
  if (!validateStep(currentStep.value, inputs.value[currentStep.value])) {
    alert('内容过于空洞或离题，请补充');
    return;
  }
  aiResponse.value = '';
  aiReasoning.value = '';
  cardAnimation.value = '';
  setTimeout(() => {
    currentStep.value++;
    cardAnimation.value = 'card-enter';
  }, 50);
}

function prevStep() {
  if (currentStep.value > 0) {
    aiResponse.value = '';
    aiReasoning.value = '';
    cardAnimation.value = '';
    setTimeout(() => {
      currentStep.value--;
      cardAnimation.value = 'card-enter';
    }, 50);
  }
}

// --- Input handlers ---
function onInput(e: Event) {
  const value = (e.target as HTMLTextAreaElement).value;
  inputs.value[currentStep.value].value = value;
  if (currentStep.value === 0) {
    detectTemplate(value);
  }
}

function onNoteInput(e: Event) {
  inputs.value[currentStep.value].note = (e.target as HTMLTextAreaElement).value;
}

function onDualInput(e: Event, field: 'view1' | 'view2') {
  inputs.value[currentStep.value][field] = (e.target as HTMLTextAreaElement).value;
}

function detectTemplate(text: string) {
  if (!text || text.length < 2) {
    showTemplateHint.value = false;
    matchedTemplate.value = null;
    return;
  }
  for (const key in TEMPLATES) {
    if (TEMPLATES[key].trigger.test(text)) {
      showTemplateHint.value = true;
      matchedTemplate.value = key;
      return;
    }
  }
  showTemplateHint.value = false;
  matchedTemplate.value = null;
}

function loadTemplate() {
  const key = matchedTemplate.value;
  if (!key) return;
  const tpl = TEMPLATES[key];
  if (!tpl) return;
  if (confirm(`检测到示例主题「${tpl.name}」，是否加载引导骨架？加载后可在此基础上编辑修改。`)) {
    inputs.value = JSON.parse(JSON.stringify(tpl.inputs));
    showTemplateHint.value = false;
    cardAnimation.value = '';
    setTimeout(() => {
      cardAnimation.value = 'card-enter';
    }, 50);
  }
}

// --- AI assist (via dialectic-ai transport seam) ---
function onAIAssist() {
  if (isAILoading.value) return;
  isAILoading.value = true;
  aiResponse.value = '';
  aiReasoning.value = '';
  callDialecticAI(currentStep.value, inputs.value)
    .then((result) => {
      isAILoading.value = false;
      aiResponse.value = result.content;
      aiReasoning.value = result.reasoning;
    })
    .catch(() => {
      isAILoading.value = false;
      aiResponse.value = 'AI 请求失败，请检查网络后重试。';
    });
}

function closeAIAssist() {
  aiResponse.value = '';
  aiReasoning.value = '';
}

function adoptPolished() {
  const text = aiResponse.value;
  const match = text.match(/【润色版】\s*([\s\S]*?)\s*【\/润色版】/);
  if (!match || !match[1].trim()) {
    alert('未找到润色版标记');
    return;
  }
  const polished = match[1].trim();
  const idx = currentStep.value;
  const step = steps[idx];
  if (step.inputType === 'textarea') {
    inputs.value[idx].value = polished;
    if (idx === 0) detectTemplate(polished);
  } else if (step.inputType === 'dual-textarea') {
    alert('双栏输入请手动调整');
  } else if (step.inputType === 'select') {
    alert('级别选择请手动调整');
  }
  aiResponse.value = '';
  aiReasoning.value = '';
  alert('已采纳润色版');
}

// --- Report generation (via dialectic-ai transport seam) ---
async function doGenerateReport() {
  if (reportLoading.value) return;
  reportLoading.value = true;
  const content = await generateDialecticReport(inputs.value);
  reportLoading.value = false;

  if (content) {
    const reportData = addReport({
      title: (inputs.value[0].value || '未命名报告').substring(0, 50),
      content,
      inputs: JSON.parse(JSON.stringify(inputs.value)),
    });
    currentReport.value = reportData;
    notFound.value = false;
    reports.value = loadReports();
    view.value = 'report';
  } else {
    alert('AI 生成报告失败，请重试。');
  }
}

// --- Lifecycle ---
onMounted(() => {
  themeCtrl.loadTheme();
  themeCtrl.applyTheme();
  reports.value = loadReports();

  // Check URL params for direct report access
  const urlParams = new URLSearchParams(window.location.search);
  const reportId = urlParams.get('reportId');
  if (reportId) {
    viewReport(Number(reportId));
  }
});
</script>

<style scoped lang="scss">
@use '../styles/dialectic';
</style>
