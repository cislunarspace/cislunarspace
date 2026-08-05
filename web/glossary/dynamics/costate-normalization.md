---
title: 协态归一化（Costate Normalization）
description: 通过缩放哈密顿量将某个初始协态值设为单位1的技术，用于减少数值搜索中的尺度问题。
keywords: 协态归一化, Costate Normalization, 轨道力学, 三体问题, 非线性动力学, 轨道稳定性
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 协态归一化（Costate Normalization）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 协态归一化详解 | 术语定义
  description: 通过缩放哈密顿量将某个初始协态值设为单位1的技术，用于减少数值搜索中的尺度问题。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 协态归一化详解 | 术语定义
  description: 通过缩放哈密顿量将某个初始协态值设为单位1的技术，用于减少数值搜索中的尺度问题。
  image: /logo.png
permalink: /glossary/dynamics/costate-normalization/
---

# 协态归一化（Costate Normalization）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

通过缩放哈密顿量将某个初始协态值设为单位1的技术，用于减少数值搜索中的尺度问题。

## 应用价值

协态归一化通过缩放哈密顿量将初始协态设为单位1，是间接优化中减少数值搜索尺度问题的常用技术。在求解两点边值问题进行轨道优化时，不同协态量可能相差数个量级，归一化可以改善条件数，提高数值求解的稳定性和收敛速度。

## 相关概念

- [雅可比常数（Jacobi Constant, JC）](/glossary/dynamics/jacobi-constant-jc/)
- [希尔区域（Hill Region）](/glossary/fundamentals/hill-region/)
- [庞加莱映射（Poincaré Map）](/glossary/dynamics/poincar-map/)
- [稳定性（Stability）](/glossary/dynamics/stability/)

## 参考文献

- Thorne 1996
