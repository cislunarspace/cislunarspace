---
title: Window Slicing Method
description: 将长时间观测序列按固定宽度和步长切分为重叠或不重叠的短时间窗口，每个窗口作为一个独立样本送入分类器进行机动检测的数据预处理方法。本文设定切片宽度为20个时间步（时间分辨率900 s），切片步长为10个时间步，保证每个窗口内至多包含一次机动事件。窗口切片法将连续轨迹的机动检测问题转化为局部窗口的二分类问题，适配CNN等固
keywords: 窗口切片法, Window Slicing Method, WS, 观测, 光学, 传感器
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Window Slicing Method
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Window Slicing Method Explained | Term Definition
  description: 将长时间观测序列按固定宽度和步长切分为重叠或不重叠的短时间窗口，每个窗口作为一个独立样本送入分类器进行机动检测的数据预处理方法。本文设定切片宽度为20个时间步（时间分辨率900 s），切片步长为10个时间步，保证每个窗口内至多包含一次机动事件。窗口切片法将连续轨迹的机动检测问题转化为局部窗口的二分类问题，适配CNN等固
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Window Slicing Method Explained | Term Definition
  description: 将长时间观测序列按固定宽度和步长切分为重叠或不重叠的短时间窗口，每个窗口作为一个独立样本送入分类器进行机动检测的数据预处理方法。本文设定切片宽度为20个时间步（时间分辨率900 s），切片步长为10个时间步，保证每个窗口内至多包含一次机动事件。窗口切片法将连续轨迹的机动检测问题转化为局部窗口的二分类问题，适配CNN等固
  image: /logo.png
permalink: /en/glossary/observation/window-slicing-method/
---

# Window Slicing Method

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A data preprocessing method that segments a long observation sequence into overlapping or non-overlapping short time windows using a fixed width and step size, with each window treated as an independent sample fed to a classifier for maneuver detection. This paper uses a slice width of 20 time steps (900 s time resolution) and a slice step of 10 time steps, ensuring at most one maneuver event per window. The window slicing method transforms continuous trajectory maneuver detection into a local window binary classification problem, compatible with models requiring fixed-size inputs like CNN.

## Application Value

窗口切片法技术在地月空间态势感知中发挥重要作用，有助于提升对空间目标的监测能力 在实际应用中，窗口切片法能够支持光学跟踪和目标识别任务 窗口切片法为地月空间安全运营提供了重要的技术保障手段 利用窗口切片法，可以有效提升对空间目标的探测和跟踪性能

## Related Concepts

- [杂散光抑制](/en/glossary/observation/杂散光抑制/)
- [隐线消除](/en/glossary/observation/隐线消除/)
- [Ka多频段射频融合](/en/glossary/observation/ka多频段射频融合/)

## References

- Zhang和Dang - 2025 - Impulsive maneuver detection of cislunar space objects based on convolutional neural network
