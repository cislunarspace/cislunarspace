---
title: 太阳辐射（Solar Radiation）
description: 详细解析太阳辐射的基本特性、频谱分布、日照模型及其对平流层飞艇热力学的影响
keywords: 太阳辐射, Solar Radiation, 太阳常数, 太阳辐照, 日照模型, 紫外辐射, 热力学
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 太阳辐射（Solar Radiation）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 太阳辐射（Solar Radiation）详解 | 术语定义
  description: 详细解析太阳辐射的基本特性、频谱分布、日照模型及其对平流层飞艇热力学的影响
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 太阳辐射（Solar Radiation）详解 | 术语定义
  description: 详细解析太阳辐射的基本特性、频谱分布、日照模型及其对平流层飞艇热力学的影响
  image: /logo.png
permalink: /glossary/observation/solar-radiation/
---

# 太阳辐射（Solar Radiation）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

太阳辐射是来自太阳的电磁波能量传递，是平流层飞艇热输入的最主要来源。太阳辐射强度随日地距离、大气透明度和太阳高度角变化，直接影响飞艇蒙皮和内部氦气的热状态，进而影响浮力。

## 基本参数

### 太阳常数

地球大气层外的平均太阳辐照度：

$$I_{sun} = 1361 \pm 1 \text{ W/m}^2$$

### 日地天文单位

$$1 \text{ AU} = 1.496 \times 10^{11} \text{ m}$$

## 频谱分布

| 波段 | 波长范围 | 能量占比 | 对飞艇影响 |
|:---|:---|:---|:---|
| 紫外（UV） | <400 nm | ~7% | 蒙皮老化 |
| 可见光（Vis） | 400-700 nm | ~47% | 主要热源 |
| 近红外（NIR） | 700-2500 nm | ~46% | 热效应 |

### 大气层外光谱辐照度

$$E_\lambda(\lambda) = \frac{I_{sun}}{4\pi d_{AU}^2} \cdot S_\lambda(\lambda)$$

## 日照模型

### 大气层外辐射

$$I_{TOA} = I_{sun} \cdot \left(\frac{1 \text{ AU}}{d_{AU}}\right)^2 \cdot \cos\theta_z$$

其中 $\theta_z$ 为天顶角。

### 晴天大气透射

$$I_{GHI} = I_{DNI} \cos\theta_z + I_{DIF}$$

| 辐射分量 | 描述 |
|:---|:---|
| 直接辐射（DNI） | 来自太阳盘面的定向辐射 |
| 散射辐射（DIF） | 大气散射的漫射辐射 |
| 总辐射（GHI） | 水平面上总辐射 |

## 高度效应

### 大气质量

$$AM = \frac{1}{\cos\theta_z}$$（近似）

精确公式（Plane Parallel）：

$$AM = \sqrt{\left(\frac{R_E + h}{R_E}\right)^2 - \sin^2\theta_z} - \frac{R_E + h}{R_E} \sin\theta_z$$

### 20 km 高度辐射

| 辐射分量 | 强度 | 说明 |
|:---|:---|:---|
| 直接辐射 | ~1100 W/m² | 透射增强 |
| 散射辐射 | ~50 W/m² | 大气稀薄 |
| 总辐射 | ~1150 W/m² | 高于地面 |

## 对平流层飞艇的影响

### 热输入

蒙皮吸收的太阳辐射：

$$Q_{solar} = \alpha_{skin} \cdot I_{eff} \cdot A_{proj}$$

其中 $A_{proj}$ 为投影面积，$\alpha_{skin}$ 为蒙皮吸收率。

### 日变化

```
Q_solar
  ^
  |     *
  |    /|\
  |   / | \
  |  /  |  \
  | /   |   \
  +------------------> 时间
   6   12   18   24
```

| 时段 | 辐射特征 |
|:---|:---|
| 正午 | 最大，$T_{He}$ 峰值 |
| 日出/日落 | 斜入射，辐射量减少 |
| 夜间 | 无太阳辐射，靠白天储热 |

## 相关概念

- [地球反照（Earth Albedo）](/glossary/observation/earth-albedo/)
- [热力学模型（Thermodynamic Model）](/glossary/dynamics/thermodynamic-model/)
- [热力耦合模型（Thermo-mechanical Coupling Model）](/glossary/dynamics/thermo-mechanical-coupling/)

## 参考文献

- Duffie J A, Beckman W A. Solar Engineering of Thermal Processes[M]. Wiley, 2024.
- NASA. ASTM E-490 Solar Constant[M]. ASTM International, 2023.