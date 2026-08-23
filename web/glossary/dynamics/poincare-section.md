---
title: 庞加莱截面（Poincaré Section / Surface of Section）
description: 连续动力系统相空间中用于降维与可视化的低维子流形；与雅可比常数等能量积分联用可将 CR3BP 等保守系统的有效维数降低 2 维。覆盖位置超平面（y=0、x=1−μ）、事件型截面（近星点 ρ̇=0, ρ̈>0）与伪弧长超平面等构造，及其在平动点轨道族辨识、转移初值筛选中的应用。
keywords: 庞加莱截面, Poincaré Section, Surface of Section, SOS, 相空间降维, 雅可比常数, 近星点截面, 平动点轨道, 不变流形, 地月空间
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 庞加莱截面（Poincaré Section / Surface of Section）
  desc: 连续动力系统相空间的低维子流形；与雅可比常数联用降维 2 维。
  image: /logo.png
og:
  title: 庞加莱截面（Poincaré Section）详解 | 术语定义
  description: 连续动力系统相空间中用于降维与可视化的低维子流形；与雅可比常数等能量积分联用可将 CR3BP 等保守系统的有效维数降低 2 维。覆盖位置超平面、事件型截面与伪弧长超平面等构造，及其在平动点轨道族辨识、转移初值筛选中的应用。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 庞加莱截面（Poincaré Section）详解 | 术语定义
  description: 连续动力系统相空间中用于降维与可视化的低维子流形；与雅可比常数等能量积分联用可将 CR3BP 等保守系统的有效维数降低 2 维。覆盖位置超平面、事件型截面与伪弧长超平面等构造，及其在平动点轨道族辨识、转移初值筛选中的应用。
  image: /logo.png
permalink: /glossary/dynamics/poincare-section/
---

# 庞加莱截面（Poincaré Section / Surface of Section）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

庞加莱截面（Poincaré section，又称截面 surface of section、SOS）是相空间中一个低维子流形 $\Sigma$，用于把连续动力系统的轨道约化为离散点列。经典定义：对自治流 $\dot{\mathbf{x}}=\mathbf{f}(\mathbf{x})$，$\mathbf{x}\in\mathbb{R}^N$，取一个 $N-1$ 维超曲面 $\Sigma$，记录轨道每次沿同一方向（单侧截面）穿越 $\Sigma$ 时的交点；这些交点构成的集合即为庞加莱截面图。当系统具有能量积分（如 CR3BP 的 [雅可比常数](/glossary/dynamics/jacobi-integral/) $C$）时，相流被等能面约束，与截面联用共降 2 维：CR3BP 平面问题降为二维、空间问题降为四维（Poincaré 1892；Hénon 1969；Haapala & Howell 2014）。

截面只是切面，与之配套的首次回归映射 $P:\Sigma\to\Sigma$ 才是 [庞加莱映射](/glossary/dynamics/poincare-map/)。两者在文献中常混称，但严格区分截面（几何对象）与映射（离散动力系统）有助于厘清概念。

## 截面构造的三大类

### 1. 位置超平面截面

最常用的一类，$\Sigma$ 取为某一坐标等于常数的平面。在 CR3BP 会合系中典型选择：

- **$y=0$ 截面**：记录轨道穿过主天体连线时的状态，常配合 $\dot{y}>0$ 或 $\dot{y}<0$ 取单侧，避免同一周期轨道在截面上重复计数；适合展示 $x$-$\dot{x}$ 相平面（Hénon 1969）。

- **$x=1-\mu$ 截面**（次天体 $P_2$ 所在 $x$ 位置）：地月系或日地系中研究 $L_1$/$L_2$ 流形拼接、平动点附近转移的事实标准（Gómez et al. 2001；Haapala & Howell 2014）。

- **$x=x_{L_i}$ 截面**：取在某个平动点位置，用于研究穿越平动点门户的 transit/non-transit 轨道（Koon et al. 2000）。

### 2. 事件型截面

由事件条件（而非固定坐标平面）定义。最重要的是**近星点截面**（periapse surface of section，Villac & Scheeres 2004；Paskowitz & Scheeres 2006）：

$$\Sigma = \{\mathbf{x}\mid \dot{\rho}=0,\ \ddot{\rho}>0\},\qquad \rho=\sqrt{(x-x_{P_i})^2+y^2+z^2}$$

即探测器到指定主天体 $P_i$ 的距离取极小（$\dot{\rho}=0$）且径向加速度向外（$\ddot{\rho}>0$，确保是近星点而非远星点）。近星点截面的物理优势：穿越点的速度天然切向，是脉冲机动、月球借力窗口分析的最小能耗基线；对应的远星点截面取 $\ddot{\rho}<0$。Haapala & Howell（2014）将其推广到空间问题，用以分类 transit 轨道、识别月球长期捕获轨道族。

地月系、日地系、行星卫星系工程中常见的命名变体：**近地点截面**（perigee section，相对地球）、**近月点截面**（perilune section，相对月球）、**近拱点截面**（periapsis section，相对任意主天体）、**远地点截面**（apogee section）。这些只是中心天体不同的近/远星点截面，构造等价。

