---
title: 线性化（Linearization）
description: 在非线性系统的平衡点附近，将非线性项展开为泰勒级数并舍弃高阶小量，得到近似线性方程的方法。本文对 CRTBP 下的相对运动方程在线性化时，假设两航天器相对距离远小于各自到主天体的距离，对引力势函数的一阶项做泰勒展开。线性化是控制器设计的前提，但仅在小相对距离时有效。
keywords: 线性化, Linearization, 基础概念, 推进, 轨道力学, 导航
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 线性化（Linearization）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 线性化（Linearization）详解 | 术语定义
  description: 在非线性系统的平衡点附近，将非线性项展开为泰勒级数并舍弃高阶小量，得到近似线性方程的方法。本文对 CRTBP 下的相对运动方程在线性化时，假设两航天器相对距离远小于各自到主天体的距离，对引力势函数的一阶项做泰勒展开。线性化是控制器设计的前提，但仅在小相对距离时有效。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 线性化（Linearization）详解 | 术语定义
  description: 在非线性系统的平衡点附近，将非线性项展开为泰勒级数并舍弃高阶小量，得到近似线性方程的方法。本文对 CRTBP 下的相对运动方程在线性化时，假设两航天器相对距离远小于各自到主天体的距离，对引力势函数的一阶项做泰勒展开。线性化是控制器设计的前提，但仅在小相对距离时有效。
  image: /logo.png
permalink: /glossary/fundamentals/linearization/
---

# 线性化（Linearization）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

在非线性系统的平衡点附近，将非线性项展开为泰勒级数并舍弃高阶小量，得到近似线性方程的方法。本文对 CRTBP 下的相对运动方程在线性化时，假设两航天器相对距离远小于各自到主天体的距离，对引力势函数的一阶项做泰勒展开。线性化是控制器设计的前提，但仅在小相对距离时有效。

## 应用价值

该控制方法在轨道保持、姿态控制和交会对接中广泛应用。通过求解反馈增益矩阵，可以实现对航天器状态的实时调节，保证轨道机动的精度和稳定性。

## 相关概念

- [定时定点着陆（Scheduled and Pinpoint Landing）](/glossary/fundamentals/scheduled-and-pinpoint-landing/)
- [截面（Surface of Section, SOS）](/glossary/fundamentals/surface-of-section-sos/)
- [截断策略（Truncation Strategy）](/glossary/fundamentals/truncation-strategy/)

## 参考文献

- 地月空间航天器绕飞接近跟踪控制
