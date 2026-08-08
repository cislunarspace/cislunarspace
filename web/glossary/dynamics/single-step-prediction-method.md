---
title: 单步预测法（Single-Step Prediction Method）
description: 平动点轨道维持控制中的一种控制量寻优策略。利用「第n圈控制残差对第n+1圈控制量影响显著、对第n+2圈影响通常超出阈值」的特性，仅以单步后的控制量最小为目标进行优化，避免多步预测带来的计算复杂度和累积误差。
keywords: 单步预测法, Single-Step Prediction Method, 轨道动力学, 控制理论, 数值仿真
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 单步预测法（Single-Step Prediction Method）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 单步预测法详解 | 术语定义
  description: 平动点轨道维持控制中的一种控制量寻优策略。利用「第n圈控制残差对第n+1圈控制量影响显著、对第n+2圈影响通常超出阈值」的特性，仅以单步后的控制量最小为目标进行优化，避免多步预测带来的计算复杂度和累积误差。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 单步预测法详解 | 术语定义
  description: 平动点轨道维持控制中的一种控制量寻优策略。利用「第n圈控制残差对第n+1圈控制量影响显著、对第n+2圈影响通常超出阈值」的特性，仅以单步后的控制量最小为目标进行优化，避免多步预测带来的计算复杂度和累积误差。
  image: /logo.png
permalink: /glossary/dynamics/single-step-prediction-method/
---

# 单步预测法（Single-Step Prediction Method）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

平动点轨道维持控制中的一种控制量寻优策略。利用「第n圈控制残差对第n+1圈控制量影响显著、对第n+2圈影响通常超出阈值」的特性，仅以单步后的控制量最小为目标进行优化，避免多步预测带来的计算复杂度和累积误差。

## 应用价值

单步预测法涉及地月空间航天器的运动特性分析和控制问题。在实际任务设计中，利用该方法可以分析轨道稳定性、计算控制策略，或评估摄动因素对轨道的影响，为任务安全性和可靠性提供保障。

## 相关概念

- 遭遇区域（Encounter Region）
- [相对论效应修正（Relativistic Correction）](/glossary/dynamics/relativistic-correction/)
- [直接飞越转移（Direct Fly-By Transfer, DFBT）](/glossary/dynamics/dfbt/)
- [安全转移编队（Safe Transfer Formation）](/glossary/dynamics/safe-transfer-formation/)

## 参考文献

- 梁伟光 等, 2017, 深空探测学报, 4(2): 166-170
