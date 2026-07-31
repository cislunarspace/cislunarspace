---
title: 二阶锥约束（Second-Order Cone Constraint, SOC Constraint）
description: 二阶锥规划中的约束形式，用于将速度增量的二范数最小化问题转化为凸优化问题。PC-SCoP通过将目标函数替换为二阶锥约束来避免小速度增量时梯度敏感的问题。
keywords: 二阶锥约束, Second-Order Cone Constraint, SOC Constraint, SOC, 轨道动力学, 控制理论, 非线性控制, 最优控制
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
permalink: /glossary/dynamics/SOC/
---

# 二阶锥约束（Second-Order Cone Constraint, SOC Constraint）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

二阶锥规划中的约束形式，用于将速度增量的二范数最小化问题转化为凸优化问题。PC-SCoP通过将目标函数替换为二阶锥约束来避免小速度增量时梯度敏感的问题。

## 应用价值

二阶锥规划的标准约束形式，将二范数目标转化为凸约束，适合求解小推力机动优化等工程问题。

## 相关概念

- [标准凸优化（Standard Convex Optimization）](/glossary/dynamics/SCvx/)
- [太阳辐射压摄动（Solar Radiation Pressure Perturbation, SRP Perturbation）](/glossary/dynamics/SRP摄动/)
- [NASA标准解体模型（NASA Standard Break-up Model, SBM）](/glossary/dynamics/SBM/)
- [状态依赖黎卡提方程控制（State Dependent Riccati Equation Control, SDRE）](/glossary/dynamics/SDRE/)

## 参考文献

- Shimane et al. 2025。
