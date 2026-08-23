---
title: 重力梯度矩阵（Gravity Gradient Matrix）
description: 引力加速度对位置的偏导数矩阵，又称引力梯度张量，是轨道摄动线性化、状态转移矩阵、初值向量方程和相对运动分析中的基本工具。
keywords: 重力梯度矩阵, Gravity Gradient Matrix, 引力梯度张量, 雅可比矩阵, 状态转移矩阵, 轨道摄动, 线性化, 初值向量
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 重力梯度矩阵（Gravity Gradient Matrix）
  desc: 引力加速度对位置的偏导数矩阵，轨道线性化分析的基本工具。
  image: /logo.png
og:
  title: 重力梯度矩阵（Gravity Gradient Matrix）详解 | 术语定义
  description: 引力加速度对位置的偏导数矩阵，又称引力梯度张量，是轨道摄动线性化、状态转移矩阵、初值向量方程和相对运动分析中的基本工具。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 重力梯度矩阵（Gravity Gradient Matrix）详解 | 术语定义
  description: 引力加速度对位置的偏导数矩阵，又称引力梯度张量，是轨道摄动线性化、状态转移矩阵、初值向量方程和相对运动分析中的基本工具。
  image: /logo.png
permalink: /glossary/fundamentals/gravity-gradient-matrix/
---

# 重力梯度矩阵（Gravity Gradient Matrix）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

重力梯度矩阵 $\mathbf{G}(\mathbf{r})$ 是引力加速度 $\mathbf{g}(\mathbf{r})$ 对位置矢量 $\mathbf{r}$ 的雅可比矩阵：

$$\mathbf{G}(\mathbf{r}) = \frac{\partial \mathbf{g}}{\partial \mathbf{r}} = \nabla \otimes \nabla U(\mathbf{r})$$

其中 $U(\mathbf{r})$ 为引力位。因为引力位是标量势函数，其 Hessian 矩阵 $\nabla^2 U$ 是对称的，因此 $\mathbf{G}$ 是 $3 \times 3$ 对称矩阵（Canuto 2018）。

重力梯度矩阵描述引力场的空间变化率：对中心引力场 $\mathbf{g} = -\mu \, \mathbf{r}/r^3$，直接求导可得

$$\mathbf{G}_{\text{point}} = \frac{\mu}{r^3} \left( 3\,\hat{\mathbf{r}}\,\hat{\mathbf{r}}^{\!T} - \mathbf{I} \right)$$

其中 $\hat{\mathbf{r}} = \mathbf{r}/r$，$\mathbf{I}$ 为单位矩阵。其迹为零，即 $\text{tr}(\mathbf{G}) = 0$，这是 $\nabla \cdot \mathbf{g} = 0$（外部无质量源）在线性化层面的体现。

## 在线性化动力学中的作用

轨道运动的状态方程一般写作

$$\dot{\mathbf{x}} = \begin{bmatrix} \mathbf{v} \\ \mathbf{g}(\mathbf{r}) + \mathbf{a}_{p}(\mathbf{r}, \mathbf{v}, t) \end{bmatrix}$$

对其作小扰动线性化，令 $\delta\mathbf{x} = \mathbf{x} - \mathbf{x}_0$，得到变分方程

$$\delta\dot{\mathbf{x}} = \mathbf{A}(t)\,\delta\mathbf{x}, \qquad \mathbf{A}(t) = \begin{bmatrix} \mathbf{0} & \mathbf{I} \\ \mathbf{G}(\mathbf{r}_0(t)) + \displaystyle\frac{\partial \mathbf{a}_p}{\partial \mathbf{r}} & \displaystyle\frac{\partial \mathbf{a}_p}{\partial \mathbf{v}} \end{bmatrix}$$

重力梯度矩阵 $\mathbf{G}$ 构成了状态转移矩阵微分方程 $\dot{\boldsymbol{\Phi}} = \mathbf{A}\,\boldsymbol{\Phi}$ 中位置-位置子块的来源（Prussing 2010）。

## 主要应用

### 1. 状态转移矩阵与误差传播

轨道状态相对于初值的敏感性由状态转移矩阵 $\boldsymbol{\Phi}(t, t_0)$ 刻画，其微分方程中的 $\mathbf{A}(t)$ 含有 $\mathbf{G}$。高保真轨道预报中，$\mathbf{G}$ 必须按当前引力位模型（含高阶球谐项）精确计算，否则协方差传播会出现系统性偏差。

### 2. 初值向量方程

在优化控制与最小燃料转移中，初值向量（primer vector）的协态方程可写为

$$\ddot{\boldsymbol{\lambda}} = -\mathbf{G}(\mathbf{r})\,\boldsymbol{\lambda}$$

其中 $\mathbf{G}$ 为重力梯度矩阵。该矩阵的符号与数值直接决定协态解的振荡/增长行为（Prussing 2010）。

### 3. 相对运动与轨道保持

在地月空间近距离编队、交会对接或轨道保持中，相对运动方程的线性化系数依赖于 $\mathbf{G}$。例如 Hill/Clohessy-Wiltshire 方程中的 $n^2$ 项即由近圆中心引力场的重力梯度贡献。

## 非球形引力场中的计算

当引力场包含高阶球谐项时，$\mathbf{G}$ 的每个元素都是 $U$ 的二阶偏导数：

$$G_{ij} = \frac{\partial^2 U}{\partial r_i \partial r_j}$$

工程实现中通常先计算 $U$ 对球坐标 $(r, \phi, \lambda)$ 的偏导，再通过链式法则转到笛卡尔坐标系（Vallado 2022, Eq. 8-24~8-27）。由于 $U$ 满足拉普拉斯方程 $\nabla^2 U = 0$（外部无质量源），有

$$\text{tr}(\mathbf{G}) = G_{xx} + G_{yy} + G_{zz} = 0$$

这一不变性常被用作数值求导正确性的自检条件。

## 相关概念

- [引力位（Gravitational Potential）](/glossary/fundamentals/gravitational-potential/)

- [引力场模型（Gravity Field Model）](/glossary/fundamentals/gravity-field-model/)

- [状态转移矩阵（State Transition Matrix）](/glossary/fundamentals/stm/)

- [初值向量（Primer Vector）](/glossary/dynamics/primer-vector/)

- [J2 摄动](/glossary/dynamics/non-spherical-gravity-perturbation/)

## 参考文献

- Vallado, D. A., 2022, *Fundamentals of Astrodynamics and Applications*, 5th ed., Microcosm Press. Ch. 8.6.1, Eq. 8-24~8-27：球谐引力位的梯度与 Hessian 计算。

- Prussing, J. E. & Conway, B. A., 1993, *Orbital Mechanics*, Oxford University Press. Ch. 2：重力梯度矩阵在状态转移与初值向量方程中的应用。

- Prussing, J. E., 2010, Primer vector theory and applications, *Advances in the Astronautical Sciences*, 136: 829–852. 初值向量方程中的重力梯度项。

- Canuto, E., 2018, *Spacecraft Dynamics and Control*, Cambridge University Press. Sec. 4.2.6：重力梯度矩阵与重力梯度力矩。

- Battin, R. H., 1999, *An Introduction to the Mathematics and Methods of Astrodynamics*, AIAA. Ch. 10：状态转移矩阵的线性化推导。
