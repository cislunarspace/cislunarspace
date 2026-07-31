---
title: 自适应多阶段伪谱凸优化（Adaptive Multi-phase Pseudospectral Convex Optimization）
description: 将动力下降过程分为多个阶段，利用伪谱法离散化，通过凸优化求解，并利用间接法自适应确定最优阶段划分的一种动力下降制导方法。
keywords: 自适应多阶段伪谱凸优化, Adaptive Multi-phase Pseudospectral Convex Optimization, MPPCvx, 轨道动力学, 控制理论, 非线性控制, 最优控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 自适应多阶段伪谱凸优化（Adaptive Multi-phase Pseudospectral Convex Optimization）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 自适应多阶段伪谱凸优化详解 | 术语定义
  description: 将动力下降过程分为多个阶段，利用伪谱法离散化，通过凸优化求解，并利用间接法自适应确定最优阶段划分的一种动力下降制导方法。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 自适应多阶段伪谱凸优化详解 | 术语定义
  description: 将动力下降过程分为多个阶段，利用伪谱法离散化，通过凸优化求解，并利用间接法自适应确定最优阶段划分的一种动力下降制导方法。
  image: /logo.png
permalink: /glossary/dynamics/MPPCvx/
---

# 自适应多阶段伪谱凸优化（Adaptive Multi-phase Pseudospectral Convex Optimization）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

将动力下降过程分为多个阶段，利用伪谱法离散化，通过凸优化求解，并利用间接法自适应确定最优阶段划分的一种动力下降制导方法。

## 应用价值

通过预设性能边界保证系统响应的瞬态和稳态质量，适用于存在模型不确定性和外部扰动的航天器轨道跟踪与姿态控制问题。

## 相关概念

- [标准凸优化（Standard Convex Optimization）](/glossary/dynamics/SCvx/)
- [修正春分点轨道元素（Modified Equinoctial Elements, MEEs）](/glossary/dynamics/MEEs/)
- [模型预测制导与控制（Model Predictive Guidance and Control, MPC）](/glossary/dynamics/MPC/)
- [高斯伪谱法（Gauss Pseudospectral Method, GPM）](/glossary/dynamics/GPM/)

## 参考文献

- Song 等 - 2021。
