# 撰稿格式与内容规范

本文件管两件事：**格式**（frontmatter、正文结构、引号、双语同步）和**风格**（怎么写让人愿意读）。先格式，后风格。

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

`image:` 可选；只有图片文件真实存在时才写。配图不可用时删除该字段，不留坏链接。

## 字段规则

| 字段 | 必填 | 说明 |
|------|------|------|
| `layout` | ✅ | 固定 `SpaceNewsArticle` |
| `title` / `description` | ✅ | 英文双引号包裹，内部零引号（见引号铁律） |
| `permalink` | ✅ | 末尾带 `/`；英文以 `/en/` 开头 |
| `author` | ✅ | 中文 `天疆说`；英文 `Tianjiangshuo` |
| `date` | ✅ | 报道发布日；发射结果以完成确认日为准 |
| `lastUpdated` | ✅ | 修改稿件或 README 时同步更新 |
| `category` | ✅ | 见 SKILL.md 分类清单 |
| `image` | ❌ | 相对路径必须以 `./figures/` 开头 |

## 引号铁律（必读）

引号是这套站点最容易出 bug 的地方。规则按位置分三层：

| 位置 | 用什么 | 例子 |
|------|--------|------|
| frontmatter `title:` / `description:` | 英文双引号 `"` 包裹，**内部零引号**（任何形式都不能出现） | `title: "力箭一号遥十四发射成功"` ✅<br>`title: "SpaceX 创纪录 IPO"` ✅<br>`description: "被称为破百的里程碑"` ✅（去掉引号） |
| 中文正文（H1、段落、列表） | 中文全角引号 `“”` | `成为国内首个“破百”的民商火箭型号` ✅ |
| 英文正文 | 英文双引号 `""` | `what the operator calls a "Q2 triple-run"` ✅ |

为什么这么严：frontmatter 是 YAML，内部嵌套引号会让 parser 在 build 时崩（`YAMLException`）。正文是 Markdown，引号不破解析，但中文正文用英文引号视觉突兀、排版不专业。

历史包袱：2026 年 6 月之前的部分中文稿正文用了英文双引号（共 28 篇 / 113 处）。这些不影响构建，但下次重写相关稿时顺手清成全角。**新稿一律合规**。

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

## 写作风格

以下 6 条原话引自 CLAUDE.md，适用于本栏目所有面向读者的文本（标题、摘要、正文、README、来源说明）：

- **善于总结材料**：材料弄全弄准，去粗取精、去伪存真、由此及彼、由表及里，反映事物本质；不堆砌细节、不拼凑清单。
- **不用夸大的修饰词**：不写"权威""强大""完整""单一事实来源"之类的修饰，它们减损力量。
- **注意词语的逻辑界限**：相邻概念要划清（如"配置"与"运行规格"、"力模型"与"力模型聚合"），不混用、不模糊。
- **废话应当尽量除去**。
- **通俗、亲切，由小讲到大，由近讲到远，引人入胜**：先讲读者已知／当前的事物，再推到陌生／抽象的；忌一上来就宏大叙事或先搬死人、外国人。
- **与读者完全平等**：靠分析说服，不要装腔作势来吓人；老老实实办事。

落到稿件上的几条具体判断：

- 摘要先讲"发生了什么 + 关键数字 + 时间"，再讲为什么重要；不要先铺背景。
- 数据要具体（推力、轨道高度、估值、卫星数）；不确定的写"据报道""待机构确认"，不补编。
- 来源至少一条可引用原文 URL；冲突时以机构稿和官方声明为准，不抄聚合站。
- 不整篇复制付费墙内容；用摘要 + 链接。

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
- README 表格 link 文本里的引号也要遵守引号铁律（中文稿用全角，避免视觉脏）。
