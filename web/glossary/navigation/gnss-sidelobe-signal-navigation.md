---
title: GNSS旁瓣信号导航（GNSS Sidelobe Signal Navigation）
description: 高轨及地月空间航天器跨越高空地球遮挡边缘接收导航卫星发射天线旁瓣微弱辐射信号实现自主定位与授时的导航体制。
keywords: GNSS旁瓣信号导航, GNSS Sidelobe Signal Navigation, 自主导航, 旁瓣信号, 地月空间PNT
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: GNSS旁瓣信号导航（GNSS Sidelobe Signal Navigation）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
permalink: /glossary/navigation/gnss-sidelobe-signal-navigation/
---

# GNSS旁瓣信号导航（GNSS Sidelobe Signal Navigation）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

GNSS旁瓣信号导航（GNSS Sidelobe Signal Navigation）是指运行在地球同步轨道（GEO）以上、月球轨道乃至地月平动点空间区域的高轨航天器，利用星载超高灵敏度导航接收机，越过地球遮挡边缘捕获并跟踪地球中高轨导航卫星群（如 GPS、北斗、Galileo 等）发射天线波束主瓣外侧旁瓣（Sidelobe）微弱射频辐射信号，从而解算自身绝对三维位置、速度及星载时钟偏差的深空自主导航技术。

## 物理机制与工程价值

常规 GNSS 卫星的天线主瓣主要指向地球表面及低地球轨道（高度小于 3000-6000 km），其半主瓣角一般在 20 度以内。当航天器运行至地球同步轨道乃至地月空间（距地球数万至数十万公里）时，地球遮挡了大部分对侧主瓣信号。

GNSS旁瓣信号导航的物理特征与工程价值包括：

1. **信号特征与高灵敏度捕获**：旁瓣信号发射增益通常比主瓣低 10-20 dB，且跨越 40 万公里自由空间衰减后，到达地月空间的信号载噪比极低（$C/N_0$ 可低至 15-20 dB-Hz）。需依赖星载高增益天线、弱信号长相干积分及开环矢量跟踪解调技术；
2. **多星非对称几何构型**：在月球距离处，所有可见 GNSS 卫星均集中在地球边缘张角极小的狭窄视场内，单点定位几何精度因子（GDOP）严重退化，必须结合高精度轨道动力学滤波（如扩展卡尔曼滤波或无迹卡尔曼滤波）进行长时间轨道状态平滑；
3. **低成本全自主支撑**：该技术无需在月球轨道重新部署高成本专用导航星座，已在我国嫦娥五号轨道器、美国 MMS 编队任务及深空门户（Gateway）前期论证中验证了地月转移段数十米至数百米级的自主定轨能力。

该技术是现阶段地月空间航天器实现轻量化、低成本自主定轨与微秒级自主授时的关键支撑手段。

## 相关概念

- [地月空间卫星导航系统（Cislunar Space Satellite Navigation System）](/glossary/navigation/cislunar-space-satellite-navigation-system/)
- [深空导航星座（Deep-Space Navigation Constellation）](/glossary/navigation/deep-space-navigation-constellation/)
- [无迹卡尔曼滤波（UKF）](/glossary/fundamentals/ukf/)
- [双向对发星间测距（Bidirectional Inter-Satellite Ranging）](/glossary/navigation/bidirectional-inter-satellite-ranging/)

## 参考文献

- 丛佃伟, 郑晋生, 高为广, 等. 地月空间航天器自主导航技术及研究进展. 宇航学报, 2025, 46(1): 16-30.
- Moreau, M. C., Davis, E. P., Carpenter, J. R., et al. Results from the GPS navigation experiment on the High Energy Transient Explorer (HETE-2) satellite. Proceedings of the ION GPS, 2002: 12-24.
