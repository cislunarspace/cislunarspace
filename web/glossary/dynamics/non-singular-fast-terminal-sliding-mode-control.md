---
title: 非奇异快速终端滑模控制（Non-Singular Fast Terminal Sliding Mode Control, NFTSM）
description: 一种改进的终端滑模控制方法，在滑模面中引入指数函数和正幂次速度误差项。指数项使远离平衡点时收敛更快，正幂次项避免了传统终端滑模在求导过程中出现的奇异问题。结合终端吸引子趋近律，可在有限时间内消除抖振。
keywords: 非奇异快速终端滑模控制, Non-Singular Fast Terminal Sliding Mode Control, NFTSM, NFTSM, 轨道动力学, 三体问题, 平动点
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 非奇异快速终端滑模控制（Non-Singular Fast Terminal Sliding Mode Control, NFTSM）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 非奇异快速终端滑模控制详解 | 术语定义
  description: 一种改进的终端滑模控制方法，在滑模面中引入指数函数和正幂次速度误差项。指数项使远离平衡点时收敛更快，正幂次项避免了传统终端滑模在求导过程中出现的奇异问题。结合终端吸引子趋近律，可在有限时间内消除抖振。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 非奇异快速终端滑模控制详解 | 术语定义
  description: 一种改进的终端滑模控制方法，在滑模面中引入指数函数和正幂次速度误差项。指数项使远离平衡点时收敛更快，正幂次项避免了传统终端滑模在求导过程中出现的奇异问题。结合终端吸引子趋近律，可在有限时间内消除抖振。
  image: /logo.png
permalink: /glossary/dynamics/non-singular-fast-terminal-sliding-mode-control/
---

# 非奇异快速终端滑模控制（Non-Singular Fast Terminal Sliding Mode Control, NFTSM）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种改进的终端滑模控制方法，在滑模面中引入指数函数和正幂次速度误差项。指数项使远离平衡点时收敛更快，正幂次项避免了传统终端滑模在求导过程中出现的奇异问题。结合终端吸引子趋近律，可在有限时间内消除抖振。

## 应用价值

在航天器控制系统设计中，该方法可用于设计姿态控制律或制导律，实现对航天器姿态和轨道的精确控制。在实际任务中，基于该方法的控制器能够提高姿态稳定性和轨迹跟踪精度。

## 相关概念

- [月球自由返回轨道（Lunar Free-Return Orbit, LFO）](/glossary/orbits/lunar-free-return-orbit/)
- [约束转化非线性规划（Constraint Conversion to Nonlinear Programming）](/glossary/fundamentals/constraint-conversion-to-nonlinear-programming/)
- [全局搜索（Global Search）](/glossary/fundamentals/global-search/)
- [姿态确定与控制系统（Attitude Determination and Control System）](/glossary/fundamentals/attitude-determination-and-control-system/)

## 参考文献

- Zhao et al. 2022, Advances in Space Research
