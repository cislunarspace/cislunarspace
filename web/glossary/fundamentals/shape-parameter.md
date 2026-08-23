---
title: 形状参数（Shape Parameter）
description: 形状基方法（shape-based method）中定义轨迹几何的一族参数，最著名的是指数正弦曲线（exponential sinusoid）的四个参数 $[k_0, k_1, k_2, \phi]$。在小推力 Lambert 问题中，出发速度已知时自由度降为单一形状参数 $k_2$，是多圈指数正弦 Lambert 问题的核心决策变量。
keywords: 形状参数, Shape Parameter, 指数正弦曲线, exponential sinusoid, 形状基方法, shape-based method, 小推力轨迹, 多圈 Lambert 问题, Petropoulos, Izzo
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 形状参数（Shape Parameter）
  desc: 指数正弦曲线的形状参数——多圈小推力 Lambert 问题的核心决策变量。
  image: /logo.png
og:
  title: 形状参数（Shape Parameter）详解 | 术语定义
  description: 形状基方法中定义轨迹几何的参数族。指数正弦曲线的四个参数 $[k_0, k_1, k_2, \phi]$ 定义了低推力轨迹的极径曲线；出发速度已知时，单参数 $k_2$ 成为多圈指数正弦 Lambert 问题的核心决策变量。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 形状参数详解 | 术语定义
  description: 指数正弦曲线的形状参数——多圈小推力 Lambert 问题的核心决策变量。
  image: /logo.png
permalink: /glossary/fundamentals/shape-parameter/
---

# 形状参数（Shape Parameter）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

在轨迹设计的**形状基方法**（shape-based method）中，形状参数是定义轨迹几何曲线的自由参数。不对应于特定的物理量，而是通过假设轨迹具有某种解析形状（如指数正弦曲线、多项式曲线等）来参数化航天器的运动路径；推力剖面、飞行时间和各段燃料消耗由形状参数通过逆动力学反推得到（Petropoulos 2002；Izzo 2006）。

最知名的形状参数体系是 Petropoulos (2002) 提出的**指数正弦曲线**（exponential sinusoid），由四个参数定义：

$$
r(\theta) = k_0 \exp\left[k_1 \sin(k_2\theta + \phi)\right]
$$

其中 $r$ 为极径，$\theta$ 为极角。四个参数的角色（Izzo 2006）：

- $k_0$：控制轨道总体尺寸（距离尺度），决定极大/极小极径。

- $k_1$：控制每个周期内极径振荡的幅度：$k_1$ 越大，轨迹在径向的螺旋波动越显著。

- $k_2$：控制极角频率，决定每个公转周期内轨迹绕行圈数。在 Petropoulos 的原公式中，$k_2$ 就是**形状参数**（shape parameter）的狭义含义。

- $\phi$：控制相位，即轨迹在 $\theta=0$ 时的初始相位角。

### 动力学可行性

假设航天器始终沿轨迹切线方向施加推力（tangential thrust），则推力剖面和极角时间历程均由上述四个参数唯一确定（Petropoulos 2002；Izzo 2006）：

$$
\frac{F}{m} = \frac{\mu}{r^2} \cdot a(\theta), \qquad \dot{\theta}^2 = \frac{\mu}{r^3} \cdot f(\theta; k_0, k_1, k_2, \phi)
$$

关键：轨迹物理可行（推力始终为正、轨迹不遭回折）当且仅当 $|k_1 k_2^2| < 1$（Izzo 2006）。

## 多圈指数正弦 Lambert 问题

在出发行星速度已知的条件下，四个参数退化为一个自由参数 $k_2$，即**形状参数**（shape parameter）。给定 $r_1$（出发位置）、$r_2$（目标位置）、$\psi$（转移极角）和 $N$（绕行圈数），所有可能连接两点的指数正弦曲线构成一个由出发点航迹角 $\gamma_1$ 参数化的单参数族 $\mathcal{S}_{k_2}[r_1, r_2, \psi, N]$（Izzo 2006）。

该族中满足动力学可性（$|k_1 k_2^2| < 1$）的轨迹，其飞行时间 $T$ 是 $\gamma_1$ 的单调函数，这对多圈指数正弦 Lambert 问题的适定性和单值性至关重要。Lambert 问题通过数值求积和二分法则（Regula Falsi）求解，给定 $k_2, N$ 和飞行时间即可找到唯一对应的指数正弦轨迹（Izzo 2006）。在行星际全局优化中，$k_2$ 是核心决策变量之一：例如日地到火星的 N=0 最优解对应 $k_2 \approx 0.928$，N=1 对应 $k_2 \approx 0.523$，N=2 对应 $k_2 \approx 0.236$（Izzo 2006 表 1）。

## 与小推力转移设计的关联

形状基方法的吸引力在于：它将通常需要间接法（庞特里亚金极大值原理 + 多点边值问题）求解的复杂最优控制问题，简化为对少数形状参数的搜索。缺点在形状参数数量有限（指数正弦线最多 4 个）时不可避免：所表达的轨迹仅是全部可行轨迹的一个子集（shape-restricted optimal 而非 globally optimal）。然而对初步设计阶段的方案筛选、全局优化算法的初值生成、以及大量轨迹方案的快速扫描而言，这是目前最实用的折中之一（Izzo 2006；Vasile et al. 2007）。

对于涉及**多项式变化的振幅和相位假设**：平动点附近的小推力转移中，可假设振幅和相位按多项式随时间变化（线性或更高阶），以此拟合螺旋转移特性，但这仅是对特定轨道族的一种启发式建模，其通用性不及指数正弦曲线的形状参数（Petropoulos 2002）。

## 相关概念

- [低能量转移（Low-Energy Transfer）](/glossary/orbits/low-energy-transfer/)

- [不变流形（Invariant Manifold）](/glossary/dynamics/invariant-manifold/)

- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)

- [牛顿-拉夫逊方法（Newton-Raphson Method）](/glossary/dynamics/newton-raphson-method/)

## 参考文献

- Petropoulos, 2002, Ph.D. dissertation, Purdue University（指数正弦曲线形状基方法的原始提出）

- Izzo, 2006, Lambert's problem for exponential sinusoids, JGCD（多圈指数正弦 Lambert 问题的系统化求解，形状参数 $k_2$ 的角色与最优值的确定）

- Vasile, Schütze et al., 2007（用更多自由参数的形状基方法扩展指数正弦方法，权衡曲线保真度与搜索维度）
