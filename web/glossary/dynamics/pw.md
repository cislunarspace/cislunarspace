---
title: 渐进扩展（Progressive Widening, PW）
description: 一种用于控制蒙特卡洛树搜索分支因子的启发式方法。通过使每个节点的可用动作数随访问次数j按 k = ceil(C * j^alpha) 增长，在搜索初期约束分支以到达深层状态，随后逐步扩展以提高解的多样性。
keywords: 渐进扩展, Progressive Widening, PW, PW, 地月空间, cislunar
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 渐进扩展（Progressive Widening, PW）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 渐进扩展详解 | 术语定义
  description: 一种用于控制蒙特卡洛树搜索分支因子的启发式方法。通过使每个节点的可用动作数随访问次数j按 k = ceil(C * j^alpha) 增长，在搜索初期约束分支以到达深层状态，随后逐步扩展以提高解的多样性。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 渐进扩展详解 | 术语定义
  description: 一种用于控制蒙特卡洛树搜索分支因子的启发式方法。通过使每个节点的可用动作数随访问次数j按 k = ceil(C * j^alpha) 增长，在搜索初期约束分支以到达深层状态，随后逐步扩展以提高解的多样性。
  image: /logo.png
permalink: /glossary/dynamics/pw/
---

# 渐进扩展（Progressive Widening, PW）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种用于控制蒙特卡洛树搜索分支因子的启发式方法。通过使每个节点的可用动作数随访问次数j按 k = ceil(C * j^alpha) 增长，在搜索初期约束分支以到达深层状态，随后逐步扩展以提高解的多样性。

## 应用价值

渐进扩展在轨道力学和任务规划中具有重要作用，可用于分析航天器的运动特性和优化转移轨道。

## 相关概念

- [利差点轨道（Libration Point Orbit）](/glossary/orbits/lpo/)
- [状态转移矩阵（State Transition Matrix）](/glossary/dynamics/stm/)
- [六自由度（Six-Degree-of-Freedom）](/glossary/fundamentals/6-dof/)
- [高斯伪谱法（Gauss Pseudospectral Method）](/glossary/dynamics/gpm/)

## 参考文献

Klonowski 等 - 2024 - Cislunar space domain awareness architecture design and analysis for cooperative agents
