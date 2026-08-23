---
title: 大气阻力摄动（Atmospheric Drag Perturbation）
description: 低轨道航天器与稀薄大气相互作用产生的非保守摄动力，加速度 $\mathbf{a}_d = -\frac{1}{2} \rho v^2 (C_D A / m) \hat{\mathbf{v}}$，是 LEO 轨道衰减的主导机制。覆盖大气密度模型（NRLMSISE-00、Jacchia 系列）、弹道系数的物理含义、DFAC 无阻力姿态控制技术、以及地月空间过渡区的阻力处理策略。
keywords: 大气阻力, atmospheric drag, 大气阻力摄动, drag perturbation, 大气摄动, 弹道系数, 大气密度模型, NRLMSISE-00, Jacchia-Roberts, DFAC, 无阻力姿态控制, 轨道衰减
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 大气阻力摄动（Atmospheric Drag Perturbation）
  desc: 拖曳加速度公式、大气密度模型、弹道系数与 DFAC：大气阻力摄动完整解析。
  image: /logo.png
og:
  title: 大气阻力摄动（Atmospheric Drag Perturbation）详解 | 术语定义
  description: 低轨道航天器与稀薄大气相互作用产生的非保守摄动力，加速度 $\mathbf{a}_d = -\frac{1}{2} \rho v^2 (C_D A / m) \hat{\mathbf{v}}$，是 LEO 轨道衰减的主导机制。覆盖大气密度模型、弹道系数、DFAC 无阻力控制技术。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 大气阻力摄动（Atmospheric Drag Perturbation）详解 | 术语定义
  description: 低轨道航天器与稀薄大气相互作用产生的非保守摄动力，加速度 $\mathbf{a}_d = -\frac{1}{2} \rho v^2 (C_D A / m) \hat{\mathbf{v}}$，是 LEO 轨道衰减的主导机制。覆盖大气密度模型、弹道系数、DFAC 无阻力控制技术。
  image: /logo.png
permalink: /glossary/dynamics/atmospheric-drag/
---

# 大气阻力摄动（Atmospheric Drag Perturbation）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

大气阻力摄动（atmospheric drag perturbation，简称大气阻力）是航天器与稀薄大气之间动量交换引起的非保守摄动力，方向与航天器相对于大气的速度方向相反。它是典型的非保守摄动（系统能量不守恒），直接用摄动力形式建模，写出摄动加速度为（Vallado 2022, Ch. 8.6.2）：

$$
\mathbf{a}_d = -\frac{1}{2} \rho v^2 \frac{C_D A}{m} \hat{\mathbf{v}} = -\frac{1}{2} \rho v^2 B \hat{\mathbf{v}}
$$

其中 $\rho$ 为当地大气密度（kg/m$^3$），$v$ 为航天器相对于大气的速度大小，$\hat{\mathbf{v}}$ 为相对速度方向的单位矢量，$C_D$ 为阻力系数，$A$ 为面对速度方向的截面积，$m$ 为航天器质量，$B = C_D A / m$ 称为**弹道系数**（ballistic coefficient，m$^2$/kg）。

阻力加速度与密度成正比、与速度平方成正比，这是阻力摄动对低轨（速度快、密度高）极强的根本原因。在高轨道甚至大偏心率轨道的远地点，阻力量级很低。

## 主导 LEO 摄动

在低地球轨道（LEO，<800 km），大气阻力是仅次于 J2 的最重要的摄动源，甚至在轨道寿命末期（再入前最后几圈）可超过非球形引力（Vallado 2022, Ch. 8.6.2）。在 300 km 高度，典型阻力加速度量级为 $10^{-6}\text{--}10^{-5}$ m/s$^2$，对应弹道系数 $B \approx 0.02$ m$^2$/kg 的物体；该加速度导致的半长轴衰减在每日几米到几十米量级，轨道寿命数月到数年。

## 大气密度：最大的不确定性源

阻力建模的精度受制于大气密度 $\rho$ 的估计，而密度本身是高度复杂且不可精确预测的（Vallado 2022, Ch. 8.6.2；Framework paper, 2023）。密度主要由以下因素控制：

- **高度**：密度随高度近似指数衰减，标尺高度 $\sim 50$ km。

- **太阳活动**：11 年太阳黑子周期使极紫外（EUV）辐射通量剧烈波动，太阳活动极大期密度可比极小期高几十倍。日常指标为 $F_{10.7}$（10.7 cm 射电流量）。

- **27 天周期**：太阳自转引起的 EUV 辐射通量调制，以 27 天为周期变化。

- **地磁暴**：地磁指数 $K_p$、$a_p$ 升高时，大气受热膨胀，高纬区密度可在数小时内跳变。

