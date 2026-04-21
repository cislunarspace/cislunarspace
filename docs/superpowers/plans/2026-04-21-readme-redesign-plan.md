# README 全面改版实现计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 对根目录 `README.md` 和 `web/README.md`（网站首页）进行全面改版，采用方案 A — 模块化展示

**Architecture:** 两个 Markdown 文件的文档重构，无代码逻辑变更。根目录 README 侧重项目介绍，首页为 VuePress 页面侧重内容导航。

**Tech Stack:** Markdown（纯文档，无代码依赖）

---

## 文件变更概览

| 文件 | 操作 |
|---|---|
| `cislunarspace/README.md` | 重写 |
| `cislunarspace/web/README.md` | 重写 |

---

## Task 1: 重写根目录 README.md

**文件：** Modify: `cislunarspace/README.md`

- [ ] **Step 1: 写入新内容**

完整替换文件内容为以下结构：

```markdown
<div align="center">

# 地月空间入门指南 / Cislunar Space Beginner's Guide

**开放知识库 · 双语内容 · AI 助手 · 航天动态追踪**

<p align="center">
  <img src="https://img.shields.io/github/stars/cislunarspace/cislunarspace?style=flat-square&logo=github&label=Stars" alt="GitHub stars">
  <img src="https://img.shields.io/github/forks/cislunarspace/cislunarspace?style=flat-square&logo=github&label=Forks" alt="GitHub forks">
  <img src="https://img.shields.io/github/license/cislunarspace/cislunarspace?style=flat-square&logo=apache&label=License" alt="GitHub license">
</p>

</div>

**地月空间入门指南**是一个开源知识项目，旨在降低地月空间领域的学习门槛，为学生、研究者和航天爱好者提供结构化、专业、实用的学习资源。

## 主要模块

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

## 特性亮点

- 🌏 **双语内容** — 中文原文配英文译文，便于跨语言学习
- 🤖 **AI 问答** — 基于 DeepSeek API 的智能问答助手
- ⏰ **自动化追踪** — Space News 每 3 小时自动更新航天动态
- 🛰️ **在线仿真** — 交互式卫星轨道仿真教学平台

## 快速开始

> 需要 Node.js 18+（CI 环境使用 v22）

```bash
git clone https://github.com/cislunarspace/cislunarspace.git
cd cislunarspace/web
npm install
npm run docs:dev
```

## 项目结构

```
cislunarspace/
├── web/                      # VuePress 站点源码与内容
├── scripts/                  # 自动化脚本
├── docs/                     # 开发文档
├── CONTRIBUTORS.md           # 贡献者名单
└── LICENSE                   # Apache 2.0
```

## 技术栈

- **框架**：VuePress 2 + Vue 3 + Vite
- **主题**：@vuepress/theme-default（自定义扩展）
- **数学渲染**：KaTeX（markdown-it-katex）

## 自动化

- **Space News 定时更新**：`scripts/space-news-update.sh` 由系统 crontab 每 3 小时触发，自动搜索航天新闻并生成中英双语稿件

## 贡献

欢迎各种形式的贡献：内容纠错与扩充、新章节/词条提案、翻译与校对（中/英）、问题反馈与功能建议。

请通过 GitHub Issue 或 Pull Request 提交贡献。详见 [CONTRIBUTORS.md](CONTRIBUTORS.md)。

## 联系方式

- GitHub: https://github.com/cislunarspace
- Gitee: https://gitee.com/cislunarspace
- Email: ouyangjiahong22@nudt.edu.cn

## License

Licensed under **Apache License 2.0**. See [LICENSE](LICENSE).
```

- [ ] **Step 2: 提交**

```bash
git add cislunarspace/README.md
git commit -m "docs: redesign root README with modular layout"
```

---

## Task 2: 重写网站首页 web/README.md

**文件：** Modify: `cislunarspace/web/README.md`

- [ ] **Step 1: 写入新内容**

完整替换文件内容为以下结构：

