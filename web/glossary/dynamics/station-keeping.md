---
title: 轨道维持（Station-Keeping / Orbit Maintenance）
description: 在三体摄动下将航天器保持在标称轨道附近的控制操作——涵盖地月空间 NRHO/DRO/Halo 三类轨道、脉冲与连续推力两种方式、目标点 / Floquet / DLQR / x 轴控制四种策略，以及 Zhang & Wang 2022 的跨轨道年度成本对比数据。
keywords: 轨道维持, Station-Keeping, 驻留维持, 地月空间, NRHO, DRO, Halo轨道, 平动点, 目标点法, Floquet模式, DLQR, 脉冲驻留, 年化驻留成本, 太阳辐射压
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 轨道维持（Station-Keeping / Orbit Maintenance）
  desc: 在三体摄动下将航天器保持在标称轨道附近的控制操作，覆盖策略、成本与工程约束。
  image: /logo.png
og:
  title: 轨道维持（Station-Keeping）详解 | 术语定义
  description: 在三体摄动下将航天器保持在标称轨道附近的控制操作——涵盖地月空间 NRHO/DRO/Halo 三类轨道、脉冲与连续推力两种方式、目标点 / Floquet / DLQR / x 轴控制四种策略，以及跨轨道年度成本对比数据。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 轨道维持（Station-Keeping）详解 | 术语定义
  description: 在三体摄动下将航天器保持在标称轨道附近的控制操作——涵盖地月空间 NRHO/DRO/Halo 三类轨道、脉冲与连续推力两种方式、目标点 / Floquet / DLQR / x 轴控制四种策略，以及跨轨道年度成本对比数据。
  image: /logo.png
permalink: /glossary/dynamics/station-keeping/
---

# 轨道维持（Station-Keeping / Orbit Maintenance）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

轨道维持（station-keeping，也称驻留维持、轨道保持）是指对航天器施加推力机动，以抵消摄动引起的漂移，将其实际轨迹控制在标称轨道规定的偏差范围内。在二体问题下，轨道维持主要用于克服大气阻力等耗散力；在地月三体空间中，轨道维持面对的是一类动力学上全新的问题：许多标称轨道本身是不稳定的（如共线平动点 halo 轨道），即使无摄动，初始偏差也会以时间常数短至数天的 e 指数增长而放大，加之太阳引力、太阳辐射压（Solar Radiation Pressure, SRP）和月球非球形引力等摄动的长期累积，航天器持续偏离设计轨道是不可避免的（Folta 等, 2014；Zhang 等, 2022）。

轨道维持在工程上不是一次性的轨道修正，而是贯穿任务全寿命的**周期性控制闭环**：导航系统定轨、地面/星上计算修正机动、推进系统执行脉冲或连续推力，如此循环。两次机动之间的自然漂移-修正间隔称为脉冲间隔（impulse interval 或 coast duration），典型值从 2 天到数十天不等，视轨道稳定性而定。

## 为什么需要轨道维持：摄动源

在地月空间中，驱动轨道漂移的摄动源按阶次排列如下：

- **轨道不稳定性的本征发散（首要驱动）**：共线平动点 L1/L2 附近的轨道（halo、Lyapunov、NRHO 的大幅值分支）具有一对实 Floquet 乘子，其不稳定特征值 $\lambda > 1$，使得任意初始偏差沿不稳定流形方向以 e 指数增长。对于地月 halo 轨道，发散时间常数约为 5-14 天，ARTEMIS 任务的实际经验是大约每周需要一次维持机动（Folta 和 Vaughn, 2004；Pavlak 和 Howell, 2012）。

- **太阳引力（第三体摄动）**：在共线平动点附近，太阳引力加速度的量级约 $5 \times 10^{-6}$ m/s$^2$，与不稳定流形诱发的漂移在同一数量级（Folta 等, 2014）。

- **太阳辐射压（SRP）**：对面积质量比为典型值的航天器（如 Gateway 级：面积 50 m$^2$，质量 25.8 吨），SRP 加速度约 $2 \times 10^{-7}$ m/s$^2$。单独看不大，但如果标称轨道是在不含 SRP 的低保真模型（CR3BP）中构造的，忽略 SRP 会导致额外每年 5-6 m/s 的维持成本（Zhang 等, 2022，Table 7）。

