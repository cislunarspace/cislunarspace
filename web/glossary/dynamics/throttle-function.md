---
title: 油门函数（Throttle Function）
description: 多模式推进系统中表征推进剂质量流率随时间变化的函数。在本文的双模式电推进系统中，油门函数delta_P1和delta_P2取值为0或1，决定推力器的开关状态。其最优解在间接优化框架下由庞特里亚金最小值原理导出，呈现开关型（bang-bang）剖面。
keywords: 油门函数, Throttle Function, 轨道力学, 三体问题, 非线性动力学, 轨道稳定性
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 油门函数（Throttle Function）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 油门函数详解 | 术语定义
  description: 多模式推进系统中表征推进剂质量流率随时间变化的函数。在本文的双模式电推进系统中，油门函数delta_P1和delta_P2取值为0或1，决定推力器的开关状态。其最优解在间接优化框架下由庞特里亚金最小值原理导出，呈现开关型（bang-bang）剖面。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 油门函数详解 | 术语定义
  description: 多模式推进系统中表征推进剂质量流率随时间变化的函数。在本文的双模式电推进系统中，油门函数delta_P1和delta_P2取值为0或1，决定推力器的开关状态。其最优解在间接优化框架下由庞特里亚金最小值原理导出，呈现开关型（bang-bang）剖面。
  image: /logo.png
permalink: /glossary/dynamics/throttle-function/
---

# 油门函数（Throttle Function）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

多模式推进系统中表征推进剂质量流率随时间变化的函数。在本文的双模式电推进系统中，油门函数delta_P1和delta_P2取值为0或1，决定推力器的开关状态。其最优解在间接优化框架下由庞特里亚金最小值原理导出，呈现开关型（bang-bang）剖面。

## 应用价值

油门函数描述推力大小随时问的变化规律。在低推力轨道优化中，油门函数是控制变量的核心，决定了推力何时施加以及施加多大，是影响转移性能和燃料消耗的关键因素。

## 相关概念

- [雅可比常数（Jacobi Constant, JC）](/glossary/dynamics/jacobi-integral/)
- [希尔区域（Hill Region）](/glossary/dynamics/hill-region-and-hill-problem/)
- [庞加莱映射（Poincaré Map）](/glossary/dynamics/poincare-section/)
- 稳定性（Stability）

## 参考文献

- Zhang Z et al. 2026, Space Sci. Technol. 6:0441
