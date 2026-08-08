---
title: 中间转移段（Transfer Leg）
description: 将全程低推力转移拆分成多段后，相邻两个拼接点之间的那一段最优转移弧段。每段独立求解两点边值问题，在拼接点处只保证状态连续、允许协态跳变（在滑行弧内）。
keywords: 中间转移段, Transfer Leg, 两点边值问题, 拼接点, 低推力转移, 协态
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 中间转移段（Transfer Leg）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 中间转移段详解 | 术语定义
  description: 将全程低推力转移拆分成多段后，相邻两个拼接点之间的那一段最优转移弧段。每段独立求解两点边值问题，在拼接点处只保证状态连续、允许协态跳变（在滑行弧内）。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 中间转移段详解 | 术语定义
  description: 将全程低推力转移拆分成多段后，相邻两个拼接点之间的那一段最优转移弧段。每段独立求解两点边值问题，在拼接点处只保证状态连续、允许协态跳变（在滑行弧内）。
  image: /logo.png
permalink: /glossary/fundamentals/transfer-leg/
---

# 中间转移段（Transfer Leg）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

将全程低推力转移拆分成多段后，相邻两个拼接点之间的那一段最优转移弧段。每段独立求解两点边值问题，在拼接点处只保证状态连续、允许协态跳变（在滑行弧内）。分段处理使极长飞行时间、极低推力加速度的问题变得可收敛。

## 应用价值

在前往月球或更远目的地的低推力转移任务中，飞行时间可能长达数月甚至数年。中间转移段的分段策略将这个超长问题分解为若干个可独立求解的两点边值问题，每个子问题的收敛性大幅提升。在工程实现中，可以在各拼接点处重新估计轨道、修正控制策略，从而有效抑制长期积分的误差累积。该方法对于 Halo 轨道部署和月球网关补给任务尤为重要，能够处理极低推力加速度（如电推进）下的轨道优化难题。

## 相关概念

- [两点边值问题（Two-Point Boundary Value Problem）](/glossary/dynamics/tpbvp/)
- 推力弧（Thrust Arc）
- [滑行弧（Coast Arc）](/glossary/fundamentals/coast-arc/)
- [Halo 轨道（Halo Orbit）](/glossary/orbits/halo-orbit/)

## 参考文献

- Patrick 等 - 2023 - Hybrid optimization of high-fidelity low-thrust transfers to the lunar gateway
