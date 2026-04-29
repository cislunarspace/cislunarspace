---
title: 低推力增强圆形限制性三体问题（CR3BP-LT）
description: CR3BP-LT是标准圆形限制性三体问题模型加入了低推力加速度项的扩展，用于研究连续低推力推进下的地月空间轨道转移
keywords: CR3BP-LT, 低推力三体问题, 地月空间, 轨道优化, 低推力推进, 最优控制, CR3BP
author: 天疆说
date: 2026-04-27
lastUpdated: 2026-04-27
og:
  title: 低推力增强圆形限制性三体问题（CR3BP-LT）
  description: 标准CR3BP模型加入了低推力加速度项的扩展
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 低推力增强圆形限制性三体问题（CR3BP-LT）
  description: 标准CR3BP模型加入了低推力加速度项的扩展
  image: /logo.png
permalink: /glossary/dynamics/cr3bp-lt/
---

# 低推力增强圆形限制性三体问题（CR3BP-LT）

> CR3BP with Low-Thrust (CR3BP-LT)

## 定义

CR3BP-LT 是标准圆形限制性三体问题（Circular Restricted Three-Body Problem, CR3BP）的扩展，通过在 spacecraft 的运动方程中加入连续低推力加速度项，用以研究电推进、离子推进等低推力推进系统的轨道转移问题。该模型由 Ul Haq 等人在 2026 年的 A2PPO 研究中正式提出并系统应用。

## 动力学方程

在归一化会合坐标系下，CR3BP-LT 的运动方程为：

$$
\begin{cases}
\ddot{x} = -\left[(1-\mu)\frac{x+\mu}{r_1^3} + \mu\frac{x-(1-\mu)}{r_2^3}\right] + 2\dot{y} + x + \frac{\tilde{T}_{\max}}{\tilde{m}} u_x \\[0.8em]
\ddot{y} = -\left[(1-\mu)\frac{y}{r_1^3} + \mu\frac{y}{r_2^3}\right] - 2\dot{x} + y + \frac{\tilde{T}_{\max}}{\tilde{m}} u_y \\[0.8em]
\ddot{z} = -\left[(1-\mu)\frac{z}{r_1^3} + \mu\frac{z}{r_2^3}\right] + \frac{\tilde{T}_{\max}}{\tilde{m}} u_z
\end{cases}
$$

其中 $r_1 = \sqrt{(x+\mu)^2 + y^2 + z^2}$、$r_2 = \sqrt{(x-1+\mu)^2 + y^2 + z^2}$ 分别为 spacecraft 到地球和月球的距离，$-2\dot{y}$、$+2\dot{x}$ 为 Coriolis 力项，$u = (u_x, u_y, u_z)$ 为无量纲推力控制向量，满足 $\|u\| \leq 1$。

质量演化服从齐奥尔科夫斯基火箭方程：

$$
\dot{\tilde{m}} = -\frac{\tilde{T}_{\max}}{\tilde{c}} \|u\|
$$

其中 $\tilde{c} = I_{sp} g_0 T^*/L^*$ 为无量纲排气速度。

## 关键参数

CR3BP-LT 的特征归一化参数：

| 参数 | 符号 | 地月系统值 |
|:---|:---:|:---|
| 质量比 | $\mu$ | 0.01215 |
| 特征长度 | $L^*$ | $3.844 \times 10^8$ m |
| 特征时间 | $T^*$ | 375,132 s |
| 特征加速度 | $g_0$ | 9.80665 m/s² |

## CR3BP-LT 与标准 CR3BP 的区别

| 特性 | 标准 CR3BP | CR3BP-LT |
|:---|:---:|:---:|
| 能量守恒 | Jacobi 常数守恒 | 连续低推力打破守恒 |
| 动力学 | 可积（保守系统） | 非守恒、高度非线性 |
| 轨道特性 | 周期/拟周期轨道 | 转移轨迹可自由设计 |
| 计算难度 | 较低 | 较高（需积分质量方程） |

CR3BP-LT 模型在无推力（$\tilde{T}_{\max} = 0$）时退化为标准 CR3BP，此时 Jacobi 常数重新守恒。

## 在轨迹优化中的应用

CR3BP-LT 模型是 A2PPO 等深度强化学习方法用于低推力轨迹优化的核心环境。该模型：

1. **保留了三体动力学的本质复杂性**——混沌特性、流形结构、能量变化等
2. **引入了连续推力控制**——通过无量纲推力向量 $u$ 实现连续加速/减速
3. **保持了计算可负担性**——相比高保真 Ephemeris 模型，CR3BP-LT 可支持大规模 RL 训练所需的百万次积分

## 核心要素

### 数学定义
CR3BP-LT 在标准 CR3BP 运动方程基础上加入连续低推力加速度项 $\frac{\tilde{T}_{\max}}{\tilde{m}} u$，质量演化服从齐奥尔科夫斯基火箭方程 $\dot{\tilde{m}} = -\frac{\tilde{T}_{\max}}{\tilde{c}} \|u\|$，推力控制向量满足 $\|u\| \leq 1$。

### 关键性质
CR3BP-LT 在无推力时退化为标准 CR3BP，Jacobi 常数重新守恒。连续低推力打破能量守恒，使转移轨迹可自由设计，但引入质量变化增加了系统维度和非线性。

### 数值方法
轨迹优化采用直接配点法或强化学习方法。数值积分需同时求解位置、速度和质量方程，计算成本高于标准 CR3BP。

## 应用价值

CR3BP-LT 模型是深度强化学习方法（如 A2PPO）用于低推力轨迹优化的核心环境，保留了三体动力学的混沌特性和流形结构，同时引入连续推力控制，支持电推进、离子推进等低推力系统的地月空间转移轨迹设计。

## 相关概念

- [圆型限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)
- [A2PPO（注意力增强近端策略优化）](/glossary/dynamics/a2ppo/)
- [直接配点法（Direct Collocation）](/glossary/dynamics/direct-collocation/)
- [低推力转移 MDP](/glossary/dynamics/lt-transfer-mdp/)


## 参考文献

- Ul Haq I U, Dai H, Du C. Autonomous low-thrust trajectory optimization in cislunar space via attention-augmented reinforcement learning[J]. Aerospace Science and Technology, 2026.
- Du C, Song L, Zhang J, et al. A novel calculation method for low-thrust transfer trajectories in the Earth-Moon restricted three-body problem[J]. Aerospace Science and Technology, 2024.
