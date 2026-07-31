---
title: DeepSORT（Deep Simple Online and Realtime Tracking）
description: 在SORT算法基础上引入外观特征（行人重识别）的多目标跟踪算法。通过级联匹配机制将运动特征（卡尔曼滤波预测+马氏距离）与外观特征（余弦距离）加权融合，利用匈牙利算法实现最优关联，有效缓解长时间遮挡后的身份切换问题。
keywords: DeepSORT, 观测, 传感器, 雷达, 监测
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: DeepSORT（Deep Simple Online and Realtime Tracking）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: DeepSORT详解 | 术语定义
  description: 在SORT算法基础上引入外观特征（行人重识别）的多目标跟踪算法。通过级联匹配机制将运动特征（卡尔曼滤波预测+马氏距离）与外观特征（余弦距离）加权融合，利用匈牙利算法实现最优关联，有效缓解长时间遮挡后的身份切换问题。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: DeepSORT详解 | 术语定义
  description: 在SORT算法基础上引入外观特征（行人重识别）的多目标跟踪算法。通过级联匹配机制将运动特征（卡尔曼滤波预测+马氏距离）与外观特征（余弦距离）加权融合，利用匈牙利算法实现最优关联，有效缓解长时间遮挡后的身份切换问题。
  image: /logo.png
permalink: /glossary/observation/deep-simple-online-and-realtime-tracking/
---

# DeepSORT（Deep Simple Online and Realtime Tracking）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

在SORT算法基础上引入外观特征（行人重识别）的多目标跟踪算法。通过级联匹配机制将运动特征（卡尔曼滤波预测+马氏距离）与外观特征（余弦距离）加权融合，利用匈牙利算法实现最优关联，有效缓解长时间遮挡后的身份切换问题。

## 应用价值

该方法在航天器轨道控制和状态估计中发挥关键作用。通过合理的控制策略设计或滤波算法选择，可以有效抑制扰动影响，提高航天器轨道保持精度和定轨收敛速度。

## 相关概念

- [碰撞解体（Catastrophic Collision）](/glossary/observation/catastrophic-collision/)
- [传感器调度（Sensor Tasking）](/glossary/observation/sensor-tasking/)
- [目标亮度解算（Object Brightness Measurement）](/glossary/observation/object-brightness-measurement/)
- [多站雷达系统（Multistatic Radar System）](/glossary/observation/multistatic-radar-system/)

## 参考文献

- Wojke et al., 2017
- Pujara and Bhamare, 2022
- 王磊等, 2025
