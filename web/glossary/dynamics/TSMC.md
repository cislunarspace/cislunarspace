---
title: 终端滑模控制（Terminal Sliding Mode Control, TSMC）
description: 在传统滑模面中引入非线性项的变结构控制方法。滑模面设计为 s = ė + c·sig^α(e)，其中 α ∈ (0,1)，使得系统状态在有限时间内到达平衡点，而非传统线性滑模的渐近收敛。优点是有限时间收敛、对匹配不确定性有强鲁棒性；缺点是控制量在接近平衡点时可能出现高频抖振，消耗较多能量。
keywords: 终端滑模控制, Terminal Sliding Mode Control, TSMC, TSMC, 轨道动力学, 控制理论, 非线性控制, 最优控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 终端滑模控制（Terminal Sliding Mode Control, TSMC）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 终端滑模控制详解 | 术语定义
  description: 在传统滑模面中引入非线性项的变结构控制方法。滑模面设计为 s = ė + c·sig^α(e)，其中 α ∈ (0,1)，使得系统状态在有限时间内到达平衡点，而非传统线性滑模的渐近收敛。优点是有限时间收敛、对匹配不确定性有强鲁棒性；缺点是控制量在接近平衡点时可能出现高频抖振，消耗较多能量。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 终端滑模控制详解 | 术语定义
  description: 在传统滑模面中引入非线性项的变结构控制方法。滑模面设计为 s = ė + c·sig^α(e)，其中 α ∈ (0,1)，使得系统状态在有限时间内到达平衡点，而非传统线性滑模的渐近收敛。优点是有限时间收敛、对匹配不确定性有强鲁棒性；缺点是控制量在接近平衡点时可能出现高频抖振，消耗较多能量。
  image: /logo.png
permalink: /glossary/dynamics/TSMC/
---

# 终端滑模控制（Terminal Sliding Mode Control, TSMC）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

在传统滑模面中引入非线性项的变结构控制方法。滑模面设计为 s = ė + c·sig^α(e)，其中 α ∈ (0,1)，使得系统状态在有限时间内到达平衡点，而非传统线性滑模的渐近收敛。优点是有限时间收敛、对匹配不确定性有强鲁棒性；缺点是控制量在接近平衡点时可能出现高频抖振，消耗较多能量。

## 应用价值

提供有限时间收敛特性，适用于对收敛速度有严格要求的轨道机动任务。对匹配不确定性具有内在鲁棒性，适合火星着陆和地月转移等场景。

## 相关概念

- [规定性能控制（Prescribed Performance Control, PPC）](/glossary/dynamics/PPC/)
- [函数连接理论（Theory of Functional Connections, TFC）](/glossary/dynamics/TFC/)
- [飞行时间（Time of Flight, ToF）](/glossary/dynamics/ToF/)
- [模型预测制导与控制（Model Predictive Guidance and Control, MPC）](/glossary/dynamics/MPC/)

## 参考文献

- https://doi.org/10.1177/0954410020940892。
