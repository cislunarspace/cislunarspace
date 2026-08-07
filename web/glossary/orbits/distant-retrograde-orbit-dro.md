---
title: 远距离逆行轨道（Distant Retrograde Orbit, DRO）
description: 圆型限制性三体问题中绕月球逆行运行的一族平面周期轨道，尺度大于月–L1/L2 距离，线性稳定，是地月空间站停泊、环月星座与中继卫星的候选轨道。
keywords: 远距离逆行轨道, Distant Retrograde Orbit, DRO, SPDRO, QPDRO, 共振DRO, 轨道设计, 周期轨道
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-07
wechatShare:
  title: 远距离逆行轨道（Distant Retrograde Orbit, DRO）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 远距离逆行轨道（DRO）详解 | 术语定义
  description: 圆型限制性三体问题中绕月球逆行运行的一族平面周期轨道，尺度大于月–L1/L2 距离，线性稳定，是地月空间站停泊、环月星座与中继卫星的候选轨道。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 远距离逆行轨道（DRO）详解 | 术语定义
  description: 圆型限制性三体问题中绕月球逆行运行的一族平面周期轨道，尺度大于月–L1/L2 距离，线性稳定，是地月空间站停泊、环月星座与中继卫星的候选轨道。
  image: /logo.png
permalink: /glossary/orbits/distant-retrograde-orbit-dro/
---

# 远距离逆行轨道（Distant Retrograde Orbit, DRO）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

DRO 是圆型限制性三体问题（CR3BP）中绕次主天体逆行运行的一族平面周期轨道；在地月系中即绕月球逆行，在地月旋转坐标系中俯视为顺时针（Welch 2015、Ren 2020）。轨道关于旋转系 x 轴对称并垂直穿越 x 轴（Ren 2020）。它最早见于 Hénon 对 Hill 型三体问题周期轨道的系统分类，属 f 族（Demeyer 2007、Minghu 2014）。

「远」（distant）指轨道特征尺度大于主天体到 L1/L2 平动点的距离（Demeyer 2007、Scott 2010），而不是「位于月球背面或某一侧」——DRO 环绕月球一整圈。

DRO 最突出的性质是线性稳定：受扰后航天器在 DRO 附近的 KAM 不变环面上作准周期运动，设计得当可驻留数十年乃至数百年（Demeyer 2007、Welch 2015）。在含太阳摄动的四体模型中，DRO 不再严格周期，以准周期形态长期有界存在（Zhou 2024）。

## 稳定性与邻域结构

CR3BP 中的 DRO 不是孤立的周期轨道，而是一个稳定区域的核心（Scott 2010，日地系语境，结构结论可互鉴）：

- **SPDRO（稳定周期 DRO）**：稳定区的中心轨道，可由其尺寸指定——尺寸定义为远离次主天体一侧的 x 轴穿越距离，即 x 轴方向最大振幅。
- **QPDRO（准周期 DRO）**：环绕 SPDRO 的准周期轨道，在截面上为封闭曲线；除两个雅可比常数值外的各能量下都存在，该两处稳定区消失（SPDRO 曲线与边界不稳定轨道曲线相交）。稳定区内还夹有有界混沌轨道薄层。
- **BUPO / P3DRO（稳定区边界）**：Scott 2010 称「边界不稳定周期轨道」（BUPO，属 Hénon g3 族，截面上呈周期 3）；Wang 2025 称 P3DRO，即从 DRO 经三倍周期分叉产生的周期轨道，其流形支配黏附区（sticky region）的输运。两者语境不同（日地/地月）、名称不同，指的都是界定 DRO 稳定区的三倍周期不稳定轨道。稳定区与黏附区共同构成「稳定屏障」，低能捕获必须穿越它（Wang 2025）。

## 族内成员

**共振成员**。轨道周期与月球周期成简单整数比的 DRO 有任务价值：地-月-日几何按会合月重复，每月提供两次任务机会。Welch 2015 的 2:1 共振 DRO（相对会合周期 29.53 天）周期约为其半（14.8 天），近月距约 70,000 km、远月距约 90,000 km。注意共振比有两种基准约定：Zhang 2021、Zhou 2024 相对月球恒星周期（27.32 天）计，且 Zhang 把比值倒写（其 1:2 即周期 13.66 天）；同一「2:1 共振 DRO」在不同论文里周期可差一天多，引用数值时必须写明约定。

**近平面与三维 DRO**。近平面 DRO（z 向振幅很小）比三维 DRO 长期稳定性更好（Welch 2015 转引其文献[11]）；Zhou 2024 则以 z 向振幅为参数主动设计三维 DRO 以覆盖月球两极。稳定性与覆盖性是设计取舍。

## 真实模型中的长期有界性

- **长期 DRO**：计及太阳引力后周期轨道不再有保证，能在任务完成前保持有界的轨道称长期 DRO；期望保持有界的时长称 DRO 寿命 T。给定 T 后，决定有界性的是太阳初始相位角 ψ_S，其可行集合即发射窗口；寿命越长窗口越窄。长期 DRO 及其雅可比值都是准周期的（Minghu 2014）。
- **DRO 带（DRO zone）**：长期 DRO 在寿命内雅可比值有上下限 J_max、J_min；DRO 带定义为该寿命内轨道主要集中的有界区域，实用上由雅可比值分别等于 J_max、J_min 的两条理想 DRO 围成（Minghu 2014）。
- **phase-free DRO**：允许航天器在旋转系任何太阳相位角下进入 DRO 的简化假设，用于研究任意历元的入轨转移；它是转移设计的建模手段，不是新轨道类型（Wang 2025-WSB，借自 Parrish et al. 2019）。

