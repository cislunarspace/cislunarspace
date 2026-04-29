# Design: Adding Three-Body Dynamics Glossary Terms

**Date:** 2026-04-29
**Source:** Li Xiangyu et al. (2021) "三体轨道动力学研究进展" (Progress of Three-Body Orbital Dynamics Study)

## Overview

Add 14 new technical terms extracted from the three-body dynamics review paper to the cislunar space bilingual glossary. Each term gets both a Chinese and English entry (28 files total), plus updates to both sidebar configurations.

## New Terms

### dynamics/ (动力学与数学基础) — 8 terms

| # | Slug | Chinese Title | English Title |
|---|------|--------------|---------------|
| 1 | `zero-velocity-surface` | 零速度曲面 | Zero-Velocity Surface |
| 2 | `hill-three-body` | Hill三体模型 | Hill Three-Body Problem |
| 3 | `bicircular-four-body` | 双圆四体模型 | Bicircular Four-Body Problem |
| 4 | `quasi-bicircular-four-body` | 拟双圆四体模型 | Quasi-Bicircular Four-Body Problem |
| 5 | `strobe-map` | 频闪映射 | Strobe Map |
| 6 | `stability-set` | 稳定集 | Stability Set |
| 7 | `backward-stability-set` | 逆向稳定集 | Backward Stability Set |
| 8 | `capture-set` | 捕获集 | Capture Set |

### orbits/ (任务轨道) — 5 terms

| # | Slug | Chinese Title | English Title |
|---|------|--------------|---------------|
| 9 | `cycler-trajectory` | 循环轨道 | Cycler Trajectory |
| 10 | `multi-revolution-halo` | 多圈Halo轨道 | Multi-Revolution Halo Orbit |
| 11 | `ballistic-capture` | 弹道捕获轨道 | Ballistic Capture Orbit |
| 12 | `low-energy-transfer` | 低能量转移轨道 | Low-Energy Transfer Orbit |
| 13 | `full-lunar-coverage` | 全月面覆盖轨道 | Full Lunar Surface Coverage Orbit |

### navigation/ (导航技术与系统) — 1 term

| # | Slug | Chinese Title | English Title |
|---|------|--------------|---------------|
| 14 | `liason-navigation` | LiAISON自主导航 | LiAISON Navigation |

## File Structure

### New Files (28 total)

```
web/glossary/dynamics/zero-velocity-surface.md
web/glossary/dynamics/hill-three-body.md
web/glossary/dynamics/bicircular-four-body.md
web/glossary/dynamics/quasi-bicircular-four-body.md
web/glossary/dynamics/strobe-map.md
web/glossary/dynamics/stability-set.md
web/glossary/dynamics/backward-stability-set.md
web/glossary/dynamics/capture-set.md
web/glossary/orbits/cycler-trajectory.md
web/glossary/orbits/multi-revolution-halo.md
web/glossary/orbits/ballistic-capture.md
web/glossary/orbits/low-energy-transfer.md
web/glossary/orbits/full-lunar-coverage.md
web/glossary/navigation/liason-navigation.md
web/en/glossary/dynamics/zero-velocity-surface.md
web/en/glossary/dynamics/hill-three-body.md
web/en/glossary/dynamics/bicircular-four-body.md
web/en/glossary/dynamics/quasi-bicircular-four-body.md
web/en/glossary/dynamics/strobe-map.md
web/en/glossary/dynamics/stability-set.md
web/en/glossary/dynamics/backward-stability-set.md
web/en/glossary/dynamics/capture-set.md
web/en/glossary/orbits/cycler-trajectory.md
web/en/glossary/orbits/multi-revolution-halo.md
web/en/glossary/orbits/ballistic-capture.md
web/en/glossary/orbits/low-energy-transfer.md
web/en/glossary/orbits/full-lunar-coverage.md
web/en/glossary/navigation/liason-navigation.md
```

### Sidebar Updates (2 files)

