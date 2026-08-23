---
title: 燃料最优控制（Fuel-optimal Control）
description: 航天器最优控制按性能指标划分的三大主流——燃料最优（L¹ 范数）、能量最优（L² 范数）、时间最优——的统一框架。涵盖 Mayer/Lagrange 形式、庞特里亚金极值原理导出的切换函数与 Bang-bang/Bang-off-Bang 结构、奇异弧、与能量-燃耗同伦的衔接，以及动力下降、地月低推力转移、轨道保持等典型应用。
keywords: 燃料最优控制, Fuel-optimal Control, 能量最优, Energy-optimal, 时间最优, Time-optimal, 性能指标, 切换函数, Bang-bang, Bang-off-Bang, 间接法, 同伦法, 动力下降, 低推力转移
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 燃料最优控制（Fuel-optimal Control）
  desc: 燃料/能量/时间三类性能指标在最优控制中的统一处理——切换函数、Bang-bang 结构与同伦求解。
  image: /logo.png
og:
  title: 燃料最优控制（Fuel-optimal Control）详解 | 最优控制性能指标
  description: 航天器最优控制按性能指标划分的三大主流——燃料最优（L¹）、能量最优（L²）、时间最优——的统一框架。涵盖庞特里亚金极值原理、切换函数、Bang-bang/Bang-off-Bang 结构、奇异弧与能量-燃耗同伦，以及动力下降与地月低推力转移的工程应用。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 燃料最优控制（Fuel-optimal Control）详解 | 最优控制性能指标
  description: 航天器最优控制按性能指标划分的三大主流——燃料最优（L¹）、能量最优（L²）、时间最优——的统一框架。涵盖庞特里亚金极值原理、切换函数、Bang-bang/Bang-off-Bang 结构、奇异弧与能量-燃耗同伦。
  image: /logo.png
permalink: /glossary/dynamics/fuel-optimal/
---

# 燃料最优控制（Fuel-optimal Control）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

**燃料最优控制**是一类以推进剂消耗最少为目标的最优控制问题。在火箭方程假设下，等价于最大化终端质量或最小化速度增量总和。与 **能量最优控制**（minimize $\int\|\mathbf{u}\|^2 dt$）和 **时间最优控制**（minimize $t_f-t_0$）并列为航天器轨迹优化的三大主流性能指标，三者在 [庞特里亚金极值原理](/glossary/dynamics/pontryagins-maximum-principle/) 框架下导出不同结构的最优控制律（Bryson & Ho 1975；Betts 1998；Conway 2010）。

| 指标 | 数学形式 | 控制结构 | 典型场景 |
| :--- | :--- | :--- | :--- |
| **燃料最优**（$L^1$） | $J=\int_{t_0}^{t_f}\|\mathbf{u}\|\,dt=-m(t_f)/c$ | Bang-off-Bang（开关切换） | 小推力深空转移、动力下降 |
| **能量最优**（$L^2$） | $J=\int_{t_0}^{t_f}\|\mathbf{u}\|^2\,dt$ | 连续光滑节流 | 同伦法起点、功率受限 |
| **时间最优** | $J=t_f-t_0$ | 全程满推力 | 转移时限严格的任务 |

其中 $\mathbf{u}=T_{\max}\,u\,\boldsymbol{\alpha}/m$ 为推力加速度，$u\in[0,1]$ 为节流比。

## 数学描述

### 动力学与性能指标

考虑中心引力场下的变质量航天器：

$$
\dot{\mathbf{r}}=\mathbf{v},\quad \dot{\mathbf{v}}=\mathbf{g}(\mathbf{r})+\frac{T_{\max}}{m}\,u\,\boldsymbol{\alpha},\quad \dot{m}=-\frac{T_{\max}}{c}\,u.
$$

燃料最优取 Mayer 形式 $J=-m(t_f)$，等价于 Lagrange 形式 $J=(T_{\max}/c)\int u\,dt$。哈密顿函数为

$$
H=\boldsymbol{\lambda}_r^{\mathrm{T}}\mathbf{v}+\boldsymbol{\lambda}_v^{\mathrm{T}}\mathbf{g}+u\,T_{\max}\!\left(\frac{\boldsymbol{\lambda}_v^{\mathrm{T}}\boldsymbol{\alpha}}{m}-\frac{\lambda_m}{c}\right).
$$

### 最优控制律：先驱向量与切换函数

定义 [先驱向量](/glossary/dynamics/primer-vector/) $\mathbf{p}\equiv-\boldsymbol{\lambda}_v$ 与无量纲切换函数

