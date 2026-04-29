---
title: 庞特里亚金极值原理（Pontryagin's Maximum Principle）
description: 详细解析庞特里亚金极值原理的定义、最优控制的必要条件、协态方程、开关函数及在轨道优化中的应用
keywords: 庞特里亚金极值原理, Pontryagin, 最优控制, 极值原理, 协态方程, Hamilton函数, 开关函数, 燃料最优
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 庞特里亚金极值原理（Pontryagin's Maximum Principle）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 庞特里亚金极值原理详解 | 最优控制理论的基石
  description: 详细解析庞特里亚金极值原理的定义、最优控制的必要条件、协态方程、开关函数及在轨道优化中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 庞特里亚金极值原理详解 | 最优控制理论的基石
  description: 详细解析庞特里亚金极值原理的定义、最优控制的必要条件、协态方程、开关函数及在轨道优化中的应用
  image: /logo.png
permalink: /glossary/dynamics/pontryagin-principle/
---

# 庞特里亚金极值原理（Pontryagin's Maximum Principle）

> 本文作者：天疆说
>
> 参编单位：哈尔滨工业大学航天学院、微小型航天器快速设计与智能集群全国重点实验室
>
> 参考文献：关宇同等. 面向航天器远距离协同交会的超参数自主调优-同伦方法[J]. 航天器环境工程, 2026.

## 定义

庞特里亚金极值原理（Pontryagin's Maximum Principle）是由苏联数学家庞特里亚金等于 1958 年提出的最优控制理论的核心定理。它给出了连续最优控制问题解的一阶必要条件，是间接法求解最优控制问题的理论基础。

## 核心公式

### Hamilton 函数

构造 Hamilton 函数：

$$H = \lambda_v^T f(x, u, t) + \lambda_x^T x + \lambda_m \dot{m}$$

其中 $\lambda = [\lambda_v; \lambda_x; \lambda_m]$ 为协态变量。

### 协态方程

协态变量满足：

$$\dot{\lambda} = -\frac{\partial H}{\partial x}$$

### 极值条件

对于燃料最优控制，最优推力比满足：

$$u_j^* = \begin{cases} 0, & \rho_j > 0 \\ 1, & \rho_j < 0 \\ \in (0,1), & \rho_j = 0 \end{cases}$$

其中 $\rho_j = \frac{\partial H}{\partial u_j}$ 为开关函数。

## 在轨道优化中的应用

### 赵海涵等（2026）的应用

在航天器协同交会燃料最优问题中：

1. **构造性能指标**：
$$J = \sum_{j=1}^{2} \frac{F_j}{I_{sp}g_0} \int_{t_0}^{t_f} u_j dt$$

2. **建立协态方程**：根据 Hamilton 函数求偏导得到协态微分方程

3. **确定最优控制**：根据极值条件确定推力方向和推力比

4. **打靶求解**：将两点边值问题转化为打靶问题求解

## 协态变量的物理意义

协态变量具有深刻的物理意义：

- **位置协态 $\lambda_r$**：与位置梯度相关，影响轨道形状
- **速度协态 $\lambda_v$**：与速度梯度相关，决定推力方向
- **质量协态 $\lambda_m$**：与质量梯度相关，决定燃料消耗

## 与 Bang-bang 控制的关系

庞特里亚金极值原理直接导出了燃料最优控制的 Bang-bang 特性：
- 开关函数 $\rho_j > 0$ 时，推力为零（滑行）
- 开关函数 $\rho_j < 0$ 时，推力最大
- 切换发生在 $\rho_j = 0$ 时

## 相关概念

- [Bang-bang 控制](/glossary/dynamics/bang-bang-control/)
- [协态变量（Co-state Variables）](/glossary/dynamics/co-state-normalization/)
- [Hamilton 函数（Hamiltonian）](/glossary/dynamics/hamiltonian/)
- [打靶法（Shooting Method）](/glossary/dynamics/shooting-method/)
- [同伦法（Homotopy Method）](/glossary/dynamics/homotopy-method/)

## 参考文献

- Pontryagin L S, et al. The Mathematical Theory of Optimal Processes[M]. Wiley, 1962.
- Bryson A E, Ho Y C. Applied Optimal Control[M]. Hemisphere, 1975.
- 关宇同, 高长生, 胡玉东, 赵海涵. 面向航天器远距离协同交会的超参数自主调优-同伦方法[J]. 航天器环境工程, 2026.
