---
title: 准零风层（Quasi-zero Wind Layer）
description: 详细解析准零风层的定义、高度范围、成因及其在平流层飞艇区域驻留中的利用策略
keywords: 准零风层, Quasi-zero Wind Layer, 平流层, 风场, 纬向风, 驻留高度, 临近空间
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 准零风层（Quasi-zero Wind Layer）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 准零风层（Quasi-zero Wind Layer）详解 | 术语定义
  description: 详细解析准零风层的定义、高度范围、成因及其在平流层飞艇区域驻留中的利用策略
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 准零风层（Quasi-zero Wind Layer）详解 | 术语定义
  description: 详细解析准零风层的定义、高度范围、成因及其在平流层飞艇区域驻留中的利用策略
  image: /logo.png
permalink: /glossary/observation/quasi-zero-wind-layer/
---

# 准零风层（Quasi-zero Wind Layer）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

准零风层（Quasi-zero Wind Layer, QZWL）是指在平流层底部（通常 18-25 km 高度）存在的风速显著低于上下层大气的特殊大气现象。这一高度层为平流层飞艇提供了相对稳定的驻留环境，是高空气球和飞艇的重要飞行空域。

## 高度范围

| 名称 | 高度范围 | 典型风速 |
| :--- | :--- | :--- |
| 对流层顶 | 10-18 km | 变化大 |
| 准零风层 | 18-25 km | <10 m/s |
| 西风急流 | 25-35 km | 30-100 m/s |
| 平流层中层 | 35-50 km | 10-50 m/s |

## 成因分析

### 热力学成因

准零风层的形成与以下因素有关：

| 因素 | 作用 |
| :--- | :--- |
| 温度梯度 | 平流层底部逆温层抑制湍流交换 |
| 臭氧层 | 臭氧吸收紫外线形成稳定层结 |
| 辐射平衡 | 昼夜加热差异小 |

### 风场结构

在准零风层中：

- 纬向风（东西向）接近零或Reversal
- 经向风（南北向）分量较小
- 湍流强度显著降低

## 风场特征

### 季节变化

| 季节 | QZWL 厚度 | 风速特征 |
| :--- | :--- | :--- |
| 夏季 | 较厚 | 东向风为主 |
| 冬季 | 较薄 | 西向风为主 |
| 春秋季 | 中等 | 过渡态 |

### 日变化

| 时段 | 风速 |
|:---|:---|
| 白天 | 略高 |
| 夜间 | 略低 |

## 在平流层飞艇中的应用

### 驻留高度选择

| 策略 | 优点 | 缺点 |
| :--- | :--- | :--- |
| QZWL 中心（~21 km） | 风速最小 | 气压低，浮力小 |
| QZWL 底部（~18 km） | 浮力充足 | 风速略高 |
| QZWL 顶部（~25 km） | 平衡方案 | 高度控制精度要求高 |

### 高度调度策略

利用 QZWL 上下边界风速差异进行高度调度：

```python
if current_wind > threshold:
    descend_to(QZWL_bottom)  # 较低风速层
else:
    maintain_current_altitude()
```

## 相关概念

- [纬向风（Zonal Wind）](/glossary/observation/zonal-wind/)
- [平流层飞艇（Stratospheric Airship）](/glossary/fundamentals/stratospheric-airship/)
- [区域驻留控制（Regional Station-keeping Control）](/glossary/dynamics/regional-station-keeping/)

## 参考文献

- Zhang L, et al. Quasi-zero Wind Layer Characteristics over East Asia[J]. Journal of Atmospheric Sciences, 2025.
- NOAA. US Standard Atmosphere 1976[M]. US Government Printing Office, 1976.
