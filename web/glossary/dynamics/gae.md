---
title: 广义优势估计（GAE）
description: 广义优势估计（GAE）是一种用于强化学习中优势函数估计的方法，通过指数加权平均多个TD残差来平衡方差与偏差，用于PPO等策略梯度算法的优势估计
keywords: GAE, 广义优势估计, 强化学习, 优势函数, 时间差分, PPO, A2PPO, 策略梯度, 方差偏差权衡
author: 天疆说
date: 2026-04-27
lastUpdated: 2026-04-27
og:
  title: 广义优势估计（GAE）
  description: 强化学习中平衡方差与偏差的优势函数估计方法
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 广义优势估计（GAE）
  description: 强化学习中平衡方差与偏差的优势函数估计方法
  image: /logo.png
permalink: /glossary/gae/
---

# 广义优势估计（GAE）

> Generalized Advantage Estimation, GAE

## 定义

广义优势估计（Generalized Advantage Estimation，GAE）是强化学习中一种用于估计优势函数（advantage function）的偏差-方差平衡技术，由 Schulman 等人在 2015 年提出[[1]]()。GAE 通过对多个时间差分（TD）残差进行指数加权平均，为策略梯度算法（如 PPO、A2PPO）提供低方差但几乎无偏的优势估计。

## 背景：优势函数与 TD 残差

在 Actor-Critic 强化学习中，优势函数定义为：

$$
A^\pi(s_t, a_t) = Q^\pi(s_t, a_t) - V^\pi(s_t)
$$

直接计算需要知道真实价值函数 $V^\pi$，实际中必须用近似。简单的一步 TD 优势估计为：

$$
A_t^{(1)} = \delta_t = r_t + \gamma V(s_{t+1}) - V(s_t)
$$

但一步估计方差低但偏差大（因为依赖不准确的价值估计）。$n$ 步回报可以减少偏差但方差增大。

## GAE 定义

GAE 通过指数加权平均 $n$ 步 TD 残差来平衡偏差与方差：

$$
\hat{A}_t^{\text{GAE}(\lambda, \gamma)} = \sum_{k=0}^{\infty} (\gamma\lambda)^{k} \delta_{t+k}
$$

其中 $\lambda \in [0,1]$ 控制偏差-方差权衡：
- $\lambda = 0$：退化为一步 TD（低方差，高偏差）
- $\lambda = 1$：类似于 $n$ 步回报（低偏差，高方差）

实际中由于有限 horizon，使用递归形式计算：

$$
\hat{A}_t = \delta_t + \gamma\lambda(1-d_t)\hat{A}_{t+1}
$$

其中 $d_t$ 为终止信号（$d_t=1$ 表示 episode 在 $t$ 步终止）。

## 在 A2PPO 中的应用

在 A2PPO 算法中，GAE 用于优势估计，其超参数设置[[2]]()为：

| 参数 | 值 | 含义 |
|:---|:---:|:---|
| $\gamma$ | 0.99 | 折扣因子 |
| $\lambda$ (GAE-$\lambda$) | 0.915 | GAE 参数 |

在 A2PPO 的消融实验中，GAE 与注意力机制的结合使得策略梯度估计更加稳定，显著优于 Vanilla PPO（最终奖励 $1071.41 \pm 7.75$ vs $344.87 \pm 563.71$）。

## GAE 的方差控制机制

GAE 的方差控制来源于其有限记忆特性：远处未来的 TD 残差以 $(\gamma\lambda)^k$ 指数衰减。更重要的是，GAE 的方差与 $\lambda$ 成正相关——增大 $\lambda$ 会增加估计的偏差但减少方差，因为更多依赖实际累积回报。

## 相关概念

- [A2PPO（注意力增强近端策略优化）](/glossary/a2ppo/)：GAE 在地月空间轨迹优化中的应用框架
- [低推力转移 MDP](/glossary/lt-transfer-mdp/)：GAE 所服务的强化学习问题形式化

## 参考文献

- [[1]]() Schulman J, Moritz P, Levine S, et al. High-dimensional continuous control using generalized advantage estimation[J]. arXiv:1512.04455, 2015.
- [[2]]() Ul Haq I U, Dai H, Du C. Autonomous low-thrust trajectory optimization in cislunar space via attention-augmented reinforcement learning[J]. Aerospace Science and Technology, 2026.
