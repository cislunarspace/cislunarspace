---
title: 兰伯特问题（Lambert's Problem）
description: 轨道力学两大经典问题之一：给定中心引力场中两个位置矢量与飞行时间，求解连接两点的轨道及两端速度。本词条覆盖 Lambert 定理（飞行时间只依赖半长轴、两端距离之和、弦长）、二体算法族（Gauss、最小能量、Battin、Gooding、Thorne、通用变量）、多圈解（2N+1）、摄动版本、不确定与线性变分版本、鲁棒求解器，以及与两点边值问题、Lambert 制导的边界。
keywords: Lambert 问题, Lambert's Problem, 兰伯特定理, Lambert 定理, 飞行时间定理, Lambert 算法, 多圈 Lambert 问题, 摄动 Lambert 问题, 不确定 Lambert 问题, 通用变量, Battin 方法, Gooding 方法
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 兰伯特问题（Lambert's Problem）
  desc: 给定两位置与飞行时间求轨道：经典二体边值问题及其多圈、摄动、不确定变体。
  image: /logo.png
og:
  title: 兰伯特问题（Lambert's Problem）详解 | 术语定义
  description: 给定中心引力场中两个位置矢量与飞行时间，求解连接两点的轨道及两端速度。覆盖 Lambert 定理、Gauss/Battin/Gooding/Thorne 算法、多圈解、摄动版本、不确定版本与鲁棒求解器。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 兰伯特问题（Lambert's Problem）详解 | 术语定义
  description: 给定中心引力场中两个位置矢量与飞行时间，求解连接两点的轨道及两端速度。覆盖 Lambert 定理、Gauss/Battin/Gooding/Thorne 算法、多圈解、摄动版本、不确定版本与鲁棒求解器。
  image: /logo.png
permalink: /glossary/fundamentals/lamberts-problem/
---

# 兰伯特问题（Lambert's Problem）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

兰伯特问题（Lambert's problem）是轨道力学的两大经典问题之一（另一个是开普勒问题）：在中心引力场中，给定初始位置矢量 $\vec r_1$、末端位置矢量 $\vec r_2$ 和飞行时间 $\Delta t$，求连接两端的轨道及两端的速度矢量 $\vec v_1$、$\vec v_2$。它既是初始轨道确定的基本工具，也是转移轨道（拦截、交会、再入）设计的基本工具（Vallado 2022；Battin 1999）。

文献里常称高斯问题是误称。Euler 在 1744 年首次分析了这个问题，Lambert 在 1761–1771 年间将其推广到椭圆与双曲线轨道，Gauss 在 1801 年为重新发现谷神星提出了一种求解方法：他求解的是 Lambert 问题，而非一个独立的新问题（Vallado 2022, §7.6）。

两个位置矢量唯一确定了轨道平面。给定短程或长程（$t_m=\pm1$，对应转移角 $\Delta\nu$ 小于或大于 $180^\circ$）选择后，二体 Lambert 问题有唯一解；当 $\Delta\nu=180^\circ$ 时平面不确定、解退化。

## Lambert 定理（飞行时间定理）

Lambert 在几何研究中得到的核心结论，被 Battin 表述为定理（Battin 1999, p. 276）：

> 两端点之间的轨道转移时间，**只**依赖三个量：半长轴 $a$、两端到力心的距离之和 $r_1+r_2$、连接两端的弦长 $c$，与轨道形状（即偏心率）无关。

等价地：固定 $r_1+r_2$、$c$ 和 $\Delta t$ 后，所有可行的连接轨道都有相同的半长轴；不同的偏心率对应同一族椭圆的不同成员。这是 Lambert 问题之所以能被一个标量方程（关于 $a$ 或等价变量）求解的几何根源。Lagrange 给出了解析形式（Vallado 2022, Eq. 7-36）：

$$
\Delta t=\sqrt{\frac{a^3}{\mu}}\big[\,2N\pi+\alpha_e-\sin\alpha_e \mp (\beta_e-\sin\beta_e)\,\big]
$$

其中 $N$ 为绕行圈数，$\sin(\alpha_e/2)=\sqrt{s/(2a)}$，$\sin(\beta_e/2)=\sqrt{(s-c)/(2a)}$，半周长 $s=(r_1+r_2+c)/2$。$\mp$ 对应短程/长程转移。

