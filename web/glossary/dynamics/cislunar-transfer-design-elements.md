---
title: 地月转移轨道设计要素（Cislunar Transfer Design Elements）
description: 地月转移轨道的分类体系、转移代价、脉冲转移方式、飞越借力机制、调相方法以及轨道数据库。覆盖雅可比能量分类（直接/低能转移）、双/多脉冲转移、霍曼型转移、直接飞越转移、拱线变轨、前向后向调相等核心设计概念。
keywords: 地月转移, 转移轨道分类, 转移代价, 双脉冲转移, 多脉冲转移, 霍曼型转移, 直接飞越转移, DFBT, 拱线变轨, 调相, 转移段, Cislunar Transfer, Transfer Classification, Phasing, Transfer Cost, Trajectory Database, Earth-Moon Transfer Design
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 地月转移轨道设计要素（Cislunar Transfer Design Elements）
  desc: 地月转移分类、代价、脉冲方式与调相方法
  image: /logo.png
og:
  title: 地月转移轨道设计要素详解 | 术语定义
  description: 地月转移轨道的分类体系、转移代价、脉冲转移方式、飞越借力机制、调相方法以及轨道数据库。覆盖雅可比能量分类（直接/低能转移）、双/多脉冲转移、霍曼型转移。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 地月转移轨道设计要素详解 | 术语定义
  description: 地月转移轨道的分类体系、转移代价、脉冲转移方式与调相方法。
  image: /logo.png
permalink: /glossary/dynamics/cislunar-transfer-design-elements/
---

# 地月转移轨道设计要素（Cislunar Transfer Design Elements）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

地月转移轨道设计要素是指在地月空间中规划航天器从一个轨道转移到另一个轨道时，需要考虑的分类体系、代价度量、机动方式、辅助借力策略及相位调整方法等工程概念的总和。这些要素构成了地月转移任务设计的"工具箱"。与专注于不变流形自然动力学的[低能转移](/glossary/dynamics/low-energy-transfer/)不同，设计要素涵盖从脉冲化学推进到飞越借力等多种转移模式的工程实现。

## 地月转移的分类体系

地月转移轨道可按雅可比能量与飞行时间分为两大类（Liang et al. 2016）：

- **直接转移（direct transfer）**：航天器的雅可比能量远低于 $C_1$（即 $C \ll C_1$），飞行 2--6 天。由于能量充足，零速度曲面完全打开，航天器可按近似二体轨道完成地月转移，需在到达端施加制动脉冲（约 0.6--0.8 km/s）。

- **低能量转移（low-energy transfer）**：$C$ 略低于 $C_1$ 但高于 $C_2$，即 $C_2 < C < C_1$，$L_1$ 处的颈部恰好开启。飞行时间长达数十至百余天，但到达端所需捕获脉冲大大减小乃至为零。

在庞加莱截面网格扫描中，可按航天器在月球区域的最终行为将初始条件分为五类（Sousa-Silva et al. 2018）：良好捕获（G）、低轨捕获（L）、高轨捕获（H）、撞月（C）、逃逸（O）。该分类为低能转移的候选解筛选提供了定量框架。

### 转移轨道族（Transfer Orbit Family）

在限制性三体或四体模型中，具有相同动力学对称性和拓扑结构的一组转移轨道构成一个"转移轨道族"。这些轨道以连续参数（如 Poincaré 截面处的速度分量）为索引。韦炳威和李银山（2017）发现，经过月球旁近的低能地月转移轨道至少存在 16 族，各族在出发时刻、飞行时间、$\Delta v$ 代价和近月点高度分布上差异显著。轨道族的概念使得全局搜索不再需要在连续参数空间中盲目采样，而可以按族搜索，大幅提高效率。

## 转移代价（Transfer Cost）

转移代价是指完成轨道转移所需的总速度增量 $\Delta v_{\text{total}}$，等于出发脉冲 $\Delta v_{\text{dep}}$ 与入轨脉冲 $\Delta v_{\text{ins}}$ 之和：

$$
\Delta v_{\text{total}} = \Delta v_{\text{dep}} + \Delta v_{\text{ins}}
$$

