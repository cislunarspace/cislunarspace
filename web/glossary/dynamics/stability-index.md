---
title: 稳定性指数（Stability Index）
description: 详细解析稳定性指数的定义、计算公式、判别准则及其在三体轨道稳定性分析中的应用
keywords: 稳定性指数, Stability Index, 单值矩阵, 特征值, 轨道稳定性, DRO, 地月空间
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 稳定性指数（Stability Index）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 稳定性指数详解 | 三体轨道稳定性量化指标
  description: 详细解析稳定性指数的定义、计算公式、判别准则及其在三体轨道稳定性分析中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 稳定性指数详解 | 三体轨道稳定性量化指标
  description: 详细解析稳定性指数的定义、计算公式、判别准则及其在三体轨道稳定性分析中的应用
  image: /logo.png
permalink: /glossary/dynamics/stability-index/
---

# 稳定性指数

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

稳定性指数（Stability Index）是衡量三体轨道在不施加机动控制下自身稳定性水平的量化指标。常用来评价 DRO 轨道稳定性的两个指标为 $\nu$（nu）和 $L$。

## 计算公式

$$\nu = \frac{1}{2}\left(\|\lambda_i\| + \left\|\frac{1}{\lambda_i}\right\|\right)$$

$$L = \ln\left(\max\left(|\lambda_i|\right)\right)$$

其中 $\lambda_i$ 为单值矩阵的特征值。

## 判别准则

- 当 $\nu = 1$ 或 $L = 0$ 时，轨道是**稳定**的
- 当 $\nu > 1$ 或 $L > 0$ 时，轨道是**不稳定**的
- $\nu$ 越接近 1，轨道的稳定性越好

## 应用价值

稳定性指数在 DRO 轨道设计中具有重要应用。研究表明，振幅在 60000~68000 km 之间的 DRO 轨道稳定性指数接近 1，能够抵抗太阳引力等摄动影响，是最稳定的 DRO 轨道。

## 相关概念

- [单值矩阵](/glossary/dynamics/monodromy-matrix/)
- [远距离逆行轨道（DRO）](/glossary/orbits/dro/)
- [圆型限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)
- [延拓方法](/glossary/dynamics/continuation-method/)

## 参考文献

- Bezrouk C, Parker J S. Long term evolution of distant retrograde orbits in the Earth-Moon system[J]. Astrophysics and Space Science, 2017.
- 陈昱桔. 面向地月空间态势感知的DRO轨道设计与控制研究[D]. 2024.
