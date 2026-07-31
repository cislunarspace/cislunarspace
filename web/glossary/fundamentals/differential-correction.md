---
title: 微分校正法（Differential Correction）
description: 利用Newton-Raphson迭代法求解轨道边值问题的数值方法。从末端约束出发，推导状态关于修正参数的微分方程，逐步修正初始状态，直到约束条件满足精度要求。本文将此方法应用于CR3BP框架下的双脉冲转移轨道设计，并解决了空间CR3BP中多个未知参数的求解问题。
keywords: 微分校正法, Differential Correction, 轨道力学, 坐标系统, 引力
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 微分校正法（Differential Correction）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 微分校正法详解 | 术语定义
  description: 利用Newton-Raphson迭代法求解轨道边值问题的数值方法。从末端约束出发，推导状态关于修正参数的微分方程，逐步修正初始状态，直到约束条件满足精度要求。本文将此方法应用于CR3BP框架下的双脉冲转移轨道设计，并解决了空间CR3BP中多个未知参数的求解问题。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 微分校正法详解 | 术语定义
  description: 利用Newton-Raphson迭代法求解轨道边值问题的数值方法。从末端约束出发，推导状态关于修正参数的微分方程，逐步修正初始状态，直到约束条件满足精度要求。本文将此方法应用于CR3BP框架下的双脉冲转移轨道设计，并解决了空间CR3BP中多个未知参数的求解问题。
  image: /logo.png
permalink: /glossary/fundamentals/differential-correction/
---

# 微分校正法（Differential Correction）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

利用Newton-Raphson迭代法求解轨道边值问题的数值方法。从末端约束出发，推导状态关于修正参数的微分方程，逐步修正初始状态，直到约束条件满足精度要求。本文将此方法应用于CR3BP框架下的双脉冲转移轨道设计，并解决了空间CR3BP中多个未知参数的求解问题。

## 应用价值

在进行轨道转移设计时，该概念有助于评估转移代价和飞行时间，为任务方案比选提供定量依据。结合全局搜索算法，可找到多族解和帕累托前沿，指导轨道设计决策。

## 相关概念

- [运行轨道库（Operational Orbit Library）](/glossary/orbits/operational-orbit-library/)
- [月球自由返回轨道（Lunar Free-Return Orbit, LFO）](/glossary/orbits/lunar-free-return-orbit/)
- [临界轨道（Critical Orbit）](/glossary/orbits/critical-orbit/)
- [准周期远距离逆行轨道（Quasi-Periodic Distant Retrograde Orbit, QPDRO）](/glossary/orbits/quasi-periodic-distant-retrograde-orbit/)

## 参考文献

- 张科 等 - 2015 - 圆型限制性三体问题中双脉冲地月转移轨道设计研究
