---
title: 轨道优化中的约束（Trajectory Constraints）
description: 航天器轨道优化问题中约束的统一框架——终端/边界约束、路径约束、状态约束、事件/相位约束——的数学结构、在地月空间任务中的典型形式（日食规避、多圈 Lambert 边界、Howell-Kakoi 系统间转移相位约束），以及约束松弛、平滑化等数值处理技术。状态约束在间接法中触发协态跳跃；直接法中通过缺陷约束与活动集处理。
keywords: 轨道优化约束, trajectory constraints, 终端约束, 边界约束, 路径约束, 状态约束, 事件约束, 日食规避, 约束松弛, 多圈Lambert, 最优控制, 地月转移
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 轨道优化中的约束（Trajectory Constraints）
  desc: 终端/路径/状态/事件四类约束的数学结构与地月空间典型实例。
  image: /logo.png
og:
  title: 轨道优化中的约束详解 | 转移轨道设计
  description: 航天器轨道优化问题中约束的统一框架——终端/边界约束、路径约束、状态约束、事件/相位约束——的数学结构、在地月空间任务中的典型形式（日食规避、多圈 Lambert 边界、Howell-Kakoi 系统间转移相位约束），以及约束松弛、平滑化等数值处理技术。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 轨道优化中的约束详解 | 转移轨道设计
  description: 航天器轨道优化问题中约束的统一框架——终端/边界、路径、状态、事件四类约束的数学结构与地月空间典型实例。
  image: /logo.png
permalink: /glossary/dynamics/trajectory-constraints/
---

# 轨道优化中的约束（Trajectory Constraints）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

**轨道优化中的约束**（trajectory constraints）是航天器轨道优化问题里，除动力学方程本身之外、轨迹必须满足的所有附加限制。它们把抽象的工程要求翻译成数学条件：航天器何时必须到达何处、沿途必须避开什么、哪些状态或控制量的边界不可逾越。一条同时满足动力学与全部约束的轨迹称为*可行解*；优化算法的任务是在可行解集合中最小化性能指标（Betts 1998；Conway 2010）。

按作用的位置与方式，约束可分四类：

- **终端/边界约束**（terminal / boundary）：作用在某段的初始或终端时刻，例如交会、入轨、拦截条件。
- **路径约束**（path）：在某段全程每一时刻都必须成立的不等式，例如日食规避、热流密度、推力幅值上界。
- **状态约束**（state）：仅含状态量、不含控制量的路径约束，例如近地高度下界、最大飞行距离；它们在间接法中触发协态跳跃。
- **事件/相位约束**（event / phase）：作用在段内特定时刻或跨段联立变量上，例如系统间转移界面处的相位角匹配。

拼接点处的弧间连续性条件，在直接配点法里常被表达为*缺陷约束*，见 [缺陷约束](/glossary/dynamics/direct-collocation/)；弧间匹配的理论框架见 [多弧段最优控制](/glossary/dynamics/multi-arc-optimal-control/)。

## 数学结构

含四类约束的单段最优控制问题标准形式（Betts 1998）：

$$\min_{\boldsymbol{u}(\cdot),\,t_f} J = \Phi[\boldsymbol{x}(t_0),\boldsymbol{x}(t_f),t_f] + \int_{t_0}^{t_f} L\,\mathrm{d}t,$$

约束为

$$\dot{\boldsymbol{x}} = \boldsymbol{f}(\boldsymbol{x},\boldsymbol{u},t),$$

$$\boldsymbol{\psi}[\boldsymbol{x}(t_0),\boldsymbol{x}(t_f),t_f] = \boldsymbol{0} \quad \text{（终端/边界）},$$

$$\boldsymbol{g}_l \leq \boldsymbol{g}[\boldsymbol{x}(t),\boldsymbol{u}(t),t] \leq \boldsymbol{g}_u \quad \text{（路径）},$$

$$\boldsymbol{x}_l \leq \boldsymbol{x}(t) \leq \boldsymbol{x}_u \quad \text{（状态量简单上下界）}.$$

某分量取 $g_l = g_u$ 即退化为等式约束。Betts（1998）还专门区分了*积分函数* $\int q\,\mathrm{d}t$，用于约束累计量（如累计日食时长）。

