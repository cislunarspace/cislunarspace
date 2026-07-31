---
title: 自适应步长（Adaptive Step Size）
description: ODE求解中根据预测值与校正值的误差自动调整步长的策略，在高非线性区域自动缩小步长以保证精度。
keywords: 自适应步长, Adaptive Step Size, , 轨道动力学, 三体问题, 平动点
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 自适应步长（Adaptive Step Size）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 自适应步长详解 | 术语定义
  description: ODE求解中根据预测值与校正值的误差自动调整步长的策略，在高非线性区域自动缩小步长以保证精度。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 自适应步长详解 | 术语定义
  description: ODE求解中根据预测值与校正值的误差自动调整步长的策略，在高非线性区域自动缩小步长以保证精度。
  image: /logo.png
permalink: /glossary/dynamics/adaptive-step-size/
---

# 自适应步长（Adaptive Step Size）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文来源：[地月空间入门指南](https://cislunarspace.cn)

## 定义

ODE求解中根据预测值与校正值的误差自动调整步长的策略，在高非线性区域自动缩小步长以保证精度。

## 应用价值

自适应步长在数值积分中根据局部误差自动调整步长，在保证计算精度的同时提高计算效率，轨道仿真软件普遍采用自适应步长算法。

## 相关概念

- [渐近解（Asymptotic Solution）](/glossary/dynamics/asymptotic-solution/)
- [近月点数据库（Perilune Database）](/glossary/dynamics/perilune-database/)
- [平动点轨道编目（Libration Point Orbit Cataloging）](/glossary/orbits/libration-point-orbit-cataloging/)
- [Floquet模态法（Floquet Modal Method）](/glossary/dynamics/floquet-modal-method/)

## 参考文献

- Kayama 等 - 2022
