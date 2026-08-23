---
title: 自适应轨迹设计（Adaptive Trajectory Design, ATD）
description: 普渡大学开发的面向地月空间与深空复杂多体引力环境的高效交互式轨道设计与数值优化计算环境。
keywords: 自适应轨迹设计, Adaptive Trajectory Design, ATD, other
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 自适应轨迹设计（Adaptive Trajectory Design, ATD）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
permalink: /glossary/other/atd/
---

# 自适应轨迹设计（Adaptive Trajectory Design, ATD）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

自适应轨迹设计（Adaptive Trajectory Design, ATD）是由美国普渡大学动力系统与航天动力学团队开发的一套面向非线性多体引力场的高性能交互式轨迹设计与流形分析软件平台。该工具集成了圆形限制性三体问题周期轨道数据库、不变流形生成算法、两层多重打靶微分修正器以及向高保真多体星历模型的自适应连续过渡算法。

## 物理机制与工程价值

在地月及深空轨道任务设计中，简化的理论三体动力学与真实复杂受摄星历之间存在巨大的动力学鸿沟，ATD提供了系统的工程桥梁：

1. 理论模型向高保真星历的平滑延拓：ATD允许轨道设计师在交互式界面中调用低能动力学目录（如NRHO、Halo轨道及流形管），通过施加多节点变量约束与自适应网格细分，利用阻尼牛顿多重打靶法快速消除位置与速度间断点，使理论轨迹无缝收敛于包含日月摄动、行星引力及非球形引力的真实星历积分模型。
2. 模块化轨迹拼接与优化：支持低推力电推进弧段与多脉冲推进弧段的混合拼接，自动解算最优切换点，并能直接输出标准化轨道文件以对接高精度任务验证软件（如GMAT和STK）。
3. 空间任务方案论证加速：ATD在地月空间门户空间站Gateway轨道维持、ARTEMIS地月平动点探测及CAPSTONE立方星低能地月转移方案论证中发挥了关键支撑作用。

## 相关概念

- [通用任务分析工具（General Mission Analysis Tool, GMAT）](/glossary/other/gmat/)
- [系统工具包（Systems Tool Kit, STK）](/glossary/other/stk/)
- [轨道链（Orbit Chain）](/glossary/orbits/orbit-chain/)
- [参考轨道（Reference Orbit）](/glossary/navigation/reference-orbit/)

## 参考文献

- Folta D C, Pavlak T A, Howell K C, et al. Earth-Moon libration point orbit stationkeeping: theory, modeling, and operations. *Acta Astronautica*, 2014, 94(1): 421-433.
- Howell K C, Pavlak T A, Woodard M. Trajectory design and targeting in the Earth-Moon system using Adaptive Trajectory Design. *AAS/AIAA Space Flight Mechanics Meeting*, Charleston, SC, 2012: AAS 12-164.
