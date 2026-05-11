/**
 * Convert Markdown to plain text for AI context generation.
 * Handles code blocks, links, images, math, headers, formatting, lists, and HTML.
 */
export function markdownToPlain(body: string): string {
  let s = String(body)
  s = s.replace(/```[\s\S]*?```/g, '\n')
  s = s.replace(/`([^`]+)`/g, '$1')
  s = s.replace(/!\[([^\]]*)\]\([^)]+\)/g, '$1')
  s = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1')
  s = s.replace(/\$\$[\s\S]+?\$\$/g, ' ')
  s = s.replace(/\\[\[\(][\s\S]+?\\[\]\)]/g, ' ')
  s = s.replace(/^#{1,6}\s+/gm, '')
  s = s.replace(/\*\*([^*]+)\*\*/g, '$1')
  s = s.replace(/(^|[^*])\*([^*\n]+)\*/g, '$1$2')
  s = s.replace(/^>\s?/gm, '')
  s = s.replace(/^\s*[-*+]\s+/gm, '• ')
  s = s.replace(/^\s*\d+\.\s+/gm, '')
  s = s.replace(/<\/[^>]+>/g, '\n')
  s = s.replace(/<[^>]+>/g, ' ')
  s = s.replace(/\n{3,}/g, '\n\n')
  return s.replace(/\s+\n/g, '\n').trim()
}
