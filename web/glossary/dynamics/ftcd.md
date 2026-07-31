---
title: 有限时间收敛微分器（Finite-Time-Convergent Differentiator, FTCD）
description: 基于奇异摄动技术设计的信号微分估计器。输入可测信号后，在有限时间内高精度地重构该信号的一阶、二阶导数。常用于无法直接测量速度的场景，由位置信号估计速度。估计精度由摄动参数控制：参数小则收敛快但噪声抑制差，参数大则噪声抑制好但收敛慢，是精度与速度之间的折中设计。
keywords: 有限时间收敛微分器, Finite-Time-Convergent Differentiator, FTCD, FTCD, dynamics
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
permalink: /glossary/dynamics/ftcd/
---

# 有限时间收敛微分器（Finite-Time-Convergent Differentiator, FTCD）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

基于奇异摄动技术设计的信号微分估计器。输入可测信号后，在有限时间内高精度地重构该信号的一阶、二阶导数。常用于无法直接测量速度的场景，由位置信号估计速度。估计精度由摄动参数控制：参数小则收敛快但噪声抑制差，参数大则噪声抑制好但收敛慢，是精度与速度之间的折中设计。

## 应用价值

该术语在地月空间任务规划与执行中具有重要应用价值。

## 相关概念

- [隐藏基因遗传算法（Hidden-Genes Genetic Algorithm, HGGA）](/glossary/dynamics/hgga/)
- [变长设计空间（Variable-Size Design Space, VSDS）](/glossary/dynamics/vsds/)
- [驻留维持（Station-Keeping）](/glossary/dynamics/sk/)
- [目标点法（Target Point Method）](/glossary/dynamics/tp/)

## 参考文献

- https://doi.org/10.1177/0954410020940892
- https://doi.org/10.1109/TAC.2007.904286
