---
title: 状态转移矩阵（A 6x6 matrix describing how perturbations propagate from initial to terminal state in a dynamical system. Its four sub-blocks represent partial derivative mappings for position-to-position (A), velocity-to-position (B), position-to-velocity (C), and velocity-to-velocity (D). In differential correction, the B and D sub-blocks provide sensitivities of terminal position and velocity to initial velocity, serving as the core mathematical tool for correction computation. The STM also yields the monodromy matrix for invariant manifold computation.）
description: 描述动力系统从初始状态到终端状态偏差传递关系的6x6矩阵。其四个子块分别对应位置对位置（A）、速度对位置（B）、位置对速度（C）、速度对速度（D）的偏导数映射。在微分修正算法中，STM的B和D子块直接给出终端位置和速度对初始速度的灵敏度，是计算修正量的核心数学工具。STM也用于计算周期轨道的单值矩阵，进而求解不变流形。
keywords: 状态转移矩阵, A 6x6 matrix describing how perturbations propagate from initial to terminal state in a dynamical system. Its four sub-blocks represent partial derivative mappings for position-to-position (A), velocity-to-position (B), position-to-velocity (C), and velocity-to-velocity (D). In differential correction, the B and D sub-blocks provide sensitivities of terminal position and velocity to initial velocity, serving as the core mathematical tool for correction computation. The STM also yields the monodromy matrix for invariant manifold computation., STM, 轨道力学, 数值方法
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 状态转移矩阵（A 6x6 matrix describing how perturbations propagate from initial to terminal state in a dynamical system. Its four sub-blocks represent partial derivative mappings for position-to-position (A), velocity-to-position (B), position-to-velocity (C), and velocity-to-velocity (D). In differential correction, the B and D sub-blocks provide sensitivities of terminal position and velocity to initial velocity, serving as the core mathematical tool for correction computation. The STM also yields the monodromy matrix for invariant manifold computation.）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 状态转移矩阵详解 | 术语定义
  description: 描述动力系统从初始状态到终端状态偏差传递关系的6x6矩阵。其四个子块分别对应位置对位置（A）、速度对位置（B）、位置对速度（C）、速度对速度（D）的偏导数映射。在微分修正算法中，STM的B和D子块直接给出终端位置和速度对初始速度的灵敏度，是计算修正量的核心数学工具。STM也用于计算周期轨道的单值矩阵，进而求解不变流形。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 状态转移矩阵详解 | 术语定义
  description: 描述动力系统从初始状态到终端状态偏差传递关系的6x6矩阵。其四个子块分别对应位置对位置（A）、速度对位置（B）、位置对速度（C）、速度对速度（D）的偏导数映射。在微分修正算法中，STM的B和D子块直接给出终端位置和速度对初始速度的灵敏度，是计算修正量的核心数学工具。STM也用于计算周期轨道的单值矩阵，进而求解不变流形。
  image: /logo.png
permalink: /glossary/fundamentals/a-6x6-matrix-describing-how-perturbations-propagate-from-initial-to-terminal-state-in-a-dynamical-sy/
---

# 状态转移矩阵（A 6x6 matrix describing how perturbations propagate from initial to terminal state in a dynamical system. Its four sub-blocks represent partial derivative mappings for position-to-position (A), velocity-to-position (B), position-to-velocity (C), and velocity-to-velocity (D). In differential correction, the B and D sub-blocks provide sensitivities of terminal position and velocity to initial velocity, serving as the core mathematical tool for correction computation. The STM also yields the monodromy matrix for invariant manifold computation.）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

描述动力系统从初始状态到终端状态偏差传递关系的6x6矩阵。其四个子块分别对应位置对位置（A）、速度对位置（B）、位置对速度（C）、速度对速度（D）的偏导数映射。在微分修正算法中，STM的B和D子块直接给出终端位置和速度对初始速度的灵敏度，是计算修正量的核心数学工具。STM也用于计算周期轨道的单值矩阵，进而求解不变流形。

## 应用价值

在轨道设计和转移轨道优化中，该方法用于确定最优转移时机和轨道形状，以最小化燃料消耗或飞行时间。通过数值仿真和迭代优化，可获得满足任务约束的可行轨道方案。

## 相关概念

- [同步旋转坐标系（Synodic Rotating Frame）](/glossary/fundamentals/synodic-rotating-frame/)
- [网格搜索（Grid Search）](/glossary/fundamentals/grid-search/)
- [Gauss求积公式（Gauss Quadrature Formula）](/glossary/fundamentals/gauss-quadrature-formula/)
- [星座构型向量（Constellation Pattern Vector）](/glossary/fundamentals/constellation-pattern-vector/)
## 参考文献

- 彭坤 等 - 2016 - 基于不变流形的地月L2点Halo轨道转移轨道设计
