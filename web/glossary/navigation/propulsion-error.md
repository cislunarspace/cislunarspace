---
title: 推进误差（Propulsion Error）
description: 实际推力输出相对于指令推力的偏差。产生原因包括推力器制造公差、喷管磨损、推进剂供应波动等。在轨道保持蒙特卡洛仿真中，推进误差通常按正态分布建模，幅值取指令推力的百分之二。推进误差与导航误差、发动机约束共同构成轨道保持的实际约束，对近直线晕轨道的保持成功率影响显著。
keywords: 推进误差, Propulsion Error, 导航, 定位, 测控
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 推进误差（Propulsion Error）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 推进误差详解 | 术语定义
  description: 实际推力输出相对于指令推力的偏差。产生原因包括推力器制造公差、喷管磨损、推进剂供应波动等。在轨道保持蒙特卡洛仿真中，推进误差通常按正态分布建模，幅值取指令推力的百分之二。推进误差与导航误差、发动机约束共同构成轨道保持的实际约束，对近直线晕轨道的保持成功率影响显著。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 推进误差详解 | 术语定义
  description: 实际推力输出相对于指令推力的偏差。产生原因包括推力器制造公差、喷管磨损、推进剂供应波动等。在轨道保持蒙特卡洛仿真中，推进误差通常按正态分布建模，幅值取指令推力的百分之二。推进误差与导航误差、发动机约束共同构成轨道保持的实际约束，对近直线晕轨道的保持成功率影响显著。
  image: /logo.png
permalink: /glossary/navigation/propulsion-error/
---

# 推进误差（Propulsion Error）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

实际推力输出相对于指令推力的偏差。产生原因包括推力器制造公差、喷管磨损、推进剂供应波动等。在轨道保持蒙特卡洛仿真中，推进误差通常按正态分布建模，幅值取指令推力的百分之二。推进误差与导航误差、发动机约束共同构成轨道保持的实际约束，对近直线晕轨道的保持成功率影响显著。

## 应用价值

推进误差为地月空间航天器提供自主定位能力，通过处理传感器量测数据实现对目标或自身的精确状态估计，是实现交会对接和轨道保持的关键技术。
在实际导航系统中，推进误差直接影响定位精度和收敛速度，需要根据任务需求选择合适的算法参数和滤波策略。
在实际任务中，需要结合数值仿真和解析方法对推进误差进行分析验证，确保设计方案满足任务约束和性能指标。

## 相关概念

- 简化运动学法定轨（Simplified Kinematic Orbit Determination）
- 延迟量测融合（Delayed Measurement Fusion）
- 近程导航（Proximity Navigation）
- 速度增益制导（Velocity-to-be-Gained Guidance）

## 参考文献

- Zhang and Wang 2022 Continuous-thrust station-keeping of cis-lunar orbits using optimal sliding mode control with practical constraints
