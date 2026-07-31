---
title: 终端罚项（Terminal Penalty Term）
description: 模型预测控制中用于替代硬终端约束的代价函数项。将终端状态约束 x(tf) = 0 松弛为终端状态的二次罚项 gamma * x^T * R * x。这样做有两个好处：一是防止优化问题因扰动而不可行；二是在适当条件下可改善渐近稳定性。gamma 取大正数时，罚项效果接近硬约束。
keywords: 终端罚项, Terminal Penalty Term, 轨道动力学, 三体问题, 平动点
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 终端罚项（Terminal Penalty Term）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 终端罚项详解 | 术语定义
  description: 模型预测控制中用于替代硬终端约束的代价函数项。将终端状态约束 x(tf) = 0 松弛为终端状态的二次罚项 gamma * x^T * R * x。这样做有两个好处：一是防止优化问题因扰动而不可行；二是在适当条件下可改善渐近稳定性。gamma 取大正数时，罚项效果接近硬约束。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 终端罚项详解 | 术语定义
  description: 模型预测控制中用于替代硬终端约束的代价函数项。将终端状态约束 x(tf) = 0 松弛为终端状态的二次罚项 gamma * x^T * R * x。这样做有两个好处：一是防止优化问题因扰动而不可行；二是在适当条件下可改善渐近稳定性。gamma 取大正数时，罚项效果接近硬约束。
  image: /logo.png
permalink: /glossary/dynamics/terminal-penalty-term/
---

# 终端罚项（Terminal Penalty Term）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

模型预测控制中用于替代硬终端约束的代价函数项。将终端状态约束 x(tf) = 0 松弛为终端状态的二次罚项 gamma * x^T * R * x。这样做有两个好处：一是防止优化问题因扰动而不可行；二是在适当条件下可改善渐近稳定性。gamma 取大正数时，罚项效果接近硬约束。

## 应用价值

在航天器控制系统设计中，该方法可用于设计姿态控制律或制导律，实现对航天器姿态和轨道的精确控制。在实际任务中，基于该方法的控制器能够提高姿态稳定性和轨迹跟踪精度。

## 相关概念

- [月球自由返回轨道（Lunar Free-Return Orbit, LFO）](/glossary/orbits/lunar-free-return-orbit/)
- [约束转化非线性规划（Constraint Conversion to Nonlinear Programming）](/glossary/fundamentals/constraint-conversion-to-nonlinear-programming/)
- [全局搜索（Global Search）](/glossary/fundamentals/global-search/)
- [姿态确定与控制系统（Attitude Determination and Control System）](/glossary/fundamentals/attitude-determination-and-control-system/)

## 参考文献

- Sanchez et al. 2020