- **月球非球形引力**：对低近月点轨道（如 NRHO 近月点仅 ~3200 km，贴月极近），高阶球谐项（GRAIL 模型截断到 8 阶）显著改变近月点附近的动力学。忽略月球非球形引力导致 NRHO 的年维持成本从 1.63 跃升至 3.68 m/s（Zhang 等, 2022）。

- **行星摄动**：木星引力的影响通常小于 1%，实际任务可忽略或酌情保留。

## 分类：脉冲推力与连续推力

按推力实施方式分为两大类：

**脉冲驻留（Impulsive Station-Keeping）**：以离散的速度增量 $\Delta V$（脉冲）形式施加机动，两次脉冲之间航天器沿自然动力学自由漂移。这是当前工程实践中的主流方案，ARTEMIS、Gateway、Chang'E-4 中继星等任务均采用脉冲方式（Folta 等, 2014；Muralidharan 和 Howell, 2021）。脉冲驻留的数学形式是在离散时刻 $t_k$ 对状态施加瞬时跳变：

$$
\mathbf{x}(t_k^+) = \mathbf{x}(t_k^-) + \begin{bmatrix} \mathbf{0} \\ \Delta \mathbf{v}_k \end{bmatrix}
$$

**连续推力驻留（Continuous / Low-Thrust Station-Keeping）**：使用电推进（如霍尔推进器）以微小推力持续施加控制。在数学上，控制力 $\mathbf{u}(t)$ 进入运动方程右端，不再假设瞬时跳变。连续推力可以更精细地抵消不稳定分量，在燃料最优意义下潜力更大，但受限于当前推进系统的低推重比，实际任务仍以脉冲为主流（Zhang 和 Wang, 2022）。

## 控制策略

以下四种策略构成了地月空间轨道维持的主流方法论体系，按历史渊源和工程成熟度排列：

### 目标点法（Target Point Method）

由 Howell 和 Pernicka（1993）提出。核心思想是将标称轨道离散化为一系列按时间索引的目标点 $\{\mathbf{x}^*_k\}$，当前偏差 $\delta \mathbf{x}_k = \mathbf{x}_k - \mathbf{x}^*_k$ 通过状态转移矩阵 $\Phi(t_{k+1}, t_k)$ 向前传播，预测未来目标点的位置/速度偏差，然后通过最小化性能指标

$$
J = \Delta \mathbf{v}^T \mathbf{Q} \Delta \mathbf{v} + \sum_{i=1}^{n} (\mathbf{p}_i^T \mathbf{R}_i \mathbf{p}_i + \mathbf{v}_i^T \mathbf{S}_i \mathbf{v}_i)
$$

求解最优脉冲 $\Delta \mathbf{v}$（Zhang 等, 2022）。最简单的变体仅使未来位置偏差为零，表达式为 $\Delta \mathbf{v} = -(\mathbf{B}_k^{k+1})^{-1}(\mathbf{A}_k^{k+1} \mathbf{p}_k + \mathbf{B}_k^{k+1} \mathbf{v}_k)$，其中 $\mathbf{A}, \mathbf{B}$ 为状态转移矩阵的分块。

目标点法在 DRO 和 halo 轨道上效果良好；Zhang 等（2022）报告，对 2:1 DRO，考虑成本指标的目标点法年成本仅 1.12 m/s。但对 NRHO 可能失败，原因是 NRHO 近月点区域的动力学高度敏感，目标点法在强非线性条件下线性预报失准。

### Floquet 模式法（Floquet Mode Approach）

利用周期轨道的 Floquet 理论：单值矩阵 $\mathbf{M}$ 的特征结构区分不稳定、稳定和中心模态。在脉冲时刻沿不稳定特征向量施加速度增量，恰好抵消当前偏差沿不稳定方向的分量，从而实现切除发散而不浪费推力在稳定/中心方向（Gómez 等, 2001；Simó 等, 1987）。ARTEMIS 任务的事后分析表明，实际执行的约 60 次维持机动的 $\Delta V$ 方向与当地稳定特征向量高度对齐（Pavlak 和 Howell, 2012），这意味着最优机动并非简单抵消不稳定模态，而是**利用稳定模态将航天器自然拉回**。

