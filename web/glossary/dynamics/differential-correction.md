---
title: 微分修正与打靶法（Differential Correction & Shooting Method）
description: 轨道力学中求解边值问题的核心数值方法：以状态转移矩阵为线性化算子，通过 Newton-Raphson 迭代修正自由变量使终端约束收敛到零。覆盖自由变量/约束方程、定步/变步打靶、多重打靶与 Howell-Pernicka 两级修正、直接/间接公式，以及 CR3BP 周期轨道与星历模型转移轨道设计中的工程要点。
keywords: 微分修正, 打靶法, differential correction, shooting method, 状态转移矩阵, 多重打靶, 两级微分修正, Newton-Raphson, 边值问题, 拼接点
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 微分修正与打靶法（Differential Correction & Shooting Method）
  desc: 用状态转移矩阵把轨道边值问题线性化，再以 Newton 迭代打到目标：周期轨道与转移轨道设计的核心算法。
  image: /logo.png
og:
  title: 微分修正与打靶法详解 | 轨道力学核心数值方法
  description: 轨道力学中求解边值问题的核心数值方法：以状态转移矩阵为线性化算子，通过 Newton-Raphson 迭代修正自由变量使终端约束收敛到零。覆盖自由变量/约束方程、定步/变步打靶、多重打靶与 Howell-Pernicka 两级修正、直接/间接公式，以及 CR3BP 周期轨道与星历模型转移轨道设计中的工程要点。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 微分修正与打靶法详解 | 轨道力学核心数值方法
  description: 轨道力学中求解边值问题的核心数值方法：以状态转移矩阵为线性化算子，通过 Newton-Raphson 迭代修正自由变量使终端约束收敛到零。
  image: /logo.png
permalink: /glossary/dynamics/differential-correction/
---

# 微分修正与打靶法（Differential Correction & Shooting Method）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

微分修正（differential correction）是轨道力学中求解边值问题（BVP）的核心迭代算法。它把动力学方程在某条参考轨迹附近做一阶 Taylor 展开，用[状态转移矩阵](/glossary/fundamentals/stm/)（State Transition Matrix, STM）$\boldsymbol{\Phi}(t,t_0)=\partial\mathbf{x}(t)/\partial\mathbf{x}_0$ 作为线性化算子，把如何调整初始自由变量才能消除末端约束残差这件事化作一个线性代数问题，再用 [Newton-Raphson 迭代](/glossary/dynamics/newton-raphson-method/)反复线性化、求解，直至残差范数 $\|\mathbf{F}\|$ 进入容差（Muralidharan 2021 Ch. 3；Vallado 2022 §10.4）。

打靶法（shooting method）是微分修正在边值问题上的标准用例：把 BVP 转化为初值问题（IVP），猜测缺失的初始条件、向前积分、检查终端残差、用 STM 反向修正，打中终端目标。两者在 CR3BP 文献里常被混用，**严格地说，微分修正指的是修正算法本身，打靶法指的是把它套到 BVP 上的求解策略**；微分修正也独立出现在轨道确定（OD）的最小二乘估计里（Vallado 2022 把 Algorithm 67 命名为 Differential Correction，即此意）。

## 数学公式

### 自由变量 / 约束方程

设 $\bar{X}\in\mathbb{R}^n$ 是待修正的自由变量（初始速度分量、轨道周期、[拼接点](/glossary/dynamics/patch-point/)状态等），$\bar{F}(\bar{X})\in\mathbb{R}^m$ 是约束残差向量（位置/速度不匹配、周期性条件、近月点高度等）。在当前迭代点 $\bar{X}_j$ 处一阶 Taylor 展开，并令 $\bar{F}(\bar{X}_{j+1})\approx\bar{0}$：

$$\bar{F}(\bar{X}_j)+D\bar{F}(\bar{X}_j)\,(\bar{X}_{j+1}-\bar{X}_j)=\bar{0}$$

其中 $D\bar{F}=\partial\bar{F}/\partial\bar{X}\in\mathbb{R}^{m\times n}$ 是约束对自由变量的雅可比矩阵。由于约束是终端状态的函数、终端状态由初始状态经动力学流映射得到，$D\bar{F}$ 的每一项都由对应弧段的 STM 给出。

### 三种求解形式

| 条件 | 自由变量数 vs 约束数 | 更新公式 |
| :--- | :--- | :--- |
| 适定 | $n=m$ | $\bar{X}_{j+1}=\bar{X}_j-[D\bar{F}]^{-1}\bar{F}$ |
| 欠定（最小范数解） | $n>m$ | $\bar{X}_{j+1}=\bar{X}_j-D\bar{F}^{T}[D\bar{F}\,D\bar{F}^{T}]^{-1}\bar{F}$ |
| 超定（最小二乘解） | $n<m$ | $\bar{X}_{j+1}=\bar{X}_j-[D\bar{F}^{T}D\bar{F}]^{-1}D\bar{F}^{T}\bar{F}$ |

