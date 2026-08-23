---
title: 月球轨道偏心率（Lunar Orbit Eccentricity）
description: 月球绕地球公转轨道的偏心率（约 0.0549），使地月距离在近地点（约 363,300 km）和远地点（约 405,500 km）之间变化。在高保真星历中，轨道的椭圆特性对转移时间和能量有显著影响：出发时刻的偏心率相位直接决定了可用转移方案的效能。CR3BP 近似在偏心率较小时（如日地系统 $e \approx 0.0167$）精度的定量评估可通过偏心率灵敏度分析完成。
keywords: 月球轨道偏心率, Lunar Orbit Eccentricity, 椭圆限制性三体问题, ER3BP, 地月距离变化, 偏心率灵敏度分析, 转移轨道设计
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 月球轨道偏心率（Lunar Orbit Eccentricity）
  desc: $e \approx 0.0549$：椭圆轨道对地月转移设计的定量影响。
  image: /logo.png
og:
  title: 月球轨道偏心率详解 | 术语定义
  description: 月球绕地轨道的偏心率（约 0.0549），使地月距离在近远地点间变化。椭圆效应使转移方案效能依赖于出发时刻的偏心率相位；偏心率灵敏度分析可定量评估 CR3BP 近似的保真度。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 月球轨道偏心率详解 | 术语定义
  description: $e \approx 0.0549$：椭圆轨道对地月转移设计的定量影响。
  image: /logo.png
permalink: /glossary/fundamentals/lunar-orbit-eccentricity/
---

# 月球轨道偏心率（Lunar Orbit Eccentricity）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义与数值

月球的公转轨道近似椭圆，当前偏心率约 $e \approx 0.0549$。由此产生约 42,200 km 的地月距离变化：近地点（perigee）约 363,300 km，远地点（apogee）约 405,500 km。偏心率本身非恒定：受太阳和行星摄动影响，$e$ 在约 0.0255 至 0.0775 的范围内呈现长周期变化。

月球轨道面（白道面）与黄道面夹角约 $5.145\degree$，近地点方向并非固定而在约 8.85 年内绕地进动一周。这两个因素与偏心率共同影响月球的精确位置，决定了任何真实星历计算不能仅凭平均圆轨道近似。

## 为什么圆型限制性三体问题（CR3BP）是近似

CR3BP 假设两个主天体在圆轨道上相互绕转，即 $e=0$。对地月系统，$e = 0.0549$ 并不可忽略（Wang et al. 2021）。当使用**椭圆限制性三体问题（ER3BP）**时，两个主天体位于不断变化的椭圆轨道上：

- 主天体间距随时间周期性变化（$P \approx 27.3$ 天），使运动方程不自治：方程中显含时间，雅可比积分不再是守恒量。

- 出发时刻所处的偏心率相位（近地点与远地点之间的位置）对转移时间和速度增量有显著影响。Wang et al. (2021) 发现，某些出发日期的转移轨道在 ER3BP 中的性能可优于 CR3BP 标称结果。

## 偏心率灵敏度分析

**偏心率灵敏度分析**（eccentricity sensitivity analysis）是一种定量评估 CR3BP 近似在给定系统中保真度的方法。基本思路是将偏心率 $e$ 作为增广状态变量，通过二阶**状态转移张量**（State Transition Tensors, STT）传播不确定性，比较 CR3BP 与 ER3BP 下最优控制的差异（Kulik et al. 2023, JGCD）。

Kulik et al. (2023) 将方法应用于日地 Halo 轨道附近的相对运动，结果表明 CR3BP 模型的最优控制代价误差不超过 1%，验证了低保真度模型应用于日地系统（$e \approx 0.0167$，仅为地月系统的 30%）方案比较的合理性。对于地月系统（$e$ 大三倍以上），类似分析尚未公开报告。

## 工程影响

- **转移设计**：高保真度地月转移设计必须考虑出发时刻的偏心率相位。月球不在圆轨道上，地球-月球瞬时距离的差异直接改变所需速度增量的大小。

- **发射窗口**：发射窗口的可用性和最优性随月球偏心率相位变化：近地点附近的月球需要更多能量（距地球较近时引力更强），远地点附近需要更少能量但到达时间更长。

- **模型选择**：概念设计阶段 CR3BP 通常是合理的；详细设计阶段需要根据偏心率灵敏度判断是否及其何时升级为 ER3BP 或星历模型。

## 相关概念

- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)

- [轨道根数漂移（Orbital Element Drift）](/glossary/dynamics/orbital-element-drift/)

- [低能量转移（Low-Energy Transfer）](/glossary/orbits/low-energy-transfer/)

- [状态转移矩阵（STM）](/glossary/fundamentals/stm/)

## 参考文献

- Vallado, 2022, Fundamentals of Astrodynamics and Applications（月球轨道参数与椭圆限制性三体运动的基础理论）

- Wang et al., 2021（地月转移中椭圆效应的高保真星历分析）

- Kulik et al., 2023, JGCD, doi:10.2514/1.G007311（偏心率灵敏度分析的 STT 方法，日地 Halo 附近 CR3BP 保真度的定量评估）
