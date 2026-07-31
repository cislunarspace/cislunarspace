---
title: 终端容差（Terminal Tolerance）
description: 转移任务成功判定条件，规定到达目标轨道时位置偏差和速度偏差需分别低于设定阈值。A2PPO训练中通过课程学习逐步收紧该容差，从5×10的-3次方收敛至1×10的-3次方。
keywords: 终端容差, Terminal Tolerance, 轨道力学, 最优控制, 非线性动力学
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 终端容差（Terminal Tolerance）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 终端容差详解 | 术语定义
  description: 转移任务成功判定条件，规定到达目标轨道时位置偏差和速度偏差需分别低于设定阈值。A2PPO训练中通过课程学习逐步收紧该容差，从5×10的-3次方收敛至1×10的-3次方。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 终端容差详解 | 术语定义
  description: 转移任务成功判定条件，规定到达目标轨道时位置偏差和速度偏差需分别低于设定阈值。A2PPO训练中通过课程学习逐步收紧该容差，从5×10的-3次方收敛至1×10的-3次方。
  image: /logo.png
permalink: /glossary/dynamics/terminal-tolerance/
---

# 终端容差（Terminal Tolerance）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

转移任务成功判定条件，规定到达目标轨道时位置偏差和速度偏差需分别低于设定阈值。A2PPO训练中通过课程学习逐步收紧该容差，从5×10的-3次方收敛至1×10的-3次方。

## 应用价值

该概念在地月空间轨道设计与转移规划中具有重要作用，可用于分析轨道特性与设计低能量转移方案。

## 相关概念

- [偏转角（Deflection Angle）](/glossary/dynamics/deflection-angle/)
- [时间最优转移（Time-Optimal Transfer）](/glossary/dynamics/time-optimal-transfer/)
- [双程测距求和组合（Summation Combination of Dual One-Way Ranging）](/glossary/navigation/summation-combination-of-dual-one-way-ranging/)
- [地图投影（Map Projection）](/glossary/fundamentals/map-projection/)

## 参考文献

- Ul Haq 等 - 2026 - Autonomous low-thrust trajectory optimization in cislunar space via attention-augmented reinforcement learning
