---
title: 近地点地心距（Perigee Geocentric Distance）
description: 航天器在其地心主导轨道或地月转移轨道近地点处，质心至地球质心的空间标量距离。
keywords: 近地点地心距, Perigee Geocentric Distance, 轨道几何, 奥伯特效应, 地月转移
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 近地点地心距（Perigee Geocentric Distance）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
permalink: /glossary/orbits/perigee-geocentric-distance/
---

# 近地点地心距（Perigee Geocentric Distance）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

近地点地心距（Perigee Geocentric Distance，记作 $r_p$）是指航天器沿地心开普勒椭圆、双曲线或地月多体转移轨道运行时，轨道上距地球质心最近点（近地点）的径向矢量模长，等于地球平均物理半径与近地点轨道高度之和。

## 物理机制与工程价值

近地点地心距是表征发射入轨能量、轨道衰减约束及多体打靶转移的关键几何状态参数：

1. 发射能量与奥伯特效应：近地点地心距与发射火箭停泊轨道的能量密切相关。在给定的近地点速度下，较小的近地点距对应更深的地心引力阱，航天器可充分利用奥伯特效应（Oberth Effect），在近地点施加机动以最大化动能转化效率；
2. 大气再入与安全走廊：近地点地心距必须严格大于地球稠密大气层的有效边界（通常取 6578 km 以上，即高度 200 km 以上），避免由于气动阻力导致轨道意外衰减；对于月球返回任务，则需精确控制返回轨道的近地点地心距使其落入狭窄的大气再入走廊；
3. 转移轨道打靶初值：在地月低能转移、远距逆行轨道（DRO）及平动点轨道入轨设计中，近地点地心距常与近地点相位角、发射速度增量共同构成出发段双脉冲打靶的核心独立变量。

## 相关概念

- [地心弧段（Geocentric Arc）](/glossary/orbits/geocentric-arc/)
- [近月点月心距（Perilune Selenocentric Distance）](/glossary/orbits/the-distance-from-the-moons-center-to-the-closest-point-of-a-transfer-trajectory-or-invariant-manifo/)
- [借力转移（Gravity Assist / Swingby）](/glossary/orbits/gravity-assist-swingby/)
- [接近段（Approach Phase）](/glossary/orbits/approach-phase/)

## 参考文献

- 张晨, 宝音贺西. 地月远距离逆行轨道入轨与转移设计. 北京航空航天大学学报, 2024, 50(6): 1820-1830.
- Curtis, H. D. Orbital Mechanics for Engineering Students (4th Edition). Butterworth-Heinemann, 2020.
