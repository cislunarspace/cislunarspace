---
title: 直接配点法（Direct Transcription）
description: 将连续最优控制问题离散化为参数优化问题的一类方法。通过在离散时间点上参数化状态和控制变量，并利用隐式积分约束满足运动方程，从而将问题转化为非线性规划问题。
keywords: 直接配点法, Direct Transcription, , 动力学, 非线性, 稳定性, 流形, 控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 直接配点法（Direct Transcription）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 直接配点法（Direct Transcription）详解 | 术语定义
  description: 将连续最优控制问题离散化为参数优化问题的一类方法。通过在离散时间点上参数化状态和控制变量，并利用隐式积分约束满足运动方程，从而将问题转化为非线性规划问题。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 直接配点法（Direct Transcription）详解 | 术语定义
  description: 将连续最优控制问题离散化为参数优化问题的一类方法。通过在离散时间点上参数化状态和控制变量，并利用隐式积分约束满足运动方程，从而将问题转化为非线性规划问题。
  image: /logo.png
permalink: /glossary/dynamics/direct-transcription/
---

# 直接配点法（Direct Transcription）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

将连续最优控制问题离散化为参数优化问题的一类方法。通过在离散时间点上参数化状态和控制变量，并利用隐式积分约束满足运动方程，从而将问题转化为非线性规划问题。

## 应用价值

在实际的地月空间任务中，该方法可用于提升航天器的自主导航与姿态控制能力。通过实时处理传感器数据并估计系统状态，航天器能够在缺乏地面测控支持的条件下维持正常工作。这一技术在深空探测和交会对接等复杂任务场景中尤为重要，能够增强系统的鲁棒性和适应性。

## 相关概念

- [椭圆限制性三体问题（Elliptic Restricted Three-Body Problem）](/glossary/dynamics/er3bp/)
- 动力一致性（Dynamical Consistency）
- 组合协方差（Combined Covariance）
- [尼霍罗舍夫估计（Nekhorosev Estimates）](/glossary/dynamics/nekhorosev-estimates/)

## 参考文献

- Conway - 2010 - Spacecraft trajectory optimization
