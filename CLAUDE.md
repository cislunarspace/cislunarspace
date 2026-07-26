# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Cislunar Space Beginner's Guide** (地月空间入门指南) — an open-source bilingual (zh/en) knowledge base about cislunar space science, technology, and engineering. Published at https://cislunarspace.cn. Built with VuePress 2 + Vue 3 + Vite.

## 交流语言

始终使用中文与用户交流。代码、commit message、PR 描述等技术输出也用中文。

## 写作要求

所有面向人读的文本（注释、CONTEXT.md、ADR、issue 评论、PR 描述、agent brief、triage notes、Sphinx 文档、Agent 回复），遵守以下原则：

- **善于总结材料**：材料弄全弄准，去粗取精、去伪存真、由此及彼、由表及里，反映事物本质；不堆砌细节、不拼凑清单。
- **真懂才能写好**：反复改都写不清楚，往往是因为对所写的内容还不大懂；真懂了，才有高屋建瓴、势如破竹之势。
- **逻辑清晰**：整篇文章前后次序有逻辑，交代清楚。
- **用词准确**：相邻概念划清界限，不混用、不模糊。概念要抓住事物的本质、全体和内部联系，而非现象、片面和外部联系。
- **观点鲜明**：不堆砌凑数、聚沙成堆。不用夸大的修饰词（”权威””强大””完整””单一事实来源”之类），它们减损力量。
- **废话应当尽量除去**。
- **读得下去是基本要求**：文字通顺，让人读得下去、读后脑中有印象；读完脑中无印象，是极差的文章。
- **通俗、亲切，由小讲到大，由近讲到远，引人入胜**：先讲读者已知／当前的事物，再推到陌生／抽象的；忌一上来就宏大叙事或先搬死人、外国人。
- **与读者完全平等**：靠分析说服，不要装腔作势来吓人；老老实实办事。
- **动笔前想受众**：这篇东西给谁看？谁受益？怎样让更多人受益？

## Commands

All commands run from `web/`:

```bash
npm run docs:dev          # gen-sidebar → vuepress dev server (host 0.0.0.0)
npm run docs:build        # gen-sidebar → sharded-build (8 shards) → sync-figures
npm run docs:build:single # gen-sidebar → single-process vuepress build → sync-figures
npm run gen-sidebar       # regenerate all JSON artifacts (sidebar, articles, AI, glossary)
npm run sync-figures      # copy figures/ into dist/ (required for images to display)
```

Requires Node.js 18+ (CI and cron use v22.22.2).

**Local AI chat (`/ai-chat`):** copy `web/.env.example` to `web/.env` and set `DEEPSEEK_API_KEY`. Vite dev server proxies `/api/ai` → `https://api.deepseek.com` (see `web/.vuepress/config.ts`). Production uses Nginx (`web/deploy/nginx-ai-proxy.conf`). The chat component requires `ai-chat-config.json` (in `web/.vuepress/public/`) to specify the model; API key is injected by nginx.

## Architecture

### VuePress Config

- `web/.vuepress/config.ts` — main config (locales, plugins, Vite bundler, KaTeX, proxy to DeepSeek API at `/api/ai`)
- `web/.vuepress/navbar.ts` / `navbar-en.ts` — top navigation
- `web/.vuepress/og-meta-plugin.ts` — Open Graph meta tag plugin
- `web/.vuepress/utils/page-metadata.ts` — page metadata utilities

### Sidebar Module (`web/.vuepress/sidebar/`)

All sidebar-related data, types, and runtime config construction:

- `data.ts` — manual sidebar section definitions for knowledge-base sections
- `types.ts` — sidebar types (VueSidebarItem, GlossaryScan, ChatIndexEntry, Article, SidebarData, etc.)
- `config.ts` — runtime VuePress sidebar config builder (called by `config.ts`)

### Build-Time Generators (`web/.vuepress/generators/`)

One generator per output family. Orchestrated by `generate.ts` (the `npm run gen-sidebar` entry point):

- `space-news.ts` — generates `sidebar.auto.json`, `space-news-articles.json`, `space-news-sidebar-data.json`
- `ai-chat.ts` — generates `ai-chat-context.json` and `ai-chat-index.json`
- `glossary.ts` — generates `sidebar-glossary.auto.json` and translation-gap reports
- `bibliography.ts` — generates `bibliography.json` from `ref.bib` + citation scan

### Build Tooling (`web/.vuepress/build/`)

Build infrastructure scripts (no content knowledge):

