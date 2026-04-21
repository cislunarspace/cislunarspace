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

- 🌍 **双语内容** — 中文原文配英文译文，便于跨语言学习
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
