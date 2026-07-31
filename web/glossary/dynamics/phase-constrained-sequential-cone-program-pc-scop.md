---
title: 相位约束序列锥规划（Phase-Constrained Sequential Cone Program, PC-SCoP）
description: 针对平动点轨道保持提出的优化算法。将x轴穿越控制框架表述为非线性规划问题，目标函数为速度增量的二范数，约束分别对准状态分量偏差和相位偏差，避免了微分修正法中需要手动调节的缩放权重。非线性规划通过序列线性化转化为二阶锥规划逐次求解，每次迭代更新状态估计并重新线性化动力学。
keywords: 相位约束序列锥规划, Phase-Constrained Sequential Cone Program, PC-SCoP, PC-SCoP, 轨道动力学, 姿态控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 相位约束序列锥规划（Phase-Constrained Sequential Cone Program, PC-SCoP）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 相位约束序列锥规划详解 | 术语定义
  description: 针对平动点轨道保持提出的优化算法。将x轴穿越控制框架表述为非线性规划问题，目标函数为速度增量的二范数，约束分别对准状态分量偏差和相位偏差，避免了微分修正法中需要手动调节的缩放权重。非线性规划通过序列线性化转化为二阶锥规划逐次求解，每次迭代更新状态估计并重新线性化动力学。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 相位约束序列锥规划详解 | 术语定义
  description: 针对平动点轨道保持提出的优化算法。将x轴穿越控制框架表述为非线性规划问题，目标函数为速度增量的二范数，约束分别对准状态分量偏差和相位偏差，避免了微分修正法中需要手动调节的缩放权重。非线性规划通过序列线性化转化为二阶锥规划逐次求解，每次迭代更新状态估计并重新线性化动力学。
  image: /logo.png
permalink: /glossary/dynamics/phase-constrained-sequential-cone-program-pc-scop/
---

# 相位约束序列锥规划（Phase-Constrained Sequential Cone Program, PC-SCoP）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

针对平动点轨道保持提出的优化算法。将x轴穿越控制框架表述为非线性规划问题，目标函数为速度增量的二范数，约束分别对准状态分量偏差和相位偏差，避免了微分修正法中需要手动调节的缩放权重。非线性规划通过序列线性化转化为二阶锥规划逐次求解，每次迭代更新状态估计并重新线性化动力学。

## 应用价值

本术语在地月空间任务中具有重要应用价值。在轨道设计方面，它可以用于优化转移轨迹，降低任务燃料消耗。在姿态控制与动力学分析中，它有助于理解航天器在复杂引力场中的运动特性，为任务规划提供理论支撑。在导航与轨道确定中，基于该术语的方法能够提高轨道预报精度，支撑自主导航算法的发展。

## 相关概念

- [相对运动周期性条件（Periodicity Conditions in Relative Orbital Motion）](/glossary/dynamics/periodicity-conditions-in-relative-orbital-motion/)
- [螺旋式编队（Helix Formation）](/glossary/dynamics/helix-formation/)
- [能量耗散法（Energy Dissipation Method）](/glossary/dynamics/energy-dissipation-method/)
- [不稳定流形（Unstable Manifold）](/glossary/dynamics/unstable-manifold/)

## 参考文献

- Shimane et al. 2025
