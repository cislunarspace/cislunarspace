---
title: 轨道摄动（Orbital Perturbations）
description: 轨道摄动的完整框架——从 Cowell 公式 $\ddot{\mathbf{r}} = -\frac{\mu}{r^3}\mathbf{r} + \sum \mathbf{a}_{p_i}$ 出发，分类讨论保守摄动（非球形引力、第三体）与非保守摄动（大气阻力、太阳光压），覆盖特殊摄动法（Cowell/Encke）与一般摄动法（Gauss/Lagrange 变参数方程），按 LEO/MEO/GEO/地月空间给出摄动量级排序与选模依据。
keywords: 轨道摄动, orbital perturbations, Cowell 公式, 特殊摄动, 一般摄动, Encke 方法, Gauss 摄动方程, 变参数法, 第三体摄动, 月球偏心率摄动, 相对论修正, cislunar 摄动源, 摄动量级
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 轨道摄动（Orbital Perturbations）
  desc: 从 Cowell 公式到摄动量级排序——轨道摄动的完整框架。
  image: /logo.png
og:
  title: 轨道摄动（Orbital Perturbations）详解 | 术语定义
  description: 轨道摄动的完整框架——从 Cowell 公式出发，分类讨论保守/非保守摄动，覆盖特殊摄动法（Cowell/Encke）与一般摄动法（Gauss/Lagrange），按轨道区给出摄动量级排序与选模依据。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 轨道摄动（Orbital Perturbations）详解 | 术语定义
  description: 轨道摄动的完整框架——从 Cowell 公式出发，分类讨论保守/非保守摄动，覆盖特殊摄动法（Cowell/Encke）与一般摄动法（Gauss/Lagrange），按轨道区给出摄动量级排序与选模依据。
  image: /logo.png
permalink: /glossary/fundamentals/orbital-perturbations/
---

# 轨道摄动（Orbital Perturbations）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

轨道摄动（orbital perturbations）是指航天器实际轨道相对于理想 Kepler 二体运动的偏离。二体运动假设中心天体为均匀球体、无其他作用力，这是分析基准，但真实航天器还受到非球形引力场（中心天体偏离球对称）、第三体引力、大气阻力、太阳辐射压等附加力的作用，这些力构成的摄动加速度 $\mathbf{a}_p$ 叠加在二体加速度上：

$$
\ddot{\mathbf{r}} = -\frac{\mu}{r^3}\mathbf{r} + \mathbf{a}_p
$$

这一形式称为 **Cowell 公式**（Cowell's formulation）（Vallado 2022, Ch.8）。

Cowell 公式与 Cowell 方法是两个不同概念：公式指将摄动加速度线性叠加到二体方程右端，是问题描述方式；方法指具体的数值积分技术（见下文摄动处理方法一节）。各摄动源可线性叠加，$\mathbf{a}_p = \sum_i \mathbf{a}_{p_i}$（Vallado 2022）。

需要指出，摄动不一定小：当航天器大气再入时阻力与二体力同量级，三体问题中第三体引力可以大过主引力。此时问题本质已不再是摄动，而是完全不同的动力学系统（Vallado 2022, Ch.8）。

## 摄动源的分类

### 保守摄动与非保守摄动

按力的物理性质，分为两类（Vallado 2022, Ch.8）：

- **保守摄动**（conservative）：力场可写为势函数的梯度 $\mathbf{a} = \nabla U$，系统总能量守恒。包括中心天体非球形引力、第三体引力、固体潮/海潮。这类摄动一般通过**摄动函数**（disturbing function）$R = U - U_{2\text{-body}}$ 处理。

- **非保守摄动**（nonconservative）：无势函数，系统能量变化。包括大气阻力、太阳辐射压、推力。这类摄动直接以**摄动力**（disturbing force）形式建模。

### 按物理来源分类

| 摄动源 | 性质 | 主要影响区 | 典型量级（低轨，$10^{-3} g_0$） | 典型量级（地月，$10^{-3} g_0$） |
|--------|------|-----------|------------------------------|-------------------------------|
| 中心天体非球形引力（J2 项） | 保守 | LEO→MEO | $\sim 10$ | $\ll 1$ |
| 第三体引力（日月行星） | 保守 | GEO 以上、地月 | $\ll 1$（LEO） | $\sim 1\text{--}10$ |
| 大气阻力 | 非保守 | LEO (<800 km) | $\sim 0.1\text{--}10$ | 0（月面无大气） |
| 太阳辐射压 | 非保守 | GEO 以上、地月 | $\ll 1$（LEO） | $\sim 0.1\text{--}1$ |
| 相对论效应 | — | 高精度导航 | $\ll 1$（所有区） | $\ll 1$ |

