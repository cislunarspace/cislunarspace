---
title: Reinforcement Learning Enhanced Particle Swarm Optimization (RLEPSO)
description: A detailed analysis of the RLEPSO algorithm, its DDPG enhancement mechanism, state-action design, and applications in spacecraft cooperative rendezvous
keywords: Reinforcement Learning Enhanced Particle Swarm Optimization, RLEPSO, DDPG, HCPSO, Hyperparameter Tuning, Particle Swarm Optimization, Cooperative Rendezvous, Fuel-Optimal
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Reinforcement Learning Enhanced Particle Swarm Optimization (RLEPSO)
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: RLEPSO Algorithm Explained | Hyperparameter Auto-Tuning Particle Swarm
  description: A detailed analysis of the RLEPSO algorithm, its DDPG enhancement mechanism, state-action design, and applications in spacecraft cooperative rendezvous
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: RLEPSO Algorithm Explained | Hyperparameter Auto-Tuning Particle Swarm
  description: A detailed analysis of the RLEPSO algorithm, its DDPG enhancement mechanism, state-action design, and applications in spacecraft cooperative rendezvous
  image: /logo.png
permalink: /en/glossary/dynamics/rlepeso/
---

# Reinforcement Learning Enhanced Particle Swarm Optimization (RLEPSO)

> Author: [Tianjiang Says](https://blog.csdn.net/qq_33254264)
>
> Contributing institutions: School of Astronautics, Harbin Institute of Technology; National Key Laboratory of Rapid Design and Intelligent Swarm for Micro/Nano Spacecraft
>
> References: Guan Yutong et al. Hyperparameter Auto-Tuning and Homotopy Methods for Spacecraft Long-Range Cooperative Rendezvous, Spacecraft Environment Engineering, 2026.

## Definition

Reinforcement Learning Enhanced Particle Swarm Optimization (RLEPSO) is a hybrid optimization algorithm that combines the Deep Deterministic Policy Gradient (DDPG) with Hybrid Cluster Particle Swarm Optimization (HCPSO). RLEPSO uses the DDPG Actor network to autonomously and dynamically adjust HCPSO hyperparameters based on the particle search state, achieving autonomous tuning of algorithm parameters and significantly improving the searchability and convergence speed of the optimization algorithm.

## Core Principles

### Algorithm Architecture

RLEPSO embeds the DDPG framework on top of HCPSO:

1. **Initialization**: Set initial HCPSO parameters and establish DDPG Actor-Critic networks
2. **State perception**: Compute state variables from the current iteration state (stagnation time, duration, iteration progress, particle distribution dispersion, particle distribution direction)
3. **Action output**: The Actor network outputs hyperparameter adjustment actions
4. **Parameter update**: Decode actions into HCPSO parameters such as inertia weight and acceleration factors
5. **Experience replay**: Store experience samples for training the Critic network
6. **Iterative optimization**: Repeat steps 2-5 until convergence

### State Design

RLEPSO uses the following state variables:

| State Variable | Definition | Physical Meaning |
| :--- | :--- | :--- |
| $T_{stop}$ | Stagnation start time | Detects whether the algorithm has stagnated |
| $T_{dur}$ | Stagnation duration | Assesses the severity of stagnation |
| $T_{run}$ | Iteration progress | Ratio of current iteration to maximum iterations |
| $D_s$ | Particle distribution dispersion | Characterizes the degree of particle clustering |
| $D_r$ | Particle distribution direction | Characterizes the directional properties of particle distribution |

### Actions and Reward

**Action**: The Actor network outputs a 16-dimensional action vector, decoded into 8 HCPSO hyperparameters ($\omega_1, c_{11}, c_{12}, \mu_q, \omega_2, c_{21}, c_{22}, p_s$)

**Reward function**:
$$r = \tanh\left((f_g - f_c) \cdot T_{run}\right)$$

where $f_g$ is the global best fitness and $f_c$ is the current generation best fitness.

## Application in Spacecraft Cooperative Rendezvous

Zhao Han et al. (2026) combined RLEPSO with the homotopy method to solve the fuel-optimal problem for long-range spacecraft cooperative rendezvous under $J_2$ perturbation:

1. **Energy-optimal solution**: RLEPSO rapidly obtains high-quality initial costates
2. **Homotopy transition**: Smooth transition from energy-optimal to fuel-optimal
3. **Results**: Compared with PSO and HCPSO, RLEPSO obtained higher-quality initial costates with faster convergence

### Simulation Results

| Parameter | RLEPSO-Homotopy | Homotopy-SQP Coupled |
| :--- | :--- | :--- |
| Fuel consumption | 205.40 kg | 210.36 kg |
| Rendezvous time | 208.89 TU | 225.44 TU |
| Terminal rendezvous distance | 0.7078 km | 9.3624 km |

## Related Concepts

- [Deep Deterministic Policy Gradient (DDPG)](/en/glossary/dynamics/ddpg/)
- [Hybrid Cluster Particle Swarm Optimization (HCPSO)](/en/glossary/dynamics/hcpso/)
- [Particle Swarm Optimization (PSO)](/en/glossary/dynamics/particle-swarm-optimization/)
- [Homotopy Method](/en/glossary/dynamics/homotopy-method/)
- [Pontryagin's Maximum Principle](/en/glossary/dynamics/pontryagin-principle/)

## References

- Guan Yutong, Gao Changsheng, Hu Yudong, Zhao Han. Hyperparameter Auto-Tuning and Homotopy Methods for Spacecraft Long-Range Cooperative Rendezvous[J]. Spacecraft Environment Engineering, 2026. [in Chinese]
- Lillicrap T P, et al. Continuous control with deep reinforcement learning[J]. arXiv:1509.02971, 2015.
