---
title: Riccati方程（Riccati Equation）
description: 线性二次型最优控制（LQR）中用于求解最优状态反馈增益的矩阵微分/代数方程，形式为 A^T P + PA - PBR⁻¹B^T P + Q = 0。P 为对称正定（或半正定）解矩阵，代入 K = -R⁻¹B^T P 即得最优增益。Riccati 方程的性质（解的存在唯一性、收敛性）保证了 LQR 控制器的最优性和闭环稳
keywords: Riccati方程, Riccati Equation, 动力学, 轨道, 控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Riccati方程（Riccati Equation）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: Riccati方程详解 | 术语定义
  description: 线性二次型最优控制（LQR）中用于求解最优状态反馈增益的矩阵微分/代数方程，形式为 A^T P + PA - PBR⁻¹B^T P + Q = 0。P 为对称正定（或半正定）解矩阵，代入 K = -R⁻¹B^T P 即得最优增益。Riccati 方程的性质（解的存在唯一性、收敛性）保证了 LQR 控制器的最优性和闭环稳
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Riccati方程详解 | 术语定义
  description: 线性二次型最优控制（LQR）中用于求解最优状态反馈增益的矩阵微分/代数方程，形式为 A^T P + PA - PBR⁻¹B^T P + Q = 0。P 为对称正定（或半正定）解矩阵，代入 K = -R⁻¹B^T P 即得最优增益。Riccati 方程的性质（解的存在唯一性、收敛性）保证了 LQR 控制器的最优性和闭环稳
  image: /logo.png
permalink: /glossary/dynamics/riccati-equation/
---

# Riccati方程（Riccati Equation）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

线性二次型最优控制（LQR）中用于求解最优状态反馈增益的矩阵微分/代数方程，形式为 A^T P + PA - PBR⁻¹B^T P + Q = 0。P 为对称正定（或半正定）解矩阵，代入 K = -R⁻¹B^T P 即得最优增益。Riccati 方程的性质（解的存在唯一性、收敛性）保证了 LQR 控制器的最优性和闭环稳定性。

## 应用价值

由于Riccati方程具有不稳定性，轨道设计时必须考虑主动控制或定期修正策略，以避免初始误差随时间指数增长导致任务失败。
在实际任务中，Riccati方程直接影响转移轨道的燃料消耗和任务窗口选取，需要结合轨道优化算法进行详细设计。
在实际任务中，需要结合数值仿真和解析方法对Riccati方程进行分析验证，确保设计方案满足任务约束和性能指标。

## 相关概念

- 双变量高斯分布（Bivariate Gaussian Distribution）
- 中途脉冲（Midcourse Impulse）
- 零推力参考轨迹（Zero-Thrust Reference Trajectory）
- [协态变量（Co-state Variables）](/glossary/dynamics/co-state-variables/)

## 参考文献

- 地月空间航天器绕飞接近跟踪控制
