---
title: 数值流形近似方法（Numerical Manifold Approximation Method）
description: 用二维插值（如三次卷积插值）对不变流形状态点进行近似计算的方法。将流形状态表示为周期轨道初始点积分时间 τ 和流形积分时间 t 的二元函数，预先积分生成插值数据库，优化时通过插值直接获取流形点，无需重复积分，兼顾精度与效率。
keywords: 数值流形近似方法, Numerical Manifold Approximation Method, 轨道动力学, 控制理论, 数值仿真
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 数值流形近似方法（Numerical Manifold Approximation Method）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 数值流形近似方法详解 | 术语定义
  description: 用二维插值（如三次卷积插值）对不变流形状态点进行近似计算的方法。将流形状态表示为周期轨道初始点积分时间 τ 和流形积分时间 t 的二元函数，预先积分生成插值数据库，优化时通过插值直接获取流形点，无需重复积分，兼顾精度与效率。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 数值流形近似方法详解 | 术语定义
  description: 用二维插值（如三次卷积插值）对不变流形状态点进行近似计算的方法。将流形状态表示为周期轨道初始点积分时间 τ 和流形积分时间 t 的二元函数，预先积分生成插值数据库，优化时通过插值直接获取流形点，无需重复积分，兼顾精度与效率。
  image: /logo.png
permalink: /glossary/dynamics/numerical-manifold-approximation-method/
---

# 数值流形近似方法（Numerical Manifold Approximation Method）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

用二维插值（如三次卷积插值）对不变流形状态点进行近似计算的方法。将流形状态表示为周期轨道初始点积分时间 τ 和流形积分时间 t 的二元函数，预先积分生成插值数据库，优化时通过插值直接获取流形点，无需重复积分，兼顾精度与效率。

## 应用价值

数值流形近似方法涉及地月空间航天器的运动特性分析和控制问题。在实际任务设计中，利用该方法可以分析轨道稳定性、计算控制策略，或评估摄动因素对轨道的影响，为任务安全性和可靠性提供保障。

## 相关概念

- 遭遇区域（Encounter Region）
- [相对论效应修正（Relativistic Correction）](/glossary/dynamics/relativistic-correction/)
- [直接飞越转移（Direct Fly-By Transfer, DFBT）](/glossary/dynamics/dfbt/)
- [安全转移编队（Safe Transfer Formation）](/glossary/dynamics/safe-transfer-formation/)

## 参考文献

- 平动点双脉冲转移轨道的快速计算方法（潘迅 等，2017）