- `sync-figures.js` — copies `figures/` dirs into `dist/`
- `sharded-build.ts` — N-way parallel VuePress build
- `shard-build.mjs` — single-shard build (called by sharded-build.ts)
- `ssr-render-cache.ts` — Vite plugin that caches SSR-rendered pages to speed up incremental builds
- `measure-build.ts` — build performance measurement
- `verify-dist.ts` — dist verification checks

### Taxonomy Module (`web/.vuepress/taxonomy/`)

Unified taxonomy module. See [ADR-0001](docs/adr/0001-unified-taxonomy-module.md).

- `types.ts` — TaxonomyNode, NodeId, LocalePath, NodeKind definitions
- `view-engine.ts` — declarative query layer (ViewQuery: list, walk, root, buildTree)
- `data.ts` — navbar, wayfinding, glossary-category, news-category nodes
- `define.ts` — flattens sidebar/data.ts + flatNodes into unified TaxonomyModule
- `adapters/` — sidebar-sections, wayfinding, navbar, glossary-categories, news-categories, chat-index-sections

### Intakes (`web/.vuepress/intakes/`)

Build-time data collection:

- `glossary-intake.ts` — scans glossary markdown files
- `chat-index-intake.ts` — builds AI chat index from taxonomy
- `translation-gap-intake.ts` — identifies missing glossary translations

### Custom Theme (`web/.vuepress/theme2/`)

Extends `@vuepress/theme-default`:

- `index.ts` — overrides Layout.vue and VPSidebar.vue via alias
- `layouts/` — `Layout`, `SpaceNewsArticle`, `SpaceNewsHome`, `SpaceNewsArchive`, `AiChatLayout`, `DialecticLayout`
- `components/` — `SpaceNewsHome`, `SpaceNewsArchive`, `AiChat`, `SpaceNewsSidebar`, `Dialectic`, `Forum`, `OrbitSimLab`, etc.
- `data/` — theme display data (`wechat-widget.ts`, `footer.ts`)

### Content Framework

The site has four content families with different management models:

**1. Knowledge-base sections**
- Source directories: `web/what-is-cislunarspace/`, `web/cislunar-orbits/`, `web/research-frontiers/`, `web/background/`, `web/resources-tools/`, `web/satellite-simulation/`
- Navigation source: `web/.vuepress/sidebar/data.ts` (manual definitions)
- Generated via: `web/.vuepress/sidebar/config.ts` → taxonomy adapters
- Bilingual: Chinese at root, English under `web/en/` (same directory names)

**2. Glossary**
- Source directories: `web/glossary/`, `web/en/glossary/` (11 topic subdirectories)
- Categories: defined as taxonomy `glossary-category` nodes in `taxonomy/data.ts`
- Generated via: `web/.vuepress/generators/glossary.ts` → `sidebar-glossary.auto.json`
- Bilingual: zh entries are authoritative; en gaps tracked by `translation-gap-intake.ts`

**3. Space News**
- Source directories: `web/space-news/YYYY/MM/` (zh), `web/en/space-news/YYYY/MM/` (en)
- Naming: `YYYY-MM-DD-slug.md` (same slug for both locales)
- Layout: always `layout: SpaceNewsArticle`
- Images: `figures/YYYY-MM-DD-slug/` next to the `.md`, referenced as `./figures/...`
- Category: single value or YAML array (`category: [spacex, commercial]`)
- Draft: `draft: true` hides from generation
- Generated via: `web/.vuepress/generators/space-news.ts` → 3 JSON artifacts

**4. Special surfaces**
- Source: standalone `.md` files at `web/` root (`ai-chat.md`, `dialectic.md`, `forum.md`)
- Rendering: custom layouts and components in `theme2/`
- Bilingual: `ai-chat.md` and `forum.md` have en counterparts; `dialectic.md` is zh-only

### Auto-Generated Files (DO NOT EDIT)

- `web/.vuepress/sidebar.auto.json` — Space News sidebar tree
- `web/.vuepress/space-news-articles.json` — Space News article metadata
- `web/.vuepress/space-news-sidebar-data.json` — Space News custom sidebar data
- `web/.vuepress/sidebar-glossary.auto.json` — glossary scan data
- `web/.vuepress/public/ai-chat-index.json` — AI chat route index
- `web/.vuepress/public/ai-chat-context.json` — AI chat context corpus

To regenerate: run `npm run gen-sidebar` or the full `npm run docs:build`.

## Critical Build Pipeline

`npm run docs:build` runs three steps in sequence. **Never skip `sync-figures`** — images won't appear in dist:

