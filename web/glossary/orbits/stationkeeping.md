---
title: 轨道保持（Stationkeeping）
description: 抵偿导航误差、执行误差与环境摄动，使航天器长期驻留标称轨道的控制过程。平动点轨道固有不稳定，需以目标点法、Floquet 模态控制、最优控制与模型预测控制等策略周期性施加小速度增量修正，从 ARTEMIS 到 Gateway 的地月任务均以此为核心操作环节。
keywords: 轨道保持, stationkeeping, 位置保持, 轨道维持, 平动点轨道, 晕轨道, NRHO, DRO, Lissajous 轨道
author: 天疆说
date: 2026-10-01
lastUpdated: 2026-10-01
wechatShare:
  title: 轨道保持（Stationkeeping）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 轨道保持（Stationkeeping）详解 | 术语定义
  description: 抵偿导航误差、执行误差与环境摄动，使航天器长期驻留标称轨道的控制过程。平动点轨道固有不稳定，需以目标点法、Floquet 模态控制、最优控制与模型预测控制等策略周期性施加小速度增量修正。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 轨道保持（Stationkeeping）详解 | 术语定义
  description: 抵偿导航误差、执行误差与环境摄动，使航天器长期驻留标称轨道的控制过程。平动点轨道固有不稳定，需以目标点法、Floquet 模态控制、最优控制与模型预测控制等策略周期性施加小速度增量修正。
  image: /logo.png
permalink: /glossary/orbits/stationkeeping/
aliases:
  - 轨道保持
  - 位置保持
  - 轨道维持
  - stationkeeping
  - station keeping
  - orbit maintenance
related:
  - ref: orbits/halo-orbit
    relation: related
  - ref: orbits/nrho
    relation: related
  - ref: orbits/lissajous-orbit
    relation: related
  - ref: orbits/distant-retrograde-orbit-dro
    relation: related
---

# 轨道保持（Stationkeeping）

> 本文作者：天疆说
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

轨道保持指为抵偿导航误差、机动执行误差与环境摄动的影响，使航天器长期驻留在标称轨道附近而周期性施加小速度增量修正的控制过程，也常称位置保持或轨道维持。地月平动点附近的周期轨道大多线性不稳定，误差沿不稳定方向指数放大，发散时间尺度短，必须定期维持，机动位置与操作窗口因此受到约束 \cite{foltaEarthMoonLibration2014}。晕轨道这类周期轨道的维持可借助线性周期控制理论设计策略，把时变动力学转化为便于综合的形式 \cite{XuMingHaloGuiDaoWeiChiDeXianXingZhouQiKongZhiCeLue2008}。

## 方法谱系

- 目标点法与在轨验证：以标称轨道上预先选定的目标点为参照施加修正，ARTEMIS 作为首批地月平动点轨道器完成了此类保持策略的在轨验证 \cite{foltaStationkeepingFirstEarthmoon2012}。地月平动点轨道保持的理论、建模与运行经验已有系统总结 \cite{foltaEarthMoonLibration2014}。
- Floquet 模态与最优控制：基于单值矩阵特征分解辨识不稳定方向，把修正限制在少数敏感轴上，再与最优控制或降阶方法结合以降低燃耗 \cite{cuevasdelvalleOptimalFloquetStationkeeping2023}。
- 近直线晕轨道的低成本保持：计入轨道确定误差、摄动与推力噪声的高保真仿真给出双策略维持方案并配备轨迹发散实时预警 \cite{guzzettiStationkeepingAnalysisSpacecraft2017}。面向 Gateway 的长期保持策略进一步规范化 \cite{muralidharanStationkeepingEarthmoonRectilinear2021}，全状态目标模型预测控制把机动规划在线化 \cite{shimaneStationkeepingNearrectilinearHalo2025}。
- 低推力保持：以连续小推力替代脉冲修正，配合反馈控制律实现近直线晕轨道的低推力驻留保持 \cite{gaoLowthrustStationkeepingControl2023}。
- 稳定轨道上的编队保持：远距离逆行轨道长期稳定，但其近距离编队仍需按周期施加机动以约束相对运动的不确定性传播 \cite{aoStationkeepingStrategiesClose2024}。

## 相关概念

- [晕轨道（Halo Orbit）](/glossary/orbits/halo-orbit/)
- [近直线晕轨道（NRHO）](/glossary/orbits/nrho/)
- [李萨如轨道（Lissajous Orbit）](/glossary/orbits/lissajous-orbit/)
- [远距离逆行轨道（Distant Retrograde Orbit, DRO）](/glossary/orbits/distant-retrograde-orbit-dro/)
