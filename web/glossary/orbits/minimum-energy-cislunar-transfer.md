---
title: 最小能量地月转移（Minimum-Energy Cislunar Transfer）
description: 充分利用地月平动点动力学结构与不变流形，以全局最小速度增量实现从近地停泊轨道至月球目标轨道的低能轨道转移方式。
keywords: 最小能量地月转移, Minimum-Energy Cislunar Transfer, 轨道设计, 弱稳定性边界, 不变流形
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 最小能量地月转移（Minimum-Energy Cislunar Transfer）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
permalink: /glossary/orbits/minimum-energy-cislunar-transfer/
---

# 最小能量地月转移（Minimum-Energy Cislunar Transfer）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

最小能量地月转移（Minimum-Energy Cislunar Transfer）是指在限制性三体问题或四体引力场模型中，利用拉格朗日平动点（L1/L2）的零速度面通道开口及不变流形管分支，以全局最小推进剂消耗（最小速度增量 $\Delta v$）实现航天器从地球低轨（LEO）或高偏心率停泊轨道向月球捕获轨道过渡的低能转移轨道设计方法。

## 物理机制与工程价值

传统霍曼转移与直接双曲线转移需要消耗极大的近月制动脉冲（通常大于 800 m/s），而最小能量转移通过多体动力学机制实现了能耗的显著突破：

1. 零速度面颈缩与流形输运：当航天器的雅可比能量常数达到平动点临界值时，希尔禁区在月球周围打开颈部通道。航天器进入平动点周期轨道的稳定流形，可顺沿自然多体引力流滑行并渐近逼近目标轨道，实现近乎零推力的自然弹道捕获；
2. 太阳潮汐与弱稳定边界（WSB）：在四体模型下，航天器可先飞越至地日弱稳定边界（离地约 150 万公里），借助太阳引力潮汐提升轨道角动量并降低相对于月球的进场双曲线能量，将环月捕获速度增量降至 150 m/s 甚至更低；
3. 运力最大化：最小能量转移极大地降低了深空发射对重型运载火箭推力和探测器燃料配比的严苛要求，广泛应用于 GRAIL、GENESIS、CAPSTONE 等无严苛飞行时间限制的月球与深空探测任务。

## 相关概念

- [有效飞行时间（Effective Time of Flight）](/glossary/orbits/effective-time-of-flight/)
- [借力转移（Gravity Assist / Swingby）](/glossary/orbits/gravity-assist-swingby/)
- [轨道链（Orbit Chain）](/glossary/orbits/orbit-chain/)
- [转移轨道族（Transfer Family）](/glossary/orbits/transfer-family/)

## 参考文献

- Xu, M., & Xu, S. J. On the construction of low-energy cislunar and trans-lunar transfers based on the libration points. Acta Mechanica Sinica, 2013, 29(4): 607-617.
- Belbruno, E., & Miller, J. Sun-perturbed Earth-to-Moon transfers with ballistic capture. Journal of Guidance, Control, and Dynamics, 1993, 16(4): 770-775.
