---
title: 近月点（Perilune）
description: 详细解析近月点的定义、几何意义、对月球借力过程的影响及其在轨道设计中的作用
keywords: 近月点, Perilune, 月球借力, 轨道设计, 近月点高度, 绕月轨道, 地月转移
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 近月点（Perilune）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 近月点（Perilune）详解 | 月球借力关键参数
  description: 详细解析近月点的定义、几何意义、对月球借力过程的影响及其在轨道设计中的作用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 近月点（Perilune）详解 | 月球借力关键参数
  description: 详细解析近月点的定义、几何意义、对月球借力过程的影响及其在轨道设计中的作用
  image: /logo.png
permalink: /glossary/orbits/perilune/
---

# 近月点（Perilune）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

近月点（Perilune）是航天器绕月飞行轨道上**距离月球质心最近的点**。在绕月轨道的几何描述中，近月点与远月点（Apolune）共同定义了轨道的基本形态。近月点高度（Perilune Altitude）是从月球表面到近月点的距离，是轨道设计中的关键参数。

## 核心要素

### 近月点的几何意义

在二体问题框架下，绕月轨道为圆锥曲线（椭圆、抛物线或双曲线）。对于椭圆轨道，近月点位于椭圆长轴上靠近月球的一端，其距月球质心的距离为：

$$r_{\text{perilune}} = a(1 - e)$$

其中 $a$ 为半长轴，$e$ 为轨道偏心率。对于 DRO 和 NRHO 等复杂轨道，在限制性三体问题框架下，近月点的定义仍然适用，但轨道不再为标准圆锥曲线。

### 近月点高度对借力的影响

在月球借力（Lunar Gravity Assist）过程中，近月点高度是决定能量变化量的关键因素：

- **较低的近月点**（如 100-200 km）：月球引力作用更强，能量变化 $\Delta E$ 更大，但受到月球非球形引力场（$J_2$ 项等）的显著扰动，且存在撞月风险
- **较高的近月点**（如 1000-10000 km）：引力作用较弱，能量变化较小，但轨道安全性更好，适合长期任务

借力过程中的速度偏转角 $\delta$ 与近月点距离 $r_p$ 的关系为：

$$\sin\frac{\delta}{2} = \frac{1}{1 + \dfrac{r_p \cdot v_\infty^2}{\mu_M}}$$

其中 $v_\infty$ 为航天器相对月球的双曲线超速，$\mu_M$ 为月球引力常数。近月点越低，偏转角越大。

### 近月点精度控制

在实际任务中，近月点的精度控制面临以下挑战：

- **月球非球形引力**：月球质量分布不均匀导致轨道在近月点附近发生显著摄动
- **轨道确定误差**：深空测距和测速精度直接影响近月点位置的预测
- **机动时机选择**：近月点机动的时机和大小需精确规划，以避免轨道偏差累积

## 应用价值

近月点参数在地月空间任务中具有核心应用价值：

- **月球借力轨道设计**：通过调整近月点高度，精确控制借力过程中的能量和轨道方向变化
- **DRO 转移入轨**：魏赞等（2026）研究表明，从 LEO 出发经月球借力进入 DRO 时，近月点高度是决定转移效率的核心参数
- **安全约束**：近月点高度需满足最低安全距离要求，避免与月球地形碰撞
- **科学观测**：低近月点轨道适合高分辨率月球表面观测

## 相关概念
- [远距离逆行轨道（DRO）](/glossary/orbits/dro/)
- [远月点（Apolune）](/glossary/orbits/apolune/)
- [月球借力（Lunar Gravity Assist）](/glossary/other/lunar-gravity-assist/)

## 参考文献
- 魏赞等. 地月远距离逆行轨道族月球借力转移入轨研究[J]. 2026.
- Vallado D A. Fundamentals of Astrodynamics and Applications[M]. 4th ed. 2013.
- Broucke R. Periodic orbits in the restricted three-body problem with Earth-Moon masses[R]. 1968.
