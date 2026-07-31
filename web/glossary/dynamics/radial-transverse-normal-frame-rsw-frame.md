---
title: RSW坐标系（Radial-Transverse-Normal Frame, RSW Frame）
description: 一种附着于航天器的局部轨道坐标系，三个轴分别为：R 轴沿位置矢量方向（径向），S 轴在轨道面内垂直于 R 轴指向前方（横向），W 轴沿角动量方向（法向）。在 CRTBP 小推力优化中，RSW 坐标系用于将球面控制变量映射为笛卡尔推力分量，其基矢量由航天器相对于中心天体的位置和速度实时计算。当速度与位置共线时 RSW 坐
keywords: RSW坐标系, Radial-Transverse-Normal Frame, RSW Frame, RSW, 轨道, 动力学
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: RSW坐标系（Radial-Transverse-Normal Frame, RSW Frame）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: RSW坐标系详解 | 术语定义
  description: 一种附着于航天器的局部轨道坐标系，三个轴分别为：R 轴沿位置矢量方向（径向），S 轴在轨道面内垂直于 R 轴指向前方（横向），W 轴沿角动量方向（法向）。在 CRTBP 小推力优化中，RSW 坐标系用于将球面控制变量映射为笛卡尔推力分量，其基矢量由航天器相对于中心天体的位置和速度实时计算。当速度与位置共线时 RSW 坐
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: RSW坐标系详解 | 术语定义
  description: 一种附着于航天器的局部轨道坐标系，三个轴分别为：R 轴沿位置矢量方向（径向），S 轴在轨道面内垂直于 R 轴指向前方（横向），W 轴沿角动量方向（法向）。在 CRTBP 小推力优化中，RSW 坐标系用于将球面控制变量映射为笛卡尔推力分量，其基矢量由航天器相对于中心天体的位置和速度实时计算。当速度与位置共线时 RSW 坐
  image: /logo.png
permalink: /glossary/dynamics/radial-transverse-normal-frame-rsw-frame/
---

# RSW坐标系（Radial-Transverse-Normal Frame, RSW Frame）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种附着于航天器的局部轨道坐标系，三个轴分别为：R 轴沿位置矢量方向（径向），S 轴在轨道面内垂直于 R 轴指向前方（横向），W 轴沿角动量方向（法向）。在 CRTBP 小推力优化中，RSW 坐标系用于将球面控制变量映射为笛卡尔推力分量，其基矢量由航天器相对于中心天体的位置和速度实时计算。当速度与位置共线时 RSW 坐标系退化，需切换为笛卡尔控制变量。

## 应用价值

在轨道设计与转移任务中，该轨道类型可用于优化燃料消耗和飞行时间。该控制方法在地月空间航天器姿态与轨道控制中具有重要应用价值。优化方法的应用可有效提升地月转移轨道的性能和任务效率。

## 相关概念

- [保守系统（Conservative System）](/glossary/dynamics/conservative-system/)
- [空间流形动力学（Space Manifold Dynamics, SMD）](/glossary/dynamics/space-manifold-dynamics-smd/)
- [轨道注入误差（Orbit Injection Error）](/glossary/dynamics/orbit-injection-error/)

## 参考文献

- Aziz et al. 2019, JGCD
