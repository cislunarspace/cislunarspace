---
title: 多面体表示（Polyhedral Representation）
description: 将不变流形上的状态分量表示为两个参数（注入点对应的时间和流形飞行时间）的分段线性函数。通过在参数平面划分矩形网格，在每个矩形内用四个三角形线性插值，实现状态量的快速计算。该表示法几何直观、实现简单、精度满足工程需求（92%~93%区域误差小于5m/s），可用于轨道优化和交会对接问题。
keywords: 多面体表示, Polyhedral Representation, 轨道动力学, 多体问题, 摄动
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 多面体表示（Polyhedral Representation）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 多面体表示详解 | 术语定义
  description: 将不变流形上的状态分量表示为两个参数（注入点对应的时间和流形飞行时间）的分段线性函数。通过在参数平面划分矩形网格，在每个矩形内用四个三角形线性插值，实现状态量的快速计算。该表示法几何直观、实现简单、精度满足工程需求（92%~93%区域误差小于5m/s），可用于轨道优化和交会对接问题。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 多面体表示详解 | 术语定义
  description: 将不变流形上的状态分量表示为两个参数（注入点对应的时间和流形飞行时间）的分段线性函数。通过在参数平面划分矩形网格，在每个矩形内用四个三角形线性插值，实现状态量的快速计算。该表示法几何直观、实现简单、精度满足工程需求（92%~93%区域误差小于5m/s），可用于轨道优化和交会对接问题。
  image: /logo.png
permalink: /glossary/dynamics/polyhedral-representation/
---

# 多面体表示（Polyhedral Representation）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

将不变流形上的状态分量表示为两个参数（注入点对应的时间和流形飞行时间）的分段线性函数。通过在参数平面划分矩形网格，在每个矩形内用四个三角形线性插值，实现状态量的快速计算。该表示法几何直观、实现简单、精度满足工程需求（92%~93%区域误差小于5m/s），可用于轨道优化和交会对接问题。

## 应用价值

在轨道设计与优化中，该概念用于分析航天器在地月空间多体引力场中的运动特性，为低能量转移轨道设计提供理论依据。

## 相关概念

- Lorillo稳定性准则（Lorillo Stability Criterion）
- 稳定特征向量（Stable Eigenvector）
- 月球飞越法（Lunar Fly-by Method）
- 可达集（Reachability Set）

## 参考文献

- Pontani和Teofilatto - 2016 - Polyhedral representation of invariant manifolds applied to orbit transfers in the Earth–moon system
