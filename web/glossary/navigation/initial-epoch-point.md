---
title: 初值点（Initial Epoch Point）
description: 初始观测时刻动力学替代轨道上的状态点，对应定轨过程中需要估计的状态量。不同初值点对应不同的观测几何，定轨精度受其影响；采样弧长增大时，初值点选取对精度的影响减弱。
keywords: 定位, 导航, 轨道确定, 星座
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 初值点（Initial Epoch Point）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 初值点详解 | 术语定义
  description: 初始观测时刻动力学替代轨道上的状态点，对应定轨过程中需要估计的状态量。不同初值点对应不同的观测几何，定轨精度受其影响；采样弧长增大时，初值点选取对精度的影响减弱。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 初值点详解 | 术语定义
  description: 初始观测时刻动力学替代轨道上的状态点，对应定轨过程中需要估计的状态量。不同初值点对应不同的观测几何，定轨精度受其影响；采样弧长增大时，初值点选取对精度的影响减弱。
  image: /logo.png
permalink: /glossary/navigation/initial-epoch-point/
---

# 初值点（Initial Epoch Point）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

初始观测时刻动力学替代轨道上的状态点，对应定轨过程中需要估计的状态量。不同初值点对应不同的观测几何，定轨精度受其影响；采样弧长增大时，初值点选取对精度的影响减弱。

## 应用价值

该指标在地月空间航天器自主导航中具有重要作用。由于地月空间可见卫星少且几何分布变化大，定位精度受几何分布影响显著，实际任务中需结合实时几何计算进行导航滤波器设计，以获得最优定位性能。

## 相关概念

- [位置精度因子（Position Dilution of Precision）](/glossary/navigation/position-dilution-of-precision/)
- [甚长基线干涉测量（Very Long Baseline Interferometry）](/glossary/navigation/very-long-baseline-interferometry/)
- [轨道预报（Orbit Prediction）](/glossary/navigation/orbit-prediction/)
- [贝叶斯优化（Bayesian Optimization）](/glossary/dynamics/bayesian-optimization/)

## 参考文献

- 刘斌 等 - 2017 - 基于地月三角平动点的卫星自主定轨
