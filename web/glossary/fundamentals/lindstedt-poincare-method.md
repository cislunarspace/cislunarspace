---
title: Lindstedt-Poincaré 方法（Lindstedt-Poincaré Method）
description: 一种通过将坐标与频率同时展开为小参数幂级数以消除长期项的摄动方法，能得到一致有效的周期/准周期解。是构造 CR3BP 平动点附近 Halo、Lissajous、准 Halo、垂直 Lyapunov 轨道解析近似的标准工具，为数值微分修正提供初值。
keywords: Lindstedt-Poincaré 方法, Lindstedt-Poincaré Method, 摄动方法, 长期项, Halo 轨道解析解, Richardson 1980, 平动点轨道, 频率展开
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Lindstedt-Poincaré 方法（Lindstedt-Poincaré Method）
  desc: 一种将坐标与频率同时展开为小参数幂级数以消除长期项的摄动方法。
  image: /logo.png
og:
  title: Lindstedt-Poincaré 方法详解 | 术语定义
  description: 一种通过将坐标与频率同时展开为小参数幂级数以消除长期项的摄动方法，能得到一致有效的周期/准周期解。是构造 CR3BP 平动点附近 Halo、Lissajous、准 Halo、垂直 Lyapunov 轨道解析近似的标准工具，为数值微分修正提供初值。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Lindstedt-Poincaré 方法详解 | 术语定义
  description: 一种通过将坐标与频率同时展开为小参数幂级数以消除长期项的摄动方法，能得到一致有效的周期/准周期解。是构造 CR3BP 平动点附近 Halo、Lissajous、准 Halo、垂直 Lyapunov 轨道解析近似的标准工具，为数值微分修正提供初值。
  image: /logo.png
permalink: /glossary/fundamentals/lindstedt-poincare-method/
---

# Lindstedt-Poincaré 方法（Lindstedt-Poincaré Method）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

Lindstedt-Poincaré 方法是一种构造弱非线性振动系统一致有效周期（或准周期）解的摄动方法。区别于普通摄动法的关键之处在于：把**坐标和频率同时**展开为小参数 $\varepsilon$ 的幂级数；频率中引入的额外自由度用于逐阶抵消会随时间无限增长的长期项（secular terms），使截断级数对任意长时间都保持一致有效（Poincaré 1892；Nayfeh 1973）。

## 核心思想

以 $\ddot{x}+\omega_0^2 x = \varepsilon f(x,\dot{x})$ 为例，普通摄动 $x=x_0+\varepsilon x_1+\cdots$ 在 $O(\varepsilon)$ 阶会产生 $t\sin\omega_0 t$ 这类随 $t$ 线性增长的长期项，几个周期后近似就失效。Lindstedt-Poincaré 方法把频率也展开：

$$\omega = \omega_0 + \varepsilon\omega_1 + \varepsilon^2\omega_2 + \cdots$$

引入新时间 $\tau=\omega t$，在每个阶次上选择 $\omega_i$ 抑制共振强迫项，所得级数对所有 $t$ 一致有效（Nayfeh 1973；喻圣贤 2013）。

## 在 CR3BP 平动点轨道构造中的应用

将 CR3BP 运动方程在共线平动点处线性化，得到两个耦合的简谐振动，平面内与面外频率 $\omega,\nu$。Lindstedt-Poincaré 构造把解展开为平面内振幅 $\alpha$ 与面外振幅 $\beta$ 的幂级数：

$$\begin{aligned}
x(t) &= \sum_{i,j\ge 1}\Bigl(\sum_{|k|\le i}x_{ijk}\cos(k\theta)\Bigr)\alpha^i\beta^j,\\
y(t) &= \sum_{i,j\ge 1}\Bigl(\sum_{|k|\le i}y_{ijk}\sin(k\theta)\Bigr)\alpha^i\beta^j,\\
z(t) &= \sum_{i,j\ge 1}\Bigl(\sum_{|k|\le i}z_{ijk}\cos(k\theta)\Bigr)\alpha^i\beta^j,
\end{aligned}$$

$\omega,\nu$ 本身也展开为 $\alpha,\beta$ 的幂级数（喻圣贤 2013; Richardson 1980）。

- $\omega,\nu$ **不可通约**时，轨迹铺满二维环面，对应 **Lissajous（准周期）轨道**。

