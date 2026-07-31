---
title: 非合作目标搜索与跟踪（Non-Cooperative Target Search and Tracking）
description: 针对不配合或敌意航天器的探测、定位和持续跟踪技术体系。在地月空间中面临三重挑战：传感器覆盖有限导致量测数据稀疏、三体引力环境使状态演化高度非线性、目标未知机动进一步放大不确定性。典型方案是「搜索-跟踪」两阶段策略：搜索阶段用粒子滤波构建可达域并全局搜索，检测到目标后切换至无迹卡尔曼滤波进行高精度跟踪。
keywords: 非合作目标搜索与跟踪, Non-Cooperative Target Search and Tracking, 空间监视, 目标跟踪, 光学观测
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 非合作目标搜索与跟踪（Non-Cooperative Target Search and Tracking）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 非合作目标搜索与跟踪详解 | 术语定义
  description: 针对不配合或敌意航天器的探测、定位和持续跟踪技术体系。在地月空间中面临三重挑战：传感器覆盖有限导致量测数据稀疏、三体引力环境使状态演化高度非线性、目标未知机动进一步放大不确定性。典型方案是「搜索-跟踪」两阶段策略：搜索阶段用粒子滤波构建可达域并全局搜索，检测到目标后切换至无迹卡尔曼滤波进行高精度跟踪。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 非合作目标搜索与跟踪详解 | 术语定义
  description: 针对不配合或敌意航天器的探测、定位和持续跟踪技术体系。在地月空间中面临三重挑战：传感器覆盖有限导致量测数据稀疏、三体引力环境使状态演化高度非线性、目标未知机动进一步放大不确定性。典型方案是「搜索-跟踪」两阶段策略：搜索阶段用粒子滤波构建可达域并全局搜索，检测到目标后切换至无迹卡尔曼滤波进行高精度跟踪。
  image: /logo.png
permalink: /glossary/observation/non-cooperative-target-search-and-tracking/
---

# 非合作目标搜索与跟踪（Non-Cooperative Target Search and Tracking）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 术语来源：Li 等 - 2025 - Efficient reachable domain search-tracking for cislunar non-cooperative targets via designed quadrature
>
> 本文地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

针对不配合或敌意航天器的探测、定位和持续跟踪技术体系。在地月空间中面临三重挑战：传感器覆盖有限导致量测数据稀疏、三体引力环境使状态演化高度非线性、目标未知机动进一步放大不确定性。典型方案是「搜索-跟踪」两阶段策略：搜索阶段用粒子滤波构建可达域并全局搜索，检测到目标后切换至无迹卡尔曼滤波进行高精度跟踪。

## 应用价值

非合作目标搜索与跟踪是非合作目标监视的核心技术环节。通过连续弧段观测，非合作目标搜索与跟踪算法可估计目标轨道参数和机动意图，为碰撞预警和威胁评估提供数据支持。

## 相关概念

- [代价矩阵（Cost Matrix）](/glossary/observation/cost-matrix/)
- [粗糙度（Roughness）](/glossary/observation/roughness/)
- [星下点（Sub-satellite Point）](/glossary/observation/sub-satellite-point/)
- [四维点匹配（Four-Dimensional Point Matching）](/glossary/observation/four-dimensional-point-matching/)

## 参考文献

- Li 等 - 2025 - Efficient reachable domain search-tracking for cislunar non-cooperative targets via designed quadrature
