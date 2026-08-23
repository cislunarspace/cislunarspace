---
title: 双圆限制性四体问题（Bicircular Restricted Four-Body Problem, BCR4BP）
description: 在 CR3BP 框架上叠加第四个天体（如太阳）摄动的近似四体模型。覆盖双圆问题（BCP）的自洽性缺陷与 BCR4BP 的连贯模型、平面与空间变体、改进双圆模型、全历表限制性四体问题（FER4BP），以及在弱稳定边界转移、行星际高速公路和地月转移中的应用。
keywords: 双圆限制性四体问题, BCR4BP, 双圆问题, Bicircular Problem, BCP, 四体问题, 限制性四体问题, 行星际高速公路, 弱稳定边界, 地月转移
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 双圆限制性四体问题（BCR4BP）详解
  desc: 超越 CR3BP——如何在三体模型中加入太阳摄动，从双圆问题到全历表模型。
  image: /logo.png
og:
  title: 双圆限制性四体问题（BCR4BP）详解 | 地月空间动力学
  description: 在 CR3BP 框架上叠加第四个天体摄动的近似四体模型，覆盖双圆问题、BCR4BP、平面与空间变体及其在地月弱稳定转移中的应用。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 双圆限制性四体问题（BCR4BP）详解 | 地月空间动力学
  description: 在 CR3BP 框架上叠加第四个天体摄动的近似四体模型，覆盖双圆问题、BCR4BP、平面与空间变体及其在地月弱稳定转移中的应用。
  image: /logo.png
permalink: /glossary/dynamics/bcr4bp/
---

# 双圆限制性四体问题（Bicircular Restricted Four-Body Problem, BCR4BP）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

双圆限制性四体问题（Bicircular Restricted Four-Body Problem, BCR4BP）是在 [CR3BP](/glossary/dynamics/cr3bp/) 框架上叠加第四天体的摄动效应而形成的近似四体模型。以地月-太阳系统为例：地球和月球绕其公共质心作圆运动（地月 CR3BP），太阳作为一个在更大尺度上作圆运动的点质量，额外施加时变引力。航天器质量可忽略，受三个天体引力作用。

BCR4BP 之所以近似，在于两条圆运动假设在物理上不严格自洽：地球、月球、太阳三体若严格服从牛顿万有引力定律和圆轨道假设，则它们不可能同时满足运动方程。但该模型在轨道设计实践中表现出令人满意的精度，因为它捕获了太阳引力对地月段飞行施加的时变摄动，而无需完整星历积分的高昂计算成本。

另一种常见对称配置是日地-月球模型：太阳和地球绕日地质心作圆运动（日地 CR3BP），月球作为第四体施加时变摄动。

## BCP 与 BCR4BP 的区分

文献中对这两个缩写常混用，但存在重要的概念差异（Gómez et al. 2001）：

- **BCP**（Bicircular Problem）：Simó 等人最早提出的原始双圆模型，其中地球-月球和地月质心-太阳两套圆运动在运动学上不一致，它们不满足牛顿第三定律。BCP 是一种**不一致的简化模型**，适合快速探索周期轨道的大致几何特征。

- **BCR4BP**（Bicircular Restricted Four-Body Problem）：较新的自洽表述，将第四体引力处理为对 CR3BP 运动方程的显式周期性强迫项，而不要求两套圆运动在动力学上自洽。BCR4BP 保留了 CR3BP 的旋转框架，只是右端增加了含太阳质量参数 $\mu_s$ 和太阳方位 $\theta_s$ 的时变项。

在航天器轨道设计语境中，BCR4BP 通常指自洽模型，双圆问题是可互换的通称。

## 平面与空间变体

