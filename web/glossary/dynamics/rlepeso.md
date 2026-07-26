---
title: 强化学习增强粒子群（Reinforced Learning Enhanced Particle Swarm Optimization, RLEPSO）
description: 详细解析RLEPSO算法的定义、DDPG增强机制、状态动作设计及在航天器协同交会中的应用
keywords: 强化学习增强粒子群, RLEPSO, DDPG, HCPSO, 超参数调优, 粒子群优化, 协同交会, 燃料最优
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 强化学习增强粒子群（RLEPSO）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: RLEPSO算法详解 | 超参数自主调优粒子群
  description: 详细解析RLEPSO算法的定义、DDPG增强机制、状态动作设计及在航天器协同交会中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: RLEPSO算法详解 | 超参数自主调优粒子群
  description: 详细解析RLEPSO算法的定义、DDPG增强机制、状态动作设计及在航天器协同交会中的应用
  image: /logo.png
permalink: /glossary/dynamics/rlepeso/
---

# 强化学习增强粒子群（Reinforced Learning Enhanced Particle Swarm Optimization, RLEPSO）

> 本文作者：天疆说
>
> 参编单位：哈尔滨工业大学航天学院、微小型航天器快速设计与智能集群全国重点实验室
>
> 参考文献：关宇同等. 面向航天器远距离协同交会的超参数自主调优-同伦方法[J]. 航天器环境工程, 2026.

## 定义

强化学习增强粒子群（Reinforced Learning Enhanced Particle Swarm Optimization, RLEPSO）是将深度确定性策略梯度（DDPG）与混合聚类粒子群优化（HCPSO）相结合的混合优化算法。RLEPSO 利用 DDPG 的 Actor 网络根据粒子搜索状态自主动态调整 HCPSO 的超参数，实现了算法参数的自主调优，显著提高了优化算法的可搜索性和收敛速度。

## 核心原理

### 算法架构

RLEPSO 在 HCPSO 基础上嵌入 DDPG 框架：

1. **初始化**：设置 HCPSO 初始参数，建立 DDPG 的 Actor-Critic 网络
2. **状态感知**：根据当前迭代状态计算状态量（停滞时刻、持续时长、迭代进度、粒子分布离散度、粒子分布方向）
3. **动作输出**：Actor 网络输出超参数调整动作
4. **参数更新**：将动作解码为 HCPSO 的惯性权值、加速因子等参数
5. **经验回放**：存储经验样本用于训练 Critic 网络
6. **迭代优化**：重复步骤 2-5 直到收敛

### 状态设计

RLEPSO 使用的状态量包括：

| 状态量 | 定义 | 物理意义 |
| :--- | :--- | :--- |
| $T_{stop}$ | 停滞开始时刻 | 检测算法是否停滞 |
| $T_{dur}$ | 停滞持续时长 | 评估停滞严重程度 |
| $T_{run}$ | 迭代进度 | 当前迭代与最大迭代的比值 |
| $D_s$ | 粒子分布离散度 | 表征粒子聚集程度 |
| $D_r$ | 粒子分布方向 | 表征粒子分布的方向特性 |

### 动作与奖励

**动作**：Actor 网络输出 16 维动作向量，解码为 8 个 HCPSO 超参数（$\omega_1, c_{11}, c_{12}, \mu_q, \omega_2, c_{21}, c_{22}, p_s$）

**奖励函数**：
$$r = \tanh\left((f_g - f_c) \cdot T_{run}\right)$$

其中 $f_g$ 为全局最优适应度，$f_c$ 为当前代最优适应度。

## 在航天器协同交会中的应用

赵海涵等（2026）将 RLEPSO 与同伦法结合，用于求解 J₂ 摄动下远距离航天器协同交会的燃料最优问题：

1. **能量最优求解**：RLEPSO 快速获得高质量初始协态
2. **同伦过渡**：从能量最优平滑过渡到燃料最优
3. **结果**：相较于 PSO 和 HCPSO，RLEPSO 获得更高质量的初始协态，收敛速度更快

### 仿真结果

| 参数 | RLEPSO-同伦 | 同伦-SQP耦合 |
| :--- | :--- | :--- |
| 燃料消耗 | 205.40 kg | 210.36 kg |
| 交会时间 | 208.89 TU | 225.44 TU |
| 终端交会距离 | 0.7078 km | 9.3624 km |

## 相关概念

- [深度确定性策略梯度（DDPG）](/glossary/dynamics/ddpg/)
- [混合聚类粒子群优化（HCPSO）](/glossary/dynamics/hcpso/)
- [粒子群优化（PSO）](/glossary/dynamics/particle-swarm-optimization/)
- [同伦法（Homotopy Method）](/glossary/dynamics/homotopy-method/)
- [庞特里亚金极值原理（Pontryagin's Maximum Principle）](/glossary/dynamics/pontryagin-principle/)

## 参考文献

- 关宇同, 高长生, 胡玉东, 赵海涵. 面向航天器远距离协同交会的超参数自主调优-同伦方法[J]. 航天器环境工程, 2026.
- Lillicrap T P, et al. Continuous control with deep reinforcement learning[J]. arXiv:1509.02971, 2015.
