---
title: 脉冲机动与交会（Impulsive Maneuvers & Rendezvous）
description: 以瞬时速度增量（脉冲）近似化学推进机动的轨道设计与交会方法。涵盖Lambert问题与Hohmann转移、双脉冲/三脉冲/多脉冲机动策略、平动点双脉冲转移、NRHO脉冲交会调相、TCT（推力-滑行-推力）序列、脉冲施加法则与脉冲间隔设计，以及总速度增量与到达脉冲等优化评估指标。
keywords: 脉冲机动, Impulsive Maneuver, 双脉冲交会, Two-Impulse Rendezvous, 多脉冲, Multi-Impulse, 三脉冲转移, Three-Impulse Transfer, NRHO调相, NRHO Phasing, Lambert问题, Hohmann转移, 脉冲施加法则, Impulse Application Rule, 平动点双脉冲转移, 推力-滑行-推力, TCT, 总速度增量, Total Delta-V
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 脉冲机动与交会（Impulsive Maneuvers & Rendezvous）
  desc: 化学推进航天器的轨道机动与交会：从双脉冲到多脉冲、从二体到平动点的全面讲解。
  image: /logo.png
og:
  title: 脉冲机动与交会（Impulsive Maneuvers & Rendezvous）详解 | 术语定义
  description: 以瞬时速度增量（脉冲）近似化学推进机动的轨道设计与交会方法。涵盖Lambert问题与Hohmann转移、双脉冲/三脉冲/多脉冲机动策略、平动点双脉冲转移、NRHO脉冲交会调相、TCT序列、脉冲施加法则与脉冲间隔设计，以及总速度增量与到达脉冲等优化评估指标。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 脉冲机动与交会（Impulsive Maneuvers & Rendezvous）详解 | 术语定义
  description: 以瞬时速度增量（脉冲）近似化学推进机动的轨道设计与交会方法。涵盖Lambert问题与Hohmann转移、双脉冲/三脉冲/多脉冲、平动点脉冲转移、NRHO调相、TCT序列及总Delta-V评估。
  image: /logo.png
permalink: /glossary/dynamics/two-impulse-rendezvous/
---

# 脉冲机动与交会（Impulsive Maneuvers & Rendezvous）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

脉冲机动（impulsive maneuver）是对化学推进航天器轨道机动的一种数学近似：假设发动机推力 $F \to \infty$、燃烧时间 $\Delta t \to 0$，使得冲量 $F\Delta t$ 有限且轨道速度发生瞬时阶跃变化。这一近似成立的条件是燃烧时间远小于轨道周期，对于典型的高推力化学火箭（推力数十万牛、比冲 300--400 s），这在地球低轨转移中基本成立（Vallado 2022）。

脉冲机动使轨道设计退化为求解速度增量 $\Delta v$（模与方向）的问题，而不必处理连续推力积分。两个核心性能指标：

- **总速度增量** $\Delta v_{\text{total}}$：完成一次完整轨道转移所需所有脉冲的 $\Delta v$ 之和。它是燃耗的基本度量，通过齐奥尔科夫斯基公式映射为推进剂消耗。

- **到达脉冲** $\Delta v_f$：最后一次到达目标轨道时施加的脉冲。在 DRO 入轨问题中，Pareto 前沿解显示 $\Delta v_f$ 随转移时间增加从约 98.5 m/s 降至约 2.2 m/s，反映了转移时间与燃料消耗的根本性权衡。

## 二体问题中的脉冲机动

### 双脉冲：Lambert 问题与 Hohmann 转移

双脉冲交会（Two-Impulse Rendezvous）是最基本的脉冲机动模式：仅在起始轨道施加一次出发脉冲、在末端轨道施加一次到达脉冲，中间滑行段仅靠引力自然飞行。对应 Lambert 问题：已知两个位置矢量 $\mathbf{r}_1, \mathbf{r}_2$ 和转移时间 $t_f$，求解转移轨道的初始与终末速度。

Lambert 问题的解通过 Lagrange 系数或 Gibbs 方法得到，存在长程解和短程解、多圈解等分支。当两个轨道共面圆时，能量最优的双脉冲解退化为 **Hohmann 转移**：两次脉冲均沿切向施加，在出发点加速使航天器进入半长轴恰为两轨道半径平均值的椭圆转移轨道，在到达点减速使航天器圆化。

