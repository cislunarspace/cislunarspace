---
title: 窗口切片法（Window Slicing Method）
description: 将长时间观测序列按固定宽度和步长切分为重叠或不重叠的短时间窗口，每个窗口作为一个独立样本送入分类器进行机动检测的数据预处理方法。本文设定切片宽度为20个时间步（时间分辨率900 s），切片步长为10个时间步，保证每个窗口内至多包含一次机动事件。窗口切片法将连续轨迹的机动检测问题转化为局部窗口的二分类问题，适配CNN等固
keywords: 窗口切片法, Window Slicing Method, WS, 观测, 光学, 传感器
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
permalink: /glossary/observation/window-slicing-method/
---

# 窗口切片法（Window Slicing Method）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

将长时间观测序列按固定宽度和步长切分为重叠或不重叠的短时间窗口，每个窗口作为一个独立样本送入分类器进行机动检测的数据预处理方法。本文设定切片宽度为20个时间步（时间分辨率900 s），切片步长为10个时间步，保证每个窗口内至多包含一次机动事件。窗口切片法将连续轨迹的机动检测问题转化为局部窗口的二分类问题，适配CNN等固定尺寸输入的模型。

## 应用价值

窗口切片法技术在地月空间态势感知中发挥重要作用，有助于提升对空间目标的监测能力。
在实际应用中，窗口切片法能够支持光学跟踪和目标识别任务。
窗口切片法为地月空间安全运营提供了重要的技术保障手段。
利用窗口切片法，可以有效提升对空间目标的探测和跟踪性能。

## 相关概念

- [杂散光抑制（Stray Light Suppression）](/glossary/observation/stray-light-suppression/)
- [隐线消除（Hidden Line Removal）](/glossary/observation/hidden-line-removal/)
- [S/X/Ka多频段射频融合（S/X/Ka Multi-Band RF Fusion）](/glossary/observation/s-x-ka-multi-band-rf-fusion/)

## 参考文献

- Zhang和Dang - 2025 - Impulsive maneuver detection of cislunar space objects based on convolutional neural network
