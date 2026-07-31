---
title: 三脉冲入轨（Three-Impulse Orbit Insertion）
description: 从地球低轨进入DRO的标准入轨方式。第一脉冲在低轨离轨，将航天器送入地月转移段；第二脉冲在近月点施加，改变飞行方向进入月球至DRO转移段；第三脉冲在DRO入轨点施加，完成轨道插入。总脉冲为近月点脉冲与入轨脉冲之和。
keywords: 三脉冲入轨, Three-Impulse Orbit Insertion, 轨道动力学, 控制理论, 最优控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 三脉冲入轨（Three-Impulse Orbit Insertion）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 三脉冲入轨详解 | 术语定义
  description: 从地球低轨进入DRO的标准入轨方式。第一脉冲在低轨离轨，将航天器送入地月转移段；第二脉冲在近月点施加，改变飞行方向进入月球至DRO转移段；第三脉冲在DRO入轨点施加，完成轨道插入。总脉冲为近月点脉冲与入轨脉冲之和。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 三脉冲入轨详解 | 术语定义
  description: 从地球低轨进入DRO的标准入轨方式。第一脉冲在低轨离轨，将航天器送入地月转移段；第二脉冲在近月点施加，改变飞行方向进入月球至DRO转移段；第三脉冲在DRO入轨点施加，完成轨道插入。总脉冲为近月点脉冲与入轨脉冲之和。
  image: /logo.png
permalink: /glossary/dynamics/three-impulse-orbit-insertion/
---

# 三脉冲入轨（Three-Impulse Orbit Insertion）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

从地球低轨进入DRO的标准入轨方式。第一脉冲在低轨离轨，将航天器送入地月转移段；第二脉冲在近月点施加，改变飞行方向进入月球至DRO转移段；第三脉冲在DRO入轨点施加，完成轨道插入。总脉冲为近月点脉冲与入轨脉冲之和。

## 应用价值

三脉冲入轨在轨道设计和轨迹优化中用于将连续控制问题离散化，通过非线性规划求解最优控制序列。 在地月空间任务中，该方法可应用于转移轨道设计、轨道维持和再入轨迹规划等关键环节。 利用该方法可以降低计算复杂度，提高收敛速度，适合在轨自主制导应用。

## 相关概念

- [控制参数化（Control Parametrization）](/glossary/dynamics/control-parametrization/)
- [推力器调制器（Thruster Modulator）](/glossary/dynamics/thruster-modulator/)
- [粒子群优化器（Particle Swarm Optimizer）](/glossary/dynamics/particle-swarm-optimizer/)
- [脉冲间隔（Impulse Interval）](/glossary/dynamics/impulse-interval/)

## 参考文献

- 魏赞等2026北航学报
