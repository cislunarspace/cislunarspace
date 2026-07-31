---
title: 参考调控器（Reference Governor）
description: 在级联控制架构中，位于内环控制器之前的外层模块。它根据简化的被控对象模型和期望参考轨迹，预先生成一组满足约束且有界的参考序列，供内环控制器跟踪。在地月空间轨道保持中，多速率规划器充当参考调控器，为MPC提供可行的参考轨迹，从而简化优化问题并保证递推可行性。
keywords: 参考调控器, Reference Governor, 轨道动力学, 多体问题, 平动点
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 参考调控器（Reference Governor）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 参考调控器详解 | 术语定义
  description: 在级联控制架构中，位于内环控制器之前的外层模块。它根据简化的被控对象模型和期望参考轨迹，预先生成一组满足约束且有界的参考序列，供内环控制器跟踪。在地月空间轨道保持中，多速率规划器充当参考调控器，为MPC提供可行的参考轨迹，从而简化优化问题并保证递推可行性。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 参考调控器详解 | 术语定义
  description: 在级联控制架构中，位于内环控制器之前的外层模块。它根据简化的被控对象模型和期望参考轨迹，预先生成一组满足约束且有界的参考序列，供内环控制器跟踪。在地月空间轨道保持中，多速率规划器充当参考调控器，为MPC提供可行的参考轨迹，从而简化优化问题并保证递推可行性。
  image: /logo.png
permalink: /glossary/dynamics/reference-governor/
---

# 参考调控器（Reference Governor）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文来源：学术论文与专业资料整理
>
> 站长地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

在级联控制架构中，位于内环控制器之前的外层模块。它根据简化的被控对象模型和期望参考轨迹，预先生成一组满足约束且有界的参考序列，供内环控制器跟踪。在地月空间轨道保持中，多速率规划器充当参考调控器，为MPC提供可行的参考轨迹，从而简化优化问题并保证递推可行性。

## 应用价值

参考调控器在级联控制架构中位于内环控制器之前，为内环提供满足约束的参考序列。在地月空间轨道保持中，参考调控器可保证 MPC 的递推可行性。

## 相关概念

- [平动点轨道（Libration Point Orbit）](/glossary/dynamics/libration-point-orbit/)
- [不变流形（Invariant Manifold）](/glossary/dynamics/invariant-manifold/)
- [脉冲机动（Impulsive Maneuver）](/glossary/dynamics/impulsive-maneuver/)
- [Halo轨道（Halo Orbit）](/glossary/dynamics/halo-orbit/)

## 参考文献

- Elobaid et al. 2022
