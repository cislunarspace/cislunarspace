# 死内容清理 — 实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 清理死内容，修复双语不对称：翻译43个中文文件为英文，删除空目录，验证构建通过。

**Architecture:** 纯内容翻译任务，按内容分区逐批执行。每批完成后验证构建，无测试框架。

**Tech Stack:** VuePress 2, markdown, npm

---

## 文件结构

```
web/
├── blue-team-research/doctrine-strategy/
│   ├── us-doctrine-system.md          → en/blue-team-research/doctrine-strategy/us-doctrine-system.md (替换)
│   ├── cyberspace-operations-doctrine.md → en/blue-team-research/doctrine-strategy/cyberspace-operations-doctrine.md (新建)
│   └── joint-warfighting-doctrine.md  → en/blue-team-research/doctrine-strategy/joint-warfighting-doctrine.md (新建)
├── research-frontiers/institutions/
│   ├── nudt.md, npu.md, seu.md, thu.md, dfhscl.md → en/research-frontiers/institutions/ (各新建)
├── glossary/
│   ├── dynamics/     (5个新建: ephemeris-model, qbcp, action-angle, birkhoff-gustavson, central-manifold)
│   ├── navigation/   (9个新建: cislunar-spatiotemporal-reference, earth-moon-hybrid-navigation, gnss-weak-signal-navigation, inter-satellite-link-navigation, lunanet, lunar-navigation-constellation, moonlight, orbit-identification, tiandu-1)
│   ├── orbits/       (3个新建: dro, nrho, dro-constellation)
│   ├── other/       (5个新建: cislunar-navigation-prospects, exosims, nuclear-thermal-propulsion, pogo, space-traffic-management)
│   ├── programs/    (2个新建: artemis, lugre)
│   └── organizations/ (13个新建: anduril, booz-allen-hamilton, general-dynamics-mission-systems, gitai-usa, lockheed-martin, northrop-grumman, quindar, raytheon, sci-tec, spacex, true-anomaly, turion-space)
└── cislunar-orbits/figures/.gitkeep (删除)
```

---

## 翻译模板

每个翻译文件遵循以下 frontmatter 模板（以 `hit.md` 为参考）：

```yaml
---
permalink: /en/research-frontiers/institutions/<slug>/
title: <English Title>
description: <English description>
keywords: <English keywords>
author: <original author or Tianjiang Shuo>
date: <original date from zh file>
lastUpdated: 2026-04-26
wechatShare:
  title: "<English title>"
  desc: "<English description>"
  image: "/logo.png"
og:
  title: <English title>
  description: <English description>
  image: "/logo.png"
  type: article
twitter:
  card: summary_large_image
  title: <English title>
  description: <English description>
  image: "/logo.png"
---
```

---

## 任务批次

### 批次 1: blue-team-research/doctrine-strategy/ 翻译（3文件）

- [ ] **Step 1: 翻译 `us-doctrine-system.md` (96L → en)**
  - 读取: `web/blue-team-research/doctrine-strategy/us-doctrine-system.md`
  - 翻译标题、正文、表格、参考文献为英文
  - 保留 frontmatter 结构，修改: `title → English`, `description → English`, `permalink → /en/...`, `wechatShare/og/twitter → English`
  - 写入: `web/en/blue-team-research/doctrine-strategy/us-doctrine-system.md`
  - 提交: `git add en/blue-team-research/doctrine-strategy/us-doctrine-system.md && git commit -m "docs: translate us-doctrine-system.md to English"`

- [ ] **Step 2: 翻译 `cyberspace-operations-doctrine.md` (18L → en)**
  - 读取: `web/blue-team-research/doctrine-strategy/cyberspace-operations-doctrine.md`
  - 写入: `web/en/blue-team-research/doctrine-strategy/cyberspace-operations-doctrine.md`
  - 提交: `git add en/blue-team-research/doctrine-strategy/cyberspace-operations-doctrine.md && git commit -m "docs: translate cyberspace-operations-doctrine.md to English"`

- [ ] **Step 3: 翻译 `joint-warfighting-doctrine.md` (18L → en)**
  - 读取: `web/blue-team-research/doctrine-strategy/joint-warfighting-doctrine.md`
  - 写入: `web/en/blue-team-research/doctrine-strategy/joint-warfighting-doctrine.md`
  - 提交: `git add en/blue-team-research/doctrine-strategy/joint-warfighting-doctrine.md && git commit -m "docs: translate joint-warfighting-doctrine.md to English"`

---

### 批次 2: research-frontiers/institutions/ 翻译（5文件）

- [ ] **Step 4: 翻译 `nudt.md` (267L → en)**
  - 读取: `web/research-frontiers/institutions/nudt.md`
  - 参考: `web/en/research-frontiers/institutions/hit.md` 的 frontmatter 模板
  - 写入: `web/en/research-frontiers/institutions/nudt.md`
  - 提交: `git add en/research-frontiers/institutions/nudt.md && git commit -m "docs: translate nudt.md to English"`

- [ ] **Step 5: 翻译 `npu.md` (72L → en)**
  - 读取: `web/research-frontiers/institutions/npu.md`
  - 写入: `web/en/research-frontiers/institutions/npu.md`
  - 提交: `git add en/research-frontiers/institutions/npu.md && git commit -m "docs: translate npu.md to English"`

