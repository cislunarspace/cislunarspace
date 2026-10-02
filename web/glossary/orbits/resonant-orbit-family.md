---
title: 共振轨道族（Resonant Orbit Family）
description: 轨道周期与某参考周期成简单整数比的轨道族；参考基准有月球恒星周期（27.32 天）与会合周期（29.53 天）两种，共振比书写方向各文献不一；共振轨道用于观测覆盖、避食设计与转移中间结构，9:2 会合共振 NRHO 是 Gateway 的标称轨道。
keywords: 共振轨道, Resonant Orbit, 共振轨道族, 会合共振, synodic resonance, 平动共振, 周期轨道
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-10-01
wechatShare:
  title: 共振轨道族（Resonant Orbit Family）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 共振轨道族详解 | 术语定义
  description: 轨道周期与某参考周期成简单整数比的轨道族；参考基准有月球恒星周期（27.32 天）与会合周期（29.53 天）两种，共振比书写方向各文献不一；共振轨道用于观测覆盖、避食设计与转移中间结构，9:2 会合共振 NRHO 是 Gateway 的标称轨道。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 共振轨道族详解 | 术语定义
  description: 轨道周期与某参考周期成简单整数比的轨道族；参考基准有月球恒星周期（27.32 天）与会合周期（29.53 天）两种，共振比书写方向各文献不一；共振轨道用于观测覆盖、避食设计与转移中间结构，9:2 会合共振 NRHO 是 Gateway 的标称轨道。
  image: /logo.png
permalink: /glossary/orbits/resonant-orbit-family/
---

# 共振轨道族（Resonant Orbit Family）

> 本文作者：天疆说
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

共振轨道是轨道周期与某参考周期成简单整数比的轨道 \cite{vaqueroLeveragingResonantorbitManifolds2014}。地月语境下特指航天器轨道与月球轨道的共振；地月三体问题中的共振轨道本质上是与月球共振、并被月球显著扰动的绕地球二体轨道 \cite{parker2014low}。共振轨道一般不依附特定平动点 \cite{vaqueroLeveragingResonantorbitManifolds2014}。

两点限定：多体模型下共振只是近似成立：CR3BP 中需二体初值加微分修正才能闭合出周期共振轨道，星历模型中退化为准周期轨道，但近似共振比保持 \cite{vaqueroLeveragingResonantorbitManifolds2014}。

## 基准周期

与什么共振必须写明，文献中有两种主要基准：

- **月球恒星周期 27.32 天**（CR3BP 主星周期）：Vaquero \cite{vaqueroLeveragingResonantorbitManifolds2014}、Parker \cite{parker2014low}、Ding \cite{dingCislunarSpaceSituational2025}、Zhou \cite{zhouDesignCircumlunarGlobal2024}、李星明 \cite{LiXingMingDiYueZhouQiGuiDaoDuiDiYueL1YuL2FuJinHaloGuiDaoDeKeJianXingFenXi2024} 及监视轨道文献 Frueh 2021 与 Gupta 2023 用此基准。
- **月球会合周期 29.53 天**（地-月-日几何重复的间隔）：NRHO 文献 \cite{spreenTrajectoryDesignTargeting2021,singhLowthrustTransfersSouthern2021,fuStochasticOptimizationStationkeeping2022,zimovan-spreenDynamicalStructuresNearby2022} 与态势感知文献 \cite{vendlCislunarPeriodicOrbit2021,klonowski2023robust,visonneau2023optimizing} 用此基准。
- 注意 Sun-resonant \cite{gaoLowthrustStationkeepingControl2023}：其准双圆模型中太阳视运动周期数值上等于月球会合周期，是会合基准的等价表述，不是与回归年成整数比 \cite{dingCislunarSpaceSituational2025}，该文同样给出 T_sun/T_moon 约等于 1.0809。

另有第三种用法：星座内部成员周期互为整数倍（以库内周期最小的基准轨道为参照），与天体周期无关 \cite{heDesignCislunarNavigation2025}，见术语表共振周期轨道（星座用法）。

