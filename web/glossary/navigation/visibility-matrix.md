---
title: 可见性矩阵（Visibility Matrix）
description: 卫星导航定位中描述用户与可见卫星几何关系的矩阵。矩阵各行由用户指向各可见卫星的单位方向向量和时钟偏差项组成，是计算几何精度因子（GDOP）的基础。GDOP = sqrt(trace((A^T A)^{-1}))，矩阵条件数越大，定位精度越差。
keywords: 可见性矩阵, Visibility Matrix, A, 导航, 测距
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 可见性矩阵（Visibility Matrix）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 可见性矩阵详解 | 术语定义
  description: 卫星导航定位中描述用户与可见卫星几何关系的矩阵。矩阵各行由用户指向各可见卫星的单位方向向量和时钟偏差项组成，是计算几何精度因子（GDOP）的基础。GDOP = sqrt(trace((A^T A)^{-1}))，矩阵条件数越大，定位精度越差。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 可见性矩阵详解 | 术语定义
  description: 卫星导航定位中描述用户与可见卫星几何关系的矩阵。矩阵各行由用户指向各可见卫星的单位方向向量和时钟偏差项组成，是计算几何精度因子（GDOP）的基础。GDOP = sqrt(trace((A^T A)^{-1}))，矩阵条件数越大，定位精度越差。
  image: /logo.png
permalink: /glossary/navigation/visibility-matrix/
---

# 可见性矩阵（Visibility Matrix）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

卫星导航定位中描述用户与可见卫星几何关系的矩阵。矩阵各行由用户指向各可见卫星的单位方向向量和时钟偏差项组成，是计算几何精度因子（GDOP）的基础。GDOP = sqrt(trace((A^T A)^{-1}))，矩阵条件数越大，定位精度越差。

## 应用价值

在航天器导航和定位中，该方法用于从传感器数据中提取有效信息，实现自主定轨和轨道预报。支持地月空间探测任务的实时导航需求。

## 相关概念

- [卫星钟差（Satellite Clock Bias）](/glossary/navigation/satellite-clock-bias/)
- [近距离靠拢段（Close-Range Approaching Section）](/glossary/navigation/closerange-approaching-section/)
- [航迹对航迹融合（Track-to-Track Fusion）](/glossary/navigation/tracktotrack-fusion/)
- [星间链路定轨（ISL-based Orbit Determination）](/glossary/navigation/islbased-orbit-determination/)
## 参考文献

- Conti and Circi, 2025, Design of halo orbit constellation for lunar global positioning and communication services; Kaplan and Hegarty, 2017, Understanding GPS/GNSS
