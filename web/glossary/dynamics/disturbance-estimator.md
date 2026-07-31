---
title: 扰动估计器（Disturbance Estimator）
description: 在鲁棒控制中在线估计扰动统计特性（均值和协方差矩阵）的算法。通常采用递归公式，以遗忘因子加权历史数据，逐步更新估计值。估计结果供概率约束方法使用，将未知扰动转化为可量化的概率约束参数。
keywords: Disturbance Estimator, 三体问题, 动力学分叉, 扰动估计器, 轨道力学
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 扰动估计器（Disturbance Estimator）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 扰动估计器详解 | 术语定义
  description: 在鲁棒控制中在线估计扰动统计特性（均值和协方差矩阵）的算法。通常采用递归公式，以遗忘因子加权历史数据，逐步更新估计值。估计结果供概率约束方法使用，将未知扰动转化为可量化的概率约束参数。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 扰动估计器详解 | 术语定义
  description: 在鲁棒控制中在线估计扰动统计特性（均值和协方差矩阵）的算法。通常采用递归公式，以遗忘因子加权历史数据，逐步更新估计值。估计结果供概率约束方法使用，将未知扰动转化为可量化的概率约束参数。
  image: /logo.png
permalink: /glossary/dynamics/disturbance-estimator/
---

# 扰动估计器（Disturbance Estimator）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

在鲁棒控制中在线估计扰动统计特性（均值和协方差矩阵）的算法。通常采用递归公式，以遗忘因子加权历史数据，逐步更新估计值。估计结果供概率约束方法使用，将未知扰动转化为可量化的概率约束参数。

## 应用价值

在轨道设计和控制中，该概念对理解航天器在地月空间中的运动特性和任务设计具有重要作用。

## 相关概念

- [最小范数解（Minimum Norm Solution）](/glossary/dynamics/minimum-norm-solution/)
- [刚体动力学（Rigid Body Dynamics）](/glossary/dynamics/rigid-body-dynamics/)
- [变长设计空间（Variable-Size Design Space, VSDS）](/glossary/dynamics/variable-size-design-space-vsds/)
- [分析梯度（Analytical Gradient）](/glossary/dynamics/analytical-gradient/)

## 参考文献

- Sanchez et al. 2020