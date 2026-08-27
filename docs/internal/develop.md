[简体中文](develop.md) | [English](develop.en.md)

# 开发指南

本站代码与内容的组织方式，以及在本地运行的方法。

## 网站结构

```text
/
├── README.md               ← 项目简介
├── CONTEXT.md              ← 站点级领域词汇表与双语约定
├── CONTEXT-MAP.md          ← 各上下文 CONTEXT 文件的索引
├── AGENTS.md               ← AI 协作准则
├── docs/
│   ├── adr/                ← 架构决策记录
│   ├── agents/             ← agent 如何使用领域文档的说明
│   ├── audits/             ← 内容审计与调研记录
│   ├── internal/           ← 内部协作约定
│   └── research/           ← 词条合并前的学术调研笔记
├── web/                    ← VuePress 2 站点（zh 在 / ，en 在 /en/）
│   ├── .vuepress/          ← 配置、主题定制、生成器与插件
│   ├── glossary/           ← 中文术语词条
│   └── en/                 ← 英文镜像内容
└── admin/                  ← 本地内容管理器（Express + Vue 3 GUI）
```

## 本地开发

```bash
cd web
npm install
npm run dev        # 启动开发服务器
npm run build      # 生成侧边栏并构建生产版本
npm run test       # 运行 Vitest 测试
npm run check      # 双语镜像、中英文与链接一致性检查
```

内容管理器（可选）：

```bash
cd admin
npm install
npm start          # 启动本地 GUI，管理术语与章节页面
```
