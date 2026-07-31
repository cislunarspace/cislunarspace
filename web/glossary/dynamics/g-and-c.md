---
title: 制导与控制（Guidance and Control, G&C）
description: 制导负责实时规划状态轨迹并计算控制力和力矩，控制负责基于实时状态更新追踪轨迹并处理干扰和测量噪声。
keywords: 制导与控制, Guidance and Control, G&C, 导航制导与控制, GNC, 轨迹规划, 姿态控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 制导与控制（Guidance and Control, G&C）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 制导与控制详解 | 术语定义
  description: 制导负责实时规划状态轨迹并计算控制力和力矩，控制负责基于实时状态更新追踪轨迹并处理干扰和测量噪声。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 制导与控制详解 | 术语定义
  description: 制导负责实时规划状态轨迹并计算控制力和力矩，控制负责基于实时状态更新追踪轨迹并处理干扰和测量噪声。
  image: /logo.png
permalink: /glossary/dynamics/g-and-c/
---

# 制导与控制（Guidance and Control, G&C）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

制导负责实时规划状态轨迹并计算控制力和力矩，控制负责基于实时状态更新追踪轨迹并处理干扰和测量噪声。

## 应用价值

制导与控制是航天器自主运行的核心。制导算法根据当前状态和目标生成参考轨迹，控制算法则驱动执行机构使航天器沿参考轨迹运动。在地月空间任务中，G&C 系统面临长时延、强摄动、多约束等挑战，需要设计具有鲁棒性的控制律以应对测量噪声、模型不确定性以及外部干扰。典型的地月转移制导策略包括 Lambert 制导、多脉冲机动制导和模型预测制导。

## 相关概念

- [模型预测控制（Model Predictive Control, MPC）](/glossary/dynamics/model-predictive-control/)
- [故障检测与恢复（Fault Detection, Isolation and Recovery, FDIR）](/glossary/dynamics/fault-detection-isolation-and-recovery/)
- [动力下降制导（Powered Descent Guidance, PDG）](/glossary/dynamics/powered-descent-guidance/)
- [状态转移矩阵（State Transition Matrix）](/glossary/dynamics/state-transition-matrix/)

## 参考文献

- Starek 等 - 2016 - Spacecraft autonomy challenges for next-generation space missions
