
# 开发指南

本站代码与内容的组织方式，以及在本地运行的方法。

## 网站结构

```text
/
├── README.md               ← 项目简介
├── CONTEXT.md              ← 站点级领域词汇表
├── CONTEXT-MAP.md          ← 各上下文 CONTEXT 文件的索引
├── AGENTS.md               ← AI 协作准则
├── docs/
│   ├── adr/                ← 架构决策记录
│   ├── agents/             ← agent 如何使用领域文档的说明
│   ├── audits/             ← 内容审计与调研记录
│   ├── internal/           ← 内部协作约定
│   └── research/           ← 词条合并前的学术调研笔记
├── web/                    ← VuePress 2 站点（中文单语）
│   ├── .vuepress/          ← 配置、主题定制、生成器与插件
│   └── glossary/           ← 术语词条
└── admin/                  ← 本地内容管理器（Express + Vue 3 GUI）
```

## 本地开发

```bash
cd web
npm install
npm run dev        # 启动开发服务器
npm run build      # 生成侧边栏并构建生产版本
npm run test       # 运行 Vitest 测试
npm run check      # 链接、引用键与词条 frontmatter 检查
```

内容管理器（可选）：

```bash
cd admin
npm install
npm start          # 启动本地 GUI，管理术语与章节页面
```

## 部署

在仓库根目录执行：

```bash
scripts/deploy.sh
```

脚本默认在本机运行 `npm run build`，把 `web/.vuepress/dist` 上传到服务器同目录下的暂存目录，再将线上 dist 切换为新版本。切换前的 dist 保留为 `dist.bak-UTC时间戳-进程号`，脚本不自动删除备份。公网校验失败时自动恢复上一版。

发布要求工作区没有未提交改动。前置条件：本机有 Node、npm、git、ssh、rsync、curl，服务器有 rsync，并且当前用户能通过 SSH 免交互登录。脚本只替换静态文件，不修改 nginx 或 WAF 配置。

只检查环境与现有产物，不构建、不上传：

```bash
scripts/deploy.sh --dry-run
```

复用已经构建好的 dist：

```bash
scripts/deploy.sh --no-build
```

三个环境变量用于覆盖默认值：

| 变量 | 默认值 | 用途 |
| --- | --- | --- |
| `CISLUNSPACE_SSH_TARGET` | `jump` | SSH 目标，可写主机别名或 `user@host` |
| `CISLUNSPACE_REMOTE_ROOT` | `/home/ubuntu/cislunarspace` | 服务器上的仓库目录 |
| `CISLUNSPACE_SITE_ORIGIN` | `https://cislunarspace.cn` | 发布后校验使用的公网地址 |

发布前本地校验词典工件的 `url`、`keywords`、定义与词条身份，并检查接入指南页和 sitemap。发布后从公网重复词典校验，同时请求 `/resources-tools/glossary-api/`。校验最多尝试五次，仍失败则恢复备份。终端最后会打印上一版在服务器上的保留路径。
