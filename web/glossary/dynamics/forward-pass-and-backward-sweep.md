---
title: 前向传播与后向扫描（Forward Pass and Backward Sweep）
description: DDP 算法的两个核心计算步骤。前向传播从初始状态出发，按当前控制序列逐阶段积分运动方程，得到名义状态轨迹并评估目标函数值。后向扫描从末阶段反向递推，利用目标函数和约束的梯度、海森矩阵信息，逐级求解最优控制更新量 δu 和参数更新量 δw。一次「前向传播+后向扫描」构成一次完整迭代，直至满足最优性条件。
keywords: 前向传播与后向扫描, Forward Pass and Backward Sweep, 轨道力学, 姿态控制, 相对运动
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 前向传播与后向扫描（Forward Pass and Backward Sweep）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 前向传播与后向扫描详解 | 术语定义
  description: DDP 算法的两个核心计算步骤。前向传播从初始状态出发，按当前控制序列逐阶段积分运动方程，得到名义状态轨迹并评估目标函数值。后向扫描从末阶段反向递推，利用目标函数和约束的梯度、海森矩阵信息，逐级求解最优控制更新量 δu 和参数更新量 δw。一次「前向传播+后向扫描」构成一次完整迭代，直至满足最优性条件。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 前向传播与后向扫描详解 | 术语定义
  description: DDP 算法的两个核心计算步骤。前向传播从初始状态出发，按当前控制序列逐阶段积分运动方程，得到名义状态轨迹并评估目标函数值。后向扫描从末阶段反向递推，利用目标函数和约束的梯度、海森矩阵信息，逐级求解最优控制更新量 δu 和参数更新量 δw。一次「前向传播+后向扫描」构成一次完整迭代，直至满足最优性条件。
  image: /logo.png
permalink: /glossary/dynamics/forward-pass-and-backward-sweep/
---

# 前向传播与后向扫描（Forward Pass and Backward Sweep）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

DDP 算法的两个核心计算步骤。前向传播从初始状态出发，按当前控制序列逐阶段积分运动方程，得到名义状态轨迹并评估目标函数值。后向扫描从末阶段反向递推，利用目标函数和约束的梯度、海森矩阵信息，逐级求解最优控制更新量 δu 和参数更新量 δw。一次「前向传播+后向扫描」构成一次完整迭代，直至满足最优性条件。

## 应用价值

该动力学概念在地月空间任务设计、分析和控制中具有重要作用，掌握其特性有助于优化轨道方案、降低任务燃料消耗、提高任务成功率。

## 相关概念

- 逆行（Retrograde Motion）
- [绝对相位偏置（Absolute Phase Bias）](/glossary/dynamics/absolute-phase-bias/)
- 相对姿态四元数（Relative Attitude Quaternion）
- 径向-切向-法向坐标系（Radial-Tangential-Normal Coordinate System, RTN）

## 参考文献

- Mayne 1966; Lantoine & Russell 2012, JOTA; Aziz et al. 2019, JGCD
