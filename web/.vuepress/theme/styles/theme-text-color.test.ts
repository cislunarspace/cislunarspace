import { describe, test, expect, beforeAll } from 'vitest';
import * as sass from 'sass-embedded';
import * as path from 'path';

function compileScss(): string {
  const scssPath = path.resolve(__dirname, 'index.scss');
  const result = sass.compile(scssPath);
  return result.css;
}

/** 取指定选择器块的正文（大括号之间），找不到返回 null。 */
function ruleBlock(css: string, selector: string): string | null {
  const start = css.indexOf(selector);
  if (start === -1) return null;
  const open = css.indexOf('{', start);
  const close = css.indexOf('}', open);
  if (open === -1 || close === -1) return null;
  return css.slice(open + 1, close);
}

describe('theme text colors', () => {
  let compiledCss: string;

  beforeAll(() => {
    compiledCss = compileScss();
  });

  test('light and dark themes both define the semantic text variables', () => {
    const rootBlock = ruleBlock(compiledCss, ':root');
    const darkBlock = ruleBlock(compiledCss, '[data-theme=dark]');

    expect(rootBlock).not.toBeNull();
    expect(darkBlock).not.toBeNull();

    // 语义变量成对存在，具体色值不在测试里钉死
    for (const block of [rootBlock, darkBlock]) {
      expect(block).toMatch(/--vp-c-text:\s*[^;]+;/);
      expect(block).toMatch(/--c-text:\s*[^;]+;/);
    }

    // 深浅主题的同名变量取值应不同，防止误写成同一份
    const lightText = rootBlock?.match(/--vp-c-text:\s*([^;]+);/)?.[1];
    const darkText = darkBlock?.match(/--vp-c-text:\s*([^;]+);/)?.[1];
    expect(lightText).toBeDefined();
    expect(darkText).toBeDefined();
    expect(lightText).not.toBe(darkText);
  });

  test('paragraphs use the primary text color variable', () => {
    const paragraphBlock = ruleBlock(compiledCss, '[vp-content] p');
    expect(paragraphBlock).toContain('color: var(--vp-c-text)');
  });
});
