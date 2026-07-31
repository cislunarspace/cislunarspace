---
title: 双曲正切平滑法（Hyperbolic Tangent Smoothing, HTS）
description: 用双曲正切函数逼近bang-off-bang型不连续控制输入的平滑技术。在燃料最优控制中，发动机节流参数理论上应在0和1之间不连续跳变，这给数值求解带来困难。HTS通过引入平滑参数rho，用连续的双曲正切函数替代阶跃跳变，使哈密顿边值问题可解。随rho趋近于零，平滑解收敛到原始的不连续最优控制。
keywords: HTS, 轨道, 动力学, 控制, 稳定性
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 双曲正切平滑法（Hyperbolic Tangent Smoothing, HTS）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 双曲正切平滑法详解 | 术语定义
  description: 用双曲正切函数逼近bang-off-bang型不连续控制输入的平滑技术。在燃料最优控制中，发动机节流参数理论上应在0和1之间不连续跳变，这给数值求解带来困难。HTS通过引入平滑参数rho，用连续的双曲正切函数替代阶跃跳变，使哈密顿边值问题可解。随rho趋近于零，平滑解收敛到原始的不连续最优控制。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 双曲正切平滑法详解 | 术语定义
  description: 用双曲正切函数逼近bang-off-bang型不连续控制输入的平滑技术。在燃料最优控制中，发动机节流参数理论上应在0和1之间不连续跳变，这给数值求解带来困难。HTS通过引入平滑参数rho，用连续的双曲正切函数替代阶跃跳变，使哈密顿边值问题可解。随rho趋近于零，平滑解收敛到原始的不连续最优控制。
  image: /logo.png
permalink: /glossary/dynamics/hyperbolic-tangent-smoothing-hts/
---

# 双曲正切平滑法（Hyperbolic Tangent Smoothing, HTS）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

用双曲正切函数逼近bang-off-bang型不连续控制输入的平滑技术。在燃料最优控制中，发动机节流参数理论上应在0和1之间不连续跳变，这给数值求解带来困难。HTS通过引入平滑参数rho，用连续的双曲正切函数替代阶跃跳变，使哈密顿边值问题可解。随rho趋近于零，平滑解收敛到原始的不连续最优控制。

## 应用价值

该方法在航天器轨道控制和状态估计中发挥关键作用。通过合理的控制策略设计或滤波算法选择，可以有效抑制扰动影响，提高航天器轨道保持精度和定轨收敛速度。

## 相关概念

- [L4（L4）](/glossary/dynamics/l4/)
- [轨道内分量（In-Plane）](/glossary/dynamics/in-plane/)
- [Hill方程（Hill's Equations）](/glossary/dynamics/hills-equations/)
- [雅可比能量（Jacobi Energy）](/glossary/dynamics/jacobi-energy/)

## 参考文献

- Singh et al., 2021
