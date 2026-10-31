---
title: 间接打靶法（Indirect Shooting）
description: 以协态初值为自由变量，终端时间自由时一并求解，积分 Hamilton 正则方程并用牛顿法满足终端条件的 TPBVP 求解方法。覆盖打靶函数与变分方程雅可比、初值敏感与切换点不连续、协态归一化与同伦延拓，以及与间接多重打靶、间接配点和直接打靶的分界。
keywords: 间接打靶法, Indirect Shooting, 间接单次打靶, indirect single shooting, 打靶法, 协态初值, 两点边值问题, TPBVP, 牛顿法, 同伦延拓, 协态归一化, 切换点检测
aliases:
  - Indirect Shooting
  - 间接打靶
  - indirect single shooting
  - 间接单次打靶
author: 天疆说
date: 2026-10-28
lastUpdated: 2026-10-28
wechatShare:
  title: 间接打靶法（Indirect Shooting）
  desc: 猜协态初值、积分正则方程、用牛顿法打中终端条件：间接法求解 TPBVP 的基本数值路线。
  image: /logo.png
og:
  title: 间接打靶法（Indirect Shooting）详解 | 轨迹优化间接法
  description: 以协态初值为自由变量，终端时间自由时一并求解，积分 Hamilton 正则方程并用牛顿法满足终端条件的 TPBVP 求解方法。覆盖打靶函数、变分方程雅可比、收敛困难与同伦延拓。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 间接打靶法（Indirect Shooting）详解 | 轨迹优化间接法
  description: 猜协态初值、积分正则方程、用牛顿法打中终端条件：间接法求解 TPBVP 的基本数值路线。
  image: /logo.png
permalink: /glossary/dynamics/indirect-shooting/
related:
  - ref: dynamics/indirect-methods
    relation: broader
  - ref: dynamics/tpbvp
    relation: related
  - ref: dynamics/co-state-variables
    relation: related
  - ref: dynamics/pontryagins-maximum-principle
    relation: related
  - ref: dynamics/differential-correction
    relation: related
  - ref: orbits/multiple-shooting
    relation: related
  - ref: dynamics/homotopy-method
    relation: related
  - ref: dynamics/adjoint-control-transformation
    relation: related
---

# 间接打靶法（Indirect Shooting）

> 本文作者：天疆说
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

间接打靶法（indirect shooting）是求解最优控制两点边值问题的一类数值方法。它先用庞特里亚金极值原理（Pontryagin's Maximum Principle, PMP）把最优控制问题化为状态-协态 [Hamilton 正则方程](/glossary/dynamics/co-state-variables/)与横截条件，再把未知的协态初值 $\boldsymbol{\lambda}(t_0)$ 作为打靶变量。终端时间自由时，把 $t_f$ 一并作为未知量。给定一组打靶变量，前向积分状态-协态方程，在终端计算边界条件与横截条件的残差，用牛顿法迭代修正打靶变量，使残差收敛到零\cite{bettsSurveyNumericalMethods1998,brysonAppliedOptimalControl1975}。

间接打靶默认指单次打靶（single shooting），即把整段轨迹作为一条初值问题积分。间接多重打靶把轨迹分段，在节点上同时设置状态与协态，属另一条路线，见[间接法](/glossary/dynamics/indirect-methods/)的数值求解策略一节与[多重打靶法](/glossary/orbits/multiple-shooting/)。

与直接打靶的区别在打靶对象。间接打靶猜协态初值，积分的是最优性条件，残差是终端边界条件与横截条件。直接打靶参数化控制或状态-控制序列，积分的是原动力学，残差是终端约束，最后交给非线性规划求解\cite{bettsSurveyNumericalMethods1998}，见[直接法](/glossary/dynamics/direct-methods/)。

与轨道边值问题中的[微分修正](/glossary/dynamics/differential-correction/)相比，两者共用牛顿迭代与[状态转移矩阵](/glossary/fundamentals/stm/)。区别在未知量与残差的含义。微分修正修正初始速度或拼接点状态，使位置、速度连续。间接打靶修正协态初值，使最优性条件成立。前者不涉及性能指标，后者求解的是最优控制问题\cite{valladoFundamentalsAstrodynamicsApplications2022}。

## 打靶函数

### 打靶变量与残差

设状态 $\mathbf{x}\in\mathbb{R}^n$，协态 $\boldsymbol{\lambda}\in\mathbb{R}^n$，控制由极值条件逐点消去：

$$\mathbf{u}^{*}=\arg\min_{\mathbf{u}\in\mathcal{U}}H(\mathbf{x},\boldsymbol{\lambda},\mathbf{u},t).$$

打靶变量取 $\mathbf{z}=[\boldsymbol{\lambda}(t_0);t_f]$，终端时间固定时去掉 $t_f$。打靶函数是终端边界条件的残差。终端等式约束 $\boldsymbol{\psi}(\mathbf{x}(t_f),t_f)=\mathbf{0}$ 直接给出残差，横截条件给出终端协态与终端状态的关系。若横截条件已经把终端协态全部确定，残差只剩终端约束。终端时间自由时再加 PMP 的参数条件，终端约束不显含时间时化简为 $H(t_f)+\partial\Phi/\partial t\big|_{t_f}=0$。打靶函数的维数必须与打靶变量配平，欠定时取最小范数解，超定时取最小二乘解\cite{bettsSurveyNumericalMethods1998}。

