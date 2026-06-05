---
title: 伪谱法 (Pseudospectral Methods)
description: 伪谱法是一类将连续最优控制问题离散化为非线性规划问题的直接法，通过在正交配点处近似状态和控制变量实现高精度轨迹优化。
keywords: 伪谱法, Pseudospectral Methods, 最优控制, 轨迹优化, 配点法, 非线性规划
author: 天疆说
date: 2026-06-05
lastUpdated: 2026-06-05
permalink: /background/math/pseudospectral/
wechatShare:
  title: 伪谱法 (Pseudospectral Methods)
  desc: 伪谱法是一类将连续最优控制问题离散化为非线性规划问题的直接法，通过在正交配点处近似状态和控制变量实现高精度轨迹优化。
  image: /logo.png
---

# 伪谱法

## 概述

伪谱法（Pseudospectral Methods）是一类直接法，用于将连续时间最优控制问题离散化为非线性规划（NLP）问题。其核心思想是在正交多项式的配点（collocation points）处对状态变量和控制变量进行近似，利用全局插值多项式的高精度特性实现快速收敛。常用的配点方案包括 Gauss-Legendre、Gauss-Lobatto 和 Radau 点。

伪谱法在航天器轨迹优化、低推力转移轨道设计、再入飞行器制导等领域有广泛应用，与打靶法和弧长延续法互补使用。

> 本页面为占位页面，详细内容待完善。
