# 自动化执行流程（cron / 定时任务）

每小时执行一次。完整流程分四个阶段。

**时间窗口**：每次 cron 触发覆盖最近 **1 天**（而非1小时），确保覆盖整点前后的新闻发布。

## 阶段一：检索与筛选

1. **搜索中国航天新闻**（中文关键词：神舟、天宫、长征、嫦娥、天问、北斗、商业航天、天龙、朱雀、双曲线、谷神星、引力、力箭等）
2. **搜索国际航天新闻**（英文关键词：Artemis、SpaceX、Starship、ESA、NASA、Rocket Lab 等）
3. **搜索其他值得报道的新闻**（补充性搜索，覆盖前两轮未涉及的事件）
4. 按重要程度排序：**重大任务里程碑 > 发射 > 政策/商业动态 > 常规发射**
5. Starlink 等高频常规发射合并为一条汇总，不逐条报道
6. 检查当月目录已有稿件，**去重**
7. 中国航天新闻占比**不得低于 30%**；如不足，回到步骤 1 补充搜索
8. **如果主要领域未搜到足够新闻（< 2 条），扩展搜索**：深空探测、卫星商业应用、航天政策、空间科学、商业航天投融资、航天技术、太空碎片、JAXA/KASA/ISRO 动态、航天员与空间站、太空旅游
9. **如果扩展搜索后仍无值得报道的新闻**，简短汇报即可，**不要硬凑内容**

## 阶段二：核对与撰稿

10. 核实每条新闻的来源，确保每篇稿件至少有一条可引用的原文 URL
11. 为每条新闻**下载配图**到 `figures/<slug>/`（每篇至少一张，详见 [IMAGES.md](IMAGES.md)）
12. 撰写中英双语稿件（中国新闻先写中文再译英文；国际新闻先写英文再译中文）
13. `category` 必须从预定义列表选择；英文稿 slug 与中文一致，permalink 以 `/en/` 开头

## 阶段三：索引与构建（⚠️ 关键步骤，不可跳过）

14. 更新当月 `README.md` 索引（中文 + 英文）；如需新建年/月目录，同步更新年索引
15. 运行构建流程：`cd web && npm run docs:build`
    - `gen-sidebar.js`：扫描所有 md 文件的 frontmatter，生成 `space-news-articles.json`（首页 `SpaceNewsHome.vue` 的数据源）
    - `vuepress build`：构建静态站点
    - `sync-figures.js`：将 `figures/` 目录中的图片复制到 `dist/`
16. **验证**：运行 gen-sidebar.js 后，输出 "Generated space-news-articles.json (X zh, Y en)" — 这个数字**必须比运行前多**，才说明新文章被扫描到

⚠️ **验证必须比较数量变化**：在运行 gen-sidebar.js **之前**，先用 Python 读取 JSON 记录当前条目数；运行后再读一次，对比差值。只有差值 > 0 才说明成功。

## 阶段四：汇报（⚠️ git commit 才算完成）

**git add 不等于完成！** 仅执行 `git add` 将文件放入暂存区，并不等于完成任务。**必须执行 `git commit`**：

```bash
git add web/space-news/YYYY/MM/YYYY-MM-DD-slug.md
git add web/space-news/YYYY/MM/figures/YYYY-MM-DD-slug/
git add web/en/space-news/YYYY/MM/YYYY-MM-DD-slug.md
git add web/en/space-news/YYYY/MM/figures/YYYY-MM-DD-slug/
git commit -m "Add YYYY-MM-DD space news: title"
GIT_HTTP_VERSION=HTTP/1.1 git push origin master
```

## 阶段五：本地构建 + 上传 dist 到服务器（推荐方式）

服务器内存仅 945MB，**无法胜任 VuePress 构建**。本地构建后通过 tar + ssh 直传 dist/ 到服务器。

```bash
# 0. 清理 VuePress 缓存
rm -rf web/.vuepress/.temp

# 1. 本地构建（高内存分配）
cd web
NODE_OPTIONS='--max-old-space-size=65536' npm run docs:build

# 2. 通过 tar + ssh 上传 dist 到服务器
tar -cf - -C web .vuepress/dist/ | \
  ***REMOVED*** -p "$SSH_PASS" ssh -o StrictHostKeyChecking=no "$SSH_USER@$SSH_HOST" \
    "sudo tar -xf - -C /var/www/cislunarspace/ && sudo chmod -R 755 /var/www/cislunarspace/dist"
```

⚠️ **构建产物路径**：VuePress 输出 `.vuepress/dist/`，**不是** `dist/`。

⚠️ **SSH 连接超时**：SSH 连接到服务器时可能 "Connection timed out during banner exchange"，稍后会自动恢复。若持续超时，下次 cron 调度自动重试。

⚠️ **服务器不再承担构建任务**：所有构建均在本地完成，服务器仅通过 nginx 提供静态文件服务。

## 服务器信息

- **SSH 凭据**：参见安全凭据存储，**不在此文件硬编码**
- **服务器内存**：945MB RAM，不足以构建 VuePress
- **静态文件路径**：`/var/www/cislunarspace/dist`

## 中英文平衡策略

每次更新中，中国航天相关新闻占比不应低于 30%。中国航天先写中文再译英文；国际新闻先写英文再译中文。
