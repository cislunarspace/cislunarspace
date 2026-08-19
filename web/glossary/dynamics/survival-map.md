---
title: 生存图（Survival Map）
description: 在地月 CR3BP 中，以月球 L2 点附近的一组初始条件（位置和速度）为自变量，以色标显示各初始条件对应的轨道存活时间（从出发到撞击月面、飞出 L1/L2 或达到最大传播时间）的二维参数图。
keywords: 生存图, Survival Map, CR3BP, L2点, 弱捕获, 参数图
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 生存图（Survival Map）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 生存图详解 | 术语定义
  description: 在地月 CR3BP 中，以月球 L2 点附近的一组初始条件（位置和速度）为自变量，以色标显示各初始条件对应的轨道存活时间（从出发到撞击月面、飞出 L1/L2 或达到最大传播时间）的二维参数图。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 生存图详解 | 术语定义
  description: 在地月 CR3BP 中，以月球 L2 点附近的一组初始条件（位置和速度）为自变量，以色标显示各初始条件对应的轨道存活时间（从出发到撞击月面、飞出 L1/L2 或达到最大传播时间）的二维参数图。
  image: /logo.png
permalink: /glossary/dynamics/survival-map/
---

# 生存图（Survival Map）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

在地月 CR3BP 中，以月球 L2 点附近的一组初始条件（位置和速度）为自变量，以色标显示各初始条件对应的轨道存活时间（从出发到撞击月面、飞出 L1/L2 或达到最大传播时间）的二维参数图。用于快速筛选能实现月球弱捕获或撞击的初始状态区间。

## 应用价值

生存图是轨道设计中的快速筛选工具，工程师可以通过颜色直接判断哪些初始条件能够让探测器长期驻留或最终捕获月球。在设计月球着陆任务时，利用生存图可以快速缩小搜索范围，找到能够以最小速度增量实现弱捕获的初始状态。该工具尤其适用于地月 L2 点附近的晕轨道设计与 Halo 轨道转移方案评估，大幅减少了数值搜索的计算量。

## 相关概念

- 弱捕获（Weak Capture）
- [Halo 轨道（Halo Orbit）](/glossary/orbits/halo-orbit/)
- [不变流形（Invariant Manifold）](/glossary/dynamics/invariant-manifold/)
- [平动点（Libration Point）](/glossary/dynamics/libration-point/)

## 参考文献

- Van Der Weg and Vasile, 2016, Sun-Earth L1 and L2 to Moon Transfers Exploiting Natural Dynamics
