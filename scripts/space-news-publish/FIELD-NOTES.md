# 历史实测笔记（归档索引）

> 本文件只记录边缘判断的**索引级摘要**。它不是主流程规范；若与 [SKILL.md](SKILL.md)、[CRON.md](CRON.md)、[BUILD-FIXES.md](BUILD-FIXES.md)、[WRITING.md](WRITING.md)、[IMAGES.md](IMAGES.md) 冲突，以当前主文档为准。

## Cron / 自动化

- `phase1=0` 但无新稿不一定是错误：可能是检索窗口内没有值得报道的新闻，或候选都被去重跳过。先查 `logs/space-news-update.log` 和近 7 天 sources URL。
- back-to-back cron 运行时，不要重复写稿；若本地已有未推送/未部署提交，应优先构建、push、rsync。
- 本地领先 remote 时，不要直接 `[SILENT]`；先确认 dist 是否已由 HEAD 构建并部署。
- cron 场景没有新闻时只输出 `[SILENT]`；不要写“今日无更新”稿件。

## 去重与是否成稿

- 候选 URL 已出现在近 7 天 sources 段中：通常直接跳过。
- 中文聚合站晚几天转载西方旧事件，且无新事实：视为旧闻新发，跳过。
- 同一事件已有综合稿：反应稿、图片稿、同一记者 follow-up 只有新评论但无新事实时跳过。
- 持续事件可另写的信号：新官方文件、ticker/交易所、S-1/预算/合同细节、独立专家评论、恢复时间表、第三方遥感/视觉证据、官方调查状态变化。
- 预发稿变结果稿时更新原稿，不改 slug；同步更新中英文标题、摘要、正文、来源和 `lastUpdated`。
- 删除重复稿后要同步删除中英 figures，并运行 `npm run gen-sidebar` 或完整构建。

## 发射与任务完成信号

- 强完成信号：`launched`、`launches`、`has launched`、`liftoff occurred`、`deployment`、`touchdown`、官方“任务圆满成功/安全着陆”。
- 跳过信号：`to launch`、`targets`、`scheduled for`、`watch`、`how to watch`、`head to orbit` 且正文无结果。
- `scrubbed` 表示 scrub 事件已发生，可按重要性写 scrub 报道。
- SFN live-coverage 标题可能不更新；正文出现 booster landing、deployment 等才算结果确认。
- SFN 日期页/月索引不等于当日事件索引；以 RSS、正文和官方结果交叉验证。

## 来源解析边缘

- space.com RSS index 0 可能是频道标题，跳过。
- space.com `title` 常带 CDATA，`link` / `pubDate` 通常不是 CDATA。
- space.com JSON-LD `articleBody` 可能为空；必要时从 `<article>` 内 `<p>` 提取正文。
- space.com RSS `pubDate` 可能滞后或与正文事件日期不一致；需核对 JSON-LD `datePublished` 和正文日期。
- SFN RSS / 主页可能 403；最多重试一次，之后转向 space.com、中文 web_search、机构来源。
- CMSE 列表页日期应从 `<li>` 内提取；优先 HTTPS，抓取后确认编码。
- Rocket Lab 正文常在 `<main>`，`og:image` 可能是 logo；图片从 `/assets/Uploads/` 提取。

## 图片与构建边缘

- 没有可用图片时，删除 frontmatter `image:` 和正文图片引用；不要留不存在的 `./figures/...`。
- space.com CDN 下载失败时可尝试 `curl --http1.1`。
- 大图应压缩到约 1200–1600px 宽、单张建议 < 500KB。
- EN figures 复制前先 `rm -rf` 目标目录，防止 `figures/figures/` 嵌套。
- 构建成功不等于内容正确；新稿 dist HTML 必须 grep 标志性关键词。
- 当前 sync-figures 入口以 `npm run sync-figures` / `tsx .vuepress/build/sync-figures.js` 为准；不要使用旧路径 `.vuepress/sync-figures.js`。

## 事实核查边缘

- 中国载人航天乘组、指令长、载荷专家身份必须以 CMSE/CMS 官方或新华社等权威来源为准；中英文同步更正。
- 外交部/国台办等官方例行记者会声明若在独立日期发布，可构成独立新闻角度。
- 乘组亮相、发射、返回、抵京是不同里程碑；是否独立成稿取决于是否有独立事实和官方确认。
- Blue Origin / SpaceX 等事故不要把不同任务或不同故障模式强行关联；以官方调查和声明为准。
- 科学论文报道需判断新鲜度：媒体新发但论文/观测很旧时通常跳过；近期论文正式发表、机构同步发布且具空间科学意义时可写。

## 不再保留的旧内容

旧版 `SKILL.md` 的长篇 incident trace、过时命令、断链 `references/*.md` 和重复故障表已从 skill bundle 主路径移除。需要追溯历史时看 git 历史，而不是依赖本索引执行操作。
