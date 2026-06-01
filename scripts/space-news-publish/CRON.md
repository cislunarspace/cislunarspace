# 自动化执行流程（Hermes cron / 定时任务）

由 Hermes Agent 内部的 `cron` 子系统调度，**不依赖**系统 crontab。Job 由仓库根的 `.hermes/jobs.json` 描述，运行时输出落在 `~/.hermes/cron/output/<job_id>/YYYY-MM-DD_HH-MM-SS.md`。

当前活动 Job：

| 项 | 值 |
|---|---|
| Job ID | `f72a7e645135`（活动，已完成 871+ 次） |
| 名称 | 每小时更新航天动态 |
| Schedule | `0 * * * *`（每小时整点） |
| 触发 skill | `space-news-publish` |
| Workdir | `/home/ouyangjiahong/codes/cislunarspace` |
| 上次运行 | 见 `hermes cron list` 输出（`last_run_at` + `last_status: ok`） |

**时间窗口**：每次 cron 触发覆盖最近 **1 天**（而非 1 小时），确保覆盖整点前后的新闻发布。

## 阶段一：检索与筛选

1. **搜索中国航天新闻**（中文关键词：神舟、天宫、长征、嫦娥、天问、北斗、商业航天、天龙、朱雀、双曲线、谷神星、引力、力箭等）
2. **搜索国际航天新闻**（英文关键词：Artemis、SpaceX、Starship、ESA、NASA、Rocket Lab 等）
3. **搜索其他值得报道的新闻**（补充性搜索，覆盖前两轮未涉及的事件）
4. 按重要程度排序：**重大任务里程碑 > 发射 > 政策/商业动态 > 常规发射**
5. Starlink 等高频常规发射合并为一条汇总，不逐条报道
6. **Skip 规则**（任一命中即跳过，不写稿）：
   - 标题含 `to launch` / `targets` / `scheduled for` / `will now launch on` + 无已完成信号 → 事件未发生
   - 标题含 `tries again` → scrub 后重试中，未成功
   - 标题含 `Watch [mission] on [future date]` / `How to watch` → 预发射观礼指南
   - URL 含 `gallery` / 标题含 `Don't miss these stunning photos` → 画廊/照片汇编
   - space.com `launches-spacecraft` 分类下含 Minuteman / ICBM / nuclear-capable → 军事弹道导弹
   - DARPA / 军用卫星预发射报道（"for 2026 launch" / "slated to launch"）→ 非已完成事件
   - SFN `live-coverage` 页面 + 标题含 `to launch` + 正文无 `Update` 段 + 无完成信号动词 → scrubbed/未执行
7. 检查当月目录已有稿件，**去重**（同事件识别基于：事件主体、事件性质、关键事实；已有综合稿则不另建；预发稿件待事件发生后修改原 slug 而非新建）
8. 中国航天新闻占比**不得低于 30%**；如不足，回到步骤 1 补充搜索
9. **如果主要领域未搜到足够新闻（< 2 条），扩展搜索**：深空探测、卫星商业应用、航天政策、空间科学、商业航天投融资、航天技术、太空碎片、JAXA/KASA/ISRO 动态、航天员与空间站、太空旅游
10. **如果扩展搜索后仍无值得报道的新闻**，简短汇报即可，**不要硬凑内容**

## 阶段二：核对与撰稿

11. 核实每条新闻的来源，确保每篇稿件至少有一条可引用的原文 URL
12. 为每条新闻**下载配图**到 `figures/<slug>/`（每篇至少 1-3 张，详见 [IMAGES.md](IMAGES.md)）
13. 撰写中英双语稿件（中国新闻先写中文再译英文；国际新闻先写英文再译中文）
14. `category` 必须从预定义列表选择（见 [SKILL.md](SKILL.md) 分类表）；英文稿 slug 与中文一致，permalink 以 `/en/` 开头

## 阶段三：索引与构建（⚠️ 关键步骤，不可跳过）

15. 更新当月 `README.md` 索引（中文 + 英文）；如需新建年/月目录，同步更新年索引
16. 运行构建流程：

    ```bash
    cd /home/ouyangjiahong/codes/cislunarspace/web
    npm run docs:build
    ```

    该命令依次执行：
    - `gen-sidebar`（`tsx .vuepress/gen-sidebar.ts`）— 扫描所有 md frontmatter，生成 `space-news-articles.json`、`sidebar.auto.json`、AI chat 索引、术语翻译缺口报告
    - `vuepress build`（已绑定 8GB 堆）— 渲染 1600+ 页
    - `sync-figures`（`tsx .vuepress/sync-figures.js`）— 把 `figures/` 复制到 `dist/`

