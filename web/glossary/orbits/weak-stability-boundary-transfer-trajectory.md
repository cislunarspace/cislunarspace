---
title: 弱稳定边界转移轨道（Weak Stability Boundary Transfer Trajectory）
description: 利用弱稳定边界（WSB）——稳定绕行的最远距离集合——构造的低能转移轨道；航天器经月球借力飞抵地球 WSB，以近零机动衔接月球 WSB 上的弹道捕获轨道，比 Hohmann 省约 18%，1991 年由 Hiten 任务首次验证。
keywords: 弱稳定边界, WSB, Weak Stability Boundary, 弹道捕获, 低能转移, Belbruno
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-07
wechatShare:
  title: 弱稳定边界转移轨道（Weak Stability Boundary Transfer Trajectory）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 弱稳定边界转移轨道详解 | 术语定义
  description: 利用弱稳定边界（WSB）——稳定绕行的最远距离集合——构造的低能转移轨道；航天器经月球借力飞抵地球 WSB，以近零机动衔接月球 WSB 上的弹道捕获轨道，比 Hohmann 省约 18%，1991 年由 Hiten 任务首次验证。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 弱稳定边界转移轨道详解 | 术语定义
  description: 利用弱稳定边界（WSB）——稳定绕行的最远距离集合——构造的低能转移轨道；航天器经月球借力飞抵地球 WSB，以近零机动衔接月球 WSB 上的弹道捕获轨道，比 Hohmann 省约 18%，1991 年由 Hiten 任务首次验证。
  image: /logo.png
permalink: /glossary/orbits/weak-stability-boundary-transfer-trajectory/
---

# 弱稳定边界转移轨道（Weak Stability Boundary Transfer Trajectory）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 弱稳定边界的定义

- **启发式定义（Belbruno & Miller 1993）**：绕中心天体的稳定运动在足够远处崩溃：存在临界距离 r\*，r<r\* 时质点循环绕行，r>r\* 时被其他天体摄动拉走；r\* 随方向、速度与相位角变化，其集合即弱稳定边界（WSB）。WSB 可看作「影响球」概念的精确化：既是逃逸可发生的位置，也是捕获可发生的位置。
- **算法定义（Belbruno 2010）**：平面 CR3BP 中，从次主天体径向线段上以密切椭圆近拱点出发、绕次主天体满 n 圈且不绕主天体、返回时开普勒能量为负的轨迹称 n-稳定；n-稳定与 n-不稳定之间的跃变点构成指标 n 的 WSB。WSB 类似 Cantor 集，不是不变对象、不是流形；它不依赖流形存在，可用于椭圆三体、双圆四体等流形无定义的模型。

**位置**：地球 WSB 约 4 倍地月距离（约 150 万 km；Wang 2025 引文献作 3~5 倍范围，且不严格限于该范围）；月球 WSB 距月 0.08~0.39 倍地月距离，随方向剧烈变化（Belbruno & Miller 1993）。外部转移仅当远地点位于地心系（x 轴反日方向）第二或第四象限时成立（Topputo 2013 汇总）。

## 与不变流形的关系

Belbruno 2010 在平面 CR3BP 中证明：一定能量范围内，次主天体 WSB 中的点就是 L1/L2 Lyapunov 轨道稳定流形上径向速度为零、相对次主天体开普勒能量为负的点；WSB 是更宽的概念，流形是它在 CR3BP 一定能量区间内的实现。

完整的 WSB 转移路径：航天器沿日地 L1/L2 Lyapunov 轨道的稳定流形支离开地球，再沿同一轨道的不稳定流形折返地月区域，最后进入地月 L2 Lyapunov **稳定流形管内**的穿越轨道被月球捕获（Fantino 2010、Sousa-Silva 2018、Ross 2022）。注意文献分歧：部分中文文献（徐明 2010 §3.2、Xu 2013）称地月侧为「LL2 不稳定流形」拼接，而 Koon 学派著作与多数文献（Howell & Kakoi 2006、Topputo 2013、Wang 2025）均为「日地侧流形 + 地月 L2 稳定流形管内穿越轨道」的配对，本词条采用后者。

## 转移构造与窗口

经典构造（Belbruno & Miller 1993）：月球借力飞出→地球 WSB→近零机动→月球 WSB 上的弹道捕获轨道；比 Hohmann 省约 18% ΔV（插入 100 km 月球圆轨道总 ΔV 0.695 vs 0.848 km/s），飞行 3~5 个月。

