---
title: 滚动时域靶向法（Receding Horizon Targeting）
description: 在星历模型中构造长周期标称轨道的数值方法。将长时间积分分解为若干短时间段，在每个时间段内进行靶向修正，逐段推进以维持轨道精度。适合处理如 NRHO 这类需要数年时长标称轨道、但直接差分修正难以收敛的情况。代价是各段之间存在微小速度不连续（每圈约 1 毫米/秒量级）。
keywords: 滚动时域靶向法, Receding Horizon Targeting, RHT, dynamics
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
permalink: /glossary/dynamics/rht/
---

# 滚动时域靶向法（Receding Horizon Targeting）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

在星历模型中构造长周期标称轨道的数值方法。将长时间积分分解为若干短时间段，在每个时间段内进行靶向修正，逐段推进以维持轨道精度。适合处理如 NRHO 这类需要数年时长标称轨道、但直接差分修正难以收敛的情况。代价是各段之间存在微小速度不连续（每圈约 1 毫米/秒量级）。

## 应用价值

该术语在地月空间任务规划与执行中具有重要应用价值。

## 相关概念

- [隐藏基因遗传算法（Hidden-Genes Genetic Algorithm, HGGA）](/glossary/fundamentals/hidden-genes-genetic-algorithm/)
- 变长设计空间（Variable-Size Design Space, VSDS）
- [驻留维持（Station-Keeping）](/glossary/dynamics/station-keeping/)
- 目标点法（Target Point Method）

## 参考文献

- Zhang et al., 2022
- Williams et al., 2017
