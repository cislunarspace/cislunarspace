---
title: 导航更新间隔（Navigation Update Interval）
description: 两次导航测量之间的时间间隔。在地月空间连续推力轨道保持中，导航系统不能提供实时状态信息，典型间隔为两天。导航更新间隔直接影响线性化动力学模型的误差累积程度：间隔越长，模型误差越大。对近直线晕轨道，缩短导航间隔（如从两天减至六小时）可显著提高保持成功率，表明线性化模型误差是导致9:2 NRHO保持失败的关键因素。
keywords: 导航更新间隔, Navigation Update Interval, 导航, 轨道确定, 测距
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 导航更新间隔（Navigation Update Interval）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 导航更新间隔详解 | 术语定义
  description: 两次导航测量之间的时间间隔。在地月空间连续推力轨道保持中，导航系统不能提供实时状态信息，典型间隔为两天。导航更新间隔直接影响线性化动力学模型的误差累积程度：间隔越长，模型误差越大。对近直线晕轨道，缩短导航间隔（如从两天减至六小时）可显著提高保持成功率，表明线性化模型误差是导致9:2 NRHO保持失败的关键因素。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 导航更新间隔详解 | 术语定义
  description: 两次导航测量之间的时间间隔。在地月空间连续推力轨道保持中，导航系统不能提供实时状态信息，典型间隔为两天。导航更新间隔直接影响线性化动力学模型的误差累积程度：间隔越长，模型误差越大。对近直线晕轨道，缩短导航间隔（如从两天减至六小时）可显著提高保持成功率，表明线性化模型误差是导致9:2 NRHO保持失败的关键因素。
  image: /logo.png
permalink: /glossary/navigation/navigation-update-interval/
---

# 导航更新间隔（Navigation Update Interval）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文来源：Zhang and Wang 2022 Continuous-thrust station-keeping of cis-lunar orbits using optimal sliding mode control with practical constraints
>
> 站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

两次导航测量之间的时间间隔。在地月空间连续推力轨道保持中，导航系统不能提供实时状态信息，典型间隔为两天。导航更新间隔直接影响线性化动力学模型的误差累积程度：间隔越长，模型误差越大。对近直线晕轨道，缩短导航间隔（如从两天减至六小时）可显著提高保持成功率，表明线性化模型误差是导致9:2 NRHO保持失败的关键因素。

## 应用价值

该术语在地月空间任务中具有重要应用价值。在轨道设计阶段，工程师利用相关理论进行轨迹优化；在导航与轨道确定中，用于提升测量精度；在姿态控制与轨道保持任务中，确保航天器稳定运行。具体应用中，可结合任务需求进行参数优化和算法适配，提高任务成功率和资源利用效率。

## 相关概念

- 特征指数（Characteristic Exponents）
- 捕获对接段（Capture Docking Phase）
- 月球借力转移（Lunar Flyby Transfer）

## 参考文献

- Zhang and Wang 2022 Continuous-thrust station-keeping of cis-lunar orbits using optimal sliding mode control with practical constraints
