---
title: RKF7(8)积分器（RKF7(8) Integrator）
description: 一种自适应步长Runge-Kutta-Fehlberg方法，通过7阶公式计算解、8阶公式误差估计来自动调整步长。论文采用RKF7(8)进行导航星座定轨和用户航天器导航的数值仿真，数据采样间隔为10分钟。
keywords: RKF7(8), 轨道, 动力学, 控制, 稳定性
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: RKF7(8)积分器（RKF7(8) Integrator）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: RKF7(8)积分器详解 | 术语定义
  description: 一种自适应步长Runge-Kutta-Fehlberg方法，通过7阶公式计算解、8阶公式误差估计来自动调整步长。论文采用RKF7(8)进行导航星座定轨和用户航天器导航的数值仿真，数据采样间隔为10分钟。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: RKF7(8)积分器详解 | 术语定义
  description: 一种自适应步长Runge-Kutta-Fehlberg方法，通过7阶公式计算解、8阶公式误差估计来自动调整步长。论文采用RKF7(8)进行导航星座定轨和用户航天器导航的数值仿真，数据采样间隔为10分钟。
  image: /logo.png
permalink: /glossary/dynamics/rkf78-integrator/
---

# RKF7(8)积分器（RKF7(8) Integrator）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种自适应步长Runge-Kutta-Fehlberg方法，通过7阶公式计算解、8阶公式误差估计来自动调整步长。论文采用RKF7(8)进行导航星座定轨和用户航天器导航的数值仿真，数据采样间隔为10分钟。

## 应用价值

该指标在地月空间航天器自主导航中具有重要作用。由于地月空间可见卫星少且几何分布变化大，定位精度受几何分布影响显著，实际任务中需结合实时几何计算进行导航滤波器设计，以获得最优定位性能。

## 相关概念

- [L4（L4）](/glossary/dynamics/l4/)
- [轨道内分量（In-Plane）](/glossary/dynamics/in-plane/)
- [Hill方程（Hill's Equations）](/glossary/dynamics/hills-equations/)
- [雅可比能量（Jacobi Energy）](/glossary/dynamics/jacobi-energy/)

## 参考文献

- Liu et al. 2024, A novel autonomous navigation constellation in the Earth–Moon system
