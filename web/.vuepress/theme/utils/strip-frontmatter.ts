export function stripFrontmatter(raw: string): string {
  const match = raw.match(/^---\n[\s\S]*?\n---\n/);
  if (match) {
    return raw.slice(match[0].length);
  }
  return raw;
}
