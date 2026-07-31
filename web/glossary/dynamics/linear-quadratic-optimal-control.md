---
title: 线性二次型最优控制（Linear Quadratic Optimal Control）
description: 针对线性系统，以状态偏差和控制输入的加权二次型函数为性能指标，求解使指标最小化的状态反馈控制律。控制律通过求解Riccati方程获得，权重矩阵决定跟踪精度与控制代价之间的权衡。在地月空间轨道保持中，位置偏差和控制输入经无量纲化后量级相近，典型权重取Q=10I、R=I即可获得良好的跟踪性能。
keywords: 线性二次型最优控制, Linear Quadratic Optimal Control, 轨道力学, 最优控制, 轨迹优化
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 线性二次型最优控制（Linear Quadratic Optimal Control）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 线性二次型最优控制详解 | 术语定义
  description: 针对线性系统，以状态偏差和控制输入的加权二次型函数为性能指标，求解使指标最小化的状态反馈控制律。控制律通过求解Riccati方程获得，权重矩阵决定跟踪精度与控制代价之间的权衡。在地月空间轨道保持中，位置偏差和控制输入经无量纲化后量级相近，典型权重取Q=10I、R=I即可获得良好的跟踪性能。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 线性二次型最优控制详解 | 术语定义
  description: 针对线性系统，以状态偏差和控制输入的加权二次型函数为性能指标，求解使指标最小化的状态反馈控制律。控制律通过求解Riccati方程获得，权重矩阵决定跟踪精度与控制代价之间的权衡。在地月空间轨道保持中，位置偏差和控制输入经无量纲化后量级相近，典型权重取Q=10I、R=I即可获得良好的跟踪性能。
  image: /logo.png
permalink: /glossary/dynamics/linear-quadratic-optimal-control/
---

# 线性二次型最优控制（Linear Quadratic Optimal Control）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

针对线性系统，以状态偏差和控制输入的加权二次型函数为性能指标，求解使指标最小化的状态反馈控制律。控制律通过求解Riccati方程获得，权重矩阵决定跟踪精度与控制代价之间的权衡。在地月空间轨道保持中，位置偏差和控制输入经无量纲化后量级相近，典型权重取Q=10I、R=I即可获得良好的跟踪性能。

## 应用价值

该控制方法在地月空间任务中可用于航天器的姿态稳定、轨道保持和机动轨迹优化，提升任务执行的灵活性和可靠性。

## 相关概念

- [混合差分动态规划（Hybrid Differential Dynamic Programming）](/glossary/dynamics/hybrid-differential-dynamic-programming/)
- [形状法（Shape Method）](/glossary/dynamics/shape-method/)
- [差分动态规划（Differential Dynamic Programming, DDP）](/glossary/dynamics/differential-dynamic-programming-ddp/)
- [二阶锥规划（Second-Order Cone Programming, SOCP）](/glossary/dynamics/second-order-cone-programming-socp/)

## 参考文献

- Zhang and Wang 2022 Continuous-thrust station-keeping of cis-lunar orbits using optimal sliding mode control with practical constraints
