---
title: 级联匹配（Cascade Matching）
description: DeepSORT的核心关联机制。按目标「消失时长」分层处理：优先匹配频繁出现（消失时间短）的目标，逐层处理更长时间未见的目标。这使得高置信度轨迹优先获得匹配机会，减少因长时间遮挡导致的误匹配。
keywords: 级联匹配, Cascade Matching, 观测, 测量, 传感器
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 级联匹配（Cascade Matching）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 级联匹配详解 | 术语定义
  description: DeepSORT的核心关联机制。按目标「消失时长」分层处理：优先匹配频繁出现（消失时间短）的目标，逐层处理更长时间未见的目标。这使得高置信度轨迹优先获得匹配机会，减少因长时间遮挡导致的误匹配。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 级联匹配详解 | 术语定义
  description: DeepSORT的核心关联机制。按目标「消失时长」分层处理：优先匹配频繁出现（消失时间短）的目标，逐层处理更长时间未见的目标。这使得高置信度轨迹优先获得匹配机会，减少因长时间遮挡导致的误匹配。
  image: /logo.png
permalink: /glossary/observation/cascade-matching/
---

# 级联匹配（Cascade Matching）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

DeepSORT的核心关联机制。按目标「消失时长」分层处理：优先匹配频繁出现（消失时间短）的目标，逐层处理更长时间未见的目标。这使得高置信度轨迹优先获得匹配机会，减少因长时间遮挡导致的误匹配。

## 应用价值

本术语在地月空间任务中具有重要应用价值。在轨道设计方面，它可以用于优化转移轨迹，降低任务燃料消耗。在姿态控制与动力学分析中，它有助于理解航天器在复杂引力场中的运动特性，为任务规划提供理论支撑。在导航与轨道确定中，基于该术语的方法能够提高轨道预报精度，支撑自主导航算法的发展。

## 相关概念

- [纯角度测量（Angles-only Measurement）](/glossary/observation/angles-only-measurement/)
- [JPL星历表（JPL Ephemeris）](/glossary/observation/jpl-ephemeris/)
- [测量矩阵（Measurement Matrix）](/glossary/observation/measurement-matrix/)

## 参考文献

- Pujara and Bhamare, 2022
- 王磊等, 2025
