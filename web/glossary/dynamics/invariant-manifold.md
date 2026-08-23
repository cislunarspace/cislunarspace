---
title: 不变流形（Invariant Manifold / Stable & Unstable Manifolds）
description: 圆型限制性三体问题中平动点周期轨道的稳定与不稳定不变流形：定义、单值矩阵计算、流形管与分支、参数化、伪流形/扰动流形等工程近似，以及地月/日地系统实例与跨系统拼接。
keywords: 不变流形, Invariant Manifold, 稳定流形, 不稳定流形, Stable Manifold, Unstable Manifold, 流形管, 单值矩阵, 低能转移, 平动点轨道
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 不变流形（Invariant Manifold）
  desc: 三体问题中流形管、稳定/不稳定流形与低能转移设计的核心几何工具。
  image: /logo.png
og:
  title: 不变流形详解 | 平动点轨道动力学
  description: 圆型限制性三体问题中平动点周期轨道的稳定与不稳定不变流形：定义、单值矩阵计算、流形管与分支、参数化、工程近似与地月/日地系统实例。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 不变流形详解 | 平动点轨道动力学
  description: 圆型限制性三体问题中平动点周期轨道的稳定与不稳定不变流形：定义、单值矩阵计算、流形管与分支、参数化、工程近似与地月/日地系统实例。
  image: /logo.png
permalink: /glossary/dynamics/invariant-manifold/
---

# 不变流形（Invariant Manifold / Stable & Unstable Manifolds）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

在动力系统理论中，**不变流形**（invariant manifold）是在系统流作用下保持不变的集合：若某时刻状态位于该集合上，则过去与未来所有时刻的状态仍位于其上（Gómez et al. 2001；Koon et al. 1999）。对圆型限制性三体问题（CR3BP），最常用的不变流形是平动点周期轨道（如 Halo、Lyapunov 轨道）的**稳定流形** $W^s$ 与**不稳定流形** $W^u$。

设周期轨道为 $\Gamma$，其附近状态为 $x$，流映射为 $\phi^t$，则

$$W^s(\Gamma)=\{x:\lim_{t\to+\infty}\mathrm{dist}(\phi^t(x),\Gamma)=0\},$$

$$W^u(\Gamma)=\{x:\lim_{t\to-\infty}\mathrm{dist}(\phi^t(x),\Gamma)=0\}.$$

稳定流形上的轨道在正向时间自然趋近目标周期轨道，可用于捕获或到达；不稳定流形上的轨道在反向时间趋近目标轨道、正向时间离开，可用于出发或逃逸。

## 单值矩阵与局部线性化

CR3BP 状态方程 $\dot{x}=f(x)$ 的变分方程为

$$\dot{\Phi}(t,0)=A(t)\Phi(t,0),\quad A(t)=\frac{\partial f}{\partial x}\bigg|_{x(t)},\quad \Phi(0,0)=I.$$

沿周期轨道 $\Gamma$ 积分一个周期 $T$ 得到 **单值矩阵**（monodromy matrix） $M=\Phi(T,0)$。$M$ 的特征值决定局部稳定性：Hamilton 系统特征值成倒数与共轭对出现。共线平动点附近的周期轨道通常具有一对实特征值 $\lambda_s<1$、$\lambda_u=1/\lambda_s>1$（双曲方向），以及两对模为 1 的复特征值（中心方向），即 **saddle×center×center** 结构（Koon et al. 1999；Szebehely 1967）。

对应 $\lambda_s$、$\lambda_u$ 的特征向量 $v_s$、$v_u$ 给出周期轨道上每一点的局部稳定/不稳定方向。若 $x_p(\tau)$ 为轨道上相位 $\tau\in[0,T)$ 处的状态，则流形初值可取

$$x(0)=x_p(\tau)\pm\varepsilon\,\Phi(\tau,0)v_{s/u},\quad 0<\varepsilon\ll1,$$

沿稳定方向正向积分、沿不稳定方向反向积分得到稳定流形，反之得到不稳定流形。符号 $\pm$ 产生同一条流形的两个**分支**（branch），在位置空间中常分别指向不同区域。

## 流形管、分支与方向约定

CR3BP 中，周期轨道的全部稳定（或不稳定）流形在相空间中形成**流形管**（invariant manifold tube）。在平面问题中，流形管是 3 维能量面上分隔穿越轨道与非穿越轨道的分界线；在空间问题中，流形管仍是设计低能转移的拓扑通道（Gómez et al. 2001；Howell & Kakoi 2006）。

对地月 $L_2$ Halo 轨道，稳定流形常分为：

