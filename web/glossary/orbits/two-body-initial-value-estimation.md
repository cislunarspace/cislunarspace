---
title: 二体模型初值估计（Two-Body Initial Value Estimation）
description: 将地月转移轨道近似为霍曼转移椭圆（以地心为焦点，近地距等于停泊轨道半径，远地距等于地月距离加近月距），由此解析计算控制变量初始值的方法。在转移时间大于 3 天时精度较高，可为后续高精度模型迭代搜索提供良好初值。
keywords: 二体模型初值估计, Two-Body Initial Value Estimation, 轨道设计, 轨道力学, 平动点, 轨道转移
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 二体模型初值估计（Two-Body Initial Value Estimation）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 二体模型初值估计详解 | 术语定义
  description: 将地月转移轨道近似为霍曼转移椭圆（以地心为焦点，近地距等于停泊轨道半径，远地距等于地月距离加近月距），由此解析计算控制变量初始值的方法。在转移时间大于 3 天时精度较高，可为后续高精度模型迭代搜索提供良好初值。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 二体模型初值估计详解 | 术语定义
  description: 将地月转移轨道近似为霍曼转移椭圆（以地心为焦点，近地距等于停泊轨道半径，远地距等于地月距离加近月距），由此解析计算控制变量初始值的方法。在转移时间大于 3 天时精度较高，可为后续高精度模型迭代搜索提供良好初值。
  image: /logo.png
permalink: /glossary/orbits/two-body-initial-value-estimation/
---

# 二体模型初值估计（Two-Body Initial Value Estimation）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

将地月转移轨道近似为霍曼转移椭圆（以地心为焦点，近地距等于停泊轨道半径，远地距等于地月距离加近月距），由此解析计算控制变量初始值的方法。在转移时间大于 3 天时精度较高，可为后续高精度模型迭代搜索提供良好初值。

## 应用价值

在轨道设计阶段，可用于分析航天器在地月空间中的运动特性，评估不同轨道方案的可行性与效率。
在姿态控制和轨道控制系统中，用于设计反馈律，实现对航天器运动的精确调节。
在地月转移任务中，用于设计低能量或快速转移轨道方案。
用于分析周期轨道的稳定性与转移特性，支撑地月空间站轨道设计方案。

## 相关概念

- [低月球轨道（Low Lunar Orbit, LLO）](/glossary/orbits/low-lunar-orbit-llo/)
- [复合周期轨道（Complex Periodic Orbit）](/glossary/orbits/complex-periodic-orbit/)
- [轨道转移级（Orbital Transfer Stage）](/glossary/other/orbital-transfer-stage/)
- [Halo轨道插入（Halo Orbit Insertion, HOI）](/glossary/orbits/halo-orbit-insertion-hoi/)

## 参考文献

- 彭坤 等 - 2018 - 三体模型下二维平面地月转移轨道设计与特性分析
