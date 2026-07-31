---
title: 反向轨道传播（Backward Propagation）
description: 从NRHO的某个状态点出发，沿时间反方向积分轨道运动方程，反推到达该状态所需的前置机动条件。论文大量使用反向传播来设计EPRM各类型轨迹：从NRHOI状态反向传播，确定PLSB的瞄准条件和各次中间机动的时机与大小。与从地球出发的正向传播相比，反向传播更适合从目标轨道（NRHO）出发探索可行的转移轨迹。
keywords: 反向轨道传播, Backward Propagation, , 轨道动力学, 三体问题, 平动点
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 反向轨道传播（Backward Propagation）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 反向轨道传播详解 | 术语定义
  description: 从NRHO的某个状态点出发，沿时间反方向积分轨道运动方程，反推到达该状态所需的前置机动条件。论文大量使用反向传播来设计EPRM各类型轨迹：从NRHOI状态反向传播，确定PLSB的瞄准条件和各次中间机动的时机与大小。与从地球出发的正向传播相比，反向传播更适合从目标轨道（NRHO）出发探索可行的转移轨迹。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 反向轨道传播详解 | 术语定义
  description: 从NRHO的某个状态点出发，沿时间反方向积分轨道运动方程，反推到达该状态所需的前置机动条件。论文大量使用反向传播来设计EPRM各类型轨迹：从NRHOI状态反向传播，确定PLSB的瞄准条件和各次中间机动的时机与大小。与从地球出发的正向传播相比，反向传播更适合从目标轨道（NRHO）出发探索可行的转移轨迹。
  image: /logo.png
permalink: /glossary/dynamics/backward-propagation/
---

# 反向轨道传播（Backward Propagation）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文来源：[地月空间入门指南](https://cislunarspace.cn)

## 定义

从NRHO的某个状态点出发，沿时间反方向积分轨道运动方程，反推到达该状态所需的前置机动条件。论文大量使用反向传播来设计EPRM各类型轨迹：从NRHOI状态反向传播，确定PLSB的瞄准条件和各次中间机动的时机与大小。与从地球出发的正向传播相比，反向传播更适合从目标轨道（NRHO）出发探索可行的转移轨迹。

## 应用价值

反向轨道传播从终点向前推算初始条件，是边值问题求解的辅助方法。

## 相关概念

- [渐近解（Asymptotic Solution）](/glossary/dynamics/asymptotic-solution/)
- [近月点数据库（Perilune Database）](/glossary/dynamics/perilune-database/)
- [平动点轨道编目（Libration Point Orbit Cataloging）](/glossary/orbits/libration-point-orbit-cataloging/)
- [Floquet模态法（Floquet Modal Method）](/glossary/dynamics/floquet-modal-method/)

## 参考文献

- Kikuchi et al., 2024
