---
title: Gooding 方法与轨道边值问题数值求解器（Gooding's Method, Lambert Solvers and BVP Iterative Methods）
description: 本词条合并讲解地月空间任务常用的几类两点边值问题（BVP）数值求解器：Gooding（1990）Lambert 算法与 Gooding（1996）三视线初轨确定方案、求解飞行时间方程的高阶迭代（Householder 三阶、Powell 混合、割线/双点法）、解非线性 TPBVP 的拟线性化方法（含延拓法框架），以及平动点轨道保持专用的阻尼二分修正法。给出 Gooding 算法在现代 Lambert 求解器中的定位、飞行时间方程根迭代的算法取舍、拟线性化相比微分修正的二阶收敛优势，以及阻尼二分在 Halo 强非线性相空间中的鲁棒性。
keywords: Gooding方法, Gooding方案, Lambert求解器, Householder方法, Powell混合算法, 双点迭代法, 割线法, 拟线性化, 阻尼二分修正, 两点边值问题, 初轨确定
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Gooding 方法与轨道 BVP 数值求解器
  desc: Gooding Lambert 算法、Gooding 三视线 IOD、Householder/Powell/双点根迭代、拟线性化与阻尼二分修正。
  image: /logo.png
og:
  title: Gooding 方法与轨道边值问题数值求解器详解 | 术语定义
  description: 本词条合并讲解 Gooding Lambert 算法、Gooding 三视线初轨确定方案、Householder/Powell/双点迭代根求解、拟线性化方法与 Halo 轨道保持的阻尼二分修正。给出各方法的算法定位、收敛性与适用场景。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Gooding 方法与轨道边值问题数值求解器详解 | 术语定义
  description: 本词条合并讲解 Gooding Lambert 算法、Gooding 三视线初轨确定方案、Householder/Powell/双点迭代根求解、拟线性化方法与 Halo 轨道保持的阻尼二分修正。给出各方法的算法定位、收敛性与适用场景。
  image: /logo.png
permalink: /glossary/dynamics/goodings-method/
---

# Gooding 方法与轨道边值问题数值求解器（Gooding's Method, Lambert Solvers and BVP Iterative Methods）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

地月空间任务大量出现"两端状态已知、中间动力学已知、求控制或轨道"的两点边值问题（TPBVP）：Lambert 问题、初轨确定、平动点轨道保持机动定位等。本词条合并收录这类问题在数值上常用的求解器：Gooding 系列（Lambert 算法 + 三视线初轨确定）、单变量根迭代法（Householder、Powell 混合、割线/双点法）、非线性 TPBVP 的拟线性化方法，以及 Halo 轨道保持专用的阻尼二分修正法。

## Gooding 的两个不同方法

**Gooding（1990）Lambert 算法。** 现代最广泛使用的 Lambert 求解器之一，给出由 $\boldsymbol{r}_1, \boldsymbol{r}_2, t_f$ 计算 $\boldsymbol{v}_1$ 的高效稳定算法。算法用 Lagrange 形式的飞行时间方程（半长轴或等价变量的函数），结合超几何函数与一个高效率的初值猜测（覆盖多圈、短/长途径、椭圆/抛物/双曲分支），数值性能与稳健性优于 Gauss 原始方法（Battin 1999；Vallado 2022）。多数现代 Lambert 实现都以 Gooding 算法作为基准。

**Gooding（1996）三视线初轨确定（IOD）方案。** 与 Lambert 算法不同——这是从三个视线方向观测确定一条轨道的方法。最小情况下仅需三个方向观测 $\hat{\boldsymbol{\rho}}_1, \hat{\boldsymbol{\rho}}_2, \hat{\boldsymbol{\rho}}_3$，方案把 IOD 化为反复求解一个 Lambert 问题（给定两端距离 + 时间，求速度），迭代收敛到一致的轨道。形式简洁、计算高效，可自然推广到多观测数据。

