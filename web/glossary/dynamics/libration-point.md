---
title: 平动点（Libration Point / Lagrange Point）
description: 详细解析平动点（拉格朗日点）的定义、五个平动点的位置与分类、共线平动点与三角平动点的动力学特性及其在地月空间任务中的应用
keywords: 平动点, 拉格朗日点, Lagrange Point, Libration Point, 共线平动点, 三角平动点, L1, L2, L3, L4, L5, 地月空间
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 平动点（Libration Point / Lagrange Point）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 平动点详解 | 地月空间五大力学平衡点
  description: 详细解析平动点（拉格朗日点）的定义、五个平动点的位置与分类、共线平动点与三角平动点的动力学特性及其在地月空间任务中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 平动点详解 | 地月空间五大力学平衡点
  description: 详细解析平动点（拉格朗日点）的定义、五个平动点的位置与分类、共线平动点与三角平动点的动力学特性及其在地月空间任务中的应用
  image: /logo.png
permalink: /glossary/dynamics/libration-point/
---

# 平动点

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

平动点（Libration Point），又称拉格朗日点（Lagrange Point），是圆型限制性三体问题（CR3BP）中的五个特解对应的位置。在质心旋转坐标系中，平动点处的速度和加速度均为零，即航天器在该点所受引力与离心力达到平衡。在惯性坐标系中，平动点绕质心的角速度与两天体绕质心的角速度相等。

## 五个平动点

五个平动点按能级从低到高排列为 L₁、L₂、L₃、L₄、L₅：

| 平动点 | 类型 | 位置特征 |
| :--- | :--- | :--- |
| L₁ | 共线平动点 | 位于两主天体连线上，介于两天体之间 |
| L₂ | 共线平动点 | 位于两主天体连线上，在较小天体外侧 |
| L₃ | 共线平动点 | 位于两主天体连线上，在较大天体外侧 |
| L₄ | 三角平动点 | 与两主天体构成等边三角形，位于轨道前方 |
| L₅ | 三角平动点 | 与两主天体构成等边三角形，位于轨道后方 |

在地月系统中，L₁ 和 L₂ 点距离月球较近，是地月空间任务中最常用的平动点。L₂ 点附近的近直线晕轨道（NRHO）已被选为月球门户（Gateway）的任务轨道。

## 共线平动点的计算

共线平动点的位置可通过欧拉方程数值求解。记 $\gamma_j (j=1,2,3)$ 为共线平动点到其最近天体的距离，则 $\gamma_j$ 满足五次多项式方程，可通过 Newton 迭代法求解。

三角平动点与两主天体构成等边三角形，其位置坐标为：
$$x = \frac{1}{2} - \mu, \quad y = \pm \frac{\sqrt{3}}{2}$$

其中正号对应 L₄，负号对应 L₅。

## 核心要素

### 数学定义

平动点是 CR3BP 中速度和加速度均为零的五个特解位置。共线平动点 $L_1, L_2, L_3$ 的位置通过欧拉五次方程的 Newton 迭代求解，三角平动点 $L_4, L_5$ 与两主天体构成等边三角形。

### 关键性质

共线平动点具有鞍×中心×中心的不稳定动力学结构，三角平动点在质量比满足一定条件时线性稳定。在地月系统中，$L_1$ 和 $L_2$ 点距离月球较近，是任务中最常用的平动点。

### 数值方法

共线平动点到最近天体的距离 $\gamma_j$ 满足五次多项式方程，通过 Newton 迭代法数值求解。

## 应用价值

平动点附近的轨道（如 Halo 轨道、Lissajous 轨道、Lyapunov 轨道）在地月空间任务中具有重要应用价值，包括深空探测中转站、引力天文台、太阳观测站和空间态势感知等。

## 相关概念

- [圆型限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)
- [近直线晕轨道（NRHO）](/glossary/orbits/nrho/)
- [远距离逆行轨道（DRO）](/glossary/orbits/distant-retrograde-orbit-dro/)
- [雅可比积分](/glossary/dynamics/jacobi-integral/)
- Halo 轨道

## 参考文献

- Szebehely V. Theory of orbits: the restricted problem of three bodies[M]. Academic Press, 1968.
- 陈昱桔. 面向地月空间态势感知的DRO轨道设计与控制研究[D]. 2024.
- Klonowski M. Cislunar Space Situational Awareness Architecture Design and Analysis[D]. University of Colorado Boulder, 2025.
