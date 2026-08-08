---
title: 状态转移矩阵（A 6x6 matrix describing how perturbations propagate from initial to terminal state in a dynamical system. Its four sub-blocks represent partial derivative mappings for position-to-position (A), velocity-to-position (B), position-to-velocity (C), and velocity-to-velocity (D). In differential correction, the B and D sub-blocks provide sensitivities of terminal position and velocity to initial velocity, serving as the core mathematical tool for correction computation. The STM also yields the monodromy matrix for invariant manifold computation.）
description: 描述动力系统从初始状态到终端状态偏差传递关系的6x6矩阵。其四个子块分别对应位置对位置（A）、速度对位置（B）、位置对速度（C）、速度对速度（D）的偏导数映射。在微分修正算法中，STM的B和D子块直接给出终端位置和速度对初始速度的灵敏度，是计算修正量的核心数学工具。STM也用于计算周期轨道的单值矩阵，进而求解不变流形。
keywords: 状态转移矩阵, A 6x6 matrix describing how perturbations propagate from initial to terminal state in a dynamical system. Its four sub-blocks represent partial derivative mappings for position-to-position (A), velocity-to-position (B), position-to-velocity (C), and velocity-to-velocity (D). In differential correction, the B and D sub-blocks provide sensitivities of terminal position and velocity to initial velocity, serving as the core mathematical tool for correction computation. The STM also yields the monodromy matrix for invariant manifold computation., STM, fundamentals
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
permalink: /glossary/fundamentals/stm/
---

# 状态转移矩阵（A 6x6 matrix describing how perturbations propagate from initial to terminal state in a dynamical system. Its four sub-blocks represent partial derivative mappings for position-to-position (A), velocity-to-position (B), position-to-velocity (C), and velocity-to-velocity (D). In differential correction, the B and D sub-blocks provide sensitivities of terminal position and velocity to initial velocity, serving as the core mathematical tool for correction computation. The STM also yields the monodromy matrix for invariant manifold computation.）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

描述动力系统从初始状态到终端状态偏差传递关系的6x6矩阵。其四个子块分别对应位置对位置（A）、速度对位置（B）、位置对速度（C）、速度对速度（D）的偏导数映射。在微分修正算法中，STM的B和D子块直接给出终端位置和速度对初始速度的灵敏度，是计算修正量的核心数学工具。STM也用于计算周期轨道的单值矩阵，进而求解不变流形。

## 应用价值

空间交通管理协调空间资产运行，是维护空间环境安全和可持续性的基础。

## 相关概念

- 变结构滑模控制（Variable Structure Sliding Mode Control）
- [庞特里亚金最小值原理（Pontryagin Minimum Principle）](/glossary/fundamentals/pmp/)
- 误差函数（Error Function）

## 参考文献

- 彭坤 等 - 2016 - 基于不变流形的地月L2点Halo轨道转移轨道设计。
