---
title: 线性二次型最优控制与 Riccati 方程（LQR and Riccati Equation）
description: 线性二次型调节器（LQR）是线性系统在二次型性能指标下最优反馈控制的闭式解，其增益通过求解矩阵 Riccati 方程（微分或代数形式）得到。本词条系统介绍 LQR 的数学结构、Riccati 方程的有限/无限时间形式、权矩阵选取经验，并覆盖其在平动点轨道保持中的工程实践（典型 Q=10I、R=I）、与输出调节（Francis-Byrnes-Isidori 方程）和次优控制（SDRE、调解因子）的联系，以及作为双积分系统 LQR 解析解的 ZEM/ZEV 制导律。
keywords: 线性二次型最优控制, LQR, Riccati方程, 矩阵Riccati方程, 次优控制, 非线性调节, ZEM/ZEV制导, Francis-Byrnes-Isidori方程, SDRE, 平动点轨道保持
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 线性二次型最优控制与 Riccati 方程（LQR and Riccati Equation）
  desc: 线性系统在二次型性能指标下的最优反馈控制：Riccati 方程、权矩阵选取、输出调节、ZEM/ZEV 制导。
  image: /logo.png
og:
  title: 线性二次型最优控制与 Riccati 方程详解 | 术语定义
  description: 线性二次型调节器（LQR）是线性系统在二次型性能指标下最优反馈控制的闭式解，其增益通过求解矩阵 Riccati 方程得到。本词条覆盖 LQR 的数学结构、Riccati 方程、权矩阵选取、输出调节、次优控制与 ZEM/ZEV 制导。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 线性二次型最优控制与 Riccati 方程详解 | 术语定义
  description: 线性二次型调节器（LQR）是线性系统在二次型性能指标下最优反馈控制的闭式解，其增益通过求解矩阵 Riccati 方程得到。本词条覆盖 LQR 的数学结构、Riccati 方程、权矩阵选取、输出调节、次优控制与 ZEM/ZEV 制导。
  image: /logo.png
permalink: /glossary/dynamics/linear-quadratic-optimal-control/
---

# 线性二次型最优控制与 Riccati 方程（LQR and Riccati Equation）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

线性二次型调节器（Linear Quadratic Regulator, LQR）是如下问题的闭式最优解：对于线性时变系统 $\dot{\boldsymbol{x}} = \boldsymbol{A}(t)\boldsymbol{x} + \boldsymbol{B}(t)\boldsymbol{u}$，寻找状态反馈控制律 $\boldsymbol{u}^* = -\boldsymbol{K}(t)\boldsymbol{x}$，使二次型性能指标

$$
J = \tfrac{1}{2}\boldsymbol{x}^T(t_f)\boldsymbol{S}_f\boldsymbol{x}(t_f) + \tfrac{1}{2}\int_{0}^{t_f}\!\left[\boldsymbol{x}^T\boldsymbol{Q}(t)\boldsymbol{x} + \boldsymbol{u}^T\boldsymbol{R}(t)\boldsymbol{u}\right]dt
$$

最小。这里 $\boldsymbol{Q}\succeq 0$ 为状态偏差权重、$\boldsymbol{R}\succ 0$ 为控制代价权重、$\boldsymbol{S}_f\succeq 0$ 为终端权重。LQR 的核心结论是：最优反馈增益由**矩阵 Riccati 方程**的解唯一决定（Kalman 1960；Anderson & Moore 1990），从而把一个泛函最小化问题化归为求解矩阵微分方程。

## Riccati 方程的两种形式

**微分 Riccati 方程（finite-horizon LQR）。** 令 $\boldsymbol{P}(t)$ 为对称矩阵，满足终端条件 $\boldsymbol{P}(t_f) = \boldsymbol{S}_f$，沿时间倒向积分

$$
-\dot{\boldsymbol{P}} = \boldsymbol{P}\boldsymbol{A} + \boldsymbol{A}^T\boldsymbol{P} - \boldsymbol{P}\boldsymbol{B}\boldsymbol{R}^{-1}\boldsymbol{B}^T\boldsymbol{P} + \boldsymbol{Q}。
$$

则最优控制为 $\boldsymbol{u}^*(t) = -\boldsymbol{R}^{-1}\boldsymbol{B}^T\boldsymbol{P}(t)\boldsymbol{x}(t)$。增益 $\boldsymbol{K}(t) = \boldsymbol{R}^{-1}\boldsymbol{B}^T\boldsymbol{P}(t)$ 一般显含时间，工程实现时常在标称轨迹上离线求解、在线查表（如平动点周期轨道的 Floquet 形态分解后再做 LQR）。

