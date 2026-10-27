---
title: 同伦方法（Homotopy Method）
description: 通过构造连接“易解问题”与“目标问题”的同伦函数 H(y,κ)=κF(y)+(1-κ)G(y)，沿 κ 从 0 到 1 跟踪零路径以求解难解的两点边值问题。在小推力轨迹优化中是把光滑的能量最优解逐步变形为 bang-bang 燃料最优解、或把高推力解降到目标低推力的核心数值手段。
keywords: 同伦方法, homotopy method, 同伦延拓, homotopy continuation, 平滑技术, 平滑同伦, α 同伦, α homotopy, p 同伦, p homotopy, power homotopy, sigmoid 同伦, sigmoid homotopy, 推力同伦, L2-L1 同伦, 能量-燃料最优, 间接法, 两点边值问题
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-10-27
wechatShare:
  title: 同伦方法（Homotopy Method）
  desc: 小推力轨迹优化中把能量最优解逐步变形为燃料最优解的核心数值方法。
  image: /logo.png
og:
  title: 同伦方法（Homotopy Method）详解 | 术语定义
  description: 通过构造连接“易解问题”与“目标问题”的同伦函数 H(y,κ)=κF(y)+(1-κ)G(y)，沿 κ 从 0 到 1 跟踪零路径以求解难解的两点边值问题。在小推力轨迹优化中是把光滑的能量最优解逐步变形为 bang-bang 燃料最优解的核心数值手段。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 同伦方法（Homotopy Method）详解 | 术语定义
  description: 通过构造连接“易解问题”与“目标问题”的同伦函数 H(y,κ)=κF(y)+(1-κ)G(y)，沿 κ 从 0 到 1 跟踪零路径以求解难解的两点边值问题。在小推力轨迹优化中是把光滑的能量最优解逐步变形为 bang-bang 燃料最优解的核心数值手段。
  image: /logo.png
permalink: /glossary/dynamics/homotopy-method/
---

# 同伦方法（Homotopy Method）

> 本文作者：天疆说
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

同伦方法（homotopy method，又称同伦延拓 homotopy continuation）是求解非线性方程组 $\mathbf{F}(\mathbf{y})=\mathbf{0}$ 的一类数值方法。其思路是：构造一个含参数 $\kappa\in[0,1]$ 的同伦函数 $\mathbf{H}(\mathbf{y},\kappa)$，使

$$\mathbf{H}(\mathbf{y},0)=\mathbf{G}(\mathbf{y})\ \text{(易解的初始问题)},\qquad \mathbf{H}(\mathbf{y},1)=\mathbf{F}(\mathbf{y})\ \text{（目标问题）},$$

然后从 $\kappa=0$ 的已知解出发，沿 $\mathbf{H}(\mathbf{y},\kappa)=\mathbf{0}$ 的零曲线跟踪到 $\kappa=1$，得到 $\mathbf{F}(\mathbf{y})=\mathbf{0}$ 的解\cite{watsonNumericalLinearAlgebra1986}，另见 Allgower 与 Georg 1990\cite{allgowerNumericalContinuationMethods1990}。

与 [数值延拓](/glossary/dynamics/continuation/) 的关系：同伦方法是延拓方法的子类，它把参数 $\lambda$ 具体化为同伦参数 $\kappa$，把含参数方程具体化为人为构造的同伦函数 $\mathbf{H}$。延拓是几何地跟踪已有方程的解曲线。同伦是先人为地嵌入一族方程再跟踪。两者共享同一套路径跟踪算法（预测-校正、伪弧长），但出发点不同：延拓从已知的单一解推进到该解所属的族。同伦从人为构造的、有已知解的简单问题出发去攻一个原本没有可用初值的难问题\cite{guanyutong2026}。

在轨道力学中，难问题通常是 [间接法](/glossary/dynamics/indirect-methods/) 推导出的两点边值问题（TPBVP）：协态初值收敛域极小、燃料最优控制呈 bang-bang 不连续结构，直接打靶几乎不可能收敛。同伦方法通过把一个光滑、易收敛的姊妹问题（如能量最优问题）逐步变形为目标问题，把单次大跳跃换成数百次小步推进，是间接法从理论最优走向工程可解的关键桥梁\cite{bertrandNewSmoothingTechniques2002a,gergaudHomotopyMethodMinimum2006,haberkornLowThrustMinimumfuel2004,taheriEnhancedSmoothingTechnique2016}。

