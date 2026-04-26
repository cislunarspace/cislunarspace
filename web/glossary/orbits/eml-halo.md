---
title: 地月L1/L2晕轨道(EML1/EML2 Halo Orbit)
description: 详细解析地月L1和L2点晕轨道的定义、动力学特性、稳定性分析及其在星伞任务和技术演示中的应用
keywords: 地月L1晕轨道, 地月L2晕轨道, EML1, EML2, Halo Orbit, 星伞任务, 地月空间轨道, 平动点轨道
author: 天疆说
date: 2026-04-23
lastUpdated: 2026-04-23
wechatShare:
  title: 地月L1/L2晕轨道
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 地月L1/L2晕轨道详解 | 平动点晕轨道在星伞任务中的应用
  description: 详细解析地月L1和L2点晕轨道的定义、动力学特性、稳定性分析及其在星伞任务和技术演示中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 地月L1/L2晕轨道详解 | 平动点晕轨道在星伞任务中的应用
  description: 详细解析地月L1和L2点晕轨道的定义、动力学特性、稳定性分析及其在星伞任务和技术演示中的应用
  image: /logo.png
permalink: /glossary/eml-halo/
---

# 地月 L1/L2 晕轨道

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文编辑来源：Genszler et al. (2026) "Surveying orbits in cislunar space for telescope-starshade observatories"
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

地月 L1/L2 晕轨道（Earth-Moon L1/L2 Halo Orbit，简称 EML1 Halo 和 EML2 Halo）是环绕地月系统第一、第二平动点（Lagrange 点）的周期轨道，属于 Halo 轨道族的一员。在圆形限制性三体问题（CR3BP）模型中，这些轨道是**稳定且周期的**；但在完整力模型（包含太阳摄动等）中仅需极少量轨道维持，是**准稳定的**。

晕轨道（Halo Orbit）由 Robert W. Farquhar 于 1968 年提出，其特点是轨道同时穿越 $x-y$ 平面和 $x-z$ 平面，呈现三维"腰果形"或"8 字形"构型。

## 几何特征

晕轨道的主要几何参数包括：

- **$A_z$ 振幅**：垂直于地月轨道平面的振幅，决定轨道的"高扁"程度
- **$A_y$ 振幅**：面内垂直于地月连线的振幅
- **周期**：取决于振幅组合，范围从约 7 天至 25 天不等

晕轨道分为**南族**（Southern）和**北族**（Northern）两个分支，对应 $z$ 方向的正负振幅。

## 动力学特性

### EML1 晕轨道

- **位置**：位于地月 $L_1$ 点附近，距地球约 326,000 km
- **可及性**：从地球转移时间较短，任务灵活度高
- **维持成本**：比 EML2 晕轨道更高的轨道维持费用

### EML2 晕轨道

- **位置**：位于地月 $L_2$ 点附近，月球背面方向
- **可及性**：从地球转移成本相对较低（与 SEL2 相比）
- **观测优势**：地球和月球位于望远镜同一侧，指向约束简单
- **维持成本**：约 5-10 m/s/年即可完成轨道维持

## 稳定性与轨道维持

在 CR3BP 模型中，晕轨道具有精确的周期性。然而在实际多体环境中，晕轨道的稳定性需要关注：

| 轨道类型 | 年维持 $\Delta v$ | 主要误差源 |
|:---|:---|:---|
| EML1 Halo | ~10 m/s/年 | 太阳辐射压、导航误差 |
| EML2 Halo | < 5 m/s/年 | 太阳辐射压、残留 $\Delta v$ |
| DRO | < 5 m/s/年（Ephemeris 模型中多 年稳定） | 基本无需维持 |

> 注：在全重力模型中，晕轨道仅需 < 5 m/s/年的 $\Delta v$ 即可维持 stationkeeping，存在轻微不稳定但行为可预测。

## 与 NRHO 的关系

近直线晕轨道（NRHO）是 Halo 轨道族的一个极端子类。当 Halo 轨道的 $A_z/A_y$ 比值极大时，轨道形态从"腰果形"演变为近直线往复运动，即为 NRHO。NRHO 通常特指 $L_2$ 点附近的第一至第三次稳定性变化之间的成员。

在 Genszler et al. (2026) 的研究中：

- **L1 NRHO**：周期约 8-10 天
- **L2 NRHO**：周期约 6-10 天

## 在星伞任务中的应用

晕轨道是系外行星直接成像任务的重要候选轨道。传统的 HabEx 和 LUVOIR 任务概念均规划将望远镜部署在 **SEL2 Halo 轨道**，但 SEL2 距离地球约 150 万公里，转移时间长、共享发射机会少。

Genszler et al. (2026) 研究了将望远镜部署在 EML1/EML2 晕轨道进行**星伞技术演示**的可行性：

- 研究了 10 个 EML1 北族和南族晕轨道（周期 7.8-12 天）
- 研究了 10 个 EML2 北族和南族晕轨道
- 对比了不同初始目标星位置对可观测目标数量的影响

### 关键发现

1. **分离距离**：在地月晕轨道中，$\Delta v \leqslant 20$ m/s 的 slew 在分离距离约 **10,000 km** 时变得可行；而 SEL2 任务的典型分离距离为 120,000 km
2. **轨道选择**：北族和南族 EML2 晕轨道在相同周期下可达目标数量相同；EML1 晕轨道的表现因初始目标星位置而异
3. **初始目标星敏感**：选择不当的初始目标可能导致后续无可行 slew

## 轨道生成方法

晕轨道的初始条件通过以下方法建立：

1. **单次打靶法**（Single Shooting）和**延续法**（Continuation Method）
2. **微分修正算法**（Differential Correction）
3. 在 CR3BP 模型中使用 **ode113**（MATLAB）进行动力学传播

## 相关概念

- [近直线晕轨道（NRHO）](/glossary/nrho/)
- [远距离逆行轨道（DRO）](/glossary/dro/)
- [地月平动点](/glossary/eml-halo/)（注意：本文即为此概念详情）
- [圆形限制性三体问题（CR3BP）](/glossary/cr3bp/)
- [星伞（Starshade）](/glossary/starshade/)
- 微分修正（Differential Correction）
- 打靶法（Shooting Method）

## 参考文献

- Genszler G, Savransky D, Soto G J. Surveying orbits in cislunar space for telescope-starshade observatories[J]. 2026.
- Farquhar R W. The execution of lunar orbit and libration point missions[J]. 1972.
- Zimovan E M. Characteristics and design strategies for near rectilinear halo orbits within the Earth-Moon system[D]. Purdue University, 2017.
- Folta D C, Pavlak T A, Haapala A F, et al. Preliminary design considerations for access and operations in Earth-Moon L1/L2 orbits[C]. AAS/AIAA Spaceflight Mechanics Meeting, 2013.
- Whitley R, Martinez R. Options for staging orbits in cislunar space[C]. IEEE Aerospace Conference, 2016.
