---
title: 参考轨道（Reference Orbit）
description: 空间导航系统与星座设计中作为理论基准、名义几何构型或状态估计中心轨迹的标称轨道。
keywords: 参考轨道, Reference Orbit, 导航星座, 轨道基准, 标称轨迹
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 参考轨道（Reference Orbit）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
permalink: /glossary/navigation/reference-orbit/
---

# 参考轨道（Reference Orbit）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

参考轨道（Reference Orbit）是指在地月空间导航通信星座论证、自主定轨滤波、相对导引与自主维持控制中，作为系统标称运动基准、泰勒展开中心以及几何构型对齐基准的理论周期或拟周期轨道。

## 物理机制与工程价值

在地月三体引力环境中，参考轨道的力学特性决定了全系统覆盖、测控与维持代价的综合指标：

1. 构型覆盖与几何衰减因子：参考轨道的空间几何取向决定了对月球南极、极区永久阴影坑及地月转移通道的可见重数与几何精度因子（GDOP）。例如大偏心率近直线晕轨道（NRHO）具有长远月点停留时间，可提供对月极区的长期稳定仰角覆盖；
2. 动力学稳定性与维持开销：远距离逆行轨道（DRO）具有极高的轨道自稳定性，年均轨道维持速度增量近乎为零；而共线平动点Halo轨道与NRHO具有弱不稳定性，需基于参考轨道周期性施加毫米秒级的微小控制脉冲；
3. 状态滤波线性化基准：在扩展卡尔曼滤波与轨道预报变分方程积分中，参考轨道作为中心标称轨道，保证了偏差运动在局部线性化区间的收敛性与数值稳定性。

科学选取参考轨道是地月空间天基PNT体系与通信中继星座顶层架构设计的首要前提。

## 相关概念

- [Halo轨道交会（Halo Orbit Rendezvous）](/glossary/navigation/halo-orbit-rendezvous/)
- [轨道维持成本（Orbit Maintenance Cost）](/glossary/orbits/orbit-maintenance-cost/)
- [无迹变换（Unscented Transformation, UT）](/glossary/navigation/ut/)
- [等待时间（Wait Time）](/glossary/navigation/wt/)

## 参考文献

- 晋守聪, 李海飞, 张文明, 等. 地月空间导航通信综合星座参考轨道设计与覆盖性能分析. 空间科学学报, 2025, 45(2): 317-327.
- Whitley, R., & Martinez, R. Options for staging orbits in cis-lunar space. IEEE Aerospace Conference, 2016: 1-9.
