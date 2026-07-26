---
title: Q-law控制律
description: 解析Q-law控制律的原理、在低推力轨道转移中的应用、以及与改进春分点轨道根数的结合
keywords: Q-law, Q-law控制律, Lyapunov控制, 反馈控制, 低推力轨道转移, 轨道优化, Equinoctial
author: CislunarSpace
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Q-law控制律
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: Q-law控制律详解 | Lyapunov轨道控制
  description: 解析Q-law控制律的原理、在低推力轨道转移中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Q-law控制律详解 | Lyapunov轨道控制
  description: 解析Q-law控制律的原理及其在低推力轨道转移中的应用
  image: /logo.png
permalink: /glossary/dynamics/q-law/
---

# Q-law控制律

>本文编辑来源：胡敏, 肖金伟, 张天天, 陶雪峰 (2026) "面向中高轨小卫星批量部署的轨道转移飞行器任务规划"
>
>Narayanaswamy S, Damaren C J. Equinoctial Lyapunov control law for low-thrust rendezvous[J]. Journal of Guidance, Control, and Dynamics, 2023, 46(4): 781-795.
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

Q-law是一种基于李雅普诺夫（Lyapunov）理论的反馈控制律，用于低推力航天器的轨道转移控制。其核心思想是通过构造描述状态误差的标量Q函数，并确保其单调递减，从而引导航天器自主收敛到目标轨道。

## 理论基础

### 李雅普诺夫稳定性

Q-law基于李雅普诺夫稳定性理论：

1. 构造正定的李雅普诺夫函数 $Q(Z) \geq 0$
2. 设计控制律使 $\dot{Q} < 0$（Q函数单调递减）
3. 当 $Q \to 0$ 时，系统收敛到目标状态

### Q函数定义

在轨道转移中，Q函数定义为轨道根数误差的加权二次型：

$$Q(Z) = (1 + W_P P) \sum_{i=1}^{5} W_i S_i \left(\frac{\delta Z_i}{\max_L(\dot{X}_i)}\right)^2$$

其中：

- $W_i$：各轨道元素的权重
- $P$：罚函数项
- $S_i$：塑形函数
- $\delta Z_i$：轨道根数误差
- $\max_L(\dot{X}_i)$：最大变化率（归一化因子）

## 控制律设计

### 最优推力方向

控制律的目标是寻找使Q函数下降最快的推力方向。通过求 $\dot{Q}$ 的极值，可解析获得最优推力方向：

$$\alpha^* = \arctan(-D_2, -D_1)$$
$$\beta^* = \arctan(-D_3, \sqrt{D_1^2 + D_2^2})$$

其中 $\alpha, \beta$ 为推力方向矢量分量，$D_1, D_2, D_3$ 为与Q函数梯度相关的计算系数。

### 滑行弧机制

为实现工质与时间的权衡，引入滑行弧机制：

$$u = \begin{cases} [0, 0], & \eta_r \leq \eta_{rel} \text{ 或 } \eta_a \leq \eta_{abs} \\ T_{max}[\alpha^*, \beta^*], & \text{其他} \end{cases}$$

当推力效率低于阈值时关闭发动机，进入滑行阶段，以时间换取工质节约。

## 与改进春分点轨道根数结合

### 改进春分点轨道根数（MEE）

胡敏等（2026）采用基于改进春分点轨道根数（Modified Equinoctial Elements, MEE）的Q-law：

$$\begin{cases}
p = a(1 - e^2) \\
e_1 = e\cos(\omega + \Omega) \\
e_2 = e\sin(\omega + \Omega) \\
h_1 = \tan(i/2)\cos\Omega \\
h_2 = \tan(i/2)\sin\Omega \\
L = \omega + \Omega + \theta
\end{cases}$$

### 优势

相比经典轨道根数，MEE具有：

- **数值稳定性**：近圆轨道附近无奇异性
- **控制性能更好**：半长轴a代替半通径p更适合控制
- **物理意义明确**：各分量有清晰的几何解释

## 在批量部署中的应用

### 状态依赖成本矩阵生成

胡敏等（2026）采用Q-law控制律离线生成状态依赖转移成本矩阵：

1. 对所有离散质量状态 $k = 0, 1, \dots, N$
2. 对所有起点-终点组合 $(i, j)$
3. 通过Q-law仿真计算转移成本 $C(i, j, k)$
4. 构建完整的三维成本矩阵

### 计算效率

Q-law虽为次优解，但具有显著优势：

- **计算成本极低**：相比直接法优化，效率提升数个量级
- **鲁棒性强**：固有的误差修正能力
- **实时性好**：闭环策略可实时补偿未建模摄动

## 性能分析

研究结果表明（胡敏等, 2026）：

| 优化目标 | 工质消耗 | 转移时间 | CPU时间 |
|:---|:---|:---|:---|
| 最小化时间 | 96.49 kg | 32.87 d | 0.00025 s |
| 最小化工质 | 76.07 kg | 37.55 d | 0.00026 s |
| 工质-时间权衡 | 85.12 kg | 35.87 d | 0.00025 s |

通过调节效率参数 $\eta_{rel}$ 和 $\eta_{abs}$，可在工质和时间之间灵活切换。

## 相关概念

- [批量部署（Batch Deployment）](/glossary/dynamics/batch-deployment/)
- [状态依赖旅行商问题（SDTSP）](/glossary/dynamics/state-dependent-tsp/)
- [春分点轨道根数（Equinoctial Orbital Elements）](/glossary/dynamics/equinoctial-elements/)
- [滑行弧（Coasting Arc）](/glossary/dynamics/coasting-arc/)
- [质量阶跃（Mass Discontinuity）](/glossary/dynamics/mass-discontinuity/)

## 参考文献

- 胡敏, 肖金伟, 张天天, 陶雪峰. 面向中高轨小卫星批量部署的轨道转移飞行器任务规划[J]. 航天器工程, 2026, 25(3): 634-646.
- Narayanaswamy S, Damaren C J. Equinoctial Lyapunov control law for low-thrust rendezvous[J]. Journal of Guidance, Control, and Dynamics, 2023, 46(4): 781-795.
- Lee D, Ahn J. Optimal multitarget rendezvous using hybrid propulsion system[J]. Journal of Spacecraft and Rockets, 2023, 60(2): 456-471.