## 参数化

同一族轨道，各论文参数化不同，「振幅」一词有两种相反约定，引用时须指明：

- **近侧约定（Ren 2020）**：DRO 振幅 = 轨道以 y 轴负方向运动穿越 x 轴时距月球的距离；其坐标系以月球为原点、地球在 +x 方向，该穿越点位于地月之间，即近地侧。Minghu 2014 同样以 x 轴穿越点位置 x₀ 作族参数。
- **远侧约定（Scott 2010）**：SPDRO size 取远离太阳（次主天体）一侧的 x 轴穿越距离，即 x 向最大振幅。大振幅 DRO 前后不对称明显，两种约定的数值差异不可忽略。
- **相位因子 σ（Wang 2025）**：航天器在 DRO 上的时刻与轨道周期之比，σ ∈ [0,1]；零相位定义为航天器位于 DRO 右方垂直穿越点的时刻。
- **插入角 τ（Welch 2015）**：在 DRO 上匀速推进的角度，模仿开普勒轨道的平近点角，用于标记入轨点。
- **三维 DRO 三参数（Zhou 2024）**：初始相位角 θ、平均周期 T̄、z 向振幅 Z_m。
- **雅可比值**：Minghu 2014 与 Scott 2010 都以雅可比值索引族内成员。

## 应用

- **环月星座（Zhou 2024）**：借鉴 Walker 星座概念，把 DRO 一个周期内的轨迹视为一条「基准轨道」（类比二体问题的轨道面），卫星以等相位差部署其上；星座用卫星总数、基准轨道条数、初始相位角、初始 z 轴分量、初始平均周期五参数表征。
- **空间站停泊与返回转移（Zhang 2021）**：DRO 可作长期地月空间站停泊轨道；DRO→LEO/MEO/GSO 的返回转移在双圆四体模型下先网格搜索得初值、再用非线性规划优化，返回代价是选择停泊 DRO 的关键依据。
- **入轨转移**：经 L1/L2 Lyapunov 轨道流形（Demeyer 2007、Minghu 2014）、微分修正加数值延拓（Scott 2010）、直接转移与动力月旁转移（Welch 2015）、从低月轨出发的转移族（Ren 2020）、经弱稳定边界低能进入（Wang 2025）。
- **小行星存储（Welch 2015）**：ARM 计划把小行星置于月球 DRO，理由是长期稳定、入轨省燃料。
- **通信中继（Minghu 2014）**：DRO 因稳定性和轨道高度被视为环月中继/测控卫星的优先候选。

## 术语变体对照

| 术语 | 含义 | 出处 |
|------|------|------|
| SPDRO | 稳定周期 DRO，稳定区中心轨道 | Scott 2010 |
| QPDRO | 环绕 SPDRO 的准周期 DRO | Scott 2010 |
| P3DRO / BUPO | 界定稳定区的三倍周期不稳定轨道 | Wang 2025 / Scott 2010 |
| 2:1 共振 DRO | 周期约为会合周期之半的 DRO | Welch 2015 |
| 近平面 DRO | z 向振幅很小的 DRO | Welch 2015 |
| 长期 DRO | 寿命内在太阳摄动下保持有界的 DRO | Minghu 2014 |
| DRO 带 | 长期 DRO 主要集中的有界区域 | Minghu 2014 |
| DRO 振幅 | x 轴穿越点距月距离（近侧/远侧两种约定） | Ren 2020 / Scott 2010 |
| DRO 相位因子 σ | 在轨时刻与周期之比 | Wang 2025 |
| DRO 基准轨道 | 星座设计中作部署参照的单周期轨迹 | Zhou 2024 |
| phase-free DRO | 任意太阳相位角可进入的设计简化 | Wang 2025-WSB |

## 相关概念

- [光环轨道（Halo Orbit）](/glossary/orbits/halo-orbit/)
- [近直线晕轨道（NRHO）](/glossary/orbits/nrho/)
- [Lyapunov 轨道（Lyapunov Orbit）](/glossary/orbits/lyapunov-orbit/)
- [共振轨道族（Resonant Orbit Family）](/glossary/orbits/resonant-orbit-family/)
- [准周期轨道（Quasi-Periodic Orbit, QPO）](/glossary/orbits/qpo/)
- [弱稳定边界转移轨道（Weak Stability Boundary Transfer Trajectory）](/glossary/orbits/weak-stability-boundary-transfer-trajectory/)

## 参考文献

- Demeyer & Gurfil, 2007, Transfer to distant retrograde orbits using manifold theory
- Scott & Spencer, 2010, Calculating transfer families to periodic distant retrograde orbits using differential correction, JGCD, DOI:10.2514/1.47791
- Tan Minghu et al., 2014, Transfer to long term distant retrograde orbits around the Moon
- Welch, Parker & Buxton, 2015, Mission considerations for transfers to a distant retrograde orbit
- Ren et al., 2020, Families of transfers from the Moon to distant retrograde orbits in cislunar space
- Zhang et al., 2021, The transfers from lunar DROs to Earth orbits via optimization in the four body problem
- Zhou et al., 2024, Design of circumlunar global positioning satellite constellation on DRO in the cislunar space
- Wang et al., 2025, Mechanism analysis of the DRO low-energy transfer problem: An energy perspective
- Wang et al., 2025, Mechanism and characteristics analysis of weak stability boundary transfers to the 2:1 DRO
