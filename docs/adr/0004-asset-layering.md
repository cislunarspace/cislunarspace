# ADR 0004 — 资产分层与仓库形态

- **Status:** Proposed
- **Date:** 2026-08-19
- **Supersedes:** —
- **Superseded by:** —

## Context

仓库里实际存在三类数据，但边界模糊：**内容源**（markdown、taxonomy 数据、图片——git 该管的）、**派生数据**（`generate.ts` 从内容源算出的 JSON——构建该管的）、**构建产物**（`dist/`）。下面的证据说明三层数据今天互相混置。

### 派生数据混进 git，且与源码同目录

- `web/.vuepress/` 根层：`config.ts` 旁边躺着 `sidebar.auto.json`、`sidebar-glossary.auto.json`（1.1MB、39009 行）等生成 JSON。
- 全仓检索确认：这些 JSON 没有任何远端或 CI 消费者。唯一引用点是自动更新管线 phase 3 的 `git add` 列表惯性地把它们加入提交；而真正的发布通道是 phase 4 的 `rsync dist`——生成物提交纯属历史惯性。
- 同一数据双写：`generators/space-news.ts` 把三份 space-news JSON 同时写到 `.vuepress/` 根和 `.vuepress/public/`。构建期没有任何代码读根目录那几份（theme2 运行时组件 fetch 的是 `public/` 份）。
- 死产物：`public/space-news-articles.json`（901KB，旧 schema）——生成器已不产出，全仓无引用。
- `web/public/`：一个靠 gitignore 遮住的误输出残留目录（`.gitignore` 注释自述此事）。

### 图片三套约定并存，约 230MB 字节级冗余

- space-news 每月 figures 目录，`scripts/space-news-publish/IMAGES.md` 规定英文侧 `cp -r` 整目录复制——zh 侧约 237MB、en 侧约 229MB，抽样 md5 相同。
- 关键事实：md 里的 `./figures/...` 只是 URL 约定，`build/sync-figures.js` 才是图片进 `dist/` 的唯一通道。因此"物理只存一份、构建期拷到 dist 的两个位置"即可去重，md 一行都不用改。
- 另有两套并存：`.vuepress/public/` 绝对路径图、glossary 同目录 figures。还有孤儿图（`space-news/2026/04/figures/` 根下 10 张无引用散图）。
- figures 目录命名不统一：带 `-zh`/`-en` 后缀的目录 zh 侧 3 个、en 侧 9 个，其余不带。

### glossary 名实分离

- `config.ts` 的 `pagePatterns` 排除 `glossary/**` 与 `en/glossary/**`（构建提速 4500 → 1489 页），词条页面不再 SSR。
- theme2 没有任何客户端渲染组件消费 glossary 页面，`dist/glossary/` 不存在——**线上没有词典页面**。
- 但全套维护机制仍在运转：navbar 挂着"地月空间术语词典"入口、`sidebar/config.ts` 仍构建 glossary 树、1.1MB 的 `sidebar-glossary.auto.json` 每次构建生成并提交（且无构建期消费者）、translation-gap 机制仍向侧边栏注入占位。
- 词条 md 的真实现存价值：`generators/ai-chat-context.ts` 全站扫描把它们作为 AI 问答语料，`chat-index-intake` 把它们编入 AI 路由索引。

### 目录职责混杂

- 仓库根 `scripts/` 六类并存：运行管线（space-news-update-\*）、一次性脚本、4.2MB 数据文件（`terms-classification.json`）、`__pycache__`、agent skill 文档、nginx 配置。
- `.vuepress/theme2/` 命名遗留；`.vuepress/internal-docs/` 文档塞在配置目录；`.vuepress/scripts/`（微信签名 mjs）与根 `scripts/` 同名；`web/deploy/` 放部署配置；5.4MB 的 `ref.bib` 放 `web/` 根。
- `patch-vuepress-concurrent.js` 直接改 `node_modules`，且不在任何 npm script 里——重装依赖即失效，靠人记得手工执行。

### 双语镜像有实际错位

同一篇文章 zh 在 `2026/04/`、en 在 `2026/03/`（lijian-2 首飞）；zh 独有 4 个词条、en 独有 1 个。这些错位没有构建期拦截。

## Decision

### 1. 三层模型与放置规则

