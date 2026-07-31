---
title: 截面强制精化（Section-Forced Refinement）
description: 将耦合RTBP连接轨道精化到JPL星历的一种分段处理方法。先不加约束地精化地月段到Poincaré截面，再用截面终点的位置坐标作为日地段的初始条件进行精化，使精化后的位置在截面处连续。该方法以截面位置连续为代价，换取各段可独立精化的便利，所得轨道在截面处仍需速度修正。
keywords: 截面强制精化, Section-Forced Refinement, 轨道力学, 三体问题, 非线性动力学, 轨道稳定性
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 截面强制精化（Section-Forced Refinement）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 截面强制精化详解 | 术语定义
  description: 将耦合RTBP连接轨道精化到JPL星历的一种分段处理方法。先不加约束地精化地月段到Poincaré截面，再用截面终点的位置坐标作为日地段的初始条件进行精化，使精化后的位置在截面处连续。该方法以截面位置连续为代价，换取各段可独立精化的便利，所得轨道在截面处仍需速度修正。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 截面强制精化详解 | 术语定义
  description: 将耦合RTBP连接轨道精化到JPL星历的一种分段处理方法。先不加约束地精化地月段到Poincaré截面，再用截面终点的位置坐标作为日地段的初始条件进行精化，使精化后的位置在截面处连续。该方法以截面位置连续为代价，换取各段可独立精化的便利，所得轨道在截面处仍需速度修正。
  image: /logo.png
permalink: /glossary/dynamics/section-forced-refinement/
---

# 截面强制精化（Section-Forced Refinement）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

将耦合RTBP连接轨道精化到JPL星历的一种分段处理方法。先不加约束地精化地月段到Poincaré截面，再用截面终点的位置坐标作为日地段的初始条件进行精化，使精化后的位置在截面处连续。该方法以截面位置连续为代价，换取各段可独立精化的便利，所得轨道在截面处仍需速度修正。

## 应用价值

截面强制精化是将耦合RTBP轨道转换到JPL星历坐标的分段方法。通过在Poincare截面处强制位置连续，可以将复杂的多体转移轨道分解为可独立精化的段落，降低数值求解的难度，是连接简化模型与真实星历模型的实用桥梁。

## 相关概念

- [雅可比常数（Jacobi Constant, JC）](/glossary/dynamics/jacobi-constant-jc/)
- [希尔区域（Hill Region）](/glossary/fundamentals/hill-region/)
- [庞加莱映射（Poincaré Map）](/glossary/dynamics/poincar-map/)
- [稳定性（Stability）](/glossary/dynamics/stability/)
## 参考文献

- Canalias and Masdemont, Acta Astronautica, 2008