## 共振比的书写方向

共振标号有两种相反约定，叠加两种基准后同一标号可对应完全不同的周期，引用数字时必须先确认约定：

- **正写（航天器圈数 : 月球圈数）**：Vaquero \cite{vaqueroLeveragingResonantorbitManifolds2014}、Spreen \cite{spreenTrajectoryDesignTargeting2021}、Vendl \cite{vendlCislunarPeriodicOrbit2021}、李星明 \cite{LiXingMingDiYueZhouQiGuiDaoDuiDiYueL1YuL2FuJinHaloGuiDaoDeKeJianXingFenXi2024}。例：2:1 恒星基准约 13.66 天。
- **反写（主星圈数 : 航天器圈数，或周期比）**：Parker \cite{parker2014low}、Ding \cite{dingCislunarSpaceSituational2025}、Gao \cite{gaoLowthrustStationkeepingControl2023}。例：Ding 的 1:2 族即 Vaquero 的 2:1，Gao 的 1:4 即 Purdue 文献的 4:1 NRHO。

按 Vaquero & Howell 的正写约定（p/q = T_月球/T_航天器）：**p > q 为内域（interior）共振轨道**（周期短于月球，如 IBEX 的 3:1）；**p < q 为外域（exterior）共振轨道**（周期长于月球，其流形可巡游整个地月空间）。

## 族与延拓

- 同一共振比连续延拓成族：二体初值加微分修正闭合，再拟弧长延拓；族内成员共享特征、由特定参数区分 \cite{vaqueroLeveragingResonantorbitManifolds2014}。三维族由平面族分岔：z 向微扰加 xz 平面对称修正得**面外共振轨道**（关于 xz 平面对称）；非对称三维共振轨道称轴向共振轨道（见[轴向轨道](/glossary/orbits/axial-orbit/)）。
- 同一共振比加同一共振相位角 σ 成族：σ 是改进 Delaunay 变量组合出的共振角，可积近似哈密顿量在 (e, σ) 平面上的平衡点对应周期共振轨道；固定共振比与 σ、改变未扰偏心率延拓成族 \cite{dingCislunarSpaceSituational2025}。
- 稳定性随质量参数变化：地月系 4:3 共振族全不稳定，但提供前往全部五个平动点的连续巡游路径；土星-土卫六系的 4:3 族则多数线性稳定 \cite{vaqueroLeveragingResonantorbitManifolds2014}。

## 典型成员

- **9:2 会合共振 NRHO**（周期 6.556 天）：Gateway 标称轨道；同族其他共振成员有 4:1（7.38 天）、24:5（6.07 天）等 \cite{singhLowthrustTransfersSouthern2021,fuStochasticOptimizationStationkeeping2022}。见[近直线晕轨道（NRHO）](/glossary/orbits/nrho/)。
- **IBEX 的 3:1 月球共振轨道**（恒星基准，周期约 9.1 天）：2011 年机动进入的首条该类轨道，长期稳定；选轨因素为辐射剂量、科学观测与避食。TESS 亦设计为与月球共振的长期稳定地球轨道 \cite{vaqueroLeveragingResonantorbitManifolds2014}。
- **2:1/3:1 监视轨道**：频繁接近地球与月球、二十圈以内覆盖全地月区域，用于地月监视星座（Frueh 2021、Gupta 2023；经 Patel 2024、Bhadauria & Frueh 2025 转引）。
- **共振 DRO**：DRO 共振比 2:1~4:1 附近引力场非对称性更强、利于星间测量自主定轨，4:1 极区仰角最大 \cite{zhouDesignCircumlunarGlobal2024}；WSB 转移到 2:1 DRO 的捕获段存在 2:1、3:1、4:1、5:1 四类准共振轨道段，4:1 仅在雅可比能量较高时出现 \cite{wangMechanismCharacteristicsAnalysis2025}。

## 应用

