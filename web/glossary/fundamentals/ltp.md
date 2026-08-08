---
title: 线性周期系统（Linear Time-Periodic System）
description: 系数矩阵随时间周期性变化的线性系统，满足 A(t+T)=A(t)、B(t+T)=B(t)。它是时变系统中最简单也最重要的一类，航空航天中许多时变系统可近似为线性周期系统（如椭圆轨道上的动力学、自旋刚体的姿态运动）。Halo轨道跟踪的误差动力学，经一阶线性化后恰好具有此结构：动力学方程沿名义轨道求偏导得到的状态矩阵 A(
keywords: 线性周期系统, Linear Time-Periodic System, LTP, fundamentals
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 线性周期系统（Linear Time-Periodic System）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 线性周期系统详解 | 术语定义
  description: 系数矩阵随时间周期性变化的线性系统，满足 A(t+T)=A(t)、B(t+T)=B(t)。它是时变系统中最简单也最重要的一类，航空航天中许多时变系统可近似为线性周期系统（如椭圆轨道上的动力学、自旋刚体的姿态运动）。Halo轨道跟踪的误差动力学，经一阶线性化后恰好具有此结构：动力学方程沿名义轨道求偏导得到的状态矩阵 A(
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 线性周期系统详解 | 术语定义
  description: 系数矩阵随时间周期性变化的线性系统，满足 A(t+T)=A(t)、B(t+T)=B(t)。它是时变系统中最简单也最重要的一类，航空航天中许多时变系统可近似为线性周期系统（如椭圆轨道上的动力学、自旋刚体的姿态运动）。Halo轨道跟踪的误差动力学，经一阶线性化后恰好具有此结构：动力学方程沿名义轨道求偏导得到的状态矩阵 A(
  image: /logo.png
permalink: /glossary/fundamentals/ltp/
---

# 线性周期系统（Linear Time-Periodic System）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

系数矩阵随时间周期性变化的线性系统，满足 A(t+T)=A(t)、B(t+T)=B(t)。它是时变系统中最简单也最重要的一类，航空航天中许多时变系统可近似为线性周期系统（如椭圆轨道上的动力学、自旋刚体的姿态运动）。Halo轨道跟踪的误差动力学，经一阶线性化后恰好具有此结构：动力学方程沿名义轨道求偏导得到的状态矩阵 A(t) 是周期函数。

## 应用价值

线性周期系统理论适用于椭圆轨道动力学和周期轨道跟踪控制问题，是Halo轨道维持控制策略设计的理论基础。

## 相关概念

- 变结构滑模控制（Variable Structure Sliding Mode Control）
- [庞特里亚金最小值原理（Pontryagin Minimum Principle）](/glossary/fundamentals/pmp/)
- 误差函数（Error Function）

## 参考文献

- 徐明和徐世杰 - 2008 - Halo轨道维持的线性周期控制策略。
