---
title: 非积型设计求积（Non-Product Designed Quadrature）
description: 一种最小化求积点数量的数值积分方法。不同于传统张量积求积随维度指数增长，它通过高斯-牛顿优化直接调整采样点位置和权重，使求积点集精确匹配混合分布的各阶矩条件。在可达域计算中，用最少的采样点实现对均匀分布（机动时间）和球面均匀分布（机动速度）混合密度的高维积分，兼顾客观精度和计算效率。
keywords: 非积型设计求积, Non-Product Designed Quadrature, DQ, 轨道动力学, 三体问题, 平动点
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 非积型设计求积（Non-Product Designed Quadrature）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 非积型设计求积详解 | 术语定义
  description: 一种最小化求积点数量的数值积分方法。不同于传统张量积求积随维度指数增长，它通过高斯-牛顿优化直接调整采样点位置和权重，使求积点集精确匹配混合分布的各阶矩条件。在可达域计算中，用最少的采样点实现对均匀分布（机动时间）和球面均匀分布（机动速度）混合密度的高维积分，兼顾客观精度和计算效率。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 非积型设计求积详解 | 术语定义
  description: 一种最小化求积点数量的数值积分方法。不同于传统张量积求积随维度指数增长，它通过高斯-牛顿优化直接调整采样点位置和权重，使求积点集精确匹配混合分布的各阶矩条件。在可达域计算中，用最少的采样点实现对均匀分布（机动时间）和球面均匀分布（机动速度）混合密度的高维积分，兼顾客观精度和计算效率。
  image: /logo.png
permalink: /glossary/dynamics/non-product-designed-quadrature/
---

# 非积型设计求积（Non-Product Designed Quadrature）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 术语来源：Li 等 - 2025 - Efficient reachable domain search-tracking for cislunar non-cooperative targets via designed quadrature
>
> 本文地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种最小化求积点数量的数值积分方法。不同于传统张量积求积随维度指数增长，它通过高斯-牛顿优化直接调整采样点位置和权重，使求积点集精确匹配混合分布的各阶矩条件。在可达域计算中，用最少的采样点实现对均匀分布（机动时间）和球面均匀分布（机动速度）混合密度的高维积分，兼顾客观精度和计算效率。

## 应用价值

非积型设计求积在地月空间动力学分析和任务轨道设计中具有应用价值。正确理解和应用非积型设计求积有助于优化轨道设计、控制策略和任务规划，是地月空间任务工程师需要掌握的基础知识。

## 相关概念

- [多段轨迹设计（Multiple Segment Trajectory Design）](/glossary/dynamics/multiple-segment-trajectory-design/)
- [零速度面（Zero-Velocity Surface）](/glossary/dynamics/zero-velocity-surface/)
- [零向量（Null Vector）](/glossary/dynamics/null-vector/)
- [圆形限制性三体问题（Circular Restricted Three-Body Problem）](/glossary/dynamics/circular-restricted-three-body-problem/)

## 参考文献

- Li 等 - 2025 - Efficient reachable domain search-tracking for cislunar non-cooperative targets via designed quadrature