欠定情形在轨道保持、最小速度增量打靶中常见，多个自由变量满足同一组约束时，最小范数解给出最省推进剂的修正。Vallado（2022 §10.4）在轨道确定场景下用相同的最小二乘结构处理超定问题（观测数远大于状态维数）。

### STM 与雅可比的耦合

状态转移矩阵满足协变微分方程（沿参考轨迹与运动方程同时积分）：

$$\dot{\boldsymbol{\Phi}}(t,t_0)=A(t)\,\boldsymbol{\Phi}(t,t_0),\quad \boldsymbol{\Phi}(t_0,t_0)=I_6,\quad A(t)=\left.\frac{\partial\mathbf{f}}{\partial\mathbf{x}}\right|_{\mathbf{x}(t)}$$

CR3BP 中 $\mathbf{x}\in\mathbb{R}^6$（位置 + 速度），STM 是 $6\times 6$；加上 6 个状态方程共 42 个常微分方程同步积分。

## 打靶法的两种构型

### 单步打靶（Single Shooting）

把整段轨迹作为一条弧，调整初始速度 $\mathbf{v}_0$（和可能的飞行时间 $T$），让末端状态命中目标。

**固定时间位置目标**（Muralidharan 2021 §3.3.1）：自由变量 $\bar{X}=[\dot{x}_0,\dot{y}_0,\dot{z}_0]^T$，约束 $\bar{F}=\mathbf{r}(T)-\mathbf{r}_d$，雅可比 $D\bar{F}=\boldsymbol{\Phi}_{vr}(T,t_0)$（即 STM 的右上 $3\times3$ 子块，描述末端位置对初始速度的敏感性）。3 个方程 3 个未知量，适定求解。

**变时间位置目标**（Muralidharan 2021 §3.3.2）：把飞行时间 $T$ 也作为自由变量，$\bar{X}=[\dot{x}_0,\dot{y}_0,\dot{z}_0,T]^T\in\mathbb{R}^4$，约束仍为 3 维末端位置残差，得欠定方程组，用最小范数解。雅可比新增的一列 $\partial\mathbf{r}(T)/\partial T=\dot{\mathbf{r}}(T)$ 即末端速度。变时间构型在周期轨道搜索中是标准做法，周期 $T$ 本身是未知量。

### 多重打靶（Multiple Shooting）

单步打靶在长弧段或穿越高敏感区（如近月点）时，STM 严重病态、初值敏感性放大，迭代易发散。多重打靶把整条轨迹切分为 $n$ 段子弧，在 $n-1$ 个内部[拼接点](/glossary/dynamics/patch-point/)处分别设未知状态 $\bar{x}_i$（fixed-time 版本：自由变量维度 $6n$；variable-time 版本再加 $n$ 段飞行时间，维度 $7n-1$），在各拼接点施加位置速度连续性约束（Muralidharan 2021 §3.4；Pavlak & Howell 2012）：

$$\bar{F}_i(\bar{X})=\bar{x}_{i+1}-\boldsymbol{\Phi}_{i+1,i}\,\bar{x}_i=\mathbf{0},\quad i=1,\dots,n-1$$

每段使用各自的 STM $\boldsymbol{\Phi}_{i+1,i}$。把所有约束叠加后做一次牛顿迭代，所有拼接点状态同时更新。代价是设计变量维度从 6/7 涨到 $6n$/$7n-1$，但收敛域扩大、对初猜的敏感性大幅降低，这是把 CR3BP 周期轨道过渡到高保真星历模型时的标准工具（Pavlak 2013；Muralidharan 2021 §4.4 用 40–50 圈 NRHO 拼接生成约 1 年的虚拟参考轨迹）。

## Howell-Pernicka 两级修正

准周期轨道（Lissajous、quasi-halo、拟周期 DRO）在 CR3BP 中不严格闭合，单层微分修正难以同时消除位置和速度残差。Howell & Pernicka（1987, 1990, 1993）的两级修正（two-level corrector，文献中又称 two-level targeter / TLT）把迭代分成两层：

- **内层（位置连续）**：固定各拼接点位置，只修正各点速度，消除位置不连续；

- **外层（速度连续）**：调整拼接点位置与各段时间，消除速度不连续。

两层嵌套迭代直至位置和速度同时连续。这是计算 Lissajous 与 quasi-halo 轨道族、以及把这类轨道过渡到星历模型的标准算法。后续工作中，Pavlak & Howell（2012）用多重打靶把它推广到长基线轨迹的连续化拼接；Orion 飞船的自主地球返回制导（Wang 等 2024）在两层结构基础上加入任务约束，演化为带约束的两级靶点器。

## 收敛行为与陷阱

- **二阶收敛**：在解附近呈现 Newton 法特有的二阶收敛，初猜足够好时 3–5 次迭代即达到 $10^{-12}$ 量级。

- **初猜质量决定成败**：远离真解时线性化失效，可能发散或陷入局部极小。常用对策是[延拓](/glossary/dynamics/continuation/)（沿轨道族逐步推进）和[同伦法](/glossary/dynamics/homotopy-method/)（从易问题连续过渡到难问题）。

