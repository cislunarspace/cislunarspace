---
title: 逐圈控制时域（Revolution-Spaced Control Horizon）
description: 模型预测控制的控制时域中，各次机动之间恰好相隔一个完整轨道周期的设计。这种排列方式兼顾了两方面需求：多次机动提供足够的控制自由度来跟踪全部六个状态分量，而每圈最多一次机动满足实际任务操作约束。在近直线晕轨道上，8次逐圈机动的时域约为50天。
keywords: 逐圈控制时域, Revolution-Spaced Control Horizon, 轨道动力学, 三体问题, 平动点
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 逐圈控制时域（Revolution-Spaced Control Horizon）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 逐圈控制时域详解 | 术语定义
  description: 模型预测控制的控制时域中，各次机动之间恰好相隔一个完整轨道周期的设计。这种排列方式兼顾了两方面需求：多次机动提供足够的控制自由度来跟踪全部六个状态分量，而每圈最多一次机动满足实际任务操作约束。在近直线晕轨道上，8次逐圈机动的时域约为50天。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 逐圈控制时域详解 | 术语定义
  description: 模型预测控制的控制时域中，各次机动之间恰好相隔一个完整轨道周期的设计。这种排列方式兼顾了两方面需求：多次机动提供足够的控制自由度来跟踪全部六个状态分量，而每圈最多一次机动满足实际任务操作约束。在近直线晕轨道上，8次逐圈机动的时域约为50天。
  image: /logo.png
permalink: /glossary/dynamics/revolution-spaced-control-horizon/
---

# 逐圈控制时域（Revolution-Spaced Control Horizon）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

模型预测控制的控制时域中，各次机动之间恰好相隔一个完整轨道周期的设计。这种排列方式兼顾了两方面需求：多次机动提供足够的控制自由度来跟踪全部六个状态分量，而每圈最多一次机动满足实际任务操作约束。在近直线晕轨道上，8次逐圈机动的时域约为50天。

## 应用价值

在轨道设计阶段，可利用该轨道类型构建候选轨道池，为星座部署和任务轨道选择提供参考。在轨运行时，该轨道特性可用于轨道维持策略设计，降低推进剂消耗。在轨道转移规划中，其稳定流形结构可指导低能量转移走廊的搜索。

## 相关概念

- [运行轨道库（Operational Orbit Library）](/glossary/orbits/operational-orbit-library/)
- [月球自由返回轨道（Lunar Free-Return Orbit, LFO）](/glossary/orbits/lunar-free-return-orbit/)
- [临界轨道（Critical Orbit）](/glossary/orbits/critical-orbit/)
- [内部频率（Inner Frequencies）](/glossary/dynamics/inner-frequencies/)

## 参考文献

- Shimane 等 - 2025 - Revolution-spaced output-feedback model predictive control for station keeping on near-rectilinear halo orbits
