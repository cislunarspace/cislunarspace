---
title: 动态步长限制器（Dynamic Step Limiter）
description: 对拟牛顿步长进行动态缩放的技巧，通过公式P_{i+1}=P_i+ΔP_i/(1+||ΔP_i||)限制大步长带来的振荡，在不改变搜索方向的前提下扩大拟牛顿法的收敛域。
keywords: 动态步长限制器, Dynamic Step Limiter, 轨道动力学, 多体问题, 摄动
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 动态步长限制器（Dynamic Step Limiter）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 动态步长限制器详解 | 术语定义
  description: 对拟牛顿步长进行动态缩放的技巧，通过公式P_{i+1}=P_i+ΔP_i/(1+||ΔP_i||)限制大步长带来的振荡，在不改变搜索方向的前提下扩大拟牛顿法的收敛域。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 动态步长限制器详解 | 术语定义
  description: 对拟牛顿步长进行动态缩放的技巧，通过公式P_{i+1}=P_i+ΔP_i/(1+||ΔP_i||)限制大步长带来的振荡，在不改变搜索方向的前提下扩大拟牛顿法的收敛域。
  image: /logo.png
permalink: /glossary/dynamics/dynamic-step-limiter/
---

# 动态步长限制器（Dynamic Step Limiter）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

对拟牛顿步长进行动态缩放的技巧，通过公式P_{i+1}=P_i+ΔP_i/(1+||ΔP_i||)限制大步长带来的振荡，在不改变搜索方向的前提下扩大拟牛顿法的收敛域。

## 应用价值

在轨道设计与优化中，该概念用于分析航天器在地月空间多体引力场中的运动特性，为低能量转移轨道设计提供理论依据。

## 相关概念

- [月球飞越法（Lunar Fly-by Method）](/glossary/dynamics/lunar-fly-by-method/)
- [可达集（Reachability Set）](/glossary/dynamics/reachability-set/)
- [最大能量逃逸轨迹（Maximum-Energy Escape Trajectory）](/glossary/dynamics/maximum-energy-escape-trajectory/)
- [拉普拉斯方法（Laplace Method）](/glossary/dynamics/laplace-method/)

## 参考文献

- Thorne 1996
