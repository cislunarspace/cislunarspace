---
title: 状态依赖黎卡提方程控制（State Dependent Riccati Equation Control, SDRE）
description: 一种处理非线性系统的控制方法，在每个时刻对非线性系统进行线性化，然后求解状态依赖的黎卡提方程得到最优控制增益。与MPC相比，SDRE在无限时域公式下计算效率更高，但对动力学模型误差的敏感性更强，需要针对不同历元单独调参。
keywords: 状态依赖黎卡提方程控制, State Dependent Riccati Equation Control, SDRE, SDRE, 轨道动力学, 控制理论, 非线性控制, 最优控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 状态依赖黎卡提方程控制（State Dependent Riccati Equation Control, SDRE）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 状态依赖黎卡提方程控制详解 | 术语定义
  description: 一种处理非线性系统的控制方法，在每个时刻对非线性系统进行线性化，然后求解状态依赖的黎卡提方程得到最优控制增益。与MPC相比，SDRE在无限时域公式下计算效率更高，但对动力学模型误差的敏感性更强，需要针对不同历元单独调参。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 状态依赖黎卡提方程控制详解 | 术语定义
  description: 一种处理非线性系统的控制方法，在每个时刻对非线性系统进行线性化，然后求解状态依赖的黎卡提方程得到最优控制增益。与MPC相比，SDRE在无限时域公式下计算效率更高，但对动力学模型误差的敏感性更强，需要针对不同历元单独调参。
  image: /logo.png
permalink: /glossary/dynamics/SDRE/
---

# 状态依赖黎卡提方程控制（State Dependent Riccati Equation Control, SDRE）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种处理非线性系统的控制方法，在每个时刻对非线性系统进行线性化，然后求解状态依赖的黎卡提方程得到最优控制增益。与MPC相比，SDRE在无限时域公式下计算效率更高，但对动力学模型误差的敏感性更强，需要针对不同历元单独调参。

## 应用价值

在每个时刻对非线性系统线性化并求解黎卡提方程得到最优增益，适合无限时域问题，计算效率高于MPC。

## 相关概念

- [规定性能控制（Prescribed Performance Control, PPC）](/glossary/dynamics/PPC/)
- [终端滑模控制（Terminal Sliding Mode Control, TSMC）](/glossary/dynamics/TSMC/)
- [标准凸优化（Standard Convex Optimization）](/glossary/dynamics/SCvx/)
- [太阳辐射压摄动（Solar Radiation Pressure Perturbation, SRP Perturbation）](/glossary/dynamics/SRP摄动/)

## 参考文献

- Capannolo 等 - 2023 - Model predictive control for formation reconfiguration exploiting quasi-periodic tori in the cislunar environment。
