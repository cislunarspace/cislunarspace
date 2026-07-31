---
title: 帧对齐（Frame Alignment）
description: 移位叠加前的预处理步骤。根据天体测量解算得到的背景恒星位置，计算连续帧之间的平移偏移量，并通过插值算法将各帧像素对齐。帧对齐消除恒星视差后，才能准确估计运动目标的位移量，避免背景恒星残留信号造成的虚假探测。
keywords: 帧对齐, Frame Alignment, 空间监视, 目标跟踪, 光学观测
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 帧对齐（Frame Alignment）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 帧对齐详解 | 术语定义
  description: 移位叠加前的预处理步骤。根据天体测量解算得到的背景恒星位置，计算连续帧之间的平移偏移量，并通过插值算法将各帧像素对齐。帧对齐消除恒星视差后，才能准确估计运动目标的位移量，避免背景恒星残留信号造成的虚假探测。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 帧对齐详解 | 术语定义
  description: 移位叠加前的预处理步骤。根据天体测量解算得到的背景恒星位置，计算连续帧之间的平移偏移量，并通过插值算法将各帧像素对齐。帧对齐消除恒星视差后，才能准确估计运动目标的位移量，避免背景恒星残留信号造成的虚假探测。
  image: /logo.png
permalink: /glossary/observation/frame-alignment/
---

# 帧对齐（Frame Alignment）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 术语来源：Sun et al. 2026, Optical Survey for Cislunar Moving Objects Using Image Stacking
>
> 本文地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

移位叠加前的预处理步骤。根据天体测量解算得到的背景恒星位置，计算连续帧之间的平移偏移量，并通过插值算法将各帧像素对齐。帧对齐消除恒星视差后，才能准确估计运动目标的位移量，避免背景恒星残留信号造成的虚假探测。

## 应用价值

帧对齐在地月空间监视和目标特性测量中具有应用价值。通过光学、雷达成像或光谱测量等手段，帧对齐分析为空间态势感知和科学研究提供数据支撑。

## 相关概念

- [代价矩阵（Cost Matrix）](/glossary/observation/cost-matrix/)
- [非合作目标搜索与跟踪（Non-Cooperative Target Search and Tracking）](/glossary/observation/non-cooperative-target-search-and-tracking/)
- [粗糙度（Roughness）](/glossary/observation/roughness/)
- [星下点（Sub-satellite Point）](/glossary/observation/sub-satellite-point/)

## 参考文献

- Sun et al. 2026, Optical Survey for Cislunar Moving Objects Using Image Stacking
