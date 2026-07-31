---
title: 机动误差建模（Maneuver Error Modeling）
description: 在轨道保持仿真中，模拟推力执行偏差对实际速度增量影响的方法。典型的建模方式是将计算所得速度增量乘以一个误差因子，例如乘以 1.01 表示 1% 的偏热机动（实际推力略大于标称值）。ARTEMIS 任务的实测机动误差约为 1%，与标定后的推力器性能一致。机动误差在每次计算机动后施加，与导航误差叠加后共同传播至下一个机动点
keywords: 定位, 导航, 轨道确定, 星座
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 机动误差建模（Maneuver Error Modeling）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 机动误差建模详解 | 术语定义
  description: 在轨道保持仿真中，模拟推力执行偏差对实际速度增量影响的方法。典型的建模方式是将计算所得速度增量乘以一个误差因子，例如乘以 1.01 表示 1% 的偏热机动（实际推力略大于标称值）。ARTEMIS 任务的实测机动误差约为 1%，与标定后的推力器性能一致。机动误差在每次计算机动后施加，与导航误差叠加后共同传播至下一个机动点
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 机动误差建模详解 | 术语定义
  description: 在轨道保持仿真中，模拟推力执行偏差对实际速度增量影响的方法。典型的建模方式是将计算所得速度增量乘以一个误差因子，例如乘以 1.01 表示 1% 的偏热机动（实际推力略大于标称值）。ARTEMIS 任务的实测机动误差约为 1%，与标定后的推力器性能一致。机动误差在每次计算机动后施加，与导航误差叠加后共同传播至下一个机动点
  image: /logo.png
permalink: /glossary/navigation/maneuver-error-modeling/
---

# 机动误差建模（Maneuver Error Modeling）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

在轨道保持仿真中，模拟推力执行偏差对实际速度增量影响的方法。典型的建模方式是将计算所得速度增量乘以一个误差因子，例如乘以 1.01 表示 1% 的偏热机动（实际推力略大于标称值）。ARTEMIS 任务的实测机动误差约为 1%，与标定后的推力器性能一致。机动误差在每次计算机动后施加，与导航误差叠加后共同传播至下一个机动点。

## 应用价值

该指标在地月空间航天器自主导航中具有重要作用。由于地月空间可见卫星少且几何分布变化大，定位精度受几何分布影响显著，实际任务中需结合实时几何计算进行导航滤波器设计，以获得最优定位性能。

## 相关概念

- [位置精度因子（Position Dilution of Precision）](/glossary/navigation/position-dilution-of-precision/)
- [甚长基线干涉测量（Very Long Baseline Interferometry）](/glossary/navigation/very-long-baseline-interferometry/)
- [轨道预报（Orbit Prediction）](/glossary/navigation/orbit-prediction/)
- [初值点（Initial Epoch Point）](/glossary/navigation/initial-epoch-point/)

## 参考文献

- Folta et al. 2010
