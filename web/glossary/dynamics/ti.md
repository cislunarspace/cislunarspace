---
title: 双脉冲机动（Two-Impulse Maneuver, TI）
description: 利用两次脉冲在共线平动点轨道间进行转移的策略，通过状态转移矩阵求解脉冲速度增量。
keywords: 双脉冲机动, Two-Impulse Maneuver, TI, 平动点轨道, 轨道转移, 脉冲机动, 状态转移矩阵
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 双脉冲机动（Two-Impulse Maneuver, TI）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 双脉冲机动详解 | 术语定义
  description: 利用两次脉冲在共线平动点轨道间进行转移的策略，通过状态转移矩阵求解脉冲速度增量。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 双脉冲机动详解 | 术语定义
  description: 利用两次脉冲在共线平动点轨道间进行转移的策略，通过状态转移矩阵求解脉冲速度增量。
  image: /logo.png
permalink: /glossary/dynamics/ti/
---

# 双脉冲机动（Two-Impulse Maneuver, TI）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

利用两次脉冲在共线平动点轨道间进行转移的策略，通过状态转移矩阵求解脉冲速度增量。

## 应用价值

双脉冲机动是地月空间平动点轨道间转移的基本策略。在 Halo 轨道、Lissajous 轨道以及其他共线平动点轨道之间转移时，只需两次脉冲即可完成。求解方法基于状态转移矩阵（STM）线性化相对动力学，在初始脉冲处计算目标轨道状态与当前状态的偏差，通过 STM 传播至目标点，再求解满足终端条件的脉冲速度增量。该方法计算效率高，适合在线制导，但在高精度需求下需迭代求解以补偿线性化误差。

## 相关概念

- [多脉冲机动（Multi-Impulse Maneuver, MI）](/glossary/dynamics/multi-impulse-maneuver/)
- [状态转移矩阵（State Transition Matrix）](/glossary/dynamics/state-transition-matrix/)
- [共线平动点轨道（Collinear Libration Point Orbit）](/glossary/orbits/collinear-libration-point-orbit/）
- [Halo 轨道（Halo Orbit）](/glossary/orbits/halo-orbit/)

## 参考文献

- Cuevas del Valle 等 - 2022
