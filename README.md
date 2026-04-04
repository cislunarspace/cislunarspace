<div align="center">

# Cislunar Space Beginner's Guide / 地月空间入门指南

**An open knowledge base for cislunar science, technology, and engineering practice**

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
| [地月空间是什么](https://cislunarspace.cn/what-is-cislunarspace/) | 地月空间定义、特征及任务概况 |
| [地月空间轨道](https://cislunarspace.cn/cislunar-orbits/) | 轨道类型、特性与设计方法 |
| [研究前沿](https://cislunarspace.cn/research-frontiers/) | 活跃研究方向与新兴课题 |
| [术语词典](https://cislunarspace.cn/glossary/) | 专业术语的权威释义 |
| [资源与工具](https://cislunarspace.cn/resources-tools/) | 数据集、开源代码与仿真平台 |
| [蓝军研究](https://cislunarspace.cn/blue-team-research/) | 基于公开资料的条令、装备与运用研究 |
| [Space News](https://cislunarspace.cn/space-news/) | 航天新闻中英双语追踪 |
| [卫星轨道仿真](https://cislunarspace.cn/satellite-simulation/) | 在线轨道仿真教学平台 |
| [AI 问答](https://cislunarspace.cn/ai-chat) | AI 助手辅助学习 |

## 快速开始

### 在线访问

官网：https://cislunarspace.cn

### 本地开发

> 需要 Node.js 18+（CI 环境使用 v22）

```bash
git clone https://github.com/cislunarspace/cislunarspace.git
cd cislunarspace/web
npm install

# 启动开发服务器（自动生成侧边栏）
npm run docs:dev

# 构建静态站点（含侧边栏生成 + 图片同步）
npm run docs:build
```

### 可用脚本

| 命令 | 说明 |
|------|------|
| `npm run docs:dev` | 生成侧边栏 → 启动 VuePress 开发服务器 |
| `npm run docs:build` | 生成侧边栏 → 构建站点 → 同步图片到 dist |
| `npm run gen-sidebar` | 从目录结构自动生成侧边栏配置 |
| `npm run sync-figures` | 将 `figures/` 图片同步到 `dist/` |

## 项目结构

```
cislunarspace/
├── web/                          # VuePress 站点源码与内容
│   ├── .vuepress/                # 站点配置、主题、插件
│   │   ├── config.ts             # VuePress 主配置
│   │   ├── navbar.ts             # 中文导航栏
│   │   ├── navbar-en.ts          # 英文导航栏
│   │   ├── sidebar.ts            # 中文侧边栏
│   │   ├── sidebar-en.ts         # 英文侧边栏
│   │   ├── gen-sidebar.js        # 侧边栏自动生成脚本
│   │   └── sync-figures.js       # 图片同步脚本
│   ├── what-is-cislunarspace/    # 地月空间基础
│   ├── cislunar-orbits/          # 轨道动力学
│   ├── research-frontiers/       # 研究前沿
│   │   ├── institutions/         # 机构与组织
│   │   └── directions/           # 研究方向
│   ├── glossary/                 # 术语词典
│   ├── resources-tools/          # 资源与工具
│   ├── blue-team-research/       # 蓝军研究
│   │   ├── doctrine-strategy/    # 条令与战略
│   │   ├── equipment-tech/       # 装备与技术
│   │   ├── operations-application/ # 作战应用
│   │   └── knowledge-rag/        # 知识库与 RAG
│   ├── space-news/               # 航天新闻（中文）
│   ├── satellite-simulation/     # 卫星轨道仿真教学
│   ├── en/                       # 英文站点内容
│   │   ├── what-is-cislunarspace/
│   │   ├── cislunar-orbits/
│   │   ├── research-frontiers/
│   │   ├── glossary/
│   │   ├── resources-tools/
│   │   ├── blue-team-research/
│   │   ├── space-news/
│   │   └── satellite-simulation/
│   ├── ai-chat.md                # AI 问答页面
│   ├── forum.md                  # 社区论坛
│   ├── deploy/                   # 部署配置（Nginx 等）
│   └── docs/                     # 开发文档
├── scripts/
│   └── space-news-update.sh      # Space News 定时更新脚本
├── CONTRIBUTORS.md               # 贡献者名单
└── LICENSE                       # Apache 2.0
```

## 技术栈

- **框架**：VuePress 2 (v2.0.0-rc.27) + Vue 3 + Vite
- **主题**：@vuepress/theme-default（自定义扩展）
- **插件**：Google Analytics、Sitemap、Medium Zoom、PrismJS、代码复制
- **数学渲染**：KaTeX（markdown-it-katex）
- **样式**：Sass

## 自动化

- **Space News 定时更新**：`scripts/space-news-update.sh` 由系统 crontab 每 3 小时触发，自动搜索航天新闻并生成中英双语稿件

## 贡献

欢迎各种形式的贡献：

- 内容纠错与扩充
- 新章节/词条提案
- 翻译与校对（中/英）
- 问题反馈与功能建议
- 网站优化

请通过 GitHub Issue 或 Pull Request 提交贡献。详见 [CONTRIBUTORS.md](CONTRIBUTORS.md)。

## 联系方式

- GitHub: https://github.com/cislunarspace
- Gitee: https://gitee.com/cislunarspace
- Email: ouyangjiahong22@nudt.edu.cn

## License

Licensed under **Apache License 2.0**. See [LICENSE](LICENSE).
