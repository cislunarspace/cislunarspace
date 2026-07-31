---
title: 方向性交叉注意力（Directional Cross-Attention）
description: 一种交叉注意力机制，策略网络（演员）通过查询评论家网络的状态表示来获取价值函数上下文信息，实现策略与价值函数间的特征融合。论文采用评论家到演员的定向设计，使策略受价值信号调节的同时保持评论家独立于演员的探索噪声。
keywords: 方向性交叉注意力, Directional Cross-Attention, , 动力学, 非线性, 稳定性, 流形, 控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 方向性交叉注意力（Directional Cross-Attention）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 方向性交叉注意力（Directional Cross-Attention）详解 | 术语定义
  description: 一种交叉注意力机制，策略网络（演员）通过查询评论家网络的状态表示来获取价值函数上下文信息，实现策略与价值函数间的特征融合。论文采用评论家到演员的定向设计，使策略受价值信号调节的同时保持评论家独立于演员的探索噪声。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 方向性交叉注意力（Directional Cross-Attention）详解 | 术语定义
  description: 一种交叉注意力机制，策略网络（演员）通过查询评论家网络的状态表示来获取价值函数上下文信息，实现策略与价值函数间的特征融合。论文采用评论家到演员的定向设计，使策略受价值信号调节的同时保持评论家独立于演员的探索噪声。
  image: /logo.png
permalink: /glossary/dynamics/directional-cross-attention/
---

# 方向性交叉注意力（Directional Cross-Attention）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种交叉注意力机制，策略网络（演员）通过查询评论家网络的状态表示来获取价值函数上下文信息，实现策略与价值函数间的特征融合。论文采用评论家到演员的定向设计，使策略受价值信号调节的同时保持评论家独立于演员的探索噪声。

## 应用价值

该术语在地月空间任务的设计与分析中具有应用价值，可用于支撑轨道设计、任务规划或系统优化等工作。研究人员可根据具体任务需求，深入分析其物理机理与工程适用性，推动地月空间探索技术的发展。

## 相关概念

- [椭圆限制性三体问题（Elliptic Restricted Three-Body Problem）](/glossary/dynamics/elliptic-restricted-three-body-problem/)
- [动力一致性（Dynamical Consistency）](/glossary/dynamics/dynamical-consistency/)
- [组合协方差（Combined Covariance）](/glossary/dynamics/combined-covariance/)
- [尼霍罗舍夫估计（Nekhorosev Estimates）](/glossary/dynamics/nekhorosev-estimates/)

## 参考文献

- Ul Haq 等 - 2026 - Autonomous low-thrust trajectory optimization in cislunar space via attention-augmented reinforcement learning
