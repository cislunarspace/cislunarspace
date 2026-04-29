---
title: 重力与引力（Gravity vs Gravitation）
description: 详细解析重力与引力的区别、离心惯性力的影响、重力加速度的计算及在飞行力学中的意义
keywords: 重力, 引力, Gravity, Gravitation, 离心惯性力, 重力加速度, 引力加速度, 地球自转
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 重力与引力（Gravity vs Gravitation）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 重力与引力（Gravity vs Gravitation）详解 | 术语定义
  description: 详细解析重力与引力的区别、离心惯性力的影响及在飞行力学中的意义
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 重力与引力（Gravity vs Gravitation）详解 | 术语定义
  description: 详细解析重力与引力的区别、离心惯性力的影响及在飞行力学中的意义
  image: /logo.png
permalink: /glossary/fundamentals/gravity-vs-gravitation/
---

# 重力与引力（Gravity vs Gravitation）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

引力（Gravitation）是地球对空间物体的万有引力，方向指向地心，仅与物体质量和地心距有关。重力（Gravity）是引力与地球自转产生的离心惯性力的合力。在与地球固联的非惯性坐标系中分析物体运动时，必须使用重力而非引力。

$$m\mathbf{g}' = m\mathbf{g} + m\mathbf{a}_e'$$

其中 $\mathbf{g}$ 为引力加速度，$\mathbf{a}_e' = -\boldsymbol{\omega}_e \times (\boldsymbol{\omega}_e \times \mathbf{r})$ 为离心加速度，$\mathbf{g}'$ 为重力加速度。

## 核心要素

### 引力与重力的对比

| 特征 | 引力（Gravitation） | 重力（Gravity） |
|:---|:---|:---|
| 来源 | 万有引力 | 引力 + 离心惯性力 |
| 方向 | 指向地心 | 偏离地心（向赤道方向偏移） |
| 大小变化 | 仅随地心距变化 | 随地心距和纬度变化 |
| 适用坐标系 | 惯性坐标系 | 地固坐标系 |

### 离心加速度的影响

离心加速度位于子午面内，垂直于地球自转轴并指向外。其径向和纬度分量为：

$$\begin{cases} a_{er}' = r\omega_e^2 \cos^2\phi \\ a_{e\phi}' = -r\omega_e^2 \sin\phi\cos\phi \end{cases}$$

赤道上离心加速度与引力加速度之比 $q \approx 3.46 \times 10^{-3}$，与地球扁率 $\alpha_e$ 同量级。

### 重力加速度的计算

重力加速度在径向和纬度方向的分量为：

$$\begin{cases} g_r' = -\frac{fM}{r^2}\left[1 + J\left(\frac{a_e}{r}\right)^2(1 - 3\sin^2\phi) - q\left(\frac{r}{a_e}\right)^3\cos^2\phi\right] \\ g_\phi' = -\frac{fM}{r^2}\left[J\left(\frac{a_e}{r}\right)^2 + \frac{q}{2}\left(\frac{r}{a_e}\right)^3\right]\sin 2\phi \end{cases}$$

其中 $J$ 为地球引力场带谐系数。

## 应用价值

正确区分引力和重力是建立飞行器运动方程的基础。在发射坐标系（地固坐标系）中，使用重力加速度；在地心惯性坐标系中，使用引力加速度。混淆两者会导致弹道计算的系统误差。对于地月空间任务，近地段需用重力，远离地球后两者差异可忽略。

## 相关概念

- [引力位（Gravitational Potential）](/glossary/fundamentals/gravitational-potential/)
- [地球椭球体（Earth Ellipsoid）](/glossary/fundamentals/earth-ellipsoid/)
- [地心固联坐标系（ECEF）](/glossary/fundamentals/ecef-frame/)
- [地心惯性坐标系（ECI）](/glossary/fundamentals/geocentric-inertial-frame/)
- [标准大气（Standard Atmosphere）](/glossary/fundamentals/standard-atmosphere/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 任萱, 肖峰. 人造地球卫星轨道力学[M]. 国防科技大学出版社.
