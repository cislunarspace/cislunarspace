---
title: 采样零动态（Sampling Zero-Dynamics）
description: 对连续时间系统进行离散化（采样）后出现的、在原连续系统中不存在的零动态。当采样使系统的相对阶降低时，多出的低阶通道产生额外的内部动态。这些动态通常是不稳定的，导致基于单速率采样模型的逆控制方法无法保证内动态稳定性，是多速率采样控制设计的核心动机。
keywords: 采样零动态, Sampling Zero-Dynamics, 轨道力学, 三体问题, 非线性动力学, 轨道稳定性
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 采样零动态（Sampling Zero-Dynamics）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 采样零动态详解 | 术语定义
  description: 对连续时间系统进行离散化（采样）后出现的、在原连续系统中不存在的零动态。当采样使系统的相对阶降低时，多出的低阶通道产生额外的内部动态。这些动态通常是不稳定的，导致基于单速率采样模型的逆控制方法无法保证内动态稳定性，是多速率采样控制设计的核心动机。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 采样零动态详解 | 术语定义
  description: 对连续时间系统进行离散化（采样）后出现的、在原连续系统中不存在的零动态。当采样使系统的相对阶降低时，多出的低阶通道产生额外的内部动态。这些动态通常是不稳定的，导致基于单速率采样模型的逆控制方法无法保证内动态稳定性，是多速率采样控制设计的核心动机。
  image: /logo.png
permalink: /glossary/dynamics/sampling-zero-dynamics/
---

# 采样零动态（Sampling Zero-Dynamics）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

对连续时间系统进行离散化（采样）后出现的、在原连续系统中不存在的零动态。当采样使系统的相对阶降低时，多出的低阶通道产生额外的内部动态。这些动态通常是不稳定的，导致基于单速率采样模型的逆控制方法无法保证内动态稳定性，是多速率采样控制设计的核心动机。

## 应用价值

采样零动态是离散化后出现的新不稳定动态。当采样使系统相对阶降低时，会产生额外的内部动态，通常不稳定。在地月空间多速率采样控制设计中，需要特别处理采样零动态问题，否则基于单速率模型的逆控制方法无法保证闭环稳定性。

## 相关概念

- [相对阶（Relative Degree）](/glossary/dynamics/relative-degree/)
- [雅可比常数（Jacobi Constant, JC）](/glossary/dynamics/jacobi-constant-jc/)
- [希尔区域（Hill Region）](/glossary/fundamentals/hill-region/)
- [庞加莱映射（Poincaré Map）](/glossary/dynamics/poincar-map/)
## 参考文献

- Monaco & Normand-Cyrot 1986
- Elobaid et al. 2022