$$
\rho(t)=1-\frac{c\,\|\mathbf{p}\|}{m}-\lambda_m,
$$

极小化 $H$ 给出最优推力方向 $\boldsymbol{\alpha}^{*}=\mathbf{p}/\|\mathbf{p}\|$，最优节流为（朱政帆与高扬 2017；Caillau et al. 2012）：

$$
u^{*}=\begin{cases}0,&\rho>0\\1,&\rho<0\\\text{不定},&\rho=0\end{cases}
$$

$\rho=0$ 对应 **奇异弧**（singular arc）：一阶极值条件不足以确定 $u$，需用 Legendre-Clebsch 二阶条件判断。在标准燃料最优问题中奇异弧极少出现，多数解呈现 **Bang-off-Bang** 结构，MT 弧（$u=1$）与 NT 弧（$u=0$）交替，中间无中间推力段（Lawden 1963；详见 [Bang-bang 控制](/glossary/dynamics/bang-bang-control/)）。

### 能量最优与同伦起点

能量最优性能指标对应的切换函数为 $\rho_E=1-2\varepsilon c\|\mathbf{p}\|/m-\lambda_m$（$\varepsilon$ 为同伦参数），节流连续光滑、收敛域宽。Bertrand 与 Epenoy（2002）引入带 $\varepsilon$ 的代价函数

$$
J_\varepsilon=\int_{t_0}^{t_f}\!\bigl[u-\varepsilon\,u(1-u)\bigr]dt,
$$

构造从 $\varepsilon=1$（能量最优，光滑）到 $\varepsilon\to 0$（燃料最优，Bang-off-Bang）的同伦路径。该路径上的子问题以前一解为初值依次求解，是间接法走向工程可解的关键桥梁，详见 [同伦方法](/glossary/dynamics/homotopy-method/)。

### 时间最优的特殊性

时间最优指标对控制不显含 $u$，由 $H\equiv 0$（自由终端时间条件）和哈密顿函数对 $u$ 的依赖推出：节流始终取 $u^{*}=1$（全程满推），推力方向由 $\boldsymbol{\alpha}^{*}=\mathbf{p}/\|\mathbf{p}\|$ 给出。这一形式使得时间最优问题没有开关切换，间接法相对易解，常用作推力幅值同伦的起点（Caillau & Daoud 2012）。

## 燃料-时间权衡

实际任务通常受转移时长约束。定义时间比 $c_{t_f}=t_f/t_f^{\min}$，则燃料最优剩余质量随 $c_{t_f}$ 增加而增加，但 $c_{t_f}\gtrsim 2$ 后趋于饱和（Caillau et al. 2012, Fig. 4）：多出的飞行时间换取的燃料节省边际递减。设计时常在该 Pareto 前沿上选点：地质任务取 $c_{t_f}\approx 1.5$ 偏向时间，货运任务取 $c_{t_f}\approx 2$--3 偏向燃料。

## 应用要点

### 动力下降（Powered Descent）

月球或行星动力下降是燃料最优控制的典型场景：终端状态约束为 $(\mathbf{r}(t_f),\mathbf{v}(t_f))$ 给定，性能指标取 $J=m(t_f)$。由极值原理导出的最优推力通常呈始终制动或 Bang-off-Bang 形态。Åström 与 Di Benedetto 等证明在标准软着陆问题中不存在非平凡奇异弧（You and Dai 2022），因此数值上可放心使用 Bang-off-Bang 假设。

### 地月低推力转移

地月空间小推力转移是燃料最优控制的主要应用舞台：

- **LEO 至 $L_1$/$L_2$ Halo 转移**：Zhang et al.（2025）用 erf 平滑同伦求解 $L_1$ Halo 至 $L_2$ Halo 转移，燃料消耗仅占初始质量的 0.34%；
- **CR3BP 平面最小燃料**：Caillau et al.（2012）用 $L^2$--$L^1$ 同伦与对数障碍同伦求解 GEO 至 $L_1$/月圆轨道的 0.3 N 级转移，证明了共轭点检验的必要性；
- **多阶段构型**：长转移常分为推力段-滑行段-推力段，每段独立建 BVP 再用匹配条件连接（参见 [间接法](/glossary/dynamics/indirect-methods/)）。

### 轨道保持

NRHO、Halo 等平动点轨道的长期保持是周期性触发的燃料最优小问题：每发现轨道偏差超过阈值即求解一个固定时长的最小 $\Delta V$ 修正，控制律呈现 Bang-off-Bang 特征（Zhang and Wang 2022）。

