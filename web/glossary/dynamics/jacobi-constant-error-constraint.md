---
title: 雅可比常数误差约束（Jacobi Constant Error Constraint）
description: 将参考轨道雅可比常数误差作为约束条件，结合SDRE实现轨道保持的控制策略。
keywords: 雅可比常数误差约束, Jacobi Constant Error Constraint, 轨道力学, 三体问题, 非线性动力学, 轨道稳定性
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 雅可比常数误差约束（Jacobi Constant Error Constraint）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 雅可比常数误差约束详解 | 术语定义
  description: 将参考轨道雅可比常数误差作为约束条件，结合SDRE实现轨道保持的控制策略。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 雅可比常数误差约束详解 | 术语定义
  description: 将参考轨道雅可比常数误差作为约束条件，结合SDRE实现轨道保持的控制策略。
  image: /logo.png
permalink: /glossary/dynamics/jacobi-constant-error-constraint/
---

# 雅可比常数误差约束（Jacobi Constant Error Constraint）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

将参考轨道雅可比常数误差作为约束条件，结合SDRE实现轨道保持的控制策略。

## 应用价值

雅可比常数误差约束将轨道能量偏差作为控制目标，结合SDRE实现轨道保持。该方法利用旋转坐标系下能量积分近似守恒的特性，通过抑制雅可比常数误差来维持轨道，是平动点轨道保持的一种有效策略，适用于长期无人值守任务。

## 相关概念

- [零速度面（Zero Velocity Surface, ZVS）](/glossary/dynamics/zero-velocity-surface-zvs/)
- [雅可比常数（Jacobi Constant, JC）](/glossary/dynamics/jacobi-constant-jc/)
- [希尔区域（Hill Region）](/glossary/fundamentals/hill-region/)
- [庞加莱映射（Poincaré Map）](/glossary/dynamics/poincar-map/)
## 参考文献

- Cuevas del Valle 等 - 2023
