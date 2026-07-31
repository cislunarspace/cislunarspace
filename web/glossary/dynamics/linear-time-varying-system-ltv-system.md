---
title: 线性时变系统（Linear Time-Varying System, LTV System）
description: 状态空间方程中系统矩阵 A(t) 随时间变化的线性系统，形式为 dx/dt = A(t)x + Bu。与线性定常系统（LTI）不同，LTV 系统的状态转移矩阵不能简化为矩阵指数，必须通过数值积分求解。在限制性三体问题中，相对运动的线性化模型就是 LTV 系统。
keywords: 线性时变系统, Linear Time-Varying System, LTV System, LTV, 动力学, 最优控制, 轨迹优化
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 线性时变系统（Linear Time-Varying System, LTV System）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 线性时变系统详解 | 术语定义
  description: 状态空间方程中系统矩阵 A(t) 随时间变化的线性系统，形式为 dx/dt = A(t)x + Bu。与线性定常系统（LTI）不同，LTV 系统的状态转移矩阵不能简化为矩阵指数，必须通过数值积分求解。在限制性三体问题中，相对运动的线性化模型就是 LTV 系统。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 线性时变系统详解 | 术语定义
  description: 状态空间方程中系统矩阵 A(t) 随时间变化的线性系统，形式为 dx/dt = A(t)x + Bu。与线性定常系统（LTI）不同，LTV 系统的状态转移矩阵不能简化为矩阵指数，必须通过数值积分求解。在限制性三体问题中，相对运动的线性化模型就是 LTV 系统。
  image: /logo.png
permalink: /glossary/dynamics/linear-time-varying-system-ltv-system/
---

# 线性时变系统（Linear Time-Varying System, LTV System）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

状态空间方程中系统矩阵 A(t) 随时间变化的线性系统，形式为 dx/dt = A(t)x + Bu。与线性定常系统（LTI）不同，LTV 系统的状态转移矩阵不能简化为矩阵指数，必须通过数值积分求解。在限制性三体问题中，相对运动的线性化模型就是 LTV 系统。

## 应用价值

基于该术语的定义，状态空间方程中系统矩阵 A(t) 随时间变化的线性系统，形式为 dx/dt = A(t)x + Bu。

## 相关概念

- [三体问题（Three-Body Problem）](/glossary/dynamics/three-body-problem/)
- [最优控制（Optimal Control）](/glossary/dynamics/optimal-control/)
- [轨迹优化（Trajectory Optimization）](/glossary/dynamics/trajectory-optimization/)

## 参考文献

- Sanchez et al. 2020
