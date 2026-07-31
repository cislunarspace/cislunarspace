---
title: 递归可行性（Recursive Feasibility）
description: 模型预测控制的一个理论性质：若当前时刻优化问题有解，则下一时刻的优化问题也有解。递归可行性保证控制器不会在运行中途陷入无可行解的困境。在近直线晕轨道保持中，这一性质由两方面保证：线性化系统沿参考轨道的可控性，以及推进系统最大推力远大于轨道保持所需。
keywords: 递归可行性, Recursive Feasibility, 轨道动力学, 控制理论, 最优控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 递归可行性（Recursive Feasibility）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 递归可行性详解 | 术语定义
  description: 模型预测控制的一个理论性质：若当前时刻优化问题有解，则下一时刻的优化问题也有解。递归可行性保证控制器不会在运行中途陷入无可行解的困境。在近直线晕轨道保持中，这一性质由两方面保证：线性化系统沿参考轨道的可控性，以及推进系统最大推力远大于轨道保持所需。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 递归可行性详解 | 术语定义
  description: 模型预测控制的一个理论性质：若当前时刻优化问题有解，则下一时刻的优化问题也有解。递归可行性保证控制器不会在运行中途陷入无可行解的困境。在近直线晕轨道保持中，这一性质由两方面保证：线性化系统沿参考轨道的可控性，以及推进系统最大推力远大于轨道保持所需。
  image: /logo.png
permalink: /glossary/dynamics/recursive-feasibility/
---

# 递归可行性（Recursive Feasibility）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

模型预测控制的一个理论性质：若当前时刻优化问题有解，则下一时刻的优化问题也有解。递归可行性保证控制器不会在运行中途陷入无可行解的困境。在近直线晕轨道保持中，这一性质由两方面保证：线性化系统沿参考轨道的可控性，以及推进系统最大推力远大于轨道保持所需。

## 应用价值

递归可行性在轨道设计和轨迹优化中用于将连续控制问题离散化，通过非线性规划求解最优控制序列。 在地月空间任务中，该方法可应用于转移轨道设计、轨道维持和再入轨迹规划等关键环节。 利用该方法可以降低计算复杂度，提高收敛速度，适合在轨自主制导应用。

## 相关概念

- [控制参数化（Control Parametrization）](/glossary/dynamics/control-parametrization/)
- [推力器调制器（Thruster Modulator）](/glossary/dynamics/thruster-modulator/)
- [粒子群优化器（Particle Swarm Optimizer）](/glossary/dynamics/particle-swarm-optimizer/)
- [脉冲间隔（Impulse Interval）](/glossary/dynamics/impulse-interval/)

## 参考文献

- Shimane 等 - 2025 - Revolution-spaced output-feedback model predictive control for station keeping on near-rectilinear halo orbits
