[English](0005-remove-space-news-module.md) | [简体中文](0005-remove-space-news-module.zh-CN.md)

# ADR 0005：删除太空新闻模块

- **状态:** 已接受
- **日期:** 2026-08-20
- **取代:** —
- **被取代:** —

## 背景

Space News（航天动态）曾是站点最大的内容模块：zh 侧 675 篇文章约 240MB、en 镜像 29MB，由每小时运行的自动管线产出（搜索→筛选→AI 写稿→提交→部署），配套 admin 管理面板、SpaceNewsHome/Archive/Article/Sidebar 组件、taxonomy 的 news-category 体系（15 个分类节点）、AI 路由索引与语境料中的新闻条目、月分片并行构建（sharded-build）与图片双拷（sync-figures）。

2026-08-20 的站点内容清理评审（issue #216，决策记录见 [docs/audits/content-cleanup-decisions.md](../audits/content-cleanup-decisions.zh-CN.md)）认定：

1. **无读者价值**：单篇约 300 字的 AI 流水文章是归档不是解读，对科普读者没有价值。
2. **维护成本最大**：240MB+ 存储、每小时管线、admin 集成、专用构建工具链，投入与价值倒挂。
3. 站点定位收窄为知识库（入门长文 + 轨道教程 + 词典）加 AI 问答辅助入口，新闻不在这个格局里。

## 决策

整体删除 Space News 模块，删到站点从未有过的状态：

- 内容：`web/space-news/`、`web/en/space-news/` 全删；已收录 URL 不做重定向，直接 404（新闻页无搜索流量）。
- 管线：`scripts/` 下全部 space-news 脚本与 skills 删净。
- 代码：SpaceNews 系列组件与布局、taxonomy 的 news-category kind 与节点、content 模块的 space-news family 与 `create`、sidebar 的 news 路由、首页/页脚/navbar 入口。
- AI：路由索引与语境料生成逻辑保留，输入随之收缩，两阶段检索链路不变。
- 连带工具下线：sharded-build（为分片渲染月度新闻而生）、sync-figures 与 dev-figures-fallback（为新闻图片的绝对路径约定而生）。
- admin：news 面板与后端集成删除，只剩 glossary 与 kb 两族。
- 历史记录：本 ADR + docs/adr/ 既有的 5 篇管线文档保留原地，记录这段历史。

## 后果

- 正面：存储与维护成本大幅下降；站点名实相符；构建无需分片、图片无需双拷，构建工具链显著简化。
- 负面：AI 问答失去新闻类语料与从热点进站的入口；线上新闻 URL 404。
- `NodeKind` 移除 `news-category`（open enum 收缩）；content 模块 `ContentFamily` 收缩为 `glossary | kb`：若未来重开新闻类内容，应按新形态重新设计，而不是复活旧管线。
