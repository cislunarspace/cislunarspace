---
title: 共线奇异性（Collinear Singularity）
description: 当初始与最终位置向量共线时，Lambert问题中速度向量不确定、运动平面无法确定的病态现象。
keywords: 共线奇异性, Collinear Singularity, Lambert问题, 奇异性, 轨道机动
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 共线奇异性（Collinear Singularity）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 共线奇异性详解 | 术语定义
  description: 当初始与最终位置向量共线时，Lambert问题中速度向量不确定、运动平面无法确定的病态现象。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 共线奇异性详解 | 术语定义
  description: 当初始与最终位置向量共线时，Lambert问题中速度向量不确定、运动平面无法确定的病态现象。
  image: /logo.png
permalink: /glossary/dynamics/collinear-singularity/
---

# 共线奇异性（Collinear Singularity）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

当初始与最终位置向量共线时，Lambert问题中速度向量不确定、运动平面无法确定的病态现象。

## 应用价值

在轨道转移设计中，Lambert问题是求解两点之间最优转移轨道的核心数学工具。然而当出发位置和目标位置恰好共线时，标准的 Lambert 求解器会失效，速度矢量变得不确定。在实际任务中，这意味着需要避开这些奇异构型，可以通过小幅调整转移时间或选择不同的中途点来规避。该现象也提醒轨道设计者，在使用 Lambert 工具进行转移轨道计算时，应当检查输入构型是否接近共线奇异点，必要时采用正则化方法或数值规避策略。

## 相关概念

- [ Lambert 轨道变轨（Lambert Orbit Maneuver）](/glossary/dynamics/lambert-orbit-maneuver/)
- [轨道转移（Orbital Transfer）](/glossary/dynamics/orbital-transfer/)
- [双脉冲交会机动（Two-Impulse Rendezvous Maneuver）](/glossary/dynamics/two-impulse-rendezvous-maneuver/)
- [共轨交会（Co-Orbital Rendezvous）](/glossary/dynamics/co-orbital-rendezvous/)

## 参考文献

- Uncertain Lambert Problem
