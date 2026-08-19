---
title: 控制参数化与节流因子（Control Parametrization, B-Spline, Spherical Variables and Throttle）
description: 控制参数化把无限维的连续推力控制信号表达为有限个参数（多项式/Fourier 系数、B 样条控制点、球面（T,α,β）等），从而把最优控制问题转化为非线性规划。本词条系统介绍控制参数化的基本思想、B 样条基函数的连续阶与节点重复规则、球面控制变量在 CR3BP 小推力优化（HDDP）中的应用与坐标退化时的笛卡尔切换、节流因子（throttle factor）作为无量纲推力幅值变量在能量/燃料/时间最优控制中的不同取值（恒 1、由切换函数决定、bang-bang），以及多模式推进的油门函数。
keywords: 控制参数化, B样条, 球面控制变量, 节流因子, 油门函数, 多项式基, Fourier基, 推力幅值, 低推力控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 控制参数化与节流因子（Control Parametrization）
  desc: 多项式、B 样条、球面（T,α,β）、节流因子等参数化方法，把连续推力控制化为有限维 NLP。
  image: /logo.png
og:
  title: 控制参数化与节流因子详解 | 术语定义
  description: 控制参数化把连续推力控制表达为有限参数（多项式、B 样条、球面变量、节流因子），把最优控制问题转化为非线性规划。本词条覆盖 B 样条基函数、球面控制变量在 CR3BP 中的应用、节流因子在不同最优性问题中的取值与多模式油门函数。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 控制参数化与节流因子详解 | 术语定义
  description: 控制参数化把连续推力控制表达为有限参数（多项式、B 样条、球面变量、节流因子），把最优控制问题转化为非线性规划。本词条覆盖 B 样条基函数、球面控制变量在 CR3BP 中的应用、节流因子在不同最优性问题中的取值与多模式油门函数。
  image: /logo.png
permalink: /glossary/dynamics/control-parametrization/
---

# 控制参数化与节流因子（Control Parametrization, B-Spline, Spherical Variables and Throttle）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

控制参数化（control parametrization）是把无限维的连续推力控制 $\boldsymbol{u}(t)$ 表达为有限个参数的方法。设 $\boldsymbol{u}(t) = \sum_{i} c_i\,\phi_i(t)$，其中 $\{\phi_i\}$ 是选定的基函数族、$\{c_i\}$ 是待优化系数，最优控制问题就被转化为关于 $\{c_i\}$ 的非线性规划（NLP）。常用基函数族包括多项式、Fourier 级数、B 样条。**节流因子/油门函数** 是低推力发动机特有的标量/函数形式参数化，描述推力幅值随时间的变化。

## 多项式与 Fourier 基

最简单的参数化。多项式基 $\phi_i(t) = t^i$ 适合光滑控制，但高阶时数值病态；改用 Chebyshev 或 Legendre 多项式可改善条件数。Fourier 基 $\phi_i(t)=\cos(i\omega t), \sin(i\omega t)$ 适合周期性控制（如平动点轨道保持）。这两种基的缺点是全局支撑——改变一个系数会影响整段控制剖面，难以表达局部突变（如推力开关）。

## B 样条参数化

B 样条（B-spline）用分段多项式和有限支撑基函数表达控制信号，是轨迹优化中最常用的参数化形式。设控制信号表示为

$$
\boldsymbol{u}(t) = \sum_{i} \boldsymbol{P}_i\,B_{i,q}(t),
$$

其中 $\boldsymbol{P}_i$ 是控制点（优化变量），$B_{i,q}(t)$ 是 $q$ 阶（$q-1$ 次）B 样条基函数。**关键性质**：

- **局部支撑。** 每个 $B_{i,q}$ 仅在 $q$ 个节点区间非零，调整一个控制点只影响局部——这点优于全局基，特别适合含推力开关的转移。
- **连续阶。** 内部节点不重复时 $q$ 阶 B 样条保证 $C^{q-1}$ 连续；重复节点会降低该处的连续阶，可用于表达推力的不连续（如多模式推进的开关切换）。
- **凸包性。** B 样条曲线位于控制点凸包内，便于施加推力幅值约束。

Sanchez 等（2020）将 B 样条用于轨迹优化与姿态控制，可与 [直接配点](/glossary/dynamics/differential-correction/) 或 [HDDP](/glossary/dynamics/hddp/) 配合。

## 球面控制变量（Spherical Control Variables）

在 CR3BP 小推力优化中，HDDP（Aziz 等 2019）采用球面参数化：把推力分解为幅值 $T$ 与两个方向角 $\alpha,\beta$

$$
\boldsymbol{u} = [T,\alpha,\beta]^T,
$$

方向角定义在径向-横向-法向（RSW）坐标系下，转换到会合系为

$$
\begin{bmatrix}T_r\\T_s\\T_w\end{bmatrix} = \begin{bmatrix} T\sin\alpha\cos\beta\\T\cos\alpha\cos\beta\\T\sin\beta\end{bmatrix},\qquad \boldsymbol{T}_{syn} = [\hat{\boldsymbol{r}}_2\ \hat{\boldsymbol{s}}\ \hat{\boldsymbol{w}}]\boldsymbol{T}_{RSW}。
$$

