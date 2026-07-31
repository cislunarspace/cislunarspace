---
title: 过程噪声（Process noise）
description: 在轨道滤波估计中，因姿态机动耦合不完美、排气等随机扰动引起的加速度不确定性，以协方差矩阵形式纳入卡尔曼滤波的状态预测方程。
keywords: 过程噪声, Process noise, 导航, 定位, 测控
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 过程噪声（Process noise）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 过程噪声详解 | 术语定义
  description: 在轨道滤波估计中，因姿态机动耦合不完美、排气等随机扰动引起的加速度不确定性，以协方差矩阵形式纳入卡尔曼滤波的状态预测方程。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 过程噪声详解 | 术语定义
  description: 在轨道滤波估计中，因姿态机动耦合不完美、排气等随机扰动引起的加速度不确定性，以协方差矩阵形式纳入卡尔曼滤波的状态预测方程。
  image: /logo.png
permalink: /glossary/navigation/process-noise/
---

# 过程噪声（Process noise）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

在轨道滤波估计中，因姿态机动耦合不完美、排气等随机扰动引起的加速度不确定性，以协方差矩阵形式纳入卡尔曼滤波的状态预测方程。

## 应用价值

过程噪声为地月空间航天器提供自主定位能力，通过处理传感器量测数据实现对目标或自身的精确状态估计，是实现交会对接和轨道保持的关键技术。
在实际导航系统中，过程噪声直接影响定位精度和收敛速度，需要根据任务需求选择合适的算法参数和滤波策略。
在实际任务中，需要结合数值仿真和解析方法对过程噪声进行分析验证，确保设计方案满足任务约束和性能指标。

## 相关概念

- [简化运动学法定轨（Simplified Kinematic Orbit Determination）](/glossary/navigation/simplified-kinematic-orbit-determination/)
- [延迟量测融合（Delayed Measurement Fusion）](/glossary/navigation/delayed-measurement-fusion/)
- [近程导航（Proximity Navigation）](/glossary/navigation/proximity-navigation/)
- [速度增益制导（Velocity-to-be-Gained Guidance）](/glossary/navigation/velocity-to-be-gained-guidance/)

## 参考文献

- Biswas & Hablani, 2015, Section I
