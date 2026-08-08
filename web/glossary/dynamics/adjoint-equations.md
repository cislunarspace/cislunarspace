---
title: 共轭方程（Adjoint Equations）
description: 最优控制理论中描述共轭变量时间演化的一阶常微分方程组，形式为lambda=-dH/dx。共轭方程与状态方程构成正则方程组，共同描述最优轨迹的完整动力学。论文中共轭方程有七个，分别对应三个速度分量、三个位置分量和质量的状态变量。共轭方程的求解需要知道共轭变量初值，而初值正是通过扫描法求解两点边值问题获得的。
keywords: 共轭方程, Adjoint Equations, 动力学, 轨道, 控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 共轭方程（Adjoint Equations）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 共轭方程详解 | 术语定义
  description: 最优控制理论中描述共轭变量时间演化的一阶常微分方程组，形式为lambda=-dH/dx。共轭方程与状态方程构成正则方程组，共同描述最优轨迹的完整动力学。论文中共轭方程有七个，分别对应三个速度分量、三个位置分量和质量的状态变量。共轭方程的求解需要知道共轭变量初值，而初值正是通过扫描法求解两点边值问题获得的。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 共轭方程详解 | 术语定义
  description: 最优控制理论中描述共轭变量时间演化的一阶常微分方程组，形式为lambda=-dH/dx。共轭方程与状态方程构成正则方程组，共同描述最优轨迹的完整动力学。论文中共轭方程有七个，分别对应三个速度分量、三个位置分量和质量的状态变量。共轭方程的求解需要知道共轭变量初值，而初值正是通过扫描法求解两点边值问题获得的。
  image: /logo.png
permalink: /glossary/dynamics/adjoint-equations/
---

# 共轭方程（Adjoint Equations）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

最优控制理论中描述共轭变量时间演化的一阶常微分方程组，形式为lambda=-dH/dx。共轭方程与状态方程构成正则方程组，共同描述最优轨迹的完整动力学。论文中共轭方程有七个，分别对应三个速度分量、三个位置分量和质量的状态变量。共轭方程的求解需要知道共轭变量初值，而初值正是通过扫描法求解两点边值问题获得的。

## 应用价值

在实际任务中，共轭方程直接影响转移轨道的燃料消耗和任务窗口选取，需要结合轨道优化算法进行详细设计。
针对共轭方程的深入研究有助于理解地月空间复杂动力学环境，为未来任务设计提供理论支撑和工程参考。
在实际任务中，需要结合数值仿真和解析方法对共轭方程进行分析验证，确保设计方案满足任务约束和性能指标。

## 相关概念

- 双变量高斯分布（Bivariate Gaussian Distribution）
- 中途脉冲（Midcourse Impulse）
- 零推力参考轨迹（Zero-Thrust Reference Trajectory）
- [协态变量（Co-state Variables）](/glossary/dynamics/co-state-variables/)

## 参考文献

- 周净扬和周荻 - 2007 - 月球探测器软着陆精确建模及最优轨道设计
