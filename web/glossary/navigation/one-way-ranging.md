---
title: 单程测距（One-Way Ranging）
description: 发射端与接收端分别独立计时的无线电测距方式。发射端在已知时刻发出信号，接收端在另一时刻收到信号，两者之差乘以光速即为距离测量值。测量结果包含几何距离、收发端钟差及传播介质延迟，需要通过建模分离各分量。不同于双程测距需要信号折返，单程测距适用于星间链路等无法实时回传的场景。
keywords: 单程测距, One-Way Ranging, 自主导航, 轨道确定, 星间测距
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 单程测距（One-Way Ranging）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 单程测距详解 | 术语定义
  description: 发射端与接收端分别独立计时的无线电测距方式。发射端在已知时刻发出信号，接收端在另一时刻收到信号，两者之差乘以光速即为距离测量值。测量结果包含几何距离、收发端钟差及传播介质延迟，需要通过建模分离各分量。不同于双程测距需要信号折返，单程测距适用于星间链路等无法实时回传的场景。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 单程测距详解 | 术语定义
  description: 发射端与接收端分别独立计时的无线电测距方式。发射端在已知时刻发出信号，接收端在另一时刻收到信号，两者之差乘以光速即为距离测量值。测量结果包含几何距离、收发端钟差及传播介质延迟，需要通过建模分离各分量。不同于双程测距需要信号折返，单程测距适用于星间链路等无法实时回传的场景。
  image: /logo.png
permalink: /glossary/navigation/one-way-ranging/
---

# 单程测距（One-Way Ranging）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

发射端与接收端分别独立计时的无线电测距方式。发射端在已知时刻发出信号，接收端在另一时刻收到信号，两者之差乘以光速即为距离测量值。测量结果包含几何距离、收发端钟差及传播介质延迟，需要通过建模分离各分量。不同于双程测距需要信号折返，单程测距适用于星间链路等无法实时回传的场景。

## 应用价值

精确的测量技术是轨道确定和状态估计的前提，星间测量技术的发展为地月空间导航提供了新的手段。

## 相关概念

- [联络导航（Liaison Navigation）](/glossary/navigation/liaison-navigation/)
- [秩亏（Deficient Rank）](/glossary/navigation/deficient-rank/)
- [多普勒测速（Doppler velocity measurement）](/glossary/navigation/doppler-velocity-measurement/)
- [天文测角量（Astronometric Angle Measurement）](/glossary/navigation/astronometric-angle-measurement/)

## 参考文献

- 曹建峰 等 - 2025 - 地月空间单程测量观测建模与算法实现
