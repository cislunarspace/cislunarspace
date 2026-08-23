---
title: 直接配点法（Direct Collocation）
description: 直接法中最常用的一类：在网格上用分段低阶多项式（梯形、Hermite-Simpson、5 阶 Gauss-Lobatto）插值状态，配点处强制满足动力学，得到稀疏的缺陷约束，构成大规模 NLP。覆盖缺陷约束的数学形式、配点格式选择、网加密、knot 拼接、变量缩放与地月转移中的应用要点。
keywords: 直接配点法, Direct Collocation, 直接转录, Direct Transcription, DCNLP, 缺陷约束, Defect Constraint, Hermite-Simpson, Trapezoidal, Gauss-Lobatto, 非线性规划, SQP, Ipopt
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 直接配点法（Direct Collocation）
  desc: 用分段多项式 + 缺陷约束把 OCP 转录为稀疏 NLP：配点格式、网加密、地月转移应用。
  image: /logo.png
og:
  title: 直接配点法详解 | 轨迹优化
  description: 直接法中最常用的一类：用分段低阶多项式插值状态、配点处满足动力学，得到稀疏缺陷约束。覆盖梯形/Hermite-Simpson/5 阶 Gauss-Lobatto、缺陷约束数学形式、网加密与地月转移应用要点。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 直接配点法详解 | 轨迹优化
  description: 直接法中最常用的一类：用分段低阶多项式插值状态、配点处满足动力学，得到稀疏缺陷约束。覆盖梯形/Hermite-Simpson/5 阶 Gauss-Lobatto、缺陷约束数学形式、网加密与地月转移应用要点。
  image: /logo.png
permalink: /glossary/dynamics/direct-collocation/
---

# 直接配点法（Direct Collocation）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

直接配点法（direct collocation，又称直接转录 direct transcription、DCNLP）是 [直接法](/glossary/dynamics/direct-methods/) 中最广泛使用的一类。它把时间区间 $[t_0,t_f]$ 划分为 $N$ 段，每段用低阶分段多项式插值状态（控制则在节点上离散），在每段的配点处强制满足动力学方程 $\dot{\mathbf{x}}=\mathbf{f}(\mathbf{x},\mathbf{u},t)$。这些配点处的动力学满足条件是一组非线性代数约束，称为**缺陷约束**（defect constraint）。把缺陷约束、边界条件、路径约束、性能指标一起交给 NLP 求解器，就完成了从连续 OCP 到有限维 NLP 的转录（Hargraves & Paris 1987；Betts 1998；Conway 2010）。

## 缺陷约束的数学形式

把第 $j$ 段 $[t_j,t_{j+1}]$ 记为长度 $h_j=t_{j+1}-t_j$。三种最常用的配点格式：

- **梯形（Trapezoidal）**：状态在段内用线性插值，缺陷约束为
$$\boldsymbol{\zeta}_j = \mathbf{x}_{j+1}-\mathbf{x}_j - \frac{h_j}{2}\big[\mathbf{f}(\mathbf{x}_j,\mathbf{u}_j,t_j)+\mathbf{f}(\mathbf{x}_{j+1},\mathbf{u}_{j+1},t_{j+1})\big] = \mathbf{0}.$$
精度 2 阶。NLP 变量最少、雅可比最稀疏，常用作初判。

- **Hermite-Simpson（分离型 HSS）**：在段内引入中点状态 $\mathbf{x}_{j+1/2}$，用三次 Hermite 多项式插值；中点处施加 Simpson 缺陷约束
$$\boldsymbol{\zeta}_j = \mathbf{x}_{j+1}-\mathbf{x}_j - \frac{h_j}{6}\big[\mathbf{f}_j+4\mathbf{f}_{j+1/2}+\mathbf{f}_{j+1}\big] = \mathbf{0},$$
其中 $\mathbf{f}_{j+1/2}=\mathbf{f}(\mathbf{x}_{j+1/2},\mathbf{u}_{j+1/2},t_{j+1/2})$，中点状态由 Hermite 插值给出。精度 3 阶。是 Hargraves-Paris 原文及 OTIS 等工具的默认格式（Hargraves & Paris 1987；Betts 1998）。

- **5 阶 Gauss-Lobatto（Herman-Conway）**：每段三个配点（含两端），用 5 次多项式插值。精度 5 阶，对快速变化动力学（如旋转-平移耦合的 6DOF）尤其有用，但每段变量更多（Herman & Conway 1996）。

不论哪种格式，缺陷约束 $\boldsymbol{\zeta}_j=\mathbf{0}$ 在第 $j$ 段只与该段两端的 $O(n_x+n_u)$ 个变量耦合，因此整张雅可比是块三对角的稀疏矩阵，这是直接配点法可以求解上万变量问题的关键。

## 显式 vs 隐式配点

按配点是否引入额外状态变量还分：

