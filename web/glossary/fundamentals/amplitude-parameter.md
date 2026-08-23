---
title: 振幅参数与相位参数（Amplitude Parameter & Phase Parameter）
description: 远距离逆行轨道（DRO）在会合坐标系中的两个基本描述参数：振幅参数刻画 DRO 相对平动点的大小，相位参数标定航天器在 DRO 周期中的位置。二者配合可在给定雅可比值下唯一确定 DRO 上任一点的状态，是 DRO 数值求解、编队构型设计及转移轨道参数化的核心变量。
keywords: 振幅参数, 相位参数, Amplitude Parameter, Phase Parameter, DRO, 远距离逆行轨道, 会合坐标系, 轨道参数化, 雅可比常数
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 振幅参数与相位参数
  desc: DRO 在会合系中的两个基本描述参数：大小与位置，配合可得唯一状态。
  image: /logo.png
og:
  title: 振幅参数与相位参数（Amplitude & Phase Parameter）详解 | 术语定义
  description: DRO 在会合坐标系中的两个基本描述参数：振幅参数刻画轨道大小，相位参数标定周期位置，二者配合确定 DRO 上任一点状态，是 DRO 数值求解与转移设计的核心变量。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 振幅参数与相位参数详解 | 术语定义
  description: DRO 在会合坐标系中的两个基本描述参数：振幅参数刻画轨道大小，相位参数标定周期位置。
  image: /logo.png
permalink: /glossary/fundamentals/amplitude-parameter/
---

# 振幅参数与相位参数（Amplitude Parameter & Phase Parameter）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

远距离逆行轨道（DRO）在会合坐标系中由雅可比常数 $C_J$（或等价的能量水平）和两个参数确定：**振幅参数**给出轨道的大小，**相位参数**标定轨道上一点的位置。

振幅参数（amplitude parameter）描述 DRO 在会合坐标系中相对平动点的大小，一般定义为初始 x 坐标与地月 $L_1$ 或 $L_2$ 点的 x 坐标之差的绝对值（Tan 2014）。给定雅可比常数后，振幅参数与 DRO 的尺寸之间有一一对应关系。相位参数（phase parameter）则描述 DRO 上某一点在轨道周期中的位置，对应于时刻 $t$ 的轨道相位角。二者配合使用，在指定雅可比值的条件下可以唯一确定会合坐标系中 DRO 上任一点的状态（位置与速度）（Tan 2014）。

DRO 是一族包围月球、与会合坐标系旋转方向相反（逆行）的周期轨道，在高雅可比常数下距离月球较近，低雅可比常数下轨道尺寸增大（Scott 2010）。振幅参数实际上是这族单参数轨道的标号：不同振幅对应不同的 DRO 尺度和不同的稳定性特性。

## 数值求解中的角色

在 DRO 周期轨道的数值求解中，振幅参数和相位参数是自然的参数化形式。典型做法是：在会合坐标系中给定雅可比常数和振幅参数，在 x 轴上按振幅参数取初始位置，以相位参数隐式决定初始速度方向，通过微分修正法（differential correction）迭代收敛到严格的周期解（Tan 2014）。这组参数比直接用直角坐标状态向量有更好的收敛性和明确的物理意义。

## 与 DRO 编队和转移的关系

- **DRO 编队**：振幅参数相同的航天器在相同 DRO 族上运动，编队的相对运动由相位参数之差决定。振幅参数不同的航天器处于不同的 DRO 上，其相对漂移取决于雅可比常数之差所对应的轨道周期差异（敖海跃等 2024）。

- **DRO 转移**：从地球停泊轨道到 DRO 的转移设计中，目标 DRO 由振幅参数和相位参数指定，优化变量常包括出发时机和所需速度增量（Tan 2014）。

## 相关概念

- [远距离逆行轨道（DRO）](/glossary/programs/dro/)

- [微分修正法（Differential Correction Method）](/glossary/dynamics/differential-correction/)

- [会合坐标系（Synodic Frame）](/glossary/fundamentals/synodic-frame/)

- [庞加莱截面（Poincaré Section）](/glossary/dynamics/poincare-section/)

- [不变流形（Invariant Manifold）](/glossary/dynamics/invariant-manifold/)

## 参考文献

- Tan Minghu et al., 2014, Transfer to long term distant retrograde orbits around the Moon（振幅参数与相位参数的定义与 DRO 求解方法）

- Scott, 2010, Transfer and Capture into Distant Retrograde Orbits（DRO 族的雅可比常数-尺寸对应关系及其稳定性）

- 敖海跃等, 2024（DRO 编队中振幅与相位相关性的进一步分析）
