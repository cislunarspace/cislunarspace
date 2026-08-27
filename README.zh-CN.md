[English](./README.md) | 简体中文

<div align="center">

# 地月空间入门指南

**一个系统梳理地月空间核心概念、轨道力学与工程实践的双语知识库**

[在线阅读](https://cislunarspace.cn/) · [English Version](https://cislunarspace.cn/en/) · [报告问题](https://github.com/cislunarspace/cislunarspace/issues)

</div>

---

## 这是什么

从近地轨道到三十八万公里之外的月球，航天器的飞行规律发生了根本变化：地球引力不再独占主导，月球引力与太阳引力相互交织，轨道呈现出多体动力学的丰富形态。无论是探月工程、载人登月还是深空物资中转，理解地月空间的力学环境都是基础。

本站围绕三条主线展开：

| 模块 | 内容 |
|---|---|
| [什么是地月空间](https://cislunarspace.cn/what-is-cislunarspace/) | 空间范围定义、环境特征与应用价值 |
| [地月空间轨道](https://cislunarspace.cn/cislunar-orbits/) | NRHO、DRO、平动点轨道与转移通道 |
| [科学前沿与工程](https://cislunarspace.cn/research-frontiers/) | 研究方向、学术机构与重大任务 |

此外还有力学背景知识（[`web/background/`](web/background/)）、覆盖动力学、轨道、导航等类别的术语词典（[`web/glossary/`](web/glossary/)），以及基于全站知识库的 AI 问答入口。

## 仓库结构

```text
/
├── README.md               ← 本文件
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

## 贡献

欢迎通过 Issue 与 Pull Request 参与贡献。动手前请先阅读 [`AGENTS.md`](AGENTS.md)（AI 协作准则）、[`CONTEXT.md`](CONTEXT.md)（领域词汇表）与 [`CONTRIBUTING` 相关约定](docs/internal/contributors.md)。

新增中文词条时请同步关注英文镜像（`web/en/glossary/`）；双语一致性由 `npm run check` 自动把关。

## 许可证

本项目基于 [Apache License 2.0](LICENSE) 开源。
