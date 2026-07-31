---
title: 极点配置（Pole Placement）
description: 线性系统理论中的经典控制设计方法：通过选择状态反馈增益矩阵 K，将闭环系统 A+BK 的特征值（极点）配置到复平面上的期望位置。对于离散系统，收敛的充要条件是所有闭环极点在单位圆内。
keywords: 极点配置, Pole Placement, 状态反馈, 特征值, 线性控制, 离散系统
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 极点配置（Pole Placement）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 极点配置详解 | 术语定义
  description: 线性系统理论中的经典控制设计方法：通过选择状态反馈增益矩阵 K，将闭环系统 A+BK 的特征值（极点）配置到复平面上的期望位置。对于离散系统，收敛的充要条件是所有闭环极点在单位圆内。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 极点配置详解 | 术语定义
  description: 线性系统理论中的经典控制设计方法：通过选择状态反馈增益矩阵 K，将闭环系统 A+BK 的特征值（极点）配置到复平面上的期望位置。对于离散系统，收敛的充要条件是所有闭环极点在单位圆内。
  image: /logo.png
permalink: /glossary/fundamentals/pole-placement/
---

# 极点配置（Pole Placement）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

线性系统理论中的经典控制设计方法：通过选择状态反馈增益矩阵 K，将闭环系统 A+BK 的特征值（极点）配置到复平面上的期望位置。对于离散系统，收敛的充要条件是所有闭环极点在单位圆内。论文将此方法应用于定常变换后的离散系统，将极点配置在 ±1/20 和 ±i/20，使误差在 2-3 个 Halo 轨道周期内收敛到均值 0.062 km。

## 应用价值

极点配置是轨道维持控制的核心方法。在 Halo 轨道的长期运行中，航天器受到多种摄动因素影响，轨道会逐渐偏离标称轨迹。通过状态反馈控制，将闭环极点配置在复平面特定位置，可以保证误差按指数速率收敛。在离散系统中，将极点配置在单位圆内且靠近圆心的位置，可以在抑制噪声放大和保证收敛速度之间取得平衡。该方法在月球卫星导航、通信卫星姿态控制和人造卫星轨道维持中均有广泛应用，是控制工程师必须掌握的基础方法。

## 相关概念

- [状态反馈（State Feedback）](/glossary/fundamentals/state-feedback/)
- [特征值（Eigenvalue）](/glossary/fundamentals/eigenvalue/)
- [ Halo 轨道（Halo Orbit）](/glossary/orbits/halo-orbit/)
- [线性周期系统（Linear Periodic System）](/glossary/fundamentals/linear-periodic-system/)

## 参考文献

- 徐明和徐世杰 - 2008 - Halo轨道维持的线性周期控制策略