- `web/.vuepress/sidebar.ts` — add 14 new entries to Chinese sidebar
- `web/.vuepress/sidebar-en.ts` — add 14 new entries to English sidebar

## Entry Template

Each entry follows the existing glossary format:

```yaml
---
title: 中文名称（English Name / ABBREVIATION）
description: One-sentence summary
keywords: comma, separated, keywords
author: 天疆说          # zh / CislunarSpace (en)
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Term Name
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: Term详解 | 地月空间入门指南
  description: Same as description
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Term详解 | 地月空间入门指南
  description: Same as description
  image: /logo.png
permalink: /glossary/category/slug/
---
```

Body structure:
1. `# Title` — H1 heading
2. `> Author:` + `> Website:` — blockquote attribution
3. `## 定义` — core definition
4. `## 核心要素` — key properties (where applicable)
5. `## 相关概念` — cross-references to existing entries
6. `## 应用` — mission examples (where applicable)

## Cross-Reference Map

| New Term | Links To (existing entries) |
|----------|---------------------------|
| 零速度曲面 | Jacobi积分, CRTBP, 平动点 |
| Hill三体模型 | CRTBP |
| 双圆四体模型 | CRTBP, ERTBP |
| 拟双圆四体模型 | ERTBP, 双圆四体模型 |
| 频闪映射 | 庞加莱映射, 庞加莱截面 |
| 稳定集 | 弱稳定边界 |
| 逆向稳定集 | 稳定集, 弱稳定边界 |
| 捕获集 | 弱稳定边界, 弹道捕获轨道 |
| 循环轨道 | 共振轨道, 自由返回轨道 |
| 多圈Halo轨道 | Halo轨道, ERTBP, Lyapunov轨道 |
| 弹道捕获轨道 | 弱稳定边界, 月球引力辅助, 低能量转移轨道 |
| 低能量转移轨道 | 不变流形, 转移轨道, 弹道捕获轨道 |
| 全月面覆盖轨道 | Halo轨道, Lissajous轨道, 月球门户 |
| LiAISON自主导航 | 平动点, Halo轨道 |

## Content Sources

- **Primary:** Li Xiangyu et al. (2021) "三体轨道动力学研究进展", 力学学报
- **Supporting:** Standard astrodynamics references cited in the paper
- **Existing glossary entries:** For cross-reference links

## Sidebar Placement

### Chinese sidebar.ts

In **动力学与数学基础** group, append after existing entries:
```
'/glossary/dynamics/zero-velocity-surface',
'/glossary/dynamics/hill-three-body',
'/glossary/dynamics/bicircular-four-body',
'/glossary/dynamics/quasi-bicircular-four-body',
'/glossary/dynamics/strobe-map',
'/glossary/dynamics/stability-set',
'/glossary/dynamics/backward-stability-set',
'/glossary/dynamics/capture-set',
```

In **任务轨道** group, append after existing entries:
```
'/glossary/orbits/cycler-trajectory',
'/glossary/orbits/multi-revolution-halo',
'/glossary/orbits/ballistic-capture',
'/glossary/orbits/low-energy-transfer',
'/glossary/orbits/full-lunar-coverage',
```

In **导航技术与系统** group, append after existing entries:
```
'/glossary/navigation/liason-navigation',
```

### English sidebar-en.ts

Mirror structure with `/en/glossary/...` paths in corresponding groups.

## Implementation Order

1. Create all 14 Chinese glossary entry files
2. Create all 14 English glossary entry files
3. Update `sidebar.ts` with new Chinese entries
4. Update `sidebar-en.ts` with new English entries
5. Run `npm run gen-sidebar` to verify no errors
6. Run `npm run docs:build` to verify build passes

## Verification

- [ ] All 28 files created with correct frontmatter
- [ ] Permalink paths match sidebar entries
- [ ] Cross-references point to existing entries
- [ ] `npm run gen-sidebar` succeeds
- [ ] `npm run docs:build` succeeds
- [ ] New entries appear in sidebar navigation