### 3. 伪弧长超平面截面

为避免轨道与截面相切（相流几乎平行于 $\Sigma$）导致的数值病态，可采用**伪弧长超平面**（pseudo-arclength hyperplane）：

$$\Sigma = \{\mathbf{x}\mid (\mathbf{x}-\mathbf{x}_0)\cdot\mathbf{n}=0\}$$

法向 $\mathbf{n}$ 不固定为某一坐标轴，而是沿参考轨道自适应选取，使每次穿越都接近法向、降低插值误差；常用于四维流形的高维截面表示。

## 单侧与双侧、截面方向

记录穿越时通常限定方向（如 $\dot{x}>0$），称为**单侧截面**（one-sided section），可避免一条周期轨道在截面上产生两个对称的孤立点。在单侧截面上：周期轨道对应**孤立离散点**；准周期轨道对应**闭合曲线**（环面截痕）；混沌轨道对应**密集散点填充区域**（Arnol'd 1989；Wiggins 2003）。

## 数值实现要点

- **积分器精度**：长时间积分需高阶 Runge-Kutta（如 DOP853，绝对/相对容差 $10^{-14}$）或辛积分器，避免能量漂移污染截面图（Haapala & Howell 2014）。

- **事件检测**：用根求解（如 Brent 法）精确锁定 $\Sigma$ 穿越时刻，再插值得到交点状态；粗步扫描会引入系统误差。

- **网格扫描法**：在 $\Sigma$ 上铺均匀网格、逐点积分并按穿越行为分类（穿越 $L_1$/$L_2$ 边界、长期捕获等），是系统寻找弹道捕获解、转移初值的常用方法。

- **能量叠加**：在 $\theta_3=\pi/2$ 等截面上叠加不同雅可比常数的等值线，可在一幅图上展示所有轨道族的地图（Qiao et al. 2025）。

## 应用要点

- **平动点轨道族辨识**：在中心流形坐标的 $\theta_2=0$ 或 $\theta_3=\pi/2$ 截面上，Lyapunov、垂直 Lyapunov、Lissajous、准 Halo、Halo（北/南）等轨道族呈现截然不同的几何特征；从截面图中可读出 Halo 起源于 Lyapunov 分叉、北/南族 Halo 对称性等结论（Qiao et al. 2025）。

- **流形拼接与转移初值**：在 $x=1-\mu$ 截面上比较 $L_1$ 不稳定流形与 $L_2$ 稳定流形的交点，可识别 [heteroclinic/homoclinic 连接](/glossary/dynamics/poincare-map/) 的初值（Gómez et al. 2001；Haapala & Howell 2014）。

- **捕获与逃逸分析**：近星点截面上 transit 与 non-transit 点的边界由 Lyapunov 轨道的不变流形管刻画（Conley 1968；Koon et al. 2000）。

- **轨道辨识与编目**：将观测状态投影到截面地图上，可像查字典一样辨识未知航天器所在轨道族，绕过混沌环境中直接数值积分的困难（Qiao et al. 2025）。

## 相关概念

- [庞加莱映射（Poincaré Map）](/glossary/dynamics/poincare-map/)

- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)

- [雅可比常数（Jacobi Constant）](/glossary/dynamics/jacobi-integral/)

- [不变流形（Invariant Manifold）](/glossary/dynamics/invariant-manifold/)

- [中心流形（Central Manifold）](/glossary/dynamics/center-manifold/)

- [延拓（Continuation）](/glossary/dynamics/continuation/)

## 参考文献

- Poincaré H. Les méthodes nouvelles de la mécanique céleste[M]. Gauthier-Villars, 1892.（截面方法的奠基性著作）

- Hénon M. Numerical exploration of the restricted problem, V: Hill's case[J]. Astronomy & Astrophysics, 1969, 1: 223-267.（首次系统使用 $y=0$ 截面研究希尔问题）

- Conley C C. Low energy transit orbits in the restricted three-body problem[J]. SIAM J. Applied Math., 1968, 16(4): 732-746.（transit/non-transit 与流形管理论）

- Koon W S, Lo M W, Marsden J E, Ross S D. Heteroclinic connections between periodic orbits and resonance transitions in celestial mechanics[J]. Chaos, 2000, 10(2): 427-469.

- Villac B F, Scheeres D J. On the concept of periapsis in Hill's problem[J]. Dynamics & Control of Systems, 2004.

- Paskowitz M E, Scheeres D J. Geometry of quasiperiodic orbits in the Hill problem[J]. Celestial Mechanics and Dynamical Astronomy, 2006.

- Gómez G, Llibre J, Martínez R, Simó C. Dynamics and Mission Design near Libration Points: Vol. II[M]. World Scientific, 2001.

- Haapala A F, Howell K C. Representations of higher-dimensional Poincaré maps with applications to spacecraft trajectory design[J]. Acta Astronautica, 2014, 96: 23-46.

- Qiao C, Long X, Yang L, et al. Orbital parameter characterization and objects cataloging for Earth-Moon collinear libration points[J]. Chinese Journal of Aeronautics, 2025.
