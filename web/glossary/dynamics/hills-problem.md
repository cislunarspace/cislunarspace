---
title: 希尔问题（Hill's Problem）
description: 圆型限制性三体问题在小质量比极限下的简化形式：George Hill 1878 年研究月球运动时引入。原点取在主天体之一（如地球）上，第三体（月球/航天器）的运动方程显式含太阳潮汐项。本文覆盖方程的两种推导（CR3BP 极限与原始三体方程展开）、Hill 变分轨道与零速度曲线、与 Clohessy-Wiltshire 相对运动方程的关系，以及在地月/木卫系等现代应用中的角色。
keywords: 希尔问题, Hill's Problem, Hill 方程, Hill 球, Hill 曲面, 变分轨道, Clohessy-Wiltshire, CW 方程, 相对运动方程, 零速度曲线
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 希尔问题（Hill's Problem）
  desc: CR3BP 在小质量比极限下的经典简化，月球理论、相对运动与平动点邻域动力学的共同根。
  image: /logo.png
og:
  title: 希尔问题详解 | 地月空间动力学
  description: 圆型限制性三体问题在小质量比极限下的简化形式：George Hill 1878 年为研究月球运动而引入。覆盖方程推导、Hill 变分轨道、零速度曲线、Clohessy-Wiltshire 关系及现代应用。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 希尔问题详解 | 地月空间动力学
  description: 圆型限制性三体问题在小质量比极限下的简化形式：George Hill 1878 年为研究月球运动而引入。覆盖方程推导、Hill 变分轨道、零速度曲线、Clohessy-Wiltshire 关系及现代应用。
  image: /logo.png
permalink: /glossary/dynamics/hills-problem/
---

# 希尔问题（Hill's Problem）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

**希尔问题**（Hill's problem）是圆型限制性三体问题（CR3BP）在小质量比极限 $\mu\to 0$ 下、并取原点在较小主天体（如地球）邻域得到的简化形式。George William Hill 在 1878 年研究月球运动时引入此模型（Hill 1878；Szebehely 1967, §10.4），核心做法是：

1. 取太阳视差为零（太阳位于无穷远、引力为均匀潮汐场）；
2. 取太阳轨道偏心率为零（圆形日地轨道）；
3. 取月球轨道倾角为零（共面运动）。

在此简化下，第三体（月球/航天器）相对于较小主天体的运动方程在以较小主天体为原点、随太阳公转角速度同步旋转的坐标系中具有自治形式，并存在一条周期特解，**Hill 变分轨道**（variation orbit），它是 Hill 月球理论中的一阶中间轨道，也是历史上第一个非圆锥曲线的中间轨道。

## 运动方程

### 由 CR3BP 极限推导

CR3BP 在 [会合坐标系](/glossary/fundamentals/synodic-frame/) 中的运动方程为（见 [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)）

$$
\ddot{\vec r}+2\vec\omega\times\dot{\vec r}+\vec\omega\times(\vec\omega\times\vec r)=-\frac{\mu_1}{r_1^3}\vec r_1-\frac{\mu_2}{r_2^3}\vec r_2,
$$

将原点平移到 $P_2$（较小主天体）处，令 $\vec\rho=\vec r-\vec r_2$，并设 $\mu=m_2/(m_1+m_2)\ll 1$。在 $|\vec\rho|\ll|\vec r_2|$ 的局部区域内对 $P_1$ 的引力做 Taylor 展开，保留到 $\mu^{2/3}$ 量级，得到 Hill 方程的标准形式（Szebehely 1967, §10.4；Scheeres 1998）：

$$
\ddot{x}-2n\dot{y}=\Omega_x,\qquad \ddot{y}+2n\dot{x}=\Omega_y,\qquad \ddot{z}=\Omega_z,
$$

$$
\Omega(x,y,z)=\frac{\mu_2}{r}+\frac{3}{2}n^2 x^2,\qquad r=\sqrt{x^2+y^2+z^2},
$$

其中 $n$ 是两主天体的公转角速度，$\mu_2=Gm_2$。注意势函数仅显含 $x$ 的潮汐项，这正是太阳潮汐在 $\mu\to 0$ 极限下的体现。

