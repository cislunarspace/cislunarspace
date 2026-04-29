---
title: 摄动运动（Perturbation Motion）
description: 详细解析摄动运动的定义、分类（长期摄动与周期摄动）及与无摄运动的关系
keywords: 摄动运动, Perturbation Motion, 长期摄动, 周期摄动, 摄动力, 无摄运动
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 摄动运动（Perturbation Motion）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 摄动运动详解 | 术语定义
  description: 详细解析摄动运动的定义及分类
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 摄动运动详解 | 术语定义
  description: 详细解析摄动运动的定义及分类
  image: /logo.png
permalink: /glossary/fundamentals/perturbation-motion/
---

# 摄动运动（Perturbation Motion）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

在摄动力作用下，空天飞行器的轨道偏离理想开普勒轨道，将摄动力引起的卫星运动的微小附加运动称为摄动运动。与之相对应，二体运动称为无摄运动。摄动力包括地球非球形引力、月球和太阳引力、大气阻力、太阳辐射光压等，相对于地球质心引力而言均为小量。

## 核心要素

### 摄动的基本形态

| 摄动类型 | 说明 | 特征 |
|:---|:---|:---|
| 长期摄动 | 引起轨道根数单调递增或递减 | 积累效应，不可恢复 |
| 长周期摄动 | 周期大于轨道周期的周期摄动 | 周期较长，有时可视作长期摄动 |
| 短周期摄动 | 周期小于轨道周期的周期摄动 | 一个轨道周期后回到零点，不积累 |

### 摄动分析方法分类

| 类别 | 方法 | 特点 |
|:---|:---|:---|
| 特殊摄动法 | 科威尔法、恩克法、参数变分法 | 数值积分，适合短时精密预报 |
| 一般摄动法 | 级数展开法、平均根数法、半解析法 | 解析解或半解析解，揭示物理机制 |

### 典型摄动力量级（低轨）

| 摄动力 | 量级 | 性质 |
|:---|:---|:---|
| $J_2$（地球扁率） | $10^{-3}$ | 保守力 |
| 大气阻力 | $10^{-5}$ | 耗散力 |
| 日月摄动 | $10^{-5}$～$10^{-7}$ | 保守力 |
| 太阳光压 | $10^{-8}$ | 耗散力 |

### 与无摄运动的关系

无摄运动（二体问题）中，轨道大小、形状和方位均保持不变，遵循开普勒定律。实际地球形状和质量分布复杂，导致引力偏离均质圆球假设；此外还受日月引力、大气阻力、太阳辐射光压等影响。这些摄动力使轨道要素随时间发生变化，运动远比二体问题复杂。

## 应用价值

摄动运动是轨道力学的核心研究内容。通过建立摄动运动方程，可以分析各类摄动力对轨道的影响规律，为轨道预报、轨道控制和任务设计提供理论基础。摄动分析方法（特殊摄动法和一般摄动法）是航天器轨道确定和预报的基本工具。

## 相关概念

- [参数变分法（Variation of Parameters）](/glossary/fundamentals/variation-of-parameters/)
- [高斯型摄动方程（Gaussian Perturbation Equations）](/glossary/fundamentals/gaussian-perturbation-equations/)
- [拉格朗日型摄动方程（Lagrangian Perturbation Equations）](/glossary/fundamentals/lagrangian-perturbation-equations/)
- [地球扁率摄动（Earth Oblateness Perturbation）](/glossary/fundamentals/earth-oblateness-perturbation/)
- [轨道根数（Orbital Elements）](/glossary/fundamentals/orbital-elements/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 刘林. 航天器轨道理论[M]. 国防工业出版社.
