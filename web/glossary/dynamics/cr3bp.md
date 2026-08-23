---
title: 圆形限制性三体问题（Circular Restricted Three-Body Problem, CR3BP）
description: 地月空间轨道动力学的基础数学模型：在会合坐标系中，质量可忽略的航天器受地球和月球两个主天体引力作用，主天体绕公共质心作圆轨道运动。覆盖模型假设、无量纲化（DU/TU/MU）、运动方程、质量参数 μ、雅可比常数、零速度曲面、周期轨道与数值方法，以及椭圆型、摄动四体、小推力、太阳帆等扩展变体。
keywords: 圆形限制性三体问题, CR3BP, CRTBP, 限制性三体问题, R3BP, 会合坐标系, 雅可比常数, 零速度曲面, 质量参数, 无量纲化, 平动点, 周期轨道, 地月空间动力学
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 圆形限制性三体问题（CR3BP）详解
  desc: 地月空间动力学的基础模型：从定义到运动方程，从雅可比常数到周期轨道数值求解。
  image: /logo.png
og:
  title: 圆形限制性三体问题（CR3BP）详解 | 地月空间动力学基础
  description: 地月空间轨道动力学的基础数学模型：在会合坐标系中，质量可忽略的航天器受两个主天体引力作用，覆盖模型假设、无量纲化、运动方程、质量参数、雅可比常数、零速度曲面及扩展变体。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 圆形限制性三体问题（CR3BP）详解 | 地月空间动力学基础
  description: 地月空间轨道动力学的基础数学模型：在会合坐标系中，质量可忽略的航天器受两个主天体引力作用，覆盖模型假设、无量纲化、运动方程、质量参数、雅可比常数、零速度曲面及扩展变体。
  image: /logo.png
permalink: /glossary/dynamics/cr3bp/
---

# 圆形限制性三体问题（Circular Restricted Three-Body Problem, CR3BP）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义与分层

圆形限制性三体问题（Circular Restricted Three-Body Problem，CR3BP 或 CRTBP）是地月空间轨道动力学中应用最广泛的数学模型。它属于**限制性三体问题**（Restricted Three-Body Problem, R3BP）族，R3BP 是经典三体问题的一个特殊情形，作两条根本简化（Szebehely 1967；Vallado 2022）：

1. **限制性假设**：第三体（航天器）质量可忽略，受两个主天体引力作用但不反作用于主天体。
2. **唯引力假设**：仅考虑质点引力，无其他力。

CR3BP 在 R3BP 基础上进一步增加**圆轨道假设**：两主天体绕公共质心作匀速圆运动。若主天体实际在椭圆轨道上运动，则为**椭圆限制性三体问题**（ER3BP）；若圆轨道运动的假设放宽到含第四体，则进入**双圆限制性四体问题**（BCR4BP）。实际工程中，除非明确关注偏心率效应，限制性三体问题一词默认即指 CR3BP（Koon et al. 2011）。

## 会合坐标系与无量纲化

CR3BP 的标准研究框架是**会合坐标系**（synodic frame / rotating frame），原点在两主天体质心、随主天体连线同步旋转的参考系。在此系中：两个主天体固定在 x 轴上静止不动，运动方程化为自治系统；代价是引入科里奥利力和离心力项。坐标系细节见 [会合坐标系](/glossary/fundamentals/synodic-frame/)。

为消除方程中的量级差异、减少独立参数，CR3BP 惯例采用一套无量纲化（Szebehely 1967；Gómez et al. 2001）：

| 符号 | 名称 | 定义 | 地月系统 SI 值 |
| :--- | :--- | :--- | :--- |
| DU | 距离单位 | 两主天体间距 $\overline{P_1 P_2}$ | $3.844 \times 10^{5}$ km |
| MU | 质量单位 | $m_1 + m_2$ | $6.047 \times 10^{24}$ kg |
| TU | 时间单位 | $\sqrt{\mathrm{DU}^3 / (G \cdot \mathrm{MU})}$ | $3.752 \times 10^{5}$ s (~4.34 d) |

在这套单位下，引力常数 $G=1$，主天体公转角速度（平均运动）$n=1$，公转周期 $T=2\pi$ TU，唯一剩余参数是**质量参数** $\mu$。

## 质量参数 $\mu$

定义较小主天体质量占总质量之比：

$$\mu = \frac{m_2}{m_1 + m_2}, \quad m_2 \le m_1$$

在会合坐标系中，较大主天体 $P_1$ 位于 $(-\mu, 0, 0)$，较小主天体 $P_2$ 位于 $(1-\mu, 0, 0)$。常用系统值（Vallado 2022）：

