---
title: 深度确定性策略梯度（Deep Deterministic Policy Gradient, DDPG）
description: 详细解析DDPG算法的定义、Actor-Critic架构、经验回放机制及其在航天器轨道优化中的应用
keywords: 深度确定性策略梯度, DDPG, Actor-Critic, 强化学习, 策略梯度, 轨道优化, 航天器控制
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 深度确定性策略梯度（DDPG）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: DDPG算法详解 | 深度强化学习在轨道优化中的应用
  description: 详细解析DDPG算法的定义、Actor-Critic架构、经验回放机制及其在航天器轨道优化中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: DDPG算法详解 | 深度强化学习在轨道优化中的应用
  description: 详细解析DDPG算法的定义、Actor-Critic架构、经验回放机制及其在航天器轨道优化中的应用
  image: /logo.png
permalink: /glossary/dynamics/ddpg/
---

# 深度确定性策略梯度（Deep Deterministic Policy Gradient, DDPG）

> 本文作者：天疆说
>
> 参编单位：哈尔滨工业大学航天学院、微小型航天器快速设计与智能集群全国重点实验室
>
> 参考文献：关宇同等. 面向航天器远距离协同交会的超参数自主调优-同伦方法[J]. 航天器环境工程, 2026.

## 定义

深度确定性策略梯度（Deep Deterministic Policy Gradient, DDPG）是一种结合 Actor-Critic 框架和经验回放机制的深度强化学习算法，由 Lillicrap 等于 2015 年提出。DDPG 适用于连续动作空间的强化学习任务，能够学习确定性策略，被广泛应用于机器人控制、航天器轨道优化等领域。

## 算法架构

DDPG 采用 Actor-Critic 双网络结构：

- **Actor 网络** $\mu(s|\theta^\mu)$：给定状态 $s$，输出确定性动作 $a$
- **Critic 网络** $Q(s,a|\theta^Q)$：评估状态-动作对的价值
- **Target-Actor 网络** $\mu'(s|\theta^{\mu')$：稳定训练
- **Target-Critic 网络** $Q'(s,a|\theta^{Q')$：稳定训练

### 核心公式

Critic 网络的损失函数：

$$L(\theta^Q) = \mathbb{E}\left[\left(r + \gamma Q'(s',a'|\theta^{Q'}) - Q(s,a|\theta^Q)\right)^2\right]$$

Actor 网络的梯度：

$$\nabla_{\theta^\mu} J \approx \nabla_a Q(s,a|\theta^Q)|_{a=\mu(s)} \nabla_{\theta^\mu}\mu(s|\theta^\mu)$$

## 在轨道优化中的应用

在航天器协同交会问题中，DDPG 被用于超参数自主调优：

1. **状态设计**：停滞时刻、持续时长、迭代进度、粒子分布离散度、粒子分布方向
2. **动作输出**：HCPSO 的惯性权值、加速因子等超参数
3. **奖励函数**：基于全局最优适应度与当前适应度之差设计

### 赵海涵等（2026）的应用

赵海涵等将 DDPG 与混合聚类粒子群算法（HCPSO）结合，形成强化学习增强粒子群算法（RLEPSO），用于：

- 协同交会燃料最优问题的初始协态优化
- 超参数根据粒子搜索情况自主动态调优
- 提高优化算法的可搜索性和收敛速度

## 相关概念

- [粒子群优化（PSO）](/glossary/dynamics/particle-swarm-optimization/)
- [混合聚类粒子群优化（HCPSO）](/glossary/dynamics/hcpso/)
- [强化学习增强粒子群（RLEPSO）](/glossary/dynamics/rlepeso/)
- [同伦法（Homotopy Method）](/glossary/dynamics/homotopy-method/)

## 参考文献

- Lillicrap T P, et al. Continuous control with deep reinforcement learning[J]. arXiv:1509.02971, 2015.
- 关宇同, 高长生, 胡玉东, 赵海涵. 面向航天器远距离协同交会的超参数自主调优-同伦方法[J]. 航天器环境工程, 2026.
