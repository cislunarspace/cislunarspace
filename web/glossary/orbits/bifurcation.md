---
title: 分岔（Bifurcation）
description: 动力系统解结构随参数连续变化发生质变的现象。限制性三体问题周期轨道族延拓中，单值矩阵特征值穿越单位圆即分岔，晕族与轴向族自平面 Lyapunov 族分岔产生，远距离逆行轨道族存在切分岔与倍周期分岔，分岔结构是轨道目录与转移设计的骨架。
keywords: 分岔, 分叉, bifurcation, 倍周期分岔, 切分岔, 音叉分岔, 周期轨道族, DRO, 晕轨道
author: 天疆说
date: 2026-10-01
lastUpdated: 2026-10-01
wechatShare:
  title: 分岔（Bifurcation）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 分岔（Bifurcation）详解 | 术语定义
  description: 动力系统解结构随参数连续变化发生质变的现象。限制性三体问题周期轨道族延拓中，单值矩阵特征值穿越单位圆即分岔，晕族与轴向族自平面 Lyapunov 族分岔产生，远距离逆行轨道族存在切分岔与倍周期分岔。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 分岔（Bifurcation）详解 | 术语定义
  description: 动力系统解结构随参数连续变化发生质变的现象。限制性三体问题周期轨道族延拓中，单值矩阵特征值穿越单位圆即分岔，晕族与轴向族自平面 Lyapunov 族分岔产生，远距离逆行轨道族存在切分岔与倍周期分岔。
  image: /logo.png
permalink: /glossary/orbits/bifurcation/
aliases:
  - 分岔
  - 分叉
  - 倍周期分岔
  - bifurcation
  - period-doubling bifurcation
related:
  - ref: orbits/halo-orbit
    relation: related
  - ref: orbits/distant-retrograde-orbit-dro
    relation: related
  - ref: orbits/butterfly-orbit
    relation: related
  - ref: orbits/axial-orbit
    relation: related
---

# 分岔（Bifurcation）

> 本文作者：天疆说
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

分岔指动力系统的解结构随参数连续变化而发生质变的现象。在限制性三体问题周期轨道族的数值延拓中，当族参数越过某临界值时，单值矩阵的特征值穿越单位圆，原分支的稳定性发生改变并可能派生新分支，该临界点即分岔点。常见类型有鞍结分岔、跨临界分岔、音叉分岔与倍周期分岔 \cite{kuznetsovElementsAppliedBifurcation1998}。圆型限制性三体问题周期轨道族分岔的系统计算与分类构成了轨道设计的工具箱，次级族正是经分岔从母族产生的 \cite{campbellBifurcationsFamiliesPeriodic1999}。

## 地月周期轨道族中的分岔

- 平动点族的分岔谱系：共线平动点的平面 Lyapunov 族在特定振幅处分岔出晕族，延拓后在族参数的其他位置又分岔出关于 x 轴对称的轴向族，轴向族分为两支且与晕族的分岔位置不同 \cite{vaqueroLeveragingResonantorbitManifolds2014}。
- 远距离逆行轨道族的分岔：以 Broucke 稳定性图定位分岔点，可以判别切分岔与多倍周期分岔并沿新支延拓，多倍周期分岔自三倍周期开始，新轨道族覆盖平面与三维两类，其双曲流形结构支撑后续转移设计 \cite{ChenGuanHuaDiYueKongJianDeYuanJuChiNiXingGuiDaoZuJiQiFenChaYanJiu2022}。Hill 三体问题中远距离逆行轨道的倍周期分岔序列亦有专门分析 \cite{asanoAnalysisPeriodmultiplyingBifurcations2022}。地月低能入轨研究中也把经三倍周期分岔产生的周期轨道作为界定 DRO 稳定区的边界 \cite{wangMechanismAnalysisDRO2025}。
- 近直线晕轨道区段的倍周期分岔：晕轨道族近月点很低的近直线区段经倍周期分岔产生蝴蝶族等高周期轨道族，其不变流形可用于构造近直线晕轨道与远距离逆行轨道之间的转移 \cite{zimovan-spreenDynamicalStructuresNearby2022}。
- 其他模型中的分岔：椭圆限制性三体问题中还存在音叉分岔与对称破缺现象，说明偏心率摄动会改变分岔结构 \cite{shuAnalysisPitchforkBifurcations2025}。

## 相关概念

- [晕轨道（Halo Orbit）](/glossary/orbits/halo-orbit/)
- [远距离逆行轨道（Distant Retrograde Orbit, DRO）](/glossary/orbits/distant-retrograde-orbit-dro/)
- [蝴蝶轨道（Butterfly Orbit）](/glossary/orbits/butterfly-orbit/)
- [轴向轨道（Axial Orbit）](/glossary/orbits/axial-orbit/)
