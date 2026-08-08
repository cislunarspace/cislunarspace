---
title: 多重打靶法（Multiple Shooting Method）
description: 将积分区间分为多个子区间、分别独立积分再通过连续性约束拼接的数值方法。每个子区间的初始状态作为独立优化变量，子区间之间施加连续性条件。相比单打靶法，多重打靶法对初始猜测的敏感性更低，更适合长时间、强非线性的轨迹优化问题。在大规模问题上计算量增长快，需要高效的修改型算法。
keywords: 多重打靶法, Multiple Shooting Method, 参考系, 坐标变换, 基本概念
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 多重打靶法（Multiple Shooting Method）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 多重打靶法详解 | 术语定义
  description: 将积分区间分为多个子区间、分别独立积分再通过连续性约束拼接的数值方法。每个子区间的初始状态作为独立优化变量，子区间之间施加连续性条件。相比单打靶法，多重打靶法对初始猜测的敏感性更低，更适合长时间、强非线性的轨迹优化问题。在大规模问题上计算量增长快，需要高效的修改型算法。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 多重打靶法详解 | 术语定义
  description: 将积分区间分为多个子区间、分别独立积分再通过连续性约束拼接的数值方法。每个子区间的初始状态作为独立优化变量，子区间之间施加连续性条件。相比单打靶法，多重打靶法对初始猜测的敏感性更低，更适合长时间、强非线性的轨迹优化问题。在大规模问题上计算量增长快，需要高效的修改型算法。
  image: /logo.png
permalink: /glossary/fundamentals/multiple-shooting-method/
---

# 多重打靶法（Multiple Shooting Method）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

将积分区间分为多个子区间、分别独立积分再通过连续性约束拼接的数值方法。每个子区间的初始状态作为独立优化变量，子区间之间施加连续性条件。相比单打靶法，多重打靶法对初始猜测的敏感性更低，更适合长时间、强非线性的轨迹优化问题。在大规模问题上计算量增长快，需要高效的修改型算法。

## 应用价值

打靶法是求解两点边值问题的经典方法，在周期轨道搜索和转移轨道设计中广泛应用。

## 相关概念

- [连续小推力（Continuous Low Thrust）](/glossary/fundamentals/continuous-low-thrust/)
- 双向链路（Two-Way Link）
- 惯性坐标系（Inertial Coordinate System）
- 等效受照面积（Equivalent Illuminated Area）

## 参考文献

- Serban et al., 2002, Acta Astronautica
