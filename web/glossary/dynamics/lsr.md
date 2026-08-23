---
title: 月球会合共振（Lunar Synodic Resonance, LSR）
description: 航天器轨道周期与月球会合周期（约29.5天）成简单整数比的轨道共振状态，是Gateway等近直线晕轨道（NRHO）日食规避与长期任务设计的核心机制。覆盖 M:N 定义、BCR4BP周期条件、9:2/4:1等典型NRHO及其在长期日食规避中的应用。
keywords: 月球会合共振, Lunar Synodic Resonance, LSR, 同步共振, synodic resonance, NRHO, 近直线晕轨道, 日食规避, Gateway, BCR4BP, 地月空间, 9:2共振
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 月球会合共振（Lunar Synodic Resonance, LSR）
  desc: 轨道周期与月球会合周期成简单整数比——Gateway NRHO 日食规避的核心机制。
  image: /logo.png
og:
  title: 月球会合共振（Lunar Synodic Resonance）详解 | 术语定义
  description: 航天器轨道周期与月球会合周期（约29.5天）成简单整数比的轨道共振状态，是Gateway等近直线晕轨道（NRHO）日食规避与长期任务设计的核心机制。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 月球会合共振（Lunar Synodic Resonance）详解 | 术语定义
  description: 航天器轨道周期与月球会合周期（约29.5天）成简单整数比的轨道共振状态，是Gateway等近直线晕轨道（NRHO）日食规避与长期任务设计的核心机制。
  image: /logo.png
permalink: /glossary/dynamics/lsr/
---

# 月球会合共振（Lunar Synodic Resonance, LSR）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

月球会合共振（Lunar Synodic Resonance, LSR）指航天器轨道周期 $T_{\text{orb}}$ 与月球会合周期 $T_{\text{syn}}$（约 29.5 天，远地点至远地点，即太阳-地球-月球几何配置重复一次的时间）满足简单整数比的共振状态：

$$\frac{T_{\text{orb}}}{T_{\text{syn}}} = \frac{P}{Q}$$

其中 $P$、$Q$ 为正整数。常记为 $M:N$ 同步共振：航天器完成 $M$ 圈轨道，同时太阳-地球-月球几何配置重复 $N$ 次。由于会合周期由太阳与月球的相对运动决定，共振使轨道在太阳-地球-月球几何下具有可预测的周期重复性（Zimovan-Spreen et al. 2020；Boudad et al. 2020）。

## 数学与力学细节

在双圆限制性四体问题（BCR4BP）中，太阳以常角速率 $\omega_S$（在地月旋转系中约 $-0.925$ 无量纲单位，对应 29.5 天的会合周期）绕地月质心运动。一个 $M:N$ 同步共振周期轨道的总周期必须满足

$$T_{4BP} = N \left| \frac{2\pi}{\omega_S} \right|$$

其中 $\left| 2\pi / \omega_S \right| \approx 29.5$ 天。该轨道在旋转系中呈现 $M$ 圈几何，对应的 CR3BP 单圈周期为

$$T_{3BP} = \frac{N}{M} \left| \frac{2\pi}{\omega_S} \right|$$

（Oshima 2022）。

由于 BCR4BP 中太阳引力摄动打破了 CR3BP 的自洽性，同步共振周期轨道必须通过延拓策略从 CR3BP 解过渡：令太阳质量由零逐渐增大，每一中间状态的解即为 CR3BP 更高周期的近周期轨道（Boudad et al. 2020）。当 $M$ 为偶数时，从同一个 CR3BP 轨道出发可能产生两个不同的 BCR4BP 周期轨道族（$T_0$ 族与 $T_{1/2}$ 族），对应从初始时刻太阳相角相差 $\pi$ 时两个不同的对称初始条件（Oshima 2022）。

## 典型实例与日食规避

月球会合共振的关键价值在于日食规避：在太阳-月球和太阳-地球旋转系中，共振轨道的瓣状几何与地球/月球阴影锥之间形成可预测的相对运动，选择合适的历元即可让阴影穿过瓣间空隙，实现无需推进机动的长期无蚀飞行（Zimovan-Spreen et al. 2020）。

下表列出 CR3BP 地月系 $L_2$ Halo 族中几个典型同步共振 NRHO 的参数：

| 共振比 | 轨道周期 | 近月点半径 | 远月点半径 | 备注 |
|--------|----------|------------|------------|------|
| 9:2 | ≈6.53 天 | ≈3150 km | ≈71000 km | Gateway 当前基线，9圈=2会合周期（约59天）|
| 4:1 | ≈7.34 天 | ≈5600 km | ≈75335 km | 4圈=1会合周期；日食裕度更大 |
| 3:1 | ≈9.79 天 | ≈15000 km | ≈84500 km | 共振比简单，但近月点更高 |
| 5:1 | ≈5.90 天 | 无 | 无 | 近月点更接近月面 |

此外，NRHO 附近的高周期轨道族也存在同步共振成员，例如 2:1 P2HO1（周期约 14.76 天）、1:1 P2HO1（周期约 29.5 天）、3:2 P2HO1 等，其瓣/峰结构保持了类似 4:1 或 9:2 的日食规避几何（Zimovan-Spreen et al. 2020）。

## 应用要点

1. **日食规避**：在 BCR4BP 中，9:2 NRHO 的轨迹在太阳-$B_1$ 旋转系中完全避开了地球的半影锥，可实现纯弹道的长期无蚀飞行。
2. **长期可预测性**：共振复现性使长期驻留维持预算能够准确估算，也利于多航天器在轨相位规划（例如两航天器在 9:2 轨道上以太阳相角差 $\pi$ 独立运行而不相撞）（Boudad et al. 2020）。
3. **导航与任务规划**：同步共振的地月-太阳几何重复使导航解算复杂度降低，发射窗口选择更灵活。

## 相关概念

- [Halo轨道计算（Halo Orbit Computation）](/glossary/dynamics/halo-orbit-computation/)

- [日食规避路径约束（Eclipse Avoidance Path Constraint）](/glossary/dynamics/trajectory-constraints/)

- [轨道维持（Station-Keeping）](/glossary/dynamics/station-keeping/)

- [弱稳定边界（Weak Stability Boundary）](/glossary/dynamics/wsb/)

- [不变流形（Invariant Manifold）](/glossary/dynamics/invariant-manifold/)

- [轨道共振（Orbital Resonance）](/glossary/dynamics/orbital-resonance/)

## 参考文献

- Zimovan-Spreen, E. M. et al., 2020, Near rectilinear halo orbits and nearby higher-period dynamical structures: orbital stability and resonance properties, *Acta Astronautica*

- Boudad, K. D. et al., 2020, Dynamics of synodic resonant near rectilinear halo orbits in the bicircular four-body problem, *Celestial Mechanics and Dynamical Astronomy*

- Williams, K. E. et al., 2017, Targeting cislunar near rectilinear halo orbits for human space exploration, *AIAA SPACE and Astronautics Forum and Exposition*

- Oshima, K., 2022, Multiple families of synodic resonant periodic orbits in the bicircular restricted four–body problem, *Advances in Space Research*

- Lee, K., 2019 (internal NASA report on Gateway NRHO 9:2 synodic resonant orbit analysis)