## 同伦函数的构造

### 一般形式

最常用的凸组合形式，另见潘迅和泮斌峰 2019：

$$\mathbf{H}(\mathbf{y},\kappa)=\kappa\,\mathbf{F}(\mathbf{y})+(1-\kappa)\,\mathbf{G}(\mathbf{y}),$$

其中 $\mathbf{G}$ 是初始问题（$\kappa=0$ 时），$\mathbf{F}$ 是目标问题（$\kappa=1$ 时）。$\mathbf{G}$ 的选择决定同伦的命名：

| 构造方式 | $\mathbf{G}(\mathbf{y})$ | $\kappa=0$ 的解 | 适用性 |
| :--- | :--- | :--- | :--- |
| 牛顿同伦（Newton homotopy） | $\mathbf{F}(\mathbf{y})-\mathbf{F}(\mathbf{y}_0)$ | 已知猜测 $\mathbf{y}_0$ 附近 | 构造最简单，但要求 $\mathbf{y}_0$ 已经接近真解 |
| 定点同伦（Fixed-point homotopy） | $\mathbf{y}-\mathbf{y}_0$ | $\mathbf{y}=\mathbf{y}_0$ | 不依赖 $\mathbf{F}$ 的具体形式，普适。对 $\mathbf{y}_0$ 要求较松 |
| 尺度不变仿射同伦（Scale-invariant affine） | 仿射组合，对 $\mathbf{y}$ 的尺度不敏感 | 无 | 变量量纲差异大时更稳健 |
| 代价函数同伦（cost homotopy） | 性能指标的凸组合 | 能量最优解 | 小推力燃料最优问题主流做法（见下） |

牛顿与定点同伦用于已经有了一个粗糙猜测、想找精确解的情形。代价函数同伦与下面的推力同伦用于想从一种物理上容易的解跳到另一种物理上困难的解，是轨道优化中最重要的两类。

### 从能量最优到燃料最优（代价函数同伦）

航天器小推力最优控制中，能量最优（$L^2$ 范数）性能指标

$$J_E=\int_{t_0}^{t_f}\|\mathbf{u}(t)\|^2\,dt$$

对应的控制律连续光滑、收敛域宽。而燃料最优（$L^1$ 范数）

$$J_F=\int_{t_0}^{t_f}\|\mathbf{u}(t)\|\,dt$$

对应不连续的 bang-bang / bang-off-bang 控制，[打靶法](/glossary/dynamics/differential-correction/) 直接求解几乎不收敛。Bertrand 与 Epenoy 2002 引入光滑化性能指标

$$J_\varepsilon=\int_{t_0}^{t_f}\bigl[\|\mathbf{u}\|-\varepsilon\,F(\|\mathbf{u}\|)\bigr]\,dt,$$

其中 $F$ 是连续扰动函数（如 $F(w)=w(1-w)$、对数障碍项、sigmoid 形式等），$\varepsilon\in[0,1]$ 即同伦参数。$\varepsilon=1$ 时 $J_\varepsilon$ 退化为能量最优（光滑），$\varepsilon\to 0$ 时逼近燃料最优（bang-bang）。求解策略：取递减序列 $\varepsilon_1>\varepsilon_2>\cdots>\varepsilon_n\to 0$，每一步以前一步的协态为初值，依次求解子问题。

### 平滑函数的选择

上文用 $J_\varepsilon$ 表示整个性能指标，下面用 $L$ 表示其中的被积代价，并把 $\|\mathbf u\|$ 简记为 $u$。燃料最优代价 $L=u$ 对应 bang-bang 控制，直接打靶难以收敛。文献中常用的平滑做法可以归为三族：α 同伦、p 同伦、sigmoid 同伦。三族都把切换函数 $S=\lambda_v-1$ 映射成连续的控制量，区别在映射函数的形状与陡峭化方式\cite{parrishLowThrustTrajectory2018}。另有一类对数障碍同伦不在这三族内，下文单独列出。

