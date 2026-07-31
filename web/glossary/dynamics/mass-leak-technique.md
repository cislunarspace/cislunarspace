---
title: 质量泄漏技术（Mass Leak Technique）
description: 在推力幅值的计算公式中加入一个微小常数 εT 以避免零推力弧段（滑行段）数值奇异性的技术。推力范数写作 T=√(Tx²+Ty²+Tz²+εT)，当实际推力为零时，质量流率对笛卡尔控制变量的导数不再发散。该技术牺牲了极小的精度（εT 通常取 10⁻⁸ 到 10⁻¹⁶），换来了优化过程中滑行段的数值稳定性。在低推力轨迹优化
keywords: 质量泄漏技术, Mass Leak Technique, 轨道设计, 最优控制, 动力学建模, 脉冲机动
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 质量泄漏技术（Mass Leak Technique）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 质量泄漏技术详解 | 术语定义
  description: 在推力幅值的计算公式中加入一个微小常数 εT 以避免零推力弧段（滑行段）数值奇异性的技术。推力范数写作 T=√(Tx²+Ty²+Tz²+εT)，当实际推力为零时，质量流率对笛卡尔控制变量的导数不再发散。该技术牺牲了极小的精度（εT 通常取 10⁻⁸ 到 10⁻¹⁶），换来了优化过程中滑行段的数值稳定性。在低推力轨迹优化
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 质量泄漏技术详解 | 术语定义
  description: 在推力幅值的计算公式中加入一个微小常数 εT 以避免零推力弧段（滑行段）数值奇异性的技术。推力范数写作 T=√(Tx²+Ty²+Tz²+εT)，当实际推力为零时，质量流率对笛卡尔控制变量的导数不再发散。该技术牺牲了极小的精度（εT 通常取 10⁻⁸ 到 10⁻¹⁶），换来了优化过程中滑行段的数值稳定性。在低推力轨迹优化
  image: /logo.png
permalink: /glossary/dynamics/mass-leak-technique/
---

# 质量泄漏技术（Mass Leak Technique）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

在推力幅值的计算公式中加入一个微小常数 εT 以避免零推力弧段（滑行段）数值奇异性的技术。推力范数写作 T=√(Tx²+Ty²+Tz²+εT)，当实际推力为零时，质量流率对笛卡尔控制变量的导数不再发散。该技术牺牲了极小的精度（εT 通常取 10⁻⁸ 到 10⁻¹⁶），换来了优化过程中滑行段的数值稳定性。在低推力轨迹优化中，逐步减小 εT 并以上一轮解作为初始猜测，可逼近精确的 bang-bang 控制。

## 应用价值

为航天器的精确控制提供理论依据，确保任务执行的可靠性 结合数值优化算法，可实现高性能的轨迹规划 用于评估导航系统的精度上限，指导滤波器设计。

## 相关概念

- [对偶控制变换（Adjoint-Control Transformation）](/glossary/dynamics/adjoint-control-transformation/)
- [贝叶斯压缩感知（Bayesian Compressive Sensing）](/glossary/dynamics/bayesian-compressive-sensing/)
- [Lyapunov轨道（Lyapunov Orbit）](/glossary/orbits/lyapunov-orbit/)
- [状态转移矩阵（State Transition Matrix）](/glossary/dynamics/state-transition-matrix/)

## 参考文献

- McConaghy & Longuski 2004, AIAA 2004-5403; Aziz et al. 2019, JGCD