- **态势感知观测**：与月球会合周期共振的逆行周期轨道观测性能优异 \cite{vendlCislunarPeriodicOrbit2021}：1:1 共振加约 210° 相移的 L1 Lyapunov 最优，局部峰在 1:1、4:3、3:2、2:1；机理是会合共振加正确相位使太阳近似持续照亮目标区域。星座几何按最小公倍数个会合月重复 \cite{klonowski2023robust,klonowskiCislunarSpaceDomain2024}；把轨道周期约束为太阳会合周期的整数倍可使最优光照几何长期保持 \cite{dingCislunarSpaceSituational2025}。
- **避食**：会合共振使轨道几何按会合月重复，慎选共振比与历元可让地、月阴影从轨迹间隙穿过 \cite{spreenTrajectoryDesignTargeting2021}：9:2 NRHO 月食穿越 <90 分钟，4:1 NRHO 有 19 年准连续免食解。
- **导航星座**：从轨道库筛选周期成整数倍的轨道组成共振星座，近地区域与月球区域性能最优的是 L2 南北 NRHO 与 L4/L5 垂直轨道的组合 \cite{heDesignCislunarNavigation2025}。
- **转移中间结构**：4:3 等共振轨道及其流形构造 LEO→五个平动点的低耗转移与全系统巡游 \cite{vaqueroLeveragingResonantorbitManifolds2014}；共振轨道可作停泊/检疫轨道 \cite{parker2014low}；3:4、4:3 共振轨道作 NRHO↔DRO 转移的中间轨道 \cite{zimovan-spreenDynamicalStructuresNearby2022}。

## 术语变体对照

| 术语 | 含义 | 出处 |
|------|------|------|
| 共振比（resonance ratio） | 轨道周期与参考周期的整数比（两种书写方向并存） | \cite{vaqueroLeveragingResonantorbitManifolds2014} |
| 会合共振（synodic resonance） | 以月球会合周期（29.53 天）为基准的共振 | \cite{spreenTrajectoryDesignTargeting2021} |
| 地月共振轨道 | 恒星基准的地月空间共振轨道泛称 | \cite{SunCongDiYueKongJianTaiShiGanZhiJiShuYanJiuXianZhuangYuFaZhan2025a} |
| 月球共振轨道（lunar resonant） | 与月球共振的地球轨道（IBEX 3:1、TESS） | \cite{vaqueroLeveragingResonantorbitManifolds2014} |
| 恒星共振轨道（sidereal resonant） | 以月球恒星周期为基准的共振轨道（监视语境） | Gupta 2023 |
| 内域 / 外域共振轨道 | 正写约定下 p>q / p<q | \cite{vaqueroLeveragingResonantorbitManifolds2014} |
| 面外共振轨道 | xz 平面对称的三维共振轨道 | \cite{vaqueroLeveragingResonantorbitManifolds2014} |
| 准共振轨道段 | 捕获段中呈 2:1~5:1 共振特性的弧段 | \cite{wangMechanismCharacteristicsAnalysis2025} |
| 会合共振周期轨道 | 会合基准的周期轨道（Vendl 2021 / Klonowski 2023 / Visonneau 2023 三种叫法同指） | \cite{vendlCislunarPeriodicOrbit2021} |
| 太阳共振轨道（Sun-resonant） | 基准=太阳视运动周期=月球会合周期 | \cite{gaoLowthrustStationkeepingControl2023} |
| 共振周期轨道（星座用法） | 周期与星座基准轨道成整数倍的成员 | \cite{heDesignCislunarNavigation2025} |

## 相关概念

- [近直线晕轨道（NRHO）](/glossary/orbits/nrho/)
- [远距离逆行轨道（Distant Retrograde Orbit, DRO）](/glossary/orbits/distant-retrograde-orbit-dro/)
- [轴向轨道（Axial Orbit）](/glossary/orbits/axial-orbit/)
- [Lyapunov 轨道（Lyapunov Orbit）](/glossary/orbits/lyapunov-orbit/)
