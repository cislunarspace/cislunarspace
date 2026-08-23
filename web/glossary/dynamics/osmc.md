---
title: 滑模控制与最优滑模控制（Sliding Mode Control and OSMC）
description: 滑模控制（SMC）通过设计一个到达后会沿之"滑动"的超曲面（滑模面），使闭环系统对匹配不确定性和外扰具有不变性；最优滑模控制（OSMC）在积分型滑模面中嵌入 LQR 反馈增益，使滑动段对预设的二次型指标最优，再以不连续切换项补偿扰动。本词条给出 SMC 的数学结构（等效控制 + 切换项、Lyapunov 稳定性、抖振问题）、积分型滑模面的设计、OSMC 中 LQR 与 SMC 的耦合方式，以及地月平动点轨道保持中的工程取值（k 与扰动量级匹配、Q=10I、R=I）。
keywords: 滑模控制, SMC, 最优滑模控制, OSMC, 积分型滑模面, 等效控制, 抖振, Lyapunov稳定性, 平动点轨道保持
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 滑模控制与最优滑模控制（Sliding Mode Control and OSMC）
  desc: SMC 的滑模面、等效控制与切换项；OSMC 把 LQR 嵌入积分型滑模面，使滑动段最优 + 鲁棒。
  image: /logo.png
og:
  title: 滑模控制与最优滑模控制详解 | 术语定义
  description: 滑模控制（SMC）通过设计滑模面使闭环对匹配扰动具有不变性；最优滑模控制（OSMC）在积分型滑模面中嵌入 LQR 增益，使滑动段最优且鲁棒。本词条覆盖 SMC 的数学结构、积分型滑模面、OSMC 工程取值与平动点轨道保持应用。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 滑模控制与最优滑模控制详解 | 术语定义
  description: 滑模控制（SMC）通过设计滑模面使闭环对匹配扰动具有不变性；最优滑模控制（OSMC）在积分型滑模面中嵌入 LQR 增益，使滑动段最优且鲁棒。本词条覆盖 SMC 的数学结构、积分型滑模面、OSMC 工程取值与平动点轨道保持应用。
  image: /logo.png
permalink: /glossary/dynamics/osmc/
---

# 滑模控制与最优滑模控制（Sliding Mode Control and OSMC）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

**滑模控制**（Sliding Mode Control, SMC）是一类变结构控制方法：在状态空间中设计一个低维流形，即**滑模面** $s(\boldsymbol{x},t)=0$，控制律在不同区域取不同结构，强制系统状态在有限时间内到达滑模面并沿之滑动。一旦进入滑动段，闭环行为由滑模面方程决定，**对满足匹配条件（matching condition）的模型不确定性与外扰具有不变性**（Utkin 1977；Slotine & Li 1991）。

**最优滑模控制**（Optimal Sliding Mode Control, OSMC）把 [LQR](/glossary/dynamics/linear-quadratic-optimal-control/) 的反馈增益嵌入滑模面，使滑动段对预设的二次型指标最优；同时保留一个不连续的切换项以补偿扰动。这样兼得 LQR 的最优性与 SMC 的鲁棒性（Utkin & Shi 1996；Zhang & Wang 2022）。

## SMC 的数学结构

考虑不确定系统 $\dot{\boldsymbol{x}} = \boldsymbol{A}\boldsymbol{x} + \boldsymbol{B}(\boldsymbol{u} + \boldsymbol{d})$，其中 $\boldsymbol{d}$ 为有界匹配扰动 $\|\boldsymbol{d}\|_\infty \le \bar d$。控制律由两部分组成

$$
\boldsymbol{u} = \boldsymbol{u}_{eq} + \boldsymbol{u}_{sw}，
$$

- **等效控制** $\boldsymbol{u}_{eq}$：令 $\dot{s}=0$ 解出的连续控制，描述滑动段的标称动力学；
- **切换控制** $\boldsymbol{u}_{sw}$：典型形式为 $-(\boldsymbol{G}\boldsymbol{B})^{-1}\boldsymbol{k}\,\mathrm{sgn}(\boldsymbol{s})$，用以在扰动下保持 $\dot{s}\,s<0$。

取 Lyapunov 函数 $V=\tfrac{1}{2}\boldsymbol{s}^T\boldsymbol{s}$，则 $\dot V = \boldsymbol{s}^T[-\boldsymbol{k}\,\mathrm{sgn}(\boldsymbol{s}) + \boldsymbol{G}\boldsymbol{d}]$。当选 $k_i > \bar d_i$ 时 $\dot V<0$，到达条件成立（Utkin 1977）。

**抖振问题（chattering）。** 符号函数 $\mathrm{sgn}(\cdot)$ 在切换面上高频振荡，会激发未建模动态。常用缓解手段包括：边界层（用 $\mathrm{sat}(s/\varepsilon)$ 替代 $\mathrm{sgn}$）、二阶/高阶滑模（如 super-twisting）、以及动态滑模面。

## 积分型滑模面

积分型滑模面（Integral Sliding Surface）在常规状态偏差项上加入状态偏差的积分，使滑模面包含从初始时刻起的累积偏差信息，**消除稳态误差**。其一般形式为