- α 同伦：取 $L^1$ 与 $L^2$ 的凸组合作为代价，$L=\alpha u+(1-\alpha)u^2$，其中 $u=\|\mathbf u\|$，$\alpha\in[0,1]$。$\alpha=0$ 对应能量最优，$\alpha=1$ 对应燃料最优。最优控制律为 $u_\alpha^*=\operatorname{clip}\left((\rho-\alpha)/[2(1-\alpha)],0,1\right)$，其中 $\rho=\|\boldsymbol\lambda_v\|$ 为速度协态的模。控制律在 $\rho\le\alpha$ 时取 0，在 $\rho\ge 2-\alpha$ 时取 1，有限 $\alpha$ 下就能得到精确的关机段与满推段。$\alpha$ 趋近 1 时，过渡段斜率 $1/[2(1-\alpha)]$ 发散，死区与饱和区向 $\rho=1$ 收缩，极限为 bang-bang。多项式平滑、L2-L1 同伦都属于这一族：多项式平滑取 $F(w)=w(1-w)$，代价为 $L=u-\varepsilon u(1-u)=(1-\varepsilon)u+\varepsilon u^2$，与上式在 $\alpha=1-\varepsilon$ 时一致\cite{bertrandNewSmoothingTechniques2002a,caillauMinimumFuelControl2012}。控制律在 $\rho=\alpha$ 与 $\rho=2-\alpha$ 两处导数不连续，低推力下切换次数增多时精度恶化，二阶最优性条件也难以验证。

- p 同伦：把代价写成推力幅值的幂，$L=u^p$，$p\in(1,2]$。从 $p=2$ 的能量最优解出发，逐步把 $p$ 降到 1。最优控制律为 $u_p^*=\operatorname{clip}\left((\rho/p)^{1/(p-1)},0,1\right)$。$p=2$ 时退化为能量最优的 $u=\rho/2$。$p$ 趋近 1 时指数 $1/(p-1)$ 发散，$\mathrm du_p^*/\mathrm d\rho$ 在切换点附近无界，极限为 bang-bang，同伦步长必须取得很小。有限 $p$ 下控制量只在 $\rho=0$ 处为 0，没有成段的死区。它的优点是 $p=2$ 的目标函数可直接用于直接法优化，为间接法提供可靠的协态初值\cite{parrishLowThrustTrajectory2018}。控制律只在 $\rho=p$ 的饱和边界处因截断而导数不连续，最小控制一侧是光滑的。

- sigmoid 同伦：在燃料代价上加熵型正则项，$L=u+\varepsilon[u\ln u+(1-u)\ln(1-u)]$。最优控制律为 $u_\varepsilon^*=\sigma\left((\rho-1)/\varepsilon\right)$，其中 $\sigma$ 为 logistic 函数。$\varepsilon$ 越小过渡带越窄，$\varepsilon\to 0$ 时趋于阶跃，极限为 bang-bang。对任意 $\varepsilon>0$，控制律处处光滑，控制量始终落在 $(0,1)$ 内，有限 $\varepsilon$ 下没有精确的关机段或满推段，需要事件检测或后处理精修切换时刻。扩展对数平滑是这一族的早期形式，它把对数平滑改写为对切换函数的平滑，产生的控制律正是 $\sigma(S/\varepsilon)$，与状态转移矩阵法结合可获得高精度雅可比。$\tanh$、代数函数、误差函数 erf 等参数化 sigmoid 也属于这一族，其中误差函数在 L1 到 L2 halo 转移算例中比 $\tanh$ 与代数形式收敛更快\cite{zhangSmoothingTechniqueIndirect2025}。sigmoid 同伦的起点不是能量最优问题，而是有限 $\varepsilon$ 的平滑燃料问题，Parrish 取 $\varepsilon=1$ 并逐步降到 $10^{-4}$，能量最优解只作为初值使用\cite{parrishLowThrustTrajectory2018}。

- 对数障碍同伦：不属于上述三族。它在代价中加 $-\varepsilon\ln(u(1-u))$，强制 $0<u<1$，使哈密顿最大化处处可微，用于缓解 α 同伦在低推力下精度恶化的问题\cite{caillauMinimumFuelControl2012}。

