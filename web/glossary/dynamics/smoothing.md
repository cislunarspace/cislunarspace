---
title: 平滑处理（smoothing）
description: 在综合代价评估指标函数的分段点处进行的连续化处理。论文在速度增量1.7 km/s分段处对相邻两段函数进行平滑连接，防止评估权值出现跳变，确保评估结果的连续性和稳定性。
keywords: 平滑处理, smoothing, 动力学, 轨道, 控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 平滑处理（smoothing）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 平滑处理详解 | 术语定义
  description: 在综合代价评估指标函数的分段点处进行的连续化处理。论文在速度增量1.7 km/s分段处对相邻两段函数进行平滑连接，防止评估权值出现跳变，确保评估结果的连续性和稳定性。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 平滑处理详解 | 术语定义
  description: 在综合代价评估指标函数的分段点处进行的连续化处理。论文在速度增量1.7 km/s分段处对相邻两段函数进行平滑连接，防止评估权值出现跳变，确保评估结果的连续性和稳定性。
  image: /logo.png
permalink: /glossary/dynamics/smoothing/
---

# 平滑处理（smoothing）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

在综合代价评估指标函数的分段点处进行的连续化处理。论文在速度增量1.7 km/s分段处对相邻两段函数进行平滑连接，防止评估权值出现跳变，确保评估结果的连续性和稳定性。

## 应用价值

由于平滑处理具有不稳定性，轨道设计时必须考虑主动控制或定期修正策略，以避免初始误差随时间指数增长导致任务失败。
针对平滑处理的深入研究有助于理解地月空间复杂动力学环境，为未来任务设计提供理论支撑和工程参考。
在实际任务中，需要结合数值仿真和解析方法对平滑处理进行分析验证，确保设计方案满足任务约束和性能指标。

## 相关概念

- [双变量高斯分布（Bivariate Gaussian Distribution）](/glossary/dynamics/bivariate-gaussian-distribution/)
- [中途脉冲（Midcourse Impulse）](/glossary/dynamics/midcourse-impulse/)
- [零推力参考轨迹（Zero-Thrust Reference Trajectory）](/glossary/dynamics/zero-thrust-reference-trajectory/)
- [协态变量（Co-state Variables）](/glossary/dynamics/co-state-variables/)

## 参考文献

- 丁百慧 等 - 2023 - 载人月球探测任务转移轨道及月面着陆区评估分析
