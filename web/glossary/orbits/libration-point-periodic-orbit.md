---
title: 平动点周期轨道（Libration Point Orbit, LPO）
description: 围绕平动点的周期轨道统称；狭义指三体问题中不稳定周期轨道的子集（共线点情形），广义涵盖共线点的 Lyapunov/垂直/晕/李萨如/准晕各族与三角点的短周期/长周期/垂直各族。
keywords: 平动点周期轨道, Libration Point Orbit, LPO, 平动点轨道, 周期轨道
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-07
wechatShare:
  title: 平动点周期轨道（Libration Point Orbit, LPO）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 平动点周期轨道（LPO）详解 | 术语定义
  description: 围绕平动点的周期轨道统称；狭义指三体问题中不稳定周期轨道的子集（共线点情形），广义涵盖共线点的 Lyapunov/垂直/晕/李萨如/准晕各族与三角点的短周期/长周期/垂直各族。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 平动点周期轨道（LPO）详解 | 术语定义
  description: 围绕平动点的周期轨道统称；狭义指三体问题中不稳定周期轨道的子集（共线点情形），广义涵盖共线点的 Lyapunov/垂直/晕/李萨如/准晕各族与三角点的短周期/长周期/垂直各族。
  image: /logo.png
permalink: /glossary/orbits/libration-point-periodic-orbit/
---

# 平动点周期轨道（Libration Point Orbit, LPO）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

平动点周期轨道是围绕平动点运行的周期轨道统称。狭义定义取「三体问题中**不稳定**周期轨道的子集」（Ren 2012，其研究限于共线点平面情形）；广义统称涵盖共线平动点与三角平动点附近的全部周期轨道族（Qiao 2025、He 2025 的族谱）。文献中「共线平动点轨道」（collinear Lagrangian point orbit）指绕 L1/L2（及 L3）的周期或准周期轨道，如李萨如、晕轨道等（Bucchioni & Innocenti 2021）。

## 共线点的鞍-周期结构与族谱

共线平衡点的运动模式是鞍 × 中心 × 中心：周期分量产生绕点的周期运动，鞍分量产生趋向与离开这些周期解的运动，即稳定与不稳定不变流形；同一能量下不同平动点周期轨道间可借流形实现零代价转移（Ren 2012 及其转引的 Koon 2000 等成果；Qiao 2025）。

族谱（Qiao 2025、He 2025）：共线点 L1/L2/L3 各有 Lyapunov、南/北晕、垂直族，以及李萨如、准晕、准 Lyapunov（准 Lyapunov 轨道是李萨如与准晕之间的分界）；三角点 L4/L5 各有平面（短周期/长周期）与垂直族，见[蝌蚪轨道](/glossary/orbits/tadpole-orbit/)。

## 四体模型中的替代

双圆四体问题中，平衡点与周期轨道分别被周期轨道与不变环面替代：平动点→周期轨道（动力学替代轨道，经 ε→1 延拓），周期轨道→不变环面（Ren 2012）。

## 编目应用

地月空间态势感知背景下，对平动点区域的空间物体编目（识别、跟踪、记录、分类）可用特征参数方法：以辛变换分解双曲/面内中心/垂直中心三种运动模态，得到与状态矢量一一对应的 6 个特征参数 [q₁,p₁,I₂,θ₂,I₃,θ₃]，辅以 θ₃=π/2 的庞加莱截面作编目底图，轨道识别化为优化问题，星历模型下对 100 km/1 m/s 量级误差稳健（Qiao 2025）。

## 术语变体对照

| 术语 | 含义 | 出处 |
|------|------|------|
| 平动点轨道（LPO） | 平动点周期轨道统称（狭义为不稳定周期轨道子集） | Ren 2012 |
| 共线平动点轨道 | 绕共线点的周期/准周期轨道（李萨如、晕等） | Bucchioni & Innocenti 2021 |
| 平动点轨道编目 | 基于 6 特征参数的空间物体识别分类方法 | Qiao 2025 |

## 相关概念

- [平动点（Libration Point）](/glossary/orbits/lagrangian-point/)
- [晕轨道（Halo Orbit）](/glossary/orbits/halo-orbit/)
- [Lyapunov 轨道（Lyapunov Orbit）](/glossary/orbits/lyapunov-orbit/)
- [垂直轨道（Vertical Orbit）](/glossary/orbits/vertical-orbit/)
- [Lissajous 轨道（Lissajous Orbit）](/glossary/orbits/lissajous-orbit/)

## 参考文献

- Ren et al., 2012, Optimal low-thrust transfers between libration point orbits
- Bucchioni & Innocenti, 2021, Rendezvous in cis-lunar space near rectilinear halo orbit dynamics and control issues
- Qiao et al., 2025, Orbital parameter characterization and objects cataloging for Earth-Moon collinear libration points
- He et al., 2025, Design of cislunar navigation constellation via orbits with a resonant period
