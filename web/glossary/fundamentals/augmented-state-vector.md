---
title: 增广状态向量（Augmented State Vector）
description: 将状态、协态和性能指标合并为一个向量 z = [x^T, lambda^T, J]^T，使最优控制问题的动力学变为单一方程组。对该增广系统建立变分方程，即可用 STM 和 STT 同时描述状态、协态和能量代价对初始扰动的灵敏度。可进一步将偏心率等物理参数作为零时间导数的状态变量加入增广向量。
keywords: 增广状态向量, Augmented State Vector, 轨道力学, 数值方法, 基础理论
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 增广状态向量（Augmented State Vector）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 增广状态向量详解 | 术语定义
  description: 将状态、协态和性能指标合并为一个向量 z = [x^T, lambda^T, J]^T，使最优控制问题的动力学变为单一方程组。对该增广系统建立变分方程，即可用 STM 和 STT 同时描述状态、协态和能量代价对初始扰动的灵敏度。可进一步将偏心率等物理参数作为零时间导数的状态变量加入增广向量。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 增广状态向量详解 | 术语定义
  description: 将状态、协态和性能指标合并为一个向量 z = [x^T, lambda^T, J]^T，使最优控制问题的动力学变为单一方程组。对该增广系统建立变分方程，即可用 STM 和 STT 同时描述状态、协态和能量代价对初始扰动的灵敏度。可进一步将偏心率等物理参数作为零时间导数的状态变量加入增广向量。
  image: /logo.png
permalink: /glossary/fundamentals/augmented-state-vector/
---

# 增广状态向量（Augmented State Vector）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

将状态、协态和性能指标合并为一个向量 z = [x^T, lambda^T, J]^T，使最优控制问题的动力学变为单一方程组。对该增广系统建立变分方程，即可用 STM 和 STT 同时描述状态、协态和能量代价对初始扰动的灵敏度。可进一步将偏心率等物理参数作为零时间导数的状态变量加入增广向量。

## 应用价值

增广状态向量是地月空间研究的基础理论和方法。在实际应用中，该概念为轨道设计、导航计算和动力学分析提供了理论支撑，是理解更复杂空间任务问题的前提。

## 相关概念

- 牛顿万有引力定律（Newton's Law of Gravitation）
- 三角级数（Trigonometric Series）
- 发射三要素（Three Launch Elements）
- [伪势（Pseudo-Potential）](/glossary/fundamentals/pseudo-potential/)

## 参考文献

- Kulik et al., 2023, JGCD, doi:10.2514/1.G007311
