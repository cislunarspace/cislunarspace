---
title: 自适应网格细分（Adaptive Grid Subdivision）
description: 一种集合导向的数值方法。从包含目标集合的初始矩形出发，沿各坐标方向反复二分半径，逐步生成越来越小的矩形网格族。每步细分后仅保留与目标集合有交的网格，丢弃其余。各维度的网格精度可独立设定，适用于不同维数的不变集计算。本文将其应用于庞加莱截面上的覆盖构建，用于系统地检测不变流形交点。
keywords: 自适应网格细分, Adaptive Grid Subdivision, 航天器, 基础, 坐标
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 自适应网格细分（Adaptive Grid Subdivision）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 自适应网格细分详解 | 术语定义
  description: 一种集合导向的数值方法。从包含目标集合的初始矩形出发，沿各坐标方向反复二分半径，逐步生成越来越小的矩形网格族。每步细分后仅保留与目标集合有交的网格，丢弃其余。各维度的网格精度可独立设定，适用于不同维数的不变集计算。本文将其应用于庞加莱截面上的覆盖构建，用于系统地检测不变流形交点。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 自适应网格细分详解 | 术语定义
  description: 一种集合导向的数值方法。从包含目标集合的初始矩形出发，沿各坐标方向反复二分半径，逐步生成越来越小的矩形网格族。每步细分后仅保留与目标集合有交的网格，丢弃其余。各维度的网格精度可独立设定，适用于不同维数的不变集计算。本文将其应用于庞加莱截面上的覆盖构建，用于系统地检测不变流形交点。
  image: /logo.png
permalink: /glossary/fundamentals/adaptive-grid-subdivision/
---

# 自适应网格细分（Adaptive Grid Subdivision）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种集合导向的数值方法。从包含目标集合的初始矩形出发，沿各坐标方向反复二分半径，逐步生成越来越小的矩形网格族。每步细分后仅保留与目标集合有交的网格，丢弃其余。各维度的网格精度可独立设定，适用于不同维数的不变集计算。本文将其应用于庞加莱截面上的覆盖构建，用于系统地检测不变流形交点。

## 应用价值

不变流形理论是将低能量转移轨道设计与动力学分析相结合的关键工具。在实际任务中，需要根据具体应用场景和约束条件选择合适的分析方法。。

## 相关概念

- 星载软件（On-Board Software）
- 质心坐标时（Barycentric Coordinate Time, TCB）
- 地平坐标系（Horizontal Coordinate System）

## 参考文献

- Dellnitz and Junge, 2002; Zanzottera et al., 2012
