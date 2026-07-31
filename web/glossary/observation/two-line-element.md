---
title: 两行根数（Two-Line Element）
description: 由北美防空司令部（NORAD）维护的近地空间目标轨道数据格式，每条记录包含两行编码的平均轨道根数（半长轴、偏心率、倾角等）和历元时间。TLE配合SGP4/SDP4传播器可快速预报目标位置，是目前近地空间态势感知的基础数据源。但TLE基于二体模型拟合，不适用于三体动力学主导的地月空间，且公开TLE不含地月空间目标，因此地
keywords: 两行根数, Two-Line Element, TLE, 观测, 测量
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 两行根数（Two-Line Element）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 两行根数详解 | 术语定义
  description: 由北美防空司令部（NORAD）维护的近地空间目标轨道数据格式，每条记录包含两行编码的平均轨道根数（半长轴、偏心率、倾角等）和历元时间。TLE配合SGP4/SDP4传播器可快速预报目标位置，是目前近地空间态势感知的基础数据源。但TLE基于二体模型拟合，不适用于三体动力学主导的地月空间，且公开TLE不含地月空间目标，因此地
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 两行根数详解 | 术语定义
  description: 由北美防空司令部（NORAD）维护的近地空间目标轨道数据格式，每条记录包含两行编码的平均轨道根数（半长轴、偏心率、倾角等）和历元时间。TLE配合SGP4/SDP4传播器可快速预报目标位置，是目前近地空间态势感知的基础数据源。但TLE基于二体模型拟合，不适用于三体动力学主导的地月空间，且公开TLE不含地月空间目标，因此地
  image: /logo.png
permalink: /glossary/observation/two-line-element/
---

# 两行根数（Two-Line Element）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

由北美防空司令部（NORAD）维护的近地空间目标轨道数据格式，每条记录包含两行编码的平均轨道根数（半长轴、偏心率、倾角等）和历元时间。TLE配合SGP4/SDP4传播器可快速预报目标位置，是目前近地空间态势感知的基础数据源。但TLE基于二体模型拟合，不适用于三体动力学主导的地月空间，且公开TLE不含地月空间目标，因此地月空间机动检测需要发展独立的方法。

## 应用价值

在轨道设计与转移任务中，该轨道类型可用于优化燃料消耗和飞行时间。该控制方法在地月空间航天器姿态与轨道控制中具有重要应用价值。动力系统理论为轨道设计提供了传统圆锥曲线法之外的全新视角。

## 相关概念

- [保持监视（Custody Maintenance）](/glossary/observation/custody-maintenance/)
- [孔径测光（Aperture Photometry）](/glossary/observation/aperture-photometry/)
- [近地天体（Near-Earth Object, NEO）](/glossary/observation/near-earth-object-neo/)

## 参考文献

- Zhang和Dang - 2025 - Impulsive maneuver detection of cislunar space objects based on convolutional neural network
