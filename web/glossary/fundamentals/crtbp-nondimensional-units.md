---
title: CRTBP无量纲单位（CRTBP Nondimensional Units）
description: 在圆型限制性三体问题（CRTBP）中，为消除数值计算中的量级差异而定义的一组无量纲单位。距离单位 DU 等于两天体间距 R，时间单位 TU 等于系统角速度的倒数 ω⁻¹，质量单位 MU 取航天器初始质量 m₀，力单位 FU = MU·DU/TU²。在此无量纲化下，CRTBP 方程仅含系统质量比 μ 这一个参数，数值计算
keywords: CRTBP无量纲单位, CRTBP Nondimensional Units, DU, TU, MU, FU, 基础理论, 轨道力学, 摄动
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: CRTBP无量纲单位（CRTBP Nondimensional Units）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: CRTBP无量纲单位详解 | 术语定义
  description: 在圆型限制性三体问题（CRTBP）中，为消除数值计算中的量级差异而定义的一组无量纲单位。距离单位 DU 等于两天体间距 R，时间单位 TU 等于系统角速度的倒数 ω⁻¹，质量单位 MU 取航天器初始质量 m₀，力单位 FU = MU·DU/TU²。在此无量纲化下，CRTBP 方程仅含系统质量比 μ 这一个参数，数值计算
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: CRTBP无量纲单位详解 | 术语定义
  description: 在圆型限制性三体问题（CRTBP）中，为消除数值计算中的量级差异而定义的一组无量纲单位。距离单位 DU 等于两天体间距 R，时间单位 TU 等于系统角速度的倒数 ω⁻¹，质量单位 MU 取航天器初始质量 m₀，力单位 FU = MU·DU/TU²。在此无量纲化下，CRTBP 方程仅含系统质量比 μ 这一个参数，数值计算
  image: /logo.png
permalink: /glossary/fundamentals/crtbp-nondimensional-units/
---

# CRTBP无量纲单位（CRTBP Nondimensional Units）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文来源：[地月空间入门指南](https://cislunarspace.cn)

## 定义

在圆型限制性三体问题（CRTBP）中，为消除数值计算中的量级差异而定义的一组无量纲单位。距离单位 DU 等于两天体间距 R，时间单位 TU 等于系统角速度的倒数 ω⁻¹，质量单位 MU 取航天器初始质量 m₀，力单位 FU = MU·DU/TU²。在此无量纲化下，CRTBP 方程仅含系统质量比 μ 这一个参数，数值计算的量级统一，有利于优化算法的收敛性。

## 应用价值

CRTBP无量纲单位消除了数值计算的量级差异，使CRTBP方程仅含系统质量比这一个参数，有利于优化算法的收敛性，轨道设计软件通常内置这套单位制。

## 相关概念

- [微分修正法（Differential Correction Method）](/glossary/fundamentals/differential-correction-method/)
- [拉瓦尔喷管（Laval Nozzle）](/glossary/fundamentals/laval-nozzle/)
- [拉格朗日点（Lagrange Point）](/glossary/fundamentals/lagrange-point/)
- [轨道根数（Orbital Elements）](/glossary/fundamentals/orbital-elements/)

## 参考文献

- Aziz et al. 2019, JGCD