该方法的局限在于：它依赖周期轨道的 Floquet 分解，对拟周期轨道（如星历模型中的 NRHO）不直接适用；对稳定或近稳定的轨道（如 NRHO 的低幅值分支），不稳定分量本身很小甚至不存在，Floquet 法退化为非最优（Muralidharan 和 Howell, 2021）。

### 离散线性二次型调节器（DLQR）

将轨道维持建模为离散线性系统的二次型最优控制问题。以状态转移矩阵 $\mathbf{A} = \Phi(t_{k+1}, t_k)$ 和控制矩阵 $\mathbf{B}$ 构造离散动力学

$$
\mathbf{x}_{k+1} = \mathbf{A}\mathbf{x}_k + \mathbf{B}\Delta \mathbf{v}_k
$$

然后求解离散代数 Riccati 方程得到时不变反馈增益 $\mathbf{K}$，使 $\Delta \mathbf{v}_k = -\mathbf{K} \mathbf{x}_k$（详见 [离散线性二次调节器（DLQR）](/glossary/dynamics/dlqr/)）。DLQR 的优势在于计算效率高（增益可预计算存储）、不依赖标称轨道的周期结构，对拟周期轨道和星历模型中的轨道同样适用。Zhang 等（2022）的 200 次蒙特卡洛仿真表明，DLQR 在所有策略中平均成本最低（2:1 DRO：0.82 m/s/年；halo(3)：1.15 m/s/年；9:2 NRHO：1.63 m/s/年）。

### x 轴控制策略（x-Axis Control）

这是 Gateway 任务当前采用的工程化方法（Muralidharan 和 Howell, 2021；Davis 等, 2017）。其核心依赖 NRHO 在会合坐标系中对 xz 平面的对称性：在 CR3BP 模型中，轨道穿过 xz 平面时 $\dot{x} = 0$。策略在远月点附近施加机动，目标是使航天器在**下游若干圈的近月点 xz 平面穿越处**的 $\dot{x}$ 值与参考轨迹匹配（容差约 0.45 m/s）。

该策略有三个可调参数，相互耦合影响性能（Muralidharan 和 Howell, 2021）：

- **漂移时长（coast duration）**：两脉冲间的最短间隔。稳定轨道可接受较宽间隔以降低成本，不稳定轨道需频繁修正。

- **机动位置（maneuver location）**：一般选在远月点附近：虽非动力学最敏感区（最敏感区在近月点），但导航误差在敏感区会被急剧放大，实践中反而不宜在敏感区执行机动。

- **目标视界（target horizon）**：从机动到目标穿越的圈数。更远的目标视界产生更小幅值的机动，但受任务约束（如测控窗口）可能必须限制视界。

## 年化驻留成本：不同轨道的对比

年化驻留成本（Annual Station-Keeping Cost）是衡量轨道维持经济性的核心指标，定义为全年累计消耗的 $\Delta V$（单位 m/s）。Zhang 等（2022）在完整星历模型中对三类地月典型轨道做了系统性的蒙特卡洛评估（200 次仿真，含导航误差 1 km / 1 cm/s、机动误差 1%，2 天脉冲间隔），主要结论：

| 轨道 | 周期 (天) | 稳定指数 $\nu$ | DLQR 年成本 (m/s) |
|------|-----------|-----------------|---------------------|
| DRO (5)：2:1 共振 | 13.66 | 1.000（稳定） | 0.82 |
| DRO (1)：小振幅 | 5.46 | 1.000（稳定） | 1.96 |
| halo (3)：中等振幅 | 13.35 | 51.6（强不稳定） | 1.15 |
| halo (1)：大振幅 | 14.58 | 349.0（极强不稳定） | 1.25 |
| NRHO (4)：9:2 共振 | 6.56 | 1.32（近稳定） | 1.63 |
| NRHO (5)：最低近月点 | 6.13 | 1.09（近稳定） | 2.78 |

