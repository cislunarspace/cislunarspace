---
title: Fixed-Time Fixed-Endpoint Transfer
description: 起点和终点均固定、转移时间给定的轨道转移问题。与自由时间转移不同，该问题中飞行时间不再自由，因此给定时间内可能对应多条椭圆转移轨道（取决于允许的圈数N），每条轨道对应不同的半长轴和速度增量消耗。本文通过引入辅助转移问题，将2N_max+1条候选轨道缩减至最多两条即可确定最优解。
keywords: 定时定端点转移, Fixed-Time Fixed-Endpoint Transfer, 轨道动力学, 三体问题, 平动点
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Fixed-Time Fixed-Endpoint Transfer
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Fixed-Time Fixed-Endpoint Transfer Explained | Term Definition
  description: 起点和终点均固定、转移时间给定的轨道转移问题。与自由时间转移不同，该问题中飞行时间不再自由，因此给定时间内可能对应多条椭圆转移轨道（取决于允许的圈数N），每条轨道对应不同的半长轴和速度增量消耗。本文通过引入辅助转移问题，将2N_max+1条候选轨道缩减至最多两条即可确定最优解。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Fixed-Time Fixed-Endpoint Transfer Explained | Term Definition
  description: 起点和终点均固定、转移时间给定的轨道转移问题。与自由时间转移不同，该问题中飞行时间不再自由，因此给定时间内可能对应多条椭圆转移轨道（取决于允许的圈数N），每条轨道对应不同的半长轴和速度增量消耗。本文通过引入辅助转移问题，将2N_max+1条候选轨道缩减至最多两条即可确定最优解。
  image: /logo.png
permalink: /en/glossary/dynamics/fixed-time-fixed-endpoint-transfer/
---

# Fixed-Time Fixed-Endpoint Transfer

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

An orbital transfer problem in which both endpoints and the transfer time are prescribed. Unlike free-time transfers, the flight time is fixed, so a given time may correspond to multiple elliptic transfer orbits (depending on the allowed number of revolutions N), each with a different semimajor axis and velocity increment cost. This paper introduces an auxiliary transfer problem to reduce the 2N_max+1 candidates to at most two for computing the optimal solution.

## Application Value

在定时定端点转移的分析中，可用于轨道传播和机动设计，帮助工程师评估航天器在不同动力学环境下的运动特性 该概念为地月空间任务设计提供了理论基础，尤其在平动点轨道设计和低能转移分析中具有重要应用价值 利用定时定端点转移进行轨迹优化，可以有效降低任务燃料消耗，提高任务经济效益 在任务设计中，定时定端点转移的分析有助于理解航天器在复杂引力场中的行为，指导轨道保持策略的制定

## Related Concepts

- [微分代数](/en/glossary/dynamics/微分代数/)
- [羽流冲击](/en/glossary/dynamics/羽流冲击/)
- [动量积分](/en/glossary/dynamics/动量积分/)

## References

- Shen和Tsiotras - 2003 - Optimal two-impulse rendezvous using multiple-revolution lambert solutions
