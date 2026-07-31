---
title: 多目标奖励（Multi-Objective Reward）
description: 同时考虑多个竞争目标（如转移时间与燃料消耗）的奖励函数设计。A2PPO采用时间和燃料的线性加权组合，通过调节权重系数在同一策略训练中实现时间-燃料权衡。
keywords: 多目标奖励, Multi-Objective Reward, 轨道动力学, 控制理论, 数值仿真
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 多目标奖励（Multi-Objective Reward）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 多目标奖励详解 | 术语定义
  description: 同时考虑多个竞争目标（如转移时间与燃料消耗）的奖励函数设计。A2PPO采用时间和燃料的线性加权组合，通过调节权重系数在同一策略训练中实现时间-燃料权衡。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 多目标奖励详解 | 术语定义
  description: 同时考虑多个竞争目标（如转移时间与燃料消耗）的奖励函数设计。A2PPO采用时间和燃料的线性加权组合，通过调节权重系数在同一策略训练中实现时间-燃料权衡。
  image: /logo.png
permalink: /glossary/dynamics/multi-objective-reward/
---

# 多目标奖励（Multi-Objective Reward）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

同时考虑多个竞争目标（如转移时间与燃料消耗）的奖励函数设计。A2PPO采用时间和燃料的线性加权组合，通过调节权重系数在同一策略训练中实现时间-燃料权衡。

## 应用价值

多目标奖励涉及地月空间航天器的运动特性分析和控制问题。在实际任务设计中，利用该方法可以分析轨道稳定性、计算控制策略，或评估摄动因素对轨道的影响，为任务安全性和可靠性提供保障。

## 相关概念

- [遭遇区域（Encounter Region）](/glossary/dynamics/encounter-region/)
- [相对论效应修正（Relativistic Correction）](/glossary/dynamics/relativistic-correction/)
- [直接飞越转移（Direct Fly-By Transfer, DFBT）](/glossary/dynamics/direct-fly-by-transfer-dfbt/)
- [安全转移编队（Safe Transfer Formation）](/glossary/dynamics/safe-transfer-formation/)

## 参考文献

- Ul Haq 等 - 2026 - Autonomous low-thrust trajectory optimization in cislunar space via attention-augmented reinforcement learning