## 与能量-燃耗同伦的衔接

直接求解 Bang-off-Bang 燃料最优几乎不可能（控制不连续、切换次数未知），主流做法是经 **能量-燃耗同伦** 把连续光滑的能量最优解逐步变形为燃料最优解。三类平滑函数在文献中常用：

- **多项式平滑**（$u(1-u)$，Bertrand & Epenoy 2002）：实现最简，但低推力精度差；
- **对数障碍**（$-u\log u-(1-u)\log(1-u)$，Caillau et al. 2012；Taheri et al. 2016）：强制 $0<u<1$，使哈密顿处处可微；
- **sigmoid 类**（$\tanh$、代数、误差函数 erf，Zhang et al. 2025）：直接逼近 $\mathrm{sign}(\rho)$，erf 形式收敛最快。

工程经验判据：$\varepsilon\sim 10^{-5}$ 时节流剖面与真正 Bang-off-Bang 已几乎不可分辨（Taheri et al. 2016；Zhang et al. 2025）。详见 [同伦方法](/glossary/dynamics/homotopy-method/)。

## 相关概念

- [先驱向量（Primer Vector）](/glossary/dynamics/primer-vector/)：决定最优推力方向与脉冲时刻的伴随量
- [Bang-bang 控制（Bang-bang Control）](/glossary/dynamics/bang-bang-control/)：燃料最优控制的典型结构
- [同伦方法（Homotopy Method）](/glossary/dynamics/homotopy-method/)：求解燃料最优 Bang-off-Bang 的核心数值手段
- [庞特里亚金最小值原理（PMP）](/glossary/dynamics/pontryagins-maximum-principle/)：推导最优控制律的基础定理
- [协态变量（Co-state Variables）](/glossary/dynamics/co-state-variables/)：切换函数的来源
- [间接法（Indirect Methods）](/glossary/dynamics/indirect-methods/)：求解燃料最优问题的方法框架
- [电推进（Electric Propulsion）](/glossary/fundamentals/ep/)：燃料最优控制的主要物理载体

## 参考文献

- Lawden, D. F. 1963. *Optimal Trajectories for Space Navigation*. Butterworths, London.（三类推力弧与奇异弧分析的经典出处）
- Bryson, A. E., and Ho, Y.-C. 1975. *Applied Optimal Control*. Hemisphere.（最优控制系统教材，含燃料/能量/时间三类指标对比）
- Betts, J. T. 1998. Survey of Numerical Methods for Trajectory Optimization. *JGCD* 21(2): 193–207.（轨迹优化数值方法综述）
- Conway, B. A. (ed.) 2010. *Spacecraft Trajectory Optimization*. Cambridge Univ. Press.（间接法、直接法与同伦法的统一教材）
- Bertrand, R., and Epenoy, R. 2002. New Smoothing Techniques for Solving Bang–Bang Optimal Control Problems: Numerical Results and Statistical Interpretation. *Optim. Control Appl. Methods* 23(4): 171–197.（$\varepsilon$-平滑化性能指标的开创文献）
- Caillau, J.-B., Cerf, M., Dujols, A., et al. 2012. Minimum Fuel Control of the Planar Circular Restricted Three-Body Problem. *CEP*.（CR3BP 平面最小燃料、$L^2$--$L^1$ 同伦与对数障碍对比）
- Caillau, J.-B., and Daoud, B. 2012. Minimum Time Control of the Restricted Three-Body Problem. *SIAM J. Control Optim.* 50(6).（时间最优与推力幅值同伦）
- Taheri, E., Kolmanovsky, I., and Atkins, E. 2016. Enhanced Smoothing Technique for Indirect Optimization of Minimum-Fuel Low-Thrust Trajectories. *JGCD* 39(11): 2500–2511.（扩展对数平滑 + 协态归一化 + STM 雅可比）
- Zhang, et al. 2025. Smoothing Technique for Indirect Low-Thrust Trajectory Optimization in Cislunar Space. *Space Sci. Technol.*（$L_1$--$L_2$ Halo 转移算例，erf 形式 sigmoid 比较）
- 朱政帆, 高扬. 2017. 空间小推力轨道最优 Bang-Bang 控制的两类延拓解法综述. *深空探测学报* 4(2): 101–110.
- You, S., and Dai, R. 2022. Fuel-Optimal Trajectory Generation via Down-To-The-Moon Approach. *JGCD*, doi:10.2514/1.G006815.（动力下降问题无非平凡奇异弧的证明）
