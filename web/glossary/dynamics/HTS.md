---
title: 双曲正切平滑法（Hyperbolic Tangent Smoothing, HTS）
description: 用双曲正切函数逼近bang-off-bang型不连续控制输入的平滑技术。在燃料最优控制中，发动机节流参数理论上应在0和1之间不连续跳变，这给数值求解带来困难。HTS通过引入平滑参数rho，用连续的双曲正切函数替代阶跃跳变，使哈密顿边值问题可解。随rho趋近于零，平滑解收敛到原始的不连续最优控制。
keywords: 双曲正切平滑法, Hyperbolic Tangent Smoothing, HTS, HTS, 轨道动力学, 控制理论, 非线性控制, 最优控制
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
permalink: /glossary/dynamics/HTS/
---

# 双曲正切平滑法（Hyperbolic Tangent Smoothing, HTS）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

用双曲正切函数逼近bang-off-bang型不连续控制输入的平滑技术。在燃料最优控制中，发动机节流参数理论上应在0和1之间不连续跳变，这给数值求解带来困难。HTS通过引入平滑参数rho，用连续的双曲正切函数替代阶跃跳变，使哈密顿边值问题可解。随rho趋近于零，平滑解收敛到原始的不连续最优控制。

## 应用价值

将不连续的bang-off-bang控制平滑为连续函数，解决燃料最优控制的数值求解困难，是低推力轨道优化的重要预处理技术。

## 相关概念

- [低推力哈密顿量（Low-Thrust Hamiltonian, H_lt）](/glossary/dynamics/H_lt/)
- [自然哈密顿量（Natural Hamiltonian, H_nat）](/glossary/dynamics/H_nat/)
- [高阶靶点法（High-order Target Point Approach, High-order TPA）](/glossary/dynamics/H-O- TPA/)
- [Hamilton-Jacobi-Bellman方程（Hamilton-Jacobi-Bellman Equation, HJB）](/glossary/dynamics/HJB/)

## 参考文献

- Singh et al., 2021。
