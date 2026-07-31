---
title: 窗口切片法（Window Slicing Method）
description: 将长时间观测序列按固定宽度和步长切分为重叠或不重叠的短时间窗口，每个窗口作为一个独立样本送入分类器进行机动检测的数据预处理方法。本文设定切片宽度为20个时间步（时间分辨率900 s），切片步长为10个时间步，保证每个窗口内至多包含一次机动事件。窗口切片法将连续轨迹的机动检测问题转化为局部窗口的二分类问题，适配CNN等固
keywords: 窗口切片法, Window Slicing Method, WS, observation
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 窗口切片法（Window Slicing Method）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 窗口切片法详解 | 术语定义
  description: 将长时间观测序列按固定宽度和步长切分为重叠或不重叠的短时间窗口，每个窗口作为一个独立样本送入分类器进行机动检测的数据预处理方法。本文设定切片宽度为20个时间步（时间分辨率900 s），切片步长为10个时间步，保证每个窗口内至多包含一次机动事件。窗口切片法将连续轨迹的机动检测问题转化为局部窗口的二分类问题，适配CNN等固
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 窗口切片法详解 | 术语定义
  description: 将长时间观测序列按固定宽度和步长切分为重叠或不重叠的短时间窗口，每个窗口作为一个独立样本送入分类器进行机动检测的数据预处理方法。本文设定切片宽度为20个时间步（时间分辨率900 s），切片步长为10个时间步，保证每个窗口内至多包含一次机动事件。窗口切片法将连续轨迹的机动检测问题转化为局部窗口的二分类问题，适配CNN等固
  image: /logo.png
permalink: /glossary/observation/ws/
---

# 窗口切片法（Window Slicing Method）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

将长时间观测序列按固定宽度和步长切分为重叠或不重叠的短时间窗口，每个窗口作为一个独立样本送入分类器进行机动检测的数据预处理方法。本文设定切片宽度为20个时间步（时间分辨率900 s），切片步长为10个时间步，保证每个窗口内至多包含一次机动事件。窗口切片法将连续轨迹的机动检测问题转化为局部窗口的二分类问题，适配CNN等固定尺寸输入的模型。

## 应用价值

该概念在地月空间研究和任务设计中具有重要应用价值，涉及轨道设计、导航控制或任务规划等多个方面。

## 相关概念

- [空间监视网络（Space Surveillance Network）](/glossary/observation/ssn/)
- [天基空间监视系统（Space-Based Space Surveillance）](/glossary/observation/sbss/)
- [欧盟空间监视与跟踪系统（EU Space Surveillance and Tracking）](/glossary/observation/eu sst/)

## 参考文献

- Zhang和Dang - 2025 - Impulsive maneuver detection of cislunar space objects based on convolutional neural network。
