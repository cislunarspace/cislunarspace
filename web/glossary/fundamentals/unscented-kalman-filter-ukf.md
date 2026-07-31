---
title: 无迹卡尔曼滤波（Unscented Kalman Filter, UKF）
description: 一种非线性滤波方法，通过选取一组确定性采样点（sigma点）来捕捉均值和协方差的非线性变换，避免了扩展卡尔曼滤波对非线性函数求导的需求。在地月空间初轨确定中用于处理高度非线性的轨道动力学。
keywords: 无迹卡尔曼滤波, Unscented Kalman Filter, UKF, UKF, 轨道力学, 数值方法, 基础理论
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 无迹卡尔曼滤波（Unscented Kalman Filter, UKF）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 无迹卡尔曼滤波详解 | 术语定义
  description: 一种非线性滤波方法，通过选取一组确定性采样点（sigma点）来捕捉均值和协方差的非线性变换，避免了扩展卡尔曼滤波对非线性函数求导的需求。在地月空间初轨确定中用于处理高度非线性的轨道动力学。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 无迹卡尔曼滤波详解 | 术语定义
  description: 一种非线性滤波方法，通过选取一组确定性采样点（sigma点）来捕捉均值和协方差的非线性变换，避免了扩展卡尔曼滤波对非线性函数求导的需求。在地月空间初轨确定中用于处理高度非线性的轨道动力学。
  image: /logo.png
permalink: /glossary/fundamentals/unscented-kalman-filter-ukf/
---

# 无迹卡尔曼滤波（Unscented Kalman Filter, UKF）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种非线性滤波方法，通过选取一组确定性采样点（sigma点）来捕捉均值和协方差的非线性变换，避免了扩展卡尔曼滤波对非线性函数求导的需求。在地月空间初轨确定中用于处理高度非线性的轨道动力学。

## 应用价值

无迹卡尔曼滤波是地月空间研究的基础理论和方法。在实际应用中，该概念为轨道设计、导航计算和动力学分析提供了理论支撑，是理解更复杂空间任务问题的前提。

## 相关概念

- [牛顿万有引力定律（Newton's Law of Gravitation）](/glossary/fundamentals/newtons-law-of-gravitation/)
- [三角级数（Trigonometric Series）](/glossary/fundamentals/trigonometric-series/)
- [发射三要素（Three Launch Elements）](/glossary/fundamentals/three-launch-elements/)
- [伪势（Pseudo-Potential）](/glossary/fundamentals/pseudo-potential/)

## 参考文献

- 于登云 等 - 2025 - 人工智能赋能地月空间感知技术现状及展望
