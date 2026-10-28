---
title: 直接打靶（Direct Shooting）
description: 轨迹优化直接法中最简单的一类转录方法：只参数化控制量，用初值问题前向积分得到状态，把终端条件作为非线性规划约束。覆盖控制参数化、灵敏度与梯度、收敛困难与工程对策，并与直接转录、直接配点、多重打靶、间接打靶及边值问题单次打靶逐条分界。
keywords: 直接打靶, Direct Shooting, Direct Single Shooting, 直接打靶法, 直接法, 轨迹优化, 控制参数化, 非线性规划, NLP, 初值问题, 终端约束, 灵敏度, 两点直接打靶
author: 天疆说
date: 2026-10-28
lastUpdated: 2026-10-28
wechatShare:
  title: 直接打靶（Direct Shooting）
  desc: 参数化控制、前向积分动力学、终端条件交给 NLP：直接法中最简单也最敏感的转录路线。
  image: /logo.png
og:
  title: 直接打靶（Direct Shooting）详解 | 轨迹优化直接法
  description: 只参数化控制量，用初值问题前向积分得到状态，把终端条件作为 NLP 约束的直接法分支。覆盖控制参数化、灵敏度、收敛困难与地月空间应用。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 直接打靶（Direct Shooting）详解 | 轨迹优化直接法
  description: 参数化控制、前向积分动力学、终端条件交给 NLP：直接法中最简单也最敏感的转录路线。
  image: /logo.png
permalink: /glossary/dynamics/direct-shooting/
aliases:
  - Direct Shooting
  - Direct Single Shooting
  - Direct Shooting Method
  - 直接打靶法
related:
  - ref: dynamics/direct-methods
    relation: broader
  - ref: dynamics/indirect-methods
    relation: related
  - ref: dynamics/indirect-shooting
    relation: related
  - ref: dynamics/direct-collocation
    relation: related
  - ref: orbits/multiple-shooting
    relation: related
  - ref: dynamics/sims-flanagan-transcription
    relation: related
  - ref: orbits/ssdc
    relation: related
  - ref: dynamics/differential-correction
    relation: related
  - ref: dynamics/parameter-vector
    relation: related
  - ref: fundamentals/stm
    relation: related
---

# 直接打靶（Direct Shooting）

> 本文作者：天疆说
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

直接打靶（direct shooting）是轨迹优化直接法中最简单的一类转录方法。它把控制历史 $\mathbf{u}(t)$ 参数化为有限维向量 $\mathbf{p}$，在给定初始状态 $\mathbf{x}(t_0)$ 与终端时间 $t_f$ 后，用初值问题积分器从 $t_0$ 前向积分原动力学，得到整条状态轨迹与终端状态 $\mathbf{x}(t_f;\mathbf{p})$，再把终端约束与性能指标交给非线性规划（NLP）求解器，由后者调整 $\mathbf{p}$，必要时同时调整自由的初始状态与终端时间\cite{bettsSurveyNumericalMethods1998,bettsPracticalMethodsOptimal2010,conwaySpacecraftTrajectoryOptimization2010}。

直接打靶只离散控制，状态始终由积分器产生，不把状态当作优化变量。终端状态是积分的结果，不是决策变量。这一点是它与直接配点、直接多重打靶等把状态提升为变量的方法最根本的差别，也是术语解释里最容易写错的地方。

直接打靶默认指单次打靶（single shooting），即整条轨迹作为一条初值问题一次积分。把轨迹分段并在段边界施加状态连续性约束的版本称直接多重打靶（direct multiple shooting），见下文与相邻方法的分界。

## 转录形式

### 控制参数化

连续控制 $\mathbf{u}(t)\in\mathbb{R}^{m}$ 用有限个参数表示：

$$
\mathbf{u}(t)=\mathbf{U}(t;\mathbf{p}),\qquad \mathbf{p}\in\mathbb{R}^{n_p}.
$$

常见的参数化有三类。分段常值把 $[t_0,t_f]$ 分成若干段，每段控制取常向量，适合开关型推力或 bang-bang 控制。分段线性在相邻节点之间线性插值，控制连续但导数不连续。多项式或正交基把控制写成 Chebyshev、Legendre 或 Fourier 系数的线性组合，适合光滑控制。参数化的选择决定 NLP 的变量数与解的逼近精度，段数或基函数阶数越高，逼近越好，变量越多\cite{bettsPracticalMethodsOptimal2010,conwaySpacecraftTrajectoryOptimization2010}。

[参数向量](/glossary/dynamics/parameter-vector/)是控制参数化的一个具体例子。两脉冲转移把终端极角、终端脉冲与转移时间作为参数，三脉冲转移再加中间脉冲与中间时刻。脉冲序列本身就是一种分段参数化，每段控制退化为一个瞬时速度增量。

