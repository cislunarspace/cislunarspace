---
title: 月心惯性坐标系（Moon-Centered Inertial Frame）
description: 以月球质心为原点、坐标轴方向相对惯性空间固定的参考坐标系。与月心旋转坐标系（MCR）不同，MCI坐标系中地球位置是时变的，CR3BP方程也相应显含时间。本文选择MCI系而非MCR系表达CR3BP，使二体模型和三体模型使用相同的状态向量基础，便于在动力学连续法中无缝过渡。
keywords: 月心惯性坐标系, Moon-Centered Inertial Frame, MCI, fundamentals
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
permalink: /glossary/fundamentals/mci/
---

# 月心惯性坐标系（Moon-Centered Inertial Frame）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

以月球质心为原点、坐标轴方向相对惯性空间固定的参考坐标系。与月心旋转坐标系（MCR）不同，MCI坐标系中地球位置是时变的，CR3BP方程也相应显含时间。本文选择MCI系而非MCR系表达CR3BP，使二体模型和三体模型使用相同的状态向量基础，便于在动力学连续法中无缝过渡。

## 应用价值

月心惯性坐标系中地球位置随时间变化，适合与二体模型无缝衔接，是研究月球探测器轨道动力学的重要参考框架。

## 相关概念

- 变结构滑模控制（Variable Structure Sliding Mode Control）
- [庞特里亚金最小值原理（Pontryagin Minimum Principle）](/glossary/fundamentals/pmp/)
- 误差函数（Error Function）

## 参考文献

- Oue等 - 2025 - Low-Thrust Many-Revolution Transfer between Near Rectilinear Halo Orbit and Low Lunar Orbit Using Hybrid Differential Dynamic Programming。
- Peng et al. 2024, AIAA Journal of Spacecraft and Rockets, doi:10.2514/1.A35623。
