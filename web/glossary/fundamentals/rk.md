---
permalink: /glossary/fundamentals/rk/
title: 龙格-库塔法（Runge-Kutta Method）
description: 求解常微分方程初值问题的单步数值积分方法族——自起步，无需历史状态，是轨道传播的基本工具。覆盖经典RK4公式、嵌入式Runge-Kutta（Fehlberg、Dormand-Prince）变步长控制、高阶RK7/8变体、局部截断误差与阶数分析、以及与多步法的对比。
keywords: 龙格-库塔法, Runge-Kutta, RK4, RK7/8, Runge-Kutta-Fehlberg, Dormand-Prince, 单步法, 常微分方程数值积分, 嵌入式Runge-Kutta, 局部截断误差, 步长控制, 轨道传播, 航天动力学
---

# 龙格-库塔法（Runge-Kutta Method）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

Runge-Kutta 方法由 Carl Runge（1856–1927）于 1895 年提出，Wilhelm Kutta（1867–1944）于 1901 年完善，是一族求解常微分方程初值问题 $\dot{y} = f(t, y)$，$y(t_0) = y_0$ 的单步积分法。单步法的特征是：从 $y_n$ 推进到 $y_{n+1}$ 仅利用 $t_n$ 时刻的状态，绝不引用 $t_{n-1}, t_{n-2}, \dots$ 的历史值。这赋予 Runge-Kutta 法两个决定性优势：**自起步**（无需 boot-strap 启动）和天然支持变步长（Vallado 2022, Sec. 8.5）。

核心思想是：不诉求解析计算 Taylor 级数的高阶导数，而是在区间 $[t_n, t_n+h]$ 内选取若干试探点、计算函数斜率再做加权平均，从而以 ODE 右端函数 $f(t,y)$ 的多点估值代替高阶导数的推导。

## 经典 RK4

对一阶系统 $\dot{y} = f(t, y)$，经典四阶公式（RK4）为（Vallado 2022, Eq. 8-6）：

$$
\begin{aligned}
k_1 &= h f(t_n, y_n) \\
k_2 &= h f(t_n + \tfrac{h}{2}, y_n + \tfrac{1}{2} k_1) \\
k_3 &= h f(t_n + \tfrac{h}{2}, y_n + \tfrac{1}{2} k_2) \\
k_4 &= h f(t_n + h, y_n + k_3) \\
y_{n+1} &= y_n + \tfrac{1}{6}(k_1 + 2k_2 + 2k_3 + k_4) + O(h^5)
\end{aligned}
$$

方法被称为"四阶"，因其对初值 $y_n$ 的 Taylor 级数匹配至 $h^4$ 项——局部精度为 4 阶，局部截断误差 $O(h^5)$，全局误差 $O(h^4)$（Berry 2004）。每步需计算四次函数值——即四次力模型调用，这是轨道传播中的计算瓶颈。

对卫星轨道问题，状态 $y = [\vec{r}; \vec{v}]$，$f(t, y) = [\vec{v}; \vec{a}(\vec{r}, \vec{v}, t)]$，其中 $\vec{a}$ 来自力模型的总加速度（Vallado 2022, Eq. 8-7）。

## 嵌入式 Runge-Kutta 与变步长控制

定步长是浪费：远地点航天器运动缓慢、步长可大；近地点速度快、需要小步长。解决方案是**嵌入式 Runge-Kutta**——每步中从同一组子步估值计算出两个不同阶的近似，它们的差直接给出局部截断误差估计。

经典嵌入对是 **Runge-Kutta-Fehlberg**（Fehlberg 1968, 1969）：一个六级的方案同时给出四阶和五阶近似（缩写 RK45，共 6 级）。差异 $\|y_5 - y_4\|$ 与用户指定的容限 $\varepsilon$ 比较；超限则拒绝该步并缩小 $h$，远低于容限则放大 $h$，使误差在整个积分过程中保持匀。

广泛使用的另一种嵌入对是 **Dormand-Prince** 对（DOPRI5/4，7 级），是 MATLAB `ode45` 的默认积分器。它精心选择系数使五阶公式用作物理解（"局部外推"），在相同级数下精度更优（Dormand and Prince 1980）。

