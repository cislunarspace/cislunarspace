---
title: 经济模型预测控制（Economic Model Predictive Control, Economic MPC）
description: 一种以系统运行的真实经济指标（如燃料消耗）为目标函数的模型预测控制。与传统MPC用二次型跟踪误差不同，经济MPC直接优化物理量。在轨道保持场景中，经济MPC的代价函数对应齐奥尔科夫斯基方程计算的推进剂质量，直接反映航天器的燃料消耗。
keywords: 经济模型预测控制, Economic Model Predictive Control, Economic MPC, 轨道动力学, 姿态控制, 最优控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 经济模型预测控制（Economic Model Predictive Control, Economic MPC）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 经济模型预测控制详解 | 术语定义
  description: 一种以系统运行的真实经济指标（如燃料消耗）为目标函数的模型预测控制。与传统MPC用二次型跟踪误差不同，经济MPC直接优化物理量。在轨道保持场景中，经济MPC的代价函数对应齐奥尔科夫斯基方程计算的推进剂质量，直接反映航天器的燃料消耗。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 经济模型预测控制详解 | 术语定义
  description: 一种以系统运行的真实经济指标（如燃料消耗）为目标函数的模型预测控制。与传统MPC用二次型跟踪误差不同，经济MPC直接优化物理量。在轨道保持场景中，经济MPC的代价函数对应齐奥尔科夫斯基方程计算的推进剂质量，直接反映航天器的燃料消耗。
  image: /logo.png
permalink: /glossary/dynamics/economic-model-predictive-control-economic-mpc/
---

# 经济模型预测控制（Economic Model Predictive Control, Economic MPC）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文来源：Shimane 等 - 2025 - Revolution-spaced output-feedback model predictive control for station keeping on near-rectilinear halo orbits
>
> 站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种以系统运行的真实经济指标（如燃料消耗）为目标函数的模型预测控制。与传统MPC用二次型跟踪误差不同，经济MPC直接优化物理量。在轨道保持场景中，经济MPC的代价函数对应齐奥尔科夫斯基方程计算的推进剂质量，直接反映航天器的燃料消耗。

## 应用价值

该术语在地月空间任务中具有重要应用价值。在轨道设计阶段，工程师利用相关理论进行轨迹优化；在导航与轨道确定中，用于提升测量精度；在姿态控制与轨道保持任务中，确保航天器稳定运行。具体应用中，可结合任务需求进行参数优化和算法适配，提高任务成功率和资源利用效率。

## 相关概念

- [特征指数（Characteristic Exponents）](/glossary/dynamics/characteristic-exponents/)
- [捕获对接段（Capture Docking Phase）](/glossary/navigation/capture-docking-phase/)
- [月球借力转移（Lunar Flyby Transfer）](/glossary/orbits/lunar-flyby-transfer/)

## 参考文献

- Shimane 等 - 2025 - Revolution-spaced output-feedback model predictive control for station keeping on near-rectilinear halo orbits
