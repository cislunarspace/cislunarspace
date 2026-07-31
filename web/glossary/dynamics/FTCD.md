---
title: 有限时间收敛微分器（Finite-Time-Convergent Differentiator, FTCD）
description: 基于奇异摄动技术设计的信号微分估计器。输入可测信号后，在有限时间内高精度地重构该信号的一阶、二阶导数。常用于无法直接测量速度的场景，由位置信号估计速度。估计精度由摄动参数控制：参数小则收敛快但噪声抑制差，参数大则噪声抑制好但收敛慢，是精度与速度之间的折中设计。
keywords: 有限时间收敛微分器, Finite-Time-Convergent Differentiator, FTCD, FTCD, 轨道动力学, 控制理论, 非线性控制, 最优控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 有限时间收敛微分器（Finite-Time-Convergent Differentiator, FTCD）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 有限时间收敛微分器详解 | 术语定义
  description: 基于奇异摄动技术设计的信号微分估计器。输入可测信号后，在有限时间内高精度地重构该信号的一阶、二阶导数。常用于无法直接测量速度的场景，由位置信号估计速度。估计精度由摄动参数控制：参数小则收敛快但噪声抑制差，参数大则噪声抑制好但收敛慢，是精度与速度之间的折中设计。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 有限时间收敛微分器详解 | 术语定义
  description: 基于奇异摄动技术设计的信号微分估计器。输入可测信号后，在有限时间内高精度地重构该信号的一阶、二阶导数。常用于无法直接测量速度的场景，由位置信号估计速度。估计精度由摄动参数控制：参数小则收敛快但噪声抑制差，参数大则噪声抑制好但收敛慢，是精度与速度之间的折中设计。
  image: /logo.png
permalink: /glossary/dynamics/FTCD/
---

# 有限时间收敛微分器（Finite-Time-Convergent Differentiator, FTCD）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

基于奇异摄动技术设计的信号微分估计器。输入可测信号后，在有限时间内高精度地重构该信号的一阶、二阶导数。常用于无法直接测量速度的场景，由位置信号估计速度。估计精度由摄动参数控制：参数小则收敛快但噪声抑制差，参数大则噪声抑制好但收敛慢，是精度与速度之间的折中设计。

## 应用价值

在无法直接测量速度的着陆段，通过位置信号实时估计速度信息，为制导与控制提供必要的状态反馈。在月球着陆和轨道转移任务中有重要应用。

## 相关概念

- [有限燃烧脉冲（Finite-Burn Pulse）](/glossary/dynamics/FBP/)
- [定时到达制导（Fixed-Time-of-Arrival Guidance）](/glossary/dynamics/FTA/)

## 参考文献

- https://doi.org/10.1177/0954410020940892。
- https://doi.org/10.1109/TAC.2007.904286。
