---
permalink: /glossary/dynamics/adams-cowell-integrator/
title: 多步积分器（Adams-Bashforth-Moulton / Cowell / Gauss-Jackson / KSG）
description: 利用函数历史回值进行预测-校正的高精度轨道数值积分方法族。覆盖Adams-Bashforth（预测）+ Adams-Moulton（校正）一阶系统积分、Cowell / Störmer-Cowell / Gauss-Jackson直接积分二阶运动方程、以及Krogh-Shampine-Gordon（KSG）变步长divided-difference路线。
keywords: 多步积分器, Adams-Bashforth, Adams-Moulton, Gauss-Jackson, Störmer-Cowell, KSG积分器, Krogh-Shampine-Gordon, 预测校正法, 二阶积分, 轨道传播, 数值积分, 航天动力学
---

# 多步积分器（Adams-Bashforth-Moulton / Cowell / Gauss-Jackson / KSG）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

多步积分器利用当前时刻的状态**加上**此前若干步已算出的函数值历史（回值，back values），将解从 $t_n$ 推进到 $t_{n+1}$。这与仅用 $t_n$ 时刻状态的单步法（如 Runge-Kutta）不同。多步法通常以**预测-校正（predictor-corrector）**对的形式工作：预测公式给出初估 $y_{n+1}^p$，校正公式利用预测态的函数值对解做精化（Vallado 2022, Sec. 8.5–8.6）。

因为重复利用历史估值，多步法每步仅需 **1–2 次力模型调用**——远少于 Runge-Kutta 的 $s$ 级估值。代价是：不能自起步，需存储回值历史与累积差分，变步长控制更为复杂。

在航天动力学中，多步法按求解的方程分为两大路线：

- **单重积分法**（一阶 ODE）：Adams-Bashforth（预测） + Adams-Moulton（校正）。

- **双重积分法**（二阶 ODE，如 $\ddot{\vec{r}} = \vec{a}(\vec{r}, \vec{v}, t)$）：Störmer（预测） + Cowell（校正），及其求和形式 Gauss-Jackson。
"Cowell 公式"不指某个特定的积分器，而指**直接对二阶运动方程积分、免去速度中间变量**的做法——1909 年 Philip Cowell 以此方法预报哈雷彗星回归（Vallado 2022）。

## Adams-Bashforth-Moulton（单重积分）

对 $\dot{y} = f(t, y)$，Adams-Bashforth 预测器用此前 $f$ 的历史估值拟合插值多项式并向前积分；Adams-Moulton 校正器拟合包含预测点的多项式（Vallado 2022, Sec. 8.5.2）。
4 阶预测器（Adams-Bashforth 纵标形式）：
$$
y_{n+1}^p = y_n + \frac{h}{24}\{55\dot{y}_n - 59\dot{y}_{n-1} + 37\dot{y}_{n-2} - 9\dot{y}_{n-3}\}
$$
4 阶校正器（Adams-Moulton 纵标形式）：
$$
y_{n+1} = y_n + \frac{h}{24}\{9\dot{y}_{n+1}^p + 19\dot{y}_n - 5\dot{y}_{n-1} + \dot{y}_{n-2}\}
$$
高阶变体（8 阶、12 阶）在业务软件中常用（Maury and Segal 1969）。

## Cowell / Störmer-Cowell / Gauss-Jackson（双重积分）

Cowell 公式直接对 $\ddot{\vec{r}} = \vec{a}$ 积分。Störmer 预测器估算位置，Cowell 校正器精化。对无速度依赖、无保守力的近圆轨道问题，完全跳过中间速度计算。

**Gauss-Jackson** 是 Störmer-Cowell 的定步长求和纵标（summed-ordinate）形式——长弧轨道星历生成的主力工具。它用一阶和二阶求和回值差分 $\vec{S}_n^{\text{I}}$、$\vec{S}_n^{\text{II}}$ 抑制舍入误差。Herrick（1972）指出，近圆 LEO 轨道 Gauss-Jackson 比 RK4 快约一个数量级。预测公式（Gauss 求和纵标，$j$ 阶）：
$$
\dot{\vec{r}}_{n+1}^p = h\left\{\alpha_{So}\vec{S}_n^{\text{II}} + \alpha_{S1}\vec{S}_n^{\text{I}} + \sum_{i=0}^{j}\beta_{Si}\ddot{\vec{r}}_{n-i}\right\}
$$
校正公式（Jackson 求和纵标，$j$ 阶）：
$$
\vec{r}_{n+1} = h\left\{\alpha_{So}\vec{S}_{n+1}^{\text{II}} + (\alpha_{So}+\alpha_{S1})\vec{S}_{n+1}^{\text{I}} + \sum_{i=0}^{j}\beta_{Ci}\ddot{\vec{r}}_{n+1-i}\right\}
$$
系数表见 Vallado（2022, Table 8-1）。

