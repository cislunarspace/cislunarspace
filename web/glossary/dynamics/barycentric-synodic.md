---
title: 质心会合坐标系（Barycentric Synodic Coordinate System）
description: 详细解析质心会合坐标系的定义、与GRC的区别、在CR3BP分析中的应用
keywords: 质心会合坐标系, Barycentric Synodic, CR3BP, 限制性三体问题, 地月空间
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 质心会合坐标系
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 质心会合坐标系详解 | CR3BP标准坐标系
  description: 详细解析质心会合坐标系的定义、与GRC的区别、在CR3BP分析中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 质心会合坐标系详解 | CR3BP标准坐标系
  description: 详细解析质心会合坐标系的定义、与GRC的区别、在CR3BP分析中的应用
  image: /logo.png
permalink: /glossary/dynamics/barycentric-synodic/
---

# 质心会合坐标系（Barycentric Synodic Coordinate System）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文参考：钱霙婧(2014)《地月空间拟周期轨道上航天器自主导航与轨道保持研究》
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

质心会合坐标系（Barycentric Synodic Coordinate System）是以地月系统质心为原点建立的旋转坐标系，是研究圆形限制性三体问题（CR3BP）的标准坐标系。在 CR3BP 条件下，该坐标系也称为**地月系统质心会合坐标系**。

质心会合坐标系的 xₘ 轴由质心指向月心方向，zₘ 轴指向系统角速度方向（垂直于地月轨道平面），yₘ 轴与 xₘ、zₘ 轴构成右手直角坐标系。

## 坐标轴定义

| 轴 | 方向 | 说明 |
| :--- | :--- | :--- |
| **xₘ 轴** | 由地月质心指向月心 | 随月球公转旋转 |
| **zₘ 轴** | 指向系统角速度方向 | 垂直于地月轨道平面 |
| **yₘ 轴** | xₘ × zₘ | 与 xₘ、zₘ 构成右手系 |

## 与 GRC 的区别

| 特征 | 质心会合坐标系 | 地心瞬时会合坐标系（GRC） |
| :--- | :--- | :--- |
| **原点** | 地月系统质心 | 地球中心 |
| **x 轴指向** | 月心方向 | 月心方向 |
| **适用场景** | CR3BP 分析 | 真实星历条件下的轨道设计 |

质心会合坐标系以地月系统的共同质心为原点，更适合分析两个主天体同时受到第三体引力作用的运动。

## 在 CR3BP 中的应用

### 归一化单位

在质心会合坐标系中，CR3BP 常用的归一化单位为：

- **长度单位 [L]**：地月之间的距离
- **质量单位 [M]**：地球与月球质量之和
- **时间单位 [T]**：$\sqrt{[L]^3 / (G[M])}$

### 运动方程

在质心会合坐标系中，CR3BP 的运动方程具有标准形式：

$$\ddot{\boldsymbol{\rho}} - 2\boldsymbol{\Omega} \times \dot{\boldsymbol{\rho}} = \nabla U^*(\boldsymbol{\rho})$$

其中 $\boldsymbol{\Omega} = [0, 0, 1]^T$ 为角速度矢量（归一化后），$U^*(\boldsymbol{\rho})$ 为拟势能函数。

### 平动点位置

在质心会合坐标系中，L1、L2、L3 点位于 xₘ 轴上，L4、L5 点与地球、月球构成等边三角形。

## 局限性

质心会合坐标系基于 CR3BP 的假设：

1. 两个主天体绕质心作圆周运动
2. 质心为惯性点
3. 轨道平面在惯性空间固定

对于真实地月系统，月球轨道偏心率、太阳引力摄动等因素导致这些假设不完全成立，因此需要使用 GRC 或星历模型进行分析。

## 相关概念

- [地心瞬时会合坐标系（GRC）](/glossary/dynamics/grc/)
- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)
- [平动点（Libration Point）](/glossary/dynamics/libration-point/)
- [J2000地心赤道惯性坐标系](/glossary/dynamics/j2000-coordinate/)

## 参考文献

- 钱霙婧. 地月空间拟周期轨道上航天器自主导航与轨道保持研究[D]. 哈尔滨工业大学, 2014.
- Szebehely V. Theory of orbits: the restricted problem of three bodies[M]. Academic Press, 1968.
