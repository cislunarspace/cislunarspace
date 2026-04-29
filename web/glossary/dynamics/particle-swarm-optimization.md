---
title: 粒子群优化（Particle Swarm Optimization, PSO）
description: 详细解析粒子群优化算法的定义、速度位置更新机制、收敛特性及在轨道设计中的应用
keywords: 粒子群优化, PSO, 粒子群, 群智能, 进化算法, 全局优化, 轨道设计, 航天器优化
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 粒子群优化（PSO）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 粒子群优化算法详解 | 群智能优化方法
  description: 详细解析粒子群优化算法的定义、速度位置更新机制、收敛特性及在轨道设计中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 粒子群优化算法详解 | 群智能优化方法
  description: 详细解析粒子群优化算法的定义、速度位置更新机制、收敛特性及在轨道设计中的应用
  image: /logo.png
permalink: /glossary/dynamics/particle-swarm-optimization/
---

# 粒子群优化（Particle Swarm Optimization, PSO）

> 本文作者：天疆说
>
> 参编单位：哈尔滨工业大学航天学院、微小型航天器快速设计与智能集群全国重点实验室
>
> 参考文献：关宇同等. 面向航天器远距离协同交会的超参数自主调优-同伦方法[J]. 航天器环境工程, 2026.

## 定义

粒子群优化（Particle Swarm Optimization, PSO）是一种基于群体智能的进化优化算法，由 Kennedy 和 Eberhart 于 1995 年提出。PSO 模拟鸟群觅食行为，通过粒子在搜索空间中的飞行来寻找最优解。每个粒子根据自身历史最优位置和种群全局最优位置来更新速度和位置。

## 核心原理

### 速度和位置更新

第 $\Gamma$ 代粒子的速度更新公式：

$$v(\Gamma+1) = \omega v(\Gamma) + c_1 r_1 (p(\Gamma) - \sigma(\Gamma)) + c_2 r_2 (p_g(\Gamma) - \sigma(\Gamma))$$

其中：
- $\omega$：惯性权值，控制全局搜索能力
- $c_1, c_2$：加速因子
- $r_1, r_2$：$[0,1]$ 均匀分布随机数
- $p(\Gamma)$：粒子历史最优位置
- $p_g(\Gamma)$：种群全局最优位置
- $\sigma(\Gamma)$：粒子当前位置

位置更新：

$$\sigma(\Gamma+1) = \sigma(\Gamma) + v(\Gamma+1)$$

### 收敛特性

- 惯性权值 $\omega$ 较大时：全局搜索能力强，适合探索新区域
- 惯性权值 $\omega$ 较小时：局部搜索能力强，适合精细优化

## 局限性

标准 PSO 的主要局限：

1. **容易陷入局部最优**：在高维、多峰问题中，粒子可能困于局部最优
2. **参数依赖性强**：惯性权值和加速因子的选择影响算法性能
3. **参数固定**：通常依赖经验或试验确定，且为定值

## 改进算法

为克服标准 PSO 的局限，发展了多种改进算法：

| 算法 | 改进点 |
|:---|:---|
| HCPSO | 双策略更新、聚类机制 |
| RLEPSO | DDPG 自适应参数调优 |
| QPSO | 量子机制增强全局搜索 |

## 在轨道优化中的应用

PSO 及其改进算法在航天器轨道优化中广泛应用：

- 初始协态搜索
- 轨道转移轨迹优化
- 多目标轨道设计

赵海涵等（2026）比较了 PSO、HCPSO 和 RLEPSO 在协同交会问题中的性能，RLEPSO 表现最优。

## 相关概念

- [混合聚类粒子群优化（HCPSO）](/glossary/dynamics/hcpso/)
- [强化学习增强粒子群（RLEPSO）](/glossary/dynamics/rlepeso/)
- [差分进化算法（DE）](/glossary/dynamics/differential-evolution/)
- [深度确定性策略梯度（DDPG）](/glossary/dynamics/ddpg/)

## 参考文献

- Kennedy J, Eberhart R. Particle swarm optimization[C]. IEEE International Conference on Neural Networks, 1995.
- 关宇同, 高长生, 胡玉东, 赵海涵. 面向航天器远距离协同交会的超参数自主调优-同伦方法[J]. 航天器环境工程, 2026.
