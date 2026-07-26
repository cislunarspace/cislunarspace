---
title: L2点瞬时会合坐标系（L2-centered Rotating Coordinate System, LRC）
description: 详细解析L2点瞬时会合坐标系的定义、与GRC的关系、在L2点轨道设计中的应用
keywords: L2点瞬时会合坐标系, LRC, 平动点坐标系, L2轨道, 地月空间
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: L2点瞬时会合坐标系（LRC）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: L2点瞬时会合坐标系详解 | 平动点局部分析
  description: 详细解析L2点瞬时会合坐标系的定义、与GRC的关系、在L2点轨道设计中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: L2点瞬时会合坐标系详解 | 平动点局部分析
  description: 详细解析L2点瞬时会合坐标系的定义、与GRC的关系、在L2点轨道设计中的应用
  image: /logo.png
permalink: /glossary/dynamics/lrc/
---

# L2点瞬时会合坐标系（L2-centered Rotating Coordinate System, LRC）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文参考：钱霙婧(2014)《地月空间拟周期轨道上航天器自主导航与轨道保持研究》
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

L2点瞬时会合坐标系（L2-centered Rotating Coordinate System，简称 LRC），是以地月 L2 平动点为原点建立的局部旋转坐标系。LRC 的 x₂、z₂、y₂ 轴分别与地心瞬时会合坐标系（GRC）中的 x、z、y 轴平行。

在圆形限制性三体问题中，LRC 简化为 L2 点会合坐标系，原点位于 CR3BP 条件下固定的地月 L2 点；在真实星历条件下，LRC 的原点位于随时间变化的瞬时 L2 点。

## 坐标轴定义

| 轴 | 方向 | 说明 |
| :--- | :--- | :--- |
| **x₂ 轴** | 与 GRC 的 x 轴平行 | 沿地心-月心连线方向 |
| **z₂ 轴** | 与 GRC 的 z 轴平行 | 指向瞬时月球轨道角动量方向 |
| **y₂ 轴** | x₂ × z₂ | 与 x₂、z₂ 构成右手系 |

## 与 GRC 的关系

LRC 与 GRC 之间的转换关系为：

$$\mathbf{r}_{LRC} = \mathbf{r}_{GRC} - \mathbf{r}_{L2/GRC}$$

其中 $\mathbf{r}_{L2/GRC}$ 为 L2 点在 GRC 中的位置矢量。

由于 LRC 与 GRC 的轴向平行，两坐标系之间的转换仅涉及平移，不需要旋转。

## 在 L2 点轨道设计中的应用

### 局部线性化分析

在 LRC 中，L2 点位于坐标原点，便于对轨道进行局部线性化分析。L2 点的线性化动力学方程具有标准的 Hill 方程形式：

$$\ddot{\mathbf{r}} - 2\boldsymbol{\omega} \times \dot{\mathbf{r}} = \nabla^2 U(\mathbf{r}_L2) \cdot \mathbf{r}$$

### Halo 轨道设计

LRC 是设计地月 L2 点 Halo 轨道的常用坐标系。在 LRC 中，Halo 轨道的对称性更容易体现，便于利用解析解进行初始猜测。

### 与 J2000 的转换

LRC 与 J2000 地心惯性坐标系之间的转换需要两步：

1. LRC → GRC：通过 L2 点在 GRC 中的位置进行平移
2. GRC → J2000：利用月球的瞬时位置和角速度进行旋转

## LRC 与 L2 会合坐标系的区别

| 坐标系 | 原点位置 | 角速度 |
| :--- | :--- | :--- |
| **LRC** | 瞬时 L2 点（随时间变化） | 随月球轨道变化 |
| **L2 会合坐标系** | CR3BP 条件下的固定 L2 点 | 常值（CR3BP 假设） |

## 相关概念

- [地心瞬时会合坐标系（GRC）](/glossary/dynamics/grc/)
- [J2000地心赤道惯性坐标系](/glossary/dynamics/j2000-coordinate/)
- [平动点（Libration Point）](/glossary/dynamics/libration-point/)
- [Halo轨道](/glossary/orbits/halo-orbit/)
- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)

## 参考文献

- 钱霙婧. 地月空间拟周期轨道上航天器自主导航与轨道保持研究[D]. 哈尔滨工业大学, 2014.
- Farquhar R W, Kamel A A. Quasi-periodic orbits about the translunar libration point[J]. Celestial Mechanics, 1973.
