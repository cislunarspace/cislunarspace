---
title: 两点边值问题（TPBVP）
description: 详细解析两点边值问题的定义、数学描述、在轨道优化中的求解方法及其与打靶法的关系
keywords: 两点边值问题, TPBVP, 边值问题, 打靶法, 轨道优化, 间接法, 最优控制
author: 天疆说
date: 2026-06-05
lastUpdated: 2026-06-05
wechatShare:
  title: 两点边值问题（TPBVP）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 两点边值问题详解 | 轨道优化的核心数学问题
  description: 详细解析两点边值问题的定义、数学描述、在轨道优化中的求解方法及其与打靶法的关系
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 两点边值问题详解 | 轨道优化的核心数学问题
  description: 详细解析两点边值问题的定义、数学描述、在轨道优化中的求解方法及其与打靶法的关系
  image: /logo.png
permalink: /glossary/dynamics/tpbvp/
---

# 两点边值问题（Two-Point Boundary Value Problem, TPBVP）

> 本文作者：天疆说
>
> 参编单位：哈尔滨工业大学航天学院、微小型航天器快速设计与智能集群全国重点实验室

## 定义

两点边值问题（Two-Point Boundary Value Problem, TPBVP）是一类微分方程边值问题，其边界条件分别施加在积分区间的起点和终点。在航天器轨道优化中，TPBVP 是间接法的核心数学问题：由庞特里亚金极值原理导出的最优轨迹必须同时满足初始状态约束和终端状态约束，构成典型的两点边值结构。

## 数学描述

### 一般形式

TPBVP 的一般形式为求解微分方程：

$$\dot{\mathbf{y}} = \mathbf{f}(\mathbf{y}, t), \quad t \in [t_0, t_f]$$

满足边界条件：

$$\boldsymbol{\psi}(\mathbf{y}(t_0), \mathbf{y}(t_f)) = \mathbf{0}$$

其中 $\mathbf{y}$ 为状态与协态的组合向量，$\boldsymbol{\psi}$ 为边值约束函数。

### 轨道优化中的 TPBVP

在航天器燃料最优轨道设计中，TPBVP 的具体形式为：

- **状态方程**（Hamilton 正则方程）：
$$\dot{\mathbf{r}} = \frac{\partial H}{\partial \boldsymbol{\lambda}_r}, \quad \dot{\mathbf{v}} = \frac{\partial H}{\partial \boldsymbol{\lambda}_v}, \quad \dot{m} = \frac{\partial H}{\partial \lambda_m}$$

- **协态方程**：
$$\dot{\boldsymbol{\lambda}} = -\frac{\partial H}{\partial \mathbf{x}}$$

- **初始条件**：$\mathbf{r}(t_0), \mathbf{v}(t_0), m(t_0)$ 已知
- **终端条件**：$\mathbf{r}(t_f) = \mathbf{r}_{target}, \mathbf{v}(t_f) = \mathbf{v}_{target}$
- **未知量**：初始协态 $\boldsymbol{\lambda}(t_0)$ 和终端时间 $t_f$

## 求解方法

### 打靶法（Shooting Method）

打靶法是求解 TPBVP 最直观的方法：猜测未知的初始协态 $\boldsymbol{\lambda}(t_0)$，前向积分至终端，通过迭代修正猜测值使终端条件满足。

设打靶函数为：

$$\mathbf{F}(\boldsymbol{\lambda}(t_0), t_f) = \begin{bmatrix} \mathbf{r}(t_f) - \mathbf{r}_{target} \\ \mathbf{v}(t_f) - \mathbf{v}_{target} \end{bmatrix}$$

通过 Newton-Raphson 迭代求解 $\mathbf{F} = \mathbf{0}$。

### 多重打靶法

对于长时间转移或复杂动力学，单次打靶的数值误差累积严重。多重打靶法将积分区间划分为若干子段，在每段端点引入匹配条件，降低对初始猜测的敏感性。

### 数值困难

TPBVP 求解面临的主要困难：
- 协态变量的物理意义不直观，难以给出合理初始猜测
- 打靶函数可能高度非线性，存在多个局部极小
- 采用协态归一化技术可将搜索空间从无穷大缩减到单位球面，显著改善收敛性

## 在地月空间中的应用

在地月空间任务中，TPBVP 是轨道优化间接法的核心求解对象。从近地轨道到月球轨道的低能转移、NRHO 轨道的入轨与保持、以及多航天器协同交会等最优控制问题，最终都归结为求解 TPBVP。协态归一化和同伦法等技术的引入，有效改善了 TPBVP 的数值可解性。

## 相关概念

- [协态变量（Co-state Variables）](/glossary/dynamics/co-state-variables/)
- [协态归一化（Co-state Normalization）](/glossary/dynamics/co-state-normalization/)
- [庞特里亚金极值原理（Pontryagin's Maximum Principle）](/glossary/dynamics/pontryagin-principle/)
- [哈密顿函数（Hamiltonian）](/glossary/dynamics/hamiltonian/)
- [打靶法（Shooting Method）](/glossary/dynamics/shooting-method/)
- [同伦法（Homotopy Method）](/glossary/dynamics/homotopy-method/)
