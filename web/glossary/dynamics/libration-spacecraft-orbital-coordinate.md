---
title: 平动点飞行器轨道坐标系（Libration Point Spacecraft Orbital Coordinate System）
description: 详细解析平动点飞行器轨道坐标系的定义、坐标轴方向及其在导航与轨道保持中的应用
keywords: 平动点飞行器轨道坐标系, 轨道坐标系, 航天器坐标系, 平动点
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 平动点飞行器轨道坐标系
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 平动点飞行器轨道坐标系详解 | 导航基准
  description: 详细解析平动点飞行器轨道坐标系的定义、坐标轴方向及其在导航与轨道保持中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 平动点飞行器轨道坐标系详解 | 导航基准
  description: 详细解析平动点飞行器轨道坐标系的定义、坐标轴方向及其在导航与轨道保持中的应用
  image: /logo.png
permalink: /glossary/dynamics/libration-spacecraft-orbital-coordinate/
---

# 平动点飞行器轨道坐标系（Libration Point Spacecraft Orbital Coordinate System）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文参考：钱霙婧(2014)《地月空间拟周期轨道上航天器自主导航与轨道保持研究》
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

平动点飞行器轨道坐标系（$\mathcal{O}_o - X_o Y_o Z_o$）是以飞行器质心为原点建立的局部坐标系，专门用于描述平动点轨道附近航天器的运动。该坐标系在轨道设计和轨道保持研究中具有重要作用。

## 坐标轴定义

| 轴 | 方向 | 说明 |
|:---|:---|:---|
| **Z₀ 轴** | 由飞行器质心指向中心天体质心方向 | 沿径向指向 |
| **X₀ 轴** | 在瞬时轨道平面内垂直于 Z₀ 轴，指向速度方向 | 沿轨道切向 |
| **Y₀ 轴** | 与瞬时轨道平面的法线平行 | 与 X₀、Z₀ 构成右手系 |

## 几何特性

平动点飞行器轨道坐标系具有以下特性：

1. **随动性**：坐标系随航天器在轨道上运动而移动，原点跟随航天器位置变化
2. **轨道自适应**：Z₀ 轴始终指向中心天体（地球），X₀ 轴指向速度方向
3. **局部性**：是描述航天器相对轨道运动的局部坐标系

## 在导航与轨道保持中的应用

### 轨道偏差表示

在轨道坐标系中，航天器相对于标称轨道的偏差可以分解为：

- **径向偏差**：Z₀ 方向分量
- **切向偏差**：X₀ 方向分量
- **法向偏差**：Y₀ 方向分量

这种分解方式便于理解轨道偏差的物理意义，并为轨道控制提供直观的参考方向。

### 脉冲机动设计

在轨道保持中，脉冲机动的方向通常在轨道坐标系中表示：

- **径向脉冲**：沿 Z₀ 轴方向
- **切向脉冲**：沿 X₀ 轴方向
- **法向脉冲**：沿 Y₀ 轴方向

### 状态表示

轨道坐标系中的状态向量便于与轨道根数建立对应关系，简化轨道动力学分析。

## 与其他坐标系的关系

| 坐标系 | 原点 | 用途 |
|:---|:---|:---|
| **轨道坐标系** | 飞行器质心 | 描述相对轨道运动 |
| **本体坐标系** | 飞行器质心 | 描述姿态和敏感器安装 |
| **GRC/LRC** | 地心/L2点 | 描述绝对位置和速度 |

## 相关概念

- [平动点飞行器本体坐标系](/glossary/dynamics/libration-spacecraft-body-coordinate/)
- [地心瞬时会合坐标系（GRC）](/glossary/dynamics/grc/)
- [轨道保持（Orbit Keeping）](/glossary/orbits/orbit-keeping/)

## 参考文献

- 钱霙婧. 地月空间拟周期轨道上航天器自主导航与轨道保持研究[D]. 哈尔滨工业大学, 2014.