1. `generate.ts` (`npm run gen-sidebar`) — generates all JSON artifacts
2. `vuepress build` — builds static site
3. `sync-figures.js` (`npm run sync-figures`) — copies `figures/` dirs into `dist/`

## Deployment

Nginx serves from `/home/ubuntu/cislunarspace/` on the腾讯云 jump host (106.54.4.220). Config at `web/deploy/cislunarspace-site.conf`. The `/api/ai/` path proxies to DeepSeek API; API key is injected by nginx via `$DEEPSEEK_API_KEY`.

SSH config: `jump` (ubuntu@106.54.4.220) for deployment, `local-server` (port 22220 via reverse tunnel) for internal access.

Deploy steps:
```bash
cd web
npm run docs:build                                    # build (8 shards + SSR cache)
npm run sync-figures                                   # copy figures into dist/
tar cf - dist/ | ssh jump "cd /home/ubuntu/cislunarspace && rm -rf * && tar xf - --strip-components=1"
ssh jump "sudo nginx -s reload"
```

## Space News Automation

- `scripts/space-news-update-local.sh` — triggered by system crontab every 3 hours
- Full workflow documented in `scripts/space-news-publish/SKILL.md`
- Adding a new year/month: create `README.md` index, then re-run `npm run gen-sidebar`

## Maintenance Rules

- **Do not edit auto-generated JSON files** — regenerate them via `npm run gen-sidebar`
- **AI chat config** — `web/.vuepress/public/ai-chat-config.json` specifies the model for the AI chat; API key is injected by nginx, not stored in this file
- **Add knowledge-base section/page** — update `web/.vuepress/sidebar/data.ts`
- **Add Space News article** — create `YYYY-MM-DD-slug.md` in both `web/space-news/YYYY/MM/` and `web/en/space-news/YYYY/MM/`
- **Add glossary entry** — create markdown in `web/glossary/<category>/`; categories defined in `taxonomy/data.ts`
- **Add theme display data** — place in `web/.vuepress/theme2/data/`
- **Add build tooling** — place in `web/.vuepress/build/`
- **Add VuePress plugin** — place in `web/.vuepress/` root (only 2 files; subdirectory not yet justified)
- Math rendering uses KaTeX via `@traptitech/markdown-it-katex`

## Agent skills

### Issue tracker

Issues tracked in GitHub (github.com/cislunarspace/cislunarspace) via `gh` CLI. External PRs accepted as triage input. See `docs/agents/issue-tracker.md`.

### Triage labels

Using default label vocabulary: needs-triage, needs-info, ready-for-agent, ready-for-human, wontfix. See `docs/agents/triage-labels.md`.

### Domain docs

Multi-context layout with `CONTEXT-MAP.md` at root pointing to per-context `CONTEXT.md` files and `docs/adr/`. See `docs/agents/domain.md`.

## 编码准则

LLM 写代码时会犯一些可以预见的错误，同样几个，一遍又一遍。以下是规则，需要严格遵守。

### 1. 写代码前先读懂

LLM 产出烂代码最大的根源，就是写新代码之前没有读懂现有代码库。你看到一个任务，匹配到训练数据里的某个模式，就开始生成。这通常导致代码不贴合项目实际。

写任何东西之前：

- 把你要改的文件读一遍。不是略读，是读。
- 看看项目里别处是怎么做类似事情的。有范式就照着来；有工具函数已经做了一半你需要的事，就用它。
- 看文件顶部的 import，它们告诉你这个项目实际在用什么库。项目到处用 fetch，就别引入 axios；项目用原生方法，就别引入 lodash。
- 看测试文件，它们告诉你预期行为到底是什么。

如果你不是 100% 确定某个方法以这个确切签名存在，查文档或看项目里的真实源码。自信地用一个不存在的 API 或已移除的参数，是典型的知识幻觉。

如果你不确定这个项目里某件事是怎么做的，就说出来。“我在代码库里没看到 X 的范式，是该照 Y 的做法来，还是另起炉灶？”永远比瞎猜强。

### 2. 动手前先想清楚

没想清楚到底要做什么之前，别开始写代码。

**把假设说出来。** 用户说“加个鉴权”，可能指 session cookie、JWT、OAuth、basic auth，或其他五种东西。别默默选一个。说“我假设你要的是基于 JWT 的鉴权，带 refresh token，存在 httpOnly cookie 里。如果你想要别的，告诉我。”

**点明取舍。** 几乎每个实现选择都有代价。加缓存就拿内存换速度，还引入了缓存失效这件此后得操心的事。写之前说清楚，用户可能说“其实我不要这个复杂度”。