- **显式配点（HSS, Hermite-Simpson separated）**：中点状态作为新增 NLP 变量，缺陷约束为等式。规模大但雅可比更稀疏，便于 NLP 求解器利用稀疏性，工程实现多取此型。
- **隐式配点（HSC, Hermite-Simpson compressed）**：中点状态用两端插值显式消去，缺陷约束直接写成两端变量的函数。变量少但雅可比稍密。

## 工程实现要点

- **变量缩放**：状态/控制/时间的量纲差异可能跨越几十个数量级（如地月距离 vs 推力加速度），不缩放则条件数恶化。常见做法是按标称量级归一化（Betts 2010）。
- **坐标选择**：笛卡尔坐标在 NLP 下表现差，状态快速变号且量级跨度大。改用 [轨道根数](/glossary/dynamics/orbital-coordinate-frames/) 或 equinoctial 变量常显著提升鲁棒性（Conway 2010, Ch.3）。
- **网加密（mesh refinement）**：先用粗网格（如 $N=20$）求得近似解，再根据每段局部误差估计加密，可在固定段内提升配点阶（trapezoid → H-S → 5 阶 G-L）或插入新节点。Betts 给出经验上每段新增节点上限为 5（Betts 2010）。
- **knots（结点）**：状态不连续的边界（如球影响圈交界、引力辅助、级间分离）以零宽度段插入，配点约束在该段替换为左右状态的非线性等式（Conway 2010）。

## 直接配点 vs 伪谱法 vs 打靶法

| 特性 | 直接配点 | [伪谱法](/glossary/dynamics/pseudospectral-method/) | [打靶法](/glossary/dynamics/differential-correction/) |
| :--- | :--- | :--- | :--- |
| 多项式 | 分段低阶 | 全局高阶 | 不显式参数化 |
| 节点数 | 几十~几百/相 | 几十~百/相 | 仅几个/相 |
| 雅可比稀疏性 | 强（块三对角） | 弱（稠密） | 中（块结构） |
| 谱收敛 | 否 | 是 | 无 |
| 协态精度 | 较粗 | 精确（covector mapping） | 间接法原生精确 |
| 适合 | 一般转移、6DOF | 光滑解、需要协态 | 已有良好初值的边值问题 |

## 应用要点

- **低推力转移**：地月低能转移、平动点间转移最常采用直接配点，配合形状法或 [不变流形](/glossary/dynamics/invariant-manifold/) 拼接作为初值（Vellutini & Avanzini 2014）。
- **多体问题与高精度星历**：笛卡尔 CR3BP 形式可直接配点；切换到星历模型时，用 equinoctial 变量 + knot 拼接引力体影响圈。
- **NLP 求解器**：CasADi + Ipopt 是当前学术界的默认组合；工业代码多用 SNOPT。
- **作为强化学习解的精化器**：近年流行的 RL + 直接配点两阶段法，RL 提供初值，直接配点收敛到满足 KKT 条件的局部最优（Ul Haq 等 2026）。

## 相关概念

- [直接法（Direct Methods）](/glossary/dynamics/direct-methods/)
- [伪谱法（Pseudospectral Method）](/glossary/dynamics/pseudospectral-method/)
- [打靶法 / 微分修正（Differential Correction）](/glossary/dynamics/differential-correction/)
- [协态变量（Costate Variable）](/glossary/dynamics/co-state-variables/)
- [同伦法（Homotopy Method）](/glossary/dynamics/homotopy-method/)
- [轨道坐标架（Orbital Coordinate Frames）](/glossary/dynamics/orbital-coordinate-frames/)
- [CR3BP](/glossary/dynamics/cr3bp/)

## 参考文献

- Hargraves, C. R., & Paris, S. W. (1987). Direct trajectory optimization using nonlinear programming and collocation. *Journal of Guidance, Control, and Dynamics*, 10(4), 338–342.
- Betts, J. T. (1998). Survey of numerical methods for trajectory optimization. *Journal of Guidance, Control, and Dynamics*, 21(2), 193–207.
- Betts, J. T. (2010). *Practical Methods for Optimal Control and Estimation Using Nonlinear Programming* (2nd ed.). SIAM.
- Herman, A. L., & Conway, B. A. (1996). Direct optimization using collocation based on high-order Gauss-Lobatto quadrature rules. *Journal of Guidance, Control, and Dynamics*, 19(3), 592–599.
- Conway, B. A. (Ed.). (2010). *Spacecraft Trajectory Optimization*. Cambridge University Press, Ch. 3.
- Enright, P. J., & Conway, B. A. (1992). Discrete approximations to optimal trajectories using direct transcription and nonlinear programming. *Journal of Guidance, Control, and Dynamics*, 15(4), 994–1002.
- Vellutini, D., & Avanzini, G. (2014). Shape-based design of low-thrust trajectories to cislunar Lagrangian point.
- Ul Haq, I. U., Dai, H., & Du, C. (2026). Autonomous low-thrust trajectory optimization in cislunar space via attention-augmented reinforcement learning. *Aerospace Science and Technology*.
