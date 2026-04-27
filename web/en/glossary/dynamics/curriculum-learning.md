---
title: Curriculum Learning
description: Curriculum Learning is a training strategy that progressively builds agent capability through simple-to-complex task curricula, used for solving high-difficulty long-horizon tasks in reinforcement learning
keywords: Curriculum Learning, reinforcement learning, trajectory optimization, progressive training, cislunar space, low-thrust, A2PPO
author: 天疆说
date: 2026-04-27
lastUpdated: 2026-04-27
og:
  title: Curriculum Learning
  description: A progressive simple-to-complex training strategy in reinforcement learning
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Curriculum Learning
  description: A progressive simple-to-complex training strategy in reinforcement learning
  image: /logo.png
permalink: /en/glossary/curriculum-learning/
---

# Curriculum Learning

## Definition

Curriculum Learning (CL) is a machine learning training strategy whose core idea is to have models learn from **simple samples progressively transitioning to complex samples**, mimicking the "step-by-step" process in human education[[1]](). In reinforcement learning (RL), CL helps agents achieve stable convergence in complex high-dimensional continuous control problems by designing a series of progressively more difficult task curricula.

Curriculum learning is particularly important in high-difficulty, long-horizon cislunar low-thrust trajectory optimization: direct training on the final difficulty level often fails to converge due to sparse rewards and chaotic dynamics, while curriculum learning reduces initial task difficulty to allow the agent to gradually build understanding of the problem.

## Application in A2PPO

Ul Haq et al. (2026) applied curriculum learning to the A2PPO framework for cislunar low-thrust trajectory optimization[[2]](), implementing curriculum design through progressive tightening of success thresholds:

### Curriculum Structure

Define curriculum $C = \{(N_i, \Delta d_i, \Delta v_i)\}$, where:
- $N_i$: Incremental global training step thresholds
- $\Delta d_i, \Delta v_i$: Corresponding terminal position and velocity tolerances

### Threshold Progression

| Phase | Global Steps $N_i$ | Position Tolerance $\Delta d$ | Velocity Tolerance $\Delta v$ |
|:---:|:---:|:---:|:---:|
| Initial | 0 | $5 \times 10^{-3}$ | $5 \times 10^{-3}$ |
| Transition | $N_1$ | $2 \times 10^{-3}$ | $2 \times 10^{-3}$ |
| Final | $N_2$ | $1 \times 10^{-3}$ | $1 \times 10^{-3}$ |

The agent first learns to reach the vicinity of the target orbit under relaxed tolerances, then progressively transitions to precise orbit insertion.

### Curriculum Scheduling

At each environment step, the current curriculum stage is determined by the global training step count $G$:

$$
c = \max(\{j: G \geq N_j\} \cup \{1\})
$$

The environment's success thresholds are then set to the corresponding $(\Delta d_c, \Delta v_c)$.

## Why Curriculum Learning Works

1. **Avoids sparse reward traps**: In chaotic dynamics, the sparse reward for precise terminal arrival is nearly unobtainable in early exploration phases; relaxed thresholds allow the agent to frequently receive positive rewards
2. **Stabilizes gradient estimation**: "Approximately correct" trajectories from early curriculum stages help the value function estimate accurately, reducing high variance in policy updates
3. **Avoids local optima**: Starting from simple tasks allows the agent to explore a larger state space, providing good initialization when thresholds are later tightened
4. **Curriculum transfer**: Control policies learned on simple tasks typically have positive transfer effects on similar complex tasks

## Convergence Curve Characteristics

Curriculum learning training curves exhibit a characteristic "staircase" pattern: each time thresholds are tightened, terminal error and rewards temporarily drop (because the task suddenly becomes harder), after which the agent adapts and recovers stability. This phenomenon is observed across all four A2PPO scenarios (S1-S4).

## Related Concepts

- [A2PPO (Attention-Augmented PPO)](/en/glossary/a2ppo/): The framework applying curriculum learning
- [Low-Thrust Transfer MDP]((/en/glossary/lt-transfer-mdp/): The RL problem formulation that curriculum learning serves
- [Generalized Advantage Estimation (GAE)](/en/glossary/gae/): Advantage estimation method used with curriculum learning

## References

- [[1]]() Bengio Y, Louradour J, Collobert R, et al. Curriculum learning[C]. International Conference on Machine Learning, 2009.
- [[2]]() Ul Haq I U, Dai H, Du C. Autonomous low-thrust trajectory optimization in cislunar space via attention-augmented reinforcement learning[J]. Aerospace Science and Technology, 2026.