- **内部稳定流形**（interior branch）：向月球方向延伸，可用于环月轨道到 Halo 轨道的低能转移；

- **外部稳定流形**（exterior branch）：背离月球、向地月系统外侧延伸，可用于近地轨道到 Halo 轨道的转移。

类似地，不稳定流形也可按正向演化方向分为内部/外部分支。部分文献还把垂直于轨道平面的分支称为**垂直稳定/不稳定流形**，用于研究面外偏差演化。

## 计算与工程近似

实际任务中，不变流形通常按以下步骤生成：

1. 用微分修正法求解目标周期轨道；
2. 数值积分状态转移矩阵，计算单值矩阵与特征向量；
3. 在周期轨道离散点上沿特征方向施加小扰动，得到**流形初值/起点**；
4. 沿相应时间方向积分得到流形上的状态序列，即**流形传播**。

为加速优化，常预计算**流形插值数据库**：以轨道相位 $\tau$ 和流形积分时间 $t$ 为双索引，存储六维状态，再用二维插值快速查询流形点（Pontani & Teofilatto 2016）。

自然流形未必精确满足任务约束（如近月点高度、到达时间）。工程中引入两类近似：

- **伪流形**（pseudo-manifold）：在理想 CR3BP 流形上施加微小速度增量，使轨迹满足约束，扩展可行域（Davis, Born & Butcher 2013）；

- **扰动流形**（disturbed manifold）：在自然不稳定流形特定位置施加一次机动，改变演化路径以命中目标轨道。

**穿刺点**（piercing point）是流形与参考平面的交点，例如地月转移中取过地球的 $yz$ 平面（$x=-\mu$）。穿刺点的地心距、倾角、偏心率是选择转移初始条件的重要依据。

## 地月/日地流形与跨系统拼接

地月系统与日地系统的平动点轨道各自拥有不变流形。当两套流形在公共参考平面（如庞加莱截面）上的位置投影重叠时，可在交点处通过一次速度增量完成**系统间转移**（Howell & Kakoi 2006）。这类流形交叠是构造日地 $L_2$ ↔ 地月 $L_1/L_2$ 低能通道的几何前提，也是星际高速公路在地球邻域的具体实现。

## 应用要点

- **低能转移**：利用不稳定流形出发、稳定流形到达，可显著降低转移所需 $\Delta V$；

- **轨道保持**：轨道保持的靶点法本质是让航天器沿稳定流形回到参考轨道；

- **任务设计流程**：流形提供良好初值，随后用微分修正过渡到高精度星历模型。

## 相关概念

- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)

- [雅可比积分（Jacobi Integral）](/glossary/dynamics/jacobi-integral/)

- [单值矩阵（Monodromy Matrix）](/glossary/dynamics/monodromy-matrix/)

- [庞加莱截面（Poincaré Section）](/glossary/dynamics/poincare-section/)

- [Halo 轨道](/glossary/orbits/halo-orbit/)

- [Lyapunov 轨道](/glossary/orbits/lyapunov-orbit/)

- [弱稳定边界（WSB）](/glossary/dynamics/wsb/)

- [中心流形](/glossary/dynamics/center-manifold/)

## 参考文献

- Gómez, G., Koon, W. S., Lo, M. W., Marsden, J. E., Masdemont, J., & Ross, S. D. (2001). Invariant manifolds, the spatial three-body problem and space mission design.

- Koon, W. S., Lo, M. W., Marsden, J. E., & Ross, S. D. (1999). The Genesis trajectory and heteroclinic connections.

- Koon, W. S., Lo, M. W., Marsden, J. E., & Ross, S. D. (2006/2011). Dynamical systems, the three-body problem and space mission design.

- Howell, K. C., & Kakoi, M. (2006). Transfers between the Earth–Moon and Sun–Earth systems using manifolds and transit orbits.

- Szebehely, V. (1967). Theory of Orbits: The Restricted Problem of Three Bodies.

- Vallado, D. A. (2022). Fundamentals of Astrodynamics and Applications.

- Davis, K., Born, G., & Butcher, E. (2013). Transfers to Earth-Moon L3 Halo orbits. *Acta Astronautica*, 88, 116–128.

- Pontani, M., & Teofilatto, P. (2016). Polyhedral representation of invariant manifolds applied to orbit transfers in the Earth–Moon system.

- 钱霙婧. (2014). 地月空间拟周期轨道上航天器自主导航与轨道保持研究. 哈尔滨工业大学.

- 彭坤 等. (2016). 基于不变流形的地月 L2 点 Halo 轨道转移轨道设计.
