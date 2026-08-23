---
title: 轨道根数漂移（Orbital Element Drift）
description: 在非球形引力场、第三体引力等摄动力作用下，航天器轨道根数随时间的缓慢持续变化。环月轨道的升交点赤经漂移由月球高阶引力场（$J_2, J_3, \dots$）主导，近地点漂移受地球第三体摄动控制——二者共同决定停泊轨道的长期可用性和交会窗口。
keywords: 轨道根数漂移, Orbital Element Drift, 环月轨道, 升交点赤经漂移, 近地点旋转, 月球非球形引力, 第三体摄动, 停泊轨道设计
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 轨道根数漂移（Orbital Element Drift）
  desc: 摄动力作用下轨道根数的长期变化——环月轨道设计的关键约束。
  image: /logo.png
og:
  title: 轨道根数漂移（Orbital Element Drift）详解 | 术语定义
  description: 在非球形引力场、第三体引力等摄动力作用下，航天器轨道根数随时间的缓慢持续变化。环月轨道的漂移规律由月球高阶引力场和地球第三体摄动共同决定。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 轨道根数漂移（Orbital Element Drift）详解 | 术语定义
  description: 摄动力作用下轨道根数的长期变化——环月轨道设计的核心约束。
  image: /logo.png
permalink: /glossary/dynamics/orbital-element-drift/
---

# 轨道根数漂移（Orbital Element Drift）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

**轨道根数漂移**（orbital element drift）指在非二体引力（非球形引力场、第三体引力、大气阻力、太阳光压等）摄动力作用下，航天器轨道根数随时间缓慢而持续的变化，本质上是吻切根数中**长期项（secular terms）**的表现（Vallado 2022）。

注意区分三种类型的变化（Vallado 2022）：

- **长期变化**（secular）：线性（或多项式）随 $t$ 增长，是漂移的主要成分，影响最远。

- **长周期变化**（long-periodic）：周期远长于轨道周期（通常是近地点或交点的进动周期），不带来无限累积。

- **短周期变化**（short-periodic）：在单个轨道周期内振荡，已被平均或吻切定义吸收。

轨道根数漂移关注的是第一类，即长期项的持续增长，因为它是轨道长期可用性的决定性因素。

## 环月轨道的漂移规律

环月轨道受到两类主要摄动源：

### 月球非球形引力场

月球质量分布的球谐展开中，低阶带谐项 $J_2, J_3, J_4, \dots$ 是摄动的主导因素。对环月低轨道的轨道根数：

- **升交点赤经 $\Omega$ 的漂移**主要由 $J_2$ 项驱动，$$ \dot{\Omega} \propto -\frac{n}{(1-e^2)^2} \left(\frac{R_\oplus}{a}\right)^2 J_2 \cos i $$
  对于低倾角环月轨道，$\dot{\Omega}$ 为负（西向进动）；对于高倾角轨道为正值。漂移率取决于轨道半长轴 $a$ 和倾角 $i$（Vallado 2022）。

- **近地点幅角 $\omega$ 的漂移**也由 $J_2$ 主导，$$ \dot{\omega} \propto \frac{n}{(1-e^2)^2} \left(\frac{R_\oplus}{a}\right)^2 J_2 \left(\frac{5}{2}\cos^2 i - \frac{1}{2}\right) $$。临界倾角 $\cos i_c = 1/\sqrt{5}$（约 $63.4\degree$ 或 $116.6\degree$）处 $\dot{\omega} = 0$，这使冻结轨道（frozen orbit）成为可能。

- 月球的高阶球谐项和扇谐/田谐项使漂移规律比地球卫星复杂：月球质量分布的非对称性（近月面与远月面的重力差异）导致 $J_2$ 之外的高阶项贡献不可忽略（陈天冀等 2023）。

### 地球第三体引力摄动

地球作为第三体的引力加速度在月球轨道高度上与月心引力之比约为 $10^{-4}$ 量级，虽然小，但在长期积分中效应显著（Vallado 2022）。对环月轨道的影响：

- 主要影响近地点位置和偏心率，驱动轨道形状的长期变化。

- 与月球非球形引力的相互作用导致特定的共振效应：某些 $a, e, i$ 组合下轨道根数漂移被放大或抑制。

## 工程意义

轨道根数漂移规律是环月停泊轨道设计的核心约束：

- **交会窗口计算**：漂移导致停泊轨道与目标轨道（如 NRHO、DRO 或月面着陆轨道）之间的相对几何关系随时间变化，交会窗口的可用性取决于漂移累积速度。

- **冻结轨道选择**：选择 $\dot{\omega} \approx 0$ 的轨道（临界倾角约 $63.4\degree$）可减小近地点高度的长期变化，从而保持环月轨道在任务期间始终满足最低安全高度约束（陈天冀等 2023）。

- **轨道确定更新周期**：漂移速度决定了轨道状态（测轨数据拟合得到的吻切根数）的衰减速率，进而要求轨道确定的更新频率。

## 相关概念

- [吻切轨道根数（Osculating Orbital Elements）](/glossary/fundamentals/osculating-orbital-elements/)

- [高斯行星方程（Gauss Planetary Equations）](/glossary/dynamics/gauss-planetary-equations/)

- [轨道保持（Station-Keeping）](/glossary/dynamics/station-keeping/)

- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)

- [远距离逆行轨道（DRO）](/glossary/programs/dro/)

## 参考文献

- Vallado, 2022, Fundamentals of Astrodynamics and Applications, Sec. 9.2–9.3（长期/周期变化的分类、$J_2$ 摄动的升交点和近地点漂移公式）

- 陈天冀等, 2023, 考虑环月交会约束的地月转移轨道设计（月球高阶引力场加地球第三体摄动下环月轨道漂移的综合分析）

- Battin, 1999, An Introduction to the Mathematics and Methods of Astrodynamics（摄动理论中轨道根数变化的完整推导）
