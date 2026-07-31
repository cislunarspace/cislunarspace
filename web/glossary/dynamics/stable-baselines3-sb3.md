---
title: Stable-Baselines3（Stable-Baselines3, SB3）
description: 基于PyTorch的强化学习算法库，提供了PPO、SAC等算法的稳定实现。A2PPO基于SB3的PPO实现进行扩展，加入交叉注意力特征融合模块。
keywords: Stable-Baselines3, Stable-Baselines3, SB3, SB3, 轨道动力学, 控制理论, 最优控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Stable-Baselines3（Stable-Baselines3, SB3）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: Stable-Baselines3详解 | 术语定义
  description: 基于PyTorch的强化学习算法库，提供了PPO、SAC等算法的稳定实现。A2PPO基于SB3的PPO实现进行扩展，加入交叉注意力特征融合模块。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Stable-Baselines3详解 | 术语定义
  description: 基于PyTorch的强化学习算法库，提供了PPO、SAC等算法的稳定实现。A2PPO基于SB3的PPO实现进行扩展，加入交叉注意力特征融合模块。
  image: /logo.png
permalink: /glossary/dynamics/stable-baselines3-sb3/
---

# Stable-Baselines3（Stable-Baselines3, SB3）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

基于PyTorch的强化学习算法库，提供了PPO、SAC等算法的稳定实现。A2PPO基于SB3的PPO实现进行扩展，加入交叉注意力特征融合模块。

## 应用价值

Stable-Baselines3在轨道设计和轨迹优化中用于将连续控制问题离散化，通过非线性规划求解最优控制序列。 在地月空间任务中，该方法可应用于转移轨道设计、轨道维持和再入轨迹规划等关键环节。

## 相关概念

- [控制参数化（Control Parametrization）](/glossary/dynamics/control-parametrization/)
- [推力器调制器（Thruster Modulator）](/glossary/dynamics/thruster-modulator/)
- [粒子群优化器（Particle Swarm Optimizer）](/glossary/dynamics/particle-swarm-optimizer/)
- [脉冲间隔（Impulse Interval）](/glossary/dynamics/impulse-interval/)

## 参考文献

- Ul Haq 等 - 2026 - Autonomous low-thrust trajectory optimization in cislunar space via attention-augmented reinforcement learning
