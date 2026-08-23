---
title: 单值矩阵与Floquet稳定性分析（Monodromy Matrix and Floquet Stability Theory）
description: 周期轨道稳定性分析的核心数学工具：单值矩阵是状态转移矩阵沿完整周期的取值，其Floquet乘子（特征值）直接决定轨道线性稳定/不稳定/中性——实数乘子 $\lambda_1\lambda_2=1$ 产生鞍点结构、单元模复共轭乘子指示振荡模态。覆盖Floquet定理、CR3BP共线平动点周期轨道的特征模态分解、Lyapunov指数与轨道预报误差的指数发散率、以及分岔判别（m-分岔、稳定性因子 $\nu$）。
keywords: 单值矩阵, Monodromy Matrix, Floquet乘子, Floquet理论, Floquet multiplier, 周期轨道稳定性, 鞍点结构, Lyapunov指数, 状态转移矩阵, 特征值分解, 平动点, CR3BP, center-saddle
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 单值矩阵与Floquet稳定性分析（Monodromy Matrix and Floquet Stability）
  desc: 周期轨道稳定性分析的核心框架，从单值矩阵到Floquet乘子的系统阐述。
  image: /logo.png
og:
  title: 单值矩阵与Floquet稳定性分析 | 术语定义
  description: 周期轨道稳定性分析的核心数学工具：单值矩阵是状态转移矩阵沿完整周期的取值，其Floquet乘子直接决定轨道线性稳定/不稳定/中性。覆盖Floquet定理、CR3BP共线平动点周期轨道的特征模态分解、Lyapunov指数与轨道预报误差的指数发散率。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 单值矩阵与Floquet稳定性分析 | 术语定义
  description: 周期轨道稳定性分析的核心框架：单值矩阵→Floquet乘子→稳定/不稳定模态，覆盖特征向量指示的不变流形方向与Lyapunov指数型发散。
  image: /logo.png
permalink: /glossary/dynamics/monodromy-matrix/
---

# 单值矩阵与Floquet稳定性分析（Monodromy Matrix and Floquet Stability Theory）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

单值矩阵（monodromy matrix）是周期系数线性系统沿一个完整周期的状态转移矩阵 $M = \Phi(T, 0)$，其中 $T$ 为周期轨道的周期，$\Phi(t, 0)$ 为变分方程（variational equation）的基本解矩阵。单值矩阵的特征值称为 Floquet 乘子（Floquet multipliers），它们是判断周期轨道线性稳定性的唯一判据（Gómez et al. 2001, Ch.1；Meyer, Hall & Offin 2017, §4.3）。

Floquet定理（Floquet-Lyapunov theorem）指出：周期哈密顿系统的状态转移矩阵可唯一分解为周期辛矩阵与指数矩阵的乘积 $\Phi(t, 0) = P(t) e^{t K}$，其中 $P(t+T) = P(t)$、$K$ 为常数阵。单值矩阵等同于 $M = e^{T K}$，其特征值 $\lambda_i$ 按 $|\lambda_i|$ 分为三类模态：

- $|\lambda_i| > 1$：**不稳定模态**：相邻轨道指数发散；

- $|\lambda_i| = 1$：**中性/中心模态**：周期或拟周期振荡；

- $|\lambda_i| < 1$：**稳定模态**：相邻轨道指数收敛。

## CR3BP 周期轨道的 Floquet 模态分解

CR3BP 的完整状态空间为 6 维（3 位置 + 3 速度），但雅可比常数约束了一阶守恒量，因此单值矩阵的 6 个 Floquet 乘子满足辛共轭性质：若 $\lambda$ 是乘子，则 $\bar{\lambda}, 1/\lambda, 1/\bar{\lambda}$ 也是乘子（Meyer, Hall & Offin 2017）。对共线平动点邻域的周期轨道，典型情况为：

1. **一对实根**：$\lambda_1 > 1$，$\lambda_2 = 1/\lambda_1 < 1$，表征鞍点结构（center-saddle）。$\lambda_1$ 对应不稳定方向，其右特征向量 $w_u$ 给出相邻轨道沿不稳定流形指数发散的局部方向；$\lambda_2$ 对应稳定方向，其右特征向量 $w_s$ 给出相邻轨道沿稳定流形指数收敛的方向。二者共同定义了不变流形在周期轨道每个点上的局部切向（Gómez et al. 2001, Ch.1）。

