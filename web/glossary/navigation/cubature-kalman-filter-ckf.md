---
title: 容积卡尔曼滤波（Cubature Kalman Filter, CKF）
description: 适用于非线性系统的递推贝叶斯滤波器。用容积规则从高斯分布中取一组等权容积点，经非线性传播后加权求均值和方差，比无迹卡尔曼滤波更稳定，不产生负权值。
keywords: 容积卡尔曼滤波, Cubature Kalman Filter, CKF, CKF, 导航, 定轨, 滤波
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
permalink: /glossary/navigation/cubature-kalman-filter-ckf/
---

# 容积卡尔曼滤波（Cubature Kalman Filter, CKF）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

适用于非线性系统的递推贝叶斯滤波器。用容积规则从高斯分布中取一组等权容积点，经非线性传播后加权求均值和方差，比无迹卡尔曼滤波更稳定，不产生负权值。

## 应用价值

容积卡尔曼滤波在地月空间航天器自主导航中有重要应用，可提高定轨精度和自主性。 该方法适用于地月转移轨道和月球轨道器的导航任务设计。

## 相关概念

- [单纯角度导航（Angles-Only Navigation）](/glossary/navigation/angles-only-navigation/)
- [互协方差（Crosscovariance）](/glossary/navigation/crosscovariance/)
- [星间测距（Inter-Satellite Link Ranging）](/glossary/observation/inter-satellite-link-ranging/)
- [相对导航（Relative Navigation）](/glossary/navigation/relative-navigation/)

## 参考文献

- Xu et al. 2026