### 由原始三体方程推导

Hill 本人从日-地-月三体方程出发（Szebehely 1967, §10.4.2），写出月球相对地球的运动方程：

$$
\ddot{\vec\rho}_M+\frac{G(m_E+m_M)}{|\vec\rho_M|^3}\vec\rho_M=-Gm_S\!\left[\frac{\vec\rho_M-\vec\rho_S}{|\vec\rho_M-\vec\rho_S|^3}+\frac{\vec\rho_S}{|\vec\rho_S|^3}\right],
$$

右侧是太阳对月球与太阳对地球引力之差。在日地距 $|\vec\rho_S|\gg|\vec\rho_M|$ 假设下对 $1/|\vec\rho_M-\vec\rho_S|$ 作多极展开，保留主导的潮汐项（二阶），便得到与上述相同的 Hill 方程。这一推导揭示：Hill 问题本质上是一阶太阳潮汐近似下的地月运动。

## 雅可比积分与 Hill 曲面

Hill 方程存在雅可比积分

$$
C_H = 2\Omega - v^2,
$$

形式上与 [CR3BP 的雅可比常数](/glossary/dynamics/jacobi-integral/) 一致，但 $\Omega$ 中只剩 $\mu_2/r+3n^2x^2/2$ 两项。零速度曲线 $v=0$ 即 $2\Omega=C_H$ 在 $xy$ 平面给出著名的 8 字形，即 Hill 曲面（Hill's curves of zero velocity）：

- $C_H$ 较大时，曲线绕地球闭合，月球被约束在有限区域内（Hill 据此证明地月距离的有界性）；
- $C_H$ 降至临界值时，曲线在 $x$ 轴上的 $L_1$、$L_2$ 位置打开两个颈，月球可经此逃逸或被截获；
- 进一步降低 $C_H$，曲线完全打开。

这两个颈口的位置 $x=\pm r_H$ 给出 **Hill 半径**（Hill radius）：

$$
r_H = \left(\frac{\mu_2}{3n^2}\right)^{1/3}.
$$

它是较小主天体引力影响范围的几何标尺：地月系 $r_H\approx 6.16\times 10^4$ km（约 0.16 个地月距），木卫系、火卫系等都有相应的 $r_H$。[瞬时 Hill 边界](/glossary/dynamics/hills-problem/) 概念把这一静态边界推广到太阳等第三体引力随时间变化的情形，用于定义等效平动点随时间的脉动。

## Hill 变分轨道与 Hill 方程

在 Hill 问题中，以月球公转周期为周期的对称特解称为**变分轨道**（variation orbit）。Hill 把它作为中间轨道，再研究对它的偏差演化。设 $\eta$ 为某方向上的小偏差，沿变分轨道线性化得到

$$
\ddot{\eta}+\theta(t)\eta=0,
$$

其中 $\theta(t)$ 是与变分轨道同周期的周期函数。这正是经典 **Hill 方程**（Hill's equation）的原始形式。Hill 用他发明的无穷行列式分析了此方程的稳定域，确立了月球公转的稳定性。后来 Lyapunov、Poincaré 等人发展的特征指数理论皆以此为源。

注意**Hill 方程**在数学物理中是一大类形如 $\ddot\eta+\theta(t)\eta=0$ 的二阶周期系数线性方程的统称（如 Mathieu 方程是其特例）；在地月空间语境中，它可指：(a) Hill 1878 年的原始变分方程；(b) 下文 Hill/Clohessy-Wiltshire 相对运动方程。读者需结合上下文判别。

## 与 Clohessy-Wiltshire 相对运动方程的关系

将 Hill 问题中较大主天体（如地球）视为目标、第三体（航天器）视为追踪器，在目标轨道为圆轨道的假设下线性化，得到著名的 **Clohessy-Wiltshire 方程**（CW 方程、Hill 相对运动方程，Clohessy & Wiltshire 1960；Vallado 2022, §6.8）：

$$
\ddot{x}-2n\dot{x}-3n^2 x = f_x,\quad \ddot{y}+2n\dot{x}=f_y,\quad \ddot{z}+n^2 z=f_z,
$$

