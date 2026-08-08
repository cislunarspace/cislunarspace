---
title: Bang-bang控制（Bang-bang Control）
description: 详细解析Bang-bang控制的定义、时间最优特性、在燃料最优控制中的应用及与同伦法的关系
keywords: Bang-bang控制, 时间最优控制, 燃料最优, 推力开关控制, 最优控制, 极小值原理, 同伦法
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Bang-bang控制（Bang-bang Control）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: Bang-bang控制详解 | 燃料最优控制的时间最优特性
  description: 详细解析Bang-bang控制的定义、时间最优特性、在燃料最优控制中的应用及与同伦法的关系
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Bang-bang控制详解 | 燃料最优控制的时间最优特性
  description: 详细解析Bang-bang控制的定义、时间最优特性、在燃料最优控制中的应用及与同伦法的关系
  image: /logo.png
permalink: /glossary/dynamics/bang-bang-control/
---

# Bang-bang 控制（Bang-bang Control）

> 本文作者：天疆说
>
> 参编单位：哈尔滨工业大学航天学院、微小型航天器快速设计与智能集群全国重点实验室
>
> 参考文献：关宇同等. 面向航天器远距离协同交会的超参数自主调优-同伦方法[J]. 航天器环境工程, 2026.

## 定义

Bang-bang 控制是一种时间最优控制律，其特点是控制输入仅在允许范围的两个极端值之间切换：在最大推力和零推力之间切换，没有中间值。这种控制方式得名于推力开关时发出的"砰"声。

## 数学描述

对于燃料最优控制问题，根据庞特里亚金极值原理，最优推力比满足：

$$u_j^* = \begin{cases} 0, & \rho_j > 0 \\ 1, & \rho_j < 0 \\ \in (0,1), & \rho_j = 0 \end{cases}$$

其中 $\rho_j = 1 - \lambda_{mj} - \frac{I_{sp}g_0}{m_j}\|\lambda_{vj}\|$ 为切换函数。

当推力比为 0 或 1 时，控制系统处于"关"或"开"的极端状态，形成 Bang-bang 控制。

## 特性

### 时间最优性

Bang-bang 控制是线性系统的最优控制律，具有时间最优特性：

- 推力始终保持最大或为零
- 不存在中间推力值的持续燃烧
- 切换次数最少化

### 数值困难

Bang-bang 控制的主要数值困难：

- 微分方程右侧不连续
- 无法直接数值积分
- 切换时刻精确确定困难

## 与同伦法的关系

### 同伦法的平滑作用

同伦法通过引入连续化的性能指标，将 Bang-bang 控制转化为连续控制：

$$J = \sum_{j=1}^{2} \frac{\lambda_{j0}F_j}{I_{sp}g_0} \int_{t_0}^{t_f} \left[u_j - \varepsilon u_j(1-u_j)\right] dt$$

当 $\varepsilon > 0$ 时，最优控制变为：

$$u_j^* = \begin{cases} 0, & \rho_j > \varepsilon \\ 1, & \rho_j < -\varepsilon \\ \frac{1}{2} - \frac{\rho_j}{2\varepsilon}, & |\rho_j| \leq \varepsilon \end{cases}$$

控制律在边界层内连续可微。

### 过渡策略

赵海涵等（2026）采用同伦参数序列：
$$\varepsilon_d = 10^{-(d/15)}, \quad d = 1, 2, \cdots, 60$$

逐步将 $\varepsilon$ 从 1 过渡到 0，获得燃料最优 Bang-bang 控制。

## 在航天器交会中的应用

在航天器协同交会问题中：

- 燃料最优控制律呈 Bang-bang 形式
- 适用于有限推力推进系统
- 同伦法有效解决了其数值积分困难

## 相关概念

- [同伦法（Homotopy Method）](/glossary/dynamics/homotopy-method/)
- 庞特里亚金极值原理（Pontryagin's Maximum Principle）
- [协态变量（Co-state Variables）](/glossary/dynamics/co-state-variables/)
- [燃料最优（Fuel-optimal Control）](/glossary/dynamics/fuel-optimal/)

## 参考文献

- 关宇同, 高长生, 胡玉东, 赵海涵. 面向航天器远距离协同交会的超参数自主调优-同伦方法[J]. 航天器环境工程, 2026.
- Pontryagin L S, et al. The Mathematical Theory of Optimal Processes[M]. Wiley, 1962.
- Bryson A E, Ho Y C. Applied Optimal Control[M]. Hemisphere, 1975.
