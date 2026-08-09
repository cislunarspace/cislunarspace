---
title: Bang-bang 控制与 Lawden 弧定律（Bang-bang Control & Lawden's Arc Law）
description: 燃耗最优推力幅值的最优控制律——推力仅在最大值和零之间切换，不存在中间值。涵盖庞特里亚金极值原理推导Bang-bang控制、切换函数与Lawden先驱向量、最大推力弧/无推力弧/中间推力弧(奇异弧)、能量-燃耗同伦延拓解法，以及在地月空间小推力转移中的工程实现。
keywords: Bang-bang控制, Bang-bang Control, 最优控制, 燃耗最优, 切换函数, Lawden弧, 最大推力弧, Maximum-Thrust Arc, 无推力弧, Null-Thrust Arc, 中间推力弧, Intermediate thrust arc, 奇异弧, Singular Arc, 庞特里亚金极小值原理, 先驱向量, Primer Vector, 能量-燃耗同伦, 推力开关控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Bang-bang 控制与 Lawden 弧定律
  desc: 燃耗最优推进的核心理论——为什么最优推力只在开或关之间切换，以及Lawden的三类推力弧。
  image: /logo.png
og:
  title: Bang-bang 控制与 Lawden 弧定律详解 | 最优控制与推力弧
  description: 燃耗最优推力幅值的最优控制律——推力仅在最大值和零之间切换，不存在中间值。涵盖庞特里亚金极值原理推导、切换函数与Lawden先驱向量、最大推力弧/无推力弧/中间推力弧(奇异弧)、能量-燃耗同伦延拓解法，以及在地月空间小推力转移中的工程实现。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Bang-bang 控制与 Lawden 弧定律详解 | 最优控制与推力弧
  description: 燃耗最优推力幅值的最优控制律——推力仅在最大值和零之间切换，不存在中间值。涵盖庞特里亚金极值原理推导、切换函数与Lawden先驱向量、最大推力弧/无推力弧/中间推力弧(奇异弧)、能量-燃耗同伦延拓解法。
  image: /logo.png
permalink: /glossary/dynamics/bang-bang-control/
---

# Bang-bang 控制与 Lawden 弧定律（Bang-bang Control & Lawden's Arc Law）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

**Bang-bang 控制**是燃耗最优控制问题中推力幅值的标准形式：控制量仅在允许范围的两个极值间切换——推力要么取最大值 $F = F_{\max}$（"开"），要么为零 $F = 0$（"关"）——不存在中间推力值的持续燃烧。"bang-bang"一词源于继电器开关切换时发出的"砰"声。

这是庞特里亚金极值原理（Pontryagin's Minimum Principle）的直接推论。在燃耗最省目标下，哈密顿函数对推力幅值 $F$ 呈线性依赖关系，极小化哈密顿函数等价于将推力幅值推向约束的边界——要么最大、要么最小（零）。仅当切换函数恒为零时可能出现中间值，此即奇异弧，需要额外分析。

Lawden (1963) 在其奠基性著作《Optimal Trajectories for Space Navigation》中将推力轨迹按幅值特征划分为三类弧段（arc），这一分类至今仍是推力优化理论的基础术语：

- **最大推力弧**（Maximum-thrust arc, MT）：切换函数 $S < 0$ 时的弧段，发动机以 $F_{\max}$ 工作。

- **无推力弧**（Null-thrust arc, NT）：切换函数 $S > 0$ 时的弧段，推力为零，航天器沿弹道滑行。

- **中间推力弧**（Intermediate thrust arc, IT）：切换函数 $S \equiv 0$ 的弧段，推力幅值不确定，需通过 Legendre-Clebsch 二阶必要条件进一步分析。在最优控制理论中称为**奇异弧**（singular arc）。

## 数学推导

### 燃耗最优问题的哈密顿形式

考虑单一中心引力场中的小推力航天器，动力学方程为（朱政帆和高扬 2017）：

$$
\dot{\mathbf{r}} = \mathbf{v},\qquad
\dot{\mathbf{v}} = -\frac{\mu}{r^3}\mathbf{r} + \frac{F}{m}\boldsymbol{\alpha},\qquad
\dot{m} = -\frac{F}{g_0 I_{sp}}
$$

其中 $\boldsymbol{\alpha}$ 为推力方向单位矢量（$\|\boldsymbol{\alpha}\|=1$），$F \in [0, F_{\max}]$ 为推力幅值。燃耗最省的 Mayer 形式性能指标为 $J = \min[-m(t_f)]$。

引入协态变量 ${\lambda}_r, {\lambda}_v, \lambda_m$ 构造哈密顿函数：

$$
H = {\lambda}_r^{\mathrm{T}}\dot{\mathbf{r}} + {\lambda}_v^{\mathrm{T}}\dot{\mathbf{v}} + \lambda_m \dot{m}
$$

代入动力学方程并分离与控制相关的项：

