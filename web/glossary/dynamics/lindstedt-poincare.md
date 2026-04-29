---
title: Lindstedt-Poincare法（Lindstedt-Poincare Method）
description: 详细解析Lindstedt-Poincare法的原理、在周期轨道解析解求解中的应用、以及与多步打靶法的关系
keywords: Lindstedt-Poincare法, Lindstedt, Poincaré, 周期轨道, 解析解, 摄动理论, 非线性振动
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Lindstedt-Poincare法
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: Lindstedt-Poincare法详解 | 周期轨道解析解
  description: 详细解析Lindstedt-Poincare法的原理、在周期轨道解析解求解中的应用、以及与多步打靶法的关系
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Lindstedt-Poincare法详解 | 周期轨道解析解
  description: 详细解析Lindstedt-Poincare法的原理、在周期轨道解析解求解中的应用、以及与多步打靶法的关系
  image: /logo.png
permalink: /glossary/dynamics/lindstedt-poincare/
---

# Lindstedt-Poincare法（Lindstedt-Poincare Method）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文参考：钱霙婧(2014)《地月空间拟周期轨道上航天器自主导航与轨道保持研究》
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

Lindstedt-Poincare法是一种求解非线性振动系统周期解的摄动分析方法，由 Lindstedt（1883）和 Poincare（1892）独立提出。该方法通过引入尺度变换（stretched time）消除长期项，得到周期解的一致有效展开式。

在平动点轨道研究中，Lindstedt-Poincare法用于推导 Halo 轨道、Lissajous 轨道和 Lyapunov 轨道的解析近似解，为数值计算提供高质量的初始猜测。

## 方法原理

### 传统摄动法的困难

对于非线性振动方程：

$$\ddot{x} + \omega_0^2 x + \epsilon f(x, \dot{x}) = 0$$

传统摄动法假设解的形式为：

$$x(t) = x_0(t) + \epsilon x_1(t) + \epsilon^2 x_2(t) + \cdots$$

代入方程后，会出现**长期项**（secular terms），即随时间线性增长的项，破坏了周期解的假设。

### Lindstedt-Poincare法的核心思想

Lindstedt-Poincare法通过**时间尺度变换**消除长期项：

$$\tau = \omega t$$

其中 $\omega$ 是待定的依赖于振幅的频率。将方程改写为关于 $\tau$ 的形式，通过选择合适的 $\omega$ 展开式，消除长期项。

### 算法步骤

1. **尺度变换**：令 $\tau = \omega t$，将时间变量替换为 $\tau$
2. **频率展开**：将频率展开为 $\omega = \omega_0 + \epsilon \omega_1 + \epsilon^2 \omega_2 + \cdots$
3. **解展开**：将解展开为 $x = x_0 + \epsilon x_1 + \epsilon^2 x_2 + \cdots$
4. **逐阶求解**：按 $\epsilon$ 的阶次逐阶求解，每次选择合适的 $\omega_i$ 消除长期项

## 在平动点轨道研究中的应用

### Halo 轨道的解析解

Farquhar 和 Kamel（1973）使用 Lindstedt-Poincare 法推导了地月 L2 点附近 Halo 轨道的三阶近似解和四阶近似解。

### Lyapunov 轨道的解析解

Richardson（1980）推导了平动点 Lyapunov 轨道的解析解，该解被广泛用于 Halo 轨道和 Lissajous 轨道的初始猜测。

### 解的精度

Lindstedt-Poincare 法得到的解析解精度有限，通常作为数值计算的初始猜测：

| 阶数 | 精度 | 适用场景 |
|:---|:---|:---|
| 一阶 | ~10⁻³ | 定性分析 |
| 二阶 | ~10⁻⁵ | 初始猜测 |
| 三阶 | ~10⁻⁷ | 高精度初始猜测 |
| 四阶 | ~10⁻⁹ | 精细初始猜测 |

## 与多步打靶法的关系

Lindstedt-Poincare 法和多步打靶法是周期轨道求解的两个层次：

| 方法 | 类型 | 精度 | 计算效率 |
|:---|:---|:---|:---|
| **Lindstedt-Poincare** | 解析法 | 中等 | 高（闭式解） |
| **多步打靶法** | 数值法 | 高 | 较低（需迭代） |

典型的工作流程：
1. 使用 Lindstedt-Poincare 法得到解析解作为初始猜测
2. 使用多步打靶法进行数值精化

## 局限性

1. **收敛性**：对于大幅值轨道，高阶项可能发散
2. **适用范围**：主要适用于弱非线性系统
3. **计算复杂**：高阶展开式的推导繁琐

## 相关概念

- [多步打靶法（Multiple Shooting）](/glossary/dynamics/shooting-method/)
- [平动点（Libration Point）](/glossary/dynamics/libration-point/)
- [Halo轨道](/glossary/orbits/halo-orbit/)
- [Lissajous轨道](/glossary/orbits/lissajous-orbit/)
- [Lyapunov轨道](/glossary/orbits/lyapunov-orbit/)

## 参考文献

- Lindstedt A. Uber die Integration einer für die Storungstheorie wichtigen Differentialgleichung[J]. Astronomische Nachrichten, 1883.
- Farquhar R W, Kamel A A. Quasi-periodic orbits about the translunar libration point[J]. Celestial Mechanics, 1973.
- Richardson D L. A halo orbit solution[J]. Celestial Mechanics, 1980.