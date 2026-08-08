---
title: 切向推力控制（Tangential Thrust Control）
description: 将推力方向始终对准速度矢量方向的简化控制策略。在中心引力场圆轨道情形下，切向推力是短时间内最高效提升轨道能量和半长轴的方式。该策略可视为逃逸段最优控制方案的可靠近似。
keywords: 切向推力控制, Tangential Thrust Control, 轨道力学, 最优控制, 轨迹优化
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 切向推力控制（Tangential Thrust Control）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 切向推力控制详解 | 术语定义
  description: 将推力方向始终对准速度矢量方向的简化控制策略。在中心引力场圆轨道情形下，切向推力是短时间内最高效提升轨道能量和半长轴的方式。该策略可视为逃逸段最优控制方案的可靠近似。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 切向推力控制详解 | 术语定义
  description: 将推力方向始终对准速度矢量方向的简化控制策略。在中心引力场圆轨道情形下，切向推力是短时间内最高效提升轨道能量和半长轴的方式。该策略可视为逃逸段最优控制方案的可靠近似。
  image: /logo.png
permalink: /glossary/dynamics/tangential-thrust-control/
---

# 切向推力控制（Tangential Thrust Control）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

将推力方向始终对准速度矢量方向的简化控制策略。在中心引力场圆轨道情形下，切向推力是短时间内最高效提升轨道能量和半长轴的方式。该策略可视为逃逸段最优控制方案的可靠近似。

## 应用价值

在线性二次型最优控制框架下，通过选取合适的权重矩阵Q和R，可以在跟踪精度与控制能耗之间取得平衡，适用于地月空间轨道保持的实时控制。

## 相关概念

- [混合差分动态规划（Hybrid Differential Dynamic Programming）](/glossary/dynamics/hddp/)
- [形状法（Shape Method）](/glossary/dynamics/shape-method/)
- 差分动态规划（Differential Dynamic Programming, DDP）
- 二阶锥规划（Second-Order Cone Programming, SOCP）

## 参考文献

- Du et al. 2024
