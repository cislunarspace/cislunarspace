---
title: 轨道保持点（Station-Keeping Point）
description: 周期轨道上按周期执行轨道保持机动的固定点。共振 DRO 上取为每个周期的同一状态，既是修正机动的执行位置，也是下一周期的目标状态，选点依据是扰动轨迹在一个共振周期后的收敛判据。
keywords: 轨道保持点, station-keeping point, station keeping point, stationkeeping point, SK point, 保持点, 轨道保持, 轨道维持, DRO, 轨迹修正机动, TCM
author: 天疆说
date: 2026-10-23
lastUpdated: 2026-10-23
wechatShare:
  title: 轨道保持点（Station-Keeping Point）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 轨道保持点详解 | 术语定义
  description: 周期轨道上按周期执行轨道保持机动的固定点，既是修正位置也是下周期目标状态，按误差收敛判据逐点筛选。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 轨道保持点详解 | 术语定义
  description: 周期轨道上按周期执行轨道保持机动的固定点，既是修正位置也是下周期目标状态，按误差收敛判据逐点筛选。
  image: /logo.png
permalink: /glossary/dynamics/station-keeping-point/
aliases:
  - Station-Keeping Point
  - station-keeping point
  - station keeping point
  - stationkeeping point
  - SK point
  - SK 点
  - 保持点
  - 轨道保持机动点
related:
  - ref: dynamics/station-keeping
    relation: broader
  - ref: dynamics/target-point-strategy
    relation: related
  - ref: orbits/distant-retrograde-orbit-dro
    relation: related
  - ref: dynamics/lyapunov-exponent
    relation: related
  - ref: navigation/predictor-corrector-guidance
    relation: related
  - ref: dynamics/floquet-modal-method
    relation: related
  - ref: dynamics/x-z-plane-crossing-target
    relation: related
---

# 轨道保持点（Station-Keeping Point）

> 本文作者：天疆说
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

轨道保持点指周期轨道上按周期执行轨道保持控制的固定点。对 DRO 这类周期轨道，保持控制在该点周期性执行，以维持航天器沿标称轨道运行 \cite{huangRobustIntelligentGuidance2026}。在共振 DRO 上，保持点取为航天器每个周期的同一状态，并且必须是对该轨道收敛的点，即计入导航与控制引起的位置误差与速度误差后，扰动轨迹经过一个共振周期仍回到标称轨道 \cite{huangRobustIntelligentGuidance2026}。换个说法，鲁棒保持点是演化一个周期后漂移最小的位置。

保持点同时承担两重角色。它是修正机动的执行位置，机动之前航天器沿自然动力学漂移到该点。它也是下一周期的目标状态，机动量级按把末状态拉到该点来优化。原文把两重角色放在同一个点上表述，没有另设目标点或机动点的术语 \cite{huangRobustIntelligentGuidance2026}。

中文名是本仓译名。原文写作 Station-Keeping Point，正文一律缩写为 SK point，没有分写形式，检索所见的中文文献也没有通行的对应术语。交会语境另有一支同名用法，见后文辨析。

## 在制导闭环里的角色

在双环制导框架的外环，导航与控制误差由保持点处理。航天器接近保持点时，外环按内环给出的动力学不确定度预报下一周期的轨迹，再优化轨迹修正机动，使下一个保持点处的末状态误差落到可接受范围 \cite{huangRobustIntelligentGuidance2026}。每个保持点执行一次修正机动。

规划多次修正机动时，其中一次必须落在保持点上，其余机动按初始状态与目标保持点的关系单独优化 \cite{huangRobustIntelligentGuidance2026}。这一条把保持点与随手选定时刻的修正区分开。保持点是闭环的时刻基准，脱离它执行修正就失去了周期目标的含义。

## 为什么要逐点筛选

椭圆限制性三体问题下，共振 DRO 各圈的弧段不重合，这与圆型限制性三体问题里各圈重合的 DRO 不同，轨迹修正效率随之逐圈变化。因此保持点要在共振 DRO 的所有弧段上找，不能只在某一圈上取一个点 \cite{huangRobustIntelligentGuidance2026}。逐点筛选是这种弧段结构带来的必然做法，不是算法偏好。

## 选点判据

判据用李雅普诺夫指数，量的是初始位置误差与初始速度误差经过一个共振周期后的放大或收缩。位置项按原文式 (14) 定义，速度项在等效折算之后按式 (19) 定义，两项的取值形式见[李雅普诺夫指数（Lyapunov Exponent）](/glossary/dynamics/lyapunov-exponent/)。判据是各项符号全负，此时扰动轨迹在一个共振周期后收敛到标称轨道，该节点即鲁棒保持点。任一符号为正，该初始状态发散，不能用作保持点 \cite{huangRobustIntelligentGuidance2026}。

按速度误差计算时，把初始位置误差置零会让位置项的表达式出现奇异性。原文为此构造等效误差法，先求位置与速度两组雅可比矩阵，再把速度误差折算成等效初始位置误差：

$$
\mathbf{M}_{R2V}=\mathbf{J}_{\delta R}^{-1}\mathbf{J}_{\delta V},\qquad
\delta\mathbf{R}_V=\mathbf{M}_{R2V}\,\delta\mathbf{V}
$$

