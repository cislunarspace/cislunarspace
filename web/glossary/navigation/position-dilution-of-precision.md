---
title: 位置精度因子（Position Dilution of Precision）
description: 反映 GNSS 卫星相对于接收机的空间几何分布对定位精度影响的指标。PDOP 越小，卫星几何分布越好，定位精度越高。在地月空间，可见星少且集中于小锥角，PDOP 通常远大于地面值。
keywords: PDOP, 定位, 导航, 轨道确定, 星座
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 位置精度因子（Position Dilution of Precision）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 位置精度因子详解 | 术语定义
  description: 反映 GNSS 卫星相对于接收机的空间几何分布对定位精度影响的指标。PDOP 越小，卫星几何分布越好，定位精度越高。在地月空间，可见星少且集中于小锥角，PDOP 通常远大于地面值。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 位置精度因子详解 | 术语定义
  description: 反映 GNSS 卫星相对于接收机的空间几何分布对定位精度影响的指标。PDOP 越小，卫星几何分布越好，定位精度越高。在地月空间，可见星少且集中于小锥角，PDOP 通常远大于地面值。
  image: /logo.png
permalink: /glossary/navigation/position-dilution-of-precision/
---

# 位置精度因子（Position Dilution of Precision）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

反映 GNSS 卫星相对于接收机的空间几何分布对定位精度影响的指标。PDOP 越小，卫星几何分布越好，定位精度越高。在地月空间，可见星少且集中于小锥角，PDOP 通常远大于地面值。

## 应用价值

该指标在地月空间航天器自主导航中具有重要作用。由于地月空间可见卫星少且几何分布变化大，定位精度受几何分布影响显著，实际任务中需结合实时几何计算进行导航滤波器设计，以获得最优定位性能。

## 相关概念

- [甚长基线干涉测量（Very Long Baseline Interferometry）](/glossary/navigation/very-long-baseline-interferometry/)
- [光行时迭代（Light-Time Iteration）](/glossary/navigation/light-time-iteration/)
- [轨道预报（Orbit Prediction）](/glossary/navigation/orbit-prediction/)
- [初值点（Initial Epoch Point）](/glossary/navigation/initial-epoch-point/)

## 参考文献

- GNSS在地月空间航天器自主导航中的可用性