### 积分与雅可比

一次打靶函数求值要积分 $2n$ 维状态-协态方程。雅可比有两种来源。第一种是同步积分增广系统的变分方程，得到状态-协态对初值的敏感矩阵，即增广状态转移矩阵。第二种是对打靶变量做有限差分。前者精度高、计算量大，后者实现简单、步长难选\cite{bettsSurveyNumericalMethods1998,valladoFundamentalsAstrodynamicsApplications2022}。

牛顿更新为

$$\mathbf{z}_{k+1}=\mathbf{z}_k-\mathbf{J}^{-1}\mathbf{s}(\mathbf{z}_k).$$

雅可比奇异或条件数大时用阻尼牛顿、Levenberg-Marquardt 或最小二乘更新。收敛判据是残差范数与打靶变量增量同时进入容差。

### 与单步打靶的对应

轨道力学里的单步打靶修正初始速度，使终端位置命中目标。间接打靶把同一套牛顿迭代搬到协态空间。差别在于间接打靶还要满足最优性条件，终端残差之外多出横截条件与参数条件。打靶函数的局部性、初值敏感与雅可比病态在两个场景里是同源的\cite{valladoFundamentalsAstrodynamicsApplications2022}。

## 收敛特性

### 初值敏感与收敛半径

协态没有物理直观，取值范围无界，初猜只能靠经验或辅助方法。打靶函数在协态空间里高度非线性，收敛半径通常很小。初猜偏离真解稍远，牛顿迭代就发散，或收敛到另一条满足必要条件的极值轨迹\cite{bettsSurveyNumericalMethods1998}。

### 长弧误差放大

单次打靶把整段轨迹作为一条初值问题积分。CR3BP 近月点附近或长转移中，初值扰动沿非线性流放大，终端残差对协态初值极其敏感。增广状态转移矩阵的条件数随弧长增长，牛顿方向失真。这是间接单次打靶难以处理多圈转移与长时域问题的根本原因\cite{bettsSurveyNumericalMethods1998}。

### 切换点不连续

燃料最优问题的控制呈 bang-bang 结构，切换函数过零时控制跳变。打靶函数在切换时刻对打靶变量的导数不连续，雅可比在切换点附近不存在或跳变，牛顿迭代容易在切换点附近振荡。切换时刻本身也依赖打靶变量，进一步加剧非光滑性\cite{zhangLowthrustMinimumfuelOptimization2015}，见 [Bang-bang 控制](/glossary/dynamics/bang-bang-control/)。

### 必要条件而非充分条件

PMP 给出一阶必要条件。打靶函数收敛只说明找到了一条满足必要条件的极值轨迹，不保证它是全局最优。多峰问题可能有多个极值解，需要比较目标值，必要时用二阶条件或全局搜索筛选\cite{brysonAppliedOptimalControl1975,conwaySpacecraftTrajectoryOptimization2010}。

## 工程对策

### 协态归一化

对自由末态问题，PMP 的必要条件在 $(\boldsymbol{\lambda}(t_0),\lambda_0)$ 整体乘正常数下不变，最优轨迹不变。利用这一冗余自由度把 $\boldsymbol{\lambda}(t_0)$ 归一化到单位球面 $\|\boldsymbol{\lambda}(t_0)\|=1$，搜索空间降一维，初猜只需给出方向\cite{thorneOptimalContinuousthrustOrbit1996,jiangPracticalTechniquesLowThrust2012a,taheriEnhancedSmoothingTechnique2016}。

对最小时间问题，齐次性消失，归一化条件由 $H\equiv-1$ 取代。对最小燃料问题，齐次性保持，归一化可直接使用\cite{jiangPracticalTechniquesLowThrust2012a}。

### 同伦延拓

[同伦方法](/glossary/dynamics/homotopy-method/)把难问题嵌入一族易解问题，从易解端逐步过渡到目标问题，每一步用上一步的解作初猜。间接打靶常用的三条路径是能量最优到燃料最优的代价同伦、推力幅值同伦与平滑技术。代价同伦把 $L^2$ 范数逐步变形为 $L^1$ 范数，平滑技术用光滑扰动项逼近 bang-bang 控制\cite{bertrandNewSmoothingTechniques2002a,gergaudHomotopyMethodMinimum2006,haberkornLowThrustMinimumfuel2004,zhangSmoothingTechniqueIndirect2025}。

同伦是间接打靶从理论走向工程可解的主要手段。从易解问题到目标问题的单次跳跃收敛域太小，逐步推进把大跳跃换成数百次小步，每步只要求局部收敛\cite{jiangPracticalTechniquesLowThrust2012a}。

### 切换点检测

