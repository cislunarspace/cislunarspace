---
title: 大规模探索法（Massive Exploration）
description: 一种求解间接最优控制问题数值解的策略。通过在 shooter 函数未知变量的参数空间中大规模采样，结合二分搜索和连续性原理，高效搜索满足庞特里亚金极值原理所有条件的最优轨迹。相比延拓法，可发现多个局部最优解构成的轨迹族。
keywords: 大规模探索法, Massive Exploration, 动力学, 轨道, 控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 大规模探索法（Massive Exploration）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 大规模探索法详解 | 术语定义
  description: 一种求解间接最优控制问题数值解的策略。通过在 shooter 函数未知变量的参数空间中大规模采样，结合二分搜索和连续性原理，高效搜索满足庞特里亚金极值原理所有条件的最优轨迹。相比延拓法，可发现多个局部最优解构成的轨迹族。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 大规模探索法详解 | 术语定义
  description: 一种求解间接最优控制问题数值解的策略。通过在 shooter 函数未知变量的参数空间中大规模采样，结合二分搜索和连续性原理，高效搜索满足庞特里亚金极值原理所有条件的最优轨迹。相比延拓法，可发现多个局部最优解构成的轨迹族。
  image: /logo.png
permalink: /glossary/dynamics/massive-exploration/
---

# 大规模探索法（Massive Exploration）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种求解间接最优控制问题数值解的策略。通过在 shooter 函数未知变量的参数空间中大规模采样，结合二分搜索和连续性原理，高效搜索满足庞特里亚金极值原理所有条件的最优轨迹。相比延拓法，可发现多个局部最优解构成的轨迹族。

## 应用价值

在实际任务中，大规模探索法直接影响转移轨道的燃料消耗和任务窗口选取，需要结合轨道优化算法进行详细设计。
针对大规模探索法的深入研究有助于理解地月空间复杂动力学环境，为未来任务设计提供理论支撑和工程参考。
在实际任务中，需要结合数值仿真和解析方法对大规模探索法进行分析验证，确保设计方案满足任务约束和性能指标。

## 相关概念

- 双变量高斯分布（Bivariate Gaussian Distribution）
- 中途脉冲（Midcourse Impulse）
- 零推力参考轨迹（Zero-Thrust Reference Trajectory）
- [协态变量（Co-state Variables）](/glossary/dynamics/co-state-variables/)

## 参考文献

- （暂无参考文献）
