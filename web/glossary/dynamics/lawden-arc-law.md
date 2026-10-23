---
title: Lawden 弧定律（Lawden's Arc Law）
description: Lawden 1963 年按切换函数符号把连续推力最优轨迹划为三类弧的规律：最大推力弧、无推力弧、中间推力弧（奇异弧）。涵盖三类弧的判据与物理意义、Bang-coast-Bang 结构与 TCT 序列的对应、奇异弧的 Legendre-Clebsch 二阶条件，以及高推力下的脉冲极限。
keywords: Lawden弧, Lawden Arc Law, 最大推力弧, Maximum-Thrust Arc, 无推力弧, Null-Thrust Arc, 中间推力弧, Intermediate thrust arc, 奇异弧, Singular Arc, MT弧, NT弧, IT弧, Bang-coast-Bang, TCT序列
aliases:
  - Lawden 弧
  - Lawden 三弧
  - Lawden Arc Law
author: 天疆说
date: 2026-10-23
lastUpdated: 2026-10-23
wechatShare:
  title: Lawden 弧定律（Lawden's Arc Law）
  desc: 最优推力轨迹的三类弧：最大推力弧、无推力弧与中间推力弧，以及它们在任务剖面里的含义。
  image: /logo.png
og:
  title: Lawden 弧定律（Lawden's Arc Law）详解 | 术语定义
  description: Lawden 1963 年按切换函数符号把连续推力最优轨迹划为三类弧的规律：最大推力弧、无推力弧、中间推力弧（奇异弧）。涵盖三类弧的判据与物理意义、Bang-coast-Bang 结构与 TCT 序列的对应、奇异弧的 Legendre-Clebsch 二阶条件，以及高推力下的脉冲极限。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Lawden 弧定律（Lawden's Arc Law）详解 | 术语定义
  description: Lawden 1963 年按切换函数符号把连续推力最优轨迹划为三类弧的规律：最大推力弧、无推力弧、中间推力弧（奇异弧），以及三类弧的物理意义与脉冲极限。
  image: /logo.png
permalink: /glossary/dynamics/lawden-arc-law/
related:
  - ref: dynamics/bang-bang-control
    relation: related
  - ref: dynamics/primer-vector
    relation: related
  - ref: dynamics/subarc
    relation: related
---

# Lawden 弧定律（Lawden's Arc Law）

> 本文作者：天疆说
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

Lawden 1963 年的著作《Optimal Trajectories for Space Navigation》把连续推力最优轨迹按推力幅值特征划成三类弧段（arc），判据是切换函数 $S = \partial H/\partial F$ 的符号\cite{lawdenOptimalTrajectoriesSpace1963}。这一分类至今仍是推力优化理论的基础术语。

- 最大推力弧（Maximum-thrust arc, MT）：$S < 0$，发动机以 $F = F_{\max}$ 工作。

- 无推力弧（Null-thrust arc, NT）：$S > 0$，推力为零，航天器沿弹道滑行。

- 中间推力弧（Intermediate thrust arc, IT）：$S \equiv 0$，推力幅值不能由一级必要条件确定，需用 Legendre-Clebsch 二阶条件判断。最优控制理论中称为奇异弧（singular arc）。

切换函数把推力幅值推向约束边界的过程属于 [Bang-bang 控制](/glossary/dynamics/bang-bang-control/) 的内容，本词条只讲弧段的划分与含义。

## 判据的来处

切换函数来自庞特里亚金极值原理\cite{pontryaginMathematicalTheoryOptimal2018}：燃耗最优问题的哈密顿函数对推力幅值 $F \in [0, F_{\max}]$ 呈线性依赖，极小化哈密顿函数只能把 $F$ 推到区间端点。代入最优推力方向后，线性项的系数即切换函数

$$
S = \frac{\partial H}{\partial F} = -\frac{\|\boldsymbol{\lambda}_v\|}{m} - \frac{\lambda_m}{g_0 I_{sp}}
$$

其中 $\boldsymbol{\lambda}_v$ 为速度协态，$\lambda_m$ 为质量协态，$m$ 为航天器质量，$g_0 I_{sp}$ 为有效排气速度。

在无量纲推力比 $u = F/F_{\max} \in [0,1]$ 下，开关函数常写成\cite{ZhuZhengFanKongJianXiaoTuiLiGuiDaoZuiYouBangBangKongZhiDeLiangLeiYanTuoJieFaZongShu2017}：

