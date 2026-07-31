---
title: 二阶锥规划（Second-Order Cone Programming, SOCP）
description: 一种凸优化问题形式，目标函数为线性函数，约束包含二阶锥约束（即仿射函数的2-范数不超过仿射函数）。SOCP比一般非线性规划更易求解全局最优，比线性规划能表达更多约束。在地月空间轨道保持中，SOCP用于将终端椭球约束和脉冲幅值约束统一纳入凸优化框架。
keywords: 二阶锥规划, Second-Order Cone Programming, SOCP, SOCP, dynamics
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 二阶锥规划（Second-Order Cone Programming, SOCP）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 二阶锥规划详解 | 术语定义
  description: 一种凸优化问题形式，目标函数为线性函数，约束包含二阶锥约束（即仿射函数的2-范数不超过仿射函数）。SOCP比一般非线性规划更易求解全局最优，比线性规划能表达更多约束。在地月空间轨道保持中，SOCP用于将终端椭球约束和脉冲幅值约束统一纳入凸优化框架。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 二阶锥规划详解 | 术语定义
  description: 一种凸优化问题形式，目标函数为线性函数，约束包含二阶锥约束（即仿射函数的2-范数不超过仿射函数）。SOCP比一般非线性规划更易求解全局最优，比线性规划能表达更多约束。在地月空间轨道保持中，SOCP用于将终端椭球约束和脉冲幅值约束统一纳入凸优化框架。
  image: /logo.png
permalink: /glossary/dynamics/socp/
---

# 二阶锥规划（Second-Order Cone Programming, SOCP）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种凸优化问题形式，目标函数为线性函数，约束包含二阶锥约束（即仿射函数的2-范数不超过仿射函数）。SOCP比一般非线性规划更易求解全局最优，比线性规划能表达更多约束。在地月空间轨道保持中，SOCP用于将终端椭球约束和脉冲幅值约束统一纳入凸优化框架。

## 应用价值

二阶锥规划方法在地月空间任务规划中用于求解大规模优化问题，能够在多约束条件下找到满足任务需求的解决方案。

## 相关概念

- （暂无相关概念）

## 参考文献

- Shimane 等 - 2025 - Revolution-spaced output-feedback model predictive control for station keeping on near-rectilinear halo orbits。
- Acikse和Ploen - 2007。
