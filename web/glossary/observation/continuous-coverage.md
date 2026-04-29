---
title: 连续覆盖率（Continuous Coverage, CP）
description: 详细解析连续覆盖率的定义、计算方法、在态势感知任务观测性能评估中的应用
keywords: 连续覆盖率, Continuous Coverage, CP, 观测性能, 态势感知, DRO, 轨道覆盖, 地月空间
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 连续覆盖率（Continuous Coverage）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 连续覆盖率详解 | 态势感知任务观测性能指标
  description: 详细解析连续覆盖率的定义、计算方法、在态势感知任务观测性能评估中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 连续覆盖率详解 | 态势感知任务观测性能指标
  description: 详细解析连续覆盖率的定义、计算方法、在态势感知任务观测性能评估中的应用
  image: /logo.png
permalink: /glossary/observation/continuous-coverage/
---

# 连续覆盖率

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

连续覆盖率（Continuous Coverage，CP）是衡量一颗卫星对目标轨道覆盖性能的指标，表示覆盖弧段长度与轨道总长度的比例。

## 计算方法

$$CP = 1 - S_{ave}$$

其中 $S_{ave}$ 为一个轨道周期内，月球影响观测的平均遮挡率：

$$S_{ave} = \frac{\sum_{i=1,2...} \frac{L_{s,i}}{L}}{n}$$

- $L_{s,i}$：观测点观测目标轨道时被遮挡的弧段长度
- $L$：目标轨道一个周期的总长度
- $n$：离散观测点的总数量

遮挡角度 $\theta$ 的计算：

$$\theta = 2 \cdot \arcsin\left(\frac{r_{moon}}{l_1}\right)$$

其中 $l_1$ 为观测卫星到月心的距离，$r_{moon}$ 为月球半径。

## 仿真结果

对面向态势感知任务的 DRO 轨道，观测 DRO-M 时：
- CR3BP 下：最大覆盖率可达 99.1%，最小覆盖率为 98.1%
- 星历模型下：最大覆盖率可达 99.1%，最小覆盖率为 98.1%

观测南北族 NRHO 时：
- 最大覆盖率可达 100%，最小覆盖率为 98.5%

## 相关概念

- [远距离逆行轨道（DRO）](/glossary/orbits/dro/)
- [近直线晕轨道（NRHO）](/glossary/orbits/nrho/)
- [地月空间态势感知](/glossary/doctrine/cislunar-space-situational-awareness/)

## 参考文献

- 陈昱桔. 面向地月空间态势感知的DRO轨道设计与控制研究[D]. 2024.
