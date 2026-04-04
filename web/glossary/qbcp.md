---
title: 拟双圆四体问题(QBCP)
description: 详细解析拟双圆四体问题 QBCP 模型的定义、哈密顿函数、在地月空间中的应用及其与CRTBP的关系
keywords: 拟双圆四体问题, QBCP, 地月空间动力学, 太阳摄动, 哈密顿函数, 四体问题
author: 天疆说
date: 2026-04-04
lastUpdated: 2026-04-04
wechatShare:
  title: 拟双圆四体问题 QBCP
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 拟双圆四体问题 QBCP 模型详解 - 地月空间高精度动力学模型
  description: 详细解析拟双圆四体问题 QBCP 模型的定义、哈密顿函数、在地月空间中的应用及其与CRTBP的关系
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 拟双圆四体问题 QBCP 模型详解 - 地月空间高精度动力学模型
  description: 详细解析拟双圆四体问题 QBCP 模型的定义、哈密顿函数、在地月空间中的应用及其与CRTBP的关系
  image: /logo.png
permalink: /glossary/qbcp/
---

# 拟双圆四体问题

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

拟双圆四体问题（Quasi-Bicircular Problem，QBCP）是一种在日地月系统中考虑太阳引力摄动的自洽动力学模型。该模型由 Andreu 和 Simó 于 1999 年提出，是对双圆限制性四体问题（Bicircular Restricted Problem，BCP）的修正。

双圆四体动力学模型中两个三体模型相互独立，实际上并不符合牛顿第二定律，模型非自洽。为了满足自洽性，QBCP 通过修正双圆模型，使太阳、地球、月球三个大天体的运动满足牛顿运动定律，将问题中的 Hamiltonian 函数转化为中心流形，从而获得自洽的动力学描述。

## 哈密顿函数

对于日地月系统，拟双圆四体模型的哈密顿函数为：

$$
H_{\mathrm{QBCP}} = \frac{1}{2}\alpha_1(p_x^2 + p_y^2) + \alpha_2(x p_x + y p_y) + \alpha_3(y p_x - x p_y) + \alpha_4 x + \alpha_5 y - \alpha_6\left( \frac{1 - \mu}{r_1} + \frac{\mu}{r_2} + \frac{m_{\mathrm{s}}}{r_{\mathrm{s}}} \right)
$$

其中，参数 $\alpha_k$ 具有时间周期性：

$$
\alpha_k(\theta) = \begin{cases}
\alpha_{k0} + \sum\limits_{j \ge 1}\alpha_{kj}\cos(j\theta), & k = 1,3,4,6,7 \\
\sum\limits_{j \ge 1}\alpha_{kj}\sin(j\theta), & k = 2,5,8
\end{cases}
$$

式中 $\theta = \omega_s t$，$\omega_s$ 为太阳的归一化运动频率。

## 与其他模型的关系

QBCP 在动力学模型精度层级中介于 CRTBP 和星历模型之间：

| 模型 | 精度 | 自洽性 | 特点 |
|:---|:---|:---|:---|
| CRTBP | 低 | 自洽 | 忽略太阳摄动和月球偏心率 |
| BCP | 中 | 非自洽 | 引入太阳但两个三体模型独立 |
| **QBCP** | **中高** | **自洽** | **修正 BCP 使三天体运动满足牛顿定律** |
| 星历模型 | 高 | 自洽 | 采用真实星历数据 |

## 应用

基于 QBCP 模型，Andreu 讨论了地月平衡点附近的不变流形与低能量转移。Guzman 通过多步打靶法在 QBCP 模型下实现了地月平衡点附近的周期轨道和拟周期轨道设计，结果与真实星历情况接近，验证了拟双圆模型在轨道设计中的可行性。

QBCP 为从简化模型向高精度星历模型的过渡提供了良好的中间层次，常用于同伦法等模型转换策略中。

## 相关概念

- [圆形限制性三体问题（CR3BP）](/glossary/cr3bp/)
- 双圆限制性问题（BCP）
- [星历模型](/glossary/ephemeris-model/)
- 同伦法

## 参考文献

- Andreu M A. The translunar halo orbit in the quasi-bicircular problem[D]. Universitat de Barcelona, 1999.
- Andreu M A. Dynamics in the center manifold of the collinear points in the quasi-bicircular problem[D]. Universitat de Barcelona, 2002.
- Guzman J. Spacecraft trajectory design in the context of a coherent restricted four-body problem[D]. Purdue University, 2001.