其中 $(x,y,z)$ 是追踪器相对目标的 LVLH 坐标、$n$ 是目标轨道角速度、$\vec f$ 是控制加速度。CW 方程本质上是 Hill 问题方程在圆轨道邻域的线性化形式，因此与 Hill 问题共享同样的科氏+离心+潮汐结构，只是把原点从较大主天体换成在轨目标。该方程是近地轨道 [编队飞行](/glossary/dynamics/spacecraft-formation-flying/) 与交会对接相对运动分析的标准工具。

需要注意：当目标轨道偏心率较大、轨道高度较低或编队尺寸达到千米量级时，CW 方程的圆轨道假设带来的误差会迅速增大（Vallado 2022 §6.8.3）。

## 与 CR3BP 的连接与角色

Hill 问题作为 CR3BP 的 $\mu\to 0$ 极限，对地月系（$\mu\approx 0.01215$）和日地系（$\mu\approx 3\times 10^{-6}$）都是良好近似。它在理论与工程中扮演几重角色：

- **月球理论的根基**：Hill、Brown、De Sitter 等人的精密月球理论都以 Hill 变分轨道为中间轨道。
- **卫星稳定性判据**：Hill 半径是判断卫星是否稳定的基本尺度，远距逆行轨道（DRO）的稳定范围即由 Hill 曲面的拓扑决定。
- **平动点邻域动力学**：地月 $L_1$、$L_2$ 邻域的局部行为在 Hill 极限下变得可解析处理，许多 Halo/Lyapunov 轨道族的解析近似（如 Richardson 三阶展开）就是基于 Hill 问题线性化。
- **数值延续**：Hill 问题中的周期轨道族可作为起点，经质量参数 $\mu$ 的连续延拓（continuation）回到完整的 CR3BP，再过渡到高精度星历模型，是 [共振](/glossary/dynamics/orbital-resonance/)、[平动点轨道](/glossary/orbits/halo-orbit/) 数值延续工作流的常见起点。
- **受限四体问题推广**：Scheeres (1998) 把 Hill 问题推广为含两套潮汐项的受限 Hill 四体问题，可用于日地月三主天体环境下航天器运动的近似建模。

## 应用要点

- **稳定区估算**：$r_H$ 给出卫星稳定绕行的几何上限，月球引力影响球半径也按同公式估算。
- **DRO 与平动点轨道设计**：Hill 问题作为解析玩具模型，用于初步评估轨道族的拓扑、稳定性指数随参数变化的趋势。
- **相对运动分析**：CW 方程是近圆轨道相对运动的快速分析工具，配合 [微分修正](/glossary/dynamics/differential-correction/) 过渡到完整力模型。

## 相关概念

- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)
- [会合坐标系（Synodic Frame）](/glossary/fundamentals/synodic-frame/)
- [雅可比积分（Jacobi Integral）](/glossary/dynamics/jacobi-integral/)
- [天平动点（Libration Point）](/glossary/fundamentals/libration-point/)
- [航天器编队飞行（Spacecraft Formation Flying）](/glossary/dynamics/spacecraft-formation-flying/)
- [远距逆行轨道（DRO）](/glossary/orbits/distant-retrograde-orbit-dro/)

## 参考文献

- Hill, G. W. (1878). Researches in the lunar theory. *American Journal of Mathematics*, 1(1), 5–26.
- Szebehely, V. (1967). *Theory of Orbits: The Restricted Problem of Three Bodies*, Chapter 10. Academic Press.
- Clohessy, W. H., & Wiltshire, R. S. (1960). Terminal guidance system for satellite rendezvous. *Journal of the Aerospace Sciences*, 27(9), 653–658.
- Scheeres, D. J. (1998). The restricted Hill four-body problem with applications to the Earth–Moon–Sun system. *Celestial Mechanics and Dynamical Astronomy*, 70(2), 75–98.
- Vallado, D. A. (2022). *Fundamentals of Astrodynamics and Applications*, 5th ed., §6.8 (Hill's / Clohessy-Wiltshire equations).
- Hénon, M. (1969). Numerical exploration of the restricted problem, V: Hill's case. *Astronomy & Astrophysics*, 1, 223–238.
