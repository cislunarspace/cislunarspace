---
title: 无迹卡尔曼滤波器（Unscented Kalman Filter）
description: 通过统计采样（西格玛点）近似概率分布来估计非线性系统状态的卡尔曼滤波器变体。不需要系统雅可比矩阵，直接通过非线性方程传播采样点。
keywords: 无迹卡尔曼滤波器, Unscented Kalman Filter, UKF, 地月空间, cislunar
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 无迹卡尔曼滤波器（Unscented Kalman Filter）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 无迹卡尔曼滤波器详解 | 术语定义
  description: 通过统计采样（西格玛点）近似概率分布来估计非线性系统状态的卡尔曼滤波器变体。不需要系统雅可比矩阵，直接通过非线性方程传播采样点。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 无迹卡尔曼滤波器详解 | 术语定义
  description: 通过统计采样（西格玛点）近似概率分布来估计非线性系统状态的卡尔曼滤波器变体。不需要系统雅可比矩阵，直接通过非线性方程传播采样点。
  image: /logo.png
permalink: /glossary/dynamics/ukf/
---

# 无迹卡尔曼滤波器（Unscented Kalman Filter）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

通过统计采样（西格玛点）近似概率分布来估计非线性系统状态的卡尔曼滤波器变体。不需要系统雅可比矩阵，直接通过非线性方程传播采样点。

## 应用价值

无迹卡尔曼滤波器在轨道力学和任务规划中具有重要作用，可用于分析航天器的运动特性和优化转移轨道。

## 相关概念

- 利差点轨道（Libration Point Orbit）
- 状态转移矩阵（State Transition Matrix）
- 六自由度（Six-Degree-of-Freedom）
- [高斯伪谱法（Gauss Pseudospectral Method）](/glossary/dynamics/pseudospectral-method/)

## 参考文献

Rendezvous and Proximity Operations in Cislunar Space Using Linearized Dynamics for Estimation
