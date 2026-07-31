---
title: Cramér-Rao误差下界（Cramér-Rao Lower Bound）
description: 随机系统中任何无偏估计器协方差的理论下界，等于Fisher信息矩阵的逆。论文将CRLB用作可观测度的量化度量标准：CRLB越小，系统可观测性越好，导航精度的理论上限越高。通过迭代计算信息矩阵，可以在不运行滤波器的情况下评估不同导航方案的精度潜力，为导航方案设计提供理论依据。
keywords: Cramér-Rao误差下界, Cramér-Rao Lower Bound, CRLB, 轨道力学, 引力场, 坐标系统
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Cramér-Rao误差下界（Cramér-Rao Lower Bound）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: Cramér-Rao误差下界详解 | 术语定义
  description: 随机系统中任何无偏估计器协方差的理论下界，等于Fisher信息矩阵的逆。论文将CRLB用作可观测度的量化度量标准：CRLB越小，系统可观测性越好，导航精度的理论上限越高。通过迭代计算信息矩阵，可以在不运行滤波器的情况下评估不同导航方案的精度潜力，为导航方案设计提供理论依据。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Cramér-Rao误差下界详解 | 术语定义
  description: 随机系统中任何无偏估计器协方差的理论下界，等于Fisher信息矩阵的逆。论文将CRLB用作可观测度的量化度量标准：CRLB越小，系统可观测性越好，导航精度的理论上限越高。通过迭代计算信息矩阵，可以在不运行滤波器的情况下评估不同导航方案的精度潜力，为导航方案设计提供理论依据。
  image: /logo.png
permalink: /glossary/fundamentals/cramr-rao-lower-bound/
---

# Cramér-Rao误差下界（Cramér-Rao Lower Bound）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

随机系统中任何无偏估计器协方差的理论下界，等于Fisher信息矩阵的逆。论文将CRLB用作可观测度的量化度量标准：CRLB越小，系统可观测性越好，导航精度的理论上限越高。通过迭代计算信息矩阵，可以在不运行滤波器的情况下评估不同导航方案的精度潜力，为导航方案设计提供理论依据。

## 应用价值

支撑自主导航系统的开发，提高轨道确定精度 用于评估导航系统的精度上限，指导滤波器设计 为状态估计提供概率框架，提高跟踪精度。

## 相关概念

- [脉冲转向（Orbital Axis Slewing）](/glossary/fundamentals/orbital-axis-slewing/)
- [推进剂质量比（Propellant Mass Fraction）](/glossary/fundamentals/propellant-mass-fraction/)
- [Lyapunov轨道（Lyapunov Orbit）](/glossary/orbits/lyapunov-orbit/)
- [状态转移矩阵（State Transition Matrix）](/glossary/dynamics/state-transition-matrix/)

## 参考文献

- 赵书阁 等 - 2013 - 日地系统L2点Halo轨道自主天文导航及精度分析
