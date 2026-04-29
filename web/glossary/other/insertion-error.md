---
title: 入轨误差（Insertion Error）
description: 详细解析入轨误差的来源、类型及其对轨道动力学的影响
keywords: 入轨误差, Insertion Error, 轨道精度, 误差传播, 轨道设计, 地月空间
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 入轨误差（Insertion Error）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 入轨误差详解 | 轨道任务关键误差源
  description: 详细解析入轨误差的来源、类型及其对轨道动力学的影响
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 入轨误差详解 | 轨道任务关键误差源
  description: 详细解析入轨误差的来源、类型及其对轨道动力学的影响
  image: /logo.png
permalink: /glossary/other/insertion-error/
---

# 入轨误差

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

入轨误差（Insertion Error）是指航天器在进入目标轨道时，实际轨道状态与设计轨道状态之间的偏差。入轨误差是轨道任务中最关键的误差源之一，直接影响后续轨道动力学演化和任务执行精度。

## 误差来源

| 误差类型 | 描述 |
|:---|:---|
| 速度误差 | 发动机推力偏差导致的速度大小和方向误差 |
| 位置误差 | 入轨点位置与设计位置的偏差 |
| 时间误差 | 入轨时刻与设计时刻的偏差 |

## 对 DRO 轨道的影响

在 DRO 轨道任务中，入轨误差的研究具有重要意义：

- **短期影响**：入轨误差会导致航天器偏离设计轨道，产生位置偏差
- **长期影响**：在不施加控制的情况下，入轨误差会随时间累积，导致轨道逐渐偏离目标
- **敏感性分析**：通过蒙特卡洛仿真分析入轨误差对轨道稳定性的影响，可为任务设计提供误差容限参考

## 相关概念

- [远距离逆行轨道（DRO）](/glossary/orbits/dro/)
- [轨道保持](/glossary/orbits/orbit-keeping/)
- [导航误差](/glossary/other/navigation-error/)
- [执行机构误差](/glossary/other/actuator-error/)

## 参考文献

- 陈昱桔. 面向地月空间态势感知的DRO轨道设计与控制研究[D]. 2024.