| 系统 | $\mu$ | 备注 |
| :--- | :--- | :--- |
| 地月系 | $0.01215$ | 本词典默认语境 |
| 日地系 | $3.0404 \times 10^{-6}$ | $L_1$/$L_2$ 任务（JWST, SOHO） |
| 日-木系 | $9.537 \times 10^{-4}$ | 行星际传输研究 |
| 哥本哈根问题 | $0.5$ | 等质量理论基准（Szebehely 1967） |

$\mu$ 决定了所有平动点位置、零速度曲面拓扑和轨道族特征。$\mu \to 0$ 的极限退化为 **Hill 问题**，原点移至较小主天体。

## 动力学方程

无量纲化后，在会合坐标系中 CR3BP 的运动方程为（Koon et al. 2011；Szebehely 1967）：

$$
\begin{cases}
\ddot{x} - 2\dot{y} = \dfrac{\partial \Omega}{\partial x} \\[1em]
\ddot{y} + 2\dot{x} = \dfrac{\partial \Omega}{\partial y} \\[1em]
\ddot{z} = \dfrac{\partial \Omega}{\partial z}
\end{cases}
$$

其中有效势函数 $\Omega$（又称 pseudo-potential）为：

$$
\Omega(x,y,z) = \frac{1}{2}(x^2 + y^2) + \frac{1-\mu}{r_1} + \frac{\mu}{r_2}
$$

$r_1 = \sqrt{(x+\mu)^2 + y^2 + z^2}$（到 $P_1$ 距离），$r_2 = \sqrt{(x-1+\mu)^2 + y^2 + z^2}$（到 $P_2$ 距离）。

方程中 $-2\dot{y}$ 和 $+2\dot{x}$ 为**科里奥利力项**，$\frac{1}{2}(x^2+y^2)$ 的梯度对应**离心力项**。科氏力与速度线性相关，对系统能量非保守贡献为零（它只改变运动方向，不做功），这正是雅可比常数保持守恒的动力学根源。

## 雅可比常数与运动允许域

CR3BP 仅存在一个运动积分，即**雅可比常数** $C$（Jacobi 1836）：

$$C = 2\Omega - v^2, \quad v^2 = \dot{x}^2 + \dot{y}^2 + \dot{z}^2$$

该守恒量等价于旋转系中的能量：$C$ 越大，航天器动能越小，可达区域越受限。

令 $v=0$ 得**零速度曲面**（Zero-Velocity Surface, ZVS）：$2\Omega(x,y,z) = C$。在平面情况下退化为**零速度曲线**（ZVC）。ZVS 是在位形空间中界定航天器可达域与禁区的曲面，航天器不能在 $2\Omega < C$ 的区域存在。

ZVS 拓扑随 $C$ 值变化经历若干临界值 $C_1 > C_2 > C_3 > C_4 = C_5$，每个临界值对应一个平动点打开连通颈部的条件（Koon et al. 2011）：

| $C$ 值范围 | 可达域特征 |
| :--- | :--- |
| $C > C_1$ | 航天器被限制在 $P_1$ 或 $P_2$ 邻近的两个分立区域 |
| $C_1 > C > C_2$ | $L_1$ 颈部打开，两个主天体邻域连通 |
| $C_2 > C > C_3$ | $L_2$ 颈部打开，可达域延伸至系统外部 |
| $C_3 > C > C_4$ | $L_3$ 颈部打开，远端也连通 |
| $C < C_4 = C_5$ | 全域可及，仅两主天体位置本身的碰撞奇点除外 |

## 平动点

CR3BP 的五个平动点 $L_1$--$L_5$ 是令 $\ddot{x} = \ddot{y} = \ddot{z} = \dot{x} = \dot{y} = \dot{z} = 0$ 的平衡解。三个共线点 $L_1$、$L_2$、$L_3$ 位于 x 轴上，具有鞍 $\times$ 中心 $\times$ 中心型（不稳定）；两个三角点 $L_4$、$L_5$ 与主天体构成等边三角形，在地月系质量比下线性稳定。详细讨论见 [平动点](/glossary/dynamics/libration-point/)。

## 二维与三维情形

### 平面 CR3BP

若约束航天器运动在主天体轨道平面内（$z=\dot{z}=0$），系统退化为 **平面圆型限制性三体问题**（Planar CR3BP, PCR3BP），相空间从六维降为四维。PCR3BP 保留了 CR3BP 的全部核心动力学特征（平动点、不变流形、混沌），但因其四维相空间，可通过二维**庞加莱截面**直观呈现相空间结构，这是三维 CR3BP 无法直接做到的。在 PCR3BP 的庞加莱截面上，不变曲线对应（准）周期轨道，KAM 环面保持稳定，混沌海指示双曲区域。

### 三维 CR3BP

