---
title: 蒙特卡洛轨迹射击法（Monte Carlo Trajectory Shooting）
description: 一种全局搜索方法：将参数空间（出发脉冲大小、太阳初始相位、近月点高度等）离散化为网格，逐点数值积分生成大量轨迹段数据库，再通过特征匹配筛选可行解。与直接优化相比，该方法能更全面地探索参数空间，找到被优化算法遗漏的低能转移方案。
keywords: 蒙特卡洛轨迹射击法, Monte Carlo Trajectory Shooting, 动力学, 摄动, 轨道
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 蒙特卡洛轨迹射击法（Monte Carlo Trajectory Shooting）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 蒙特卡洛轨迹射击法详解 | 术语定义
  description: 一种全局搜索方法：将参数空间（出发脉冲大小、太阳初始相位、近月点高度等）离散化为网格，逐点数值积分生成大量轨迹段数据库，再通过特征匹配筛选可行解。与直接优化相比，该方法能更全面地探索参数空间，找到被优化算法遗漏的低能转移方案。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 蒙特卡洛轨迹射击法详解 | 术语定义
  description: 一种全局搜索方法：将参数空间（出发脉冲大小、太阳初始相位、近月点高度等）离散化为网格，逐点数值积分生成大量轨迹段数据库，再通过特征匹配筛选可行解。与直接优化相比，该方法能更全面地探索参数空间，找到被优化算法遗漏的低能转移方案。
  image: /logo.png
permalink: /glossary/dynamics/monte-carlo-trajectory-shooting/
---

# 蒙特卡洛轨迹射击法（Monte Carlo Trajectory Shooting）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种全局搜索方法：将参数空间（出发脉冲大小、太阳初始相位、近月点高度等）离散化为网格，逐点数值积分生成大量轨迹段数据库，再通过特征匹配筛选可行解。与直接优化相比，该方法能更全面地探索参数空间，找到被优化算法遗漏的低能转移方案。

## 应用价值

基于该术语在定义中描述的功能或性质，该术语在地月空间任务设计、分析与控制中具有重要应用价值。在轨道设计阶段，可利用相关动力学特性进行转移轨道优化；在导航与控制中，可用于提高任务执行的精度和可靠性；在系统分析中，有助于深入理解复杂的多体动力学行为，指导任务方案论证和风险评估。

## 相关概念

- [J2不变量轨道（J2-Invariant Orbit）](/glossary/dynamics/j2-invariant-orbit/)
- [内点法优化（Interior Point Optimization）](/glossary/dynamics/interior-point-optimization/)
- [n体动力学（N-Body Dynamics）](/glossary/dynamics/n-body-dynamics/)
- [始末状态约束（Start-End State Constraint）](/glossary/dynamics/start-end-state-constraint/)

## 参考文献

- Peng et al. 2024, AIAA Journal of Spacecraft and Rockets, doi:10.2514/1.A35623
