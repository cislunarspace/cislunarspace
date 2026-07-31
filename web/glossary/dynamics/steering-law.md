---
title: 转向律（Steering Law）
description: 将期望控制力矩分配到多个反作用轮的控制算法，通过Moore-Penrose伪逆求解在给定约束下最接近期望力矩的各轮角加速度。
keywords: 转向律, Steering Law, 轨道动力学, 三体问题, 平动点
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 转向律（Steering Law）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 转向律详解 | 术语定义
  description: 将期望控制力矩分配到多个反作用轮的控制算法，通过Moore-Penrose伪逆求解在给定约束下最接近期望力矩的各轮角加速度。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 转向律详解 | 术语定义
  description: 将期望控制力矩分配到多个反作用轮的控制算法，通过Moore-Penrose伪逆求解在给定约束下最接近期望力矩的各轮角加速度。
  image: /logo.png
permalink: /glossary/dynamics/steering-law/
---

# 转向律（Steering Law）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

将期望控制力矩分配到多个反作用轮的控制算法，通过Moore-Penrose伪逆求解在给定约束下最接近期望力矩的各轮角加速度。

## 应用价值

在航天器控制系统设计中，该方法可用于设计姿态控制律或制导律，实现对航天器姿态和轨道的精确控制。在实际任务中，基于该方法的控制器能够提高姿态稳定性和轨迹跟踪精度。

## 相关概念

- [月球自由返回轨道（Lunar Free-Return Orbit, LFO）](/glossary/orbits/lunar-free-return-orbit/)
- [约束转化非线性规划（Constraint Conversion to Nonlinear Programming）](/glossary/fundamentals/constraint-conversion-to-nonlinear-programming/)
- [全局搜索（Global Search）](/glossary/fundamentals/global-search/)
- [姿态确定与控制系统（Attitude Determination and Control System）](/glossary/fundamentals/attitude-determination-and-control-system/)

## 参考文献

- Pozzi 等 - 2024 - Optimization, guidance, and control of low-thrust transfers from the lunar gateway to low lunar orbit
