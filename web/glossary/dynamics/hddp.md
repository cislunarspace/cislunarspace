---
title: 差分动态规划与灵敏度矩阵方法（DDP, iLQR, HDDP and Sensitivity-Based Methods）
description: 差分动态规划（DDP）/ 迭代 LQR（iLQR）通过前向积分 + 后向扫描在标称轨迹附近做局部二次近似，把最优控制问题分解为逐级子问题；混合差分动态规划（HDDP）在 DDP 上引入增广拉格朗日与信赖域处理约束；增广拉格朗日 iLQR（AL-iLQR）把同样思路与 iLQR 一阶框架结合。本词条给出 DDP/iLQR 的算法结构、HDDP 的增广拉格朗日与信赖域子问题，并系统介绍其依赖的灵敏度工具——一阶/高阶灵敏度矩阵、最小范数更新、对偶次梯度更新、代理模型（PCE/APCE），以及在 CR3BP 小推力优化中的工程要点。
keywords: 差分动态规划, DDP, 迭代LQR, iLQR, 混合差分动态规划, HDDP, 增广拉格朗日iLQR, AL-iLQR, 灵敏度矩阵, 最小范数更新, 次梯度法, 代理模型, 多项式混沌展开
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 差分动态规划与灵敏度矩阵方法（DDP/iLQR/HDDP）
  desc: DDP/iLQR 的前向 + 后向扫描；HDDP 的增广拉格朗日 + 信赖域；及其依赖的灵敏度矩阵、最小范数更新与代理模型。
  image: /logo.png
og:
  title: 差分动态规划与灵敏度矩阵方法详解 | 术语定义
  description: 差分动态规划（DDP）/ 迭代 LQR（iLQR）通过前向积分 + 后向扫描求解最优控制；混合差分动态规划（HDDP）引入增广拉格朗日与信赖域。本词条覆盖 DDP/iLQR/HDDP/AL-iLQR 的算法结构及其依赖的灵敏度矩阵、最小范数更新、次梯度法与代理模型。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 差分动态规划与灵敏度矩阵方法详解 | 术语定义
  description: 差分动态规划（DDP）/ 迭代 LQR（iLQR）通过前向积分 + 后向扫描求解最优控制；混合差分动态规划（HDDP）引入增广拉格朗日与信赖域。本词条覆盖 DDP/iLQR/HDDP/AL-iLQR 的算法结构及其依赖的灵敏度矩阵、最小范数更新、次梯度法与代理模型。
  image: /logo.png
permalink: /glossary/dynamics/hddp/
---

# 差分动态规划与灵敏度矩阵方法（DDP, iLQR, HDDP and Sensitivity-Based Methods）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

**差分动态规划**（Differential Dynamic Programming, DDP）和**迭代线性二次型调节器**（iterative LQR, iLQR）是一类**轨迹优化**算法：在一条标称轨迹 $\bar{\boldsymbol{x}}(t), \bar{\boldsymbol{u}}(t)$ 附近对动力学和价值函数做 Taylor 展开，通过前向积分（forward pass）评估轨迹、后向扫描（backward sweep）逐级求解局部二次子问题，迭代修正控制序列 $\delta\boldsymbol{u}$ 直至收敛。它们把 Bellman 动态规划从高维状态空间降为沿轨迹的一维递推，是直接配点法之外求解连续小推力最优控制问题的主流途径（Mayne 1966；Jacobson & Mayne 1970；Todorov & Li 2005）。

地月空间任务中的代表实现包括：**HDDP**（Hybrid DDP，Lantoine & Russell 2012；Aziz 等 2019）、**AL-iLQR**（Augmented Lagrangian iLQR，Cuevas del Valle 等 2022）、**MDDP**（多重打靶 DDP，Pellegrini & Russell）等。这些算法在 CR3BP 中求解 DRO ↔ DRO、Lyapunov ↔ Lyapunov、$L_1$ Halo ↔ $L_2$ Halo 之间的低推力转移。

## 算法结构：前向 + 后向

把轨迹离散为 $M$ 个阶段，每阶段状态转移 $\boldsymbol{x}_{k+1}=\boldsymbol{f}(\boldsymbol{x}_k,\boldsymbol{u}_k)$，目标

$$
J = \sum_{k=0}^{N-1} L(\boldsymbol{x}_k,\boldsymbol{u}_k) + \varphi(\boldsymbol{x}_N)。
$$

**前向积分**：以当前控制猜测 $\bar{\boldsymbol{u}}$ 数值积分动力学，得到 $\bar{\boldsymbol{x}}_{k}$ 并累计代价。

