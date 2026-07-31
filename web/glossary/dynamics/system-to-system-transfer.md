---
title: 系统间转移（System-to-System Transfer）
description: 在日月地四体问题中，利用两个重叠三体系统（如地月系统与日地系统）的不变流形管交叉，将航天器从一个系统的平动点轨道转移到另一个系统的平动点轨道或月球附近的技术。核心思路是把四体问题拆解为两个三体问题，寻找流形管的公共点实现低成本甚至零燃料转移。
keywords: 系统间转移, System-to-System Transfer, 轨道动力学, 控制理论, 最优控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 系统间转移（System-to-System Transfer）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 系统间转移详解 | 术语定义
  description: 在日月地四体问题中，利用两个重叠三体系统（如地月系统与日地系统）的不变流形管交叉，将航天器从一个系统的平动点轨道转移到另一个系统的平动点轨道或月球附近的技术。核心思路是把四体问题拆解为两个三体问题，寻找流形管的公共点实现低成本甚至零燃料转移。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 系统间转移详解 | 术语定义
  description: 在日月地四体问题中，利用两个重叠三体系统（如地月系统与日地系统）的不变流形管交叉，将航天器从一个系统的平动点轨道转移到另一个系统的平动点轨道或月球附近的技术。核心思路是把四体问题拆解为两个三体问题，寻找流形管的公共点实现低成本甚至零燃料转移。
  image: /logo.png
permalink: /glossary/dynamics/system-to-system-transfer/
---

# 系统间转移（System-to-System Transfer）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

在日月地四体问题中，利用两个重叠三体系统（如地月系统与日地系统）的不变流形管交叉，将航天器从一个系统的平动点轨道转移到另一个系统的平动点轨道或月球附近的技术。核心思路是把四体问题拆解为两个三体问题，寻找流形管的公共点实现低成本甚至零燃料转移。

## 应用价值

系统间转移在轨道设计和轨迹优化中用于将连续控制问题离散化，通过非线性规划求解最优控制序列。 在地月空间任务中，该方法可应用于转移轨道设计、轨道维持和再入轨迹规划等关键环节。 利用该方法可以降低计算复杂度，提高收敛速度，适合在轨自主制导应用。

## 相关概念

- [控制参数化（Control Parametrization）](/glossary/dynamics/control-parametrization/)
- [推力器调制器（Thruster Modulator）](/glossary/dynamics/thruster-modulator/)
- [粒子群优化器（Particle Swarm Optimizer）](/glossary/dynamics/particle-swarm-optimizer/)
- [脉冲间隔（Impulse Interval）](/glossary/dynamics/impulse-interval/)

## 参考文献

- Howell and Kakoi, 2006, Acta Astronautica, Transfers between the Earth–Moon and Sun–Earth systems using manifolds and transit orbits
