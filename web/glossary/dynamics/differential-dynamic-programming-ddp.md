---
title: 差分动态规划（Differential Dynamic Programming, DDP）
description: 一种二阶轨迹优化算法，由 Mayne 于 1966 年提出。算法在名义轨迹附近对动力学方程和目标函数做二阶展开，通过「前向传播」计算状态轨迹、「后向扫描」逐级求解控制更新量，反复迭代直至满足最优性条件。DDP 属于间接法与直接法之间的混合方法：既利用了最优性条件的梯度和海森矩阵信息，又在离散时间网格上求解。适用于非线性
keywords: 差分动态规划, Differential Dynamic Programming, DDP, DDP, 轨道力学, 最优控制, 轨迹优化
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 差分动态规划（Differential Dynamic Programming, DDP）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 差分动态规划详解 | 术语定义
  description: 一种二阶轨迹优化算法，由 Mayne 于 1966 年提出。算法在名义轨迹附近对动力学方程和目标函数做二阶展开，通过「前向传播」计算状态轨迹、「后向扫描」逐级求解控制更新量，反复迭代直至满足最优性条件。DDP 属于间接法与直接法之间的混合方法：既利用了最优性条件的梯度和海森矩阵信息，又在离散时间网格上求解。适用于非线性
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 差分动态规划详解 | 术语定义
  description: 一种二阶轨迹优化算法，由 Mayne 于 1966 年提出。算法在名义轨迹附近对动力学方程和目标函数做二阶展开，通过「前向传播」计算状态轨迹、「后向扫描」逐级求解控制更新量，反复迭代直至满足最优性条件。DDP 属于间接法与直接法之间的混合方法：既利用了最优性条件的梯度和海森矩阵信息，又在离散时间网格上求解。适用于非线性
  image: /logo.png
permalink: /glossary/dynamics/differential-dynamic-programming-ddp/
---

# 差分动态规划（Differential Dynamic Programming, DDP）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种二阶轨迹优化算法，由 Mayne 于 1966 年提出。算法在名义轨迹附近对动力学方程和目标函数做二阶展开，通过「前向传播」计算状态轨迹、「后向扫描」逐级求解控制更新量，反复迭代直至满足最优性条件。DDP 属于间接法与直接法之间的混合方法：既利用了最优性条件的梯度和海森矩阵信息，又在离散时间网格上求解。适用于非线性最优控制问题，尤其擅长处理轨迹类问题。

## 应用价值

在线性二次型最优控制框架下，通过选取合适的权重矩阵Q和R，可以在跟踪精度与控制能耗之间取得平衡，适用于地月空间轨道保持的实时控制。

## 相关概念

- [混合差分动态规划（Hybrid Differential Dynamic Programming）](/glossary/dynamics/hybrid-differential-dynamic-programming/)
- [形状法（Shape Method）](/glossary/dynamics/shape-method/)
- [二阶锥规划（Second-Order Cone Programming, SOCP）](/glossary/dynamics/second-order-cone-programming-socp/)
- [流管（Flow Tube）](/glossary/dynamics/flow-tube/)

## 参考文献

- Mayne 1966, IJControl; Aziz et al. 2019, JGCD
