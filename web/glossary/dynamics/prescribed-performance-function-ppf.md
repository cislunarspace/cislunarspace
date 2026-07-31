---
title: 规定性能函数（Prescribed Performance Function, PPF）
description: 规定性能控制中用来描述跟踪误差允许边界的时间函数。必须满足三个条件：正定、单调递减、极限为正数。典型的有限时间收敛形式为 φ(t) = (φ₀ - φ∞)·((1-α)/(T))^(1/(1-α)) + φ∞，其中 φ₀ 为初始容许误差，φ∞ 为最终容许误差，T 为用户指定的收敛时间。相比传统指数衰减形式，有限时间形式
keywords: 规定性能函数, Prescribed Performance Function, PPF, PPF, 轨道动力学, 控制理论, 数值仿真
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 规定性能函数（Prescribed Performance Function, PPF）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 规定性能函数详解 | 术语定义
  description: 规定性能控制中用来描述跟踪误差允许边界的时间函数。必须满足三个条件：正定、单调递减、极限为正数。典型的有限时间收敛形式为 φ(t) = (φ₀ - φ∞)·((1-α)/(T))^(1/(1-α)) + φ∞，其中 φ₀ 为初始容许误差，φ∞ 为最终容许误差，T 为用户指定的收敛时间。相比传统指数衰减形式，有限时间形式
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 规定性能函数详解 | 术语定义
  description: 规定性能控制中用来描述跟踪误差允许边界的时间函数。必须满足三个条件：正定、单调递减、极限为正数。典型的有限时间收敛形式为 φ(t) = (φ₀ - φ∞)·((1-α)/(T))^(1/(1-α)) + φ∞，其中 φ₀ 为初始容许误差，φ∞ 为最终容许误差，T 为用户指定的收敛时间。相比传统指数衰减形式，有限时间形式
  image: /logo.png
permalink: /glossary/dynamics/prescribed-performance-function-ppf/
---

# 规定性能函数（Prescribed Performance Function, PPF）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

规定性能控制中用来描述跟踪误差允许边界的时间函数。必须满足三个条件：正定、单调递减、极限为正数。典型的有限时间收敛形式为 φ(t) = (φ₀ - φ∞)·((1-α)/(T))^(1/(1-α)) + φ∞，其中 φ₀ 为初始容许误差，φ∞ 为最终容许误差，T 为用户指定的收敛时间。相比传统指数衰减形式，有限时间形式的收敛时间可直接指定，参数调节更直观。

## 应用价值

规定性能函数涉及地月空间航天器的运动特性分析和控制问题。在实际任务设计中，利用该方法可以分析轨道稳定性、计算控制策略，或评估摄动因素对轨道的影响，为任务安全性和可靠性提供保障。

## 相关概念

- [遭遇区域（Encounter Region）](/glossary/dynamics/encounter-region/)
- [相对论效应修正（Relativistic Correction）](/glossary/dynamics/relativistic-correction/)
- [直接飞越转移（Direct Fly-By Transfer, DFBT）](/glossary/dynamics/direct-fly-by-transfer-dfbt/)
- [安全转移编队（Safe Transfer Formation）](/glossary/dynamics/safe-transfer-formation/)

## 参考文献

- https://doi.org/10.1177/0954410020940892
