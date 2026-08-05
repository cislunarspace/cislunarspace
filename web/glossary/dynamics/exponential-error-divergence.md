---
title: 误差指数发散（Exponential Error Divergence）
description: 共线平动点附近轨道误差随时间按指数规律增长的现象，即误差范数满足 ||ΔX|| ~ ||ΔX₀|| · e^(δT)，其中 δ 为发散率常数，T 为预报时间。这是平动点轨道不稳定性的直接表现，几十米的初始位置误差在十天左右可发散至几十千米量级。
keywords: 误差指数发散, Exponential Error Divergence, 轨道动力学, 控制理论, 最优控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 误差指数发散（Exponential Error Divergence）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 误差指数发散详解 | 术语定义
  description: 共线平动点附近轨道误差随时间按指数规律增长的现象，即误差范数满足 ||ΔX|| ~ ||ΔX₀|| · e^(δT)，其中 δ 为发散率常数，T 为预报时间。这是平动点轨道不稳定性的直接表现，几十米的初始位置误差在十天左右可发散至几十千米量级。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 误差指数发散详解 | 术语定义
  description: 共线平动点附近轨道误差随时间按指数规律增长的现象，即误差范数满足 ||ΔX|| ~ ||ΔX₀|| · e^(δT)，其中 δ 为发散率常数，T 为预报时间。这是平动点轨道不稳定性的直接表现，几十米的初始位置误差在十天左右可发散至几十千米量级。
  image: /logo.png
permalink: /glossary/dynamics/exponential-error-divergence/
---

# 误差指数发散（Exponential Error Divergence）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

共线平动点附近轨道误差随时间按指数规律增长的现象，即误差范数满足 ||ΔX|| ~ ||ΔX₀|| · e^(δT)，其中 δ 为发散率常数，T 为预报时间。这是平动点轨道不稳定性的直接表现，几十米的初始位置误差在十天左右可发散至几十千米量级。

## 应用价值

在轨道设计和转移轨道优化中，该方法用于确定最优转移时机和轨道形状，以最小化燃料消耗或飞行时间。通过数值仿真和迭代优化，可获得满足任务约束的可行轨道方案。

## 相关概念

- [Hill 模型（Hill Model）](/glossary/dynamics/hill-model/)
- [惯性坐标系固定编队（Formation Fixed Relative to Inertial Frame）](/glossary/dynamics/formation-fixed-relative-to-inertial-frame/)
- [受摄Lambert问题（Perturbational Lambert Problem）](/glossary/dynamics/perturbational-lambert-problem/)
- [探测器定位（Probe Targeting）](/glossary/dynamics/probe-targeting/)

## 参考文献

- 邓辉 等 - 2017 - 地月系共线平动点探测器的星上轨道预报问题
