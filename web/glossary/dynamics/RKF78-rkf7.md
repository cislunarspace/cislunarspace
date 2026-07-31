---
title: RKF7(8)积分器（RKF7(8) Integrator）
description: 一种自适应步长Runge-Kutta-Fehlberg方法，通过7阶公式计算解、8阶公式误差估计来自动调整步长。论文采用RKF7(8)进行导航星座定轨和用户航天器导航的数值仿真，数据采样间隔为10分钟。
keywords: RKF7(8)积分器, RKF7(8) Integrator, RKF7(8), 动力学, 优化, 数值积分
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
permalink: /glossary/dynamics/RKF78-rkf7/
---

# RKF7(8)积分器（RKF7(8) Integrator）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种自适应步长Runge-Kutta-Fehlberg方法，通过7阶公式计算解、8阶公式误差估计来自动调整步长。论文采用RKF7(8)进行导航星座定轨和用户航天器导航的数值仿真，数据采样间隔为10分钟。

## 应用价值

通过7阶公式计算解、8阶公式误差估计实现自适应步长控制，在导航星座定轨和用户航天器导航仿真中保证数值精度与计算效率的平衡。

## 相关概念

- [数值积分（Numerical Integration）](/glossary/fundamentals/数值积分/)
- [自适应步长（Adaptive Step Size）](/glossary/fundamentals/自适应步长/)
- [轨道传播（Orbit Propagation）](/glossary/dynamics/轨道传播/)

## 参考文献

- Liu et al. 2024, A novel autonomous navigation constellation in the Earth–Moon system
