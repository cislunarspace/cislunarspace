---
title: 扩展卡尔曼滤波器（Extended Kalman Filter, EKF）
description: 将卡尔曼滤波推广到非线性系统的状态估计方法，通过对非线性函数进行一阶泰勒展开近似，在预测步传播状态向量和误差协方差矩阵，在校正步融合测量数据得到后验估计。
keywords: 扩展卡尔曼滤波器, Extended Kalman Filter, EKF, EKF, 轨道动力学, 控制理论, 非线性控制, 最优控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 扩展卡尔曼滤波器（Extended Kalman Filter, EKF）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 扩展卡尔曼滤波器详解 | 术语定义
  description: 将卡尔曼滤波推广到非线性系统的状态估计方法，通过对非线性函数进行一阶泰勒展开近似，在预测步传播状态向量和误差协方差矩阵，在校正步融合测量数据得到后验估计。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 扩展卡尔曼滤波器详解 | 术语定义
  description: 将卡尔曼滤波推广到非线性系统的状态估计方法，通过对非线性函数进行一阶泰勒展开近似，在预测步传播状态向量和误差协方差矩阵，在校正步融合测量数据得到后验估计。
  image: /logo.png
permalink: /glossary/dynamics/EKF/
---

# 扩展卡尔曼滤波器（Extended Kalman Filter, EKF）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

将卡尔曼滤波推广到非线性系统的状态估计方法，通过对非线性函数进行一阶泰勒展开近似，在预测步传播状态向量和误差协方差矩阵，在校正步融合测量数据得到后验估计。

## 应用价值

扩展卡尔曼滤波器通过线性化处理非线性估计，是航天器导航的经典算法。

## 相关概念

- [机动执行误差（Maneuver Execution Error）](/glossary/dynamics/EX error/)
- [椭圆非线性相对运动方程（Elliptic Non-linear Equations of Relative Motion, ENERM）](/glossary/dynamics/ENERM/)
- [矩阵指数解（Matrix Exponential Solution）](/glossary/dynamics/EXPM/)
- [线性卡尔曼滤波器（Linear Kalman Filter）](/glossary/dynamics/KMF/)

## 参考文献

- Clareson 等 - 2025。
