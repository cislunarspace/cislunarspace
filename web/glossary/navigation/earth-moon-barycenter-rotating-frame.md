---
title: 地月质心旋转坐标系（Earth-Moon Barycenter Rotating Frame）
description: 以地月系统质心为原点且随地月主天体公转同步旋转的脉动或均值随动参考框架。
keywords: 地月质心旋转坐标系, Earth-Moon Barycenter Rotating Frame, 坐标系, CR3BP, 会合坐标系
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 地月质心旋转坐标系（Earth-Moon Barycenter Rotating Frame）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
permalink: /glossary/navigation/earth-moon-barycenter-rotating-frame/
---

# 地月质心旋转坐标系（Earth-Moon Barycenter Rotating Frame）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

地月质心旋转坐标系（Earth-Moon Barycenter Rotating Frame，亦称地月会合坐标系 Synodic Frame）是指以地球与月球两主天体的系统质心（Barycenter）为坐标原点，随着地月质心连线公转同步旋转的非惯性随动参考坐标系。其基本定义为：$X$ 轴由地球质心指向月球质心；$Z$ 轴平行于地月相对轨道角动量矢量方向；$Y$ 轴位于地月公转轨道平面内且与 $X$ 轴和 $Z$ 轴构成右手直角笛卡尔坐标系。

## 物理机制与工程价值

在惯性参考系中，由于地球和月球均绕其质心快速绕转，航天器的动力学方程呈现极其复杂的周期时变特征。地月质心旋转坐标系通过非惯性变换将时变系统转化为自治或近似自治动力学系统：

1. **固定两主天体与平衡点位置**：在无量纲圆型限制性三体问题（CR3BP）中，地球和月球在旋转系中的坐标被严格固定在 $(-\mu, 0, 0)$ 和 $(1-\mu, 0, 0)$ 处（$\mu \approx 0.01215$ 为地月质量比），拉格朗日平动点 $L_1-L_5$ 成为相空间中的静态力学平衡点；
2. **显式引入惯性离心力与柯氏力**：系统的有效引力势包含真实的地球引力、月球引力以及由坐标系旋转派生的惯性离心势，建立了唯一的标量运动常数雅可比积分 $C_j$；
3. **直观揭示轨道几何拓扑**：Halo 轨道、NRHO 轨道、DRO 轨道及不变流形流管在旋转坐标系中表现为清晰的静态封闭或分岔几何曲面，极大简化了空间相对态势感知、交会走廊设计与编队构型控制。

该坐标系是整个地月空间轨道动力学分析、任务轨道选型与飞行制导控制的标准基准框架。

## 相关概念

- [会合坐标系（Synodic Frame）](/glossary/fundamentals/synodic-frame/)
- [质心旋转系（Barycentric Rotating Frame）](/glossary/navigation/barycentric-rotating-frame/)
- [圆型限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)
- [雅可比积分（Jacobi Integral）](/glossary/dynamics/jacobi-integral/)

## 参考文献

- Szebehely, V. Theory of Orbits: The Restricted Problem of Three Bodies. Academic Press, 1967.
- Roy, A. E. Orbital Motion (4th Edition). Institute of Physics Publishing, 2005.
