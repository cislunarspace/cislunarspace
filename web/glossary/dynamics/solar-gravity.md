---
title: 太阳引力（Solar Gravity）
description: 太阳对地月系统内航天器的引力作用，是三角平动点附近最主要的摄动源。在限制性三体问题中加入太阳引力构成限制性四体问题，解析求解困难。在NASA戈达德的Swingby软件中，日地距离取1 AU，太阳引力常数是地球的333000倍。对三角平动点相对运动，忽略太阳引力导致的误差峰值可达约110 km（相对位置误差约1800%）
keywords: 太阳引力, Solar Gravity, 轨道设计, 最优控制, 动力学建模, 脉冲机动
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 太阳引力（Solar Gravity）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 太阳引力详解 | 术语定义
  description: 太阳对地月系统内航天器的引力作用，是三角平动点附近最主要的摄动源。在限制性三体问题中加入太阳引力构成限制性四体问题，解析求解困难。在NASA戈达德的Swingby软件中，日地距离取1 AU，太阳引力常数是地球的333000倍。对三角平动点相对运动，忽略太阳引力导致的误差峰值可达约110 km（相对位置误差约1800%）
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 太阳引力详解 | 术语定义
  description: 太阳对地月系统内航天器的引力作用，是三角平动点附近最主要的摄动源。在限制性三体问题中加入太阳引力构成限制性四体问题，解析求解困难。在NASA戈达德的Swingby软件中，日地距离取1 AU，太阳引力常数是地球的333000倍。对三角平动点相对运动，忽略太阳引力导致的误差峰值可达约110 km（相对位置误差约1800%）
  image: /logo.png
permalink: /glossary/dynamics/solar-gravity/
---

# 太阳引力（Solar Gravity）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

太阳对地月系统内航天器的引力作用，是三角平动点附近最主要的摄动源。在限制性三体问题中加入太阳引力构成限制性四体问题，解析求解困难。在NASA戈达德的Swingby软件中，日地距离取1 AU，太阳引力常数是地球的333000倍。对三角平动点相对运动，忽略太阳引力导致的误差峰值可达约110 km（相对位置误差约1800%），必须包含在模型中。

## 应用价值

用于分析航天器在复杂引力场中的运动特性 用于评估导航系统的精度上限，指导滤波器设计。

## 相关概念

- [对偶控制变换（Adjoint-Control Transformation）](/glossary/dynamics/adjoint-control-transformation/)
- [贝叶斯压缩感知（Bayesian Compressive Sensing）](/glossary/dynamics/bayesian-compressive-sensing/)
- [Lyapunov轨道（Lyapunov Orbit）](/glossary/orbits/lyapunov-orbit/)
- [状态转移矩阵（State Transition Matrix）](/glossary/dynamics/state-transition-matrix/)

## 参考文献

- Catlin and McLaughlin, 2007
