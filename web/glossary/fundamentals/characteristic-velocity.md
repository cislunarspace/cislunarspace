---
title: 特征速度（Characteristic Velocity）
description: 详细解析特征速度的定义、计算方法及在轨道机动中的应用
keywords: 特征速度, Characteristic Velocity, 速度冲量, 燃料消耗, 轨道机动
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 特征速度（Characteristic Velocity）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 特征速度详解 | 术语定义
  description: 详细解析特征速度的定义及计算方法
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 特征速度详解 | 术语定义
  description: 详细解析特征速度的定义及计算方法
  image: /logo.png
permalink: /glossary/fundamentals/characteristic-velocity/
---

# 特征速度（Characteristic Velocity）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

特征速度 $v_{ch}$ 是轨道机动中各次速度冲量绝对值之和，即 $v_{ch} = \sum|\Delta v_i|$。特征速度是衡量轨道机动燃料消耗的核心指标，直接决定了飞行器所需携带的推进剂质量。

## 核心要素

### 基本定义

$$v_{ch} = |\Delta v_1| + |\Delta v_2| + \cdots + |\Delta v_n|$$

特征速度与实际燃料消耗量之间的关系由齐奥尔科夫斯基公式给出：

$$\frac{\Delta m}{m_0} = 1 - \exp\left(-\frac{v_{ch}}{I_{sp} g_0}\right)$$

### 典型轨道转移的特征速度

| 转移方案 | 特征速度 |
| :--- | :--- |
| 霍曼转移 | $v_{ch} = \Delta v_1 + \Delta v_2$ |
| 双椭圆转移 | $v_{ch} = \Delta v_1 + \Delta v_2 + \Delta v_3$ |
| 无限双椭圆转移 | $v_{ch} = (\sqrt{2}-1)\left(\sqrt{\mu/r_1} + \sqrt{\mu/r_2}\right)$ |

### 轨道调整的特征速度

对于轨道调整机动，两次周向冲量的总特征速度：

$$v_{ch} = |\Delta v_{t1}| + |\Delta v_{t2}|$$

当 $\Delta a$ 和 $\Delta e$ 同号时：

$$v_{ch} = na\frac{|\Delta a|/a - e|\Delta e|}{2}$$

当 $\Delta a$ 和 $\Delta e$ 异号时：

$$v_{ch} = na\frac{|\Delta a|/a + e|\Delta e|}{2}$$

### 最省能量条件

轨道调整时，能量最省的方案是在轨道近地点沿切线方向施加速度冲量。

## 应用价值

特征速度是轨道机动方案比选的核心参数。在方案设计阶段，通过比较不同转移方案的特征速度，选择燃料消耗最少的方案。特征速度还直接用于确定飞行器的推进剂预算，是任务分析和飞行器设计的重要输入。

## 相关概念

- [霍曼转移（Hohmann Transfer）](/glossary/fundamentals/hohmann-transfer/)
- [双椭圆转移（Bi-Elliptic Transfer）](/glossary/fundamentals/bi-elliptic-transfer/)
- [轨道机动（Orbital Maneuver）](/glossary/fundamentals/orbital-maneuver/)
- [比冲（Specific Impulse）](/glossary/fundamentals/specific-impulse/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