$$
H = {\lambda}_r^{\mathrm{T}}\mathbf{v} - {\lambda}_v^{\mathrm{T}}\frac{\mu}{r^3}\mathbf{r} + F\left(\frac{{\lambda}_v^{\mathrm{T}}\boldsymbol{\alpha}}{m} - \frac{\lambda_m}{g_0 I_{sp}}\right)
$$

第三项对 $F$ 线性依赖——这直接导致了 Bang-bang 结构的出现。

### 最优推力方向：Lawden 先驱向量

定义**先驱向量**（primer vector）$\mathbf{p}(t) \equiv -{\lambda}_v(t)$（Lawden 1963, Ch. 3；Prussing 1993）。极小化哈密顿函数等价于令推力方向 $\boldsymbol{\alpha}$ 与 ${\lambda}_v$ 反向：

$$
\boldsymbol{\alpha}^* = -\frac{{\lambda}_v}{\|{\lambda}_v\|} = \frac{\mathbf{p}}{\|\mathbf{p}\|}
$$

即最优推力方向与先驱向量方向一致。

### 切换函数与 Bang-bang 条件

定义**开关函数**（switching function）$S$：

$$
S = \frac{\partial H}{\partial F} = -\frac{\|{\lambda}_v\|}{m} - \frac{\lambda_m}{g_0 I_{sp}}
$$

根据庞特里亚金极小值原理，极小化 $H$ 等价于选择 $F$ 使 $F \cdot S$ 极小：

$$
F^* = \begin{cases}
0, & S > 0 \quad \text{(无推力弧 / Null-thrust)} \\[4pt]
F_{\max}, & S < 0 \quad \text{(最大推力弧 / Maximum-thrust)} \\[4pt]
\text{待定}, & S = 0 \quad \text{(中间推力弧 / 奇异弧)}
\end{cases}
$$

$S(t)$ 的符号在飞行过程中变化，形成"开-关-开-关"交替的 Bang-bang 结构。关键在于：开关时刻（$S(t)=0$ 的时刻）和开关次数事先未知，必须作为优化问题的一部分求解。

在无量纲化下，可定义推力比 $u = F/F_{\max} \in [0,1]$，开关函数等价表示为（朱政帆和高扬 2017）：

$$
\rho = 1 - \frac{g_0 I_{sp} \|{\lambda}_v\|}{m} - \lambda_m
$$

Bang-bang 条件变为：$\rho > 0 \Rightarrow u^*=0$，$\rho < 0 \Rightarrow u^*=1$。

### 奇异弧：中间推力弧

当 $S(t) \equiv 0$ 在一个有限时间区间上恒成立时，一级必要条件不足以确定 $F$。此时需使用 Legendre-Clebsch 条件判断是否为极小路径。数值经验表明，在一般的小推力二体问题中，恒为零的奇异弧极少出现；但在某些特定问题（如功率受限的低推力轨迹）中可能出现（Thorne 1996, Ch. 4；Prussing 1993）。

## Lawden 弧定律的物理意义

Lawden (1963) 的三类弧分类不仅是数学表述，更有清晰的物理内涵：

1. **最大推力弧（MT）**：发动机全开。出现在需要迅速改变轨道能量或角动量的弧段——如地球逃逸螺旋的推力段和月球捕获螺旋的减速段。在这些位置，单位推力的能量改变效率最高。
2. **无推力弧（NT）**：发动机关机滑行。出现在航天器穿越大范围地月空间时，以及切换函数预示当前不施加推力反而更优的弧段。滑行段利用引力场自然演化轨道，节省推进剂。
3. **中间推力弧（IT / 奇异弧）**：出现于二阶条件决定推力为中间值的特殊情形。在实践中极少遇到，通常意味着优化问题的某些对称性或简化假设在起作用。大多数实际求解中假定不存在奇异弧，以避开数值复杂性。

在实际最优轨迹中，MT 和 NT 交替出现形成 Bang-coast-Bang 结构。中间的滑行段（coast）就是无推力弧。一个典型的 TCT（Thrust-Coast-Thrust）序列恰好对应 MT-NT-MT 三段弧。

## 能量-燃耗同伦：Bang-bang 控制的数值求解

直接求解 Bang-bang 控制的主要困难是：微分方程右侧不连续（$F$ 在开关处阶跃），且开关时刻和开关序列事先未知。延拓方法（同伦法）是目前求解该问题的主流途径。

**核心思想**（朱政帆和高扬 2017）：从容易求解的**能量最优**问题出发（此时推力幅值随时间连续变化），通过逐步调整性能指标中的同伦参数 $\varepsilon$，将连续控制变形为 Bang-bang 控制。

构造带同伦参数 $\varepsilon \in [0,1]$ 的性能指标：

$$
J = \min \left\{ \frac{F_{\max}}{g_0 I_{sp}} \int_{t_0}^{t_f} [u - \varepsilon u(1-u)]\, dt \right\}
$$

- $\varepsilon = 1$ 时为能量最优（$\int u^2 dt$），控制律连续可导，收敛域宽。

