---
title: 低能转移（Low-Energy Transfer）
description: 利用多体动力学中的不变流形结构实现航天器在极小燃料消耗下的轨道转移。覆盖低能转移原理、不变流形管道与动力学通道、引力高速公路/行星际超级高速公路（IPS）、颈部穿越与转移性判据、弹道段拼接等核心概念。
keywords: 低能转移, 弹道转移, 不变流形, 引力高速公路, 行星际超级高速公路, 动力学通道, 瞬变通道, 转移性, Low-Energy Transfer, Ballistic Transfer, Gravitational Superhighway, Interplanetary Superhighway, IPS, Dynamical Channel, Transit Gate, Free Transfer, 地月转移, 动力系统方法
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 低能转移（Low-Energy Transfer）
  desc: 利用不变流形实现极小燃料消耗的轨道转移
  image: /logo.png
og:
  title: 低能转移（Low-Energy Transfer）详解 | 术语定义
  description: 利用多体动力学中的不变流形结构实现航天器在极小燃料消耗下的轨道转移。覆盖低能转移原理、不变流形管道与动力学通道、引力高速公路/IPS、颈部穿越与转移性判据。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 低能转移（Low-Energy Transfer）详解 | 术语定义
  description: 利用多体动力学中的不变流形结构实现航天器在极小燃料消耗下的轨道转移。
  image: /logo.png
permalink: /glossary/dynamics/low-energy-transfer/
---

# 低能转移（Low-Energy Transfer）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

低能转移（low-energy transfer）是指利用多体引力环境——特别是限制性三体/四体问题的**不变流形**自然动力学结构——实现的轨道转移，其燃料消耗远低于经典的圆锥曲线拼接法给出的结果（Koon et al. 2000；Parker & Anderson 2014）。

在传统二体框架下，转移轨道设计以圆锥曲线拼接（patched-conics）为基础：将飞行路径分割为若干段，每段由单个天体的二体轨道近似。这一范式对近地轨道任务足够准确，但在涉及地月空间、日地系统或行星际航行时，多体效应变得不可忽略——而低能转移正是利用这些"凌乱"的多体效应，把摄动从"误差源"变成"资源"。

低能转移的几个同义或近义术语反映了侧重面的不同：

- **弹道转移（ballistic transfer）**：强调全程不施加推力、仅靠引力完成（Anderson & Parker 2012）——这是低能转移的理想极限。

- **自由转移（free transfer）**：强调利用稳定流形"管道"实现零燃料漂移（Renk et al. 2010）。

- **动力系统方法（dynamical systems approach）**：指利用不变流形、异宿/同宿连接等进行轨道设计的方法论（Bello et al. 2010）。

- **引力高速公路（gravitational superhighway）**：形象化地描述由不变流形管交织成的低能传输通道网络。

## 不变流形管道

低能转移的数学核心是 CR3BP 中平动点周期轨道（Lyapunov 或 Halo 轨道）的**稳定流形 $W^s$ 与不稳定流形 $W^u$**。

令 $\mathbf{X}_0$ 为周期轨道上一点，$\Phi(T, 0)$ 为其单值矩阵，其特征向量 $\mathbf{v}^s$（对应特征值 $|\lambda_s| < 1$）和 $\mathbf{v}^u$（对应 $|\lambda_u| > 1$）分别给出该点的稳定方向和不稳定方向。从周期轨道上每一点出发，沿 $\mathbf{v}^s$ 方向给一个小扰动并反向积分，即得稳定流形管上的一条轨道；沿 $\mathbf{v}^u$ 方向给扰动并正向积分，即得不稳定流形管上的一条轨道。

整族这样的轨道形成一个四维（空间 CR3BP）或六维（平面 CR3BP）状态空间中的**管状结构**——这就是不变流形管（invariant manifold tube）。在会合坐标系中，不稳定的管将处于月球附近的航天器"排出"；稳定的管则将远处（如地球近旁）的航天器"吸入"。低能转移设计的关键步骤就是在 Poincaré 截面上寻找稳定管与不稳定管的**交叠区域**（Koon et al. 2000）。

### 弹道段（Ballistic Arc）

沿不变流形管飞行的弧段称为**弹道段**——航天器不施加推力，仅受天体引力作用。在 CR3BP 中沿弹道段雅可比常数守恒。完整的低能转移轨迹由弹道段与推力段交替拼接而成：弹道段沿流形飞行，推力段调节能量使不同系统/不同能量水平的流形在截面处匹配（Ren et al. 2012）。

## 颈部穿越与瞬变通道

在零速度面的拓扑中，$L_1$ 和 $L_2$ 平动点是连接不同"区域"（realm）的关口。当航天器的雅可比常数 $C$ 满足 $C_2 < C < C_1$ 时，$L_1$ 处打开一个**瞬变通道（transit gate）**——航天器可穿过此通道，在地球区域和月球区域之间自由来往（Campana et al. 2024）。$C$ 进一步降低到 $C_3 < C < C_2$ 时，$L_2$ 处也打开，提供通往外部空间的通道。

在多体环境中，这些通道在状态空间中构成**动力学通道（dynamical channel）**——天然形成的输运路径，不仅用于航天器转移设计，也解释了太阳系中流星、彗星等的迁移（Bello et al. 2010）。

### 转移性（Transitability）

