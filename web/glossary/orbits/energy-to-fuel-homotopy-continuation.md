---
title: 能量-燃料同伦延拓法（Energy-to-Fuel Homotopy Continuation）
description: 解决低推力燃料最优问题的数值策略。先求解较容易收敛的最小能量问题（ε=1），再通过同伦参数ε逐步减小到0，将解光滑过渡到燃料最优问题。同伦参数ε的作用是在目标函数中引入正则化项εu(1-u)，使油门因子从连续取值逐步收缩为bang-bang的0或1。
keywords: 能量-燃料同伦延拓法, Energy-to-Fuel Homotopy Continuation, 周期轨道, 轨道转移, Halo轨道
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 能量-燃料同伦延拓法（Energy-to-Fuel Homotopy Continuation）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 能量-燃料同伦延拓法详解 | 术语定义
  description: 解决低推力燃料最优问题的数值策略。先求解较容易收敛的最小能量问题（ε=1），再通过同伦参数ε逐步减小到0，将解光滑过渡到燃料最优问题。同伦参数ε的作用是在目标函数中引入正则化项εu(1-u)，使油门因子从连续取值逐步收缩为bang-bang的0或1。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 能量-燃料同伦延拓法详解 | 术语定义
  description: 解决低推力燃料最优问题的数值策略。先求解较容易收敛的最小能量问题（ε=1），再通过同伦参数ε逐步减小到0，将解光滑过渡到燃料最优问题。同伦参数ε的作用是在目标函数中引入正则化项εu(1-u)，使油门因子从连续取值逐步收缩为bang-bang的0或1。
  image: /logo.png
permalink: /glossary/orbits/energy-to-fuel-homotopy-continuation/
---

# 能量-燃料同伦延拓法（Energy-to-Fuel Homotopy Continuation）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

解决低推力燃料最优问题的数值策略。先求解较容易收敛的最小能量问题（ε=1），再通过同伦参数ε逐步减小到0，将解光滑过渡到燃料最优问题。同伦参数ε的作用是在目标函数中引入正则化项εu(1-u)，使油门因子从连续取值逐步收缩为bang-bang的0或1。

## 应用价值

在轨道力学分析和任务设计中，该概念为轨道特性评估和方案比选提供理论依据，有助于优化轨道设计参数，提高任务经济性。

## 相关概念

- [运行轨道库（Operational Orbit Library）](/glossary/orbits/operational-orbit-library/)
- [月球自由返回轨道（Lunar Free-Return Orbit, LFO）](/glossary/orbits/lunar-free-return-orbit/)
- [临界轨道（Critical Orbit）](/glossary/orbits/critical-orbit/)
- [准周期远距离逆行轨道（Quasi-Periodic Distant Retrograde Orbit, QPDRO）](/glossary/orbits/quasi-periodic-distant-retrograde-orbit/)

## 参考文献

- Zhang et al. 2015, JGCD, doi:10.2514/1.G001080; Jiang et al. 2012, JGCD
