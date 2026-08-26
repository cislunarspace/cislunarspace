---
title: 轨道维持代价（Orbit Maintenance Cost）
description: 航天器在轨道全寿命周期内，用于克服自然引力摄动、非引力摄动及轨道不稳定性所需消耗的累积速度增量与推进剂比例。
keywords: 轨道维持代价, Orbit Maintenance Cost, 轨道保持, 摄动控制, 站位保持
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 轨道维持代价（Orbit Maintenance Cost）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
permalink: /glossary/orbits/orbit-maintenance-cost/
---

# 轨道维持代价（Orbit Maintenance Cost）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

轨道维持代价（Orbit Maintenance Cost）是指航天器在特定标称轨道（如近直线晕轨道 NRHO、Halo 轨道、远距离逆行轨道 DRO 及低环月轨道 LLO）上执行长期驻留飞行任务时，通过闭环轨道控制消除外界摄动与初始入轨偏差、确保航天器不脱离名义轨道走廊所需的年均速度增量（$\Delta v$）及推进剂质量占比。

## 物理机制与工程价值

地月空间复杂的动力学摄动环境使得不同轨道构型的维持代价呈现出数量级的显著差异：

1. 轨道本征稳定性影响：远距离逆行轨道（DRO）在摄动环境下具备长期自稳定性，其本征特征乘子模长等于 1，理论维持代价极低（小于 1-2 m/s/年）；而共线平动点 Halo 轨道及部分 NRHO 存在鞍点不稳定模式（模长大于 1），微小扰动将随时间指数发散，需采用最优滑模控制或 Floquet 模态目标点机动定期实施小推力脉冲；
2. 摄动源耦合机制：低月轨道受月球高阶非球形引力（质量瘤）剧烈摄动，偏心率与倾角迅速漂移，年维持代价高达数十至数百米每秒；平动点高轨则主要受太阳第三体引力摄动和太阳光压（SRP）影响；
3. 全寿命设计基准：轨道维持代价是决定深空探测器、月球空间站推进剂装载量、干湿质比、有效载荷比重以及在轨服役寿命的关键判据。

## 相关概念

- [参考轨道（Reference Orbit）](/glossary/navigation/reference-orbit/)
- [月球同步共振（Lunar Synodic Resonance, LSR）](/glossary/orbits/lsr/)
- [GRAIL重力场模型（GRAIL Gravity Field Model）](/glossary/observation/grgm660prim/)
- [相切（Tangential）](/glossary/orbits/tangential/)

## 参考文献

- 陈诗雨, 徐明, 彭祺擘. 近月空间星座轨道设计与维持控制方法. 航空学报, 2024, 45(12): 328841.
- Guzzetti, D., & Howell, K. C. Target point approach for stationkeeping along unstable periodic orbits in the Earth-Moon system. Acta Astronautica, 2017, 137: 295-309.
