---
title: 线性自抗扰控制（Linear Active Disturbance Rejection Control, LADRC）
description: 将自抗扰控制线性化后的控制方法。通过线性扩张状态观测器估计系统总扰动（包括内部未建模动态和外部扰动），并在线补偿，使被控对象表现为积分串联型系统，降低控制器设计对精确模型的依赖。
keywords: 线性自抗扰控制, Linear Active Disturbance Rejection Control, LADRC, LADRC, dynamics
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 线性自抗扰控制（Linear Active Disturbance Rejection Control, LADRC）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 线性自抗扰控制详解 | 术语定义
  description: 将自抗扰控制线性化后的控制方法。通过线性扩张状态观测器估计系统总扰动（包括内部未建模动态和外部扰动），并在线补偿，使被控对象表现为积分串联型系统，降低控制器设计对精确模型的依赖。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 线性自抗扰控制详解 | 术语定义
  description: 将自抗扰控制线性化后的控制方法。通过线性扩张状态观测器估计系统总扰动（包括内部未建模动态和外部扰动），并在线补偿，使被控对象表现为积分串联型系统，降低控制器设计对精确模型的依赖。
  image: /logo.png
permalink: /glossary/dynamics/ladrc/
---

# 线性自抗扰控制（Linear Active Disturbance Rejection Control, LADRC）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

将自抗扰控制线性化后的控制方法。通过线性扩张状态观测器估计系统总扰动（包括内部未建模动态和外部扰动），并在线补偿，使被控对象表现为积分串联型系统，降低控制器设计对精确模型的依赖。

## 应用价值

线性自抗扰控制将未知扰动实时估计并补偿，对模型不确定性具有较强的鲁棒性，适用于航天器姿态控制。

## 相关概念

- [非线性规划（Nonlinear Programming）](/glossary/dynamics/nlp/)
- [零速度曲线（Zero-Velocity Curve）](/glossary/dynamics/zvc/)
- [形状基方法（Shape-Based Method）](/glossary/dynamics/shape-based-method/)

## 参考文献

- 陈上上 等 - 2026 - 载人月面着陆GNC技术及验证。