17. **验证**：构建完成后检查 `dist/space-news/YYYY/MM/` 与 `dist/en/space-news/YYYY/MM/` 中新文章 `index.html` 是否齐全且非空（每篇 >200 行）。**不要**仅看 gen-sidebar 输出数字就认为成功——渲染中途崩溃的产物可能部分完整。

⚠️ **构建在「Rendering N pages」卡住 2+ 分钟无输出是正常现象**，不要误判为崩溃。dist 仍在写入，等进程退出（exit 0）即可。

## 阶段四：汇报（⚠️ git commit 才算完成）

**git add 不等于完成！** 必须执行 `git commit` + `git push`：

```bash
cd /home/ouyangjiahong/codes/cislunarspace
git add web/space-news/YYYY/MM/YYYY-MM-DD-slug.md
git add web/space-news/YYYY/MM/figures/YYYY-MM-DD-slug/
git add web/en/space-news/YYYY/MM/YYYY-MM-DD-slug.md
git add web/en/space-news/YYYY/MM/figures/YYYY-MM-DD-slug/
git commit -m "Add YYYY-MM-DD space news: title"
GIT_HTTP_VERSION=HTTP/1.1 git push origin master
```

**网络层失败立即切部署**：`Failed to connect to github.com port 443` / `Empty reply from server` 表明 GitHub 不可达——不要 retry，直接进阶段五；下次 cron 会补 push。

## 阶段五：本地构建产物部署到服务器

服务器内存仅 945MB，**无法胜任 VuePress 构建**——所有构建在本地完成，通过 **rsync（4 路径）** 直传 dist/ 到服务器。

⚠️ **必须同步 4 条路径**，少一条会导致部分内容静默缺失（参考 2026-05-27 EN 文章缺失、2026-05-28 figures 缺失实例）：

```bash
rsync -avz --delete \
  -e "***REMOVED*** -p \"$SSH_PASS\" ssh -o StrictHostKeyChecking=no" \
  /home/ouyangjiahong/codes/cislunarspace/web/.vuepress/dist/space-news/ \
  ubuntu@cislunarspace.cn:/var/www/cislunarspace/dist/space-news/

rsync -avz --delete \
  -e "***REMOVED*** -p \"$SSH_PASS\" ssh -o StrictHostKeyChecking=no" \
  /home/ouyangjiahong/codes/cislunarspace/web/.vuepress/dist/en/space-news/ \
  ubuntu@cislunarspace.cn:/var/www/cislunarspace/dist/en/space-news/
```

这两条命令覆盖：
- ZH 文章：`dist/space-news/YYYY/MM/*.html`
- EN 文章：`dist/en/space-news/YYYY/MM/*.html`
- ZH 配图：`dist/space-news/YYYY/MM/figures/<slug>/*.{webp,jpg,png}`
- EN 配图：`dist/en/space-news/YYYY/MM/figures/<slug>/*.{webp,jpg,png}`

（`dist/space-news/YYYY/MM/figures/` 与 `dist/space-news/YYYY/MM/*.html` 是 sibling 目录，不是嵌套；前两命令同时把它们都同步走。）

⚠️ **rsync 退出码 23 = "chgrp failed"**：服务端权限继承的已知告警，文件已成功传输，**忽略**。

⚠️ **SSH 连接超时**：SSH "Connection timed out during banner exchange" 时稍后自动恢复；若持续超时，下次 cron 调度自动重试。

⚠️ **服务器不再承担构建任务**：所有构建均在本地完成，服务器仅通过 nginx 提供静态文件服务。**严禁**在服务器上执行 `npm run docs:build`。

## 服务器信息

- **SSH 凭据**：参见安全凭据存储，**不在此文件硬编码**
- **服务器内存**：945MB RAM，不足以构建 VuePress
- **静态文件路径**：`/var/www/cislunarspace/dist`
- **域名**：`cislunarspace.cn`

## 中英文平衡策略

每次更新中，中国航天相关新闻占比不应低于 30%。中国航天先写中文再译英文；国际新闻先写英文再译中文。
