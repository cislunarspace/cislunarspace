---
title: Gauss-Legendre配点法（Gauss-Legendre Collocation Method）
description: 一种数值求解微分方程的离散化方法。以Legendre多项式根（LG点）为配点，用Lagrange插值多项式逼近解函数，在每个配点处要求微分方程成立，从而将连续问题转为有限维代数方程组。是Gauss伪谱法的核心离散化技术。
keywords: Gauss-Legendre配点法, Gauss-Legendre Collocation Method, 轨道力学, 航天动力学, 数值方法
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Gauss-Legendre配点法（Gauss-Legendre Collocation Method）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: Gauss-Legendre配点法详解 | 术语定义
  description: 一种数值求解微分方程的离散化方法。以Legendre多项式根（LG点）为配点，用Lagrange插值多项式逼近解函数，在每个配点处要求微分方程成立，从而将连续问题转为有限维代数方程组。是Gauss伪谱法的核心离散化技术。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Gauss-Legendre配点法详解 | 术语定义
  description: 一种数值求解微分方程的离散化方法。以Legendre多项式根（LG点）为配点，用Lagrange插值多项式逼近解函数，在每个配点处要求微分方程成立，从而将连续问题转为有限维代数方程组。是Gauss伪谱法的核心离散化技术。
  image: /logo.png
permalink: /glossary/fundamentals/gauss-legendre-collocation-method/
---

# Gauss-Legendre配点法（Gauss-Legendre Collocation Method）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种数值求解微分方程的离散化方法。以Legendre多项式根（LG点）为配点，用Lagrange插值多项式逼近解函数，在每个配点处要求微分方程成立，从而将连续问题转为有限维代数方程组。是Gauss伪谱法的核心离散化技术。

## 应用价值

基于该术语的定义，它在地月空间任务中具有重要应用价值。例如在轨道设计中，可利用其特性进行转移轨道优化；在轨道维持中，能够实现精确的轨道控制；在导航定轨中，可用于提高状态估计精度；在任务规划中，可辅助决策轨道转移时机和策略。具体的工程应用需结合任务约束和轨道特性进行综合分析。

## 相关概念

- 轨道周期
- [量纲归一化](/glossary/fundamentals/nondimensionalization/)
- 惯性坐标系
- [哈密顿量](/glossary/dynamics/hamiltonian/)

## 参考文献

- 平动点周期轨道间小推力转移的Gauss伪谱法
