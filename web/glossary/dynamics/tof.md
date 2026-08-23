---
title: 飞行时间（Time of Flight, ToF）与转移时间方程
description: 航天器在两个指定状态之间飞行的时长，以及把它与轨道根数联系起来的方程——Lambert 问题中的飞行时间方程与 CR3BP 中由不变流形几何决定的转移时间。覆盖显式制导中的剩余飞行时间（time-to-go）、通用变量转移时间方程、地月转移最低飞行时间的阶梯式增长规律、以及弹道捕获的驻留时间。
keywords: 飞行时间, ToF, 转移时间, 剩余飞行时间, Lambert 问题, 转移时间方程, 飞行时间方程, 最低飞行时间, 弹道捕获, 地月转移, 稳定流形
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 飞行时间（Time of Flight, ToF）与转移时间方程
  desc: 转移时长、Lambert 通用变量飞行时间方程、最低 ToF 的阶梯式增长、弹道捕获驻留时间。
  image: /logo.png
og:
  title: 飞行时间（Time of Flight, ToF）详解 | 术语定义
  description: 航天器在两个指定状态之间飞行的时长，以及把它与轨道根数联系起来的方程——Lambert 问题中的飞行时间方程与 CR3BP 中由不变流形几何决定的转移时间。覆盖显式制导、通用变量形式、最低 ToF 阶梯律与弹道捕获驻留时间。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 飞行时间（Time of Flight, ToF）详解 | 术语定义
  description: 航天器在两个指定状态之间飞行的时长，以及把它与轨道根数联系起来的方程——Lambert 问题中的飞行时间方程与 CR3BP 中由不变流形几何决定的转移时间。覆盖显式制导、通用变量形式、最低 ToF 阶梯律与弹道捕获驻留时间。
  image: /logo.png
permalink: /glossary/dynamics/tof/
---

# 飞行时间（Time of Flight, ToF）与转移时间方程

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

**飞行时间**（time of flight, ToF）是航天器在两个指定状态之间飞行所用的时间，通常是两个位置向量、初始停泊轨道与目标轨道、或流形上两点之间的时间。在 Lambert 问题中，ToF 与两个位置向量共同构成三重边界条件，唯一确定一条圆锥曲线；在 CR3BP 中，ToF 由所选不变流形轨迹的几何本身决定。**转移时间方程**与**飞行时间方程**特指 Lambert 类解中把 ToF 写成轨道参数显函数的关系。**剩余飞行时间**（time-to-go, $t_\text{go}$）是当前状态到终端条件的剩余 ToF，作为显式制导律的参数。**弹道捕获驻留时间**则指弹道捕获轨道从首次近月点到逃出月球影响球的时间长度。

## Lambert 问题：作为边界条件的 ToF

给定两个位置向量 $\mathbf r_0$、$\mathbf r$ 与转移角 $\Delta\nu$，Lambert 定理指出：ToF 只依赖于半长轴 $a$、距离和 $r_0 + r$ 与弦长 $c = \|\mathbf r - \mathbf r_0\|$，与具体轨道形状无关（Vallado 2022, §7.6）。引入半周长 $s = (r_0 + r + c)/2$ 与变量

$$
\sin\tfrac{\alpha_e}{2} = \sqrt{\tfrac{s}{2a}}, \qquad \sin\tfrac{\beta_e}{2} = \sqrt{\tfrac{s-c}{2a}},
$$

椭圆情况下的飞行时间方程（Lagrange 形式）为

$$
\Delta t = \sqrt{\tfrac{a^3}{\mu}} \big[\, 2\pi n_\text{rev} + \alpha_e - \sin\alpha_e \mp (\beta_e - \sin\beta_e)\,\big],
$$

符号决定短路径或长路径，$n_\text{rev}$ 为完整圈数。这条**转移时间方程** $\Delta t = T(a)$ 正是 Lambert 求解器迭代的核心：给定 $\Delta t$，求 $a$。

**通用变量形式**（Bate, Mueller & White；Battin 1999）用单一通用变量 $\chi$ 代替 $\alpha_e, \beta_e$，对椭圆、抛物线、双曲线统一成立：

$$
\sqrt{\mu}\,\Delta t = \tfrac{r_0 r}{\sqrt{a}} \sin\!\tfrac{\Delta\nu}{2}\, \chi + (1 - \lambda\cos\!\tfrac{\Delta\nu}{2})\,\chi^3 C(z) + \mu D(z),
$$

其中 $z = \chi^2/a$，$C, D$ 为 Stumpff 函数。良好的初值方案（如 Thorne 基于转移角的估计）使迭代在多圈情形下仍稳定收敛。

## CR3BP 中的 ToF：稳定流形转移时间

