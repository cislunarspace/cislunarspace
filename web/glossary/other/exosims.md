---
title: EXOSIMS
description: 详细解析EXOSIMS（系外行星直接成像任务仿真软件）的功能、架构、在星伞任务设计中的应用，以及动力学模型集成方法
keywords: EXOSIMS, 系外行星, 直接成像, 任务仿真, 轨道设计, 星伞, 任务调度, 观测调度
author: 天疆说
date: 2026-04-23
lastUpdated: 2026-04-23
wechatShare:
  title: EXOSIMS
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: EXOSIMS 系外行星直接成像任务仿真软件详解
  description: 详细解析EXOSIMS的功能、架构、在星伞任务设计中的应用，以及动力学模型集成方法
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: EXOSIMS 系外行星直接成像任务仿真软件详解
  description: 详细解析EXOSIMS的功能、架构、在星伞任务设计中的应用，以及动力学模型集成方法
  image: /logo.png
permalink: /glossary/other/exosims/
---

# EXOSIMS

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文编辑来源：Genszler et al. (2026) "Surveying orbits in cislunar space for telescope-starshade observatories"
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

EXOSIMS（EXOplanet Observation and Science Mission Simulation）是一款**开源的系外行星直接成像任务仿真软件**，由康奈尔大学开发，用于模拟直接成像任务的完整科学阶段，估算科学产出和各分系统性能。该软件能够同时仿真**望远镜-星伞编队飞行**系统中的轨道传播、星载机动和观测调度等关键过程。

## 核心要素

### 基本概念

EXOSIMS 是一个模块化的任务仿真框架，通过集成轨道传播、观测调度和科学产出评估等功能，对系外行星直接成像任务的完整生命周期进行端到端仿真。其核心目标是在给定任务参数约束下，最大化科学产出并评估各分系统性能。

### 技术特征

EXOSIMS 采用 Python 实现的面向对象架构，支持 CR3BP 和星历两种轨道传播模型。关键参数包括望远镜口径、星伞分离距离、推进系统性能和目标星目录。软件能够生成 $\Delta v$ 图谱，量化不同轨道和观测策略下的燃料消耗。

### 实现方法

使用 EXOSIMS 时，首先配置任务参数（望远镜、星伞、推进系统），然后选择轨道类型和目标星目录，软件自动执行轨道传播、slew $\Delta v$ 计算和观测序列优化，最终输出科学产出评估报告和 $\Delta v$ 预算分析。

## 核心功能

EXOSIMS 主要用于以下任务分析场景：

1. **轨道状态传播**：基于 CR3BP 或星历模型传播望远镜和星伞的轨道状态
2. **星伞 slew 仿真**：计算星伞从当前目标星切换至下一目标星所需的 $\Delta v$
3. **$\Delta v$ 图谱生成**：为给定轨道生成 slew $\Delta v$ 地图，支持不同分离距离、不同指向条件下的机动代价评估
4. **科学产出估算**：评估任务的系外行星探测和表征能力
5. **任务调度优化**：在给定 $\Delta v$ 预算约束下，规划最优观测序列

## 架构组成

EXOSIMS 采用模块化设计，主要组成包括：

| 模块 | 功能描述 |
| :--- | :--- |
| Orbit propagator | 轨道传播（支持 CR3BP、星历模型） |
| Star catalog | 目标恒星目录管理 |
| Observation schedule | 观测序列调度 |
| Slew calculator | 星伞 slew $\Delta v$ 计算 |
| Science yield | 科学产出评估 |
| Stationkeeping | 轨道维持仿真（与 slew 仿真解耦） |

## 在 Genszler et al. (2026) 中的应用

Genszler et al. (2026) 使用 EXOSIMS 研究了在地月空间晕轨道和 DRO 上部署星伞技术演示任务的可行性。具体应用包括：

### 目标星列表

采用**合成目标星列表**（synthetic target list），按黄纬和黄经各间隔 20° 分布，共 144 颗星，黄纬范围 -70° 至 +70°（两级因太阳遮挡角约束被省略）。

### $\Delta v$ 图谱

对不同 slew 时间（从 0.055 天至望远镜轨道周期的一半）生成 $\Delta v$ 图谱，slew 时间步长为半天。

### 关键参数

采用类似 HabEx 的 6 m 望远镜任务参数：

| 参数 | 符号 | 值 |
| :--- | :--- | :--- |
| 发动机推力 | $F_T$ | 264 N |
| 比冲 | $I_{sp}$ | 280 s |
| 湿质量 | $m_w$ | 14500 kg |
| 干质量 | $m_d$ | 6722 kg |
| 分离距离 | $s$ | $120 \times 10^3$ km |
| 直径 | $D$ | 72 m |
| 内工作角 | IWA | 0.06 arcsec |

### 差分加速度分析

研究还计算了地月模型和日地模型中的差分加速度对比：

| 参数 | 地月系统 | 日地系统 |
| :--- | :--- | :--- |
| Burn 1 $\vec{a}_{diff}$ | $9.557 \times 10^{-4}$ m/s² | $5.329 \times 10^{-6}$ m/s² |
| Burn 2 $\vec{a}_{diff}$ | $9.58 \times 10^{-4}$ m/s² | $5.331 \times 10^{-6}$ m/s² |

地月系统的差分加速度比日地系统大约**两个数量级**，这是在地月空间进行星伞 slew 机动面临的主要挑战。

## 动力学模型集成

EXOSIMS 支持在仿真中集成不同的参考系和动力学模型：

- **CR3BP 会合坐标系**：用于晕轨道和 DRO 的周期轨道传播
- **地心惯性坐标系**（J2000）：用于与星历数据对接
- **方向余弦矩阵**（DCM）：用于坐标系之间的状态转换

坐标转换通过 Astropy 坐标系方法处理，位置向量以 SkyCoord 对象定义，利用 `transform_to` 和 `obstime` 属性进行时间相关转换。

## 开源与可用性

EXOSIMS 是开源软件，托管于 GitHub：

- 仓库：<https://github.com/dsavransky/EXOSIMS>
- 论文引用：Genszler et al. (2026) 使用的版本为 commit `485f30d3aacf2bf0ff06abeb2ae23d069f1abdaf`

## 应用价值

EXOSIMS 为系外行星直接成像任务的概念设计和参数优化提供了定量分析工具。在地月空间应用场景中，EXOSIMS 可用于评估在 DRO 和晕轨道上部署望远镜-星伞系统的可行性，量化不同轨道构型下的观测效率和燃料需求，为任务规划提供决策支持。

## 相关概念

- [星伞（Starshade）](/glossary/other/starshade/)
- [地月 L1/L2 晕轨道](/glossary/orbits/eml-halo/)
- [远距离逆行轨道（DRO）](/glossary/orbits/dro/)
- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)
- 系外行星直接成像（Direct Imaging）
- 编队飞行（Formation Flying）

## 参考文献

- Genszler G, Delacroix C, Garrett D, et al. EXOSIMS[EB/OL]. <https://github.com/dsavransky/EXOSIMS>.
- Genszler G, Savransky D, Soto G J. Surveying orbits in cislunar space for telescope-starshade observatories[J]. 2026.
- Morgan R, Savransky D, Turmon M, et al. An exploration of expected number of exoplanets for a 6 m class direct imaging observatory[C]. SPIE, 2022.
- Soto G J, Savransky D, Garrett D, et al. Parameterizing the search space of starshade fuel costs for optimal observation schedules[J]. JGCD, 2019.
