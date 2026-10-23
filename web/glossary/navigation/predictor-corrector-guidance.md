---
title: 预测-校正制导（Predictor-Corrector Guidance）
description: 一种闭环制导策略：每个制导周期用当前状态与动力学模型预报终端状态或终端偏差，再按预报值与期望值的差修正机动或控制量，使终端偏差收敛。与轨迹跟踪制导对举，后者跟随预先给定的标称轨迹。
keywords: 预测-校正制导, 预测校正制导, predictor-corrector guidance, predictor–corrector guidance, 闭环制导, 终端约束, 轨迹跟踪制导, 轨道维持, DRO
author: 天疆说
date: 2026-10-23
lastUpdated: 2026-10-23
wechatShare:
  title: 预测-校正制导（Predictor-Corrector Guidance）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 预测-校正制导详解 | 术语定义
  description: 每个制导周期预报终端状态并修正机动的闭环制导策略，与轨迹跟踪制导对举。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 预测-校正制导详解 | 术语定义
  description: 每个制导周期预报终端状态并修正机动的闭环制导策略，与轨迹跟踪制导对举。
  image: /logo.png
permalink: /glossary/navigation/predictor-corrector-guidance/
aliases:
  - Predictor-Corrector Guidance
  - predictor–corrector guidance
  - predictor corrector guidance
  - 预测校正制导
  - 预测-校正制导方法
  - predictor-corrector guidance method
related:
  - ref: orbits/distant-retrograde-orbit-dro
    relation: related
  - ref: dynamics/station-keeping
    relation: related
  - ref: dynamics/lyapunov-exponent
    relation: related
  - ref: navigation/iterative-guidance
    relation: related
  - ref: dynamics/lambert-guidance-routine
    relation: related
  - ref: navigation/lyapunov-optimal-feedback-guidance
    relation: related
  - ref: dynamics/adams-cowell-integrator
    relation: related
  - ref: dynamics/continuation
    relation: related
  - ref: dynamics/homotopy-method
    relation: related
---

# 预测-校正制导（Predictor-Corrector Guidance）

> 本文作者：天疆说
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

预测-校正制导（predictor-corrector guidance）是一类闭环制导策略。每个制导周期以当前状态和动力学模型预报终端状态或终端偏差，再按预报值与期望值的差修正机动或控制量，使终端偏差收敛。终端目标保持不变，飞行轨迹随周期更新 \cite{huangRobustIntelligentGuidance2026}。它与轨迹跟踪制导构成两类典型策略，后者跟随预先给定的标称轨迹，前者每个周期重算轨迹 \cite{huangRobustIntelligentGuidance2026,chaiReviewAdvancedGuidance2021}。

## 预测与校正

预测环节把当前状态、当前控制猜测和动力学模型一起传播到终端时刻，得到终端状态或终端约束残差。传播模型可以取二体、三体或高保真星历模型，控制可以取脉冲、连续推力或气动控制。地月空间的 DRO 轨道维持中，制导系统按当前状态与动力学模型对空间站轨迹做短期预报，导航系统给出实际轨迹，两者的差用于修正动力学参数的不确定性 \cite{huangRobustIntelligentGuidance2026}。

校正环节按预报残差调整控制量。以单次脉冲为例，设终端约束为 $\mathbf{c}(\Delta\mathbf{v})=0$，当前猜测为 $\Delta\mathbf{v}_k$，最简的校正用牛顿迭代

$$
\Delta\mathbf{v}_{k+1}=\Delta\mathbf{v}_k-\left[\frac{\partial \mathbf{c}}{\partial \Delta\mathbf{v}}\right]^{-1}\mathbf{c}(\Delta\mathbf{v}_k),
$$

其中敏感度矩阵由有限差分或状态转移矩阵得到 \cite{battinIntroductionMathematicsMethods1999}。实际任务里，校正可以换成打靶、序列优化或学习型模型。Huang 等 2026 在 DRO 轨道维持中把校正放进双环框架，内环用强化学习拟合动力学参数的不确定性，外环把鲁棒保持点作为周期目标并优化轨迹修正机动 \cite{huangRobustIntelligentGuidance2026}。

## 与轨迹跟踪制导的区别

轨迹跟踪制导在飞行前给出一条标称轨迹，飞行中通过多次机动把实际轨迹拉回标称轨迹，适用于行星着陆与 Halo 轨道跟踪等任务。预测-校正制导只固定终端目标，轨迹本身每个周期更新，因此可以用更少的机动到达期望状态 \cite{huangRobustIntelligentGuidance2026}。代价是精度更依赖初始状态误差与长期轨迹预报误差，模型误差会直接进入预测环节 \cite{huangRobustIntelligentGuidance2026}。两者的边界不是绝对的，区别在于被固定的是终端约束还是整条标称轨迹。

## 与迭代制导的区别

