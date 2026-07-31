---
title: 无迹卡尔曼滤波器（Unscented Kalman Filter）
description: 通过统计采样（西格玛点）近似概率分布来估计非线性系统状态的卡尔曼滤波器变体。不需要系统雅可比矩阵，直接通过非线性方程传播采样点。
keywords: 无迹卡尔曼滤波器, Unscented Kalman Filter, UKF, 轨道动力学, 控制理论, 非线性控制, 最优控制
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
permalink: /glossary/dynamics/UKF/
---

# 无迹卡尔曼滤波器（Unscented Kalman Filter）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

通过统计采样（西格玛点）近似概率分布来估计非线性系统状态的卡尔曼滤波器变体。不需要系统雅可比矩阵，直接通过非线性方程传播采样点。

## 应用价值

利用无损变换处理非线性估计，比扩展卡尔曼滤波器精度更高，适合非线性系统导航。

## 相关概念

- [不确定多圈Lambert问题（Uncertain Multiple-Revolution Lambert Problem）](/glossary/dynamics/UMRLP/)
- [树置信上界（Upper Confidence Bounds Applied to Trees, UCT）](/glossary/dynamics/UCT/)
- [最大加速度（Maximum Acceleration）](/glossary/dynamics/umax/)
- [线性卡尔曼滤波器（Linear Kalman Filter）](/glossary/dynamics/KMF/)

## 参考文献

- Rendezvous and Proximity Operations in Cislunar Space Using Linearized Dynamics for Estimation。
