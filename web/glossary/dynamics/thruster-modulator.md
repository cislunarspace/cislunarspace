---
title: 推力器调制器（Thruster Modulator）
description: 根据控制器给出的力和力矩需求，计算每个推力器在一个控制周期内的开启时间比例的算法。包含力矩分配和力分配两个子问题，通过线性规划求解，使推进剂消耗最小化。
keywords: 推力器调制器, Thruster Modulator, 轨道动力学, 控制理论, 最优控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 推力器调制器（Thruster Modulator）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 推力器调制器详解 | 术语定义
  description: 根据控制器给出的力和力矩需求，计算每个推力器在一个控制周期内的开启时间比例的算法。包含力矩分配和力分配两个子问题，通过线性规划求解，使推进剂消耗最小化。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 推力器调制器详解 | 术语定义
  description: 根据控制器给出的力和力矩需求，计算每个推力器在一个控制周期内的开启时间比例的算法。包含力矩分配和力分配两个子问题，通过线性规划求解，使推进剂消耗最小化。
  image: /logo.png
permalink: /glossary/dynamics/thruster-modulator/
---

# 推力器调制器（Thruster Modulator）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

根据控制器给出的力和力矩需求，计算每个推力器在一个控制周期内的开启时间比例的算法。包含力矩分配和力分配两个子问题，通过线性规划求解，使推进剂消耗最小化。

## 应用价值

推力器调制器在轨道设计和轨迹优化中用于将连续控制问题离散化，通过非线性规划求解最优控制序列。 在地月空间任务中，该方法可应用于转移轨道设计、轨道维持和再入轨迹规划等关键环节。

## 相关概念

- [控制参数化（Control Parametrization）](/glossary/dynamics/control-parametrization/)
- [不变集（Invariant Set）](/glossary/dynamics/invariant-set/)
- [粒子群优化器（Particle Swarm Optimizer）](/glossary/dynamics/particle-swarm-optimizer/)
- [脉冲间隔（Impulse Interval）](/glossary/dynamics/impulse-interval/)

## 参考文献

- Innocenti et al., 2022
