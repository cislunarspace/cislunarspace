---
title: 靶点法（Targeting Method）
description: 详细解析靶点法的定义、基本原理、在轨道保持控制中的应用
keywords: 靶点法, Targeting Method, 轨道保持, 脉冲控制, 权值矩阵, 地月空间
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 靶点法（Targeting Method）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 靶点法详解 | 轨道保持控制经典方法
  description: 详细解析靶点法的定义、基本原理、在轨道保持控制中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 靶点法详解 | 轨道保持控制经典方法
  description: 详细解析靶点法的定义、基本原理、在轨道保持控制中的应用
  image: /logo.png
permalink: /glossary/dynamics/targeting-method/
---

# 靶点法

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

靶点法（Targeting Method）是航天器轨道保持控制中的一种经典方法。其核心思想是：在轨道上设定一个或多个"靶点"（Target Point），通过最小化靶点处的位置和速度偏差以及控制机动量的加权和，求解最优的控制机动。

## 基本原理

设 $t_c$ 时刻的轨道状态与标称轨道存在偏差，需要在 $t_m$ 时刻施加控制机动 $\Delta v_m$。成本函数为：

$$J = \Delta v_m^T Q \Delta v_m + \sum_{k=1}^{n} \Delta r_k^T R_k \Delta r_k$$

其中 $Q$ 为控制权值矩阵，$R_k$ 为状态权值矩阵，$\Delta r_k$ 为第 $k$ 个靶点处的位置偏差。

通过令 $\partial J / \partial \Delta v_m = 0$，可求得使成本函数最小的最优机动。

## 靶点数量

常用的靶点数量为 2 或 3 个。靶点数量越多，对轨道未来偏差的预测越准确，但计算量也相应增加。

## 核心要素

### 数学定义

靶点法的成本函数为 $J = \Delta v_m^T Q \Delta v_m + \sum_{k=1}^{n} \Delta r_k^T R_k \Delta r_k$，通过令 $\partial J / \partial \Delta v_m = 0$ 求解最优控制机动。

### 关键性质

$Q$ 为控制权值矩阵，$R_k$ 为状态权值矩阵。靶点数量通常为 2 或 3 个，数量越多对未来偏差的预测越准确，但计算量增加。

### 数值方法

通过状态转移矩阵将靶点处的偏差映射到机动时刻，建立偏差与控制量的线性关系，求解最小化加权和的最优解。

## 应用价值

靶点法是轨道保持控制的经典方法，适用于 DRO、Halo 等三体轨道的长期维持。通过合理设置靶点位置和权值矩阵，可在控制精度和燃料消耗之间取得平衡。

## 相关概念

- [动态靶点法](/glossary/dynamics/dynamic-target-method/)
- [轨道保持](/glossary/orbits/orbit-keeping/)
- [状态转移矩阵](/glossary/dynamics/state-transition-matrix/)
- [脉冲推力](/glossary/other/impulse-thrust/)

## 参考文献

- Howell K C. A station-keeping method for libration point trajectories[C]. AIAA/AAS Astrodynamics Conference, 1990.
- 陈昱桔. 面向地月空间态势感知的DRO轨道设计与控制研究[D]. 2024.
