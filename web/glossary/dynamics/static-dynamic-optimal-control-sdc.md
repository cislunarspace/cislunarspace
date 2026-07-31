---
title: 静态/动态最优控制算法（Static/Dynamic Optimal Control, SDC）
description: 由 Whiffen 开发的一种差分动态规划变体，最初用于喷气推进实验室（JPL）的低推力轨迹优化任务。SDC 将控制变量分为「静态」参数（如发动机开关时序）和「动态」控制（逐时段推力方向和幅值），分别在不同层级进行优化。该算法后来演变为 HDDP 的理论基础。
keywords: 静态/动态最优控制算法, Static/Dynamic Optimal Control, SDC, SDC
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 静态/动态最优控制算法（Static/Dynamic Optimal Control, SDC）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 静态/动态最优控制算法详解 | 术语定义
  description: 由 Whiffen 开发的一种差分动态规划变体，最初用于喷气推进实验室（JPL）的低推力轨迹优化任务。SDC 将控制变量分为「静态」参数（如发动机开关时序）和「动态」控制（逐时段推力方向和幅值），分别在不同层级进行优化。该算法后来演变为 HDDP 的理论基础。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 静态/动态最优控制算法详解 | 术语定义
  description: 由 Whiffen 开发的一种差分动态规划变体，最初用于喷气推进实验室（JPL）的低推力轨迹优化任务。SDC 将控制变量分为「静态」参数（如发动机开关时序）和「动态」控制（逐时段推力方向和幅值），分别在不同层级进行优化。该算法后来演变为 HDDP 的理论基础。
  image: /logo.png
permalink: /glossary/dynamics/static-dynamic-optimal-control-sdc/
---

# 静态/动态最优控制算法（Static/Dynamic Optimal Control, SDC）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

由 Whiffen 开发的一种差分动态规划变体，最初用于喷气推进实验室（JPL）的低推力轨迹优化任务。SDC 将控制变量分为「静态」参数（如发动机开关时序）和「动态」控制（逐时段推力方向和幅值），分别在不同层级进行优化。该算法后来演变为 HDDP 的理论基础。

## 应用价值

在实际的地月空间任务中，在姿态控制与导航算法中发挥重要作用，通过数值优化方法提升任务设计效率。。

## 相关概念

- [航迹角γ（Flight-Path Angle）](/glossary/dynamics/flight-path-angle/)
- [球谐函数模型（Spherical Harmonic Model）](/glossary/dynamics/spherical-harmonic-model/)
- [星历模型（Ephemeris Model）](/glossary/dynamics/ephemeris-model/)
- [人工平动点（Artificial Libration Point）](/glossary/dynamics/artificial-libration-point/)

## 参考文献

- Whiffen 2002, US Patent 6496741; Whiffen & Sims 2001, AAS 01-209
