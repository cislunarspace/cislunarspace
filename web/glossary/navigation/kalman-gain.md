---
title: 卡尔曼增益（Kalman Gain）
description: 扩展卡尔曼滤波中连接预测状态与量测更新的关键权重矩阵，根据预测协方差和量测噪声协方差计算，决定新量测对状态估计的修正幅度。
keywords: 卡尔曼增益, Kalman Gain, 导航, 定轨, 定位
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 卡尔曼增益（Kalman Gain）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 卡尔曼增益详解 | 术语定义
  description: 扩展卡尔曼滤波中连接预测状态与量测更新的关键权重矩阵，根据预测协方差和量测噪声协方差计算，决定新量测对状态估计的修正幅度。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 卡尔曼增益详解 | 术语定义
  description: 扩展卡尔曼滤波中连接预测状态与量测更新的关键权重矩阵，根据预测协方差和量测噪声协方差计算，决定新量测对状态估计的修正幅度。
  image: /logo.png
permalink: /glossary/navigation/kalman-gain/
---

# 卡尔曼增益（Kalman Gain）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

扩展卡尔曼滤波中连接预测状态与量测更新的关键权重矩阵，根据预测协方差和量测噪声协方差计算，决定新量测对状态估计的修正幅度。

## 应用价值

卡尔曼增益是地月空间导航与定轨技术的关键环节。在实际任务中，利用该方法可以实现航天器的自主定位、轨道确定和时间同步，减少对地面测控系统的依赖，提高导航精度和自主性。

## 相关概念

- [北斗系统时（Beidou System Time, BDST）](/glossary/navigation/beidou-system-time-bdst/)
- [双天线设计（Dual-antenna design）](/glossary/navigation/dual-antenna-design/)
- [几何法定轨（Geometric Orbit Determination）](/glossary/navigation/geometric-orbit-determination/)
- [信标导航信号（Beacon）](/glossary/navigation/beacon/)

## 参考文献

- Chen 等 - 2026