| 层 | 内容 | 位置 | git |
|---|---|---|---|
| 内容源 | md、`taxonomy/`、`sidebar/data.ts`、figures（单份，见第 2 节）、`ref.bib`、public 手工资产 | 现位置 | 进 |
| 派生数据 | `generate.ts` 全部产物（`*.auto.json`、articles / ai-chat / bibliography JSON） | 仅 `.vuepress/public/`（运行时 fetch 的位置） | 不进 |
| 构建产物 | `dist/` | `.vuepress/dist/` | 不进 |

配套改动：

- `generators/space-news.ts` 停写 `.vuepress/` 根那 4 份（无构建期消费者，theme2 fetch 的是 `public/` 份）；`generate.test.ts` 同步调整断言。
- `git rm --cached` 已跟踪的生成物，`.gitignore` 补齐（`sidebar.auto.json` 属"先提交后 ignore"，必须显式 rm 才生效）。
- 管线 phase 3 的 `git add` 列表删去生成物，只 add 内容源目录。实施前复核 gitee 侧是否另有消费仓库生成物的构建脚本（未发现，但该服务器不在本仓库管辖内）。
- 删除死产物与残留：`public/space-news-articles.json`、`web/public/` 整目录。

### 2. 图片单一来源

- figures 只存 zh 侧一份；en 侧 md 的 `./figures/...` URL 引用约定不变。
- `sync-figures.js` 改为：把 zh 侧 figures 同时拷到 `dist/space-news/...` 与 `dist/en/space-news/...` 两个位置。
- en 侧物理副本删除的前置条件：全量 md5 对比 zh/en 同名目录，全部一致才删；带 `-zh`/`-en` 后缀的 12 个目录（内容可能与对侧不同）逐一人工确认后统一为无后缀命名。
- 孤儿图经引用完整性检查（见第 5 节）确认后删除。
- `IMAGES.md` 废除 `cp -r` 条款。
- 公共图（logo、示意图等）一律 `.vuepress/public/`，词条/文章配图一律同目录 figures——两套约定各管一类，不再交叉。

### 3. glossary：清洗后双定位（已确认）

现状必须终结——"页面不存在、入口还在、机制全在跑"。站长已确认方向（见[内容资源与受众分析](../content-strategy.md)第五节）：**删掉短词条与低价值词条；保留的词条既是 AI 语料库，也是词典。**

- **清洗**：删除模板化短词条（判定标准见内容策略），批量删除走 ADR-0003 内容操作模块的 `delete`（带回收站），不走裸脚本。
- **语料**：保留词条继续作为 AI 问答语料与路由索引输入。
- **词典**：清洗后的量级（预计数百条）做一个客户端渲染词典页（分类浏览 + 搜索 + 中英对照），单页加一份生成 JSON（`public/`）。
- **过渡期**：词典页上线前，先摘除首页卡片与 navbar 的词典入口（当前指向未构建页面）。
- sidebar 停产出 glossary 树与 `sidebar-glossary.auto.json`（无构建期消费者，停产出零影响）；translation-gap 降级为纯构建报告，不再向侧边栏注入占位。这两条不依赖清洗进度，先行执行。
- glossary md 作为内容族在 Content Module（ADR-0003）中的操作接口不变。

### 4. 目录归位

| 现位置 | 去向 | 说明 |
|---|---|---|
| `.vuepress/theme2/` | `.vuepress/theme/` | 改名，消除命名遗留；波及 alias 与 import |
| `scripts/` 一次性脚本 | `scripts/archive/` | 与既有 `archive/verify-2026-03-figures.js` 合流 |
| `scripts/terms-classification.json`（4.2MB） | 实施时查引用后定：仍被引用则入 `docs/data/`，否则出 git | 数据不是脚本 |
| `scripts/` 中 skill 文档 | `docs/` 或 `.claude/` | 文档不是脚本 |
| `.vuepress/internal-docs/` | `docs/` | 文档不进配置目录 |
| `.vuepress/scripts/` | 并入 `.vuepress/build/` | 与根 `scripts/` 同名易混 |
| `web/deploy/` | 仓库根 `deploy/` | 部署配置不是站点内容 |
| `web/ref.bib` | `web/.vuepress/`（bibliography generator 的源数据） | 远离页面目录 |
| `patch-vuepress-concurrent.js` | 纳入 npm scripts（`docs:build` 前置或 postinstall 自动应用） | 不再靠手工记得 |
| `__pycache__/` | 删除并 gitignore | 垃圾 |

