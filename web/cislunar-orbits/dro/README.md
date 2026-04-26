---
title: DRO（远距离逆行轨道）
description: DRO（远距离逆行轨道）概览：定义、动力学背景、与NRHO的对比及主要应用场景。
keywords: DRO, 远距离逆行轨道, Distant Retrograde Orbit, CR3BP, 地月空间
author: 天疆说
date: 2026-04-26
lastUpdated: 2026-04-26
permalink: /cislunar-orbits/dro/
---

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文编辑来源：[CislunarSpace](https://cislunarspace.cn)
>
> 来源：https://cislunarspace.cn

# DRO（远距离逆行轨道）

## 定义

DRO（Distant Retrograde Orbit，远距离逆行轨道）是限制性三体问题（CR3BP）中一类特殊的周期轨道，在地月旋转坐标系中呈现逆行特征——即航天器的轨道运动方向与地月连线旋转方向相反（$\dot{\theta} < 0$），但其轨道半径远大于 L1/L2 点的距离，在地月系中保持较大的动力学距离。

DRO 的"远距离"（Distant）是指其轨道半径通常在地月距离的 0.5-2 倍范围内，显著大于近直线晕轨道（NRHO）所紧邻的 L1/L2 点距离。

## 动力学背景

DRO 的动力学约束同样由 CR3BP 的雅可比常数 $C_J$ 决定：

$$C_J = 2 - v^2 + \frac{2(1-\mu)}{r_1} + \frac{2\mu}{r_2}$$

与 NRHO 不同，DRO 对应的 $C_J$ 值通常大于 3，处于 CR3BP 相空间中一个相对稳定的区域。逆行特性（与 Coriolis 效应的相互作用）使 DRO 在 CR3BP 模型中具有较高的自然稳定性。

在地月旋转坐标系中，DRO 的轨道形态呈近似椭圆形，周期通常在数天到数周之间，具体取决于轨道的半长轴和偏心率。

## 与 NRHO 的对比

| 特性 | DRO | NRHO |
|------|-----|------|
| 轨道距离 | 较大（0.5-2 倍地月距离） | 紧邻 L1/L2 点 |
| 逆行/顺行 | 逆行（$\dot{\theta} < 0$） | 近直线（混合特征） |
| 固有稳定性 | 较高 | 中等 |
| 维持 ΔV | 5-20 m/s/年 | 30-80 m/s/年 |
| 月面可达性 | 较差 | 较好 |
| 通信覆盖 | 一般 | 较好（L2 NRHO） |
| 工程验证 | CAPSTONE 已验证 | Gateway 首次应用 |

## 轨道族分类

DRO 同样可按平动点分为 L1 DRO 和 L2 DRO：
- **L1 DRO**：位于 L1 点内侧（朝向地球方向），轨道半径较小
- **L2 DRO**：位于 L2 点外侧（背离地球方向），轨道半径较大

此外，DRO 还存在南北对称的两族，分别位于地月旋转坐标系的北、南两侧。

## 应用场景

DRO 的主要工程应用包括：
1. **地月空间驻留**：作为深空任务的中间站，燃料效率高
2. **应急返回轨道**：从 DRO 到再入大气的 ΔV 走廊较低
3. **中继与通信**：对视场覆盖要求高的任务
4. **编队与星座**：多航天器协同运行

## 仿真实验

可在 [卫星轨道仿真实验室](/satellite-simulation/) 中交互式探索 DRO 的轨道形态，理解其在旋转坐标系中的逆行特征。

## 相关概念

- [限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)
- [NRHO（近直线晕轨道）](/cislunar-orbits/nrho/)
- [远距离逆行轨道（DRO）词条](/glossary/orbits/dro/)
