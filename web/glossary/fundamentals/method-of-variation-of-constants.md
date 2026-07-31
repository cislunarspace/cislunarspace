---
title: 常数变易法（Method of Variation of Constants）
description: 一种将微分方程中常数参数替换为待定函数的求解技术。在本文中，将平动点附近周期轨道一阶近似解的振幅和相位视为时变函数，通过多项式拟合转移轨道的螺旋特性。
keywords: 常数变易法, Method of Variation of Constants, 平动点, 周期轨道, 多项式拟合, Gauss伪谱法
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 常数变易法（Method of Variation of Constants）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 常数变易法详解 | 术语定义
  description: 一种将微分方程中常数参数替换为待定函数的求解技术。在本文中，将平动点附近周期轨道一阶近似解的振幅和相位视为时变函数，通过多项式拟合转移轨道的螺旋特性。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 常数变易法详解 | 术语定义
  description: 一种将微分方程中常数参数替换为待定函数的求解技术。在本文中，将平动点附近周期轨道一阶近似解的振幅和相位视为时变函数，通过多项式拟合转移轨道的螺旋特性。
  image: /logo.png
permalink: /glossary/fundamentals/method-of-variation-of-constants/
---

# 常数变易法（Method of Variation of Constants）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种将微分方程中常数参数替换为待定函数的求解技术。在本文中，将平动点附近周期轨道一阶近似解的振幅和相位视为时变函数，通过多项式拟合转移轨道的螺旋特性，由此构造适用于Gauss伪谱法的形状函数。

## 应用价值

常数变易法是连接解析近似与数值计算的重要桥梁。在平动点周期轨道的转移轨道设计中，线性化的周期轨道解具有固定的振幅和相位，而实际转移轨道往往沿螺旋线逐渐远离或靠近周期轨道。通过将常数视为时变函数，并用多项式拟合其变化规律，可以构造出符合实际动力学的形状函数，用于 Gauss 伪谱法等数值优化方法。该方法有效降低了周期轨道转移问题的求解难度，在 Halo 轨道部署和 L1/L2 晕轨道插入任务中具有重要应用价值。

## 相关概念

- [ Gauss 伪谱法（Gauss Pseudospectral Method）](/glossary/fundamentals/gauss-pseudospectral-method/)
- [周期轨道（Periodic Orbit）](/glossary/orbits/periodic-orbit/)
- [ Halo 轨道（Halo Orbit）](/glossary/orbits/halo-orbit/)
- [形状函数（Shape Function）](/glossary/fundamentals/shape-function/)

## 参考文献

- 平动点周期轨道间小推力转移的Gauss伪谱法