- **昼夜效应**：日照面密度高于夜间面，最大日间隆起不在正午而在地方时约 14 时左右。

- **半年度变化**：春分秋分附近有密度峰值。

常用的经验大气模型包括（Vallado 2022, App. B；Picone et al., 2002）：

- **NRLMSISE-00**：基于雷达非相干散射和卫星阻力数据建立，覆盖地面到高空，是目前应用最广泛的高层大气密度模型。

- **Jacchia-Roberts (JR-71)**：基于卫星阻力反演，参数少但代码简洁，在一些操作程序中仍在使用。

- **DTM（Drag Temperature Model）**：基于气球温度数据和球谐展开，对太阳活动更敏感。

## 弹道系数 B

弹道系数 $B = C_D A / m$ 是反映航天器阻力敏感度的综合参数。$B$ 越小，阻力影响越小。影响 $B$ 的物理因素包括：

- **$C_D$（阻力系数）**：自由分子流区（LEO）通常取 2.0~2.2（Vallado 2022, Ch. 8.6.2）。受表面材料和大气成分影响。

- **$A/m$（面质比，area-to-mass ratio）**：质量小、截面积大的物体（如碎片、太阳帆）阻力效应显著。典型的空间碎片面质比为 $0.001\text{--}1$ m$^2$/kg。

- **姿态**：$A$ 是投影面积，随航天器姿态变化。对翻滚目标，弹道系数的有效值难以确定。高精度建模中通常将 $B$ 作为未知参数估计。

## 大气阻力在地月空间的特殊地位

地月空间（月球附近）**不存在大气**，阻力摄动为零。但在以下场景中轨道段穿过或接近地球高层大气，阻力不可忽略（Framework paper, 2023）：

- **地月转移初段**：近地停泊轨道起飞的航天器在爬升初始阶段受阻力衰减；地球逃逸高度一般在 200 km 以上，阻力显著。

- **返回再入**：航天器返回地球时，在大气层顶（~120 km）即开始受阻力作用，再入轨迹强烈依赖弹道系数。

- **大偏心率地月轨道远地点之外**：近地点如果低至数百 km，虽然大部分时间在远程，但每次近地点通过都对半长轴形成累积性衰减。

在 cislunar 碎片定轨实践中（Framework paper, 2023），近地点遇及低轨区域时才启用 NRLMSISE-00 模型。

## DFAC：无阻力姿态控制

无阻力姿态控制（Drag-Free and Attitude Control, DFAC）是一种通过微量推力抵消大气阻力的主动控制技术，使航天器内部自由悬浮的检验质量（proof mass）保持零加速度状态，本质上是在航天器上制造一个未被阻力的惯性环境。

工作原理：

1. 检验质量在航天器内部自由悬浮，不受壳体拖曳。
2. 传感器检测检验质量相对于壳体的微位移。
3. 控制系统驱动微推力器（冷气、电推等），使壳体追随检验质量运动，补偿外界阻力加速度。

DFAC 的工程目的不是作姿控，而是利用微推将阻力产生的等效加速度消掉，这也是 Drag-Free 的准确含义（即无阻力，而非无阻力+姿控）。DFAC 技术最早在 NASA 的 TRIAD 卫星（1972 年）上实现，用于重力场测绘任务；当前最精确的应用是 LISA 探路者（LISA Pathfinder）的无阻力质心控制。在地月导航卫星高精度自主定轨中，DFAC 提供低噪声加速度环境是敏感器精密测量的前提。

## 相关概念

- [轨道摄动](/glossary/fundamentals/orbital-perturbations/)

- [非球形引力摄动](/glossary/dynamics/non-spherical-gravity-perturbation/)

- [太阳辐射压摄动（SRP）](/glossary/dynamics/srp/)

- [Adams-Cowell 积分器](/glossary/dynamics/adams-cowell-integrator/)

## 参考文献

- Vallado, 2022, Fundamentals of Astrodynamics and Applications（Ch. 8.6.2 Atmospheric Drag：阻力加速度公式、密度变化因素、Jacchia-Roberts 模型；App. B Modeling the Atmosphere：大气模型实现细节）

- Picone et al., 2002, NRLMSISE-00 empirical model of the atmosphere: Statistical comparisons and scientific issues, JGR（NRLMSISE-00 的构造原理和统计验证）

- A model framework for high-accuracy orbit determination and propagation of cislunar space debris, 2023（地月空间碎片定轨中的大气阻力处理实践）

- Vine, 1973, The TRIAD drag-free satellite mission（世界首个无阻力卫星任务）

- Fichter et al., 2005, Drag-free control system for LISA Pathfinder（LISA Pathfinder 无阻力控制）
