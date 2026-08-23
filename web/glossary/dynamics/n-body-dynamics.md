---
title: n体动力学（N-Body Dynamics）
description: 描述n个具有引力相互作用质点在三维空间中位置与速度随时间演化的非线性力学模型。
keywords: n体动力学, N-Body Dynamics, 动力学, 摄动, 引力多体模型
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: n体动力学（N-Body Dynamics）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
permalink: /glossary/dynamics/n-body-dynamics/
---

# n体动力学（N-Body Dynamics）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

n体动力学（N-Body Dynamics）是天体力学与航天动力学的经典模型，用于精确描述 $n$ 个具有质量的质点在相互万有引力作用下的运动微分方程系统。对于地月空间航天器，通常采用限制性 $n$ 体模型，忽略航天器自身微小质量对主要天体（如地球、月球、太阳、木星等）的反作用。

## 物理机制与工程价值

在惯性坐标系中，受多个引力天体作用的航天器运动加速度方程为：

$$\ddot{\mathbf{r}} = -\sum_{i=1}^{n-1} \frac{\mu_i (\mathbf{r} - \mathbf{r}_i)}{\|\mathbf{r} - \mathbf{r}_i\|^3} + \mathbf{a}_{\text{non-grav}}$$

其中 $\mu_i$ 为各天体引力常数，$\mathbf{r}_i$ 为天体相对于坐标原点的位置矢量（基于 JPL DE 系列高精度行星历表获取），$\mathbf{a}_{\text{non-grav}}$ 为太阳光压（SRP）、月球非球形引力场等非保守摄动加速度。

相较于圆型限制性三体问题（CR3BP），高精度星历 $n$ 体模型引入了月球偏心率、太阳第三体引力摄动、黄白交角长期旋进等实际摄动因素。CR3BP 中的保守积分（雅可比积分）在 $n$ 体模型中不再严格守恒，周期轨道退化为拟周期或受摄拟轨道。

在工程实际任务中，地月转移轨迹规划、平动点长期驻留轨道保持、精确星历仿真与定轨滤波必须在全力 $n$ 体动力学框架下完成高保真度迭代与校验。

## 相关概念

- [全摄动模型（Full Force Model）](/glossary/dynamics/full-force-model/)
- [星历多体模型（Ephemeris-Based N-Body Model）](/glossary/dynamics/ephemeris-based-n-body-model/)
- [圆型限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)
- [无摄问题（Unperturbed Problem）](/glossary/dynamics/unperturbed-problem/)

## 参考文献

- Vaquero, M., & Howell, K. C. Leveraging resonant orbits in the circular restricted three-body problem for transfers in the Earth-Moon system. Journal of Guidance, Control, and Dynamics, 2014, 37(4): 1143-1157.
- Battin, R. H. An Introduction to the Mathematics and Methods of Astrodynamics. AIAA Education Series, 1999.