量级排序的依据：Vallado (2022, Ch.8-9)；地月空间的具体模型配置见下文。

### 按轨道区给的摄动主导项（选模指引）

- **LEO（<800 km）**：大气阻力 > J2 > 其它。以阻力为主要误差源，需高精度密度模型（如 NRLMSISE-00）。

- **MEO（800 km ~ 30,000 km）**：J2 占主导，阻力衰减，第三体开始显现。

- **GEO（~35,800 km）**：第三体 + 太阳光压 > J2。光压对长期轨道演化影响显著。

- **地月空间**：月球第三体引力是决定性摄动源；太阳摄动次之；J2 在月球低轨有意义（Vallado 2022, Ch.8.6.3）。Cislunar debris 定轨实践中，地球引力场只需球谐展开到 5 阶×5 阶就足够，配以日月木星点质量模型 + 炮弹式光压模型，RKF7(8) 变步长积分器（Cowell 公式）可获得最长 2 年的轨道预报精度（Framework paper, 2023）。

## 第三体引力摄动

航天器受到除中心天体外其他天体的引力作用。以地球为中心天体、太阳为第三体，摄动加速度为（Vallado 2022, Eq. 8-34）：

$$
\mathbf{a}_{3\text{rd}} = \mu_3 \left( \frac{\mathbf{r}_{sat-3}}{r_{sat-3}^3} - \frac{\mathbf{r}_{\oplus-3}}{r_{\oplus-3}^3} \right)
$$

括号中第一项是**直接效应**（太阳对航天器的直接引力），第二项是**间接效应**（太阳对地心的引力）。两者接近同量级、相减时易产生数值消去误差（Vallado 2022, Ch.8.6.3）。通过 LeGendre 多项式展开，直接项的最低阶恰好与间接项抵消，这是第三体摄动在近地轨道上通常较小的代数原因。

在地月空间中，月球第三体的作用远远超过太阳：月球距地球仅约 384,400 km，摄动加速度与二体加速度的比值在平动点附近可达 $\mathcal{O}(1)$，因此地月轨道的本质已不是受摄二体问题，而需要用限制性三体问题（CR3BP）来建模。

## 月球偏心率摄动

地月系的三体模型通常简化为圆型 CR3BP（月球圆轨、地月距恒定）。但实际上月球轨道偏心率为 $e \approx 0.0549$，地月距在 $363,000\text{--}405,000$ km 之间周期性变化，周期约 27.3 天（恒星月）。这一偏心率使平动点位置和 halo/NRHO 等轨道族的几何与周期均随月球相位变化，是地月平动点轨道比日地平动点轨道更难维持的根本原因之一。Folta et al. (2010) 指出，为完整刻画这一周期效应，仿真时长至少需覆盖一个月球轨道周期（约 27.3 天）。

## 相对论修正

高精度轨道确定和导航定轨中，广义相对论引入的时空度规偏差需要修正。主要包括（Vallado 2022, Ch.8.6.5；IAU 2000 决议）：

- **Schwarzschild 项**：中心天体质量造成的时空弯曲对加速度的修正，$\mathbf{a}_{rel} = \frac{\mu}{c^2 r^3}\left[ \left( \frac{4\mu}{r} - v^2 \right)\mathbf{r} + 4(\mathbf{r}\cdot\mathbf{v})\mathbf{v} \right]$。

- **引力时延**（Shapiro delay）：信号跨越不同引力势区域的传播时间修正。

- **Sagnac 效应**：旋转参考系中的信号传播时间修正。

在地月空间星间测距自主定轨中，相对论效应修正对毫米级测距精度是必要条件（丛佃伟等, 2025）。

## 摄动处理方法

处理轨道摄动的手段分为三大类（Vallado 2022, Ch.8-9）。

### 特殊摄动法（Special Perturbations）

即数值积分法：直接将 Cowell 公式中的 $\mathbf{a}_p$ 计算出来，用数值积分器推进位置和速度。结果是离散数值解，含所有摄动引入的长期项和周期项，精度最高，但计算量大。两种历史变体：

- **Cowell 方法**（Cowell's method）：直接积分完整的加速度（含二体部）。现代所有高精度轨道预报软件（GMAT、ODTK、STK/OD）均采用 Cowell 公式 + 高阶数值积分器（Runge-Kutta-Fehlberg、Gauss-Jackson、Adams-Cowell）。

