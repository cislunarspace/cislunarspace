---
title: 接近段（Approach Phase）
description: 航天器在月球探测或自由返回轨道任务中，从地月转移轨道逼近月球影响球并过渡至月面着陆点或环月轨道的关键飞行阶段。
keywords: 接近段, approach phase, 轨道, 平动点, Halo轨道
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 接近段（Approach Phase）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
permalink: /glossary/orbits/approach-phase/
---

# 接近段（Approach Phase）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

接近段（Approach Phase）指航天器执行月球软着陆、环月捕获或月球借力飞行时，从地心主导的地月转移轨道滑行至月球引力作用球范围，直至进入环月轨道或开始动力下降着陆准备所经历的关键飞行弧段。

## 物理机制与工程价值

接近段处于地球引力与月球引力的剧烈交汇过渡区，多体动力学摄动显著增强：

1. 混合解析与数值积分建模：接近段轨道设计中，航天器受月球引力梯度急剧增大影响，二体近似误差迅速发散。工程上通常将轨迹解耦为主地心椭圆弧段与伪状态回归段，通过兰伯特算法快速求解入轨边界初值，再结合伪状态理论或高保真多体数值积分精确解算终端状态。
2. 捕获与着陆走廊控制：接近段终端的轨道倾角、近月点高度及速度矢量方向，直接决定了月球捕获制动脉冲（LOI）的能量消耗及月面着陆区的可达范围。
3. 容错与自由返回保障：对于载人登月任务，接近段轨道的几何构型需具备自由返回轨道（Free-Return Trajectory）保底能力，确保在动力系统故障时航天器可依靠月球自然引力偏转自动返回地球大气层入轨走廊。

## 相关概念

- [轨道链（Orbit Chain）](/glossary/orbits/orbit-chain/)
- [地心弧段（Geocentric Arc）](/glossary/orbits/geocentric-arc/)
- [借力转移（Gravity Assist / Swingby）](/glossary/orbits/gravity-assist-swingby/)
- [等待时间（Wait Time）](/glossary/navigation/wt/)

## 参考文献

- 丁百慧, 彭祺擘, 沈红新. 载人月球探测任务转移轨道及月面着陆区评估分析. *宇航学报*, 2023, 44(8): 1185-1196.
- Wilson C R, Howell K C. Trajectory design in the Earth-Moon system using invariant manifolds and pseudo-state theory. *Journal of Spacecraft and Rockets*, 2011, 48(4): 642-654.