Bang-bang 控制的切换时刻是切换函数的零点。把切换时刻作为事件，在积分中精确定位零点，再把轨迹分成若干光滑段。打靶函数在每个光滑段内可微，雅可比按段拼接。切换时刻本身作为打靶变量的一部分，与协态初值一起修正。零点定位常用牛顿法与二分法混合，牛顿法快速收敛，失败时二分法保底\cite{zhangLowthrustMinimumfuelOptimization2015}。

### 初猜来源

初猜可以来自直接法、启发式搜索或物理近似。直接法先解一个非线性规划得到粗解，再用粗解构造间接打靶的初猜，见[直接法](/glossary/dynamics/direct-methods/)\cite{bettsSurveyNumericalMethods1998}。启发式方法用遗传算法、粒子群或差分进化直接搜索协态初值，每次候选按极值条件积分评估\cite{pontaniNumericalSolutionThreedimensional2009}。[协态-控制变换](/glossary/dynamics/adjoint-control-transformation/)把设计变量从协态换成推力方向角等有物理意义的量，降低初猜难度\cite{klueverOptimalLowthrustThreedimensional1995,jawaharlalayyanathanMappedAdjointControl2022}。

## 与相邻方法的分界

| 方法 | 打靶或离散对象 | 自由变量 | 适用与代价 |
| :--- | :--- | :--- | :--- |
| 间接单次打靶 | 整条轨迹一次前向积分 | 协态初值，终端时间自由时加 $t_f$ | 实现简单，变量少，收敛半径小，适合短弧与初猜较好的问题 |
| 间接多重打靶 | 分段积分，节点状态与协态 | 节点状态、协态、段时间 | 变量多，条件数好，适合长弧与高敏感段 |
| 间接配点 | 状态-协态方程在配点处离散 | 配点处的状态与协态 | 不依赖前向打靶，适合长弧与多切换，变量规模大 |
| 间接启发式 | 元启发式搜索协态初值，内层积分评估 | 协态初值，可能含离散变量 | 不依赖牛顿初值，评估次数多，精度较低 |
| 直接打靶 | 参数化控制，前向积分原动力学 | 控制参数 | 无需协态初猜，对初值比间接打靶宽容，收敛域仍随弧长收窄，不显式满足 PMP，精度受离散与积分限制 |

选择哪一种取决于弧长、切换次数与初猜质量。短弧、单次点火、初猜可靠时，间接单次打靶最省事。长弧、多圈、近月点敏感段，多重打靶或配点更稳。需要严格满足 PMP 且希望变量规模小时，间接打靶仍是首选\cite{bettsSurveyNumericalMethods1998,bockMultipleShootingAlgorithm1984}。

## 在地月空间中的应用

- 地月低推力燃料最优转移：地球到月球转移与 CR3BP 内的最小燃料转移常用间接打靶加同伦。协态归一化给初猜方向，代价同伦把能量最优解过渡到燃料最优解，切换点检测保证 bang-bang 段精度\cite{klueverOptimalLowthrustThreedimensional1995,zhangLowthrustMinimumfuelOptimization2015,zhangSmoothingTechniqueIndirect2025}。
- CR3BP 低推力转移与捕获：平面三体问题中的低推力不变流形转移与捕获，用间接打靶求解燃料最优控制，协态初值敏感与切换结构是主要困难\cite{coxTransitCapturePlanar2021}。
- 多弧段转移：多段低推力地球到月球转移用隐式协态变换把上一弧段末端协态映射到下一弧段始端，减少独立打靶变量\cite{beolchiMultiplearcOptimizationLowthrust2024}。
- 全局搜索与初猜：平面 CR3BP 的低推力月球转移可先用全局搜索定位可行区域，再在候选解附近做局部精化\cite{oshimaGlobalSearchLowthrust2017}。
- 小推力轨迹优化的平滑技术：地月空间低推力间接优化用平滑技术处理 bang-bang 不连续，降低打靶对初值的敏感\cite{zhangSmoothingTechniqueIndirect2025}。

## 相关概念

- [间接法（Indirect Methods）](/glossary/dynamics/indirect-methods/)
- [两点边值问题（TPBVP）](/glossary/dynamics/tpbvp/)
- [协态变量与共轭方程（Costate Variables and Adjoint Equations）](/glossary/dynamics/co-state-variables/)
- [庞特里亚金极值原理（Pontryagin's Maximum Principle）](/glossary/dynamics/pontryagins-maximum-principle/)
- [微分修正与打靶法](/glossary/dynamics/differential-correction/)
- [多重打靶法（Multiple Shooting Method）](/glossary/orbits/multiple-shooting/)
- [同伦方法（Homotopy Method）](/glossary/dynamics/homotopy-method/)
- [协态-控制变换（Adjoint-Control Transformation）](/glossary/dynamics/adjoint-control-transformation/)
- [Bang-bang 控制（Bang-bang Control）](/glossary/dynamics/bang-bang-control/)
- [直接法（Direct Methods）](/glossary/dynamics/direct-methods/)
