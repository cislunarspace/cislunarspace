---
title: 静升力（Static Lift）
description: 详细解析静升力的定义、物理原理、计算公式及其在平流层飞艇设计中的核心作用
keywords: 静升力, Static Lift, 浮力, 阿基米德原理, 氦气, 轻于空气, Archimedes Principle
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 静升力（Static Lift）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 静升力（Static Lift）详解 | 术语定义
  description: 详细解析静升力的定义、物理原理、计算公式及其在平流层飞艇设计中的核心作用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 静升力（Static Lift）详解 | 术语定义
  description: 详细解析静升力的定义、物理原理、计算公式及其在平流层飞艇设计中的核心作用
  image: /logo.png
permalink: /glossary/dynamics/static-lift/
---

# 静升力（Static Lift）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

静升力是轻于空气（LTA）飞行器依靠比空气密度小的气体（氦气或热空气）产生的浮力。根据阿基米德原理，浸入流体的物体受到等于其排开流体重量的浮力。对于平流层飞艇，静升力是维持高度的核心物理机制。

## 物理原理

### 阿基米德原理

$$B = \rho_{air} V_{displaced} g$$

其中 $V_{displaced} = V_{He}$（氦气体积）。

### 净静升力

由于氦气密度小于空气：

$$B = \rho_{air} V_{He} g - \rho_{He} V_{He} g = (\rho_{air} - \rho_{He}) V_{He} g$$

### 静升力系数

$$C_{lift} = \frac{B}{\frac{1}{2}\rho_{air} V_{airspeed}^2 S}$$

对于 LTA 飞行器，$C_{lift}$ 定义不同于常规飞机。

## 影响因素

### 大气密度

大气密度随高度指数递减：

$$\rho_{air}(h) = \rho_0 e^{-h/H}$$

其中 $H \approx 7.5$ km（标高）。

### 氦气密度

氦气状态方程：

$$\rho_{He} = \frac{p_{He}}{RT_{He}} = \frac{\rho_{air} \cdot T_{air}}{T_{He}} \cdot \frac{p_{He}}{p_{air}}$$

### 高度对静升力的影响

| 高度 | $\rho_{air}$ | $\rho_{He}$ | 静升力 |
| :--- | :--- | :--- | :--- |
| 0 km | 1.225 kg/m³ | 0.169 kg/m³ | 100% |
| 10 km | 0.414 kg/m³ | 0.057 kg/m³ | 34% |
| 20 km | 0.089 kg/m³ | 0.012 kg/m³ | 7.3% |

## 设计计算

### 所需氦气体积

给定有效载荷重量 $m_{payload}$ 和飞行高度 $h$：

$$V_{He} = \frac{m_{total} g}{(\rho_{air}(h) - \rho_{He}(h)) g} = \frac{m_{total}}{\rho_{air}(h) - \rho_{He}(h)}$$

### 氦气填充率

$$\chi = \frac{V_{He}}{V_{envelope}} \times 100\%$$

典型值：80-95%

## 静升效率

静升效率描述单位体积氦气产生的升力：

$$\eta_{lift} = \frac{B}{V_{He}} = (\rho_{air} - \rho_{He}) g$$

### 与热气的比较

| 气体 | 密度比 $\rho_g/\rho_{air}$ | 静升效率比 |
| :--- | :--- | :--- |
| 氦气 | ~0.138 | 86% |
| 热空气（ΔT=100K） | ~0.76 | 24% |

## 相关概念

- [浮重失衡（Buoyancy-weight Imbalance）](/glossary/dynamics/buoyancy-weight-imbalance/)
- [热力耦合模型（Thermo-mechanical Coupling Model）](/glossary/dynamics/thermo-mechanical-coupling/)
- [平流层飞艇（Stratospheric Airship）](/glossary/fundamentals/stratospheric-airship/)

## 参考文献

- 杜耀峰, 刘伟. 浮空器原理[M]. 航空工业出版社, 2024.
- Cook M V. Airship Technology[M]. Cambridge University Press, 2023.