2. **一对共轭复根**：$|\lambda_{3,4}| = 1$，描述面内 Lyapunov 中心族的振荡模态，对应的中心 Floquet 模态产生准周期轨道（如准Halo、拟周期DRO）。

3. **两个平凡根**：$\lambda_5 = \lambda_6 = 1$，对应轨道自身的周期方向（沿切向平移）和雅可比守恒量方向（能量变化零方向）。沿轨道方向的扰动不改变轨道的空间形状而只改变相位。

对不稳定周期轨道（如 Halo 轨道、Lyapunov 轨道），稳定性由主导实乘子 $\lambda_u$ 的大小决定。稳定性因子（stability factor）定义为 $\nu = (|\lambda_u| + |\lambda_s|)/2$，最小值为 1（线性稳定），趋势越大越不稳定（Acta Phys. Sin. 63, 248402, 2014）。

小偏值 Halo 轨道的地月系 Floquet 实数乘子通常远大于 1（受轨道幅值、所绕平动点及模型影响，量级在数百到数千），这给出相邻轨道每圈发散的倍数。若沿不稳定方向存在初始偏差 $\delta x_0$，一周后偏差为 $\lambda_u \cdot \delta x_0$，$n$ 周后为 $\lambda_u^n \cdot \delta x_0$，这正是**平动点轨道误差指数发散**（exponential error divergence）的数学根源。

## 轨道预报误差与指数发散率

给定共线平动点附近的初始偏差 $\Delta X_0$，预报 $T$ 天后误差范数按 $\|\Delta X(T)\| \approx \|\Delta X_0\| \cdot e^{\delta T}$ 增长，其中发散率 $\delta$ 由主导 Floquet 乘子 $|\lambda_u|$ 与周期 $P$ 的关系给出：

$$
\delta \approx \frac{\ln|\lambda_u|}{P}
$$

邓辉等（2017）给出地月系共线平动点轨道 $\delta \approx 0.5\ \text{day}^{-1}$，意味着几十米的初始位置误差在约 10 天发散至几十千米量级。理解发散率对设计星上轨道预报系统（如何时重定轨、预报窗口多长）至关重要。

值得注意的是，无论初始误差的方向如何，长时间演化后的终了误差方向均趋向于主导不稳定特征向量 $w_u$ 方向，这一性质在工程上称为**不稳定方向对齐**，意味着轨道维持控制应优先消去 $w_u$ 方向的分量。

## 分岔判别：从 Floquet 乘子穿越单位圆

当周期轨道族的参数变化（如DRO族的Jacobi常数变化）时，Floquet乘子在复平面上穿越单位圆即对应分岔事件。分岔类型由穿出方式判别：

- **切穿（$+1$ 穿越）**：对应新旧周期轨道族的相切分岔（tangent bifurcation）。

- **$-1$ 穿越**：对应倍周期分岔（period-doubling bifurcation），产生原周期两倍的新轨道族。

- **复共轭对穿越**：对应 Neimark-Sacker（环面）分岔，产生不变环面（拟周期轨道）。

在 DRO 族上，**m-分岔**（m-bifurcation）是一类特殊的倍周期型分岔：平面 DRO 族中某条特定轨道在 $m$ 次返回后成为分岔点，由此产生 $m$ 分岔空间周期轨道族（如 5 分岔平面 DRO 绕 5 圈后分岔出三维空间轨道族）。Gao & Hou (2020) 通过分析单值矩阵的第 $m$ 次幂 $M^m$ 的特征值穿越单位圆的时刻，得到了 DRO 全族的分岔图谱。

## 平衡点与鞍点结构：Floquet 分析的零阶基础

周期轨道的 Floquet 模态分解建立在对**平衡点**（equilibrium point/平动点）邻域线性化分析的基础上。CR3BP 的 5 个平动点中：

- 共线平动点（$L_1, L_2, L_3$）的线性化系统具有鞍点型特征值（一对实特征值 $\pm d_1$ 加两对纯虚特征值 $\pm i \lambda_2$, $\pm i \lambda_3$），在平面投影中呈现**中心-鞍点**（center-saddle）结构。中心方向对应有界运动，鞍点方向产生双曲效应，即周期轨道的稳定流形与不稳定流形存在的几何根源（Szebehely 1967；Meyer, Hall & Offin 2017）。

- 三角平动点（$L_4, L_5$）当 $\mu < \mu_0 \approx 0.0385$（地月系 $\mu \approx 0.01215$ 满足）时，线性化系统具有三对纯虚特征值，即**中心-中心-中心**型线性稳定，但非线性效应和太阳引力摄动会在实用时间尺度上引入弱不稳定性。

