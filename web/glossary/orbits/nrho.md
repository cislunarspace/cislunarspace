---
title: 近直线晕轨道（Near-Rectilinear Halo Orbit, NRHO）
description: 以稳定性界定的晕轨道族子集：近月点低、面外振幅大、线性稳定或近稳定；其中 9:2 月球会合共振成员（周期约 6.56 天）是 Gateway 空间站的标称轨道，CAPSTONE 已验证在轨运行。
keywords: 近直线晕轨道, NRHO, Near-Rectilinear Halo Orbit, Gateway, CAPSTONE, 晕轨道, 周期轨道
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-07
wechatShare:
  title: 近直线晕轨道（Near-Rectilinear Halo Orbit, NRHO）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 近直线晕轨道（NRHO）详解 | 术语定义
  description: 以稳定性界定的晕轨道族子集：近月点低、面外振幅大、线性稳定或近稳定；其中 9:2 月球会合共振成员（周期约 6.56 天）是 Gateway 空间站的标称轨道，CAPSTONE 已验证在轨运行。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 近直线晕轨道（NRHO）详解 | 术语定义
  description: 以稳定性界定的晕轨道族子集：近月点低、面外振幅大、线性稳定或近稳定；其中 9:2 月球会合共振成员（周期约 6.56 天）是 Gateway 空间站的标称轨道，CAPSTONE 已验证在轨运行。
  image: /logo.png
permalink: /glossary/orbits/nrho/
aliases:
  - NRHO
  - 近直线晕轨道
  - 近直线型晕轨道
  - 9:2 NRHO
  - Sun-resonant NRHO
related:
  - ref: orbits/halo-orbit
    relation: broader
  - ref: orbits/distant-retrograde-orbit-dro
    relation: transfer
  - ref: orbits/resonant-orbit-family
    relation: related
  - ref: orbits/lissajous-orbit
    relation: related
  - ref: orbits/weak-stability-boundary-transfer-trajectory
    relation: related
---

# 近直线晕轨道（Near-Rectilinear Halo Orbit, NRHO）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

NRHO 是以稳定性界定的晕轨道族子集：晕轨道族中稳定或近稳定（有界线性和近线性稳定）的区段 \cite{spreenTrajectoryDesignTargeting2021,gaoLowthrustStationkeepingControl2023}。具体地，L2 NRHO 取晕轨道族上第一次与第三次稳定性变化之间的成员，对应近月点半径约 1832~17390 km；L1 NRHO 取第一次与第四次稳定性变化之间，近月点半径约 900~19000 km、周期 8~10 天 \cite{spreenTrajectoryDesignTargeting2021,JinShouCongJiYuNRHODeYueQiuQuanQiuDingWeiXiTongXingZuoYanJiu2025}。

形态上，NRHO 近月点很低、面外振幅很大，轨道细长得接近直线 \cite{singhLowthrustTransfersSouthern2021,gaoLowthrustStationkeepingControl2023}。以 9:2 NRHO 为例，三向振幅 [x, y, z] = [13090, 31925, 73197] km，面外振幅为面内两倍以上 \cite{spreenTrajectoryDesignTargeting2021}（附录 C）。词源可追溯到 Howell & Breakwell 1983 年提出的almost rectilinear halo orbits近似 \cite{spreenTrajectoryDesignTargeting2021}。

## 9:2 会合共振成员

最重要的一条 NRHO 是与月球会合周期成 9:2 共振的 L2 南族成员：每 2 个会合月（≈29.53 天）运行 9 圈，周期约 6.556 天；CR3BP 精确参数为近月点半径 3153 km、远月点半径 71230 km、雅可比常数 3.04719 \cite{spreenTrajectoryDesignTargeting2021}（附录 C），工程文献约作 6.5 天、3200/70000 km \cite{capannoloModelPredictiveControl2023}（注意均为月心半径而非高度）。

两个表述要点：

- 共振基准是**月球会合周期**，不是回归年。部分文献称Sun-resonant NRHO \cite{gaoLowthrustStationkeepingControl2023}，其模型中太阳在地月旋转系的视运动周期数值上等于月球会合周期，与lunar synodic resonant是同一共振的两种说法。
- 会合共振使地-月-日几何按会合月重复，这是 9:2 NRHO 避食几何的来源，也是它被选为 Gateway 标称轨道的原因之一 \cite{zimovan-spreenDynamicalStructuresNearby2022,spreenTrajectoryDesignTargeting2021}。

## 稳定性与邻域结构

NRHO 段的稳定指数在 1~1.69 之间，含线性稳定与 mildly unstable 成员 \cite{spreenTrajectoryDesignTargeting2021,JinShouCongJiYuNRHODeYueQiuQuanQiuDingWeiXiTongXingZuoYanJiu2025}（晋守聪 2025 给出稳定性指数均在 ±1 附近）。NRHO 邻域分岔出一批高周期轨道族（P2HO1 即 butterfly 族、P2HO2、P4HO1/2 等），其流形可用于构造 NRHO 与其他轨道间的转移 \cite{zimovan-spreenDynamicalStructuresNearby2022}。