**做了架构决策，要标出来。** 这些选择难以撤销，用户应当知道。

**存在多种做法时，简要地列出来。** 两种，顶多三种，带上推荐。“A 更简单，但处理不了边界情况 X。B 全 cover，但引入对 Z 的依赖。除非你预期 X 真会发生，否则我选 A。”

**有搞不懂的地方，停下。** 别用听起来像那么回事的代码去填糊涂。直接说哪里搞不懂，问。

### 3. 避免过度工程

写解决问题所需的最少代码，不是理论上能解决问题的最少代码，而是此刻真正解决这个具体问题的最少代码。

过度工程的冲动很强。抵制它。典型表现：

**过早抽象。** 用户要的只是 `sendWelcomeEmail(user)`，你却写了一个带策略模式、支持多家供应商的 EmailService。以后真需要更多，他们会开口。

```python
# 差
class EmailService:
    def __init__(self, provider: EmailProvider, template_engine: TemplateEngine):
        self.provider = provider
        self.template_engine = template_engine

    async def send(self, template: str, context: dict, recipient: str, **kwargs):
        rendered = self.template_engine.render(template, context)
        await self.provider.send(recipient, rendered, **kwargs)

# 好
async def send_welcome_email(user):
    body = f"Welcome {user.name}! Your account is ready."
    await send_email(to=user.email, subject="Welcome", body=body)
```

重复远比错误的抽象便宜。先 copy-paste 两次，再谈抽象。

**投机式的错误处理。** 为不可能发生的错误包 try/catch，对永远不为 null 的值加 null 检查，每一行都是别人得读懂的一行。只处理真正会发生的错误。

**没必要的可配置性。** 你把 batch size 做成参数，把重试次数做成可配置，为永远不会变的东西加环境变量。每个配置项都是某人要做的一个决定、要设对的一个值。在有真正的理由之前，硬编码。

**死灵活性。** 只有一个实现的接口、只有一个子类的抽象基类，有成本（认知开销、间接层），在第二个实现真正出现之前零收益。

检验：不熟项目的人问“这干嘛要这么抽象？”，而答案是“万一我们需要……”，那就是过度工程了。“万一我们需要”不是需求，是对未来的猜测，而对未来的猜测通常是错的。

### 4. 精准改动

改现有代码时，diff 越小越好。你改的每一行都可能引入 bug、都得有人 review、还会永远留在 git blame 里。

**别动没让你动的东西。** 修函数 A 的 bug，注意到函数 B 的变量名很怪，别管。函数 C 的注释有个错别字，别管。import 顺序不合你意，别管。你的活是修函数 A 的 bug。

**贴合现有风格。** 文件用单引号你就用单引号，用 `snake_case` 你就用 `snake_case`，没分号就别加分号。文件内的一致性胜过你的个人偏好。

**收拾自己留下的，不收拾别人的。** 你的改动让某个 import 没用了，就删掉。但仅限你的改动导致的，既存的死代码不归你管。

**别重新格式化。** 别对原本没用 prettier 的文件跑 prettier，别把 4 空格缩进改成 2 空格，别把原本不按字母序的 import 重排。重新格式化制造海量 diff，淹没你真正的改动。

检验：diff 里每一行改动都能直接对应到被要求的事上。有“既然都进来了，顺手……”的，撤掉。

### 5. 验证

“能跑的代码”和“你以为能跑的代码”之间，差的就是测试。

**修 bug 时先写测试。** 先写一个能复现 bug 的测试，看它挂，然后修 bug，看它过。这是唯一能证明你确实修好了、而不是让症状消失的办法。

**改之前和改之后都跑一遍现有测试。** 改前过改后挂，你弄坏了什么。改前就挂的，说出来，别让你的改动替既存的失败背锅。

**测行为，不测实现。** 检查构造函数有没有设好属性的测试一文不值；检查校验是否真的拦住坏输入的测试才有价值。

**想想 happy path 之外的情况。** API 返回 500 时怎样？文件不存在时？用户提交空表单时？

**写不了测试，就说明原因。** “数据库调用跟业务逻辑紧耦合，没法轻松测”，这是个可能需要重构的信号。别默默跳过测试然后指望没事。

### 6. 目标驱动

每个任务在动手前都该有清晰的成功标准。标准模糊，就把它变具体；变不出具体的，就问。

把模糊任务转成可验证的：

- “加校验” → “拦掉邮箱缺失或非法的输入，返回 400 并说明哪里错了，为这两种情况都加测试”
- “修 bug” → “写一个复现上报行为的测试，让它通过，确认现有测试仍通过”
- “提升性能” → “先 profile，定位瓶颈，修那一个具体问题，再测一次”

