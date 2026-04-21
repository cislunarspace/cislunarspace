# README 全面改版设计

**日期：** 2026-04-21
**状态：** 已批准

---

## 概述

对仓库根目录 `README.md` 和 `web/README.md`（网站首页）进行全面改版，采用方案 A — 模块化展示。

---

## 根目录 README.md 更新内容

### 1. 头部

- 精简标题结构：`# 地月空间入门指南 / Cislunar Space Beginner's Guide`
- 副标题一行定位语：`开放知识库 · 双语内容 · AI 助手 · 航天动态追踪`
- 保留徽章（Stars / Forks / License）

### 2. 模块表格（9 个模块全覆盖）

| 模块 | 说明 |
|---|---|
| [地月空间是什么](https://cislunarspace.cn/what-is-cislunarspace/) | 定义、特征及任务概况 |
| [地月空间轨道](https://cislunarspace.cn/cislunar-orbits/) | 轨道类型与设计方法 |
| [研究前沿](https://cislunarspace.cn/research-frontiers/) | 活跃研究方向与新兴课题 |
| [术语词典](https://cislunarspace.cn/glossary/) | 专业术语权威释义 |
| [资源与工具](https://cislunarspace.cn/resources-tools/) | 数据集、开源代码与仿真平台 |
| [蓝军研究](https://cislunarspace.cn/blue-team-research/) | 基于公开资料的条令、装备与运用研究 |
| [Space News](https://cislunarspace.cn/space-news/) | 航天新闻中英双语追踪 |
| [卫星轨道仿真](https://cislunarspace.cn/satellite-simulation/) | 在线轨道仿真教学平台 |
| [AI 问答](https://cislunarspace.cn/ai-chat) | AI 助手辅助学习 |

### 3. 特性亮点（新增板块）

```markdown
## 特性亮点

- 🌏 **双语内容** — 中文原文配英文译文，便于跨语言学习
- 🤖 **AI 问答** — 基于 DeepSeek API 的智能问答助手
- ⏰ **自动化追踪** — Space News 每 3 小时自动更新航天动态
- 🛰️ **在线仿真** — 交互式卫星轨道仿真教学平台
```

### 4. 快速开始

精简为只保留核心命令组，去掉冗余脚本说明表格。

```markdown
## 快速开始

> 需要 Node.js 18+（CI 环境使用 v22）

```bash
git clone https://github.com/cislunarspace/cislunarspace.git
cd cislunarspace/web
npm install
npm run docs:dev
` ``
```

### 5. 项目结构

精简为只展示顶层目录，不展开子目录。

### 6. 其余板块

技术栈、自动化、贡献、联系方式 — 保持现有内容，仅精简文案，不大幅改动。

---

## web/README.md（首页）更新内容

### 1. 顶部信息（保留）

- 作者信息、站点地址、愿景声明保持不变
- AI 问答按钮保留，样式微调

### 2. 模块卡片网格（3×3 卡片）

每个模块一张卡片，展示名称和一句话描述，hover 效果。

卡片内容与根目录 README 的模块表格一致（9 个模块全覆盖）。

### 3. 底部参与贡献引导（新增）

```markdown
## 参与贡献

欢迎通过 [GitHub](url) 或 [Gitee](url) 提交词条、修订建议，与我们一同完善地月空间知识库。

→ 查看贡献指南
```

---

## 实施说明

- 根目录 README 以中文为主，关键术语附英文
- 首页 web/README.md 为 VuePress 页面，保留 frontmatter（`permalink`, `heroImage`, `footer`, `wechatShare`）
- 两个文件的模块列表保持一致，均为 9 个模块
