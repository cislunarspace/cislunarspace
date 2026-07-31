---
title: 容积卡尔曼滤波（Cubature Kalman Filter, CKF）
description: 适用于非线性系统的递推贝叶斯滤波器。用容积规则从高斯分布中取一组等权容积点，经非线性传播后加权求均值和方差，比无迹卡尔曼滤波更稳定，不产生负权值。
keywords: 容积卡尔曼滤波, Cubature Kalman Filter, CKF, CKF, GNSS, 定位, 测距, 定轨
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 容积卡尔曼滤波（Cubature Kalman Filter, CKF）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 容积卡尔曼滤波详解 | 术语定义
  description: 适用于非线性系统的递推贝叶斯滤波器。用容积规则从高斯分布中取一组等权容积点，经非线性传播后加权求均值和方差，比无迹卡尔曼滤波更稳定，不产生负权值。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 容积卡尔曼滤波详解 | 术语定义
  description: 适用于非线性系统的递推贝叶斯滤波器。用容积规则从高斯分布中取一组等权容积点，经非线性传播后加权求均值和方差，比无迹卡尔曼滤波更稳定，不产生负权值。
  image: /logo.png
permalink: /glossary/navigation/CKF/
---

# 容积卡尔曼滤波（Cubature Kalman Filter, CKF）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

适用于非线性系统的递推贝叶斯滤波器。用容积规则从高斯分布中取一组等权容积点，经非线性传播后加权求均值和方差，比无迹卡尔曼滤波更稳定，不产生负权值。

## 应用价值

该技术在地月空间导航与定轨中发挥关键作用，为探测器提供高精度位置和速度信息。

## 相关概念

- [Autonomous Orbit Determination](/glossary/navigation/autonomous-orbit-determination/)
- [Precision Orbit Determination](/glossary/navigation/precision-orbit-determination/)
- [Inter-Satellite Link](/glossary/navigation/inter-satellite-link/)

## 参考文献

- Xu et al. 2026。
