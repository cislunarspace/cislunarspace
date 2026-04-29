---
title: 双圆四体模型（Bicircular Four-Body Problem）
description: 详细解析双圆四体模型的定义、非自洽性问题、平衡点分析，以及在太阳引力摄动研究中的应用
keywords: 双圆四体模型, Bicircular Four-Body Problem, 四体问题, 太阳引力摄动, CR3BP, 平衡点, 地月空间
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 双圆四体模型（Bicircular Four-Body Problem）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 双圆四体模型详解 | 太阳引力摄动下的动力学分析
  description: 详细解析双圆四体模型的定义、非自洽性问题、平衡点分析，以及在太阳引力摄动研究中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 双圆四体模型详解 | 太阳引力摄动下的动力学分析
  description: 详细解析双圆四体模型的定义、非自洽性问题、平衡点分析，以及在太阳引力摄动研究中的应用
  image: /logo.png
permalink: /glossary/dynamics/bicircular-four-body/
---

# 双圆四体模型

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

双圆四体模型（Bicircular Four-Body Problem）是为考虑太阳引力对地月系统的影响而建立的四体动力学模型。该模型假设日-地-月系统可以分解为两个独立的圆型限制性三体问题：地球-月球圆型限制性三体系统和日-（地月质心）圆型限制性三体系统。

需要注意的是，双圆四体模型存在根本性的**非自洽问题**：两个三体模型相互独立，假设月球绕地月质心做圆周运动、地月质心绕日地月质心做圆周运动，但这种运动构型并不满足牛顿第二定律（即不存在精确的四体问题解对应这种构型）。尽管如此，该模型仍可作为分析太阳引力摄动下平衡点附近运动的有用近似工具。

## 核心要素

### 模型构型

双圆四体模型的运动构型包含以下要素：

1. **地月子系统**：月球绕地月质心做匀速圆周运动，形成第一个CRTBP
2. **日地子系统**：地月质心绕日地月系统质心做匀速圆周运动，形成第二个CRTBP
3. **测试粒子**：质量为零的探测器在四个天体的引力场中运动

在旋转坐标系下，测试粒子的运动方程可写为：

$$\ddot{\mathbf{r}} + 2\boldsymbol{\omega}_1 \times \dot{\mathbf{r}} + \boldsymbol{\omega}_1 \times (\boldsymbol{\omega}_1 \times \mathbf{r}) = -\nabla U_{4B}$$

其中 $U_{4B}$ 为四体引力势。

### 非自洽性分析

双圆四体模型的非自洽性体现在：

- **运动假设矛盾**：月球绕地月质心的圆运动和地月质心绕系统质心的圆运动不能同时精确满足
- **能量不守恒**：由于非自洽性，模型中不存在严格的能量积分
- **适用限制**：仅适用于短时间尺度的近似分析，长时间积分会累积误差

### 平衡点结构

双圆四体模型下的平衡点与纯CR3BP有所不同：

- 太阳引力的引入使得原CR3BP的五个平动点发生偏移
- 平衡点的稳定性特征也会随太阳位置的变化而改变
- 在某些太阳位置下，可能出现新的平衡点或原有平衡点消失

### 应用场景

双圆四体模型主要用于：

1. **定性分析**：评估太阳引力对地月轨道的摄动影响
2. **初始设计**：在进行精确星历模型设计前提供初步的轨道构型
3. **平衡点研究**：分析太阳引力对地月平动点轨道的影响
4. **教学演示**：直观展示多体引力摄动的物理效应

## 相关概念

- [圆型限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)
- [拟双圆四体模型（Quasi-Bicircular Four-Body Problem）](/glossary/dynamics/quasi-bicircular-four-body/)
- [平动点（Libration Point）](/glossary/dynamics/libration-point/)
- [星历模型（Ephemeris Model）](/glossary/dynamics/ephemeris-model/)

## 参考文献

- Simó C, Gómez G, Llibre J, et al. Station keeping of a quasi-periodic halo orbit using invariant manifolds[C]. 2nd International Symposium on Spacecraft Flight Dynamics, 1986.
- Gómez G, Llibre J, Martínez R, et al. Dynamics and Mission Design Near Libration Point Orbits — Vol. 1: Fundamentals[M]. World Scientific, 2001.
- 刘林, 胡松杰, 王歆. 航天器轨道理论: 地月空间探测轨道设计[M]. 国防工业出版社, 2006.

## 应用价值

双圆四体模型为分析太阳引力对地月轨道的摄动影响提供了实用的近似工具。在地月空间任务设计中，该模型可用于评估太阳引力对平动点轨道稳定性的影响，为初始轨道构型设计提供定性参考。尽管存在非自洽性限制，双圆四体模型在短时间内仍具有较好的近似精度，是精确星历模型设计前进行快速参数扫描和概念验证的有效工具。
