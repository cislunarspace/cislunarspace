---
title: 完全能控性（Complete Controllability）
description: 线性系统从任意初始状态能在有限时间内到达任意目标状态的性质。离散线性定常系统的完全能控充要条件是能控性矩阵 [B | AB | ... | A^{n-1}B] 满秩。论文对 Halo 轨道误差动力学作定常变换后，验证该秩条件成立，证明小偏差范围内系统完全能控，即通过有限次控制机动可将任意初始误差消除。
keywords: 完全能控性, Complete Controllability, 轨道力学, 数值积分, 坐标系统
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 完全能控性（Complete Controllability）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 完全能控性详解 | 术语定义
  description: 线性系统从任意初始状态能在有限时间内到达任意目标状态的性质。离散线性定常系统的完全能控充要条件是能控性矩阵 [B | AB | ... | A^{n-1}B] 满秩。论文对 Halo 轨道误差动力学作定常变换后，验证该秩条件成立，证明小偏差范围内系统完全能控，即通过有限次控制机动可将任意初始误差消除。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 完全能控性详解 | 术语定义
  description: 线性系统从任意初始状态能在有限时间内到达任意目标状态的性质。离散线性定常系统的完全能控充要条件是能控性矩阵 [B | AB | ... | A^{n-1}B] 满秩。论文对 Halo 轨道误差动力学作定常变换后，验证该秩条件成立，证明小偏差范围内系统完全能控，即通过有限次控制机动可将任意初始误差消除。
  image: /logo.png
permalink: /glossary/fundamentals/complete-controllability/
---

# 完全能控性（Complete Controllability）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文来源：学术论文与专业资料整理
>
> 站长地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

线性系统从任意初始状态能在有限时间内到达任意目标状态的性质。离散线性定常系统的完全能控充要条件是能控性矩阵 [B | AB | ... | A^{n-1}B] 满秩。论文对 Halo 轨道误差动力学作定常变换后，验证该秩条件成立，证明小偏差范围内系统完全能控，即通过有限次控制机动可将任意初始误差消除。

## 应用价值

完全能控性保证系统可通过有限次控制机动消除任意初始误差。在Halo轨道维持控制中，验证能控性矩阵满秩是设计线性控制器的理论前提。

## 相关概念

- [轨道状态向量（Orbital State Vector）](/glossary/fundamentals/orbital-state-vector/)
- [坐标时（Coordinate Time）](/glossary/fundamentals/coordinate-time/)
- [Hill坐标系（Hill Frame）](/glossary/fundamentals/hill-frame/)
- [开普勒定律（Kepler's Laws）](/glossary/fundamentals/keplers-laws/)

## 参考文献

- 徐明和徐世杰 - 2008 - Halo轨道维持的线性周期控制策略
