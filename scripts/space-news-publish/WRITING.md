# 撰稿格式与内容规范

## Frontmatter 模板

### 中文

```yaml
---
layout: SpaceNewsArticle
title: "简短标题"
description: "一句话摘要（用于 SEO 与首页卡片）"
permalink: /space-news/YYYY/MM/YYYY-MM-DD-slug/
author: 天疆说
date: YYYY-MM-DD
lastUpdated: YYYY-MM-DD
category: china
image: ./figures/YYYY-MM-DD-slug/hero.jpg
---
```

### 英文

```yaml
---
layout: SpaceNewsArticle
title: "Short English title"
description: "One-line summary"
permalink: /en/space-news/YYYY/MM/YYYY-MM-DD-slug/
author: Tianjiangshuo
date: YYYY-MM-DD
lastUpdated: YYYY-MM-DD
category: china
image: ./figures/YYYY-MM-DD-slug/hero.jpg
---
```

`image:` 可选；只有图片文件真实存在时才写。配图不可用时删除该字段。

## 字段规则

| 字段 | 必填 | 说明 |
|------|------|------|
| `layout` | ✅ | 固定 `SpaceNewsArticle` |
| `title` / `description` | ✅ | 不使用 YAML 会误解的未转义引号 |
| `permalink` | ✅ | 末尾带 `/`；英文以 `/en/` 开头 |
| `author` | ✅ | 中文 `天疆说`；英文 `Tianjiangshuo` |
| `date` | ✅ | 通常为报道发布日；发射结果以完成确认日为准 |
| `lastUpdated` | ✅ | 修改稿件或 README 时同步更新 |
| `category` | ✅ | 使用 SKILL.md 中预定义分类 |
| `image` | ❌ | 相对路径必须以 `./figures/` 开头 |

## 正文结构

### 中文

```markdown
# 与 title 一致或略短

**摘要：** 用 1–2 段交代发生了什么、为什么重要、关键数据和时间。

正文段落……

## 信息来源（原文）

- [来源名称](https://...)
```

### 英文

```markdown
# English title

**Summary:** One or two concise paragraphs covering the event, why it matters, key numbers and timing.

Article body...

## Sources (original pages)

- [Source name](https://...)
```

## 双语同步

- 中文新闻先写中文再译英文；国际新闻可先写英文再译中文。
- 中英文必须使用同一 slug、同一 `date`、同一分类语义。
- 英文稿事实不能少于中文稿；若中文稿后续补事实，英文稿也要同步。
- 预发稿更新为结果稿时保持 slug 不变，只更新标题、摘要、正文、来源和 `lastUpdated`。

## README 索引

- 每个 `YYYY/MM/README.md` 维护当月文章索引；中英两侧都要更新。
- 新建年/月目录时同步创建中英 README。
- patch README 表格后检查是否出现 `||`、frontmatter stray `|`、未闭合 YAML 引号。
- 英文 README 的 `lastUpdated` 容易遗漏；修改索引时必须同步更新。

## YAML 注意事项

- frontmatter 字段内不要使用未转义英文弯引号；中文引用优先用 `「」`。
- frontmatter 引号必须成对闭合。
- 正文 Markdown 标题可使用弯引号，但 `title:` / `description:` 不要。
- 修改 frontmatter 前确认替换锚点唯一；复杂修改优先整体重写文件，避免重复 YAML 块。

## 事实与版权

- 日期跨时区时写清 UTC/当地时间并指向原报道。
- 不确定信息写「据报道」「待机构确认」，不要补编轨参、载荷或调查结论。
- 不整篇复制付费墙内容；使用摘要 + 链接。
- Blue Origin / SpaceX / 中国载人航天等事故或乘组信息必须以官方声明或权威机构稿为准。
