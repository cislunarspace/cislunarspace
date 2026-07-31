---
title: 误差动力学（Error Dynamics）
description: 描述航天器实际飞行轨迹与名义轨道之间偏差的演化方程。通过将实际轨迹 X_A 和名义 Halo 轨道 X_H 的差 delta_X 代入 CR3BP 动力学方程，并在名义轨道处作一阶 Taylor 展开得到。一阶近似后，误差动力学方程为线性周期系统：dot{delta_X} = A(t) delta_X + BU，其中 
keywords: 误差动力学, Error Dynamics, 轨道动力学, 三体问题, 平动点
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 误差动力学（Error Dynamics）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 误差动力学详解 | 术语定义
  description: 描述航天器实际飞行轨迹与名义轨道之间偏差的演化方程。通过将实际轨迹 X_A 和名义 Halo 轨道 X_H 的差 delta_X 代入 CR3BP 动力学方程，并在名义轨道处作一阶 Taylor 展开得到。一阶近似后，误差动力学方程为线性周期系统：dot{delta_X} = A(t) delta_X + BU，其中 
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 误差动力学详解 | 术语定义
  description: 描述航天器实际飞行轨迹与名义轨道之间偏差的演化方程。通过将实际轨迹 X_A 和名义 Halo 轨道 X_H 的差 delta_X 代入 CR3BP 动力学方程，并在名义轨道处作一阶 Taylor 展开得到。一阶近似后，误差动力学方程为线性周期系统：dot{delta_X} = A(t) delta_X + BU，其中 
  image: /logo.png
permalink: /glossary/dynamics/error-dynamics/
---

# 误差动力学（Error Dynamics）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

描述航天器实际飞行轨迹与名义轨道之间偏差的演化方程。通过将实际轨迹 X_A 和名义 Halo 轨道 X_H 的差 delta_X 代入 CR3BP 动力学方程，并在名义轨道处作一阶 Taylor 展开得到。一阶近似后，误差动力学方程为线性周期系统：dot{delta_X} = A(t) delta_X + BU，其中 A(t) = df/dX|_{X_H(t)} 是沿名义轨道求偏导的周期矩阵。这是论文进行控制器设计的出发点。

## 应用价值

在轨道设计阶段，可利用该轨道类型构建候选轨道池，为星座部署和任务轨道选择提供参考。在轨运行时，该轨道特性可用于轨道维持策略设计，降低推进剂消耗。在轨道转移规划中，其稳定流形结构可指导低能量转移走廊的搜索。

## 相关概念

- [地心天体参考框架（Geocentric Celestial Reference Frame）](/glossary/dynamics/geocentric-celestial-reference-frame/)
- [运行轨道库（Operational Orbit Library）](/glossary/orbits/operational-orbit-library/)
- [月球自由返回轨道（Lunar Free-Return Orbit, LFO）](/glossary/orbits/lunar-free-return-orbit/)
- [临界轨道（Critical Orbit）](/glossary/orbits/critical-orbit/)

## 参考文献

- 徐明和徐世杰 - 2008 - Halo轨道维持的线性周期控制策略