| 缩写 | 全称 | 描述 |
| :--- | :--- | :--- |
| PBR4BP / PBRFBM / PBRFBP | Planar Bicircular Restricted Four-Body Problem | 所有运动约束在同一个轨道面内，适合定性分析和庞加莱截面 |
| SBCM | Spatial Bi-Circular Model | 三维空间版本，允许航天器和第四体轨道面不完全共面 |
| Improved Bi-Circular Model | 改进双圆模型 | 引入额外修正项以改善双圆近似的精度，是 BCP 与高保真模型间的折中 |
| FER4BP | Full-Ephemeris Restricted 4-Body Problem | 放弃双圆假设，直接使用与历表一致的时变主天体位置积分。精度最高，计算成本也最高 |

## 运动方程

以地月 CR3BP + 太阳摄动为例。在归一化后的地月会合坐标系中，BCR4BP 的无量纲运动方程为：

$$
\begin{cases}
\ddot{x} - 2\dot{y} = \dfrac{\partial \Omega}{\partial x} + a_{s,x} \\[1em]
\ddot{y} + 2\dot{x} = \dfrac{\partial \Omega}{\partial y} + a_{s,y} \\[1em]
\ddot{z} = \dfrac{\partial \Omega}{\partial z} + a_{s,z}
\end{cases}
$$

其中 $\Omega$ 即 CR3BP 的有效势函数。太阳摄动加速度 $\mathbf{a}_s$ 由第四体的时变位置 $\mathbf{r}_s(t)$ 和第四体质量参数 $\mu_s$ 导出（以地月质量单位归一化后的质量；日-地月系统 $\mu_s \approx 3.289 \times 10^5$）：

$$\mathbf{a}_s = -\mu_s \left(\frac{\mathbf{r} - \mathbf{r}_s}{|\mathbf{r} - \mathbf{r}_s|^3} + \frac{\mathbf{r}_s}{|\mathbf{r}_s|^3}\right)$$

关键点是括号中第二项 $\mu_s \mathbf{r}_s / |\mathbf{r}_s|^3$，它来自质心加速度项，以确保在旋转系中完整表达太阳对航天器的直接引力 $-$ 太阳对地月质心的引力之差。这一项经常被不严谨的直接引力扰动公式遗漏。

## 应用

BCR4BP 在地月空间任务设计中填补了 CR3BP 与全星历模型之间的重要空白（Koon et al. 2011）：

- **弱稳定边界转移**（WSB Transfer）：太阳摄动是使地月弹道捕获可行的关键机制。BCR4BP 能捕获太阳的时变影响而不负担全星历积分的成本，是 WSB 转移设计的工作模型。

- **行星际超级高速公路**（Interplanetary Superhighway）：日地和地月系统间的不变流形拼接在 BCR4BP 框架下分析最有效：用日地出站流形与地月入站流形在 BCR4BP 的时变系统中求交。

- **第四体摄动判别**：对于特定轨道（如 DRO、NRHO），BCR4BP 可以估算太阳摄动的长期累积效应，帮助判断哪些轨道需要在高保真模型下验证。

## 相关概念

- [CR3BP](/glossary/dynamics/cr3bp/)

- [ER3BP](/glossary/dynamics/er3bp/)

- [平动点](/glossary/dynamics/libration-point/)

- [不变流形](/glossary/dynamics/invariant-manifold/)

- [弱稳定边界](/glossary/dynamics/wsb/)

- [弹道捕获](/glossary/dynamics/ballistic-capture/)

## 参考文献

- Gómez et al., 2001, *Dynamics and Mission Design near Libration Points*, Vol. I：第 2 章系统讲述 BCP 与 BCR4BP 的公式、自洽性及其在流形拼接中的应用。

- Simó et al., 1995, "The Bicircular Model Near the Triangular Libration Points of the RTBP"：双圆问题的原始系统化表述。

- Koon, Lo, Marsden & Ross, 2011, *Dynamical Systems, the Three-Body Problem, and Space Mission Design*：第 6 章讨论四体近似与行星际超级高速公路的拼接方法。

- Belbruno, 2004, *Capture Dynamics and Chaotic Motions in Celestial Mechanics*：WSB 转移的理论基础，含双圆框架下的弹道捕获机制。
