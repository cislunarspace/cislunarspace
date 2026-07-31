---
title: 控制加权平均覆盖率（Control Weighted Average Coverage）
description: 论文提出的覆盖率指标，在平均覆盖率基础上加入控制量权重。定义为沿目标轨迹的控制历史向量与检测历史向量的点积除以控制量总和。该指标优先保证目标在机动（高推力）时段被观测覆盖，对应SDA架构对航天器变轨机动的监测需求。
keywords: 控制加权平均覆盖率, Control Weighted Average Coverage, 观测, 雷达, SAR
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 控制加权平均覆盖率（Control Weighted Average Coverage）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 控制加权平均覆盖率详解 | 术语定义
  description: 论文提出的覆盖率指标，在平均覆盖率基础上加入控制量权重。定义为沿目标轨迹的控制历史向量与检测历史向量的点积除以控制量总和。该指标优先保证目标在机动（高推力）时段被观测覆盖，对应SDA架构对航天器变轨机动的监测需求。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 控制加权平均覆盖率详解 | 术语定义
  description: 论文提出的覆盖率指标，在平均覆盖率基础上加入控制量权重。定义为沿目标轨迹的控制历史向量与检测历史向量的点积除以控制量总和。该指标优先保证目标在机动（高推力）时段被观测覆盖，对应SDA架构对航天器变轨机动的监测需求。
  image: /logo.png
permalink: /glossary/observation/control-weighted-average-coverage/
---

# 控制加权平均覆盖率（Control Weighted Average Coverage）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

论文提出的覆盖率指标，在平均覆盖率基础上加入控制量权重。定义为沿目标轨迹的控制历史向量与检测历史向量的点积除以控制量总和。该指标优先保证目标在机动（高推力）时段被观测覆盖，对应SDA架构对航天器变轨机动的监测需求。

## 应用价值

基于该术语在定义中描述的功能或性质，该术语在地月空间任务设计、分析与控制中具有重要应用价值。在轨道设计阶段，可利用相关动力学特性进行转移轨道优化；在导航与控制中，可用于提高任务执行的精度和可靠性；在系统分析中，有助于深入理解复杂的多体动力学行为，指导任务方案论证和风险评估。

## 相关概念

- [指向方向（Pointing Direction）](/glossary/observation/pointing-direction/)
- [地月碎片雷达（Cislunar Debris Radar）](/glossary/observation/cislunar-debris-radar/)
- [陨石坑检测（Crater Detection）](/glossary/observation/crater-detection/)
- [定轨弧长（Orbit Determination Arc Length）](/glossary/observation/orbit-determination-arc-length/)

## 参考文献

- Klonowski 等 - 2024 - Cislunar space domain awareness architecture design and analysis for cooperative agents
