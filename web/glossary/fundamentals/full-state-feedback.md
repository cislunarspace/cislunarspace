---
title: 全状态反馈（Full State Feedback）
description: 控制律使用系统所有状态变量作为输入的反馈方式。论文中 Halo 轨道误差动力学的状态为 6 维（位置 3 维 + 速度 3 维），全状态反馈意味着同时使用位置和速度信息设计控制律。论文指出当速度不可测时，可通过滤波算法估计速度，但本文仅研究全状态反馈的系统镇定，基于周期控制的滤波器设计另文研究。
keywords: 全状态反馈, Full State Feedback, , 基础理论, 轨道力学, 摄动
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 全状态反馈（Full State Feedback）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 全状态反馈详解 | 术语定义
  description: 控制律使用系统所有状态变量作为输入的反馈方式。论文中 Halo 轨道误差动力学的状态为 6 维（位置 3 维 + 速度 3 维），全状态反馈意味着同时使用位置和速度信息设计控制律。论文指出当速度不可测时，可通过滤波算法估计速度，但本文仅研究全状态反馈的系统镇定，基于周期控制的滤波器设计另文研究。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 全状态反馈详解 | 术语定义
  description: 控制律使用系统所有状态变量作为输入的反馈方式。论文中 Halo 轨道误差动力学的状态为 6 维（位置 3 维 + 速度 3 维），全状态反馈意味着同时使用位置和速度信息设计控制律。论文指出当速度不可测时，可通过滤波算法估计速度，但本文仅研究全状态反馈的系统镇定，基于周期控制的滤波器设计另文研究。
  image: /logo.png
permalink: /glossary/fundamentals/full-state-feedback/
---

# 全状态反馈（Full State Feedback）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文来源：[地月空间入门指南](https://cislunarspace.cn)

## 定义

控制律使用系统所有状态变量作为输入的反馈方式。论文中 Halo 轨道误差动力学的状态为 6 维（位置 3 维 + 速度 3 维），全状态反馈意味着同时使用位置和速度信息设计控制律。论文指出当速度不可测时，可通过滤波算法估计速度，但本文仅研究全状态反馈的系统镇定，基于周期控制的滤波器设计另文研究。

## 应用价值

全状态反馈利用所有状态变量构成反馈增益，是线性控制系统设计的经典方法，姿态控制设计师用它实现姿态稳定。

## 相关概念

- [微分修正法（Differential Correction Method）](/glossary/fundamentals/differential-correction-method/)
- [拉瓦尔喷管（Laval Nozzle）](/glossary/fundamentals/laval-nozzle/)
- [拉格朗日点（Lagrange Point）](/glossary/fundamentals/lagrange-point/)
- [轨道根数（Orbital Elements）](/glossary/fundamentals/orbital-elements/)

## 参考文献

- 徐明和徐世杰 - 2008 - Halo轨道维持的线性周期控制策略
