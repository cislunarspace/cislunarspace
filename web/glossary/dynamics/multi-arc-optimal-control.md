---
title: 多弧段最优控制（Multi-arc Optimal Control）
description: 把航天器轨迹切分为若干弧段、各弧可采用不同坐标表示、在弧间界面施加角点（匹配）条件的最优控制框架。覆盖 Weierstrass-Erdmann 角点条件、界面匹配函数、Pozzi 等（2025）提出的隐式协态变换（将多弧 TPBVP 降维到单弧规模），以及在地月空间低推力转移（Gateway ↔ 地球/月球）中的应用。与单弧最优控制、拼接点、缺陷约束的关系。
keywords: 多弧段最优控制, Multi-arc Optimal Control, 单弧段最优控制, 角点条件, Weierstrass-Erdmann, 拼接点, 多段轨迹优化, 隐式协态变换, Gateway, 低推力转移
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 多弧段最优控制（Multi-arc Optimal Control）
  desc: 把轨迹切成多弧、用角点条件在界面联立，配合隐式协态变换降维。
  image: /logo.png
og:
  title: 多弧段最优控制详解 | 地月低推力转移
  description: 把航天器轨迹切分为若干弧段、各弧可采用不同坐标表示、在弧间界面施加角点（匹配）条件的最优控制框架。覆盖 Weierstrass-Erdmann 角点条件、界面匹配函数、Pozzi 等（2025）提出的隐式协态变换，以及在地月空间低推力转移（Gateway ↔ 地球/月球）中的应用。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 多弧段最优控制详解 | 地月低推力转移
  description: 把航天器轨迹切分为若干弧段、各弧可采用不同坐标表示、在弧间界面施加角点（匹配）条件的最优控制框架。
  image: /logo.png
permalink: /glossary/dynamics/multi-arc-optimal-control/
---

# 多弧段最优控制（Multi-arc Optimal Control）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

**多弧段最优控制**（multi-arc optimal control）是把连续时间的最优控制问题扩展到由 $N$ 段弧组成的轨迹：每段弧 $j$ 可以采用不同的状态坐标表示，相邻弧在 $N-1$ 个界面（interface）处通过匹配（角点）条件联立。其单弧对应版（single-arc optimal control）则把转移视为单一连续的 IVP-to-TPBVP 问题，全程使用一套状态坐标（Pozzi et al. 2025；Betts 1998）。

切分为多弧的动机在于：当单一状态坐标无法高效描述整条路径时——例如从 Gateway 所在 NRHO 转移到近地轨道（LEO），轨迹要穿越地月引力过渡区，月心修正赤道根数（MEE）在 $e=1$ 附近奇异、地心 MEE 在平动点附近病态——多弧结构允许在界面切换坐标，代价是引入额外的联立条件。

## 数学结构

对每段弧 $j\in\{1,\dots,N\}$，状态方程

$$\dot{\boldsymbol{x}}^{(j)} = \boldsymbol{f}^{(j)}\!\left(\boldsymbol{x}^{(j)}, \boldsymbol{u}^{(j)}, \boldsymbol{p}, \tau\right),$$

共享辅助自变量 $\tau\in[0, t_f-t_0]$（可正向或反向积分），但每段的 $\boldsymbol{x}^{(j)}$ 可以是不同的坐标集合。在弧 $j$ 与弧 $j+1$ 的界面时刻 $\tau_j$ 处，需施加三类条件（Pozzi et al. 2025）：

- **标量过渡函数** $\zeta_j(\boldsymbol{x}^{(j+1)}_{\text{ini}}, \boldsymbol{x}^{(j)}_{\text{fin}}, \tau_j)=0$，标志过渡发生（例如地心距穿越某阈值）；
- **向量匹配函数** $\boldsymbol{\chi}_j$，把 outgoing 弧的终端状态映射到 incoming 弧的初始状态——通常是隐式的非线性关系，并非简单相等；
- **时间一致性等式约束**，把各段时长与总体时间参数 $\boldsymbol{p}=[t_0, t_f]^T$ 联立。

这些条件与各段动力学一起，构成增广的 TPBVP。方程组维度为 $\sum_j n_j$ 个状态量加界面乘子。

## 角点条件与协态匹配

对光滑的内角点 $\tau_j$，变分学的一阶必要条件归结为 [Weierstrass-Erdmann 角点条件](/glossary/dynamics/weierstrass-erdmann-corner-conditions/)：

$$\boldsymbol{\lambda}^{(j)}(\tau_j^{-}) = \boldsymbol{\lambda}^{(j+1)}(\tau_j^{+}), \qquad H^{(j)}(\tau_j^{-}) = H^{(j+1)}(\tau_j^{+}),$$

即（统一到同一坐标表示下的）协态与 Hamiltonian 在界面处保持连续。当匹配函数 $\boldsymbol{\chi}_j$ 是隐式的时候，协态连续性推广为 $\boldsymbol{\lambda}^{(j)} = (\partial \boldsymbol{\chi}_j/\partial \boldsymbol{x}^{(j)}_{\text{fin}})^{-T} (\partial \boldsymbol{\chi}_j/\partial \boldsymbol{x}^{(j+1)}_{\text{ini}})^{T} \boldsymbol{\lambda}^{(j+1)}$ 加界面乘子项。

## 隐式协态变换

