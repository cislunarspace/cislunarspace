---
title: 状态约束（State Constraint）
description: 最优控制问题中限制状态变量（如位置、速度）而非控制变量的不等式约束。与控制约束不同，状态约束可能导致协态变量在约束激活/退出时刻发生跳跃（跳跃条件），使问题的理论分析和数值求解更加复杂。
keywords: 状态约束, State Constraint, 轨道, 动力学, 控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 状态约束（State Constraint）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 状态约束详解 | 术语定义
  description: 最优控制问题中限制状态变量（如位置、速度）而非控制变量的不等式约束。与控制约束不同，状态约束可能导致协态变量在约束激活/退出时刻发生跳跃（跳跃条件），使问题的理论分析和数值求解更加复杂。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 状态约束详解 | 术语定义
  description: 最优控制问题中限制状态变量（如位置、速度）而非控制变量的不等式约束。与控制约束不同，状态约束可能导致协态变量在约束激活/退出时刻发生跳跃（跳跃条件），使问题的理论分析和数值求解更加复杂。
  image: /logo.png
permalink: /glossary/dynamics/state-constraint/
---

# 状态约束（State Constraint）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

最优控制问题中限制状态变量（如位置、速度）而非控制变量的不等式约束。与控制约束不同，状态约束可能导致协态变量在约束激活/退出时刻发生跳跃（跳跃条件），使问题的理论分析和数值求解更加复杂。

## 应用价值

该控制方法在地月空间航天器姿态与轨道控制中具有重要应用价值。在实际任务中，需要根据具体应用场景和约束条件选择合适的分析方法。。

## 相关概念

- [保守系统（Conservative System）](/glossary/dynamics/conservative-system/)
- 空间流形动力学（Space Manifold Dynamics, SMD）
- [RSW坐标系（Radial-Transverse-Normal Frame, RSW Frame）](/glossary/dynamics/rsw/)

## 参考文献

- You and Dai, 2022, JGCD, doi:10.2514/1.G006815
