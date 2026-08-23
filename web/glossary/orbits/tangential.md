---
title: 相切（Tangential）
description: 两条空间轨道在公共交点处不仅位置重合、且速度矢量完全共线平行的几何切触状态与切向机动方式。
keywords: 相切, Tangential, 轨道设计, 轨道力学, 转移轨道, 周期轨道
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 相切（Tangential）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
permalink: /glossary/orbits/tangential/
---

# 相切（Tangential）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

相切（Tangential）指两条空间轨道或流形轨迹在特定交汇点处，其空间位置矢量严格一致且切向速度单位矢量方向完全平行的几何关系；在轨道控制领域，亦指推力矢量方向严格沿航天器瞬时速度切线方向的切向机动策略。

## 物理机制与工程价值

相切接触与切向机动在地月空间轨道设计中体现出最高的能量转化效率与特殊的动力学拓扑性质：

1. 轨道能量极值与奥伯特效应：根据航天动力学变分原理，沿速度矢量方向施加切向推力能够实现单位脉冲下机械能变化率的最大化（$dE/dt = \mathbf{v} \cdot \mathbf{a_T}$），是消除横向非有效分量、实现最优能量跃迁的标准形式。
2. 周期轨道族切触与转移桥梁：在限制性三体问题中，远距离逆行轨道（DRO）族在特定雅可比常数下与围绕共线拉格朗日点的平面Lyapunov轨道族存在严格的相切几何关系。利用该相切点，航天器仅需施加一次单脉冲甚至零脉冲切向微扰，即可实现从平动点流形向DRO长期稳定轨道的平滑切入。
3. 庞加莱截面相空间切触：相切点在庞加莱截面映射中表现为庞加莱曲线的切触分岔点，为多体引力场全局轨迹分支的连通性分析提供了确定的动力学边界条件。

## 相关概念

- [转移轨道族（Transfer Family）](/glossary/orbits/transfer-family/)
- [截面宽度（Trajectory Section Width）](/glossary/orbits/trajectory-section-width/)
- [轨道维持代价（Orbit Maintenance Cost）](/glossary/orbits/orbit-maintenance-cost/)
- [近月点月心距（Perilune Selenocentric Distance）](/glossary/orbits/the-distance-from-the-moons-center-to-the-closest-point-of-a-transfer-trajectory-or-invariant-manifo/)

## 参考文献

- 徐明, 徐世杰. 地月低能转移的发生条件及轨迹构造. *中国科学: 物理学 力学 天文学*, 2010, 40(6): 783-793.
- Mingotti G, Topputo F, Bernelli-Zazzera F. Low-energy transfers to distant retrograde orbits. *Celestial Mechanics and Dynamical Astronomy*, 2012, 114(1): 169-186.
