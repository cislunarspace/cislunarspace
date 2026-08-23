---
permalink: /glossary/dynamics/hermite-simpson-method/
title: 直接配点法（Hermite-Simpson / 直接转录）
description: 将连续最优控制问题通过时间离散、状态与控制变量在网格点上的多项式插值和配点处缺陷约束，转录为有限维非线性规划（NLP）的数值方法族。覆盖Hermite-Simpson缺陷、梯形配点、伪谱法、分段多项式控制参数化、微分代数方程（DAE）与自动微分（AD）的作用、网格自适应精化、以及业务软件。
keywords: 直接配点法, 直接转录, Hermite-Simpson, 最优控制, 非线性规划, NLP, 配点法, 分段多项式控制, 微分代数方程, DAE, 自动微分, AD, 轨迹优化, 航天动力学, 地月空间
---

# 直接配点法（Hermite-Simpson / 直接转录）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

直接配点法（direct collocation）又称直接转录（direct transcription），将连续最优控制问题转化为有限维非线性规划（NLP）。时间域被分割为 $M$ 个区间，网格点 $t_0 < t_1 < \dots < t_M = t_f$。NLP 决策变量是每个网格点上的状态值 $\mathbf{y}_j$ 和控制值 $\mathbf{u}_j$（外加参数 $\mathbf{p}$ 和可选的时间 $t_0$、$t_f$）。在每个区间上，插值多项式逼近状态，一个**缺陷约束（defect constraint）**迫使其导数与动力学方程 $\mathbf{f}(\mathbf{y}, \mathbf{u}, \mathbf{p}, t)$ 在该区间内若干**配点（collocation point）**处匹配，从而将 ODE 系统替换为代数等式约束 $\boldsymbol{\zeta}_j = 0$（Betts 1998）。

## 为什么用直接配点

- **无需推导伴随方程。**与[间接法](/glossary/dynamics/indirect-methods/)不同，直接法不需要协态方程、横截条件或极大值原理，用户只需提供动力学、约束和目标函数。

- **无需事先指定约束子弧序列。**路径不等式约束由 NLP 的 active-set 策略处理，用户不必猜测哪些子弧受约束、哪些自由。

- **NLP 稀疏结构。**缺陷约束仅耦合相邻网格点，雅可比矩阵和 Hessian 矩阵具有稀疏性，可被稀疏 NLP 解算器高效利用。

主要代价：NLP 规模大，一个 7 状态、2 控制、每段 100 网格点、共 5 段的问题，产生约 4500 个 NLP 变量（Betts 1998）。稀疏性的高效利用是关键。

## Hermite-Simpson 缺陷

**Hermite-Simpson 方法**是缺陷约束最常用的选择之一（Betts 1998; Hargraves and Paris 1987）。在区间 $[t_j, t_{j+1}]$，长 $h_j = t_{j+1} - t_j$ 上，用端点状态和动力学构建三次 Hermite 插值多项式：

$$
\bar{\mathbf{y}}_{j+\frac12} = \frac{1}{2}(\mathbf{y}_j + \mathbf{y}_{j+1}) + \frac{h_j}{8}\left[\mathbf{f}_j - \mathbf{f}_{j+1}\right]
$$

再通过 Simpson 积分法则施加缺陷：

$$
\boldsymbol{\zeta}_j = \mathbf{y}_{j+1} - \mathbf{y}_j - \frac{h_j}{6}\left[\mathbf{f}_j + 4\bar{\mathbf{f}}_{j+\frac12} + \mathbf{f}_{j+1}\right] = 0
$$

其中 $\bar{\mathbf{f}}_{j+\frac12} = \mathbf{f}(\bar{\mathbf{y}}_{j+\frac12}, \bar{\mathbf{u}}_{j+\frac12})$，$\bar{\mathbf{u}}_{j+\frac12}$ 或由插值求得，或作为中点上的额外 NLP 变量。该方法是 3 阶隐式 Runge-Kutta 格式（Betts 1998）。

## 控制参数化

连续控制函数 $\mathbf{u}(t)$ 必须用有限参数表达。常见方案由简至繁：

- **线性插值参数化：**控制值在网格点上定义，网格点之间线性插值。最简单的方案，对应分段线性控制，对小推力转移等许多问题已足够（Kluever 1997）。

- **分段多项式控制：**控制函数在各网格区间上表示为一个多项式，多项系数作为 NLP 变量。高次多项式可用较少网格区间达到同等精度，是线性插值的推广。

- **伪谱法**（如 Gauss、Radau、Legendre 伪谱法）：使用全局多项式，配点取在正交多项式根上。对光滑问题指数收敛，但遇到间断时性能下降。

## 最优控制中的微分代数方程（DAE）

