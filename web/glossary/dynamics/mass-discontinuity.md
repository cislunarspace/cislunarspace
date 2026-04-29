---
title: 质量阶跃（Mass Discontinuity）
description: 解析质量阶跃的概念、在轨道转移飞行器批量部署中的影响、以及精确建模的重要性
keywords: 质量阶跃, Mass Discontinuity, 质量变化, 卫星部署, OTV, 状态依赖
author: CislunarSpace
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 质量阶跃（Mass Discontinuity）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 质量阶跃详解 | 轨道部署中的质量变化
  description: 解析质量阶跃的概念及其在轨道转移飞行器批量部署中的影响
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 质量阶跃详解 | 轨道部署中的质量变化
  description: 解析质量阶跃对轨道部署的影响及精确建模的重要性
  image: /logo.png
permalink: /glossary/dynamics/mass-discontinuity/
---

# 质量阶跃（Mass Discontinuity）

>本文编辑来源：胡敏, 肖金伟, 张天天, 陶雪峰 (2026) "面向中高轨小卫星批量部署的轨道转移飞行器任务规划"
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

质量阶跃（Mass Discontinuity）是指轨道转移飞行器（OTV）在执行批量部署任务时，每次成功部署小卫星至其目标轨道后，由于卫星分离导致的OTV总质量发生离散的、显著的下降现象。

与工质连续消耗造成的质量缓慢减小不同，质量阶跃是瞬时的、较大幅度的质量变化，对后续轨道转移的动力学特性有显著影响。

## 产生机制

在OTV批量部署任务中，质量变化呈现两种模式：

### 1. 离散质量阶跃

当OTV成功释放小卫星至目标轨道后，其总质量发生一次显著的离散下降：

$$m_k = m_{k-1} - m_{sat, \pi_k}$$

其中：
- $m_k$：部署第k颗小卫星前OTV质量
- $m_{k-1}$：部署第k-1颗卫星前的OTV质量
- $m_{sat, \pi_k}$：第k颗被部署小卫星的质量

### 2. 连续质量变化

由于工质的持续消耗，OTV质量会发生连续性减小：

$$\dot{m}(t) = -\frac{T_{max}}{I_{sp} \cdot g_0}$$

其中 $I_{sp}$ 为比冲，$g_0$ 为标准重力加速度。

## 对任务规划的影响

### 转移成本的状态依赖性

质量阶跃使得任意两点间的转移成本依赖于其在序列中所处阶段的动态量：

$$C(i, j, k) \neq C(i, j, k')$$

相同的起点-终点组合，在不同的质量状态k和k'下，转移成本不同。

### 对序列优化的影响

研究结果表明（胡敏等, 2026）：

| 模型类型 | N=8工质消耗 | N=12工质消耗 | 可行性 |
|:---|:---|:---|:---|
| 状态相关（SDTSP-DP） | 487.7 kg | 632.1 kg | 可行 |
| 状态无关（SI-Greedy） | 602.5 kg | 902.1 kg* | 超限 |

*表示超出OTV携带的初始工质总量

### 关键发现

1. **系统性低估**：忽略质量阶跃的状态无关模型会系统性低估任务后期的转移成本
2. **最优序列差异**：质量阶跃的精确建模会导致完全不同的最优部署序列
3. **战略绕路现象**：精确建模时，动态规划会战略性地将高成本机动推迟到OTV最轻、效率最高时执行

## 精确建模的重要性

### 工程价值

- **可行性保证**：精确建模确保在各种任务规模下都能找到可行解
- **工质节省**：在N=12场景中，精确建模可节省约25.8%的工质
- **方案可靠性**：避免因低估成本导致的任务失败

### 解耦假设的合理性

胡敏等（2026）的研究验证了在序列规划阶段将连续质量消耗简化为离散阶跃是合理可行的：

- 精化结果与预估成本高度一致（偏差仅2.8%）
- 离散阶跃是影响成本的主要因素
- 连续消耗的影响可在轨迹精化阶段补偿

## 质量阶跃与状态更新

每次部署完成后的质量阶跃导致OTV状态更新：

$$k = |S| - 1$$

其中k为已部署小卫星数量，|S|为当前访问集合的大小。

这一关系决定了成本矩阵 $C(i, j, k)$ 中k的取值，进而影响贝尔曼方程中的最优性条件。

## 相关概念

- [轨道转移飞行器（OTV）](/glossary/fundamentals/orbital-transfer-vehicle/)
- [批量部署（Batch Deployment）](/glossary/dynamics/batch-deployment/)
- [状态依赖旅行商问题（SDTSP）](/glossary/dynamics/state-dependent-tsp/)
- [Q-law控制律](/glossary/dynamics/q-law/)
- [中心辐射式（Hub-and-spoke）](/glossary/orbits/hub-and-spoke/)

## 参考文献

- 胡敏, 肖金伟, 张天天, 陶雪峰. 面向中高轨小卫星批量部署的轨道转移飞行器任务规划[J]. 航天器工程, 2026, 25(3): 634-646.
- Apa R, Kaminer I, Hudson J, et al. Optimal low-thrust orbital transfer for servicing multiple satellites in elliptical orbits[J]. Journal of Guidance, Control, and Dynamics, 2023, 46(6): 1723-1738.
- Lee D, Ahn J. Optimal multitarget rendezvous using hybrid propulsion system[J]. Journal of Spacecraft and Rockets, 2023, 60(2): 456-471.