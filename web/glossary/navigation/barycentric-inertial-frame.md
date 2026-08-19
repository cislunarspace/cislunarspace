---
title: 质心惯性坐标系（Barycentric Inertial Frame）
description: 以日地系统质心为原点的惯性参考系。将初始时刻的质心旋转坐标系固化形成：z轴沿黄道面法线，x轴由太阳指向地球的方向，y轴由右手定则确定。在此坐标系中，航天器的位置量级约为10^8 km，变化范围远大于质心旋转系，导致导航滤波精度较低。
keywords: 质心惯性坐标系, Barycentric Inertial Frame, 导航, 定位, 测控
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 质心惯性坐标系（Barycentric Inertial Frame）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 质心惯性坐标系详解 | 术语定义
  description: 以日地系统质心为原点的惯性参考系。将初始时刻的质心旋转坐标系固化形成：z轴沿黄道面法线，x轴由太阳指向地球的方向，y轴由右手定则确定。在此坐标系中，航天器的位置量级约为10^8 km，变化范围远大于质心旋转系，导致导航滤波精度较低。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 质心惯性坐标系详解 | 术语定义
  description: 以日地系统质心为原点的惯性参考系。将初始时刻的质心旋转坐标系固化形成：z轴沿黄道面法线，x轴由太阳指向地球的方向，y轴由右手定则确定。在此坐标系中，航天器的位置量级约为10^8 km，变化范围远大于质心旋转系，导致导航滤波精度较低。
  image: /logo.png
permalink: /glossary/navigation/barycentric-inertial-frame/
---

# 质心惯性坐标系（Barycentric Inertial Frame）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

以日地系统质心为原点的惯性参考系。将初始时刻的质心旋转坐标系固化形成：z轴沿黄道面法线，x轴由太阳指向地球的方向，y轴由右手定则确定。在此坐标系中，航天器的位置量级约为10^8 km，变化范围远大于质心旋转系，导致导航滤波精度较低。

## 应用价值

质心惯性坐标系为地月空间航天器提供自主定位能力，通过处理传感器量测数据实现对目标或自身的精确状态估计，是实现交会对接和轨道保持的关键技术。
针对质心惯性坐标系的深入研究有助于理解地月空间复杂动力学环境，为未来任务设计提供理论支撑和工程参考。
在实际任务中，需要结合数值仿真和解析方法对质心惯性坐标系进行分析验证，确保设计方案满足任务约束和性能指标。

## 相关概念

- 简化运动学法定轨（Simplified Kinematic Orbit Determination）
- 延迟量测融合（Delayed Measurement Fusion）
- 近程导航（Proximity Navigation）
- 速度增益制导（Velocity-to-be-Gained Guidance）

## 参考文献

- 赵书阁 等 - 2013 - 日地系统L2点Halo轨道自主天文导航及精度分析
