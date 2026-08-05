---
title: 不稳定方向（Unstable Direction）
description: 状态转移矩阵中绝对值大于 1 的特征值所对应的特征向量方向。共线平动点轨道的误差沿此方向指数增长，最终无论初始误差方向如何，终了误差均趋向于此方向。
keywords: 不稳定方向, Unstable Direction, 轨道力学, 三体问题, 非线性动力学, 轨道稳定性
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 不稳定方向（Unstable Direction）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 不稳定方向详解 | 术语定义
  description: 状态转移矩阵中绝对值大于 1 的特征值所对应的特征向量方向。共线平动点轨道的误差沿此方向指数增长，最终无论初始误差方向如何，终了误差均趋向于此方向。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 不稳定方向详解 | 术语定义
  description: 状态转移矩阵中绝对值大于 1 的特征值所对应的特征向量方向。共线平动点轨道的误差沿此方向指数增长，最终无论初始误差方向如何，终了误差均趋向于此方向。
  image: /logo.png
permalink: /glossary/dynamics/unstable-direction/
---

# 不稳定方向（Unstable Direction）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

状态转移矩阵中绝对值大于 1 的特征值所对应的特征向量方向。共线平动点轨道的误差沿此方向指数增长，最终无论初始误差方向如何，终了误差均趋向于此方向。

## 应用价值

不稳定方向是平动点轨道附近误差分析的核心概念。在平动点轨道任务设计中，理解不稳定方向（即状态转移矩阵中特征值大于1的特征向量方向）对于设计轨道保持策略至关重要。沿不稳定方向的误差会指数增长，必须通过主动控制加以抑制，否则航天器将逐渐偏离目标轨道。

## 相关概念

- [雅可比常数（Jacobi Constant, JC）](/glossary/dynamics/jacobi-constant-jc/)
- [希尔区域（Hill Region）](/glossary/fundamentals/hill-region/)
- [庞加莱映射（Poincaré Map）](/glossary/dynamics/poincar-map/)
- [稳定性（Stability）](/glossary/dynamics/stability/)

## 参考文献

- 邓辉 等 - 2017 - 地月系共线平动点探测器的星上轨道预报问题
