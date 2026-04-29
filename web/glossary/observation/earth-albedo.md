---
title: 地球反照（Earth Albedo）
description: 详细解析地球反照的定义、反照率分布、计算模型及其对平流层飞艇底部蒙皮的加热效应
keywords: 地球反照, Earth Albedo, 反照率, 太阳反射, 地气系统, 热辐射, 云层反射
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 地球反照（Earth Albedo）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 地球反照（Earth Albedo）详解 | 术语定义
  description: 详细解析地球反照的定义、反照率分布、计算模型及其对平流层飞艇底部蒙皮的加热效应
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 地球反照（Earth Albedo）详解 | 术语定义
  description: 详细解析地球反照的定义、反照率分布、计算模型及其对平流层飞艇底部蒙皮的加热效应
  image: /logo.png
permalink: /glossary/observation/earth-albedo/
---

# 地球反照（Earth Albedo）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

地球反照是指地球大气和地表对入射太阳辐射的反射和散射返回太空的部分。地球反照率（Bond Albedo）约为 0.30，即约 30% 的入射太阳辐射被反射。对平流层飞艇而言，底部蒙皮接收的地球反照是重要的定向热输入。

## 反照率定义

### 行星反照率

$$A_{planet} = \frac{\text{反射辐射}}{\text{入射辐射}} = \frac{F_{reflected}}{F_{incoming}}$$

### 典型值

| 表面类型 | 反照率 |
|:---|:---|
| 海洋 | 0.05-0.15 |
| 森林 | 0.10-0.20 |
| 沙漠 | 0.25-0.40 |
| 冰雪 | 0.60-0.90 |
| 云层 | 0.40-0.80 |
| 全球平均 | 0.30 |

## 空间分布

### 纬度变化

| 纬度 | 平均反照率 | 主要贡献 |
|:---|:---|:---|
| 0-30° | ~0.25 | 海洋为主 |
| 30-60° | ~0.35 | 中纬度云带 |
| 60-90° | ~0.55 | 极地冰盖 |

### 时间变化

| 因素 | 影响 |
|:---|:---|
| 季节 | 极地冰盖季节性变化 |
| 云量 | 云覆盖变化 |
| 人类活动 | 气溶胶排放 |

## 对平流层飞艇的影响

### 热输入计算

底部蒙皮接收的地球反照辐射：

$$Q_{albedo} = \alpha_{skin} \cdot \rho_{earth} \cdot I_{sun} \cdot \cos\theta_{ground} \cdot A_{bottom}$$

其中：

| 参数 | 含义 |
|:---|:---|
| $\alpha_{skin}$ | 蒙皮吸收率 |
| $\rho_{earth}$ | 区域反照率 |
| $\theta_{ground}$ | 观察角度 |

### 夜间热源

地球反照在夜间为零，但地球自身的红外辐射（~240 K）持续存在：

$$Q_{IR,earth} = \varepsilon_{skin} \sigma T_{earth}^4 A_{proj}$$

## 计算模型

### 简化模型

假设各向同性反射：

$$Q_{albedo} = \alpha \cdot A_{planet} \cdot \frac{I_{sun}}{4} \cdot A_{proj}$$

### 方向性模型

考虑反射的角分布（主要向前散射）：

$$Q_{albedo}(\theta, \phi) = \alpha \cdot I_{sun} \cdot R(\theta, \phi) \cdot \cos\theta$$

## 相关概念

- [太阳辐射（Solar Radiation）](/glossary/observation/solar-radiation/)
- [热力学模型（Thermodynamic Model）](/glossary/dynamics/thermodynamic-model/)
- [红外辐射（Infrared Radiation）](/glossary/observation/infrared-radiation/)

## 参考文献

- Liou K N. An Introduction to Atmospheric Radiation[M]. Academic Press, 2023.
- Stephens G L, et al. Earth's Climate and Earth's Energy Budget[J]. Journal of Climate, 2024.