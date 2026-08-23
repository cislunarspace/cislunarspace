---
title: 通用任务分析工具（General Mission Analysis Tool, GMAT）
description: 美国国家航空航天局开发的高精度开源深空任务分析、轨道设计、动力学仿真与推进剂优化系统。
keywords: 通用任务分析工具, General Mission Analysis Tool, GMAT, other
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 通用任务分析工具（General Mission Analysis Tool, GMAT）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
permalink: /glossary/other/gmat/
---

# 通用任务分析工具（General Mission Analysis Tool, GMAT）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

通用任务分析工具（General Mission Analysis Tool, GMAT）是由美国国家航空航天局（NASA）戈达德太空飞行中心（GSFC）主导、联合全球工业界和学术界共同开发的一套大型开源航天任务仿真、高精度轨道传播、轨道确定与轨迹优化工程计算软件。

## 物理机制与工程价值

GMAT具备高保真度动力学建模能力与高度模块化的可扩展架构，是深空探测任务工程设计的工业级标杆工具：

1. 全尺度高保真力学环境建模：内置JPL高精度行星历表（DE405/DE421/DE430等）、超高阶地球与月球非球形引力场模型（如JGM-3、GRGM660PRIM）、太阳光压（SRP）模型、相对论引力修正以及大气阻力模型，能够精确反映地月空间及深空复杂引力摄动。
2. 强大的轨道导引与目标打靶引擎：GMAT集成了微分修正打靶算法（Differential Correction）、序列二次规划（SQP）非线性规划优化器（如VF13ad、SNOPT接口），能够高效处理多推力脉冲序列、停泊轨道入轨、月球捕获机动（LOI）及中途轨道修正（TCM）等复杂的有约束边值问题。
3. 空间工程实践检验：GMAT作为NASA官方核心工具，成功应用于月球勘测轨道飞行器（LRO）、磁层多尺度任务（MMS）、ARTEMIS地月空间探测以及OSIRIS-REx小行星采样返回等众多著名航天工程的实际轨道运行控制与全流程仿真验证。

## 相关概念

- [系统工具包（Systems Tool Kit, STK）](/glossary/other/stk/)
- [自适应轨迹设计（Adaptive Trajectory Design, ATD）](/glossary/other/atd/)
- [GRAIL重力场模型（GRAIL Gravity Field Model）](/glossary/observation/grgm660prim/)
- [参考轨道（Reference Orbit）](/glossary/navigation/reference-orbit/)

## 参考文献

- Hughes S P, Qureshi R H, Cooley D S, et al. General Mission Analysis Tool (GMAT) of NASA. *AIAA/AAS Astrodynamics Specialist Conference*, Toronto, Canada, 2010: AIAA 2010-8034.
- Folta D C, Pavlak T A, Howell K C, et al. Earth-Moon libration point orbit stationkeeping: theory, modeling, and operations. *Acta Astronautica*, 2014, 94(1): 421-433.
