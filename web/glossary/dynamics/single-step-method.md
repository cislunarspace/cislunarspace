---
title: 单步法（Single-Step Method）
description: 仅利用当前时刻的状态信息推算下一时刻状态的数值积分方法，如Runge-Kutta法和梯形法。与多步法不同，单步法不需要保存历史状态，便于起步和变步长，在拟线性化-离散化-递推算法中用于将连续时间动力学离散化。
keywords: 单步法, Single-Step Method, 轨道动力学, 多体问题, 摄动
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 单步法（Single-Step Method）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 单步法详解 | 术语定义
  description: 仅利用当前时刻的状态信息推算下一时刻状态的数值积分方法，如Runge-Kutta法和梯形法。与多步法不同，单步法不需要保存历史状态，便于起步和变步长，在拟线性化-离散化-递推算法中用于将连续时间动力学离散化。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 单步法详解 | 术语定义
  description: 仅利用当前时刻的状态信息推算下一时刻状态的数值积分方法，如Runge-Kutta法和梯形法。与多步法不同，单步法不需要保存历史状态，便于起步和变步长，在拟线性化-离散化-递推算法中用于将连续时间动力学离散化。
  image: /logo.png
permalink: /glossary/dynamics/single-step-method/
---

# 单步法（Single-Step Method）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

仅利用当前时刻的状态信息推算下一时刻状态的数值积分方法，如Runge-Kutta法和梯形法。与多步法不同，单步法不需要保存历史状态，便于起步和变步长，在拟线性化-离散化-递推算法中用于将连续时间动力学离散化。

## 应用价值

在轨道设计与优化中，该概念用于分析航天器在地月空间多体引力场中的运动特性，为低能量转移轨道设计提供理论依据。

## 相关概念

- 月球飞越法（Lunar Fly-by Method）
- 可达集（Reachability Set）
- 最大能量逃逸轨迹（Maximum-Energy Escape Trajectory）
- 拉普拉斯方法（Laplace Method）

## 参考文献

- Wang 等 - 2024 - Low-energy earth–moon transfer autonomous guidance considering high-fidelity orbital dynamics