### 5. 双语镜像与资源完整性收紧

- `check-bilingual-mirror` 增规则：同 slug 文章的归档月份一致性；figures 目录命名规范（禁止混用 `-zh`/`-en` 后缀）。
- 新增 `check-figures-references`：扫描 figures 与 md 引用的差集（孤儿图、缺图双向），纳入 check 族与提交前检查。
- glossary 词条不对齐由 translation-gap 报告承接（方案 A 下）。

## Non-goals

1. 不改线上内容 URL（glossary 决策本身除外）。
2. 不做图床或 CDN，图片仍随仓库与 dist。
3. 不重写构建链（VuePress 2 保留；concurrent 补丁只做脚本化收纳）。
4. 不重写 git 历史——已有的大文件体积留在历史里，本次只保证增量干净。

## Consequences

### Positive

- 仓库工作区瘦身约 230MB（en 侧图片）+ 消除每次内容提交的 MB 级 JSON churn，diff 回到纯内容。
- "源 / 派生 / 产物"三层在目录与 git 层面直接可见。
- glossary 名实一致。
- 镜像错位与孤儿资源有构建期拦截，整理成果不再腐化。

### Negative

- 生成物不进 git 后，克隆仓库须先跑 `gen-sidebar` 才能构建——`docs:dev`/`docs:build` 已内建此前置，实际无感，仅直接调 vuepress 命令的场合需要注意。
- en 侧图片删除是一次性大改动（约 229MB、上千文件），需脚本化执行加校验报告。
- `sync-figures` 双拷使 dist 构建时间略增（文件级复制，可忽略）。
- `theme2` 改名波及全部 alias 与 import 路径。

## Follow-up（建议顺序，每条可独立成 issue；与 ADR-0003 的 follow-up 可并行）

1. **阶段 0（速赢，纯删除与配置）**：删死产物与 `web/public/`；生成物 `git rm --cached` 并补 `.gitignore`；管线 `git add` 列表调整；`generators/space-news.ts` 停写 `.vuepress/` 根。实施前完成 gitee 消费者复核。
2. **阶段 1（图片单一来源）**：md5 全量校验脚本 → 删 en 侧副本 → `sync-figures` 双拷 → `-zh`/`-en` 后缀目录统一 → `IMAGES.md` 更新 → 孤儿图清理。
3. **阶段 2（glossary）**：摘死入口 → 停 sidebar 产物与占位注入 → 词条清洗（内容操作模块就绪后）→ 客户端词典页（见内容策略第五节）。
4. **阶段 3（目录归位）**：按第 4 节表格执行；`theme2` 改名单列一个 issue（波及面最大）。
5. **阶段 4（检查收紧）**：`check-bilingual-mirror` 增规则、新增 `check-figures-references`、纳入 CI。

## 实施后记

阶段 0–2 于 2026-08-19/20 落地。阶段 3（目录归位）于 2026-08-20 落地时的偏差：

1. **`patch-vuepress-concurrent.js` 归档而非纳入构建链**。实测该补丁与当前 `@vuepress/bundler-vite` 不兼容：patch 后并行渲染产生跨页内容错位（A 页标题渲染进 B 页路径），verify-dist 的 key page content 检查捕获。补丁与还原脚本已移入 `scripts/archive/`，`node_modules` 已还原；构建回归官方串行渲染（4m51s 基线）。若未来重新启用，必须先在当前 bundler 源码上重写补丁并通过 key page content 校验。
2. `scripts/` 中的 skill 文档（`space-news-publish/`、`research-frontiers-publish/`、`skills/`）因引用链复杂暂未迁移，仍在 `scripts/` 下。
3. `terms-classification.json`（4.2MB）无活跃引用（仅归档的 `prune-glossary.py` 使用），已随归档脚本一起出 git。

## Alternatives considered

- **生成物保留提交，换取远端/CI 构建**——否决。当前发布通道是本地构建加 rsync dist，git 里的生成物没有消费者，保留只是每次内容提交的 MB 级噪声。
- **图片改图床或外链**——否决（本期）。物理单份已消除冗余，引入外部依赖与迁移成本不成比例。
- **glossary 恢复 SSR 全量页面**——否决。当初为构建提速而排除（4500 → 1489 页），恢复与该决策相悖；客户端渲染（方案 B）或语料化（方案 A）是仅有的两个名实一致的方向。
