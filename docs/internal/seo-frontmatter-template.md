# 页面元数据与 frontmatter 模板

页面元数据决定标签页标题、浏览器描述与分享卡片。字段的读取规则集中在 `web/.vuepress/utils/page-metadata-core.mjs`，标签页标题的拼装规则见[页面标题定制](page-title-customization.md)。

## 页面模板

```yaml
---
permalink: /页面路径/
title: 页面名
description: 一到两句话，说明页面主题与范围
keywords: 关键词1, 关键词2, 关键词3
author: 天疆说
date: 2026-03-07
lastUpdated: 2026-03-07
category: [分类1, 分类2]
image: /logo.png
wechatShare:
  title: 分享标题
  desc: 分享描述
  image: /logo.png
---
```

## 字段说明

| 字段 | 作用 |
| --- | --- |
| `permalink` | 固定路由。未设置时按文件路径生成。 |
| `title` | 页面名，供标签页标题、搜索、侧边栏与 AI 索引使用。只写简洁的页面名，不带栏目前缀。 |
| `description` | 页面摘要，用于浏览器描述与分享描述的回退。写一到两句话。 |
| `keywords` | 3 到 5 个关键词，用逗号分隔。词条的 keywords 会进入词典工件，供检索使用。 |
| `author` | 作者署名。 |
| `date` | 首次发布日期，格式 `YYYY-MM-DD`。 |
| `lastUpdated` | 最近更新日期，格式 `YYYY-MM-DD`。内容改动后同步更新。 |
| `category` | 分类数组。即使只有一个值也写成 `[foo]`，便于下游统一处理。 |
| `image` | 分享图片路径。省略时使用 `/logo.png`。 |
| `wechatShare` | 微信分享覆盖项。`title`、`desc`、`image` 优先于顶层同名字段。 |
| `layout` | 指定页面外壳，例如 AI 问答页。 |
| `draft` | 草稿标记。 |

## 分享元数据的生成

`og:` 与 `twitter:` 不需要手写。构建时由 `web/.vuepress/og-meta-plugin.ts` 与客户端 `useOgMeta` 从 `title`、`description`、`image` 与 `wechatShare` 生成。手写这两个块不会生效，还会与页面实际元数据不一致。

分享标题优先取 `wechatShare.title`，其次取 `title`。分享描述优先取 `wechatShare.desc`，其次取 `description`。分享图片优先取 `wechatShare.image`，其次取 `image`，都没有时使用 `/logo.png`。

## 写作要求

标题与描述都按页面实际内容写，不堆砌关键词。标题回答「这个页面是什么」，描述补充「覆盖哪些范围」。关键词按主题选取，不与分类混用。