在多圈问题的更一般情形下，双脉冲交会可通过多圈 Lambert 解（multiple-revolution Lambert solution）扩展到包含 0 至 N 个额外整圈的转移（Shen and Tsiotras 2003）。

### 三脉冲与多脉冲

当双脉冲解不满足约束（如推力方向限、窗位约束）或为进一步优化燃耗时，引入中间脉冲：

- **三脉冲转移**：在地月 DRO 入轨的标准构型中，依次在离轨点、近月点和入轨点施加三次脉冲。离轨脉冲将航天器从地球停泊轨道送入地月转移段；近月点脉冲施加在月球飞掠近地点，借力改变飞行方向进入月球至 DRO 的转移段；入轨脉冲在 DRO 插入点完成轨道匹配。总脉冲为近月点脉冲与入轨脉冲之和（魏赞等 2026）。

- **三脉冲入轨**：三脉冲转移在 DRO 捕获场景的具体表述：第一脉冲低轨离轨、第二脉冲近月点转向、第三脉冲 DRO 插入。

- **多脉冲机动**：轨道转移中使用的多次脉冲机动，可分段调整轨道参数，实现更灵活的转移轨迹设计。在转移时间长、约束多的复杂任务中，增加脉冲次数通常能降低总燃耗，代价是增加操纵复杂度。

## 三体问题中的脉冲机动

在 CR3BP 的多体动力学背景下，脉冲机动超越了二体 Lambert 框架，必须考虑平动点轨道的稳定/不稳定流形结构。

### 平动点双脉冲转移

航天器从近地停泊轨道出发，仅施加两次脉冲即可到达平动点周期轨道（潘迅等 2017）。其策略利用了 CR3BP 的不变流形：

1. **第一次脉冲**（出发）：将航天器从近地轨道送入拼接转移段，飞向目标周期轨道的稳定流形。
2. **滑行段**：航天器在拼接段上沿引力自然飞行。
3. **第二次脉冲**（到达）：在流形拼接点处匹配目标轨道的状态，之后沿稳定流形无动力趋向目标周期轨道。

双脉冲平动点转移之所以仅需两次脉冲即可完成，关键在于利用了流形的自然动力学：滑行段不是自由的 Lambert 弧，而是被流形引导的自动轨道转换。

### NRHO 脉冲交会调相

在近直线晕轨道（NRHO）上，同轨航天器的交会需要调相。**NRHO 两脉冲调相**（Li et al. 2026）：追踪航天器通过两次脉冲实现与目标航天器的相位匹配。第一次脉冲离开原 NRHO 轨道，追赶或等待目标；经转移时间后，第二次脉冲恢复至目标轨道状态。相比三脉冲方案，两脉冲适合大相位差交会。

Fossa et al. (2022) 进一步研究了 NRHO 上的两脉冲与三脉冲调相策略，指出在 $L_2$ 南部 NRHO 上，到特定目标相位的总 $\Delta v$ 可低至 1.5 m/s 量级，显著低于传统的多圈漂移方案。

### 双脉冲平动点轨道间转移

双脉冲机动（Two-Impulse Maneuver, TI）利用两次脉冲在共线平动点轨道间进行转移，通过状态转移矩阵（STM）线性化相对动力学求解脉冲速度增量。方法是在初始脉冲处计算目标轨道状态与当前状态的偏差，通过 STM 传播至目标点，求解满足终端条件的脉冲。该方法计算效率高，适合在线制导，但高精度需求下需要迭代求解以补偿线性化误差（Cuevas del Valle et al. 2022）。

## 脉冲施加法则

基于 CR3BP 中雅可比常数与速度增量之间的微分关系，可以推导出两条脉冲施加的能效最优原则（乔琛远和杨乐平 2024）：

1. **减速机动**应在速度极大值处施加，且速度增量方向与速度反向共线。因为当速度最大时，同样的 $\Delta v$ 能最大地降低轨道能量（雅可比常数）。

2. **调向机动**应在速度极小值处施加。改变速度方向所需的能量代价与当前速度大小成正比，速度越小则越省燃耗。

这些法则在多体引力场中提供了脉冲位置与方向选择的物理解释，是轨道优化中初值猜测和结果评估的重要定性依据。

## 脉冲间隔与工程约束

在轨道保持（station-keeping）任务中，并非随时施加脉冲，而是在固定时间间隔上进行的。

