---
title: 拟晕轨道（Quasi-Halo Orbit）
description: 围绕晕轨道天平动的准周期平动点轨道，属 Lissajous 型解，像晕轨道一样保持排阻区；在圆型限制性三体问题中可用 Lindstedt-Poincaré 半解析方法计算并延拓到星历模型，为平动点任务提供比周期晕轨道更灵活的设计空间。
keywords: 拟晕轨道, quasi-halo orbit, 准晕轨道, 晕轨道, Lissajous 轨道, 准周期轨道, 平动点
author: 天疆说
date: 2026-10-01
lastUpdated: 2026-10-01
wechatShare:
  title: 拟晕轨道（Quasi-Halo Orbit）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 拟晕轨道详解 | 术语定义
  description: 围绕晕轨道天平动的准周期平动点轨道，属 Lissajous 型解，像晕轨道一样保持排阻区；可用 Lindstedt-Poincaré 半解析方法计算并延拓到星历模型，为平动点任务提供比周期晕轨道更灵活的设计空间。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 拟晕轨道详解 | 术语定义
  description: 围绕晕轨道天平动的准周期平动点轨道，属 Lissajous 型解，像晕轨道一样保持排阻区；可用 Lindstedt-Poincaré 半解析方法计算并延拓到星历模型，为平动点任务提供比周期晕轨道更灵活的设计空间。
  image: /logo.png
permalink: /glossary/orbits/quasi-halo-orbit/
aliases:
  - quasi-halo orbit
  - 拟晕轨道
  - 准晕轨道
  - quasi-halo
related:
  - ref: orbits/halo-orbit
    relation: broader
  - ref: orbits/lissajous-orbit
    relation: related
  - ref: orbits/qpo
    relation: related
---

# 拟晕轨道（Quasi-Halo Orbit）

> 本文作者：天疆说
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

拟晕轨道是共线平动点附近围绕晕轨道作天平动的准周期轨道，属于 Lissajous 型解 \cite{gomezQuasihaloOrbitsAssociated1998}。它像晕轨道一样保持排阻区，即轨道在旋转系中始终避开主天体附近的区域，因而继承晕轨道的遮挡规避性质；同时它是准周期运动，状态不严格重复，而是密布在围绕晕轨道的不变环面上 \cite{gomezQuasihaloOrbitsAssociated1998}。

## 谱系与计算

在圆型限制性三体问题中，Gómez、Masdemont 与 Simó 用 Lindstedt-Poincaré 半解析方法系统计算了共线平动点族的拟晕轨道，讨论了方法的实际收敛性，并把解延拓到 JPL 星历模型 \cite{gomezQuasihaloOrbitsAssociated1998}。在平动点附近的解空间里，拟晕轨道族位于周期晕轨道与更一般 Lissajous 环面之间；掌握这类轨道使共线平动点任务分析拥有比仅用周期轨道更灵活的设计空间，可服务于太阳系内任意主天体对的平动点任务 \cite{gomezQuasihaloOrbitsAssociated1998}。

## 应用

- **任务轨道候选**：地月空间轨迹设计中，包含拟晕轨道在内的准周期轨道族被系统用于转移与任务轨道设计 \cite{mccarthyLeveragingQuasiperiodicOrbits2021}。
- **轨道设计方法**：Neelakantan 与 Ramanan 在不同日地框架下用差分进化算法设计拟晕轨道，并求解从地球出发到达这类轨道的最优转移 \cite{neelakantanDesignAnalysisQuasihalo2023}。

## 相关概念

- [晕轨道](/glossary/orbits/halo-orbit/)
- [Lissajous 轨道](/glossary/orbits/lissajous-orbit/)
- [准周期轨道](/glossary/orbits/qpo/)