**优点**：把幅值与方向解耦，幅值约束 $0\le T\le T_{\max}$ 简单，信赖域缩放可对幅值（按 $T_{\max}$ 归一）与角度（允许较大步长）独立设置。

**坐标退化处理**：当位置矢量 $\boldsymbol{r}_2$ 与速度矢量共线时，RSW 基无法定义（$\hat{\boldsymbol{s}},\hat{\boldsymbol{w}}$ 不确定），此时切换为笛卡尔控制 $\boldsymbol{u}=[T_x,T_y,T_z]^T$。

## 节流因子与油门函数

节流因子（throttle factor）是低推力发动机的**无量纲推力幅值变量** $u\in[0,1]$，$u=0$ 表示关机、$u=1$ 表示满推力，与方向角解耦。其最优值由 [庞特里亚金最小值原理](/glossary/dynamics/pontryagins-maximum-principle/) 给出的 [切换函数](/glossary/dynamics/bang-bang-control/) 决定：

- **时间最优控制**：节流恒为 1（始终满推）。
- **燃料最优控制**：节流呈 bang-bang 形式，由切换函数符号决定 0 或 1，等价于能量最优同伦的极限。
- **能量最优控制**：节流连续取值，由协态变量和同伦参数共同决定。

Du 等（2024）、Tu 等（2025）等给出 CR3BP 低推力轨道碰撞规避、Halo 转移的节流剖面实例。

**油门函数（throttle function）** 是节流因子在多模式推进系统中的推广。Zhang Z 等（2026）的双模式电推进系统用两个油门函数 $\delta_{P1}(t),\delta_{P2}(t)\in\{0,1\}$ 决定每种模式的开关状态，由 [庞特里亚金最小值原理](/glossary/dynamics/pontryagins-maximum-principle/) 导出 bang-bang 解。在 [间接法](/glossary/dynamics/indirect-methods/) 框架下，油门函数是最优控制的显式表达，而非外部施加的参数化。

## 应用要点

- **选基函数匹配物理。** 含推力开关的转移用 B 样条（局部支撑）或离散化切换函数；光滑连续低推力用 Fourier/Chebyshev。
- **球面 vs 笛卡尔。** 球面变量对方向信赖域友好、对幅值约束自然，但需处理 RSW 退化；笛卡尔变量无退化问题但幅值约束为非凸（$\|\boldsymbol{T}\|\le T_{\max}$）。
- **节流的优化变量性质。** 在间接法中节流由切换函数解析给出，**不是**优化变量；在直接法中节流在每个配点上是独立的优化变量，受路径约束 $0\le u_k\le 1$。
- **B 样条阶数选取。** 低推力通常取 3–5 阶（$C^2$–$C^4$）；阶数过高引入数值病态，过低无法表达所需的推力变化率。
- **节点重复表达不连续。** 多模式推进开关处可重复节点降低连续阶。

## 相关概念

- [差分动态规划（DDP/iLQR/HDDP）](/glossary/dynamics/hddp/)
- [庞特里亚金最小值原理（PMP）](/glossary/dynamics/pontryagins-maximum-principle/)
- [间接法（Indirect Method）](/glossary/dynamics/indirect-methods/)
- [直接配点法（Direct Collocation）](/glossary/dynamics/differential-correction/)
- [切换函数（Switching Function）](/glossary/dynamics/bang-bang-control/)
- [Bang-bang 控制](/glossary/dynamics/bang-bang-control/)
- [燃料最优控制（Fuel-Optimal Control）](/glossary/dynamics/fuel-optimal/)

## 参考文献

- de Boor, C., 1978, *A Practical Guide to Splines*（B 样条数学基础）。
- Sanchez, P., et al., 2020（B 样条控制参数化在轨迹优化与姿态控制中的应用）。
- Aziz, J. D., Scheeres, D. J., Lantoine, G., 2019, "Hybrid Differential Dynamic Programming in the CR3BP," *JGCD*（球面控制变量、RSW 退化切换、信赖域缩放）。
- Colagrossi, A., et al., 2021, "Guidance, navigation and control for 6DOF rendezvous in cislunar multi-body environment"（控制参数化与 6DOF 交会）。
- Du, L., et al., 2023, "Two trajectory configurations for the low-thrust transfer between northern and southern halo orbits"（节流因子在 Halo 转移中的应用）。
- Du, L., et al., 2024, "A novel calculation method for low-thrust transfer trajectories in the Earth-Moon restricted three-body problem"（节流参数与切换函数）。
- Tu, X., et al., 2025, "Optimal control for low-thrust collision avoidance in CRTBP"（节流因子在碰撞规避中的应用）。
- Zhang, Z., et al., 2026, *Space Sci. Technol.* 6:0441（双模式电推进的油门函数与 bang-bang 解）。