在间接法中，终端约束通过乘子 $\boldsymbol{\nu}$ 与协态耦合：$\boldsymbol{\lambda}(t_f) = \partial\Phi/\partial\boldsymbol{x}(t_f) + (\partial\boldsymbol{\psi}/\partial\boldsymbol{x}(t_f))^{T}\boldsymbol{\nu}$，与未知的 $\boldsymbol{\lambda}(t_0)$ 共同构成 [两点边值问题](/glossary/dynamics/tpbvp/)。

## 状态约束与协态跳跃

当纯状态不等式 $S(\boldsymbol{x})\leq 0$ 在某段 $[t_1,t_2]$ 内激活（称为*边界弧*）时，标准一阶必要条件需引入非负乘子 $\eta(t)\geq 0$（仅在边界弧上非零）。协态在边界弧的进入/退出时刻 $t_i$ 满足 [跳跃条件](/glossary/dynamics/indirect-methods/)

$$\boldsymbol{\lambda}(t_i^{+}) = \boldsymbol{\lambda}(t_i^{-}) - \eta(t_i)\,\nabla S[\boldsymbol{x}(t_i)].$$

对 $p$ 阶状态约束（即 $S$ 对时间求 $p$ 阶导后才显含 $\boldsymbol{u}$），跳跃出现在 $\boldsymbol{\lambda}^{(p-1)}$ 而非 $\boldsymbol{\lambda}$ 本身。这种非光滑性是间接法处理活动状态约束困难的根源；直接法通过 NLP 活动集机制隐式吸收，对算法影响小得多（You & Dai 2022）。

## 地月空间中的典型实例

### 终端：多圈 Lambert 边界

多圈 Lambert 问题在固定 $\boldsymbol{r}_0$、$\boldsymbol{r}_f$、飞行时间 $T$ 之外，多了一个圈数 $N$。Duan 等（2025）证明，**轨道动力学边界约束**会重塑允许解流形随 $N$ 的分布：随着 $N$ 增大，越来越多的 $(\boldsymbol{r}_0,\boldsymbol{r}_f,T)$ 采样在该圈数下没有可行解，单圈可行解占比随 $N$ 单调下降。原因是几何的：在固定转移角下，绕行更多圈把半长轴压进越来越窄的区间。这一现象在为 [打靶法](/glossary/dynamics/differential-correction/) 选初值或为不确定 Lambert 问题建代理模型时必须显式建模。

### 路径：日食规避

太阳能电推进任务在遮挡天体的本影/半影锥内无法（或只能降级）推力。Sowell & Taheri（2024）把这一约束表达为推力加速度的平滑熄火因子

$$\boldsymbol{\Delta}_{\text{prop}} = \frac{T_{\max}}{m}\,\delta\,\bar{\delta}_e\,\hat{\boldsymbol{\alpha}}, \quad \bar{\delta}_e = \tfrac{1}{2}\left[1 + \tanh(S_e/\rho_e)\right],$$

其中 $S_e = a_D - a_{RS} - a_{RB}$ 是由太阳与遮挡体的视角半径、视角距构造的日食切换函数，$\rho_e$ 控制平滑度。把 $\bar{\delta}_e\in[0,1]$ 直接嵌入动力学，避免了显式建模进出影时刻的多段配点转录，代价是多了一个参数 $\rho_e$，在平滑度与事件定位精度间取舍。同一构造可扩展为*限制累计日食时长*，只需把 $\int (1-\bar{\delta}_e)\,\mathrm{d}t$ 加入性能指标。

### 事件：系统间转移的时间/相位约束

日地与地月两套 CR3BP 系统之间的转移，在几何上由不稳定/稳定流形管在庞加莱截面上的交点定位。在星历模型中，这些交点只在特定的月球相位朝向下才存在。Howell & Kakoi（2006）用 3-1-3 欧拉角序列 $(\alpha, i, \beta)$（$i\approx 5^{\circ}$ 固定）参数化地月旋转系相对日地旋转系的朝向，加上庞加莱截面方位角 $\psi$，把时间约束归结为对 $(\alpha, \beta, \psi)$ 的选择：这三个角对转移历元做线性或二次拟合。协同调整 $\alpha$ 与 $\beta$（增加 $\alpha$ 同时按等量减小 $\beta$）能在保持交点位置不变的前提下改历元，是扫描朔望月窗口找低成本转移的廉价手段。