### 初值问题与终端约束

给定 $\mathbf{p}$、$\mathbf{x}(t_0)$ 与 $t_f$，状态由初值问题

$$
\dot{\mathbf{x}}=\mathbf{f}(\mathbf{x},\mathbf{U}(t;\mathbf{p}),t),\qquad \mathbf{x}(t_0)=\mathbf{x}_0
$$

积分得到。终端等式约束写成

$$
\boldsymbol{\psi}(\mathbf{x}(t_f;\mathbf{p}),t_f)=\mathbf{0},
$$

不等式约束写成 $\boldsymbol{\psi}_l\le\boldsymbol{\psi}(\mathbf{x}(t_f;\mathbf{p}),t_f)\le\boldsymbol{\psi}_u$。性能指标取 Bolza 形式

$$
J=\Phi(\mathbf{x}(t_f),t_f)+\int_{t_0}^{t_f}L(\mathbf{x},\mathbf{U}(t;\mathbf{p}),t)\,\mathrm{d}t.
$$

积分项可以作为一个增广状态 $\dot J=L$ 与轨迹一起积分，也可以在参数化节点上用数值积分累加。

路径约束 $\mathbf{g}(\mathbf{x},\mathbf{u},t)\le\mathbf{0}$ 在直接打靶里最难处理。状态不是决策变量，约束只能在积分过程中逐点检查，或者把违反量的积分作为约束与罚项。积分节点之间的违反量，NLP 看不到。直接配点把状态提升为变量后，路径约束可以逐配点写成代数约束，这是配点在含路径约束问题上更常用的原因之一\cite{bettsSurveyNumericalMethods1998,bettsPracticalMethodsOptimal2010}。

### 非线性规划

把所有待定量堆成决策向量

$$
\mathbf{z}=\begin{bmatrix}\mathbf{p}\\ \mathbf{x}_0^{f}\\ t_f^{f}\end{bmatrix},
$$

其中 $\mathbf{x}_0^{f}$ 与 $t_f^{f}$ 只收自由的初始状态分量与终端时间。NLP 为

$$
\min_{\mathbf{z}} J(\mathbf{z})\quad \text{s.t.}\quad \boldsymbol{\psi}_l\le\boldsymbol{\psi}(\mathbf{z})\le\boldsymbol{\psi}_u,\qquad \mathbf{z}_l\le\mathbf{z}\le\mathbf{z}_u.
$$

变量数通常只有几十到几百，远小于配点法的上万量级。代价是目标与约束对 $\mathbf{z}$ 的依赖要经过一次完整的轨迹积分才能求值，NLP 每迭代一步都要重新积分，雅可比一般是稠密的\cite{bettsPracticalMethodsOptimal2010}。

## 灵敏度与梯度

基于梯度的 NLP 需要终端约束与目标对参数的偏导。最直接的做法是有限差分：对每个参数加一个小扰动，重新积分一次，用差商近似导数。参数有 $n_p$ 个时，每次迭代至少要做 $n_p+1$ 次积分，参数多时成本高，步长选择也影响精度\cite{bettsSurveyNumericalMethods1998}。

更精确的做法是积分变分方程。定义敏感矩阵 $\mathbf{S}(t)=\partial\mathbf{x}(t)/\partial\mathbf{p}$，对动力学求导得到

$$
\dot{\mathbf{S}}=\frac{\partial\mathbf{f}}{\partial\mathbf{x}}\mathbf{S}+\frac{\partial\mathbf{f}}{\partial\mathbf{u}}\frac{\partial\mathbf{U}}{\partial\mathbf{p}},\qquad \mathbf{S}(t_0)=\frac{\partial\mathbf{x}_0}{\partial\mathbf{p}}.
$$

$\mathbf{S}(t_f)$ 给出终端状态对参数的导数，再与 $\partial\boldsymbol{\psi}/\partial\mathbf{x}$ 相乘得到约束雅可比。初值固定时 $\mathbf{S}(t_0)=\mathbf{0}$，初值自由时把对应的单位阵块放进 $\mathbf{S}(t_0)$。终端时间自由时，约束对 $t_f$ 的偏导还要加上 $\partial\boldsymbol{\psi}/\partial t_f+\partial\boldsymbol{\psi}/\partial\mathbf{x}\cdot\mathbf{f}(\mathbf{x}(t_f),t_f)$\cite{bettsSurveyNumericalMethods1998,bettsPracticalMethodsOptimal2010}。

