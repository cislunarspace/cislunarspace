---
title: 碰撞避免机动（Collision Avoidance Maneuver, CAM）
description: 为避免跟随者与领导者接近或碰撞而执行的主动机动。论文将碰撞避免约束嵌入MPC的二次规划框架，通过线性化将KOZ球面近似为切平面，以不等式约束形式表达。
keywords: 碰撞避免机动, Collision Avoidance Maneuver, CAM, CAM, 轨道动力学, 控制理论, 非线性控制, 最优控制
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
permalink: /glossary/dynamics/CAM/
---

# 碰撞避免机动（Collision Avoidance Maneuver, CAM）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

为避免跟随者与领导者接近或碰撞而执行的主动机动。论文将碰撞避免约束嵌入MPC的二次规划框架，通过线性化将KOZ球面近似为切平面，以不等式约束形式表达。

## 应用价值

为防止接近或碰撞而执行的主动机动，通过MPC二次规划框架嵌入碰撞避免约束，保证编队飞行安全。

## 相关概念

- [Chebyshev-Gauss-Lobatto点（Chebyshev-Gauss-Lobatto Points, CGL Points）](/glossary/dynamics/CGL点/)
- [低推力配点优化工具（Collocation with Optimization for Low-Thrust）](/glossary/dynamics/COLT/)
- [CLohessy-Wiltshire方程（Clohessy-Wiltshire Equations）](/glossary/dynamics/CW/)
- [Cauchy-Green张量（Cauchy-Green Tensor, CGT）](/glossary/dynamics/CGT/)

## 参考文献

- Capannolo 等 - 2023 - Model predictive control for formation reconfiguration exploiting quasi-periodic tori in the cislunar environment。
