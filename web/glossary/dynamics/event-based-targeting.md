---
title: 事件驱动瞄准（Event-based Targeting）
description: x轴穿越控制的核心机制：不按固定时间匹配参考状态，而是在航天器轨迹与近月点xz平面的交叉事件处匹配状态分量。这种「事件触发、而非时间触发」的瞄准方式，使控制器天然不约束相位，需额外措施防止沿轨道方向的漂移。
keywords: 事件驱动瞄准, Event-based Targeting, 轨道力学, 最优控制, 非线性动力学
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 事件驱动瞄准（Event-based Targeting）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 事件驱动瞄准详解 | 术语定义
  description: x轴穿越控制的核心机制：不按固定时间匹配参考状态，而是在航天器轨迹与近月点xz平面的交叉事件处匹配状态分量。这种「事件触发、而非时间触发」的瞄准方式，使控制器天然不约束相位，需额外措施防止沿轨道方向的漂移。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 事件驱动瞄准详解 | 术语定义
  description: x轴穿越控制的核心机制：不按固定时间匹配参考状态，而是在航天器轨迹与近月点xz平面的交叉事件处匹配状态分量。这种「事件触发、而非时间触发」的瞄准方式，使控制器天然不约束相位，需额外措施防止沿轨道方向的漂移。
  image: /logo.png
permalink: /glossary/dynamics/event-based-targeting/
---

# 事件驱动瞄准（Event-based Targeting）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

x轴穿越控制的核心机制：不按固定时间匹配参考状态，而是在航天器轨迹与近月点xz平面的交叉事件处匹配状态分量。这种「事件触发、而非时间触发」的瞄准方式，使控制器天然不约束相位，需额外措施防止沿轨道方向的漂移。

## 应用价值

该方法在地月空间轨道保持与姿态控制中具有重要应用，可实现对航天器的稳定运行与精确机动。

## 相关概念

- [偏转角（Deflection Angle）](/glossary/dynamics/deflection-angle/)
- [时间最优转移（Time-Optimal Transfer）](/glossary/dynamics/time-optimal-transfer/)
- [双程测距求和组合（Summation Combination of Dual One-Way Ranging）](/glossary/navigation/summation-combination-of-dual-one-way-ranging/)
- [地图投影（Map Projection）](/glossary/fundamentals/map-projection/)

## 参考文献

- Shimane et al. 2025
