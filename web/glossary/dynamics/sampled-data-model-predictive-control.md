---
title: 采样数据模型预测控制（Sampled-Data Model Predictive Control）
description: 将采样数据理论与模型预测控制结合的控制方法。与标准MPC不同，它显式考虑数字控制系统中「测量仅在离散采样时刻可用、控制量在采样区间内保持不变」这一物理约束，以采样数据等价模型作为预测模型，从而在有限预测步长内保证闭环稳定性和递推可行性。
keywords: 采样数据模型预测控制, Sampled-Data Model Predictive Control, 轨道力学, 最优控制, 轨迹优化
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 采样数据模型预测控制（Sampled-Data Model Predictive Control）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 采样数据模型预测控制详解 | 术语定义
  description: 将采样数据理论与模型预测控制结合的控制方法。与标准MPC不同，它显式考虑数字控制系统中「测量仅在离散采样时刻可用、控制量在采样区间内保持不变」这一物理约束，以采样数据等价模型作为预测模型，从而在有限预测步长内保证闭环稳定性和递推可行性。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 采样数据模型预测控制详解 | 术语定义
  description: 将采样数据理论与模型预测控制结合的控制方法。与标准MPC不同，它显式考虑数字控制系统中「测量仅在离散采样时刻可用、控制量在采样区间内保持不变」这一物理约束，以采样数据等价模型作为预测模型，从而在有限预测步长内保证闭环稳定性和递推可行性。
  image: /logo.png
permalink: /glossary/dynamics/sampled-data-model-predictive-control/
---

# 采样数据模型预测控制（Sampled-Data Model Predictive Control）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

将采样数据理论与模型预测控制结合的控制方法。与标准MPC不同，它显式考虑数字控制系统中「测量仅在离散采样时刻可用、控制量在采样区间内保持不变」这一物理约束，以采样数据等价模型作为预测模型，从而在有限预测步长内保证闭环稳定性和递推可行性。

## 应用价值

该方法显式考虑了数字控制系统中测量与控制的离散采样特性，能够在有限预测时域内保证闭环稳定性，适合地月空间航天器的姿态与轨道控制。

## 相关概念

- [混合差分动态规划（Hybrid Differential Dynamic Programming）](/glossary/dynamics/hybrid-differential-dynamic-programming/)
- [形状法（Shape Method）](/glossary/dynamics/shape-method/)
- [差分动态规划（Differential Dynamic Programming, DDP）](/glossary/dynamics/differential-dynamic-programming-ddp/)
- [二阶锥规划（Second-Order Cone Programming, SOCP）](/glossary/dynamics/second-order-cone-programming-socp/)

## 参考文献

- Elobaid et al. 2022
