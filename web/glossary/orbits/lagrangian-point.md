---
title: 平动点（Libration Point / Lagrangian Point）
description: 圆型限制性三体问题中的五个平衡点：共线三点 L1/L2/L3（Euler 解，不稳定）与三角两点 L4/L5（Lagrange 解，质量比小于 Routh 临界值时线性稳定，地月系满足）；雅可比常数界定的希尔区域与颈部通道决定了低能转移的几何。
keywords: 平动点, 拉格朗日点, Libration Point, Lagrangian Point, L1, L2, L4, L5, 希尔区域, 零速度面
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-07
wechatShare:
  title: 平动点（Libration Point / Lagrangian Point）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 平动点详解 | 术语定义
  description: 圆型限制性三体问题中的五个平衡点：共线三点 L1/L2/L3（Euler 解，不稳定）与三角两点 L4/L5（Lagrange 解，质量比小于 Routh 临界值时线性稳定，地月系满足）；雅可比常数界定的希尔区域与颈部通道决定了低能转移的几何。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 平动点详解 | 术语定义
  description: 圆型限制性三体问题中的五个平衡点：共线三点 L1/L2/L3（Euler 解，不稳定）与三角两点 L4/L5（Lagrange 解，质量比小于 Routh 临界值时线性稳定，地月系满足）；雅可比常数界定的希尔区域与颈部通道决定了低能转移的几何。
  image: /logo.png
permalink: /glossary/orbits/lagrangian-point/
---

# 平动点（Libration Point / Lagrangian Point）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

限制性三体问题中有五个平衡点：第三体（质量可忽略）在其上与两天体保持相对固定位置。三个**共线平动点** L1、L2、L3 位于两天体连线上，归于 Euler；两个**三角平动点** L4、L5 位于以两天体连线为底边的等边三角形顶点，归于 Lagrange（Meyer & Offin 2017、Murray & Dermott 1999）。「libration point」是力学界称谓，工程文献常称「Lagrangian point」。

地月系中的位置（按 Qiao 2025 的归一化距离以地月距 384,400 km 换算）：L1 距月约 5.8 万 km、距地约 32.6 万 km；L2 距月约 6.45 万 km、距地约 44.9 万 km；L3 位于地球背月一侧，距地约 38.2 万 km。

## 稳定性

- **共线点不稳定**：线性化特征值含一对实特征值，运动模式为「鞍 × 中心 × 中心」（Qiao 2025；Meyer & Offin 2017 证明共线点是平面上的鞍点）。正因如此，其附近轨道带有双曲不变流形，既是工程价值所在（低能转移通道），也给目标编目带来挑战。
- **三角点条件稳定**：质量比 μ 小于 Routh 临界值 μ₁≈0.0385 时线性稳定；地月系 μ≈0.0122 满足（Murray & Dermott 1999、Meyer & Offin 2017）。严格说，平面情形下个别共振质量比存在例外，但地月 μ 不落在任何例外值上。

## 零速度面、希尔区域与颈部通道

雅可比积分 C 约束运动可达的位置集合 ℌ(C)={x : W(x)≥C}，称**希尔区域**（Hill's region），其边界为零速度曲线（Meyer & Offin 2017）。临界雅可比值排序 C_L1 > C_L2 > C_L3 > C_L4,5（Murray & Dermott 1999）：C 从高位下降时，包围地球与月球的两个零速度面先在 L1 处相接（C=C₁），C 稍低于 C₁ 时在 L1 处稍稍打开一条狭窄走廊，这是飞行器可经 L1 走廊奔月的**必要条件而非充分条件**，能否成行还看转移轨道的起始状态（彭祺擘、张海联 2016）。

**L1/L2 gateway（门廊）**：轨迹由月球附近通往外部区域（或反向）所经的 L1/L2 附近通道区域的描述性用语；在自然轨迹聚类研究中用作行程标签（撞月 / 经 L1 或 L2 离开 / 停留月球附近）（Bosanac 2026）。

## L1 转移走廊

经 L1 走廊的转移（彭祺擘、张海联 2016）：L1 稳定流形在 C≈C₁ 时距地球最近约 0.1 倍地月距离，到不了低高度停泊轨道，故需连接弧段：近地停泊轨道上施加第一次脉冲、进入 L1 稳定流形时第二次，无预定环月轨道时飞行器进入月球引力范围后往往自动被月球俘获（此时比 Hohmann 省能）；有预定环月轨道时一般在近月点附近施加第三次脉冲。算例从 L1 稳定流形到经 L1 点耗时约 363 天；综述表格给出该类转移 >4100 m/s、几十到几百天。对载人登月，原文评价是「能量往往并不节省」「既耗时间又耗能量，并不可取」。

## 应用

共线点虽不稳定，其附近的晕轨道、准晕轨道与李萨如轨道可以低代价维持，且不变流形可用于低能转移（Vellutini & Avanzini 2014）。任务实例：鹊桥中继星在地月 L2 晕轨道支持月球背面通信；ARTEMIS 进入 L1/L2 李萨如轨道；CAPSTONE 验证 L2 南族 NRHO（Qiao 2025 引言列举）。三角点方向见[蝌蚪轨道](/glossary/orbits/tadpole-orbit/)与[马蹄轨道](/glossary/orbits/horseshoe-orbit/)。

## 术语变体对照

| 术语 | 含义 | 出处 |
|------|------|------|
| 共线平动点 | L1/L2/L3，Euler 解 | Meyer & Offin 2017 |
| 三角平动点 | L4/L5，Lagrange 解，等边三角形顶点 | Murray & Dermott 1999 |
| 希尔区域 | 雅可比常数界定的可达区域 {W(x)≥C} | Meyer & Offin 2017 |
| L1（转移）走廊 | C 稍低于 C₁ 时在 L1 处打开的通道 | 彭祺擘、张海联 2016 |
| L1/L2 gateway | L1/L2 附近连接月球附近与外部区域的通道 | Bosanac 2026 |

## 相关概念

- [平动点周期轨道（Libration Point Orbit, LPO）](/glossary/orbits/libration-point-periodic-orbit/)
- [晕轨道（Halo Orbit）](/glossary/orbits/halo-orbit/)
- [蝌蚪轨道（Tadpole Orbit）](/glossary/orbits/tadpole-orbit/)
- [马蹄轨道（Horseshoe Orbit）](/glossary/orbits/horseshoe-orbit/)
- [弱稳定边界转移轨道（Weak Stability Boundary Transfer Trajectory）](/glossary/orbits/weak-stability-boundary-transfer-trajectory/)

## 参考文献

- Murray & Dermott, 1999, Solar System Dynamics
- Vellutini & Avanzini, 2014, Shape-based design of low-thrust trajectories to cislunar Lagrangian points
- 彭祺擘、张海联, 2016, 载人登月地月转移轨道方案综述
- Meyer & Offin, 2017, Introduction to Hamiltonian Dynamical Systems and the N-Body Problem
- Qiao et al., 2025, Orbital parameter characterization and objects cataloging for Earth-Moon collinear libration points
- Bosanac, 2026, Clustering natural trajectories in the Earth-Moon circular restricted three-body problem