## 最小能量解与不可解条件

半长轴小于某临界值时连接两端不可能。临界值由两个虚拟焦点圆刚好相切这一几何条件给出（Vallado 2022, Eq. 7-37）：

$$
a_{\min}=\frac{s}{2}=\frac{r_1+r_2+c}{4}
$$

此即最小能量轨道（比机械能 $\varepsilon=-\mu/(2a)$ 最低），又称**基本椭圆**。工程上它给出双脉冲转移的 $\Delta v$ 下界参考，但通常不是固定时间转移的解。

## 算法族

求解 Lambert 问题等价于在 $a$（或通用变量 $z$、$x=\cos(\Delta E/2)$ 等）上求解一个超越方程。主要算法族：

- **Gauss 原始方法（1809）**：基于扫面与三角形面积比 $y$，给出关于 $y$ 与 $\Delta E$ 的两个独立方程；用连分式避免三角迭代。原始版本仅适用椭圆，Bate-Mueller-White 推广到双曲线（Vallado 2022, §7.6.2）。

- **最小能量法**：先求 $a_{\min}$ 对应的轨道，再用式 (7-36) 反算 $\Delta t$ 校准。

- **通用变量法（Battin-Vaughan 1984；Vallado Algorithm 58）**：用通用变量 $z=\Delta E^2$（椭圆为正、双曲线为负、抛物线为零）统一处理三类轨道，避免分支判断，是最常用的现代实现。

- **Battin 方法**：用超几何连分式优雅地求解，对短长程、奇异情形都鲁棒（Vallado 2022, §7.6.5）。

- **Gooding 方法（1988, 1990）**：在 Wagner 算法基础上改进，鲁棒性最好，能处理多圈与近 $180^\circ$ 情形，是 AGI ODTK 等商业工具的默认实现。

- **Thorne 序列解（2004）**：用级数形式直接给出 $\Delta t(a)$，避免迭代初值问题，可用于解空间可视化（Vallado 2022, Fig. 7-9 的来源）。

## 多圈解

当给定 $\Delta t$ 足以让转移轨道完成 $N\ge1$ 整圈再到达终点时，对每个 $N$ 都存在 $2N+1$ 个候选解（$N$ 圈的短程 + $N$ 圈的长程 + 1 条最小能量退化弧）。Prussing (1992) 与 Shen-Tsiotras (2003) 给出了多圈解的结构与最小 $\Delta v$ 选择方法：在固定时间下，允许更多圈可能降低 $\Delta v$，但需要在 $2N_{\max}+1$ 个候选中筛选最优。Shen-Tsiotras 还证明了固定端点转移可化为一个辅助问题，从一幅 $\Delta v$ 关于分离角与飞行时间的等高线图上读出全局最优（Shen & Tsiotras 2003）。

## 摄动 Lambert 问题

二体假设不成立时（地球扁率 $J_2$、第三体引力、太阳光压等），Lambert 定理失效，必须用数值方法求解。标准做法：

1. 用二体 Lambert 解作初值；
2. 在完整力模型下数值积分到末端，得到位置偏差 $\delta\vec r_2$；
3. 用 [微分改正](/glossary/dynamics/differential-correction/) 或 [同伦法](/glossary/dynamics/homotopy-method/) 迭代修正 $\vec v_1$，直到末端位置满足精度。

这一流程又称受摄 Lambert 弧段（perturbed Lambert arc）。在地月转移的中途修正、多弧段拼接、双脉冲 cislunar 转移的中间弧计算中是基本工具；理论上的等价问题是更一般的 [两点边值问题](/glossary/dynamics/tpbvp/) 与 Cowell 数值积分（见 [Cowell 摄动法](/glossary/fundamentals/orbital-perturbations/)）。Criscola 等 (2024) 用函数连接理论给出受摄 Lambert 的直接解法，可绕过迭代。

## 不确定 Lambert 问题与线性变分形式

实际任务里 $\vec r_1$、$\vec r_2$（来自雷达/光学观测）都带误差，所以 $\vec v_1$、$\vec v_2$ 也是随机变量。Schumacher 等 (2015) 把它形式化为不确定 Lambert 问题（Uncertain Lambert Problem, ULP）：

