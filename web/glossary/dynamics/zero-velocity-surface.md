---
title: 零速度曲面（Zero-Velocity Surface, ZVS）
description: 圆型限制性三体问题中由雅可比常数决定的等势面 Ω = C/2，将位形空间分为可达区与禁飞区。平面截面称零速度曲线（ZVC）或 Hill 曲线；C 取临界值 C₁…C₅ 时在五个平动点处相继开口，由此界定地月、地月↔深空之间的能量通道。
keywords: 零速度曲面, Zero-Velocity Surface, ZVS, 零速度曲线, Zero-Velocity Curve, ZVC, Hill 曲线, 雅可比常数, CR3BP, 禁飞区, 平动点, 地月空间
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 零速度曲面（Zero-Velocity Surface, ZVS）
  desc: Ω = C/2 的等势面；C 降至各 Cᵢ 时在 L₁/L₂/L₃ 处相继开口，界定地月与深空转移通道。
  image: /logo.png
og:
  title: 零速度曲面（ZVS）详解 | 雅可比常数与可达区域
  description: 圆型限制性三体问题中由雅可比常数决定的等势面 Ω = C/2，将位形空间分为可达区与禁飞区。C 取临界值 C₁…C₅ 时在五个平动点处相继开口。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 零速度曲面（ZVS）详解 | 雅可比常数与可达区域
  description: 圆型限制性三体问题中由雅可比常数决定的等势面 Ω = C/2，将位形空间分为可达区与禁飞区。
  image: /logo.png
permalink: /glossary/dynamics/zero-velocity-surface/
---

# 零速度曲面（Zero-Velocity Surface, ZVS）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

由 [雅可比积分](/glossary/dynamics/jacobi-integral/) $v^2 = 2\Omega - C$ 出发，令 $v=0$，得到位形空间中的等值面
$$\Omega(x,y,z) = C/2.$$
它就是 [有效势](/glossary/dynamics/jacobi-integral/) $\Omega$ 的等值面，称作**零速度曲面**（zero-velocity surface, ZVS）或 Hill 曲面。在会合系的 $xy$ 平面截线称作**零速度曲线**（zero-velocity curve, ZVC）或 Hill 曲线（Szebehely 1967, §4.7；Vallado 2022, §12.7.3）。

"零速度"意指：航天器若位于此面上，其会合系速度恰好为零——它刚把全部"旋转系动能"换成了势能。这是航天器在该 C 值下能到达的边界。

## 物理意义：可达区与禁飞区

由 $v^2 = 2\Omega - C$ 知：

- $2\Omega > C$ 处 $v^2 > 0$，**可达**（real velocity）；

- $2\Omega < C$ 处 $v^2 < 0$，**禁飞**（forbidden region，速度为虚数）；

- $2\Omega = C$ 处 $v = 0$，即 ZVS 本身。

航天器单凭 CR3BP 动力学无法进入禁飞区；要跨越必须施加 $\Delta v$ 把 C 降到对应阈值之下。换言之，给定 C 就给定了航天器在位形空间的"活动围栏"——这是限制性三体问题最直接的定性结论（Szebehely 1967, §4.7）。

## 拓扑随 $C$ 的演化

C 由大变小，ZVS 在五个 [平动点](/glossary/dynamics/libration-point/) 处相继"开口"，可达区拓扑经历五个阶段（地月系 $C_1=3.18834$、$C_2=3.17216$、$C_3=3.01215$、$C_4=C_5=2.98800$；Parker & Anderson 2014, Table 2-2）：

| 能量范围 | ZVS 形态 | 可达性 |
|---|---|---|
| $C > C_1$ | 三块互不连通的封闭曲面 | 分别锁在地球附近、月球附近、外部；三者之间不能互达 |
| $C_2 < C < C_1$ | $L_1$ 处开口 | 地球区与月球区连通，外部仍封闭 |
| $C_3 < C < C_2$ | $L_1$、$L_2$ 都开口 | 地月区与 $L_2$ 外侧深空连通 |
| $C_4 < C < C_3$ | $L_1$、$L_2$、$L_3$ 都开口 | 仅剩 $L_4$、$L_5$ 处两个小禁飞岛 |
| $C \le C_4=C_5$ | ZVS 消失 | 全空间可达 |

C 在 $C_1$、$C_2$、$C_3$、$C_4$ 处的"开口"对应 $\Omega$ 在该平动点的鞍点结构——这正是 $\Omega$ 的鞍点成为能量阈值口的几何原因。

## 颈口与转移通道

$L_1$、$L_2$、$L_3$ 处的开口被形象地称为**颈口**（neck）或能量通道：