Conley（1968）的平衡区域（equilibrium region）理论揭示了共线平动点邻域一个重要的几何事实：当雅可比常数略高于临界值 $C_i$ 时，Hill 区域中会打开一条狭窄的连通通道（颈），允许两个主天体之间的轨道穿越。平衡区域内的动力学由线性化方程精确定性，且经由 Moser 对 Lyapunov 定理的推广，线性结论的定性结果均适用于完整非线性方程。这一观察是后续所有不变流形拼接理论和低能转移设计（如行星际转移中的瓣叶动力学）的几何出发点。

## 应用要点

- **轨道稳定性评估**：计算单值矩阵的 Floquet 乘子是评估任何数值计算出的参考轨道的线性稳定性的标准步骤。模大于 1 的乘子意味着相邻轨道指数发散，轨道维持控制是必须的。

- **不变流形方向**：不稳定和稳定特征向量 $w_u$、$w_s$ 给出流形在周期轨道每点的局部切向，是全局化流形计算和庞加莱截面拼接的输入。

- **星上预报窗口**：发散率 $\delta$ 确定在不引入轨道维持或重定轨条件下的最大有效预报窗口。

- **分岔图谱**：Floquet 乘子随参数的连续变化轨迹是周期轨道族全局分支结构的描述器：$m$ 分岔的阶数直接对应乘子 $m$ 次幂穿过单位圆的累积次数。

- **精度限制**：单值矩阵的数值精度依赖轨道积分的精度。对高能不稳定轨道（Halo 大偏值），微分修正后轨道的数值平衡精度应至少到 $10^{-12}$ 量级才能可靠计算乘子。

## 相关概念

- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)

- [状态转移矩阵（STM）](/glossary/fundamentals/stm/)

- [平动点（Libration Point）](/glossary/fundamentals/libration-point/)

- [稳定流形（Stable Manifold）](/glossary/dynamics/invariant-manifold/)

- [不稳定流形（Unstable Manifold）](/glossary/dynamics/invariant-manifold/)

- [庞加莱映射（Poincaré Map）](/glossary/dynamics/poincare-map/)

- [雅可比积分（Jacobi Integral）](/glossary/dynamics/jacobi-integral/)

- [希尔区域（Hill Region）](/glossary/dynamics/hill-region-and-hill-problem/)

- [KAM理论与长期稳定性](/glossary/dynamics/kam-theory/)

## 参考文献

- Gómez et al., 2001, *Dynamics and Mission Design near Libration Points: Vol. I: Fundamentals: The Case of Collinear Libration Points*, Ch.1（单值矩阵的定义、Floquet乘子的模态分类及特征向量）

- Meyer, Hall & Offin, 2017, *Introduction to Hamiltonian Dynamical Systems and the N-Body Problem*, 3rd ed., Springer（Floquet定理、辛矩阵特征值共轭性质的数学表述）

- Szebehely, 1967, *Theory of Orbits: The Restricted Problem of Three Bodies*（共线平动点线性化与鞍点特征值）

- Conley, 1968, "Low Energy Transit Orbits in the Restricted Three-Body Problem", SIAM J. Appl. Math.（平衡区域的几何定义和连通通道的存在性）

- Gao & Hou, 2020, "Formation of three-dimensional periodic orbits from planar periodic orbits in the Earth-Moon system"（DRO 族的 m-分岔分析，基于单值矩阵各次幂特征值穿越复平面）

- 邓辉等, 2017, "地月系共线平动点探测器的星上轨道预报问题"（误差指数发散率 $\delta \approx 0.5\ \text{day}^{-1}$ 的数值验证及不定方向对齐）

- Folta & Vaughn, 2004, "A Survey of Earth-Moon Libration Orbits: Stationkeeping Strategies and Intra-Orbit Transfers"（单值矩阵与状态转移矩阵在轨道保持控制设计中的工程应用）

- Breakwell & Brown, 1979, "The Halo Family of 3-Dimensional Periodic Orbits in the Earth-Moon Restricted 3-Body Problem", Celestial Mech., 20(4)（Halo 轨道的 Floquet 乘子及其对维持控制的含义）

- Acta Phys. Sin. 63, 248402, 2014（稳定性因子 $\nu$ 的定义与周期轨道稳定性的判别）
