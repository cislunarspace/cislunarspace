---
title: 障碍函数（Barrier Function）
description: 在轨迹优化中用于近似硬约束的惩罚函数。当航天器接近障碍物（如月面）时，函数值急剧增大，迫使优化器远离危险区域。本文采用指数型障碍函数 ε·exp(-(r-R_moon)/ε)，当航天器距月面高度趋近零时代价指数增长，从而在不需要显式添加不等式约束的情况下有效防撞。相比直接施加最小高度约束，障碍函数在数值上更光滑，...
keywords: 障碍函数, Barrier Function, 基础概念, 推进, 轨道力学, 导航
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 障碍函数（Barrier Function）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 障碍函数（Barrier Function）详解 | 术语定义
  description: 在轨迹优化中用于近似硬约束的惩罚函数。当航天器接近障碍物（如月面）时，函数值急剧增大，迫使优化器远离危险区域。本文采用指数型障碍函数 ε·exp(-(r-R_moon)/ε)，当航天器距月面高度趋近零时代价指数增长，从而在不需要显式添加不等式约束的情况下有效防撞。相比直接施加最小高度约束，障碍函数在数值上更光滑，...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 障碍函数（Barrier Function）详解 | 术语定义
  description: 在轨迹优化中用于近似硬约束的惩罚函数。当航天器接近障碍物（如月面）时，函数值急剧增大，迫使优化器远离危险区域。本文采用指数型障碍函数 ε·exp(-(r-R_moon)/ε)，当航天器距月面高度趋近零时代价指数增长，从而在不需要显式添加不等式约束的情况下有效防撞。相比直接施加最小高度约束，障碍函数在数值上更光滑，...
  image: /logo.png
permalink: /glossary/fundamentals/barrier-function/
---

# 障碍函数（Barrier Function）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

在轨迹优化中用于近似硬约束的惩罚函数。当航天器接近障碍物（如月面）时，函数值急剧增大，迫使优化器远离危险区域。本文采用指数型障碍函数 ε·exp(-(r-R_moon)/ε)，当航天器距月面高度趋近零时代价指数增长，从而在不需要显式添加不等式约束的情况下有效防撞。相比直接施加最小高度约束，障碍函数在数值上更光滑，有利于梯度优化收敛。

## 应用价值

在低推力轨道优化中，最小时间轨迹作为前置步骤，先确定最短飞行时间，再将其作为最小燃料问题的终端时间约束。这种分层优化策略大幅降低了多目标轨迹设计的计算复杂度。

## 相关概念

- [定时定点着陆（Scheduled and Pinpoint Landing）](/glossary/fundamentals/scheduled-and-pinpoint-landing/)
- [截面（Surface of Section, SOS）](/glossary/fundamentals/surface-of-section-sos/)
- [截断策略（Truncation Strategy）](/glossary/fundamentals/truncation-strategy/)

## 参考文献

- Oue等 - 2025 - Low-Thrust Many-Revolution Transfer between Near Rectilinear Halo Orbit and Low Lunar Orbit Using Hybrid Differential Dynamic Programming
