---
title: 扩展卡尔曼滤波（Extended Kalman Filter, EKF）
description: 详细解析扩展卡尔曼滤波的原理、算法流程、在自主导航中的应用及其优缺点
keywords: 扩展卡尔曼滤波, EKF, 卡尔曼滤波, 非线性滤波, 状态估计, 导航滤波, 轨道确定
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 扩展卡尔曼滤波（EKF）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 扩展卡尔曼滤波详解 | 非线性系统状态估计方法
  description: 详细解析扩展卡尔曼滤波的原理、算法流程、在自主导航中的应用及其优缺点
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 扩展卡尔曼滤波详解 | 非线性系统状态估计方法
  description: 详细解析扩展卡尔曼滤波的原理、算法流程、在自主导航中的应用及其优缺点
  image: /logo.png
permalink: /glossary/navigation/extended-kalman-filter/
---

# 扩展卡尔曼滤波（Extended Kalman Filter, EKF）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文参考：钱霙婧(2014)《地月空间拟周期轨道上航天器自主导航与轨道保持研究》
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

扩展卡尔曼滤波（Extended Kalman Filter, EKF）是标准卡尔曼滤波针对非线性系统的推广版本，通过在当前状态估计处对非线性系统进行一阶线性化，实现对非线性系统的状态估计。EKF 是航天器自主导航领域应用最广泛的滤波算法之一。

EKF 的核心思想：将非线性系统方程在当前状态估计处泰勒展开，保留一阶项（忽略高阶项），将问题转化为线性系统的卡尔曼滤波问题。

## 算法原理

### 系统模型

设非线性系统模型为：

**状态方程：**
$$\mathbf{x}_{k+1} = \mathbf{f}(\mathbf{x}_k, \mathbf{u}_k) + \mathbf{w}_k$$

**观测方程：**
$$\mathbf{y}_k = h(\mathbf{x}_k) + \mathbf{v}_k$$

其中 $\mathbf{w}_k \sim \mathcal{N}(\mathbf{0}, \mathbf{Q}_k)$ 为过程噪声，$\mathbf{v}_k \sim \mathcal{N}(\mathbf{0}, \mathbf{R}_k)$ 为观测噪声。

### EKF 算法流程

#### 1. 状态预测

利用非线性状态方程预测状态和协方差：

$$\hat{\mathbf{x}}_{k|k-1} = \mathbf{f}(\hat{\mathbf{x}}_{k-1|k-1}, \mathbf{u}_{k-1})$$

$$\mathbf{P}_{k|k-1} = \mathbf{A}_k \mathbf{P}_{k-1|k-1} \mathbf{A}_k^T + \mathbf{Q}_{k-1}$$

其中 $\mathbf{A}_k = \frac{\partial \mathbf{f}}{\partial \mathbf{x}}\big|_{\hat{\mathbf{x}}_{k-1|k-1}}$ 为状态转移矩阵（Jacobian）。

#### 2. 线性化

计算观测矩阵（Jacobian）：

$$\mathbf{H}_k = \frac{\partial h}{\partial \mathbf{x}}\big|_{\hat{\mathbf{x}}_{k|k-1}}$$

#### 3. 卡尔曼增益

$$\mathbf{K}_k = \mathbf{P}_{k|k-1} \mathbf{H}_k^T (\mathbf{H}_k \mathbf{P}_{k|k-1} \mathbf{H}_k^T + \mathbf{R}_k)^{-1}$$

#### 4. 状态更新

$$\hat{\mathbf{x}}_{k|k} = \hat{\mathbf{x}}_{k|k-1} + \mathbf{K}_k (\mathbf{y}_k - h(\hat{\mathbf{x}}_{k|k-1}))$$

$$\mathbf{P}_{k|k} = (\mathbf{I} - \mathbf{K}_k \mathbf{H}_k) \mathbf{P}_{k|k-1}$$

## 在自主导航中的应用

### 地月空间导航

钱霙婧(2014)将 EKF 应用于地月平动点拟周期轨道的自主导航系统：

1. **状态向量**：$\mathbf{X} = [\mathbf{r}^T, \mathbf{v}^T]^T$，包含位置和速度
2. **动力学模型**：星历模型下的 N 体动力学
3. **观测输入**：日地月敏感器的角度测量信息
4. **滤波输出**：航天器位置和速度的估计值及协方差

### 算法实现要点

#### Jacobian 矩阵计算

EKF 的关键在于计算状态转移矩阵 $\mathbf{A}_k$ 和观测矩阵 $\mathbf{H}_k$。对于星历模型：

- 状态转移矩阵通过变分方程积分得到
- 观测矩阵通过对观测函数求偏导得到

#### 数值稳定性

长时间积分可能导致协方差矩阵失去正定性，需要采用：

- U-D 分解
- 平方根滤波
- 协方差限定

### 收敛性分析

EKF 的收敛性受以下因素影响：

1. **初始估计**：初始状态估计应足够准确
2. **噪声统计**：过程噪声和观测噪声的统计特性需准确建模
3. **可观测性**：系统需满足可观测性要求
4. **线性化误差**：对于强非线性系统，高阶项忽略可能引起误差积累

## EKF 的优缺点

### 优点

| 优点 | 说明 |
| :--- | :--- |
| 计算效率高 | Jacobian 矩阵计算和矩阵运算的计算复杂度为 $O(n^2)$ |
| 工程成熟 | 理论完善，代码库丰富，广泛应用于航天工程 |
| 实时性强 | 适合在线估计，存储需求低 |

### 缺点

| 缺点 | 说明 |
| :--- | :--- |
| 线性化误差 | 一阶近似对于强非线性系统可能误差较大 |
| 收敛性不确定 | 不保证全局收敛，可能发散 |
| Jacobian 计算 | 对复杂系统雅可比矩阵推导繁琐且容易出错 |

## EKF 的改进算法

### 无迹卡尔曼滤波（UKF）

UKF 使用 sigma 点采样代替线性化，避免 Jacobian 计算：

- 精度可达二阶或三阶
- 对强非线性系统鲁棒性更好
- 计算量略高于 EKF

### 容积卡尔曼滤波（CKF）

基于球面容积规则的数值积分方法，数值稳定性好。

### 自适应 EKF

在线估计噪声统计特性，适应环境变化。

## 相关概念

- [自主导航（Autonomous Navigation）](/glossary/navigation/autonomous-navigation/)
- [日地月信息自主导航（SEM Navigation）](/glossary/navigation/sem-autonomous-navigation/)
- [可观测性（Observability）](/glossary/navigation/observability/)
- [状态转移矩阵（STM）](/glossary/dynamics/state-transition-matrix/)
- [星历模型（Ephemeris Model）](/glossary/dynamics/ephemeris-model/)

## 参考文献

- Gelb A. Applied optimal estimation[M]. MIT press, 1974.
- 钱霙婧. 地月空间拟周期轨道上航天器自主导航与轨道保持研究[D]. 哈尔滨工业大学, 2014.
- Julier S J, Uhlmann J K. Unscented filtering and nonlinear estimation[J]. Proceedings of the IEEE, 2004.