穿越分析（徐明 2010）：LL1 点穿越即最小能量转移，可用太阳相位窗口 Δβ≈89°；LL2 穿越分内侧/外侧：内侧本质是 LL1 穿越，外侧即 WSB 转移，可用窗口仅 Δβ≈3°；经 LL2-Halo 穿越时窗口由太阳相位 β 与 Halo 轨道相位 τ 共同决定，可用集合很小。Xu 2013 把外侧转移命名为 outer WSB trajectory（在惯性系中与 Belbruno 理论几何形状相同）。

## 变体与推广

- **Belbruno-Miller 轨迹**：WSB 转移的别称，指实现零双曲超速（近月点无 V_∞）弹道捕获的低能地月转移（Belbruno & Miller 1993；该叫法见 Krish 1991）。
- **WSB-like（Chao 2022）**：利用太阳引力借力的低能转移弧，区别于基于月球引力捕获的经典 WSB，可绕地球一圈以上且总时长不超 100 天、中途可含动力月借力、退化情形不超出月球轨道；语境是双圆四体模型下 LFO→DRO 转移（全局最优 ΔV 104 m/s）。
- **低能转移入口（LETG，Wang 2025）**：以 5 倍月球引力影响球半径（约 0.86 倍地月距离）作 DRO 捕获投影面，正向 WSB 转移轨道与反向捕获轨道在投影面上做机械能匹配，匹配交点集称 LETG；以 LETG 为拼接界面的双脉冲 DRO 转移收敛率达 73.6%。

## 任务验证

Hiten（1991 年 10 月到达月球，中途机动实际压到零，首个 WSB/弹道捕获转移）；SMART-1（2004，小推力+WSB 组合）；GRAIL（2011，低能转移直接实施月球轨道插入）；BepiColombo（水星任务应用 WSB，Belbruno 2010）。

## 术语变体对照

| 术语 | 含义 | 出处 |
|------|------|------|
| WSB 转移 | 弱稳定边界转移的缩写 | Belbruno & Miller 1993 |
| 外侧 WSB 转移（outer WSB） | 惯性系中与 Belbruno 几何相同的流形拼接转移 | Xu 2013 |
| Belbruno-Miller 轨迹 | 零双曲超速弹道捕获的低能地月转移 | Krish 1991 |
| LL1/LL2 点穿越 | 经地月 L1/L2 的势阱穿越（LL1=最小能量；LL2 外侧=WSB） | 徐明 2010 |
| WSB-like | 太阳借力低能弧（区别于月球捕获 WSB） | Chao 2022 |
| LETG | 低能转移入口（DRO 捕获投影面上的机械能匹配集） | Wang 2025 |

## 相关概念

- [低能转移（Low-Energy Transfer）](/glossary/orbits/low-energy-transfer/)
- [弹道捕获（Ballistic Capture）](/glossary/orbits/ballistic-capture/)
- [Lyapunov 轨道（Lyapunov Orbit）](/glossary/orbits/lyapunov-orbit/)
- [远距离逆行轨道（Distant Retrograde Orbit, DRO）](/glossary/orbits/distant-retrograde-orbit-dro/)

## 参考文献

- Belbruno & Miller, 1993, Sun-perturbed Earth-to-Moon transfers with ballistic capture
- Belbruno, Gidea & Topputo, 2010, Weak stability boundary and invariant manifolds
- Fantino et al., 2010, A note on libration point orbits, temporary capture and low-energy transfers
- 徐明, 2010, 地月低能转移的发生条件及轨迹构造
- Xu et al., 2013, On the construction of low-energy cislunar and trans-lunar transfers based on the libration points
- Topputo, 2013, On optimal two-impulse Earth–Moon transfers in a four-body model
- Sousa-Silva et al., 2018, Fast Earth–Moon transfers with ballistic capture
- Ross et al., 2022, Dynamical Systems, the Three-Body Problem, and Space Mission Design
- Chao et al., 2022, Exploring more solutions for low-energy transfers to lunar distant retrograde orbits
- 李宸硕 等, 2024, 基于弱稳定边界理论的低能地月转移轨道设计
- Wang et al., 2025, Mechanism analysis of the DRO low-energy transfer problem: An energy perspective
