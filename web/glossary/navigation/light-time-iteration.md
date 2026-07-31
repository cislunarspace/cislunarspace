---
title: 光行时迭代（Light-Time Iteration）
description: 计算信号几何传输距离的数值方法。由于信号发射时刻与接收时刻之间存在传播延迟，需要通过迭代求解：先假设发射时刻等于接收时刻，计算信号传输距离，再用该距离更新发射时刻，反复迭代直至距离收敛。迭代同时考虑引力光线偏折的影响。
keywords: 定位, 导航, 轨道确定, 星座
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 光行时迭代（Light-Time Iteration）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 光行时迭代详解 | 术语定义
  description: 计算信号几何传输距离的数值方法。由于信号发射时刻与接收时刻之间存在传播延迟，需要通过迭代求解：先假设发射时刻等于接收时刻，计算信号传输距离，再用该距离更新发射时刻，反复迭代直至距离收敛。迭代同时考虑引力光线偏折的影响。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 光行时迭代详解 | 术语定义
  description: 计算信号几何传输距离的数值方法。由于信号发射时刻与接收时刻之间存在传播延迟，需要通过迭代求解：先假设发射时刻等于接收时刻，计算信号传输距离，再用该距离更新发射时刻，反复迭代直至距离收敛。迭代同时考虑引力光线偏折的影响。
  image: /logo.png
permalink: /glossary/navigation/light-time-iteration/
---

# 光行时迭代（Light-Time Iteration）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

计算信号几何传输距离的数值方法。由于信号发射时刻与接收时刻之间存在传播延迟，需要通过迭代求解：先假设发射时刻等于接收时刻，计算信号传输距离，再用该距离更新发射时刻，反复迭代直至距离收敛。迭代同时考虑引力光线偏折的影响。

## 应用价值

该指标在航天器导航系统中用于评估定位精度，是设计导航算法和任务规划的重要依据。

## 相关概念

- [位置精度因子（Position Dilution of Precision）](/glossary/navigation/position-dilution-of-precision/)
- [甚长基线干涉测量（Very Long Baseline Interferometry）](/glossary/navigation/very-long-baseline-interferometry/)
- [轨道预报（Orbit Prediction）](/glossary/navigation/orbit-prediction/)
- [初值点（Initial Epoch Point）](/glossary/navigation/initial-epoch-point/)

## 参考文献

- 曹建峰 等 - 2025 - 地月空间单程测量观测建模与算法实现
