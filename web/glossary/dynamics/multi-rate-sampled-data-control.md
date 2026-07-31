---
title: 多速率采样控制（Multi-Rate Sampled-Data Control）
description: 对同一系统使用不同采样率分别处理测量与控制的数字控制策略。例如测量在时刻tk采样，而控制在更细的子区间内切换。这一设计可避免单速率采样产生的不稳定零动态，恢复与连续时间相对阶一致的输入输出结构，是解决采样数据非线性控制问题的关键手段。
keywords: MR, 轨道, 动力学, 稳定性, 周期轨道
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 多速率采样控制（Multi-Rate Sampled-Data Control）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 多速率采样控制详解 | 术语定义
  description: 对同一系统使用不同采样率分别处理测量与控制的数字控制策略。例如测量在时刻tk采样，而控制在更细的子区间内切换。这一设计可避免单速率采样产生的不稳定零动态，恢复与连续时间相对阶一致的输入输出结构，是解决采样数据非线性控制问题的关键手段。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 多速率采样控制详解 | 术语定义
  description: 对同一系统使用不同采样率分别处理测量与控制的数字控制策略。例如测量在时刻tk采样，而控制在更细的子区间内切换。这一设计可避免单速率采样产生的不稳定零动态，恢复与连续时间相对阶一致的输入输出结构，是解决采样数据非线性控制问题的关键手段。
  image: /logo.png
permalink: /glossary/dynamics/multi-rate-sampled-data-control/
---

# 多速率采样控制（Multi-Rate Sampled-Data Control）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

对同一系统使用不同采样率分别处理测量与控制的数字控制策略。例如测量在时刻tk采样，而控制在更细的子区间内切换。这一设计可避免单速率采样产生的不稳定零动态，恢复与连续时间相对阶一致的输入输出结构，是解决采样数据非线性控制问题的关键手段。

## 应用价值

该方法在航天器轨道控制和状态估计中发挥关键作用。通过合理的控制策略设计或滤波算法选择，可以有效抑制扰动影响，提高航天器轨道保持精度和定轨收敛速度。

## 相关概念

- [L4（L4）](/glossary/dynamics/l4/)
- [轨道内分量（In-Plane）](/glossary/dynamics/in-plane/)
- [Hill方程（Hill's Equations）](/glossary/dynamics/hills-equations/)
- [雅可比能量（Jacobi Energy）](/glossary/dynamics/jacobi-energy/)

## 参考文献

- Monaco & Normand-Cyrot 1992
- Elobaid et al. 2022
