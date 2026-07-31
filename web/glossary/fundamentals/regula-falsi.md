---
title: 试位法（Regula Falsi）
description: 一种求解非线性方程的迭代数值方法，基于线性插值在两个已知符号相反的函数值之间估计零点位置。与二分法不同，试位法利用函数值的大小信息加速收敛。论文利用该方法在单调的飞行时间曲线上求解指数正弦曲线 Lambert 问题：给定转移时间，在飞行时间曲线上找到对应的出发航迹角。
keywords: 试位法, Regula Falsi
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 试位法（Regula Falsi）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 试位法详解 | 术语定义
  description: 一种求解非线性方程的迭代数值方法，基于线性插值在两个已知符号相反的函数值之间估计零点位置。与二分法不同，试位法利用函数值的大小信息加速收敛。论文利用该方法在单调的飞行时间曲线上求解指数正弦曲线 Lambert 问题：给定转移时间，在飞行时间曲线上找到对应的出发航迹角。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 试位法详解 | 术语定义
  description: 一种求解非线性方程的迭代数值方法，基于线性插值在两个已知符号相反的函数值之间估计零点位置。与二分法不同，试位法利用函数值的大小信息加速收敛。论文利用该方法在单调的飞行时间曲线上求解指数正弦曲线 Lambert 问题：给定转移时间，在飞行时间曲线上找到对应的出发航迹角。
  image: /logo.png
permalink: /glossary/fundamentals/regula-falsi/
---

# 试位法（Regula Falsi）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种求解非线性方程的迭代数值方法，基于线性插值在两个已知符号相反的函数值之间估计零点位置。与二分法不同，试位法利用函数值的大小信息加速收敛。论文利用该方法在单调的飞行时间曲线上求解指数正弦曲线 Lambert 问题：给定转移时间，在飞行时间曲线上找到对应的出发航迹角。

## 应用价值

在实际的地月空间任务中，在姿态控制与导航算法中发挥重要作用。

## 相关概念

- [控制正则化（Control Regularization）](/glossary/fundamentals/control-regularization/)
- [Cholesky因子分解（Cholesky Factorization）](/glossary/fundamentals/cholesky-factorization/)
- [SPICE 星历工具包（SPICE, SpiceyPy）](/glossary/fundamentals/spice-spiceypy/)
- [抛物线轨道（Parabolic Orbit）](/glossary/fundamentals/parabolic-orbit/)

## 参考文献

- Izzo - 2006 - Lambert's problem for exponential sinusoids
