---
title: 降阶动力学方程（Reduced-Order Dynamic Equations）
description: 详细解析降阶动力学方程的定义、在双基不变流形法中的应用、以及与Linstedt-Poincaré摄动法的结合
keywords: 降阶动力学方程, Reduced-order Dynamics, 双基不变流形, Legendre多项式, 非线性关系, 平动点轨道
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 降阶动力学方程（Reduced-Order Dynamic Equations）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 降阶动力学方程详解 | 平动点轨道设计
  description: 详细解析降阶动力学方程的定义、在双基不变流形法中的应用、以及与Linstedt-Poincaré摄动法的结合
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 降阶动力学方程详解 | 平动点轨道设计
  description: 详细解析降阶动力学方程的定义、在双基不变流形法中的应用、以及与Linstedt-Poincare摄动法的结合
  image: /logo.png
permalink: /glossary/dynamics/reduced-order-dynamics/
---

# 降阶动力学方程

> 本文编辑来源：郭建宇 (2020) "基于双基不变流形法的平动点轨道设计及保持策略研究"
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

降阶动力学方程（Reduced-Order Dynamic Equations）是通过双基不变流形方法得到的、阶数降低的动力学方程。该方程通过选取周期轨道两个主运动方向，将第三个方向的运动表示为前两个方向的非线性函数，从而实现相空间维数的降低。

## 理论基础

### 来源

在圆型限制性三体问题（CR3BP）中，平动点附近的周期轨道运动方程可以表示为高维非线性系统。双基不变流形法通过以下步骤实现降阶：

1. 选取两个方向运动作为主运动（通常为 $x$ 和 $y$ 方向）
2. 利用不变流形理论建立第三个方向（$z$ 方向）与主运动的关系
3. 通过 Legendre 多项式展开得到非线性多项式关系
4. 最终得到降阶的动力学方程

### 数学表达

设主运动方向的振幅为 $\rho_1, \rho_2$，则从属方向振幅 $\rho_3$ 可表示为：

$$\rho_3 = \sum_{i,j} c_{ij} \rho_1^i \rho_2^j$$

其中 $c_{ij}$ 为多项式系数，由系统动力学特性决定。

## 与 Linstedt-Poincaré 摄动法的结合

降阶动力学方程可与 Linstedt-Poincaré 摄动法结合使用：

1. 利用 Linstedt-Poincaré 摄动法求解降阶动力学方程
2. 得到 Halo 轨道和 Lissajous 轨道的三阶近似解析解
3. 以解析解为初值，通过轨道数值设计方法修正得到准确的周期轨道

## 应用价值

降阶动力学方程的主要应用包括：

- **轨道设计**：提供良好的初始猜测值，减少数值迭代次数
- **轨道保持**：多项式关系可作为约束条件进行实时轨道修正
- **动力学分析**：简化高维系统的分析难度，揭示轨道运动的内在规律

## 核心要素

### 数学定义
降阶动力学方程是通过双基不变流形方法，选取两个主运动方向，将第三个方向表示为非线性函数而得到的低阶动力学方程。

### 关键性质
降阶方程保留了周期轨道的主要动力学特性，同时大大降低了计算复杂度。多项式系数反映了系统的内在动力学结构。

### 数值方法
结合 Legendre 多项式展开和 Lindstedt-Poincaré 摄动法进行求解，得到多阶近似解析解。

## 相关概念

- [双基不变流形法](/glossary/dynamics/two-dominant-invariant-manifold/)
- [Lindstedt-Poincaré 摄动法](/glossary/dynamics/libration-point/)
- [Halo 轨道](/glossary/orbits/halo-orbit/)
- [Lissajous 轨道](/glossary/orbits/lissajous-orbit/)
- [圆型限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)

## 参考文献

- 郭建宇. 基于双基不变流形法的平动点轨道设计及保持策略研究[D]. 北京工业大学, 2020.
- Farquhar R W, Kamel A A. Quasi-periodic orbits about the collinear libration points[J]. Celestial Mechanics, 1973, 7(3): 267-289.
- Richardson D L. Analytic construction of periodic orbits about the collinear points[J]. Celestial Mechanics, 1980, 22(3): 241-253.