---
title: 稳定性指数（Stability Index）
description: 把周期轨道单值矩阵每一对非平凡 Floquet 乘子压成一个实数的指标，常用口径为 ν = (1/2)(|λ| + 1/|λ|)，全部等于 1 为线性稳定，任一模大于 1 为不稳定。覆盖取模写法与有符号写法的换算、迹的闭式与约化前提，以及它在轨道族筛选、轨道维持与输运结构分析中的用法。
keywords: 稳定性指数, Stability Index, 稳定指数, 稳定性因子, 单值矩阵, Floquet 乘子, 线性稳定性, 不稳定阶数, 周期轨道, CR3BP
author: 天疆说
date: 2026-10-23
lastUpdated: 2026-10-23
wechatShare:
  title: 稳定性指数（Stability Index）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 稳定性指数详解 | 术语定义
  description: 用单值矩阵乘子刻画周期轨道线性稳定性的指标，含取模写法、有符号写法与迹闭式的换算关系。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 稳定性指数详解 | 术语定义
  description: 用单值矩阵乘子刻画周期轨道线性稳定性的指标，含取模写法、有符号写法与迹闭式的换算关系。
  image: /logo.png
permalink: /glossary/dynamics/stability-index/
aliases:
  - Stability Index
  - stability index
  - 稳定指数
  - 稳定性因子
  - Stability Factor
related:
  - ref: dynamics/monodromy-matrix
    relation: broader
  - ref: dynamics/characteristic-multiplier
    relation: related
  - ref: dynamics/lyapunov-exponent
    relation: related
  - ref: orbits/orbital-stability-index
    relation: related
  - ref: orbits/mildly-unstable
    relation: related
  - ref: orbits/nrho
    relation: related
  - ref: fundamentals/stm
    relation: related
  - ref: orbits/bifurcation
    relation: related
---

# 稳定性指数（Stability Index）

> 本文作者：天疆说
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

把周期轨道的状态转移矩阵沿一个完整周期积分，得到单值矩阵 $M = \Phi(t_0 + T, t_0)$，它的特征值即 Floquet 乘子 $\lambda_i$，见 [单值矩阵与Floquet稳定性分析](/glossary/dynamics/monodromy-matrix/)。辛结构使这些乘子成对出现：两个恒为 1，分别对应沿轨方向的相位平移与雅可比积分给出的能量方向，其余乘子成互反实对或共轭复对。稳定性指数的作用是把每一对非平凡乘子压成一个实数，用一维的量刻画周期轨道邻域的线性稳定性。

最常用的口径先取模再求和的一半

$$
\nu_j = \frac{1}{2}\left(|\lambda_j| + \frac{1}{|\lambda_j|}\right), \qquad j = 1, 2
$$

两个指标都等于 1 时，周期轨道线性稳定，不存在不稳定子空间。任一模大于 1 时轨道不稳定，其邻域同时存在流入与流出的自然流，稳定流形与不稳定流形因此存在\cite{zimovan-spreenRectilinearHaloOrbits2020}。这个口径的指数恒为实数且不小于 1，数值越接近 1，偏差发散越慢。

## 三个决定数值的约定

不同文献报出的稳定性指数常常对不上，差别不在物理，而在三个书写约定。引用数值之前要先对齐这三件事。

第一是用哪一对乘子。空间圆型限制性三体问题有两对非平凡乘子，一对来自面内扰动，一对来自面外扰动，各自给出一个指标。只报一个数时，要说清是面内还是面外。

第二是是否含 1/2 因子。Broucke 把 $\kappa = \lambda + 1/\lambda$ 直接称作稳定性指数，取一半之后才是 Gómez 等与 Zhang 的写法，两者数值相差一倍，判据阈值随之从 $\pm 2$ 变成 $\pm 1$\cite{brouckeStabilityPeriodicOrbits1969,gomezDynamicsMissionDesign2001Vol1}。

第三是绝对值取在求和之前还是之后。两种顺序给出两个不同的量，稳定轨道的读数完全不同，见下表。Spreen 与 Howell 的博士论文把两种写法并列，并写明选用一种、弃用另一种的理由，是这条分歧最清楚的一手交代\cite{spreenTrajectoryDesignTargeting2021}。

