---
title: 自抗扰控制（Active Disturbance Rejection Control）
description: 一种不依赖精确数学模型的鲁棒控制方法。通过扩张状态观测器实时估计系统总扰动（包括模型不确定性和外部干扰），再用非线性反馈控制律加以补偿。相比传统PID控制，ADRC对参数不确定性和未知扰动具有更强的适应能力。
keywords: 自抗扰控制, Active Disturbance Rejection Control, ADRC
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 自抗扰控制（Active Disturbance Rejection Control）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 自抗扰控制详解 | 术语定义
  description: 一种不依赖精确数学模型的鲁棒控制方法。通过扩张状态观测器实时估计系统总扰动（包括模型不确定性和外部干扰），再用非线性反馈控制律加以补偿。相比传统PID控制，ADRC对参数不确定性和未知扰动具有更强的适应能力。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 自抗扰控制详解 | 术语定义
  description: 一种不依赖精确数学模型的鲁棒控制方法。通过扩张状态观测器实时估计系统总扰动（包括模型不确定性和外部干扰），再用非线性反馈控制律加以补偿。相比传统PID控制，ADRC对参数不确定性和未知扰动具有更强的适应能力。
  image: /logo.png
permalink: /glossary/dynamics/active-disturbance-rejection-control/
---

# 自抗扰控制（Active Disturbance Rejection Control）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种不依赖精确数学模型的鲁棒控制方法。通过扩张状态观测器实时估计系统总扰动（包括模型不确定性和外部干扰），再用非线性反馈控制律加以补偿。相比传统PID控制，ADRC对参数不确定性和未知扰动具有更强的适应能力。

## 应用价值

在轨道设计、分析和控制中，需要利用动力学模型预测航天器轨迹，并通过数值方法或解析方法求解运动方程。该概念支撑轨道机动设计、轨道改进和编队飞行等关键任务。

## 相关概念

- [轨道改进（Orbit Improvement）](/glossary/dynamics/orbit-improvement/)
- [聚类聚合（Cluster Aggregation）](/glossary/dynamics/cluster-aggregation/)
- [伪谱法（Pseudospectral Method）](/glossary/dynamics/pseudospectral-method/)

## 参考文献

- 人工平动点附近混合推进航天器编队滑模控制保持
