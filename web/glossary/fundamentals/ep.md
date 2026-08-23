---
title: 电推进（Electric Propulsion, EP）
description: 利用电能加速工质产生推力的推进技术。比冲远高于化学推进，推力幅值小但效率高，是地月空间长时间转移和深空探测的核心推进方案。覆盖电推进分类、推力加速度方程、比冲与火箭方程、与脉冲推力的对比、地月空间电推进转移策略及其工程参数。
keywords: 电推进, Electric Propulsion, EP, 低推力推进, Low-Thrust Propulsion, 连续小推力, Continuous Low Thrust, 太阳能电推进, SEP, 比冲, Specific Impulse, 推力加速度, 火箭方程, 地月转移, 化学-电推进组合转移, 低推力周期轨道, LTPO
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 电推进（Electric Propulsion / Low-Thrust Propulsion）
  desc: 地月空间连续小推力推进技术的系统讲解：比冲、推力幅值、电推进分类与工程参数。
  image: /logo.png
og:
  title: 电推进（Electric/Low-Thrust Propulsion）详解 | 术语定义
  description: 利用电能加速工质产生推力的推进技术。比冲远高于化学推进，推力幅值小但效率高，是地月空间长时间转移和深空探测的核心推进方案。覆盖电推进分类、推力加速度方程、比冲与火箭方程、与脉冲推力的对比、地月空间电推进转移策略及其工程参数。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 电推进（Electric/Low-Thrust Propulsion）详解 | 术语定义
  description: 利用电能加速工质产生推力的推进技术。比冲远高于化学推进，推力幅值小但效率高，是地月空间长时间转移和深空探测的核心推进方案。覆盖电推进分类、推力加速度方程、比冲与火箭方程、与脉冲推力的对比、地月空间电推进转移策略及其工程参数。
  image: /logo.png
permalink: /glossary/fundamentals/ep/
---

# 电推进（Electric Propulsion, EP）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

电推进（Electric Propulsion, EP）是利用电能（通常来自太阳能电池阵或核电源）将工质电离并加速喷出以产生推力的推进技术。与化学推进依靠化学反应释放能量不同，电推进的能量来源（电源）和工质（推进剂）是分离的，因此比冲不受推进剂化学键能的限制，可达 2000--10000 秒，远高于化学火箭的 100--400 秒（Vepa 2024, Table 2.2）。

代价是推力极小。典型的电推进发动机推力在毫牛级：NASA Deep Space 1 任务使用离子推进，推力仅 92 mN，但比冲 2200 s（Fahey 2024，Table 6.2）。化学火箭推力可达数十万牛，但比冲只有 300--400 s。这一对比反映了推力与效率的根本性权衡。

在地月空间背景下，电推进的两大价值在于：(1) 大幅降低推进剂消耗，使得同样质量的航天器可以将更多质量分配给有效载荷；(2) 推力虽然小但可持续数月，适合低能转移轨道的缓慢能量积累。

## 火箭方程与关键参数

无论推进类型如何，航天器机动的基本约束由齐奥尔科夫斯基火箭方程（Tsiolkovsky rocket equation）给出：

$$
\Delta v = c_e \ln\frac{m_0}{m_f} = I_{sp}\, g_0 \ln\frac{m_0}{m_f}
$$

其中 $\Delta v$ 为速度增量，$c_e$ 为有效排气速度，$m_0$ 和 $m_f$ 分别为机动前后的航天器质量，$g_0 = 9.80665\ \mathrm{m/s^2}$ 为标准重力加速度（Vepa 2024, Eq. 5.4; Vallado 2022）。

**比冲** $I_{sp}$ 是推进系统的核心性能指标，定义为推力 $F$ 与推进剂重量流量 $\dot{m} g_0$ 的比值：

$$
I_{sp} = \frac{F}{\dot{m} g_0} = \frac{c_e}{g_0}
$$

单位为秒。电推进典型的 $I_{sp}$ 范围（Fahey 2024, Table 2.2）：离子推力器 2000--10000 s，霍尔效应推力器 1000--8000 s，场发射电推进 7000--11000 s。对比：化学火箭 100--400 s。

**推力加速度** $a_T$ 是电推进轨道设计的直接输入：

$$
a_T = \frac{F}{m} = \frac{I_{sp}\, g_0 \, \dot{m}}{m}
$$