| 写法 | 出处 | 稳定判据 | 稳定轨道的读数 |
| --- | --- | --- | --- |
| $\nu_j = \frac{1}{2}\left(\lvert\lambda_j\rvert + 1/\lvert\lambda_j\rvert\right)$ | Zimovan-Spreen 等 2020 | 全部等于 1 | 恒为 1 |
| $\nu_j = \frac{1}{2}\left(\lambda_j + 1/\lambda_j\right)$ | Gómez 等 2001，Zhang 2022 | $\lvert\nu_j\rvert < 1$ | 落在 $[-1, 1]$，随乘子相位变 |
| $\kappa = \lambda + 1/\lambda$ | Broucke 1969 | $\lvert\kappa\rvert \le 2$ | 落在 $[-2, 2]$ |

## 迹的闭式与约化前提

Zhang 2022 给出不经特征值、直接由迹计算的闭式\cite{zhangReviewPeriodicOrbits2022}

$$
\nu = \frac{1}{4}\left[\operatorname{tr}(M) \pm \sqrt{8 + 2\operatorname{tr}(M^2) - \operatorname{tr}(M)^2}\right],
$$

它的前提是 $M$ 已经去掉两个恒为 1 的乘子，只剩一对非平凡乘子。

这个前提容易被跳过，跳过就会算错。平面圆型限制性三体问题的状态是四维，单值矩阵的特征值为 $1, 1, \lambda, 1/\lambda$，此时 $\frac{1}{2}|\operatorname{tr}(M) - 2|$ 恰好等于面内那对的指标，不少数值工具就从这个形式出发。空间模型的状态是六维，迹里含两对非平凡乘子的系数，$\operatorname{tr}(M) - 2$ 只能给出两对系数之和，不再是单个指标。要拿到面内与面外的单个指标，得先约化到四维，再用闭式分别求解。

把两对乘子合成一个数还有第二种失真。对应的两个系数一正一负时相加会互相抵消，合成值落回零附近，读起来像稳定，而轨道其实已有一对乘子离开单位圆。评估三维族成员时要按对分开算，不能只取一个迹。

## 有符号写法的取舍

有符号写法 $\nu_j = \frac{1}{2}(\lambda_j + 1/\lambda_j)$ 在单位圆上等于 $\cos\theta$，取值落在 $[-1, 1]$，因此能连续地反映乘子的相位，也能读出不稳定阶数，即族成员有几对乘子已经离开单位圆\cite{spreenTrajectoryDesignTargeting2021}。它的代价是乘子成复共轭且模不为 1 时 $\nu_j$ 变成复数，无法当作实数量排序比较。Spreen 与 Howell 的博士论文正是以此为由在数值研究里改用取模写法\cite{spreenTrajectoryDesignTargeting2021}。

取模写法恒为实数且不小于 1，便于跨族排序与作图，代价是把 $[-1, 1]$ 内的相位信息压成常数 1。选哪一种取决于用途。比较族成员、画指标随族参数变化的曲线、定位分岔时用有符号写法，做全局筛选与阈值判据时用取模写法。

## 数值量级

地月 L2 的 NRHO 段，指标介于 1 与 1.69 之间，其中既有线性稳定成员，也有[弱不稳定（Mildly Unstable）](/glossary/orbits/mildly-unstable/)成员\cite{zimovan-spreenRectilinearHaloOrbits2020,spreenTrajectoryDesignTargeting2021}。岛链中心不动点附近的周期轨道，指标约等于或接近 1，与鞍点关联的周期轨道指标幅值很高。

Kapolka 等 2026 在地月 CR3BP 里判一条跨月周期轨道为不稳定，报出的稳定性指数是 506.84。该轨道落在庞加莱图的混沌区，不属于任何岛链，作者用这个幅值说明指标与输运结构之间的对应关系\cite{kapolkaDiscoveryDynamicalStructures2026}。同文写明稳定性指数的算法不在其讨论范围内，转引 Kapolka 与 Bettinger 2025 以及 Li 等 2021\cite{kapolkaIdentificationAnalysisInterior2025,liStabilityBifurcationAnalyses2021}。因此这条论文只能作为幅值实例与用法的引用，不能当作指标定义的出处。

