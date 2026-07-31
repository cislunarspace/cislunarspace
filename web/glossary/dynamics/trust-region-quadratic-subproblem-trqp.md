---
title: 信赖域二次子问题（Trust-Region Quadratic Subproblem, TRQP）
description: 在信赖域框架下，将非线性优化的每步更新近似为一个带约束的二次优化子问题。在 HDDP 中，每个阶段的控制更新量 δu 需满足 ‖D·δu‖≤Δ 的信赖域约束，其中 D 是缩放矩阵、Δ 是信赖域半径。该子问题在梯度方向与海森矩阵曲率之间寻求平衡：半径太小则步进保守、收敛慢，半径太大则可能跳出局部有效区域。信赖域半径根据迭
keywords: 信赖域二次子问题, Trust-Region Quadratic Subproblem, TRQP, TRQP, 动力学, 非线性, 稳定性, 流形, 控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 信赖域二次子问题（Trust-Region Quadratic Subproblem, TRQP）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 信赖域二次子问题（Trust-Region Quadratic Subproblem, TRQP）详解 | 术语定义
  description: 在信赖域框架下，将非线性优化的每步更新近似为一个带约束的二次优化子问题。在 HDDP 中，每个阶段的控制更新量 δu 需满足 ‖D·δu‖≤Δ 的信赖域约束，其中 D 是缩放矩阵、Δ 是信赖域半径。该子问题在梯度方向与海森矩阵曲率之间寻求平衡：半径太小则步进保守、收敛慢，半径太大则可能跳出局部有效区域。信赖域半径根据迭
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 信赖域二次子问题（Trust-Region Quadratic Subproblem, TRQP）详解 | 术语定义
  description: 在信赖域框架下，将非线性优化的每步更新近似为一个带约束的二次优化子问题。在 HDDP 中，每个阶段的控制更新量 δu 需满足 ‖D·δu‖≤Δ 的信赖域约束，其中 D 是缩放矩阵、Δ 是信赖域半径。该子问题在梯度方向与海森矩阵曲率之间寻求平衡：半径太小则步进保守、收敛慢，半径太大则可能跳出局部有效区域。信赖域半径根据迭
  image: /logo.png
permalink: /glossary/dynamics/trust-region-quadratic-subproblem-trqp/
---

# 信赖域二次子问题（Trust-Region Quadratic Subproblem, TRQP）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

在信赖域框架下，将非线性优化的每步更新近似为一个带约束的二次优化子问题。在 HDDP 中，每个阶段的控制更新量 δu 需满足 ‖D·δu‖≤Δ 的信赖域约束，其中 D 是缩放矩阵、Δ 是信赖域半径。该子问题在梯度方向与海森矩阵曲率之间寻求平衡：半径太小则步进保守、收敛慢，半径太大则可能跳出局部有效区域。信赖域半径根据迭代的增益比自适应调整。

## 应用价值

在实际的地月空间任务中，该方法可用于提升航天器的自主导航与姿态控制能力。通过实时处理传感器数据并估计系统状态，航天器能够在缺乏地面测控支持的条件下维持正常工作。这一技术在深空探测和交会对接等复杂任务场景中尤为重要，能够增强系统的鲁棒性和适应性。

## 相关概念

- [椭圆限制性三体问题（Elliptic Restricted Three-Body Problem）](/glossary/dynamics/elliptic-restricted-three-body-problem/)
- [动力一致性（Dynamical Consistency）](/glossary/dynamics/dynamical-consistency/)
- [组合协方差（Combined Covariance）](/glossary/dynamics/combined-covariance/)
- [尼霍罗舍夫估计（Nekhorosev Estimates）](/glossary/dynamics/nekhorosev-estimates/)

## 参考文献

- Conn et al. 2000, Trust-Region Methods; Lantoine & Russell 2012, JOTA
