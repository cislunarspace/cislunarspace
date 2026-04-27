---
title: A2PPO（注意力增强近端策略优化）
description: A2PPO是一种将方向交叉注意力机制集成到Actor-Critic策略中的深度强化学习框架，用于地月空间低推力轨迹优化
keywords: A2PPO, Attention-Augmented PPO, 低推力轨迹优化, 深度强化学习, 地月空间, Actor-Critic, 交叉注意力, 轨道设计
author: 天疆说
date: 2026-04-27
lastUpdated: 2026-04-27
og:
  title: A2PPO（注意力增强近端策略优化）
  description: 一种将方向交叉注意力机制集成到Actor-Critic策略中的深度强化学习框架
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: A2PPO（注意力增强近端策略优化）
  description: 一种将方向交叉注意力机制集成到Actor-Critic策略中的深度强化学习框架
  image: /logo.png
permalink: /glossary/a2ppo/
---

# A2PPO（注意力增强近端策略优化）

> Attention-Augmented Proximal Policy Optimization

## 定义

A2PPO 是一种面向地月空间低推力轨迹优化的深度强化学习（Deep Reinforcement Learning, DRL）框架，由 Ul Haq、Dai、Du 等人于 2026 年提出[[1]]()。其核心创新在于将**方向交叉注意力机制**（directional cross-attention mechanism）集成到标准 PPO（Proximal Policy Optimization）算法的 Actor-Critic 架构中，使策略网络能够选择性关注 Critic 网络认为对未来价值重要的状态特征，从而提升混沌多体动力学环境中的学习稳定性和样本效率。

## 算法架构

### 核心组件

A2PPO 的前向传播流程如下：

1. **共享 MLP 编码器**：将原始状态 $s_t \in \mathbb{R}^{16}$ 编码为隐向量 $h_t \in \mathbb{R}^{128}$
2. **角色投影**：通过两个独立的线性投影 $W_a, W_c \in \mathbb{R}^{128 \times 128}$ 将 $h_t$ 投影为 Actor 和 Critic 特有的角色向量
3. **分词化（Tokenization）**：将角色向量 reshape 为 $M=4$ 个子令牌，每个大小 $d=32$（$D = M \times d = 128$），并添加学习型位置嵌入
4. **方向交叉注意力**：Actor 令牌作为 Query，Critic 令牌作为 Key 和 Value，通过多头交叉注意力（$N_h=2$ 头）进行特征融合
5. **融合输出**：通过残差连接和逐令牌前馈网络（FFN）后，经过层归一化并展平得到融合隐向量 $z_t \in \mathbb{R}^{128}$

### 关键设计：方向性

A2PPO 采用** Critic → Actor** 的不对称方向交叉注意力设计：策略表示以值函数的评估信号为条件，而 Critic 保持与 Actor 探索噪声的解耦。这种设计在消融实验中优于自注意力变体，显著提升了训练稳定性。

### PPO 损失函数

A2PPO 优化以下复合损失：

$$
J(\theta, \psi) = -\mathcal{L}^{\mathrm{clip}}(\theta) + c_v \frac{1}{2} \mathbb{E}\left[ (V_\psi(z_t) - \hat{R}_t)^2 \right] - c_e \mathbb{E}\left[ \mathcal{H}(\pi_\theta(\cdot|z_t)) \right]
$$

其中三项分别为：策略裁剪损失、价值函数误差（权重 $c_v$）和策略熵正则化（权重 $c_e$）。

## 训练策略

### 课程学习（Curriculum Learning）

A2PPO 采用渐进式课程学习策略，逐步收紧成功阈值：初始阶段使用宽松的终端位置/速度容忍度（如 $\Delta d = 5 \times 10^{-3}$），随训练推进逐步收紧至 $\Delta d = 1 \times 10^{-3}$。这一策略避免了 CR3BP 混沌动力学环境中的初期不稳定性。

### 超参数调优

使用 Optuna 框架进行两阶段超参数搜索（各 100 轮），关键参数包括学习率（$1.315 \times 10^{-3}$）、PPO 裁剪范围（0.249）、熵系数（0.01474）、GAE-$\lambda$（0.915）等。

## 性能评估

在四个地月空间低推力转移场景中的评估结果：

| 场景 | 描述 | ToF (天) | 燃料 (kg) | 对比直接配点 |
|:---|:---|:---:|:---:|:---|
| S1 | L₂ Halo → Halo | 4.95 | 2.08 | 4.99天 / 1.28kg |
| S2 | L₂ Halo → NRHO | 8.38 | 5.00 | 7.26天 / 5.29kg |
| S3 | NRHO → DRO | 7.60 | 5.10 | 7.63天 / 5.11kg |
| S4 | 多圈 Halo → Halo（极低推力） | 33.6 | 0.97 | 33.12天 / 0.97kg |

A2PPO 在无任何初始猜测的条件下，自主学习到的轨迹与直接配点法基准解高度接近，同时在多圈转移场景中显著优于 SAC 基线（37.37天 / 1.06kg）。

### 鲁棒性

- **蒙特卡洛扰动测试**：100 次初始状态扰动（$\sigma = 10^{-3}$ NDU）下达到 100% 成功率
- **推力退化容忍**：在高达 32% 确定性推力衰减下仍能完成任务，无需重训练

## 与相关概念的关系

- **标准 PPO**：A2PPO 在标准 PPO 基础上增加了方向交叉注意力模块，训练收敛速度和最终奖励均显著优于 Vanilla PPO
- **SAC（Soft Actor-Critic）**：作为对比基线，A2PPO 在多圈转移场景中以更短的时间和更少的燃料胜出
- **GTrXL**：另一种 Transformer 增强的 RL 方法，A2PPO 的交叉注意力机制与其不同，专注于 Actor-Critic 间的特征融合
- [广义优势估计（GAE）](/glossary/gae/)：A2PPO 中用于优势函数估计的关键组件
- [课程学习（Curriculum Learning）](/glossary/curriculum-learning/)：A2PPO 采用的渐进式训练策略
- [低推力转移 MDP](/glossary/lt-transfer-mdp/)：A2PPO 的问题形式化框架

## 参考文献

- [[1]]() Ul Haq I U, Dai H, Du C. Autonomous low-thrust trajectory optimization in cislunar space via attention-augmented reinforcement learning. Aerospace Science and Technology, 2026.
