---
title: Deep Deterministic Policy Gradient (DDPG)
description: A detailed analysis of the DDPG algorithm, its Actor-Critic architecture, experience replay mechanism, and applications in spacecraft trajectory optimization
keywords: Deep Deterministic Policy Gradient, DDPG, Actor-Critic, Reinforcement Learning, Policy Gradient, Trajectory Optimization, Spacecraft Control
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Deep Deterministic Policy Gradient (DDPG)
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: DDPG Algorithm Explained | Deep Reinforcement Learning for Trajectory Optimization
  description: A detailed analysis of the DDPG algorithm, its Actor-Critic architecture, experience replay mechanism, and applications in spacecraft trajectory optimization
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: DDPG Algorithm Explained | Deep Reinforcement Learning for Trajectory Optimization
  description: A detailed analysis of the DDPG algorithm, its Actor-Critic architecture, experience replay mechanism, and applications in spacecraft trajectory optimization
  image: /logo.png
permalink: /en/glossary/dynamics/ddpg/
---

# Deep Deterministic Policy Gradient (DDPG)

> Author: [Tianjiang Says](https://blog.csdn.net/qq_33254264)
>
> Contributing institutions: School of Astronautics, Harbin Institute of Technology; National Key Laboratory of Rapid Design and Intelligent Swarm for Micro/Nano Spacecraft
>
> References: Guan Yutong et al. Hyperparameter Auto-Tuning and Homotopy Methods for Spacecraft Long-Range Cooperative Rendezvous, Spacecraft Environment Engineering, 2026.

## Definition

Deep Deterministic Policy Gradient (DDPG) is a deep reinforcement learning algorithm that combines the Actor-Critic framework with an experience replay mechanism, proposed by Lillicrap et al. in 2015. DDPG is suited for reinforcement learning tasks with continuous action spaces and is capable of learning deterministic policies. It has been widely applied in fields such as robotic control and spacecraft trajectory optimization.

## Algorithm Architecture

DDPG employs a dual-network Actor-Critic structure:

- **Actor network** $\mu(s|\theta^\mu)$: Given a state $s$, outputs a deterministic action $a$
- **Critic network** $Q(s,a|\theta^Q)$: Evaluates the value of a state-action pair
- **Target-Actor network** $\mu'(s|\theta^{\mu')$: Stabilizes training
- **Target-Critic network** $Q'(s,a|\theta^{Q')$: Stabilizes training

### Core Formulas

Loss function of the Critic network:

$$L(\theta^Q) = \mathbb{E}\left[\left(r + \gamma Q'(s',a'|\theta^{Q'}) - Q(s,a|\theta^Q)\right)^2\right]$$

Gradient of the Actor network:

$$\nabla_{\theta^\mu} J \approx \nabla_a Q(s,a|\theta^Q)|_{a=\mu(s)} \nabla_{\theta^\mu}\mu(s|\theta^\mu)$$

## Application in Trajectory Optimization

In spacecraft cooperative rendezvous problems, DDPG is used for hyperparameter auto-tuning:

1. **State design**: Stagnation time, duration, iteration progress, particle distribution dispersion, particle distribution direction
2. **Action output**: HCPSO hyperparameters such as inertia weight and acceleration factors
3. **Reward function**: Designed based on the difference between global best fitness and current fitness

### Application by Zhao Han et al. (2026)

Zhao Han et al. combined DDPG with Hybrid Cluster Particle Swarm Optimization (HCPSO) to form the Reinforcement Learning Enhanced Particle Swarm Optimization (RLEPSO), which is used for:

- Initial costate optimization in cooperative rendezvous fuel-optimal problems
- Autonomous dynamic tuning of hyperparameters based on particle search conditions
- Improving the searchability and convergence speed of the optimization algorithm

## Related Concepts

- [Particle Swarm Optimization (PSO)](/en/glossary/dynamics/particle-swarm-optimization/)
- [Hybrid Cluster Particle Swarm Optimization (HCPSO)](/en/glossary/dynamics/hcpso/)
- [Reinforcement Learning Enhanced Particle Swarm Optimization (RLEPSO)](/en/glossary/dynamics/rlepeso/)
- [Homotopy Method](/en/glossary/dynamics/homotopy-method/)

## References

- Lillicrap T P, et al. Continuous control with deep reinforcement learning[J]. arXiv:1509.02971, 2015.
- Guan Yutong, Gao Changsheng, Hu Yudong, Zhao Han. Hyperparameter Auto-Tuning and Homotopy Methods for Spacecraft Long-Range Cooperative Rendezvous[J]. Spacecraft Environment Engineering, 2026. [in Chinese]
