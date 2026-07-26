---
title: 拼接点（Patch Point）
description: 详细解析拼接点的定义、在二级微分修正法和多点打靶法中的作用、自适应选取策略
keywords: 拼接点, Patch Point, 二级微分修正法, 多点打靶法, 轨道转换, 自适应选取, 地月空间
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 拼接点（Patch Point）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 拼接点详解 | 轨道分段计算关键节点
  description: 详细解析拼接点的定义、在二级微分修正法和多点打靶法中的作用、自适应选取策略
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 拼接点详解 | 轨道分段计算关键节点
  description: 详细解析拼接点的定义、在二级微分修正法和多点打靶法中的作用、自适应选取策略
  image: /logo.png
permalink: /glossary/dynamics/patch-point/
---

# 拼接点

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

拼接点（Patch Point）是在多点打靶法和二级微分修正法中，将长弧段轨道分割为若干短弧段的连接点。在各拼接点处，相邻弧段需要满足位置和速度的连续性约束。

## 在二级微分修正法中的作用

在将 CR3BP 下的轨道转换至星历模型时，二级微分修正法在 CR3BP 轨道上选取若干拼接点：

- **第一层修正**：保持拼接点位置不变，修正各点速度使位置连续
- **第二层修正**：修正拼接点的位置和时间，消除速度不连续性

## 自适应选取策略

传统方法中，拼接点等间隔选取。但不同振幅的 DRO 轨道状态不同，等间隔选取对大部分 DRO 并不适用。自适应策略通过优化算法（如差分进化）寻找每条拟周期 DRO 轨道的最优拼接点位置。

研究表明，拼接点数量为 4 时在计算效率和精度之间取得最佳平衡。

## 核心要素

### 数学定义

拼接点是将长弧段轨道分割为若干短弧段的连接点，在各拼接点处相邻弧段需要满足位置和速度的连续性约束。

### 关键性质

拼接点数量为 4 时在计算效率和精度之间取得最佳平衡。不同振幅的 DRO 轨道状态不同，等间隔选取对大部分 DRO 并不适用。

### 数值方法

自适应策略通过差分进化算法寻找每条拟周期 DRO 轨道的最优拼接点位置，可降低约 30% 的计算成本。

## 应用价值

拼接点是二级微分修正法和多点打靶法中的关键要素，其自适应选取策略显著提高了 CR3BP 至星历模型轨道转换的效率和成功率。

## 相关概念

- [二级微分修正法](/glossary/dynamics/two-level-differential-correction/)
- [打靶法](/glossary/dynamics/shooting-method/)
- [差分进化算法](/glossary/dynamics/differential-evolution/)
- [星历模型](/glossary/dynamics/ephemeris-model/)

## 参考文献

- Howell K C, Pernicka H J. Numerical determination of Lissajous trajectories in the restricted three-body problem[J]. Celestial Mechanics, 1987.
- 陈昱桔. 面向地月空间态势感知的DRO轨道设计与控制研究[D]. 2024.
