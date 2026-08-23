---
title: 相对运动（Relative Motion）
description: 一颗航天器（副星/deputy）相对于另一颗参考航天器（主星/chief）的位置和速度随时间演化。编队飞行、交会对接、近程操作的动力学基础：覆盖两体HCW方程、CR3BP相对运动方程（CLERM/ELERM/CNERM）及三角平动点解析解。
keywords: 相对运动, relative motion, Hill方程, Clohessy-Wiltshire方程, HCW, Hill坐标系, CR3BP相对动力学, CLERM, ELERM, CNERM, 相对定轨, 交会制导
sharingurl: 
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 相对运动（Relative Motion）
  desc: 一颗航天器相对于另一颗的位置速度演化：HCW、CR3BP及地月动力学。
  image: /logo.png
og:
  title: 相对运动（Relative Motion）详解 | 术语定义
  description: 一颗航天器相对于另一颗参考航天器的位置速度随时间的演化：覆盖 Hill-Clohessy-Wiltshire 方程、CR3BP 相对运动方程（CLERM/ELERM/CNERM）及三角平动点解析解。编队飞行与交会对接的动力学基础。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 相对运动（Relative Motion）详解 | 术语定义
  description: 覆盖 Hill-Clohessy-Wiltshire 方程、CR3BP 相对运动方程（CLERM/ELERM/CNERM）及三角平动点解析解。
  image: /logo.png
permalink: /glossary/dynamics/relative-motion/
---
# 相对运动（Relative Motion）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

**相对运动**（relative motion）指一颗航天器（副星/deputy/interceptor）相对于另一颗参考航天器（主星/chief/target）的位置和速度随时间的演化。它是编队飞行、交会对接、近程操作共同的动力学基座：无论是在两体开普勒轨道上，还是在多体地月动力学环境中。

相对运动模型的本质是将状态向量 $\delta\mathbf{r} = \mathbf{r}_{\text{副}} - \mathbf{r}_{\text{主}}$ 表示在固连于主星的参考系中。动力学模型的选取（两体 vs. CR3BP）和线性化策略（线性/非线性、圆形/椭圆）决定了方程的结构和适用范围。

## 两体近圆编队：Hill-Clohessy-Wiltshire（HCW）方程

假设主星在**圆形**开普勒轨道上，副星距离足够近（$\rho = |\delta\mathbf{r}| \ll r_{\text{主}}$），在主星固连的 RSW 系（径向-沿迹-法向）中线性化两体运动方程，得到 **Hill-Clohessy-Wiltshire（HCW）方程**（Clohessy & Wiltshire 1960；Vallado 2022 §6.8）：

$$
\ddot{x} - 2n\dot{y} - 3n^2 x = f_x, \quad
\ddot{y} + 2n\dot{x} = f_y, \quad
\ddot{z} + n^2 z = f_z
$$

其中 $n=\sqrt{\mu/r_{\text{主}}^3}$ 为主星轨道角速度，$(x,y,z)$ =（径向、沿迹、法向）相对位移分量。

各项的力学含义：$-3n^2 x$ 是两体径向差动的**潮汐拉伸**，$\pm 2n\dot{y}, \pm 2n\dot{x}$ 是旋转 RSW 系带来的**科氏加速度**，$z$ 方程是独立的角频率为 $n$ 的简谐振动。

**解**（自由运动，$f_i=0$）：

$$
\begin{aligned}
x(t) &= \frac{\dot{x}_0}{n}\sin(nt) - \left(3x_0 + \frac{2\dot{y}_0}{n}\right)\cos(nt) + \left(4x_0 + \frac{2\dot{y}_0}{n}\right) \\
y(t) &= \left(6x_0 + \frac{4\dot{y}_0}{n}\right)\sin(nt) + \frac{2\dot{x}_0}{n}\cos(nt) - (6n x_0 + 3\dot{y}_0)t + \left(y_0 - \frac{2\dot{x}_0}{n}\right) \\
z(t) &= z_0\cos(nt) + \frac{\dot{z}_0}{n}\sin(nt)
\end{aligned}
$$

$y(t)$ 中的**漂移项** $-(6n x_0 + 3\dot{y}_0)t$ 是 HCW 动力学最核心的实验事实：除非初始状态满足 $6n x_0 + 3\dot{y}_0 = 0$，副星将在沿迹方向长期漂移。满足该条件时，副星绕主星画出一个闭合的椭圆，即径向-沿迹长短轴比 1:2 的经典相对椭圆，是全球所有地球轨道编队设计的几何起点。

**局限性**：HCW 假设主星为圆轨道。当主星偏心率不可忽略时，误差急剧增大（Vallado 2022 图 6-37：LEO $e = 0.152$ 的例子每天漂移误差约 9 km）。椭圆轨道的推广是 **Tschauner-Hempel 方程**。但所有两体相对模型都**忽略第三体引力**，而地月空间恰是月亮或地球作为第三体的效应不可忽略的地方，因此 HCW 及其变体在地月空间不能直接套用。

## CR3BP 中的相对运动方程

