---
title: 推力方向与控制（Thrust Direction & Control）
description: 推力矢量方向的描述与控制策略——切向、反切向推力的简化假设与其在轨道能量改变中的效率分析；推力方向角、方向余弦、转向角的参数化方法比较；小推力轨道保持中的连续推力控制策略与工程约束。
keywords: 推力方向, Thrust Direction, 切向推力, Tangential Thrust, 反切向推力, Anti-Tangential Thrust, 推力方向角, Thrust Direction Angle, 推力方向余弦, Thrust Direction Cosines, 推力转向角, Thrust Steering Angle, 连续推力轨道保持, Continuous-Thrust Station-Keeping, 小推力控制, Low-Thrust Control, 推力参数化
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 推力方向与控制（Thrust Direction & Control）
  desc: 推力矢量方向的参数化与控制——切向/反切向推力的效率分析，方向角/方向余弦/转向角的比较，以及小推力轨道保持策略。
  image: /logo.png
og:
  title: 推力方向与控制（Thrust Direction & Control）详解 | 术语定义
  description: 推力矢量方向的描述与控制策略——切向、反切向推力的简化假设与其在轨道能量改变中的效率分析；推力方向角、方向余弦、转向角的参数化方法比较；小推力轨道保持中的连续推力控制策略与工程约束。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 推力方向与控制（Thrust Direction & Control）详解 | 术语定义
  description: 推力矢量方向的描述与控制策略——切向/反切向推力的效率、方向角/余弦/转向角的参数化比较、小推力轨道保持的工程约束。
  image: /logo.png
permalink: /glossary/dynamics/tangential-thrust-control/
---

# 推力方向与控制（Thrust Direction & Control）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

推力方向与控制关注的是小推力发动机推力矢量的方向描述和最优选择问题。与化学推进的脉冲式瞬时变轨不同，连续推力系统每一时刻都需要决定推力指向何方——这个方向不仅影响即时的轨道变化率，更决定了整个积分路径的燃耗效率。

推力方向在最一般的情形下由最优控制理论确定：根据庞特里亚金极小值原理，最优推力方向应与 Lawden 先驱向量（速度协态函数的负值）的方向一致。但在解析研究、初值猜测和工程简化中，常采用特定的简化推力方向假设。

## 推力方向的简化策略

### 切向推力与反切向推力

**切向推力**（tangential thrust）是最简单的推力方向假设：推力方向始终平行于速度矢量方向（沿轨迹切线方向）。

**反切向推力**（anti-tangential thrust）：推力方向与速度矢量反向（沿轨迹切线负方向）。

在二体问题的轨道根数变化率分析中，切向/反切向推力的效率可以通过 Gauss 形式的变分方程理解：

$$
\frac{da}{dt} = \frac{2 a^2 e \sin f}{h} a_r + \frac{2 a^2 (1+e\cos f)}{h} a_t
$$

其中 $a_t$ 为横向（沿速度方向）推力分量，$a_r$ 为径向分量。对于近圆轨道（$e \approx 0$），半长轴变化率主要由 $a_t$ 贡献——径向推力的贡献项 $ 2a^2 e\sin f / h$ 近于零。结论：**切向推力是短时间内改变轨道半长轴（即轨道能量）最有效的方向**（Du et al. 2024）。

这一简化假设在实践中广泛使用：

- **加速场景**（切向推力）：地球逃逸螺旋的最佳方向，推力持续对航天器做功，使其轨道能量递增。

- **减速场景**（反切向推力）：月球捕获螺旋的最佳方向，推力反向做功使航天器从高月轨道逐步降轨至低月轨道。

- **指数正弦曲线解析推导**：Izzo (2006) 的指数正弦形状法基于切向推力假设 $\alpha = \gamma$（推力方向角等于航迹角），在此假设下推力大小和极角变化率均由形状参数唯一确定。

注意：切向/反切向推力是简化假设，并非最优控制的精确解。实际低推力发动机的最优方向通常需要在最优控制框架（协态方程 + 两点边值问题）中求解，切向假设仅在特定轨道阶段（能量变化为主的阶段）是接近最优的。

## 推力方向的参数化方法

在数值优化中，需要将推力方向表示为有限个参数。三种主流参数化方法：

### 1. 推力方向角参数化

在给定参考坐标系中以两个角度标记推力矢量：

- **推力方向角**（thrust direction angle）：$\theta_1$ 为推力矢量在 $xOy$ 平面内与 $x$ 轴的夹角，$\theta_2$ 为推力矢量与 $xOy$ 平面的夹角（Du et al. 2024）。

- **推力转向角**（thrust steering angle）：$u$ 为推力矢量在当地经向-径向平面内相对于当地水平面的夹角，$v$ 为推力矢量相对于当地垂直平面的夹角（Kluever and Pierson 1997）。

角度参数化直观且变量数量少（每条弧段 2 个随时间变化的参数），缺点是存在方向奇异性——当推力接近天顶/天底方向（$\theta_2 \to \pm 90^\circ$）时，$\theta_1$ 丧失定义，数值优化梯度奇异。

### 2. 推力方向余弦参数化

