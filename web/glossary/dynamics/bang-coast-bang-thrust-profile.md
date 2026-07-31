---
title: 推力-滑行-推力剖面（Bang-Coast-Bang Thrust Profile）
description: 低推力轨道机动中一种典型的推力模式，包含初始推力弧段、近月滑行弧段和最终推力弧段。S2场景中A2PPO习得的halo到NRHO转移策略呈现该结构。
keywords: 推力-滑行-推力剖面, Bang-Coast-Bang Thrust Profile, 动力学, 轨道, 控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 推力-滑行-推力剖面（Bang-Coast-Bang Thrust Profile）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 推力-滑行-推力剖面详解 | 术语定义
  description: 低推力轨道机动中一种典型的推力模式，包含初始推力弧段、近月滑行弧段和最终推力弧段。S2场景中A2PPO习得的halo到NRHO转移策略呈现该结构。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 推力-滑行-推力剖面详解 | 术语定义
  description: 低推力轨道机动中一种典型的推力模式，包含初始推力弧段、近月滑行弧段和最终推力弧段。S2场景中A2PPO习得的halo到NRHO转移策略呈现该结构。
  image: /logo.png
permalink: /glossary/dynamics/bang-coast-bang-thrust-profile/
---

# 推力-滑行-推力剖面（Bang-Coast-Bang Thrust Profile）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

低推力轨道机动中一种典型的推力模式，包含初始推力弧段、近月滑行弧段和最终推力弧段。S2场景中A2PPO习得的halo到NRHO转移策略呈现该结构。

## 应用价值

在推力-滑行-推力剖面的分析中，研究者首先需要建立描述航天器运动的数学模型，通过数值积分或解析方法求解该术语所对应的动力学方程，进而评估航天器在不同初始条件下的运动特性。
在实际任务中，推力-滑行-推力剖面直接影响转移轨道的燃料消耗和任务窗口选取，需要结合轨道优化算法进行详细设计。
在实际任务中，需要结合数值仿真和解析方法对推力-滑行-推力剖面进行分析验证，确保设计方案满足任务约束和性能指标。

## 相关概念

- [双变量高斯分布（Bivariate Gaussian Distribution）](/glossary/dynamics/bivariate-gaussian-distribution/)
- [中途脉冲（Midcourse Impulse）](/glossary/dynamics/midcourse-impulse/)
- [零推力参考轨迹（Zero-Thrust Reference Trajectory）](/glossary/dynamics/zero-thrust-reference-trajectory/)
- [协态变量（Co-state Variables）](/glossary/dynamics/co-state-variables/)

## 参考文献

- Ul Haq 等 - 2026 - Autonomous low-thrust trajectory optimization in cislunar space via attention-augmented reinforcement learning