## 应用

- **Gateway 与 CAPSTONE**：L2 南族 9:2 会合共振 NRHO 是 Gateway 空间站的标称轨道 \cite{zimovan-spreenDynamicalStructuresNearby2022}；CAPSTONE 于 2022 年进入该轨道并在轨运行，验证导航与轨道保持 \cite{JinShouCongJiYuNRHODeYueQiuQuanQiuDingWeiXiTongXingZuoYanJiu2025}。
- **月球导航星座**：以 L1/L2 南北族 NRHO（按近月点半径 2000~16000 km 参数化）构建月球全球定位星座，最优构型为四轨 16 星，极区 GDOP 优于同规模晕轨道星座 \cite{JinShouCongJiYuNRHODeYueQiuQuanQiuDingWeiXiTongXingZuoYanJiu2025}。共振导航星座研究中，L2 北/南族 NRHO（记 L2NH/L2SH，族周期约 1.37~3.42 个时间单位）在近地区、月球区、综合区三个目标区的最优构型 Rank 1/2 中全部出现；综合区最优为 L2NH-L2SH 与 L4/L5 垂直轨道的组合 \cite{heDesignCislunarNavigation2025}。
- **伴飞与编队**：Gateway 周围的准周期不变环面（QPT）可作为 Orion 伴飞的天然有界区域，以模型预测控制在环面上做相位重构 \cite{capannoloModelPredictiveControl2023}。

## 到达与离开

- **NRHOI（入轨机动）**：进入 NRHO 的入轨机动。对比两种方案 \cite{kikuchiComparisonTransferTrajectory2024}：间接转移（IDT）的 NRHOI 在真近点角 160° 处施加，含大量非速度方向分量，约 240 m/s；近月点交会法（PRM）在近月点沿速度方向施加，仅约 55 m/s；PRM 先经近月点制动进入长椭圆绕月轨道等待约两周，待轨道面与 NRHO 对齐后一次入轨并直接与 Gateway 交会。
- **地球↔NRHO**：IDT 约 5.8 天/593 m/s（含 TLI），PRM 约 18.3 天/545 m/s，WSB 转移 >100 天但仅 60~100 m/s \cite{kikuchiComparisonTransferTrajectory2024}；sGTO↔南族 L2 NRHO 低推力转移把稳定流形当长滑行弧，93 天/1541 m/s 量级 \cite{singhLowthrustTransfersSouthern2021}。
- **NRHO↔DRO**：双脉冲转移利用对称性简化搜索，经近月飞掠与 Lyapunov 样轨道可压到 184~248 m/s \cite{wangTransfersNRHOsDROs2021}；借邻域分岔族的流形约 20 天、200 m/s 量级且全程避食 \cite{zimovan-spreenDynamicalStructuresNearby2022}。
- **Gateway↔他处**：高保真星历模型下 Gateway（9:2 NRHO）↔低月轨约 36 天、↔LEO 约 144~153 天的双向低推力转移 \cite{pozziOptimalLowthrustOrbit2025}。
- **低能耗调相** \cite{liuRendezvousDockingOperations2025}：NRHO 缺乏良好定义的不变流形，改用 Cauchy-Green 张量最大拉伸方向构造逃逸流/接近流并求交，实现追踪飞行器与目标站的相位匹配，比脉冲调相显著省燃料。

## 术语变体对照

| 术语 | 含义 | 出处 |
|------|------|------|
| 9:2 NRHO | 9 圈 / 2 个会合月的 L2 南族共振成员，Gateway 标称轨道 | \cite{spreenTrajectoryDesignTargeting2021} |
| Sun-resonant NRHO | 与太阳共振的另一表述，基准实为月球会合周期 | \cite{gaoLowthrustStationkeepingControl2023} |
| NRHOI | 进入 NRHO 的入轨机动（PRM 近月点沿速度向 / IDT 真近点角 160°） | \cite{kikuchiComparisonTransferTrajectory2024} |
| NRHO 转移 | 以 NRHO 为起点或终点的转移 | \cite{pozziOptimalLowthrustOrbit2025} |
| QPT | NRHO 周围的准周期环面，用于伴飞 | \cite{capannoloModelPredictiveControl2023} |
| L2NH / L2SH | L2 北 / 南族 NRHO（共振导航星座语境） | \cite{heDesignCislunarNavigation2025} |

## 相关概念

- [晕轨道（Halo Orbit）](/glossary/orbits/halo-orbit/)
- [Lissajous 轨道（Lissajous Orbit）](/glossary/orbits/lissajous-orbit/)
- [远距离逆行轨道（Distant Retrograde Orbit, DRO）](/glossary/orbits/distant-retrograde-orbit-dro/)
- [共振轨道族（Resonant Orbit Family）](/glossary/orbits/resonant-orbit-family/)
- [弱稳定边界转移轨道（Weak Stability Boundary Transfer Trajectory）](/glossary/orbits/weak-stability-boundary-transfer-trajectory/)
