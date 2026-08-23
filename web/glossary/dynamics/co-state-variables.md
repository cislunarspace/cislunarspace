---
title: 协态变量与共轭方程（Costate Variables and Adjoint Equations）
description: 最优控制中与状态变量对偶的拉格朗日乘子。覆盖协态/共轭/伴随变量的定义、伴随方程、协态归一化、协态-控制变换、初始协态敏感性：间接法求解地月空间小推力轨迹优化的核心对象。
keywords: 协态变量, 共轭变量, 伴随变量, Costate Variables, Adjoint Equations, 拉格朗日乘子, 庞特里亚金极值原理, 协态归一化, 协态控制变换, 间接法, 两点边值问题
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 协态变量与共轭方程（Costate Variables and Adjoint Equations）
  desc: 最优控制中与状态对偶的隐变量：定义、伴随方程、归一化与协态-控制变换。
  image: /logo.png
og:
  title: 协态变量与共轭方程详解 | 最优控制理论
  description: 最优控制中与状态变量对偶的拉格朗日乘子。覆盖协态/共轭变量、伴随方程、协态归一化、协态-控制变换及其在地月空间小推力轨迹优化（间接法）中的应用。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 协态变量与共轭方程详解 | 最优控制理论
  description: 最优控制中与状态变量对偶的拉格朗日乘子。覆盖协态/共轭变量、伴随方程、协态归一化、协态-控制变换及其在地月空间小推力轨迹优化（间接法）中的应用。
  image: /logo.png
permalink: /glossary/dynamics/co-state-variables/
---

# 协态变量与共轭方程（Costate Variables and Adjoint Equations）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

协态变量（costate variables，又称伴随变量 adjoint variables、共轭变量 conjugate variables、与状态变量配对的拉格朗日乘子）是最优控制问题中为施加动力学约束而引入的对偶变量。它们不对应任何可直接测量的物理量；几何意义是性能指标对状态的灵敏度，即 $\lambda_i(t)=\partial J^*/\partial x_i(t)$（Bryson & Ho 1975；Betts 2010）。庞特里亚金极值原理（PMP）通过 Hamilton 函数把协态与状态耦合为正则方程，使最优控制问题转化为以 $(\mathbf{x},\boldsymbol{\lambda})$ 为变量的两点边值问题（TPBVP）。共轭方程、共轭动量、共轭变量、协态归一化、协态-控制变换等概念，都是这套对偶框架在不同问题结构下的具体化。

## Hamilton 形式与伴随方程

设系统 $\dot{\mathbf{x}}=\mathbf{f}(\mathbf{x},\mathbf{u},t)$，性能指标 $J=\Phi(\mathbf{x}(t_f),t_f)+\int_{t_0}^{t_f} L\,dt$。引入协态 $\boldsymbol{\lambda}\in\mathbb{R}^n$ 构造控制 Hamilton 函数 $H=L+\boldsymbol{\lambda}^{\!\top}\mathbf{f}$。PMP 中与协态相关的两条必要条件是（Conway 2010, Ch.1；Betts 2010）：

1. **伴随方程** $\dot{\boldsymbol{\lambda}}=-\partial H/\partial\mathbf{x}$。
2. **横截条件** $\boldsymbol{\lambda}(t_f)=\partial \Phi/\partial\mathbf{x}|_{t_f}+(\partial\boldsymbol{\Psi}/\partial\mathbf{x})^{\!\top}\boldsymbol{\nu}$，其中 $\boldsymbol{\Psi}(\mathbf{x}(t_f),t_f)=0$ 是终端等式约束，$\boldsymbol{\nu}$ 为对应拉格朗日乘子。终端时刻 $t_f$ 自由时还需补充 $H(t_f)=0$（参数条件）。

状态方程 $\dot{\mathbf{x}}=\partial H/\partial\boldsymbol{\lambda}$ 与伴随方程共同构成 $2n$ 维 Hamilton 正则系统，与极小化条件及横截条件联立定义最优轨迹。

## 航天器轨迹优化中的协态分量

以连续推力航天器为例，状态 $\mathbf{x}=(\mathbf{r},\mathbf{v},m)$，控制 $\mathbf{u}=(\hat{\mathbf{T}},T)$：

$$H=L+\boldsymbol{\lambda}_r^{\!\top}\mathbf{v}+\boldsymbol{\lambda}_v^{\!\top}(\mathbf{g}(\mathbf{r})+T\hat{\mathbf{T}}/m)-\lambda_m T/(I_{sp}g_0).$$

- **位置协态 $\boldsymbol{\lambda}_r$**：$\dot{\boldsymbol{\lambda}}_r=-\partial H/\partial\mathbf{r}$，由引力梯度驱动。
- **速度协态 $\boldsymbol{\lambda}_v$**：当 $H$ 不显含 $\mathbf{v}$ 时 $\dot{\boldsymbol{\lambda}}_v=-\boldsymbol{\lambda}_r$。最优推力方向为 $-\boldsymbol{\lambda}_v/\|\boldsymbol{\lambda}_v\|$，因此 $-\boldsymbol{\lambda}_v$ 即 [引燃矢量](/glossary/dynamics/primer-vector/)（Lawden 1963；Conway 2010, Ch.2）。
- **质量协态 $\lambda_m$**：$\dot{\lambda}_m=\|\boldsymbol{\lambda}_v\|T/m^2\geq 0$，单调上升。**切换函数** $\rho=1-\lambda_m I_{sp}g_0/m-\|\boldsymbol{\lambda}_v\|$ 的符号决定 $T$ 取上限还是零，由此导出 bang-bang / bang-off-bang 控制律（见 [Bang-bang 控制](/glossary/dynamics/bang-bang-control/)）。