变分方程与[状态转移矩阵](/glossary/fundamentals/stm/)同源。轨道力学里的[微分修正](/glossary/dynamics/differential-correction/)用同一套矩阵把终端残差映射回初始修正量，区别只在未知量与残差的含义，见下文的分界一节。现代实现也可以对积分器做自动微分，直接得到梯度，省去手写变分方程的工作\cite{bettsPracticalMethodsOptimal2010}。

## 收敛特性与代价

直接打靶的优点是变量少、实现简单、动力学由积分器在积分容差内满足。它只要求一个初值问题积分器，能直接复用工程现有的轨道传播器，落地成本低。缺点是终端状态对控制参数的敏感度沿轨迹累积，长时域问题的雅可比条件数迅速恶化，基于梯度的 NLP 收敛域变窄。具体有四种表现。

误差沿轨迹放大。初值问题对初值的扰动按状态转移矩阵传播，CR3BP 近月点附近、长时间低推力转移或多圈轨道上，终端残差对参数的小变化极其敏感。参数初值稍偏，终端约束就落到很远的残差上，NLP 要么发散，要么收敛到另一条局部解\cite{bettsSurveyNumericalMethods1998,bettsPracticalMethodsOptimal2010}。

路径约束难以精确满足。约束只能在积分节点上采样，节点之间的违反量不可见。把约束改成罚函数会引入权重调节，权重过大导致病态，过小则约束失效\cite{bettsPracticalMethodsOptimal2010}。

不连续控制难以处理。bang-bang 控制的切换时刻作为决策变量时，终端状态对切换时刻的导数在切换点附近不连续，有限差分雅可比会出现跳变。分段常值参数化可以把切换时刻显式作为参数，但段数未知时要额外处理\cite{bettsSurveyNumericalMethods1998}。

积分器误差与优化误差耦合。积分容差过松，NLP 看到的动力学与真实动力学不一致，梯度噪声大。容差过紧，每次迭代的积分成本上升。工程上常把积分容差与 NLP 收敛容差一起标定\cite{bettsPracticalMethodsOptimal2010}。

工程对策主要有四条。第一，缩短单次打靶的弧长，把轨迹分段，在节点上引入状态变量与连续性约束，这就是直接多重打靶。第二，改用直接配点，把状态提升为变量，用缺陷约束代替前向积分。第三，改善参数化与缩放，把时间归一化到 $[0,1]$，把控制无量纲化，用正交多项式基代替高次单项式。第四，用同伦延拓或全局搜索提供初值，先解一个简单问题，再逐步过渡到目标问题\cite{bettsPracticalMethodsOptimal2010,bockMultipleShootingAlgorithm1984}。

## 与相邻方法的分界

### 与直接法、直接转录

[直接法](/glossary/dynamics/direct-methods/)是把最优控制问题转录为 NLP 的一类方法的总称。直接打靶是其中一种转录路线，与直接配点、直接多重打靶、伪谱法并列。直接转录在文献里有广狭两义，广义指把连续最优控制问题转录为 NLP 的整个过程，狭义常与[直接配点](/glossary/dynamics/direct-collocation/)混用。无论取哪一层含义，直接打靶都只是其中一种具体路线，不能与直接转录画等号\cite{bettsSurveyNumericalMethods1998,enrightDiscreteApproximationsOptimal1992}。

### 与直接多重打靶

直接多重打靶把 $[t_0,t_f]$ 分成若干段，在段边界引入状态变量，每段独立积分，再把段间状态连续条件作为等式约束。变量数比单次打靶多，但每段的敏感积累时间缩短，雅可比条件数改善，长弧问题更稳。Bock 与 Plitt 1984 的算法是这一路线的经典实现\cite{bockMultipleShootingAlgorithm1984,bettsPracticalMethodsOptimal2010}。站内[多重打靶法](/glossary/orbits/multiple-shooting/)词条讲的是轨道边值问题里的多重打靶，与最优控制转录里的直接多重打靶共享分段与连续性约束的思想，但前者修正初始状态或拼接点状态，后者修正控制参数与段边界状态，问题类型不同，阅读时不要混用。

### 与直接配点

[直接配点法](/glossary/dynamics/direct-collocation/)把状态与控制同时在网格上离散，用分段多项式插值状态，在配点处强制动力学满足，得到缺陷约束。状态成为 NLP 变量，路径约束可以逐配点施加，雅可比稀疏。变量数通常比直接打靶大一到三个数量级，但对长时域、强非线性与多约束问题更稳健。从消元的角度看，直接打靶相当于把配点法里的状态变量全部用积分消去，只留下控制参数\cite{hargravesDirectTrajectoryOptimization1987,enrightDiscreteApproximationsOptimal1992,bettsSurveyNumericalMethods1998}。

