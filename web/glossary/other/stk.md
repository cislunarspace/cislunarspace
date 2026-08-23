---
title: 系统工具包（Systems Tool Kit, STK）
description: 广泛应用于航天任务全生命周期设计、轨道力学仿真、传感器覆盖视距分析与多域协同评估的工业级商业软件套件。
keywords: 卫星工具包, Systems Tool Kit, STK, other
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 系统工具包（Systems Tool Kit, STK）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
permalink: /glossary/other/stk/
---

# 系统工具包（Systems Tool Kit, STK）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

系统工具包（Systems Tool Kit，原称卫星工具包 Satellite Tool Kit, STK）是由美国安西斯旗下AGI公司（Analytical Graphics, Inc.）开发的高保真航天与多域联合作战任务建模、轨道动力学仿真与空间态势感知商业软件平台。

## 物理机制与工程价值

STK在空间任务几何计算、动力学传播与多物理场协同仿真中具有深厚的工程应用积累：

1. 多精度轨道传播与深空机动模块：STK内置两行根数SGP4/SDP4传播器、高精度数值轨道传播器（HPOP）以及针对地月和深空任务的Astrogator专业机动飞行规划模块，支持多重打靶修正、低推力连续推进以及引力辅助飞越轨迹设计。
2. 复杂时空几何与视距链路分析：能够精确计算航天器对月面着陆点、地面测控站、空间中继星之间的视距几何访问窗口（Access）、天线增益与载噪比、太阳能帆板光照遮挡比率以及传感器有效覆盖重访周期。
3. 全寿命周期数字化工程协同：STK支持通过MATLAB、Python和C++ API进行无缝二次开发与自动化测试，广泛应用于地月空间通信导航星座构型论证、月球极区探测器着陆区光照评估及地月空间态势感知（SDA）系统的工程研制与飞行指控。

## 相关概念

- [通用任务分析工具（General Mission Analysis Tool, GMAT）](/glossary/other/gmat/)
- [自适应轨迹设计（Adaptive Trajectory Design, ATD）](/glossary/other/atd/)
- [GRAIL重力场模型（GRAIL Gravity Field Model）](/glossary/observation/grgm660prim/)
- [参考轨道（Reference Orbit）](/glossary/navigation/reference-orbit/)

## 参考文献

- Analytical Graphics, Inc. *STK Astrogator Users Guide*. Exton, PA: AGI, 2021.
- Folta D C, Pavlak T A, Howell K C, et al. Earth-Moon libration point orbit stationkeeping: theory, modeling, and operations. *Acta Astronautica*, 2014, 94(1): 421-433.
