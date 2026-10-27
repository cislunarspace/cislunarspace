---
title: Floquet 乘子（Floquet Multiplier）
description: 周期轨道稳定性分析的基本对象：单值矩阵的特征值，给出每个扰动方向经过一个周期的放大或衰减倍数，模长与单位圆的关系区分不稳定、中性与稳定模态。涵盖定义与同义名特征乘子、与 Floquet 特征指数的换算、哈密顿系统的互反成对结构与平凡乘子、线性稳定判据及其在单位圆上的高阶边界、乘子穿越单位圆对应的三类分岔，以及稳定性因子、误差发散率与 Floquet 模态控制等地月空间工程用法。
keywords: Floquet 乘子, Floquet multiplier, Floquet multipliers, 特征乘子, characteristic multiplier, 单值矩阵, 周期轨道, 线性稳定性, 庞加莱映射, 分岔判别, 平动点, 晕轨道
author: 天疆说
date: 2026-10-28
lastUpdated: 2026-10-28
wechatShare:
  title: Floquet 乘子（Floquet Multiplier）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: Floquet 乘子详解 | 术语定义
  description: 周期轨道单值矩阵的特征值与线性稳定性判据，含哈密顿系统乘子结构、分岔判别与地月空间轨道维持应用。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Floquet 乘子详解 | 术语定义
  description: 周期轨道单值矩阵的特征值与线性稳定性判据，含哈密顿系统乘子结构、分岔判别与地月空间轨道维持应用。
  image: /logo.png
permalink: /glossary/dynamics/floquet-multiplier/
aliases:
  - Floquet multiplier
  - Floquet multipliers
  - Floquet乘子
related:
  - ref: dynamics/monodromy-matrix
    relation: broader
  - ref: fundamentals/stm
    relation: related
  - ref: dynamics/stability-index
    relation: related
  - ref: dynamics/lyapunov-stability
    relation: related
  - ref: dynamics/lyapunov-exponent
    relation: related
  - ref: dynamics/floquet-modal-method
    relation: related
  - ref: orbits/halo-orbit
    relation: related
  - ref: orbits/bifurcation
    relation: related
---

# Floquet 乘子（Floquet Multiplier）

> 本文作者：天疆说
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

Floquet 乘子（Floquet multiplier）是周期轨道线性稳定性分析的基本对象，指单值矩阵的特征值。设周期轨道 $\mathbf{x}^\ast(t)$ 的周期为 $T$，在其上线性化得到周期系数变分方程 $\dot{\boldsymbol\xi}=A(t)\boldsymbol\xi$，$A(t+T)=A(t)$。从 $t=0$ 积分一个周期得到单值矩阵 $M=\Phi(T,0)$，其中 $\Phi(t,0)$ 为变分方程的基本解矩阵。设 $M\mathbf{v}_i=\lambda_i\mathbf{v}_i$，则沿特征向量 $\mathbf{v}_i$ 方向的初始扰动经过一个周期后变为原来的 $\lambda_i$ 倍，乘子的模就是这个方向上一圈的放大或衰减倍数\cite{gomezDynamicsMissionDesign2001Vol1,meyerIntroductionHamiltonianDynamical2017}。

Floquet 定理（Floquet-Lyapunov 定理）指出周期系数线性系统的基本解矩阵可分解为周期矩阵与指数矩阵的乘积 $\Phi(t,0)=P(t)e^{tK}$，$P(t+T)=P(t)$，$K$ 为常数阵，于是 $M=e^{TK}$。乘子与 Floquet 特征指数 $\rho_i$ 通过 $\lambda_i=e^{\rho_i T}$ 换算，指数只能确定到相差 $2\pi\mathrm{i}/T$ 的整数倍。模长大于 1 的乘子对应正实部特征指数，模长小于 1 对应负实部，模长等于 1 对应零实部\cite{meyerIntroductionHamiltonianDynamical2017}。

乘子有等价的口径。周期轨道的庞加莱映射以该轨道为不动点，不动点处的雅可比矩阵就是单值矩阵，其特征值在文献中也称特征乘子（characteristic multiplier），与 Floquet 乘子指同一对象，见本站词条 [特征乘子（Characteristic Multiplier）](/glossary/dynamics/characteristic-multiplier/)。单值矩阵的来源、变分方程与数值计算细节见 [单值矩阵与Floquet稳定性分析](/glossary/dynamics/monodromy-matrix/)，本词条聚焦乘子本身。