三族的主要差异见下表。

| 项目 | α 同伦 | p 同伦 | sigmoid 同伦 |
| :--- | :--- | :--- | :--- |
| 同伦参数 | $\alpha$ 从 0 到 1 | $p$ 从 2 到 1 | $\varepsilon$ 由大到小 |
| 控制律 | $\operatorname{clip}\left(\frac{\rho-\alpha}{2(1-\alpha)},0,1\right)$ | $\operatorname{clip}\left(\left(\frac{\rho}{p}\right)^{1/(p-1)},0,1\right)$ | $\sigma\left(\frac{\rho-1}{\varepsilon}\right)$ |
| 关机段 | 死区 $\rho\le\alpha$ 给出精确的 $u=0$ | 仅 $\rho=0$ 为 0，无成段死区 | 恒为内点，无精确的 0 或 1 |
| 陡峭化机制 | 斜率 $1/[2(1-\alpha)]$ 增大 | 指数 $1/(p-1)$ 增大 | 过渡带宽度随 $\varepsilon$ 减小 |
| 光滑性 | 最小与最大控制处导数不连续 | 最大控制处导数不连续 | 处处光滑 |
| 实证收敛步数 | 无对比数据 | 两体动力学约 20 个中间参数 | 两体动力学约 3 个中间参数 |

按 Parrish 2018 的比较，光滑性从高到低为 sigmoid、p、α。要达到同等锐利的 bang-bang 解，两体动力学下 p 同伦约需 20 个中间参数，sigmoid 同伦约需 3 个，sigmoid 允许更大的同伦步长。三体动力学下两者都需要更多中间参数\cite{parrishLowThrustTrajectory2018}。

工程上的实证判据是：给定 $\varepsilon$ 时，最优控制接近 bang-bang 的程度随 $\varepsilon$ 减小而提高。经验上 $\varepsilon\sim 10^{-5}$ 时，推力剖面与真正 bang-bang 已几乎不可分辨\cite{zhangSmoothingTechniqueIndirect2025}。

### 推力幅值同伦（thrust continuation / thrust homotopy）

另一类同伦把推力上限 $T_{\max}$ 当作同伦参数：从较大的、容易收敛的 $T_L$ 出发，逐步降到目标 $T_{\max}$\cite{Caillau2012}。动力学方程中实际推力幅值写为

$$T(\kappa)=T_{\max}+\kappa\,(T_L-T_{\max}),\qquad \kappa\in[0,1],$$

$\kappa=0$ 对应目标低推力（难），$\kappa=1$ 对应高推力（易）。该思路亦用于受摄 Lambert 问题的目标点拉回，把目标点从两体 Lambert 解的位置逐步拉回到多体真实位置，每步按比例调整偏差（同伦迭代法）。

### LP、$T_{\min}$ 到 CEV 的延拓链

电推进任务中常用一条三阶段同伦链以避免指定任何用户猜测\cite{yoonMinimumfuelLowthrustTrajectories2023}：

1. 限功率问题（LP）：假设功率恒定、推力可任意小（无切换），用零初值即可解。
2. 最小推力问题（$T_{\min}$）：从 LP 解出发，延拓求出给定角距离下可行的最小推力值，用于验证 CEV 问题解的存在性。
3. 恒定排气速度有限推力问题（CEV）：从 $T_{\min}$ 解出发，延拓到给定的 $T_{\mathrm{cev}}\geq T_{\min}$，得到带开关的真实 bang-off-bang 燃料最优解。

每一阶段都用牛顿同伦把边值问题浸入一参数族，逐步推进。这套流程是 Petukhov 学派地月低推力轨道优化的标志。

### 端点同伦

通过调整转移出发点在停泊轨道上的相位来降低所需推力：沿轨道运动反方向拖动出发点，增加转移圈数，从而摊薄所需速度增量。这是电推进地球–月球转移设计中逐步降低推力的经典手段，与小推力幅值同伦等价地增加转移时长。

## 路径跟踪算法

构造完同伦函数后，还要沿 $\mathbf{H}(\mathbf{y},\kappa)=\mathbf{0}$ 的零路径跟踪。两类做法：

### 离散同伦（discrete homotopy）

