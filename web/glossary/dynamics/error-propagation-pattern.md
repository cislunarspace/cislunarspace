---
title: 误差传播规律（Error Propagation Pattern）
description: 初始状态误差随预报时间增长而在轨道状态中扩散和放大的规律。共线平动点轨道的误差传播与近地卫星有根本区别：近地卫星误差主要沿延迹方向线性增长，平动点轨道误差沿状态转移矩阵的不稳定方向指数增长。
keywords: 误差传播规律, Error Propagation Pattern, 轨道设计, 最优控制, 动力学建模, 脉冲机动
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 误差传播规律（Error Propagation Pattern）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 误差传播规律详解 | 术语定义
  description: 初始状态误差随预报时间增长而在轨道状态中扩散和放大的规律。共线平动点轨道的误差传播与近地卫星有根本区别：近地卫星误差主要沿延迹方向线性增长，平动点轨道误差沿状态转移矩阵的不稳定方向指数增长。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 误差传播规律详解 | 术语定义
  description: 初始状态误差随预报时间增长而在轨道状态中扩散和放大的规律。共线平动点轨道的误差传播与近地卫星有根本区别：近地卫星误差主要沿延迹方向线性增长，平动点轨道误差沿状态转移矩阵的不稳定方向指数增长。
  image: /logo.png
permalink: /glossary/dynamics/error-propagation-pattern/
---

# 误差传播规律（Error Propagation Pattern）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

初始状态误差随预报时间增长而在轨道状态中扩散和放大的规律。共线平动点轨道的误差传播与近地卫星有根本区别：近地卫星误差主要沿延迹方向线性增长，平动点轨道误差沿状态转移矩阵的不稳定方向指数增长。

## 应用价值

在误差传播规律的设计与分析中，可用于优化转移方案，减少燃料消耗 用于评估导航系统的精度上限，指导滤波器设计 用于描述误差传播和灵敏度分析。

## 相关概念

- [对偶控制变换（Adjoint-Control Transformation）](/glossary/dynamics/adjoint-control-transformation/)
- [贝叶斯压缩感知（Bayesian Compressive Sensing）](/glossary/dynamics/bayesian-compressive-sensing/)
- [Lyapunov轨道（Lyapunov Orbit）](/glossary/orbits/lyapunov-orbit/)
- [状态转移矩阵（State Transition Matrix）](/glossary/dynamics/state-transition-matrix/)

## 参考文献

- 邓辉 等 - 2017 - 地月系共线平动点探测器的星上轨道预报问题