转移代价是选择地月空间停泊轨道（如 DRO、NRHO、Halo 轨道）的核心指标，直接决定推进剂需求。Zhang 等（2021）指出，同一起点 DRO 的直接转移与低能转移，代价可相差 400 m/s 以上。转移代价通常以帕累托前沿（$\Delta v$--TOF Pareto front）的形式与飞行时间共同呈现，帮助任务设计者在时效与燃料之间做取舍。

### 转移轨道数据库

对于由蒙特卡洛轨迹打靶法或网格搜索生成的转移轨迹集合，可以通过建立**转移轨道数据库（trajectory database）**来存储关键状态和参数，以实现快速查询与机动规划（Chao et al. 2022）。数据库方法特别适用于任务需要实时或近实时机动决策的场景（如态势感知、交会规划、碎片规避）。

## 脉冲转移方式

### 双脉冲转移（Two-Impulse / Double-Pulse Transfer）

双脉冲转移是 Lambert 问题的经典应用：在初始轨道和终止轨道各施加一次速度脉冲（赵弘骞等 2021）。第一次脉冲使航天器离开初始轨道进入转移轨道，第二次脉冲使航天器匹配目标轨道速度。双脉冲方法结构简单、物理直观，但对单次推力大小要求较高——目标轨道越远或飞行时间越短，脉冲幅值越大——因此适合化学推进任务。

### 多脉冲转移（Multi-Pulse Transfer）

将全程划分多个变轨点，在每个变轨点施加速度脉冲，使航天器沿参考轨迹分段转移，即多脉冲转移（航空学报 2023）。与双脉冲相比，多脉冲方案更接近工程常用的化学推进模式——通过增加变轨次数降低每次脉冲的幅值，可在燃耗与转移时间之间权衡。

### 霍曼型转移（Hohmann-like Transfer）

霍曼型转移是经典 Hohmann 转移的地月类比方案：在近地轨道将转移轨道远地点提升至平动点轨道高度，到达远地点后施加第二次机动完成入轨（Renk et al. 2010）。这种方法简单直观，但对 EML2 转移尤其昂贵：航天器在远地点速度较慢，而 EML2 在惯性系中运动较快，速度失配严重。因此霍曼型方法通常不作为地月低能转移的首选，但其简单性使其成为教学和初步估算的基础方案。

### 拱线变轨（Apsidal Transfer）

通过转动椭圆轨道的拱线来实现共面椭圆轨道之间的转移（章仁为 1998）。在二体力学中，拱线变轨是改变近地点/远地点位置但保持轨道形状的最优双脉冲方案，在经典卫星轨道保持中有广泛应用，但在三体环境下的适用性有限。

### 准圆转移（Quasi-Circular Transfer）

小推力飞行器在近圆轨道之间缓慢螺旋转移的过程。由于推力极低（电推进量级），轨道在转移全程中保持近似圆形。可用 Edelbaum 解析公式估算所需速度增量和转移时间，避免逐圈数值积分的计算开销（Kluever 1997）。

## 飞越借力转移

### 直接飞越转移（Direct Fly-By Transfer, DFBT）

借助月球引力辅助的转移方式：航天器经月球近月点后，沿较短路径直接飞向目标平动点轨道并执行入轨机动（Renk et al. 2010）。与间接飞越转移（先进入平动点区域、调整能量、再进入目标轨道）相比，DFBT 转移时间较短，但入轨速度增量可能更大——是"时间"与"燃料"的典型权衡。

### 近距月球飞越面外转移

利用近距月球飞越产生的面外速度分量，代替出发脉冲提供轨道面倾角变化的低能转移方法（Zhang et al. 2021）。在 DRO 到地球轨道的低能转移中，出发脉冲的面外分量可低至 5 m/s 以内，而近距飞越可提供超过 200 m/s 的 $z$ 方向速度变化。这使得低能转移代价几乎不随目标轨道倾角增加而上升——传统直接转移的代价则因面外脉冲随倾角大幅增加。

### 系统间转移（System-to-System Transfer）

