---
title: 模型预测制导与控制（Model Predictive Guidance and Control, MPC）
description: 一种基于数值优化的制导与控制策略，在预测时域内最小化代价函数，通过求解二次规划问题得到控制序列，仅执行第一个控制后进入下一时域循环。优点在于可显式处理状态与控制约束，适用于非线性和非平稳系统。
keywords: 模型预测制导与控制, Model Predictive Guidance and Control, MPC, MPC, 轨道动力学, 控制理论, 非线性控制, 最优控制
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
permalink: /glossary/dynamics/MPC/
---

# 模型预测制导与控制（Model Predictive Guidance and Control, MPC）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种基于数值优化的制导与控制策略，在预测时域内最小化代价函数，通过求解二次规划问题得到控制序列，仅执行第一个控制后进入下一时域循环。优点在于可显式处理状态与控制约束，适用于非线性和非平稳系统。

## 应用价值

基于数值优化的实时制导控制策略，通过滚动时域优化处理状态与控制约束，适合非线性非平稳系统。

## 相关概念

- [规定性能控制（Prescribed Performance Control, PPC）](/glossary/dynamics/PPC/)
- [终端滑模控制（Terminal Sliding Mode Control, TSMC）](/glossary/dynamics/TSMC/)
- [自适应多阶段伪谱凸优化（Adaptive Multi-phase Pseudospectral Convex Optimization）](/glossary/dynamics/MPPCvx/)
- [修正春分点轨道元素（Modified Equinoctial Elements, MEEs）](/glossary/dynamics/MEEs/)

## 参考文献

- Capannolo 等 - 2023 - Model predictive control for formation reconfiguration exploiting quasi-periodic tori in the cislunar environment。