- **一般非线性形式**：$\vec v_1=L(\vec r_1,\vec r_2)$ 的映射把位置的概率密度变换为速度的概率密度，结构由 Liouville 方程描述，通常用 Monte Carlo 求解。

- **线性变分 Lambert 问题**：在标称解附近一阶线性化，初末速度变分与初末位置变分之间通过标称轨道的状态转移矩阵分块 $\Phi_{rr},\Phi_{rv},\Phi_{vr},\Phi_{vv}$ 显式联系。给定位置协方差，速度协方差无需迭代即可解出，等价于加权 batch 最小二乘的微分改正（Schumacher 等 2015）。

- **高阶方法**：Armellin 等用微分代数（COSY-Infinity）把解展开成 Taylor 级数；Hall-Singla (2020) 用共轭无味变换构造高阶灵敏度矩阵，无需求导即可逼近输出分布。

- **多圈版本（UMRLP）**：多圈情形下解的分布还受轨道动力学边界约束影响，第 $N$ 圈解的占比 $p_N$ 随 $N$ 衰减；Duan 等 (2025) 用自适应多项式混沌展开处理这种受限分布。

**鲁棒 Lambert 求解器（Robust Lambert Solver, RLS）**：指无需初值猜测、对单圈与多圈都能稳定收敛的工程级实现，通常综合 Izzo 矢量化算法与 Blanchard 算法的优点。本词族里把 RLS、UMRLP、完整不确定解、圈数占比 $p_N$ 都视作 ULP 的子结构与衍生量。

## 应用要点

- **拦截与交会**：双脉冲转移、固定时间拦截的标准计算模块。

- **初始轨道确定**：由两个时刻的位置（如雷达三站定位、双位置矢量）反推轨道。

- **中途修正**：以摄动 Lambert 解为参考，确定中途脉冲矢量（见 [多脉冲机动](/glossary/dynamics/two-impulse-rendezvous/)、[双脉冲轨道转移](/glossary/dynamics/cislunar-transfer-design-elements/)）。

- **Lambert 制导**：把 Lambert 解嵌入实时闭环制导，见 [Lambert 制导例程](/glossary/dynamics/lambert-guidance-routine/)。

## 相关概念

- [Lambert 制导例程（Lambert Guidance Routine）](/glossary/dynamics/lambert-guidance-routine/)

- [三体 Lambert 问题（Three-Body Lambert Problem）](/glossary/dynamics/three-body-lambert-problem/)

- [两点边值问题（Two-Point Boundary Value Problem）](/glossary/dynamics/tpbvp/)

- [微分改正（Differential Correction）](/glossary/dynamics/differential-correction/)

- [同伦方法（Homotopy Method）](/glossary/dynamics/homotopy-method/)

- [通用变量法（Universal Variable Method）](/glossary/dynamics/universal-variable-method/)

- [Cowell 摄动法（Cowell's Perturbation Method）](/glossary/fundamentals/orbital-perturbations/)

## 参考文献

- Vallado, 2022, Fundamentals of Astrodynamics and Applications, §7.6（Lambert 问题、定理与算法族综述）

- Battin, 1999, An Introduction to the Mathematics and Methods of Astrodynamics（Lambert 定理的现代表述、超几何连分式算法）

- Shen & Tsiotras, 2003, Optimal Two-Impulse Rendezvous Using Multiple-Revolution Lambert Solutions（多圈解结构与最优选择）

- Schumacher 等, 2015, Uncertain Lambert Problem（不确定 Lambert 问题与线性变分形式）

- Hall & Singla, 2020, Higher-order Sensitivity Matrix Method for Probabilistic Solution to Uncertain Lambert Problem（高阶灵敏度法）

- Duan 等, 2025, Adaptive Polynomial Chaos Expansion Method for Uncertain Multiple-Revolution Lambert Problem（多圈不确定形式）

- Criscola 等, 2024, Application of the Theory of Functional Connections to the Perturbed Lambert's Problem（受摄版本的直接解法）

- Izzo, 2006, Lambert's Problem for Exponential Sinusoids（指数正弦形状的类 Lambert 问题）
