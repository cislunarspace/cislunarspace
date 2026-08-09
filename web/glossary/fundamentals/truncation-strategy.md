---
title: 截断策略（Truncation Strategy）
description: 在交会轨迹数据库生成中，利用发动机末时刻状态和占空比判断轨迹是否已进入「代价平台期」，提前终止延拓以去除无效数据的策略。该策略可在几乎不损失最优性的前提下，将数据库体量缩减至约40%、生成耗时缩短60%以上。
keywords: 截断策略, Truncation Strategy, 基础概念, 推进, 轨道力学, 导航
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 截断策略（Truncation Strategy）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 截断策略（Truncation Strategy）详解 | 术语定义
  description: 在交会轨迹数据库生成中，利用发动机末时刻状态和占空比判断轨迹是否已进入「代价平台期」，提前终止延拓以去除无效数据的策略。该策略可在几乎不损失最优性的前提下，将数据库体量缩减至约40%、生成耗时缩短60%以上。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 截断策略（Truncation Strategy）详解 | 术语定义
  description: 在交会轨迹数据库生成中，利用发动机末时刻状态和占空比判断轨迹是否已进入「代价平台期」，提前终止延拓以去除无效数据的策略。该策略可在几乎不损失最优性的前提下，将数据库体量缩减至约40%、生成耗时缩短60%以上。
  image: /logo.png
permalink: /glossary/fundamentals/truncation-strategy/
---

# 截断策略（Truncation Strategy）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

在交会轨迹数据库生成中，利用发动机末时刻状态和占空比判断轨迹是否已进入「代价平台期」，提前终止延拓以去除无效数据的策略。该策略可在几乎不损失最优性的前提下，将数据库体量缩减至约40%、生成耗时缩短60%以上。

## 应用价值

该类轨道在任务设计中用于实现航天器在不同轨道状态之间的转移，可充分利用天体引力特性和动力学机制，降低转移所需的速度增量。

## 相关概念

- 定时定点着陆（Scheduled and Pinpoint Landing）
- [截面（Surface of Section, SOS）](/glossary/dynamics/poincare-section/)
- 障碍函数（Barrier Function）

## 参考文献

- 地月平动点小推力多目标交会任务设计与分析, 宇航学报, 2025
