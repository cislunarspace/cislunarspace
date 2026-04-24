---
title: 太空交通管控(STM)
description: 详细解析太空交通管控(Space Traffic Management, STM)的概念、关键技术领域（空间态势感知、碰撞风险评估、智能规避决策）及其在日益拥挤的轨道环境中的重要性
keywords: 太空交通管控, STM, 空间态势感知, 碰撞风险, 轨道预报, 大气密度探测, 天路生成
author: 天疆说
date: 2026-04-24
lastUpdated: 2026-04-24
wechatShare:
  title: 太空交通管控(STM)
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 太空交通管控(STM)详解 | 空间安全与治理
  description: 详细解析太空交通管控的概念、关键技术领域及其在日益拥挤的轨道环境中的重要性
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 太空交通管控(STM)详解 | 空间安全与治理
  description: 详细解析太空交通管控的概念、关键技术领域及其在日益拥挤的轨道环境中的重要性
  image: /logo.png
permalink: /glossary/space-traffic-management/
---

# 太空交通管控（STM）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

太空交通管控（Space Traffic Management，STM）是一套覆盖空间物体感知、轨道预测、碰撞风险评估、规避决策与协同执行的管理体系和技术体系，旨在确保日益拥挤的轨道环境中的太空活动安全和可持续性。

STM 的概念类比于空中交通管理（Air Traffic Management, ATM），但由于轨道动力学的高度非线性、摄动来源的多样性（大气阻力、太阳辐射压、第三体引力等）以及空间中缺乏类似地面雷达网的全球覆盖感知手段，其技术复杂性远超空中交通管理。

## 关键组成

### 空间态势感知（Space Situational Awareness, SSA）

SSA 是 STM 的感知层，负责探测、跟踪和编目轨道上的空间物体（包括航天器、火箭残骸和碎片）。主要技术手段包括：

- **地基雷达**：提供低轨目标的例行跟踪，在 1,000 km 以下轨道具有较好的覆盖和精度。
- **天基光学传感器**：部署于中高轨道或地球同步轨道，对深空碎片和同步轨道物体进行光学探测与定轨，可弥补地基雷达的覆盖盲区。
- **星间协同观测**：利用多颗卫星构建天基立体观测网络，实现多角度同步精密跟踪。

当前，美国空间监视网（SSN）编目的在轨物体超过 30,000 个（大于 10 cm），而大于 1 cm 的不可跟踪碎片估计超过百万个。

### 大气密度高精度探测与模型

低轨空间物体的轨道衰减主要由大气阻力决定，而大气阻力的计算依赖于高层大气密度的精确已知度。

传统大气模型（如 NRLMSISE-00、JB2008）在中等地磁活动下对大气密度的短期预测误差约为 15%-30%，在磁暴期间误差可超过 100%。新一代多星多源协同探测方案通过低轨星座中众多卫星的在轨加速度计和 GNSS 精密定轨数据，结合机器学习方法进行同化反演，可使大气密度的短期预报精度显著提升，进而提高轨道预报和碰撞概率计算的可靠性。

### 轨道预报与碰撞风险评估

在精确感知和大气建模的基础上，STM 需要对所有编目物体进行中短期（1-7 天）高精度轨道预报，并在预测接近事件（Conjunction Event）发生时进行碰撞概率（Probability of Collision, $P_c$）计算。

典型的碰撞规避决策流程为：$P_c$ > 红色阈值（如 $10^{-4}$）→ 生成规避方案 → 评估机动代价（消耗推进剂及任务影响）→ **协同决策**（哪一方执行机动）→ 执行规避机动 → 事后评估。

### 动态"天路"生成

在大型星座密集部署的场景下，已有研究提出"天路"（Space Roads 或 Orbital Slots）的概念——即为批量部署的卫星星座预先设计动态的、有保护的轨道分离走廊，以减少频繁的碰撞规避机动和维持轨道构型的燃料消耗。本质上，"天路"的生成是一个大规模的约束优化问题，需在轨道力学约束、任务需求约束、燃料预算和碰撞安全裕度之间进行多目标权衡。

## 复杂环境下的挑战

- **空间天气事件**：强烈的太阳风暴和地磁暴会引发高层大气密度的剧烈扰动（有时在数小时内增大数十倍），使低轨目标的轨道呈爆发式衰减，大幅增加碰撞概率计算的不确定性。
- **巨型星座的互干扰**：数万颗卫星组成的巨型星座不仅增加了在轨目标密度，也因其频繁的轨道机动而引入了不可预测的轨道偏差，对常规 STM 体系构成"维度挑战"。
- **国际协调与规范**：STM 的有效实施依赖于国际规则和技术标准的建立，而目前在规避责任分配、数据共享协议等方面尚缺乏统一的国际法律框架。

## 相关概念

- [地月空间时空基准](/glossary/cislunar-spatiotemporal-reference/)
- [远距离逆行轨道（DRO）](/glossary/dro/)
- [近直线晕轨道（NRHO）](/glossary/nrho/)

## 参考文献

- 2026年宇航领域科学问题和技术难题发布, 中国航天大会 (CSC2026), 2026.
- Ailor W H, Patera R P. Space traffic management[C]. IAC, 2018.
- Emmert J T, et al. NRLMSIS 2.0: A whole-atmosphere empirical model of temperature and neutral species densities[J]. Earth and Space Science, 2021.
- Bussy-Virat C D, et al. Effects of uncertain atmospheric density on collision probability[J]. Journal of Spacecraft and Rockets, 2018.
