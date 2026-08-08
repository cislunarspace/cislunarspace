---
title: 微分修正法（Differential Correction Method）
description: 利用状态转移矩阵的线性近似，通过迭代修正初始状态偏差，使终端状态逐步满足约束条件的数值方法。在三体 Lambert 问题中，微分修正法将非线性两点边值问题线性化，用状态转移矩阵建立始末位置偏差与速度修正量的映射关系。文中式 (11) 即为微分修正的核心方程。
keywords: 微分修正法, Differential Correction Method, , 基础理论, 轨道力学, 摄动
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 微分修正法（Differential Correction Method）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 微分修正法详解 | 术语定义
  description: 利用状态转移矩阵的线性近似，通过迭代修正初始状态偏差，使终端状态逐步满足约束条件的数值方法。在三体 Lambert 问题中，微分修正法将非线性两点边值问题线性化，用状态转移矩阵建立始末位置偏差与速度修正量的映射关系。文中式 (11) 即为微分修正的核心方程。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 微分修正法详解 | 术语定义
  description: 利用状态转移矩阵的线性近似，通过迭代修正初始状态偏差，使终端状态逐步满足约束条件的数值方法。在三体 Lambert 问题中，微分修正法将非线性两点边值问题线性化，用状态转移矩阵建立始末位置偏差与速度修正量的映射关系。文中式 (11) 即为微分修正的核心方程。
  image: /logo.png
permalink: /glossary/fundamentals/differential-correction-method/
---

# 微分修正法（Differential Correction Method）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文来源：[地月空间入门指南](https://cislunarspace.cn)

## 定义

利用状态转移矩阵的线性近似，通过迭代修正初始状态偏差，使终端状态逐步满足约束条件的数值方法。在三体 Lambert 问题中，微分修正法将非线性两点边值问题线性化，用状态转移矩阵建立始末位置偏差与速度修正量的映射关系。文中式 (11) 即为微分修正的核心方程。

## 应用价值

微分修正法通过状态转移矩阵建立偏差与修正量的线性映射，是三体Lambert问题中求解两点边值问题的标准方法，轨道设计师用它精确求解平动点交会轨道。

## 相关概念

- 拉瓦尔喷管（Laval Nozzle）
- [多体动力学环境（Multi-Body Dynamical Environment）](/glossary/fundamentals/multi-body-dynamical-environment/)
- [拉格朗日点（Lagrange Point）](/glossary/fundamentals/lagrange-point/)
- 轨道根数（Orbital Elements）

## 参考文献

- 基于三体Lambert算法的平动点交会轨道设计
