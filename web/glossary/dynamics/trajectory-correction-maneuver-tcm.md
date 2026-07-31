---
title: 轨道修正机动（Trajectory Correction Maneuver, TCM）
description: 在转移轨道各关键节点执行的小型机动，用于修正初始入轨误差、PLSB执行误差等累计偏差。EPRM Type 3方案中安排了6次TCM：TLI后一天修正PLSB瞄准精度，PLSB前一天再次修正，PLSB后12小时修正PLSB产生的大误差，此后每次椭圆轨道远月点执行TCM修正前序机动误差。EPRM的优势在于月球轨道段长达数周
keywords: 轨道修正机动, Trajectory Correction Maneuver, TCM, TCM, 轨道动力学, 三体问题, 平动点
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 轨道修正机动（Trajectory Correction Maneuver, TCM）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 轨道修正机动详解 | 术语定义
  description: 在转移轨道各关键节点执行的小型机动，用于修正初始入轨误差、PLSB执行误差等累计偏差。EPRM Type 3方案中安排了6次TCM：TLI后一天修正PLSB瞄准精度，PLSB前一天再次修正，PLSB后12小时修正PLSB产生的大误差，此后每次椭圆轨道远月点执行TCM修正前序机动误差。EPRM的优势在于月球轨道段长达数周
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 轨道修正机动详解 | 术语定义
  description: 在转移轨道各关键节点执行的小型机动，用于修正初始入轨误差、PLSB执行误差等累计偏差。EPRM Type 3方案中安排了6次TCM：TLI后一天修正PLSB瞄准精度，PLSB前一天再次修正，PLSB后12小时修正PLSB产生的大误差，此后每次椭圆轨道远月点执行TCM修正前序机动误差。EPRM的优势在于月球轨道段长达数周
  image: /logo.png
permalink: /glossary/dynamics/trajectory-correction-maneuver-tcm/
---

# 轨道修正机动（Trajectory Correction Maneuver, TCM）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文来源：[地月空间入门指南](https://cislunarspace.cn)

## 定义

在转移轨道各关键节点执行的小型机动，用于修正初始入轨误差、PLSB执行误差等累计偏差。EPRM Type 3方案中安排了6次TCM：TLI后一天修正PLSB瞄准精度，PLSB前一天再次修正，PLSB后12小时修正PLSB产生的大误差，此后每次椭圆轨道远月点执行TCM修正前序机动误差。EPRM的优势在于月球轨道段长达数周，为多次TCM提供了充裕时间窗口，可将到达NRHO时的位置误差降至约30公里。

## 应用价值

轨道修正机动在各关键节点修正累计偏差，EPRM Type 3方案安排6次TCM将到达NRHO时的位置误差降至约30公里，保证对接任务的成功率。

## 相关概念

- [渐近解（Asymptotic Solution）](/glossary/dynamics/asymptotic-solution/)
- [近月点数据库（Perilune Database）](/glossary/dynamics/perilune-database/)
- [平动点轨道编目（Libration Point Orbit Cataloging）](/glossary/orbits/libration-point-orbit-cataloging/)
- [Floquet模态法（Floquet Modal Method）](/glossary/dynamics/floquet-modal-method/)

## 参考文献

- Kikuchi et al., 2024
