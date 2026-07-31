---
title: 可达性剖面（Accessibility Profile）
description: 二值向量，描述沿观测卫星轨道每个离散时间步上，目标点是否处于可观测状态。由可达性度量（如距离、视星等）经阈值判定得到，1表示可观测，0表示不可观测。
keywords: 可达性剖面, Accessibility Profile, 观测, 雷达, 光学
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 可达性剖面（Accessibility Profile）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 可达性剖面详解 | 术语定义
  description: 二值向量，描述沿观测卫星轨道每个离散时间步上，目标点是否处于可观测状态。由可达性度量（如距离、视星等）经阈值判定得到，1表示可观测，0表示不可观测。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 可达性剖面详解 | 术语定义
  description: 二值向量，描述沿观测卫星轨道每个离散时间步上，目标点是否处于可观测状态。由可达性度量（如距离、视星等）经阈值判定得到，1表示可观测，0表示不可观测。
  image: /logo.png
permalink: /glossary/observation/accessibility-profile/
---

# 可达性剖面（Accessibility Profile）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文来源：Patel et al., 2024
>
> 站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

二值向量，描述沿观测卫星轨道每个离散时间步上，目标点是否处于可观测状态。由可达性度量（如距离、视星等）经阈值判定得到，1表示可观测，0表示不可观测。

## 应用价值

该术语在地月空间任务中具有重要应用价值。在轨道设计阶段，工程师利用相关理论进行轨迹优化；在导航与轨道确定中，用于提升测量精度；在姿态控制与轨道保持任务中，确保航天器稳定运行。具体应用中，可结合任务需求进行参数优化和算法适配，提高任务成功率和资源利用效率。

## 相关概念

- [双程测距（Two-Way Ranging）](/glossary/observation/two-way-ranging/)
- [月球耻辱锥（Lunar Exclusion Cone）](/glossary/observation/lunar-exclusion-cone/)
- [行星雷达（Planetary Radar）](/glossary/observation/planetary-radar/)

## 参考文献

- Patel et al., 2024
