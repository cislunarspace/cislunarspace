---
title: 近月点月心距（Perilune Selenocentric Distance）
description: 航天器转移轨道或三体不变流形在飞越月球附近时，轨道上距月球质心最近点的标量几何距离。
keywords: 近月点月心距, Perilune Selenocentric Distance, 轨道, 平动点, Halo轨道
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 近月点月心距（Perilune Selenocentric Distance）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
permalink: /glossary/orbits/the-distance-from-the-moons-center-to-the-closest-point-of-a-transfer-trajectory-or-invariant-manifo/
---

# 近月点月心距（Perilune Selenocentric Distance）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

近月点月心距（Perilune Selenocentric Distance, 通常记作 $r_{pm}$）指航天器沿地月转移轨道、环月轨道或平动点不变流形管滑行时，其轨迹上距离月球质心最近点（近月点）的径向空间距离，等于月球平均物理半径（约1737.4公里）加上近月点轨道高度。

## 物理机制与工程价值

近月点月心距是地月转移、月球借力以及环月捕获轨道设计的核心约束参数：

1. 零消耗转移与脉冲入轨判据：在基于不变流形的低能地月转移设计中，流形轨迹的最小近月点月心距是否能够与目标环月轨道（如100公里圆轨道，对应月心距1837.4公里）几何重合，是判断能否实现无动力自然弹道捕获（Ballistic Capture）或需要施加双曲线减速脉冲的关键依据。
2. 借力转向角与引力梯度：在月球借力飞行中，近月点月心距越小，航天器感受到的月球引力场强越强，轨道双曲线渐近转向角越大；但必须设置安全高度下限（通常不低于50至100公里），以规避月表复杂地形碰撞与超高阶非球形引力摄动发散。
3. 轨道倾角与面外构型耦合：近月点月心距与近月点纬度、飞行速度方向共同决定了进入环月轨道后的轨道面交点演化规律。

## 相关概念

- [近地点地心距（Perigee Geocentric Distance）](/glossary/orbits/perigee-geocentric-distance/)
- [借力转移（Gravity Assist / Swingby）](/glossary/orbits/gravity-assist-swingby/)
- [相切（Tangential）](/glossary/orbits/tangential/)
- [接近段（Approach Phase）](/glossary/orbits/approach-phase/)

## 参考文献

- 彭坤, 沈红新, 李海阳. 基于不变流形的地月L2点Halo轨道转移轨道设计. *宇航学报*, 2016, 37(4): 397-404.
- Topputo F. On the mechanics of low-energy transit orbits in the Earth-Moon system. *Communications in Nonlinear Science and Numerical Simulation*, 2016, 32: 247-264.
