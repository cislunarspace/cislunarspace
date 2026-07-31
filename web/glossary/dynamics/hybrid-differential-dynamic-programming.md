---
title: 混合差分动态规划（Hybrid Differential Dynamic Programming）
description: 在差分动态规划（DDP）基础上加入信赖域方法和值域有效集约束处理方法的非线性最优控制算法。算法分两步迭代：反向扫描沿参考轨迹计算最优控制律，正向扫描用更新后的控制律计算新参考轨迹，反复迭代直至约束满足且代价函数变化足够小，收敛至局部最优解。本文在HDDP框架中嵌入动力学连续法，使优化从二体模型逐步过渡到三体模型，从较差
keywords: 混合差分动态规划, Hybrid Differential Dynamic Programming, HDDP, 轨道力学, 最优控制, 轨迹优化
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 混合差分动态规划（Hybrid Differential Dynamic Programming）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 混合差分动态规划详解 | 术语定义
  description: 在差分动态规划（DDP）基础上加入信赖域方法和值域有效集约束处理方法的非线性最优控制算法。算法分两步迭代：反向扫描沿参考轨迹计算最优控制律，正向扫描用更新后的控制律计算新参考轨迹，反复迭代直至约束满足且代价函数变化足够小，收敛至局部最优解。本文在HDDP框架中嵌入动力学连续法，使优化从二体模型逐步过渡到三体模型，从较差
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 混合差分动态规划详解 | 术语定义
  description: 在差分动态规划（DDP）基础上加入信赖域方法和值域有效集约束处理方法的非线性最优控制算法。算法分两步迭代：反向扫描沿参考轨迹计算最优控制律，正向扫描用更新后的控制律计算新参考轨迹，反复迭代直至约束满足且代价函数变化足够小，收敛至局部最优解。本文在HDDP框架中嵌入动力学连续法，使优化从二体模型逐步过渡到三体模型，从较差
  image: /logo.png
permalink: /glossary/dynamics/hybrid-differential-dynamic-programming/
---

# 混合差分动态规划（Hybrid Differential Dynamic Programming）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

在差分动态规划（DDP）基础上加入信赖域方法和值域有效集约束处理方法的非线性最优控制算法。算法分两步迭代：反向扫描沿参考轨迹计算最优控制律，正向扫描用更新后的控制律计算新参考轨迹，反复迭代直至约束满足且代价函数变化足够小，收敛至局部最优解。本文在HDDP框架中嵌入动力学连续法，使优化从二体模型逐步过渡到三体模型，从较差初始猜测即可求得50.5圈小推力转移轨道。

## 应用价值

在线性二次型最优控制框架下，通过选取合适的权重矩阵Q和R，可以在跟踪精度与控制能耗之间取得平衡，适用于地月空间轨道保持的实时控制。

## 相关概念

- [形状法（Shape Method）](/glossary/dynamics/shape-method/)
- [差分动态规划（Differential Dynamic Programming, DDP）](/glossary/dynamics/differential-dynamic-programming-ddp/)
- [二阶锥规划（Second-Order Cone Programming, SOCP）](/glossary/dynamics/second-order-cone-programming-socp/)
- [流管（Flow Tube）](/glossary/dynamics/flow-tube/)

## 参考文献

- Oue等 - 2025 - Low-Thrust Many-Revolution Transfer between Near Rectilinear Halo Orbit and Low Lunar Orbit Using Hybrid Differential Dynamic Programming
