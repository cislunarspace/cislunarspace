---
title: 课程学习（Curriculum Learning）
description: 课程学习是一种训练策略，通过从简单到复杂的渐进式任务课程逐步提升强化学习代理的能力，用于解决高难度长horizon任务
keywords: 课程学习, Curriculum Learning, 强化学习, 轨迹优化, 渐进式训练, 地月空间, 低推力, A2PPO
author: 天疆说
date: 2026-04-27
lastUpdated: 2026-04-27
og:
  title: 课程学习（Curriculum Learning）
  description: 强化学习中从简单到复杂的渐进式训练策略
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 课程学习（Curriculum Learning）
  description: 强化学习中从简单到复杂的渐进式训练策略
  image: /logo.png
permalink: /glossary/curriculum-learning/
---

# 课程学习（Curriculum Learning）

## 定义

课程学习（Curriculum Learning，CL）是一种机器学习训练策略，其核心思想是让模型从**简单样本逐步过渡到复杂样本**进行学习，模拟人类教育中"循序渐进"的过程[[1]]()。在强化学习（RL）领域，CL 通过设计一系列难度递增的任务课程（curriculum），帮助 Agent 在复杂的高维连续控制问题中实现稳定收敛。

课程学习在高难度、长horizon的地月空间低推力轨迹优化中尤为重要：直接对最终难度任务进行训练往往因稀疏奖励和混沌动力学而难以收敛，课程学习通过降低初期任务难度使 Agent 逐步建立对问题的理解。

## 在 A2PPO 中的应用

Ul Haq 等人（2026）将课程学习应用于 A2PPO 框架的地月空间低推力轨迹优化任务[[2]]()，通过渐进收紧成功阈值来实现课程设计：

### 课程结构

定义课程 $C = \{(N_i, \Delta d_i, \Delta v_i)\}$，其中：
- $N_i$：递增的全局训练步数阈值
- $\Delta d_i, \Delta v_i$：对应的终端位置和速度容忍度

### 阈值变化

| 阶段 | 全局步数 $N_i$ | 位置容忍度 $\Delta d$ | 速度容忍度 $\Delta v$ |
|:---:|:---:|:---:|:---:|
| 初始 | 0 | $5 \times 10^{-3}$ | $5 \times 10^{-3}$ |
| 过渡 | $N_1$ | $2 \times 10^{-3}$ | $2 \times 10^{-3}$ |
| 最终 | $N_2$ | $1 \times 10^{-3}$ | $1 \times 10^{-3}$ |

Agent 首先在宽松容忍度下学习到达目标轨道附近，然后逐步过渡到精确轨道插入。

### 课程调度

每个环境步骤中，根据当前全局训练步数 $G$ 确定当前课程阶段：

$$
c = \max(\{j: G \geq N_j\} \cup \{1\})
$$

然后将环境中的成功阈值设置为对应的 $(\Delta d_c, \Delta v_c)$。

## 为什么课程学习有效？

1. **避免稀疏奖励陷阱**：在混沌动力学中，终端精确到达的稀疏奖励在初期探索阶段几乎不可得，宽松阈值使 Agent 能频繁获得正奖励
2. **稳定梯度估计**：初期课程提供的"近似正确"轨迹有助于价值函数准确估计，减少策略更新的高方差
3. **避免局部最优**：从简单任务起步允许 Agent 探索更大的状态空间，后续收紧阈值时已有良好的初始化
4. **课程迁移**：在简单任务中学到的控制策略通常对相似复杂任务有正迁移效果

## 收敛曲线特征

课程学习训练曲线呈现特征性的"台阶"形态：每次阈值收紧时，终端误差和奖励会出现暂时性下降（因为任务突然变难），随后 Agent 适应并恢复稳定。这一现象在 A2PPO 的 S1-S4 四个场景训练中均有体现。

## 相关概念

- [A2PPO（注意力增强近端策略优化）](/glossary/a2ppo/)：课程学习的应用框架
- [低推力转移 MDP](/glossary/lt-transfer-mdp/)：课程学习所服务的强化学习问题形式化
- [广义优势估计（GAE）](/glossary/gae/)：与课程学习配合的优势估计方法

## 参考文献

- [[1]]() Bengio Y, Louradour J, Collobert R, et al. Curriculum learning[C]. International Conference on Machine Learning, 2009.
- [[2]]() Ul Haq I U, Dai H, Du C. Autonomous low-thrust trajectory optimization in cislunar space via attention-augmented reinforcement learning[J]. Aerospace Science and Technology, 2026.
