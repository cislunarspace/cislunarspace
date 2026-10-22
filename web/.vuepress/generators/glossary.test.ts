import { describe, expect, test, beforeEach, afterEach } from 'vitest';
import fs from 'fs';
import os from 'os';
import path from 'path';
import {
  extractCitations,
  extractDefinition,
  generateGlossaryDictionary,
  parseKeywords,
  splitTitle,
  stripCitationsAndMath,
} from './glossary';
import type { GlossaryScan } from '../sidebar/types';
import type { MarkdownFile } from '../utils/markdown-walker';

const orbitsCategory = { slug: 'orbits', label: '任务轨道', order: 1, parentSlug: null };
const fundamentalsCategory = {
  slug: 'fundamentals',
  label: '基础概念',
  order: 2,
  parentSlug: null,
};

function markdown(relPath: string, frontmatter: string, body: string): MarkdownFile {
  return {
    absPath: `/tmp/${relPath}`,
    relPath,
    content: `---\n${frontmatter}\n---\n\n${body}`,
  };
}

describe('定义段提取', () => {
  test('取「## 定义」段到下一个二级标题', () => {
    const body = '## 定义\n\n第一句。第二句。\n\n## 应用价值\n\n不要这段。';
    expect(extractDefinition(body)).toBe('第一句。第二句。');
  });

  test('接受「定义与分层」这类变体标题', () => {
    const body = '## 定义与分层\n\n分层定义内容。\n\n## 其他\n';
    expect(extractDefinition(body)).toBe('分层定义内容。');
  });

  test('没有定义标题时返回空串', () => {
    expect(extractDefinition('## 相空间\n\n内容。\n')).toBe('');
  });
});

describe('引用键与公式清理', () => {
  test('多键引用按逗号拆开并按出现顺序去重', () => {
    expect(extractCitations('甲 \\cite{a,b} 乙 \\cite{b,c}')).toEqual(['a', 'b', 'c']);
    expect(extractCitations('没有引用')).toEqual([]);
  });

  test('剥离引用标记与公式定界符后保留正文', () => {
    expect(stripCitationsAndMath('关于 $L_1$ 的结论 \\cite{a}。')).toBe('关于 L_1 的结论。');
    expect(stripCitationsAndMath('前文 $$x+y$$ 后文')).toBe('前文 后文');
  });
});

describe('标题与关键词解析', () => {
  test('标题拆出中文名与英文括注', () => {
    expect(splitTitle('自动微分（Automatic Differentiation）')).toEqual({
      zh: '自动微分',
      en: 'Automatic Differentiation',
    });
    expect(splitTitle('晕轨道')).toEqual({ zh: '晕轨道', en: null });
  });

  test('关键词接受逗号字符串与数组，去重去空', () => {
    expect(parseKeywords('晕轨道, Halo Orbit,晕轨道')).toEqual(['晕轨道', 'Halo Orbit']);
    expect(parseKeywords(['a', ' b ', 'a'])).toEqual(['a', 'b']);
    expect(parseKeywords(undefined)).toBeUndefined();
  });
});

describe('generateGlossaryDictionary', () => {
  let tmpDir: string;

  beforeEach(() => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'glossary-dict-'));
    fs.mkdirSync(path.join(tmpDir, 'public'), { recursive: true });
  });

  afterEach(() => {
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  test('跨分类同名 slug 各自取自己的定义与页面路径', () => {
    const files: MarkdownFile[] = [
      markdown(
        'glossary/orbits/vsi.md',
        'title: 变比冲发动机（VSI）\npermalink: /glossary/orbits/vsi/\nkeywords: 变比冲, VSI',
        '## 定义\n\n任务轨道侧的视角 \\cite{ozimek2010}。\n',
      ),
      markdown(
        'glossary/fundamentals/vsi.md',
        'title: 变比冲发动机（VSI）\npermalink: /glossary/fundamentals/vsi/\nkeywords: 变比冲',
        '## 定义\n\n基础概念侧的视角 \\cite{prussing2010}。\n',
      ),
    ];
    const scan: GlossaryScan = {
      entries: [
        {
          slug: 'vsi',
          title: '变比冲发动机（VSI）',
          path: '/glossary/orbits/vsi/',
          category: orbitsCategory,
        },
        {
          slug: 'vsi',
          title: '变比冲发动机（VSI）',
          path: '/glossary/fundamentals/vsi/',
          category: fundamentalsCategory,
        },
      ],
    };

    generateGlossaryDictionary(files, scan, tmpDir);

    const written = JSON.parse(
      fs.readFileSync(path.join(tmpDir, 'public', 'glossary-dictionary.json'), 'utf8'),
    );
    const orbits = written.categories.find((c: { slug: string }) => c.slug === 'orbits');
    const fundamentals = written.categories.find(
      (c: { slug: string }) => c.slug === 'fundamentals',
    );

    expect(orbits.entries[0].definition).toBe('任务轨道侧的视角。');
    expect(fundamentals.entries[0].definition).toBe('基础概念侧的视角。');
    expect(orbits.entries[0].url).toBe('/glossary/orbits/vsi/');
    expect(fundamentals.entries[0].url).toBe('/glossary/fundamentals/vsi/');
    expect(orbits.entries[0].citations).toEqual(['ozimek2010']);
    expect(fundamentals.entries[0].citations).toEqual(['prussing2010']);
  });

  test('定义段取不到时退回 frontmatter description', () => {
    const files: MarkdownFile[] = [
      markdown(
        'glossary/orbits/phase-space.md',
        'title: 相空间\ndescription: 由位置和速度坐标张成的空间。',
        '## 相空间\n\n正文内容很长。\n',
      ),
    ];
    const scan: GlossaryScan = {
      entries: [
        {
          slug: 'phase-space',
          title: '相空间',
          path: '/glossary/orbits/phase-space/',
          category: orbitsCategory,
        },
      ],
    };

    generateGlossaryDictionary(files, scan, tmpDir);

    const written = JSON.parse(
      fs.readFileSync(path.join(tmpDir, 'public', 'glossary-dictionary.json'), 'utf8'),
    );
    expect(written.categories[0].entries[0].definition).toBe('由位置和速度坐标张成的空间。');
    expect(written.categories[0].entries[0].citations).toBeUndefined();
  });

  test('别名只在词条声明时出现', () => {
    const files: MarkdownFile[] = [
      markdown(
        'glossary/orbits/aro.md',
        'title: 轴向共振轨道（ARO）\naliases: [轴向共振]',
        '## 定义\n\n三维共振轨道的一种。\n',
      ),
      markdown('glossary/orbits/nrho.md', 'title: 近直线晕轨道', '## 定义\n\n稳定性界定的子集。\n'),
    ];
    const scan: GlossaryScan = {
      entries: [
        {
          slug: 'aro',
          title: '轴向共振轨道（ARO）',
          path: '/glossary/orbits/aro/',
          category: orbitsCategory,
        },
        {
          slug: 'nrho',
          title: '近直线晕轨道',
          path: '/glossary/orbits/nrho/',
          category: orbitsCategory,
        },
      ],
    };

    generateGlossaryDictionary(files, scan, tmpDir);

    const written = JSON.parse(
      fs.readFileSync(path.join(tmpDir, 'public', 'glossary-dictionary.json'), 'utf8'),
    );
    const bySlug = Object.fromEntries(
      written.categories[0].entries.map((e: { slug: string }) => [e.slug, e]),
    );
    expect(bySlug.aro.aliases).toEqual(['轴向共振']);
    expect(bySlug.nrho.aliases).toBeUndefined();
  });
});
