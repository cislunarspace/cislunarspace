---
title: 分支剪枝技术（Pruning Technique）
description: 在全局轨迹优化搜索中，利用问题的领域知识提前排除不可行或明显次优的候选解，以缩小搜索空间、加速收敛的技术。Myatt 等人针对弹道多引力辅助轨道提出了有效的剪枝方法，使搜索复杂度降为多项式级。论文提出将指数正弦曲线与剪枝技术结合，有望在低推力多引力辅助任务中实现高效全局搜索。
keywords: 分支剪枝技术, Pruning Technique, 轨道力学, 三体问题, 非线性动力学, 轨道稳定性
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 分支剪枝技术（Pruning Technique）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 分支剪枝技术详解 | 术语定义
  description: 在全局轨迹优化搜索中，利用问题的领域知识提前排除不可行或明显次优的候选解，以缩小搜索空间、加速收敛的技术。Myatt 等人针对弹道多引力辅助轨道提出了有效的剪枝方法，使搜索复杂度降为多项式级。论文提出将指数正弦曲线与剪枝技术结合，有望在低推力多引力辅助任务中实现高效全局搜索。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 分支剪枝技术详解 | 术语定义
  description: 在全局轨迹优化搜索中，利用问题的领域知识提前排除不可行或明显次优的候选解，以缩小搜索空间、加速收敛的技术。Myatt 等人针对弹道多引力辅助轨道提出了有效的剪枝方法，使搜索复杂度降为多项式级。论文提出将指数正弦曲线与剪枝技术结合，有望在低推力多引力辅助任务中实现高效全局搜索。
  image: /logo.png
permalink: /glossary/dynamics/pruning-technique/
---

# 分支剪枝技术（Pruning Technique）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

在全局轨迹优化搜索中，利用问题的领域知识提前排除不可行或明显次优的候选解，以缩小搜索空间、加速收敛的技术。Myatt 等人针对弹道多引力辅助轨道提出了有效的剪枝方法，使搜索复杂度降为多项式级。论文提出将指数正弦曲线与剪枝技术结合，有望在低推力多引力辅助任务中实现高效全局搜索。

## 应用价值

分支剪枝技术通过剪除不可行或无希望的搜索分支提高优化效率。在轨迹优化中，分支剪枝可以显著减少计算量，使原本难以求解的问题变得可解，是处理复杂优化问题的重要技术。

## 相关概念

- [雅可比常数（Jacobi Constant, JC）](/glossary/dynamics/jacobi-constant-jc/)
- [希尔区域（Hill Region）](/glossary/fundamentals/hill-region/)
- [庞加莱映射（Poincaré Map）](/glossary/dynamics/poincar-map/)
- [稳定性（Stability）](/glossary/dynamics/stability/)
## 参考文献

- Izzo - 2006 - Lambert's problem for exponential sinusoids
