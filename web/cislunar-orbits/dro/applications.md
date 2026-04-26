---
title: DRO 工程应用
description: 远距离逆行轨道在应急返回、中继通信、编队飞行等场景的工程应用与ΔV预算分析。
keywords: DRO应用, 应急返回, 中继通信, 编队飞行, CAPSTONE, Artemis
author: 天疆说
date: 2026-04-26
lastUpdated: 2026-04-26
permalink: /cislunar-orbits/dro/applications/
---

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文编辑来源：[CislunarSpace](https://cislunarspace.cn)
>
> 来源：https://cislunarspace.cn

# DRO 工程应用

## 应急返回轨道

DRO 的一个独特应用是作为**应急返回轨道**（Contingency Return Orbit）。在地月空间任务中，若航天器出现故障需要紧急返回地球，DRO 提供了一条低 ΔV 的返回走廊。

从 L1 DRO 到再入大气层的典型 ΔV 预算约为 400-600 m/s，低于从 NRHO 返回所需的 600-900 m/s。这是因为 DRO 本身距离地球较近（相对于 L1 NRHO），且其轨道几何使得返回转移更为直接。

## 中继与通信

DRO 对某些特定任务具有中继通信优势：
- **大视场覆盖**：DRO 的高轨道位置使其能够同时看到较大范围的地球和月球区域
- **持续可见性**：对于某些特定几何配置，DRO 可提供对极地区域的持续可见性
- **低干扰环境**：相比 LEO，DRO 受到地球阴影的影响较小

然而，DRO 对月球背面的覆盖不如 L2 NRHO，这限制了其作为月球背面中继的应用。

## 编队与星座

多航天器协同是 DRO 的另一个应用方向。在 DRO 上运行的多个航天器可以：
- 利用 DRO 的固有稳定性减少编队维持所需的 ΔV
- 实现编队飞行任务（如合成孔径雷达、引力波探测等）
- 形成"星座"结构，提高覆盖范围或冗余度

典型的编队维持 ΔV 预算约为 5-10 m/s/年，显著低于 NRHO 编队的 20-40 m/s/年。

## 典型任务案例

### CAPSTONE

NASA 的 **CAPSTONE**（Cislunar Autonomous Positioning System Technology Operations and Navigation Experiment）是首个专门验证地月 DRO 的任务，于 2022 年发射。CAPSTONE 运行在 L1 DRO 上，用于验证：
- DRO 轨道的长期稳定性
- 自主导航技术
- 与月球勘测轨道器（LRO）的通信

CAPSTONE 的成功验证了 DRO 作为地月空间任务运行轨道的可行性。

### Artemis 计划中的 DRO

在 Artemis 计划中，DRO 被考虑作为备用运行轨道方案。虽然 NASA 最终选择 NRHO 作为 Gateway 的运行轨道，但 DRO 在以下方面具有优势：
- 更低的维持 ΔV
- 更高的固有稳定性
- 更简单的轨道设计

## 各应用场景 ΔV 预算对比

| 应用场景 | 从 LEO 出发 ΔV | 轨道维持 ΔV/年 |
|----------|-----------------|----------------|
| L1 DRO | ~3.2 km/s | 5-10 m/s |
| L2 DRO | ~3.3 km/s | 8-15 m/s |
| L1 NRHO | ~3.1 km/s | 30-50 m/s |
| L2 NRHO | ~3.1 km/s | 40-80 m/s |

## 仿真实验

可在 [卫星轨道仿真实验室](/satellite-simulation/) 中设置 L1/L2 DRO 条件，观察轨道形态并设计与地球/月球的转移轨道。
