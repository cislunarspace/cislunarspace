---
title: 脉宽调制（Pulse Width Modulation, PWM）
description: 通过调节脉冲信号的占空比来控制推力器平均推力的技术。推力器在每个周期内开启一段时间后关闭，开启时间与周期之比决定平均推力大小。
keywords: 脉宽调制, Pulse Width Modulation, PWM, PWM, 轨道动力学, 控制理论, 最优控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 脉宽调制（Pulse Width Modulation, PWM）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 脉宽调制详解 | 术语定义
  description: 通过调节脉冲信号的占空比来控制推力器平均推力的技术。推力器在每个周期内开启一段时间后关闭，开启时间与周期之比决定平均推力大小。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 脉宽调制详解 | 术语定义
  description: 通过调节脉冲信号的占空比来控制推力器平均推力的技术。推力器在每个周期内开启一段时间后关闭，开启时间与周期之比决定平均推力大小。
  image: /logo.png
permalink: /glossary/dynamics/pulse-width-modulation-pwm/
---

# 脉宽调制（Pulse Width Modulation, PWM）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

通过调节脉冲信号的占空比来控制推力器平均推力的技术。推力器在每个周期内开启一段时间后关闭，开启时间与周期之比决定平均推力大小。

## 应用价值

脉宽调制在轨道设计和轨迹优化中用于将连续控制问题离散化，通过非线性规划求解最优控制序列。 在地月空间任务中，该方法可应用于转移轨道设计、轨道维持和再入轨迹规划等关键环节。

## 相关概念

- [控制参数化（Control Parametrization）](/glossary/dynamics/control-parametrization/)
- [推力器调制器（Thruster Modulator）](/glossary/dynamics/thruster-modulator/)
- [粒子群优化器（Particle Swarm Optimizer）](/glossary/dynamics/particle-swarm-optimizer/)
- [脉冲间隔（Impulse Interval）](/glossary/dynamics/impulse-interval/)

## 参考文献

- Bucchioni和Innocenti - 2021 - Rendezvous in Cis-Lunar Space near Rectilinear Halo Orbit Dynamics and Control Issues
