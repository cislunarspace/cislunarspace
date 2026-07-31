---
title: 渐进扩展（Progressive Widening, PW）
description: 一种用于控制蒙特卡洛树搜索分支因子的启发式方法。通过使每个节点的可用动作数随访问次数j按 k = ceil(C * j^alpha) 增长，在搜索初期约束分支以到达深层状态，随后逐步扩展以提高解的多样性。
keywords: 渐进扩展, Progressive Widening, PW, PW, 轨道动力学, 控制理论, 非线性控制, 最优控制
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
permalink: /glossary/dynamics/PW/
---

# 渐进扩展（Progressive Widening, PW）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种用于控制蒙特卡洛树搜索分支因子的启发式方法。通过使每个节点的可用动作数随访问次数j按 k = ceil(C * j^alpha) 增长，在搜索初期约束分支以到达深层状态，随后逐步扩展以提高解的多样性。

## 应用价值

树搜索算法中逐渐扩大搜索范围的策略，适合平衡探索与利用，提高全局搜索效率。

## 相关概念

- [规定性能控制（Prescribed Performance Control, PPC）](/glossary/dynamics/PPC/)
- [规定性能函数（Prescribed Performance Function, PPF）](/glossary/dynamics/PPF/)
- [动力下降制导（Powered Descent Guidance）](/glossary/dynamics/PDG/)
- [平面双圆限制性四体问题（Planar Bicircular Restricted Four-Body Problem）](/glossary/dynamics/PBR4BP/)

## 参考文献

- Klonowski 等 - 2024 - Cislunar space domain awareness architecture design and analysis for cooperative agents。
