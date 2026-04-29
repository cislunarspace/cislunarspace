---
title: 共振轨道（Resonance Orbit）
description: 详细解析共振轨道的定义、共振比的含义、在DRO轨道族中的表现
keywords: 共振轨道, Resonance Orbit, 共振比, DRO, 轨道周期, 月球公转, 地月空间
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 共振轨道（Resonance Orbit）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 共振轨道详解 | 轨道周期与天体运动的共振关系
  description: 详细解析共振轨道的定义、共振比的含义、在DRO轨道族中的表现
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 共振轨道详解 | 轨道周期与天体运动的共振关系
  description: 详细解析共振轨道的定义、共振比的含义、在DRO轨道族中的表现
  image: /logo.png
permalink: /glossary/orbits/resonance-orbit/
---

# 共振轨道

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

共振轨道（Resonance Orbit）是指航天器的轨道周期与天体公转周期之间存在简单整数比关系的轨道。当地月空间中航天器的轨道周期 $T$ 与月球公转周期 $T_M$ 满足 $T/T_M \approx n/m$（$n, m$ 为正整数）时，称为 $m:n$ 共振轨道。

## 在 DRO 轨道族中的表现

DRO 轨道族中存在多种共振比的轨道：

| 共振比 | 特征 |
|:---|:---|
| 1:1 | 靠近月球，近似环月圆轨道 |
| 2:1 | 轨道周期约为月球公转周期的一半 |
| 3:1 | 轨道周期约为月球公转周期的三分之一 |
| 高阶共振 | 远离月球，轨道幅值较大 |

DRO 轨道起始时类似于较小的圆形开普勒轨道，与月球构成 1:1 共振关系。延拓过程中非开普勒特性越来越明显，共振比逐渐演变为 2:1 和 3:1。

## 相关概念

- [远距离逆行轨道（DRO）](/glossary/orbits/dro/)
- [延拓方法](/glossary/dynamics/continuation-method/)
- [圆型限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)
- [雅可比积分](/glossary/dynamics/jacobi-integral/)

## 核心要素

### 轨道定义

共振轨道是航天器轨道周期与天体公转周期之间存在简单整数比关系的轨道。当地月空间中航天器轨道周期 T 与月球公转周期 T_M 满足 T/T_M ≈ n/m（n, m 为正整数）时，称为 m:n 共振轨道。

### 动力学特性

- **1:1 共振**：靠近月球，近似环月圆轨道，DRO 起始形态
- **2:1 共振**：轨道周期约为月球公转周期的一半
- **3:1 共振**：轨道周期约为月球公转周期的三分之一
- **高阶共振**：远离月球，轨道幅值较大，非开普勒特性更明显

### 设计方法

- **延拓方法**：从 1:1 共振小振幅 DRO 延拓至高阶共振大振幅 DRO
- **CR3BP 模型**：在圆形限制性三体问题框架下求解共振条件
- **稳定性分析**：评估不同共振比轨道的长期稳定性


## 应用价值

共振轨道是理解 DRO 轨道族演化的关键概念，不同共振比的轨道具有不同的几何特征和稳定性。低阶共振（如 2:1）轨道靠近月球且稳定性强，适合月球探测任务；高阶共振轨道远离月球，为向近地空间的转移提供更大势能优势。


## 参考文献

- 彭超, 温昶煊, 高扬. 地月空间DRO与HEO共振轨道延拓求解及其稳定性分析[J]. 载人航天, 2018.
- 陈昱桔. 面向地月空间态势感知的DRO轨道设计与控制研究[D]. 2024.
