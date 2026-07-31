---
title: 指数不稳定性（Exponential Instability）
description: 共线平动点附近周期轨道的动力学特征。由 Floquet 乘子 lambda_5 > 1 表征：轨道在扰动下以 lambda_5 - 1 的指数规律发散。这是由共线平动点的鞍点特性决定的，意味着不施加控制时航天器将沿不稳定流形指数远离 Halo 轨道。论文指出，从稳定性角度应选择 Floquet 乘子接近 1 的幅值，但
keywords: 指数不稳定性, Exponential Instability
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 指数不稳定性（Exponential Instability）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 指数不稳定性详解 | 术语定义
  description: 共线平动点附近周期轨道的动力学特征。由 Floquet 乘子 lambda_5 > 1 表征：轨道在扰动下以 lambda_5 - 1 的指数规律发散。这是由共线平动点的鞍点特性决定的，意味着不施加控制时航天器将沿不稳定流形指数远离 Halo 轨道。论文指出，从稳定性角度应选择 Floquet 乘子接近 1 的幅值，但
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 指数不稳定性详解 | 术语定义
  description: 共线平动点附近周期轨道的动力学特征。由 Floquet 乘子 lambda_5 > 1 表征：轨道在扰动下以 lambda_5 - 1 的指数规律发散。这是由共线平动点的鞍点特性决定的，意味着不施加控制时航天器将沿不稳定流形指数远离 Halo 轨道。论文指出，从稳定性角度应选择 Floquet 乘子接近 1 的幅值，但
  image: /logo.png
permalink: /glossary/fundamentals/exponential-instability/
---

# 指数不稳定性（Exponential Instability）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

共线平动点附近周期轨道的动力学特征。由 Floquet 乘子 lambda_5 > 1 表征：轨道在扰动下以 lambda_5 - 1 的指数规律发散。这是由共线平动点的鞍点特性决定的，意味着不施加控制时航天器将沿不稳定流形指数远离 Halo 轨道。论文指出，从稳定性角度应选择 Floquet 乘子接近 1 的幅值，但大幅值 Halo 轨道的 Floquet 乘子更大，维持代价更高；小幅值轨道虽稳定性更差，但可能因任务需求（如 Genesis 任务的 260000 km 幅值）而被选择。

## 应用价值

在实际的地月空间任务中，该概念可用于轨道设计与优化，帮助规划航天器的转移路径和机动策略，在姿态控制与导航算法中发挥重要作用。

## 相关概念

- [控制正则化（Control Regularization）](/glossary/fundamentals/control-regularization/)
- [Cholesky因子分解（Cholesky Factorization）](/glossary/fundamentals/cholesky-factorization/)
- [SPICE 星历工具包（SPICE, SpiceyPy）](/glossary/fundamentals/spice-spiceypy/)
- [抛物线轨道（Parabolic Orbit）](/glossary/fundamentals/parabolic-orbit/)

## 参考文献

- 徐明和徐世杰 - 2008 - Halo轨道维持的线性周期控制策略
