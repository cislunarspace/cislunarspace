---
title: Newton-Euler 方程（Newton-Euler Equations）
description: 详细解析Newton-Euler方程的基本原理、力与力矩的矢量表达及其在飞行器动力学建模中的应用
keywords: Newton-Euler方程, Newton-Euler Equations, 动力学, 力矩平衡, 角动量, 刚体动力学
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Newton-Euler 方程（Newton-Euler Equations）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: Newton-Euler 方程（Newton-Euler Equations）详解 | 术语定义
  description: 详细解析Newton-Euler方程的基本原理、力与力矩的矢量表达及其在飞行器动力学建模中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Newton-Euler 方程（Newton-Euler Equations）详解 | 术语定义
  description: 详细解析Newton-Euler方程的基本原理、力与力矩的矢量表达及其在飞行器动力学建模中的应用
  image: /logo.png
permalink: /glossary/dynamics/newton-euler-equations/
---

# Newton-Euler 方程（Newton-Euler Equations）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

Newton-Euler 方程是描述刚体平移运动（Newton 第二定律）和转动运动（欧拉方程）的完整动力学方程组。对于飞行器，方程描述了作用在飞行器上的外力与飞行器质心运动的关系，以及外力矩与姿态运动的关系。

## Newton 方程（平移运动）

### 基本形式

$$\vec{F} = m\vec{a}$$

分量形式（机体轴）：

$$F_x = m(\dot{u} + qw - rv - g\sin\theta)$$

$$F_y = m(\dot{v} + ru - pw + g\cos\theta\sin\phi)$$

$$F_z = m(\dot{w} + pv - qu + g\cos\theta\cos\phi)$$

### 力的来源

| 力 | 符号 | 典型表达式 |
| :--- | :--- | :--- |
| 重力 | $G$ | $mg$ |
| 推力 | $T$ | $T_{prop}$ |
| 气动力 | $A$ | $\frac{1}{2}\rho V^2 S C_L$ |
| 浮力 | $B$ | $(\rho_{air} - \rho_{He}) V_{He} g$ |

## Euler 方程（转动运动）

### 角动量

$$\vec{H} = \mathbf{I} \vec{\omega}$$

其中 $\mathbf{I}$ 为惯性张量：

$$\mathbf{I} = \begin{bmatrix} I_{xx} & -I_{xy} & -I_{xz} \\ -I_{yx} & I_{yy} & -I_{yz} \\ -I_{zx} & -I_{zy} & I_{zz} \end{bmatrix}$$

### 基本形式

$$\vec{M} = \frac{d\vec{H}}{dt} = \mathbf{I}\dot{\vec{\omega}} + \vec{\omega} \times (\mathbf{I}\vec{\omega})$$

分量形式：

$$L = I_{xx}\dot{p} - (I_{yy} - I_{zz})qr$$

$$M = I_{yy}\dot{q} - (I_{zz} - I_{xx})rp$$

$$N = I_{zz}\dot{r} - (I_{xx} - I_{yy})pq$$

## 平流层飞艇特点

### 惯性矩阵特殊性

由于飞艇体积大、重量轻，惯性矩阵特点：

| 参数 | 特点 |
| :--- | :--- |
| $I_{xx}$ | 较小（细长体） |
| $I_{yy} = I_{zz}$ | 较大 |
| $I_{xy} = I_{xz} = I_{yz}$ | 近似为零（对称性） |

### 附加惯性

流体附加质量影响显著：

$$\mathbf{I}_{total} = \mathbf{I}_{rigid} + \mathbf{I}_{added}$$

椭球体的附加惯性：

$$I_{a,11} = \frac{1}{3}\rho V \frac{b^2 c^2}{a^2 + b^2}$$

## 相关概念

- [六自由度运动方程（Six-DOF Motion Equations）](/glossary/dynamics/six-dof-motion-equations/)
- [六自由度运动方程（Six-DOF Motion Equations）](/glossary/dynamics/six-dof-motion-equations/)

## 参考文献

- Goldstein H, Poole C, Safko J. Classical Mechanics[M]. Addison-Wesley, 2023.
- Etkin B, Reid L D. Dynamics of Flight: Stability and Control[M]. Wiley, 2024.