**代数 Riccati 方程（infinite-horizon LQR）。** 当 $(\boldsymbol{A},\boldsymbol{B})$ 可镇定、$(\boldsymbol{Q}^{1/2},\boldsymbol{A})$ 可检测时，令 $t_f\to\infty$、$\boldsymbol{Q},\boldsymbol{R}$ 为常矩阵，$\boldsymbol{P}(t)$ 收敛到稳态解 $\boldsymbol{P}_\infty\succ 0$，满足

$$
\boldsymbol{P}\boldsymbol{A} + \boldsymbol{A}^T\boldsymbol{P} - \boldsymbol{P}\boldsymbol{B}\boldsymbol{R}^{-1}\boldsymbol{B}^T\boldsymbol{P} + \boldsymbol{Q} = \boldsymbol{0}，
$$

增益 $\boldsymbol{K} = \boldsymbol{R}^{-1}\boldsymbol{B}^T\boldsymbol{P}_\infty$ 为常矩阵，闭环 $\boldsymbol{A}-\boldsymbol{B}\boldsymbol{K}$ 渐近稳定。这是姿态控制、轨道保持中最常用的形式。

## 权矩阵选取：跟踪精度 vs 控制代价

权矩阵 $\boldsymbol{Q}, \boldsymbol{R}$ 是 LQR 设计中**唯一**的主观选择，直接决定闭环性能。$\boldsymbol{Q}$ 大则跟踪紧、能耗高；$\boldsymbol{R}$ 大则省燃料、误差大。无量纲化后的 CR3BP 平动点轨道保持中，位置偏差、速度偏差、控制加速度同量级，Zhang & Wang（2022）在 DRO/Halo/NRHO 的 comparative 研究中取 $\boldsymbol{Q}=10\boldsymbol{I}_{6\times 6}$、$\boldsymbol{R}=\boldsymbol{I}_{3\times 3}$ 即可获得良好跟踪（年修正量 0.8–26 m/s，按轨道稳定性指数差异而定）。NRHO 因近月点速度梯度大，控制输入在 perilune 附近出现尖峰，比 DRO 高出约两个量级。

权矩阵的常用调参法包括：Bryson 法（先取对角元归一化再统一加权）、迭代仿真法（先固定 $\boldsymbol{R}$ 调 $\boldsymbol{Q}$ 的对角比例）、以及基于闭环极点位置的期望配置法。

## 在非线性系统中的延伸

LQR 本身只对线性系统最优，但在地月空间任务中绝大多数场景是非线性的，因此衍生出多种"近似 LQR"用法：

**参考轨迹线性化 LQR。** 沿标称轨道 $\bar{\boldsymbol{x}}(t)$（如 Halo、NRHO）展开动力学 $\delta\dot{\boldsymbol{x}} = \boldsymbol{A}(t)\delta\boldsymbol{x} + \boldsymbol{B}\delta\boldsymbol{u}$，对偏差系统设计 LQR 反馈。这是平动点轨道保持最常见的形式，$\boldsymbol{A}(t)$ 可由状态转移矩阵（[STM](/glossary/dynamics/variational-equations/)）给出。

**次优控制与 SDRE。** 把非线性系统改写为"状态依赖线性"形式 $\dot{\boldsymbol{x}} = \boldsymbol{A}(\boldsymbol{x})\boldsymbol{x} + \boldsymbol{B}(\boldsymbol{x})\boldsymbol{u}$，在每个状态点处瞬时求解代数 Riccati 方程，得到状态依赖的 Riccati 增益。这类方法在中文文献中常与"调解因子"（mediation factor）一起讨论，用以逼近原非线性最优解；优点是无需积分伴随方程，缺点是缺乏全局最优性保证，且参数化不唯一。

**非线性输出调节（Francis-Byrnes-Isidori 方程）。** 当参考信号和扰动都可由一个外系统（exosystem）生成（如准 Halo 轨道与周期偏心率扰动），输出调节理论给出同时实现跟踪与扰动抑制的反馈律，关键在于求解一组称为 FBI 方程的结构方程（Isidori & Byrnes 1990；Di Giamberardino & Monaco 1996）。该方法在平动点轨道保持中可与 LQR/SDRE 嵌套使用（Elobaid et al. 2022）。

## ZEM/ZEV：双积分系统的 LQR 解析解

