---
title: 弹道捕获轨道（Ballistic Capture Orbit）
description: 详细解析弹道捕获轨道的定义、弱稳定边界理论、无动力捕获机制及其在月球探测任务中的应用
keywords: 弹道捕获轨道, Ballistic Capture Orbit, 弱稳定边界, 无动力捕获, 低能量转移, Hiten, GRAIL, 轨道设计
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 弹道捕获轨道（Ballistic Capture Orbit）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 弹道捕获轨道（Ballistic Capture Orbit）详解 | 低能量无动力捕获
  description: 详细解析弹道捕获轨道的定义、弱稳定边界理论、无动力捕获机制及其在月球探测任务中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 弹道捕获轨道（Ballistic Capture Orbit）详解 | 低能量无动力捕获
  description: 详细解析弹道捕获轨道的定义、弱稳定边界理论、无动力捕获机制及其在月球探测任务中的应用
  image: /logo.png
permalink: /glossary/orbits/ballistic-capture/
---

# 弹道捕获轨道（Ballistic Capture Orbit）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

弹道捕获轨道（Ballistic Capture Orbit）是**利用弱稳定边界理论实现的低能量无动力捕获轨道**。当转移过程中探测器相对地球的远地点距离远大于月球轨道半径时，可利用太阳扰动力到达月球附近，无需施加捕获机动即可被月球临时捕获。相比霍曼转移可节省约 15% 速度增量。日本 Hiten 卫星是首个成功应用弹道捕获的任务，NASA 的 GRAIL 也采用了此方式。

## 核心要素

### 弱稳定边界理论

弹道捕获的理论基础是 Belbruno 提出的弱稳定边界（Weak Stability Boundary, WSB）理论：

- **WSB 定义**：在限制性三体问题中，存在一个薄层区域，该区域内的天体在足够长的时间后将自然地从一个天体的引力域转移到另一个天体
- **太阳扰动作用**：当探测器远离地球（远地点大于月球轨道半径）时，太阳的引力扰动成为主导因素，可引导探测器滑入月球引力影响范围
- **自然捕获**：探测器进入月球引力主导区域后，无需施加制动脉冲即可被月球临时捕获

### 弹道捕获的轨道特征

弹道捕获轨道具有以下动力学特征：

- **转移时间较长**：相比直接转移，弹道捕获通常需要更长的转移时间
- **远地点设计**：转移轨道的远地点需足够大，使太阳扰动力能够有效改变轨道根数
- **近月点自由**：捕获后的近月点高度取决于转移轨道的几何参数
- **临时捕获**：弹道捕获形成的绕月轨道通常是临时的，需要后续机动维持或进一步调整

### 与霍曼转移的比较

弹道捕获相对于传统霍曼转移具有显著优势：

- **速度增量节省**：弹道捕获可节省约 15% 的总速度增量 $\Delta V$
- **无需捕获脉冲**：传统转移需在近月点施加制动脉冲进入绕月轨道，弹道捕获可省去此机动
- **推进剂节省**：$\Delta V$ 的节省直接转化为推进剂的节省，降低发射质量或增加有效载荷
- **转移时间代价**：弹道捕获的转移时间通常比霍曼转移长数天

### 成功应用案例

弹道捕获已在多次实际任务中得到验证：

- **Hiten（1991）**：日本 ISAS 发射的 Hiten 卫星是首个成功应用弹道捕获的任务，Belbruno 利用 WSB 理论设计了拯救轨道
- **GRAIL（2011）**：NASA 的重力恢复与内部实验室任务采用弹道捕获方式进入月球轨道
- **SMART-1**：ESA 的月球探测器也采用了低能量转移策略

## 应用价值

弹道捕获轨道在月球探测中具有重要的工程应用价值：

- **低成本月球探测**：$\Delta V$ 节省降低了任务对运载能力的要求
- **小卫星和立方体月球任务**：弹道捕获使小型探测器的月球任务成为可能
- **货运任务优化**：对于不要求快速到达的货运任务，弹道捕获可大幅降低运输成本
- **多目标任务**：节省的推进剂可用于增加科学载荷或延长任务寿命

## 相关概念
- [弱稳定边界（Weak Stability Boundary）](/glossary/other/weak-stability-boundary/)
- [月球引力辅助（Lunar Gravity Assist）](/glossary/other/lunar-gravity-assist/)
- [低能量转移轨道（Low-Energy Transfer Orbit）](/glossary/orbits/low-energy-transfer/)
- [转移轨道（Transfer Orbit）](/glossary/orbits/transfer-orbit/)

## 参考文献
- Belbruno E A. Capture Dynamics and Chaotic Motions in Celestial Mechanics[M]. Princeton University Press, 2004.
- Belbruno E, Miller J. Sun-perturbed Earth-to-Moon transfers with ballistic capture[J]. Journal of Guidance, Control, and Dynamics, 1993, 16(4): 770-775.
- Campagnola S, Boutonnet A, Schoenmaekers J, et al. Tisserand-leveraging transfers[J]. Journal of Guidance, Control, and Dynamics, 2014.
