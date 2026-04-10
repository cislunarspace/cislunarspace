# Space News 更新 — 2026-04-10

## 目标
为 2026 年 4 月 10 日新增 2 篇中英双语航天动态稿件，更新索引并验证构建。

## 任务列表

- [x] 1. **撰写稿件：Artemis 2 科学实验展开、开始返航** `web/space-news/2026/04/2026-04-10-artemis-2-return-trip.md` + `web/en/space-news/2026/04/2026-04-10-artemis-2-return-trip.md`
  - 中文稿 + 英文稿 + NASA 官方配图（hero.jpg 124KB + 01-eclipse.jpg 169KB）
  - 验收：✅ 两篇 md + figures 均已就位

- [x] 2. **撰写稿件：长征火箭为千帆和国网星座发射卫星** `web/space-news/2026/04/2026-04-10-china-megaconstellation-launches.md` + `web/en/space-news/2026/04/2026-04-10-china-megaconstellation-launches.md`
  - 中文稿 + 英文稿 + CASC 配图（hero.jpg 107KB）
  - 验收：✅ 两篇 md + figures 均已就位

- [x] 3. **更新月度 README 索引** → 依赖 1, 2
  - 中文 + 英文 README 均已更新，lastUpdated 改为 2026-04-10

- [x] 4. **构建验证** → 依赖 3
  - `npm run docs:build` 成功：77 zh + 78 en 稿件，96 figure files synced
  - space-news-articles.json 包含全部 4 篇新增稿件，image 路径正确
