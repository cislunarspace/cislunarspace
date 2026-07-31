---
title: 树置信上界（Upper Confidence Bounds Applied to Trees, UCT）
description: 蒙特卡洛树搜索中用于平衡探索与利用的树策略。形式为U(s,a) = Q(s,a) + C*sqrt(ln(N(s))/N(s,a))，其中Q为动作价值估计，N(s)和N(s,a)为访问计数，C为探索常数。MO-MCTS中将Q(s,a)替换为HVI以处理多目标情形。
keywords: 树置信上界, Upper Confidence Bounds Applied to Trees, UCT, UCT, 轨道设计, 最优控制, 动力学建模
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 树置信上界（Upper Confidence Bounds Applied to Trees, UCT）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 树置信上界详解 | 术语定义
  description: 蒙特卡洛树搜索中用于平衡探索与利用的树策略。形式为U(s,a) = Q(s,a) + C*sqrt(ln(N(s))/N(s,a))，其中Q为动作价值估计，N(s)和N(s,a)为访问计数，C为探索常数。MO-MCTS中将Q(s,a)替换为HVI以处理多目标情形。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 树置信上界详解 | 术语定义
  description: 蒙特卡洛树搜索中用于平衡探索与利用的树策略。形式为U(s,a) = Q(s,a) + C*sqrt(ln(N(s))/N(s,a))，其中Q为动作价值估计，N(s)和N(s,a)为访问计数，C为探索常数。MO-MCTS中将Q(s,a)替换为HVI以处理多目标情形。
  image: /logo.png
permalink: /glossary/dynamics/upper-confidence-bounds-applied-to-trees-uct/
---

# 树置信上界（Upper Confidence Bounds Applied to Trees, UCT）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

蒙特卡洛树搜索中用于平衡探索与利用的树策略。形式为U(s,a) = Q(s,a) + C*sqrt(ln(N(s))/N(s,a))，其中Q为动作价值估计，N(s)和N(s,a)为访问计数，C为探索常数。MO-MCTS中将Q(s,a)替换为HVI以处理多目标情形。

## 应用价值

为状态估计提供概率框架，提高跟踪精度 该概念为地月空间任务设计提供了重要的理论基础 在实际工程中可用于轨道设计、任务规划或控制系统分析。

## 相关概念

- [对偶控制变换（Adjoint-Control Transformation）](/glossary/dynamics/adjoint-control-transformation/)
- [贝叶斯压缩感知（Bayesian Compressive Sensing）](/glossary/dynamics/bayesian-compressive-sensing/)
- [Lyapunov轨道（Lyapunov Orbit）](/glossary/orbits/lyapunov-orbit/)
- [状态转移矩阵（State Transition Matrix）](/glossary/dynamics/state-transition-matrix/)

## 参考文献

- Klonowski 等 - 2024 - Cislunar space domain awareness architecture design and analysis for cooperative agents
