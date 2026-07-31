---
title: 概率约束模型预测控制（Chance-Constrained Model Predictive Control, CC-MPC）
description: 一种鲁棒模型预测控制方法。核心思路是将状态约束（如视距约束）的满足从确定性要求放松为概率性要求：允许约束以预设概率 p 被满足，而非要求所有扰动下都满足。通过引入卡方分布将概率约束转化为确定性不等式，再嵌入二次规划求解。与管式 MPC 和最坏情况方法并列为三类主流鲁棒 MPC 策略，优点是计算负担可控、可兼顾安全性与燃
keywords: 概率约束模型预测控制, Chance-Constrained Model Predictive Control, CC-MPC, CC-MPC, dynamics
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 概率约束模型预测控制（Chance-Constrained Model Predictive Control, CC-MPC）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 概率约束模型预测控制详解 | 术语定义
  description: 一种鲁棒模型预测控制方法。核心思路是将状态约束（如视距约束）的满足从确定性要求放松为概率性要求：允许约束以预设概率 p 被满足，而非要求所有扰动下都满足。通过引入卡方分布将概率约束转化为确定性不等式，再嵌入二次规划求解。与管式 MPC 和最坏情况方法并列为三类主流鲁棒 MPC 策略，优点是计算负担可控、可兼顾安全性与燃
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 概率约束模型预测控制详解 | 术语定义
  description: 一种鲁棒模型预测控制方法。核心思路是将状态约束（如视距约束）的满足从确定性要求放松为概率性要求：允许约束以预设概率 p 被满足，而非要求所有扰动下都满足。通过引入卡方分布将概率约束转化为确定性不等式，再嵌入二次规划求解。与管式 MPC 和最坏情况方法并列为三类主流鲁棒 MPC 策略，优点是计算负担可控、可兼顾安全性与燃
  image: /logo.png
permalink: /glossary/dynamics/cc-mpc/
---

# 概率约束模型预测控制（Chance-Constrained Model Predictive Control, CC-MPC）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种鲁棒模型预测控制方法。核心思路是将状态约束（如视距约束）的满足从确定性要求放松为概率性要求：允许约束以预设概率 p 被满足，而非要求所有扰动下都满足。通过引入卡方分布将概率约束转化为确定性不等式，再嵌入二次规划求解。与管式 MPC 和最坏情况方法并列为三类主流鲁棒 MPC 策略，优点是计算负担可控、可兼顾安全性与燃料经济性。

## 应用价值

概率约束模型预测控制方法在地月空间轨道保持和转移控制中具有重要应用，能够实现航天器的精确导航与轨道控制，支持月球轨道器的长期运行任务。

## 相关概念

- [模型预测控制（Model Predictive Control, MPC）](/glossary/dynamics/mpc/)

## 参考文献

- Sanchez et al. 2020。