迭代制导在飞行过程中反复求解最优控制问题，通过更新协态变量估计逼近最优解，见 [迭代制导（Iterative Guidance）](/glossary/navigation/iterative-guidance/)。预测-校正制导的核心是预报终端状态并按残差修正机动，不要求每个周期都求解一个最优控制问题。两者可以同时出现在一个系统里，分工取决于任务设计。把两者当成同义词会掩盖这个差别。

## 概念辨析：三种 predictor-corrector

同一个词在三个语境里出现，对象不同，不能混用。

- 数值积分：多步法用预测公式给出初估，再用校正公式精化，见 [多步积分器（Adams-Cowell Integrator）](/glossary/dynamics/adams-cowell-integrator/)。这里预测与校正的对象是微分方程的状态量与导数值。
- 延拓与同伦：路径跟踪先用切向预测走出一步，再用牛顿校正回到解曲线，见 [数值延拓（Numerical Continuation）](/glossary/dynamics/continuation/) 与 [同伦方法（Homotopy Method）](/glossary/dynamics/homotopy-method/)。这里预测与校正的对象是解曲线上的点。
- 制导：预测与校正的对象是终端状态与机动量，本词条只讲这一种。

三者共享先预测再校正的结构，但预测对象、校正对象与收敛判据都不同。站内检索或写作时不要因为出现 predictor-corrector 就把它们当成同一个概念。

## 地月空间应用：DRO 轨道维持

DRO 是绕月运行的一类逆行周期轨道，稳定性好，适合部署地月空间站 \cite{huangRobustIntelligentGuidance2026}。导航误差、控制误差与动力学参数不确定性会使实际轨迹偏离标称 DRO，需要轨道维持 \cite{foltaEarthMoonLibration2014}。DRO 轨道维持可以看作按初始状态与期望状态修正实际轨迹的制导过程，预测-校正制导是其中一类策略 \cite{huangRobustIntelligentGuidance2026}。

Huang 等 2026 在椭圆限制性三体问题下研究 2:1 共振 DRO 的保持点，用[李雅普诺夫指数（Lyapunov Exponent）](/glossary/dynamics/lyapunov-exponent/)挑选对初始位置与速度误差不敏感的鲁棒保持点，再以该保持点为周期目标构造双环预测-校正制导框架。内环用强化学习识别并拟合动力学参数的不确定性，外环优化轨迹修正机动。算例中保持点段约 16 359 s，初始位置误差 10 km、初始速度误差约 11.7 mm/s 的轨迹能收敛到保持点 \cite{huangRobustIntelligentGuidance2026}。这个例子说明预测-校正制导在地月空间的价值：终端目标明确，轨迹可以随导航与模型更新而调整，适合长期在轨维持。

## 其他应用

预测-校正制导不限于地月空间。高速飞行器方向已有基于 DDPG 的预测校正制导律研究 \cite{WangXiaoWeiJiYuDDPGDeGaoSuFeiXingQiYuCeXiaoZhengZhiDaoLuSheJi2024}。弹道拦截把[零耗努力脱靶量（ZEM）](/glossary/dynamics/linear-quadratic-optimal-control/)与预测-校正步骤结合，用校正环节修正拦截弹道 \cite{jungCompositeZeroEffortMiss2024}。这些应用的动力学与控制手段不同，共同点是每个制导周期都重新预报并修正。

## 局限与工程约束

局限主要有两条。第一，预测精度受初始状态误差与长期轨迹预报误差影响，地月空间的长弧预报会累积误差，不稳定轨道还会放大初始偏差，预测时域与目标点选择需要权衡 \cite{huangRobustIntelligentGuidance2026}。第二，校正环节需要实时计算，模型越精细，星上算力压力越大。是否选用预测-校正制导，取决于任务对机动次数、模型精度与算力的权衡，不能简单地说它优于轨迹跟踪制导。

## 相关概念

- [远距离逆行轨道（DRO）](/glossary/orbits/distant-retrograde-orbit-dro/)
- [轨道维持（Station-Keeping）](/glossary/dynamics/station-keeping/)
- [李雅普诺夫指数（Lyapunov Exponent）](/glossary/dynamics/lyapunov-exponent/)
- [迭代制导（Iterative Guidance）](/glossary/navigation/iterative-guidance/)
- [Lambert 制导例程（Lambert Guidance Routine）](/glossary/dynamics/lambert-guidance-routine/)
- [Lyapunov最优反馈制导（Lyapunov Optimal Feedback Guidance）](/glossary/navigation/lyapunov-optimal-feedback-guidance/)
- [多步积分器（Adams-Cowell Integrator）](/glossary/dynamics/adams-cowell-integrator/)
- [数值延拓（Numerical Continuation）](/glossary/dynamics/continuation/)
- [同伦方法（Homotopy Method）](/glossary/dynamics/homotopy-method/)
