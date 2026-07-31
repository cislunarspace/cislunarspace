---
title: 机动重构（Maneuver Reconstruction）
description: 在机动检测（判断是否发生机动）的基础上，进一步确定机动发生的时间、位置和速度增量大小与方向的过程。机动检测回答「有没有」，机动重构回答「在哪里、什么时候、多大」。本文采用正向-后向数值积分方法，在2DCNN识别的机动窗口内进行重构，对噪声数据仍能实现高精度的机动参数恢复。
keywords: 机动重构, Maneuver Reconstruction, 轨道动力学, 三体问题, 平动点
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 机动重构（Maneuver Reconstruction）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 机动重构详解 | 术语定义
  description: 在机动检测（判断是否发生机动）的基础上，进一步确定机动发生的时间、位置和速度增量大小与方向的过程。机动检测回答「有没有」，机动重构回答「在哪里、什么时候、多大」。本文采用正向-后向数值积分方法，在2DCNN识别的机动窗口内进行重构，对噪声数据仍能实现高精度的机动参数恢复。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 机动重构详解 | 术语定义
  description: 在机动检测（判断是否发生机动）的基础上，进一步确定机动发生的时间、位置和速度增量大小与方向的过程。机动检测回答「有没有」，机动重构回答「在哪里、什么时候、多大」。本文采用正向-后向数值积分方法，在2DCNN识别的机动窗口内进行重构，对噪声数据仍能实现高精度的机动参数恢复。
  image: /logo.png
permalink: /glossary/dynamics/maneuver-reconstruction/
---

# 机动重构（Maneuver Reconstruction）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

在机动检测（判断是否发生机动）的基础上，进一步确定机动发生的时间、位置和速度增量大小与方向的过程。机动检测回答「有没有」，机动重构回答「在哪里、什么时候、多大」。本文采用正向-后向数值积分方法，在2DCNN识别的机动窗口内进行重构，对噪声数据仍能实现高精度的机动参数恢复。

## 应用价值

该术语在地月空间任务的设计、分析和控制中具有重要应用价值，为相关技术领域的研究和工程实践提供理论支撑。

## 相关概念

- [地心天体参考框架（Geocentric Celestial Reference Frame）](/glossary/dynamics/geocentric-celestial-reference-frame/)
- [内部频率（Inner Frequencies）](/glossary/dynamics/inner-frequencies/)
- [功能连接理论（Theory of Functional Connections）](/glossary/dynamics/theory-of-functional-connections/)
- [双脉冲变轨（Two-impulse Maneuver）](/glossary/dynamics/two-impulse-maneuver/)

## 参考文献

- Zhang和Dang - 2025 - Impulsive maneuver detection of cislunar space objects based on convolutional neural network
