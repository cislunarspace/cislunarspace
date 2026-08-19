---
title: 近月点数据库（Perilune Database）
description: 通过蒙特卡洛轨迹射击法构建的轨迹段数据集，存储从不同出发条件到达近月点时的航天器状态矢量、施加脉冲前后的速度变化、以及近月点高度和速度方向等特征信息。数据库条目通过近月点高度、速度方向和地月轨道面距离等条件进行匹配，是轨迹拼接的核心数据源。
keywords: 近月点数据库, Perilune Database, , 轨道动力学, 三体问题, 平动点
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 近月点数据库（Perilune Database）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 近月点数据库详解 | 术语定义
  description: 通过蒙特卡洛轨迹射击法构建的轨迹段数据集，存储从不同出发条件到达近月点时的航天器状态矢量、施加脉冲前后的速度变化、以及近月点高度和速度方向等特征信息。数据库条目通过近月点高度、速度方向和地月轨道面距离等条件进行匹配，是轨迹拼接的核心数据源。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 近月点数据库详解 | 术语定义
  description: 通过蒙特卡洛轨迹射击法构建的轨迹段数据集，存储从不同出发条件到达近月点时的航天器状态矢量、施加脉冲前后的速度变化、以及近月点高度和速度方向等特征信息。数据库条目通过近月点高度、速度方向和地月轨道面距离等条件进行匹配，是轨迹拼接的核心数据源。
  image: /logo.png
permalink: /glossary/dynamics/perilune-database/
---

# 近月点数据库（Perilune Database）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文来源：[地月空间入门指南](https://cislunarspace.cn)

## 定义

通过蒙特卡洛轨迹射击法构建的轨迹段数据集，存储从不同出发条件到达近月点时的航天器状态矢量、施加脉冲前后的速度变化、以及近月点高度和速度方向等特征信息。数据库条目通过近月点高度、速度方向和地月轨道面距离等条件进行匹配，是轨迹拼接的核心数据源。

## 应用价值

近月点数据库存储大量蒙特卡洛轨迹射击结果，航天器轨迹规划时可直接查询匹配条件下的状态矢量，快速获得近月点高度、速度方向等关键参数，实现轨迹段的高效拼接。

## 相关概念

- 渐近解（Asymptotic Solution）
- 非轴对称卫星（Non-axisymmetric Satellite）
- [平动点轨道编目（Libration Point Orbit Cataloging）](/glossary/orbits/libration-point-periodic-orbit/)
- [Floquet模态法（Floquet Modal Method）](/glossary/dynamics/floquet-modal-method/)

## 参考文献

- Peng et al. 2024, AIAA Journal of Spacecraft and Rockets, doi:10.2514/1.A35623