转移性是由 Cox 等（2021）提出的二元判断指标：在给定的低推力加速度、推力角和低推力哈密顿量组合下，是否存在穿越 $L_1/L_2$ 通道的可行轨道。转移性为"是"意味着无需高代价的机动即可实现区域间穿越，为"否"则意味着在该参数组合下不可能——这为低推力轨道搜索提供了初步筛查工具，避免在不可行参数区域浪费计算。

## 行星际超级高速公路（IPS）

行星际超级高速公路（Interplanetary Superhighway, IPS）是低能转移概念的行星际尺度推广（Lo 2002）。其核心思想是：将不同三体系统（如日地系统与地月系统）的平动点轨道的不变流形**拼接**起来，形成跨越全部内行星区域、甚至延伸到外行星的低能量传输网络。

一条典型的 IPS 轨道可能如下：航天器从地球发射 → 进入日地 $L_1/L_2$ Halo 轨道的稳定流形管道 → 沿流形自然漂移至平动点轨道附近 → 施加小脉冲在 Poincaré 截面上跳转到另一个三体系统的流形管 → 最终到达目标天体附近。整个过程中，**脉冲仅用于流形管之间的"换乘"**，绝大部分飞行里程是无推力滑行。

IPS 的实际应用包括 NASA 的 Genesis 任务（利用日地 $L_1$ 流形往返）和 MAP（现名 WMAP）任务（利用日地 $L_2$ 流形进入目标轨道）（Lo 2002）。在地月尺度上，IPS 的对应概念常被称为"引力高速公路"（gravitational superhighway）或"地月低能转移通道"，其本质相同：利用不变流形管的交织网络进行传输。

### 低能转移门户（LETG）

低能转移门户（Low-Energy Transfer Gateway, LETG）是弱稳定边界转移中的一个具体概念：在 DRO 捕获投影面上，转移轨道与 DRO 捕获轨道实现机械能匹配的交汇区域（Wang et al. 2025）。LEG 是从能量角度表征"在哪里插入 DRO 最省燃料"的几何条件。

## 局限性

低能转移并非没有代价：

- **转移时间**：低能转移通常需要 80--120 天（地月系），而直接转移仅需 3--5 天。时间成本是限制其工程应用的首要因素。

- **转移窗口**：低能转移窗口受日地月相对几何约束，通常每月仅有数天可用。

- **数值敏感**：流形管道区域（尤其在颈部附近）对初始条件极其敏感，小幅扰动导致轨道急剧发散，这增加了导航和轨道确定的难度。

- **发射能量**：虽然到达端的 $\Delta v$ 很小，但某些低能转移方案要求出发端较大的初始能量（如进入弱稳定边界所需的大椭圆轨道）。

## 相关概念

- [弹道捕获（Ballistic Capture）](/glossary/dynamics/ballistic-capture/)

- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)

- [不变流形（Invariant Manifold）](/glossary/dynamics/invariant-manifold/)

- [稳定流形（Stable Manifold）](/glossary/dynamics/invariant-manifold/)

- [不稳定流形（Unstable Manifold）](/glossary/dynamics/invariant-manifold/)

- [弱稳定边界（WSB）](/glossary/dynamics/wsb/)

- [零速度曲面（Zero-Velocity Surface）](/glossary/dynamics/zero-velocity-surface/)

- [雅可比积分（Jacobi Integral）](/glossary/dynamics/jacobi-integral/)

- [庞加莱截面（Poincaré Section）](/glossary/dynamics/poincare-section/)

- [异宿轨道转移（Heteroclinic Orbit Transfer）](/glossary/dynamics/heteroclinic-orbit-transfer/)

- [同宿连接（Homoclinic Connection）](/glossary/dynamics/heteroclinic-orbit-transfer/)

- [平动点（Libration Point）](/glossary/fundamentals/libration-point/)

- [会合坐标系（Synodic Frame）](/glossary/fundamentals/synodic-frame/)

- [Halo 轨道（Halo Orbit）](/glossary/orbits/halo-orbit/)

## 参考文献

- Koon, Lo, Marsden, & Ross, 2000, Dynamical systems, the three-body problem and space mission design, *Celest. Mech. Dyn. Astron.*

- Parker & Anderson, 2014, *Low-Energy Lunar Trajectory Design*, JPL Deep-Space Communications and Navigation Series

- Anderson & Parker, 2012, Comparison of low-energy lunar transfer trajectories, *J. Guidance, Control, and Dynamics*

- Lo, 2002, The interplanetary superhighway and the origins program, *IEEE Aerospace Conference*

- Bello, Gomez, & Masdemont, 2010, Invariant manifolds, Lagrangian trajectories and space mission design, in *Space Manifold Dynamics*, Springer

- Renk, Hechler, & Messerschmid, 2010, Exploration missions in the Sun-Earth-Moon system, *Acta Astronautica*

- Campana et al., 2024, Low-energy earth–moon transfers via theory of functional connections and homotopy, *Celest. Mech. Dyn. Astron.*

- Cox et al., 2021, Transitability of low-thrust transfers through libration point gateways

- Ren et al., 2012, Earth-Moon low-energy transfer using invariant manifolds, *Celest. Mech. Dyn. Astron.*

- Wang et al., 2025, Mechanism analysis of the DRO low-energy transfer problem: An energy perspective

- Belbruno, 2004, *Capture Dynamics and Chaotic Motions in Celestial Mechanics*, Princeton University Press

- 李翔宇, 乔栋, 程潏, 2021, 三体轨道动力学研究进展, *力学进展*

- Perozzi & Ferraz-Mello (eds.), 2010, *Space Manifold Dynamics*, Springer
