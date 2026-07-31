---
title: 相对阶（Relative Degree）
description: 非线性系统输入输出关系的结构性指标，定义为使输出的某阶导数首次显含控制输入所需的最少求导次数。连续时间地月三体动力学系统的相对阶为(2,2,2)，但经单速率采样后降为(1,1,1)，导致出现额外的3维不稳定采样零动态，这正是需要多速率采样的根本原因。
keywords: 相对阶, Relative Degree, 轨道力学, 三体问题, 非线性动力学, 轨道稳定性
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 相对阶（Relative Degree）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 相对阶详解 | 术语定义
  description: 非线性系统输入输出关系的结构性指标，定义为使输出的某阶导数首次显含控制输入所需的最少求导次数。连续时间地月三体动力学系统的相对阶为(2,2,2)，但经单速率采样后降为(1,1,1)，导致出现额外的3维不稳定采样零动态，这正是需要多速率采样的根本原因。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 相对阶详解 | 术语定义
  description: 非线性系统输入输出关系的结构性指标，定义为使输出的某阶导数首次显含控制输入所需的最少求导次数。连续时间地月三体动力学系统的相对阶为(2,2,2)，但经单速率采样后降为(1,1,1)，导致出现额外的3维不稳定采样零动态，这正是需要多速率采样的根本原因。
  image: /logo.png
permalink: /glossary/dynamics/relative-degree/
---

# 相对阶（Relative Degree）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

非线性系统输入输出关系的结构性指标，定义为使输出的某阶导数首次显含控制输入所需的最少求导次数。连续时间地月三体动力学系统的相对阶为(2,2,2)，但经单速率采样后降为(1,1,1)，导致出现额外的3维不稳定采样零动态，这正是需要多速率采样的根本原因。

## 应用价值

相对阶是描述非线性系统输入输出关系结构特性的指标。连续时间地月三体动力学相对阶为(2,2,2)，但单速率采样后降为(1,1,1)，产生额外的3维不稳定采样零动态。理解相对阶变化是设计多速率采样控制系统的理论基础，也是避免控制器失稳的关键。

## 相关概念

- [椭圆线性化相对运动方程（ELERM）](/glossary/dynamics/elerm/)
- [采样零动态（Sampling Zero-Dynamics）](/glossary/dynamics/sampling-zero-dynamics/)
- [雅可比常数（Jacobi Constant, JC）](/glossary/dynamics/jacobi-constant-jc/)
- [希尔区域（Hill Region）](/glossary/fundamentals/hill-region/)
## 参考文献

- Elobaid et al. 2022
