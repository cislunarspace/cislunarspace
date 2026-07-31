---
title: 矩约束方程（Moment Constraint Equations, MCE）
description: 设计求积方法的核心数学约束。将泰勒展开代入数值积分公式后，要求求积点集的各阶加权矩精确等于输入随机变量的理论矩，形成一组关于采样点位置和权重的方程组。通过求解这组方程，保证多项式近似在统计意义上准确反映真实概率分布。
keywords: 矩约束方程, Moment Constraint Equations, MCE, MCE
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 矩约束方程（Moment Constraint Equations, MCE）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 矩约束方程详解 | 术语定义
  description: 设计求积方法的核心数学约束。将泰勒展开代入数值积分公式后，要求求积点集的各阶加权矩精确等于输入随机变量的理论矩，形成一组关于采样点位置和权重的方程组。通过求解这组方程，保证多项式近似在统计意义上准确反映真实概率分布。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 矩约束方程详解 | 术语定义
  description: 设计求积方法的核心数学约束。将泰勒展开代入数值积分公式后，要求求积点集的各阶加权矩精确等于输入随机变量的理论矩，形成一组关于采样点位置和权重的方程组。通过求解这组方程，保证多项式近似在统计意义上准确反映真实概率分布。
  image: /logo.png
permalink: /glossary/dynamics/moment-constraint-equations-mce/
---

# 矩约束方程（Moment Constraint Equations, MCE）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

设计求积方法的核心数学约束。将泰勒展开代入数值积分公式后，要求求积点集的各阶加权矩精确等于输入随机变量的理论矩，形成一组关于采样点位置和权重的方程组。通过求解这组方程，保证多项式近似在统计意义上准确反映真实概率分布。

## 应用价值

在轨道设计、分析和控制中，需要利用动力学模型预测航天器轨迹，并通过数值方法或解析方法求解运动方程。该概念支撑轨道机动设计、轨道改进和编队飞行等关键任务。

## 相关概念

- [轨道改进（Orbit Improvement）](/glossary/dynamics/orbit-improvement/)
- [聚类聚合（Cluster Aggregation）](/glossary/dynamics/cluster-aggregation/)
- [伪谱法（Pseudospectral Method）](/glossary/dynamics/pseudospectral-method/)

## 参考文献

- Li 等 - 2025 - Efficient reachable domain search-tracking for cislunar non-cooperative targets via designed quadrature