$$
\rho = 1 - \frac{g_0 I_{sp} \|\boldsymbol{\lambda}_v\|}{m} - \lambda_m
$$

$\rho > 0$ 对应 $u^* = 0$（无推力弧），$\rho < 0$ 对应 $u^* = 1$（最大推力弧），$\rho \equiv 0$ 对应中间推力弧。

## 三类弧的物理意义

Lawden 的三类弧分类不只是数学表述，每一类都对应任务剖面里的一段具体行为。

1. 最大推力弧（MT）：发动机全开。出现在需要迅速改变轨道能量或角动量的弧段，如地球逃逸螺旋的推力段和月球捕获螺旋的减速段。在这些位置，单位推力的能量改变效率最高。

2. 无推力弧（NT）：发动机关机滑行。出现在航天器穿越大范围地月空间时，以及切换函数预示当前不施加推力反而更优的弧段。滑行段利用引力场自然演化轨道，节省推进剂。

3. 中间推力弧（IT，即奇异弧）：出现于二阶条件决定推力为中间值的特殊情形。在实践中极少遇到，通常意味着优化问题的某些对称性或简化假设在起作用。大多数实际求解中假定不存在奇异弧，以避开数值复杂性。

## Bang-coast-Bang 与 TCT 序列

在实际最优轨迹中，MT 与 NT 交替出现，形成 Bang-coast-Bang 结构。中间的滑行段（coast）就是无推力弧。一个典型的 TCT（Thrust-Coast-Thrust）序列恰好对应 MT-NT-MT 三段弧。

多段弧拼接的最优控制问题（弧段数目、切换时刻与各段推力方向联立求解）见 [多弧段最优控制](/glossary/dynamics/multi-arc-optimal-control/)，单段弧的构成见 [子弧](/glossary/dynamics/subarc/)。

## 奇异弧的二阶条件与数值处理

当 $S(t) \equiv 0$ 在一个有限时间区间上恒成立时，一级必要条件不足以确定 $F$，需要 Legendre-Clebsch 条件判断该段是否为极小路径。数值经验表明，在一般的小推力二体问题中恒为零的奇异弧极少出现，但在功率受限的低推力轨迹一类问题上可能出现，相关分析见 Thorne 1996 年第 4 章\cite{prussingEquationOptimalPowerlimited1993,thorneOptimalContinuousthrustOrbit1996}。

工程求解中通常假定不存在奇异弧，再用 [Bang-bang 控制](/glossary/dynamics/bang-bang-control/) 的同伦方法把能量最优解逐步变形到燃料最优解，切换时刻由切换函数的根确定。

## 脉冲极限

高推力近似下，MT 弧收缩为瞬时脉冲，NT 弧拉长为弹道段。Lawden 1963 年据此写出脉冲最优性的一阶必要条件，即先驱向量在转移过程中连续、模长不超过 1、在脉冲点与速度增量同向，整理形式见 [Lawden 必要条件](/glossary/dynamics/lawdens-necessary-conditions/) 词条。这三条条件与弧定律共用同一个先驱向量工具，判定对象不同：弧定律判定连续推力的弧段类型，必要条件判定脉冲解是否最优。

由此得到一条常用的数值路径：先解脉冲转移（如 [脉冲机动与交会](/glossary/dynamics/two-impulse-rendezvous/)），再以脉冲解为初值延拓到有限推力，从而绕开 Bang-bang 剖面对协态初值的敏感性。

## 相关概念

- [Bang-bang 控制（Bang-bang Control）](/glossary/dynamics/bang-bang-control/)：推力幅值只在最大值与零之间切换的开关律，弧定律的判据来源

- [先驱向量（Primer Vector）](/glossary/dynamics/primer-vector/)：Lawden 提出的最优推力方向判定工具，弧分类与脉冲必要条件共用

- [子弧](/glossary/dynamics/subarc/)：控制量取某一固定极值的连续时间段，弧段的组成单元

- [多弧段最优控制](/glossary/dynamics/multi-arc-optimal-control/)：弧段类型与切换时刻联立求解的优化问题

- [Lawden 必要条件（Lawden's Necessary Conditions）](/glossary/dynamics/lawdens-necessary-conditions/)：脉冲转移燃料最优性的四条必要条件

- [燃料最优控制](/glossary/dynamics/fuel-optimal/)：弧定律所属的性能指标框架

- [脉冲机动（Two-Impulse Rendezvous）](/glossary/dynamics/two-impulse-rendezvous/)：脉冲推进模型下的机动方法，也是连续推力延拓的初值来源
