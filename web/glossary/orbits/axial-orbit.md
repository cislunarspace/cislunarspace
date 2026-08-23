---
title: 轴向轨道（Axial Orbit）
description: 平动点轨道的一类三维周期轨道族：共线点处从平面 Lyapunov 族分岔产生（分岔位置与晕轨道族不同），关于 x 轴对称、分 axial-1/axial-2 两支；L4/L5 的轴向轨道线性稳定，可用于地月双覆盖与态势感知。
keywords: 轴向轨道, Axial Orbit, 平动点轨道, 共振轨道, 系统平移, 周期轨道
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-07
wechatShare:
  title: 轴向轨道（Axial Orbit）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 轴向轨道（Axial Orbit）详解 | 术语定义
  description: 平动点轨道的一类三维周期轨道族：共线点处从平面 Lyapunov 族分岔产生（分岔位置与晕轨道族不同），关于 x 轴对称、分 axial-1/axial-2 两支；L4/L5 的轴向轨道线性稳定，可用于地月双覆盖与态势感知。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 轴向轨道（Axial Orbit）详解 | 术语定义
  description: 平动点轨道的一类三维周期轨道族：共线点处从平面 Lyapunov 族分岔产生（分岔位置与晕轨道族不同），关于 x 轴对称、分 axial-1/axial-2 两支；L4/L5 的轴向轨道线性稳定，可用于地月双覆盖与态势感知。
  image: /logo.png
permalink: /glossary/orbits/axial-orbit/
---

# 轴向轨道（Axial Orbit）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

轴向轨道是平动点轨道（LPO）的一类三维周期轨道族。共线点处，轴向族与晕轨道族分别从平面 Lyapunov 族的**不同位置**分岔产生；轴向族关于 **x 轴**对称，并因此分为 axial-1、axial-2 两支（He 2026）。三角点处，L4/L5 的轴向族从垂直 Lyapunov 族分岔，且不再具有对称性（He 2026）。在周期轨道目录体系中，轴向族与 Lyapunov、垂直、晕族并列为标准 LPO 族（Folta 2015、Guzzetti 2016）。

## 稳定性

L1/L2 轴向轨道全族强不稳定、无中心子空间（不能用于环面编队）（Guzzetti 2016）；L4 轴向轨道线性稳定，外推 120 年保持有界（Vaquero & Howell 2014）。早期目录给出的 L1/L2 轴向族稳定指数在百位量级（强不稳定），与上述定性结论一致。

## 轴向共振轨道

三维**非对称**共振轨道称轴向共振轨道，由分叉轨道沿 z 方向微扰算得（Vaquero & Howell 2014）。其 3:1 成员可经**系统平移**（system translation，即质量参数 μ 延拓）从地月系直接迁移到其他三体系统（如土星-土卫六系），无需在新系统重做初猜-分岔-延拓流程（Vaquero & Howell 2014）。两点注意：

- 共振比有两种约定：Vaquero & Howell 的 3:1 指航天器 3 圈 / 月球 1 圈，而 Parker & Anderson 2014、Guzzetti 2016 的 p:q 约定是月球 p 圈 : 航天器 q 圈；同一轨道在两种约定下记号相反，引用须写明。
- 系统平移不保持稳定性：地月系 4:3 共振族全不稳定，而土星-土卫六系同族大多线性稳定（Vaquero & Howell 2014）。

## 应用

- **L4 轴向轨道转移**：LEO→L4 轴向轨道的三维转移：由 L2 轴向轨道稳定流形（天然经过地球附近）拼接 3:2 轴向共振轨道不稳定流形，ΔV 3.27 km/s、22.54 天；L4 轴向轨道线性稳定、对地月双覆盖、通信不中断（Vaquero & Howell 2014）。
- **态势感知**：L4/L5 轴向轨道穿越地月空间大体积区域，在空间态势感知架构优化中高频入选，利于对平面机动目标的持续探测（Klonowski 2024）。

## 术语变体对照

| 术语 | 含义 | 出处 |
|------|------|------|
| axial-1 / axial-2 支 | 共线点轴向族关于 x 轴对称分出的两支 | He 2026 |
| 轴向共振轨道 | z 向微扰分叉轨道得到的三维非对称共振轨道 | Vaquero & Howell 2014 |
| 3:1 轴向共振轨道 | 可系统平移至其他三体系统的共振成员 | Vaquero & Howell 2014 |

## 相关概念

- [Lyapunov 轨道（Lyapunov Orbit）](/glossary/orbits/lyapunov-orbit/)
- [垂直轨道（Vertical Orbit）](/glossary/orbits/vertical-orbit/)
- [晕轨道（Halo Orbit）](/glossary/orbits/halo-orbit/)
- [共振轨道族（Resonant Orbit Family）](/glossary/orbits/resonant-orbit-family/)

## 参考文献

- Vaquero & Howell, 2014, Leveraging resonant-orbit manifolds to design transfers between libration-point orbits
- Folta et al., 2015, An Earth-Moon system trajectory design reference catalog
- Guzzetti et al., 2016, Rapid trajectory design in the Earth–Moon ephemeris system via an interactive catalog of periodic and quasi-periodic orbits
- Klonowski et al., 2024, Cislunar space domain awareness architecture design and analysis for cooperative agents
- He et al., 2026, A review of cislunar constellation design and optimization
