---
title: 低能转移（Low-Energy Transfer）
description: 相对 Hohmann 转移省能、耗时更长的地月转移轨道统称；省能机理有三条技术路线：不变流形、弱稳定边界与弹道捕获，文献中的低能判据有总 ΔV、瞬时偏心率、到达端二体能量三种。
keywords: 低能转移, Low-Energy Transfer, 不变流形, 弱稳定边界, 弹道捕获, 地月转移
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-07
wechatShare:
  title: 低能转移（Low-Energy Transfer）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 低能转移详解 | 术语定义
  description: 相对 Hohmann 转移省能、耗时更长的地月转移轨道统称；省能机理有三条技术路线：不变流形、弱稳定边界与弹道捕获，文献中的低能判据有总 ΔV、瞬时偏心率、到达端二体能量三种。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 低能转移详解 | 术语定义
  description: 相对 Hohmann 转移省能、耗时更长的地月转移轨道统称；省能机理有三条技术路线：不变流形、弱稳定边界与弹道捕获，文献中的低能判据有总 ΔV、瞬时偏心率、到达端二体能量三种。
  image: /logo.png
permalink: /glossary/orbits/low-energy-transfer/
---

# 低能转移（Low-Energy Transfer）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义与判据

低能转移是与 Hohmann 转移相比能量消耗较低、转移时间更长的地月转移轨道统称（徐明 2010、郑越 2023）。文献中并存三种低能判据，引用时应指明：

- **代价判据**：总 ΔV 低于同端点 Hohmann 转移。量级依端点而定：WSB 转移比 Hohmann 省约 18%（Belbruno & Miller 1993），典型省 80~270 m/s（徐明 2010 转引算例约 150 m/s；Sousa-Silva 2018 约 80 m/s）。参照下限：Sweetser 估计 CR3BP 中 167 km 地球圆轨道→100 km 月球圆轨道的全局最小 ΔV 约 3.72 km/s；计入太阳摄动的低能转移可以低于这个 CR3BP 理论下限（Anderson & Parker 2012）。
- **几何判据**：转移全程瞬时偏心率小于 1，即相对地球/月球始终保持二体束缚（椭圆）状态；Hohmann 转移到达月球附近时为双曲线速度，绝不可能被弹道捕获（徐明 2010、Xu 2013）。
- **到达端能量判据**：接近月球时相对月球的二体（开普勒）能量由正转负（Topputo 2013、Parker & Anderson 2014），见[弹道捕获](/glossary/orbits/ballistic-capture/)。

时间上，低能转移典型为 2.5~5 个月（Belbruno & Miller 1993、Parker & Anderson 2014），对比 Hohmann 的约 3 天。

## 三条技术路线

低能转移不是单一技术，而是三条相互咬合的路线：

1. **不变流形路线（地月系内）**：Conley 1968 建立平动点颈部区域的轨道分类（穿越/非穿越/渐近/周期轨道，流形是分界线）；Koon 等把日地、地月两个 CR3BP 的流形管在庞加莱截面内拼接，位置与速度均连续的轨迹即低能转移（徐明 2010 称其解决了困扰天体力学界十余年的理论问题）。纯地月系内的内部转移不需要太阳摄动，可在地月三体模型内定义（Topputo 2013）。
2. **WSB/外部路线**：借月球借力飞出到地球弱稳定边界（约 4 倍地月距离），利用该区域的动力学敏感性以近零机动衔接月球 WSB 上的弹道捕获轨道（Belbruno & Miller 1993）。见[弱稳定边界转移轨道](/glossary/orbits/weak-stability-boundary-transfer-trajectory/)。
3. **弹道捕获是到达端机制而非独立路线**：WSB 转移与流形路线都以弹道捕获收尾：瞄准地月 L2 Lyapunov 轨道稳定流形管内部的区域，即构造被月球弹道捕获的轨道（Ross 2022）。

三条路线由 Belbruno 2010 统一：一定能量范围内，次主天体 WSB 中的点就是 L1/L2 Lyapunov 轨道稳定流形上径向速度为零、相对次主天体开普勒能量为负的点。

## 分类