## 地月空间用法

族筛选与轨道选型。NRHO 本身就是按稳定性从晕轨道族里界定出来的子集，稳定或近稳定的区段进入 NRHO，其余成员归入一般[晕轨道（Halo Orbit）](/glossary/orbits/halo-orbit/)。选型时先按指标筛掉发散快的成员，再评估转移成本与维持成本。远距离逆行轨道的非平凡乘子落在单位圆上，指标接近 1，长期自稳定，这也是它被视为地月空间站候选轨道的原因之一\cite{bezroukLongDurationStability2014}，见 [远距离逆行轨道（DRO）](/glossary/orbits/distant-retrograde-orbit-dro/)。

轨道维持代价估计。指标接近 1 的轨道偏差增长慢，修正频次与年速度增量低。指标高到数百量级的成员，偏差在几个周期内就发散到需要重定轨的程度，见 [轨道维持（Station-Keeping）](/glossary/dynamics/station-keeping/)。

分岔与族结构。指标随族参数连续变化，穿越 1 的位置对应线性稳定性改变，往往就是分岔点，见 [分岔（Bifurcation）](/glossary/orbits/bifurcation/)。沿族画指标曲线是辨认垂直分岔与倍周期分岔的常规手段。

输运结构分析。指标高的周期轨道邻域有强不稳定流形，天然构成低能转移的进出口，混沌输运网络里被反复利用的通道多挂在指标高的周期轨道上\cite{kapolkaDiscoveryDynamicalStructures2026}。

线性化控制设计。指标决定线性化后不稳定方向上的增益需求，Floquet 模态法与 LQR 的权重选择都以乘子谱与指标为依据，见 [李雅普诺夫指数（Lyapunov Exponent）](/glossary/dynamics/lyapunov-exponent/)。

## 概念辨析

轨道稳定度。站内的[轨道稳定度（Orbital Stability Index）](/glossary/orbits/orbital-stability-index/)名字近似，量不是一回事。它用多个过月心截面按等相位角间距截取 DRO 轨迹，统计截面交点间的最大距离再取平均，衡量长期有界性与构型保持能力，与单值矩阵无关\cite{zhouDesignCircumlunarGlobal2024}。两者可以在同一次选型里同时使用，不能互相替代。

特征乘子。指标是乘子的函数，乘子本身是单值矩阵的特征值，见 [特征乘子（Characteristic Multiplier）](/glossary/dynamics/characteristic-multiplier/)。说某条轨道的稳定性指数是 1.2 与说它的乘子是 1.2 是两件事。

李雅普诺夫指数。它按时间平均给出相邻轨迹的渐近分离率，是长时极限量。稳定性指数是单周期量，只描述一圈内的线性映射。周期轨道上用稳定性指数更直接，混沌轨道上两者都要用到。

稳定性因子。站内单值矩阵词条把 $\nu = (|\lambda_u| + |\lambda_s|)/2$ 称作稳定性因子，由于 $\lambda_s = 1/\lambda_u$，它就是取模写法给出的那个指标，只是从实乘子的角度写出。

误差发散率与 Broucke 稳定性图。前者由 $\ln|\lambda_u|$ 除以周期得到，量纲是时间的倒数，见 [单值矩阵与Floquet稳定性分析](/glossary/dynamics/monodromy-matrix/)。后者把两个稳定性系数画成平面来给族成员分类。两者都与指标相关，但都不是指标本身。

## 相关概念

- [单值矩阵与Floquet稳定性分析（Monodromy Matrix）](/glossary/dynamics/monodromy-matrix/)
- [特征乘子（Characteristic Multiplier）](/glossary/dynamics/characteristic-multiplier/)
- [李雅普诺夫指数（Lyapunov Exponent）](/glossary/dynamics/lyapunov-exponent/)
- [轨道稳定度（Orbital Stability Index）](/glossary/orbits/orbital-stability-index/)
- [弱不稳定（Mildly Unstable）](/glossary/orbits/mildly-unstable/)
- [近直线晕轨道（NRHO）](/glossary/orbits/nrho/)
- [状态转移矩阵（State Transition Matrix）](/glossary/fundamentals/stm/)
- [分岔（Bifurcation）](/glossary/orbits/bifurcation/)
