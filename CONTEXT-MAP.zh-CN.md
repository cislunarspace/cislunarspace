[English](CONTEXT-MAP.md) | 简体中文

# CONTEXT-MAP：地月空间入门指南

本文件指向各上下文各自的 `CONTEXT.md`。处理某个主题时，阅读与之相关的那个。

## 上下文

| 上下文 | 位置 | 说明 |
|--------|------|------|
| 根 | `CONTEXT.md` | 站点级领域词汇表、分类法与双语约定 |
| Web | `web/CONTEXT.md` | VuePress 配置、主题、插件与构建工具链 |

## 如何使用

1. **领域词汇与分类法概念**：读仓库根的 `CONTEXT.md`。
2. **VuePress 配置、主题或构建问题**：读 `web/CONTEXT.md`。
3. **架构决策**：系统级决策查 `docs/adr/`；上下文专属决策查 `web/docs/adr/`（如存在）。
4. **内容优先级、受众与呈现决策**：读 `docs/content-strategy.md`。

## 文件结构

```text
/
├── CONTEXT-MAP.md
├── CONTEXT.md                          ← 站点级领域词汇表
├── docs/adr/                          ← 系统级决策
│   ├── 0001-unified-taxonomy-module.md
│   └── ...
└── web/
    ├── CONTEXT.md                     ← VuePress 配置上下文
    └── docs/adr/                      ← 上下文专属决策（如有）
```

## 备注

- 根 `CONTEXT.md` 是领域词汇的权威来源。
- Web 上下文主要覆盖构建工具链与 VuePress 配置。
- 处理内容（markdown 文件、术语词典、太空新闻）时，参阅根 `CONTEXT.md`。
- 处理构建工具、主题或插件时，参阅 `web/CONTEXT.md`。
