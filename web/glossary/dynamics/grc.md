---
title: 地心瞬时会合坐标系（Geocentric Rotating Coordinate System, GRC）
description: 详细解析地心瞬时会合坐标系的定义、与J2000的关系、在地月平动点轨道设计中的应用
keywords: 地心瞬时会合坐标系, GRC, 旋转坐标系, 会合坐标系, 地月空间, 平动点
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 地心瞬时会合坐标系（GRC）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 地心瞬时会合坐标系详解 | 平动点轨道设计
  description: 详细解析地心瞬时会合坐标系的定义、与J2000的关系、在地月平动点轨道设计中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 地心瞬时会合坐标系详解 | 平动点轨道设计
  description: 详细解析地心瞬时会合坐标系的定义、与J2000的关系、在地月平动点轨道设计中的应用
  image: /logo.png
permalink: /glossary/dynamics/grc/
---

# 地心瞬时会合坐标系（Geocentric Rotating Coordinate System, GRC）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文参考：钱霙婧(2014)《地月空间拟周期轨道上航天器自主导航与轨道保持研究》
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

地心瞬时会合坐标系（Geocentric Rotating Coordinate System，简称 GRC），又称地心旋转坐标系，是地月空间轨道力学研究中常用的非惯性坐标系之一。GRC 以地心为原点，x 轴从地心指向月心，z 轴指向瞬时月球轨道角动量方向，y 轴与 x、z 轴构成右手直角坐标系。

在圆形限制性三体问题中，GRC 简化为地心会合坐标系，此时角速度方向固定；在真实星历条件下，由于月球轨道存在进动和章动，GRC 的角速度随时间变化。

## 坐标轴定义

| 轴 | 方向 | 说明 |
| :--- | :--- | :--- |
| **x 轴** | 从地心指向月心 | 随月球位置实时变化 |
| **z 轴** | 指向瞬时月球轨道角动量方向 | 垂直于月球轨道平面 |
| **y 轴** | x × z | 与 x、z 构成右手系 |

## 与 J2000 惯性坐标系的关系

GRC 与 J2000 地心惯性坐标系之间的转换涉及：

1. **月球位置**：通过星历数据获取月球在 J2000 系中的位置 $\mathbf{R}_M$
2. **月球速度**：通过星历数据获取月球在 J2000 系中的速度 $\mathbf{V}_M$
3. **角速度计算**：$\boldsymbol{\omega} = \mathbf{R}_M \times \mathbf{V}_M / |\mathbf{R}_M|^2$

转换矩阵由月球的位置和速度矢量确定。

## 在轨道设计中的应用

### 会合坐标系的动力学优势

在地心会合坐标系中，平动点问题可以简化为旋转坐标系中的受引力问题。CR3BP 的运动方程在 GRC 中具有简洁的形式：

$$\ddot{\mathbf{r}} - 2\boldsymbol{\omega} \times \dot{\mathbf{r}} = \nabla U$$

其中 $\boldsymbol{\omega}$ 为角速度矢量，$U$ 为引力势函数。

### 瞬时平动点

在 GRC 中，平动点的位置是时间的函数（瞬时平动点），因为月球的轨道运动导致 x 轴方向持续变化。这与 CR3BP 中固定的平动点位置不同。

### 坐标转换注意事项

钱霙婧(2014)指出，传统方法在进行 GRC 与 J2000 之间的坐标转换时，对角速度做了二体假设，这在某些情况下会引入误差。

## GRC 与其他坐标系

| 坐标系 | 原点 | 特点 |
| :--- | :--- | :--- |
| **GRC** | 地心 | x轴指向月心，z轴指月球轨道角动量 |
| **LRC** | L2点 | x、z、y轴与GRC平行 |
| **质心会合坐标系** | 地月质心 | 用于CR3BP分析 |
| **J2000** | 地心 | 惯性系，X轴指向平春分点 |

## 相关概念

- [J2000地心赤道惯性坐标系](/glossary/dynamics/j2000-coordinate/)
- [L2点瞬时会合坐标系（LRC）](/glossary/dynamics/lrc/)
- [质心会合坐标系](/glossary/dynamics/barycentric-synodic/)
- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)
- [星历模型（Ephemeris Model）](/glossary/dynamics/ephemeris-model/)

## 参考文献

- 钱霙婧. 地月空间拟周期轨道上航天器自主导航与轨道保持研究[D]. 哈尔滨工业大学, 2014.
- Szebehely V. Theory of orbits: the restricted problem of three bodies[M]. Academic Press, 1968.
