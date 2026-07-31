---
title: 稀疏非线性规划（Sparse Nonlinear Programming）
description: 一种大规模非线性规划求解方法，利用问题中约束和目标函数梯度的稀疏结构来提高计算效率。在轨迹优化中，稀疏性来源于每个时间段局部变量只与局部约束相关，使得大型稀疏NLP问题能够通过稀疏序列二次规划（SQP）有效求解。该方法被用于求解超过21万个变量和14万个约束的低推力转移轨迹优化问题。
keywords: 稀疏非线性规划, Sparse Nonlinear Programming, Sparse NLP, 轨道动力学, 控制理论, 最优控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 稀疏非线性规划（Sparse Nonlinear Programming）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 稀疏非线性规划详解 | 术语定义
  description: 一种大规模非线性规划求解方法，利用问题中约束和目标函数梯度的稀疏结构来提高计算效率。在轨迹优化中，稀疏性来源于每个时间段局部变量只与局部约束相关，使得大型稀疏NLP问题能够通过稀疏序列二次规划（SQP）有效求解。该方法被用于求解超过21万个变量和14万个约束的低推力转移轨迹优化问题。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 稀疏非线性规划详解 | 术语定义
  description: 一种大规模非线性规划求解方法，利用问题中约束和目标函数梯度的稀疏结构来提高计算效率。在轨迹优化中，稀疏性来源于每个时间段局部变量只与局部约束相关，使得大型稀疏NLP问题能够通过稀疏序列二次规划（SQP）有效求解。该方法被用于求解超过21万个变量和14万个约束的低推力转移轨迹优化问题。
  image: /logo.png
permalink: /glossary/dynamics/sparse-nonlinear-programming/
---

# 稀疏非线性规划（Sparse Nonlinear Programming）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种大规模非线性规划求解方法，利用问题中约束和目标函数梯度的稀疏结构来提高计算效率。在轨迹优化中，稀疏性来源于每个时间段局部变量只与局部约束相关，使得大型稀疏NLP问题能够通过稀疏序列二次规划（SQP）有效求解。该方法被用于求解超过21万个变量和14万个约束的低推力转移轨迹优化问题。

## 应用价值

稀疏非线性规划在轨道设计和轨迹优化中用于将连续控制问题离散化，通过非线性规划求解最优控制序列。 在地月空间任务中，该方法可应用于转移轨道设计、轨道维持和再入轨迹规划等关键环节。 利用该方法可以降低计算复杂度，提高收敛速度，适合在轨自主制导应用。

## 相关概念

- [控制参数化（Control Parametrization）](/glossary/dynamics/control-parametrization/)
- [推力器调制器（Thruster Modulator）](/glossary/dynamics/thruster-modulator/)
- [粒子群优化器（Particle Swarm Optimizer）](/glossary/dynamics/particle-swarm-optimizer/)
- [脉冲间隔（Impulse Interval）](/glossary/dynamics/impulse-interval/)

## 参考文献

- Betts and Erb, 2003, Optimal low thrust trajectories to the moon