完整三维 CR3BP 是分析地月空间周期轨道族的标准框架。最主要的轨道族包括（Howell 1984；Zimovan 2017）：

- **Lyapunov 轨道**：平面周期轨道，关于 x 轴和 xOz 平面对称

- **Halo 轨道**：三维周期轨道，关于 xOz 平面镜像对称，面外分量 $A_z$ 足够大时折叠为南北两族

- **近直线晕轨道（NRHO）**：共振准 Halo 族，近月点极低、$L_2$ 侧使用最多（Gateway 任务轨道）

- **远距离逆行轨道（DRO）**：$P_2$ 邻域的大振幅逆行周期轨道，稳定性优于 Lyapunov/Halo

这些轨道族通过**延拓法**（continuation）参数化生成，从已知解出发，沿参数方向逐步求解，配以打靶-微分修正迭代。见 [延拓](/glossary/dynamics/continuation/)、[打靶法](/glossary/dynamics/differential-correction/)、[微分修正](/glossary/dynamics/differential-correction/)。

## 系统间平移与相对动力学

当拼接两个不同的 CR3BP 系统（如日地系与地月系）时，需要建立两系统会合坐标系之间的转换关系，这称为**三体系统平移**（three-body system translation）。核心是将一个 CR3BP 中的状态向量（位置、速度）投影到另一个 CR3BP 的会合坐标系中，保持惯性系中绝对值不变。坐标原点从日地质心平移至地月质心，并在会合系间施加适当的角速度修正。

相对 CR3BP 动力学考察两航天器在同一主天体系统内的相对运动，是编队飞行和交会任务的基础。在会合系中，相对加速度方程额外包含科氏耦合项和离心力梯度效应，使相对轨道的长期演化与 Kepler 相对运动有本质区别。

## 扩展与变体

CR3BP 的若干重要扩展变体保留基础框架、在特定方向上增加复杂度：

- **ER3BP**（Elliptic Restricted Three-Body Problem）：主天体偏心轨道，距离周期性变化，方程非自治，雅可比积分不再守恒。见 [ER3BP](/glossary/dynamics/er3bp/)。

- **BCR4BP**（Bicircular Restricted Four-Body Problem）：在 CR3BP 基础上引入第四体（如太阳）摄动。见 [BCR4BP](/glossary/dynamics/bcr4bp/)。

- **CRTBP-LT**（CR3BP with Low-Thrust）：在运动方程右侧加入连续小推力加速度项，用于电推进轨道优化。

- **SSCRTBP**（Solar Sail CR3BP）：在引力项外增加太阳光压加速度，太阳帆方向角作为附加控制自由度。

- **受摄 CR3BP**（Perturbed CR3BP）：在方程中加入 $J_2$、太阳辐射压、第三体引力等摄动项，用作高保真模型的中间步骤。

## 相关概念

- [会合坐标系](/glossary/fundamentals/synodic-frame/)

- [平动点](/glossary/dynamics/libration-point/)

- [雅可比积分](/glossary/dynamics/jacobi-integral/)

- [零速度曲面](/glossary/dynamics/zero-velocity-surface/)

- [ER3BP](/glossary/dynamics/er3bp/)

- [BCR4BP](/glossary/dynamics/bcr4bp/)

- [庞加莱截面](/glossary/dynamics/poincare-section/)

- [不变流形](/glossary/dynamics/invariant-manifold/)

- [延拓](/glossary/dynamics/continuation/)

## 参考文献

- Szebehely, 1967, *Theory of Orbits: The Restricted Problem of Three Bodies*：CR3BP 的经典著作，涵盖会合系、无量纲化、平动点、周期轨道的完整理论。

- Vallado, 2022, *Fundamentals of Astrodynamics and Applications*, 4th ed.：第 2 章讲述限制性三体问题与 N 体运动方程；第 3 章给出地月/日地会合系的坐标定义与基本平面。

- Koon, Lo, Marsden & Ross, 2011, *Dynamical Systems, the Three-Body Problem, and Space Mission Design*：将现代动力系统方法（不变流形、庞加莱截面、异宿连接）系统地引入 CR3BP 轨道设计。

- Gómez et al., 2001, *Dynamics and Mission Design near Libration Points*, Vol. I–IV：平动点邻域动力学与任务设计的标准参考文献，覆盖双圆问题、同伦法、太阳帆等扩展。

- Howell, 1984, "Three-Dimensional, Periodic, 'Halo' Orbits"：Halo 轨道族的首次系统化数值生成与参数化。

- Zimovan, 2017, *Characteristics and Design Strategies for Near Rectilinear Halo Orbits within the Earth-Moon System*, Purdue Ph.D.：地月 L1/L2 NRHO 求解策略的标准参考文献。
