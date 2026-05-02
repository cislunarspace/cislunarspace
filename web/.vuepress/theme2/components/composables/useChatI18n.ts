import { computed } from 'vue'

type ChatLang = 'zh' | 'en'

const strings: Record<string, Record<ChatLang, string>> = {
  toolbarTitle: { zh: 'AI 问答', en: 'AI Chat' },
  newChat: { zh: '新对话', en: 'New Chat' },
  welcomeEyebrow: { zh: '地月空间入门指南', en: 'Cislunar Space Guide' },
  welcomeTitle: { zh: '地月空间 AI 助手', en: 'Cislunar Space AI Assistant' },
  welcomeDesc: {
    zh: '将先在全站页面中定位相关条目，再基于正文节选与站点索引组织回答',
    en: 'We first find relevant site pages, then answer using their excerpts and the site link index',
  },
  inputPlaceholder: { zh: '输入你的问题...', en: 'Type your question...' },
  send: { zh: '发送', en: 'Send' },
  thinking: { zh: '正在思考...', en: 'Thinking...' },
  routerPhase: { zh: '正在匹配全站相关页面…', en: 'Matching site pages…' },
  processTitle: { zh: '处理过程', en: 'Progress' },
  reasoningTitle: { zh: '思考过程', en: 'Reasoning' },
  answerStarting: { zh: '开始输出回答', en: 'Answer starting' },
  stepNav: { zh: '全站导览，匹配相关页面', en: 'Site map: pick relevant pages' },
  stepExcerpt: { zh: '载入相关页面正文节选', en: 'Load page text excerpts' },
  stepAnswer: { zh: '整理并输出回答', en: 'Compose final answer' },
  stepAnswerAlone: { zh: '正在请求模型并生成回答', en: 'Requesting model and generating' },
  noStrongMatch: {
    zh: '未在地图中精确定位，将结合全站索引回答',
    en: 'No strong match; answering with full site index',
  },
  configError: {
    zh: 'AI 配置加载失败，请检查 /ai-chat-config.json。',
    en: 'AI configuration failed to load. Please check /ai-chat-config.json.',
  },
  emptyReply: {
    zh: '抱歉，未获取到有效回复。',
    en: 'Sorry, no valid response was received.',
  },
  networkError: {
    zh: '请求失败，请检查网络或服务器代理配置。',
    en: 'Request failed. Please check the network or server proxy configuration.',
  },
}

export function useChatI18n(isEn: () => boolean) {
  const lang = computed<ChatLang>(() => (isEn() ? 'en' : 'zh'))

  function t(key: string): string {
    const item = strings[key]
    if (!item) return key
    return item[lang.value] ?? key
  }

  return { t }
}