折算之后速度项按与位置项相同的形式计算 \cite{huangRobustIntelligentGuidance2026}。这一步的作用是让两类误差进入同一个收敛判据，而不是分别判定再叠加。

## 算例：2:1 共振 DRO 的保持点段

算例取 2:1 共振 DRO，按共振周期等分为 10 000 个节点，每个节点取作初值传播一个共振周期算指数，等效变换矩阵随节点初值更新 \cite{huangRobustIntelligentGuidance2026}。

结果不是一个点，而是一段连续区间。原文表 2 给出相位区间 6.4499 到 12.9399 deg，对应第 20.1166 到 20.3060 天，时长 0.1893 天，即 16 359.3055 s \cite{huangRobustIntelligentGuidance2026}。原文因此把这一对象写作保持点段。工程上的含义是机动时刻有一个约 4.5 小时的窗口，而不是一个瞬时时刻。

保持点段的选址还有一条实用结论。这一段落在月球背面一侧，但按三角几何不会被月球遮挡，原文据此判定它在实际任务中可用 \cite{huangRobustIntelligentGuidance2026}。

收敛性用蒙特卡洛验证。导航误差取位置 10 km、速度 10 mm/s，控制误差取机动后的速度 1.7 mm/s，后者由推力幅值 1% 与推力方向 1 deg 误差折算，等效合成误差约 145.642 km。10 000 次仿真的终值位置误差落在 0 到 120 km，小于初始合成误差，初始误差包络覆盖终值误差包络 \cite{huangRobustIntelligentGuidance2026}。

## 与目标点策略的区别

[目标点策略（Target Point Strategy）](/glossary/dynamics/target-point-strategy/)把标称轨道按时间离散成一组参照点，控制目标是让实际轨迹在这些点上的偏差尽可能小 \cite{howellStationkeepingMethodLibration1993}。两种做法都在轨道上选点，选出来的东西不同。

目标点策略选的是一个参照集合，点本身由离散化方式给定，可调的是离散粒度与权重。保持点选的是收敛性成立的那一段，点集由误差传播判据筛出，不成立的点再均匀也不能用。目标点是构造出来的参照，保持点则同时是机动时刻与目标状态。把两者当成同一件事，会掩盖机动必须落在收敛点这一约束。

## 与 Floquet 模态法和 x 轴控制的区别

三种维持做法都要求在特定位置施加修正，选点依据不同。

[Floquet 模态法](/glossary/dynamics/floquet-modal-method/)按不稳定特征向量决定机动方向，机动位置多固定在便于测控与操作的地方，选点依据是模态分解 \cite{cuevasdelvalleOptimalFloquetStationkeeping2023}。x 轴控制策略利用 NRHO 对 xz 平面的对称性，把机动放在远月点附近，要求下游近月点穿越处的 x 方向速度与参考值匹配，选点依据是对称性与测控便利 \cite{davisStationkeepingTransferTrajectory2017}。保持点的选点依据只有误差收敛判据，与操作便利无关。三者的判据可以同时使用，但保持点的定义不依赖前两者。

## 概念辨析：交会语境里的同名用法

同一个英文词在交会接近语境指追踪器相对目标的保持位置。Woffinden 与 Geller 描述航天飞机与国际空间站交会时写道，航天飞机先转移到 station-keeping point，再执行各种后续接近轨迹 \cite{woffindenNavigatingRoadAutonomous2007}。那里指两航天器之间的相对驻留位置，与本词条的周期轨道保持点没有共同判据。

仓库 navigation/ocbe 词条的相关概念里也有一条悬空的保持点（Holding Point），属于这一支。检索与写作时按上下文区分，不要因为词面相同就把两条并成一条。

## 局限

- 判据在共振 DRO 的模型下算得，换到星历模型后收敛裕度会变，保持点段是否仍然成立需要重新核算。
- 判据按单个共振周期评估，长弧累积误差不在判据内。
- 等效误差法把速度误差折算成位置误差，用的是按节点线性化的雅可比矩阵，初始误差较大时折算精度下降。
- 原文只给出 2:1 共振 DRO 的算例。其他共振比、其他轨道族的保持点位置要另行筛选，不能把这一段的数值当作通用取值。
- 存在保持点不等于维持成本低。机动量级与频次仍由轨道不稳定度和误差水平决定。

## 相关概念

- [轨道维持（Station-Keeping / Orbit Maintenance）](/glossary/dynamics/station-keeping/)
- [目标点策略（Target Point Strategy）](/glossary/dynamics/target-point-strategy/)
- [远距离逆行轨道（Distant Retrograde Orbit, DRO）](/glossary/orbits/distant-retrograde-orbit-dro/)
- [李雅普诺夫指数（Lyapunov Exponent）](/glossary/dynamics/lyapunov-exponent/)
- [预测-校正制导（Predictor-Corrector Guidance）](/glossary/navigation/predictor-corrector-guidance/)
- [Floquet 模态法](/glossary/dynamics/floquet-modal-method/)
- [x-z 截面穿越目标（x-z Plane Crossing Target）](/glossary/dynamics/x-z-plane-crossing-target/)
