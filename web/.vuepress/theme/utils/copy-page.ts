const HIDDEN_PATHS = new Set(['/', '/ai-chat', '/ai-chat/']);

export function shouldShowCopyButton(path: string, frontmatter: Record<string, unknown>): boolean {
  if (HIDDEN_PATHS.has(path)) return false;
  if (frontmatter.home) return false;
  return true;
}
