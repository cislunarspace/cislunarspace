---
title: 反馈线性化（Feedback Linearization）
description: 通过非线性状态反馈和坐标变换，将非线性系统精确转化为线性系统的设计方法。变换后的系统可用线性控制理论设计控制器。在轨道保持中用于将平动点附近的非线性航天器动力学线性化，但对未建模扰动和数字实现的鲁棒性较差。
keywords: 反馈线性化, Feedback Linearization, , 动力学, 非线性, 稳定性, 流形, 控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 反馈线性化（Feedback Linearization）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 反馈线性化（Feedback Linearization）详解 | 术语定义
  description: 通过非线性状态反馈和坐标变换，将非线性系统精确转化为线性系统的设计方法。变换后的系统可用线性控制理论设计控制器。在轨道保持中用于将平动点附近的非线性航天器动力学线性化，但对未建模扰动和数字实现的鲁棒性较差。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 反馈线性化（Feedback Linearization）详解 | 术语定义
  description: 通过非线性状态反馈和坐标变换，将非线性系统精确转化为线性系统的设计方法。变换后的系统可用线性控制理论设计控制器。在轨道保持中用于将平动点附近的非线性航天器动力学线性化，但对未建模扰动和数字实现的鲁棒性较差。
  image: /logo.png
permalink: /glossary/dynamics/feedback-linearization/
---

# 反馈线性化（Feedback Linearization）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

通过非线性状态反馈和坐标变换，将非线性系统精确转化为线性系统的设计方法。变换后的系统可用线性控制理论设计控制器。在轨道保持中用于将平动点附近的非线性航天器动力学线性化，但对未建模扰动和数字实现的鲁棒性较差。

## 应用价值

该术语在地月转移轨道设计中被广泛应用，用于优化转移轨迹、降低速度增量消耗。工程师在设计地月空间任务时，可以利用这一概念评估不同轨道的性能差异，选择满足任务约束的最优方案。此外，它也可用于分析轨道机动方案的可行性，支持任务规划与决策。

## 相关概念

- [椭圆限制性三体问题（Elliptic Restricted Three-Body Problem）](/glossary/dynamics/er3bp/)
- 动力一致性（Dynamical Consistency）
- 组合协方差（Combined Covariance）
- [尼霍罗舍夫估计（Nekhorosev Estimates）](/glossary/dynamics/nekhorosev-estimates/)

## 参考文献

- Elobaid et al. 2022
- Sanna等 - 2024
