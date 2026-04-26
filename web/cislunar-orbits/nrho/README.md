---
title: NRHO（近直线晕轨道）
description: NRHO（近直线晕轨道）概览：定义、动力学特性、轨道族分类与工程应用。
keywords: NRHO, 近直线晕轨道, L1 NRHO, L2 NRHO, halo orbit, 限制性三体
author: 天疆说
date: 2026-04-26
lastUpdated: 2026-04-26
permalink: /cislunar-orbits/nrho/
---

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文地址：[https://cislunarspace.cn](https://cislunarspace.cn)

# NRHO（近直线晕轨道）

## 定义与物理背景

NRHO（Near-Rectilinear Halo Orbit，近直线晕轨道）是限制性三体问题（CR3BP）中一类特殊的周期轨道，存在于地月系统的 L1 和 L2 平动点附近。其名称中的"近直线"（Near-Rectilinear）源于轨道在会合坐标系中呈现的近直线几何形状——航天器在 L1 点附近沿一条近似直线往返运动，振幅比 $A_z/A_x$ 较大，轨道面几乎垂直于地月连线。

晕轨道（Halo Orbit）与 NRHO 有亲缘关系，但两者并不完全相同。晕轨道是对 L1/L2 点附近周期或准周期轨道的统称，强调其三维空间中的"晕"状形态；NRHO 则更侧重于轨道的近直线几何特征，通常指代振幅较大、倾角较高的那一类晕轨道。在工程语境中，"NRHO" 已成为 Gateway 任务所选择的那类特殊轨道的专有名称。

## 动力学特性

NRHO 的动力学由地月 CR3BP 的雅可比常数 $C_J$ 约束。在 $C_J \approx 3$ 的临界值附近，轨道呈现准周期性：航天器在 L1/L2 点附近振荡，周期约为 6.5 至 8 地球天。

L1 NRHO 与 L2 NRHO 的稳定方向不同——L1 点的 NRHO 在某些方向上具有局部稳定流形，有利于从地球方向的低能量转移进入；L2 点的 NRHO 则更适合月球背面的通信中继与观测任务。

## 轨道族分类

NRHO 可按平动点（L1/L2）和振幅（南北族）分为四族：
- L1 北族 NRHO（L1 Northern）和 L1 南族 NRHO（L1 Southern）
- L2 北族 NRHO（L2 Northern）和 L2 南族 NRHO（L2 Southern）

振幅比 $A_z/A_x$ 是区分晕轨道与普通 Lyapunov 轨道的重要参数：$A_z/A_x > 1$ 时通常称为晕轨道或 NRHO。

## 工程应用

NRHO 的主要工程价值在于其相对月球的特殊几何位置：
- **月球门户（Gateway）**：NASA Artemis 计划选择 L1 NRHO 作为 Gateway 的轨道，兼顾地月往返与月面 접근
- **中继与观测**：L2 NRHO 可为月球背面（如嫦娥四号着陆区）提供持续通信覆盖
- **燃料效率**：从 NRHO 到月面的转移 ΔV 预算约为 200-400 m/s，优于从 LEO 直接下降

## 仿真实验

可在 [卫星轨道仿真实验室](/satellite-simulation/) 中交互式探索 NRHO 的轨道形态与动力学特性。

## 相关概念

- [限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)
- [远距离逆行轨道（DRO）](/glossary/orbits/dro/)
- [地月空间轨道族总览](/cislunar-orbits/)
