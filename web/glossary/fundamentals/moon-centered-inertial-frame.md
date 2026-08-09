---
title: 月心惯性坐标系（Moon-Centered Inertial Frame）
description: 以月球质心为原点、坐标轴方向相对惯性空间固定的参考坐标系。与月心旋转坐标系（MCR）不同，MCI坐标系中地球位置是时变的，CR3BP方程也相应显含时间。本文选择MCI系而非MCR系表达CR3BP，使二体模型和三体模型使用相同的状态向量基础，便于在动力学连续法中无缝过渡。
keywords: MCI, 轨道, 物理, 天文, 基础
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 月心惯性坐标系（Moon-Centered Inertial Frame）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 月心惯性坐标系详解 | 术语定义
  description: 以月球质心为原点、坐标轴方向相对惯性空间固定的参考坐标系。与月心旋转坐标系（MCR）不同，MCI坐标系中地球位置是时变的，CR3BP方程也相应显含时间。本文选择MCI系而非MCR系表达CR3BP，使二体模型和三体模型使用相同的状态向量基础，便于在动力学连续法中无缝过渡。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 月心惯性坐标系详解 | 术语定义
  description: 以月球质心为原点、坐标轴方向相对惯性空间固定的参考坐标系。与月心旋转坐标系（MCR）不同，MCI坐标系中地球位置是时变的，CR3BP方程也相应显含时间。本文选择MCI系而非MCR系表达CR3BP，使二体模型和三体模型使用相同的状态向量基础，便于在动力学连续法中无缝过渡。
  image: /logo.png
permalink: /glossary/fundamentals/moon-centered-inertial-frame/
---

# 月心惯性坐标系（Moon-Centered Inertial Frame）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

以月球质心为原点、坐标轴方向相对惯性空间固定的参考坐标系。与月心旋转坐标系（MCR）不同，MCI坐标系中地球位置是时变的，CR3BP方程也相应显含时间。本文选择MCI系而非MCR系表达CR3BP，使二体模型和三体模型使用相同的状态向量基础，便于在动力学连续法中无缝过渡。

## 应用价值

该参考坐标系的选择直接影响轨道力学计算的精度和效率。在地月空间任务中，根据任务阶段选择合适的参考系是轨道设计的基础，合理的坐标系选择可以简化计算并提高精度。

## 相关概念

- NRLMSISE-00大气模型（NRLMSISE-00 Atmospheric Model）
- [异构星座（Heterogeneous Constellation）](/glossary/fundamentals/heterogeneous-constellation/)
- [会合参考系（Synodical Reference System）](/glossary/fundamentals/synodic-frame/)
- [线性周期系统（Linear Time-Periodic System）](/glossary/fundamentals/ltp/)

## 参考文献

- Oue等 - 2025 - Low-Thrust Many-Revolution Transfer between Near Rectilinear Halo Orbit and Low Lunar Orbit Using Hybrid Differential Dynamic Programming
- Peng et al. 2024, AIAA Journal of Spacecraft and Rockets, doi:10.2514/1.A35623
