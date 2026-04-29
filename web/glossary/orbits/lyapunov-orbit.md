---
title: Lyapunov 轨道（Lyapunov Orbit）
description: 详细解析Lyapunov轨道的定义、平面周期特性、与Halo轨道的关系及其在平动点动力学研究中的基础作用
keywords: Lyapunov轨道, Lyapunov Orbit, 平动点, 平面周期轨道, Halo轨道, 三体问题, 轨道动力学
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Lyapunov 轨道（Lyapunov Orbit）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: Lyapunov 轨道（Lyapunov Orbit）详解 | 平动点平面周期轨道
  description: 详细解析Lyapunov轨道的定义、平面周期特性、与Halo轨道的关系及其在平动点动力学研究中的基础作用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Lyapunov 轨道（Lyapunov Orbit）详解 | 平动点平面周期轨道
  description: 详细解析Lyapunov轨道的定义、平面周期特性、与Halo轨道的关系及其在平动点动力学研究中的基础作用
  image: /logo.png
permalink: /glossary/orbits/lyapunov-orbit/
---

# Lyapunov 轨道（Lyapunov Orbit）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

Lyapunov 轨道（Lyapunov Orbit）是**位于平动点附近平面内的周期轨道族**，以俄国数学家亚历山大·李雅普诺夫（Aleksandr Lyapunov）命名。Lyapunov 轨道是 Halo 轨道在平面内的对应——当 Halo 轨道的 $z$ 方向振幅趋于零时，三维的 Halo 轨道退化为平面内的 Lyapunov 轨道。Lyapunov 轨道是研究平动点动力学的基础轨道，为理解更复杂的三维轨道提供了理论起点。

## 核心要素

### Lyapunov 轨道的动力学特性

Lyapunov 轨道在 CR3BP 框架下的关键特性包括：

- **平面运动**：Lyapunov 轨道严格位于 $xOy$ 平面内，不具有 $z$ 方向的运动分量
- **周期性**：轨道是精确闭合的周期轨道，在会合坐标系中形成封闭曲线
- **对称性**：Lyapunov 轨道关于 $x$ 轴对称，在穿越 $x$ 轴时 $y$ 方向速度为零
- **轨道形状**：在平动点附近呈近椭圆形，随着振幅增大逐渐变形，远离平动点的一侧可能变得尖锐或扭曲

Lyapunov 轨道族通过 $x$ 轴上的初始位移 $x_0$（相对于平动点）参数化。当 $x_0$ 较小时，轨道接近线性化的简谐振荡；随着 $x_0$ 增大，非线性效应显著，轨道形状从椭圆逐渐偏离。

### Lyapunov 轨道的线性化分析

在平动点附近，CR3BP 的运动方程线性化后，平面内的运动方程具有如下特征值结构：

$$\lambda_{1,2} = \pm \sigma, \quad \lambda_{3,4} = \pm i\omega$$

其中 $\sigma$ 为实特征值（对应稳定/不稳定流形），$\omega$ 为虚特征值（对应周期振荡）。Lyapunov 轨道对应于仅激发虚特征值模态的运动，即：

$$\mathbf{x}(t) = A \cos(\omega t + \phi) \mathbf{e}_{\text{center}} + \text{非线性修正}$$

其中 $\mathbf{e}_{\text{center}}$ 为中心流形的方向向量。

### Lyapunov 轨道与 Halo 轨道的关系

Lyapunov 轨道和 Halo 轨道之间存在深刻的联系：

- **退化关系**：Halo 轨道当 $z$ 方向振幅 $A_z \to 0$ 时退化为 Lyapunov 轨道
- **分岔结构**：在轨道族的参数空间中，Lyapunov 轨道族通过 pitchfork 分岔产生 Halo 轨道族
- **频率关系**：Lyapunov 轨道仅涉及平面内振荡频率 $\omega_{xy}$，而 Halo 轨道需要 $\omega_{xy} = \omega_z$
- **稳定性差异**：两者都是不稳定的，但 Lyapunov 轨道的不稳定模态结构更简单（仅平面内）

### Lyapunov 轨道的数值计算

Lyapunov 轨道的精确计算通常采用以下方法：

1. **线性化初始猜测**：利用线性化分析得到近似解析解
2. **微分校正**：通过打靶法（Shooting Method）校正初始条件，使轨道精确闭合
3. **参数延续**：从小振幅轨道出发，逐步增大振幅，利用前一条轨道作为下一条的初始猜测

## 应用价值

Lyapunov 轨道在理论研究和实际任务中均具有价值：

- **动力学研究基础**：Lyapunov 轨道是理解平动点附近相空间结构的基础，是学习 Halo、Lissajous 等复杂轨道的前提
- **不变流形分析**：Lyapunov 轨道的稳定和不稳定流形构成了平动点附近低能量转移通道的骨架
- **低能量转移设计**：利用 Lyapunov 轨道的不变流形，可设计连接不同平动点区域的低能量转移轨道
- **Poincaré 截面分析**：Lyapunov 轨道常作为 Poincaré 截面中的参考轨道，用于分析相空间的全局结构
- **教学与入门**：作为平动点轨道族中最简单的周期轨道，Lyapunov 轨道是轨道力学教学的理想起点

## 相关概念
- [Halo 轨道（Halo Orbit）](/glossary/orbits/halo-orbit/)
- [Lissajous 轨道（Lissajous Orbit）](/glossary/orbits/lissajous-orbit/)
- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)

## 参考文献
- Richardson D L. Analytic construction of periodic orbits about the collinear points[J]. Celestial Mechanics, 1980, 22(3): 241-253.
- Szebehely V. Theory of Orbits: The Restricted Problem of Three Bodies[M]. Academic Press, 1967.
- Gomez G, Masdemont J, Simo C. Quasihalo orbits associated with libration points[J]. Journal of the Astronautical Sciences, 1998.
