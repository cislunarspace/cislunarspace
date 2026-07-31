---
title: 自抗扰控制（Active Disturbance Rejection Control）
description: 一种不依赖精确数学模型的鲁棒控制方法。通过扩张状态观测器实时估计系统总扰动（包括模型不确定性和外部干扰），再用非线性反馈控制律加以补偿。相比传统PID控制，ADRC对参数不确定性和未知扰动具有更强的适应能力。
keywords: 自抗扰控制, Active Disturbance Rejection Control, ADRC, 轨道动力学, 流形, 转移轨道, 优化
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
permalink: /glossary/dynamics/ADRC/
---

# 自抗扰控制（Active Disturbance Rejection Control）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种不依赖精确数学模型的鲁棒控制方法。通过扩张状态观测器实时估计系统总扰动（包括模型不确定性和外部干扰），再用非线性反馈控制律加以补偿。相比传统PID控制，ADRC对参数不确定性和未知扰动具有更强的适应能力。

## 应用价值

该概念在天基光学观测与空间态势感知中具有重要意义，用于评估探测器对目标的可见性。

## 相关概念

- [Weak Stability Boundary](/glossary/dynamics/weak-stability-boundary/)
- [Earth-Moon Manifold](/glossary/dynamics/earth-moon-manifold/)

## 参考文献

- 人工平动点附近混合推进航天器编队滑模控制保持。