当相邻弧之间的匹配函数构成可逆映射时，Pozzi 等（2025）证明角点条件可以**顺序求解**——一段弧的协态可由下一段弧的协态经解析表达式（**隐式协态变换**，implicit costate transformation）恢复。多弧 TPBVP 的未知量个数与单弧问题相同：初始协态 $\boldsymbol{\lambda}^{(1)}(t_0)$、终端时间 $t_f$ 与若干参数。这避免了朴素 $N$ 弧打靶实现中未知量按弧数线性膨胀的困境，是间接启发式算法（粒子群 + 协态积分）能在 Gateway ↔ 地月低推力转移中保持可解的根本原因。

## 与拼接点、缺陷约束的关系

多弧段最优控制是*理论*层面；[多重打靶](/glossary/dynamics/differential-correction/) + [拼接点](/glossary/dynamics/patch-point/) 是*算法*层面：

- **拼接点** 是离散化后用 Newton 类迭代施加弧间连续性的节点，属于数值方法。
- **角点条件** 是把轨迹视为多弧变分问题的极值时，节点处必须满足的最优性必要条件，属于最优控制理论。
- **直接配点法** 中内节点连续性以 [缺陷约束](/glossary/dynamics/direct-collocation/) 形式出现在 NLP 里，不显含协态。

简言之：同一条物理轨迹都可通过切分获得，但多弧段最优控制携带了多重打靶所忽略的解析结构（协态匹配、Hamiltonian 连续性）。

## 单弧 vs 多弧的对比

| 维度 | 单弧段最优控制 | 多弧段最优控制 |
| :--- | :--- | :--- |
| 状态坐标 | 全程一套 | 每段一套，界面切换 |
| 界面条件 | 无 | $\zeta_j, \boldsymbol{\chi}_j, \tau_j$ 匹配 |
| 协态处理 | 标准 TPBVP | 角点条件；可顺序求解 |
| 奇异性处理 | $e=1$、$h=k=0$ 附近病态 | 每段用各自非奇异坐标 |
| 典型用途 | 二体转移、单共振弧 | 多体低推力、地月穿越 |

## 应用：地月空间低推力转移

Pozzi 等（2025）在含日/地/月引力的全星历模型下，把 Gateway（NRHO）到 LEO 和到低月轨道（LLO）的双向最小时间低推力转移分别建模：Gateway-to-LLO 段处于受摄二体框架内，作为单弧 OC 问题求解；Gateway-to-LEO 段受两个主天体共同支配，构造为 5 弧的多弧问题——其中 3 段长度为零（纯坐标变换），另外 2 段分别使用地心、月心 MEE，在地月边界处相接。配合间接启发式算法（粒子群 + 协态积分），该框架能得到符合高保真星历动力学、连接地球与月球到 Gateway 的完整双向转移解。

## 应用要点

- 弧数由*单一坐标在哪里失效*决定，并非越多越准；为了切分而切分只会徒增界面约束。
- 隐式协态变换的可顺序求解性是可逆匹配映射的特殊待遇；遇到不可逆界面（如碰撞、撞击）必须保留完整增广 TPBVP。
- 直接法实现中，多弧结构对应多段伪谱配点，段间用相位联立约束替代角点条件。

## 相关概念

- [轨道优化中的约束](/glossary/dynamics/trajectory-constraints/)
- [两点边值问题（TPBVP）](/glossary/dynamics/tpbvp/)
- [微分修正与打靶法](/glossary/dynamics/differential-correction/)
- [拼接点](/glossary/dynamics/patch-point/)
- [Weierstrass-Erdmann 角点条件](/glossary/dynamics/weierstrass-erdmann-corner-conditions/)
- [缺陷约束](/glossary/dynamics/direct-collocation/)
- [多段轨迹优化](/glossary/dynamics/multi-arc-trajectory-optimization/)
- [协态变量](/glossary/dynamics/co-state-variables/)
- [直接配点法](/glossary/dynamics/direct-collocation/)
- [间接法](/glossary/dynamics/indirect-methods/)

## 参考文献

- Pozzi, E., Morselli, A., Masdemont, J., & Gomez, G. (2025). Optimal low-thrust orbit transfers connecting Gateway with Earth and Moon. *Celestial Mechanics and Dynamical Astronomy*.
- Pozzi, E., Morselli, A., Masdemont, J., & Gomez, G. (2024). Optimization, guidance, and control of low-thrust transfers from the lunar Gateway to low lunar orbit.
- Beolchi, A. C., Morselli, A., & Topputo, F. (2023). A multi-arc formulation for low-thrust orbit transfers in a high-fidelity multibody ephemeris model.
- Betts, J. T. (1998). Survey of numerical methods for trajectory optimization. *Journal of Guidance, Control, and Dynamics*, 21(2), 193-207.
- Bryson, A. E., & Ho, Y.-C. (1975). *Applied Optimal Control*.（Weierstrass-Erdmann 角点条件的标准出处）
- Conway, B. A. (Ed.). (2010). *Spacecraft Trajectory Optimization*. Cambridge University Press.
- Howell, K. C., & Pernicka, H. J. (1987). Numerical determination of Lissajous trajectories in the restricted three-body problem. *Celestial Mechanics*, 41(1-4), 107-124.（多重打靶与拼接点的原始定义）
