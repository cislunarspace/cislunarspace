---
title: 控制加速度（Control Acceleration）
description: 连续推力作用下单位质量所产生的加速度，作为轨道维持的控制输入量。论文中控制输入向量 U=[U_x, U_y, U_z]^T 的物理意义即为三轴控制加速度，通过输入矩阵 B=[0_{3x3}; I_{3x3}]^T 叠加到动力学方程的速度分量上。仿真结果显示控制加速度最大值出现在初始时刻，三轴分别约为 10^{-7} m
keywords: 控制加速度, Control Acceleration, 轨道设计, 周期轨道, 晕轨道
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 控制加速度（Control Acceleration）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 控制加速度详解 | 术语定义
  description: 连续推力作用下单位质量所产生的加速度，作为轨道维持的控制输入量。论文中控制输入向量 U=[U_x, U_y, U_z]^T 的物理意义即为三轴控制加速度，通过输入矩阵 B=[0_{3x3}; I_{3x3}]^T 叠加到动力学方程的速度分量上。仿真结果显示控制加速度最大值出现在初始时刻，三轴分别约为 10^{-7} m
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 控制加速度详解 | 术语定义
  description: 连续推力作用下单位质量所产生的加速度，作为轨道维持的控制输入量。论文中控制输入向量 U=[U_x, U_y, U_z]^T 的物理意义即为三轴控制加速度，通过输入矩阵 B=[0_{3x3}; I_{3x3}]^T 叠加到动力学方程的速度分量上。仿真结果显示控制加速度最大值出现在初始时刻，三轴分别约为 10^{-7} m
  image: /logo.png
permalink: /glossary/orbits/control-acceleration/
---

# 控制加速度（Control Acceleration）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

连续推力作用下单位质量所产生的加速度，作为轨道维持的控制输入量。论文中控制输入向量 U=[U_x, U_y, U_z]^T 的物理意义即为三轴控制加速度，通过输入矩阵 B=[0_{3x3}; I_{3x3}]^T 叠加到动力学方程的速度分量上。仿真结果显示控制加速度最大值出现在初始时刻，三轴分别约为 10^{-7} m/s^2 量级，收敛后趋于零。

## 应用价值

该类轨道在月球任务选址和空间站部署中具有重要应用价值，为航天器提供稳定的驻留环境和有利的任务几何。

## 相关概念

- [共谐共振周期轨道（Synodic Resonant Periodic Orbit）](/glossary/orbits/synodic-resonant-periodic-orbit/)
- [晕轨道幅值（Halo Orbit Amplitude）](/glossary/orbits/halo-orbit-amplitude/)
- [近直线晕轨道（Near-Rectilinear Halo Orbit）](/glossary/orbits/near-rectilinear-halo-orbit/)
- [轨道稳定度（Orbital Stability Index）](/glossary/orbits/orbital-stability-index/)

## 参考文献

- 徐明和徐世杰 - 2008 - Halo轨道维持的线性周期控制策略
