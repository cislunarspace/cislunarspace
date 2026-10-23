---
title: 纯角度定轨（Angles-Only Orbit Determination）
description: 仅利用光学观测的视线方向（方位角与俯仰角，或赤经与赤纬）确定空间目标轨道参数的方法。单个观测时刻只约束视线方向两维，斜距与斜距率不可直接测量，视线深度方向弱可观测，定轨依赖多站几何、轨道动力学约束与足够长的观测弧段。
keywords: 纯角度定轨, Angles-Only Orbit Determination, 仅测角定轨, 初轨确定, 可接受域, 弱可观测性, 地月空间态势感知
author: 天疆说
date: 2026-10-23
lastUpdated: 2026-10-23
wechatShare:
  title: 纯角度定轨（Angles-Only Orbit Determination）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 纯角度定轨（Angles-Only Orbit Determination）详解 | 术语定义
  description: 仅利用光学观测的视线方向确定空间目标轨道参数的方法，斜距不可直接测量，视线深度方向弱可观测。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 纯角度定轨（Angles-Only Orbit Determination）详解 | 术语定义
  description: 仅利用光学观测的视线方向确定空间目标轨道参数的方法，斜距不可直接测量，视线深度方向弱可观测。
  image: /logo.png
permalink: /glossary/navigation/angles-only-orbit-determination/
aliases:
  - Angles-Only Orbit Determination
  - angles-only OD
  - 纯角度轨道确定
  - 仅测角定轨
related:
  - ref: navigation/very-short-arc
    relation: related
  - ref: navigation/multiple-solutions-phenomenon
    relation: related
  - ref: navigation/oc-residual
    relation: related
---

# 纯角度定轨（Angles-Only Orbit Determination）

> 本文作者：天疆说
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

纯角度定轨（Angles-Only Orbit Determination）指仅利用光学传感器测得的视线方向观测，不借助测距与测速数据，确定空间目标轨道参数的方法。光学观测直接给出目标相对测站的视线方向，可用方位角与俯仰角表示，也可用赤经与赤纬表示。单个观测时刻只约束视线方向的两个分量，斜距与斜距率不可直接测量，视线深度方向弱可观测，定轨解算因此依赖多站观测几何、轨道动力学约束与足够长的观测弧段 \cite{baduraMultihypothesisApproachAnglesonly2026}。在地月空间，目标距离远、观测机会稀少、多体动力学非线性强，纯角度定轨比近地轨道情形更困难。注意与自主定轨区分，后者描述航天器脱离地面测控的自主性，观测手段不限于角度。

## 观测模型与弱可观测性

设测站在惯性系中的位置为 $\boldsymbol{r}_s$，目标位置为 $\boldsymbol{r}$，视线矢量为 $\boldsymbol{\rho} = \boldsymbol{r} - \boldsymbol{r}_s$。方位角与俯仰角由视线矢量的分量给出：

$$\alpha = \arctan \frac{\rho_y}{\rho_x}, \qquad \beta = \arctan \frac{\rho_z}{\sqrt{\rho_x^2 + \rho_y^2}}.$$

观测方程写成 $\boldsymbol{y}_k = \boldsymbol{h}(\boldsymbol{x}_k) + \boldsymbol{v}_k$，其中 $\boldsymbol{v}_k$ 为零均值高斯白噪声，协方差矩阵由测角精度决定。角度观测对位置的灵敏度只沿垂直于视线的两个方向展开，沿视线方向的偏导数接近零，法方程矩阵条件数很差，斜距解算对噪声与模型误差高度敏感 \cite{chen2026constellationOptimization}。弧段越短，角度变化越微小，信息量下降越明显，即便附加角率观测，等价约束也只覆盖视线方向及其导数。多站观测、动力学约束与长时间弧段积累是恢复可观测性的主要途径。

## 求解思路

初轨确定阶段，经典高斯法与拉普拉斯法依赖跨越足够弧段的三次方向观测。短弧条件下，可接受域（Admissible Region）方法先以目标处于束缚轨道等物理条件裁剪斜距与斜距率平面，再在域内以观测残差最小化搜索初值 \cite{qiuDroInitialOrbit2025}。当观测批次存在多个局部极小或解不唯一时，多假设方法先诊断既有算法能否收敛，再依据解的唯一性选择求解策略，必要时追加观测消除歧义 \cite{baduraMultihypothesisApproachAnglesonly2026}。统计定轨阶段，扩展卡尔曼滤波与无迹卡尔曼滤波以角度观测更新状态，弱可观测性表现为收敛慢、协方差大、对初值敏感。

## 应用价值

纯角度定轨是空间目标监视编目的入口环节，也是地月空间态势感知的关键能力。对非合作目标，目标不会主动配合测距，光学测角是主要的信息来源。对天基观测星座，测角载荷比测距载荷更轻、更省功率，多颗卫星从不同轨道族形成观测基线，几何构型决定可达的定轨精度。星座设计研究常把纯角度定轨误差作为核心性能指标，例如以状态转移矩阵传播协方差，在威胁场景集合上定义稳健定轨精度，并据此进行多目标星座优化 \cite{chen2026constellationOptimization}。

## 相关概念

- [极短弧（Very Short Arc）](/glossary/navigation/very-short-arc/)
- [多解现象（Multiple Solutions Phenomenon）](/glossary/navigation/multiple-solutions-phenomenon/)
- [O-C 残差（OC Residual）](/glossary/navigation/oc-residual/)
