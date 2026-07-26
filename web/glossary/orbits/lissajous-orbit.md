---
title: Lissajous 轨道（Lissajous Orbit）
description: 详细解析Lissajous轨道的定义、准周期特性、与Halo轨道的区别及其在地月空间任务中的应用
keywords: Lissajous轨道, Lissajous Orbit, 平动点, 准周期轨道, Halo轨道, 三体问题, SOHO, 轨道设计
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Lissajous 轨道（Lissajous Orbit）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: Lissajous 轨道（Lissajous Orbit）详解 | 平动点准周期轨道
  description: 详细解析Lissajous轨道的定义、准周期特性、与Halo轨道的区别及其在地月空间任务中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Lissajous 轨道（Lissajous Orbit）详解 | 平动点准周期轨道
  description: 详细解析Lissajous轨道的定义、准周期特性、与Halo轨道的区别及其在地月空间任务中的应用
  image: /logo.png
permalink: /glossary/orbits/lissajous-orbit/
---

# Lissajous 轨道（Lissajous Orbit）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

Lissajous 轨道（Lissajous Orbit）是**环绕平动点的准周期轨道**，不闭合但保持在有限区域内。其名称来源于法国物理学家 Jules Antoine Lissajous 研究的利萨如图形——在旋转坐标系中，Lissajous 轨道的投影形状类似于利萨如曲线。与 Halo 轨道不同，Lissajous 轨道不具有对称性，且不精确闭合。

## 核心要素

### Lissajous 轨道的动力学特性

Lissajous 轨道在 CR3BP 框架下的关键特性包括：

- **准周期性**：轨道不闭合，在会合坐标系中逐渐遍历一个环形区域，形如"毛线团"
- **非对称性**：与 Halo 轨道的对称性不同，Lissajous 轨道不具有关于 $xOz$ 平面的对称性
- **频率不共振**：Lissajous 轨道的平面内振荡频率 $\omega_{xy}$ 与 $z$ 方向振荡频率 $\omega_z$ 不满足共振关系，即 $\omega_z / \omega_{xy} \neq 1$
- **有界运动**：尽管不闭合，轨道始终保持在平动点附近的有限区域内

### Lissajous 轨道与 Halo 轨道的区别

| 特征 | Halo 轨道 | Lissajous 轨道 |
| :--- | :--- | :--- |
| 周期性 | 精确周期，闭合 | 准周期，不闭合 |
| 对称性 | 关于 $xOz$ 平面对称 | 无对称性 |
| 频率关系 | $\omega_z / \omega_{xy} = 1$ | $\omega_z / \omega_{xy} \neq 1$ |
| 轨道形状 | 三维环状 | 三维准周期缠绕 |
| 控制需求 | 需要维持控制 | 需要维持控制（且更复杂） |

Lissajous 轨道可以看作 Halo 轨道的"推广"——当平面内和 $z$ 方向的频率比不为 1 时，周期轨道退化为准周期轨道。

### Lissajous 轨道的线性近似

在平动点附近的线性化框架下，Lissajous 轨道的运动可分解为三个模态：

$$x(t) = A_{xy} \cos(\omega_{xy} t + \phi_{xy}) + \text{非线性修正}$$
$$z(t) = A_z \cos(\omega_z t + \phi_z) + \text{非线性修正}$$

其中 $A_{xy}$ 和 $A_z$ 分别为平面内和 $z$ 方向的振幅，$\phi_{xy}$ 和 $\phi_z$ 为初始相位。由于 $\omega_{xy}$ 和 $\omega_z$ 不可通约，轨道永不闭合。

### 稳定性与控制

与 Halo 轨道类似，Lissajous 轨道也是不稳定的，需要轨道维持控制。但由于 Lissajous 轨道不闭合，控制策略更为复杂：

- **目标轨道的定义**：由于轨道不闭合，"目标轨道"不是一条精确的闭合曲线，而是一条随时间演化的参考轨迹
- **控制频率**：通常需要更频繁的控制机动
- **燃料消耗**：Lissajous 轨道的维持消耗通常略高于同等规模的 Halo 轨道

## 应用价值

Lissajous 轨道在空间任务中有独特应用：

- **SOHO 卫星**：ESA/NASA 的太阳观测卫星 SOHO 运行在日-地 L1 点附近的 Lissajous 轨道上，是 Lissajous 轨道最著名的应用
- **中继通信**：地月 L2 点附近的 Lissajous 轨道可用于月球背面通信中继
- **轨道选择灵活性**：Lissajous 轨道的频率比可自由选择，提供了比 Halo 轨道更多的设计自由度
- **入轨更容易**：某些情况下，进入 Lissajous 轨道的 $\Delta V$ 需求低于进入 Halo 轨道

## 相关概念

- [Halo 轨道（Halo Orbit）](/glossary/orbits/halo-orbit/)
- [Lyapunov 轨道（Lyapunov Orbit）](/glossary/orbits/lyapunov-orbit/)
- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)

## 参考文献

- Richardson D L. Analytic construction of periodic orbits about the collinear points[J]. Celestial Mechanics, 1980, 22(3): 241-253.
- Gomez G, Masdemont J, Simo C. Lissajous orbits around halo orbits[J]. Advances in the Astronautical Sciences, 1998.
- Qiao C, Long X, Yang L, et al. Orbital parameter characterization and objects cataloging for Earth-Moon collinear libration points[J]. Chinese Journal of Aeronautics, 2025.
