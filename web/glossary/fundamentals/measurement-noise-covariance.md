---
title: 观测噪声协方差（Measurement Noise Covariance）
description: 卡尔曼滤波量测方程中描述传感器量测误差统计特性的协方差矩阵R。当量测数据包含异常值时，固定R无法准确反映量测可信度，需自适应估计。
keywords: 观测噪声协方差, Measurement Noise Covariance, 基础概念, 坐标系, 轨道根数, 物理量
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 观测噪声协方差（Measurement Noise Covariance）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 观测噪声协方差详解 | 术语定义
  description: 卡尔曼滤波量测方程中描述传感器量测误差统计特性的协方差矩阵R。当量测数据包含异常值时，固定R无法准确反映量测可信度，需自适应估计。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 观测噪声协方差详解 | 术语定义
  description: 卡尔曼滤波量测方程中描述传感器量测误差统计特性的协方差矩阵R。当量测数据包含异常值时，固定R无法准确反映量测可信度，需自适应估计。
  image: /logo.png
permalink: /glossary/fundamentals/measurement-noise-covariance/
---

# 观测噪声协方差（Measurement Noise Covariance）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

卡尔曼滤波量测方程中描述传感器量测误差统计特性的协方差矩阵R。当量测数据包含异常值时，固定R无法准确反映量测可信度，需自适应估计。

## 应用价值

在状态估计中过滤测量噪声，实现对航天器轨道和姿态的精确估计。
该概念在地月空间任务中具有重要的应用价值，值得深入研究。

## 相关概念

- [简化动力学法定轨（Simplified Dynamic Orbit Determination）](/glossary/navigation/simplified-dynamic-orbit-determination/)
- [地平线光学导航（Horizon-Based Optical Navigation）](/glossary/navigation/horizon-based-optical-navigation/)
- [集中式扩展卡尔曼滤波（Centralized Extended Kalman Filter）](/glossary/navigation/centralized-extended-kalman-filter/)
- [星际卫星轨道自主导航（Linked, Autonomous, Interplanetary Satellite Orbit Navigation, LiAISON）](/glossary/navigation/linked-autonomous-interplanetary-satellite-orbit-navigation-liaison/)

## 参考文献

- Xu et al. 2026
