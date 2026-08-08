---
title: 缺陷约束（Defect Constraint）
description: 在配点法中，用离散节点上状态变量的预测值与积分真实轨迹之间的偏差来近似满足微分方程的约束形式。对于Hermite-Simpson格式，缺陷约束定义为一段两端状态减去该段上Simpson积分给出的状态预测值，应在每个配点处为零。缺陷约束是将连续最优控制问题转录为非线性规划的核心机制。
keywords: 缺陷约束, Defect Constraint, 轨道力学, 动力学建模, 数值积分
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 缺陷约束（Defect Constraint）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 缺陷约束详解 | 术语定义
  description: 在配点法中，用离散节点上状态变量的预测值与积分真实轨迹之间的偏差来近似满足微分方程的约束形式。对于Hermite-Simpson格式，缺陷约束定义为一段两端状态减去该段上Simpson积分给出的状态预测值，应在每个配点处为零。缺陷约束是将连续最优控制问题转录为非线性规划的核心机制。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 缺陷约束详解 | 术语定义
  description: 在配点法中，用离散节点上状态变量的预测值与积分真实轨迹之间的偏差来近似满足微分方程的约束形式。对于Hermite-Simpson格式，缺陷约束定义为一段两端状态减去该段上Simpson积分给出的状态预测值，应在每个配点处为零。缺陷约束是将连续最优控制问题转录为非线性规划的核心机制。
  image: /logo.png
permalink: /glossary/dynamics/defect-constraint/
---

# 缺陷约束（Defect Constraint）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

在配点法中，用离散节点上状态变量的预测值与积分真实轨迹之间的偏差来近似满足微分方程的约束形式。对于Hermite-Simpson格式，缺陷约束定义为一段两端状态减去该段上Simpson积分给出的状态预测值，应在每个配点处为零。缺陷约束是将连续最优控制问题转录为非线性规划的核心机制。

## 应用价值

该概念在地月空间轨道设计、导航控制或任务分析中具有重要应用价值，理解其内涵有助于掌握相关领域的核心知识。

## 相关概念

- 李雅普诺夫稳定性（Lyapunov Stability）
- [Adams-Cowell积分器（Adams-Cowell Integrator）](/glossary/dynamics/adams-cowell-integrator/)
- 汉森系数（Hansen Coefficients）
- [控制曲线（Control Curve, U_i）](/glossary/dynamics/control-curve-ui/)

## 参考文献

- Betts and Erb, 2003, Optimal low thrust trajectories to the moon
- Conway - 2010 - Spacecraft trajectory optimization
