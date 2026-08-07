---
title: 李萨如轨道（Lissajous Orbit）
description: 共线平动点附近中心流形上的准周期轨道，由一个面内振动和一个不同频率的面外振动叠加而成，面内/面外振幅为两个自由参数；ARTEMIS 任务的 L1/L2 轨道即属此类。
keywords: 李萨如轨道, Lissajous Orbit, 准周期轨道, quasi-halo, ARTEMIS, 平动点轨道
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-07
wechatShare:
  title: 李萨如轨道（Lissajous Orbit）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 李萨如轨道（Lissajous Orbit）详解 | 术语定义
  description: 共线平动点附近中心流形上的准周期轨道，由一个面内振动和一个不同频率的面外振动叠加而成，面内/面外振幅为两个自由参数；ARTEMIS 任务的 L1/L2 轨道即属此类。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 李萨如轨道（Lissajous Orbit）详解 | 术语定义
  description: 共线平动点附近中心流形上的准周期轨道，由一个面内振动和一个不同频率的面外振动叠加而成，面内/面外振幅为两个自由参数；ARTEMIS 任务的 L1/L2 轨道即属此类。
  image: /logo.png
permalink: /glossary/orbits/lissajous-orbit/
---

# 李萨如轨道（Lissajous Orbit）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

李萨如轨道是共线平动点附近中心流形上的准周期轨道：一个面内（xy 平面）振动与一个不同频率的面外（z 方向）振动叠加而成，面内振幅 Ax 与面外振幅 Az 是两个自由参数（Canalias 2008、Renk 2010）。由于两频率一般不可通约，轨道不闭合但始终保持在平动点附近的有界区域内，投影呈李萨如图形。动力学上，李萨如轨道是围绕垂直（vertical）周期轨道的二维环面（Folta 2014）。名称来自法国物理学家 Jules Antoine Lissajous 研究的李萨如图形。

## 与晕轨道的关系

当面内、面外两个频率相等时，李萨如轨道退化为周期的晕轨道（Renk 2010、Gómez 2001）。对称性上两者相反：李萨如轨道对 xy 平面和 xz 平面均保持（准）对称，而晕轨道只关于 xz 平面对称、失去了 xy 平面对称（Renk 2010）。

## 族内变体

- **square 李萨如轨道**：面内振幅与面外振幅相等（α3=α4）的李萨如轨道（Alessi 2010）。注意「square」指振幅约束，两频率仍不同——不存在「运动周期相同」的性质。
- **quasi-halo（准晕轨道）**：围绕晕轨道的准周期环面（Folta 2014）。生成关系：当面外振幅超过某一下界后，李萨如轨道失去 xy 平面对称、在主天体连线方向出现禁区，即成为 quasi-halo（Renk 2010）。故 quasi-halo 的面外振幅并不小——它对应李萨如族的大振幅端。
- **高/低 z 幅值模式**：非线性模型中 z 幅值不再恒定，在高、低两种模式间循环；进入相位决定落在环面的哪个模式区。低 z 幅值模式又称近平面模式（nearly-planar mode）。ARTEMIS 在 L2 侧利用高 z 幅值模式适应弹道转移的面外到达条件，在 L1 侧则利用低 z 幅值（近平面）相位降低进入低倾角月球轨道的 ΔV（Folta 2014）。注意该模式是大准晕轨道（及一般准周期轨道）的性质——Folta 2014 明示李萨如轨道（庞加莱图中央区）不具备近平面模式。

## 参数化

- **osculating 李萨如六要素**（Renk 2010）：类比开普勒根数——不稳定振幅 A1（指数增长项）、稳定振幅 A2（指数衰减项）、面内振幅 Ax（Ay 与 Ax 成比例，不单列）、面外振幅 Az、面内相位 Φxy、面外相位 Φz。取 A1=A2=0 即得李萨如轨道。
- **有效相位面（EPP）**：有效相位 (Φ, Ψ) 与给定振幅的李萨如轨道状态一一对应，用于两星交会与避食设计（Perozzi & Ferraz-Mello 2010）。

## 应用

- **ARTEMIS**：P1、P2 分别于 2010-08-25 和 2010-10-22 经一次李萨如入轨机动（LOI）进入地月 L2、L1 李萨如轨道（Folta 2012）。站保在星历模型含误差下以轨道延续法最优，消耗下限约 15 m/s/年、预算 25 m/s/年以内（Folta 2010）。事后用庞加莱图判定，ARTEMIS 三条平动点轨道实际是大 quasi-halo 轨道的弧段（Folta 2014）——设计口径称李萨如、事后判定称 quasi-halo，两种说法都有出处。
- **日地↔地月自然转移**：两个三体系统的双曲流形在庞加莱截面上位置匹配，可实现李萨如轨道间的机动自由转移，多重打靶细化后耦合机动一般小于 100 m/s（Canalias 2008）。
- **避食**：李萨如两参数族的形状可控性强，日食规避可以较低的代价实现（Alessi 2010）。

## 术语变体对照

| 术语 | 含义 | 出处 |
|------|------|------|
| 李萨如轨迹（Lissajous trajectory） | 同李萨如轨道 | Canalias 2008 |
| square 李萨如 | 面内=面外振幅的变体 | Alessi 2010 |
| 李萨如入轨（LOI） | 从转移轨道进入李萨如轨道的机动 | Folta 2012 |
| quasi-halo | 围绕晕轨道的准周期环面（李萨如大振幅端） | Renk 2010、Folta 2014 |
| 高/低 z 幅值模式 | 环面上 z 幅值峰/谷的运行相位区 | Folta 2014 |
| osculating 李萨如六要素 | A1、A2、Ax、Az、Φxy、Φz | Renk 2010 |

## 相关概念

- [晕轨道（Halo Orbit）](/glossary/orbits/halo-orbit/)
- [近直线晕轨道（NRHO）](/glossary/orbits/nrho/)
- [Lyapunov 轨道（Lyapunov Orbit）](/glossary/orbits/lyapunov-orbit/)
- [准周期轨道（Quasi-Periodic Orbit, QPO）](/glossary/orbits/qpo/)
- [弱稳定边界转移轨道（Weak Stability Boundary Transfer Trajectory）](/glossary/orbits/weak-stability-boundary-transfer-trajectory/)

## 参考文献

- Canalias & Masdemont, 2008, Computing natural transfers between Sun–Earth and Earth–Moon Lissajous libration point orbits
- Renk et al., 2010, 李萨如轨道与 quasi-halo 轨道相关研究
- Alessi et al., 2010, Two-manoeuvres transfers between LEOs and Lissajous orbits in the Earth–Moon system
- Folta et al., 2010, Stationkeeping of Lissajous trajectories in the Earth-Moon system with applications to ARTEMIS
- Folta et al., 2012, ARTEMIS 转移与入轨相关研究
- Folta et al., 2014, Earth–Moon libration point orbit stationkeeping: theory, modeling, and operations
- Perozzi & Ferraz-Mello, 2010, 平动点轨道交会与避食的有效相位方法
- Qiao et al., 2025, 地月平动点轨道任务综述
