---
title: 转移族（Transfer Family）
description: 在多体轨道力学中，具有相同拓扑构型、动力学连通机制并通过参数延拓生成的连续转移轨迹集合。
keywords: 转移族, Transfer Family, 轨道, 平动点, Halo轨道
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 转移族（Transfer Family）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
permalink: /glossary/orbits/transfer-family/
---

# 转移族（Transfer Family）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

转移族（Transfer Family）指在限制性三体问题动力学框架下，起点属于某一类特定初始轨道构型（如近地停泊轨道或拉格朗日点轨道）、终点切入目标周期轨道（如远距离逆行轨道DRO或Halo轨道），具有相同空间拓扑对称性与多脉冲机动特征，并通过数值微分延拓算法在能量常数、飞行时间或轨道几何参数连续变化下生成的一整族转移轨迹解集。

## 物理机制与工程价值

转移族概念体现了深空轨道设计从单条孤立轨迹寻优向全局相空间解流形刻画的范式演进：

1. 微分延拓与流形探索：通过从单条收敛的基准转移轨迹（种子解）出发，利用拟牛顿法结合切线延拓或伪弧长延拓算法，系统遍历雅可比能量常数、近地点高度、出发冲量等约束变量，可高效绘制出整个设计空间的全局帕累托解簇。
2. 动力学分岔与轨道跃迁：转移族往往与相空间中的不稳定共振轨道族或返回周期轨道存在紧密关联。在特定分岔临界点处，不同转移族之间可发生能量交换与拓扑重组，从而揭示出双脉冲、多脉冲甚至零脉冲低能跃迁的新航线。
3. 任务弹道方案快速比选：转移族数据库为载人登月、小行星防御与月球采样返回提供了涵盖飞行时间（TOF）从数天到数月、速度增量（Delta-V）从数百到数千米/秒的完整备选谱系。

## 相关概念

- [最小能量地月转移（Minimum-Energy Cislunar Transfer）](/glossary/orbits/minimum-energy-cislunar-transfer/)
- [轨道链（Orbit Chain）](/glossary/orbits/orbit-chain/)
- [相切（Tangential）](/glossary/orbits/tangential/)
- [有效飞行时间（Effective Time of Flight, ETOF）](/glossary/orbits/effective-time-of-flight/)

## 参考文献

- Scott C, Spencer D B. Optimal transfers to distant retrograde orbits using invariant manifolds. *Journal of Guidance, Control, and Dynamics*, 2010, 33(5): 1599-1607.
- Ren Y, Shan J. Low-thrust trajectory optimization between Earth-Moon halo orbits and distant retrograde orbits. *Astrodynamics*, 2020, 4(3): 223-238.
