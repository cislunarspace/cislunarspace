---
title: 分离速度（Separation Velocity）
description: 航天器解体时碎片相对于解体前航天器质心的飞散速度。在解体模型中，碎片分离速度的对数服从正态分布（对数正态分布），且速度矢量方向在空间各方向上均匀分布。分离速度的概率密度函数是计算碎片云初始状态分布的基础输入。
keywords: 分离速度, Separation Velocity, 轨道动力学, 控制理论, 最优控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 分离速度（Separation Velocity）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 分离速度详解 | 术语定义
  description: 航天器解体时碎片相对于解体前航天器质心的飞散速度。在解体模型中，碎片分离速度的对数服从正态分布（对数正态分布），且速度矢量方向在空间各方向上均匀分布。分离速度的概率密度函数是计算碎片云初始状态分布的基础输入。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 分离速度详解 | 术语定义
  description: 航天器解体时碎片相对于解体前航天器质心的飞散速度。在解体模型中，碎片分离速度的对数服从正态分布（对数正态分布），且速度矢量方向在空间各方向上均匀分布。分离速度的概率密度函数是计算碎片云初始状态分布的基础输入。
  image: /logo.png
permalink: /glossary/dynamics/separation-velocity/
---

# 分离速度（Separation Velocity）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

航天器解体时碎片相对于解体前航天器质心的飞散速度。在解体模型中，碎片分离速度的对数服从正态分布（对数正态分布），且速度矢量方向在空间各方向上均匀分布。分离速度的概率密度函数是计算碎片云初始状态分布的基础输入。

## 应用价值

分离速度在轨道设计和轨迹优化中用于将连续控制问题离散化，通过非线性规划求解最优控制序列。 在地月空间任务中，该方法可应用于转移轨道设计、轨道维持和再入轨迹规划等关键环节。 利用该方法可以降低计算复杂度，提高收敛速度，适合在轨自主制导应用。

## 相关概念

- [控制参数化（Control Parametrization）](/glossary/dynamics/control-parametrization/)
- [推力器调制器（Thruster Modulator）](/glossary/dynamics/thruster-modulator/)
- [粒子群优化器（Particle Swarm Optimizer）](/glossary/dynamics/particle-swarm-optimizer/)
- [脉冲间隔（Impulse Interval）](/glossary/dynamics/impulse-interval/)

## 参考文献

- Debris Cloud Evolution in Cislunar Space Using Eulerian Perspective Method
