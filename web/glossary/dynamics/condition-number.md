---
title: 条件数（Condition Number）
description: 矩阵最大奇异值与最小奇异值的比值，衡量估计问题的适定性。在状态估计中，可观测性Gramian的条件数越小，表明测量几何对各状态方向的敏感度越均匀，估计精度越高；条件数越大，测量噪声对最弱状态方向的放大越严重，估计越不可靠。取常用对数后作为可观测性的经验度量。
keywords: 条件数, Condition Number, 轨道动力学, 控制理论, 最优控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 条件数（Condition Number）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 条件数详解 | 术语定义
  description: 矩阵最大奇异值与最小奇异值的比值，衡量估计问题的适定性。在状态估计中，可观测性Gramian的条件数越小，表明测量几何对各状态方向的敏感度越均匀，估计精度越高；条件数越大，测量噪声对最弱状态方向的放大越严重，估计越不可靠。取常用对数后作为可观测性的经验度量。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 条件数详解 | 术语定义
  description: 矩阵最大奇异值与最小奇异值的比值，衡量估计问题的适定性。在状态估计中，可观测性Gramian的条件数越小，表明测量几何对各状态方向的敏感度越均匀，估计精度越高；条件数越大，测量噪声对最弱状态方向的放大越严重，估计越不可靠。取常用对数后作为可观测性的经验度量。
  image: /logo.png
permalink: /glossary/dynamics/condition-number/
---

# 条件数（Condition Number）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

矩阵最大奇异值与最小奇异值的比值，衡量估计问题的适定性。在状态估计中，可观测性Gramian的条件数越小，表明测量几何对各状态方向的敏感度越均匀，估计精度越高；条件数越大，测量噪声对最弱状态方向的放大越严重，估计越不可靠。取常用对数后作为可观测性的经验度量。

## 应用价值

在航天器导航和定位中，该方法用于从传感器数据中提取有效信息，实现自主定轨和轨道预报。支持地月空间探测任务的实时导航需求。

## 相关概念

- [Hill 模型（Hill Model）](/glossary/dynamics/hill-model/)
- [惯性坐标系固定编队（Formation Fixed Relative to Inertial Frame）](/glossary/dynamics/formation-fixed-relative-to-inertial-frame/)
- [受摄Lambert问题（Perturbational Lambert Problem）](/glossary/dynamics/perturbational-lambert-problem/)
- [探测器定位（Probe Targeting）](/glossary/dynamics/probe-targeting/)
## 参考文献

- 黄勇 等 - 2023 - 地月空间探测器星间测距自主定轨
- Observability metrics for space-based cislunar domain awareness (Fowler & Paley, 2023)
