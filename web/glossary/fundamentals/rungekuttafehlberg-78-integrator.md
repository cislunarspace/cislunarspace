---
title: RKF7(8)积分器（Runge-Kutta-Fehlberg 7(8) Integrator）
description: 一种自适应变步长数值积分器，通过比较7阶和8阶解的差异估计局部截断误差并自动调节步长。在轨道预报中广泛使用，兼顾精度和效率。
keywords: RKF7(8)积分器, Runge-Kutta-Fehlberg 7(8) Integrator, RKF7(8), 轨道力学, 数值积分
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
permalink: /glossary/fundamentals/rungekuttafehlberg-78-integrator/
---

# RKF7(8)积分器（Runge-Kutta-Fehlberg 7(8) Integrator）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文来源：学术论文与专业资料整理
>
> 站长地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种自适应变步长数值积分器，通过比较7阶和8阶解的差异估计局部截断误差并自动调节步长。在轨道预报中广泛使用，兼顾精度和效率。

## 应用价值

在轨道预报中，RKF7(8)通过7阶和8阶解的自适应比较自动调节积分步长，在保证计算精度的同时提高效率。这一特性对长时间轨道预报尤为重要，可兼顾数值稳定性与计算速度。

## 相关概念

- [轨道状态向量（Orbital State Vector）](/glossary/fundamentals/orbital-state-vector/)
- [坐标时（Coordinate Time）](/glossary/fundamentals/coordinate-time/)
- [Hill坐标系（Hill Frame）](/glossary/fundamentals/hill-frame/)
- [开普勒定律（Kepler's Laws）](/glossary/fundamentals/keplers-laws/)

## 参考文献

- 适用于圆锥曲线的统一根数在地月空间目标轨道预报的应用