- $\varepsilon = 0$ 时为燃料最优（$\int u dt$），控制律退化为 Bang-bang。

在同伦过程中，最优推力比具有闭式解：

$$
u^* = \begin{cases}
0, & \rho > \varepsilon \\[4pt]
\dfrac{\varepsilon - \rho}{2\varepsilon}, & -\varepsilon \leqslant \rho \leqslant \varepsilon \\[4pt]
1, & \rho < -\varepsilon
\end{cases}
$$

在边界层 $|\rho| \leqslant \varepsilon$ 内，控制律连续且可导。随着 $\varepsilon \to 0$，边界层收缩，连续解逼近 Bang-bang 解。同伦参数序列通常采用 $\varepsilon_d = 10^{-(d/N)}$，$N$ 取 15--60。

两类延拓方法（朱政帆和高扬 2017）：

1. **能量-燃耗同伦**：先从能量最优解出发，逐步减小 $\varepsilon$ 至零。收敛性好，但不处理推力常值约束。
2. **开关序列切换延拓**：从双脉冲转移解出发，通过推力幅值延拓逐步最小推力轨道，再通过开关函数特征值变化自动调整开关序列。能保证每个中间解都满足 Bang-bang 必要条件。

## 地月空间中的工程关联

在地月空间 CR3BP+LT 模型下，Bang-bang 控制与以下概念密切相关：

- **CR3BP+LT 轨迹优化**：在限制性三体框架下考虑低推力，间接法（通过协态变量的两点边值问题）自然导出 Bang-bang 推力剖面。Fahey (2024) 在 Howell 组工作中使用 S 型函数平滑近似 Bang-bang 跳跃，作为最小燃料问题的中间步。

- **TCT 序列**：地月转移中的 Thrust-Coast-Thrust 天然对应 MT-NT-MT，是 Bang-bang 结构在特定任务中的直接体现。

- **连续推力轨道保持**（Station-Keeping）：在 NRHO、Halo 等平动点轨道的长期保持中，最优控制律同样呈 Bang-bang 特征——仅在轨道偏差超过阈值时施加推力（Zhang and Wang 2022）。

## 相关概念

- [电推进（Electric Propulsion）](/glossary/fundamentals/ep/) — Bang-bang 控制的物理载体，低推力系统的推进基础

- [推力方向与控制（Tangential Thrust Control）](/glossary/dynamics/tangential-thrust-control/) — 推力方向的最优与简化策略

- [庞特里亚金极小值原理](/glossary/fundamentals/pmp/) — 推导 Bang-bang 控制的数学基础

- [协态变量](/glossary/dynamics/co-state-variables/) — 先驱向量的直接物理来源

- [先驱向量（Primer Vector）](/glossary/dynamics/primer-vector/) — Lawden 提出的最优推力方向判定工具

- [同伦法](/glossary/dynamics/homotopy-method/) — Bang-bang 控制数值求解的核心技术

- [脉冲机动（Two-Impulse Rendezvous）](/glossary/dynamics/two-impulse-rendezvous/) — 脉冲推进模型下的机动方法，双脉冲是 Bang-bang 控制脉冲极限的初值来源

## 参考文献

- Lawden, D. F., 1963, Optimal Trajectories for Space Navigation. Butterworths, London. Ch. 3: 先驱向量的原始定义、切换函数与三类弧（MT/NT/IT）的经典分类。

- Pontryagin, L. S., et al., 1962, The Mathematical Theory of Optimal Processes. Wiley. 庞特里亚金极小值原理的原始著作。

- Bryson, A. E., and Ho, Y. C., 1975, Applied Optimal Control. Hemisphere. 最优控制的系统教材，含 Bang-bang 控制的数值方法。

- Prussing, J. E., 1993, Equation for Optimal Power-Limited Spacecraft Trajectories. JGCD. 功率受限问题的先驱向量方程与奇异弧分析。

- Prussing, J. E., 2010, Primer Vector Theory and Applications. 先驱向量理论在冲量机动中的系统综述。

- Thorne, J. D., 1996, Optimal Continuous-Thrust Orbit Transfers. PhD Dissertation, AFIT. 连续推力最优控制的全面数值研究，含奇异弧判定与 Legendre-Clebsch 条件分析。

- 朱政帆, 高扬, 2017, 空间小推力轨道最优 Bang-Bang 控制的两类延拓解法综述. 深空探测学报, 4(2): 101-110. 能量-燃耗同伦与开关序列切换延拓两种方法的详细比较。

- Fahey, L., 2024, Design Strategies for Low Thrust Transfers in the Earth-Moon System. MS Thesis, Purdue Univ. Ch. 5.3: S 型函数平滑近似 Bang-bang 跳跃在 CR3BP+LT 间接法中的应用。

- Zhang and Wang, 2022, Continuous-Thrust Station-Keeping of Cis-Lunar Orbits Using Optimal Sliding Mode Control. NRHO 连续推力轨道保持中 Bang-bang 特征的工程实现。
