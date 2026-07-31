---
title: 模型预测控制（Model Predictive Control, MPC）
description: 一种在线滚动优化的控制策略：在每个采样时刻求解有限时域最优控制问题，取第一个控制量执行，到下一时刻重新求解。能处理状态约束和输入约束，但对低能地月转移这类计算密集型场景，在轨实时反复求解最优控制问题存在挑战。
keywords: 模型预测控制, Model Predictive Control, MPC, MPC, 轨道力学, 动力学建模, 数值积分
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
permalink: /glossary/dynamics/model-predictive-control-mpc/
---

# 模型预测控制（Model Predictive Control, MPC）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种在线滚动优化的控制策略：在每个采样时刻求解有限时域最优控制问题，取第一个控制量执行，到下一时刻重新求解。能处理状态约束和输入约束，但对低能地月转移这类计算密集型场景，在轨实时反复求解最优控制问题存在挑战。

## 应用价值

控制策略的设计直接影响航天器的任务表现和寿命，合理的控制方法可以在保证任务完成的同时最小化推进剂消耗。

## 相关概念

- [李雅普诺夫稳定性（Lyapunov Stability）](/glossary/dynamics/lyapunov-stability/)
- [Adams-Cowell积分器（Adams-Cowell Integrator）](/glossary/dynamics/adams-cowell-integrator/)
- [汉森系数（Hansen Coefficients）](/glossary/dynamics/hansen-coefficients/)
- [控制曲线（Control Curve, U_i）](/glossary/dynamics/control-curve-ui/)

## 参考文献

- Wang 等 - 2024 - Low-energy earth–moon transfer autonomous guidance considering high-fidelity orbital dynamics
- Starek 等 - 2016 - Spacecraft autonomy challenges for next-generation space missions
