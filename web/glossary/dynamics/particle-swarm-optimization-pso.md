---
title: 粒子群优化（Particle Swarm Optimization, PSO）
description: 一种基于群体智能的随机优化算法，通过模拟鸟群觅食行为让粒子在解空间中飞行并迭代更新位置与速度，以全局最小化目标函数。PSO 在混合优化框架中用于搜索中间拼接点的最优布局与间距，作为内层间接优化问题的外层全局搜索器。
keywords: 粒子群优化, Particle Swarm Optimization, PSO, PSO, 轨道力学, 三体问题, 非线性动力学, 轨道稳定性
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 粒子群优化（Particle Swarm Optimization, PSO）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 粒子群优化详解 | 术语定义
  description: 一种基于群体智能的随机优化算法，通过模拟鸟群觅食行为让粒子在解空间中飞行并迭代更新位置与速度，以全局最小化目标函数。PSO 在混合优化框架中用于搜索中间拼接点的最优布局与间距，作为内层间接优化问题的外层全局搜索器。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 粒子群优化详解 | 术语定义
  description: 一种基于群体智能的随机优化算法，通过模拟鸟群觅食行为让粒子在解空间中飞行并迭代更新位置与速度，以全局最小化目标函数。PSO 在混合优化框架中用于搜索中间拼接点的最优布局与间距，作为内层间接优化问题的外层全局搜索器。
  image: /logo.png
permalink: /glossary/dynamics/particle-swarm-optimization-pso/
---

# 粒子群优化（Particle Swarm Optimization, PSO）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种基于群体智能的随机优化算法，通过模拟鸟群觅食行为让粒子在解空间中飞行并迭代更新位置与速度，以全局最小化目标函数。PSO 在混合优化框架中用于搜索中间拼接点的最优布局与间距，作为内层间接优化问题的外层全局搜索器。

## 应用价值

粒子群优化是混合优化框架中的全局搜索器。在低推力转移轨道优化中，PSO用于搜索中间拼接点的最优布局与间距，作为内层间接优化问题的外层全局搜索器，能够有效处理非凸、多模态的优化 landscape，避免陷入局部最优解。

## 相关概念

- [雅可比常数（Jacobi Constant, JC）](/glossary/dynamics/jacobi-constant-jc/)
- [希尔区域（Hill Region）](/glossary/fundamentals/hill-region/)
- [庞加莱映射（Poincaré Map）](/glossary/dynamics/poincar-map/)
- [稳定性（Stability）](/glossary/dynamics/stability/)
## 参考文献

- Patrick 等 - 2023 - Hybrid optimization of high-fidelity low-thrust transfers to the lunar gateway
- Pontani和Teofilatto - 2016 - Polyhedral representation of invariant manifolds applied to orbit transfers in the Earth–moon system
