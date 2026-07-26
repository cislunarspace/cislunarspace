---
title: 高斯过程回归（GPR）
description: 详细解析高斯过程回归的基本原理、核函数选择、参数优化及其在风场预测与不确定性建模中的应用
keywords: 高斯过程回归, Gaussian Process Regression, GPR, 机器学习, 不确定性, 风场预测, 贝叶斯优化
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 高斯过程回归（Gaussian Process Regression）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 高斯过程回归（Gaussian Process Regression）详解 | 术语定义
  description: 详细解析高斯过程回归的基本原理、核函数选择、参数优化及其在风场预测与不确定性建模中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 高斯过程回归（Gaussian Process Regression）详解 | 术语定义
  description: 详细解析高斯过程回归的基本原理、核函数选择、参数优化及其在风场预测与不确定性建模中的应用
  image: /logo.png
permalink: /glossary/dynamics/gaussian-process-regression/
---

# 高斯过程回归（GPR）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

高斯过程回归（Gaussian Process Regression, GPR）是一种基于贝叶斯框架的非参数机器学习方法，通过假设函数值服从高斯过程来推断未知点的函数值及其不确定性。GPR 能够提供预测均值和置信区间，特别适合小样本、高维度、需要不确定性估计的场景。

## 基本原理

### 高斯过程定义

函数 $f(\mathbf{x})$ 服从高斯过程：

$$f(\mathbf{x}) \sim \mathcal{GP}(m(\mathbf{x}), k(\mathbf{x}, \mathbf{x}'))$$

其中 $m(\mathbf{x})$ 为均值函数，$k(\mathbf{x}, \mathbf{x}')$ 为协方差函数（核函数）。

### 协方差函数（核函数）

#### RBF（径向基）核

$$k_{RBF}(\mathbf{x}, \mathbf{x}') = \sigma_f^2 \exp\left(-\frac{||\mathbf{x} - \mathbf{x}'||^2}{2l^2}\right)$$

| 参数 | 含义 |
| :--- | :--- |
| $\sigma_f^2$ | 信号方差 |
| $l$ | 长度尺度 |

#### Matern 核

$$k_{Matern}(\mathbf{x}, \mathbf{x}') = \sigma_f^2 \frac{2^{1-\nu}}{\Gamma(\nu)} \left(\frac{\sqrt{2\nu}||\mathbf{x} - \mathbf{x}'||}{l}\right)^\nu K_\nu\left(\frac{\sqrt{2\nu}||\mathbf{x} - \mathbf{x}'||}{l}\right)$$

常用 $\nu = 3/2$ 或 $\nu = 5/2$。

## 预测公式

### 训练数据

$$\mathcal{D} = \{(\mathbf{x}_i, y_i)\}_{i=1}^{N}$$

### 预测分布

对于新输入 $\mathbf{x}_*$：

$$f_* | \mathbf{x}_*, \mathcal{D} \sim \mathcal{N}(\mu(\mathbf{x}_*), \sigma^2(\mathbf{x}_*))$$

### 均值和方差

$$\mu(\mathbf{x}_*) = \mathbf{k}_*^T \mathbf{K}_y^{-1} \mathbf{y}$$

$$\sigma^2(\mathbf{x}_*) = k(\mathbf{x}_*, \mathbf{x}_*) - \mathbf{k}_*^T \mathbf{K}_y^{-1} \mathbf{k}_*$$

## 超参数优化

### 对数边际似然

$$\log p(\mathbf{y} | \mathbf{X}) = -\frac{1}{2}\mathbf{y}^T \mathbf{K}_y^{-1}\mathbf{y} - \frac{1}{2}\log|\mathbf{K}_y| - \frac{N}{2}\log(2\pi)$$

### 优化方法

| 方法 | 特点 |
| :--- | :--- |
| 梯度下降 | 快速收敛 |
| 坐标下降 | 稳定 |
| 全局优化 | 避免局部最优 |

## 在风场预测中的应用

### 输入特征

| 特征 | 描述 |
| :--- | :--- |
| 时间 $t$ | 采样时刻 |
| 高度 $h$ | 高度层 |
| 纬度 $\phi$ | 地理位置 |
| 历史风速 $v_{t-k}$ | 滞后特征 |

### 预测模型

$$v_{t+1} = f(t, h, \phi, v_t, v_{t-1}, ...)$$

### 不确定性量化

GPR 提供 $95\%$ 置信区间：

$$[ \mu - 1.96\sigma, \mu + 1.96\sigma ]$$

这对控制系统的安全决策至关重要。

## 算法优势

| 优势 | 说明 |
| :--- | :--- |
| 小样本学习 | $N$ 可很小（10-100） |
| 不确定性量化 | 自动提供预测方差 |
| 可解释性 | 核函数可视化 |
| 非参数 | 无需显式函数形式 |

## 相关概念

- [深度强化学习（Deep Reinforcement Learning）](/glossary/dynamics/deep-reinforcement-learning/)
- [区域驻留控制（Regional Station-keeping Control）](/glossary/dynamics/regional-station-keeping/)
- [变分模态分解（VMD）](/glossary/dynamics/variational-mode-decomposition/)

## 参考文献

- Rasmussen C E, Williams C K I. Gaussian Processes for Machine Learning[M]. MIT Press, 2006.
- Wang H, et al. GPR-based Wind Speed Prediction for Airship Station-keeping[J]. IEEE Transactions on Aerospace Systems, 2025.
