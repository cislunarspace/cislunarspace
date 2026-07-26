---
title: 正则化（Regularization）
description: 详细解析正则化方法的定义、数学原理、Kustaanheimo-Stiefel坐标变换、以及在近交点晕轨道数值计算中的应用
keywords: 正则化, Regularization, Kustaanheimo-Stiefel变换, KS变换, 近交点轨道, 奇点消除, 限制性三体问题, 晕轨道
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 正则化（Regularization）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 正则化方法详解 | 近交点轨道数值计算技术
  description: 详细解析正则化方法的定义、数学原理、Kustaanheimo-Stiefel坐标变换、以及在近交点晕轨道数值计算中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 正则化方法详解 | 近交点轨道数值计算技术
  description: 详细解析正则化方法的定义、数学原理、Kustaanheimo-Stiefel坐标变换、以及在近交点晕轨道数值计算中的应用
  image: /logo.png
permalink: /glossary/dynamics/regularization/
---

# 正则化（Regularization）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文编辑来源：Howell K C. Three-dimensional, periodic halo orbits in the restricted three-body problem[D]. Stanford University, 1983.
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

正则化（Regularization）是一类消除动力学方程奇异性数值计算技术。在限制性三体问题中，当航天器接近主天体时，标准方程中的引力项 $1/r^2$ 产生数值溢出。正则化通过**独立变量变换**（时间变换）和**坐标变换**（Kustaanheimo-Stiefel 变换）将奇点移除，使积分能够在近交点区域顺利进行。

在晕轨道数值计算中，正则化技术使研究者能够追踪接近月球的近直线轨道（Almost-Rectilinear Orbit），从而完成从平动点延伸至主天体的完整轨道族计算。

## 核心要素

### 时间变换

标准方程在 $r \to 0$ 时存在奇异性。首先对时间变量做变换：

$$\frac{dt}{d\tau} = r$$

其中 $r$ 为航天器到最近主天体的距离。变换后，独立变量由 $t$ 变为 $\tau$，积分步长能够自适应调整，在近交点附近自动加密。

### Kustaanheimo-Stiefel（KS）坐标变换

为进一步消除奇异性，引入四维 KS 坐标 $\mathbf{u} = (u_1, u_2, u_3, u_4)^T$。原三维位置向量 $\mathbf{R} = (x, y, z)^T$ 与 KS 坐标的关系为：

$$\mathbf{R} = L(\mathbf{u})\mathbf{u}$$

其中 $L(\mathbf{u})$ 为 $4 \times 4$ 变换矩阵：

$$L(\mathbf{u}) = \begin{pmatrix} u_1 & -u_2 & -u_3 & u_4 \\ u_2 & u_1 & -u_4 & -u_3 \\ u_3 & u_4 & u_1 & u_2 \\ u_4 & -u_3 & u_2 & -u_1 \end{pmatrix}$$

KS 变换的核心性质：$r = \mathbf{u} \cdot \mathbf{u}$，即四维向量的模平方等于原距离。

### 正则化运动方程

经过时间变换和 KS 坐标变换后，正则化运动方程为：

$$\mathbf{u}'' - \frac{h}{2}\mathbf{u} = L^T(\mathbf{u})BL(\mathbf{u})\mathbf{u}' + \frac{(\mathbf{u}\cdot\mathbf{u})}{2}L^T(\mathbf{u})\mathbf{F}$$

其中 $h$ 为修正后的角动量相关量：

$$h = \frac{1-\mu}{d} + \frac{1}{2}(x^{*2}+y^2) - \frac{C}{2}$$

该方程不包含 $1/r$ 奇点项，可在 $r \to 0$ 区域正常积分。

### 正则化的状态转移矩阵

正则化后，状态向量扩展为 8 维 $\mathbf{Y} = (u_1, u_2, u_3, u_4, u_1', u_2', u_3', u_4')^T$。对应的状态转移矩阵 $\Psi(\tau, 0)$ 为 $8 \times 8$ 矩阵，满足：

$$\frac{d}{d\tau}\Psi(\tau, 0) = A(\tau)\Psi(\tau, 0)$$

其中 $A(\tau)$ 包含正则化方程的雅可比信息。

## 计算流程

晕轨道的正则化计算流程如下：

1. **初始条件转换**：将原始初始条件 $\mathbf{X}_0 = (x_0, 0, z_0, 0, \dot{y}_0, 0)^T$ 转换为 KS 坐标初始条件 $\mathbf{Y}_0$
2. **选取 $u_4 = 0$**：由于引入第四维，$u_4$ 可任意选取
3. **积分正则化方程**：共 73 个方程（8 个正则化方程 + 1 个时间方程 + 64 个状态转移矩阵方程）
4. **检测 $xOz$ 平面穿越**：积分至 $|y| < 10^{-11}$ 定义为半周期 $T/2$
5. **周期条件修正**：利用 $\Psi$ 修正初始条件直至 $|\dot{x}|, |\dot{z}| < 10^{-8}$

## 在轨道族计算中的应用

### 近直线轨道的追踪

在 L3 轨道族（$\mu = 0.96$）的计算中，正则化技术使得从 L3 点延伸至主天体的完整轨道族得以完成。在普通方程中，当轨道接近月球时（近交点），数值积分因奇异性而失效；正则化后，积分可顺利完成。

### L1-L2 桥接轨道族

正则化技术同样用于计算 L1-L2 桥接轨道族（Bridge Family）。这些轨道在近月点附近极度拉伸呈近直线状，常规方程无法追踪。通过正则化，可以验证 Breakwell 和 Brown 的近似解析方法在近直线区域的准确性。

### 计算效率

正则化方程组包含 73 个方程（普通方程仅 42-43 个），每一步计算量更大。但由于在近交点区域可采用大得多的积分步长（可能相差 2-3 个数量级），总体效率反而更高。

## 相关概念

- [晕轨道（Halo Orbit）](/glossary/orbits/halo-orbit/)
- [圆型限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)
- [微分修正（Differential Correction）](/glossary/dynamics/differential-correction/)
- [单值矩阵（Monodromy Matrix）](/glossary/dynamics/monodromy-matrix/)
- [近直线晕轨道（NRHO）](/glossary/orbits/nrho/)

## 参考文献

- Howell K C. Three-dimensional, periodic halo orbits in the restricted three-body problem[D]. Stanford University, 1983.
- Bettis D G, Szebehely V. Numerical treatment of the regularization of the gravitational motion[J]. Celestial Mechanics, 1971.
- Kustaanheimo P, Stiefel E. Perturbation theory of Kepler motion based on spinor regularization[J]. Journal für die reine und angewandte Mathematik, 1965.
- Breakwell J V, Brown J V. An "almost rectilinear" halo orbit[J]. Celestial Mechanics, 1979.
