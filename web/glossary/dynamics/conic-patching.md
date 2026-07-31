---
title: 圆锥曲线拼接（conic patching）
description: 将航天器轨道分为若干段，每段作为圆锥曲线（椭圆、抛物线或双曲线）分别计算，在拼接点进行状态衔接的轨道计算方法。论文在伪状态理论框架下使用该方法，通过可解析计算的圆锥曲线替代数值积分以提高计算效率。
keywords: 圆锥曲线拼接, conic patching
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 圆锥曲线拼接（conic patching）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 圆锥曲线拼接详解 | 术语定义
  description: 将航天器轨道分为若干段，每段作为圆锥曲线（椭圆、抛物线或双曲线）分别计算，在拼接点进行状态衔接的轨道计算方法。论文在伪状态理论框架下使用该方法，通过可解析计算的圆锥曲线替代数值积分以提高计算效率。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 圆锥曲线拼接详解 | 术语定义
  description: 将航天器轨道分为若干段，每段作为圆锥曲线（椭圆、抛物线或双曲线）分别计算，在拼接点进行状态衔接的轨道计算方法。论文在伪状态理论框架下使用该方法，通过可解析计算的圆锥曲线替代数值积分以提高计算效率。
  image: /logo.png
permalink: /glossary/dynamics/conic-patching/
---

# 圆锥曲线拼接（conic patching）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

将航天器轨道分为若干段，每段作为圆锥曲线（椭圆、抛物线或双曲线）分别计算，在拼接点进行状态衔接的轨道计算方法。论文在伪状态理论框架下使用该方法，通过可解析计算的圆锥曲线替代数值积分以提高计算效率。

## 应用价值

在实际的地月空间任务中，该概念可用于轨道设计与优化，帮助规划航天器的转移路径和机动策略。

## 相关概念

- [航迹角γ（Flight-Path Angle）](/glossary/dynamics/flight-path-angle/)
- [球谐函数模型（Spherical Harmonic Model）](/glossary/dynamics/spherical-harmonic-model/)
- [星历模型（Ephemeris Model）](/glossary/dynamics/ephemeris-model/)
- [人工平动点（Artificial Libration Point）](/glossary/dynamics/artificial-libration-point/)

## 参考文献

- 丁百慧 等 - 2023 - 载人月球探测任务转移轨道及月面着陆区评估分析
