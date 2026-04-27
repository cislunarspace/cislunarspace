---
title: Generalized Advantage Estimation (GAE)
description: Generalized Advantage Estimation (GAE) is a method for advantage function estimation in reinforcement learning that balances bias and variance through exponentially weighted averaging of TD residuals
keywords: GAE, Generalized Advantage Estimation, reinforcement learning, advantage function, temporal difference, PPO, A2PPO, policy gradient, bias-variance tradeoff
author: 天疆说
date: 2026-04-27
lastUpdated: 2026-04-27
og:
  title: Generalized Advantage Estimation (GAE)
  description: A method balancing bias and variance for advantage function estimation in RL
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Generalized Advantage Estimation (GAE)
  description: A method balancing bias and variance for advantage function estimation in RL
  image: /logo.png
permalink: /en/glossary/gae/
---

# Generalized Advantage Estimation (GAE)

## Definition

Generalized Advantage Estimation (GAE) is a bias-variance balancing technique for estimating the advantage function in reinforcement learning, proposed by Schulman et al. in 2015[[1]](). GAE provides low-variance but nearly unbiased advantage estimates for policy gradient algorithms (such as PPO and A2PPO) by computing exponentially weighted averages of multiple temporal difference (TD) residuals.

## Background: Advantage Function and TD Residuals

In Actor-Critic reinforcement learning, the advantage function is defined as:

$$
A^\pi(s_t, a_t) = Q^\pi(s_t, a_t) - V^\pi(s_t)
$$

Direct computation requires knowledge of the true value function $V^\pi$, which in practice must be approximated. The simple one-step TD advantage estimate is:

$$
A_t^{(1)} = \delta_t = r_t + \gamma V(s_{t+1}) - V(s_t)
$$

However, one-step estimates have low variance but high bias (due to reliance on inaccurate value estimates). $n$-step returns can reduce bias but increase variance.

## GAE Definition

GAE balances bias and variance through exponentially weighted averaging of $n$-step TD residuals:

$$
\hat{A}_t^{\text{GAE}(\lambda, \gamma)} = \sum_{k=0}^{\infty} (\gamma\lambda)^{k} \delta_{t+k}
$$

where $\lambda \in [0,1]$ controls the bias-variance tradeoff:
- $\lambda = 0$: Degenerates to one-step TD (low variance, high bias)
- $\lambda = 1$: Similar to $n$-step returns (low bias, high variance)

In practice, due to finite horizon, the recursive form is used:

$$
\hat{A}_t = \delta_t + \gamma\lambda(1-d_t)\hat{A}_{t+1}
$$

where $d_t$ is the termination signal ($d_t=1$ indicates episode termination at step $t$).

## Application in A2PPO

In the A2PPO algorithm, GAE is used for advantage estimation with the following hyperparameter settings[[2]]():

| Parameter | Value | Meaning |
|:---|:---:|:---|
| $\gamma$ | 0.99 | Discount factor |
| $\lambda$ (GAE-$\lambda$) | 0.915 | GAE parameter |

In A2PPO's ablation experiments, the combination of GAE with the attention mechanism produces more stable policy gradient estimates, significantly outperforming Vanilla PPO (final reward $1071.41 \pm 7.75$ vs $344.87 \pm 563.71$).

## GAE's Variance Control Mechanism

GAE's variance control stems from its finite memory property: distant future TD residuals decay exponentially as $(\gamma\lambda)^k$. More importantly, GAE's variance is positively correlated with $\lambda$ — increasing $\lambda$ increases estimation bias but reduces variance, as more reliance is placed on actual cumulative returns.

## Related Concepts

- [A2PPO (Attention-Augmented PPO)](/en/glossary/a2ppo/): The application framework for GAE in cislunar trajectory optimization
- [Low-Thrust Transfer MDP](/en/glossary/lt-transfer-mdp/): The RL problem formulation that GAE serves

## References

- [[1]]() Schulman J, Moritz P, Levine S, et al. High-dimensional continuous control using generalized advantage estimation[J]. arXiv:1512.04455, 2015.
- [[2]]() Ul Haq I U, Dai H, Du C. Autonomous low-thrust trajectory optimization in cislunar space via attention-augmented reinforcement learning[J]. Aerospace Science and Technology, 2026.
