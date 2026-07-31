---
title: 二阶锥约束（Second-Order Cone Constraint, SOC Constraint）
description: 二阶锥规划中的约束形式，用于将速度增量的二范数最小化问题转化为凸优化问题。PC-SCoP通过将目标函数替换为二阶锥约束来避免小速度增量时梯度敏感的问题。
keywords: 二阶锥约束, Second-Order Cone Constraint, SOC Constraint, SOC, 轨道动力学, 三体问题, 平动点
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 二阶锥约束（Second-Order Cone Constraint, SOC Constraint）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 二阶锥约束详解 | 术语定义
  description: 二阶锥规划中的约束形式，用于将速度增量的二范数最小化问题转化为凸优化问题。PC-SCoP通过将目标函数替换为二阶锥约束来避免小速度增量时梯度敏感的问题。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 二阶锥约束详解 | 术语定义
  description: 二阶锥规划中的约束形式，用于将速度增量的二范数最小化问题转化为凸优化问题。PC-SCoP通过将目标函数替换为二阶锥约束来避免小速度增量时梯度敏感的问题。
  image: /logo.png
permalink: /glossary/dynamics/second-order-cone-constraint/
---

# 二阶锥约束（Second-Order Cone Constraint, SOC Constraint）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

二阶锥规划中的约束形式，用于将速度增量的二范数最小化问题转化为凸优化问题。PC-SCoP通过将目标函数替换为二阶锥约束来避免小速度增量时梯度敏感的问题。

## 应用价值

在轨迹优化和参数搜索中，该方法可高效求解非线性优化问题。结合全局搜索策略，能够找到多族解并评估解的质量，为任务设计提供决策支持。

## 相关概念

- [地心天体参考框架（Geocentric Celestial Reference Frame）](/glossary/dynamics/geocentric-celestial-reference-frame/)
- [机动重构（Maneuver Reconstruction）](/glossary/dynamics/maneuver-reconstruction/)
- [内部频率（Inner Frequencies）](/glossary/dynamics/inner-frequencies/)
- [功能连接理论（Theory of Functional Connections）](/glossary/dynamics/theory-of-functional-connections/)

## 参考文献

- Shimane et al. 2025