将推力单位矢量直接表示为其在三个坐标轴上的方向余弦分量：

$$
\hat{\mathbf{a}} = [a_r, a_t, a_h]^{\mathrm{T}},\quad a_r^2 + a_t^2 + a_h^2 = 1
$$

其中 $r, t, h$ 分别对应径向、横向（沿速度）和轨道面法向（Kluever 1997）。

方向余弦参数化的优势：(1) 无奇异——任何方向均可均匀表示，(2) 梯度光滑、适合非线性规划求解器。代价是变量数多一个（3 个而非 2 个），且需额外等式约束保证单位化。

### 3. 协态驱动参数化

在间接法中，推力方向不由设计参数直接指定，而是作为速度协态变量 ${\lambda}_v$ 的函数确定：

$$
\boldsymbol{\alpha}^* = -\frac{{\lambda}_v}{\|{\lambda}_v\|}
$$

此时无需显式的角度或余弦参数化，协态变量本身是微分方程的解。优点是自动满足最优性必要条件，缺点是协态初值无物理意义且高度敏感，BVP 收敛困难（朱政帆和高扬 2017）。

## 连续推力轨道保持

轨道保持（station-keeping）是推力方向控制的重要应用场景。不同于转移轨道的一次性最优规划，轨道保持是在整个任务生命周期中持续进行的轨道修正。

**连续推力轨道保持**利用持续工作的电推进发动机不间断地施加控制力，使航天器长期维持在标称轨道附近（Zhang and Wang 2022）。适用于 DRO、Halo 轨道和 NRHO 等多种地月空间轨道。

与脉冲式轨道保持的对比：

| 特征 | 脉冲式保持 | 连续推力保持 |
|------|----------|------------|
| 控制频率 | 离散脉冲（间隔数小时到数天） | 持续施加 |
| 推力幅值 | 较大（牛级） | 小（毫牛级） |
| 控制精度 | 有限（脉冲间有漂移） | 精细（持续修正偏差） |
| 工程难点 | 姿态不稳定时的指向精度 | 最小推力、最大推力、推力精度的约束 |

关键的工程约束：(1) **推力边界**：发动机有最小稳定推力 $F_{\min}$ 与最大推力 $F_{\max}$，最优解可能落在推力要求低于 $F_{\min}$ 的区域，此时要么增大推力使控制更"粗糙"，要么引入 Bang-bang 调制；(2) **推力方向变化率**：姿态控制系统限制了推力矢量方向的旋转速度。

对于 9:2 NRHO，因其近月点速度变化剧烈，轨道保持所需的推力幅值远大于同地月距离的 Halo 轨道，是推力边界特别值得关注的特例（Zhang and Wang 2022）。

## 冲量方向角

在脉冲推力的特定情形下，推力方向简化为单次施加的方向。**冲量方向角**（impulse direction angle）是脉冲推力施加方向与径向垂线之间的夹角。Lawden (1963) 的最优转移理论表明，最优转移要求在拱点处施加垂直于径向的冲量（即方向角为零），以最大化推力对速度的贡献——这与连续推力的切向假设在物理上一脉相承。

## 相关概念

- [Bang-bang 控制与 Lawden 弧定律](/glossary/dynamics/bang-bang-control/) — 推力幅值的最优开关逻辑，轨道保持中可能出现的离散化模式

- [电推进（EP）](/glossary/fundamentals/ep/) — 连续推力系统的物理基础

- [脉冲机动与交会（Two-Impulse Rendezvous）](/glossary/dynamics/two-impulse-rendezvous/) — 脉冲模型下的推力方向施加策略

- [庞特里亚金极小值原理](/glossary/dynamics/pontryagins-maximum-principle/) — 最优推力方向的数学基础

- [协态变量](/glossary/dynamics/co-state-variables/) — 决定最优推力方向的物理量

- [先驱向量（Primer Vector）](/glossary/dynamics/primer-vector/) — Lawden 提出的最优推力方向判定工具

## 参考文献

- Lawden, D. F., 1963, Optimal Trajectories for Space Navigation. Butterworths. 推力方向的最优性必要条件与先驱向量的原始推导。

- Izzo, D., 2006, Lambert's Problem for Exponential Sinusoids. JGCD. 切向推力假设下指数正弦曲线的解析推导。

- Du et al., 2024, 轨道根数受推力影响的变分分析，含切向/反切向推力效率的 Gauss 方程推导。

- Kluever and Pierson, 1997, Optimal Earth-Moon Trajectories Using Nuclear Electric Propulsion. 推力转向角参数的工程定义与地月转移应用。

- Kluever, 1997, Optimal Earth-Moon Trajectories Using Combined Chemical-Electric Propulsion. 推力方向余弦参数化在地月转移中的具体使用。

- Zhang and Wang, 2022, Continuous-Thrust Station-Keeping of Cis-Lunar Orbits Using Optimal Sliding Mode Control. 连续推力轨道保持的工程分析，含 NRHO 推力边界特例。

- 朱政帆, 高扬, 2017, 空间小推力轨道最优 Bang-Bang 控制的两类延拓解法综述. 深空探测学报. 协态驱动推力方向参数化与间接法收敛性分析。
