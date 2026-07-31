---
title: 内模原理（Internal Model Principle）
description: 输出调节理论的基本原理：控制器内部必须包含外系统（即参考信号和干扰信号的生成器）的模型，才能实现对参考信号的渐近跟踪和对干扰的渐近抑制。这是调节控制器设计的理论基础，也是选择外系统结构的依据。
keywords: 内模原理, Internal Model Principle, IMP, 动力学, 控制, 优化
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 内模原理（Internal Model Principle）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 内模原理（Internal Model Principle）详解 | 术语定义
  description: 输出调节理论的基本原理：控制器内部必须包含外系统（即参考信号和干扰信号的生成器）的模型，才能实现对参考信号的渐近跟踪和对干扰的渐近抑制。这是调节控制器设计的理论基础，也是选择外系统结构的依据。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 内模原理（Internal Model Principle）详解 | 术语定义
  description: 输出调节理论的基本原理：控制器内部必须包含外系统（即参考信号和干扰信号的生成器）的模型，才能实现对参考信号的渐近跟踪和对干扰的渐近抑制。这是调节控制器设计的理论基础，也是选择外系统结构的依据。
  image: /logo.png
permalink: /glossary/dynamics/internal-model-principle/
---

# 内模原理（Internal Model Principle）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

输出调节理论的基本原理：控制器内部必须包含外系统（即参考信号和干扰信号的生成器）的模型，才能实现对参考信号的渐近跟踪和对干扰的渐近抑制。这是调节控制器设计的理论基础，也是选择外系统结构的依据。

## 应用价值

该控制方法在轨道保持、姿态控制和交会对接中广泛应用。通过求解反馈增益矩阵，可以实现对航天器状态的实时调节，保证轨道机动的精度和稳定性。

## 相关概念

- [雅可比积分（Jacobi Integral）](/glossary/dynamics/jacobi-integral/)
- [科氏定理（Coriolis Theorem）](/glossary/dynamics/coriolis-theorem/)
- [速度函数（Velocity Function）](/glossary/dynamics/velocity-function/)

## 参考文献

- Francis & Wonham 1976
- Wie - 2008 - Space vehicle dynamics and control
