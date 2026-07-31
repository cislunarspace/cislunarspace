---
title: 控制触发条件（Control Trigger Condition）
description: 在轨道保持中，不执行机动而是将状态自由演化到未来某个时刻，检查预测状态与基准轨迹的偏差是否仍在容许范围内。若偏差在容许范围内则跳过本次机动。这种机制减少了不必要的推进消耗，使控制器在无显著扰动时保持静默。
keywords: 控制触发条件, Control Trigger Condition, 轨道动力学, 控制理论, 数值仿真
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 控制触发条件（Control Trigger Condition）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 控制触发条件详解 | 术语定义
  description: 在轨道保持中，不执行机动而是将状态自由演化到未来某个时刻，检查预测状态与基准轨迹的偏差是否仍在容许范围内。若偏差在容许范围内则跳过本次机动。这种机制减少了不必要的推进消耗，使控制器在无显著扰动时保持静默。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 控制触发条件详解 | 术语定义
  description: 在轨道保持中，不执行机动而是将状态自由演化到未来某个时刻，检查预测状态与基准轨迹的偏差是否仍在容许范围内。若偏差在容许范围内则跳过本次机动。这种机制减少了不必要的推进消耗，使控制器在无显著扰动时保持静默。
  image: /logo.png
permalink: /glossary/dynamics/control-trigger-condition/
---

# 控制触发条件（Control Trigger Condition）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

在轨道保持中，不执行机动而是将状态自由演化到未来某个时刻，检查预测状态与基准轨迹的偏差是否仍在容许范围内。若偏差在容许范围内则跳过本次机动。这种机制减少了不必要的推进消耗，使控制器在无显著扰动时保持静默。

## 应用价值

控制触发条件涉及地月空间航天器的运动特性分析和控制问题。在实际任务设计中，利用该方法可以分析轨道稳定性、计算控制策略，或评估摄动因素对轨道的影响，为任务安全性和可靠性提供保障。

## 相关概念

- [遭遇区域（Encounter Region）](/glossary/dynamics/encounter-region/)
- [相对论效应修正（Relativistic Correction）](/glossary/dynamics/relativistic-correction/)
- [直接飞越转移（Direct Fly-By Transfer, DFBT）](/glossary/dynamics/direct-fly-by-transfer-dfbt/)
- [安全转移编队（Safe Transfer Formation）](/glossary/dynamics/safe-transfer-formation/)

## 参考文献

- Shimane 等 - 2025 - Revolution-spaced output-feedback model predictive control for station keeping on near-rectilinear halo orbits
