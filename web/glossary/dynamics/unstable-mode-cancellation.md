---
title: 不稳定模态消去（Unstable Mode Cancellation）
description: 一种平动点轨道保持策略。通过在不稳定方向施加脉冲速度增量，抵消轨道误差中的不稳定分量。该方法依赖 Floquet 模态分析从状态转移矩阵中提取不稳定方向，再沿该方向施加机动。ARTEMIS 任务未采用此方法，原因是该任务没有预先生成的参考轨道用于计算 Floquet 模态，且月球偏心率和太阳引力使模态计算对扰动敏感。
keywords: 不稳定模态消去, Unstable Mode Cancellation, 轨道动力学, 控制理论, 数值仿真
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 不稳定模态消去（Unstable Mode Cancellation）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 不稳定模态消去详解 | 术语定义
  description: 一种平动点轨道保持策略。通过在不稳定方向施加脉冲速度增量，抵消轨道误差中的不稳定分量。该方法依赖 Floquet 模态分析从状态转移矩阵中提取不稳定方向，再沿该方向施加机动。ARTEMIS 任务未采用此方法，原因是该任务没有预先生成的参考轨道用于计算 Floquet 模态，且月球偏心率和太阳引力使模态计算对扰动敏感。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 不稳定模态消去详解 | 术语定义
  description: 一种平动点轨道保持策略。通过在不稳定方向施加脉冲速度增量，抵消轨道误差中的不稳定分量。该方法依赖 Floquet 模态分析从状态转移矩阵中提取不稳定方向，再沿该方向施加机动。ARTEMIS 任务未采用此方法，原因是该任务没有预先生成的参考轨道用于计算 Floquet 模态，且月球偏心率和太阳引力使模态计算对扰动敏感。
  image: /logo.png
permalink: /glossary/dynamics/unstable-mode-cancellation/
---

# 不稳定模态消去（Unstable Mode Cancellation）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种平动点轨道保持策略。通过在不稳定方向施加脉冲速度增量，抵消轨道误差中的不稳定分量。该方法依赖 Floquet 模态分析从状态转移矩阵中提取不稳定方向，再沿该方向施加机动。ARTEMIS 任务未采用此方法，原因是该任务没有预先生成的参考轨道用于计算 Floquet 模态，且月球偏心率和太阳引力使模态计算对扰动敏感。

## 应用价值

不稳定模态消去涉及地月空间航天器的运动特性分析和控制问题。在实际任务设计中，利用该方法可以分析轨道稳定性、计算控制策略，或评估摄动因素对轨道的影响，为任务安全性和可靠性提供保障。

## 相关概念

- [遭遇区域（Encounter Region）](/glossary/dynamics/encounter-region/)
- [相对论效应修正（Relativistic Correction）](/glossary/dynamics/relativistic-correction/)
- [直接飞越转移（Direct Fly-By Transfer, DFBT）](/glossary/dynamics/direct-fly-by-transfer-dfbt/)
- [安全转移编队（Safe Transfer Formation）](/glossary/dynamics/safe-transfer-formation/)

## 参考文献

- Folta et al. 2010
