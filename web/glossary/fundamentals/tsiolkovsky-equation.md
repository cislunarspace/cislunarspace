---
title: 齐奥尔科夫斯基公式（Tsiolkovsky Rocket Equation）
description: 详细解析齐奥尔科夫斯基公式的推导、物理意义、在火箭工程中的核心地位及多级火箭设计思想
keywords: 齐奥尔科夫斯基公式, Tsiolkovsky Equation, 火箭方程, 速度增量, 比冲, 质量比, 多级火箭
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 齐奥尔科夫斯基公式（Tsiolkovsky Equation）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 齐奥尔科夫斯基公式（Tsiolkovsky Equation）详解 | 术语定义
  description: 详细解析齐奥尔科夫斯基公式的推导、物理意义及在火箭工程中的核心地位
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 齐奥尔科夫斯基公式（Tsiolkovsky Equation）详解 | 术语定义
  description: 详细解析齐奥尔科夫斯基公式的推导、物理意义及在火箭工程中的核心地位
  image: /logo.png
permalink: /glossary/fundamentals/tsiolkovsky-equation/
---

# 齐奥尔科夫斯基公式（Tsiolkovsky Rocket Equation）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

齐奥尔科夫斯基公式（Tsiolkovsky Rocket Equation）是火箭动力学的基本方程，描述了在不考虑空气动力和地球引力的理想情况下，火箭在发动机工作期间获得的速度增量与发动机喷气速度、火箭初始质量与终止质量之比之间的关系。该公式由俄国科学家齐奥尔科夫斯基（1857–1935）于 1897 年推导得出。

$$\Delta v = I_{sp} g_0 \ln \frac{m_0}{m_f}$$

其中：

- $\Delta v$：速度增量
- $I_{sp}$：发动机比冲
- $g_0$：标准重力加速度（9.80665 m/s²）
- $m_0$：火箭初始质量（含推进剂）
- $m_f$：火箭终止质量（推进剂耗尽后）
- $m_0/m_f$：质量比

## 核心要素

### 物理意义

齐奥尔科夫斯基公式揭示了火箭飞行的基本规律：

1. **速度增量与比冲成正比**：比冲越高（发动机效率越高），相同质量比下获得的速度增量越大
2. **速度增量与质量比的对数成正比**：质量比越大（携带的推进剂越多），速度增量越大，但收益递减
3. **指数增长的困难**：要使速度增量线性增加，质量比需要指数增长，这就是所谓的"火箭方程的暴政"

### 质量比的限制

由于结构质量不可能为零，质量比有实际上限。以单级火箭为例，结构系数（结构质量/初始质量）通常在 0.05–0.15 之间，对应的最大质量比约为 7–20，对应的最大速度增量约为比冲的 2–3 倍。

### 多级火箭思想

为克服单级火箭的质量比限制，齐奥尔科夫斯基提出了多级火箭的设计思想：将火箭分为多级，每级在推进剂耗尽后抛掉，从而减轻后续飞行的死重。多级火箭的总速度增量为各级速度增量之和：

$$\Delta v_{total} = \sum_{i=1}^{n} I_{sp,i} g_0 \ln \frac{m_{0,i}}{m_{f,i}}$$

### 历史意义

齐奥尔科夫斯基是现代航天学和火箭理论的奠基人。他提出了液体推进剂火箭的构思和原理图，推导出火箭方程，并提出了多级火箭和太空殖民等前瞻性概念。美国科学家戈达德和德国火箭专家奥伯特在此基础上进一步推动了火箭技术的工程实现。

## 应用价值

齐奥尔科夫斯基公式是火箭总体设计的基础工具，用于：

- 估算任务所需的速度增量（$\Delta v$ 预算）
- 确定火箭的级数和质量分配
- 评估发动机性能对火箭运载能力的影响
- 进行轨道转移和任务规划的初步分析

## 相关概念

- [主动段（Powered Phase）](/glossary/fundamentals/powered-phase/)
- [空天飞行器（Aerospace Vehicle）](/glossary/fundamentals/aerospace-vehicle/)
- [轨道机动（Orbital Maneuver）](/glossary/orbits/transfer-orbit/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- Tsiolkovsky K E. Exploration of World Space with Reaction Devices[R]. 1903.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
