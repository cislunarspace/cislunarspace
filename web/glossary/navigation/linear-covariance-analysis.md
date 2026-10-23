---
title: 线性协方差分析（Linear Covariance Analysis）
description: 把动力学与测量模型沿参考轨迹线性化，用状态转移矩阵递推误差协方差并按卡尔曼更新注入量测信息，以单条线性化仿真替代蒙特卡洛批量仿真来评估闭环制导导航控制系统统计性能的快速分析方法。
keywords: 线性协方差分析, Linear Covariance Analysis, LinCov, LCA, 协方差传播, 误差传播, 导航, 定轨, 蒙特卡洛
author: 天疆说
date: 2026-10-23
lastUpdated: 2026-10-23
wechatShare:
  title: 线性协方差分析（Linear Covariance Analysis）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 线性协方差分析详解 | 术语定义
  description: 把动力学与测量模型沿参考轨迹线性化，用状态转移矩阵递推误差协方差并按卡尔曼更新注入量测信息，以单条线性化仿真替代蒙特卡洛批量仿真来评估闭环制导导航控制系统统计性能的快速分析方法。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 线性协方差分析详解 | 术语定义
  description: 把动力学与测量模型沿参考轨迹线性化，用状态转移矩阵递推误差协方差并按卡尔曼更新注入量测信息，以单条线性化仿真替代蒙特卡洛批量仿真来评估闭环制导导航控制系统统计性能的快速分析方法。
  image: /logo.png
permalink: /glossary/navigation/linear-covariance-analysis/
aliases:
  - LinCov
  - LCA
related:
  - ref: fundamentals/uncertainty-propagation
    relation: broader
  - ref: fundamentals/stm
    relation: related
  - ref: navigation/ekf
    relation: related
  - ref: fundamentals/ukf
    relation: related
  - ref: other/monte-carlo-shooting-simulation
    relation: related
---

# 线性协方差分析（Linear Covariance Analysis）

> 本文作者：天疆说
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

线性协方差分析（Linear Covariance Analysis，常缩写为 LinCov 或 LCA）是一种把非线性动力学与测量模型沿参考轨迹线性化，用状态转移矩阵递推误差协方差、按卡尔曼更新公式注入量测信息，从而在不开蒙特卡洛仿真的前提下评估闭环制导导航控制系统统计性能的分析方法 \cite{gellerLinearCovarianceTechniques2006}。它给出 3$\sigma$ 弹道离散、导航误差与速度增量变化的预测，误差源覆盖初始状态误差、敏感器噪声、机动执行偏差与未建模动力学。

## 与开环误差传播的区别

常规的协方差传播只关心状态不确定度如何随动力学演化。LCA 在闭环里同时递推两套协方差：真实状态相对标称轨迹的离散协方差，以及导航估计误差协方差。后者经制导与瞄准算法变成控制修正量，修正的执行误差再反馈回真实状态传播，因此 LCA 度量的是闭环系统的实际性能，而不是开环误差的简单外推 \cite{gellerLinearCovarianceTechniques2006}。

## 误差状态方程与协方差传播

以标称轨迹 $\mathbf{x}^*(t)$ 为线性化中心，真实状态相对标称轨迹的误差记为 $\delta\mathbf{x}(t)$，一阶近似满足

$$\delta\dot{\mathbf{x}} = \mathbf{A}(t)\,\delta\mathbf{x} + \mathbf{w}(t), \qquad \mathbf{A}(t) = \left.\frac{\partial \mathbf{f}}{\partial \mathbf{x}}\right|_{\mathbf{x}^*(t)}$$

其中 $\mathbf{w}(t)$ 是等效过程噪声，代表初始误差、机动执行偏差与未建模动力学。状态转移矩阵 $\boldsymbol{\Phi}(t,t_0)$ 由变分方程 $\dot{\boldsymbol{\Phi}} = \mathbf{A}\boldsymbol{\Phi}$ 与初值 $\boldsymbol{\Phi}(t_0,t_0) = \mathbf{I}$ 积分得到，离散后协方差按

$$\mathbf{P}_{k}^{-} = \boldsymbol{\Phi}_{k,k-1}\,\mathbf{P}_{k-1}^{+}\,\boldsymbol{\Phi}_{k,k-1}^{\top} + \mathbf{Q}_{k-1}$$

