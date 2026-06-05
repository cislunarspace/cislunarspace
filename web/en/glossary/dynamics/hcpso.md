---
title: Hybrid Cluster Particle Swarm Optimization (HCPSO)
description: A detailed analysis of the HCPSO algorithm, its dual-strategy update mechanism, clustering mechanism, and applications in trajectory design
keywords: Hybrid Cluster Particle Swarm Optimization, HCPSO, Particle Swarm Optimization, PSO, Clustering Mechanism, Global Search, Trajectory Optimization, Spacecraft Control
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Hybrid Cluster Particle Swarm Optimization (HCPSO)
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: HCPSO Algorithm Explained | Hybrid Cluster Particle Swarm Optimization
  description: A detailed analysis of the HCPSO algorithm, its dual-strategy update mechanism, clustering mechanism, and applications in trajectory design
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: HCPSO Algorithm Explained | Hybrid Cluster Particle Swarm Optimization
  description: A detailed analysis of the HCPSO algorithm, its dual-strategy update mechanism, clustering mechanism, and applications in trajectory design
  image: /logo.png
permalink: /en/glossary/dynamics/hcpso/
---

# Hybrid Cluster Particle Swarm Optimization (HCPSO)

> Author: [Tianjiang Says](https://blog.csdn.net/qq_33254264)
>
> Contributing institutions: School of Astronautics, Harbin Institute of Technology; National Key Laboratory of Rapid Design and Intelligent Swarm for Micro/Nano Spacecraft
>
> References: Guan Yutong et al. Hyperparameter Auto-Tuning and Homotopy Methods for Spacecraft Long-Range Cooperative Rendezvous, Spacecraft Environment Engineering, 2026.

## Definition

Hybrid Cluster Particle Swarm Optimization (HCPSO) is an improved particle swarm optimization algorithm that enhances global search capability by introducing a clustering mechanism and dual-strategy update scheme. HCPSO divides the particle swarm into multiple sub-populations, each searching independently and sharing information under certain conditions, effectively avoiding the tendency of standard PSO to converge to local optima.

## Core Principles

### Dual-Strategy Velocity Update

HCPSO maintains two sets of velocity update strategies:

**Strategy 1** (global best based):
$$v'(\Gamma+1) = \omega_1 v(\Gamma) + c_{11}\Lambda_1(p(\Gamma) - \sigma(\Gamma)) + c_{12}\Lambda_2(p_g(\Gamma) - \sigma(\Gamma))$$

**Strategy 2** (sub-population best based):
$$v''(\Gamma+1) = \omega_2 v(\Gamma) + c_{21}\Lambda_1(p(\Gamma) - \sigma(\Gamma)) + c_{22}\Lambda_2(p_1(\Gamma) - \sigma(\Gamma))$$

**Blended update**:
$$v(\Gamma+1) = \mu_q v'(\Gamma+1) + (1-\mu_q)v''(\Gamma+1)$$

### Selection Probability Mechanism

Switching between the two strategies is governed by a selection probability $p_s$:
$$v(\Gamma+1) = \begin{cases} v'(\Gamma+1), & \text{rand} < p_s \\ v''(\Gamma+1), & \text{rand} \geq p_s \end{cases}$$

## Application in Trajectory Optimization

In spacecraft cooperative rendezvous problems, HCPSO is used to solve the initial costate for energy-optimal problems. Compared with standard PSO, HCPSO has stronger global search capability and can more effectively find high-quality initial costate solutions.

### Application by Zhao Han et al. (2026)

Zhao Han et al. combined HCPSO with DDPG deep reinforcement learning to form the RLEPSO algorithm, achieving autonomous dynamic tuning of algorithm parameters and significantly improving convergence speed and solution quality.

## Related Concepts

- [Particle Swarm Optimization (PSO)](/en/glossary/dynamics/particle-swarm-optimization/)
- [Differential Evolution (DE)](/en/glossary/dynamics/differential-evolution/)
- [Deep Deterministic Policy Gradient (DDPG)](/en/glossary/dynamics/ddpg/)
- [Reinforcement Learning Enhanced Particle Swarm Optimization (RLEPSO)](/en/glossary/dynamics/rlepeso/)

## References

- Guan Yutong, Gao Changsheng, Hu Yudong, Zhao Han. Hyperparameter Auto-Tuning and Homotopy Methods for Spacecraft Long-Range Cooperative Rendezvous[J]. Spacecraft Environment Engineering, 2026. [in Chinese]
- Kennedy J, Eberhart R. Particle swarm optimization[C]. IEEE International Conference on Neural Networks, 1995.
