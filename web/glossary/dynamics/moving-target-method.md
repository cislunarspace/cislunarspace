---
title: 移动目标法（Moving Target Method）
description: 在三体问题轨迹优化中，将目标状态从周期轨道上的单一定点扩展为可沿轨道滑动的参数化点的方法。具体做法是引入时间参数 τ，在无摄动 CRTBP 方程中前向或后向传播目标状态，使优化器可以搜索周期轨道上任意位置作为终端约束。这样，原本对单点的终端约束 ψ=xf-x(τ) 变为对整个目标轨道的可行域约束，大幅拓宽了优化的搜索空
keywords: 移动目标法, Moving Target Method
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 移动目标法（Moving Target Method）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 移动目标法详解 | 术语定义
  description: 在三体问题轨迹优化中，将目标状态从周期轨道上的单一定点扩展为可沿轨道滑动的参数化点的方法。具体做法是引入时间参数 τ，在无摄动 CRTBP 方程中前向或后向传播目标状态，使优化器可以搜索周期轨道上任意位置作为终端约束。这样，原本对单点的终端约束 ψ=xf-x(τ) 变为对整个目标轨道的可行域约束，大幅拓宽了优化的搜索空
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 移动目标法详解 | 术语定义
  description: 在三体问题轨迹优化中，将目标状态从周期轨道上的单一定点扩展为可沿轨道滑动的参数化点的方法。具体做法是引入时间参数 τ，在无摄动 CRTBP 方程中前向或后向传播目标状态，使优化器可以搜索周期轨道上任意位置作为终端约束。这样，原本对单点的终端约束 ψ=xf-x(τ) 变为对整个目标轨道的可行域约束，大幅拓宽了优化的搜索空
  image: /logo.png
permalink: /glossary/dynamics/moving-target-method/
---

# 移动目标法（Moving Target Method）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

在三体问题轨迹优化中，将目标状态从周期轨道上的单一定点扩展为可沿轨道滑动的参数化点的方法。具体做法是引入时间参数 τ，在无摄动 CRTBP 方程中前向或后向传播目标状态，使优化器可以搜索周期轨道上任意位置作为终端约束。这样，原本对单点的终端约束 ψ=xf-x(τ) 变为对整个目标轨道的可行域约束，大幅拓宽了优化的搜索空间。

## 应用价值

在实际的地月空间任务中，该概念可用于轨道设计与优化，帮助规划航天器的转移路径和机动策略，考虑实际力学环境下的摄动影响，对轨道预报和轨道维持至关重要，通过数值优化方法提升任务设计效率。。

## 相关概念

- [航迹角γ（Flight-Path Angle）](/glossary/dynamics/flight-path-angle/)
- [球谐函数模型（Spherical Harmonic Model）](/glossary/dynamics/spherical-harmonic-model/)
- [星历模型（Ephemeris Model）](/glossary/dynamics/ephemeris-model/)
- [人工平动点（Artificial Libration Point）](/glossary/dynamics/artificial-libration-point/)

## 参考文献

- Lantoine & Russell 2011, JAS; Aziz et al. 2019, JGCD
