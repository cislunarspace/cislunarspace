---
title: 二级微分修正法（Two-Level Differential Correction）
description: 详细解析二级微分修正法的定义、两层修正原理、在星历模型轨道设计中的应用
keywords: 二级微分修正法, Two-Level Differential Correction, 位置修正, 速度修正, 拼接点, 星历模型, 轨道转换
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 二级微分修正法
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 二级微分修正法详解 | CR3BP至星历模型轨道转换工具
  description: 详细解析二级微分修正法的定义、两层修正原理、在星历模型轨道设计中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 二级微分修正法详解 | CR3BP至星历模型轨道转换工具
  description: 详细解析二级微分修正法的定义、两层修正原理、在星历模型轨道设计中的应用
  image: /logo.png
permalink: /glossary/dynamics/two-level-differential-correction/
---

# 二级微分修正法

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

二级微分修正法（Two-Level Differential Correction）是将低保真度模型（如 CR3BP）下的轨道转换至高保真度模型（如星历模型）的数值方法。该方法分为两层修正：第一层为"位置修正"，第二层为"速度修正"。

## 两层修正原理

### 第一层：位置修正

在 CR3BP 的 DRO 轨道上选取若干拼接点（Patch Point），将各拼接点的位置作为约束，通过修正各拼接点的速度使轨道在星历模型下满足位置连续性条件。

### 第二层：速度修正

在第一层修正的基础上，进一步修正各拼接点的位置和时间，消除速度的不连续性。利用线性变分方程建立拼接点状态变化量与速度不连续量的关系，通过最小范数解求得修正量。

## 拼接点的选取

传统方法中，拼接点等间隔选取。但不同振幅的 DRO 轨道状态不同，等间隔选取对大部分 DRO 并不适用。自适应二级微分修正法通过优化算法（如差分进化）寻找每条拟周期 DRO 轨道的最优拼接点位置，可降低约 30% 的计算成本。

## 核心要素

### 数学定义
二级微分修正法分为两层：第一层修正保持拼接点位置不变，修正各点速度使位置连续；第二层修正拼接点的位置和时间，消除速度不连续性。

### 关键性质
第一层利用位置约束建立速度修正方程，第二层利用线性变分方程建立拼接点状态变化量与速度不连续量的关系，通过最小范数解求得修正量。

### 数值方法
自适应二级微分修正法通过差分进化算法寻找最优拼接点位置，可降低约 30% 的计算成本。拼接点数量通常取 4。

## 应用价值

二级微分修正法是将 CR3BP 下的轨道转换至高保真度星历模型的核心工具，自适应拼接点选取策略显著提高了轨道转换的效率和精度。


## 相关概念

- [微分修正法](/glossary/dynamics/differential-correction/)
- [拼接点](/glossary/dynamics/patch-point/)
- [星历模型](/glossary/dynamics/ephemeris-model/)
- [拟周期轨道](/glossary/orbits/quasi-periodic-orbit/)
- [差分进化算法](/glossary/dynamics/differential-evolution/)

## 参考文献

- Marchand B G, Howell K C, Wilson R S. Improved corrections process for constrained trajectory design in the n-body problem[J]. Journal of Spacecraft and Rockets, 2007.
- 陈昱桔. 面向地月空间态势感知的DRO轨道设计与控制研究[D]. 2024.