对于 500 kg 航天器、92 mN 推力的 Deep Space 1 级电推进，$a_T \approx 1.84 \times 10^{-4}\ \mathrm{m/s^2}$（Fahey 2024, Table 6.2）。此值比化学推进小 3--4 个量级，意味着轨道转移需要数周至数月。

**推力幅值与推力边界**：实际电推进发动机有最大推力限制 $F \leq F_{\max}$，部分发动机还有最小稳定推力 $F_{\min}$，二者构成推力边界（thrust bound）。在最优控制问题中，推力幅值作为控制变量受此边界约束，这正是 Bang-bang 控制产生的根源：最优解将推力幅值推向允许范围的上下界而非中间值。

## 电推进分类

按加速工质的物理机制，电推进分为三类（Vepa 2024, Ch. 5）：

| 类型 | 推力范围 | $I_{sp}$ (s) | 技术状态 | 代表型号 |
|------|---------|:-----:|:-----:|------|
| 静电式（离子推力器） | 25--300 mN | 2000--10000 | 飞行验证 | NSTAR (Deep Space 1) |
| 电磁式（霍尔效应） | 40--600 mN | 1000--8000 | 飞行验证 | SPT-100 (SMART-1) |
| 电热式（电阻加热/电弧） | 100--1000 mN | 300--700 | 飞行验证 | MR-502 |

**太阳能电推进**（Solar Electric Propulsion, SEP）不是一种独立的推进机制，而是指以太阳能电池阵作为电源的电推进系统。SEP 适用于内太阳系任务，推力加速度量级约 $10^{-5}g_0$。ESA 的 SMART-1 月球探测器（2003 年）和 NASA 的深空一号（1998 年）均以 SEP 验证了电推进用于深空航行的可行性。

## 脉冲推力 vs. 连续推力

化学推进和电推进在轨道设计中对应两种不同的数学建模方式：

- **脉冲推力**（impulsive thrust）：假设推力 $F \to \infty$、燃烧时间 $\Delta t \to 0$、冲量 $F\Delta t$ 有限，轨道速度瞬时发生阶跃变化。适用于化学火箭，因推力远大于航天器重量，燃烧时间相比轨道周期可忽略不计。

- **连续推力**（continuous thrust）：推力有限且在一段时间内持续施加，轨道变化由推力加速度的时间积分累积实现。适用于电推进，控制量为连续时间函数 $u(t)$。

连续推力模型的运动方程在二体问题中为：

$$
\ddot{\mathbf{r}} + \frac{\mu}{r^3}\mathbf{r} = \mathbf{a}_T(t)
$$

其中推力加速度 $\mathbf{a}_T(t)$ 的方向和大小由最优控制问题求解。在 CR3BP 框架下，将 $\mathbf{a}_T$ 加入会合坐标系的运动方程即得 CR3BP+LT 模型（Fahey 2024, Ch. 2.2）：

$$
\ddot{x} - 2\dot{y} = \frac{\partial \Omega}{\partial x} + a_{Tx},\quad \ddot{y} + 2\dot{x} = \frac{\partial \Omega}{\partial y} + a_{Ty},\quad \ddot{z} = \frac{\partial \Omega}{\partial z} + a_{Tz}
$$

其中 $\Omega$ 为 CR3BP 有效势。CR3BP+LT 模型下低推力会移动平动点位置（称为人工平动点），并能产生低推力周期轨道（Low-Thrust Periodic Orbit, LTPO）。

## 连续推力模型的数值参数化

在轨道优化中，连续推力控制加速度 $\mathbf{a}_T(t)$ 是无限维的时间函数，必须参数化为有限维变量才能数值求解。常用的参数化方法：

- **B 样条**：以一组节点上的控制系数表示推力剖面，通过基函数插值得到任意时刻的推力值。

- **傅里叶级数**：将推力分量展开为正弦/余弦级数，适合周期性轨道转移。

- **形状方法**（shape method）：预设轨迹的几何形状（如指数正弦曲线），反推所需推力剖面，将最优控制问题转化为参数优化问题。

这些参数化技术能将原本无限维的最优控制问题转化为有限维非线性规划（NLP），是直接法（direct method）的核心（Betts 1998; Conway 2010）。

## 电推进地月转移策略

电推进在地月空间转移中的典型应用模式：

### 全程连续推力

发动机全程开启，推力方向由最优控制求解。优点是不需要复杂的开/关逻辑切换；缺点是推力效率不如脉冲式，因为部分弧段的推力方向并非最有利于轨道能量改变。

### 推力-滑行-推力（Thrust-Coast-Thrust, TCT）

