---
title: 双基不变流形法（Two-Dominant Invariant Manifold）
description: 详细解析双基不变流形法的定义、原理、在平动点周期轨道设计中的应用
keywords: 双基不变流形法, Two-Dominant Invariant Manifold, 主运动, 周期轨道, 降阶动力学, 非线性多项式关系, 轨道设计
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 双基不变流形法（Two-Dominant Invariant Manifold）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 双基不变流形法详解 | 平动点周期轨道设计方法
  description: 详细解析双基不变流形法的定义、原理、在平动点周期轨道设计中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 双基不变流形法详解 | 平动点周期轨道设计方法
  description: 详细解析双基不变流形法的定义、原理、在平动点周期轨道设计中的应用
  image: /logo.png
permalink: /glossary/dynamics/two-dominant-invariant-manifold/
---

# 双基不变流形法

> 本文编辑来源：郭建宇 (2020) "基于双基不变流形法的平动点轨道设计及保持策略研究"
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

双基不变流形法（Invariant Manifold Technique with Two Dominant Motions）是一种分析平动点附近周期轨道动力学特性的方法。该方法的核心思想是：选取周期轨道三个运动方向中的两个方向作为主运动，另一个方向的运动通过展开的多项式关系被表示出来，从而建立三个方向之间的非线性关系。

## 核心原理

### 主运动的选取

在平动点附近的周期轨道（如 Halo 轨道、Lissajous 轨道）中，运动可以分解为三个方向：

- $x$ 方向：沿两主天体连线方向
- $y$ 方向：垂直于连线方向
- $z$ 方向：垂直于运动平面方向

双基不变流形法选取其中两个方向作为主运动，通常选择 $x$ 和 $y$ 方向作为主运动（平面内运动），$z$ 方向作为从属运动。

### 非线性多项式关系

通过双基不变流形方法，可以得到非线性的多项式关系：

$$\rho_z = f(\rho_x, \rho_y)$$

其中 $\rho_i$ 表示各方向的运动振幅。这种非线性关系反映了周期轨道运动的内在动力学特性。

### 降阶动力学方程

利用振动理论对周期轨道进行分析，可以得到降阶的动力学方程。这种降阶处理大大简化了轨道设计和保持的计算复杂度。

## 与传统方法的对比

| 方法 | 特点 | 适用场景 |
|:---|:---|:---|
| 线性化方法 | 基于线性稳定性分析 | 小振幅轨道 |
| Lindstedt-Poincaré摄动法 | 提供解析近似解 | 初始猜测生成 |
| 双基不变流形法 | 建立非线性约束关系 | 轨道保持约束条件 |

## 应用价值

双基不变流形法的主要应用包括：

- **轨道设计**：利用多项式关系作为新的约束条件，应用于平动点周期轨道的数值设计
- **轨道保持**：通过多项式关系约束代替预设计标称轨道，实现更具实时性和张弛性的轨道保持
- **动力学分析**：揭示周期轨道三个方向运动之间的内在联系

## 核心要素

### 数学定义
双基不变流形法选取周期轨道两个方向运动作为主运动，另一个方向的运动通过展开的多项式关系表示，建立三个方向之间的非线性关系。

### 关键性质
非线性多项式关系可以反映周期轨道运动的内在动力学特性，且该关系可作为新的约束条件应用到轨道设计和平动点的轨道保持中。

### 数值方法
通过振动理论分析，结合 Legendre 多项式展开，得到降阶动力学方程和多阶多项式系数。

## 相关概念

- [降阶动力学方程](/glossary/dynamics/reduced-order-dynamics/)
- [Halo 轨道](/glossary/orbits/halo-orbit/)
- [Lissajous 轨道](/glossary/orbits/lissajous-orbit/)
- [平动点](/glossary/dynamics/libration-point/)
- [Lindstedt-Poincaré 摄动法](/glossary/dynamics/libration-point/)

## 参考文献

- 郭建宇. 基于双基不变流形法的平动点轨道设计及保持策略研究[D]. 北京工业大学, 2020.
- Shaw R G, Pierre C. Vibroacoustic response of engineering structures[R]. 1994.