**脉冲间隔**（impulse interval）是两次轨道维持脉冲之间的时间间隔，是保持策略的核心设计参数（Zhang et al. 2022）：

- 间隔越长，年化燃耗通常越低，但位置偏差越大。

- 对于稳定或弱不稳定轨道（如 DRO、NRHO），可允许 1--7 天甚至更长的脉冲间隔。

- 对于不稳定轨道（如 Halo），过长的间隔导致轨道指数级发散，需要较短的脉冲间隔（若干小时至半天）。

脉冲施加法则给出了脉冲方向和位置的最优选择，脉冲间隔则将其嵌入时间调度框架，二者共同定义了完整的脉冲式轨道保持策略。

## 与连续推力控制的对比

| 属性 | 脉冲机动 | 连续推力 |
|------|---------|---------|
| 推力模型 | $F \to \infty$, $\Delta t \to 0$ | $F$ 有限、持续开启 |
| 推进系统 | 化学火箭 | 电推进 |
| $I_{sp}$ | 100--400 s | 2000--10000 s |
| 轨道求解 | Lambert 问题 / 线性代数 | 最优控制 / 两点边值问题 |
| 燃耗 | 高（推进剂多） | 低（推进剂少） |
| 转移时间 | 短（数天） | 长（数周至数月） |
| 推力弧 | 仅出发/到达瞬间 | 推力弧贯穿全程或按 Bang-bang 切换 |

参见 [电推进（EP）](/glossary/fundamentals/ep/) 和 [Bang-bang 控制](/glossary/dynamics/bang-bang-control/) 词条。

## 相关概念

- [电推进（EP）](/glossary/fundamentals/ep/)：连续推力系统的物理基础，脉冲模型的互补推力类型

- [Bang-bang 控制与 Lawden 弧定律](/glossary/dynamics/bang-bang-control/)：连续推力燃耗最优的脉冲式开关逻辑，双脉冲解是其延拓初值

- [推力方向与控制（Tangential Thrust Control）](/glossary/dynamics/tangential-thrust-control/)：连续推力下的推力方向策略

- [CR3BP（圆形限制性三体问题）](/glossary/dynamics/cr3bp/)：平动点脉冲转移的动力框架

- [零速度面](/glossary/dynamics/zero-velocity-surface/)：雅可比常数决定的可达区域边界，脉冲施加法则的几何背景

- [平动点（Libration Point）](/glossary/fundamentals/libration-point/)：平动点轨道脉冲转移的基准目标

- [Halo 轨道](/glossary/orbits/halo-orbit/)：双脉冲与多脉冲转移的典型目标轨道族

## 参考文献

- Vallado, 2022, Fundamentals of Astrodynamics and Applications. 脉冲机动的二体问题经典处理与 Lambert 问题。

- Lawden, D. F., 1963, Optimal Trajectories for Space Navigation. Butterworths. Ch. 4: 先驱向量对脉冲机动最优性条件的系统推导。

- Prussing, J. E., 2010, Primer Vector Theory and Applications. 先驱向量在冲量机动中的评估与优化。

- Shen and Tsiotras, 2003, Optimal Two-Impulse Rendezvous Using Multiple-Revolution Lambert Solutions. JGCD. 多圈 Lambert 解在双脉冲交会中的应用。

- 潘迅等, 2017, 平动点双脉冲转移轨道的快速计算方法. 双脉冲流形拼接的地月转移策略。

- Li et al., 2026, NRHO Two-Impulse Phasing, Chinese Journal of Space Science, 46(1): 175-188. NRHO 两脉冲调相的相位-燃耗分析。

- Fossa et al., 2022, Two and Three Impulses Phasing Strategy with a Spacecraft Orbiting on an Earth-Moon NRHO. NRHO 交会调相的综合分析。

- Cuevas del Valle et al., 2022, Relative Dynamics and Modern Control Strategies for Rendezvous in Libration Point Orbits. STM 方法在平动点轨道交会中的应用。

- 魏赞等, 2026, 三脉冲转移与入轨, 北航学报. DRO 入轨的标准三脉冲构型。

- 乔琛远, 杨乐平, 2024, 地月 L1 点低能转移轨道设计与优化. 脉冲施加法则的详细推导。

- Zhang et al., 2022, 脉冲间隔与轨道保持的工程设计分析。

- Kluever and Pierson, 1995, TCT 序列的原始概念与动力学分析。
