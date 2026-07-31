---
title: 推力降级（Thrust Degradation）
description: 用于评估控制策略鲁棒性的测试方法，通过逐步降低确定性推力水平（如0%至35%），检验预训练策略在推进性能下降情况下的适应性。A2PPO策略在推力降低至32%时仍能成功完成转移任务。
keywords: 推力降级, Thrust Degradation, 轨道动力学, 多体问题, 摄动
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 推力降级（Thrust Degradation）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 推力降级详解 | 术语定义
  description: 用于评估控制策略鲁棒性的测试方法，通过逐步降低确定性推力水平（如0%至35%），检验预训练策略在推进性能下降情况下的适应性。A2PPO策略在推力降低至32%时仍能成功完成转移任务。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 推力降级详解 | 术语定义
  description: 用于评估控制策略鲁棒性的测试方法，通过逐步降低确定性推力水平（如0%至35%），检验预训练策略在推进性能下降情况下的适应性。A2PPO策略在推力降低至32%时仍能成功完成转移任务。
  image: /logo.png
permalink: /glossary/dynamics/thrust-degradation/
---

# 推力降级（Thrust Degradation）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

用于评估控制策略鲁棒性的测试方法，通过逐步降低确定性推力水平（如0%至35%），检验预训练策略在推进性能下降情况下的适应性。A2PPO策略在推力降低至32%时仍能成功完成转移任务。

## 应用价值

在低推力轨道优化中，该推进方式可通过长时间持续加速实现低能量转移，比高推力系统更具燃料经济性。

## 相关概念

- [燃耗最优（Minimum-Fuel / Fuel-Optimal）](/glossary/dynamics/minimum-fuel-fuel-optimal/)
- [月球飞越法（Lunar Fly-by Method）](/glossary/dynamics/lunar-fly-by-method/)
- [可达集（Reachability Set）](/glossary/dynamics/reachability-set/)
- [最大能量逃逸轨迹（Maximum-Energy Escape Trajectory）](/glossary/dynamics/maximum-energy-escape-trajectory/)

## 参考文献

- Ul Haq 等 - 2026 - Autonomous low-thrust trajectory optimization in cislunar space via attention-augmented reinforcement learning
