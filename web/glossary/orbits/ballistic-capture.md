---
title: 弹道捕获（Ballistic Capture）
description: 航天器相对次主天体的二体（开普勒）能量由正转负、无需推进即被其引力束缚的捕获方式；地月转移中只能发生暂时捕获，永久捕获需耗散力；是低能转移的到达端机制，1991 年 Hiten 任务首次应用。
keywords: 弹道捕获, Ballistic Capture, 暂时捕获, 永久捕获, 低能转移, 弱稳定边界
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-07
wechatShare:
  title: 弹道捕获（Ballistic Capture）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 弹道捕获详解 | 术语定义
  description: 航天器相对次主天体的二体（开普勒）能量由正转负、无需推进即被其引力束缚的捕获方式；地月转移中只能发生暂时捕获，永久捕获需耗散力；是低能转移的到达端机制，1991 年 Hiten 任务首次应用。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 弹道捕获详解 | 术语定义
  description: 航天器相对次主天体的二体（开普勒）能量由正转负、无需推进即被其引力束缚的捕获方式；地月转移中只能发生暂时捕获，永久捕获需耗散力；是低能转移的到达端机制，1991 年 Hiten 任务首次应用。
  image: /logo.png
permalink: /glossary/orbits/ballistic-capture/
---

# 弹道捕获（Ballistic Capture）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义与能量判据

弹道捕获指航天器相对某天体的开普勒能量 H_k 由零（或正）转负、无需推进即被其引力束缚的过程（Belbruno & Miller 1993；Topputo 2013 定义：相对次主天体的二体能量 H₂≤0）。捕获轨道在近月点无双曲超速 V_∞，故随后稳定化捕获所需的能量大幅下降。操作定义：自然动力学下进入月球 Hill 半径（约 60,000 km）以内并绕月至少一圈，即称被月球弹道捕获，此时一个小 ΔV 即可实现稳定捕获（Ross 2022）。注意捕获对象是**次主天体**（地月系中为月球）。

## 暂时与永久捕获

- **暂时弹道捕获**：某时间区间内 H₂≤0、之外为正（Topputo 2013）。平动点轨道的不稳定流形支配暂时捕获，母轨道越小（雅可比值越大），捕获圈数越多（Fantino 2010）。
- **永久捕获**：某有限时刻之后一直 H₂≤0（Topputo 2013）。**地月转移框架下只能发生暂时弹道捕获；永久捕获必须有耗散力作用**（如大气制动或推进）。
- 把弹道捕获稳定为永久捕获的代价明显小于 Hohmann 变轨（徐明 2010）。

## 动力学机理

- **Conley 分类（Conley 1968）**：相对平动点颈部区域的长期行为，轨道分为振荡（无穷多次穿越）、渐近（趋向不稳定周期轨道）、捕获（有时穿越、但某有限时刻后不再穿越；对位于两天体间的平动点，即最终被其一天体俘获的轨道）等类；定理：任何穿越颈部的渐近轨道附近存在捕获轨道（Conley 自注：此类渐近轨道当时尚未被证实存在）。
- **捕获弧与逃逸弧（Pergola 2010）**：天王星卫星巡游语境：捕获弧用卫星 L2 点稳定流形构造，把航天器从外侧区域引向卫星并绕其做多圈闭合轨道；随后经 L2 稳定流形与 L1 不稳定流形的异宿连接自然离开，前往下一卫星。停留数天到近一个月，圈数与时长依赖流形计算的扰动参数。

## 捕获窗口与月面捕获

经 LL2-Halo 穿越的 WSB 转移，其捕获/逃逸窗口由太阳相位角 β 与 Halo 轨道相位 τ 共同决定，且可用集合很小（徐明 2010）。月面捕获能量（永久捕获到近月距 r_p=1738 km 的擦月面环月轨道所需 ΔV）：二体模型 695.7 m/s、Hill 模型 656.8 m/s、CR3BP 649.2 m/s、双圆四体模型最低 642.9 m/s，太阳摄动使捕获能量低于三体模型值（徐明 2010）。

