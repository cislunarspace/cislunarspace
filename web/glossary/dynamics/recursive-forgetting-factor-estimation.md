---
title: 递归遗忘因子估计（Recursive Forgetting Factor Estimation）
description: 一种在线参数估计方法。用指数遗忘因子 lambda 对历史数据加权：越新的数据权重越大，越旧的数据权重指数衰减。数学形式为估计值 = (e^{-lambda}/gamma_k) * (gamma_{k-1} * 旧估计 + 新观测)。适用于扰动统计特性缓慢变化的场景，使估计器能跟踪时变参数。
keywords: 递归遗忘因子估计, Recursive Forgetting Factor Estimation
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 递归遗忘因子估计（Recursive Forgetting Factor Estimation）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 递归遗忘因子估计详解 | 术语定义
  description: 一种在线参数估计方法。用指数遗忘因子 lambda 对历史数据加权：越新的数据权重越大，越旧的数据权重指数衰减。数学形式为估计值 = (e^{-lambda}/gamma_k) * (gamma_{k-1} * 旧估计 + 新观测)。适用于扰动统计特性缓慢变化的场景，使估计器能跟踪时变参数。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 递归遗忘因子估计详解 | 术语定义
  description: 一种在线参数估计方法。用指数遗忘因子 lambda 对历史数据加权：越新的数据权重越大，越旧的数据权重指数衰减。数学形式为估计值 = (e^{-lambda}/gamma_k) * (gamma_{k-1} * 旧估计 + 新观测)。适用于扰动统计特性缓慢变化的场景，使估计器能跟踪时变参数。
  image: /logo.png
permalink: /glossary/dynamics/recursive-forgetting-factor-estimation/
---

# 递归遗忘因子估计（Recursive Forgetting Factor Estimation）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种在线参数估计方法。用指数遗忘因子 lambda 对历史数据加权：越新的数据权重越大，越旧的数据权重指数衰减。数学形式为估计值 = (e^{-lambda}/gamma_k) * (gamma_{k-1} * 旧估计 + 新观测)。适用于扰动统计特性缓慢变化的场景，使估计器能跟踪时变参数。

## 应用价值

在实际的地月空间任务中，在姿态控制与导航算法中发挥重要作用，在测量和数据处理中用于提高精度和可靠性。。

## 相关概念

- [航迹角γ（Flight-Path Angle）](/glossary/dynamics/flight-path-angle/)
- [球谐函数模型（Spherical Harmonic Model）](/glossary/dynamics/spherical-harmonic-model/)
- [星历模型（Ephemeris Model）](/glossary/dynamics/ephemeris-model/)
- [人工平动点（Artificial Libration Point）](/glossary/dynamics/artificial-libration-point/)

## 参考文献

- Sanchez et al. 2020