### 与间接打靶

[间接打靶](/glossary/dynamics/indirect-shooting/)是[间接法](/glossary/dynamics/indirect-methods/)求解两点边值问题的一条路线：先由庞特里亚金极值原理导出状态-协态方程与横截条件，再猜协态初值，用牛顿法打中终端条件。它的未知量是协态初值，残差是最优性条件。直接打靶不引入协态，未知量是控制参数，残差是终端约束，最后由 NLP 求解。两者都叫打靶，都在前向积分，但打靶对象与问题类型不同\cite{bettsSurveyNumericalMethods1998}。

### 与单次打靶微分修正器

[单次打靶微分修正器](/glossary/orbits/ssdc/)是轨道边值问题里的单次打靶：猜初始速度，积分原动力学，用状态转移矩阵把终端位置残差映射回初始速度修正，迭代到周期轨道或转移轨道闭合。它没有性能指标，不求解最优控制问题。直接打靶同样只从一端积分，但未知量是控制参数，目标是最小化代价并满足终端约束，最后交给 NLP。两者共享单次打靶的数值结构，问题类型不同。单次打靶在轨道边值问题里另有所指，与这里的直接打靶不是同一件事。

### 与 Sims-Flanagan 转录

[Sims-Flanagan 转录](/glossary/dynamics/sims-flanagan-transcription/)是低推力轨迹优化里的一种直接打靶转录：把转移段按飞行时间分段，用每段中点的一个瞬时脉冲近似连续推力，从两端向中间传播并在切分点匹配。它是直接打靶的一个具体实现，特点是脉冲近似与两点匹配，不是直接打靶的通名。两点直接打靶把轨迹分成前后两段，从两端向中间传播并匹配状态，与 Sims-Flanagan 的前后向匹配同源。Lucy 任务的星际轨道优化采用了这一做法\cite{simsPreliminaryDesignLowThrust1999,englanderOptimizationLucyInterplanetary2020}。

## 在地月空间中的应用

直接打靶的变量少、实现简单，适合控制参数本来就不多的问题，也常用来为更稳健的方法生成初值。

早期发射轨道优化把攻角或俯仰角参数化为多项式系数，用序列二次规划调整系数，属直接打靶的典型用法。POST 与 GTS 一类程序采用这一路线\cite{bettsSurveyNumericalMethods1998,gillSNOPTSQPAlgorithm2002}。这类问题的动力学以二体或简单摄动为主，弧长不长，直接打靶的敏感性问题尚可控制。

低推力转移的初步设计常用 Sims-Flanagan 或两点直接打靶。它们把连续推力压缩为分段脉冲，变量数与积分成本都低，适合嵌入遗传算法、差分进化等全局搜索，为后续配点或间接法提供初值\cite{simsPreliminaryDesignLowThrust1999,englanderOptimizationLucyInterplanetary2020}。

地月空间的高保真转移很少单独用直接打靶。CR3BP 或星历模型下，近月点附近的状态转移矩阵条件数大，长时间低推力弧的终端敏感度更高，工程上多用直接配点或直接多重打靶。直接打靶更多出现在方案筛选与初值生成里\cite{liuNoteComputationMultirevolution2025,bettsPracticalMethodsOptimal2010,conwaySpacecraftTrajectoryOptimization2010}。

在轨道设计里，直接打靶也用于参数少的脉冲转移优化。两脉冲或三脉冲转移把脉冲大小、方向与时刻作为参数，终端位置速度作为约束，NLP 变量只有几个到十几个，见[参数向量](/glossary/dynamics/parameter-vector/)。这类问题的收敛性主要取决于脉冲数与初值，直接打靶的敏感性问题不突出。

## 相关概念

- [直接法（Direct Methods）](/glossary/dynamics/direct-methods/)
- [间接法（Indirect Methods）](/glossary/dynamics/indirect-methods/)
- [间接打靶法（Indirect Shooting）](/glossary/dynamics/indirect-shooting/)
- [直接配点法（Direct Collocation）](/glossary/dynamics/direct-collocation/)
- [多重打靶法（Multiple Shooting Method）](/glossary/orbits/multiple-shooting/)
- [Sims-Flanagan 转录（Sims-Flanagan Transcription）](/glossary/dynamics/sims-flanagan-transcription/)
- [单次打靶微分修正器（Single-shooting Differential Corrector）](/glossary/orbits/ssdc/)
- [微分修正（Differential Correction）](/glossary/dynamics/differential-correction/)
- [参数向量（Parameter Vector）](/glossary/dynamics/parameter-vector/)
- [状态转移矩阵（STM）](/glossary/fundamentals/stm/)
