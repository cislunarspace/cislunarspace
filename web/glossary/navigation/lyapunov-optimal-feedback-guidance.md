---
title: Lyapunov最优反馈制导（Lyapunov Optimal Feedback Guidance）
description: 一种小推力制导方法，以轨道根数（半长轴、偏心率）的误差构建Lyapunov函数，沿最大梯度方向求解控制律，使轨道逐步趋近目标值。本文用此方法设计GEO离轨和月球捕获的小推力段。
keywords: Lyapunov最优反馈制导, Lyapunov Optimal Feedback Guidance, 地月空间导航, PNT服务, 轨道确定
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Lyapunov最优反馈制导（Lyapunov Optimal Feedback Guidance）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: Lyapunov最优反馈制导详解 | 术语定义
  description: 一种小推力制导方法，以轨道根数（半长轴、偏心率）的误差构建Lyapunov函数，沿最大梯度方向求解控制律，使轨道逐步趋近目标值。本文用此方法设计GEO离轨和月球捕获的小推力段。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Lyapunov最优反馈制导详解 | 术语定义
  description: 一种小推力制导方法，以轨道根数（半长轴、偏心率）的误差构建Lyapunov函数，沿最大梯度方向求解控制律，使轨道逐步趋近目标值。本文用此方法设计GEO离轨和月球捕获的小推力段。
  image: /logo.png
permalink: /glossary/navigation/lyapunov-optimal-feedback-guidance/
---

# Lyapunov最优反馈制导（Lyapunov Optimal Feedback Guidance）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 术语来源：Liang et al. 2016
>
> 本文地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种小推力制导方法，以轨道根数（半长轴、偏心率）的误差构建Lyapunov函数，沿最大梯度方向求解控制律，使轨道逐步趋近目标值。本文用此方法设计GEO离轨和月球捕获的小推力段。

## 应用价值

Lyapunov最优反馈制导在地月空间任务中用于确定探测器位置、速度或姿态信息。基于Lyapunov最优反馈制导的导航滤波算法需要结合轨道动力学模型进行处理，在地月转移和平动点轨道阶段具有重要的应用价值。

## 相关概念

- [地月空间导航系统（Cislunar Space Navigation System）](/glossary/navigation/cislunar-space-navigation-system/)
- [距离可观测性（Range Observability）](/glossary/navigation/range-observability/)
- [六分仪（Sextant）](/glossary/navigation/sextant/)
- [太阳敏感器（Sun Sensor）](/glossary/navigation/sun-sensor/)

## 参考文献

- Liang et al. 2016