## Krogh-Shampine-Gordon（KSG）与变步长多步法

**KSG 积分器**（Krogh 1974; Shampine and Gordon 1975）用**均差（divided difference）**替代固定步长回值差分，在多步框架内实现自然变步长控制。它是一种非求和、变步长、可自起步的积分器（Krogh 1974），对大偏心率轨道尤为适用——避免 Gauss-Jackson 在远地点的步长浪费。在地月空间编目定轨中已有应用，采用 60 秒步长对三体动力学模型积分（陈艳玲等 2025）。

Vallado（2022）指出，Shampine-Gordon（及 Berry and Healy 2004 的最新实现）作为 Adams-Bashforth-Moulton 的替代方案值得进一步关注。

## 多步法的启动

多步法需 $j$ 个回值才能起步。常用启动策略（Vallado 2022, Sec. 8.5.1）：

- 用**匹配阶数**的 Runge-Kutta 法生成前 $j$ 个值（例如 8 阶 RK 搭配 8 阶 Gauss-Jackson）。

- 用迭代启动程序将多步公式移位校正回值点。

- 用低阶方法搭配较小步长。
关键要求：启动方法的误差不得大于多步法本身的误差（Maury and Segal 1969）。

## 时间正则化 Cowell（s 积分）

对高偏心率轨道，正则化消除 $1/r$ 奇点并自动在近地点缩步。**时间正则化 Cowell**（亦称 s 积分）以辅助变量 $s$ 替代 $t$，通过广义 Sundman 变换 $dt = c r^n ds$（Vallado 2022, Eq. 8-9）。$n=1$ 时 $s$ 为偏近点角，$n=2$ 时 $s$ 为真近点角。代价是求解七阶微分方程，并将结果内插回复等时间间距。

## 积分器选择指南

| 轨道类型 | 推荐积分器 | 步长策略 |
|---|---|---|
| 近圆 LEO | Gauss-Jackson（8 阶） | 定步长，~60 s |
| 近圆 GEO/HEO | Gauss-Jackson 或 Adams-Bashforth-Moulton | 定步长，~5–10 min |
| 大偏心率（$e > 0.5$） | Runge-Kutta-Fehlberg 或 KSG | 变步长 |
| 有推力弧段 | Runge-Kutta（中等阶） | 变步长 |
| 地月空间 CR3BP | RK7/8 或 KSG | ~60–120 s |

## 相关概念

- [龙格-库塔法（Runge-Kutta）](/glossary/fundamentals/rk/)

- [直接配点法与最优控制数值方法](/glossary/dynamics/hermite-simpson-method/)

- [微分改正法](/glossary/dynamics/differential-correction/)

- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)

## 参考文献

- Vallado, 2022, *Fundamentals of Astrodynamics and Applications*, Secs. 8.4–8.6（Cowell 公式的历史与含义；Adams-Bashforth-Moulton 预测校正推导；Gauss-Jackson 求和纵标形式；Krogh/Shampine-Gordon 讨论；时间正则化 Cowell）

- Maury and Segal, 1969, *Cowell Type Numerical Integration as Applied to Satellite Orbit Computation*, GSFC X-553-69-164（1–15 阶系数表）

- Berry and Healy, 2001, *Comparison of Accuracy Assessment Techniques for Numerical Integration*, AAS 01-183（Gauss-Jackson 详细实现与误差分析）

- Krogh, 1974, *Changing Stepsize in the Integration of Differential Equations Using Modified Divided Differences*, Lecture Notes in Mathematics, Vol. 362, Springer-Verlag

- Shampine and Gordon, 1975, *Computer Solution of Ordinary Differential Equations*, W.H. Freeman

- Herrick, 1972, *Astrodynamics*, Vol. 2（Gauss-Jackson 与 RK4 效率对比）

- Berry, 2004, 私人交流，Vallado 2022 引用（Störmer-Cowell 与 Krogh 变步长实现）

- 陈艳玲等, 2025, *地月空间编目系统观测体制研究*, 飞行器测控学报（KSG 积分器以 60 s 步长对完备三体动力学模型积分）
