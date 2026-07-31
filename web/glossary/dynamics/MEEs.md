---
title: 修正春分点轨道元素（Modified Equinoctial Elements, MEEs）
description: 一组适用于低推力轨迹优化的非奇异轨道根数，由半通径P、偏心率向量分量(ex, ey)、倾角向量分量(hx, hy)和真经度L组成。相比经典开普勒根数，MEEs在圆轨道（偏心率为零）和赤道轨道（倾角为零）处不存在奇点，且与笛卡尔坐标之间的变换矩阵连续光滑，因此更适合用于最优控制的协态方程推导。
keywords: 修正春分点轨道元素, Modified Equinoctial Elements, MEEs, MEEs, 轨道动力学, 控制理论, 非线性控制, 最优控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 修正春分点轨道元素（Modified Equinoctial Elements, MEEs）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 修正春分点轨道元素详解 | 术语定义
  description: 一组适用于低推力轨迹优化的非奇异轨道根数，由半通径P、偏心率向量分量(ex, ey)、倾角向量分量(hx, hy)和真经度L组成。相比经典开普勒根数，MEEs在圆轨道（偏心率为零）和赤道轨道（倾角为零）处不存在奇点，且与笛卡尔坐标之间的变换矩阵连续光滑，因此更适合用于最优控制的协态方程推导。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 修正春分点轨道元素详解 | 术语定义
  description: 一组适用于低推力轨迹优化的非奇异轨道根数，由半通径P、偏心率向量分量(ex, ey)、倾角向量分量(hx, hy)和真经度L组成。相比经典开普勒根数，MEEs在圆轨道（偏心率为零）和赤道轨道（倾角为零）处不存在奇点，且与笛卡尔坐标之间的变换矩阵连续光滑，因此更适合用于最优控制的协态方程推导。
  image: /logo.png
permalink: /glossary/dynamics/MEEs/
---

# 修正春分点轨道元素（Modified Equinoctial Elements, MEEs）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一组适用于低推力轨迹优化的非奇异轨道根数，由半通径P、偏心率向量分量(ex, ey)、倾角向量分量(hx, hy)和真经度L组成。相比经典开普勒根数，MEEs在圆轨道（偏心率为零）和赤道轨道（倾角为零）处不存在奇点，且与笛卡尔坐标之间的变换矩阵连续光滑，因此更适合用于最优控制的协态方程推导。

## 应用价值

在圆轨道和赤道轨道处无奇点，与笛卡尔坐标变换光滑连续，是低推力轨道优化中描述轨道状态的理想根数形式。

## 相关概念

- [自适应多阶段伪谱凸优化（Adaptive Multi-phase Pseudospectral Convex Optimization）](/glossary/dynamics/MPPCvx/)
- [模型预测制导与控制（Model Predictive Guidance and Control, MPC）](/glossary/dynamics/MPC/)
- [多目标优化问题（Multi-objective Optimization Problem, MOOP）](/glossary/dynamics/MOOP/)

## 参考文献

- Singh et al., 2021。
