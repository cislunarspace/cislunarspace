---
title: 误差超椭球（Error Hyper-Ellipsoid）
description: 描述航天器轨道状态不确定性的几何对象。初始时刻位置和速度误差的协方差矩阵定义了一个六维椭球，经状态转移矩阵线性映射后，终端时刻的误差分布仍为超椭球，但形状和大小发生改变。超椭球的主轴方向和半轴长度分别由 CGT 的特征向量和特征值决定。
keywords: 误差超椭球, Error Hyper-Ellipsoid, 基础概念, 运动方程, 参考系, 参数
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 误差超椭球（Error Hyper-Ellipsoid）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 误差超椭球详解 | 术语定义
  description: 描述航天器轨道状态不确定性的几何对象。初始时刻位置和速度误差的协方差矩阵定义了一个六维椭球，经状态转移矩阵线性映射后，终端时刻的误差分布仍为超椭球，但形状和大小发生改变。超椭球的主轴方向和半轴长度分别由 CGT 的特征向量和特征值决定。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 误差超椭球详解 | 术语定义
  description: 描述航天器轨道状态不确定性的几何对象。初始时刻位置和速度误差的协方差矩阵定义了一个六维椭球，经状态转移矩阵线性映射后，终端时刻的误差分布仍为超椭球，但形状和大小发生改变。超椭球的主轴方向和半轴长度分别由 CGT 的特征向量和特征值决定。
  image: /logo.png
permalink: /glossary/fundamentals/error-hyper-ellipsoid/
---

# 误差超椭球（Error Hyper-Ellipsoid）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

描述航天器轨道状态不确定性的几何对象。初始时刻位置和速度误差的协方差矩阵定义了一个六维椭球，经状态转移矩阵线性映射后，终端时刻的误差分布仍为超椭球，但形状和大小发生改变。超椭球的主轴方向和半轴长度分别由 CGT 的特征向量和特征值决定。

## 应用价值

误差超椭球是高维误差空间的椭圆体近似描述。在轨道确定中，误差超椭球表征估计误差的分布范围和方向特性，可用于评估滤波器性能和设计安全裕度，是轨道确定分析的重要工具。

## 相关概念

- [质心旋转坐标系（Center-of-Mass Rotating Frame）](/glossary/fundamentals/center-of-mass-rotating-frame/)
- [质量参数（Mass Parameter）](/glossary/fundamentals/mass-parameter/)
- [雅可比常数（Jacobi Constant, JC）](/glossary/dynamics/jacobi-constant-jc/)
- [归一化单位（Normalized Units）](/glossary/fundamentals/normalized-units/)
## 参考文献

- Guzzetti et al. 2017
- Muralidharan & Howell 2023
