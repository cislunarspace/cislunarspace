---
title: 连续推力模型（Continuous Thrust Model）
description: 航天器推进系统输出持续作用力的数学模型。与脉冲推力模型（瞬时速度增量）不同，连续推力模型的控制加速度 u(t) 在时间上连续作用，通常用于电推进系统。
keywords: 连续推力模型, Continuous Thrust Model, 电推进, 控制加速度, B样条, 傅里叶级数
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 连续推力模型（Continuous Thrust Model）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 连续推力模型详解 | 术语定义
  description: 航天器推进系统输出持续作用力的数学模型。与脉冲推力模型（瞬时速度增量）不同，连续推力模型的控制加速度 u(t) 在时间上连续作用，通常用于电推进系统。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 连续推力模型详解 | 术语定义
  description: 航天器推进系统输出持续作用力的数学模型。与脉冲推力模型（瞬时速度增量）不同，连续推力模型的控制加速度 u(t) 在时间上连续作用，通常用于电推进系统。
  image: /logo.png
permalink: /glossary/dynamics/continuous-thrust-model/
---

# 连续推力模型（Continuous Thrust Model）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

航天器推进系统输出持续作用力的数学模型。与脉冲推力模型（瞬时速度增量）不同，连续推力模型的控制加速度 u(t) 在时间上连续作用，通常用于电推进系统。在轨道优化中，连续推力信号常用 B 样条或傅里叶级数参数化，将控制变量转化为有限维参数。

## 应用价值

连续推力模型是电推进系统轨道设计的核心数学框架。与化学推进的脉冲模型不同，电推进推力虽小但持续开启数月，需要用时间连续函数描述控制加速度。在轨道优化中，采用 B 样条或傅里叶级数参数化可以大幅缩减优化变量的维数，使原本无限维的最优控制问题变为可解的数值优化问题。该模型在地月转移、月球着陆上升和行星际探测任务中均有广泛应用，尤其适合"推力小但飞行时间长"的任务剖面。

## 相关概念

- 脉冲推力模型（Impulsive Thrust Model）
- [电推进（Electric Propulsion）](/glossary/fundamentals/ep/)
- 轨道优化（Trajectory Optimization）
- 推力弧（Thrust Arc）

## 参考文献

- Sanchez et al. 2020
