---
title: 圆形限制性三体问题(CR3BP)
description: 详细解析圆形限制性三体问题 CR3BP 模型的定义、数学原理、在地月空间中的应用及航天器轨道设计方法
keywords: 圆形限制性三体问题, CR3BP, 地月空间动力学, 平动点, 航天器轨道设计, 限制性三体问题, Jacobi常数, 零速度曲面
author: 天疆说
date: 2026-03-07
lastUpdated: 2026-04-04
wechatShare:
  title: 圆形限制性三体问题 CR3BP
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 圆形限制性三体问题 CR3BP 模型详解 - 地月空间动力学基础
  description: 详细解析圆形限制性三体问题 CR3BP 模型的定义、数学原理、在地月空间中的应用及航天器轨道设计方法
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 圆形限制性三体问题 CR3BP 模型详解 - 地月空间动力学基础
  description: 详细解析圆形限制性三体问题 CR3BP 模型的定义、数学原理、在地月空间中的应用及航天器轨道设计方法
  image: /logo.png
permalink: /glossary/cr3bp/
---

# 圆形限制性三体问题

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

圆型限制性三体问题模型（Circular Restricted Three-Body Problem，CRTBP）是深空探测中最基本的动力学模型之一，也是最常用的模型，描述了一个质量可忽略的小天体在两大天体引力作用下的运动状态。假设两大天体为质点，围绕二者的共同质心做圆周运动。在地月空间中，两大天体即为地球和月球。该模型可以有效地研究平动点附近动力学特性与相空间结构。

## 坐标系与归一化

CRTBP 通常在**地月会合坐标系**（地月质心旋转坐标系）中研究。以两个主天体 $P_1$（地球）和 $P_2$（月球）的公共质心为坐标原点 $O$，$P_1$ 指向 $P_2$ 的延长线为 $x$ 轴，$y$ 轴与 $x$ 轴垂直，构成右手坐标系。

为方便计算，引入无量纲化处理：

- 特征质量 $M^* = m_1 + m_2$
- 特征长度 $L^* = \overline{P_1 P_2}$（地月平均距离）
- 特征时间 $T^* = \sqrt{L^{*3}/GM^*} = \omega^{-1}$

质量参数定义为 $\mu = m_2/(m_1 + m_2)$，其中 $m_2 < m_1$。

## 动力学方程

在归一化后的质心旋转坐标系下，CRTBP 的动力学方程为：

$$
\\begin{cases}
\\ddot{x} - 2\\dot{y} = -\\dfrac{(1-\\mu)(x+\\mu)}{r_1^3} - \\dfrac{\\mu(x-1+\\mu)}{r_2^3} + x \\\\[1em]
\\ddot{y} + 2\\dot{x} = -\\dfrac{(1-\\mu)y}{r_1^3} - \\dfrac{\\mu y}{r_2^3} + y \\\\[1em]
\\ddot{z} = -\\dfrac{(1-\\mu)z}{r_1^3} - \\dfrac{\\mu z}{r_2^3}
\\end{cases}
$$

其中：

$$
r_1 = \\sqrt{(x+\\mu)^2 + y^2 + z^2}, \\quad r_2 = \\sqrt{(x+\\mu-1)^2 + y^2 + z^2}
$$

方程中 $-2\dot{y}$ 和 $2\dot{x}$ 为科里奥利力项，$x$ 和 $y$ 项为离心力项。

## Jacobi 常数与零速度曲面

1836 年，Jacobi 发现 CRTBP 在旋转坐标系下存在一个能量积分（Jacobi 常数 $C$），是 CRTBP 中唯一存在的积分常数：

$$
C = 2\\Omega - v^2
$$

其中 $v^2 = \dot{x}^2 + \dot{y}^2 + \dot{z}^2$，有效势函数为：

$$
\\Omega = \\frac{x^2 + y^2}{2} + \\frac{1-\\mu}{r_1} + \\frac{\\mu}{r_2}
$$

令速度 $v = 0$，可得曲面方程 $2\Omega(x,y,z) = C$，即**零速度曲面**。零速度曲面的结构随 Jacobi 常数 $C$ 的变化而变化：

| Jacobi 常数范围 | 探测器运动区域 |
|:---|:---|
| $C > C_1$ | 只能在两个主天体各自附近运动 |
| $C_1 > C > C_2$ | 可经 $L_1$ 实现两天体附近空间的转移 |
| $C_2 > C > C_3$ | 可经 $L_2$ 点进入外部空间 |
| $C_3 > C$ | 可从 $L_3$ 点进入外部空间 |

Jacobi 常数和零速度曲面是描述三体系统内轨道运动的重要指标，也是任务可行性分析的基本工具。

## 相关概念

- 平面圆形限制性三体问题模型（Planar CRTBP）
- 空间圆形限制性三体问题模型（Spatial CRTBP）
- 椭圆限制性三体问题模型（ERTBP）
- 平面椭圆限制性三体问题模型
- 空间椭圆限制性三体问题模型
- Hill 三体问题（HTBP）：CRTBP 的特殊情况，坐标中心移至较小主天体
- [拟双圆四体问题（QBCP）](/glossary/qbcp/)：在 CRTBP 基础上引入太阳摄动的自洽模型

## 参考文献

- 张仁勇. 限制性三体问题周期轨道研究综述[J]. 2022.
- 侯锡云. 平动点的动力学特征及其应用[M]. 2008.
- 徐明. 基于平动点理论的航天器轨道动力学与控制研究[D]. 2008.
