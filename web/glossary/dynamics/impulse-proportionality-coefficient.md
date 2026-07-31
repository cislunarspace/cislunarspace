---
title: 脉冲比例系数（Impulse Proportionality Coefficient）
description: 表征中途修正时刻速度偏差与所需修正脉冲之间近似线性关系的增益系数。对某条标称轨道在给定修正时刻下，三个方向的比例系数构成 3x3 对角增益矩阵 K，对角元素 [k_xx, k_yy, k_zz] 分别对应 x、y、z 方向的偏差传递增益，非对角元素近似为零。该系数从蒙特卡洛打靶数据经最小二乘拟合提取，是神经网络代理模型
keywords: Impulse Proportionality Coefficient, 三体问题, 动力学分叉, 脉冲比例系数, 轨道力学
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 脉冲比例系数（Impulse Proportionality Coefficient）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 脉冲比例系数详解 | 术语定义
  description: 表征中途修正时刻速度偏差与所需修正脉冲之间近似线性关系的增益系数。对某条标称轨道在给定修正时刻下，三个方向的比例系数构成 3x3 对角增益矩阵 K，对角元素 [k_xx, k_yy, k_zz] 分别对应 x、y、z 方向的偏差传递增益，非对角元素近似为零。该系数从蒙特卡洛打靶数据经最小二乘拟合提取，是神经网络代理模型
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 脉冲比例系数详解 | 术语定义
  description: 表征中途修正时刻速度偏差与所需修正脉冲之间近似线性关系的增益系数。对某条标称轨道在给定修正时刻下，三个方向的比例系数构成 3x3 对角增益矩阵 K，对角元素 [k_xx, k_yy, k_zz] 分别对应 x、y、z 方向的偏差传递增益，非对角元素近似为零。该系数从蒙特卡洛打靶数据经最小二乘拟合提取，是神经网络代理模型
  image: /logo.png
permalink: /glossary/dynamics/impulse-proportionality-coefficient/
---

# 脉冲比例系数（Impulse Proportionality Coefficient）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

表征中途修正时刻速度偏差与所需修正脉冲之间近似线性关系的增益系数。对某条标称轨道在给定修正时刻下，三个方向的比例系数构成 3x3 对角增益矩阵 K，对角元素 [k_xx, k_yy, k_zz] 分别对应 x、y、z 方向的偏差传递增益，非对角元素近似为零。该系数从蒙特卡洛打靶数据经最小二乘拟合提取，是神经网络代理模型的输出特征。

## 应用价值

在轨道设计和控制中，该概念对理解航天器在地月空间中的运动特性和任务设计具有重要作用。

## 相关概念

- [最小范数解（Minimum Norm Solution）](/glossary/dynamics/minimum-norm-solution/)
- [刚体动力学（Rigid Body Dynamics）](/glossary/dynamics/rigid-body-dynamics/)
- [变长设计空间（Variable-Size Design Space, VSDS）](/glossary/dynamics/variable-size-design-space-vsds/)
- [分析梯度（Analytical Gradient）](/glossary/dynamics/analytical-gradient/)

## 参考文献

- 常笑宽 等 - 2026 - 基于神经网络的地月转移中途修正脉冲快速估计方法