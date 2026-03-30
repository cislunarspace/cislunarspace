# SEO优化的Front Matter模板

## 中文页面模板
```yaml
---
layout: Page
sidebar: /  # 或指定具体侧边栏路径
permalink: /页面路径/
title: 页面标题  # VuePress SEO插件会自动添加"地月空间入门指南 | "前缀
description: 页面描述，150-160字符，包含关键词
keywords: 关键词1, 关键词2, 关键词3
author: 天疆说
date: 2026-03-07
lastUpdated: 2026-03-07
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

## 英文页面模板
```yaml
---
layout: Page
sidebar: /en/  # 或指定具体侧边栏路径
permalink: /en/页面路径/
title: Page Title  # VuePress SEO插件会自动添加"Cislunar Space Beginner's Guide | "前缀
description: Page description, 150-160 characters, include keywords
keywords: keyword1, keyword2, keyword3
author: Tianjiang Shuo
date: 2026-03-07
lastUpdated: 2026-03-07
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

## 关键SEO字段说明

1. **title**: 页面标题，格式为"页面标题 - 网站名称"，长度50-60字符
2. **description**: 页面描述，150-160字符，包含主要关键词
3. **keywords**: 关键词，3-5个，用逗号分隔
4. **author**: 作者，增强权威性
5. **date/lastUpdated**: 发布时间和最后更新时间，有利于新鲜度排名
6. **og/twitter**: Open Graph和Twitter卡片元数据，提升社交媒体分享效果
7. **wechatShare**: 微信分享专用元数据

## 页面分类和关键词建议

### 1. 地月空间是什么 (What Is Cislunar Space)
- **主要关键词**: 地月空间, 地月空间定义, 地月空间环境, 地月空间战略价值
- **英文关键词**: cislunar space, cislunar space definition, cislunar environment, strategic value

### 2. 地月空间术语词典 (Cislunar Glossary)
- **主要关键词**: CR3BP, 圆形限制性三体问题, X射线脉冲星导航, 地月空间术语
- **英文关键词**: CR3BP, Circular Restricted Three-Body Problem, X-ray pulsar navigation, cislunar terminology

### 3. 资源与工具 (Resources & Tools)
- **主要关键词**: 地月空间数据集, JPL星历, 轨道仿真工具, 航天资源
- **英文关键词**: cislunar datasets, JPL ephemerides, orbit simulation tools, aerospace resources

### 4. 研究前沿 (Research Frontiers)
- **主要关键词**: 地月空间研究方向, 研究机构, 期刊会议, 重大工程项目
- **英文关键词**: cislunar research directions, research institutions, journals conferences, major projects
