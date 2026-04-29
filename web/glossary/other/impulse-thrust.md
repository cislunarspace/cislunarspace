---
title: 脉冲推力（Impulse Thrust）
description: 详细解析脉冲推力的定义、与连续推力的区别、在轨道保持控制中的应用
keywords: 脉冲推力, Impulse Thrust, 轨道保持, 化学推进, 速度增量, 地月空间
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 脉冲推力（Impulse Thrust）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 脉冲推力详解 | 轨道控制基本推进方式
  description: 详细解析脉冲推力的定义、与连续推力的区别、在轨道保持控制中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 脉冲推力详解 | 轨道控制基本推进方式
  description: 详细解析脉冲推力的定义、与连续推力的区别、在轨道保持控制中的应用
  image: /logo.png
permalink: /glossary/other/impulse-thrust/
---

# 脉冲推力

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

脉冲推力（Impulse Thrust）是一种理想化的推力模型，假设在极短时间内施加速度增量（$\Delta v$），使航天器速度发生瞬时变化而位置不变。脉冲推力主要采取化学推进方式。

## 核心要素

### 基本概念
脉冲推力模型假设速度增量 $\Delta v$ 在瞬时完成施加，航天器位置不变而速度发生阶跃变化。这一理想化模型简化了轨道机动的分析和设计，是轨道力学中 Lambert 问题和轨道转移理论的基础假设。

### 技术特征
脉冲推力的核心参数为速度增量 $\Delta v$，其大小由 Tsiolkovsky 火箭方程决定：$\Delta v = I_{sp} g_0 \ln(m_0/m_f)$。脉冲推力主要用于化学推进系统，推力作用时间远小于轨道周期，典型量级为秒级。

### 实现方法
在轨道保持控制中，脉冲推力通过靶点法等闭环策略实现：在预设机动点测量轨道状态偏差，计算所需 $\Delta v$，然后在该点执行短时点火。控制频率通常为一个轨道周期一次或数次。

## 与连续推力的对比

| 特征 | 脉冲推力 | 连续推力 |
|:---|:---|:---|
| 推力时间 | 极短（瞬时） | 持续 |
| 推进方式 | 化学推进 | 电推进、太阳光压 |
| 控制方式 | 闭环控制 | 开环控制 |
| 燃料消耗 | 较低 | 较高 |
| 轨道确定 | 与轨道确定耦合 | 与轨道确定解耦 |

## 在轨道保持中的应用

脉冲推力轨道保持是一个闭环过程，其燃料消耗通常低于连续推力方法。在 DRO 轨道保持控制中，常用的方法是靶点法，通过在预设的机动节点施加脉冲推力来维持轨道。

## 应用价值
脉冲推力模型在地月空间轨道保持和轨道转移设计中广泛应用。在 DRO 轨道保持中，脉冲推力与靶点法结合可实现低燃料消耗的闭环控制。相比连续推力方案，脉冲推力策略的燃料消耗通常更低，且与轨道确定过程解耦，便于工程实现和误差分析。

## 相关概念

- [轨道保持](/glossary/orbits/orbit-keeping/)
- [靶点法](/glossary/dynamics/targeting-method/)
- [太阳辐射压](/glossary/dynamics/solar-radiation-pressure/)

## 参考文献

- 陈昱桔. 面向地月空间态势感知的DRO轨道设计与控制研究[D]. 2024.