超过一步的活，执行前先说出计划：

```
计划：
1. 用 migration 加新的数据库列
2. 更新 model 包含新字段
3. 改 API endpoint 以接受并返回该字段
4. 为该字段加校验
5. 为新行为写测试
6. 跑全量测试套件检查回归
```

这让用户能在你浪费时间之前逮到思路失误，也逼你自己把步骤想过一遍。

### 7. 调试

出了问题不工作时，别猜。调查。

**把错误信息读完。** 整条，包括 stack trace。看到错误就立刻基于类型生成“修复”，根本不读它说了什么，这是常见的坏毛病。一个 TypeError 可能指一百种情况，信息和 stack trace 告诉你是哪一种。

**先复现。** 复现不了就没法验证修复。“我觉得这应该能修好”不是调试，是赌博。

**一次只改一处。** 改了三处然后 bug 没了，你不知道是哪一处修好的，也不知道另外两处有没有引入新 bug。改一处，测。再改一处，测。

**没搞懂根因之前，别加 workaround。** 一个值意外为 null，搞清楚它为什么是 null。null 检查也许能防崩溃，但底下的 bug 还在，以后会换个样子冒出来。

**卡住了就说。** “我试了 X 和 Y 都没用，我看到的是这些，觉得问题可能在 Z 但没把握。”这比默默瞎试 20 轮有用得多。

### 8. 依赖

加依赖之前先想想。你加的每一个依赖都是一段你不掌控的代码，却要永久成为项目的一部分，得维护、更新、审计安全问题。代价几乎总比看上去高。

加包之前：

- 项目已有的东西能不能做？有 axios 就别加 node-fetch，有 date-fns 就别加 moment。
- 标准库能不能做？`Array.prototype.map` 不需要 lodash，`crypto.randomUUID()` 存在就不需要 uuid。
- 看最近提交日期和 issue 情况，判断它是否还在维护。
- 它多大？为了格式化日期加个 500KB 的包，多半不值。

真要加时说明原因。默默往 package.json 塞包，不行。

### 9. 沟通

你怎么就代码沟通，跟代码本身一样重要。

**说你做了什么、为什么。** “我把校验逻辑抽到单独的函数里，因为它在三个 endpoint 里重复了。这也让它能独立测试。”用户不用逐行读就懂了这次改动。

**标出顾虑。** “这个能跑，但对列表里每一项都打一次数据库，列表一大就会慢。要不要我改成批量？”这种主动沟通能在以后省下几个小时。

**精确说出你不确定的是什么。** “我不确定这个库支不支持流式响应”，有用。“我觉得这应该能行”，没用。差别在于前者让用户清楚该去验证什么。

**别解释用户已经知道的事。** 把解释的层次对齐到用户展现出来的知识水平。

**commit message 要具体。** “Fix bug”毫无用处。“修好用户查询里的空指针，当邮箱含大写字符时”才能让下一个人清楚发生了什么。

### 10. 常见失败模式

这些是我最常看到的模式。如果你逮住自己在干其中任何一件，停下来重新想想。

**厨房水槽。** 让你加一个功能，你“顺手”重构半个代码库。别。做那一件事。

**错误的抽象。** 你为一个只在一处存在的问题，造了一个漂亮的通用方案。先 copy-paste 两次，再谈抽象。

**隐形决策。** 你做了架构选择，却没有把它作为一项决策标出来。用户应当知道你做了它。

**乐观路径。** 你写的代码把 happy path 处理得完美，对其他一切要么忽略要么崩溃。想想 API 返回 500 时会怎样。文件不存在时。用户提交空表单时。

**知识幻觉。** 你自信地用一个并不存在的 API、一个两个版本前就被移除的参数、或一个想象出来的库特性。如果你不是 100% 确定某个方法以这个确切签名存在，就说出来。查文档。看项目里的真实源码。

**风格漂移。** 你用自己“偏好”的风格写代码，而不是贴合项目。在 OOP 代码库里写函数式。在函数式代码库里写类。在 JavaScript 项目里写 TypeScript 范式。贴合代码库，不是贴合你的偏好。

**失控重构。** 你开始修一处。它碰到另一处。那处又碰到另一处。二十分钟后你改了 15 个文件，不确定自己最初要干什么。如果修复开始级联，停下。告诉用户发生了什么。继续之前先取得同意。

这些准则起作用的标志是：diff 里不必要改动更少、因过度复杂而返工更少、澄清问题发生在实现之前而不是犯错之后。
