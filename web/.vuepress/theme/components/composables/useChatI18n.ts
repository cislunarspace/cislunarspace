const strings: Record<string, string> = {
  toolbarTitle: 'AI 问答',
  newChat: '新对话',
  welcomeEyebrow: '地月空间入门指南',
  welcomeTitle: '地月空间 AI 助手',
  welcomeDesc: '将先在全站页面中定位相关条目，再基于正文节选与站点索引组织回答',
  inputPlaceholder: '输入你的问题...',
  send: '发送',
  routerPhase: '正在匹配全站相关页面…',
  processTitle: '处理过程',
  reasoningTitle: '思考过程',
  answerStarting: '开始输出回答',
  stepNav: '全站导览，匹配相关页面',
  stepExcerpt: '载入相关页面正文节选',
  stepAnswer: '整理并输出回答',
  stepAnswerAlone: '正在请求模型并生成回答',
  noStrongMatch: '未在地图中精确定位，将结合全站索引回答',
  configError: 'AI 配置加载失败，请检查 /ai-chat-config.json。',
  emptyReply: '抱歉，未获取到有效回复。',
  networkError: '请求失败，请检查网络或服务器代理配置。',
};

export function useChatI18n() {
  function t(key: string): string {
    return strings[key] ?? key;
  }

  return { t };
}
