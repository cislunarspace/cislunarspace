---
title: 遮星板观测调度（Starshade Observation Scheduling）
description: 空间望远镜与遮星板协同工作的系外行星直接成像任务中的关键优化问题。遮星板需要在望远镜周围不同位置间转移以遮挡恒星光线。每次转移的燃料代价是外层调度优化的子问题，本文方法通过预计算 STT 快速估算转移代价，使双层优化问题变得可解。
keywords: 遮星板观测调度, Starshade Observation Scheduling, 航天任务, 飞船, 计划
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 遮星板观测调度（Starshade Observation Scheduling）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 遮星板观测调度详解 | 术语定义
  description: 空间望远镜与遮星板协同工作的系外行星直接成像任务中的关键优化问题。遮星板需要在望远镜周围不同位置间转移以遮挡恒星光线。每次转移的燃料代价是外层调度优化的子问题，本文方法通过预计算 STT 快速估算转移代价，使双层优化问题变得可解。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 遮星板观测调度详解 | 术语定义
  description: 空间望远镜与遮星板协同工作的系外行星直接成像任务中的关键优化问题。遮星板需要在望远镜周围不同位置间转移以遮挡恒星光线。每次转移的燃料代价是外层调度优化的子问题，本文方法通过预计算 STT 快速估算转移代价，使双层优化问题变得可解。
  image: /logo.png
permalink: /glossary/programs/starshade-observation-scheduling/
---

# 遮星板观测调度（Starshade Observation Scheduling）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

空间望远镜与遮星板协同工作的系外行星直接成像任务中的关键优化问题。遮星板需要在望远镜周围不同位置间转移以遮挡恒星光线。每次转移的燃料代价是外层调度优化的子问题，本文方法通过预计算 STT 快速估算转移代价，使双层优化问题变得可解。

## 应用价值

该系统代表了当前地月空间开发的主流方向，对未来月球基地建设和任务规划具有重要参考价值。

## 相关概念

- [HTV-X货运飞船（HTV-X Cargo Spacecraft）](/glossary/programs/htv-x-cargo-spacecraft/)
- [模块化航天器（Modular Spacecraft）](/glossary/programs/modular-spacecraft/)
- [消旋（Desaturation/Detumbling）](/glossary/programs/desaturationdetumbling/)
- [地月空间公共汽车站（Cislunar Bus Stop）](/glossary/programs/cislunar-bus-stop/)

## 参考文献

- Kulik et al., 2023, JGCD, doi:10.2514/1.G007311