- $\omega=\nu$（1:1 通约，在振幅足够大时达到）时，级数塌缩为单一周期，得到 **Halo 轨道**，即三维周期轨道。

## 经典成果

- **Farquhar & Kamel (1973)**：在地月 $L_2$ 邻域给出 Lissajous 的三阶分析解、Halo 的四阶分析解，并考虑月球轨道偏心率与太阳引力摄动。

- **Richardson (1980)**：共线平动点附近 Halo 轨道的三阶解析构造，是现代 Halo 轨道数值计算的事实标准第一步。其方法把运动方程在平动点处展开到三阶，用改进的 Lindstedt-Poincaré 方法消除长期项，给出平面内与法向的三阶解析解（Richardson 1980；Howell 1984）。

- **Gómez、Masdemont (1998, 2005)**：基于中心流形参数化的高阶 Lissajous、准 Halo 解，Lindstedt-Poincaré 展开阶数可达 25 阶以上，展开式系数对应 Birkhoff 正规形，可直接输出不变对象的高精度初始条件。

- **Archambeau 等 (2011)**：用同框架给出垂直 Lyapunov 轨道的解析解。

## 在现代工作流中的位置

Lindstedt-Poincaré 近似通常不是最终产物，其作用是为数值精化提供**初值**：

1. Lindstedt-Poincaré 级数在指定雅可比常数处给出粗略的周期/准周期解。
2. 周期轨道由 [微分修正](/glossary/dynamics/differential-correction/)（打靶法，Howell 1984）精化。
3. 准周期轨道由多次打靶 + 傅里叶级数（在多个庞加莱截面上）精化（Kolemen et al. 2006；Jorba 2001；Gómez & Mondelo 2001）。

这一流程稳健，但已知存在局限：Lindstedt-Poincaré 构造本身繁复（不同轨道族需不同半解析形式）、准周期轨道的傅里叶修正耗时、靠近平面 Lyapunov 族的准周期轨道（不变曲线有尖角）难以用低阶傅里叶展开逼近。纯数值替代方案（如 Ren & Shan 2014）以一段轨迹弧为种子、通过参数优化延拓，完全跳过解析步骤。

## 相关概念

- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)

- [会合坐标系（Synodic Frame）](/glossary/fundamentals/synodic-frame/)

- [平动点（Libration Point）](/glossary/fundamentals/libration-point/)

- [微分修正（Differential Correction）](/glossary/dynamics/differential-correction/)

- [延拓（Continuation）](/glossary/dynamics/continuation/)

- [中心流形（Central Manifold）](/glossary/dynamics/center-manifold/)

- [小分母（Small Denominator）](/glossary/fundamentals/small-denominator/)

## 参考文献

- Poincaré H. Les méthodes nouvelles de la mécanique céleste, Vol. II[M]. Gauthier-Villars, 1892-1899.

- Nayfeh A H. Perturbation Methods[M]. Wiley, 1973.

- Farquhar R W, Kamel A A. Quasi-periodic orbits about the translunar libration point[J]. Celestial Mechanics, 1973, 7: 458-473.

- Richardson D L. Analytical construction of periodic orbits about the collinear points[J]. Celestial Mechanics, 1980, 22(3): 241-253.

- Howell K C. Three-dimensional, periodic 'halo' orbits[J]. Celestial Mechanics, 1984, 32(1): 53-71.

- Gómez G, Mondelo J M. The dynamics around the collinear equilibrium points of the RTBP[J]. Physica D, 2001.

- Masdemont J J. High order expansions of invariant manifolds of libration point orbits with applications to mission design[J]. DCDIS-B, 2005.

- Archambeau G, Pellet F, Julvez J. Analytical construction of quasi-periodic and vertical Lyapunov orbits[J]. Celestial Mechanics and Dynamical Astronomy, 2011.

- Kolemen E, Kasdin N J, Girimaji P. Quasi-periodic orbits of the restricted three-body problem[J]. Advances in the Astronautical Sciences, 2006.

- 喻圣贤. 深空探测中的轨道分析、设计与控制[D]. 南京大学, 2013.

- Ren Y, Shan J. A novel algorithm for generating libration point orbits about the collinear points[J]. Celestial Mechanics and Dynamical Astronomy, 2014.
