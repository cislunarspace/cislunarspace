---
title: 拼接点（Patch Point）
description: 多重打靶轨迹分段点——相邻子弧的状态连续性在此处约束，其数量与位置直接决定收敛速度与精度。覆盖固定/变时间拼接、自适应选取策略、异系统（日地/地月）流形拼接的交点角色，以及从 CR3BP 过渡到星历模型时的工程权衡。
keywords: 拼接点, Patch Point, 多重打靶, 微分修正, 轨迹拼接, 二级微分修正, 自适应选取, 地月空间
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 拼接点（Patch Point）详解
  desc: 多重打靶轨迹分段的几何/算法连接点，决定收敛速度与精度。
  image: /logo.png
og:
  title: 拼接点（Patch Point）详解 | 多重打靶关键概念
  description: 多重打靶轨迹分段点——相邻子弧的状态连续性在此处约束，其数量与位置直接决定收敛速度与精度。覆盖固定/变时间拼接、自适应选取策略、异系统流形拼接的角色。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 拼接点（Patch Point）详解 | 多重打靶关键概念
  description: 多重打靶轨迹分段点——数量与位置直接决定收敛速度与精度。
  image: /logo.png
permalink: /glossary/dynamics/patch-point/
---

# 拼接点（Patch Point）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

拼接点（patch point，又称 splicing point、connection point）是在[多重打靶](/glossary/dynamics/differential-correction/)和两级[微分修正](/glossary/dynamics/differential-correction/)中将长弧段轨迹切分为若干子弧的连接节点。在每一点处相邻子弧必须满足位置和速度的连续性约束，这些约束构成微分修正的自由变量/约束方程体系中的等式约束，其雅可比矩阵对应段的[状态转移矩阵](/glossary/fundamentals/stm/)的分量（Muralidharan 2021 §3.4）。

概念上，拼接点是多重打靶化整为零的几何体现：本来一条从初态到终态的完整轨迹需要单步打靶一次性求解，STM 在长弧与高敏感区域累积误差，收敛域极窄；引入拼接点后，每个子弧的 STM 只在自己的小段上工作，条件良态、初猜容错扩大，代价是需要联立求解 $6n$ 维的自由变量向量（每点 6 状态 × $n$ 个点）。

## 在两级微分修正中的角色

Howell & Pernicka（1987）的两级修正算法因拼接点而得名，两级指的就是拼接点处先后处理位置连续性和速度连续性的两层嵌套迭代：

- **内层**：固定各拼接点位置，只修正各点速度，消除每段终点与下一拼接点之间的位置不连续；

- **外层**：调整各拼接点的位置与各段飞行时间，消除速度不连续。

准周期轨道（Lissajous 轨迹）虽不严格闭合，但只要拼接点数量足够、连续条件满足，就可构造出任意长的连续轨迹。算法在 1987 年后经 Howell & Pernicka（1990, 1993）将拼接点策略扩展到星历模型，至今仍是 CR3BP 解向高保真星历模型过渡的核心工具。

## 固定时间 vs. 变时间拼接

- **固定时间多重打靶**：每段飞行时间固定，自由变量仅含各拼接点的 6 维状态，约束为相邻拼接点间的连续性条件。方程组简洁，但需先验指定时间分配。

- **变时间多重打靶**：每段飞行时间也作为额外自由变量加入。自由变量维度增至 $7n-1$（$n$ 个点 × 6 状态 + $n-1$ 段时间），雅可比中新增对时间的偏导（末端速度项 $\dot{\mathbf{x}}$）。更大的解空间使收敛更稳健（Muralidharan 2021 §3.4.2），同时允许在方程组中加入特定约束（如 Jacobi 常数守恒）。

## 拼接点的数量与位置的工程权衡

拼接点的数量不是越多越好。陈昱桔（2024）的 DRO 转移轨道研究表明，拼接点数量取 4 时计算效率和精度之间取得最佳平衡；过少则段内弧长过长、STM 病态；过多则雅可比矩阵维度爆炸，每次迭代的计算成本急剧上升。

传统做法是沿轨迹等间隔（按时间/弧长）撒点。但不同振幅的 DRO/NRHO 在各段的局部敏感度差异巨大，等间隔对多数轨道并不适用。自适应策略通过有限差分灵敏度分析或[差分进化算法](/glossary/dynamics/de/)寻找每条轨道的最优拼接点位置：在高敏感区（近月点、穿越点）加密点、在平稳区减点。Muralidharan（2021 §4.4）在生成约 1 年 Gateway NRHO 虚拟参考轨迹时，用约 40–50 个拼接点（对应 40–50 圈），平均每圈一个点，位置在远月点附近（较平缓）取宽松间距、近月点附近取加密。

## 异系统拼接中的连接点角色

两种不同的三体系统（如日地 CR3BP + 地月 CR3BP）因引力圈结构不同而各自独立，无法在同一框架下直接耦合。弱稳定边界（WSB）转移的关键思路是在**共同庞加莱截面**上寻找连接点：日地流形和地月流形在截面上投影的交点。该交点处的状态作为两系统之间的几何拼接点，两侧在其各自的旋转系中积分，交叠区域的速度跳变再通过微分修正消除，实现两体系统之间的低能连接（Koon et al. 2000）。

在这个语境下，拼接点不仅是算法节点，同时具有几何含义：它是切换动力学模型的界面位置。地月/日地系统的连接点通常选在地月 $L_2$ 附近、两系统都允许航天器在局部无推力传过该截面的位置。

## 相关概念

- [微分修正与打靶法](/glossary/dynamics/differential-correction/)

- [圆型限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)

- [状态转移矩阵（STM）](/glossary/fundamentals/stm/)

- [庞加莱截面（Poincaré Map）](/glossary/dynamics/poincare-map/)

- [差分进化算法（DE）](/glossary/dynamics/de/)

- [轨道保持（Station-Keeping）](/glossary/dynamics/station-keeping/)

## 参考文献

- Howell K C, Pernicka H J. Numerical determination of Lissajous trajectories in the restricted three-body problem[J]. Celestial Mechanics, 1987, 41(1-4): 107-124.（拼接点的原始定义与两级修正）

- Muralidharan A. Stretching directions in cislunar space: stationkeeping and an application to transfer trajectory design[D]. Purdue University, 2021. §3.4, §4.4.（固定/变时间多重打靶中拼接点的数学处理与自适应播种策略）

- Chen Y J. DRO Orbit Design and Control Research for Cislunar Space Situation Awareness[D]. 2024.（自适应拼接点选取：差分进化优化拼接位置与数量）

- Koon W S, Lo M W, Marsden J E, Ross S D. Heteroclinic connections between periodic orbits and resonance transitions in celestial mechanics[J]. Chaos, 2000, 10(2): 427-469.（日地与地月系统之间的异宿连接，连接点在双系统流形拼接中的几何含义）