当主、副星位于平动点附近时，二者同时处于两个主天体的引力场中，两体 HCW 不适用。标准做法是取主星轨迹为 CR3BP 会合系中的参考轨道 $\mathbf{x}_{\text{ref}}(t)$，对其做变分得到时变线性系统：

$$
\delta\dot{\mathbf{x}}(t) = A(t)\,\delta\mathbf{x}(t)
$$

其中 $A(t) = \partial\mathbf{f}/\partial\mathbf{x}|_{\mathbf{x}_{\text{ref}}(t)}$ 是在参考轨道上取值的 $6\times6$ 时变雅可比矩阵，包含科氏耦合项和伪势函数二阶空间导数。该系统是线性周期时变（LTP）系统，其 Floquet 乘子和特征向量决定了编队的稳定性、自然漂移和控制需求。

按精度递增，实践中引用三种模型：

- **圆型线性化相对运动方程（CLERM）**：CR3BP 下一阶变分方程 $\delta\dot{\mathbf{x}} = A(t)\delta\mathbf{x}$。是平动点编队动力学分析和控制器设计的标准模型（Marchand & Howell 2005）。$A(t)$ 含科氏耦合和时变重力梯度。

- **圆型非线性相对运动方程（CNERM）**：CR3BP 完整非线性方程的主-副星位置差分。保留全部非线性引力项，适用于近程交会末段制导。Innocenti et al.（2022）报告远月点附近精度可达厘米级，满足近程交会制导需求。

- **椭圆线性化相对运动方程（ELERM）**：在椭圆限制性三体问题（ER3BP）框架下对参考轨道做线性化。$A(t)$ 不仅依赖时间，还通过主星真近点角参数化。用于需考虑月球轨道偏心率（$e_M \approx 0.055$）的任务。

## 三角平动点的相对运动解析解

Catlin & McLaughlin（2007）推导了地月 $L_4$ 点相对运动的解析解。线性化 CR3BP 方程在主星固连主轴系下导出两类本征频率：长周期 $s_1$ 与短周期 $s_2$，外加独立的法向简谐振荡（无量纲频率 $s_z = 1$）。

通解是两模态的线性叠加：

$$
\begin{aligned}
\bar{\xi}_r(t) &= A_1\cos(s_1 t) + B_1\sin(s_1 t) + A_2\cos(s_2 t) + B_2\sin(s_2 t) \\
\bar{\eta}_r(t) &= \bar{A}_1\cos(s_1 t) + \bar{B}_1\sin(s_1 t) + \bar{A}_2\cos(s_2 t) + \bar{B}_2\sin(s_2 t) \\
\bar{\zeta}_r(t) &= \bar{\zeta}_{r_0}\cos(t) + \dot{\bar{\zeta}}_{r_0}\sin(t)
\end{aligned}
$$

其中 $\xi_r, \eta_r, \zeta_r$ 是原点置于领航星且坐标轴对齐到主轴方向的会合系相对坐标。选取只激励 $s_1$ 或只激励 $s_2$ 的初始条件，可以分离出纯长周期或纯短周期的相对椭圆，可用于设计自然平行编队或前后跟随编队。解析近似总幅值误差在最大幅值的 3% 以内（与 CR3BP 数值积分对比）。

## 相关概念

- [航天器编队飞行（Spacecraft Formation Flying）](/glossary/dynamics/spacecraft-formation-flying/)

- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)

- [椭圆限制性三体问题（ER3BP）](/glossary/dynamics/er3bp/)

- [会合坐标系（Synodic Frame）](/glossary/fundamentals/synodic-frame/)

- [Hill 模型（Hill Model）](/glossary/dynamics/hill-region-and-hill-problem/)

- [线性化（Linearization）](/glossary/fundamentals/linearization/)

- [单值矩阵（Monodromy Matrix）](/glossary/dynamics/monodromy-matrix/)

## 参考文献

- Clohessy, W. H., Wiltshire, R. S., 1960, Terminal Guidance System for Satellite Rendezvous, *Journal of the Aerospace Sciences*, 27(9): 653–674.

- Vallado, D.A., 2022, *Fundamentals of Astrodynamics and Applications*, 5th ed., Microcosm Press, §6.8.

- Catlin, K. A., McLaughlin, C. A., 2007, Earth–Moon triangular libration point spacecraft formations, *J. Guidance, Control, Dyn.*, 30(2): 563–574.

- Marchand, B. G., Howell, K. C., 2005, Control strategies for formation flight in the vicinity of the libration points, AAS 03-113, *J. Guidance, Control, Dyn.*, 28(6): 1210–1219.

- Héritier, A., Howell, K. C., 2014, Dynamical evolution of natural formations in libration point orbits in a multi-body regime, *Acta Astronautica*, 102: 81–94.

- Innocenti, M. et al., 2022, Dynamics and control analysis during rendezvous in non-Keplerian Earth–Moon orbits, *Frontiers in Space Technologies*.

- Scheeres, D.J., Vinh, N.X., 2003, Stabilizing motion relative to an unstable orbit: applications to spacecraft formation flight, *J. Guidance, Control, Dyn.*, 26(1): 62–73.
