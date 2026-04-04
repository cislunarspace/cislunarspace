---
title: 远距离逆行轨道(DRO)
description: 详细解析远距离逆行轨道(DRO)的定义、动力学特性、共振关系、稳定性分析及其在地月空间中的应用
keywords: 远距离逆行轨道, DRO, Distant Retrograde Orbit, 地月空间轨道, 共振轨道, 轨道稳定性, 轨道设计
author: 天疆说
date: 2026-04-04
lastUpdated: 2026-04-04
wechatShare:
  title: 远距离逆行轨道(DRO)
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 远距离逆行轨道(DRO)详解 | 地月空间关键任务轨道
  description: 详细解析远距离逆行轨道(DRO)的定义、动力学特性、共振关系、稳定性分析及其在地月空间中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 远距离逆行轨道(DRO)详解 | 地月空间关键任务轨道
  description: 详细解析远距离逆行轨道(DRO)的定义、动力学特性、共振关系、稳定性分析及其在地月空间中的应用
  image: /logo.png
permalink: /glossary/dro/
---

# 远距离逆行轨道

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

远距离逆行轨道（Distant Retrograde Orbit，DRO）是圆形限制性三体问题（CRTBP）中一类环绕月球的**稳定周期轨道**。在会合坐标系中，DRO 的运行方向与月球绕地球公转方向相反，因此称为"逆行"轨道。


![DRO 轨道示意图](/glossary/Figures/DRO/DRO示意图.png)
*DRO 在地月会合坐标系中的轨道形态*



![质心旋转坐标系及 DRO 轨道示意图](/glossary/Figures/DRO/质心旋转坐标系及DRO轨道示意图.png)
*DRO 在质心旋转坐标系中的几何构型*



## 几何特征

在会合坐标系下，平面 DRO 表现为近似椭圆的闭合曲线，以月球为几何中心。其主要参数为：

- **$x$ 方向振幅 $A_x$**：轨道与地月连线的交点到月球的距离，是描述 DRO 构型的主要参数
  - 当 $A_x$ 较小时，DRO 靠近月球，近似于环月圆轨道
  - 随 $A_x$ 增大，DRO 逐渐远离月球，轨道形态从近圆形演变为具有明显偏心率的椭圆形
- **$z$ 方向振幅 $A_z$**：引入 $z$ 方向振幅可获得三维非平面 DRO，这类轨道同时具有 $xOy$ 平面内的逆行运动和 $z$ 方向的周期振荡

## 共振关系

DRO 存在与月球公转周期的共振关系。当 DRO 的轨道周期 $T$ 与月球公转周期 $T_M$ 满足 $T/T_M \approx n/m$（$n, m$ 为正整数）时，称为 $m:n$ 共振 DRO。

| 共振比 | 特征 |
|:---|:---|
| 1:1, 2:1（低阶共振） | 靠近月球，稳定性较强 |
| 3:1, 4:1（高阶共振） | 远离月球，轨道幅值较大，为向近地空间的转移提供更大势能优势 |

例如，2:1 共振 DRO 的轨道周期约为月球公转周期的一半，即飞行器每绕月球运行两圈时月球恰好公转一圈。

## 动力学对称性

在 CRTBP 中，DRO 关于 $x$ 轴具有动力学对称性：轨道在穿越 $x$ 轴时，仅存在 $y$ 方向速度分量 $\dot{y}_0$，而 $y$ 方向位置和 $x$、$z$ 方向速度均为零。这一对称性使得只需在 $x$ 轴上选取初始点，以 $\dot{y}_0$ 和周期 $T$ 为自由变量，通过半周期积分后校核轨道是否返回 $x$ 轴，即可迭代收敛至闭合的周期轨道。

## 在星历模型中的表现

在星历模型等多摄动环境下，由于天体位置随时间变化，DRO 不再保持严格周期性，而演变为在有限区域内缠绕的**准周期轨道**（Quasi-periodic Orbit），其轨迹不闭合，但整体形态保持稳定。

## 应用价值

DRO 凭借其出色的长期稳定性（无需或仅需极少量轨道机动即可维持）和轨位优势，已成为地月空间基础设施的优选任务轨道，应用场景包括：

- **态势感知星座**部署
- **地月空间导航系统**组网
- **深空中继通信**
- **物资储备与战略驻留**

NASA 的月球轨道器（LRO）任务已验证了 DRO 在月球探测中的应用价值。近年有学者提出，具备 $z$ 方向振幅的非平面 DRO 可规避日食，进一步提升观测器效能。

## 相关概念

- 近直线晕轨道（NRHO）
- 圆形限制性三体问题（CR3BP）
- 星历模型
- 共振轨道
- 拟周期轨道

## 参考文献

- Whitley R, Martinez R. Options for staging orbits in cislunar space[C]. 2016.
- Broucke R. Periodic orbits in the restricted three-body problem with Earth-Moon masses[R]. 1968.
- 陈昱桔. 面向地月空间态势感知的DRO轨道设计与控制研究[D]. 2024.
