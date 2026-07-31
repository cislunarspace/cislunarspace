---
title: 格兰姆矩阵（Gramian matrix）
description: 表征观测值对待估状态敏感程度的矩阵。在离散非线性系统中，由状态转移矩阵和设计矩阵计算得到。矩阵可逆则系统可观测，其最小特征值和条件数分别用于评估可观测性程度。
keywords: 格兰姆矩阵, Gramian matrix, 轨道力学, 数值方法, 优化算法
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 格兰姆矩阵（Gramian matrix）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 格兰姆矩阵详解 | 术语定义
  description: 表征观测值对待估状态敏感程度的矩阵。在离散非线性系统中，由状态转移矩阵和设计矩阵计算得到。矩阵可逆则系统可观测，其最小特征值和条件数分别用于评估可观测性程度。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 格兰姆矩阵详解 | 术语定义
  description: 表征观测值对待估状态敏感程度的矩阵。在离散非线性系统中，由状态转移矩阵和设计矩阵计算得到。矩阵可逆则系统可观测，其最小特征值和条件数分别用于评估可观测性程度。
  image: /logo.png
permalink: /glossary/fundamentals/gramian-matrix/
---

# 格兰姆矩阵（Gramian matrix）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

表征观测值对待估状态敏感程度的矩阵。在离散非线性系统中，由状态转移矩阵和设计矩阵计算得到。矩阵可逆则系统可观测，其最小特征值和条件数分别用于评估可观测性程度。

## 应用价值

在轨道设计和转移轨道优化中，该方法用于确定最优转移时机和轨道形状，以最小化燃料消耗或飞行时间。通过数值仿真和迭代优化，可获得满足任务约束的可行轨道方案。

## 相关概念

- [同步旋转坐标系（Synodic Rotating Frame）](/glossary/fundamentals/synodic-rotating-frame/)
- [网格搜索（Grid Search）](/glossary/fundamentals/grid-search/)
- [Gauss求积公式（Gauss Quadrature Formula）](/glossary/fundamentals/gauss-quadrature-formula/)
- [星座构型向量（Constellation Pattern Vector）](/glossary/fundamentals/constellation-pattern-vector/)
## 参考文献

- 地月空间DRO近距离编队星间测量相对定轨