在日-地-月四体问题中，将航天器从地月系统的平动点轨道转移到日地系统的平动点轨道（或反之）的技术（Howell & Kakoi 2006）。核心思路是将四体问题分解为两个重叠的三体问题，在 Poincaré 截面上寻找两个系统流形管的公共点，实现低成本乃至零燃料跨系统穿越。

## 调相（Phasing）

调相是使航天器在目标轨道上与目标航天器（或目标相位点）到达同一位置的轨道控制技术。对 DRO 类周期/拟周期轨道的调相而言：

- **前向调相（preceding phasing）**：调相轨道到达目标点的时间**早于**目标航天器——在 DRO 调相中，轨道路径位于 DRO 内侧。

- **后向调相（receding phasing）**：到达时间**晚于**目标航天器——轨道路径位于 DRO 外侧，可实现的调相范围通常大于前向调相（地月远距离逆行轨道脉冲调相方法）。

## 中间转移段（Transfer Leg）

将超长飞行时间的低推力转移拆分成多段后，相邻两个拼接点之间的那一段最优弧段称为一个**中间转移段**（Patrick et al. 2023）。每段独立求解两点边值问题，在拼接点处只保证状态连续、允许协态跳变（在滑行弧内）。分段策略将收敛性极差的超长问题分解为若干个可独求解的子问题，是极低推力加速度下转移优化的关键技术。

### 典型应用示例

**能量衰减型 L1 转移**：一种将 GEO 寿命末期卫星送往月球的策略——先用小推力送卫星进入低能地月转移，到达月球区域后小推力逐步降低航天器能量（增大 $C$），直至颈部关闭实现永久捕获（Liang et al. 2016）。**DRO 低能捕获**：利用弱稳定边界机制，借助太阳摄动和月球借力，以极小脉冲使航天器进入远距离逆行轨道（DRO）（Wang et al. 2025）。

## 相关概念

- [弹道捕获（Ballistic Capture）](/glossary/dynamics/ballistic-capture/)

- [低能转移（Low-Energy Transfer）](/glossary/dynamics/low-energy-transfer/)

- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)

- [不变流形（Invariant Manifold）](/glossary/dynamics/invariant-manifold/)

- [Lambert 问题（Lambert's Problem）](/glossary/fundamentals/lamberts-problem/)

- [两点边值问题（TPBVP）](/glossary/dynamics/tpbvp/)

- [庞加莱截面（Poincaré Section）](/glossary/dynamics/poincare-section/)

- [雅可比积分（Jacobi Integral）](/glossary/dynamics/jacobi-integral/)

- [弱稳定边界（WSB）](/glossary/dynamics/wsb/)

- [远距离逆行轨道（DRO）](/glossary/orbits/distant-retrograde-orbit-dro/)

- [Halo 轨道（Halo Orbit）](/glossary/orbits/halo-orbit/)

## 参考文献

- Liang et al., 2016, Low-energy lunar transfer and permanent capture for GEO disposal, *Acta Astronautica*

- Sousa-Silva et al., 2018, Fast earth–moon transfers with ballistic capture, *Celest. Mech. Dyn. Astron.*

- 韦炳威, 李银山, 2017, 地月低能转移轨道族特征分析

- Zhang et al., 2021, Low-energy transfers from DRO to Earth orbits, *Acta Astronautica*

- Chao et al., 2022, Trajectory database generation for cislunar space domain awareness

- 赵弘骞等, 2021, 基于动态规划的月面定点着陆快速制导方法

- 航空学报, 2023, 44(5): 326563

- Renk, Hechler, & Messerschmid, 2010, Exploration missions in the Sun-Earth-Moon system, *Acta Astronautica*

- 章仁为, 1998, *卫星轨道姿态动力学与控制*

- Kluever, 1997, Optimal Earth-Moon Trajectories Using Combined Chemical-Electric Propulsion, *J. Guidance, Control, and Dynamics*

- Howell & Kakoi, 2006, Transfers between the Earth–Moon and Sun–Earth systems using manifolds and transit orbits, *Acta Astronautica*

- Patrick et al., 2023, Hybrid optimization of high-fidelity low-thrust transfers to the lunar gateway

- Wang et al., 2025, Mechanism analysis of the DRO low-energy transfer problem: An energy perspective

- 地月远距离逆行轨道脉冲调相方法
