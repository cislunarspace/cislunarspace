---
title: 完全能观性（Complete Observability）
description: 从系统的输出能唯一确定初始状态的性质。离散线性定常系统的完全能观充要条件是能观性矩阵 [C^T | A^T C^T | ... | (A^{n-1})^T C^T] 满秩。论文中当观测矩阵 C=I_{6x6} 时系统状态完全可测；当 C=[I_{3x3}, 0_{3x3}] 时仅位置可测，速度需通过滤波算法估计。论文仅
keywords: 完全能观性, Complete Observability, 航天器, 基础, 坐标
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 完全能观性（Complete Observability）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 完全能观性详解 | 术语定义
  description: 从系统的输出能唯一确定初始状态的性质。离散线性定常系统的完全能观充要条件是能观性矩阵 [C^T | A^T C^T | ... | (A^{n-1})^T C^T] 满秩。论文中当观测矩阵 C=I_{6x6} 时系统状态完全可测；当 C=[I_{3x3}, 0_{3x3}] 时仅位置可测，速度需通过滤波算法估计。论文仅
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 完全能观性详解 | 术语定义
  description: 从系统的输出能唯一确定初始状态的性质。离散线性定常系统的完全能观充要条件是能观性矩阵 [C^T | A^T C^T | ... | (A^{n-1})^T C^T] 满秩。论文中当观测矩阵 C=I_{6x6} 时系统状态完全可测；当 C=[I_{3x3}, 0_{3x3}] 时仅位置可测，速度需通过滤波算法估计。论文仅
  image: /logo.png
permalink: /glossary/fundamentals/complete-observability/
---

# 完全能观性（Complete Observability）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

从系统的输出能唯一确定初始状态的性质。离散线性定常系统的完全能观充要条件是能观性矩阵 [C^T | A^T C^T | ... | (A^{n-1})^T C^T] 满秩。论文中当观测矩阵 C=I_{6x6} 时系统状态完全可测；当 C=[I_{3x3}, 0_{3x3}] 时仅位置可测，速度需通过滤波算法估计。论文仅讨论了全状态反馈情况。

## 应用价值

该导航方法在地月空间任务中的定位与轨道确定发挥关键作用。持续监视能力是空间态势感知的核心，决定了对空间目标的跟踪保持水平。

## 相关概念

- [星载软件（On-Board Software）](/glossary/fundamentals/on-board-software/)
- [质心坐标时（Barycentric Coordinate Time, TCB）](/glossary/fundamentals/barycentric-coordinate-time-tcb/)
- [地平坐标系（Horizontal Coordinate System）](/glossary/fundamentals/horizontal-coordinate-system/)

## 参考文献

- 徐明和徐世杰 - 2008 - Halo轨道维持的线性周期控制策略
