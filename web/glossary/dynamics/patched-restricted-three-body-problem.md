---
title: 拼接限制性三体问题（Patched Restricted Three-Body Problem）
description: 一种利用两个共主天体CRTBP叠加来近似四体系统的方法。典型做法是将日地CRTBP（描述地球逃逸）和地月CRTBP（描述月球附近运动）在选定的Poincaré截面上拼接，通过不变流形的交集寻找低能转移轨道。计算成本远低于完整四体模型，是地月低能转移设计的经典框架。
keywords: 拼接限制性三体问题, Patched Restricted Three-Body Problem, 轨道动力学, 控制理论, 最优控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 拼接限制性三体问题（Patched Restricted Three-Body Problem）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 拼接限制性三体问题详解 | 术语定义
  description: 一种利用两个共主天体CRTBP叠加来近似四体系统的方法。典型做法是将日地CRTBP（描述地球逃逸）和地月CRTBP（描述月球附近运动）在选定的Poincaré截面上拼接，通过不变流形的交集寻找低能转移轨道。计算成本远低于完整四体模型，是地月低能转移设计的经典框架。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 拼接限制性三体问题详解 | 术语定义
  description: 一种利用两个共主天体CRTBP叠加来近似四体系统的方法。典型做法是将日地CRTBP（描述地球逃逸）和地月CRTBP（描述月球附近运动）在选定的Poincaré截面上拼接，通过不变流形的交集寻找低能转移轨道。计算成本远低于完整四体模型，是地月低能转移设计的经典框架。
  image: /logo.png
permalink: /glossary/dynamics/patched-restricted-three-body-problem/
---

# 拼接限制性三体问题（Patched Restricted Three-Body Problem）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种利用两个共主天体CRTBP叠加来近似四体系统的方法。典型做法是将日地CRTBP（描述地球逃逸）和地月CRTBP（描述月球附近运动）在选定的Poincaré截面上拼接，通过不变流形的交集寻找低能转移轨道。计算成本远低于完整四体模型，是地月低能转移设计的经典框架。

## 应用价值

拼接限制性三体问题在轨道设计和轨迹优化中用于将连续控制问题离散化，通过非线性规划求解最优控制序列。 在地月空间任务中，该方法可应用于转移轨道设计、轨道维持和再入轨迹规划等关键环节。 利用该方法可以降低计算复杂度，提高收敛速度，适合在轨自主制导应用。

## 相关概念

- [控制参数化（Control Parametrization）](/glossary/dynamics/control-parametrization/)
- 推力器调制器（Thruster Modulator）
- 粒子群优化器（Particle Swarm Optimizer）
- [脉冲间隔（Impulse Interval）](/glossary/dynamics/impulse-interval/)

## 参考文献

- Zanzottera et al. 2011, §3
