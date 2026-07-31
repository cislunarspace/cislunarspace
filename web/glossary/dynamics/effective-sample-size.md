---
title: 有效样本量（Effective Sample Size, ESS）
description: 衡量粒子滤波中粒子集退化程度的指标。定义为所有粒子归一化权重平方和的倒数。当权重集中到少数粒子上时，ESS迅速下降，意味着大部分粒子对估计贡献极小。当ESS低于预设阈值（通常取粒子总数的一半）时触发重采样，用高权粒子复制替代低权粒子以恢复粒子多样性。
keywords: 有效样本量, Effective Sample Size, ESS, 轨道动力学, 多体问题
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 有效样本量（Effective Sample Size, ESS）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 有效样本量详解 | 术语定义
  description: 衡量粒子滤波中粒子集退化程度的指标。定义为所有粒子归一化权重平方和的倒数。当权重集中到少数粒子上时，ESS迅速下降，意味着大部分粒子对估计贡献极小。当ESS低于预设阈值（通常取粒子总数的一半）时触发重采样，用高权粒子复制替代低权粒子以恢复粒子多样性。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 有效样本量详解 | 术语定义
  description: 衡量粒子滤波中粒子集退化程度的指标。定义为所有粒子归一化权重平方和的倒数。当权重集中到少数粒子上时，ESS迅速下降，意味着大部分粒子对估计贡献极小。当ESS低于预设阈值（通常取粒子总数的一半）时触发重采样，用高权粒子复制替代低权粒子以恢复粒子多样性。
  image: /logo.png
permalink: /glossary/dynamics/effective-sample-size/
---

# 有效样本量（Effective Sample Size, ESS）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

衡量粒子滤波中粒子集退化程度的指标。定义为所有粒子归一化权重平方和的倒数。当权重集中到少数粒子上时，ESS迅速下降，意味着大部分粒子对估计贡献极小。当ESS低于预设阈值（通常取粒子总数的一半）时触发重采样，用高权粒子复制替代低权粒子以恢复粒子多样性。

## 应用价值

在自主导航滤波算法中，该方法通过自适应调整滤波器参数提高收敛速度，适用于地月空间的实时定轨任务。

## 相关概念

- [月球飞越法（Lunar Fly-by Method）](/glossary/dynamics/lunar-fly-by-method/)
- [可达集（Reachability Set）](/glossary/dynamics/reachability-set/)
- [最大能量逃逸轨迹（Maximum-Energy Escape Trajectory）](/glossary/dynamics/maximum-energy-escape-trajectory/)
- [拉普拉斯方法（Laplace Method）](/glossary/dynamics/laplace-method/)

## 参考文献

- Li 等 - 2025 - Efficient reachable domain search-tracking for cislunar non-cooperative targets via designed quadrature
