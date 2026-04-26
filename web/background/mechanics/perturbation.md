---
title: 摄动理论 (Perturbation Theory)
description: 摄动理论研究天体在主天体引力基础上受其他因素（第三体引力、大气阻力、太阳辐射压等）扰动下运动规律的理论框架。
keywords: 摄动理论, Perturbation Theory, 天体力学, 第三体引力, 大气阻力, 太阳辐射压
author: 天疆说
date: 2026-04-26
lastUpdated: 2026-04-26
permalink: /background/mechanics/perturbation/
---

# 摄动理论

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

摄动理论（Perturbation Theory）是研究天体在主天体引力基础上受其他因素扰动下运动规律的理论框架。在航天器轨道动力学中，摄动理论用于分析除中心天体引力以外的各种干扰因素对轨道的影响。

## 原理

摄动理论的基本思想是将作用在天体上的力分解为：

$$\mathbf{F} = \mathbf{F}_0 + \mathbf{F}_p$$

其中 $\mathbf{F}_0$ 为主天体引力（可精确求解），$\mathbf{F}_p$ 为摄动力（通常远小于主天体引力）。

### 小参数展开

引入小参数 $\varepsilon$，将天体的运动方程写为：

$$\ddot{\mathbf{r}} = \mathbf{F}_0(\mathbf{r}) + \varepsilon \mathbf{F}_p(\mathbf{r}, \dot{\mathbf{r}}, t)$$

通过在 $\varepsilon = 0$ 处对解进行泰勒展开，可以逐步求解各阶近似解。

### 常见摄动力

| 摄动类型 | 来源 | 量级 |
|:---|:---|:---|
| J2 项 | 地球非球形引力 | $10^{-3}$（低轨）|
| 第三体引力 | 月球、太阳 | $10^{-4}$~10^{-8} |
| 大气阻力 | 地球大气 | $10^{-7}$~10^{-10}（低轨）|
| 太阳辐射压 | 太阳光压 | $10^{-7}$~10^{-9} |
| 潮汐力 | 天体形变 | $10^{-10}$~10^{-12} |

## 在地月空间中的应用

- **J2 项摄动**：地球非球形引力（J2 项）对近地轨道寿命和升交点赤经漂移有显著影响，是LEO轨道设计必须考虑的因素
- **第三体引力**：对地月转移轨道和 L1/L2 附近轨道的长期稳定性有重要影响；第三体摄动是 NRHO 长期稳定性的关键因素之一
- **月球引力非球形**：月球引力场不均匀性（月球 J2 项）影响月球卫星的轨道寿命和轨道面演化
- **共振效应**：小行星带天体与探测器之间的引力摄动可被用于低能量转移轨道设计

## 相关概念

- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)
- [星历模型（Ephemeris Model）](/glossary/dynamics/ephemeris-model/)
- [希尔三体问题（Hill Three-Body Problem）](./hill-three-body/)

## 参考文献

- Vallado D A. Fundamentals of astrodynamics and applications[M]. Springer, 2007.
- Marchand B G, Howell K C. Asymptotic representation of the motion of chaotic quasi-periodic orbits about libration points[J]. Advances in Space Research, 2022.
