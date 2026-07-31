---
title: 增益校正因子（Gain Correction Factor）
description: 将天线方向性系数转换为发射天线增益的修正量。增益等于方向性加上增益校正因子（dB），用于扣除天线内部损耗。GPS 卫星 L1 频段的增益校正因子约为 -1.4 dB。
keywords: 增益校正因子, Gain Correction Factor, GCF, 地月空间导航, PNT服务, 轨道确定
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 增益校正因子（Gain Correction Factor）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 增益校正因子详解 | 术语定义
  description: 将天线方向性系数转换为发射天线增益的修正量。增益等于方向性加上增益校正因子（dB），用于扣除天线内部损耗。GPS 卫星 L1 频段的增益校正因子约为 -1.4 dB。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 增益校正因子详解 | 术语定义
  description: 将天线方向性系数转换为发射天线增益的修正量。增益等于方向性加上增益校正因子（dB），用于扣除天线内部损耗。GPS 卫星 L1 频段的增益校正因子约为 -1.4 dB。
  image: /logo.png
permalink: /glossary/navigation/gain-correction-factor/
---

# 增益校正因子（Gain Correction Factor）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 术语来源：Analysis of Autonomous Orbit Determination in Various Near-Moon Periodic Orbits (Qi & Oguri, 2023)
>
> 本文地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

将天线方向性系数转换为发射天线增益的修正量。增益等于方向性加上增益校正因子（dB），用于扣除天线内部损耗。GPS 卫星 L1 频段的增益校正因子约为 -1.4 dB。

## 应用价值

增益校正因子在地月空间任务中用于确定探测器位置、速度或姿态信息。基于增益校正因子的导航滤波算法需要结合轨道动力学模型进行处理，在地月转移和平动点轨道阶段具有重要的应用价值。

## 相关概念

- [地月空间导航系统（Cislunar Space Navigation System）](/glossary/navigation/cislunar-space-navigation-system/)
- [Lyapunov最优反馈制导（Lyapunov Optimal Feedback Guidance）](/glossary/navigation/lyapunov-optimal-feedback-guidance/)
- [距离可观测性（Range Observability）](/glossary/navigation/range-observability/)
- [六分仪（Sextant）](/glossary/navigation/sextant/)

## 参考文献

- Analysis of Autonomous Orbit Determination in Various Near-Moon Periodic Orbits (Qi & Oguri, 2023)
