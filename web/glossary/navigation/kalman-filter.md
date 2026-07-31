---
title: 卡尔曼滤波（Kalman Filter）
description: 基于状态空间模型的最优递推估计算法，通过「预测-更新」循环将系统动力学模型的先验估计与观测数据的量测信息融合，以最小均方误差准则递推估计系统状态。论文指出卡尔曼滤波是组合导航中应用最为成熟的信息融合算法，可用于天文导航中结合轨道动力学模型和光学敏感器观测估计地月空间航天器的轨道状态量。刘付成等利用恒星光行差效应建立观测
keywords: 卡尔曼滤波, Kalman Filter, KF, 导航, 轨道确定
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 卡尔曼滤波（Kalman Filter）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 卡尔曼滤波详解 | 术语定义
  description: 基于状态空间模型的最优递推估计算法，通过「预测-更新」循环将系统动力学模型的先验估计与观测数据的量测信息融合，以最小均方误差准则递推估计系统状态。论文指出卡尔曼滤波是组合导航中应用最为成熟的信息融合算法，可用于天文导航中结合轨道动力学模型和光学敏感器观测估计地月空间航天器的轨道状态量。刘付成等利用恒星光行差效应建立观测
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 卡尔曼滤波详解 | 术语定义
  description: 基于状态空间模型的最优递推估计算法，通过「预测-更新」循环将系统动力学模型的先验估计与观测数据的量测信息融合，以最小均方误差准则递推估计系统状态。论文指出卡尔曼滤波是组合导航中应用最为成熟的信息融合算法，可用于天文导航中结合轨道动力学模型和光学敏感器观测估计地月空间航天器的轨道状态量。刘付成等利用恒星光行差效应建立观测
  image: /logo.png
permalink: /glossary/navigation/kalman-filter/
---

# 卡尔曼滤波（Kalman Filter）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文来源：丛佃伟 等 - 2025 - 地月空间航天器自主导航技术及研究进展
>
> 站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

基于状态空间模型的最优递推估计算法，通过「预测-更新」循环将系统动力学模型的先验估计与观测数据的量测信息融合，以最小均方误差准则递推估计系统状态。论文指出卡尔曼滤波是组合导航中应用最为成熟的信息融合算法，可用于天文导航中结合轨道动力学模型和光学敏感器观测估计地月空间航天器的轨道状态量。刘付成等利用恒星光行差效应建立观测模型，结合卡尔曼滤波实现位置误差小于3千米、速度误差小于0.2米每秒（1倍RMS）的导航精度。

## 应用价值

该术语在地月空间任务中具有重要应用价值。在轨道设计阶段，工程师利用相关理论进行轨迹优化；在导航与轨道确定中，用于提升测量精度；在姿态控制与轨道保持任务中，确保航天器稳定运行。具体应用中，可结合任务需求进行参数优化和算法适配，提高任务成功率和资源利用效率。

## 相关概念

- [特征指数（Characteristic Exponents）](/glossary/dynamics/characteristic-exponents/)
- [捕获对接段（Capture Docking Phase）](/glossary/navigation/capture-docking-phase/)
- [月球借力转移（Lunar Flyby Transfer）](/glossary/orbits/lunar-flyby-transfer/)

## 参考文献

- 丛佃伟 等 - 2025 - 地月空间航天器自主导航技术及研究进展
