---
title: RKF7(8)积分器（Runge-Kutta-Fehlberg 7(8) Integrator）
description: 一种自适应变步长数值积分器，通过比较7阶和8阶解的差异估计局部截断误差并自动调节步长。在轨道预报中广泛使用，兼顾精度和效率。
keywords: RKF7(8)积分器, Runge-Kutta-Fehlberg 7(8) Integrator, RKF7(8), fundamentals
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: RKF7(8)积分器（Runge-Kutta-Fehlberg 7(8) Integrator）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: RKF7(8)积分器详解 | 术语定义
  description: 一种自适应变步长数值积分器，通过比较7阶和8阶解的差异估计局部截断误差并自动调节步长。在轨道预报中广泛使用，兼顾精度和效率。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: RKF7(8)积分器详解 | 术语定义
  description: 一种自适应变步长数值积分器，通过比较7阶和8阶解的差异估计局部截断误差并自动调节步长。在轨道预报中广泛使用，兼顾精度和效率。
  image: /logo.png
permalink: /glossary/fundamentals/rkf78/
---

# RKF7(8)积分器（Runge-Kutta-Fehlberg 7(8) Integrator）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种自适应变步长数值积分器，通过比较7阶和8阶解的差异估计局部截断误差并自动调节步长。在轨道预报中广泛使用，兼顾精度和效率。

## 应用价值

该积分器通过7阶和8阶方法的自适应切换实现高精度数值积分，适用于深空轨道的高精度计算。

## 相关概念

- [变结构滑模控制（Variable Structure Sliding Mode Control）](/glossary/fundamentals/vssmc/)
- [庞特里亚金最小值原理（Pontryagin Minimum Principle）](/glossary/fundamentals/pmp/)
- [误差函数（Error Function）](/glossary/fundamentals/erf/)

## 参考文献

- 适用于圆锥曲线的统一根数在地月空间目标轨道预报的应用。
