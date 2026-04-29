---
title: Floquet 模态法（Floquet Mode Method）
description: 详细解析Floquet模态法的定义、基本原理、在平动点轨道保持中的应用
keywords: Floquet模态法, Floquet Mode, 轨道保持, 不稳定模态, 平动点轨道, 地月空间
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Floquet 模态法
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: Floquet 模态法详解 | 基于动力学特性的轨道保持方法
  description: 详细解析Floquet模态法的定义、基本原理、在平动点轨道保持中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Floquet 模态法详解 | 基于动力学特性的轨道保持方法
  description: 详细解析Floquet模态法的定义、基本原理、在平动点轨道保持中的应用
  image: /logo.png
permalink: /glossary/other/floquet-mode/
---

# Floquet 模态法

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

Floquet 模态法（Floquet Mode Method）是基于平动点附近特殊动力学特性的轨道保持策略，由 Gomez 等提出。该方法通过消除与参考轨道相关的不稳定 Floquet 模态来达到轨道保持的目的。

## 基本原理

对于线性周期系统，Floquet 理论将状态转移矩阵分解为：

$$\Phi(t+T, t) = P(t) e^{Rt} P^{-1}$$

其中 $R$ 为常数矩阵，其特征值（Floquet 乘子）决定了轨道的稳定性。不稳定 Floquet 模态对应模大于 1 的特征值，会使轨道偏差指数增长。

Floquet 模态法的核心思想是：通过施加控制机动，消除轨道偏差中的不稳定分量，从而防止轨道发散。

## 与其他方法的对比

| 方法 | 设计思路 | 特点 |
|:---|:---|:---|
| Floquet 模态法 | 消除不稳定分量 | 利用动力学特性，计算效率高 |
| 靶点法 | 最小化偏差与控制加权和 | 通用性强，燃料消耗可控 |
| LQR | 最优控制理论 | 需要精确模型 |

## 相关概念

- [单值矩阵](/glossary/dynamics/monodromy-matrix/)
- [轨道保持](/glossary/orbits/orbit-keeping/)
- [稳定性指数](/glossary/dynamics/stability-index/)
- [平动点](/glossary/dynamics/libration-point/)

## 参考文献

- Gomez G, et al. Dynamics and mission design near libration point orbits[M]. World Scientific, 2001.
