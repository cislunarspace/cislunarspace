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

面向仓库 `web/` 下的 **Space News（航天动态）** 栏目。核心原则：**先判定是否值得写，再去重，再落盘，最后验证**。没有新稿需求时，cron 场景只输出 `[SILENT]`。

## Quick start

1. 在仓库根 `/home/ouyangjiahong/codes/cislunarspace` 工作；确认 `web/space-news`、`web/en/space-news`、`.git` 存在。
2. 先查当月中英目录和近 7 天来源 URL，避免同事件重复写稿：`rg "候选标题关键词|候选URL" web/space-news/YYYY/MM web/en/space-news/YYYY/MM`。
3. 用 [SOURCES.md](SOURCES.md) 的搜索策略（中文优先）找最近 24–48 小时新闻；自动检索走 Hermes Agent，手工补稿可直接调 `hermes chat -q -t web`。
4. 按 [WRITING.md](WRITING.md) 写中英双语稿和月度 `README.md`；同一 slug、同一 date。
5. 按 [IMAGES.md](IMAGES.md) 准备 `figures/<slug>/`；无可用图时删除 `image:` 字段，不留坏链接。
6. 完整构建用 `cd web && npm run docs:build`；只需刷新索引时才单独跑 `npm run gen-sidebar`。按 [TROUBLESHOOTING.md](TROUBLESHOOTING.md) 验证 dist 内容。
7. 自动化/部署流程见 [CRON.md](CRON.md)。

## 站点约定

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

`category` 取自 `phase1-hermes.py` 的 `ALLOWED_CATEGORIES`，按以下分组（支持 YAML 数组，如 `category: [spacex, commercial]`；不确定时选最具体分类）：

- **国家/机构**：china、nasa、esa、isro、jaxa、kasa、roscosmos、cnes、uae
- **公司**：spacex、rocket-lab、blue-origin、ula、arianespace、axiom、vast、firefly、relativity、stoke-space、ispace、k2、cas-space、galactic-energy、landspace、space-pioneer、orientspace、deep-blue-aerospace、link-space
- **项目**：artemis、iss、tiangong、gateway、starship-test、starlink、qianfan、guowang、beidou
- **学科**：exoplanet、blackhole、gravitational-wave、space-telescope、mars、moon、solar、meteor、cluster、asteroid
- **通用**：launch、commercial、science、policy、funding

新增分类时同步改 `phase1-hermes.py` 的 `ALLOWED_CATEGORIES` 集合，否则 select 阶段会降级成 `launch`。

## 写稿决策

可写：

- 重大任务里程碑、发射结果、官方政策/预算、商业航天关键融资/合同、重要空间科学论文。
- **下次发射预告**：某型火箭/星座进入"高频连续发射"阶段（长征十二号、力箭一号、朱雀、千帆、星链等），官方或权威渠道预告"下一次发射在 X 日 Y 工位"，写成阶段性进展稿；标题用"再出征""再度启航""下一次任务"等动作词，避免写成"待定"。纯网友观礼攻略仍跳过。
- **产业投资观点**：权威机构（中信建投、中金、券商首席、官方智库、央行研究局）就航天产业链发布的明确投资判断、估值口径或政策解读；要点是机构名 + 时间 + 具体数据（估值/募资/占比）+ 结论，不抄盘面涨跌与个股推荐。

跳过：

- 预发射观礼指南、`to launch` / `targets` / `scheduled for` 且无完成信号、gallery/照片汇编、娱乐/购物/podcast、ICBM/Minuteman 军事试射。

去重：

- 同一事件已有稿：优先更新/补充原稿，不新建；预发稿变结果稿时保持 slug 不变。
- 持续事件只有出现新事实（新文件、ticker、官方数据、独立专家评论、恢复时间表、视觉证据）才另写。
- 每篇至少一条可引用原文 URL；冲突时以机构稿和官方声明为准。

配额：

- cron/批量更新中，中国航天相关新闻占比目标不低于 30%；不足时回到中文搜索补检。单篇重大国际新闻不必强行补中国新闻。

## 自动化

cron 由 Hermes 调度，每小时触发 `scripts/space-news-update-local.sh`，跑完 5 阶段（检索/筛选/写稿 → 构建 → commit/push → rsync → chmod）。Phase 1（检索/筛选/写稿）由 `scripts/space-news-update-phase1-hermes.py` 通过 `hermes chat -q -t web --provider minimax-cn -m MiniMax-M3 --max-turns 3` 完成，Python 只负责去重、文件 I/O 与 README 更新。Hermes 凭证由 `~/.hermes/.env` 管理。详见 [CRON.md](CRON.md)。

`SKIP_PHASE1=1 bash scripts/space-news-update-local.sh` 跳过检索，只跑构建+部署；`SKIP_DEPLOY=1` 跑检索+构建但不 commit/push/rsync（用于 staging 或验证）。

## 常用命令

```bash
cd /home/ouyangjiahong/codes/cislunarspace/web

npm run gen-sidebar     # 只刷新索引（sidebar/articles/ai/glossary JSON）
npm run docs:build      # 完整构建：gen-sidebar → vuepress build → sync-figures

# cron 包装（构建 + 部署）
bash /home/ouyangjiahong/codes/cislunarspace/scripts/space-news-update-local.sh
```

## 参考文件

- [WRITING.md](WRITING.md) — frontmatter、正文结构、引号铁律、写作风格、双语同步、README。
- [SOURCES.md](SOURCES.md) — 新闻源、搜索关键词（与 `phase1-hermes.py` 同步）、可靠性与降级策略。
- [IMAGES.md](IMAGES.md) — 配图获取、压缩、版权、无图降级。
- [CRON.md](CRON.md) — 自动更新 5 阶段流程。
- [TROUBLESHOOTING.md](TROUBLESHOOTING.md) — YAML/构建/dist/部署/去重故障修复。
