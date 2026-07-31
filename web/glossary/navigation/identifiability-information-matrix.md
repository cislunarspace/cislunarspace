---
title: 可辨识信息矩阵（Identifiability Information Matrix）
description: 在导航状态估计中，由观测函数对初值的雅可比矩阵构建的矩阵。其定义为所有采样时刻雅可比矩阵转置与自身的累加和。若该矩阵满秩，则历元状态局部可辨识；其奇异值分解可揭示各状态分量的可辨识顺序，条件数则反映整体可辨识能力的高低。
keywords: Identifiability Information Matrix, 可辨识信息矩阵, 定轨, 导航, 滤波
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 可辨识信息矩阵（Identifiability Information Matrix）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 可辨识信息矩阵详解 | 术语定义
  description: 在导航状态估计中，由观测函数对初值的雅可比矩阵构建的矩阵。其定义为所有采样时刻雅可比矩阵转置与自身的累加和。若该矩阵满秩，则历元状态局部可辨识；其奇异值分解可揭示各状态分量的可辨识顺序，条件数则反映整体可辨识能力的高低。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 可辨识信息矩阵详解 | 术语定义
  description: 在导航状态估计中，由观测函数对初值的雅可比矩阵构建的矩阵。其定义为所有采样时刻雅可比矩阵转置与自身的累加和。若该矩阵满秩，则历元状态局部可辨识；其奇异值分解可揭示各状态分量的可辨识顺序，条件数则反映整体可辨识能力的高低。
  image: /logo.png
permalink: /glossary/navigation/identifiability-information-matrix/
---

# 可辨识信息矩阵（Identifiability Information Matrix）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

在导航状态估计中，由观测函数对初值的雅可比矩阵构建的矩阵。其定义为所有采样时刻雅可比矩阵转置与自身的累加和。若该矩阵满秩，则历元状态局部可辨识；其奇异值分解可揭示各状态分量的可辨识顺序，条件数则反映整体可辨识能力的高低。

## 应用价值

在航天器导航与定轨中，该概念对理解航天器在地月空间中的运动特性和任务设计具有重要作用。

## 相关概念

- [远距离交会段（Far-Range Guidance Section）](/glossary/navigation/far-range-guidance-section/)
- [叉乘矩阵（Cross-Product Matrix / Skew-Symmetric Matrix）](/glossary/fundamentals/cross-product-matrix-skew-symmetric-matrix/)
- [组合协方差矩阵（Combined Covariance Matrix）](/glossary/fundamentals/combined-covariance-matrix/)
- [力模型简化（Force Model Simplification）](/glossary/navigation/force-model-simplification/)

## 参考文献

- 钱霙婧等, 2013, 宇航学报