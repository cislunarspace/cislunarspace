import fs from 'fs';
import path from 'path';
import { parseFrontmatterAndBody } from '../utils/frontmatter-parser.ts';
import type { MarkdownFile } from '../utils/markdown-walker.ts';
import { categoryMeta } from '../taxonomy/adapters/news-categories.ts';
import type {
  Article,
  SidebarLatestItem,
  SidebarCategory,
  SidebarMonth,
  SidebarYear,
  SidebarData,
} from '../sidebar/types.ts';

const categoryMetaDefault = { zh: '', en: '', color: '#64748b' };

export function filesToArticles(
  files: MarkdownFile[],
  relPathPrefix: string,
  urlPrefix: string,
): Article[] {
  return files
    .filter((f) => {
      const filename = path.basename(f.relPath);
      if (!f.relPath.startsWith(relPathPrefix) || filename.startsWith('README')) return false;
      const { frontmatter } = parseFrontmatterAndBody(f.content);
      return frontmatter.draft !== true;
    })
    .map((f) => {
      const { frontmatter } = parseFrontmatterAndBody(f.content);
      const relFromBase = f.relPath.slice(relPathPrefix.length);
      const pagePath =
        (frontmatter.permalink as string | undefined) ||
        urlPrefix + relFromBase.replace(/\.md$/i, '/');

      let imageUrl: string | null = (frontmatter.image as string | undefined) || null;
      if (imageUrl && imageUrl.startsWith('./')) {
        const mdDir = '/' + f.relPath.replace(/\/[^/]+$/, '') + '/';
        imageUrl = mdDir + imageUrl.slice(2);
      }

      // `category` is required to be a string[] by the SEO frontmatter template
      // (see web/docs/seo-frontmatter-template.md) and normalized across the
      // corpus by scripts/maintenance/normalize-space-news-category.ts.
      // We trust that invariant here so downstream consumers do not need to
      // branch on scalar vs array.
      const category = frontmatter.category as string[] | undefined;

      return {
        relativePath: f.relPath,
        path: pagePath,
        title: (frontmatter.title as string | undefined) || '',
        description: (frontmatter.description as string | undefined) || '',
        date: (frontmatter.date as string | undefined) || null,
        lastUpdated: (frontmatter.lastUpdated as string | undefined) || null,
        author: (frontmatter.author as string | undefined) || null,
        category: category && category.length ? category : null,
        image: imageUrl,
      };
    });
}

export function buildSidebarData(
  articles: Article[],
  urlPrefix: string,
  lang: string,
  newsCategoryMeta: Record<string, { zh: string; en: string; color: string }>,
): SidebarData {
  const isEn = lang === 'en';

  const latest: SidebarLatestItem[] = [...articles]
    .sort((a, b) => {
      const da = a.date ? new Date(a.date).getTime() : 0;
      const db = b.date ? new Date(b.date).getTime() : 0;
      return db - da;
    })
    .slice(0, 8)
    .map((a) => ({
      title: a.title,
      path: a.path,
      date: a.date,
      category: a.category,
    }));

  const catCount: Record<string, number> = {};
  for (const a of articles) {
    for (const c of a.category ?? []) {
      catCount[c] = (catCount[c] || 0) + 1;
    }
  }
  const categories: SidebarCategory[] = Object.entries(catCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 12)
    .map(([key, count]) => {
      const meta = newsCategoryMeta[key] || categoryMetaDefault;
      return { key, label: isEn ? meta.en : meta.zh, count, color: meta.color };
    });

  const archiveMap = new Map<string, Map<number, { count: number; path: string }>>();
  for (const a of articles) {
    if (!a.date) continue;
    const d = new Date(a.date);
    const y = d.getFullYear();
    const m = d.getMonth() + 1;
    const yk = String(y);
    if (!archiveMap.has(yk)) archiveMap.set(yk, new Map());
    const monthMap = archiveMap.get(yk)!;
    if (!monthMap.has(m))
      monthMap.set(m, { count: 0, path: `${urlPrefix}${yk}/${String(m).padStart(2, '0')}/` });
    monthMap.get(m)!.count++;
  }
  const archive: SidebarYear[] = [];
  for (const [year, monthMap] of [...archiveMap.entries()].sort((a, b) =>
    b[0].localeCompare(a[0]),
  )) {
    const months: SidebarMonth[] = [];
    for (const [month, info] of [...monthMap.entries()].sort((a, b) => b[0] - a[0])) {
      months.push({
        month,
        label: isEn
          ? new Date(parseInt(year), month - 1, 1).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
            })
          : `${year}年${month}月`,
        path: info.path,
        count: info.count,
      });
    }
    archive.push({ year: parseInt(year), months });
  }

  return { latest, categories, archive, stats: { total: articles.length } };
}

export function generateSpaceNewsArtifacts(files: MarkdownFile[], outDir: string): void {
  const zhArticles = filesToArticles(files, 'space-news/', '/space-news/');
  const enArticles = filesToArticles(files, 'en/space-news/', '/en/space-news/');

  // Per-locale article files (no longer bundled together)
  const zhArticlesJson = JSON.stringify(zhArticles, null, 2);
  const enArticlesJson = JSON.stringify(enArticles, null, 2);
  console.log(
    `Generated space-news-articles-zh.json (${zhArticles.length}), space-news-articles-en.json (${enArticles.length})`,
  );

  const sidebarData = {
    zh: buildSidebarData(zhArticles, '/space-news/', 'zh', categoryMeta),
    en: buildSidebarData(enArticles, '/en/space-news/', 'en', categoryMeta),
    categoryMeta,
  };

  const sidebarJson = JSON.stringify(sidebarData, null, 2);
  console.log('Generated space-news-sidebar-data.json');

  // All artifacts are written to public/ only — the runtime fetch location.
  const publicDir = path.join(outDir, 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  fs.writeFileSync(path.join(publicDir, 'space-news-articles-zh.json'), zhArticlesJson);
  fs.writeFileSync(path.join(publicDir, 'space-news-articles-en.json'), enArticlesJson);
  fs.writeFileSync(path.join(publicDir, 'space-news-sidebar-data.json'), sidebarJson);
}