- **Encke 方法**（Encke's method）：以一条二体密切轨道为参考，只积分摄动引起的偏差 $\delta\mathbf{r}$。偏差量小，历史上一度因计算资源受限而比 Cowell 法更高效，但现代计算能力已使其不再必要（Vallado 2022, Ch.8.3）。不过其核心思路（**与参考轨道的偏差积分**）在轨道确定和精度分析中仍有应用。

实际工程中广泛采用的是 **时间正则化 Cowell 积分**（s-integration）：不在均匀时间步长上积分，而在偏心近点角或真近点角等轨道参考变量上等步积分，使近心点步长自动缩、远心点步长自动放，极大提升偏心律轨道的积分效率（Vallado 2022, Ch.8.5.1）。

### 一般摄动法（General Perturbations）

即解析/半解析方法：通过数学推导得到轨道要素变化率（长期项和周期项）的封闭或级数表达式。核心工具是**变参数法**（Variation of Parameters, VOP），将摄动加速度投影为密切轨道根数的变化率。

- **Lagrange 行星方程**（Lagrange Planetary Equations）：适用于保守摄动。以摄动函数 $R$ 的偏导数表达 6 个轨道根数的时间变率。

- **Gauss 型摄动方程**（Gaussian VOP）：适用于非保守摄动。将摄动加速度按径向（S）、横向（T）、法向（W）三个分量分解，直接导出轨道根数变化率，适合小推力、大气阻力等非势场力的计算。典型形式（Vallado 2022, Eq. 9-14）：

$$
\frac{da}{dt} = \frac{2a^2 v}{\mu} a_S, \quad
\frac{de}{dt} = \frac{1}{v}\left[ 2(e + \cos\nu) a_S - \frac{r}{a}\sin\nu \cdot a_T \right], \quad \dots
$$

- **Kozai 方法**、**Brouwer 方法**：均基于 VOP 发展，将摄动函数的周期项平均掉，提取长期项以获得简化的分析预报。

### 半解析法（Semianalytical）

解析计算长期效应、数值积分处理周期效应，如 DSST（Draper Semianalytical Satellite Theory）。在效率和精度间取折中。

## 地月空间摄动模型的工程实践

对地月空间碎片的定轨与预报，实践表明以下模型配置可在精度和计算代价之间取得最优平衡（Framework paper, 2023）：

- 地球引力：球谐函数展开至 5 阶×5 阶（SH[5,5]）。

- 第三体点质量：太阳、月球、木星（DE440 星历）。

- 太阳光压：炮弹模型（$C_r = 1.2$，圆柱阴影模型）。

- 大气阻力：仅在近地点附近通过 NRLMSISE-00 模型计入。

- 积分器：RKF7(8) 变步长，误差容限 $10^{-10}$。

- 传播器：Cowell 公式。

在这一模型框架下，对嫦娥二号助推器可获最长 2 年的预报精度（PSA），嫦娥三号助推器 50 天到 1 年不等。

## 相关概念

- [非球形引力摄动](/glossary/dynamics/non-spherical-gravity-perturbation/)

- [大气阻力摄动](/glossary/dynamics/atmospheric-drag/)

- [太阳辐射压摄动（SRP）](/glossary/dynamics/srp/)

- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)

- [密切轨道根数](/glossary/fundamentals/osculating-orbital-elements/)

- [变参数法（VOP）](/glossary/fundamentals/method-of-variation-of-constants/)

- [平动点](/glossary/fundamentals/libration-point/)

- [会合坐标系](/glossary/fundamentals/synodic-frame/)

- [雅可比常数](/glossary/dynamics/jacobi-integral/)

## 参考文献

- Vallado, 2022, Fundamentals of Astrodynamics and Applications（Ch.8 Special Perturbations：摄动定义、Cowell/Encke 公式、数值积分实现；Ch.9 General Perturbations：变参数法、Gauss/Lagrange 方程；Ch.8.6.3 Third-Body Perturbations：第三体摄动加速度公式）

- A model framework for high-accuracy orbit determination and propagation of cislunar space debris, 2023（地月空间碎片的选模实践：SH[5,5] + DE440 点质量 + 炮弹光压 + RKF7(8)，验证最长 2 年预报精度）

- Battin, 1999, An Introduction to the Mathematics and Methods of Astrodynamics（摄动理论的数学基础）

- Folta et al., 2010, Earth-Moon libration point orbit stationkeeping: Theory, modeling, and operations（月球偏心率对平动点轨道保持的影响）

- 丛佃伟等, 2025, 地月空间航天器自主导航技术及研究进展（地月导航中的相对论效应修正需求）
