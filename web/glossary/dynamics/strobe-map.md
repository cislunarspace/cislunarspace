---
title: 频闪映射（Strobe Map）
description: 详细解析频闪映射的定义、拟周期轨道求解方法，以及在Lissajous轨道设计中的应用
keywords: 频闪映射, Strobe Map, 频闪截面, 拟周期轨道, Lissajous轨道, 不变曲线, Fourier级数, 地月空间
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 频闪映射（Strobe Map）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 频闪映射详解 | 拟周期轨道的参数化求解工具
  description: 详细解析频闪映射的定义、拟周期轨道求解方法，以及在Lissajous轨道设计中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 频闪映射详解 | 拟周期轨道的参数化求解工具
  description: 详细解析频闪映射的定义、拟周期轨道求解方法，以及在Lissajous轨道设计中的应用
  image: /logo.png
permalink: /glossary/dynamics/strobe-map/
---

# 频闪映射

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

频闪映射（Strobe Map）是一种固定时间间隔的离散映射，也称为频闪截面（Strobe Section）。在圆型限制性三体问题中，通过引入频闪映射 $\phi_T$（$T$ 为参考天体的公转周期），可将拟周期轨道（如Lissajous轨道）的连续时间动力学简化为离散映射下的不变曲线问题。

频闪映射的核心思想是：每隔固定时间 $T$ 对系统状态进行一次"快照"，将拟周期轨道在相空间中的轨迹映射为一系列离散点。这些离散点位于一个不变环面上，在频闪截面下形成一条闭合的不变曲线。频闪映射是参数化求解拟周期轨道的重要工具，结合Fourier级数表示和类牛顿法迭代，可以高效地计算拟周期轨道。

## 核心要素

### 数学定义

设连续时间动力学系统的流为 $\phi(t, \mathbf{x}_0)$，频闪映射定义为：

$$\phi_T: \mathbf{x} \mapsto \phi(T, \mathbf{x})$$

其中 $T$ 为固定的映射周期（通常取为主天体的公转周期）。频闪映射的 $n$ 次迭代为：

$$\phi_T^n(\mathbf{x}_0) = \phi(nT, \mathbf{x}_0)$$

对于周期为 $T$ 的周期轨道，频闪映射下的轨迹为单一不动点；对于拟周期轨道，轨迹形成不变曲线。

### 不变曲线求解

利用频闪映射求解拟周期轨道的过程包括：

1. **频闪截面构造**：选择适当的频闪截面（通常取为Poincaré截面的一个子集）
2. **不变曲线参数化**：将频闪截面下的不变曲线用Fourier级数表示
3. **类牛顿法迭代**：通过迭代求解Fourier系数，使得曲线在频闪映射下保持不变

不变曲线的Fourier参数化形式为：

$$\mathbf{x}(\theta) = \sum_{k=-N}^{N} \mathbf{c}_k e^{ik\theta}$$

其中 $\theta$ 为曲线参数，$\mathbf{c}_k$ 为Fourier系数。

### 与Poincaré映射的区别

| 对比项 | 频闪映射 | Poincaré映射 |
|:---|:---|:---|
| 截面定义 | 固定时间间隔 | 固定几何截面 |
| 截面选取 | 时间为变量 | 状态为变量 |
| 适用对象 | 拟周期轨道 | 周期轨道及拟周期轨道 |
| 计算效率 | 时间驱动，实现简单 | 需要求截面交点 |
| 物理含义 | "频闪快照" | 相空间截面 |

### 拟周期轨道求解流程

频闪映射在拟周期轨道求解中的典型流程为：

1. 从已知的周期轨道（如Halo轨道）出发
2. 通过参数变化（如振幅变化）获得拟周期轨道的初始猜测
3. 构造频闪映射 $\phi_T$ 的近似（通常通过数值积分）
4. 利用Fourier级数表示不变曲线
5. 通过类牛顿法迭代优化Fourier系数
6. 验证收敛性并进行精度检验

### 应用场景

频闪映射在轨道力学中的主要应用：

- **Lissajous轨道设计**：参数化求解地月 $L_1$ 和 $L_2$ 点附近的Lissajous轨道
- **轨道族探索**：系统性地探索拟周期轨道族随参数的变化
- **稳定性分析**：通过频闪映射的特征值分析轨道的稳定性
- **转移轨道设计**：利用不变流形在频闪映射下的结构设计转移轨道

## 相关概念

- [庞加莱映射（Poincaré Map）](/glossary/dynamics/poincare-map/)
- [庞加莱截面（Poincaré Section）](/glossary/dynamics/poincare-section/)
- [Lissajous轨道（Lissajous Orbit）](/glossary/orbits/lissajous-orbit/)
- [Halo轨道（Halo Orbit）](/glossary/orbits/halo-orbit/)

## 参考文献

- Gómez G, Mondelo J M. The dynamics around the collinear equilibrium points of the RTBP[J]. Physica D, 2001, 157(4): 283-321.
- Jorba A. Numerical computation of the normal behaviour of invariant curves of n-dimensional maps[J]. Nonlinearity, 2001, 14(5): 943-976.
- Masdemont J J. High-order expansions of invariant manifolds of libration point orbits with applications to mission design[J]. Dynamics of Continuous, Discrete and Impulsive Systems, 2005, 12(1): 1-16.

## 应用价值

频闪映射为地月平动点附近的拟周期轨道设计提供了高效的计算工具。通过将连续时间动力学简化为离散映射下的不变曲线问题，频闪映射结合Fourier级数参数化和类牛顿法迭代，能够高效地计算Lissajous等拟周期轨道。该方法还支持拟周期轨道族的系统性探索和稳定性分析，为地月空间通信中继、科学观测等任务的轨道设计提供技术支撑。
