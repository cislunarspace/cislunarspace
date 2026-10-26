# 开发指南

本站代码与内容的组织方式，以及本地开发、检查与部署的方法。

## 仓库结构

```text
/
├── README.md
├── CONTEXT.md              # 站点级领域词汇表
├── CONTEXT-MAP.md          # 各上下文 CONTEXT 文件的索引
├── AGENTS.md               # AI 协作准则
├── docs/
│   ├── adr/                # 架构决策记录
│   ├── agents/             # agent 如何使用领域文档
│   ├── audits/             # 内容审计与调研记录
│   ├── internal/           # 内部协作约定
│   └── research/           # 词条合并前的学术调研笔记
├── web/                    # VuePress 2 站点（中文单语）
│   ├── .vuepress/          # 配置、主题、生成器与插件
│   └── glossary/           # 术语词条
├── admin/                  # 本地内容管理器（Express + Vue 3 GUI）
├── deploy/                 # nginx 反向代理配置示例
└── scripts/                # 部署与内容校验脚本
```

`web/` 是线上站点的唯一构建入口。`admin/` 是本地工具，不参与线上部署。`docs/` 存放工程文档，不进入站点构建。

## 本地开发

需要 Node.js 与 npm。

```bash
cd web
npm install
npm run dev
```

`npm run dev` 先运行 `gen-sidebar` 生成侧边栏与索引工件，再启动 VuePress 开发服务器。普通内容改动通常触发热更新，涉及分类法或索引工件的改动需要重新运行 `npm run dev`。

生产构建：

```bash
npm run build
```

该命令同样先生成工件，再执行带缓存与 worker 池的 SSR 构建，输出到 `web/.vuepress/dist/`。不要在服务器上构建，原因见下文部署一节。

## 检查与测试

```bash
npm run lint    # markdownlint、ESLint 与 Prettier 检查
npm test        # Vitest
npm run check   # 站内链接、引用键与词条 frontmatter 校验
```

`npm run check` 直接读取 markdown 源文件，不依赖构建产物。提交前至少运行与改动相关的检查，涉及站点内容或结构时三项都跑。

内容管理器可选：

```bash
cd admin
npm install
npm start
```

浏览器访问 `http://localhost:8765`。

## 部署

部署只做一件事：在本机构建，上传 `web/.vuepress/dist`，在服务器上原子切换。服务器只承担静态文件服务，避免构建占用其内存与 CPU。

发布前要求工作区没有未提交改动。前置条件：本机有 Node、npm、git、ssh、rsync、curl，服务器有 rsync，并且当前用户能通过 SSH 免交互登录。

```bash
scripts/deploy.sh
```

脚本在本机运行 `npm run build`，把 `dist` 上传到服务器同目录下的暂存目录，切换前保留旧版本。公网校验失败时自动恢复上一版。备份目录名为 `dist.bak-UTC时间戳-进程号`，脚本不自动删除备份，终端会打印上一版的保留路径。

只检查环境与现有产物，不构建、不上传：

```bash
scripts/deploy.sh --dry-run
```

复用已经构建好的 `dist`：

```bash
scripts/deploy.sh --no-build
```

三个环境变量用于覆盖默认值：

| 变量 | 默认值 | 用途 |
| --- | --- | --- |
| `CISLUNSPACE_SSH_TARGET` | `jump` | SSH 目标，可写主机别名或 `user@host` |
| `CISLUNSPACE_REMOTE_ROOT` | `/home/ubuntu/cislunarspace` | 服务器上的仓库目录 |
| `CISLUNSPACE_SITE_ORIGIN` | `https://cislunarspace.cn` | 发布后校验使用的公网地址 |

发布前本地校验词典工件的 `url`、`keywords`、定义与词条身份，并检查接入指南页与 sitemap。发布后从公网重复词典校验，同时请求 `/resources-tools/glossary-api/`。校验最多尝试五次，仍失败则恢复备份。
