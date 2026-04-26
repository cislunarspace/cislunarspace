---
title: Gateway 工程案例
description: NASA月球门户（Gateway）任务的NRHO轨道选择依据、国际合作模式与地月往返设计。
keywords: Gateway, Artemis, 月球门户, NRHO应用, 国际合作
author: 天疆说
date: 2026-04-26
lastUpdated: 2026-04-26
permalink: /cislunar-orbits/nrho/gateway-cases/
---

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文编辑来源：[CislunarSpace](https://cislunarspace.cn)
>
> 来源：https://cislunarspace.cn

# Gateway 工程案例

## 月球门户（Gateway）概述

NASA 的**月球门户**（Lunar Gateway）是 Artemis 计划的核心基础设施，是一个计划在地月空间运行的小型空间站。与国际空间站（ISS）不同，Gateway 并非常驻轨道，而是运行在 L1 NRHO 上，周期性地访问月球表面并支持深空任务。

Gateway 选择 NRHO 作为其运行轨道，主要基于以下考量：
1. **轨道稳定性**：NRHO 在 CR3BP 模型中的准周期性减少维持所需推进剂
2. **月面可达性**：从 NRHO 到月球两极的转移 ΔV 约为 200-400 m/s，优于 LEO
3. **通信覆盖**：NRHO 对月球背面（尤其南极）有较好的通信可见性
4. **深空中转**：NRHO 可作为地月往返与深空任务的中间站

Gateway 的目标 NRHO 参数：$A_x \approx 3100$ km，周期约 6.5 天，位于 L1 点附近。

## 国际合作模式

Gateway 是迄今为止规模最大的多边航天合作项目之一，各参与方承担不同舱段的研制与运营：

| 参与方 | 舱段 | 功能 |
|--------|------|------|
| NASA（美国） | PPE（动力与推进）、HALO（居住与后勤） | 能源、推进、生活保障 |
| ESA（欧洲） | ESPRIT（欧洲加油模块） | 推进剂补加、通信增强 |
| JAXA（日本） | I-HAB（国际居住舱） | 人员居住、科学实验 |
| CSA（加拿大） | robotic arm (Canadarm3) | 舱外机器人操作 |

各舱段均设计为可在 Gateway NRHO 上独立或协同运行，体现了模块化、多国合作的设计思想。

## 地月转移设计

从地球到 Gateway NRHO 的转移通常分为两个阶段：
1. **地月转移轨道（TLI）**：从 LEO 或直接发射进入地月转移轨道
2. **NRHO 插入**：在接近 L1 点时进行轨道机动，将航天器插入 NRHO

典型的 TLI 能量预算约为 $\Delta V \approx 3.1-3.3$ km/s（相对于 LEO），到达 L1 影响球后的 NRHO 插入机动约为 200-400 m/s。

## 替代方案对比

在 Gateway 规划阶段，也曾考虑过 DRO 作为替代运行轨道。相比之下：

| 特性 | NRHO | DRO |
|------|------|-----|
| 月面可达性 | 较好（200-400 m/s 到两极） | 较差 |
| 维持 ΔV | 30-80 m/s/年 | 5-20 m/s/年 |
| 地球通信 | 好 | 较好 |
| 月球背面覆盖 | 中等 | 较差 |
| 工程成熟度 | 较低（Gateway 是首个大规模应用） | 较高（CAPSTONE 已验证） |

最终 NASA 选择 NRHO 作为 Gateway 的运行轨道，主要是考虑到其对月球表面（尤其是南极 landing zone）的可达性优势。

## 仿真实验

可在 [卫星轨道仿真实验室](/satellite-simulation/) 中设置 Gateway 典型 NRHO 参数，观察其轨道形态并设计与月面的转移轨道。
