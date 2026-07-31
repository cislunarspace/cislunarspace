---
title: 模型预测控制（Model Predictive Control, MPC）
description: 一种在线滚动优化的控制策略：在每个采样时刻求解有限时域最优控制问题，取第一个控制量执行，到下一时刻重新求解。能处理状态约束和输入约束，但对低能地月转移这类计算密集型场景，在轨实时反复求解最优控制问题存在挑战。
keywords: 模型预测控制, Model Predictive Control, MPC, MPC, dynamics
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 模型预测控制（Model Predictive Control, MPC）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 模型预测控制详解 | 术语定义
  description: 一种在线滚动优化的控制策略：在每个采样时刻求解有限时域最优控制问题，取第一个控制量执行，到下一时刻重新求解。能处理状态约束和输入约束，但对低能地月转移这类计算密集型场景，在轨实时反复求解最优控制问题存在挑战。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 模型预测控制详解 | 术语定义
  description: 一种在线滚动优化的控制策略：在每个采样时刻求解有限时域最优控制问题，取第一个控制量执行，到下一时刻重新求解。能处理状态约束和输入约束，但对低能地月转移这类计算密集型场景，在轨实时反复求解最优控制问题存在挑战。
  image: /logo.png
permalink: /glossary/dynamics/mpc/
---

# 模型预测控制（Model Predictive Control, MPC）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种在线滚动优化的控制策略：在每个采样时刻求解有限时域最优控制问题，取第一个控制量执行，到下一时刻重新求解。能处理状态约束和输入约束，但对低能地月转移这类计算密集型场景，在轨实时反复求解最优控制问题存在挑战。

## 应用价值

模型预测控制方法在地月空间轨道保持和转移控制中具有重要应用，能够实现航天器的精确导航与轨道控制，支持月球轨道器的长期运行任务。

## 相关概念

- [概率约束模型预测控制（Chance-Constrained Model Predictive Control, CC-MPC）](/glossary/dynamics/cc-mpc/)

## 参考文献

- Wang 等 - 2024 - Low-energy earth–moon transfer autonomous guidance considering high-fidelity orbital dynamics。
- Starek 等 - 2016 - Spacecraft autonomy challenges for next-generation space missions。
