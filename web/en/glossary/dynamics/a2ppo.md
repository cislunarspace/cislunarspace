---
title: A2PPO (Attention-Augmented Proximal Policy Optimization)
description: A2PPO is a deep reinforcement learning framework integrating directional cross-attention into Actor-Critic policies for low-thrust trajectory optimization in cislunar space
keywords: A2PPO, Attention-Augmented PPO, low-thrust trajectory optimization, deep reinforcement learning, cislunar space, Actor-Critic, cross-attention, orbit design
author: 天疆说
date: 2026-04-27
lastUpdated: 2026-04-27
og:
  title: A2PPO (Attention-Augmented Proximal Policy Optimization)
  description: A deep reinforcement learning framework integrating directional cross-attention into Actor-Critic policies
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: A2PPO (Attention-Augmented Proximal Policy Optimization)
  description: A deep reinforcement learning framework integrating directional cross-attention into Actor-Critic policies
  image: /logo.png
permalink: /en/glossary/a2ppo/
---

# A2PPO (Attention-Augmented Proximal Policy Optimization)

## Definition

A2PPO is a Deep Reinforcement Learning (DRL) framework for low-thrust trajectory optimization in cislunar space, proposed by Ul Haq, Dai, Du et al. in 2026[[1]](). Its core innovation lies in integrating a **directional cross-attention mechanism** into the Actor-Critic architecture of the standard PPO (Proximal Policy Optimization) algorithm, enabling the policy network to selectively attend to state features that the Critic network deems important for future value, thereby improving learning stability and sample efficiency in chaotic multi-body dynamical environments.

## Algorithm Architecture

### Core Components

The forward propagation pipeline of A2PPO proceeds as follows:

1. **Shared MLP Encoder**: Encodes the raw state $s_t \in \mathbb{R}^{16}$ into a hidden vector $h_t \in \mathbb{R}^{128}$
2. **Role Projection**: Projects $h_t$ into Actor- and Critic-specific role vectors via two independent linear projections $W_a, W_c \in \mathbb{R}^{128 \times 128}$
3. **Tokenization**: Reshapes the role vectors into $M=4$ sub-tokens of dimension $d=32$ ($D = M \times d = 128$), with learned positional embeddings added
4. **Directional Cross-Attention**: Actor tokens serve as Query, Critic tokens as Key and Value, performing feature fusion through multi-head cross-attention ($N_h=2$ heads)
5. **Fusion Output**: After residual connections and per-token feed-forward networks (FFN), layer normalization is applied and the result is flattened to obtain the fused hidden vector $z_t \in \mathbb{R}^{128}$

### Key Design: Directionality

A2PPO adopts an asymmetric **Critic → Actor** directional cross-attention design: the policy representation is conditioned on the value function's assessment signals, while the Critic remains decoupled from Actor exploration noise. This design outperforms self-attention variants in ablation experiments, significantly improving training stability.

### PPO Loss Function

A2PPO optimizes the following composite loss:

$$
J(\theta, \psi) = -\mathcal{L}^{\mathrm{clip}}(\theta) + c_v \frac{1}{2} \mathbb{E}\left[ (V_\psi(z_t) - \hat{R}_t)^2 \right] - c_e \mathbb{E}\left[ \mathcal{H}(\pi_\theta(\cdot|z_t)) \right]
$$

The three terms are: the clipped policy loss, value function error (weight $c_v$), and policy entropy regularization (weight $c_e$).

## Training Strategy

### Curriculum Learning

A2PPO employs a progressive curriculum learning strategy, gradually tightening success thresholds: initial stages use relaxed terminal position/velocity tolerances (e.g., $\Delta d = 5 \times 10^{-3}$), progressively tightening to $\Delta d = 1 \times 10^{-3}$ as training advances. This strategy avoids initial instability in the chaotic CR3BP dynamical environment.

### Hyperparameter Tuning

A two-stage hyperparameter search (100 trials each) is conducted using the Optuna framework, with key parameters including learning rate ($1.315 \times 10^{-3}$), PPO clipping range (0.249), entropy coefficient (0.01474), and GAE-$\lambda$ (0.915).

## Performance Evaluation

Evaluation results across four cislunar low-thrust transfer scenarios:

| Scenario | Description | ToF (days) | Fuel (kg) | vs. Direct Collocation |
|:---|:---|:---:|:---:|:---|
| S1 | L₂ Halo → Halo | 4.95 | 2.08 | 4.99 days / 1.28 kg |
| S2 | L₂ Halo → NRHO | 8.38 | 5.00 | 7.26 days / 5.29 kg |
| S3 | NRHO → DRO | 7.60 | 5.10 | 7.63 days / 5.11 kg |
| S4 | Multi-rev Halo → Halo (very low thrust) | 33.6 | 0.97 | 33.12 days / 0.97 kg |

Without any initial guess, A2PPO autonomously learns trajectories highly consistent with direct collocation baselines, while significantly outperforming the SAC baseline in multi-revolution transfer scenarios (37.37 days / 1.06 kg).

### Robustness

- **Monte Carlo perturbation test**: 100% success rate under 100 initial state perturbations ($\sigma = 10^{-3}$ NDU)
- **Thrust degradation tolerance**: Completes missions under up to 32% deterministic thrust degradation without retraining

## Relation to Related Concepts

- **Standard PPO**: A2PPO adds a directional cross-attention module on top of standard PPO, with both training convergence speed and final reward significantly outperforming Vanilla PPO
- **SAC (Soft Actor-Critic)**: As a comparison baseline, A2PPO wins with shorter time and less fuel in multi-revolution transfer scenarios
- **GTrXL**: Another Transformer-enhanced RL method; A2PPO's cross-attention mechanism differs, focusing on Actor-Critic feature fusion
- [Generalized Advantage Estimation (GAE)](/en/glossary/gae/): A key component for advantage function estimation in A2PPO
- [Curriculum Learning](/en/glossary/curriculum-learning/): The progressive training strategy employed by A2PPO
- [Low-Thrust Transfer MDP](/en/glossary/lt-transfer-mdp/): The problem formulation framework for A2PPO

## References

- [[1]]() Ul Haq I U, Dai H, Du C. Autonomous low-thrust trajectory optimization in cislunar space via attention-augmented reinforcement learning. Aerospace Science and Technology, 2026.
