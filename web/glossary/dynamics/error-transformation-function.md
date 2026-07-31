---
title: 误差变换函数（Error Transformation Function）
description: 规定性能控制中的数学工具，将受约束的跟踪误差映射到无约束空间。常用对数形式 Γ(ω) = ½·ln((1+ω)/(1-ω))，其中 ω = υ/φ 为归一化误差（υ 为辅助状态变量，φ 为性能函数值）。由于 ω ∈ (-1,1)，变换函数将有限区间映射到整个实数轴，从而把不等式约束转化为无约束优化问题。
keywords: 误差变换函数, Error Transformation Function, 轨道动力学, 控制理论, 最优控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 误差变换函数（Error Transformation Function）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 误差变换函数详解 | 术语定义
  description: 规定性能控制中的数学工具，将受约束的跟踪误差映射到无约束空间。常用对数形式 Γ(ω) = ½·ln((1+ω)/(1-ω))，其中 ω = υ/φ 为归一化误差（υ 为辅助状态变量，φ 为性能函数值）。由于 ω ∈ (-1,1)，变换函数将有限区间映射到整个实数轴，从而把不等式约束转化为无约束优化问题。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 误差变换函数详解 | 术语定义
  description: 规定性能控制中的数学工具，将受约束的跟踪误差映射到无约束空间。常用对数形式 Γ(ω) = ½·ln((1+ω)/(1-ω))，其中 ω = υ/φ 为归一化误差（υ 为辅助状态变量，φ 为性能函数值）。由于 ω ∈ (-1,1)，变换函数将有限区间映射到整个实数轴，从而把不等式约束转化为无约束优化问题。
  image: /logo.png
permalink: /glossary/dynamics/error-transformation-function/
---

# 误差变换函数（Error Transformation Function）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

规定性能控制中的数学工具，将受约束的跟踪误差映射到无约束空间。常用对数形式 Γ(ω) = ½·ln((1+ω)/(1-ω))，其中 ω = υ/φ 为归一化误差（υ 为辅助状态变量，φ 为性能函数值）。由于 ω ∈ (-1,1)，变换函数将有限区间映射到整个实数轴，从而把不等式约束转化为无约束优化问题。

## 应用价值

在航天器姿态和轨道控制中，该方法用于实现高精度跟踪和稳定保持。通过设计合适的控制律，可以有效抑制外部扰动的影响，保证航天器在复杂动力学环境中的可靠运行。

## 相关概念

- [Hill 模型（Hill Model）](/glossary/dynamics/hill-model/)
- [惯性坐标系固定编队（Formation Fixed Relative to Inertial Frame）](/glossary/dynamics/formation-fixed-relative-to-inertial-frame/)
- [受摄Lambert问题（Perturbational Lambert Problem）](/glossary/dynamics/perturbational-lambert-problem/)
- [探测器定位（Probe Targeting）](/glossary/dynamics/probe-targeting/)
## 参考文献

- https://doi.org/10.1177/0954410020940892
