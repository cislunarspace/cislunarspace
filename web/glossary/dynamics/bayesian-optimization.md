---
title: 贝叶斯优化（Bayesian Optimization）
description: 基于贝叶斯定理的全局优化策略，通过构建目标函数的概率代理模型并用观测数据迭代更新，适合求解计算代价高、导数难解的优化问题。论文用该方法求解轨道识别优化模型。
keywords: 轨道, 动力学, 控制, 稳定性
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 贝叶斯优化（Bayesian Optimization）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 贝叶斯优化详解 | 术语定义
  description: 基于贝叶斯定理的全局优化策略，通过构建目标函数的概率代理模型并用观测数据迭代更新，适合求解计算代价高、导数难解的优化问题。论文用该方法求解轨道识别优化模型。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 贝叶斯优化详解 | 术语定义
  description: 基于贝叶斯定理的全局优化策略，通过构建目标函数的概率代理模型并用观测数据迭代更新，适合求解计算代价高、导数难解的优化问题。论文用该方法求解轨道识别优化模型。
  image: /logo.png
permalink: /glossary/dynamics/bayesian-optimization/
---

# 贝叶斯优化（Bayesian Optimization）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

基于贝叶斯定理的全局优化策略，通过构建目标函数的概率代理模型并用观测数据迭代更新，适合求解计算代价高、导数难解的优化问题。论文用该方法求解轨道识别优化模型。

## 应用价值

该轨道设计方法在地月空间任务中广泛应用。通过优化轨道参数，可以在保证任务需求的前提下最大限度降低推进剂消耗，提高任务经济效益，是当前地月空间任务设计的重要工具。

## 相关概念

- [L4（L4）](/glossary/dynamics/l4/)
- [轨道内分量（In-Plane）](/glossary/dynamics/in-plane/)
- [Hill方程（Hill's Equations）](/glossary/dynamics/hills-equations/)
- [雅可比能量（Jacobi Energy）](/glossary/dynamics/jacobi-energy/)

## 参考文献

- Orbital parameter characterization and objects cataloging for Earth-moon collinear libration points
