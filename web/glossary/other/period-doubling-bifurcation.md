---
title: 倍周期分岔（Period-Doubling Bifurcation）
description: 详细解析倍周期分岔的定义、动力学机制及其在DRO轨道族中的表现
keywords: 倍周期分岔, Period-Doubling Bifurcation, 分岔, 轨道族, DRO, 非线性动力学, 地月空间
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 倍周期分岔（Period-Doubling Bifurcation）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 倍周期分岔详解 | 非线性动力学关键现象
  description: 详细解析倍周期分岔的定义、动力学机制及其在DRO轨道族中的表现
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 倍周期分岔详解 | 非线性动力学关键现象
  description: 详细解析倍周期分岔的定义、动力学机制及其在DRO轨道族中的表现
  image: /logo.png
permalink: /glossary/other/period-doubling-bifurcation/
---

# 倍周期分岔

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

倍周期分岔（Period-Doubling Bifurcation）是非线性动力系统中的一种分岔现象，指系统参数变化时，周期轨道的周期突然加倍。在地月空间轨道力学中，倍周期分岔是 DRO 轨道族演化过程中的重要特征。

## 核心要素

### 基本概念

倍周期分岔是非线性动力系统中当控制参数连续变化时，周期轨道的周期突然从 $T$ 变为 $2T$ 的分岔现象。在 CR3BP 框架下，这一分岔对应单值矩阵特征值穿越单位圆上的 $-1$ 点，标志着轨道从稳定向不稳定的转变。

### 技术特征

倍周期分岔的数学判据为单值矩阵（Monodromy Matrix）的特征值在分岔点处通过 $-1$。分岔前轨道稳定（特征值在单位圆上），分岔后特征值离开单位圆，轨道变为不稳定。分岔过程中轨道构型从简单对称变为复杂非对称，稳定性指数发生突变。

### 实现方法

在轨道族延续（continuation）过程中追踪倍周期分岔：逐步改变 Jacobi 常数，监测单值矩阵特征值的演化，当特征值接近 $-1$ 时识别分岔点。分岔后可继续延续得到倍周期轨道族分支。

## 动力学机制

在 DRO 轨道族中，随着轨道能量（Jacobi 常数）的变化：

1. **稳定区域**：低能 DRO 轨道通常是稳定的，单值矩阵特征值位于单位圆上
2. **分岔点**：当能量达到特定值时，特征值通过 $-1$ 点，轨道周期加倍
3. **不稳定区域**：分岔后的轨道变得不稳定，出现倍周期轨道

倍周期分岔与稳定性的关系：

| 分岔前 | 分岔点 | 分岔后 |
| :--- | :--- | :--- |
| 稳定周期轨道 | 特征值过 $-1$ | 不稳定周期轨道 |
| 周期 $T$ | 临界状态 | 周期 $2T$ |

## 在 DRO 轨道族中的表现

在 DRO 轨道族的延续过程中，倍周期分岔表现为：

- 轨道构型从简单对称变为复杂非对称
- 稳定性指数发生突变
- 轨道族分支出现

## 应用价值

倍周期分岔分析是 DRO 轨道族稳定性评估的关键环节。通过识别分岔点，可以确定 DRO 轨道的稳定参数范围，为轨道选择和任务设计提供依据。倍周期分岔还与通向混沌的路径密切相关，对理解地月空间复杂动力学结构具有基础性意义。

## 相关概念

- [单值矩阵](/glossary/dynamics/monodromy-matrix/)
- [稳定性指数](/glossary/dynamics/stability-index/)
- [远距离逆行轨道（DRO）](/glossary/orbits/dro/)
- [混沌效应](/glossary/dynamics/chaos-effect/)
- [Jacobi 积分](/glossary/dynamics/jacobi-integral/)

## 参考文献

- 陈昱桔. 面向地月空间态势感知的DRO轨道设计与控制研究[D]. 2024.
