---
title: 单值矩阵（Monodromy Matrix）
description: 详细解析单值矩阵的定义、计算方法、特征值结构及其在周期轨道稳定性分析中的应用
keywords: 单值矩阵, Monodromy Matrix, 状态转移矩阵, 特征值, 稳定性分析, 周期轨道, 地月空间
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 单值矩阵（Monodromy Matrix）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 单值矩阵详解 | 周期轨道稳定性判据
  description: 详细解析单值矩阵的定义、计算方法、特征值结构及其在周期轨道稳定性分析中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 单值矩阵详解 | 周期轨道稳定性判据
  description: 详细解析单值矩阵的定义、计算方法、特征值结构及其在周期轨道稳定性分析中的应用
  image: /logo.png
permalink: /glossary/dynamics/monodromy-matrix/
---

# 单值矩阵

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

单值矩阵（Monodromy Matrix）是沿周期轨道积分一周得到的状态转移矩阵。记单值矩阵为 $M$，则 $M = \Phi(T, 0)$，其中 $T$ 为轨道周期，$\Phi$ 为状态转移矩阵。

## 特征值结构

单值矩阵的特征值以共轭形式成对出现，反映了轨道的稳定性特征。记特征值为 $\lambda_i$（$i=1,2,...,6$），则其具有以下形式：

$$\lambda_2 = \frac{1}{\lambda_1}, \quad \lambda_4 = \frac{1}{\lambda_3}, \quad \lambda_5 = \lambda_6 = 1$$

当所有特征值的模均为 1 时，轨道是稳定的；当存在特征值的模大于 1 时，轨道是不稳定的。

## 稳定性指数

基于单值矩阵特征值可计算稳定性指数 $\nu$：

$$\nu = \frac{1}{2}\left(\|\lambda_i\| + \left\|\frac{1}{\lambda_i}\right\|\right)$$

当 $\nu = 1$ 时，轨道是稳定的。稳定性指数是衡量三体轨道在不施加机动控制下自身稳定性水平的重要指标。

## 应用价值

单值矩阵是分析周期轨道稳定性的核心工具，广泛应用于 DRO、Halo 等三体轨道的稳定性判别和分岔分析。

## 相关概念

- [状态转移矩阵](/glossary/dynamics/state-transition-matrix/)
- [稳定性指数](/glossary/dynamics/stability-index/)
- [远距离逆行轨道（DRO）](/glossary/orbits/dro/)
- [圆型限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)
- 倍周期分岔

## 参考文献

- Asano Y, Satoh S, Yamada K. Analysis of period-multiplying bifurcations of distant retrograde orbits in the Hill three-body problem[J]. Advances in Space Research, 2022.
- 陈昱桔. 面向地月空间态势感知的DRO轨道设计与控制研究[D]. 2024.
