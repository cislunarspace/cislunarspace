---
title: 远月点（Apolune）
description: 详细解析远月点的定义、几何意义、轨道参数关系及其在绕月轨道设计中的应用
keywords: 远月点, Apolune, 绕月轨道, 轨道设计, 远月点高度, 轨道偏心率, DRO, NRHO
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 远月点（Apolune）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 远月点（Apolune）详解 | 绕月轨道基本参数
  description: 详细解析远月点的定义、几何意义、轨道参数关系及其在绕月轨道设计中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 远月点（Apolune）详解 | 绕月轨道基本参数
  description: 详细解析远月点的定义、几何意义、轨道参数关系及其在绕月轨道设计中的应用
  image: /logo.png
permalink: /glossary/orbits/apolune/
---

# 远月点（Apolune）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

远月点（Apolune）是航天器绕月飞行轨道上**距离月球质心最远的点**。与近月点（Perilune）共同描述绕月轨道的基本几何特征，远月点和近月点分别对应椭圆轨道长轴的两个端点。

## 核心要素

### 远月点的几何意义

在二体问题框架下，椭圆绕月轨道的远月点距月球质心的距离为：

$$r_{\text{apolune}} = a(1 + e)$$

其中 $a$ 为半长轴，$e$ 为轨道偏心率。远月点高度 $h_a$ 为远月点到月球表面的距离：

$$h_a = r_{\text{apolune}} - R_M$$

其中 $R_M$ 为月球半径（约 1737.4 km）。

远月点与近月点的关系可通过轨道偏心率表达：

$$e = \frac{r_{\text{apolune}} - r_{\text{perilune}}}{r_{\text{apolune}} + r_{\text{perilune}}}$$

### 远月点在不同轨道类型中的表现

- **近圆轨道**：远月点和近月点高度接近，偏心率 $e \approx 0$
- **大椭圆轨道**：远月点远高于近月点，偏心率 $e$ 接近 1，适合高月球轨道观测
- **DRO 轨道**：在会合坐标系下，DRO 的远月点位于地月连线方向上远离月球的一侧，其位置随共振比变化
- **NRHO 轨道**：近直线晕轨道的远月点高度远大于近月点高度，轨道呈极度拉伸的椭圆形，近月点靠近月球北极区域

### 远月点高度对轨道周期的影响

根据开普勒第三定律，轨道周期 $T$ 与半长轴 $a$ 的关系为：

$$T = 2\pi\sqrt{\frac{a^3}{\mu_M}}$$

其中 $\mu_M$ 为月球引力参数。远月点高度越高，半长轴越大，轨道周期越长。这一关系在 DRO 的共振设计中尤为重要——通过调整远月点位置，可实现与月球公转周期的特定共振比。

## 应用价值

远月点参数在轨道设计中具有重要应用：

- **轨道构型设计**：远月点高度与近月点高度共同决定轨道形状，是描述 DRO、NRHO 等目标轨道的基本参数
- **通信中继规划**：远月点位于月球背面时可提供对地球不可见区域的通信覆盖
- **轨道转移设计**：在从大椭圆轨道向 DRO 的转移过程中，远月点的演化轨迹直接影响转移效率
- **轨道稳定性分析**：远月点位置的变化是判断轨道长期稳定性的重要指标

## 相关概念

- [远距离逆行轨道（DRO）](/glossary/orbits/dro/)
- [近月点（Perilune）](/glossary/orbits/perilune/)
- [近直线晕轨道（NRHO）](/glossary/orbits/nrho/)

## 参考文献

- Vallado D A. Fundamentals of Astrodynamics and Applications[M]. 4th ed. 2013.
- 魏赞等. 地月远距离逆行轨道族月球借力转移入轨研究[J]. 2026.
- Broucke R. Periodic orbits in the restricted three-body problem with Earth-Moon masses[R]. 1968.
