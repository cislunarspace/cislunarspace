---
title: 流形插值数据库（Manifold Interpolation Database）
description: 对周期轨道上的离散点分别积分其不变流形而生成的预计算数据表。以周期轨道离散点序号和流形积分时间为双索引，存储对应的六维流形状态量，供数值流形近似方法在优化过程中快速插值查询。
keywords: 流形插值数据库, Manifold Interpolation Database, 轨道动力学, 三体问题, 平动点
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 流形插值数据库（Manifold Interpolation Database）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 流形插值数据库详解 | 术语定义
  description: 对周期轨道上的离散点分别积分其不变流形而生成的预计算数据表。以周期轨道离散点序号和流形积分时间为双索引，存储对应的六维流形状态量，供数值流形近似方法在优化过程中快速插值查询。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 流形插值数据库详解 | 术语定义
  description: 对周期轨道上的离散点分别积分其不变流形而生成的预计算数据表。以周期轨道离散点序号和流形积分时间为双索引，存储对应的六维流形状态量，供数值流形近似方法在优化过程中快速插值查询。
  image: /logo.png
permalink: /glossary/dynamics/manifold-interpolation-database/
---

# 流形插值数据库（Manifold Interpolation Database）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

对周期轨道上的离散点分别积分其不变流形而生成的预计算数据表。以周期轨道离散点序号和流形积分时间为双索引，存储对应的六维流形状态量，供数值流形近似方法在优化过程中快速插值查询。

## 应用价值

在轨道设计阶段，可利用该轨道类型构建候选轨道池，为星座部署和任务轨道选择提供参考。在轨运行时，该轨道特性可用于轨道维持策略设计，降低推进剂消耗。在轨道转移规划中，其稳定流形结构可指导低能量转移走廊的搜索。

## 相关概念

- [运行轨道库（Operational Orbit Library）](/glossary/orbits/operational-orbit-library/)
- 月球自由返回轨道（Lunar Free-Return Orbit, LFO）
- 临界轨道（Critical Orbit）
- [内部频率（Inner Frequencies）](/glossary/dynamics/inner-frequencies/)

## 参考文献

- 平动点双脉冲转移轨道的快速计算方法（潘迅 等，2017）