- [ ] **Step 6: 翻译 `seu.md` (48L → en)**
  - 读取: `web/research-frontiers/institutions/seu.md`
  - 写入: `web/en/research-frontiers/institutions/seu.md`
  - 提交: `git add en/research-frontiers/institutions/seu.md && git commit -m "docs: translate seu.md to English"`

- [ ] **Step 7: 翻译 `thu.md` (73L → en)**
  - 读取: `web/research-frontiers/institutions/thu.md`
  - 写入: `web/en/research-frontiers/institutions/thu.md`
  - 提交: `git add en/research-frontiers/institutions/thu.md && git commit -m "docs: translate thu.md to English"`

- [ ] **Step 8: 翻译 `dfhscl.md` (92L → en)**
  - 读取: `web/research-frontiers/institutions/dfhscl.md`
  - 写入: `web/en/research-frontiers/institutions/dfhscl.md`
  - 提交: `git add en/research-frontiers/institutions/dfhscl.md && git commit -m "docs: translate dfhscl.md to English"`

---

### 批次 3: glossary/dynamics/ 翻译（5文件）

- [ ] **Step 9: 翻译 dynamics 组（ephemeris-model, qbcp, action-angle, birkhoff-gustavson, central-manifold）**
  - 逐个读取、翻译、写入 en/ 对应路径
  - 5个文件全部完成后一次性提交:
    `git add en/glossary/dynamics/ && git commit -m "docs: translate 5 glossary/dynamics files to English"`

---

### 批次 4: glossary/navigation/ 翻译（9文件）

- [ ] **Step 10: 翻译 navigation 组（9个缺失文件）**
  - 逐个读取、翻译、写入 en/ 对应路径
  - 9个文件全部完成后一次性提交:
    `git add en/glossary/navigation/ && git commit -m "docs: translate 9 glossary/navigation files to English"`

---

### 批次 5: glossary/orbits/ 翻译（3文件: dro, nrho, dro-constellation）

- [ ] **Step 11: 翻译 orbits 组**
  - 逐个读取、翻译、写入 en/ 对应路径
  - 3个文件全部完成后一次性提交:
    `git add en/glossary/orbits/ && git commit -m "docs: translate 3 glossary/orbits files to English"`

---

### 批次 6: glossary/other/ 翻译（5文件）

- [ ] **Step 12: 翻译 other 组（cislunar-navigation-prospects, exosims, nuclear-thermal-propulsion, pogo, space-traffic-management）**
  - 逐个读取、翻译、写入 en/ 对应路径
  - 5个文件全部完成后一次性提交:
    `git add en/glossary/other/ && git commit -m "docs: translate 5 glossary/other files to English"`

---

### 批次 7: glossary/programs/ 翻译（2文件: artemis, lugre）

- [ ] **Step 13: 翻译 programs 组**
  - 逐个读取、翻译、写入 en/ 对应路径
  - 2个文件全部完成后一次性提交:
    `git add en/glossary/programs/ && git commit -m "docs: translate 2 glossary/programs files to English"`

---

### 批次 8: glossary/organizations/ 翻译（13文件）

- [ ] **Step 14: 翻译 organizations 组（13个文件）**
  - 逐个读取、翻译、写入 en/ 对应路径
  - 13个文件全部完成后一次性提交:
    `git add en/glossary/organizations/ && git commit -m "docs: translate 13 glossary/organizations files to English"`

---

### 批次 9: 清理与验证

- [ ] **Step 15: 删除空目录 `cislunar-orbits/figures/.gitkeep`**
  - 运行: `rm web/cislunar-orbits/figures/.gitkeep`
  - 提交: `git add -A && git commit -m "chore: remove empty cislunar-orbits/figures/.gitkeep"`

- [ ] **Step 16: 运行 `npm run gen-sidebar`**
  - 运行: `cd web && npm run gen-sidebar`
  - 验证: `sidebar.auto.json` 和 `space-news-articles.json` 更新成功

- [ ] **Step 17: 运行 `npm run docs:build` 验证构建**
  - 运行: `cd web && npm run docs:build`
  - 预期: 构建成功，无错误

- [ ] **Step 18: 最终提交所有变更**
  - 检查: `git status` 确认所有翻译文件已提交
  - 运行: `git log --oneline` 确认批次提交记录完整

---

## 自检清单

1. **Spec 覆盖检查** — 对照 spec 逐项确认：
   - ✅ 批次1: 3个 blue-team/doctrine-strategy 文件
   - ✅ 批次2: 5个 research-frontiers/institutions 文件
   - ✅ 批次3-8: 35个 glossary 文件
   - ✅ 批次9: 空目录清理 + 构建验证

2. **占位符扫描** — 确认无 TBD/TODO/未填写内容

3. **路径一致性** — 所有 en 目标路径与 spec 中的路径一致

---

## 执行选项

Plan 完成并保存至 `docs/superpowers/plans/2026-04-26-dead-content-cleanup.md`。

两种执行方式：

**1. Subagent-Driven (recommended)** — 每个批次由新的 subagent 执行，批次间审查，快速迭代

**2. Inline Execution** — 本 session 内顺序执行，批次间检查点

选择哪种方式？
