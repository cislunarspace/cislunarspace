---
title: 稀疏非线性规划（Sparse Nonlinear Programming）
description: 一种大规模非线性规划求解方法，利用问题中约束和目标函数梯度的稀疏结构来提高计算效率。在轨迹优化中，稀疏性来源于每个时间段局部变量只与局部约束相关，使得大型稀疏NLP问题能够通过稀疏序列二次规划（SQP）有效求解。该方法被用于求解超过21万个变量和14万个约束的低推力转移轨迹优化问题。
keywords: 稀疏非线性规划, Sparse Nonlinear Programming, Sparse NLP, dynamics
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 稀疏非线性规划（Sparse Nonlinear Programming）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 稀疏非线性规划详解 | 术语定义
  description: 一种大规模非线性规划求解方法，利用问题中约束和目标函数梯度的稀疏结构来提高计算效率。在轨迹优化中，稀疏性来源于每个时间段局部变量只与局部约束相关，使得大型稀疏NLP问题能够通过稀疏序列二次规划（SQP）有效求解。该方法被用于求解超过21万个变量和14万个约束的低推力转移轨迹优化问题。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 稀疏非线性规划详解 | 术语定义
  description: 一种大规模非线性规划求解方法，利用问题中约束和目标函数梯度的稀疏结构来提高计算效率。在轨迹优化中，稀疏性来源于每个时间段局部变量只与局部约束相关，使得大型稀疏NLP问题能够通过稀疏序列二次规划（SQP）有效求解。该方法被用于求解超过21万个变量和14万个约束的低推力转移轨迹优化问题。
  image: /logo.png
permalink: /glossary/dynamics/sparse nlp/
---

# 稀疏非线性规划（Sparse Nonlinear Programming）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种大规模非线性规划求解方法，利用问题中约束和目标函数梯度的稀疏结构来提高计算效率。在轨迹优化中，稀疏性来源于每个时间段局部变量只与局部约束相关，使得大型稀疏NLP问题能够通过稀疏序列二次规划（SQP）有效求解。该方法被用于求解超过21万个变量和14万个约束的低推力转移轨迹优化问题。

## 应用价值

稀疏非线性规划方法在地月空间任务规划中用于求解大规模优化问题，能够在多约束条件下找到满足任务需求的解决方案。

## 相关概念

- （暂无相关概念）

## 参考文献

- Betts and Erb, 2003, Optimal low thrust trajectories to the moon。
