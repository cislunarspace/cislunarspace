---
title: 浮重失衡（Buoyancy-weight Imbalance）
description: 详细解析平流层飞艇浮重失衡的定义、成因分析、定量描述及主动控制策略
keywords: 浮重失衡, Buoyancy-weight Imbalance, 浮力, 重力, 静升力, 配平, 氦气泄漏, 热膨胀
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 浮重失衡（Buoyancy-weight Imbalance）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 浮重失衡（Buoyancy-weight Imbalance）详解 | 术语定义
  description: 详细解析平流层飞艇浮重失衡的定义、成因分析、定量描述及主动控制策略
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 浮重失衡（Buoyancy-weight Imbalance）详解 | 术语定义
  description: 详细解析平流层飞艇浮重失衡的定义、成因分析、定量描述及主动控制策略
  image: /logo.png
permalink: /glossary/dynamics/buoyancy-weight-imbalance/
---

# 浮重失衡（Buoyancy-weight Imbalance）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

浮重失衡是指平流层飞艇的浮力与重力不再相等的现象。当浮力大于重力时，飞艇上浮；反之则下沉。浮重失衡是平流层飞艇特有的核心挑战，直接影响高度维持和区域驻留能力。

## 定量描述

### 净浮力

$$F_{net} = B - mg = (\rho_{air} - \rho_{He}) V_{He} g - m_{total} g$$

### 浮重比

$$\eta = \frac{B}{mg} = \frac{(\rho_{air} - \rho_{He}) V_{He}}{m_{total}}$$

| $\eta$ 值 | 状态 |
| :--- | :--- |
| $\eta > 1$ | 上浮 |
| $\eta = 1$ | 配平平衡 |
| $\eta < 1$ | 下沉 |

### 失衡程度

$$\Delta B = B - mg = m_{total} g(\eta - 1)$$

## 成因分析

### 氦气相关

| 成因 | 影响 | 变化幅度 |
| :--- | :--- | :--- |
| 氦气泄漏 | 浮力减少 | -0.5%/月 |
| 温度日变化 | 浮力波动 | ±10%/日 |
| 压力高度变化 | 浮力变化 | 随高度递减 |

### 温度影响

氦气状态方程：

$$\rho_{He} = \frac{p_{He}}{RT_{He}}$$

温度升高导致密度降低：

$$\frac{\Delta B}{\Delta T_{He}} = -\frac{p_{He} V_{He} g}{R T_{He}^2}$$

### 重量相关

| 成因 | 影响 |
| :--- | :--- |
| 燃料消耗 | 重量减少 |
| 有效载荷变化 | 重量增减 |
| 冷凝水累积 | 重量增加 |

## 昼夜失衡规律

### 日周期

```text
浮力 B
  ^
  |    ___________
  |   /           \
  |  /             \
  | /               \
  |/                 \
  +-------------------> 时间
   6   12   18   24
```

| 时段 | 温度 | 浮力 | 失衡方向 |
| :--- | :--- | :--- | :--- |
| 白天 | 高 | 低 | 净上浮 |
| 夜间 | 低 | 高 | 净下沉 |

### 季节变化

| 季节 | 平均温度 | 影响 |
| :--- | :--- | :--- |
| 夏季 | 高 | 浮力偏低，需增加配重 |
| 冬季 | 低 | 浮力偏高，需卸载配重 |

## 控制策略

### 被动策略

| 方法 | 原理 |
| :--- | :--- |
| 超压设计 | 增加囊体内部压力减少温度敏感 |
| 副气囊 | 吸收体积变化维持压力恒定 |

### 主动策略

| 方法 | 原理 | 能耗 |
| :--- | :--- | :--- |
| 氦气充放 | 主动调节氦气量 | 中等 |
| 配重调节 | 抛放配重或压舱物 | 低 |
| 高度机动 | 通过高度变化调节浮力 | 较高 |
| 热调节 | 调节蒙皮/氦气温度 | 高 |

## 相关概念

- [热力耦合模型（Thermo-mechanical Coupling Model）](/glossary/dynamics/thermo-mechanical-coupling/)
- [区域驻留控制（Regional Station-keeping Control）](/glossary/dynamics/regional-station-keeping/)

## 参考文献

- Chen W, Wang H. Buoyancy Management for Long-endurance Stratospheric Airships[J]. AIAA Journal of Aerospace Systems, 2025.
- Jones M, et al. Helium Loss and Thermal Effects on Airship Performance[R]. DARPA Technical Report, 2024.
