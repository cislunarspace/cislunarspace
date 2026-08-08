---
title: Hill 模型（Hill Model）
description: 限制性三体问题的一种近似模型，适用于航天器运动范围远小于两主天体间距的情形。在 Hill 模型下，三体 Lambert 问题可通过修正初末位置矢量的两层迭代方法求解。Sukhanov 和 Prado 基于此模型提出了具有较好收敛性的 Lambert 求解算法。
keywords: Hill 模型, Hill Model, 轨道动力学, 控制理论, 最优控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Hill 模型（Hill Model）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: Hill 模型详解 | 术语定义
  description: 限制性三体问题的一种近似模型，适用于航天器运动范围远小于两主天体间距的情形。在 Hill 模型下，三体 Lambert 问题可通过修正初末位置矢量的两层迭代方法求解。Sukhanov 和 Prado 基于此模型提出了具有较好收敛性的 Lambert 求解算法。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Hill 模型详解 | 术语定义
  description: 限制性三体问题的一种近似模型，适用于航天器运动范围远小于两主天体间距的情形。在 Hill 模型下，三体 Lambert 问题可通过修正初末位置矢量的两层迭代方法求解。Sukhanov 和 Prado 基于此模型提出了具有较好收敛性的 Lambert 求解算法。
  image: /logo.png
permalink: /glossary/dynamics/hill-model/
---

# Hill 模型（Hill Model）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

限制性三体问题的一种近似模型，适用于航天器运动范围远小于两主天体间距的情形。在 Hill 模型下，三体 Lambert 问题可通过修正初末位置矢量的两层迭代方法求解。Sukhanov 和 Prado 基于此模型提出了具有较好收敛性的 Lambert 求解算法。

## 应用价值

在轨道动力学数值仿真中，该方法用于提高计算精度和效率。通过合理的离散化策略，可以在保证数值稳定性的同时大幅减少计算量。

## 相关概念

- [惯性坐标系固定编队（Formation Fixed Relative to Inertial Frame）](/glossary/dynamics/formation-fixed-relative-to-inertial-frame/)
- [受摄Lambert问题（Perturbational Lambert Problem）](/glossary/dynamics/perturbational-lambert-problem/)
- 探测器定位（Probe Targeting）
- 遗传算法（Genetic Algorithm）

## 参考文献

- 基于三体Lambert算法的平动点交会轨道设计