- **$L_1$ 颈口**：连通地球附近与月球附近，是低能地月转移（如 [Halo](/glossary/orbits/halo-orbit/) 入轨、流形拼接地月转移）的几何咽喉。

- **$L_2$ 颈口**：连通地月系内部与月球外侧深空，是月球背面通信中继（如 NRHO）和地月→日地流形拼接的出发口。

- **$L_3$ 颈口**：连通地月系与地球反向外部空间，工程上较少使用。

颈口附近的动力学由该平动点的不稳定/稳定 [不变流形](/glossary/dynamics/invariant-manifold/) 主导——同 C 下两周期轨道的不变流形能否在相空间相交，决定了它们之间是否存在"零消耗"转移（Parker & Anderson 2014, §2.6）。

## 截面与可视化

- **$xy$ 截面**（最常用）：即 Hill 曲线，给出主天体轨道面内的可达轮廓。地月系下 $C=3.18$ 的曲线在 $L_1$ 处刚好接触、$C=3.0$ 的曲线只剩 $L_{4,5}$ 处两个小岛（Parker & Anderson 2014, Fig. 2-3；Vallado 2022, Fig. 12-14）。

- **$xz$ 截面**：揭示平面外运动同样受限——靠近主天体处禁飞层很薄，远离时变厚（Vallado 2022, Fig. 12-16；Lundberg et al. 1985）。

- **三维表示**：把 $\Omega$ 作为 $z=\Omega(x,y)$ 的曲面绘出，主天体处呈无穷高峰，$L_{4,5}$ 处呈最低洼地，$L_{1,2,3}$ 处呈鞍形山口——这是 Deprit 经典示意图的内容（Szebehely 1967, Fig. 4.30）。

## 应用

- **转移可行性判定**：比较初末两段轨道的 C，若位于不同拓扑区段则需 $\Delta v$ 把 C 跨过对应 $C_i$；这是任务设计前期的零次筛选。

- **最小能量预算**：把 C 从近地停泊轨道降到 $C_1$ 以下所需的最小 $\Delta v$，由 $\Delta C = -2\,\mathbf v\cdot\Delta\mathbf v$（见 [雅可比积分](/glossary/dynamics/jacobi-integral/)）可估出下界。

- **流形拼接**：周期轨道的不变流形在固定 C 下演化，ZVS 颈口的大小决定流形能伸展到何处、能否与下一段流形相接（Koon et al. 2011）。

- **禁飞区规避**：在某些任务中（如月球脉冲星导航星座），刻意把 C 维持在 $C_1$ 之上、把航天器锁在地球或月球附近，可避免漂入平动点邻域。

## 易混点

- **ZVS 不是 $\Omega$ 的图像**：ZVS 是 $\Omega=C/2$ 这一张特定的等值面，而 $\Omega$ 本身的图像（如 Deprit 的三维表示）是另一回事——后者只是帮助想象 $\Omega$ 形状的可视化工具。

- **ZVS 随 C 而变，不是固定曲面**：每一颗航天器有自己的 C，因此有自己的 ZVS；不同轨道族绘在同一张 Hill 曲线图上时，对应不同的 C 值。

- **C 不变时不能穿越**：航天器的轨迹（在位形空间）不会穿过自己的 ZVS——要穿过必须靠 $\Delta v$ 改变 C。

## 相关概念

- [雅可比积分（Jacobi Integral）](/glossary/dynamics/jacobi-integral/)

- [圆型限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)

- [平动点（Libration Point）](/glossary/dynamics/libration-point/)

- [不变流形（Invariant Manifold）](/glossary/dynamics/invariant-manifold/)

- [Halo 轨道](/glossary/orbits/halo-orbit/)

- [会合坐标系（Synodic Frame）](/glossary/fundamentals/synodic-frame/)

## 参考文献

- Szebehely V. *Theory of Orbits: The Restricted Problem of Three Bodies.* Academic Press, 1967, Ch. 4 (Curves of Zero Velocity).

- Vallado D. A. *Fundamentals of Astrodynamics and Applications.* 5th ed., 2022, §12.7.3.

- Parker J. S., Anderson R. L. *Low-Energy Lunar Trajectory Design.* JPL, 2014, Ch. 2.

- Lundberg J. S., Szebehely V., Whipple C. "Surfaces of zero velocity in the restricted problem of three bodies." *Celestial Mechanics*, 1985.

- Koon W. S., Lo M. W., Marsden J. E., Ross S. D. *Dynamical Systems, the Three-Body Problem and Space Mission Design.* 2nd ed., 2011.

- Oshima K. "A hidden barrier surface complementary to the zero velocity surface in the circular restricted three-body problem." 2024.
