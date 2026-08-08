---
title: 状态转移矩阵病态（Ill-Conditioned State Transition Matrix）
description: 三体 Lambert 问题求解中，状态转移矩阵的逆阵条件数过大导致数值迭代发散的现象。当长期积分或参考轨道接近不稳定结构时，状态转移矩阵的逆运算会放大误差，使 Newton-Raphson 迭代发散。本文提出的改进方法是用遗传算法预搜索参考轨道，缩短参考轨道与目标轨道的距离，再用同伦方法平滑过渡。
keywords: 状态转移矩阵病态, Ill-Conditioned State Transition Matrix, 基础概念, 运动方程, 参考系, 参数
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 状态转移矩阵病态（Ill-Conditioned State Transition Matrix）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 状态转移矩阵病态详解 | 术语定义
  description: 三体 Lambert 问题求解中，状态转移矩阵的逆阵条件数过大导致数值迭代发散的现象。当长期积分或参考轨道接近不稳定结构时，状态转移矩阵的逆运算会放大误差，使 Newton-Raphson 迭代发散。本文提出的改进方法是用遗传算法预搜索参考轨道，缩短参考轨道与目标轨道的距离，再用同伦方法平滑过渡。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 状态转移矩阵病态详解 | 术语定义
  description: 三体 Lambert 问题求解中，状态转移矩阵的逆阵条件数过大导致数值迭代发散的现象。当长期积分或参考轨道接近不稳定结构时，状态转移矩阵的逆运算会放大误差，使 Newton-Raphson 迭代发散。本文提出的改进方法是用遗传算法预搜索参考轨道，缩短参考轨道与目标轨道的距离，再用同伦方法平滑过渡。
  image: /logo.png
permalink: /glossary/fundamentals/ill-conditioned-state-transition-matrix/
---

# 状态转移矩阵病态（Ill-Conditioned State Transition Matrix）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

三体 Lambert 问题求解中，状态转移矩阵的逆阵条件数过大导致数值迭代发散的现象。当长期积分或参考轨道接近不稳定结构时，状态转移矩阵的逆运算会放大误差，使 Newton-Raphson 迭代发散。本文提出的改进方法是用遗传算法预搜索参考轨道，缩短参考轨道与目标轨道的距离，再用同伦方法平滑过渡。

## 应用价值

状态转移矩阵病态是指矩阵条件数过大导致数值计算不稳定的问题。在轨道确定中，病态的状态转移矩阵会放大观测误差的影响，导致估计精度下降，需要特殊的数值处理技术来改善条件数。

## 相关概念

- [质心旋转坐标系（Center-of-Mass Rotating Frame）](/glossary/fundamentals/center-of-mass-rotating-frame/)
- 质量参数（Mass Parameter）
- [雅可比常数（Jacobi Constant, JC）](/glossary/dynamics/cj/)
- [归一化单位（Normalized Units）](/glossary/fundamentals/normalized-units/)

## 参考文献

- 基于三体Lambert算法的平动点交会轨道设计