## 模态分类与线性稳定判据

按模长与单位圆的关系，乘子分三类\cite{gomezDynamicsMissionDesign2001Vol1,meyerIntroductionHamiltonianDynamical2017}。

- $|\lambda_i|>1$：不稳定模态，相应方向的扰动每圈放大 $|\lambda_i|$ 倍，指数发散。
- $|\lambda_i|=1$：中性模态，扰动有界振荡或保持不变，线性化给不出收敛或发散。
- $|\lambda_i|<1$：稳定模态，相应方向的扰动每圈衰减。

对一般的周期系数线性系统，周期轨道线性稳定的判据是全部乘子的模不大于 1，且位于单位圆上的乘子对应单重特征值，不出现非平凡 Jordan 块\cite{brouckeStabilityPeriodicOrbits1969}。哈密顿系统的辛结构排除了孤立的圆内乘子（见下一节），周期轨道要么全部非平凡乘子落在单位圆上，要么至少一个落在圆外，不存在渐近稳定的中间情形。这与哈密顿系统平衡点不可能渐近稳定的结论同源，见 [李雅普诺夫稳定性（Lyapunov Stability）](/glossary/dynamics/lyapunov-stability/)。

落在单位圆上的乘子是判据的边界。线性化在中性方向上给不出结论，非线性项决定这些方向上轨道的长期行为，需要中心流形约化、正规形或 KAM 理论等高阶分析\cite{meyerIntroductionHamiltonianDynamical2017,cellettiStabilityChaosCelestial2010}。工程语境里读到乘子落在单位圆上时，正确的结论是该方向线性中性，而不是稳定。

## 哈密顿系统的乘子结构

圆型限制性三体问题是哈密顿系统，单值矩阵是辛矩阵，乘子按互反与共轭成组出现：若 $\lambda$ 是乘子，则 $\bar\lambda$、$1/\lambda$、$1/\bar\lambda$ 也是乘子，实根按 $\lambda$ 与 $1/\lambda$ 成对\cite{meyerIntroductionHamiltonianDynamical2017}。这一结构蕴含模长不等于 1 的乘子成对出现，一个在圆外必有一个在圆内，孤立的衰减方向不存在，因此哈密顿系统的周期轨道没有渐近稳定的模态组合，不稳定程度由圆外乘子完全刻画。

六维相空间的周期轨道有 6 个乘子。以共线平动点附近的晕轨道为典型\cite{gomezDynamicsMissionDesign2001Vol1,breakwellHaloFamily3dimensional1979}：

- 一对实根 $\lambda_1>1$ 与 $\lambda_2=1/\lambda_1<1$，表征鞍点结构。$\lambda_1$ 的特征向量给出相邻轨道指数发散的不稳定方向，$\lambda_2$ 给出收敛的稳定方向，二者是不变流形在轨道上各点的局部切向。
- 一对共轭复根 $|\lambda_{3,4}|=1$，表征面内或面外的中心振荡模态，产生拟周期轨道。
- 两个平凡根 $\lambda_5=\lambda_6=1$，一个来自自治系统沿轨道平移的不变性，改变相位不改变轨道形状，一个来自哈密顿流的能量方向，即雅可比积分约束。

文献对乘子的编号不统一，有的把主导实根记作 $\lambda_1$，有的记作 $\lambda_5$。使用乘子时应按性质对号，即实根对、单位圆复根对、平凡根，不按编号，跨文献比较时尤其如此。

## 分岔判别：乘子穿越单位圆

沿轨道族延拓参数（幅值、雅可比常数）时，乘子随参数在复平面上连续移动，非平凡乘子穿越单位圆对应分岔事件，穿越方式给出分岔类型\cite{seydelPracticalBifurcationStability2010}。

- 从 $+1$ 穿出：切分岔（tangent bifurcation），新旧周期轨道族相切连接。
- 从 $-1$ 穿出：倍周期分岔（period-doubling bifurcation），产生周期翻倍的新轨道族。
- 共轭复对穿出：Neimark-Sacker 分岔，产生不变环面上的拟周期轨道族。

