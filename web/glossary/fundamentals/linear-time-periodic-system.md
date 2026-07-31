---
title: 线性周期系统（Linear Time-Periodic System）
description: 系数矩阵随时间周期性变化的线性系统，满足 A(t+T)=A(t)、B(t+T)=B(t)。它是时变系统中最简单也最重要的一类，航空航天中许多时变系统可近似为线性周期系统（如椭圆轨道上的动力学、自旋刚体的姿态运动）。Halo轨道跟踪的误差动力学，经一阶线性化后恰好具有此结构：动力学方程沿名义轨道求偏导得到的状态矩阵 A(
keywords: LTP, 坐标系, 轨道, 物理, 天文
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
permalink: /glossary/fundamentals/linear-time-periodic-system/
---

# 线性周期系统（Linear Time-Periodic System）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

系数矩阵随时间周期性变化的线性系统，满足 A(t+T)=A(t)、B(t+T)=B(t)。它是时变系统中最简单也最重要的一类，航空航天中许多时变系统可近似为线性周期系统（如椭圆轨道上的动力学、自旋刚体的姿态运动）。Halo轨道跟踪的误差动力学，经一阶线性化后恰好具有此结构：动力学方程沿名义轨道求偏导得到的状态矩阵 A(t) 是周期函数。

## 应用价值

该轨道特性在地月空间任务轨道设计中具有重要应用。理解共振特性有助于设计稳定的轨道和低能量转移方案，是进行长期任务规划的理论基础。

## 相关概念

- [月心惯性坐标系（Moon-Centered Inertial Frame）](/glossary/fundamentals/moon-centered-inertial-frame/)
- [NRLMSISE-00大气模型（NRLMSISE-00 Atmospheric Model）](/glossary/fundamentals/nrlmsise-00-atmospheric-model/)
- [会合参考系（Synodical Reference System）](/glossary/fundamentals/synodical-reference-system/)
- [入射角（Impact Angle）](/glossary/fundamentals/impact-angle/)

## 参考文献

- 徐明和徐世杰 - 2008 - Halo轨道维持的线性周期控制策略
