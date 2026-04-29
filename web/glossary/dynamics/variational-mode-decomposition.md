---
title: 变分模态分解（VMD）
description: 详细解析变分模态分解的基本原理、算法步骤、参数设置及其在风场信号处理中的应用
keywords: 变分模态分解, Variational Mode Decomposition, VMD, 信号处理, 风场预测, 模态分解, 经验模态分解
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 变分模态分解（VMD）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 变分模态分解（Variational Mode Decomposition）详解 | 术语定义
  description: 详细解析变分模态分解的基本原理、算法步骤、参数设置及其在风场信号处理中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 变分模态分解（Variational Mode Decomposition）详解 | 术语定义
  description: 详细解析变分模态分解的基本原理、算法步骤、参数设置及其在风场信号处理中的应用
  image: /logo.png
permalink: /glossary/dynamics/variational-mode-decomposition/
---

# 变分模态分解（VMD）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

变分模态分解（Variational Mode Decomposition, VMD）是一种自适应、非递归的信号分解方法，通过求解约束变分问题将复杂信号分解为有限个具有稀疏谱特性的本征模态函数（Intrinsic Mode Functions, IMF）。相比经验模态分解（EMD），VMD 具有更好的噪声鲁棒性和数学理论基础。

## 基本原理

### 本征模态函数（IMF）

每个 IMF $u_k(t)$ 需满足：

1. 极值点与过零点数目相等或最多相差一
2. 上包络线和下包络线的均值在任何点为零

### 解析信号表示

$$u_k(t) = A_k(t) \cos(\phi_k(t))$$

其中解析信号：

$$\hat{u}_k(t) = u_k(t) + j\mathcal{H}[u_k(t)] = A_k(t)e^{j\phi_k(t)}$$

## 变分问题构建

### 约束优化问题

$$\min_{\{u_k\}, \{\omega_k\}} \left\{ \sum_{k=1}^{K} ||\partial_t \left[ (\delta(t) + \frac{j}{\pi t}) * u_k(t) \right] e^{-j\omega_k t} ||_2^2 \right\}$$

### 约束条件

$$s.t. \quad \sum_{k=1}^{K} u_k = f(t)$$

其中 $f(t)$ 为原始信号。

## 算法求解

### 乘法算子分离（ADMM）

通过引入拉格朗日乘子 $\lambda$ 和惩罚参数 $\alpha$：

$$\mathcal{L}(\{u_k\}, \{\omega_k\}, \lambda) = \alpha \sum_{k=1}^{K} ||\partial_t [(\delta(t) + \frac{j}{\pi t}) * u_k(t)] e^{-j\omega_k t} ||_2^2$$

### 更新公式

| 变量 | 更新公式 |
|:---|:---|
| $u_k^{n+1}$ | $\frac{f(t) - \sum_{i\neq k} u_i^{n+1} + \frac{\lambda^n}{2}}{1 + 2\alpha(\omega - \omega_k)^2}$ |
| $\omega_k^{n+1}$ | $\frac{\int_0^\infty \omega |\hat{u}_k(\omega)|^2 d\omega}{\int_0^\infty |\hat{u}_k(\omega)|^2 d\omega}$ |
| $\lambda^{n+1}$ | $\lambda^n + \gamma(f - \sum_k u_k^{n+1})$ |

## 参数设置

| 参数 | 含义 | 典型值 |
|:---|:---|:---|
| $K$ | 模态数 | 3-10 |
| $\alpha$ | 惩罚参数 | 1000-5000 |
| $\tau$ | 噪声容限 | 0 |
| 收敛容差 | $\varepsilon$ | $10^{-6}$ |

## 在风场预测中的应用

### 风速信号分解

原始风速信号 $v(t)$ 分解为：

$$v(t) = \sum_{k=1}^{K} IMF_k(t)$$

| IMF 分量 | 特征 | 预测方法 |
|:---|:---|:---|
| IMF1 | 高频湍流 | LSTM/ARIMA |
| IMF2 | 中频波动 | 周期模型 |
| IMF3+ | 低频趋势 | 线性拟合 |

### 预测流程

```
原始风速信号
      ↓
   VMD 分解
      ↓
┌─────────────┐
│ IMF1 → LSTM │ → 高频预测
│ IMF2 → 周期 │ → 中频预测
│ IMF3 → 拟合 │ → 趋势预测
└─────────────┘
      ↓
   信号重构
      ↓
  风速预测值
```

## 相关概念

- [粒子群优化（PSO）](/glossary/dynamics/particle-swarm-optimization/)
- [长短期记忆神经网络（LSTM）](/glossary/dynamics/lstm-neural-network/)
- [航迹规划（Trajectory Planning）](/glossary/navigation/trajectory-planning/)

## 参考文献

- Dragomiretskiy K, Zosso D. Variational Mode Decomposition[J]. IEEE Transactions on Signal Processing, 2024.
- Wang Y, et al. VMD-based Wind Speed Prediction for Airship Control[J]. AIAA Journal of Aerospace Systems, 2025.