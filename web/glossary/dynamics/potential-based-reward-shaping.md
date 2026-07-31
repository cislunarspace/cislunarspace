---
title: 势能塑造奖励函数（Potential-Based Reward Shaping）
description: 一种奖励塑造方法，通过定义势函数引导状态演化，使稀疏的终端奖励被稠密的过程奖励补充。A2PPO的奖励函数包含势能项、燃料消耗项、时间惩罚项、月球安全项和终端奖励。
keywords: 势能塑造奖励函数, Potential-Based Reward Shaping, 轨道动力学, 三体问题, 平动点
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 势能塑造奖励函数（Potential-Based Reward Shaping）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 势能塑造奖励函数详解 | 术语定义
  description: 一种奖励塑造方法，通过定义势函数引导状态演化，使稀疏的终端奖励被稠密的过程奖励补充。A2PPO的奖励函数包含势能项、燃料消耗项、时间惩罚项、月球安全项和终端奖励。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 势能塑造奖励函数详解 | 术语定义
  description: 一种奖励塑造方法，通过定义势函数引导状态演化，使稀疏的终端奖励被稠密的过程奖励补充。A2PPO的奖励函数包含势能项、燃料消耗项、时间惩罚项、月球安全项和终端奖励。
  image: /logo.png
permalink: /glossary/dynamics/potential-based-reward-shaping/
---

# 势能塑造奖励函数（Potential-Based Reward Shaping）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种奖励塑造方法，通过定义势函数引导状态演化，使稀疏的终端奖励被稠密的过程奖励补充。A2PPO的奖励函数包含势能项、燃料消耗项、时间惩罚项、月球安全项和终端奖励。

## 应用价值

在势能塑造奖励函数的分析中，可用于轨道传播和机动设计，帮助工程师评估航天器在不同动力学环境下的运动特性。
该概念为地月空间任务设计提供了理论基础，尤其在平动点轨道设计和低能转移分析中具有重要应用价值。
利用势能塑造奖励函数进行轨迹优化，可以有效降低任务燃料消耗，提高任务经济效益。
在任务设计中，势能塑造奖励函数的分析有助于理解航天器在复杂引力场中的行为，指导轨道保持策略的制定。

## 相关概念

- [微分代数（Differential Algebra, DA）](/glossary/dynamics/differential-algebra/)
- [羽流冲击（Plume Impingement）](/glossary/dynamics/plume-impingement/)
- [动量积分（Momentum Integral, MI）](/glossary/dynamics/momentum-integral/)

## 参考文献

- Ul Haq 等 - 2026 - Autonomous low-thrust trajectory optimization in cislunar space via attention-augmented reinforcement learning
