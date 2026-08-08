---
title: 混合差分动态规划（Hybrid Differential Dynamic Programming, HDDP）
description: 在差分动态规划（DDP）基础上引入增广拉格朗日法和信赖域约束处理的轨迹优化算法。由 Lantoine 和 Russell 提出，通过在终端约束上同时施加拉格朗日乘子项和二次罚函数项，将约束优化问题转化为一系列无约束子问题迭代求解。与标准 DDP 相比，HDDP 能处理等式和不等式约束，且对初始猜测的容忍度更高。该算法属
keywords: 混合差分动态规划, Hybrid Differential Dynamic Programming, HDDP, HDDP, dynamics
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 混合差分动态规划（Hybrid Differential Dynamic Programming, HDDP）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 混合差分动态规划详解 | 术语定义
  description: 在差分动态规划（DDP）基础上引入增广拉格朗日法和信赖域约束处理的轨迹优化算法。由 Lantoine 和 Russell 提出，通过在终端约束上同时施加拉格朗日乘子项和二次罚函数项，将约束优化问题转化为一系列无约束子问题迭代求解。与标准 DDP 相比，HDDP 能处理等式和不等式约束，且对初始猜测的容忍度更高。该算法属
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 混合差分动态规划详解 | 术语定义
  description: 在差分动态规划（DDP）基础上引入增广拉格朗日法和信赖域约束处理的轨迹优化算法。由 Lantoine 和 Russell 提出，通过在终端约束上同时施加拉格朗日乘子项和二次罚函数项，将约束优化问题转化为一系列无约束子问题迭代求解。与标准 DDP 相比，HDDP 能处理等式和不等式约束，且对初始猜测的容忍度更高。该算法属
  image: /logo.png
permalink: /glossary/dynamics/hddp/
---

# 混合差分动态规划（Hybrid Differential Dynamic Programming, HDDP）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

在差分动态规划（DDP）基础上引入增广拉格朗日法和信赖域约束处理的轨迹优化算法。由 Lantoine 和 Russell 提出，通过在终端约束上同时施加拉格朗日乘子项和二次罚函数项，将约束优化问题转化为一系列无约束子问题迭代求解。与标准 DDP 相比，HDDP 能处理等式和不等式约束，且对初始猜测的容忍度更高。该算法属于局部优化方法，不具备全局搜索能力。

## 应用价值

混合差分动态规划方法在地月空间任务规划中用于求解大规模优化问题，能够在多约束条件下找到满足任务需求的解决方案。

## 相关概念

- 差分动态规划（Differential Dynamic Programming, DDP）
- [多重打靶差分动态规划（Multiple-Shooting Differential Dynamic Programming, MDDP）](/glossary/dynamics/mddp/)

## 参考文献

- Aziz et al. 2019, JGCD, DOI: 10.2514/1.G003617。
