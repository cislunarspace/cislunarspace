---
title: 脉冲间隔（Impulse Interval）
description: 两次驻留维持脉冲之间的时间间隔。脉冲间隔是驻留维持设计的关键参数：间隔越长，年化燃耗通常越低，但位置偏差越大。对于稳定或弱不稳定的轨道（如 DRO、NRHO），可允许较长的脉冲间隔；对于不稳定轨道（如 Halo 轨道），过长的间隔会导致轨道发散。
keywords: 脉冲间隔, Impulse Interval, 轨道动力学, 控制理论, 最优控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 脉冲间隔（Impulse Interval）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 脉冲间隔详解 | 术语定义
  description: 两次驻留维持脉冲之间的时间间隔。脉冲间隔是驻留维持设计的关键参数：间隔越长，年化燃耗通常越低，但位置偏差越大。对于稳定或弱不稳定的轨道（如 DRO、NRHO），可允许较长的脉冲间隔；对于不稳定轨道（如 Halo 轨道），过长的间隔会导致轨道发散。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 脉冲间隔详解 | 术语定义
  description: 两次驻留维持脉冲之间的时间间隔。脉冲间隔是驻留维持设计的关键参数：间隔越长，年化燃耗通常越低，但位置偏差越大。对于稳定或弱不稳定的轨道（如 DRO、NRHO），可允许较长的脉冲间隔；对于不稳定轨道（如 Halo 轨道），过长的间隔会导致轨道发散。
  image: /logo.png
permalink: /glossary/dynamics/impulse-interval/
---

# 脉冲间隔（Impulse Interval）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

两次驻留维持脉冲之间的时间间隔。脉冲间隔是驻留维持设计的关键参数：间隔越长，年化燃耗通常越低，但位置偏差越大。对于稳定或弱不稳定的轨道（如 DRO、NRHO），可允许较长的脉冲间隔；对于不稳定轨道（如 Halo 轨道），过长的间隔会导致轨道发散。

## 应用价值

脉冲间隔在轨道设计和轨迹优化中用于将连续控制问题离散化，通过非线性规划求解最优控制序列。 在地月空间任务中，该方法可应用于转移轨道设计、轨道维持和再入轨迹规划等关键环节。 利用该方法可以降低计算复杂度，提高收敛速度，适合在轨自主制导应用。

## 相关概念

- [控制参数化（Control Parametrization）](/glossary/dynamics/control-parametrization/)
- [推力器调制器（Thruster Modulator）](/glossary/dynamics/thruster-modulator/)
- [粒子群优化器（Particle Swarm Optimizer）](/glossary/dynamics/particle-swarm-optimizer/)
- [脉冲间隔（Impulse Interval）](/glossary/dynamics/impulse-interval/)

## 参考文献

- Zhang et al., 2022
