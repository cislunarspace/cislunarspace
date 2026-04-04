---
title: 星历模型(Ephemeris Model)
description: 详细解析星历模型的定义、N体动力学方程、在地月空间轨道设计中的应用，以及与CRTBP等简化模型的关系
keywords: 星历模型, Ephemeris Model, N体问题, JPL星历, DE440, 地月空间动力学, 高精度轨道设计
author: 天疆说
date: 2026-04-04
lastUpdated: 2026-04-04
wechatShare:
  title: 星历模型 Ephemeris Model
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 星历模型 Ephemeris Model 详解 - 地月空间高精度轨道动力学
  description: 详细解析星历模型的定义、N体动力学方程、在地月空间轨道设计中的应用，以及与CRTBP等简化模型的关系
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 星历模型 Ephemeris Model 详解 - 地月空间高精度轨道动力学
  description: 详细解析星历模型的定义、N体动力学方程、在地月空间轨道设计中的应用，以及与CRTBP等简化模型的关系
  image: /logo.png
permalink: /glossary/ephemeris-model/
---

# 星历模型

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

星历模型（Ephemeris Model）是最接近真实引力场环境的动力学模型，采用 N 体运动方程描述航天器在多个天体引力作用下的运动。与 CRTBP、QBCP 等简化模型不同，星历模型中各天体的位置和速度信息来自 JPL（Jet Propulsion Laboratory）的行星精密星历表（如 DE440），而非简化的圆轨道或椭圆轨道假设。

## N 体动力学方程

在 J2000 地心惯性坐标系下，假设中心天体为 $P_c$，各引力天体 $P_i$ 视作质点，航天器 $P_s$ 的 N 体动力学方程为：

$$
\ddot{\mathbf{r}}_{cs} = -\frac{Gm_c}{r_{cs}^3}\mathbf{r}_{cs} + G\sum_{i=1}^{N}m_i\left(\frac{\mathbf{r}_{si}}{r_{si}^3} - \frac{\mathbf{r}_{ci}}{r_{ci}^3}\right)
$$

其中 $G$ 为万有引力常量，$m_c$、$m_s$、$m_i$ 分别为中心天体、航天器和各引力天体的质量，$\mathbf{r}_{cs}$、$\mathbf{r}_{si}$、$\mathbf{r}_{ci}$ 分别为对应天体间的相对位置矢量。$\mathbf{r}_{ci}$ 由星历数据提供。

### 紧凑形式

设航天器状态向量为 $\mathbf{X} = [\mathbf{r}^{\mathrm{T}}, \mathbf{v}^{\mathrm{T}}]^{\mathrm{T}}$，运动方程可写为：

$$
\dot{\mathbf{X}} = \begin{bmatrix} \mathbf{v} \\ \mathbf{a} \end{bmatrix}
$$

加速度由各引力天体共同贡献：

$$
\mathbf{a}(\mathbf{r}, t) = \sum_{b \in \mathcal{B}} \mathbf{a}_b(\mathbf{r}, t)
$$

其中 $\mathcal{B} = \{\text{Earth}, \text{Moon}, \text{Sun}\}$ 为引力天体集合。

对于中心天体（地球）：

$$
\mathbf{a}_{\oplus} = -\frac{\mu_{\oplus}}{r^3}\mathbf{r}
$$

对于非中心天体 $b$（如月球、太阳），加速度贡献包含间接项与直接项：

$$
\mathbf{a}_b = -\mu_b\left(\frac{\mathbf{r} - \mathbf{r}_b}{\|\mathbf{r} - \mathbf{r}_b\|^3} + \frac{\mathbf{r}_b}{\|\mathbf{r}_b\|^3}\right)
$$

## 状态转移矩阵

为进行轨道修正和优化，需要计算状态转移矩阵（STM）。对运动方程线性化得到变分方程：

$$
\dot{\boldsymbol{\Phi}}(t, t_0) = \mathbf{A}(t)\boldsymbol{\Phi}(t, t_0), \quad \boldsymbol{\Phi}(t_0, t_0) = \mathbf{I}_{6\times6}
$$

其中 $\mathbf{A}(t)$ 为动力学方程关于状态的雅可比矩阵。在数值实现中，将 6 维状态向量与 $6\times6$ 状态转移矩阵的 36 个元素拼接为 42 维增广状态向量，与运动方程同时积分。

## 坐标转换

星历模型下通常在 J2000 地心惯性坐标系中进行计算。与 CRTBP 所使用的地月会合坐标系之间的转换是轨道设计中的关键步骤。设月球在 J2000 系下位置为 $\mathbf{R}_M$，速度为 $\mathbf{V}_M$，则：

- 月球角动量：$\mathbf{h}_M = \mathbf{R}_M \times \mathbf{V}_M$
- 月球角速度：$\boldsymbol{\omega} = \mathbf{h}_M / \|\mathbf{R}_M\|^2$
- 旋转矩阵基向量：$\hat{x} = \mathbf{R}_M/\|\mathbf{R}_M\|$，$\hat{z} = \mathbf{h}_M/\|\mathbf{h}_M\|$，$\hat{y} = \hat{z} \times \hat{x}$

## 与简化模型的关系

在实际轨道设计中，通常采用"先简化后精确"的策略：

1. 在 CRTBP 等简化模型中获取初始轨道解
2. 通过同伦法等方法将简化模型解转换至星历模型
3. 在星历模型下进行高精度修正与优化

在星历模型中，CRTBP 下的严格周期轨道将演变为拟周期轨道，需通过多步打靶法等方法进行位置和速度修正。

## 参考文献

- 刘刚. 星历模型地月系统平动点拟周期轨道设计研究[D]. 2017.
- Park R S, Folkner W M, Williams J G, et al. The JPL planetary and lunar ephemerides DE440 and DE441[J]. The Astronomical Journal, 2021, 161(3): 105.
