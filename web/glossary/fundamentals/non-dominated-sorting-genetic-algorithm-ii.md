---
title: 非劣排序遗传算法II（Non-Dominated Sorting Genetic Algorithm II）
description: 一种高效的多目标进化算法，通过快速非支配排序将种群分为多层，用拥挤距离度量解的多样性并采用精英保留策略。在小推力轨迹多目标优化中用于在速度增量和飞行时间两个竞争目标之间生成帕累托前沿。
keywords: 非劣排序遗传算法II, Non-Dominated Sorting Genetic Algorithm II, NSGA-II, 基础概念, 推进, 轨道力学
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 非劣排序遗传算法II（Non-Dominated Sorting Genetic Algorithm II）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 非劣排序遗传算法II（Non-Dominated Sorting Genetic Algorithm II）详解 | 术语定义
  description: 一种高效的多目标进化算法，通过快速非支配排序将种群分为多层，用拥挤距离度量解的多样性并采用精英保留策略。在小推力轨迹多目标优化中用于在速度增量和飞行时间两个竞争目标之间生成帕累托前沿。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 非劣排序遗传算法II（Non-Dominated Sorting Genetic Algorithm II）详解 | 术语定义
  description: 一种高效的多目标进化算法，通过快速非支配排序将种群分为多层，用拥挤距离度量解的多样性并采用精英保留策略。在小推力轨迹多目标优化中用于在速度增量和飞行时间两个竞争目标之间生成帕累托前沿。
  image: /logo.png
permalink: /glossary/fundamentals/non-dominated-sorting-genetic-algorithm-ii/
---

# 非劣排序遗传算法II（Non-Dominated Sorting Genetic Algorithm II）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种高效的多目标进化算法，通过快速非支配排序将种群分为多层，用拥挤距离度量解的多样性并采用精英保留策略。在小推力轨迹多目标优化中用于在速度增量和飞行时间两个竞争目标之间生成帕累托前沿。

## 应用价值

在低推力轨道优化中，最小时间轨迹作为前置步骤，先确定最短飞行时间，再将其作为最小燃料问题的终端时间约束。这种分层优化策略大幅降低了多目标轨迹设计的计算复杂度。

## 相关概念

- [定时定点着陆（Scheduled and Pinpoint Landing）](/glossary/fundamentals/scheduled-and-pinpoint-landing/)
- [截面（Surface of Section, SOS）](/glossary/fundamentals/surface-of-section-sos/)
- [截断策略（Truncation Strategy）](/glossary/fundamentals/truncation-strategy/)

## 参考文献

- Vellutini & Avanzini, 2014, Shape-based design of low-thrust trajectories to cislunar lagrangian point