$$
\boldsymbol{s}(\boldsymbol{x},t) = \boldsymbol{G}\big[\boldsymbol{x}(t) - \boldsymbol{x}(0)\big] - \boldsymbol{G}\int_{0}^{t}\!\big[\boldsymbol{A}-\boldsymbol{B}\boldsymbol{R}^{-1}\boldsymbol{B}^T\boldsymbol{P}\big]\boldsymbol{x}(\tau)\,d\tau，
$$

其中 $\boldsymbol{P}$ 满足 Riccati 方程。由于 $\boldsymbol{s}(\boldsymbol{x}_0,0)=0$，状态从初始时刻即位于滑模面上，**消除了到达段**（Utkin & Shi 1996）。代入 $\dot{\boldsymbol{s}}=0$ 得到的等效控制 $\boldsymbol{u}_{eq}^* = -\boldsymbol{R}^{-1}\boldsymbol{B}^T\boldsymbol{P}\boldsymbol{x}$ 恰好等于 LQR 的最优反馈律，因此**滑动段对预设的二次型指标最优**。

## OSMC 的工程取值与平动点保持

地月空间平动点轨道保持（DRO、Halo、NRHO）是 OSMC 的典型应用场景（Zhang & Wang 2022）。该研究采用 $\boldsymbol{G}=\boldsymbol{B}^T=[\,\boldsymbol{0}_{3\times3}\ \ \boldsymbol{I}_{3\times3}\,]$（保证 $\boldsymbol{G}\boldsymbol{B}$ 非奇异），权矩阵取 $\boldsymbol{Q}=10\boldsymbol{I}_{6}$、$\boldsymbol{R}=\boldsymbol{I}_3$，切换增益按扰动量级配置：

| 扰动源 | 无量纲量级 | 切换增益 $\boldsymbol{k}$ |
| --- | --- | --- |
| 木星引力（弱扰） | $\sim 10^{-7}$ | $2\times10^{-7}\boldsymbol{I}_3$ |
| 太阳辐射压 SRP（强扰） | $\sim 10^{-4}$ | $2\times10^{-4}\boldsymbol{I}_3$ |

数值仿真显示：仅有入轨误差时 OSMC 与 LQR 性能相当；当 SRP 量级的强扰动存在时，LQR 的位置偏差不再收敛至零，而 OSMC 仍能在短时间内回到标称轨道附近，体现鲁棒性优势。在更现实的约束（导航误差 1 km / 1 cm/s、推进误差 2%、导航间隔 2 天、推力上界 $5\times10^{-4}$ m/s²）下，OSMC 在 9:2 NRHO 上获得 99% 的成功率，年修正量约 26 m/s。

## 设计要点

- **$k$ 必须严格大于扰动上界。** $k_i \le \bar d_i$ 时到达条件失效；但 $k$ 过大会加剧抖振、增大燃料消耗。OSMC 的实践是**按扰动量级配置**（如上表），与 LQR 固定增益不同。
- **抖振与采样/执行频率。** 边界层厚度 $\varepsilon$ 应与执行机构时间常数、控制周期匹配；过小起不到平滑作用，过大等效于失去滑模特性。
- **匹配条件限制。** SMC 的不变性只对 $\boldsymbol{d}$ 落入 $\boldsymbol{B}$ 列空间（即匹配扰动）有效。非匹配扰动需要更高阶滑模或自适应增益。
- **离散时间实现。** 控制周期较大时（如 NRHO 上的 2 天），离散滑模的到达条件需重新推导（Drakunov & Utkin 1989），符号函数应以 $\mathrm{sgn}$ 的离散等价形式实现。

## 相关概念

- [线性二次型最优控制与 Riccati 方程（LQR）](/glossary/dynamics/linear-quadratic-optimal-control/)
- [协态变量（Co-state Variables）](/glossary/dynamics/co-state-variables/)
- [庞特里亚金最小值原理（Pontryagin Minimum Principle）](/glossary/dynamics/pontryagins-maximum-principle/)
- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)

## 参考文献

- Utkin, V. I., 1977, "Variable structure systems with sliding modes," *IEEE Trans. Autom. Control* 22(2)（SMC 的奠基工作）。
- Slotine, J.-J. E., Li, W., 1991, *Applied Nonlinear Control*（SMC 教材级讲解，含等效控制、到达条件、抖振）。
- Utkin, V. I., Shi, J., 1996, "Integral sliding mode in systems operating under uncertainty conditions," *Proc. IEEE Conf. Decis. Control*（积分型滑模面，消除到达段）。
- Drakunov, S. V., Utkin, V. I., 1989, "On discrete-time sliding modes"（离散滑模的到达条件）。
- Zhang, R., Wang, Y., 2022, "Continuous-thrust station-keeping of cis-lunar orbits using optimal sliding mode control with practical constraints," *Adv. Space Res.*（OSMC 在 DRO/Halo/NRHO 的工程取值与蒙特卡洛验证）。
- Capello, E., et al., 2017, "Sliding-mode control strategies for rendezvous and docking maneuvers"（SMC 在交会对接的应用）。
