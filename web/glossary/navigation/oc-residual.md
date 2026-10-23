---
title: O-C 残差（OC Residual）
description: 一次观测的观测值与计算值之差，计算值由当前估计的轨道状态经动力学模型传播预测得到。轨道确定与天体测量中评估轨道解与观测符合程度的标准量，最小二乘估计以残差平方和为目标函数，可接受域初轨确定方法在域内以总残差最小搜索初轨。
keywords: O-C 残差, OC residual, 观测残差, observation-minus-computation residual, 轨道确定, 初轨确定, 最小二乘, 可接受域
author: 天疆说
date: 2026-10-23
lastUpdated: 2026-10-23
wechatShare:
  title: O-C 残差（OC Residual）
  desc: 观测减计算的差值，衡量轨道解与观测符合程度的基本量度，也是可接受域初轨确定的目标函数。
  image: /logo.png
og:
  title: O-C 残差（OC Residual）详解 | 术语定义
  description: 一次观测的观测值与计算值之差，计算值由当前估计的轨道状态经动力学模型传播预测得到。轨道确定与天体测量中评估轨道解与观测符合程度的标准量，最小二乘估计以残差平方和为目标函数，可接受域初轨确定方法在域内以总残差最小搜索初轨。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: O-C 残差（OC Residual）详解 | 术语定义
  description: 一次观测的观测值与计算值之差，计算值由当前估计的轨道状态经动力学模型传播预测得到。轨道确定与天体测量中评估轨道解与观测符合程度的标准量，最小二乘估计以残差平方和为目标函数，可接受域初轨确定方法在域内以总残差最小搜索初轨。
  image: /logo.png
permalink: /glossary/navigation/oc-residual/
aliases:
  - OC residual
  - O-C residual
  - observation-minus-computation residual
  - 观测残差
related:
  - ref: navigation/very-short-arc
    relation: related
  - ref: dynamics/differential-correction
    relation: related
---

# O-C 残差（OC Residual）

> 本文作者：天疆说
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

O-C 残差（OC residual，observation-minus-computation residual，观测残差）指一次观测的观测值与计算值之差。观测值来自测量设备，计算值由当前估计的轨道状态经动力学模型积分或传播预测得到，天体测量学中记作 O-C，O 取自 observed（观测），C 取自 computed（计算）。残差刻画轨道解与观测数据的符合程度，是轨道确定与精密定轨的基本量度 \cite{valladoFundamentalsAstrodynamicsApplications2022}。在地月空间 DRO 初轨确定中，Qiu 等以可接受域内候选 $(\rho, \dot{\rho})$ 组合传播生成预测观测，与实际观测比对计算 OC 残差，以总残差最小在域内搜索初轨 \cite{qiuDroInitialOrbit2025}。

## 数学形式

设观测数据为 $Z_{\mathrm{ob}}$，由候选轨道传播得到的预测数据为 $Z_{\mathrm{pre}}$，单次观测残差即两者之差 $\delta = Z_{\mathrm{ob}} - Z_{\mathrm{pre}}$。Qiu 等 2025 将单次残差的平方记作

$$
\mathrm{Res}(\rho, \dot{\rho}) = \left(Z_{\mathrm{ob}} - Z_{\mathrm{pre}}\right)^{2}
$$

其中 $(\rho, \dot{\rho})$ 是可接受域内的候选斜距与斜距率组合。$Z$ 的量纲随观测类型变化，角度观测下为方位角与俯仰角，测距观测下为距离，测速观测下为距离率。

## 在轨道确定中的通用角色

批处理最小二乘估计以残差平方和（常配观测权矩阵）为目标函数，迭代修正轨道状态直至残差收敛到观测噪声水平，观测残差在此代替打靶问题中的终端约束 \cite{valladoFundamentalsAstrodynamicsApplications2022}。这套估计框架与[微分修正](/glossary/dynamics/differential-correction/)共用同一数学基础，Vallado 2022 将相应的最小二乘算法直接命名为 Differential Correction。残差序列还用于评估观测质量、剔除粗差与监视定轨精度。

## 在可接受域初轨确定中的用法

[极短弧](/glossary/navigation/very-short-arc/)纯角度观测条件下，斜距 $\rho$ 与斜距率 $\dot{\rho}$ 不可直接测量，经典初轨确定方法失效。可接受域方法先以轨道特征参数约束裁剪 $(\rho, \dot{\rho})$ 平面，得到候选组合的子区域。在最终约束可接受域内，每组候选 $(\rho, \dot{\rho})$ 经状态转移矩阵 $\boldsymbol{\Phi}$ 传播生成预测观测，按上式计算各次观测的残差，目标函数取 N 次观测的总残差最小

$$
\mathrm{RES} = \min_{(\rho,\dot{\rho})} \sum_{i=1}^{N} \mathrm{Res}_{i}(\rho, \dot{\rho})
$$

最优组合直接给出 DRO 目标的状态矢量。相比依赖大量数值积分的传统方案，该方案以状态转移矩阵传播替代逐点轨道积分，相同节点数下收敛时间降至原来的一半 \cite{qiuDroInitialOrbit2025}。

## 相关概念

- [极短弧（Very Short Arc）](/glossary/navigation/very-short-arc/)
- [微分修正与打靶法](/glossary/dynamics/differential-correction/)