最优控制必要条件本身就是 DAE 系统：状态方程 $\dot{\mathbf{y}} = \mathbf{f}$（微分部分），最优性条件 $\mathbf{H}_{\mathbf{u}}^{\top} = 0$（代数部分），以及协态方程。DAE 的**指标（index）**衡量将代数方程化为显式 ODE 所需的微分次数（Betts 1998, Sec. V.A）。指标 1 的 DAE（路径约束矩阵 $\partial\mathbf{g}/\partial\mathbf{u}$ 满秩）可用 DASSL 等标准方法求解（Petzold 1982）；指标 $\ge 2$ 需指标约减（对代数约束微分）引入数值漂移，需要专门的配点格式。

在直接转录中，NLP 本身就是一个大的代数约束系统（缺陷约束）；对指标 1 的问题，只要网格足够密，由隐函数定理保证 NLP 是良定的。

## 自动微分（AD）

NLP 解算器需要约束和目标函数的一阶导数（雅可比矩阵 $\mathbf{G}$）乃至二阶导数（Hessian 矩阵 $\mathbf{H}_L$）。手工推导不可能覆盖所有模型组合，有限差分引入截断误差且扩展性差。**自动微分（AD）**在源码级别介入，通过链式法则对基本运算做导数传播，给出机器精度的梯度和 Hessian，无截断误差（Betts 1998, Sec. VI.F.2），且在处理大型稀疏 DAE 系统时计算量取决于耦合宽度而非总变量数。

早年的轨迹优化工具依赖稀疏有限差分。ADIFOR（Bischof et al. 1992）和后来的 CasADi 等框架使 AD 成为主流途径。

## 网格精化：h 法与 p 法

- **h 精化：**在局部误差超限区域增加网格区间数（减小 $h$）。

- **p 精化：**保持区间数不变，提高每个区间上的多项式阶数。
多数业务软件采用 h 精化配以固定的低阶多项式（梯形或 Hermite-Simpson，分别为 $k=2$ 和 $k=3$ 方法），自动化简单（Betts 1998）。

## 代表性软件

- **OTIS**（Optimal Trajectories by Implicit Simulation）：Hargraves and Paris（1987）原创，采用 Hermite-Simpson 缺陷 + NPSOL；后集成 SOCS（Sparse Optimal Control Software）。

- **GPOPS-II**：MATLAB 平台 hp 自适应伪谱法（Rao et al.）。

- **DIDO**：伪谱最优控制求解器（Ross）。

- **CasADi + IPOPT**：开源组合，在学术和工业航天轨迹优化中广泛使用。

## 在地月空间轨迹中的应用

直接配点被广泛用于地月空间轨迹优化：小推力地月转移、halo 轨道维持律设计、多天体借力序列规划。Hermite-Simpson 方法已应用于航天飞机再入、小推力轨道转移和行星际轨迹（Betts 1998）。由于 CR3BP 运动方程光滑，伪谱法可在极少的配点节点上实现高精度。

## 相关概念

- [间接法（Indirect Methods）](/glossary/dynamics/indirect-methods/)

- [龙格-库塔法（Runge-Kutta）](/glossary/fundamentals/rk/)

- [多步积分器（Adams-Cowell, Gauss-Jackson）](/glossary/dynamics/adams-cowell-integrator/)

- [状态转移矩阵（STM）](/glossary/fundamentals/stm/)

- [高斯伪谱法（GPM）](/glossary/dynamics/pseudospectral-method/)

- [形状基法（Shape-Based Method）](/glossary/dynamics/shape-based-method/)

## 参考文献

- Betts, 1998, *Survey of Numerical Methods for Trajectory Optimization*, J. Guidance, Control, and Dynamics 21(2):193–207（综合综述；Hermite-Simpson 缺陷 Eq. 98–99；直接转录公式；DAE 指标分析；AD 讨论）

- Hargraves and Paris, 1987, *Direct Trajectory Optimization Using Nonlinear Programming and Collocation*, J. Guidance 10(4):338–342（OTIS 的 Hermite-Simpson 转录原始方案）

- Serban et al., 2002, *Halo Orbit Mission Correction Maneuvers Using Optimal Control*, Acta Astronautica（halo 轨道维持最优控制的 DAE 形式）

- Petzold, 1982, *A Description of DASSL: A Differential/Algebraic System Solver*, Sandia Report SAND82-8637

- Bischof et al., 1992, *ADIFOR: Generating Derivative Codes from Fortran Programs*, Scientific Programming 1(1):11–29

- Kluever, 1997, *Optimal Earth-Moon Trajectories Using Combined Chemical-Electric Propulsion*, J. Guidance 20(2):253–258（小推力转移的线性插值控制参数化）

- Gill et al., 2005, *SNOPT: An SQP Algorithm for Large-Scale Constrained Optimization*, SIAM Review 47(1):99–131

- Patterson and Rao, 2014, *GPOPS-II: A MATLAB Software for Solving Multiple-Phase Optimal Control Problems Using hp-Adaptive Gaussian Quadrature Collocation Methods*, ACM Trans. Math. Softw. 41(1)
