---
title: 状态转移矩阵（State Transition Matrix, STM）
description: 详细解析状态转移矩阵的定义、计算方法、在轨道设计与稳定性分析中的应用
keywords: 状态转移矩阵, State Transition Matrix, STM, 轨道设计, 稳定性分析, 线性变分方程, 地月空间
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 状态转移矩阵（STM）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 状态转移矩阵详解 | 轨道设计核心工具
  description: 详细解析状态转移矩阵的定义、计算方法、在轨道设计与稳定性分析中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 状态转移矩阵详解 | 轨道设计核心工具
  description: 详细解析状态转移矩阵的定义、计算方法、在轨道设计与稳定性分析中的应用
  image: /logo.png
permalink: /glossary/dynamics/state-transition-matrix/
---

# 状态转移矩阵

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

状态转移矩阵（State Transition Matrix，STM）记为 $\Phi(t, t_0)$，描述了航天器在某一段参考轨道上 $t$ 时刻的状态向量对 $t_0$ 时刻状态向量的导数，反映了 $t_0$ 时刻初值的微小变化对 $t$ 时刻状态的影响。

## 计算方法

状态转移矩阵的初值为 $\Phi(t_0, t_0) = I_{6 \times 6}$（6×6 单位矩阵）。其导数满足线性变分方程：

$$\dot{\Phi}(t, t_0) = A(t) \Phi(t, t_0)$$

其中 $A(t)$ 为动力学方程的雅可比矩阵。对初值状态转移矩阵进行数值积分即可得到任意时刻的状态转移矩阵。

## 主要用途

在轨道设计与控制中，状态转移矩阵主要有两种用途：

1. **轨道修正**：利用状态转移矩阵对轨迹初值进行修正，使得末值满足一定的要求（如微分修正法、打靶法）
2. **稳定性分析**：利用状态转移矩阵的特征值和特征向量分析周期轨道的稳定性特征

## 核心要素

### 数学定义

状态转移矩阵 $\Phi(t, t_0)$ 描述 $t$ 时刻状态向量对 $t_0$ 时刻状态向量的导数，初值为 $\Phi(t_0, t_0) = I_{6 \times 6}$，导数满足线性变分方程 $\dot{\Phi}(t, t_0) = A(t) \Phi(t, t_0)$。

### 关键性质

STM 反映了初值微小变化对后续状态的影响，是轨道修正和稳定性分析的数学基础。STM 具有传递性：$\Phi(t_2, t_0) = \Phi(t_2, t_1) \Phi(t_1, t_0)$。

### 数值方法

在数值实现中，将 6 维状态向量与 $6 \times 6$ STM 的 36 个元素拼接为 42 维增广状态向量，与运动方程同时积分。

## 应用价值

状态转移矩阵是微分修正法、打靶法等轨道设计方法的核心工具，也用于周期轨道的稳定性分析和协方差传播，是轨道力学中最基本的线性化分析工具。

## 相关概念

- [单值矩阵](/glossary/dynamics/monodromy-matrix/)
- [微分修正法](/glossary/dynamics/differential-correction/)
- [打靶法](/glossary/dynamics/shooting-method/)
- [稳定性指数](/glossary/dynamics/stability-index/)
- [圆型限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)

## 参考文献

- Pavlak T A. Trajectory design and orbit maintenance strategies in multi-body dynamical regimes[D]. Purdue University, 2013.
- 陈昱桔. 面向地月空间态势感知的DRO轨道设计与控制研究[D]. 2024.