Howell 与 Campbell 1999 在圆型限制性三体问题中延拓晕轨道族，正是依据乘子的行为识别族上分岔出的三维周期解族，并用乘子逐一评估新族的稳定性\cite{howellThreeDimensionalPeriodic1999}。乘子判据因此既是稳定性判据，也是周期解族延拓与分类的分支识别工具，分岔概念见 [分岔（Bifurcation）](/glossary/orbits/bifurcation/)。

## 工程应用

乘子在任务设计中的直接用途有三类。

轨道选型用稳定性因子。互反实根对压缩成标量 $\nu=(|\lambda_u|+|\lambda_s|)/2$，其中 $\lambda_u>1$ 为圆外根，$\lambda_s=1/\lambda_u$ 为圆内根，$\nu=1$ 为线性稳定的下界，越大越不稳定。一对共轭复乘子也离开单位圆时，这部分不稳定性不在 $\nu$ 的概括范围内。延拓晕轨道族时画出的 $\nu$ 曲线是比较族成员维持代价的基本图线\cite{mengyun-heOutlineDesignPerformance2014}，见 [稳定性指数（Stability Index）](/glossary/dynamics/stability-index/)。

预报窗口用发散率。小偏值晕轨道的实数乘子常达数百到数千量级，初始误差一圈放大 $|\lambda_u|$ 倍，$n$ 圈后放大 $|\lambda_u|^n$ 倍，等效指数发散率为 $\delta\approx\ln|\lambda_u|/P$，其中 $P$ 为轨道周期。发散率决定不引入控制时星上预报的最大有效窗口与重定轨节奏\cite{breakwellHaloFamily3dimensional1979}。

轨道维持用模态分解。主导不稳定乘子的特征向量给出误差增长最快的方向，Floquet 模态法按模态设计反馈或选择控制时刻，只消去不稳定模态分量，晕轨道的轨道与姿态耦合周期解即按此评估与稳定化\cite{colombiFloquetModesStability2021}，见 [Floquet模态法与平动点轨道保持](/glossary/dynamics/floquet-modal-method/)。

## 概念辨析

与特征乘子。两个名字指同一对象：单值矩阵即庞加莱映射在不动点的雅可比，其特征值既是 Floquet 乘子也是特征乘子。天体力学与轨道动力学文献多用 Floquet 乘子，控制与振动文献多用特征乘子，读文献时按对象对齐，不按名字。

与 Floquet 特征指数。$\lambda=e^{\rho T}$ 把乘子与特征指数对应起来，特征指数相差 $2\pi\mathrm{i}/T$ 的整数倍时对应同一乘子，乘子没有这一模糊性，数值工作首选乘子。

与李雅普诺夫指数。周期轨道的特征指数 $\rho=\ln|\lambda|/T$ 就是沿该轨道取值的李雅普诺夫指数。非周期或混沌轨道没有单值矩阵，只能用时间平均的李雅普诺夫指数刻画平均分离率，见 [李雅普诺夫指数（Lyapunov Exponent）](/glossary/dynamics/lyapunov-exponent/)。

与稳定性指数。稳定性指数是乘子的标量化，把每对非平凡乘子压成一个实数，便于比较与画图，信息有损但直观，见 [稳定性指数（Stability Index）](/glossary/dynamics/stability-index/)。

## 相关概念

- [单值矩阵与Floquet稳定性分析](/glossary/dynamics/monodromy-matrix/)
- [状态转移矩阵](/glossary/fundamentals/stm/)
- [稳定性指数（Stability Index）](/glossary/dynamics/stability-index/)
- [李雅普诺夫稳定性（Lyapunov Stability）](/glossary/dynamics/lyapunov-stability/)
- [李雅普诺夫指数（Lyapunov Exponent）](/glossary/dynamics/lyapunov-exponent/)
- [Floquet模态法与平动点轨道保持](/glossary/dynamics/floquet-modal-method/)
- [晕轨道（Halo Orbit）](/glossary/orbits/halo-orbit/)
- [分岔（Bifurcation）](/glossary/orbits/bifurcation/)
