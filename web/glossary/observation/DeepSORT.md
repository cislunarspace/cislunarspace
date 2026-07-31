---
title: DeepSORT（Deep Simple Online and Realtime Tracking）
description: 在SORT算法基础上引入外观特征（行人重识别）的多目标跟踪算法。通过级联匹配机制将运动特征（卡尔曼滤波预测+马氏距离）与外观特征（余弦距离）加权融合，利用匈牙利算法实现最优关联，有效缓解长时间遮挡后的身份切换问题。
keywords: DeepSORT, Deep Simple Online and Realtime Tracking, DeepSORT, 可见性, 光学观测, 覆盖, 视星等
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
permalink: /glossary/observation/DeepSORT/
---

# DeepSORT（Deep Simple Online and Realtime Tracking）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

在SORT算法基础上引入外观特征（行人重识别）的多目标跟踪算法。通过级联匹配机制将运动特征（卡尔曼滤波预测+马氏距离）与外观特征（余弦距离）加权融合，利用匈牙利算法实现最优关联，有效缓解长时间遮挡后的身份切换问题。

## 应用价值

该方法在地月空间任务轨道设计与优化中发挥重要作用，可提高计算效率和解的质量。

## 相关概念

- [Apparent Magnitude](/glossary/observation/apparent-magnitude/)

## 参考文献

- Wojke et al., 2017。
- Pujara and Bhamare, 2022。
- 王磊等, 2025。
