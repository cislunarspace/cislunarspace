[简体中文](seo-frontmatter-template.md) | English

# SEO-optimized front matter templates

## Chinese page template

```yaml
---
permalink: /页面路径/
title: 页面标题  # 只写简洁的页面名，不要带栏目前缀
description: 页面描述，150-160字符，包含关键词
keywords: 关键词1, 关键词2, 关键词3
author: 天疆说
date: 2026-03-07
lastUpdated: 2026-03-07
category: [关键词1, 关键词2]  # 必须为数组；单个分类也要写成单元素数组
wechatShare:
  title: 微信分享标题
  desc: 微信分享描述
  image: /logo.png
og:
  title: 页面标题  # 不需要添加后缀，SEO插件会处理
  description: Open Graph描述
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 页面标题  # 不需要添加后缀，SEO插件会处理
  description: Twitter卡片描述
  image: /logo.png
---
```

## English page template

```yaml
---
permalink: /en/页面路径/
title: Page Title  # 只写简洁的页面名，不要带栏目前缀
description: Page description, 150-160 characters, include keywords
keywords: keyword1, keyword2, keyword3
author: Tianjiang Shuo
date: 2026-03-07
lastUpdated: 2026-03-07
category: [keyword1, keyword2]  # must be an array; single category also wraps in []
wechatShare:
  title: WeChat Share Title
  desc: WeChat Share Description
  image: /logo.png
og:
  title: Page Title  # 不需要添加后缀，SEO插件会处理
  description: Open Graph Description
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Page Title  # 不需要添加后缀，SEO插件会处理
  description: Twitter Card Description
  image: /logo.png
---
```

## Key SEO fields explained

1. **title**: page title — the concise page name only (e.g. "西北工业大学"), no column prefix (e.g. "地月空间研究机构与团队盘点 | "); long titles go into `wechatShare.title`
2. **description**: page description, 150–160 characters, including main keywords
3. **keywords**: keywords, 3–5, comma-separated
4. **author**: author name, adds credibility
5. **date/lastUpdated**: publish and last-update times; good for freshness ranking
6. **og/twitter**: Open Graph and Twitter card metadata; improves social sharing
7. **wechatShare**: WeChat-share-specific metadata
8. **category**: category tags, **must be an array** (even for a single category), so downstream consumers see one uniform shape. For new articles write `category: [foo]` directly

## Suggested categories & keywords per section

### 1. What Is Cislunar Space (地月空间是什么)

- **Primary keywords**: 地月空间, 地月空间定义, 地月空间环境, 地月空间战略价值
- **English keywords**: cislunar space, cislunar space definition, cislunar environment, strategic value

### 2. Cislunar Glossary (地月空间术语词典)

- **Primary keywords**: CR3BP, 圆形限制性三体问题, X射线脉冲星导航, 地月空间术语
- **English keywords**: CR3BP, Circular Restricted Three-Body Problem, X-ray pulsar navigation, cislunar terminology

### 3. Resources & Tools (资源与工具)

- **Primary keywords**: 地月空间数据集, JPL星历, 轨道仿真工具, 航天资源
- **English keywords**: cislunar datasets, JPL ephemerides, orbit simulation tools, aerospace resources

### 4. Research Frontiers (研究前沿)

- **Primary keywords**: 地月空间研究方向, 研究机构, 期刊会议, 重大工程项目
- **English keywords**: cislunar research directions, research institutions, journals conferences, major projects