## 协态归一化

对**自由末态**问题，$(\boldsymbol{\lambda}(t_0),\lambda_0)$ 可乘以任意正常数而不改变最优轨迹，即 PMP 的齐次性。利用这一冗余自由度把 $\boldsymbol{\lambda}(t_0)$ 约束在单位球面 $\|\boldsymbol{\lambda}(t_0)\|=1$（或令某一分量为 1）即**协态归一化**（Thorne 1996；Oshima et al. 2017）。归一化把搜索维度从 $n$ 降至 $n-1$，并避免不同分量量纲差异导致的条件数恶化。对**最小时间**问题 $\Phi=t_f$，Hamiltonian 齐次性消失，归一化条件 $H\equiv -1$ 取而代之；对**最小燃料**问题 $L=T/(I_{sp}g_0)$，齐次性保持。

## 协态-控制变换

间接法的初始协态猜测没有物理意义，初值域难以估计。**协态-控制变换**（adjoint-control transformation，Kluever & Pierson 1995；Conway 2010, Ch.4）把设计变量从 $\boldsymbol{\lambda}(t_0)$ 改为推力方向角 $(\alpha,\beta)$ 及其变化率 $(\dot\alpha,\dot\beta)$ 的初值，加上 $\lambda_v$、$\dot\lambda_v$、$\lambda_m$ 等少数标量。这些伴随控制变量具有直接物理意义，便于工程师给出合理猜测。**隐式协态变换**（Pozzi et al. 2025）是多弧段问题的对应技术：用闭合形式关系将上一弧段末端协态映射到下一弧段始端，避免独立求解每个弧段的角点条件。

## 协态初值敏感性

间接法的核心难点是 $\boldsymbol{\lambda}(t_0)$ 数值上极不稳定，微小扰动会引起轨迹在 $t_f$ 处发散。**初始协态轨迹**（optimal initial costate locus）刻画 $\boldsymbol{\lambda}(t_0)$ 随问题参数（推力加速度、目标半径）变化的曲线族，在抛物、椭圆、螺旋等不同运动区域呈现不同特征（Thorne 1996）。实践中通常以 [同伦方法](/glossary/dynamics/homotopy-method/) 从易解的 energy-optimal 问题出发，逐步过渡到 fuel-optimal 问题。

## 应用要点

- 间接法的根本瓶颈在于协态初值的猜测与同伦路径规划，比状态初值困难一个量级。
- 大范围转移中 $\lambda_m$ 数值跨度大，常通过对数化或独立归一化避免病态。
- CR3BP-LT 的控制 Hamilton 函数 $H_{lt}=H_{nat}-\boldsymbol{\lambda}^{\!\top}\mathbf{a}_{lt}$（$\mathbf{a}_{lt}$ 为低推力加速度），在 $\mathbf{a}_{lt}$ 旋转系下固定时为新的守恒量（Cox et al. 2021）。

## 相关概念

- [庞特里亚金极值原理（PMP）](/glossary/dynamics/pontryagins-maximum-principle/)
- [哈密顿函数（Hamiltonian）](/glossary/dynamics/hamiltonian/)
- [两点边值问题（TPBVP）](/glossary/dynamics/tpbvp/)
- [引燃矢量（Primer Vector）](/glossary/dynamics/primer-vector/)
- [Bang-bang 控制](/glossary/dynamics/bang-bang-control/)
- [同伦方法（Homotopy Method）](/glossary/dynamics/homotopy-method/)
- [间接法（Indirect Methods）](/glossary/dynamics/indirect-methods/)

## 参考文献

- Bryson, A. E., & Ho, Y.-C. (1975). *Applied Optimal Control*.
- Lawden, D. F. (1963). *Optimal Trajectories for Space Navigation*.
- Betts, J. T. (2010). *Practical Methods for Optimal Control and Estimation Using Nonlinear Programming*, 2nd ed.
- Conway, B. A. (Ed.) (2010). *Spacecraft Trajectory Optimization*, Ch. 1–2, 4.
- Thorne, J. D. (1996). Optimal continuous-thrust orbit transfers. *Acta Astronautica*, 38(8), 565–578.
- Kluever, C. A., & Pierson, B. L. (1995). Optimal Earth-Moon trajectories using nuclear electric propulsion. *JGCD*.
- Oshima, K., et al. (2017). Earth-Moon transfer trajectories … *JGCD*.
- Cox, A. B., et al. (2021). CR3BP with low-thrust.
- Pozzi, E., et al. (2025). Implicit costate transformation for multi-arc optimal control.