读 Gooding 论文时**先确认是哪一个**：1990 是 Lambert solver，1996 是 IOD scheme。

## 飞行时间方程的根迭代求解

Lambert 问题最终归结为求一个标量方程（飞行时间方程）的根。常用单变量迭代法：

**Householder 方法。** 高阶迭代法，$p$ 阶 Householder 用到 $f$ 的前 $p$ 阶导数，收敛阶为 $p+1$。三阶 Householder（$\mathcal{O}(4)$ 收敛）在 Lambert 问题中常用，几次迭代即达机器精度。代价是每次迭代要算 $f', f'', f'''$，对复杂飞行时间函数不便宜。

**Powell 混合算法（Powell's hybrid method）。** 把 Newton 法与割线法思路混合：在离根较远时用更稳健的步长限制，靠近根后切换到快速 Newton 收敛。Powell 1970 原作用于非线性方程组；在延拓法（continuation method）的每一步成功积分后做修正迭代时常被引用（Yoon & Petukhov 2023 在月球低推力转移中用）。

**双点迭代法（two-point method / 割线法 secant）。** 用前两次出离角与飞行时间的估计值，构造割线

$$
\gamma_{n+1} = \gamma_n - (\gamma_n - \gamma_{n-1})\frac{t_n - t_f}{t_n - t_{n-1}},
$$

每步只需一次函数求值（无需导数），实现简单。Nelson & Zarchan（1992）把这一思路用于 Lambert 问题，把迭代变量从半长轴换成"出离角"（flight-path angle），因为飞行时间对出离角的二阶导较小，割线法表现良好；典型算例 8 位有效精度只需数次迭代。

**取舍。** Householder 收敛快但需高阶导；Newton（二阶）折中；割线/双点法只需函数值但收敛阶 $\approx 1.618$。Lambert 问题中飞行时间函数性态良好，工程上**Gooding 算法 + 内置切换的多圈处理**通常胜过裸用上述任一方法。

## 拟线性化方法（Quasilinearization）

拟线性化把非线性 TPBVP 转化为一系列**线性** TPBVP 迭代求解。给定非线性方程 $\dot{\boldsymbol{x}}=\boldsymbol{f}(\boldsymbol{x},\boldsymbol{u},t)$ 与边值条件，在当前猜测 $(\bar{\boldsymbol{x}}, \bar{\boldsymbol{u}})$ 处线性展开

$$
\delta\dot{\boldsymbol{x}} = \boldsymbol{A}(t)\delta\boldsymbol{x} + \boldsymbol{B}(t)\delta\boldsymbol{u},\qquad \boldsymbol{A}=\partial\boldsymbol{f}/\partial\boldsymbol{x}\big|_{\bar{\boldsymbol{x}},\bar{\boldsymbol{u}}},\ \ \boldsymbol{B}=\partial\boldsymbol{f}/\partial\boldsymbol{u}\big|_{\bar{\boldsymbol{x}},\bar{\boldsymbol{u}}}。
$$

求解线性 TPBVP 得到 $\delta\boldsymbol{x},\delta\boldsymbol{u}$，更新 $\bar{\boldsymbol{x}}\leftarrow\bar{\boldsymbol{x}}+\delta\boldsymbol{x}$，重复。**与一阶微分修正（differential correction）相比，拟线性化在更新中考虑了二阶项**，二阶收敛、收敛后精度更高，适合在轨自主制导场景（Wang 等 2024 用于地月低能转移自主制导）。代价是每步需要构造并求解线性 TPBVP（通常用 [多重打靶](/glossary/dynamics/differential-correction/) 或 [状态转移矩阵](/glossary/dynamics/variational-equations/)）。

## 阻尼二分修正（Damped Bisection Correction）

