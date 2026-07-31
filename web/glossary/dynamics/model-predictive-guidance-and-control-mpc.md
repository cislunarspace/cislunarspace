---
title: 模型预测制导与控制（Model Predictive Guidance and Control, MPC）
description: 一种基于数值优化的制导与控制策略，在预测时域内最小化代价函数，通过求解二次规划问题得到控制序列，仅执行第一个控制后进入下一时域循环。优点在于可显式处理状态与控制约束，适用于非线性和非平稳系统。
keywords: 模型预测制导与控制, Model Predictive Guidance and Control, MPC, MPC, 轨道力学, 三体问题, 非线性动力学, 轨道稳定性
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 模型预测制导与控制（Model Predictive Guidance and Control, MPC）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 模型预测制导与控制详解 | 术语定义
  description: 一种基于数值优化的制导与控制策略，在预测时域内最小化代价函数，通过求解二次规划问题得到控制序列，仅执行第一个控制后进入下一时域循环。优点在于可显式处理状态与控制约束，适用于非线性和非平稳系统。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 模型预测制导与控制详解 | 术语定义
  description: 一种基于数值优化的制导与控制策略，在预测时域内最小化代价函数，通过求解二次规划问题得到控制序列，仅执行第一个控制后进入下一时域循环。优点在于可显式处理状态与控制约束，适用于非线性和非平稳系统。
  image: /logo.png
permalink: /glossary/dynamics/model-predictive-guidance-and-control-mpc/
---

# 模型预测制导与控制（Model Predictive Guidance and Control, MPC）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种基于数值优化的制导与控制策略，在预测时域内最小化代价函数，通过求解二次规划问题得到控制序列，仅执行第一个控制后进入下一时域循环。优点在于可显式处理状态与控制约束，适用于非线性和非平稳系统。

## 应用价值

模型预测制导与控制通过滚动时域优化生成控制序列。在地月空间任务中，MPC能够处理多约束、非线性系统，适合复杂的轨道转移和交会对接场景，是实现高性能自主控制的重要方法。

## 相关概念

- [雅可比常数（Jacobi Constant, JC）](/glossary/dynamics/jacobi-constant-jc/)
- [希尔区域（Hill Region）](/glossary/fundamentals/hill-region/)
- [庞加莱映射（Poincaré Map）](/glossary/dynamics/poincar-map/)
- [稳定性（Stability）](/glossary/dynamics/stability/)
## 参考文献

- Capannolo 等 - 2023 - Model predictive control for formation reconfiguration exploiting quasi-periodic tori in the cislunar environment
