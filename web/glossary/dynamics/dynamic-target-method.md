---
title: 动态靶点法（Dynamic Target Method）
description: 详细解析动态靶点法的定义、与传统靶点法的区别、在低能耗轨道保持中的应用
keywords: 动态靶点法, Dynamic Target Method, 靶点法, 轨道保持, 差分进化, 燃料优化, DRO, 地月空间
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 动态靶点法（Dynamic Target Method）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 动态靶点法详解 | DRO低能耗轨道保持新方法
  description: 详细解析动态靶点法的定义、与传统靶点法的区别、在低能耗轨道保持中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 动态靶点法详解 | DRO低能耗轨道保持新方法
  description: 详细解析动态靶点法的定义、与传统靶点法的区别、在低能耗轨道保持中的应用
  image: /logo.png
permalink: /glossary/dynamics/dynamic-target-method/
---

# 动态靶点法

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

动态靶点法（Dynamic Target Method）是对传统靶点法的改进，由陈昱桔（2024）提出。其核心思想是：由于 DRO 轨道每一圈状态都不相同，靶点的设置也应该是动态变化的。通过差分进化算法对靶点位置进行优化，以减少燃料消耗。

## 与传统靶点法的区别

| 特征 | 传统靶点法 | 动态靶点法 |
|:---|:---|:---|
| 靶点位置 | 等间隔固定选取 | 通过优化算法动态确定 |
| 燃料消耗 | 较高 | 减少约一半 |
| 机动次数 | 较多 | 减少约 25% |
| 适应性 | 对不同 DRO 轨道使用相同策略 | 针对每条 DRO 轨道自适应调整 |

## 基本原理

引入位置系数 $\gamma_i \in [0, 1]$ 表示靶点在 DRO 轨道上的相对位置，以单圈 DRO 轨道保持控制所需的燃料消耗为目标函数，通过差分进化算法寻找最优的靶点位置。

## 仿真结果

对 1 年拟周期 DRO 轨道保持控制的仿真结果表明：
- 设置 2 个靶点时轨道保持效果最好
- 动态靶点法的机动量（燃料消耗）相对于传统靶点法减少约一半
- 机动次数减少 25%

## 相关概念

- [靶点法](/glossary/dynamics/targeting-method/)
- [轨道保持](/glossary/orbits/orbit-keeping/)
- [差分进化算法](/glossary/dynamics/differential-evolution/)
- [远距离逆行轨道（DRO）](/glossary/orbits/dro/)

## 参考文献

- 陈昱桔. 面向地月空间态势感知的DRO轨道设计与控制研究[D]. 2024.
