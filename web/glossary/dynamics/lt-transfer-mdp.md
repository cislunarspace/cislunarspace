---
title: 低推力转移的马尔可夫决策过程（MDP） formulation
description: 将地月空间低推力轨道转移问题形式化为有限horizon马尔可夫决策过程，用于强化学习框架下的自主轨迹优化
keywords: MDP, 马尔可夫决策过程, 低推力轨迹优化, 强化学习, 轨道设计, 地月空间, 状态空间, 动作空间, 奖励函数
author: 天疆说
date: 2026-04-27
lastUpdated: 2026-04-27
og:
  title: 低推力转移的MDP formulation
  description: 将地月空间低推力轨道转移问题形式化为有限horizon马尔可夫决策过程
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 低推力转移的MDP formulation
  description: 将地月空间低推力轨道转移问题形式化为有限horizon马尔可夫决策过程
  image: /logo.png
permalink: /glossary/lt-transfer-mdp/
---

# 低推力转移的马尔可夫决策过程（MDP）formulation

## 定义

在 A2PPO 等深度强化学习框架中，地月空间低推力轨道转移问题被形式化为有限horizon马尔可夫决策过程（MDP），定义为元组 $(S, A, p, R, \gamma)$，其中 $S$ 为状态空间，$A$ 为动作空间，$p(s'|s,a)$ 为状态转移概率，$R$ 为奖励函数，$\gamma \in [0,1]$ 为折扣因子[[1]]()。

## 状态空间设计

Agent 的状态空间 $S \subset \mathbb{R}^{16}$，包含 spacecraft 的绝对动力学状态和相对目标轨道的偏差信息：

$$
\mathbf{s}_t = [\mathbf{r}_t, \mathbf{v}_t, \tilde{m}_t, \Delta\mathbf{r}_t, \Delta\mathbf{v}_t, \Delta d_t, \Delta v_t, t_{\text{el},t}]^\top \in \mathbb{R}^{16}
$$

| 状态分量 | 维度 | 描述 |
|:---|:---:|:---|
| $\mathbf{r}_t = [x_t, y_t, z_t]$ | 3 | 会合坐标系中位置 |
| $\mathbf{v}_t = [\dot{x}_t, \dot{y}_t, \dot{z}_t]$ | 3 | 会合坐标系中速度 |
| $\tilde{m}_t$ | 1 | 归一化 spacecraft 质量 |
| $\Delta\mathbf{r}_t = \mathbf{r}_t - \mathbf{r}_{\text{ref},t}$ | 3 | 位置偏差（相对最近目标轨道点） |
| $\Delta\mathbf{v}_t = \mathbf{v}_t - \mathbf{v}_{\text{ref},t}$ | 3 | 速度偏差 |
| $\Delta d_t = \|\Delta\mathbf{r}_t\|$ | 1 | 欧氏位置误差 |
| $\Delta v_t = \|\Delta\mathbf{v}_t\|$ | 1 | 速度误差幅度 |
| $t_{\text{el},t}$ | 1 | 相对最大episode时长的归一化已用时间 |

这种绝对状态与相对误差的组合表征同时捕捉了 spacecraft 的当前动力学构型和其相对目标轨道的引导偏差，被证明有助于 A2PPO 的稳定训练。

## 动作空间设计

Agent 在每个时间步输出连续动作 $\mathbf{a}_t = (a_1, a_2, a_3) \in [-1,1]^3$，采用球坐标参数化：

| 动作分量 | 映射 | 物理含义 |
|:---:|:---|:---|
| $a_1$ | $\nu = (a_1 + 1)/2 \in [0,1]$ | 节流阀（推力大小分数） |
| $a_2$ | $\phi = \pi a_2 \in [-\pi, \pi]$ | 方位角（azimuth） |
| $a_3$ | $\theta = (\pi/2)a_3 \in [-\pi/2, \pi/2]$ | 俯仰角（elevation） |

无量纲推力控制向量为：

$$
\mathbf{u} = \nu \cdot \hat{\mathbf{u}}, \quad \hat{\mathbf{u}} = (\cos\theta\cos\phi, \cos\theta\sin\phi, \sin\theta)
$$

## 奖励函数设计

奖励函数结合势能塑形（potential-based shaping）、惩罚项和安全约束：

$$
r_t = \underbrace{\Delta\Phi(\mathbf{s}_t, \mathbf{s}_{t-1})}_{\text{势能塑形}} - \underbrace{c_t - c_f \Delta m_t}_{\text{时间和燃料代价}} + \underbrace{r_{\text{safe},t}}_{\text{安全约束}} + \underbrace{\Omega_t}_{\text{终端奖励}}
$$

### 势能函数

$$
\Phi(\mathbf{s}) = -w_1^{\text{pos}}\Delta d - w_1^{\text{vel}}\Delta v + w_2^{\text{pos}} e^{-w_3^{\text{pos}}\Delta d} + w_2^{\text{vel}} e^{-w_3^{\text{vel}}\Delta v}
$$

指数项在 $\Delta d, \Delta v \to 0$ 时趋近于 $w_2^{\text{pos}}, w_2^{\text{vel}}$，线性项提供持续的方向引导。

### 终端奖励

| 条件 | 奖励值 |
|:---|---:|
| 成功插入目标轨道 | $+1000$ |
| 月球碰撞/燃料耗尽 | $-1000$ |
| 超时 | $0$ |

### 月球安全约束

$$
r_{\text{safe},t} = \begin{cases}
-c_s\left(1 - \frac{\|\mathbf{r}_t - \mathbf{r}_M\|}{\beta R_M}\right)^2 & \text{if } \|\mathbf{r}_t - \mathbf{r}_M\| < \beta R_M \\
0 & \text{otherwise}
\end{cases}
$$

其中 $\beta = 3$ 为安全缓冲区乘数，$R_M = 1737.4$ km 为月球半径。

## Episode 终止条件

| 终止类型 | 条件 | 结果 |
|:---|:---|:---|
| 成功 | $\Delta d < \Delta d_{\text{thr}}$ 且 $\Delta v < \Delta v_{\text{thr}}$ | +1000 |
| 月球碰撞 | $r_{M,t} \leq R_M$ | -1000 |
| 燃料耗尽 | $m_t \leq m_{\min}$ | -1000 |
| 超时 | 达到最大 episode 时长 | 0 |

## 转移概率

CR3BP-LT 环境的状态转移由以下常微分方程描述：

$$
\dot{\mathbf{x}} = f(\mathbf{x}, \mathbf{u}), \quad \mathbf{x} = [\mathbf{r}, \mathbf{v}, \tilde{m}]^\top
$$

数值积分采用自适应 Runge-Kutta 4(5) 积分器（相对容差 $10^{-9}$，绝对容差 $10^{-12}$）。

## 参考文献

- [[1]]() Ul Haq I U, Dai H, Du C. Autonomous low-thrust trajectory optimization in cislunar space via attention-augmented reinforcement learning[J]. Aerospace Science and Technology, 2026.
