---
title: 主从式编队（Leader-Follower Formation）
description: 一种编队飞行架构，由一个主航天器（Leader）运行参考轨道，一个或多个从航天器（Follower）通过控制器维持相对于主航天器的期望位置。主航天器负责轨道维持，从航天器负责编队构型的展开和保持。这种架构简化了控制设计，但主航天器是单点故障源。
keywords: 主从式编队, Leader-Follower Formation, 轨道力学, 最优控制, 非线性动力学
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 主从式编队（Leader-Follower Formation）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 主从式编队详解 | 术语定义
  description: 一种编队飞行架构，由一个主航天器（Leader）运行参考轨道，一个或多个从航天器（Follower）通过控制器维持相对于主航天器的期望位置。主航天器负责轨道维持，从航天器负责编队构型的展开和保持。这种架构简化了控制设计，但主航天器是单点故障源。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 主从式编队详解 | 术语定义
  description: 一种编队飞行架构，由一个主航天器（Leader）运行参考轨道，一个或多个从航天器（Follower）通过控制器维持相对于主航天器的期望位置。主航天器负责轨道维持，从航天器负责编队构型的展开和保持。这种架构简化了控制设计，但主航天器是单点故障源。
  image: /logo.png
permalink: /glossary/dynamics/leader-follower-formation/
---

# 主从式编队（Leader-Follower Formation）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种编队飞行架构，由一个主航天器（Leader）运行参考轨道，一个或多个从航天器（Follower）通过控制器维持相对于主航天器的期望位置。主航天器负责轨道维持，从航天器负责编队构型的展开和保持。这种架构简化了控制设计，但主航天器是单点故障源。

## 应用价值

该方法在地月空间轨道保持与姿态控制中具有重要应用，可实现对航天器的稳定运行与精确机动。

## 相关概念

- [偏转角（Deflection Angle）](/glossary/dynamics/deflection-angle/)
- [时间最优转移（Time-Optimal Transfer）](/glossary/dynamics/time-optimal-transfer/)
- [双程测距求和组合（Summation Combination of Dual One-Way Ranging）](/glossary/navigation/summation-combination-of-dual-one-way-ranging/)
- [地图投影（Map Projection）](/glossary/fundamentals/map-projection/)

## 参考文献

- 人工平动点附近混合推进航天器编队滑模控制保持