## 谱系与任务

- **月面弹道谱系（Anderson & Parker 2012）**：地到月面的弹道轨迹构成连续谱：飞行时间从 Apollo 式直接转移的 3.4 天到低能转移的 101 天；太阳摄动使直到雅可比常数 C≈3.16 仍存在源自地球的轨迹（无太阳时 C=2.8 以上即无）；月面大部分区域物理可达。
- **任务**：Hiten（1991，首个弹道捕获转移）；GRAIL（2011，双星先后从低能转移直接插入月球轨道）；ARTEMIS（2010，「近弹道」转移，含一系列升轨机动、月球借力与修正机动，非严格无推力；Folta 2012）。

## 非弹道对照

- **小推力螺旋捕获（Kluever 1995）**：LEO→LLO 最优低推力转移的末段：连续小推力制动、沿逐渐缩小的螺旋进入目标近月轨道（三段式「地球逃逸螺旋→跨月滑行→月捕获螺旋」）。它是小推力捕获，不是弹道捕获。
- **非弹道捕获（Wang 2025，WSB 篇）**：DRO 捕获轨迹中二体能量大于零的捕获方式：雅可比能量较低时，轨迹在最终捕获前于 DRO 外停留一段时间，以非弹道方式进入。

## 术语变体对照

| 术语 | 含义 | 出处 |
|------|------|------|
| 弹道捕获转移 | 以弹道捕获收尾的地月转移 | Belbruno & Miller 1993 |
| 捕获轨道（capture orbit） | Conley 长期行为分类中的一类 | Conley 1968 |
| 暂时 / 永久弹道捕获 | H₂≤0 的时间区间有限 / 无限 | Topputo 2013 |
| 捕获弧 / 逃逸弧 | 沿 L2 稳定流形进入 / 沿 L1 不稳定流形离开的弧段 | Pergola 2010 |
| 月面弹道轨迹 | 地到月面的弹道轨迹谱系（3.4~101 天） | Anderson & Parker 2012 |
| 月球捕获窗口 | 由太阳相位与 Halo 相位决定的捕获时机集合 | 徐明 2010 |
| 非弹道捕获 | 二体能量大于零的 DRO 捕获方式 | Wang 2025 |

## 相关概念

- [低能转移（Low-Energy Transfer）](/glossary/orbits/low-energy-transfer/)
- [弱稳定边界转移轨道（Weak Stability Boundary Transfer Trajectory）](/glossary/orbits/weak-stability-boundary-transfer-trajectory/)
- [Lyapunov 轨道（Lyapunov Orbit）](/glossary/orbits/lyapunov-orbit/)
- [远距离逆行轨道（Distant Retrograde Orbit, DRO）](/glossary/orbits/distant-retrograde-orbit-dro/)

## 参考文献

- Conley, 1968, Low energy transit orbits in the restricted three-body problem
- Belbruno & Miller, 1993, Sun-perturbed Earth-to-Moon transfers with ballistic capture
- Kluever & Pierson, 1995, Optimal low-thrust three-dimensional Earth–Moon trajectories
- Fantino et al., 2010, A note on libration point orbits, temporary capture and low-energy transfers
- Pergola et al., 2010, Three-body invariant manifold transition with electric propulsion
- Belbruno, Gidea & Topputo, 2010, Weak stability boundary and invariant manifolds
- 徐明, 2010, 地月低能转移的发生条件及轨迹构造
- Anderson & Parker, 2012, Survey of ballistic transfers to the lunar surface
- Folta et al., 2012, ARTEMIS 转移设计相关研究
- Topputo, 2013, On optimal two-impulse Earth–Moon transfers in a four-body model
- Ross et al., 2022, Dynamical Systems, the Three-Body Problem, and Space Mission Design
- Wang et al., 2025, Mechanism and characteristics analysis of weak stability boundary transfers to the 2:1 DRO
