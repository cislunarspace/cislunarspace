---
title: 非线性调节（Nonlinear Regulation）
description: 非线性控制理论中解决输出调节问题的框架。核心思想是设计反馈控制律，使被控系统的输出渐近跟踪由外系统生成的参考信号，同时抑制已知结构的干扰。在平动点轨道保持中，外系统同时生成准Halo轨道参考轨迹和偏心率周期扰动，调节控制器通过求解Francis-Byrnes-Isidori方程实现对周期轨道的跟踪和扰动抑制。
keywords: 非线性调节, Nonlinear Regulation, 轨道, 动力学, 控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 非线性调节（Nonlinear Regulation）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 非线性调节详解 | 术语定义
  description: 非线性控制理论中解决输出调节问题的框架。核心思想是设计反馈控制律，使被控系统的输出渐近跟踪由外系统生成的参考信号，同时抑制已知结构的干扰。在平动点轨道保持中，外系统同时生成准Halo轨道参考轨迹和偏心率周期扰动，调节控制器通过求解Francis-Byrnes-Isidori方程实现对周期轨道的跟踪和扰动抑制。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 非线性调节详解 | 术语定义
  description: 非线性控制理论中解决输出调节问题的框架。核心思想是设计反馈控制律，使被控系统的输出渐近跟踪由外系统生成的参考信号，同时抑制已知结构的干扰。在平动点轨道保持中，外系统同时生成准Halo轨道参考轨迹和偏心率周期扰动，调节控制器通过求解Francis-Byrnes-Isidori方程实现对周期轨道的跟踪和扰动抑制。
  image: /logo.png
permalink: /glossary/dynamics/nonlinear-regulation/
---

# 非线性调节（Nonlinear Regulation）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

非线性控制理论中解决输出调节问题的框架。核心思想是设计反馈控制律，使被控系统的输出渐近跟踪由外系统生成的参考信号，同时抑制已知结构的干扰。在平动点轨道保持中，外系统同时生成准Halo轨道参考轨迹和偏心率周期扰动，调节控制器通过求解Francis-Byrnes-Isidori方程实现对周期轨道的跟踪和扰动抑制。

## 应用价值

该类轨道在地月空间任务中可用作通信中继和载人登月转移轨道。近最优反馈控制策略可显著降低多圈小推力转移的计算复杂度。该通信技术为地月空间链路设计提供理论依据和性能评估基础。

## 相关概念

- [保守系统（Conservative System）](/glossary/dynamics/conservative-system/)
- 空间流形动力学（Space Manifold Dynamics, SMD）
- [RSW坐标系（Radial-Transverse-Normal Frame, RSW Frame）](/glossary/dynamics/orbital-coordinate-frames/)

## 参考文献

- Di Giamberardino & Monaco 1996
- Elobaid et al. 2022