- **STM 的有效区间**：STM 是一阶近似，长时间传播或穿越近月点等高敏感区时误差显著。Muralidharan（2021 §5.10）指出在 9:2 NRHO 上以 6.5 圈下游穿越点为靶点时，1 cm/s 量级扰动经非线性流传播后已呈多峰非高斯分布，线性 STM 估计的机动方向会有偏差，这是单步打靶在长时域上失效的根因，也是多重打靶被引入的直接动机。

- **自由变量与约束的配平**：变量数 > 约束数（欠定）取最小范数解；变量数 < 约束数（超定）取最小二乘解；两者不等时的物理含义不同，配置错误会导致修正方向无意义。

## 直接法 vs 间接法（与最优控制的关系）

在[最优控制](/glossary/dynamics/pontryagins-maximum-principle/)意义下的轨迹优化中，打靶有更具体的含义：

- **间接打靶**：以协态初值 $\boldsymbol{\lambda}(t_0)$ 和终端时间 $t_f$ 为自由变量，积分 Hamilton 正则方程，使终端状态/横截条件满足。协态无物理直观、对初猜极敏感，典型困难见[两点边值问题](/glossary/dynamics/tpbvp/)。

- **直接打靶 / 直接转录**：把连续控制 $\mathbf{u}(t)$ 离散化为参数序列，整个最优控制问题化为非线性规划（NLP），不显式引入协态。直接多重打靶（direct multiple shooting，Bock 1981；Sager 2009）在每段节点同时设状态与控制变量，段内用显式积分，是航天 NLP 求解器的标准底层算法之一。

直接打靶收敛性更好但变量维度高；间接打靶维度低、精度高（满足 Pontryagin 必要条件），但初猜困难。实际工程中常用直接法生成初猜 → 间接法精化的组合策略。

## 在地月空间中的应用

- **周期轨道生成**：Halo、Lyapunov、DRO、NRHO、axial、vertical 等所有 CR3BP 周期轨道族的精确初始条件，都用对称性化简后的变时间单步打靶求解（半周期积分到 $x$ 轴穿越点，约束 $y=\dot{x}=\dot{z}=0$，自由变量为 $\dot{y}_0$ 和半周期 $T/2$）。

- **转移轨道设计**：地月 LEO→DRO、地月 LEO→NRHO、星球间转移等，用单步/多重打靶匹配终端状态。低能转移常用[拼接点](/glossary/dynamics/patch-point/)处的微分修正消除段间速度跳变。

- **星历模型过渡**：CR3BP 解 → 高保真星历模型解的过渡，几乎一律用多重打靶（典型 40–50 个拼接点，覆盖一年任务期）。

- **轨道保持**：[Target Point 策略](/glossary/dynamics/target-point-strategy/)、x 轴穿越控制、$\dot{x}$-控制等[轨道保持](/glossary/dynamics/station-keeping/)算法本质上都是单步打靶，以未来某圈的下一次穿越点为目标，反解当前机动 $\Delta\mathbf{v}$。

- **轨道确定**：地面观测确定航天器轨道的最小二乘估计，Vallado（2022 Algorithm 67）称之为微分修正，与 targeting 用同一套数学框架，只是观测残差代替终端约束。

## 相关概念

- [状态转移矩阵（STM）](/glossary/fundamentals/stm/)

- [拼接点（Patch Point）](/glossary/dynamics/patch-point/)

- [两点边值问题（TPBVP）](/glossary/dynamics/tpbvp/)

- [圆型限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)

- [延拓法（Continuation）](/glossary/dynamics/continuation/)

- [庞加莱截面（Poincaré Map）](/glossary/dynamics/poincare-map/)

- [单值矩阵（Monodromy Matrix）](/glossary/dynamics/monodromy-matrix/)

- [Newton-Raphson 迭代](/glossary/dynamics/newton-raphson-method/)

## 参考文献

- Muralidharan A. Stretching directions in cislunar space: stationkeeping and an application to transfer trajectory design[D]. Purdue University, 2021.（第 3 章 STM、微分修正、单/多重打靶的标准教科书式表述）

- Howell K C, Pernicka H J. Numerical determination of Lissajous trajectories in the restricted three-body problem[J]. Celestial Mechanics, 1987, 41(1-4): 107-124.（两级微分修正的原始出处）

- Pavlak T A. Trajectory design and orbit maintenance strategies in multi-body dynamical regimes[D]. Purdue University, 2013.（多重打靶生成长基线星历轨迹）

- Vallado D A. Fundamentals of Astrodynamics and Applications[M]. 5th ed. Microcosm Press, 2022. §10.4, Algorithm 67.（轨道确定场景下的微分修正与最小二乘框架）

- Wilson R S. Generation of accurate baseline numerical trajectories for the three-body problem[D]. Purdue University, 2003.（自由变量/约束方程的形式化）

- Bock H G, Plitt K J. A multiple shooting algorithm for direct solution of optimal control problems. IFAC Proceedings Volumes, 1984.（直接多重打靶）
