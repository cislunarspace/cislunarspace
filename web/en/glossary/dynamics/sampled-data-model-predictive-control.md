---
title: Sampled-Data Model Predictive Control
description: A control method combining sampled-data theory with model predictive control. Unlike standard MPC, it explicitly accounts for the digital nature of sensing and actuation (measurements available only a...
keywords: Sampled-Data Model Predictive Control
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Sampled-Data Model Predictive Control
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Sampled-Data Model Predictive Control Explained | Term Definition
  description: A control method combining sampled-data theory with model predictive control. Unlike standard MPC, it explicitly accounts for the digital nature of sensing and actuation (measurements available only a...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Sampled-Data Model Predictive Control Explained | Term Definition
  description: A control method combining sampled-data theory with model predictive control. Unlike standard MPC, it explicitly accounts for the digital nature of sensing and actuation (measurements available only a...
  image: /logo.png
permalink: /en/glossary/dynamics/sampled-data-model-predictive-control/
---
# Sampled-Data Model Predictive Control

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A control method combining sampled-data theory with model predictive control. Unlike standard MPC, it explicitly accounts for the digital nature of sensing and actuation (measurements available only at sampling instants, control piecewise constant between them), using the sampled-data equivalent model as prediction model to guarantee closed-loop stability and recursive feasibility within finite prediction horizons.


## Application Value

该方法显式考虑了数字控制系统中测量与控制的离散采样特性，能够在有限预测时域内保证闭环稳定性，适合地月空间航天器的姿态与轨道控制。


## References

- Elobaid et al. 2022

