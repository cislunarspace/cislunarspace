---
title: 推力饱和（Thrust Saturation）
description: 实际推力输出达到发动机最大推力上限的状态。论文通过对每一步预测的Δv施加二范数约束来考虑推力饱和，在二次规划中以无穷范数不等式近似实现。
keywords: 推力饱和, Thrust Saturation, 轨道力学, 三体问题, 非线性动力学, 轨道稳定性
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 推力饱和（Thrust Saturation）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 推力饱和详解 | 术语定义
  description: 实际推力输出达到发动机最大推力上限的状态。论文通过对每一步预测的Δv施加二范数约束来考虑推力饱和，在二次规划中以无穷范数不等式近似实现。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 推力饱和详解 | 术语定义
  description: 实际推力输出达到发动机最大推力上限的状态。论文通过对每一步预测的Δv施加二范数约束来考虑推力饱和，在二次规划中以无穷范数不等式近似实现。
  image: /logo.png
permalink: /glossary/dynamics/thrust-saturation/
---

# 推力饱和（Thrust Saturation）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

实际推力输出达到发动机最大推力上限的状态。论文通过对每一步预测的Δv施加二范数约束来考虑推力饱和，在二次规划中以无穷范数不等式近似实现。

## 应用价值

推力饱和是指推力器达到最大输出限制的状态。在低推力轨道优化中，推力饱和约束影响最优控制的形式和转移性能，设计时需要考虑推力饱和的影响，避免给出物理上不可行的控制方案。

## 相关概念

- [雅可比常数（Jacobi Constant, JC）](/glossary/dynamics/jacobi-constant-jc/)
- [希尔区域（Hill Region）](/glossary/fundamentals/hill-region/)
- [庞加莱映射（Poincaré Map）](/glossary/dynamics/poincar-map/)
- [稳定性（Stability）](/glossary/dynamics/stability/)
## 参考文献

- Capannolo 等 - 2023 - Model predictive control for formation reconfiguration exploiting quasi-periodic tori in the cislunar environment
