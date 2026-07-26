---
title: 空气动力矩（Aerodynamic Moment）
description: 详细解析稳定力矩和阻尼力矩的定义、产生原理、计算方法及在飞行器姿态运动中的作用
keywords: 空气动力矩, Aerodynamic Moment, 稳定力矩, 阻尼力矩, 压心, 质心, 姿态稳定性
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 空气动力矩（Aerodynamic Moment）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 空气动力矩（Aerodynamic Moment）详解 | 术语定义
  description: 详细解析稳定力矩和阻尼力矩的定义、产生原理及在飞行器姿态运动中的作用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 空气动力矩（Aerodynamic Moment）详解 | 术语定义
  description: 详细解析稳定力矩和阻尼力矩的定义、产生原理及在飞行器姿态运动中的作用
  image: /logo.png
permalink: /glossary/fundamentals/aerodynamic-moment/
---

# 空气动力矩（Aerodynamic Moment）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

空气动力矩（Aerodynamic Moment）是空气动力对飞行器质心产生的力矩，包括稳定力矩和阻尼力矩。当压心与质心不重合时，空气动力合力对质心产生力矩；当飞行器相对大气转动时，大气对其产生阻碍转动的阻尼力矩。

## 核心要素

### 稳定力矩 $M_{st}$

稳定力矩是空气动力合力从压心平移到质心时附加的力矩：

$$\mathbf{M}_{st} = \mathbf{R} \times (x_p - x_g)\mathbf{x}_1^0$$

在箭体坐标系中的分量为：

$$\begin{cases} M_{y1,st} = Z_1(x_p - x_g) = m_{y1,st} \cdot q S_M l_k \\ M_{z1,st} = -Y_1(x_p - x_g) = m_{z1,st} \cdot q S_M l_k \end{cases}$$

稳定力矩系数对攻角和侧滑角的导数：

$$m_{z1}^\alpha = m_{y1}^\beta = C_{y1}^\alpha (x_g - x_p)$$

当 $x_g < x_p$（质心在压心之前）时，$m_{z1}^\alpha < 0$，飞行器静稳定。

### 阻尼力矩 $M_d$

当飞行器绕某轴以角速度 $\omega$ 旋转时，旋转导致飞行器表面各点相对于大气的速度发生变化，从而产生附加气动力，形成阻碍旋转的阻尼力矩：

$$M_d = m_d^\omega \cdot q S_M l_k \cdot \frac{\omega l_k}{v}$$

其中 $m_d^\omega$ 为阻尼力矩系数导数，$v$ 为飞行速度。

阻尼力矩的特点：

- 方向始终与角速度方向相反
- 大小与角速度成正比
- 在大气层内飞行时自动起作用，无需主动控制

### 力矩系数的无量纲化

空气动力矩通过动压 $q$、参考面积 $S_M$ 和参考长度 $l_k$ 进行无量纲化：

$$m = \frac{M}{q S_M l_k}$$

## 应用价值

空气动力矩是飞行器姿态运动分析的基础。稳定力矩决定了飞行器的静态稳定性，阻尼力矩决定了姿态振荡的衰减特性。在主动段飞行中，气动力矩与控制力矩共同决定飞行器的姿态运动。对于地月空间任务，大气层外无气动力矩，姿态控制完全依赖控制力矩。

## 相关概念

- [压力中心（Center of Pressure）](/glossary/fundamentals/pressure-center/)
- [空气动力系数（Aerodynamic Coefficient）](/glossary/fundamentals/aerodynamic-coefficient/)
- [体坐标系（Body Frame）](/glossary/fundamentals/body-frame/)
- [推力（Thrust）](/glossary/fundamentals/thrust/)
- [主动段（Powered Phase）](/glossary/fundamentals/powered-phase/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
