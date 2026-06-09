---
name: space-news-publish
description: >
  Searches recent space and launch news, writes bilingual Space News posts for
  cislunarspace, manages figures, indexes, build verification, and deployment
  handoff. Use when the user asks to update 航天动态 / Space News, ingest or
  crawl space news, add dated news posts, run the space-news cron workflow, or
  diagnose space-news publishing failures.
---

# Space News 撰稿与入库

面向仓库 `web/` 下的 **Space News（航天动态）** 栏目。核心原则：**先判定是否值得写，再去重，再落盘，最后验证**。若没有新稿需求，cron 场景只输出 `[SILENT]`。

## Quick start

1. 在仓库根 `/home/ouyangjiahong/codes/cislunarspace` 工作；确认 `web/space-news`、`web/en/space-news`、`.git` 存在。
2. 先查当月中英目录和近 7 天来源 URL，避免同事件重复写稿：`rg "候选标题关键词|候选URL" web/space-news/YYYY/MM web/en/space-news/YYYY/MM`。
3. 用 [SOURCES.md](SOURCES.md) 的中英文搜索策略找最近 24–48 小时新闻；中国航天优先检索。
4. 按 [WRITING.md](WRITING.md) 写中英双语稿和月度 `README.md`；同一 slug、同一 date。
5. 按 [IMAGES.md](IMAGES.md) 准备 `figures/<slug>/`；无可用图时删除 `image:` 字段，不留坏链接。
6. 完整构建用 `cd /home/ouyangjiahong/codes/cislunarspace/web && npm run docs:build`；只需快速刷新索引时才单独跑 `npm run gen-sidebar`。按 [BUILD-FIXES.md](BUILD-FIXES.md) 验证 dist 内容。
7. 需要自动化/部署时执行 [CRON.md](CRON.md) 的 5 段流程。

## 必须遵守的站点约定

| 项目 | 规则 |
|------|------|
| 中文稿 | `web/space-news/YYYY/MM/YYYY-MM-DD-slug.md` |
| 英文稿 | `web/en/space-news/YYYY/MM/YYYY-MM-DD-slug.md`，同 slug，无 `-en` 后缀 |
| 布局 | `layout: SpaceNewsArticle` |
| permalink | 中文 `/space-news/YYYY/MM/YYYY-MM-DD-slug/`；英文 `/en/space-news/YYYY/MM/YYYY-MM-DD-slug/` |
| figures | 月目录下 `figures/YYYY-MM-DD-slug/`，中英两侧都要有 |
| 索引 | 新建年/月时补中英 `README.md`；完整构建会自动运行 `npm run gen-sidebar` |
| 生成文件 | 不手改 `.vuepress/*.json`，只通过生成器更新 |

## 分类

可用 `category`：`artemis`、`spacex`、`china`、`nasa`、`esa`、`iss`、`launch`、`commercial`、`science`、`policy`、`rocket-lab`、`blue-origin`。支持 YAML 数组，如 `category: [spacex, commercial]`。不确定时选最具体分类。

## 写稿决策

- 重大任务里程碑、发射结果、官方政策/预算、商业航天关键融资/合同、重要空间科学论文可写。
- 预发射观礼指南、`to launch` / `targets` / `scheduled for` 且无完成信号、gallery/照片汇编、娱乐/购物/podcast、ICBM/Minuteman 军事试射通常跳过。
- 同一事件已有稿：优先更新/补充原稿，不新建；预发稿变结果稿时保持 slug 不变。
- 持续事件只有出现新事实（新文件、ticker、官方数据、独立专家评论、恢复时间表、视觉证据）才另写。
- 每篇至少一条可引用原文 URL；冲突时以机构稿和官方声明为准。
- cron/批量更新中，中国航天相关新闻占比目标不低于 30%；不足时回到中文搜索补检。单篇重大国际新闻不必强行补中国新闻。

详见 [FIELD-NOTES.md](FIELD-NOTES.md) 的历史案例与去重边界；它是归档笔记，不覆盖本文件的主流程规则。

## 常用命令

```bash
# 生成索引
cd /home/ouyangjiahong/codes/cislunarspace/web && npm run gen-sidebar

# 完整构建（含 gen-sidebar、vuepress build、sync-figures）
cd /home/ouyangjiahong/codes/cislunarspace/web && npm run docs:build

# 本机 cron 包装构建/部署流程见仓库脚本
/home/ouyangjiahong/codes/cislunarspace/scripts/space-news-update-local.sh
```

## 参考文件

- [SOURCES.md](SOURCES.md) — 新闻源、搜索关键词、可靠性与降级策略。
- [WRITING.md](WRITING.md) — frontmatter、正文结构、README、双语同步。
- [IMAGES.md](IMAGES.md) — 配图获取、压缩、版权、无图降级。
- [CRON.md](CRON.md) — 自动更新、构建、commit/push、rsync 部署。
- [BUILD-FIXES.md](BUILD-FIXES.md) — 构建、索引、dist、部署故障修复。
- [TROUBLESHOOTING.md](TROUBLESHOOTING.md) — 站点解析、RSS、YAML、去重技术细节。
- [FIELD-NOTES.md](FIELD-NOTES.md) — 旧版长文档保留的归档案例；只在边缘判断时查阅，若冲突以当前主文档为准。
