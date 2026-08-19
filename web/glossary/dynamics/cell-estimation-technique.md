---
title: 单元估计法（Cell Estimation Technique）
description: 一种避免逐条数值积分流形的高效搜索方法。预先对一族 Halo 轨道的流形管进行离散化，用解析近似关系将位置和速度信息存储在相空间「单元」中。搜索转移轨道时，只需判断进入哪个单元，即可快速估计所需机动量，将计算量从逐条积分降低为查表。
keywords: 单元估计法, Cell Estimation Technique, 轨道动力学, 三体问题, 平动点
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 单元估计法（Cell Estimation Technique）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 单元估计法详解 | 术语定义
  description: 一种避免逐条数值积分流形的高效搜索方法。预先对一族 Halo 轨道的流形管进行离散化，用解析近似关系将位置和速度信息存储在相空间「单元」中。搜索转移轨道时，只需判断进入哪个单元，即可快速估计所需机动量，将计算量从逐条积分降低为查表。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 单元估计法详解 | 术语定义
  description: 一种避免逐条数值积分流形的高效搜索方法。预先对一族 Halo 轨道的流形管进行离散化，用解析近似关系将位置和速度信息存储在相空间「单元」中。搜索转移轨道时，只需判断进入哪个单元，即可快速估计所需机动量，将计算量从逐条积分降低为查表。
  image: /logo.png
permalink: /glossary/dynamics/cell-estimation-technique/
---

# 单元估计法（Cell Estimation Technique）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种避免逐条数值积分流形的高效搜索方法。预先对一族 Halo 轨道的流形管进行离散化，用解析近似关系将位置和速度信息存储在相空间「单元」中。搜索转移轨道时，只需判断进入哪个单元，即可快速估计所需机动量，将计算量从逐条积分降低为查表。

## 应用价值

在单元估计法的分析中，可用于轨道传播和机动设计，帮助工程师评估航天器在不同动力学环境下的运动特性。
该概念为地月空间任务设计提供了理论基础，尤其在平动点轨道设计和低能转移分析中具有重要应用价值。
利用单元估计法进行轨迹优化，可以有效降低任务燃料消耗，提高任务经济效益。
在任务设计中，单元估计法的分析有助于理解航天器在复杂引力场中的行为，指导轨道保持策略的制定。

## 相关概念

- 微分代数（Differential Algebra, DA）
- 羽流冲击（Plume Impingement）
- 动量积分（Momentum Integral, MI）

## 参考文献

- Howell, Beckman, Patterson and Folta, 2004, AAS 04-287; Howell and Kakoi, 2006
