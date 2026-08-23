---
title: 运动方程与状态方程（Equation of Motion / State Equation）
description: 描述航天器运动的微分方程组。CR3BP 中是会合系下三个含科氏、离心项的二阶 ODE；改写为一阶系统即得状态方程 dx/dt = f(x,t)（线性形式 dx/dt = A(t)x + Bu），是现代控制理论的工作母机。覆盖自治/非自治、时变/时不变的区分。
keywords: 运动方程, 状态方程, EOM, 状态空间, 自治系统, 非自治系统, 时变系统, 科里奥利力, CR3BP, 地月动力学
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 运动方程与状态方程（Equation of Motion / State Equation）
  desc: CR3BP 会合系下的二阶运动方程，一阶状态空间形式，以及自治/时变概念。
  image: /logo.png
og:
  title: 运动方程与状态方程详解 | 术语定义
  description: 描述航天器运动的微分方程组。CR3BP 中是会合系下三个含科氏、离心项的二阶 ODE；改写为一阶系统即得状态方程，是现代控制理论的工作母机。覆盖自治/非自治、时变/时不变的区分。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 运动方程与状态方程详解 | 术语定义
  description: 描述航天器运动的微分方程组。CR3BP 中是会合系下三个含科氏、离心项的二阶 ODE；改写为一阶系统即得状态方程，是现代控制理论的工作母机。覆盖自治/非自治、时变/时变的区分。
  image: /logo.png
permalink: /glossary/fundamentals/eom/
---

# 运动方程与状态方程（Equation of Motion / State Equation）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

**运动方程**（equation of motion, EOM）是描述航天器位置在指定力学模型下随时间演化的微分方程组。在圆型限制性三体问题中，运动方程写在会合（旋转）坐标系下，是三个二阶常微分方程，右端项由两个主天体的引力与旋转系带来的科氏、离心项共同构成。把任何二阶方程组改写为一阶系统，就得到**状态方程**，这是现代控制理论处理动力学问题的标准形式。

## CR3BP 运动方程

会合系原点取在两主天体质心，x 轴沿两主天体连线（两主天体在此系下变为固定点），地月系角速度为 $\boldsymbol{\omega}_S$。在此系下，量纲形式的运动方程为（Szebehely 1967, §1.5；Vallado 2022, §12.3）：

$$
\ddot{\mathbf r}_S + 2\,\boldsymbol{\omega}_S \times \dot{\mathbf r}_S + \boldsymbol{\omega}_S \times (\boldsymbol{\omega}_S \times \mathbf r_S) = -\sum_{i=1,2} G m_i \frac{\mathbf r_S - \mathbf r_i}{\|\mathbf r_S - \mathbf r_i\|^3}.
$$

第二项是科氏加速度，第三项是离心加速度。无量纲化（参见 [无量纲化](/glossary/fundamentals/nondimensionalization/)）并引入有效势

$$
\Omega(x,y,z) = \tfrac{1}{2}(x^2 + y^2) + \frac{1-\mu}{r_1} + \frac{\mu}{r_2},
$$

运动方程写作紧凑的标准形式

$$
\ddot{x} - 2\dot{y} = \Omega_x, \qquad \ddot{y} + 2\dot{x} = \Omega_y, \qquad \ddot{z} = \Omega_z.
$$

由于时间 $t$ 不显式出现，该系统是**自治的**，并存在雅可比积分 $C = 2\Omega - (\dot x^2 + \dot y^2 + \dot z^2)$ 作为守恒量，这是零速度曲面、平动点和一切 CR3BP 任务设计的根基（Szebehely 1967, §1.6）。

## 状态方程

取状态向量 $\mathbf x = (x, y, z, \dot x, \dot y, \dot z)^\top$，二阶运动方程化作一阶系统

$$
\dot{\mathbf x} = \mathbf f(\mathbf x),
$$

加入控制后线性化为

$$
\dot{\mathbf x} = \mathbf A(t)\,\mathbf x + \mathbf B(t)\,\mathbf u, \qquad \mathbf y = \mathbf C(t)\,\mathbf x.
$$

这就是**状态方程**（状态空间形式）。把动力学写成这一形式是应用最优控制、状态反馈、状态观测等方法的前提。在 CR3BP 中，当参考是周期轨道时，$\mathbf A(t)$ 随参考轨道周期变化，这就是平动点轨道相对运动 Floquet 分析所依赖的**线性周期系统**结构。

## 自治 vs. 非自治；时变 vs. 时不变

状态方程不显含 $t$ 时，系统是**自治**（时不变）的；显含 $t$ 时则是**非自治**（时变）的。CR3BP 因两主天体在会合系下固定，状态方程是自治的。双圆模型、椭圆限制性三体问题、完整历表（n 体）模型则因第三体的真实运动或行星的真实位置而引入显式时间依赖，是非自治的，丢失雅可比积分，必须改用准周期或纯数值方法（Baresi 2023）。

自治系统具有时间平移不变性：$t_0$ 时刻发射的轨迹与 $t_0 + \Delta t$ 时刻发射的轨迹形状一致。非自治系统失去这种对称：发射历元本身成为变量，数值积分必须把绝对时间与状态一并推进。这一增加的复杂性并非形式上的：庞加莱截面、不变流形、雅可比约束下的穿越轨道理论等工具都依赖于自治性，在历表模型中不再直接可用。

## 相关概念

- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)

- [会合坐标系（Synodic Frame）](/glossary/fundamentals/synodic-frame/)

- [雅可比常数（Jacobi Constant）](/glossary/dynamics/jacobi-integral/)

- [无量纲化（Nondimensionalization）](/glossary/fundamentals/nondimensionalization/)

## 参考文献

- Szebehely, 1967, *Theory of Orbits*, §§1.5–1.6：量纲与无量纲 CR3BP 运动方程、雅可比积分推导。

- Vallado, 2022, *Fundamentals of Astrodynamics and Applications*, §12.3：限制性三体问题与会合系方程。

- Baresai, 2023, Transition of two-dimensional quasi-periodic invariant tori in the real-ephemeris model of the Earth–Moon system：完整历表模型中的非自治动力学。

- Fossà 等, 2022, Two and three impulses phasing strategy with a spacecraft orbiting on an Earth–Moon NRHO.

- 徐明、徐世杰, 2008, Halo 轨道维持的线性周期控制策略：状态方程与平动点轨道维持中的周期 $\mathbf A(t)$。
