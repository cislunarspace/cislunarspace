---
title: 多重打靶差分动态规划（Multiple-Shooting Differential Dynamic Programming, MDDP）
description: 将多相轨迹分解为多个独立相段、各自运行 HDDP 迭代的优化框架。与多相 HDDP 中全轨迹导数耦合不同，MDDP 在每次迭代中先独立优化各相段，再通过外层信赖域步骤更新各相段的初始状态和目标状态，从而将引力辅助等敏感段的影响限制在本相段内。各相段可并行计算，适合含多个引力辅助或复杂机动的长周期轨迹。
keywords: 多重打靶差分动态规划, Multiple-Shooting Differential Dynamic Programming, MDDP, MDDP, dynamics
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 多重打靶差分动态规划（Multiple-Shooting Differential Dynamic Programming, MDDP）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 多重打靶差分动态规划详解 | 术语定义
  description: 将多相轨迹分解为多个独立相段、各自运行 HDDP 迭代的优化框架。与多相 HDDP 中全轨迹导数耦合不同，MDDP 在每次迭代中先独立优化各相段，再通过外层信赖域步骤更新各相段的初始状态和目标状态，从而将引力辅助等敏感段的影响限制在本相段内。各相段可并行计算，适合含多个引力辅助或复杂机动的长周期轨迹。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 多重打靶差分动态规划详解 | 术语定义
  description: 将多相轨迹分解为多个独立相段、各自运行 HDDP 迭代的优化框架。与多相 HDDP 中全轨迹导数耦合不同，MDDP 在每次迭代中先独立优化各相段，再通过外层信赖域步骤更新各相段的初始状态和目标状态，从而将引力辅助等敏感段的影响限制在本相段内。各相段可并行计算，适合含多个引力辅助或复杂机动的长周期轨迹。
  image: /logo.png
permalink: /glossary/dynamics/mddp/
---

# 多重打靶差分动态规划（Multiple-Shooting Differential Dynamic Programming, MDDP）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

将多相轨迹分解为多个独立相段、各自运行 HDDP 迭代的优化框架。与多相 HDDP 中全轨迹导数耦合不同，MDDP 在每次迭代中先独立优化各相段，再通过外层信赖域步骤更新各相段的初始状态和目标状态，从而将引力辅助等敏感段的影响限制在本相段内。各相段可并行计算，适合含多个引力辅助或复杂机动的长周期轨迹。

## 应用价值

多重打靶差分动态规划方法在地月空间任务规划中用于求解大规模优化问题，能够在多约束条件下找到满足任务需求的解决方案。

## 相关概念

- [混合差分动态规划（Hybrid Differential Dynamic Programming, HDDP）](/glossary/dynamics/hddp/)
- [差分动态规划（Differential Dynamic Programming, DDP）](/glossary/dynamics/ddp/)

## 参考文献

- Pellegrini & Russell 2017, AAS 17-453; Aziz et al. 2019, JGCD。