```markdown
---
permalink: /
heroImage: /logo.png
footer: Apache Licensed | 湘ICP备2026006405号-1
wechatShare:
  title: 地月空间入门指南
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
---

# 关于本站

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

> **本站致力于降低地月空间知识的学习门槛，所有内容均经过专业审核，力求准确、可靠、易于理解。**

欢迎通过 [Gitee 仓库](https://gitee.com/cislunarspace/cislunarspace/) 或 [Github 仓库](https://github.com/cislunarspace/cislunarspace/) 提交新的词条、修订建议或其他贡献，与我们一同完善这个地月空间入门知识库。

## 主要模块

<div class="module-grid">
  <a href="/what-is-cislunarspace/" class="module-card">
    <h3>地月空间是什么</h3>
    <p>定义、特征及任务概况</p>
  </a>
  <a href="/cislunar-orbits/" class="module-card">
    <h3>地月空间轨道</h3>
    <p>轨道类型与设计方法</p>
  </a>
  <a href="/research-frontiers/" class="module-card">
    <h3>研究前沿</h3>
    <p>活跃研究方向与新兴课题</p>
  </a>
  <a href="/cislunar-glossary/" class="module-card">
    <h3>术语词典</h3>
    <p>专业术语权威释义</p>
  </a>
  <a href="/resources-tools/" class="module-card">
    <h3>资源与工具</h3>
    <p>数据集、开源代码与仿真平台</p>
  </a>
  <a href="/blue-team-research/" class="module-card">
    <h3>蓝军研究</h3>
    <p>基于公开资料的条令、装备与运用研究</p>
  </a>
  <a href="/space-news/" class="module-card">
    <h3>Space News</h3>
    <p>航天新闻中英双语追踪</p>
  </a>
  <a href="/satellite-simulation/" class="module-card">
    <h3>卫星轨道仿真</h3>
    <p>在线轨道仿真教学平台</p>
  </a>
  <a href="/ai-chat" class="module-card">
    <h3>AI 问答</h3>
    <p>AI 助手辅助学习</p>
  </a>
</div>

<div style="text-align: center; margin: 40px 0;">
  <a href="/ai-chat" class="start-learning-btn" style="
    display: inline-block;
    padding: 15px 30px;
    background-color: #3eaf7c;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    font-size: 18px;
    font-weight: bold;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(62, 175, 124, 0.2);
  ">
    开始AI问答 →
  </a>
</div>

## 参与贡献

欢迎通过 [GitHub](https://github.com/cislunarspace) 或 [Gitee](https://gitee.com/cislunarspace) 提交词条、修订建议，与我们一同完善地月空间知识库。

→ 查看贡献指南

<style>
  .module-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin: 30px 0;
  }
  .module-card {
    display: block;
    padding: 20px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    text-decoration: none;
    color: inherit;
    transition: all 0.2s ease;
  }
  .module-card:hover {
    border-color: #3eaf7c;
    box-shadow: 0 4px 12px rgba(62, 175, 124, 0.15);
    transform: translateY(-2px);
  }
  .module-card h3 {
    margin: 0 0 8px 0;
    font-size: 16px;
    color: #2c3e50;
  }
  .module-card p {
    margin: 0;
    font-size: 14px;
    color: #666;
  }
  .start-learning-btn:hover {
    background-color: #2d9c6a;
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(62, 175, 124, 0.3);
  }
  .start-learning-btn:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(62, 175, 124, 0.2);
  }
</style>
```

- [ ] **Step 2: 提交**

```bash
git add cislunarspace/web/README.md
git commit -m "docs: redesign homepage with 3x3 module card grid"
```

---

## 自检清单

- [ ] 根目录 README 模块表格包含全部 9 个模块
- [ ] 根目录 README 包含特性亮点板块（双语、AI、自动化、仿真）
- [ ] 根目录 README 快速开始只保留核心命令，无冗余脚本表格
- [ ] 根目录 README 项目结构精简为顶层目录
- [ ] web/README.md 保留 frontmatter（permalink、heroImage、footer、wechatShare）
- [ ] web/README.md 包含 3×3 模块卡片网格，覆盖全部 9 个模块
- [ ] web/README.md 保留 AI 问答按钮
- [ ] web/README.md 底部有参与贡献引导
- [ ] 两个文件的模块列表一致（均为 9 个模块）
