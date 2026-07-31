---
title: 输出反馈线性化（Output Feedback Linearization）
description: 仅对系统输出（而非全部状态）进行反馈线性化的控制方法，适用于只需控制输出量而非全部状态的场景。
keywords: 输出反馈线性化, Output Feedback Linearization, OFL, 反馈线性化, 非线性控制, 输出控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 输出反馈线性化（Output Feedback Linearization）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 输出反馈线性化详解 | 术语定义
  description: 仅对系统输出（而非全部状态）进行反馈线性化的控制方法，适用于只需控制输出量而非全部状态的场景。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 输出反馈线性化详解 | 术语定义
  description: 仅对系统输出（而非全部状态）进行反馈线性化的控制方法，适用于只需控制输出量而非全部状态的场景。
  image: /logo.png
permalink: /glossary/dynamics/output-feedback-linearization/
---

# 输出反馈线性化（Output Feedback Linearization）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

仅对系统输出（而非全部状态）进行反馈线性化的控制方法，适用于只需控制输出量而非全部状态的场景。

## 应用价值

在许多航天控制问题中，我们真正关心的往往只是某些输出量，而非全部状态变量。例如在卫星对地指向控制中，需要控制的是天线指向角度而非全部姿态参数。输出反馈线性化通过只对输出进行线性化处理，大幅简化了控制器的设计复杂度，同时避免了全状态反馈可能带来的噪声放大问题。在地月空间探测器的导航与控制系统中，当传感器只提供部分状态测量时，输出反馈线性化是一种实用的控制策略。该方法结合观测器设计，还可以在状态不可直接测量的情况下实现稳定的输出跟踪控制。

## 相关概念

- [反馈线性化（Feedback Linearization）](/glossary/dynamics/feedback-linearization/)
- [状态观测器（State Observer）](/glossary/dynamics/state-observer/)
- [姿态控制（Attitude Control）](/glossary/dynamics/attitude-control/)
- [非线性控制（Nonlinear Control）](/glossary/dynamics/nonlinear-control/)

## 参考文献

- Marchand和Howell-2005