## 高阶 Runge-Kutta 与 RK7/8

高阶 RK 法用更多级数换取更小的截断误差。**RK7/8 积分器**（七阶积分、八阶误差控制）在高精度航天软件中常用：Vallado（2022, Sec. 11.8）生成 HPOP 参考星历时即采用 RK7/8，步长 10 秒、相对容限 $10^{-15}$。代价是更多力模型估值每步，因此与低阶方法之间的效率交叉点取决于问题可容忍的步长。

Fehlberg（1968, 1969）和 Der（1995）给出了至 12 阶的系数表。

## 局部截断误差与阶

**局部截断误差（local truncation error, LTE）** 是单步中，用给定数值格式从精确解 $y(t_n)$ 推进 $h$ 一次产生的误差。对 $p$ 阶方法，LTE $= O(h^{p+1})$。**全局误差** 经 $N \propto 1/h$ 步积累后为 $O(h^p)$。

习惯（Berry 2004）：称某方法为 $p$ 阶时，其局部精度为 $p$ 阶、全局精度为 $p-1$ 阶，局部误差为 $p+1$ 阶，全局误差为 $p$ 阶。据此，RK4 局部精度 4 阶、全局精度 3 阶，局部误差 $O(h^5)$、全局误差 $O(h^4)$。

## 在轨道动力学中的应用

轨道传播中，积分步长与力模型中的最高频率（通常即轨道频率）挂钩。经验规则：中等精度传播每圈约 100 步（Vallado 2022, Sec. 8.5.1）。LEO 约 10–60 秒步长，GEO 约数分钟，地月空间 CR3BP 轨迹约 60–120 秒。

Runge-Kutta 法在推力、有阻力的大偏心率轨道上首选——变步长自然，不依赖等间距历史值。对近圆无推力轨道，多步法（Gauss-Jackson、Adams-Bashforth-Moulton）通常更高效——LEO 轨道可快一个数量级（Herrick 1972）。

## 单步法与多步法对比

| 性质 | 单步法（RK） | 多步法（Adams, Cowell） |
|---|---|---|
| 自起步 | 是 | 否（需启动器生成回值） |
| 每步函数估值 | $s$ 级（如 RK4 为 4 次） | 1–2 次（预测 + 校正） |
| 变步长 | 自然实现 | 困难（需重算回值与差分表） |
| 存储 | 低（仅当前状态） | 需存储回值及累积差分 |
| 适用场景 | 偏心率高、有推力、有阻力 | 近圆轨道、长弧段 |

## 相关概念

- [多步积分器（Adams-Cowell, Gauss-Jackson）](/glossary/dynamics/adams-cowell-integrator/)

- [直接配点法与最优控制数值方法](/glossary/dynamics/hermite-simpson-method/)

- [状态转移矩阵（STM）](/glossary/fundamentals/stm/)

- [微分改正法](/glossary/dynamics/differential-correction/)

- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)

## 参考文献

- Vallado, 2022, *Fundamentals of Astrodynamics and Applications*, Sec. 8.5（单步 RK 法；RK4 公式；Fehlberg 嵌入对变步长机制；RK78 在 HPOP 参考星历中的应用）

- Fehlberg, 1968, *Classical Fifth-, Sixth-, Seventh-, and Eighth-Order Runge-Kutta Formulas with Stepsize Control*, NASA TR-R-287

- Fehlberg, 1969, *Low-Order Classical Runge-Kutta Formulas with Stepsize Control*, NASA TR-R-315

- Dormand and Prince, 1980, *A family of embedded Runge-Kutta formulae*, J. Comput. Appl. Math. 6:19–26

- Der, 1995, *Runge-Kutta Integration Methods for Trajectory Propagation Revisited*, AAS 95-420

- Berry, 2004, cited in Vallado 2022（数值积分阶数的命名习惯）

- Herrick, 1972, *Astrodynamics*, Vol. 2（Gauss-Jackson 与 RK4 在近圆 LEO 轨道上的效率对比：Gauss-Jackson 约快一个数量级）