- **按轨迹几何**（Topputo 2013）：外部（exterior）转移远地点约 4 倍地月距离，且远地点须位于地心系第二或第四象限（x 轴取反日方向）；内部（interior）转移大部分在月球轨道以内，可借共振缩短时间。
- **按所用平动点**（郑越 2023）：L1 点流形为内俘获型（始终在地月系内、时间较短）；L2 点流形为外俘获型（=WSB 路线、需太阳引力辅助、时间长）。
- **按穿越对象**（徐明 2010）：LL1 穿越（最小能量转移）、LL1-Halo 穿越、LL2 穿越（内侧/外侧，外侧即 WSB）、LL2-Halo 穿越。
- **按任务剖面**（Parker & Anderson 2014）：直接（3~6 天）、直接-staging（2~10 周）、直到地月 L1（1~5 周）、小推力（数月）、低能（2.5~4 个月）。

## 设计方法与数值

- 双脉冲全弹道解：全局最优 82.6 天、3769 m/s（Topputo 2013）；含一次月借力的外部转移 162 天、3775 m/s（Campana 2024）。
- 三/四脉冲方案（乔琛远 2024，EML1 Halo→GEO 方向）：三脉冲能量最优 1.55 km/s/40 天；四脉冲 1.47 km/s/48 天：在不稳定流形速度极小点调向、极大点减速，Lambert 弧起止各一次机动。
- 单条稳定流形直连近地与近月轨道：总 ΔV 约 3921 m/s、62 天（郑越 2023）。
- 异系统流形拼接双层优化：拼接点脉冲最小约 12.6 m/s（李宸硕 2024）。

## 任务应用

地月系：Hiten（1991，首个 WSB/弹道捕获转移）、GRAIL（2011，首个以低能转移为主任务段并直接实施月球轨道插入）、ARTEMIS（2010，低能转移到平动点轨道；所用为近弹道转移，含统计修正与小确定机动）。日地系参照：Genesis；SMART-1 为小推力+WSB 概念的组合。

## 术语变体对照

| 术语 | 含义 | 出处 |
|------|------|------|
| 低能转移轨道（LET） | 同低能转移；文献缩写 LET | Fantino 2010 |
| 低能月球转移 | 2.5~4 个月、利用太阳引力的地月转移 | Parker & Anderson 2014 |
| 外部转移（exterior） | 远地点约 4 倍地月距离的低能转移 | Topputo 2013 |
| 外俘获型 / 内俘获型 | 按所用平动点（L2/L1）划分 | 郑越 2023 |
| 三/四脉冲低能转移 | 流形速度极值点机动 + Lambert 弧拼接方案 | 乔琛远 2024 |
| 月球弹道转移轨道 | WSB 转移的别名（最小能量约 3787 m/s、约 100 天；载人登月因耗时长宜用 Hohmann） | 彭祺擘 2016 |

## 相关概念

- [弱稳定边界转移轨道（Weak Stability Boundary Transfer Trajectory）](/glossary/orbits/weak-stability-boundary-transfer-trajectory/)
- [弹道捕获（Ballistic Capture）](/glossary/orbits/ballistic-capture/)
- [Lyapunov 轨道（Lyapunov Orbit）](/glossary/orbits/lyapunov-orbit/)
- [流形连接（Manifold Connection）](/glossary/orbits/manifold-connection/)

## 参考文献

- Conley, 1968, Low energy transit orbits in the restricted three-body problem
- Belbruno & Miller, 1993, Sun-perturbed Earth-to-Moon transfers with ballistic capture
- Belbruno, Gidea & Topputo, 2010, Weak stability boundary and invariant manifolds
- Fantino et al., 2010, A note on libration point orbits, temporary capture and low-energy transfers
- 徐明, 2010, 地月低能转移的发生条件及轨迹构造
- Xu et al., 2013, On the construction of low-energy cislunar and trans-lunar transfers based on the libration points
- Topputo, 2013, On optimal two-impulse Earth–Moon transfers in a four-body model
- Anderson & Parker, 2012, Survey of ballistic transfers to the lunar surface
- Anderson & Parker, 2013, Comparison of low-energy lunar transfer trajectories to invariant manifolds
- Parker & Anderson, 2014, Low-Energy Lunar Trajectory Design
- Sousa-Silva et al., 2018, Fast Earth–Moon transfers with ballistic capture
- Ross et al., 2022, Dynamical Systems, the Three-Body Problem, and Space Mission Design
- 郑越、赵敏, 2023, 基于大幅值 Lyapunov 轨道稳定流形的地月转移方法
- 李宸硕 等, 2024, 基于弱稳定边界理论的低能地月转移轨道设计
- 乔琛远、杨乐平, 2024, 地月 L1 点低能转移轨道设计与优化
- Campana et al., 2024, Low-energy Earth–Moon transfers via theory of functional connections and homotopy
- Grossi et al., 2024, 高效外部低能转移相关研究
