---
title: 发动机节流因子（Engine Throttle Factor）
description: 低推力发动机的控制变量u，取值范围[0, 1]。u=1表示满推力工作，u=0表示关机。在能量最优和燃料最优控制中，节流因子通过协态变量和同伦参数共同确定，实现推力的连续调节。
keywords: 发动机节流因子, Engine Throttle Factor, 轨道动力学, 控制理论, 最优控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 发动机节流因子（Engine Throttle Factor）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 发动机节流因子详解 | 术语定义
  description: 低推力发动机的控制变量u，取值范围[0, 1]。u=1表示满推力工作，u=0表示关机。在能量最优和燃料最优控制中，节流因子通过协态变量和同伦参数共同确定，实现推力的连续调节。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 发动机节流因子详解 | 术语定义
  description: 低推力发动机的控制变量u，取值范围[0, 1]。u=1表示满推力工作，u=0表示关机。在能量最优和燃料最优控制中，节流因子通过协态变量和同伦参数共同确定，实现推力的连续调节。
  image: /logo.png
permalink: /glossary/dynamics/engine-throttle-factor/
---

# 发动机节流因子（Engine Throttle Factor）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

低推力发动机的控制变量u，取值范围[0, 1]。u=1表示满推力工作，u=0表示关机。在能量最优和燃料最优控制中，节流因子通过协态变量和同伦参数共同确定，实现推力的连续调节。

## 应用价值

在航天器姿态和轨道控制中，该方法用于实现高精度跟踪和稳定保持。通过设计合适的控制律，可以有效抑制外部扰动的影响，保证航天器在复杂动力学环境中的可靠运行。

## 相关概念

- [Hill 模型（Hill Model）](/glossary/dynamics/hill-model/)
- [惯性坐标系固定编队（Formation Fixed Relative to Inertial Frame）](/glossary/dynamics/formation-fixed-relative-to-inertial-frame/)
- [受摄Lambert问题（Perturbational Lambert Problem）](/glossary/dynamics/perturbational-lambert-problem/)
- 探测器定位（Probe Targeting）

## 参考文献

- Du et al., 2023, Two trajectory configurations for the low-thrust transfer between northern and southern halo orbits