平动点轨道保持的机动定位中，标准微分修正（基于一阶 STM）在 Halo 轨道附近的强非线性相空间中容易发散，或收敛到所需 $\Delta V$ 过大的解。**阻尼二分修正法**（Folta 等 2010）是一种鲁棒的回退策略：当迭代进入"错误区域"（积分到达时间上限仍未满足约束条件）时，自动把速度修正量减半并回退，逐步缩小修正步长，直至迭代跳出错误区域并找到满足终止条件的解。

算法流程：

1. 用当前修正量 $\delta\boldsymbol{v}$ 做一次积分；
2. 若到达终止条件（命中目标），接受；
3. 若超出时间上限仍未命中，令 $\delta\boldsymbol{v}\leftarrow\delta\boldsymbol{v}/2$，回退重试；
4. 步长缩到下界仍未成功则报告失败。

代价是收敛速度变慢（最坏情况下退化为二分搜索），但**对初始猜测和强非线性极其鲁棒**，是 Halo/NRHO 长期保持任务的工程常用兜底方法。

## 应用要点

- **Lambert 求解器选 Gooding。** 现代实现中 Gooding 算法已是事实标准；自己写 Newton/Householder 求根只有在需要特殊处理（如多圈、不确定 Lambert）时才有理由。
- **拟线性化 vs 微分修正。** 当收敛慢或精度要求高时换拟线性化；常规轨道修正用一阶微分修正已足够。
- **阻尼二分作为兜底。** 在 Halo 强非线性区域，先把阻尼二分作为后备方案，能显著提高在轨算法的成功率。
- **初轨确定的数据条件。** Gooding 1996 方案要求视线方向观测时间间隔适当、弧长足够；过短导致病态。
- **三体 Lambert。** 上述二体 Lambert 求解器在 CR3BP 中只是初值，需配合 [多重打靶](/glossary/dynamics/differential-correction/) 或 [HDDP](/glossary/dynamics/hddp/) 精修。

## 相关概念

- [Lambert 问题（Lambert's Problem）](/glossary/fundamentals/lamberts-problem/)
- [变分方程与状态转移矩阵（Variational Equations）](/glossary/dynamics/variational-equations/)
- [直接配点法（Direct Collocation / Differential Correction）](/glossary/dynamics/differential-correction/)
- [差分动态规划（DDP/iLQR/HDDP）](/glossary/dynamics/hddp/)
- [协态变量（Co-state Variables）](/glossary/dynamics/co-state-variables/)
- [时间最优转移（Time-Optimal Transfer）](/glossary/dynamics/fuel-optimal/)

## 参考文献

- Gooding, R. H., 1990, "A procedure for the solution of Lambert's orbital boundary-value problem," *Celest. Mech. Dyn. Astron.*（Gooding Lambert 算法）。
- Gooding, R. H., 1996, "A new procedure for the solution of the classical problem of minimal orbit determination from three lines of sight," *Celest. Mech. Dyn. Astron.*（Gooding 三视线 IOD 方案）。
- Battin, R. H., 1999, *An Introduction to the Mathematics and Methods of Astrodynamics*（Lambert 问题与飞行时间方程的经典教材）。
- Vallado, D. A., 2022, *Fundamentals of Astrodynamics and Applications*（现代 Lambert 算法的工程对比基准）。
- Nelson, S., Zarchan, P., 1992, "Alternative approach to the solution of Lambert's problem," *J. Guid. Control Dyn.*（出离角迭代 + 双点/割线法）。
- Powell, M. J. D., 1970, "A hybrid method for nonlinear equations"（Powell 混合算法）。
- Wang, Y., et al., 2024, "Low-energy earth–moon transfer autonomous guidance considering high-fidelity orbital dynamics"（拟线性化用于地月低能转移自主制导）。
- Folta, D., et al., 2010（阻尼二分修正应用于平动点轨道保持）。
- Yoon, S., Petukhov, V., 2023, "Minimum-fuel low-thrust trajectories to the moon"（Powell 混合在延拓法中的应用）。
