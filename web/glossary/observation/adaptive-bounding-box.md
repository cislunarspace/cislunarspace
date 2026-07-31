---
title: 自适应检测框（Adaptive Bounding Box）
description: 根据目标形态特征（长轴长度）自动调整尺寸的目标检测框。尺寸由长轴长度乘以扩展倍数 k 再加偏移量 b 确定。对跟踪目标和非跟踪目标采用不同的 k、b 参数，兼顾跟踪精度（紧凑框减少误匹配）和快速目标捕获（扩展框覆盖大位移）。
keywords: 自适应检测框, Adaptive Bounding Box, 观测, 雷达, SAR
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 自适应检测框（Adaptive Bounding Box）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 自适应检测框详解 | 术语定义
  description: 根据目标形态特征（长轴长度）自动调整尺寸的目标检测框。尺寸由长轴长度乘以扩展倍数 k 再加偏移量 b 确定。对跟踪目标和非跟踪目标采用不同的 k、b 参数，兼顾跟踪精度（紧凑框减少误匹配）和快速目标捕获（扩展框覆盖大位移）。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 自适应检测框详解 | 术语定义
  description: 根据目标形态特征（长轴长度）自动调整尺寸的目标检测框。尺寸由长轴长度乘以扩展倍数 k 再加偏移量 b 确定。对跟踪目标和非跟踪目标采用不同的 k、b 参数，兼顾跟踪精度（紧凑框减少误匹配）和快速目标捕获（扩展框覆盖大位移）。
  image: /logo.png
permalink: /glossary/observation/adaptive-bounding-box/
---

# 自适应检测框（Adaptive Bounding Box）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

根据目标形态特征（长轴长度）自动调整尺寸的目标检测框。尺寸由长轴长度乘以扩展倍数 k 再加偏移量 b 确定。对跟踪目标和非跟踪目标采用不同的 k、b 参数，兼顾跟踪精度（紧凑框减少误匹配）和快速目标捕获（扩展框覆盖大位移）。

## 应用价值

基于该术语在定义中描述的功能或性质，该术语在地月空间任务设计、分析与控制中具有重要应用价值。在轨道设计阶段，可利用相关动力学特性进行转移轨道优化；在导航与控制中，可用于提高任务执行的精度和可靠性；在系统分析中，有助于深入理解复杂的多体动力学行为，指导任务方案论证和风险评估。

## 相关概念

- [指向方向（Pointing Direction）](/glossary/observation/pointing-direction/)
- [地月碎片雷达（Cislunar Debris Radar）](/glossary/observation/cislunar-debris-radar/)
- [陨石坑检测（Crater Detection）](/glossary/observation/crater-detection/)
- [定轨弧长（Orbit Determination Arc Length）](/glossary/observation/orbit-determination-arc-length/)

## 参考文献

- 王磊等, 2025
