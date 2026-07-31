---
title: 转移时间遍历（Transfer Time Traversal）
description: NRHO调相优化中的一种搜索策略：在最大转移时间范围内取多个等间隔时间点，对每个时间点分别求解最优脉冲，得到速度增量随转移时间的分布。由此确定最优转移模式和近似最优解区间，避免了全局搜索的高计算开销。
keywords: 转移时间遍历, Transfer Time Traversal, 动力学, 摄动, 轨道
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 转移时间遍历（Transfer Time Traversal）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 转移时间遍历详解 | 术语定义
  description: NRHO调相优化中的一种搜索策略：在最大转移时间范围内取多个等间隔时间点，对每个时间点分别求解最优脉冲，得到速度增量随转移时间的分布。由此确定最优转移模式和近似最优解区间，避免了全局搜索的高计算开销。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 转移时间遍历详解 | 术语定义
  description: NRHO调相优化中的一种搜索策略：在最大转移时间范围内取多个等间隔时间点，对每个时间点分别求解最优脉冲，得到速度增量随转移时间的分布。由此确定最优转移模式和近似最优解区间，避免了全局搜索的高计算开销。
  image: /logo.png
permalink: /glossary/dynamics/transfer-time-traversal/
---

# 转移时间遍历（Transfer Time Traversal）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

NRHO调相优化中的一种搜索策略：在最大转移时间范围内取多个等间隔时间点，对每个时间点分别求解最优脉冲，得到速度增量随转移时间的分布。由此确定最优转移模式和近似最优解区间，避免了全局搜索的高计算开销。

## 应用价值

基于该术语在定义中描述的功能或性质，该术语在地月空间任务设计、分析与控制中具有重要应用价值。在轨道设计阶段，可利用相关动力学特性进行转移轨道优化；在导航与控制中，可用于提高任务执行的精度和可靠性；在系统分析中，有助于深入理解复杂的多体动力学行为，指导任务方案论证和风险评估。

## 相关概念

- [J2不变量轨道（J2-Invariant Orbit）](/glossary/dynamics/j2-invariant-orbit/)
- [内点法优化（Interior Point Optimization）](/glossary/dynamics/interior-point-optimization/)
- [n体动力学（N-Body Dynamics）](/glossary/dynamics/n-body-dynamics/)
- [始末状态约束（Start-End State Constraint）](/glossary/dynamics/start-end-state-constraint/)

## 参考文献

- Li et al., 2026, Chinese Journal of Space Science, 46(1):175-188
