# Background Section Design — 背景知识栏目设计

## Overview

新建 `background/` 栏目，作为技术词典的平行补充，收录推动地月空间研究的基础理论、数学工具、跨学科概念。定位为"有深度的参考资料"，既可作为扩展阅读，也可作为工具性参考。

## Column Name & URL

- **目录名**：`background/`（背景知识）
- **中文**：`/background/`
- **英文**：`/en/background/`

与主站技术词典（`/glossary/`）平行独立，互相链接形成知识网络。

## Content Scope

### 第一阶段词条范围（四类）

1. **数学工具**
   - 打靶法（Shooting Method）
   - 弧长延续法（Arc-length Continuation）
   - 微分修正（Differential Correction）
   - 伪谱法（Pseudospectral Methods）
   - 辛积分器（Symplectic Integrator）

2. **天体力学基础**
   - 摄动理论（Perturbation Theory）
   - 潮汐演化（Tidal Evolution）
   - 雅可比常数（Jacobi Constant）
   - 希尔三体问题（Hill Three-Body Problem）

3. **控制与优化**
   - 最优控制理论（Optimal Control）
   - 线性二次调节器（LQR）
   - 模型预测控制（MPC）

4. **数值方法**
   - 多体问题数值积分器
   - 蒙特卡洛方法（Monte Carlo）
   - 参数敏感性分析

### 边界原则

- 有参考文献支撑的深度内容，不做科普式概述
- 与地月空间研究有直接或间接关联
- 不追求大而全，按需积累

## Content Format

与现有技术词典词条格式一致，使用 frontmatter 元数据和标准章节结构。

### frontmatter 必填字段

```yaml
---
title: 打靶法 (Shooting Method)
description: 简要描述词条内容
keywords: 关键词1, 关键词2
author: 天疆说
date: 2026-04-26
lastUpdated: 2026-04-26
permalink: /background/math/shooting-method/
---
```

### 正文章节结构

```
## 定义
## 原理
## 在地月空间中的应用
## 相关概念
## 参考文献
```

## Sidebar Structure

在 `sidebar.ts` 中新增独立分组，与 `glossarySidebar` 平行：

```ts
const backgroundSidebar = [
  wayfindingZhGroup,
  {
    text: '背景知识（基础理论 · 数学工具）',
    collapsible: false,
    children: [
      '/background/',
      {
        text: '数学工具',
        collapsible: true,
        children: [
          '/background/math/shooting-method',
          '/background/math/continuation',
          '/background/math/differential-correction',
          '/background/math/pseudospectral',
          '/background/math/symplectic-integrator',
        ],
      },
      {
        text: '天体力学基础',
        collapsible: true,
        children: [
          '/background/mechanics/perturbation',
          '/background/mechanics/tidal-evolution',
          '/background/mechanics/jacobi-constant',
          '/background/mechanics/hill-three-body',
        ],
      },
      {
        text: '控制与优化',
        collapsible: true,
        children: [
          '/background/control/optimal-control',
          '/background/control/lqr',
          '/background/control/mpc',
        ],
      },
      {
        text: '数值方法',
        collapsible: true,
        children: [
          '/background/numerical/multibody-integrator',
          '/background/numerical/monte-carlo',
          '/background/numerical/sensitivity-analysis',
        ],
      },
    ],
  },
]
```

英文侧边栏结构同理，在 `sidebar-en.ts` 中注册。

## Content Source (混合模式)

- **核心词条**：团队自写，确保深度与质量
- **延伸词条**：精选转载外部优质内容（NASA 技术报告、开源文档等），附来源链接
- **协作机制**：随项目推进可接受社区投稿

## Cross-Linking

主站技术词典与背景知识栏目互相链接，形成知识网络：

- 主站 DRO 词条 → 可在"相关概念"中链接到 `/background/math/shooting-method`
- 背景知识打靶法 → 可在"在地月空间中的应用"中链接到 `/glossary/orbits/dro` 作为应用示例

## File Structure

```
web/
  background/
    math/
      shooting-method.md
      continuation.md
      differential-correction.md
      pseudospectral.md
      symplectic-integrator.md
    mechanics/
      perturbation.md
      tidal-evolution.md
      jacobi-constant.md
      hill-three-body.md
    control/
      optimal-control.md
      lqr.md
      mpc.md
    numerical/
      multibody-integrator.md
      monte-carlo.md
      sensitivity-analysis.md
en/
  background/
    (mirror of above)
```

## Implementation Tasks

1. 创建 `web/background/` 目录结构
2. 创建中文首页 `web/background/index.md`
3. 创建英文首页 `web/en/background/index.md`
4. 在 `sidebar.ts` 中注册 `backgroundSidebar`
5. 在 `sidebar-en.ts` 中注册英文侧边栏
6. 撰写第一批词条内容（首批 5 个核心词条：打靶法、弧长延续法、摄动理论、最优控制、辛积分器）
7. 建立中英双语对应文件

## Notes

- 本设计为第一阶段方案，内容边界可随项目推进灵活扩展
- 词条优先自己撰写，转载内容需注明来源并确保授权
