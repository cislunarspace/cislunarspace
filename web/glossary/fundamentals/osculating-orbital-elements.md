---
title: 吻切轨道根数（Osculating Orbital Elements）
description: 在某一瞬时冻结摄动力后航天器遵循的开普勒椭圆的六个轨道根数。区别于平均根数，吻切根数包含全部短周期与长周期变化，代表高精度瞬时轨迹；其时间演化由拉格朗日／高斯行星方程描述，是摄动理论、轨道确定与地月空间庞加莱截面分析的起点。
keywords: 吻切轨道根数, Osculating Orbital Elements, 开普勒根数, 平均根数, 拉格朗日行星方程, 高斯行星方程, 摄动理论, 吻切条件, 庞加莱截面, 轨道确定
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 吻切轨道根数（Osculating Orbital Elements）
  desc: 瞬时冻结摄动的开普勒根数——包含全部短/长周期变化，代表高精度实时轨迹。
  image: /logo.png
og:
  title: 吻切轨道根数（Osculating Orbital Elements）详解 | 术语定义
  description: 在某一瞬时冻结摄动力后航天器遵循的开普勒椭圆的六个轨道根数。区别于平均根数，吻切根数包含全部短周期与长周期变化，代表高精度瞬时轨迹；其时间演化由拉格朗日／高斯行星方程描述。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 吻切轨道根数（Osculating Orbital Elements）详解 | 术语定义
  description: 在某一瞬时冻结摄动力后航天器遵循的开普勒椭圆的六个轨道根数。区别于平均根数，吻切根数包含全部短周期与长周期变化，代表高精度瞬时轨迹；其时间演化由拉格朗日／高斯行星方程描述。
  image: /logo.png
permalink: /glossary/fundamentals/osculating-orbital-elements/
---

# 吻切轨道根数（Osculating Orbital Elements）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

吻切轨道根数（osculating orbital elements，又称 osculating elements、吻切根数）是摄动轨道运动中每一时刻对应的瞬时开普勒轨道根数。Osculate 源自拉丁文 osculari（接吻），指该瞬时开普勒椭圆与实际摄动轨迹在当前位置相切（Vallado 2022）。严格地说：若在时刻 $t$ 突然移除所有摄动力，航天器此后将以当前的位置 $\vec{r}$ 和速度 $\vec{v}$ 沿一个开普勒椭圆运动：这个椭圆就是该瞬时的吻切椭圆，其六个轨道根数即为吻切根数。

吻切根数在时间上是变化的：它们包含了长期（secular）、长周期和短周期三类摄动效应，因此代表航天器的高精度瞬时轨迹，适用于实时指向、跟踪和确定等操作（Vallado 2022）。

## 数学表述

设 $c_i(t)$ 为六个吻切根数 $(a, e, i, \Omega, \omega, M)$，在无摄动力时它们为常数；有摄动加速度 $\vec{a}_\text{pert}$ 时其时间导数为：

$$
\frac{d c_i}{dt} = f_i(c_1, \dots, c_6, \vec{a}_\text{pert})
$$

维持吻切特征需满足 **吻切条件**（condition of osculation，Geyling and Westerman 1971）：

$$
\sum_{i=1}^{6} \frac{\partial \vec{x}(\vec{c}, t)}{\partial c_i} \frac{d c_i}{dt} \equiv \vec{0}
$$

即位置对根数的偏导加权和为零，这保证瞬时轨道的速度表达式与二体问题形式一致，使每个瞬时的 $(\vec{r}, \vec{v})$ 都精确对应到一个开普勒椭圆。

吻切根数的演化方程分两类：保守摄动用 **拉格朗日行星方程**（Lagrange VOP，以摄动势函数 $R$ 的梯度表示）；非保守摄动用 **高斯行星方程**（Gauss VOP，直接代入摄动加速度分量）（Vallado 2022；Battin 1999）。

## 吻切根数与平均根数的区别

| | 吻切根数 | 平均根数 |
|---|---|---|
| 包含的频率 | 全部（短周期+长周期+长期） | 仅长期（短周期已滤除） |
| 时间变化 | 快速振荡 | 平滑 |
| 用途 | 实时跟踪、精确轨道确定 | 长期预报、任务规划 |
| 积分步长 | 必须小于短周期 | 可用大步长（半解析理论） |

单次平均（single-averaged）剔除短周期项，保留长期和长周期；双次平均（double-averaged）同时剔除短周期和长周期，仅留长期项（Vallado 2022）。平均根数理论的核心是将吻切根数展开为傅里叶级数形式：

$$
c = c_0 + \dot{c}_1 (t-t_0) + K_1 \cos(2\omega) + K_2 \sin(2\nu+\omega) + K_3 \cos(2\nu)
$$

其中 $\dot{c}_1$ 是长期项系数，后几项分别为长周期（$2\omega$）、混合周期（$2\nu+\omega$）和短周期（$2\nu$）项（Escobal 1965；Vallado 2022）。

## 在地月空间中的应用

- **庞加莱截面分析**：将航天器状态投影到庞加莱截面时，常使用吻切根数（特别是近地点半径 $r_p$、偏心率 $e$ 等）作为截面坐标。吻切根数在截面上的迹线是分析弱稳定边界转移中轨道演化模式的直观工具（Oshima et al. 2017）。

- **月球轨道停泊设计**：环月轨道的吻切根数漂移由月球非球形引力（$J_2, J_3, \dots$）与地球第三体摄动共同驱动，漂移规律直接影响停泊轨道的设计约束（陈天冀等 2023）。

- **轨道确定**：由测量数据通过最小二乘或滤波方法，所解出的是某一历元的吻切根数，而不是平均根数。

## 相关概念

- [高斯行星方程（Gauss Planetary Equations）](/glossary/dynamics/gauss-planetary-equations/)

- [轨道根数漂移（Orbital Element Drift）](/glossary/dynamics/orbital-element-drift/)

- [庞加莱截面（Poincaré Section）](/glossary/dynamics/poincare-section/)

- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)

- [状态转移矩阵（STM）](/glossary/fundamentals/stm/)

## 参考文献

- Vallado, 2022, Fundamentals of Astrodynamics and Applications, Sec. 9.2（吻切元素定义、吻切条件、平均根数区别、傅里叶展开）

- Geyling and Westerman, 1971, Introduction to Orbital Mechanics（吻切条件的经典表述）

- Battin, 1999, An Introduction to the Mathematics and Methods of Astrodynamics（拉格朗日与高斯 VOP 的完整推导）

- Oshima et al., 2017（吻切根数庞加莱截面在低能转移中的应用）
