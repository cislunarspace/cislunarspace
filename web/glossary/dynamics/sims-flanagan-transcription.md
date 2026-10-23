---
title: Sims-Flanagan 转录（Sims-Flanagan Transcription）
description: 低推力轨迹优化中把连续推力近似为分段中点脉冲的直接打靶转录方法。轨迹按飞行时间分段，前向与后向传播在切分点匹配，以各段脉冲矢量为决策变量，适合配合全局优化生成初值。
keywords: Sims-Flanagan 转录, Sims-Flanagan Transcription, 低推力轨迹优化, 直接法, 打靶法, 脉冲近似, TUDAT
author: 天疆说
date: 2026-10-17
lastUpdated: 2026-10-23
wechatShare:
  title: Sims-Flanagan 转录
  desc: 分段中点脉冲近似与前后向匹配的低推力轨迹优化直接打靶转录。
  image: /logo.png
og:
  title: Sims-Flanagan 转录详解 | 低推力轨迹优化
  description: 分段中点脉冲近似与前后向匹配的低推力轨迹优化直接打靶转录方法。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Sims-Flanagan 转录详解 | 低推力轨迹优化
  description: 分段中点脉冲近似与前后向匹配的低推力轨迹优化直接打靶转录方法。
  image: /logo.png
permalink: /glossary/dynamics/sims-flanagan-transcription/
aliases:
  - Sims-Flanagan 模型
  - Sims-Flanagan Model
---

# Sims-Flanagan 转录（Sims-Flanagan Transcription）

> 本文作者：天疆说
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

Sims-Flanagan 转录是低推力轨迹优化中常用的一种直接打靶转录方法，由 Sims 与 Flanagan 在 1999 年为行星际任务初步设计提出\cite{simsPreliminaryDesignLowThrust1999}。它把一条转移段按飞行时间等分为 $N$ 段，用每段中点处的一个瞬时速度增量近似该段内的连续推力，把连续最优控制问题转化为以各段脉冲矢量为决策变量的有限维非线性规划问题。

## 转录模型

记转移段飞行时间为 $T$，第 $i$ 段时长为 $\Delta t=T/N$。第 $i$ 段的决策变量是脉冲矢量 $\Delta\mathbf{v}_i$，通常用归一化节流矢量 $\mathbf{u}_i$ 表示：

$$\Delta\mathbf{v}_i=\frac{T_{\max}\Delta t}{m_i}\mathbf{u}_i,\qquad \|\mathbf{u}_i\|\le 1,$$

其中 $T_{\max}$ 为发动机最大推力，$m_i$ 为该段起点的航天器质量。约束 $\|\mathbf{u}_i\|\le 1$ 表示该段内的平均推力不超过 $T_{\max}$，把连续推力幅值约束转录为对脉冲幅值的约束。

传播分成前后两段。前段从出发点状态向前传播，每段中点施加脉冲后继续传播到段末。后段从到达点状态向后传播，脉冲与质量更新按时间反演。两段在切分点处要求状态一致，常用取法是选飞行时间中点：

$$\mathbf{x}_f(T/2)-\mathbf{x}_b(T/2)=\mathbf{0},$$

状态向量取位置、速度与质量。切分点不限定在中点，部分实现把切分比例作为 $[0,1]$ 区间的参数。质量随每段脉冲按齐奥尔科夫斯基公式更新，推进剂消耗与脉冲幅值对应。

优化目标通常取总速度增量最小，在固定飞行时间下等价于末端质量最大：

$$\min J=\sum_{i=1}^{N}\|\Delta\mathbf{v}_i\|.$$

发射时刻、到达时刻与飞行时间可作为外层变量，与各段脉冲一起参与优化。

## 与其他直接法分支的关系

直接法按离散策略分为打靶法、配点法与微分包含法等分支，Sims-Flanagan 转录属于打靶法\cite{bettsPracticalMethodsOptimal2010,conwaySpacecraftTrajectoryOptimization2010}。它与[直接配点法](/glossary/dynamics/direct-collocation/)的区别在于只把控制量作为决策变量，状态由逐段传播得到，等式约束只在前后两段的匹配点处施加。它与多重打靶法的区别在于不在每条分段边界施加状态连续性约束，缺陷约束数量少，变量维数低。

这种结构带来两个工程后果。第一，单条转移段的优化规模小，可以嵌入遗传算法、差分进化等全局搜索，用于多段借力任务的初值筛选。第二，匹配约束只覆盖一个切分点，传播误差没有分段约束抑制，段长较大时前后两段的轨迹偏差会直接变成约束残差。

## 方法特点与代价

脉冲近似是主要误差来源。段内连续推力被压缩为段中点的一个脉冲，当段长相对轨道周期不可忽略时，脉冲方向与大小的离散误差显著，需要细分。多圈低推力转移往往需要数百段，变量规模随之上升。

传播器决定精度与速度的平衡。初步设计阶段常用二体开普勒解析传播，每段计算量小。进入星历模型或高保真摄动模型后，逐段传播需要数值积分，计算成本明显上升，此时该方法更多用于生成初值，再由配点法或间接法精化。

## 应用要点

Sims-Flanagan 转录适合低推力转移的初步设计与全局搜索，常用于行星际多段任务和地月空间低推力转移的概念阶段。使用时先确定分段数与切分点，再用[形状基方法与速度 Hodograph](/glossary/dynamics/shape-based-method/)或脉冲转移方案给出初值，最后交给非线性规划或全局优化求解。站内资源与工具页收录的 [TUDAT](/resources-tools/) 提供这一转录的实现。

## 相关概念

- [直接法](/glossary/dynamics/direct-methods/)
- [直接配点法（Direct Collocation）](/glossary/dynamics/direct-collocation/)
- [形状基方法与速度 Hodograph](/glossary/dynamics/shape-based-method/)
- [低推力轨迹（Low-Thrust Trajectory）](/glossary/orbits/low-thrust-trajectory/)
- [脉冲机动与交会（Impulsive Maneuvers & Rendezvous）](/glossary/dynamics/two-impulse-rendezvous/)
