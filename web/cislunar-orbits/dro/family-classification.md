---
title: DRO 轨道族分类
description: 远距离逆行轨道的L1/L2分类、周期振幅特性、同源分支关系与南北对称性。
keywords: DRO分类, L1 DRO, L2 DRO, 南北对称, 同源分支, Lyapunov轨道
author: 天疆说
date: 2026-04-26
lastUpdated: 2026-04-26
permalink: /cislunar-orbits/dro/family-classification/
---

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文编辑来源：[CislunarSpace](https://cislunarspace.cn)
>
> 来源：https://cislunarspace.cn

# DRO 轨道族分类

## L1 DRO vs L2 DRO

DRO 轨道族按其所围绕的平动点可分为两类：

**L1 DRO**：轨道中心位于 L1 点附近，在旋转坐标系中的 x 坐标约为 $x_{L1} \approx 0.836$（无量纲）。L1 DRO 的轨道半径通常较小，距离地月质心约 0.5-0.8 倍地月距离。

**L2 DRO**：轨道中心位于 L2 点附近，x 坐标约为 $x_{L2} \approx 1.166$。L2 DRO 的轨道半径通常较大，可达 0.8-2.0 倍地月距离。

| 特性 | L1 DRO | L2 DRO |
|------|--------|--------|
| 平动点位置（无量纲 x） | $x \approx 0.836$ | $x \approx 1.166$ |
| 轨道半径范围 | 0.5-0.8 倍地月距离 | 0.8-2.0 倍地月距离 |
| 典型周期 | 8-15 天 | 12-25 天 |
| 地球通信延迟（单向） | ~1.0 s | ~1.5-2.0 s |
| 月球背面覆盖 | 较差 | 较差 |

## 周期与振幅

DRO 的周期与雅可比常数 $C_J$ 存在一一对应关系。典型的 DRO 参数：

| 参数 | L1 DRO | L2 DRO |
|------|--------|--------|
| 周期范围 | 8-15 天 | 12-25 天 |
| 半长轴 $A_x$ | 20,000-50,000 km | 50,000-100,000 km |
| 振幅 $A_z$ | 5,000-20,000 km | 10,000-40,000 km |
| 雅可比常数 $C_J$ | 3.03-3.08 | 3.00-3.06 |

周期与 $C_J$ 的关系可近似表示为 $T \propto \sqrt{C_J - C_J^{crit}}$，其中 $C_J^{crit} \approx 3.0$ 为 CR3BP 中 DRO 族存在的临界值。

## 同源分支图

DRO 与 L1/L2 Lyapunov 周期轨道之间存在丰富的**同源分支**（Bifurcation）关系。具体而言：

- 当 $C_J$ 从低值逐渐升高时，DRO 轨道会逐渐"收缩"，最终与 L1/L2 Lyapunov 轨道在分叉点合并
- 反之，当 $C_J$ 从高值降低时，Lyapunov 轨道会通过分叉转变为 DRO

这一分支关系可通过 Floquet 乘数的变化来识别：当 Floquet 乘数从实数穿过单位圆（$|\lambda| = 1$）时，即发生分叉。

在分支图上，L1 DRO ↔ L1 Lyapunov ↔ L2 Lyapunov ↔ L2 DRO 形成了一条连续的能量演化链。

## 南北对称性

CR3BP 的旋转坐标系具有关于 $x$-$y$ 平面的反射对称性（$z \to -z$ 不改变动力学方程）。这一对称性导致 DRO 轨道族分为**北族**（Northern）和**南族**（Southern），互为镜像。

对于给定的 L1/L2 DRO，其南北族具有相同的动力学特性（周期、$C_J$、Floquet 乘数），但轨道在空间的朝向不同。任务设计时可根据光照条件（太阳角度）和通信几何选择北族或南族。

## 轨道族图示

![DRO轨道示意图](/glossary/Figures/DRO/质心旋转坐标系及DRO轨道示意图.png)

上图展示了在地月旋转坐标系中的 DRO 轨道形态，清晰显示了其逆行特征（相对旋转坐标系的反向运动）。

## 仿真实验

可在 [卫星轨道仿真实验室](/satellite-simulation/) 中设置不同 $C_J$ 值的 L1/L2 DRO 初始条件，观察轨道族随参数的演化。