## 数值处理技术

- **直接转录** 把每条约束翻成 NLP 行：每个配点处的缺陷方程（见 [缺陷约束](/glossary/dynamics/direct-collocation/)），加上节点/中点的路径约束估值。利用稀疏性的 SQP/IP 求解器（SNOPT、IPOPT）可处理 $10^4$–$10^6$ 量级的约束（Betts 1998）。

- **软约束 / 松弛** 把硬等式 $\boldsymbol{X}_P = \boldsymbol{X}_Q$（例如扰动流形与目标轨道庞加莱截面在 4 维空间精确相交）替换为最近点搜索 $\min\|\boldsymbol{X}_P - \boldsymbol{X}_Q\|$ + Lambert 弧段接补。乔琛远与杨乐平（2024）把此法用于地月 $L_1$ Halo-to-GEO 转移：截面相交在 4 维中是*过约束*，优化器无解；松弛为优化目标里的 Lambert $\Delta V$ 项后，问题变为参数化的连续搜索。松弛保留可行性（每条 Lambert 桥都是合法转移），代价是让 $\Delta V$ 吸收几何失配。

- **平滑化（双曲正切 / CSC）** 把分段定义的约束（日食开关、bang-bang 控制）正则化，使间接积分器与 NLP 雅可比保持光滑；与庞特里亚金极值原理并用时常见 [复合光滑控制](/glossary/dynamics/pontryagins-maximum-principle/)。

- **增广拉格朗日 / 罚函数** 把活动不等式约束移入目标函数，见 [增广拉格朗日法](/glossary/dynamics/augmented-lagrangian-method/)。

## 应用要点

- 终端约束主导 [打靶法](/glossary/dynamics/differential-correction/) 雅可比的结构；终端盒越紧，收敛域越窄。
- 路径约束活动状态频繁切换（如低推力螺旋上的日食）是伪谱法网格加密的主要驱动。
- 多体问题中的段间联立约束，是把读者引向 [多弧段最优控制](/glossary/dynamics/multi-arc-optimal-control/) 理论的桥梁。

## 相关概念

- [两点边值问题（TPBVP）](/glossary/dynamics/tpbvp/)
- [微分修正与打靶法](/glossary/dynamics/differential-correction/)
- [多弧段最优控制](/glossary/dynamics/multi-arc-optimal-control/)
- [缺陷约束](/glossary/dynamics/direct-collocation/)
- [跳跃条件](/glossary/dynamics/indirect-methods/)
- [直接配点法](/glossary/dynamics/direct-collocation/)
- [增广拉格朗日法](/glossary/dynamics/augmented-lagrangian-method/)
- [庞加莱截面](/glossary/dynamics/poincare-section/)
- [不变流形](/glossary/dynamics/invariant-manifold/)
- [低能转移](/glossary/dynamics/low-energy-transfer/)
- [三体 Lambert 问题](/glossary/dynamics/three-body-lambert-problem/)
- [轨道保持（Station-Keeping）](/glossary/dynamics/station-keeping/)

## 参考文献

- Betts, J. T. (1998). Survey of numerical methods for trajectory optimization. *Journal of Guidance, Control, and Dynamics*, 21(2), 193-207.
- Conway, B. A. (Ed.). (2010). *Spacecraft Trajectory Optimization*. Cambridge University Press.
- Howell, K. C., & Kakoi, M. (2006). Transfers between the Earth-Moon and Sun-Earth systems using manifolds and transit orbits. *Acta Astronautica*, 59(1-5), 367-380.
- Sowell, S., & Taheri, E. (2024). Eclipse-conscious low-thrust trajectory optimization using pseudospectral methods and control smoothing techniques. *Journal of Spacecraft and Rockets*. doi:10.2514/1.A35789
- 乔琛远, 杨乐平. 地月 L1 点低能转移轨道设计与优化. *系统工程与电子技术*, 2024, 46(10).
- Duan, Y., Zhang, Y., & Liu, Y. (2025). Adaptive polynomial chaos expansion method for uncertain multiple-revolution Lambert problem. *Celestial Mechanics and Dynamical Astronomy*.
- You, S., & Dai, R. (2022). Trajectory optimization with state constraints. *Journal of Guidance, Control, and Dynamics*. doi:10.2514/1.G006815
