---
title: 碰撞避免机动（Collision Avoidance Maneuver, CAM）
description: 为避免跟随者与领导者接近或碰撞而执行的主动机动。论文将碰撞避免约束嵌入MPC的二次规划框架，通过线性化将KOZ球面近似为切平面，以不等式约束形式表达。
keywords: 碰撞避免机动, Collision Avoidance Maneuver, CAM, CAM, 动力学, 摄动, 轨道
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 碰撞避免机动（Collision Avoidance Maneuver, CAM）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 碰撞避免机动详解 | 术语定义
  description: 为避免跟随者与领导者接近或碰撞而执行的主动机动。论文将碰撞避免约束嵌入MPC的二次规划框架，通过线性化将KOZ球面近似为切平面，以不等式约束形式表达。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 碰撞避免机动详解 | 术语定义
  description: 为避免跟随者与领导者接近或碰撞而执行的主动机动。论文将碰撞避免约束嵌入MPC的二次规划框架，通过线性化将KOZ球面近似为切平面，以不等式约束形式表达。
  image: /logo.png
permalink: /glossary/dynamics/collision-avoidance-maneuver-cam/
---

# 碰撞避免机动（Collision Avoidance Maneuver, CAM）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

为避免跟随者与领导者接近或碰撞而执行的主动机动。论文将碰撞避免约束嵌入MPC的二次规划框架，通过线性化将KOZ球面近似为切平面，以不等式约束形式表达。

## 应用价值

基于该术语在定义中描述的功能或性质，该术语在地月空间任务设计、分析与控制中具有重要应用价值。在轨道设计阶段，可利用相关动力学特性进行转移轨道优化；在导航与控制中，可用于提高任务执行的精度和可靠性；在系统分析中，有助于深入理解复杂的多体动力学行为，指导任务方案论证和风险评估。

## 相关概念

- [J2不变量轨道（J2-Invariant Orbit）](/glossary/dynamics/j2-invariant-orbit/)
- [内点法优化（Interior Point Optimization）](/glossary/dynamics/interior-point-optimization/)
- [n体动力学（N-Body Dynamics）](/glossary/dynamics/n-body-dynamics/)
- [始末状态约束（Start-End State Constraint）](/glossary/dynamics/start-end-state-constraint/)

## 参考文献

- Capannolo 等 - 2023 - Model predictive control for formation reconfiguration exploiting quasi-periodic tori in the cislunar environment
