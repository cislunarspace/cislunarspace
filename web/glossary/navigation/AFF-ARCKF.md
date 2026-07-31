---
title: 基于卡方检验的自适应遗忘因子鲁棒容积卡尔曼滤波（Chi-Square Test-Based Adaptive Forgetting Factor ARCKF, AFF-ARCKF）
description: 在ARCKF基础上，用归一化新息平方的卡方检验动态调整遗忘因子：新息异常时增大遗忘因子以放慢Q更新，新息正常时减小遗忘因子以加快收敛。比标准ARCKF收敛速度提升50%以上。
keywords: 基于卡方检验的自适应遗忘因子鲁棒容积卡尔曼滤波, Chi-Square Test-Based Adaptive Forgetting Factor ARCKF, AFF-ARCKF, AFF-ARCKF, GNSS, 定位, 测距, 定轨
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 基于卡方检验的自适应遗忘因子鲁棒容积卡尔曼滤波（Chi-Square Test-Based Adaptive Forgetting Factor ARCKF, AFF-ARCKF）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 基于卡方检验的自适应遗忘因子鲁棒容积卡尔曼滤波详解 | 术语定义
  description: 在ARCKF基础上，用归一化新息平方的卡方检验动态调整遗忘因子：新息异常时增大遗忘因子以放慢Q更新，新息正常时减小遗忘因子以加快收敛。比标准ARCKF收敛速度提升50%以上。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 基于卡方检验的自适应遗忘因子鲁棒容积卡尔曼滤波详解 | 术语定义
  description: 在ARCKF基础上，用归一化新息平方的卡方检验动态调整遗忘因子：新息异常时增大遗忘因子以放慢Q更新，新息正常时减小遗忘因子以加快收敛。比标准ARCKF收敛速度提升50%以上。
  image: /logo.png
permalink: /glossary/navigation/AFF-ARCKF/
---

# 基于卡方检验的自适应遗忘因子鲁棒容积卡尔曼滤波（Chi-Square Test-Based Adaptive Forgetting Factor ARCKF, AFF-ARCKF）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

在ARCKF基础上，用归一化新息平方的卡方检验动态调整遗忘因子：新息异常时增大遗忘因子以放慢Q更新，新息正常时减小遗忘因子以加快收敛。比标准ARCKF收敛速度提升50%以上。

## 应用价值

该技术在地月空间导航与定轨中发挥关键作用，为探测器提供高精度位置和速度信息。

## 相关概念

- [Autonomous Orbit Determination](/glossary/navigation/autonomous-orbit-determination/)
- [Precision Orbit Determination](/glossary/navigation/precision-orbit-determination/)
- [Inter-Satellite Link](/glossary/navigation/inter-satellite-link/)

## 参考文献

- Xu et al. 2026。