在限制性三体问题中，转移时长由稳定/不稳定流形的几何决定，而非 Lambert 圆锥曲线。对从月面沿稳定流形进入 $L_1$ 或 $L_2$ halo 轨道的转移（Alessi 等 2009）：

- **直飞转移**（不绕月绕圈）：ToF ≈ 10 天，其中 ≈ 5 天用于渐近接近参考轨道；距 halo 轨道 1000 km 以内时相对速度低于 0.25 km/s。

- 每多绕月一圈，ToF 约增加 10 天。

- 积分起点取距参考 halo 轨道 70–90 km 处；不如此截断的话，流形定义本身给出无穷时间。

沿日地流形拼接的低能地月转移要长得多，典型 70–120 天（Parker & Anderson 2013），但 $\Delta v$ 更省。

## 最低 ToF 的阶梯式增长（地月）

从最小停泊轨道（MPO，半径约 0.20 归一化单位）到月面的转移，Liang 等（2016）给出固定雅可比能量 $C$ 下的最低 ToF：

| $C$ | 2.08 | 2.28 | 2.48 | 2.68 | 2.78 | 2.88 | 2.98 | 3.08 | 3.18 |
|---|---|---|---|---|---|---|---|---|---|
| 最低 ToF（天） | 3.13 | 3.37 | 4.25 | 4.31 | 4.80 | 30.8 | 45.9 | 41.8 | 67.4 |

ToF 不随 $C$ 平滑增长，而是呈**阶梯状**：$C \le 2.78$ 时约 3–5 天（直接转移），随后跳到 30–46 天，再跳到 60 天以上。阶梯的成因是 $L_1$ Lyapunov 轨道稳定流形只在某些近地点与 MPO 相交：第一个近地点不相交时，航天器需多走几圈 Keplerian 扭转（每圈约 11 天，对应半地月距离的 Keplerian 周期一半）才能找到交点（Liang 等 2016, §4）。

## 制导中的剩余飞行时间

在显式制导与最优制导律中，$t_\text{go}$ 是当前状态到终端条件的剩余 ToF，作为制导指令的参数出现。对具有 Hamilton 结构的时间最优问题，$t_\text{go}$ 由 Hamilton 终端条件解析求得（通常是四次方程）；其精度直接决定制导指令的准确性（赵弘骞等 2021）。

## 弹道捕获驻留时间

**弹道捕获**（ballistic capture）轨道无需入轨点火即可被月球临时捕获。**驻留时间**（从首次近月点到逃出月球影响球的时间）是捕获质量的指标。在 Sousa-Silva, Terra & Ceriotti（2018）的拼接三体模型中，积分上限 $t_\text{max} = 180$ 天；对所选取的雅可比能量与 90–400 km 近月高度，可达到 90–120 天以上的驻留。驻留越长，捕获越稳健，下游任务（下降、入轨、采样返回）的弹性越大。

## 相关概念

- [Lambert 问题（Lambert's Problem）](/glossary/fundamentals/lamberts-problem/)

- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)

- [不变流形（Invariant Manifold）](/glossary/dynamics/invariant-manifold/)

- [弹道捕获（Ballistic Capture）](/glossary/dynamics/ballistic-capture/)

- [低能转移（Low-Energy Transfer）](/glossary/dynamics/low-energy-transfer/)

- [雅可比常数（Jacobi Constant）](/glossary/dynamics/jacobi-integral/)

- [驻留维持（Station-Keeping）](/glossary/dynamics/station-keeping/)

## 参考文献

- Vallado, 2022, *Fundamentals of Astrodynamics and Applications*, §7.6：Lambert 问题、转移时间/飞行时间方程、多圈解。

- Battin, 1999, *An Introduction to the Mathematics and Methods of Astrodynamics*（修订版）：通用变量形式与 Battin 的 Lambert 算法。

- Alessi, Cascioli, Colombo & Lizia, 2009, Leaving the Moon by means of invariant manifolds of libration point orbits：稳定流形转移时间的统计（直飞 ≈ 10 天，每圈 +10 天，渐近段 5 天，1000 km 内 < 0.25 km/s）。

- Liang, Xu & Xu, 2016, The classification of cislunar trajectories and its applications in the Earth–Moon system, *Astrophysics and Space Science* 361:230：最低 ToF 对雅可比能量的表与阶梯增长的流形解释。

- Parker & Anderson, 2013, *Low-Energy Lunar Trajectory Design*：直接转移与低能转移的典型 ToF 范围。

- Sousa Silva, Terra & Ceriotti, 2018, Fast Earth–Moon transfers with ballistic capture, *Astrophys. Space Sci.* 363:210：驻留时间 90–120 天。

- 赵弘骞 等，2021，基于动态规划的月面定点着陆快速制导方法：由 Hamilton 终端条件求 $t_\text{go}$。
