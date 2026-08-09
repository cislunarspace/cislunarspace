---
title: 双曲正切平滑法（Hyperbolic Tangent Smoothing, HTS）
description: 用双曲正切函数逼近bang-off-bang型不连续控制输入的平滑技术。在燃料最优控制中，发动机节流参数理论上应在0和1之间不连续跳变，这给数值求解带来困难。HTS通过引入平滑参数rho，用连续的双曲正切函数替代阶跃跳变，使哈密顿边值问题可解。随rho趋近于零，平滑解收敛到原始的不连续最优控制。
keywords: 双曲正切平滑法, Hyperbolic Tangent Smoothing, HTS, HTS, dynamics
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
permalink: /glossary/dynamics/hts/
---

# 双曲正切平滑法（Hyperbolic Tangent Smoothing, HTS）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

用双曲正切函数逼近bang-off-bang型不连续控制输入的平滑技术。在燃料最优控制中，发动机节流参数理论上应在0和1之间不连续跳变，这给数值求解带来困难。HTS通过引入平滑参数rho，用连续的双曲正切函数替代阶跃跳变，使哈密顿边值问题可解。随rho趋近于零，平滑解收敛到原始的不连续最优控制。

## 应用价值

该术语在地月空间任务规划与执行中具有重要应用价值。

## 相关概念

- [隐藏基因遗传算法（Hidden-Genes Genetic Algorithm, HGGA）](/glossary/fundamentals/hidden-genes-genetic-algorithm/)
- 变长设计空间（Variable-Size Design Space, VSDS）
- [驻留维持（Station-Keeping）](/glossary/dynamics/station-keeping/)
- 目标点法（Target Point Method）

## 参考文献

- Singh et al., 2021
