---
title: 滚动时域靶向法（Receding Horizon Targeting）
description: 在星历模型中构造长周期标称轨道的数值方法。将长时间积分分解为若干短时间段，在每个时间段内进行靶向修正，逐段推进以维持轨道精度。适合处理如 NRHO 这类需要数年时长标称轨道、但直接差分修正难以收敛的情况。代价是各段之间存在微小速度不连续（每圈约 1 毫米/秒量级）。
keywords: 滚动时域靶向法, Receding Horizon Targeting, RHT, 轨道力学, 三体问题, 非线性动力学, 轨道稳定性
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 滚动时域靶向法（Receding Horizon Targeting）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 滚动时域靶向法详解 | 术语定义
  description: 在星历模型中构造长周期标称轨道的数值方法。将长时间积分分解为若干短时间段，在每个时间段内进行靶向修正，逐段推进以维持轨道精度。适合处理如 NRHO 这类需要数年时长标称轨道、但直接差分修正难以收敛的情况。代价是各段之间存在微小速度不连续（每圈约 1 毫米/秒量级）。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 滚动时域靶向法详解 | 术语定义
  description: 在星历模型中构造长周期标称轨道的数值方法。将长时间积分分解为若干短时间段，在每个时间段内进行靶向修正，逐段推进以维持轨道精度。适合处理如 NRHO 这类需要数年时长标称轨道、但直接差分修正难以收敛的情况。代价是各段之间存在微小速度不连续（每圈约 1 毫米/秒量级）。
  image: /logo.png
permalink: /glossary/dynamics/receding-horizon-targeting/
---

# 滚动时域靶向法（Receding Horizon Targeting）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

在星历模型中构造长周期标称轨道的数值方法。将长时间积分分解为若干短时间段，在每个时间段内进行靶向修正，逐段推进以维持轨道精度。适合处理如 NRHO 这类需要数年时长标称轨道、但直接差分修正难以收敛的情况。代价是各段之间存在微小速度不连续（每圈约 1 毫米/秒量级）。

## 应用价值

滚动时域靶向法是一种实时制导方法，通过滚动时域优化确定最优控制序列。在月球着陆等关键阶段，滚动时域靶向法可以在线生成满足约束的制导指令，是实现自主制导的关键技术。

## 相关概念

- [雅可比常数（Jacobi Constant, JC）](/glossary/dynamics/jacobi-constant-jc/)
- [希尔区域（Hill Region）](/glossary/fundamentals/hill-region/)
- [庞加莱映射（Poincaré Map）](/glossary/dynamics/poincar-map/)
- [稳定性（Stability）](/glossary/dynamics/stability/)
## 参考文献

- Zhang et al., 2022
- Williams et al., 2017
