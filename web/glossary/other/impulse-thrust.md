---
title: 脉冲推力（Impulse Thrust）
description: 详细解析脉冲推力的定义、与连续推力的区别、在轨道保持控制中的应用
keywords: 脉冲推力, Impulse Thrust, 轨道保持, 化学推进, 速度增量, 地月空间
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 脉冲推力（Impulse Thrust）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 脉冲推力详解 | 轨道控制基本推进方式
  description: 详细解析脉冲推力的定义、与连续推力的区别、在轨道保持控制中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 脉冲推力详解 | 轨道控制基本推进方式
  description: 详细解析脉冲推力的定义、与连续推力的区别、在轨道保持控制中的应用
  image: /logo.png
permalink: /glossary/other/impulse-thrust/
---

# 脉冲推力

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

脉冲推力（Impulse Thrust）是一种理想化的推力模型，假设在极短时间内施加速度增量（$\Delta v$），使航天器速度发生瞬时变化而位置不变。脉冲推力主要采取化学推进方式。

## 与连续推力的对比

| 特征 | 脉冲推力 | 连续推力 |
|:---|:---|:---|
| 推力时间 | 极短（瞬时） | 持续 |
| 推进方式 | 化学推进 | 电推进、太阳光压 |
| 控制方式 | 闭环控制 | 开环控制 |
| 燃料消耗 | 较低 | 较高 |
| 轨道确定 | 与轨道确定耦合 | 与轨道确定解耦 |

## 在轨道保持中的应用

脉冲推力轨道保持是一个闭环过程，其燃料消耗通常低于连续推力方法。在 DRO 轨道保持控制中，常用的方法是靶点法，通过在预设的机动节点施加脉冲推力来维持轨道。

## 相关概念

- [轨道保持](/glossary/orbits/orbit-keeping/)
- [靶点法](/glossary/dynamics/targeting-method/)
- [太阳辐射压](/glossary/dynamics/solar-radiation-pressure/)

## 参考文献

- 陈昱桔. 面向地月空间态势感知的DRO轨道设计与控制研究[D]. 2024.
