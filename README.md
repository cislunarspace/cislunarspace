<div align="center">

# 地月空间入门指南

一个系统梳理地月空间核心概念、轨道力学与工程实践的中文知识库

[在线阅读](https://cislunarspace.cn/) | [报告问题](https://github.com/cislunarspace/cislunarspace/issues)

</div>

## 项目定位

地月空间通常指地球静止轨道以外、直至月球表面的空间，包括远地空间、地月转移空间与月球空间。与近地轨道不同，这里的航天器同时受到地球、月球与太阳引力的作用，轨道无法只用二体开普勒模型描述。平动点、共振轨道与低能转移通道由此成为任务设计的核心对象。理解这一力学环境，是探月工程、载人登月与深空物资中转的基础。

本站面向希望系统了解该领域的学生、研究人员与工程人员。内容从空间范围与环境特征讲起，逐步进入轨道族、转移设计与工程实践，并提供术语、数据与算法工具供查阅。

## 内容组织

学习主线按由浅入深的顺序展开：

| 板块 | 内容 | 入口 |
| --- | --- | --- |
| 什么是地月空间 | 空间范围、环境特征与战略价值 | [阅读](https://cislunarspace.cn/what-is-cislunarspace/) |
| 地月空间轨道 | 三体动力学、NRHO、DRO、Halo 轨道与转移通道 | [阅读](https://cislunarspace.cn/cislunar-orbits/) |
| 科学前沿与工程 | 研究方向、学术机构、期刊会议与重大任务 | [阅读](https://cislunarspace.cn/research-frontiers/) |

三条主线之外，站点还提供三类查阅入口：

- 背景知识：力学、数学与最优控制的基础推导，内容在 [`web/background/`](web/background/)。
- 术语词典：覆盖动力学、轨道、导航等类别的中英对照词条，内容在 [`web/glossary/`](web/glossary/)。
- 资源与工具：星历、重力场模型、数据集与算法库索引，见[资源与工具](https://cislunarspace.cn/resources-tools/)。

站点另有一个基于全站知识库的 AI 问答入口，见 [AI 领域助手](https://cislunarspace.cn/ai-chat)。

## 仓库结构

| 路径 | 用途 |
| --- | --- |
| [`web/`](web/) | VuePress 站点、主题、构建脚本与知识库内容 |
| [`admin/`](admin/) | 本地内容管理器，不参与线上部署 |
| [`docs/`](docs/) | 架构决策、内部协作约定与审计记录 |
| [`scripts/`](scripts/) | 部署与内容校验脚本 |

本地开发、检查与部署命令见[开发指南](docs/internal/develop.md)。领域词汇与分类法约定见 [`CONTEXT.md`](CONTEXT.md)，架构决策见 [`docs/adr/`](docs/adr/)。

## 参与贡献

欢迎通过 Issue 与 Pull Request 参与贡献。本仓库采用提案先行：动手写代码之前先发 Issue 提案，得到维护者回应再动手。小改动，例如错别字或修法唯一的明显 bug，可以直接提 PR。

贡献流程、模板、标签与推进面板见 [CONTRIBUTING.md](CONTRIBUTING.md)。使用 AI 生成 Issue 或 PR 时，按 [`AGENTS.md`](AGENTS.md) 的要求添加标识。正文与提交信息的行文约定见 `CONTRIBUTING.md` 的正文写作约定一节。

站点为中文单语，英文版本已移除，见 [ADR-0006](docs/adr/0006-remove-english-site.md)。

## 许可证

本项目基于 [Apache License 2.0](LICENSE) 开源。
