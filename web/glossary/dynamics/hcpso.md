---
title: 混合聚类粒子群优化（Hybrid Cluster Particle Swarm Optimization, HCPSO）
description: 详细解析HCPSO算法的定义、双策略更新机制、聚类机制及在轨道设计中的应用
keywords: 混合聚类粒子群优化, HCPSO, 粒子群优化, PSO, 聚类机制, 全局搜索, 轨道优化, 航天器控制
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 混合聚类粒子群优化（HCPSO）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: HCPSO算法详解 | 混合聚类粒子群优化
  description: 详细解析HCPSO算法的定义、双策略更新机制、聚类机制及在轨道设计中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: HCPSO算法详解 | 混合聚类粒子群优化
  description: 详细解析HCPSO算法的定义、双策略更新机制、聚类机制及在轨道设计中的应用
  image: /logo.png
permalink: /glossary/dynamics/hcpso/
---

# 混合聚类粒子群优化（Hybrid Cluster Particle Swarm Optimization, HCPSO）

> 本文作者：天疆说
>
> 参编单位：哈尔滨工业大学航天学院、微小型航天器快速设计与智能集群全国重点实验室
>
> 参考文献：关宇同等. 面向航天器远距离协同交会的超参数自主调优-同伦方法[J]. 航天器环境工程, 2026.

## 定义

混合聚类粒子群优化（Hybrid Cluster Particle Swarm Optimization, HCPSO）是一种改进的粒子群优化算法，通过引入聚类机制和双策略更新策略提高全局搜索能力。HCPSO 将粒子群分为多个子种群，每个子种群独立搜索并在一定条件下共享信息，有效避免了标准 PSO 容易陷入局部最优的问题。

## 核心原理

### 双策略速度更新

HCPSO 维护两组速度更新策略：

**策略一**（基于全局最优）：
$$v'(\Gamma+1) = \omega_1 v(\Gamma) + c_{11}\Lambda_1(p(\Gamma) - \sigma(\Gamma)) + c_{12}\Lambda_2(p_g(\Gamma) - \sigma(\Gamma))$$

**策略二**（基于子种群最优）：
$$v''(\Gamma+1) = \omega_2 v(\Gamma) + c_{21}\Lambda_1(p(\Gamma) - \sigma(\Gamma)) + c_{22}\Lambda_2(p_1(\Gamma) - \sigma(\Gamma))$$

**融合更新**：
$$v(\Gamma+1) = \mu_q v'(\Gamma+1) + (1-\mu_q)v''(\Gamma+1)$$

### 选择概率机制

根据选择概率 $p_s$ 在两种策略间切换：
$$v(\Gamma+1) = \begin{cases} v'(\Gamma+1), & \text{rand} < p_s \\ v''(\Gamma+1), & \text{rand} \geq p_s \end{cases}$$

## 在轨道优化中的应用

在航天器协同交会问题中，HCPSO 被用于求解能量最优问题的初始协态。与标准 PSO 相比，HCPSO 具有更强的全局搜索能力，能够更有效地找到高质量的初始协态解。

### 赵海涵等（2026）的应用

赵海涵等将 HCPSO 与 DDPG 深度强化学习结合，形成 RLEPSO 算法，实现算法参数的自主动态调优，显著提高了收敛速度和求解质量。

## 相关概念

- [粒子群优化（PSO）](/glossary/dynamics/particle-swarm-optimization/)
- [差分进化算法（DE）](/glossary/dynamics/differential-evolution/)
- [深度确定性策略梯度（DDPG）](/glossary/dynamics/ddpg/)
- [强化学习增强粒子群（RLEPSO）](/glossary/dynamics/rlepeso/)

## 参考文献

- 关宇同, 高长生, 胡玉东, 赵海涵. 面向航天器远距离协同交会的超参数自主调优-同伦方法[J]. 航天器环境工程, 2026.
- Kennedy J, Eberhart R. Particle swarm optimization[C]. IEEE International Conference on Neural Networks, 1995.
