---
title: 星座（Multi-Body Constellation）
description: 多颗卫星部署在环月轨道与平动点轨道等多种轨道上，协同提供月面覆盖、中继通信与导航定位的星座系统；典型设计含南极双星接力连续覆盖与全月面混合轨道覆盖方案。
keywords: 星座, Constellation, 多体星座, 月球南极覆盖, 全月面覆盖, 近月空间星座
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-07
wechatShare:
  title: 星座（Multi-Body Constellation）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 星座详解 | 术语定义
  description: 多颗卫星部署在环月轨道与平动点轨道等多种轨道上，协同提供月面覆盖、中继通信与导航定位的星座系统；典型设计含南极双星接力连续覆盖与全月面混合轨道覆盖方案。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 星座详解 | 术语定义
  description: 多颗卫星部署在环月轨道与平动点轨道等多种轨道上，协同提供月面覆盖、中继通信与导航定位的星座系统；典型设计含南极双星接力连续覆盖与全月面混合轨道覆盖方案。
  image: /logo.png
permalink: /glossary/orbits/multi-body-constellation/
---

# 星座（Multi-Body Constellation）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

星座是多颗卫星协同工作的系统；地月空间的星座把卫星部署在环月轨道与平动点轨道等多种轨道上，提供月面覆盖、中继通信与导航定位服务。「multi-body constellation」是文献惯用称谓（如 Trabacchin 2025），指多星/多体轨道星座，无更严格的形式定义。覆盖性能指标：单重覆盖时间占比（CTP）与连续单重覆盖面积比（SCP）（Gao & Hou 2020）；导航需求用四重覆盖率（至少 4 星同时可见的时间占比）与 GDOP 时间占比（陈诗雨 2024）。

## 月球南极覆盖

单颗南晕（含近直线）轨道上的卫星只在大部分轨道周期内可见南极（12 天 L1 晕约 63.5%、7 天 L2 近直线晕约 96.4%），**连续覆盖必须双星接力**：同一轨道放两颗相位错开（差半周期）的星，或选两条周期可通约的轨道各放一颗；五种组合达 100%（如双 7 天 L2 NRHO、7 天 L2 晕 + 14 天蝴蝶轨道），16 天 L1+L2 垂直轨道组合是反例（接力后仍 98.41%）（Grebow 2008，地面站设 Shackleton 坑 89.9°S，全星历模型验证 180 天）。到达这些覆盖轨道的低推力转移见 Ozimek & Howell 2010。四星南极通信星座的工程方案：3 颗 3:1 恒星共振 L2 南晕 + 1 颗 L1 南晕，最小仰角 59° 时 100% 连续（Trabacchin 2025）。

## 全月面覆盖

单一轨道类型接近而不达 100%：4 星晕轨道星座在细网格下不完美（大面外振幅晕轨道极区覆盖好、赤道覆盖差）；3 星等相位平面 DRO 达 99.8% 但极冠有永久缺口；4 星空间 DRO 约 99.975%。混合 5 星（3 晕 + 2 DRO）可达全月面 100% 连续单重覆盖（Gao & Hou 2020）。

## 近月空间星座建设路线

陈诗雨 2024 提出三阶段：南极极区 100% 一重覆盖（对地中继通信）→ 极区 100% 四重覆盖（导航）+ 全月 100% 一重覆盖（通信）→ 全月 100% 四重覆盖（全月导航）。最终构型为 12 颗椭圆冻结轨道（ELFO，12 h 周期、近月点 300 km，分南北两组覆盖两极）+ 4 颗 9:2 NRHO + 2 颗晕轨道（L1、L2 各一）+ 3 颗互差 120° 的 2:1 DRO，共 21 星，全月任意一点至少 72% 时间内 GDOP≤5。

## 术语变体对照

| 术语 | 含义 | 出处 |
|------|------|------|
| 多体星座 | 多星/多体轨道星座的惯用称谓 | Trabacchin 2025 |
| 月球南极覆盖轨道 | 南晕族部分轨道（单星大部分周期可见，双星接力连续） | Grebow 2008 |
| 全月面覆盖 | 混合轨道类型的 100% 连续单重覆盖 | Gao & Hou 2020 |
| 近月空间星座 | 环月+平动点轨道的三阶段建设方案 | 陈诗雨 2024 |
| ELFO | 椭圆冻结轨道（12 h 周期、近月点 300 km） | 陈诗雨 2024 |

## 相关概念

- [编队飞行（Formation Flight）](/glossary/orbits/formation-flight/)
- [晕轨道（Halo Orbit）](/glossary/orbits/halo-orbit/)
- [近直线晕轨道（NRHO）](/glossary/orbits/nrho/)
- [远距离逆行轨道（Distant Retrograde Orbit, DRO）](/glossary/orbits/distant-retrograde-orbit-dro/)

## 参考文献

- Grebow et al., 2008, Multibody orbit architectures for lunar south pole coverage
- Ozimek & Howell, 2010, Low-thrust transfers in the Earth–Moon system, including applications to libration point orbits
- Gao & Hou, 2020, Coverage analysis of lunar communication/navigation constellations based on halo orbits and DROs
- 陈诗雨 等, 2024, 近月空间星座轨道设计方法
- Trabacchin & Colombatti, 2025, Design of an orbital infrastructure to guarantee continuous communication to the lunar south pole region
