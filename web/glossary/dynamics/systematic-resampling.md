---
title: 系统重采样（Systematic Resampling）
description: 粒子滤波中用于解决粒子退化问题的采样策略。将粒子权重的累积分布等距划分，按固定间隔从累积分布函数中抽取随机起点，再依次选取对应粒子进行复制。相比简单随机重采样，系统重采样的方差更小、实现更高效，是粒子滤波工程应用中的标准选择。
keywords: 系统重采样, Systematic Resampling, 轨道动力学, 控制理论, 数值仿真
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 系统重采样（Systematic Resampling）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 系统重采样详解 | 术语定义
  description: 粒子滤波中用于解决粒子退化问题的采样策略。将粒子权重的累积分布等距划分，按固定间隔从累积分布函数中抽取随机起点，再依次选取对应粒子进行复制。相比简单随机重采样，系统重采样的方差更小、实现更高效，是粒子滤波工程应用中的标准选择。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 系统重采样详解 | 术语定义
  description: 粒子滤波中用于解决粒子退化问题的采样策略。将粒子权重的累积分布等距划分，按固定间隔从累积分布函数中抽取随机起点，再依次选取对应粒子进行复制。相比简单随机重采样，系统重采样的方差更小、实现更高效，是粒子滤波工程应用中的标准选择。
  image: /logo.png
permalink: /glossary/dynamics/systematic-resampling/
---

# 系统重采样（Systematic Resampling）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

粒子滤波中用于解决粒子退化问题的采样策略。将粒子权重的累积分布等距划分，按固定间隔从累积分布函数中抽取随机起点，再依次选取对应粒子进行复制。相比简单随机重采样，系统重采样的方差更小、实现更高效，是粒子滤波工程应用中的标准选择。

## 应用价值

系统重采样涉及地月空间航天器的运动特性分析和控制问题。在实际任务设计中，利用该方法可以分析轨道稳定性、计算控制策略，或评估摄动因素对轨道的影响，为任务安全性和可靠性提供保障。

## 相关概念

- [遭遇区域（Encounter Region）](/glossary/dynamics/encounter-region/)
- [相对论效应修正（Relativistic Correction）](/glossary/dynamics/relativistic-correction/)
- [直接飞越转移（Direct Fly-By Transfer, DFBT）](/glossary/dynamics/direct-fly-by-transfer-dfbt/)
- [安全转移编队（Safe Transfer Formation）](/glossary/dynamics/safe-transfer-formation/)

## 参考文献

- Li 等 - 2025 - Efficient reachable domain search-tracking for cislunar non-cooperative targets via designed quadrature
