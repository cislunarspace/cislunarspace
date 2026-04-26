---
title: 作用角变量（Action-Angle Variables）
description: 详细解析作用角变量的定义、在可积Hamilton系统中的作用，以及在地月空间平动点轨道特征参数化中的具体应用
keywords: 作用角变量, Action-Angle Variables, Hamilton系统, 可积系统, 正则变换, 平动点轨道, 特征参数, 中心流形
author: 天疆说
date: 2026-04-23
lastUpdated: 2026-04-23
wechatShare:
  title: 作用角变量（Action-Angle Variables）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 作用角变量详解 | Hamilton系统可积性
  description: 详细解析作用角变量的定义、在可积Hamilton系统中的作用，以及在地月空间平动点轨道特征参数化中的具体应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 作用角变量详解 | Hamilton系统可积性
  description: 详细解析作用角变量的定义、在可积Hamilton系统中的作用，以及在地月空间平动点轨道特征参数化中的具体应用
  image: /logo.png
permalink: /glossary/action-angle/
---

# 作用角变量

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文编辑来源：Qiao et al. (2025) "Orbital parameter characterization and objects cataloging for Earth-Moon collinear libration points"
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

作用角变量（Action-Angle Variables）是分析**可积哈密顿系统**的标准工具，由一对共轭变量 $(I, \theta)$ 组成：

- **作用量**（Action）$I$：沿闭合轨道的积分常数，描述轨道的"大小"
- **角变量**（Angle）$\theta$：沿轨道的周期运动相位，线性增长

对于一维可积哈密顿系统，作用角变量的引入使得哈密顿量仅依赖于作用量 $H = H(I)$，角变量的共轭方程给出常值角速度 $\dot{\theta} = \partial H / \partial I$。

## 在 Hamilton 系统中的意义

作用角变量是正则坐标 $(q, p)$ 通过**正则变换** $(q, p) \to (I, \theta)$ 得到的新正则变量，变换的母函数为型如 $S(q, \theta)$ 的生成函数。作用量的定义为：

$$I = \frac{1}{2\pi}\oint p \, dq$$

积分沿闭合轨道一周。在角变量 $\theta$ 从 $0$ 到 $2\pi$ 变化一周的过程中，作用量 $I$ 保持不变。

引入作用角变量后，可积 Hamiltonian 系统的相空间几何变得极为清晰：$I$ 描述**不变环面**（invariant torus）的截面半径，$\theta$ 描述轨道在环面上的转动相位。

## 在平动点线性化动力学中的定义

CR3BP 共线平动点的线性化哈密顿量经 Birkhoff-Gustavson 标准型化后，具有鞍×中心×中心结构。对中心模，Qiao et al. (2025) 采用如下作用角变量定义：

**中心模（center mode）**：

$$I_c = \frac{1}{2}(q^2 + p^2), \quad \theta_c = \arctan\left(\frac{q}{p}\right)$$

**鞍模（saddle mode）**：

$$I_s = qp, \quad \theta_s = \ln\frac{\sqrt{q}}{\sqrt{p}}$$

其中下标 $c$ 表示中心运动模式，$s$ 表示鞍/双曲运动模式。

## 在轨道特征参数中的应用

Qiao et al. (2025) 最终选取六维特征参数为：

| 参数 | 类型 | 定义 | 物理意义 |
|:---|:---|:---|:---|
| $q_1$ | 鞍方向坐标 | 直接保留（不经作用角变换） | 沿不稳定流形进入程度 |
| $p_1$ | 鞍方向动量 | 直接保留（不经作用角变换） | 沿稳定流形进入程度 |
| $I_2$ | 中心作用量1 | $I_2 = \frac{1}{2}(q_2^2 + p_2^2)$ | $XY$ 平面内运动振幅 |
| $\theta_2$ | 中心角量1 | $\theta_2 = \arctan(q_2/p_2)$ | $XY$ 平面内相位 |
| $I_3$ | 中心作用量2 | $I_3 = \frac{1}{2}(q_3^2 + p_3^2)$ | $Z$ 方向运动振幅 |
| $\theta_3$ | 中心角量2 | $\theta_3 = \arctan(q_3/p_3)$ | $Z$ 方向相位 |

**为何不将 $q_1, p_1$ 转为作用角形式？**

Qiao et al. (2025) 指出两点理由：
1. 鞍的角变量定义涉及复变量，物理含义抽象，不便实际应用
2. $q_1, p_1$ 本身的数值即能充分描述航天器进入不稳定/稳定流形的程度（$q_1$ 指数增长表示沿不稳定流形远离，$p_1$ 指数衰减至零表示沿稳定流形趋近）

## 中心流形上的运动方程

引入作用角变量后，中心流形哈密顿量为：

$$H_{CM} = H_2(I_2, I_3) + H_N(I_2, I_3, \theta_2, \theta_3)$$

由此得到正则方程：

- 作用量变化：$\dot{I}_j = \{I_j, H_{CM}\} = \{I_j, H_N\}$（仅高阶项贡献）
- 角速度：$\dot{\theta}_j = \{\theta_j, H_{CM}\} = \omega_j + \{\theta_j, H_N\}$（线性部分 + 高阶微扰）

这表明在作用角变量下，中心流形上的运动具有清晰的可积结构（线性部分）+ 微扰修正。

## 相关概念

- [中心流形（Central Manifold）](/glossary/central-manifold/)
- [Birkhoff-Gustavson 标准型](/glossary/birkhoff-gustavson/)
- [Poincaré 截面（Poincaré Section）](/glossary/poincare-section/)
- [正则变换（Canonical Transformation）](/glossary/canonical-transformation/)
- [圆型限制性三体问题（CR3BP）](/glossary/cr3bp/)
- 不变环面（Invariant Torus）
- 可积系统（Integrable System）

## 参考文献

- Arnol'd V I. Mathematical methods of classical mechanics[M]. Springer, 1989.
- Peterson L T, Scheeres D J. Local orbital elements for the circular restricted three-body problem[J]. J Guid Control Dyn, 2023, 46(12): 2275-2289.
- Qiao C, Long X, Yang L, et al. Orbital parameter characterization and objects cataloging for Earth-Moon collinear libration points[J]. Chinese Journal of Aeronautics, 2025. doi: 10.1016/j.cja.2025.103869.
