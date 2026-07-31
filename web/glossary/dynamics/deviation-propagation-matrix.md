---
title: 偏差传播矩阵（Deviation Propagation Matrix）
description: 线性化偏差传播动力学中，将某时刻的状态偏差映射到下一时刻的矩阵算子。连续时刻的偏差传播矩阵逐段连乘，可得到从初始时刻到终端时刻的累积偏差。它是传统中途修正脉冲估计的理论基础，但在偏差超出线性邻域时失效，因此论文改用神经网络在大偏差场景下替代。
keywords: 偏差传播矩阵, Deviation Propagation Matrix, 轨道动力学, 多体问题, 平动点
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 偏差传播矩阵（Deviation Propagation Matrix）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 偏差传播矩阵详解 | 术语定义
  description: 线性化偏差传播动力学中，将某时刻的状态偏差映射到下一时刻的矩阵算子。连续时刻的偏差传播矩阵逐段连乘，可得到从初始时刻到终端时刻的累积偏差。它是传统中途修正脉冲估计的理论基础，但在偏差超出线性邻域时失效，因此论文改用神经网络在大偏差场景下替代。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 偏差传播矩阵详解 | 术语定义
  description: 线性化偏差传播动力学中，将某时刻的状态偏差映射到下一时刻的矩阵算子。连续时刻的偏差传播矩阵逐段连乘，可得到从初始时刻到终端时刻的累积偏差。它是传统中途修正脉冲估计的理论基础，但在偏差超出线性邻域时失效，因此论文改用神经网络在大偏差场景下替代。
  image: /logo.png
permalink: /glossary/dynamics/deviation-propagation-matrix/
---

# 偏差传播矩阵（Deviation Propagation Matrix）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文来源：学术论文与专业资料整理
>
> 站长地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

线性化偏差传播动力学中，将某时刻的状态偏差映射到下一时刻的矩阵算子。连续时刻的偏差传播矩阵逐段连乘，可得到从初始时刻到终端时刻的累积偏差。它是传统中途修正脉冲估计的理论基础，但在偏差超出线性邻域时失效，因此论文改用神经网络在大偏差场景下替代。

## 应用价值

偏差传播矩阵将状态偏差从某时刻映射到下一时刻，是中途修正脉冲估计的理论基础。在偏差超出线性邻域时需要用神经网络替代。

## 相关概念

- [平动点轨道（Libration Point Orbit）](/glossary/dynamics/libration-point-orbit/)
- [不变流形（Invariant Manifold）](/glossary/dynamics/invariant-manifold/)
- [脉冲机动（Impulsive Maneuver）](/glossary/dynamics/impulsive-maneuver/)
- [Halo轨道（Halo Orbit）](/glossary/dynamics/halo-orbit/)

## 参考文献

- 常笑宽 等 - 2026 - 基于神经网络的地月转移中途修正脉冲快速估计方法
