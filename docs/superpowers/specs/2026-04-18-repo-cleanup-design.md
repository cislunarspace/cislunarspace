# 代码仓库整理方案

Date: 2026-04-18
Status: approved

## 目标

整理 cislunarspace 代码仓库，清理废弃代码，优化项目结构。

---

## 1. 清理废弃代码

### 删除 VuePress 1 旧主题和组件

- `web/.vuepress/theme/` — 已废弃，被 `theme2/` 完全替代
- `web/.vuepress/components-v1/` — 已废弃，被 `theme2/components/` 替代

这两个目录在 config.ts 和全项目代码中均无任何引用。

---

## 2. 根目录清理

### 删除 OpenClaw 模板文件

以下文件删除：
- `SOUL.md` — 模板，未填写
- `USER.md` — 模板，未填写
- `IDENTITY.md` — 模板，未填写
- `HEARTBEAT.md` — 模板，空文件
- `TOOLS.md` — 模板，无实际内容
- `AGENTS.md` — OpenClaw 用，CLAUDE.md 已覆盖同类信息

### 归档 CONTRIBUTORS.md

移动 `CONTRIBUTORS.md` → `web/docs/contributors.md`

---

## 3. 移动 space-news-publish skill

**从:** `.cursor/skills/space-news-publish/SKILL.md`
**到:** `scripts/space-news-publish/SKILL.md`

### 更新引用

- `scripts/space-news-update.sh` 第 13 行：`.cursor/skills/space-news-publish/SKILL.md` → `scripts/space-news-publish/SKILL.md`
- `CLAUDE.md` 第 76 行：`.cursor/skills/space-news-publish/SKILL.md` → `scripts/space-news-publish/SKILL.md`

---

## 4. 删除 plan 目录

删除整个 `plan/` 目录，包含 16 个历史计划文件。

---

## 5. 目标结构

```
cislunarspace/
├── CLAUDE.md
├── README.md
├── LICENSE
├── .gitignore
├── memory/
├── MEMORY.md
├── docs/
│   └── contributors.md        ← 从根目录移入
├── scripts/
│   ├── space-news-update.sh
│   └── space-news-publish/     ← 从 .cursor 移入
│       └── SKILL.md
└── web/
    ├── .vuepress/
    │   ├── theme/              ← 删除
    │   ├── components-v1/     ← 删除
    │   └── theme2/            ← 当前主题
    └── ...
```

---

## 执行步骤

1. 删除 `web/.vuepress/theme/` 和 `web/.vuepress/components-v1/`
2. 删除根目录 6 个文件：SOUL.md, USER.md, IDENTITY.md, HEARTBEAT.md, TOOLS.md, AGENTS.md
3. 移动 CONTRIBUTORS.md → web/docs/contributors.md
4. 移动 .cursor/skills/space-news-publish/ → scripts/space-news-publish/
5. 更新 scripts/space-news-update.sh 引用路径
6. 更新 CLAUDE.md 引用路径
7. 删除 plan/ 目录