**后向扫描**：从终端时刻倒向递推价值函数 $V$ 的 Taylor 系数。DDP 用到二阶（含 $V_{xx}$），iLQR 只用一阶（用 $\boldsymbol{Q}_{xx}$ 替代 $V_{xx}$、忽略 $V_{ux}$ 的二阶贡献）。每级解出局部二次子问题

$$
\delta\boldsymbol{u}_k^* = \arg\min_{\delta\boldsymbol{u}}\big[J_{u,k}^T\delta\boldsymbol{u} + \tfrac{1}{2}\delta\boldsymbol{u}^T J_{uu,k}\delta\boldsymbol{u}\big],
$$

得到 $\delta\boldsymbol{u}_k = -J_{uu,k}^{-1}J_{u,k} + \boldsymbol{K}_k\,\delta\boldsymbol{x}_k$（前一项是开环修正、后一项是时变反馈增益）。iLQR 与 DDP 的区别在于 $\boldsymbol{K}_k$ 的具体表达——iLQR 不计算 $\boldsymbol{f}_{xx}$ 等二阶动力学导数，工程实现更轻量。

**收敛判据**：可行性（约束残差 $\|\boldsymbol{\psi}\|<\varepsilon_f$）+ 最优性（梯度范数 $<\varepsilon_o$），通常 $\varepsilon_f\sim 10^{-7}$、$\varepsilon_o\sim 10^{-8}$（Aziz 等 2019）。

## HDDP：增广拉格朗日 + 信赖域

标准 DDP 仅处理无约束、固定端点问题。**HDDP**（Lantoine & Russell）在终端约束 $\boldsymbol{\psi}(\boldsymbol{x}_N)=\boldsymbol{0}$ 上同时施加拉格朗日乘子项和二次罚函数项，构造增广拉格朗日

$$
\tilde\varphi = \varphi + \boldsymbol{\lambda}^T\boldsymbol{\psi} + \boldsymbol{\psi}^T\boldsymbol{\Sigma}\boldsymbol{\psi}，
$$

其中 $\boldsymbol{\Sigma}$ 为罚矩阵。乘子按 $\boldsymbol{\lambda}\leftarrow\boldsymbol{\lambda}+\delta\boldsymbol{\lambda}$ 在外层更新，**$\boldsymbol{\Sigma}$ 保持常数**（不同于传统做法不断加大罚系数），由设计者观察迭代进展手工调谐。

为防止子问题更新 $\delta\boldsymbol{u}$ 步长过大导致发散，HDDP 在每级引入**信赖域**约束 $\|\boldsymbol{D}\,\delta\boldsymbol{u}_k\|\le\Delta$，子问题化为信赖域二次规划（TRQP）。$\boldsymbol{D}$ 是缩放矩阵，决定信赖域形状；当控制变量分量量级相差很大时（如推力幅值 vs 角度），需要非单位 $\boldsymbol{D}$（Lantoine & Russell 2012 给出几种缩放策略）。

## AL-iLQR：用一阶框架处理约束

**AL-iLQR**（Cuevas del Valle 等 2022）在 iLQR 一阶框架上嫁接增广拉格朗日外层，可处理等式与不等式约束，支持脉冲与连续推力混合任务。相比 HDDP 计算量更小，但收敛性略弱。

## 灵敏度工具：DDP/iLQR 的底座

DDP/iLQR 的后向扫描本质上是在传播目标函数对控制的**灵敏度**（gradient 与 Hessian）。多个相关概念在族内被单独收录，归并入本词条：

**灵敏度矩阵（Sensitivity Matrix）。** 状态对设计变量（初始条件、控制、参数）的偏导数矩阵。对 Lambert 问题等两点边值问题，输出 $\boldsymbol{y}$ 对输入 $\boldsymbol{x}$ 的高阶灵敏度矩阵可由 Conjugate Unscented Transform（CUT）等非乘积求积法在少数样本下数值估计（Hall & Singla 2020），用于不确定性传播、可达集计算，构成原问题的**代理模型**。

**最小范数更新（Minimum-Norm Update）。** 微分修正中，当目标状态分量数少于控制自由度时（欠定系统），用伪逆 $\delta\boldsymbol{u}=\boldsymbol{J}^T(\boldsymbol{J}\boldsymbol{J}^T)^{-1}\delta\boldsymbol{y}$ 取 $\|\delta\boldsymbol{u}\|$ 最小的修正，等价于带 $Q=0$、$R=I$ 的瞬时 LQR 解。这是平动点轨道保持、机动定位中常用的低能耗修正策略（Shimane 等 2025）。

