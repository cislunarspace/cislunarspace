---
title: x-z截面穿越目标（x-z Plane Crossing Target）
description: 最优延续策略中的核心约束形式。以轨道穿越x-z平面时的位置或速度分量（如x方向速度）作为目标值，引导航天器在后续1至2圈内回到期望轨道状态。约束容差通常为厘米每秒量级。该方法的优势在于无需参考轨迹，仅通过逐次穿越点的目标即可维持轨道。
keywords: x-z截面穿越目标, x-z Plane Crossing Target, 轨道力学, 动力学建模, 数值积分
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: x-z截面穿越目标（x-z Plane Crossing Target）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: x-z截面穿越目标详解 | 术语定义
  description: 最优延续策略中的核心约束形式。以轨道穿越x-z平面时的位置或速度分量（如x方向速度）作为目标值，引导航天器在后续1至2圈内回到期望轨道状态。约束容差通常为厘米每秒量级。该方法的优势在于无需参考轨迹，仅通过逐次穿越点的目标即可维持轨道。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: x-z截面穿越目标详解 | 术语定义
  description: 最优延续策略中的核心约束形式。以轨道穿越x-z平面时的位置或速度分量（如x方向速度）作为目标值，引导航天器在后续1至2圈内回到期望轨道状态。约束容差通常为厘米每秒量级。该方法的优势在于无需参考轨迹，仅通过逐次穿越点的目标即可维持轨道。
  image: /logo.png
permalink: /glossary/dynamics/x-z-plane-crossing-target/
---

# x-z截面穿越目标（x-z Plane Crossing Target）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

最优延续策略中的核心约束形式。以轨道穿越x-z平面时的位置或速度分量（如x方向速度）作为目标值，引导航天器在后续1至2圈内回到期望轨道状态。约束容差通常为厘米每秒量级。该方法的优势在于无需参考轨迹，仅通过逐次穿越点的目标即可维持轨道。

## 应用价值

轨道面变更机动是轨道控制中的高能耗操作，通常需要精心设计机动策略以节约推进剂。

## 相关概念

- [李雅普诺夫稳定性（Lyapunov Stability）](/glossary/dynamics/lyapunov-stability/)
- [Adams-Cowell积分器（Adams-Cowell Integrator）](/glossary/dynamics/adams-cowell-integrator/)
- [汉森系数（Hansen Coefficients）](/glossary/dynamics/hansen-coefficients/)
- [控制曲线（Control Curve, U_i）](/glossary/dynamics/control-curve-ui/)

## 参考文献

- Folta et al., 2014, Acta Astronautica
