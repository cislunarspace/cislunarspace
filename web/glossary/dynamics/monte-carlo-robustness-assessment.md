---
title: 蒙特卡罗鲁棒性评估（Monte Carlo Robustness Assessment）
description: 通过大量随机抽样（论文使用100次）初始状态扰动，评估控制策略在不确定条件下的成功率和终端精度。A2PPO在所有四个场景中均达到100%成功率。
keywords: 蒙特卡罗鲁棒性评估, Monte Carlo Robustness Assessment, 轨道动力学, 多体问题, 摄动
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 蒙特卡罗鲁棒性评估（Monte Carlo Robustness Assessment）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 蒙特卡罗鲁棒性评估详解 | 术语定义
  description: 通过大量随机抽样（论文使用100次）初始状态扰动，评估控制策略在不确定条件下的成功率和终端精度。A2PPO在所有四个场景中均达到100%成功率。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 蒙特卡罗鲁棒性评估详解 | 术语定义
  description: 通过大量随机抽样（论文使用100次）初始状态扰动，评估控制策略在不确定条件下的成功率和终端精度。A2PPO在所有四个场景中均达到100%成功率。
  image: /logo.png
permalink: /glossary/dynamics/monte-carlo-robustness-assessment/
---

# 蒙特卡罗鲁棒性评估（Monte Carlo Robustness Assessment）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

通过大量随机抽样（论文使用100次）初始状态扰动，评估控制策略在不确定条件下的成功率和终端精度。A2PPO在所有四个场景中均达到100%成功率。

## 应用价值

在轨道控制律设计中，该方法通过优化推力方向和大小实现燃料消耗最小化，是深空任务的核心技术。

## 相关概念

- [燃耗最优（Minimum-Fuel / Fuel-Optimal）](/glossary/dynamics/minimum-fuel-fuel-optimal/)
- [月球飞越法（Lunar Fly-by Method）](/glossary/dynamics/lunar-fly-by-method/)
- [可达集（Reachability Set）](/glossary/dynamics/reachability-set/)
- [最大能量逃逸轨迹（Maximum-Energy Escape Trajectory）](/glossary/dynamics/maximum-energy-escape-trajectory/)

## 参考文献

- Ul Haq 等 - 2026 - Autonomous low-thrust trajectory optimization in cislunar space via attention-augmented reinforcement learning
