---
title: 特征子空间（Eigenspace）
description: 由单值矩阵（Monodromy矩阵）的特征向量张成的向量子空间。稳定特征子空间 E^s 由模小于1的特征值对应的特征向量张成，不稳定特征子空间 E^u 由模大于1的特征值对应的特征向量张成。在固定点处，稳定和不稳定流形分别与对应特征子空间相切，特征子空间为流形提供了局部线性近似。
keywords: 特征子空间, Eigenspace, 动力学, 轨道, 控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 特征子空间（Eigenspace）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 特征子空间详解 | 术语定义
  description: 由单值矩阵（Monodromy矩阵）的特征向量张成的向量子空间。稳定特征子空间 E^s 由模小于1的特征值对应的特征向量张成，不稳定特征子空间 E^u 由模大于1的特征值对应的特征向量张成。在固定点处，稳定和不稳定流形分别与对应特征子空间相切，特征子空间为流形提供了局部线性近似。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 特征子空间详解 | 术语定义
  description: 由单值矩阵（Monodromy矩阵）的特征向量张成的向量子空间。稳定特征子空间 E^s 由模小于1的特征值对应的特征向量张成，不稳定特征子空间 E^u 由模大于1的特征值对应的特征向量张成。在固定点处，稳定和不稳定流形分别与对应特征子空间相切，特征子空间为流形提供了局部线性近似。
  image: /logo.png
permalink: /glossary/dynamics/eigenspace/
---

# 特征子空间（Eigenspace）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

由单值矩阵（Monodromy矩阵）的特征向量张成的向量子空间。稳定特征子空间 E^s 由模小于1的特征值对应的特征向量张成，不稳定特征子空间 E^u 由模大于1的特征值对应的特征向量张成。在固定点处，稳定和不稳定流形分别与对应特征子空间相切，特征子空间为流形提供了局部线性近似。

## 应用价值

在特征子空间的分析中，研究者首先需要建立描述航天器运动的数学模型，通过数值积分或解析方法求解该术语所对应的动力学方程，进而评估航天器在不同初始条件下的运动特性。
由于特征子空间具有不稳定性，轨道设计时必须考虑主动控制或定期修正策略，以避免初始误差随时间指数增长导致任务失败。
在实际任务中，需要结合数值仿真和解析方法对特征子空间进行分析验证，确保设计方案满足任务约束和性能指标。

## 相关概念

- [双变量高斯分布（Bivariate Gaussian Distribution）](/glossary/dynamics/bivariate-gaussian-distribution/)
- [中途脉冲（Midcourse Impulse）](/glossary/dynamics/midcourse-impulse/)
- [零推力参考轨迹（Zero-Thrust Reference Trajectory）](/glossary/dynamics/zero-thrust-reference-trajectory/)
- [协态变量（Co-state Variables）](/glossary/dynamics/co-state-variables/)

## 参考文献

- Howell et al. 1997, Application of Dynamical Systems Theory to Trajectory Design for a Libration Point Mission