零耗努力脱靶量（Zero-Effort-Miss, ZEM）与零耗努力速度（Zero-Effort-Velocity, ZEV）制导是 LQR 在二阶系统上的封闭形式。考虑双积分动力学 $\ddot{\boldsymbol{r}} = \boldsymbol{u} + \boldsymbol{g}(\boldsymbol{r})$，剩余飞行时间 $t_{go}=t_f-t$，定义

$$
\boldsymbol{r}_{ZEM}(t) = \boldsymbol{r}(t) + \boldsymbol{v}(t)t_{go} + \int_{t}^{t_f}\!(t_f-\tau)\boldsymbol{g}(\boldsymbol{r}(\tau))\,d\tau,\quad \boldsymbol{v}_{ZEV}(t) = \boldsymbol{v}(t) + \int_{t}^{t_f}\!\boldsymbol{g}(\boldsymbol{r}(\tau))\,d\tau。
$$

对匀重力场 $\boldsymbol{g}$，最小化 $\int\!\|\boldsymbol{u}\|^2 dt$ 的 LQR 闭式解给出经典增益 $\boldsymbol{u}^* = \frac{6}{t_{go}^2}(\boldsymbol{r}_{ZEM}) - \frac{2}{t_{go}}(\boldsymbol{v}_{ZEV})$，即 $K_R=6$、$K_V=-2$。**广义 ZEM/ZEV 算法**将这两个常数增益替换为时变增益 $K_R(t), K_V(t)$，以便在非匀重力场（如月球动力下降、CR3BP 转移）下仍保持近最优（Ebrahimi et al. 2008；Scorsoglio et al. 2023）。ZEM/ZEV 广泛用于登月动力下降与NRHO交会。

## 应用要点

- **数值实现。** Riccati 方程是对称的，可只用上三角传播；稳态解可用 `scipy.linalg.solve_continuous_are` 或专门的 Schur 法（Arnold 1984）求得。
- **鲁棒性边界。** LQR 至少有 60° 相位裕度、$[1/2, \infty)$ 增益裕度（Safonov & Athans 1977），这一性质使其在模型不确定下仍可用。但当实际扰动达到 SRP 量级（无量纲 $\sim 10^{-4}$），标准 LQR 无法稳定收敛，需切换到鲁棒框架（如 [最优滑模控制](/glossary/dynamics/osmc/)）。
- **不宜滥用。** LQR 只在标称轨迹小邻域内有效，对大幅值偏差（如入轨误差 100 km）需要重新规划而非反馈。

## 相关概念

- [协态变量（Co-state Variables）](/glossary/dynamics/co-state-variables/)
- [庞特里亚金最小值原理（Pontryagin Minimum Principle）](/glossary/dynamics/pontryagins-maximum-principle/)
- [最优滑模控制（Optimal Sliding Mode Control, OSMC）](/glossary/dynamics/osmc/)
- [混合差分动态规划（Hybrid Differential Dynamic Programming, HDDP）](/glossary/dynamics/hddp/)
- [变分方程（Variational Equations）](/glossary/dynamics/variational-equations/)

## 参考文献

- Kalman, R. E., 1960, *Contributions to the Theory of Optimal Control*（LQR 与 Riccati 方程的奠基论文）。
- Anderson, B. D. O., Moore, J. B., 1990, *Optimal Control: Linear Quadratic Methods*（LQR 理论与权矩阵选取的系统教材）。
- Safonov, M. G., Athans, M., 1977, "Gain and phase margin for multiloop LQG regulators"，*IEEE Trans. Autom. Control* 22(2)（LQR 鲁棒裕度的经典结论）。
- Isidori, A., Byrnes, C. I., 1990, "Output regulation of nonlinear systems"，*IEEE Trans. Autom. Control* 35(2)（非线性输出调节与 FBI 方程）。
- Ebrahimi, M., Bahrami, M., Rossi, F., 2008, "Optimal sliding-mode guidance with terminal velocity constraint for a lunar lander"；同作者 2008 关于 ZEM/ZEV 在非匀重力场的推广。
- Zhang, R., Wang, Y., 2022, "Continuous-thrust station-keeping of cis-lunar orbits using optimal sliding mode control with practical constraints"，*Adv. Space Res.*（Q=10I、R=I 的权矩阵选取与 OSMC vs LQR 对比）。
- Scorsoglio, A., Furfaro, R., et al., 2023, "Relative motion guidance for near-rectilinear lunar orbits with path constraints"，*Adv. Space Res.*（广义 ZEM/ZEV 在 NRHO 的应用）。
- Elobaid, M., et al., 2022（非线性调节在平动点保持的应用）。
