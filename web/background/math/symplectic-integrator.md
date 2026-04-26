---
title: 辛积分器 (Symplectic Integrator)
description: 辛积分器是一类保持哈密顿系统相空间几何结构（辛形式）的数值积分方法，长期积分中能保持系统的能量及其他守恒量不发生系统性漂移。
keywords: 辛积分器, Symplectic Integrator, 哈密顿系统, 保辛积分, 能量守恒, 天体力学数值方法
author: 天疆说
date: 2026-04-26
lastUpdated: 2026-04-26
permalink: /background/math/symplectic-integrator/
---

# 辛积分器

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

辛积分器（Symplectic Integrator）是一类特殊的数值积分方法，其核心特性是保持哈密顿系统相空间的几何结构——辛形式（Symplectic Form）。对于天体力学中的保守系统（哈密顿系统），辛积分器能够在长期积分中保持能量等守恒量不发生系统性漂移。

## 原理

### 哈密顿系统

哈密顿系统的运动方程可写为：

$$\dot{\mathbf{q}} = \frac{\partial H}{\partial \mathbf{p}}, \quad \dot{\mathbf{p}} = -\frac{\partial H}{\partial \mathbf{q}}$$

其中 $H(\mathbf{q}, \mathbf{p})$ 为哈密尔顿量，$\mathbf{q}$ 为广义坐标，$\mathbf{p}$ 为广义动量。

### 辛几何

哈密顿系统的相空间流是**辛流**，即保持辛 2-形式 $d\mathbf{q} \wedge d\mathbf{p}$ 不变。普通数值积分方法（如标准 Runge-Kutta 方法）不保持辛结构，导致长期积分中能量系统性地漂移。

### 辛欧拉法（Symplectic Euler）

最简单的一阶辛积分器：

$$\mathbf{p}_{n+1} = \mathbf{p}_n + \Delta t \cdot \frac{\partial H}{\partial \mathbf{q}}(\mathbf{q}_n, \mathbf{p}_{n+1})$$
$$\mathbf{q}_{n+1} = \mathbf{q}_n + \Delta t \cdot \frac{\partial H}{\partial \mathbf{p}}(\mathbf{q}_n, \mathbf{p}_{n+1})$$

### Störmer-Verlet 方法

二阶辛积分器，也称为 leapfrog 方法：

$$\mathbf{p}_{n+1/2} = \mathbf{p}_n + \frac{\Delta t}{2} \cdot \frac{\partial H}{\partial \mathbf{q}}(\mathbf{q}_n)$$
$$\mathbf{q}_{n+1} = \mathbf{q}_n + \frac{\Delta t}{2} \cdot \left( \frac{\partial H}{\partial \mathbf{p}}(\mathbf{q}_n) + \frac{\partial H}{\partial \mathbf{p}}(\mathbf{q}_{n+1}) \right)$$
$$\mathbf{p}_{n+1} = \mathbf{p}_{n+1/2} + \frac{\Delta t}{2} \cdot \frac{\partial H}{\partial \mathbf{q}}(\mathbf{q}_{n+1})$$

### 分步法（Splitting Methods）

将哈密顿量分解为可分离部分 $H = T(\mathbf{p}) + V(\mathbf{q})$，分别积分动能和势能：

$$\mathbf{p} \leftarrow e^{\Delta t \cdot \nabla_{\mathbf{p}} T} \mathbf{p} \quad \text{(游步)}$$
$$\mathbf{q} \leftarrow e^{\Delta t \cdot \nabla_{\mathbf{q}} V} \mathbf{q} \quad \text{(推步)}$$

典型实现：Spring 积分器（Störmer-Verlet 的物理诠释）

## 在地月空间中的应用

- **长期轨道演化模拟**：行星际探测器轨道长期预报需要 10^5~10^8 圈积分，辛积分器保证能量不漂移，结果可靠
- **多体问题积分**：限制性三体问题的长期积分，辛积分器比普通 RK 方法表现更优
- **太阳系嵌套三体问题**：木星、土星等大行星的长期轨道演化研究
- **周期轨道计算**：辛积分器可用于搜索周期轨道（通过相图分析），是 CR3BP 周期轨道研究的重要工具

## 与 Runge-Kutta 方法的对比

| 特性 | 辛积分器 | 标准 Runge-Kutta |
|:---|:---|:---|
| 能量守恒 | 长期保持 | 系统性漂移 |
| 相空间结构 | 保持辛形式 | 不保持 |
| 精度 | 同阶数精度相当 | 同阶数精度相当 |
| 计算量 | 相当 | 相当 |
| 适用场景 | 长期积分、可分离哈密顿系统 | 短期积分、非保守系统 |

## 相关概念

- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)
- [星历模型（Ephemeris Model）](/glossary/dynamics/ephemeris-model/)
- [打靶法（Shooting Method）](./shooting-method/)

## 参考文献

- Hairer E, Lubich C, Wanner G. Geometric numerical integration[M]. Springer, 2006.
- Sanz-Serna J M, Calvo M P. Numerical Hamiltonian problems[M]. Chapman & Hall, 1994.
