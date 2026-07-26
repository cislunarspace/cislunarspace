export interface LocaleText {
  copy: string;
  copied: string;
}

export function getCopyPageLocaleText(path: string): LocaleText {
  const isEn = path.startsWith('/en/');
  return isEn ? { copy: 'Copy page', copied: 'Copied!' } : { copy: '复制页面', copied: '已复制' };
}

const HIDDEN_PATHS = new Set([
  '/',
  '/en/',
  '/en',
  '/ai-chat',
  '/ai-chat/',
  '/en/ai-chat',
  '/en/ai-chat/',
]);

export function shouldShowCopyButton(path: string, frontmatter: Record<string, unknown>): boolean {
  if (HIDDEN_PATHS.has(path)) return false;
  if (frontmatter.home) return false;
  return true;
}
