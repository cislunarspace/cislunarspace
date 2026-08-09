---
title: 拟线性化方法（Quasilinearization Method）
description: 将非线性两点边值问题转化为一系列迭代求解的线性两点边值问题的数值方法。每次迭代在当前解处对动力学方程做线性化展开，将原问题变为线性方程组，逐步逼近非线性问题的解。收敛性优于传统微分修正法，适合在轨自主制导场景。
keywords: 拟线性化方法, Quasilinearization Method, 轨道动力学, 控制理论, 最优控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 拟线性化方法（Quasilinearization Method）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 拟线性化方法详解 | 术语定义
  description: 将非线性两点边值问题转化为一系列迭代求解的线性两点边值问题的数值方法。每次迭代在当前解处对动力学方程做线性化展开，将原问题变为线性方程组，逐步逼近非线性问题的解。收敛性优于传统微分修正法，适合在轨自主制导场景。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 拟线性化方法详解 | 术语定义
  description: 将非线性两点边值问题转化为一系列迭代求解的线性两点边值问题的数值方法。每次迭代在当前解处对动力学方程做线性化展开，将原问题变为线性方程组，逐步逼近非线性问题的解。收敛性优于传统微分修正法，适合在轨自主制导场景。
  image: /logo.png
permalink: /glossary/dynamics/quasilinearization-method/
---

# 拟线性化方法（Quasilinearization Method）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

将非线性两点边值问题转化为一系列迭代求解的线性两点边值问题的数值方法。每次迭代在当前解处对动力学方程做线性化展开，将原问题变为线性方程组，逐步逼近非线性问题的解。收敛性优于传统微分修正法，适合在轨自主制导场景。

## 应用价值

拟线性化方法在轨道设计和轨迹优化中用于将连续控制问题离散化，通过非线性规划求解最优控制序列。 在地月空间任务中，该方法可应用于转移轨道设计、轨道维持和再入轨迹规划等关键环节。 利用该方法可以降低计算复杂度，提高收敛速度，适合在轨自主制导应用。

## 相关概念

- [控制参数化（Control Parametrization）](/glossary/dynamics/control-parametrization/)
- 推力器调制器（Thruster Modulator）
- 粒子群优化器（Particle Swarm Optimizer）
- [脉冲间隔（Impulse Interval）](/glossary/dynamics/two-impulse-rendezvous/)

## 参考文献

- Wang 等 - 2024 - Low-energy earth–moon transfer autonomous guidance considering high-fidelity orbital dynamics
