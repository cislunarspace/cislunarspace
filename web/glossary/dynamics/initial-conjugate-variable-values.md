---
title: 共轭变量初值（Initial Conjugate Variable Values）
description: 两点边值问题中未知的共轭变量在初始时刻的取值。论文中共轭变量初值有七个（lambda1至lambda7），其中前六个分别对应三个速度和三个位置状态变量，第七个对应质量状态变量。这些初值无法由初始条件直接确定，必须通过扫描法参数优化来求解。一旦获得共轭变量初值，与已知的状态变量初值一起，对状态方程和共轭方程进行实时积分即
keywords: 轨道, 动力学, 控制, 稳定性
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 共轭变量初值（Initial Conjugate Variable Values）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 共轭变量初值详解 | 术语定义
  description: 两点边值问题中未知的共轭变量在初始时刻的取值。论文中共轭变量初值有七个（lambda1至lambda7），其中前六个分别对应三个速度和三个位置状态变量，第七个对应质量状态变量。这些初值无法由初始条件直接确定，必须通过扫描法参数优化来求解。一旦获得共轭变量初值，与已知的状态变量初值一起，对状态方程和共轭方程进行实时积分即
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 共轭变量初值详解 | 术语定义
  description: 两点边值问题中未知的共轭变量在初始时刻的取值。论文中共轭变量初值有七个（lambda1至lambda7），其中前六个分别对应三个速度和三个位置状态变量，第七个对应质量状态变量。这些初值无法由初始条件直接确定，必须通过扫描法参数优化来求解。一旦获得共轭变量初值，与已知的状态变量初值一起，对状态方程和共轭方程进行实时积分即
  image: /logo.png
permalink: /glossary/dynamics/initial-conjugate-variable-values/
---

# 共轭变量初值（Initial Conjugate Variable Values）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

两点边值问题中未知的共轭变量在初始时刻的取值。论文中共轭变量初值有七个（lambda1至lambda7），其中前六个分别对应三个速度和三个位置状态变量，第七个对应质量状态变量。这些初值无法由初始条件直接确定，必须通过扫描法参数优化来求解。一旦获得共轭变量初值，与已知的状态变量初值一起，对状态方程和共轭方程进行实时积分即可实现软着陆最优制导。

## 应用价值

该理论为轨道设计提供了数学基础，可用于分析航天器在引力场中的运动特性。

## 相关概念

- [L4（L4）](/glossary/dynamics/l4/)
- 轨道内分量（In-Plane）
- Hill方程（Hill's Equations）
- [雅可比能量（Jacobi Energy）](/glossary/dynamics/jacobi-energy/)

## 参考文献

- 周净扬和周荻 - 2007 - 月球探测器软着陆精确建模及最优轨道设计
