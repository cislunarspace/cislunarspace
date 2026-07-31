---
title: 稳定范围（Stability Region）
description: 三角平动点附近，探测器在运动过程中偏离平动点状态（位置和速度）不超过给定限制时，初始状态所允许的偏离区域。在圆型限制性三体问题中，当地月系μ满足线性稳定条件（μ < μ₀ ≈ 0.0385）时，初始偏移可达上万公里仍能长期保持。但在实际力学模型中，太阳引力摄动使此范围失去实际意义。
keywords: 稳定范围, Stability Region, 轨道力学, 动力学建模, 数值积分
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 稳定范围（Stability Region）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 稳定范围详解 | 术语定义
  description: 三角平动点附近，探测器在运动过程中偏离平动点状态（位置和速度）不超过给定限制时，初始状态所允许的偏离区域。在圆型限制性三体问题中，当地月系μ满足线性稳定条件（μ < μ₀ ≈ 0.0385）时，初始偏移可达上万公里仍能长期保持。但在实际力学模型中，太阳引力摄动使此范围失去实际意义。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 稳定范围详解 | 术语定义
  description: 三角平动点附近，探测器在运动过程中偏离平动点状态（位置和速度）不超过给定限制时，初始状态所允许的偏离区域。在圆型限制性三体问题中，当地月系μ满足线性稳定条件（μ < μ₀ ≈ 0.0385）时，初始偏移可达上万公里仍能长期保持。但在实际力学模型中，太阳引力摄动使此范围失去实际意义。
  image: /logo.png
permalink: /glossary/dynamics/stability-region/
---

# 稳定范围（Stability Region）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

三角平动点附近，探测器在运动过程中偏离平动点状态（位置和速度）不超过给定限制时，初始状态所允许的偏离区域。在圆型限制性三体问题中，当地月系μ满足线性稳定条件（μ < μ₀ ≈ 0.0385）时，初始偏移可达上万公里仍能长期保持。但在实际力学模型中，太阳引力摄动使此范围失去实际意义。

## 应用价值

在轨道设计和控制系统分析中，李雅普诺夫方法提供了一种不需要求解微分方程即可判断系统稳定性的有效手段，特别适用于分析地月转移轨道和小天体附近的轨道稳定性。

## 相关概念

- [李雅普诺夫稳定性（Lyapunov Stability）](/glossary/dynamics/lyapunov-stability/)
- [Adams-Cowell积分器（Adams-Cowell Integrator）](/glossary/dynamics/adams-cowell-integrator/)
- [汉森系数（Hansen Coefficients）](/glossary/dynamics/hansen-coefficients/)
- [控制曲线（Control Curve, U_i）](/glossary/dynamics/control-curve-ui/)

## 参考文献

- 刘林和刘慧根 - 2008 - 地月系中探测器定点在三角平动点附近的位置漂移及其控制问题
