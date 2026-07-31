---
title: 相对姿态四元数（Relative Attitude Quaternion）
description: 描述追踪器本体坐标系与LVLH坐标系之间相对姿态的四元数。论文采用q=[cos(θ/2), e·sin(θ/2)]形式，e为欧拉旋转特征轴，θ为绕该轴的转角。通过四元数微分方程与相对角速度耦合。
keywords: 相对姿态四元数, Relative Attitude Quaternion, 轨道力学, 姿态控制, 相对运动
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 相对姿态四元数（Relative Attitude Quaternion）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 相对姿态四元数详解 | 术语定义
  description: 描述追踪器本体坐标系与LVLH坐标系之间相对姿态的四元数。论文采用q=[cos(θ/2), e·sin(θ/2)]形式，e为欧拉旋转特征轴，θ为绕该轴的转角。通过四元数微分方程与相对角速度耦合。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 相对姿态四元数详解 | 术语定义
  description: 描述追踪器本体坐标系与LVLH坐标系之间相对姿态的四元数。论文采用q=[cos(θ/2), e·sin(θ/2)]形式，e为欧拉旋转特征轴，θ为绕该轴的转角。通过四元数微分方程与相对角速度耦合。
  image: /logo.png
permalink: /glossary/dynamics/relative-attitude-quaternion/
---

# 相对姿态四元数（Relative Attitude Quaternion）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

描述追踪器本体坐标系与LVLH坐标系之间相对姿态的四元数。论文采用q=[cos(θ/2), e·sin(θ/2)]形式，e为欧拉旋转特征轴，θ为绕该轴的转角。通过四元数微分方程与相对角速度耦合。

## 应用价值

该动力学概念在地月空间任务设计、分析和控制中具有重要作用，掌握其特性有助于优化轨道方案、降低任务燃料消耗、提高任务成功率。

## 相关概念

- [逆行（Retrograde Motion）](/glossary/dynamics/retrograde-motion/)
- [绝对相位偏置（Absolute Phase Bias）](/glossary/dynamics/absolute-phase-bias/)
- [径向-切向-法向坐标系（Radial-Tangential-Normal Coordinate System, RTN）](/glossary/dynamics/radial-tangential-normal-coordinate-system-rtn/)
- [帕累托前沿（Pareto Front）](/glossary/dynamics/pareto-front/)

## 参考文献

- https://doi.org/10.1007/s10569-021-10041-3
