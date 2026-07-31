---
title: 增广拉格朗日法（Augmented Lagrangian Method）
description: 将拉格朗日乘子项与二次罚函数项同时加入目标函数的约束处理方法。在 HDDP 中，终端约束 ψ=0 通过乘子 λ 和罚函数矩阵 Σ 按 φ+λᵀψ+ψᵀΣψ 的形式附加到原目标函数上。乘子在每次迭代中更新，引导轨迹趋向可行；罚函数提供额外的约束违反惩罚，增强收敛稳定性。与纯罚函数法相比，增广拉格朗日法不要求罚函数权重趋于
keywords: 增广拉格朗日法, Augmented Lagrangian Method, 轨道动力学, 控制理论, 最优控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 增广拉格朗日法（Augmented Lagrangian Method）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 增广拉格朗日法详解 | 术语定义
  description: 将拉格朗日乘子项与二次罚函数项同时加入目标函数的约束处理方法。在 HDDP 中，终端约束 ψ=0 通过乘子 λ 和罚函数矩阵 Σ 按 φ+λᵀψ+ψᵀΣψ 的形式附加到原目标函数上。乘子在每次迭代中更新，引导轨迹趋向可行；罚函数提供额外的约束违反惩罚，增强收敛稳定性。与纯罚函数法相比，增广拉格朗日法不要求罚函数权重趋于
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 增广拉格朗日法详解 | 术语定义
  description: 将拉格朗日乘子项与二次罚函数项同时加入目标函数的约束处理方法。在 HDDP 中，终端约束 ψ=0 通过乘子 λ 和罚函数矩阵 Σ 按 φ+λᵀψ+ψᵀΣψ 的形式附加到原目标函数上。乘子在每次迭代中更新，引导轨迹趋向可行；罚函数提供额外的约束违反惩罚，增强收敛稳定性。与纯罚函数法相比，增广拉格朗日法不要求罚函数权重趋于
  image: /logo.png
permalink: /glossary/dynamics/augmented-lagrangian-method/
---

# 增广拉格朗日法（Augmented Lagrangian Method）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

将拉格朗日乘子项与二次罚函数项同时加入目标函数的约束处理方法。在 HDDP 中，终端约束 ψ=0 通过乘子 λ 和罚函数矩阵 Σ 按 φ+λᵀψ+ψᵀΣψ 的形式附加到原目标函数上。乘子在每次迭代中更新，引导轨迹趋向可行；罚函数提供额外的约束违反惩罚，增强收敛稳定性。与纯罚函数法相比，增广拉格朗日法不要求罚函数权重趋于无穷即可收敛到精确解。

## 应用价值

在轨道动力学数值仿真中，该方法用于提高计算精度和效率。通过合理的离散化策略，可以在保证数值稳定性的同时大幅减少计算量。

## 相关概念

- [Hill 模型（Hill Model）](/glossary/dynamics/hill-model/)
- [惯性坐标系固定编队（Formation Fixed Relative to Inertial Frame）](/glossary/dynamics/formation-fixed-relative-to-inertial-frame/)
- [受摄Lambert问题（Perturbational Lambert Problem）](/glossary/dynamics/perturbational-lambert-problem/)
- [探测器定位（Probe Targeting）](/glossary/dynamics/probe-targeting/)
## 参考文献

- Lantoine & Russell 2012, JOTA Part 1 & 2; Aziz et al. 2019, JGCD
