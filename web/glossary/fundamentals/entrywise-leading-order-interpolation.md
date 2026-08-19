---
title: 逐元主导阶插值（Entrywise Leading Order Interpolation）
description: 一种状态转移张量的短时插值方法。利用变分方程幂级数解的结构，对 STM 和 STT 的每个分量乘以不同的 alpha 幂次而非统一的线性插值。幂次由动力学系统 Jacobian 矩阵各元素首次非零的幂次决定。该方法运算量与逐元线性插值相当，但对大部分分量能达到更高阶精度。
keywords: 逐元主导阶插值, Entrywise Leading Order Interpolation, 轨道力学, 天体测量, 坐标系
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 逐元主导阶插值（Entrywise Leading Order Interpolation）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 逐元主导阶插值详解 | 术语定义
  description: 一种状态转移张量的短时插值方法。利用变分方程幂级数解的结构，对 STM 和 STT 的每个分量乘以不同的 alpha 幂次而非统一的线性插值。幂次由动力学系统 Jacobian 矩阵各元素首次非零的幂次决定。该方法运算量与逐元线性插值相当，但对大部分分量能达到更高阶精度。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 逐元主导阶插值详解 | 术语定义
  description: 一种状态转移张量的短时插值方法。利用变分方程幂级数解的结构，对 STM 和 STT 的每个分量乘以不同的 alpha 幂次而非统一的线性插值。幂次由动力学系统 Jacobian 矩阵各元素首次非零的幂次决定。该方法运算量与逐元线性插值相当，但对大部分分量能达到更高阶精度。
  image: /logo.png
permalink: /glossary/fundamentals/entrywise-leading-order-interpolation/
---

# 逐元主导阶插值（Entrywise Leading Order Interpolation）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 术语来源：Kulik et al., 2023, JGCD, doi:10.2514/1.G007311
>
> 本文地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种状态转移张量的短时插值方法。利用变分方程幂级数解的结构，对 STM 和 STT 的每个分量乘以不同的 alpha 幂次而非统一的线性插值。幂次由动力学系统 Jacobian 矩阵各元素首次非零的幂次决定。该方法运算量与逐元线性插值相当，但对大部分分量能达到更高阶精度。

## 应用价值

逐元主导阶插值在地月空间科学与工程中有实际应用价值。相关研究支撑着地月空间任务的规划、实施和运营，是该领域知识体系的有机组成部分。

## 相关概念

- 误差超椭球拉伸方向（Stretching Direction of Error Hyper-Ellipsoid）
- 贝叶斯更新（Bayesian Update）
- 实值稳定性指数（Real-Valued Stability Index）
- 航迹角（Flight-Path Angle）

## 参考文献

- Kulik et al., 2023, JGCD, doi:10.2514/1.G007311