将转移过程分为三段：地球逃逸段（连续推力螺旋爬升）、滑行段（无推力自由飞行穿越地月空间）、月球捕获段（连续推力螺旋下降）。滑行段利用节省的推进剂大幅降低总消耗（Kluever and Pierson 1995）。

### 化学-电推进组合

先由化学推进火箭进行一次大推力脉冲式地月注入，进入弹道滑行段，再由电推进完成月球捕获和轨道圆化。化学段解决快速逃逸问题，电推进段解决高效刹车问题，综合转移时间约为纯电推进方案的五分之一（Kluever 1997）。

### 推力优化

小推力轨迹优化有两类主流方法：

- **间接法**：基于庞特里亚金极值原理推导最优性一阶必要条件，将轨迹优化转化为协态变量的两点边值问题。能保证解的最优性，但收敛域窄、初值猜测困难（朱政帆和高扬 2017）。

- **直接法**：将状态和控制变量在时间网格上离散化，直接转化为大规模稀疏 NLP 问题，利用成熟 NLP 求解器（如 SNOPT、IPOPT）求解。收敛性好但最优性难以严格保证（Betts 2000）。

对于燃耗最优问题，最优推力幅值呈 Bang-bang 形式（见本词典 [Bang-bang 控制](/glossary/dynamics/bang-bang-control/) 词条）。

## 低推力对 CR3BP 动力学结构的影响

施加常值低推力会改变 CR3BP 的平衡点位置和轨道族结构：

- **人工平动点**：推力改变了雅可比积分，使平动点沿推力方向偏移。

- **低推力禁区**：与 CR3BP 的零速度面类似，给定低推力哈密顿量值后，航天器运动被限制在特定区域边界内（Cox et al. 2021）。

- **低推力周期轨道（LTPO）**：在低推力 CR3BP（CR3BP-LT）框架下，平动点附近存在周期轨道族，其线性稳定性由中心子空间和鞍子空间的叠加构成（Cox et al. 2021）。

## 相关概念

- [Bang-bang 控制](/glossary/dynamics/bang-bang-control/)：推力幅值最优开关律，电推进燃耗最优问题的必然结果

- [推力方向与控制（Tangential Thrust）](/glossary/dynamics/tangential-thrust-control/)：推力方向的简化策略与轨道保持

- [脉冲机动（Two-Impulse Rendezvous）](/glossary/dynamics/two-impulse-rendezvous/)：化学推进脉冲模型的机动方法

- [庞特里亚金极小值原理](/glossary/dynamics/pontryagins-maximum-principle/)

- [协态变量](/glossary/dynamics/co-state-variables/)

- [先驱向量](/glossary/dynamics/primer-vector/)：Lawden 引入的优化理论工具

- [CR3BP（圆形限制性三体问题）](/glossary/dynamics/cr3bp/)

- [零速度面](/glossary/dynamics/zero-velocity-surface/)

## 参考文献

- Vepa, 2024, Space Vehicle Maneuvering, Propulsion, Dynamics and Control: A Textbook for Engineers. Springer. Ch. 5: 推进系统的分类、火箭方程、比冲与推力加速度的工程定义。

- Vallado, 2022, Fundamentals of Astrodynamics and Applications. 火箭方程与推进系统性能的轨道力学视角。

- Fahey, 2024, Design Strategies for Low Thrust Transfers in the Earth-Moon System. MS Thesis, Purdue Univ. (Howell group). CR3BP+LT 运动方程、电推进参数与间接法优化框架的系统阐述。

- Betts, 2000, Very Low-Thrust Trajectory Optimization Using a Direct SQP Method. JGCD. 以改进春分点根数法处理 578 圈低推力转移的直接法实例。

- McGuire et al., 2018, Low Thrust Cis-lunar Transfers Using a 40 kW-class Solar Electric Propulsion Spacecraft. 高功率 SEP 地月转移的工程分析。

- Kluever, 1997, Optimal Earth-Moon Trajectories Using Combined Chemical-Electric Propulsion. 化学-电推进组合转移的原始推导。

- Kluever and Pierson, 1995, Optimal Earth-Moon Trajectories Using Nuclear Electric Propulsion. TCT 序列概念的早期工作。

- Cox et al., 2021, 低推力周期轨道与低推力禁区的 CR3BP-LT 研究。

- 朱政帆, 高扬, 2017, 空间小推力轨道最优 Bang-Bang 控制的两类延拓解法综述. 深空探测学报, 4(2): 101-110.
