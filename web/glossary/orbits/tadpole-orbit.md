---
title: 蝌蚪轨道（Tadpole Orbit）
description: 在三角平动点 L4 或 L5 附近作小幅共轨天平动的轨道，因零速度曲线的拉长形状得名，角范围止于 L3 方位；L4/L5 附近的周期轨道族还包括短周期族（约 28 天）、长周期族（约 92 天）与垂直族。
keywords: 蝌蚪轨道, Tadpole Orbit, L4, L5, 三角平动点, 短周期轨道, 马蹄轨道
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-07
wechatShare:
  title: 蝌蚪轨道（Tadpole Orbit）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 蝌蚪轨道详解 | 术语定义
  description: 在三角平动点 L4 或 L5 附近作小幅共轨天平动的轨道，因零速度曲线的拉长形状得名，角范围止于 L3 方位；L4/L5 附近的周期轨道族还包括短周期族（约 28 天）、长周期族（约 92 天）与垂直族。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 蝌蚪轨道详解 | 术语定义
  description: 在三角平动点 L4 或 L5 附近作小幅共轨天平动的轨道，因零速度曲线的拉长形状得名，角范围止于 L3 方位；L4/L5 附近的周期轨道族还包括短周期族（约 28 天）、长周期族（约 92 天）与垂直族。
  image: /logo.png
permalink: /glossary/orbits/tadpole-orbit/
---

# 蝌蚪轨道（Tadpole Orbit）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

限制性三体问题中，从 L4 或 L5 附近出发的粒子绕平衡点作小幅天平动；增大初始分离后，轨道向 L3 点方向拉长，因其零速度曲线的形状得名蝌蚪轨道（Murray & Dermott 1999，§3.9）。幅角范围有限：临界蝌蚪轨道恰好到达 L3 方位（最近角距 23.5°，即最大角范围约 156.5°，止于 L3 而不包围它）；振幅再大即过渡为绕 L3、L4、L5 的[马蹄轨道](/glossary/orbits/horseshoe-orbit/)。三角点线性稳定（质量比条件见[平动点](/glossary/orbits/lagrangian-point/)），但具体轨道成员的稳定性各异。

## L4/L5 周期轨道族

三角点附近平面运动有两个模态频率：短周期模态 ω₁≈0.9546、长周期模态 ω₂≈0.2979（以月球平运动为单位），近 3:1 共振（Gómez 2001 第二卷转述 Breakwell–Pringle）：

- **短周期族**：从 L4/L5 发出，极限（线性）周期约 28.6 天，随振幅增大单调减小；延续至分岔轨道 B₄₅ 处与 L3 发出的 Lyapunov 族相连。
- **长周期族**：极限周期约 91.6 天。
- **垂直族（L4V/L5V）**：主要沿垂直于地月轨道面（旋转系 z 方向）延伸的非平面周期轨道，XZ 面对称；与 L2 南北族 NRHO 组合的共振导航星座性能最优（He 2025）。

**SPO（短周期轨道）**：文献选作转移网络节点的 L4/L5 短周期轨道代表成员周期 28.3488 天、雅可比常数 2.9132，L4 与 L5 互为镜像（关于旋转系 x 轴）；它们近似稳定、没有可用作转移初值的流形（Capdevila & Howell 2018）。He 2025 的 L4P/L5P 族（周期约 27.3 天）与 Xu 2026 导航研究中的L4 planar short-period orbit是同一族成员的不同称呼。

**平面轨道（SDA 语境）**：地月空间态势感知的观测者候选目录含 L4/L5 平面（planar）轨道；但 Pareto 前沿中几乎没有平面观测者：平面观测者观测平面转移轨迹时受太阳指向约束存在空窗，非平面观测者（如 L4/L5 轴向轨道）的 z 向运动可补窗（Klonowski 2024）。

## 应用

L4/L5 区域的轨道提供对地月的双覆盖与不间断通信；DRO↔L4/L5 短周期轨道的双脉冲转移构成以月球为中枢的转移网络的一支（Capdevila & Howell 2018）；L4 平面短周期轨道与 DRO 的近共面双星构型用于星间链路自主定轨研究（Xu 2026）。

## 术语变体对照

| 术语 | 含义 | 出处 |
|------|------|------|
| 短周期轨道（SPO） | 三角点短周期族轨道（约 27.3~28.6 天，随振幅而变） | Capdevila & Howell 2018 |
| 长周期轨道 | 三角点长周期族轨道（约 91.6 天） | Gómez 2001 第二卷 |
| L4P/L5P、L4 平面短周期轨道 | 短周期族成员的不同称呼 | He 2025、Xu 2026 |
| L4V/L5V | 三角点垂直族轨道 | He 2025 |
| 平面轨道（planar orbit） | L4/L5 平面族（SDA 观测者目录语境） | Klonowski 2024 |

## 相关概念

- [平动点（Libration Point）](/glossary/orbits/lagrangian-point/)
- [马蹄轨道（Horseshoe Orbit）](/glossary/orbits/horseshoe-orbit/)
- [平动点周期轨道（Libration Point Orbit, LPO）](/glossary/orbits/libration-point-periodic-orbit/)
- [共振轨道族（Resonant Orbit Family）](/glossary/orbits/resonant-orbit-family/)

## 参考文献

- Murray & Dermott, 1999, Solar System Dynamics（§3.9）
- Gómez et al., 2001, Dynamics and Mission Design Near Libration Points, Vol. II
- Capdevila & Howell, 2018, A transfer network linking Earth, Moon, and the triangular libration point regions
- Klonowski et al., 2024, Cislunar space domain awareness architecture design and analysis for cooperative agents
- He et al., 2025, Design of cislunar navigation constellation via orbits with a resonant period
- Xu et al., 2026, Adaptive robust cubature filtering-based autonomous navigation study
