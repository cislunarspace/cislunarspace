---
title: 混合轨道模型（Hybrid Orbit Model）
description: 将二体解析模型与高精度数值外推模型结合使用的轨道计算模型。在三脉冲机动轨道初步设计中，先用二体模型给出解析初值，再用高精度模型进行修正迭代，兼顾了计算速度和求解精度。纯二体模型因转移时间长而不易快速收敛到高精度解附近，混合模型有效解决了这一问题。
keywords: 混合轨道模型, Hybrid Orbit Model, 轨道动力学, 轨道优化, 非线性动力学
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 混合轨道模型（Hybrid Orbit Model）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 混合轨道模型详解 | 术语定义
  description: 将二体解析模型与高精度数值外推模型结合使用的轨道计算模型。在三脉冲机动轨道初步设计中，先用二体模型给出解析初值，再用高精度模型进行修正迭代，兼顾了计算速度和求解精度。纯二体模型因转移时间长而不易快速收敛到高精度解附近，混合模型有效解决了这一问题。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 混合轨道模型详解 | 术语定义
  description: 将二体解析模型与高精度数值外推模型结合使用的轨道计算模型。在三脉冲机动轨道初步设计中，先用二体模型给出解析初值，再用高精度模型进行修正迭代，兼顾了计算速度和求解精度。纯二体模型因转移时间长而不易快速收敛到高精度解附近，混合模型有效解决了这一问题。
  image: /logo.png
permalink: /glossary/dynamics/hybrid-orbit-model/
---

# 混合轨道模型（Hybrid Orbit Model）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

将二体解析模型与高精度数值外推模型结合使用的轨道计算模型。在三脉冲机动轨道初步设计中，先用二体模型给出解析初值，再用高精度模型进行修正迭代，兼顾了计算速度和求解精度。纯二体模型因转移时间长而不易快速收敛到高精度解附近，混合模型有效解决了这一问题。

## 应用价值

在设计地月转移方案时，利用该轨道特性可降低任务总速度增量需求。脉冲机动是轨道修正和转移的基本操作方式。

## 相关概念

- [希尔球半径（Hill Sphere Radius）](/glossary/dynamics/hill-sphere-radius/)
- [伪谱凸优化（Pseudospectral Convex Optimization）](/glossary/dynamics/pseudospectral-convex-optimization/)
- [庞加莱映射表示（Poincaré Map Representation）](/glossary/dynamics/poincar-map-representation/)
- [最小范数靶点法（Minimum Norm Targeting）](/glossary/dynamics/minimum-norm-targeting/)

## 参考文献

- 陆林 等 - 2021 - 载人月球极地探测地月转移轨道设计
