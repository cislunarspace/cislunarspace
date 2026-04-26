---
title: 轨道辨识（Orbit Identification）
description: 详细解析地月空间轨道辨识的定义、与传统数值积分方法的对比、基于特征参数的辨识流程，以及对观测弧段和观测误差的鲁棒性
keywords: 轨道辨识, Orbit Identification, 地月空间态势感知, 平动点轨道, CRTBP, 参考轨道, 特征参数, 贝叶斯优化
author: 天疆说
date: 2026-04-23
lastUpdated: 2026-04-23
wechatShare:
  title: 轨道辨识（Orbit Identification）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 轨道辨识详解 | 地月空间态势感知
  description: 详细解析地月空间轨道辨识的定义、与传统数值积分方法的对比、基于特征参数的辨识流程，以及对观测弧段和观测误差的鲁棒性
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 轨道辨识详解 | 地月空间态势感知
  description: 详细解析地月空间轨道辨识的定义、与传统数值积分方法的对比、基于特征参数的辨识流程，以及对观测弧段和观测误差的鲁棒性
  image: /logo.png
permalink: /glossary/orbit-identification/
---

# 轨道辨识

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文编辑来源：Qiao et al. (2025) "Orbital parameter characterization and objects cataloging for Earth-Moon collinear libration points"
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

轨道辨识（Orbit Identification）是地月空间态势感知中的核心问题：给定一段时间内观测得到的航天器状态序列，识别出该航天器所运行的**参考轨道**（reference orbit），即 CR3BP 模型中的周期或准周期轨道。

这一问题的本质是：在 CR3BP 建立的标准轨道库中，寻找与观测到的实际运动最匹配的参考轨道，从而获得该航天器的物理特征（周期、振幅等），服务于空间目标编目、碰撞预警和空间交通管理。

## 问题的逆性质

轨道辨识与轨道设计是**互逆**的两个过程：

| 过程 | 输入 | 输出 |
|:---|:---|:---|
| **轨道设计** | 参考轨道的物理参数（周期、振幅等） | 在星历模型下的实际轨道（数值积分） |
| **轨道辨识** | 观测到的实际轨道状态序列 | 对应的 CR3BP 参考轨道及其物理参数 |

在轨道设计中，先在 CR3BP 中获得参考轨道，再通过多步打靶法、两级微分修正等方法在星历模型中精化，获得满足实际引力环境的真实轨道。

在轨道辨识中，方向相反：需要从实际轨道状态序列出发，提取物理上可解释的参数（如周期、振幅），找到对应的参考轨道。

## 传统方法的局限性

最直接的轨道辨识方法是**数值积分后比对**：选择特定状态向量进行积分得到完整轨道，再与观测结果比对。然而在地月空间，该方法面临根本性困难：

### 1. 观测误差

对于非合作目标，轨道状态来自雷达/光学跟踪，存在噪声误差。

### 2. 动力学模型不确定性

积分过程中存在未建模因素：摄动（太阳辐射压、月球非球形引力、其他天体）以及非合作航天器的未知轨道机动。

### 3. 混沌敏感性

CR3BP 本身是非可积的混沌系统，初始误差会导致数值积分快速发散。Qiao et al. (2025) 的数值实验表明：当位置误差超过 **10 km**、速度误差超过 **0.1 m/s** 时，积分轨迹迅速发散，无法识别初始 Halo 轨道。

## 基于特征参数的辨识方法

Qiao et al. (2025) 提出了一种基于六维特征参数的轨道辨识方法，有效规避了数值积分发散问题：

### 核心思想

1. 将六维状态 $(X, Y, Z, \dot{X}, \dot{Y}, \dot{Z})$ 转换为六维特征参数 $[q_1, p_1, I_2, \theta_2, I_3, \theta_3]$
2. 特征参数的物理含义清晰，与轨道的周期、振幅等直接相关
3. 在 Poincaré 截面图上，参考轨道与截面坐标 $[I_2^{(0)}, I_3^{(0)}]$ 有一一对应关系
4. 通过优化方法在截面图上搜索，使实际轨道与参考轨道的均方误差（MSE）最小

### 优化模型

给定观测序列 $[t_1, t_2, ..., t_n]$ 对应的状态 $[X_1, X_2, ..., X_n]$，定义 MSE：

$$\text{MSE} = \frac{1}{n}\sum_{i=1}^{n}\left[(I_2^{(i)} - \varphi_{I_2}(\sigma_0; t_0, t_i))^2 + (I_3^{(i)} - \varphi_{I_3}(\sigma_0; t_0, t_i))^2\right]$$

其中 $\varphi$ 为中心流形正则方程的积分流函数。

优化问题：

$$\min_{\text{MSE}} \quad x = [I_2^{(0)}, I_3^{(0)}, t_0]$$
$$\text{s.t.} \quad |I_j^{(0)} - I_j^*| \leq I_{\max}, \quad j=2,3$$
$$\quad t_0 \in [0, T_{\max}]$$

### 贝叶斯优化

由于 MSE 函数是黑箱优化问题（计算代价高、无显式导数），Qiao et al. (2025) 采用**贝叶斯优化**（Bayesian Optimization）求解，在 30 次函数评估内即可找到全局最优，计算效率高。

## 敏感性分析

Qiao et al. (2025) 对影响轨道辨识的两大因素进行了系统性分析：

### 1. 观测弧段长度

| 弧段长度 | 辨识结果特征 |
|:---|:---|
| 短弧（1小时） | 结果分散，主要沿等能量线分布，代表"瞬时轨道" |
| 长弧（1个月） | 结果收敛至参考轨道，代表"平均轨道" |

这一现象与二体问题中的**瞬时根数**（osculating elements）和**平均根数**（mean elements）的概念类似。

### 2. 观测误差（状态偏差）

对状态误差的鲁棒性：

- 位置误差 < **100 km** 且速度误差 < **1 m/s** 时，辨识结果波动小
- 100 km 位置误差与 1 m/s 速度误差对鲁棒性的影响相当
- 这为未来地月空间轨道测定技术发展指明方向：**应更加注重速度测量精度的提升**

## 意义

该方法为地月空间态势感知提供了一种**不依赖长期数值积分**的轨道辨识途径，在非合作目标、低精度观测条件下依然有效。结合 Poincaré 截面分布地图，可以快速判定目标所处轨道族（北族 Halo、南族 Halo、Lissajous 等）及其物理参数。

## 相关概念

- [中心流形（Central Manifold）](/glossary/central-manifold/)
- [Poincaré 截面（Poincaré Section）](/glossary/poincare-section/)
- [作用角变量（Action-Angle Variables）](/glossary/action-angle/)
- [Birkhoff-Gustavson 标准型](/glossary/birkhoff-gustavson/)
- [圆型限制性三体问题（CR3BP）](/glossary/cr3bp/)
- 地月空间态势感知（Cislunar Space Situational Awareness）
- 参考轨道（Reference Orbit）
- 非合作目标（Non-cooperative Target）

## 参考文献

- Qiao C, Long X, Yang L, et al. Orbital parameter characterization and objects cataloging for Earth-Moon collinear libration points[J]. Chinese Journal of Aeronautics, 2025. doi: 10.1016/j.cja.2025.103869.
- Wang X, Jin Y C, Schmitt S, et al. Recent advances in Bayesian optimization[J]. ACM Comput Surv, 2023, 55(13s): 1-36.
