---
title: 再入视地平（Receding Horizon）
description: MPC的一种预测时域管理策略，采用固定长度的预测窗口在每个采样时刻同步前移。该方案可通过对预测窗口长度和步长的设置灵活调节精度与计算速度的权衡，但不能直接控制转移飞行时间。
keywords: 再入视地平, Receding Horizon, 动力学, 最优控制, 轨迹优化
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 再入视地平（Receding Horizon）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 再入视地平详解 | 术语定义
  description: MPC的一种预测时域管理策略，采用固定长度的预测窗口在每个采样时刻同步前移。该方案可通过对预测窗口长度和步长的设置灵活调节精度与计算速度的权衡，但不能直接控制转移飞行时间。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 再入视地平详解 | 术语定义
  description: MPC的一种预测时域管理策略，采用固定长度的预测窗口在每个采样时刻同步前移。该方案可通过对预测窗口长度和步长的设置灵活调节精度与计算速度的权衡，但不能直接控制转移飞行时间。
  image: /logo.png
permalink: /glossary/dynamics/receding-horizon/
---

# 再入视地平（Receding Horizon）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

MPC的一种预测时域管理策略，采用固定长度的预测窗口在每个采样时刻同步前移。该方案可通过对预测窗口长度和步长的设置灵活调节精度与计算速度的权衡，但不能直接控制转移飞行时间。

## 应用价值

基于该术语的定义，MPC的一种预测时域管理策略，采用固定长度的预测窗口在每个采样时刻同步前移。该方案可通过对预测窗口长。

## 相关概念

- [三体问题（Three-Body Problem）](/glossary/dynamics/three-body-problem/)
- [最优控制（Optimal Control）](/glossary/dynamics/optimal-control/)
- [轨迹优化（Trajectory Optimization）](/glossary/dynamics/trajectory-optimization/)

## 参考文献

- Capannolo 等 - 2023 - Model predictive control for formation reconfiguration exploiting quasi-periodic tori in the cislunar environment
