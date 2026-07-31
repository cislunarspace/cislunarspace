---
title: Gymnasium环境（Gymnasium）
description: 开源强化学习环境框架，定义了智能体与环境交互的标准接口。A2PPO使用Gymnasium构建自定义低推力转移环境，包含地月限制性三体问题动力学、航天器质量演化、目标轨道最近邻查询（月球防撞）等功能。
keywords: Gymnasium环境, Gymnasium, 轨道动力学, 轨道优化, 非线性动力学
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Gymnasium环境（Gymnasium）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: Gymnasium环境详解 | 术语定义
  description: 开源强化学习环境框架，定义了智能体与环境交互的标准接口。A2PPO使用Gymnasium构建自定义低推力转移环境，包含地月限制性三体问题动力学、航天器质量演化、目标轨道最近邻查询（月球防撞）等功能。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Gymnasium环境详解 | 术语定义
  description: 开源强化学习环境框架，定义了智能体与环境交互的标准接口。A2PPO使用Gymnasium构建自定义低推力转移环境，包含地月限制性三体问题动力学、航天器质量演化、目标轨道最近邻查询（月球防撞）等功能。
  image: /logo.png
permalink: /glossary/dynamics/gymnasium/
---

# Gymnasium环境（Gymnasium）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

开源强化学习环境框架，定义了智能体与环境交互的标准接口。A2PPO使用Gymnasium构建自定义低推力转移环境，包含地月限制性三体问题动力学、航天器质量演化、目标轨道最近邻查询（月球防撞）等功能。

## 应用价值

在设计地月转移方案时，利用该轨道特性可降低任务总速度增量需求。该模型是分析地月空间动力学、设计低能量转移轨道的基础工具。对于大质量航天器的长时间转移，该推进方式可大幅降低推进剂消耗。

## 相关概念

- [希尔球半径（Hill Sphere Radius）](/glossary/dynamics/hill-sphere-radius/)
- [伪谱凸优化（Pseudospectral Convex Optimization）](/glossary/dynamics/pseudospectral-convex-optimization/)
- [庞加莱映射表示（Poincaré Map Representation）](/glossary/dynamics/poincar-map-representation/)
- [最小范数靶点法（Minimum Norm Targeting）](/glossary/dynamics/minimum-norm-targeting/)

## 参考文献

- Ul Haq 等 - 2026 - Autonomous low-thrust trajectory optimization in cislunar space via attention-augmented reinforcement learning
