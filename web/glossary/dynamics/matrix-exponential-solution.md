---
title: 矩阵指数解（Matrix Exponential Solution）
description: 利用矩阵指数近似线性时变系统状态转移矩阵的解析方法。避免了对36个状态转移矩阵微分方程的数值积分，显著降低计算量。
keywords: 矩阵指数解, Matrix Exponential Solution, EXPM, 动力学, 控制, 优化
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 矩阵指数解（Matrix Exponential Solution）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 矩阵指数解（Matrix Exponential Solution）详解 | 术语定义
  description: 利用矩阵指数近似线性时变系统状态转移矩阵的解析方法。避免了对36个状态转移矩阵微分方程的数值积分，显著降低计算量。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 矩阵指数解（Matrix Exponential Solution）详解 | 术语定义
  description: 利用矩阵指数近似线性时变系统状态转移矩阵的解析方法。避免了对36个状态转移矩阵微分方程的数值积分，显著降低计算量。
  image: /logo.png
permalink: /glossary/dynamics/matrix-exponential-solution/
---

# 矩阵指数解（Matrix Exponential Solution）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

利用矩阵指数近似线性时变系统状态转移矩阵的解析方法。避免了对36个状态转移矩阵微分方程的数值积分，显著降低计算量。

## 应用价值

雅可比积分在地月三体系统中守恒，但在不同子系统之间切换时需要能量改变。追踪雅可比常数的变化可以揭示电推进弧段与弹道弧段的能量交替规律，为低能转移轨道设计提供理论依据。

## 相关概念

- [雅可比积分（Jacobi Integral）](/glossary/dynamics/jacobi-integral/)
- [科氏定理（Coriolis Theorem）](/glossary/dynamics/coriolis-theorem/)
- [速度函数（Velocity Function）](/glossary/dynamics/velocity-function/)

## 参考文献

- Rendezvous and Proximity Operations in Cislunar Space Using Linearized Dynamics for Estimation
