---
title: 分层搜索法（Hierarchical Search Method）
description: 一种逐步逼近精确目标轨道的设计方法。分三层递进搜索：第一层将月球视为质点，通过赤经赤纬偏差约束确保航天器与月球相遇；第二层视月球为引力体，用B平面参数完成二体假设下的瞄准；第三层施加近月距、轨道倾角等实际任务约束，得到精确轨道。每层的解作为下层的初值，保证搜索快速收敛。
keywords: 分层搜索法, Hierarchical Search Method, 轨道设计, 轨道力学, 平动点
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 分层搜索法（Hierarchical Search Method）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 分层搜索法详解 | 术语定义
  description: 一种逐步逼近精确目标轨道的设计方法。分三层递进搜索：第一层将月球视为质点，通过赤经赤纬偏差约束确保航天器与月球相遇；第二层视月球为引力体，用B平面参数完成二体假设下的瞄准；第三层施加近月距、轨道倾角等实际任务约束，得到精确轨道。每层的解作为下层的初值，保证搜索快速收敛。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 分层搜索法详解 | 术语定义
  description: 一种逐步逼近精确目标轨道的设计方法。分三层递进搜索：第一层将月球视为质点，通过赤经赤纬偏差约束确保航天器与月球相遇；第二层视月球为引力体，用B平面参数完成二体假设下的瞄准；第三层施加近月距、轨道倾角等实际任务约束，得到精确轨道。每层的解作为下层的初值，保证搜索快速收敛。
  image: /logo.png
permalink: /glossary/orbits/hierarchical-search-method/
---

# 分层搜索法（Hierarchical Search Method）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种逐步逼近精确目标轨道的设计方法。分三层递进搜索：第一层将月球视为质点，通过赤经赤纬偏差约束确保航天器与月球相遇；第二层视月球为引力体，用B平面参数完成二体假设下的瞄准；第三层施加近月距、轨道倾角等实际任务约束，得到精确轨道。每层的解作为下层的初值，保证搜索快速收敛。

## 应用价值

分层搜索法是地月空间轨道设计中的重要概念，用于描述航天器在地月引力场中的运动特性。 该轨道类型在月球探测任务中有广泛应用，可为任务轨道选择提供理论依据。 利用该轨道特性可以进行任务窗口分析、轨道转移策略优化和轨道保持设计。

## 相关概念

- [轨道面共面约束（Coplanar Orbital Plane Constraint）](/glossary/orbits/coplanar-orbital-plane-constraint/)
- [利萨如轨道（Lissajous Orbit）](/glossary/orbits/lissajous-orbit/)
- [高地球轨道（High Earth Orbit, HEO）](/glossary/orbits/high-earth-orbit-heo/)
- [外部相位（Exterior Phase）](/glossary/orbits/exterior-phase/)

## 参考文献

- 高玉东 等 - 2006 - 地月空间飞行轨道分层搜索设计
