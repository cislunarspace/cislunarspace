---
title: 检测似然函数（Detection Likelihood Function）
description: 给定目标状态和传感器配置参数时，传感器成功检测到目标的概率函数。它是传感器视场约束的分段函数：目标在视场内时取值由距离和角度决定的概率值（0到1之间），目标在视场外时为零。在可达域搜索框架中，优化传感器指向参数以最大化检测似然函数的期望值，从而提升目标捕获概率。
keywords: 检测似然函数, Detection Likelihood Function, 观测, 测量, 传感器
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 检测似然函数（Detection Likelihood Function）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 检测似然函数详解 | 术语定义
  description: 给定目标状态和传感器配置参数时，传感器成功检测到目标的概率函数。它是传感器视场约束的分段函数：目标在视场内时取值由距离和角度决定的概率值（0到1之间），目标在视场外时为零。在可达域搜索框架中，优化传感器指向参数以最大化检测似然函数的期望值，从而提升目标捕获概率。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 检测似然函数详解 | 术语定义
  description: 给定目标状态和传感器配置参数时，传感器成功检测到目标的概率函数。它是传感器视场约束的分段函数：目标在视场内时取值由距离和角度决定的概率值（0到1之间），目标在视场外时为零。在可达域搜索框架中，优化传感器指向参数以最大化检测似然函数的期望值，从而提升目标捕获概率。
  image: /logo.png
permalink: /glossary/observation/detection-likelihood-function/
---

# 检测似然函数（Detection Likelihood Function）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

给定目标状态和传感器配置参数时，传感器成功检测到目标的概率函数。它是传感器视场约束的分段函数：目标在视场内时取值由距离和角度决定的概率值（0到1之间），目标在视场外时为零。在可达域搜索框架中，优化传感器指向参数以最大化检测似然函数的期望值，从而提升目标捕获概率。

## 应用价值

本术语在地月空间任务中具有重要应用价值。在轨道设计方面，它可以用于优化转移轨迹，降低任务燃料消耗。在姿态控制与动力学分析中，它有助于理解航天器在复杂引力场中的运动特性，为任务规划提供理论支撑。在导航与轨道确定中，基于该术语的方法能够提高轨道预报精度，支撑自主导航算法的发展。

## 相关概念

- [纯角度测量（Angles-only Measurement）](/glossary/observation/angles-only-measurement/)
- [JPL星历表（JPL Ephemeris）](/glossary/observation/jpl-ephemeris/)
- [测量矩阵（Measurement Matrix）](/glossary/observation/measurement-matrix/)

## 参考文献

- Li 等 - 2025 - Efficient reachable domain search-tracking for cislunar non-cooperative targets via designed quadrature