把 $\kappa$ 从 0 到 1 划分为离散节点 $0=\kappa_1<\kappa_2<\cdots<\kappa_m=1$，依次求解每个子问题，以前一步解为下一步初值。优点：实现简单。缺点：相邻节点距离过远时不收敛。当同伦曲线存在拐点（$d\kappa/ds=0$）时直接失效。

### 连续同伦（continuous homotopy）

沿同伦曲线的切线方向，以伪弧长 $\Delta s$ 为步长跟踪（即 [数值延拓](/glossary/dynamics/continuation/) 中的伪弧长法）：在当前节点 $(\kappa_i,\mathbf{y}_i)$ 计算雅可比，按切向预测下一步，再以牛顿法校正。由于步进方向由曲线切线决定，$\kappa$ 在跟踪中可增可减，因此可绕过拐点。推力幅值同伦曲线在 $\kappa\approx 0.85$ 附近多次出现拐点并产生多个局部最优解，离散同伦完全无法处理，必须用连续同伦，见潘迅和泮斌峰 2019。

预测-校正（predictor-corrector）是连续同伦的标准实现：先以切向欧拉一步预测，再以牛顿迭代校正至零路径。

## 在小推力轨道优化中的作用

间接法解小推力最优控制问题时，状态–协态联立方程两端边值问题的打靶函数对协态初值极度敏感，收敛半径小到几乎不可能给出可用初值，尤其当推力小（圈数多、切换次数多）、或控制呈 bang-bang 时。同伦方法通过两层机制破解这一困难：

1. 扩大收敛域：每步子问题与前一步仅差 $\Delta\kappa$，前一步的解自然落在当前子问题牛顿收敛域内，逐步推进等效于把收敛半径放大数个量级。
2. 处理不连续控制：代价函数同伦让 $\varepsilon>0$ 时控制连续可微，状态转移矩阵法可正常用于雅可比计算。$\varepsilon$ 足够小时控制已逼近 bang-bang，再以离散事件检测精修切换时刻。

实证上，Haberkorn et al. 2004 用代价函数同伦 + 单次打靶求解了 LEO–GEO 0.1 N 级别（数百圈、数百次切换）的最小燃料转移。潘迅和泮斌峰 2019 用推力幅值同伦 + 伪弧长跟踪求解了 GEO 到 $L_2$ 的 1 N 时间最优转移，并在拐点附近发现 13 个局部最优解。Zhang et al. 2025 用 erf 平滑同伦求解了 $L_1$ Halo 到 $L_2$ Halo 的最小燃料转移，消耗仅 0.34% 航天器质量。

## 与数值延拓的辨析

文献中 continuation、homotopy、homotopy continuation 这三个词常被混用，但工程含义不同：

| 维度 | 数值延拓 | 同伦方法 |
| :--- | :--- | :--- |
| 起点 | 一族解中已知的一个 | 人为构造的简单问题的解 |
| 参数 | 物理参数（$C$、振幅、模型保真度） | 人为嵌入的同伦参数 $\kappa$ / $\varepsilon$ |
| 目标 | 扫出该参数下的解分支 | 把简单问题的解变形为原问题的解 |
| 典型应用 | 周期轨道族扫描、模型过渡 | 燃料最优 bang-bang 控制、低推力收敛 |

两者共享路径跟踪算法（自然参数、伪弧长、预测-校正），但目的与构造不同：延拓是描述性的（这条曲线长什么样），同伦是求解工具性的（我构造一条曲线来达到目标解）。

## 相关概念

- [数值延拓（Numerical Continuation）](/glossary/dynamics/continuation/)

- [间接法（Indirect Methods）](/glossary/dynamics/indirect-methods/)

- [打靶法（Shooting Method）](/glossary/dynamics/differential-correction/)

- [微分修正（Differential Correction）](/glossary/dynamics/differential-correction/)

- [协态归一化（Co-state Normalization）](/glossary/dynamics/co-state-variables/)

- [Bang-bang 控制（Bang-bang Control）](/glossary/dynamics/bang-bang-control/)

- [圆型限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)

## 参考文献

- Pan X, Pan B F. 2019. 基于同伦方法的地月系 $L_2$ 点小推力转移轨道优化，题录待补
