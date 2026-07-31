---
title: 瞄准阈值（Targeting Threshold）
description: 控制器内部用于收敛判断的容忍度。在PC-SCoP中显式作为约束条件给出，取代了微分修正中非直觉的权重参数，可直接从任务需求推导。
keywords: 瞄准阈值, Targeting Threshold, 动力学, 控制, 优化, 稳定性分析
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 瞄准阈值（Targeting Threshold）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 瞄准阈值（Targeting Threshold）详解 | 术语定义
  description: 控制器内部用于收敛判断的容忍度。在PC-SCoP中显式作为约束条件给出，取代了微分修正中非直觉的权重参数，可直接从任务需求推导。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 瞄准阈值（Targeting Threshold）详解 | 术语定义
  description: 控制器内部用于收敛判断的容忍度。在PC-SCoP中显式作为约束条件给出，取代了微分修正中非直觉的权重参数，可直接从任务需求推导。
  image: /logo.png
permalink: /glossary/dynamics/targeting-threshold/
---

# 瞄准阈值（Targeting Threshold）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

控制器内部用于收敛判断的容忍度。在PC-SCoP中显式作为约束条件给出，取代了微分修正中非直觉的权重参数，可直接从任务需求推导。

## 应用价值

该控制方法在轨道保持、姿态控制和交会对接中广泛应用。通过求解反馈增益矩阵，可以实现对航天器状态的实时调节，保证轨道机动的精度和稳定性。

## 相关概念

- [雅可比积分（Jacobi Integral）](/glossary/dynamics/jacobi-integral/)
- [科氏定理（Coriolis Theorem）](/glossary/dynamics/coriolis-theorem/)
- [速度函数（Velocity Function）](/glossary/dynamics/velocity-function/)

## 参考文献

- Shimane et al. 2025
