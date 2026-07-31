---
title: 目标点法（Target Point Method）
description: 由Howell和Pernicka提出的驻留维持策略。将标称轨道离散化为不同时刻的一系列目标点，利用状态转移矩阵预测未来偏差，通过最小化位置偏差和燃耗的性优化各时刻的控制量。
keywords: 目标点法, Target Point Method, 轨道保持, 平动点, 轨道维持, 最优控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 目标点法（Target Point Method）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 目标点法详解 | 术语定义
  description: 由Howell和Pernicka提出的驻留维持策略。将标称轨道离散化为不同时刻的一系列目标点，利用状态转移矩阵预测未来偏差，通过最小化位置偏差和燃耗的性优化各时刻的控制量。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 目标点法详解 | 术语定义
  description: 由Howell和Pernicka提出的驻留维持策略。将标称轨道离散化为不同时刻的一系列目标点，利用状态转移矩阵预测未来偏差，通过最小化位置偏差和燃耗的性优化各时刻的控制量。
  image: /logo.png
permalink: /glossary/dynamics/target-point-method/
---

# 目标点法（Target Point Method）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

由Howell和Pernicka提出的驻留维持策略。将标称轨道离散化为不同时刻的一系列目标点，利用状态转移矩阵预测未来偏差，通过最小化位置偏差和燃耗的性优化各时刻的控制量。

## 应用价值

目标点法适用于平动点轨道的长期轨道保持任务。通过将连续轨道离散化为有限个目标点，可以将无限维的最优控制问题转化为参数优化问题，利用梯度下降或序列二次规划求解。该方法在L1和L2点Halo轨道的维持控制中广泛应用，计算效率高于实时求解庞特里亚金极值原理。目标点法的关键在于目标点数量和分布的选取，数量过少会丢失轨道信息，过多则增加计算负担。

## 相关概念

- [经济模型预测控制（Economic Model Predictive Control, Economic MPC）](/glossary/dynamics/economic-model-predictive-control/)
- [Bang-bang控制（Bang-Bang Control）](/glossary/dynamics/bang-bang-control/)
- [灵敏度矩阵法（Sensitivity Matrix Method）](/glossary/dynamics/sensitivity-matrix-method/)

## 参考文献

- Howell and Pernicka - Numerical determination of Lissajous trajectories - 1988