关键发现（Zhang 等, 2022）：**稳定指数 $\nu$ 与年维持成本之间没有直接的单调关系。** 稳定轨道（如 DRO，$\nu = 1$）并不必然比不稳定轨道（halo，$\nu \gg 1$）省钱，因为维持成本是导航误差、机动执行误差、SRP 建模误差和脉冲间隔的综合博弈，不稳定轨道可以通过用更高的脉冲频率对冲发散来实现总成本的可控。大幅值 DRO 因远离月球、动力学更平滑而成本最低（~0.82 m/s/年）；NRHO 因近月点敏感区的存在，即使 $\nu$ 接近 1，年成本也普遍高于 halo 轨道。

## 工程约束

实际任务规划中，几个现实约束决定了策略的可行性和优化方向（Zhang 等, 2022）：

- **初始入轨误差**：标称轨道插入后位置偏差约 10 km，速度偏差约 1 cm/s（3$\sigma$），通过随即方向分布引入蒙特卡洛仿真。

- **导航误差**：定轨间隔通常 2 天（即脉冲间隔下限），位置误差 3$\sigma \approx$ 1 km，速度 3$\sigma \approx$ 1 cm/s。

- **机动执行误差**：脉冲幅值的 1%（1$\sigma$）。

- **最小机动阈值**：实际推进系统无法执行任意小的脉冲，通常设 $\Delta v_{\min}$ = 1 cm/s，小于此阈值的指令脉冲不执行。

- **SRP 建模不确定性**：反射系数 $C_r$ 和有效截面积各有约 5-10% 的不确定性（Muralidharan 和 Howell, 2021），是长期仿真中最大的误差源之一。

## 相关概念

- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)

- [平动点（Libration Point）](/glossary/fundamentals/libration-point/)

- [不变流形（Invariant Manifold）](/glossary/dynamics/invariant-manifold/)

- [单值矩阵（Monodromy Matrix）](/glossary/dynamics/monodromy-matrix/)

- [离散线性二次调节器（DLQR）](/glossary/dynamics/dlqr/)

- [目标点策略（Target Point Strategy）](/glossary/dynamics/target-point-strategy/)

- [协态变量（Co-state Variables）](/glossary/dynamics/co-state-variables/)

- [零速度曲面（Zero-Velocity Surface）](/glossary/dynamics/zero-velocity-surface/)

- [太阳辐射压（Solar Radiation Pressure）](/glossary/dynamics/srp/)

- [庞加莱截面（Poincaré Section）](/glossary/dynamics/poincare-section/)

## 参考文献

- Folta, D. C., Pavlak, T. A., Haapala, A. F., Howell, K. C., & Woodard, M. A., 2014, Earth–Moon libration point orbit stationkeeping: Theory, modeling, and operations, *Acta Astronautica*（ARTEMIS 任务实际站保持数据、OCS 策略、Floquet 模态与最优机动方向的对齐关系）

- Folta, D., & Vaughn, F., 2004, A survey of Earth-Moon libration orbits: stationkeeping strategies and intra-orbit transfers, AIAA 2004-4741（dLQR 与 DC 方法对比，地月 L1-L5 全部平动点轨道的年成本调查）

- Zhang, R., Wang, Y., Shi, Y., Zhang, C., & Zhang, H., 2022, Performance analysis of impulsive station-keeping strategies for cis-lunar orbits with the ephemeris model, *Acta Astronautica*（目标点法 vs. DLQR、200 次蒙特卡洛仿真、SRP 和月球非球形引力对站保持成本的影响、不同脉冲间隔的对比）

- Pavlak, T. A., & Howell, K. C., 2012, Strategy for optimal, long-term stationkeeping of libration point orbits in the Earth-Moon system, AIAA 2012-4665（长期最优站保持策略、ARTEMIS 机动与稳定模态对齐的实证）

- Muralidharan, V., & Howell, K. C., 2021, Stationkeeping in Earth-Moon near rectilinear halo orbits, AAS 21-651（x 轴控制策略的参数耦合分析、CGT 拉伸方向用于机动位置选取）

- Gómez, G., Jorba, A., Masdemont, J., & Simó, C., 2001, *Dynamics and Mission Design Near Libration Points, Vol. II*（Floquet 模态法的经典来源）

- Davis, D. C., et al., 2017, Stationkeeping and transfer trajectory design for spacecraft in cislunar space, AAS 17-826（Gateway 任务站保持分析的早期框架）
