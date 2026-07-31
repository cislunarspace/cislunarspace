---
title: 状态预测器（State Predictor）
description: 由嵌入模型和噪声估计器组成的闭环预测器，基于过去测量预测未来状态，其设计基于不确定性方法。
keywords: 状态预测器, State Predictor, 轨道动力学, 控制理论, 最优控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 状态预测器（State Predictor）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 状态预测器详解 | 术语定义
  description: 由嵌入模型和噪声估计器组成的闭环预测器，基于过去测量预测未来状态，其设计基于不确定性方法。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 状态预测器详解 | 术语定义
  description: 由嵌入模型和噪声估计器组成的闭环预测器，基于过去测量预测未来状态，其设计基于不确定性方法。
  image: /logo.png
permalink: /glossary/dynamics/state-predictor/
---

# 状态预测器（State Predictor）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

由嵌入模型和噪声估计器组成的闭环预测器，基于过去测量预测未来状态，其设计基于不确定性方法。

## 应用价值

状态预测器在轨道设计和轨迹优化中用于将连续控制问题离散化，通过非线性规划求解最优控制序列。

## 相关概念

- [控制参数化（Control Parametrization）](/glossary/dynamics/control-parametrization/)
- [推力器调制器（Thruster Modulator）](/glossary/dynamics/thruster-modulator/)
- [粒子群优化器（Particle Swarm Optimizer）](/glossary/dynamics/particle-swarm-optimizer/)
- [脉冲间隔（Impulse Interval）](/glossary/dynamics/impulse-interval/)

## 参考文献

- Canuto 2018
