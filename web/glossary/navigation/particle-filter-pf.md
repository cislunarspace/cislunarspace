---
title: 粒子滤波（Particle Filter, PF）
description: 基于序贯蒙特卡洛方法的递推贝叶斯滤波器，用一组带权粒子逼近任意概率密度。每个粒子代表一个可能的状态样本，通过系统传播和量测更新调整权重，经重采样防止粒子退化。优点是能处理非高斯、强非线性问题；缺点是在高维状态空间中「维度灾难」严重，粒子数量随维度指数增长。
keywords: 粒子滤波, Particle Filter, PF, PF, 导航, 定轨
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 粒子滤波（Particle Filter, PF）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 粒子滤波详解 | 术语定义
  description: 基于序贯蒙特卡洛方法的递推贝叶斯滤波器，用一组带权粒子逼近任意概率密度。每个粒子代表一个可能的状态样本，通过系统传播和量测更新调整权重，经重采样防止粒子退化。优点是能处理非高斯、强非线性问题；缺点是在高维状态空间中「维度灾难」严重，粒子数量随维度指数增长。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 粒子滤波详解 | 术语定义
  description: 基于序贯蒙特卡洛方法的递推贝叶斯滤波器，用一组带权粒子逼近任意概率密度。每个粒子代表一个可能的状态样本，通过系统传播和量测更新调整权重，经重采样防止粒子退化。优点是能处理非高斯、强非线性问题；缺点是在高维状态空间中「维度灾难」严重，粒子数量随维度指数增长。
  image: /logo.png
permalink: /glossary/navigation/particle-filter-pf/
---

# 粒子滤波（Particle Filter, PF）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文来源：学术论文与专业资料整理
>
> 站长地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

基于序贯蒙特卡洛方法的递推贝叶斯滤波器，用一组带权粒子逼近任意概率密度。每个粒子代表一个可能的状态样本，通过系统传播和量测更新调整权重，经重采样防止粒子退化。优点是能处理非高斯、强非线性问题；缺点是在高维状态空间中「维度灾难」严重，粒子数量随维度指数增长。

## 应用价值

粒子滤波用带权粒子逼近概率密度，能处理非高斯强非线性问题，但高维状态空间中面临维度灾难。在地月空间导航中需要与其他方法结合使用。

## 相关概念

- [单差观测（Single-Difference Observation）](/glossary/navigation/singledifference-observation/)
- [芯片级原子钟（Chip Scale Atomic Clock）](/glossary/navigation/chip-scale-atomic-clock/)
- [测轨误差（Orbit Determination Error）](/glossary/navigation/orbit-determination-error/)

## 参考文献

- Li 等 - 2025 - Efficient reachable domain search-tracking for cislunar non-cooperative targets via designed quadrature
