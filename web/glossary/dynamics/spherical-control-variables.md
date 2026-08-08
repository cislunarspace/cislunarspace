---
title: 球面控制变量（Spherical Control Variables）
description: 将推力矢量用幅值 T 和两个方向角（方位角 α、仰角 β）三个标量来参数化的方式。在 CRTBP 小推力优化中，球面控制 u=[T, α, β]ᵀ 通过径向-横向-法向（RSW）坐标基转换为笛卡尔推力分量。这种参数化将推力大小与方向解耦：幅值的约束边界简单（0≤T≤T_max），方向角的信赖域缩放独立于幅值。当速度矢量
keywords: 球面控制变量, Spherical Control Variables, 轨道力学, 姿态控制, 相对运动
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 球面控制变量（Spherical Control Variables）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 球面控制变量详解 | 术语定义
  description: 将推力矢量用幅值 T 和两个方向角（方位角 α、仰角 β）三个标量来参数化的方式。在 CRTBP 小推力优化中，球面控制 u=[T, α, β]ᵀ 通过径向-横向-法向（RSW）坐标基转换为笛卡尔推力分量。这种参数化将推力大小与方向解耦：幅值的约束边界简单（0≤T≤T_max），方向角的信赖域缩放独立于幅值。当速度矢量
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 球面控制变量详解 | 术语定义
  description: 将推力矢量用幅值 T 和两个方向角（方位角 α、仰角 β）三个标量来参数化的方式。在 CRTBP 小推力优化中，球面控制 u=[T, α, β]ᵀ 通过径向-横向-法向（RSW）坐标基转换为笛卡尔推力分量。这种参数化将推力大小与方向解耦：幅值的约束边界简单（0≤T≤T_max），方向角的信赖域缩放独立于幅值。当速度矢量
  image: /logo.png
permalink: /glossary/dynamics/spherical-control-variables/
---

# 球面控制变量（Spherical Control Variables）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

将推力矢量用幅值 T 和两个方向角（方位角 α、仰角 β）三个标量来参数化的方式。在 CRTBP 小推力优化中，球面控制 u=[T, α, β]ᵀ 通过径向-横向-法向（RSW）坐标基转换为笛卡尔推力分量。这种参数化将推力大小与方向解耦：幅值的约束边界简单（0≤T≤T_max），方向角的信赖域缩放独立于幅值。当速度矢量与位置矢量共线导致 RSW 坐标系退化时，可切换为笛卡尔控制变量。

## 应用价值

该动力学概念在地月空间任务设计、分析和控制中具有重要作用，掌握其特性有助于优化轨道方案、降低任务燃料消耗、提高任务成功率。

## 相关概念

- 逆行（Retrograde Motion）
- [绝对相位偏置（Absolute Phase Bias）](/glossary/dynamics/absolute-phase-bias/)
- 相对姿态四元数（Relative Attitude Quaternion）
- 径向-切向-法向坐标系（Radial-Tangential-Normal Coordinate System, RTN）

## 参考文献

- Aziz et al. 2019, JGCD
