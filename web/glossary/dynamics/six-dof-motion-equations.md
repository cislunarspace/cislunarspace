---
title: 六自由度运动方程（Six-DOF Motion Equations）
description: 详细解析平流层飞艇六自由度运动方程的建立方法、牛顿-欧拉方程推导及数值求解
keywords: 六自由度运动方程, Six-DOF, Newton-Euler方程, 运动学, 动力学, 平流层飞艇, 小扰动线性化
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 六自由度运动方程（Six-DOF Motion Equations）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 六自由度运动方程（Six-DOF Motion Equations）详解 | 术语定义
  description: 详细解析平流层飞艇六自由度运动方程的建立方法、牛顿-欧拉方程推导及数值求解
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 六自由度运动方程（Six-DOF Motion Equations）详解 | 术语定义
  description: 详细解析平流层飞艇六自由度运动方程的建立方法、牛顿-欧拉方程推导及数值求解
  image: /logo.png
permalink: /glossary/dynamics/six-dof-motion-equations/
---

# 六自由度运动方程（Six-DOF Motion Equations）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

六自由度（Six Degree of Freedom, 6-DOF）运动方程描述飞行器在三维空间中的完整运动状态，包括三个线运动自由度（位移）和三个角运动自由度（姿态角）。平流层飞艇的 6-DOF 模型是进行控制器设计仿真的基础。

## 坐标系的建立

| 坐标系 | 原点 | 轴向 | 用途 |
| :--- | :--- | :--- | :--- |
| 地面坐标系 $(O_E)$ | 地面某点 | $E_N, E_E, E_D$ | 描述位置轨迹 |
| 机体坐标系 $(O_B)$ | 飞艇重心 | $B_x, B_y, B_z$ | 描述力和力矩 |
| 速度坐标系 $(O_A)$ | 飞艇重心 | $A_x, A_y, A_z$ | 气动力计算 |

## 运动学方程

### 位置变化率

$$\begin{bmatrix} \dot{x} \\ \dot{y} \\ \dot{z} \end{bmatrix} = \mathbf{R}_{EB} \begin{bmatrix} u \\ v \\ w \end{bmatrix}$$

其中 $\mathbf{R}_{EB}$ 为机体到地面的旋转矩阵。

### 姿态变化率

$$\begin{bmatrix} \dot{\phi} \\ \dot{\theta} \\ \dot{\psi} \end{bmatrix} = \begin{bmatrix} 1 & \sin\phi\tan\theta & \cos\phi\tan\theta \\ 0 & \cos\phi & -\sin\phi \\ 0 & \sin\phi\sec\theta & \cos\phi\sec\theta \end{bmatrix} \begin{bmatrix} p \\ q \\ r \end{bmatrix}$$

## 动力学方程

### 牛顿-欧拉方程

沿机体轴的力和力矩平衡：

$$m(\dot{u} + qw - rv - g\sin\theta) = X$$

$$m(\dot{v} + ru - pw + g\cos\theta\sin\phi) = Y$$

$$m(\dot{w} + pv - qu + g\cos\theta\cos\phi) = Z$$

### 力矩方程

$$I_x \dot{p} - (I_y - I_z)qr = L$$

$$I_y \dot{q} - (I_z - I_x)rp = M$$

$$I_z \dot{r} - (I_x - I_y)pq = N$$

## 平流层飞艇特殊性

### 浮力-重力耦合

静升力方程：

$$L_{static} = (\rho_{air} - \rho_{He}) V_{He} g$$

净浮力：

$$B = L_{static} - mg$$

### 附加质量

由于飞艇周围流体被加速，需要考虑附加质量 $M_a$：

$$M_a = \begin{bmatrix} m_{11} & 0 & 0 \\ 0 & m_{22} & 0 \\ 0 & 0 & m_{33} \end{bmatrix}$$

对于椭球旋成体：

$$m_{11} = \frac{1}{3}\rho V \frac{b^2}{a^2 + b^2}$$

## 数值求解

### 时域离散

采用四阶 Runge-Kutta 法：

$$x_{n+1} = x_n + \frac{\Delta t}{6}(k_1 + 2k_2 + 2k_3 + k_4)$$

### 配平计算

稳定飞行需要满足：

$$\sum F = 0, \quad \sum M = 0$$

求解配平状态（$\alpha, \beta, \delta$）通常使用 Newton 迭代法。

## 相关概念

- [Newton-Euler 方程（Newton-Euler Equations）](/glossary/dynamics/newton-euler-equations/)

## 参考文献

- Etkin B, Reid L D. Dynamics of Flight: Stability and Control[M]. Wiley, 2024.
- 王海峰. 平流层飞艇建模与控制[M]. 国防工业出版社, 2025.
