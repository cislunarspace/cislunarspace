---
title: 测距噪声（Range Measurement Noise）
description: 星间链路伪距测量中零均值高斯测量噪声的标准差。论文分析了1m、10m、100m三个量级对定轨性能的影响，发现系统的可观测性决定了其对测距噪声的敏感程度。
keywords: 测距噪声, Range Measurement Noise, 星间链路, 伪距测量, 自主定轨, 高斯噪声
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 测距噪声（Range Measurement Noise）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 测距噪声详解 | 术语定义
  description: 星间链路伪距测量中零均值高斯测量噪声的标准差。论文分析了1m（高精度）、10m（nominal）、100m（低精度或极端条件）三个量级对定轨性能的影响，发现系统的可观测性决定了其对测距噪声的敏感程度。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 测距噪声详解 | 术语定义
  description: 星间链路伪距测量中零均值高斯测量噪声的标准差。论文分析了1m（高精度）、10m（nominal）、100m（低精度或极端条件）三个量级对定轨性能的影响，发现系统的可观测性决定了其对测距噪声的敏感程度。
  image: /logo.png
permalink: /glossary/navigation/range-measurement-noise/
---

# 测距噪声（Range Measurement Noise）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

星间链路伪距测量中零均值高斯测量噪声的标准差。论文分析了1m（高精度）、10m（nominal）、100m（低精度或极端条件）三个量级对定轨性能的影响，发现系统的可观测性决定了其对测距噪声的敏感程度。

## 应用价值

测距噪声是星间链路定轨系统中最主要的误差来源之一。测距噪声水平直接决定了轨道确定的精度上限——低噪声测距可以实现分米级甚至厘米级精密定轨，而高噪声环境下定轨精度会大幅下降。研究表明，在测量几何良好的条件下，系统对测距噪声的敏感度较低，即使存在一定程度的噪声也能保持较好的定轨性能。因此，在设计地月空间星间测距系统时，除了追求硬件测距精度，还需要优化星座构型以提升可观测性，使得定轨算法能够充分利用测量数据克服噪声影响。该参数对于月球导航卫星星座的精密轨道确定具有重要意义。

## 相关概念

- [星间链路（Inter-Satellite Link）](/glossary/navigation/inter-satellite-link/)
- [伪距（Pseudorange）](/glossary/navigation/pseudorange/)
- [轨道确定（Orbit Determination）](/glossary/navigation/orbit-determination/)
- [可观测性（Observability）](/glossary/navigation/observability/)

## 参考文献

- Li 等 - 2026 - A performance study on orbit determination using inter-satellite links between heterogeneous orbits
