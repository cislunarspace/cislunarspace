---
title: 停泊轨道（Parking Orbit）
description: 详细解析停泊轨道的定义、在地月转移任务中的作用、发射窗口等待机制及系统检查功能
keywords: 停泊轨道, Parking Orbit, LEO, 地月转移, 发射窗口, 系统检查, 近地轨道
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 停泊轨道（Parking Orbit）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 停泊轨道（Parking Orbit）详解 | 地月任务出发轨道
  description: 详细解析停泊轨道的定义、在地月转移任务中的作用、发射窗口等待机制及系统检查功能
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 停泊轨道（Parking Orbit）详解 | 地月任务出发轨道
  description: 详细解析停泊轨道的定义、在地月转移任务中的作用、发射窗口等待机制及系统检查功能
  image: /logo.png
permalink: /glossary/orbits/parking-orbit/
---

# 停泊轨道（Parking Orbit）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

停泊轨道（Parking Orbit）是航天器在执行主任务前**暂时停留的初始轨道**。在地月转移任务中，LEO 停泊轨道是航天器等待发射窗口、进行系统检查的常用轨道。停泊轨道通常为近地圆形轨道，高度在 200-500 km 之间。

## 核心要素

### 停泊轨道的功能

停泊轨道在航天任务中承担多重功能：

- **发射窗口等待**：地月转移需要精确的发射窗口（launch window），停泊轨道允许航天器在轨等待最佳转移时机，避免因地面发射延迟导致窗口错过
- **系统检查与校准**：在停泊轨道上可对航天器各子系统进行全面检查，包括姿态控制系统、推进系统、通信系统和有效载荷状态
- **轨道参数调整**：通过在停泊轨道上的机动，可微调转移轨道的出发点参数，提高入轨精度
- **编队与对接**：多航天器任务可在停泊轨道上完成编队组建或交会对接

### 停泊轨道的轨道力学特性

停泊轨道通常选择近地近圆轨道，其关键参数包括：

- **轨道高度 $h$**：通常 200-500 km，需兼顾大气阻力（低轨道衰减快）和辐射环境（高轨道穿越范艾伦带）
- **轨道倾角 $i$**：由发射场纬度决定，影响后续转移轨道的倾角变化量
- **偏心率 $e$**：通常接近 0（近圆），确保轨道稳定性

停泊轨道的周期 $T$ 为：

$$T = 2\pi\sqrt{\frac{(R_E + h)^3}{\mu_E}}$$

其中 $R_E$ 为地球半径，$\mu_E$ 为地球引力参数。对于 400 km 高度的停泊轨道，周期约为 92 分钟。

### 停泊轨道与 DRO 转移的衔接

魏赞等（2026）研究的从 LEO 出发经月球借力进入 DRO 的转移方案中，LEO 停泊轨道是整个转移的起点：

- 从停泊轨道出发，经第一次脉冲机动进入地月转移轨道
- 转移轨道经过月球借力，将航天器送入 DRO
- 停泊轨道的高度和倾角直接影响后续转移的 $\Delta V$ 需求

停泊轨道到转移轨道的速度增量 $\Delta V_1$ 为：

$$\Delta V_1 = |v_{\text{transfer}} - v_{\text{parking}}|$$

其中 $v_{\text{parking}}$ 为停泊轨道圆周速度，$v_{\text{transfer}}$ 为转移轨道在出发点的速度。

## 应用价值

停泊轨道在地月空间任务中具有基础性作用：

- **发射灵活性**：停泊轨道将发射窗口从严格的时刻约束放宽为可在轨等待的时段，大幅提高发射成功率
- **安全裕度**：在停泊轨道上可确认航天器状态正常后再执行高能量的地月转移，降低任务风险
- **阿波罗任务遗产**：阿波罗载人登月任务广泛使用停泊轨道，验证了该方案在载人深空任务中的可靠性
- **商业发射实践**：现代商业地月任务（如 SpaceX 的月球任务）同样采用停泊轨道方案

## 相关概念
- [转移轨道（Transfer Orbit）](/glossary/orbits/transfer-orbit/)
- [轨道入轨（Orbit Insertion）](/glossary/other/orbit-insertion/)
- [远距离逆行轨道（DRO）](/glossary/orbits/dro/)

## 参考文献
- 魏赞等. 地月远距离逆行轨道族月球借力转移入轨研究[J]. 2026.
- Vallado D A. Fundamentals of Astrodynamics and Applications[M]. 4th ed. 2013.
- Griffin M D, French J R. Space Vehicle Design[M]. 2nd ed. 2004.
