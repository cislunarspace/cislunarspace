# CONTEXT-MAP：地月空间入门指南

本文件索引仓库内的上下文文件。处理某个主题前，先读对应的 `CONTEXT.md`，再查相关 ADR 与内部约定。

## 上下文

| 上下文 | 位置 | 覆盖范围 |
| --- | --- | --- |
| 根 | `CONTEXT.md` | 站点级领域词汇、分类法与内容模型 |
| Web | `web/CONTEXT.md` | VuePress 配置、主题、插件与构建工具链 |

## 阅读顺序

1. 先读本文件，判断主题属于哪个上下文。
2. 领域词汇、分类法与内容模型读根 `CONTEXT.md`。构建工具、主题与插件读 `web/CONTEXT.md`。
3. 需要了解决策背景时查 `docs/adr/`。术语在 issue、ADR、测试与 PR 中的使用约定见 `docs/agents/domain.md`。

## 文件结构

```text
/
├── CONTEXT-MAP.md                 # 本文件
├── CONTEXT.md                     # 站点级领域词汇表（权威来源）
├── docs/
│   ├── adr/                       # 系统级架构决策
│   └── agents/                    # agent 如何使用领域文档
└── web/
    └── CONTEXT.md                 # VuePress 配置与构建工具链上下文
```

根 `CONTEXT.md` 是领域词汇的权威来源。`web/CONTEXT.md` 只覆盖构建工具链，不重复站点内容约定。