递推。工程实现常把每个时间步起点处的雅可比冻结，用 $\boldsymbol{\Phi}_{k,k-1} \approx \exp(\mathbf{A}\Delta t)$ 近似状态转移矩阵，省去沿标称轨迹反复积分变分方程的开销。冻结雅可比在纯预报段会引入局部误差，但周期性测量更新持续压制累积的线性化误差，完整定轨过程的终端误差对这一步近似并不敏感。

## 测量更新与闭环评估

量测模型 $\mathbf{y} = \mathbf{h}(\mathbf{x}) + \mathbf{v}$ 在参考点线性化后得到量测雅可比 $\mathbf{H} = \partial\mathbf{h}/\partial\mathbf{x}$，导航滤波器按标准卡尔曼公式更新

$$\mathbf{K}_k = \mathbf{P}_{k}^{-}\mathbf{H}_k^{\top}\left(\mathbf{H}_k\mathbf{P}_{k}^{-}\mathbf{H}_k^{\top} + \mathbf{R}_k\right)^{-1}$$

$$\mathbf{P}_{k}^{+} = \left(\mathbf{I} - \mathbf{K}_k\mathbf{H}_k\right)\mathbf{P}_{k}^{-}\left(\mathbf{I} - \mathbf{K}_k\mathbf{H}_k\right)^{\top} + \mathbf{K}_k\mathbf{R}_k\mathbf{K}_k^{\top}$$

其中 $\mathbf{R}_k$ 是量测噪声协方差，第二式采用 Joseph 形式以保持数值对称正定。线性协方差仿真的关键在闭环回环：导航误差协方差投影进制导与瞄准算法得到控制修正量，修正的执行误差与残余导航误差一起送回动力学传播。导航信息在中途被地面测控上传或由星上事件复位时，按线性协方差复位技术把两套协方差同时重构，使分析结果与在轨状态更新一致 \cite{woffindenEvaluatingLunarDescent}。

## 与蒙特卡洛仿真的对照

蒙特卡洛仿真是这类性能评估的基准做法：抽取大量随机初值与噪声样本，逐条运行含非线性动力学与星上导航算法的闭环仿真，再统计终值分布。线性协方差分析只跑一条线性化轨道，用协方差矩阵取代样本集合，统计量直接取矩阵的对角线元素。文献报告两种方法的统计差异通常不超过 10%，多数情形小于 5%，而线性协方差仿真的计算量低约三个量级，这使 LCA 成为星座论证、任务设计与在轨快速权衡环节的常用工具 \cite{roseStatisticalMethodsLaunch2012}。代价是线性化假设：误差跨度大、强非线性或者长期预报时协方差会失真，需要用蒙特卡洛或高阶方法复核。

## 地月空间应用

地月空间的多体动力学、长弧传播与稀疏观测对导航性能评估的计算量尤其敏感，LCA 在这类任务里用途明确：

- 近直线晕轨道导航设计：用 LCA 评估测站配置、跟踪频次与量测类型对导航误差的影响，Yun 等的传感器配置权衡研究即以线性协方差分析为评估手段 \cite{yunSensorConfigurationTrade2020}。
- 多飞行器交会与制导导航控制分析：Woffinden 把线性协方差技术推广到多飞行器、多制导导航控制系统，分析近直线晕轨道交会过程中的导航误差与速度增量离散 \cite{woffindenLinearCovarianceTechniques2023}。
- 月面下降与着陆：结合协方差复位事件，评估从近直线晕轨道出发的载人下降着陆的导航误差、弹道离散与推进剂消耗 \cite{woffindenEvaluatingLunarDescent}。
- 仅测角交会：Woffinden 与 Geller 系统讨论了仅测角自主交会的可观测性与机动设计，为在该框架下做线性协方差评估提供了任务背景 \cite{woffindenNavigatingRoadAutonomous2007}。

## 相关概念

- [误差演化（Uncertainty Propagation）](/glossary/fundamentals/uncertainty-propagation/)
- [状态转移矩阵（State Transition Matrix）](/glossary/fundamentals/stm/)
- [扩展卡尔曼滤波（Extended Kalman Filter）](/glossary/navigation/ekf/)
- [无迹卡尔曼滤波（UKF）](/glossary/fundamentals/ukf/)
- [蒙特卡洛打靶仿真（Monte Carlo Shooting Simulation）](/glossary/other/monte-carlo-shooting-simulation/)