**次梯度法（Subgradient Method）。** 用于带约束优化中对偶变量（拉格朗日乘子）的更新，当对偶函数不可微时取其次梯度方向逐步收窄对偶间隙。它在 HDDP/AL-iLQR 中与增广拉格朗日交替使用，也用于序列凸优化、对偶分解。

**代理模型（Surrogate Model）。** 用低计算代价的多项式（如多项式混沌展开 PCE、APCE）、高斯过程或神经网络近似昂贵的高保真模型。Hall & Singla（2020）用 HOSM 的多项式系数代理 Lambert 求解器以快速计算不确定 Lambert 问题的输出 PDF；Duan 等（2025）用 APCE 代理 Lambert 求解器处理多圈不确定 Lambert 问题。

## 工程要点（CR3BP 小推力优化）

- **球面控制变量 + 信赖域缩放。** Aziz 等（2019）把推力分解为幅值 $T$ 与方向角 $\alpha,\beta$（见 [控制参数化](/glossary/dynamics/control-parametrization/)），并对信赖域做归一化：幅值按 $T_{\max}$ 归一、角度允许较大步长。当 $\boldsymbol{r}_2$ 与速度共线导致 RSW 坐标退化时，切换为笛卡尔分量。
- **多阶段化隔离 flyby。** 单相 HDDP 在月球近距离飞越后会因敏感度爆炸而失败；用多阶段（每个飞越一段）把飞越效应局部化，是处理 CR3BP 转移的关键技巧。
- **质量泄漏防止奇异。** 滑行段 $T=0$ 时 $\dot m=0$，对 $T$ 的偏导奇异，引入质量泄漏 $\epsilon_T$（在推力幅值范数中加小常数）解决。
- **初值不可靠时与流形拼接。** HDDP 的全局搜索能力弱，工程上常用 [不变流形](/glossary/dynamics/invariant-manifold/) 拼接或 [形状基方法](/glossary/dynamics/shape-based-method/) 给出初值。
- **二阶 vs 一阶取舍。** DDP/HDDP 保留二阶动力学导数（更准、更贵、收敛域窄）；iLQR/AL-iLQR 只用一阶（更便宜、需更多迭代）。CR3BP 强非线性下 HDDP 通常更稳。

## 相关概念

- [控制参数化（Control Parametrization）](/glossary/dynamics/control-parametrization/)
- [形状基方法（Shape-Based Method）](/glossary/dynamics/shape-based-method/)
- [Gooding 方法与 Lambert 求解器](/glossary/dynamics/goodings-method/)
- [协态变量（Co-state Variables）](/glossary/dynamics/co-state-variables/)
- [庞特里亚金最小值原理（PMP）](/glossary/dynamics/pontryagins-maximum-principle/)
- [多重打靶差分动态规划（MDDP）](/glossary/dynamics/mddp/)
- [不变流形（Invariant Manifold）](/glossary/dynamics/invariant-manifold/)

## 参考文献

- Mayne, D. Q., 1966, "A second-order gradient method for determining optimal trajectories of non-linear discrete-time systems"（DDP 奠基）。
- Jacobson, D. H., Mayne, D. Q., 1970, *Differential Dynamic Programming*（DDP 的系统专著）。
- Todorov, E., Li, W., 2005, "A generalized iterative LQG method for locally-optimal feedback control of constrained nonlinear stochastic systems"（iLQR 的现代形式）。
- Lantoine, G., Russell, R. P., 2012, "A hybrid differential dynamic programming algorithm for constrained optimal control problems"（HDDP）。
- Aziz, J. D., Scheeres, D. J., Lantoine, G., 2019, "Hybrid Differential Dynamic Programming in the Circular Restricted Three-Body Problem," *JGCD*, DOI: 10.2514/1.G003617（CR3BP 中 HDDP 的工程细节，多阶段化、信赖域缩放、球面控制变量）。
- Pellegrini, E., Russell, R. P., 2017+，MDDP 多重打靶 DDP 系列。
- Cuevas del Valle, A. A., et al., 2022, AL-iLQR 算法（增广拉格朗日 + iLQR 处理脉冲与连续推力）。
- Hall, Z., Singla, P., 2020, "Higher-order sensitivity matrix method for probabilistic solution to uncertain Lambert problem and reachability set problem," *Celest. Mech. Dyn. Astron.*（HOSM、CUT、代理 Lambert 求解器）。
- Duan, J., et al., 2025, "Adaptive polynomial chaos expansion method for uncertain multiple-revolution Lambert problem"（APCE 代理模型）。
- Shimane, D., et al., 2025（最小范数更新在低能耗轨道修正中的应用）。
