---
title: 推力（Thrust）
description: 详细解析火箭发动机推力的定义、组成、计算方法及与比冲的关系
keywords: 推力, Thrust, 火箭发动机, 相对力, 静推力, 有效排气速度, 变质量力学
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 推力（Thrust）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 推力（Thrust）详解 | 术语定义
  description: 详细解析火箭发动机推力的定义、组成、计算方法及与比冲的关系
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 推力（Thrust）详解 | 术语定义
  description: 详细解析火箭发动机推力的定义、组成、计算方法及与比冲的关系
  image: /logo.png
permalink: /glossary/fundamentals/thrust/
---

# 推力（Thrust）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

推力（Thrust）是火箭发动机产生的推进力，由动推力（相对力）和静推力两部分组成。推力是火箭克服重力和气动阻力、实现加速飞行的根本动力。其大小为：

$$P = \dot{m} u_e + S_e(p_e - p_H)$$

其中 $\dot{m}$ 为推进剂秒消耗量，$u_e$ 为排气速度，$S_e$ 为喷口截面积，$p_e$ 为喷口燃气静压，$p_H$ 为外部大气压。

## 核心要素

### 推力的组成

| 分量 | 表达式 | 物理意义 |
| :--- | :--- | :--- |
| 动推力（相对力） | $\dot{m} u_e$ | 排出燃气的反作用力，是推力的主要成分 |
| 静推力 | $S_e(p_e - p_H)$ | 喷口截面内外压差产生的力 |

动推力由变质量力学基本原理导出：火箭以速率 $\dot{m}$ 排出质量，排气速度为 $u_e$，产生的反作用力为 $-\dot{m}u_e$。

### 有效排气速度

引入有效排气速度 $u_e'$，将推力表示为更简洁的形式：

$$u_e' = u_e + S_e \frac{p_e}{\dot{m}}$$

$$P = \dot{m} u_e' - S_e p_H$$

有效排气速度与外部大气压无关，是发动机的固有特性参数。

### 真空推力与地面推力

| 状态 | 表达式 | 说明 |
| :--- | :--- | :--- |
| 真空推力 | $P_v = \dot{m} u_e'$ | 最大推力，无大气压损失 |
| 地面推力 | $P_0 = \dot{m} u_e' - S_e p_0$ | 海平面推力 |
| 通用公式 | $P = P_0 + S_e(p_0 - p_H)$ | 任意高度推力 |

### 发动机工作过程

火箭发动机的工作过程：推进剂（燃烧剂 + 氧化剂）送入燃烧室进行化学反应，产生高温高压燃气，燃气通过喷管膨胀加速，高速排出产生推力。不同类型的推进剂（液体、固体、固-液）对应不同的发动机结构。

## 应用价值

推力是火箭主动段飞行的唯一动力来源。推力大小和方向直接影响飞行器的加速度、速度增量和飞行弹道。推力随高度变化（因大气压变化），在真空中达到最大值。对于地月空间任务，推力决定了发射能力、轨道转移速度增量（$\Delta v$）和任务可行性。

## 相关概念

- [比冲（Specific Impulse）](/glossary/fundamentals/specific-impulse/)
- [齐奥尔科夫斯基方程（Tsiolkovsky Equation）](/glossary/fundamentals/tsiolkovsky-equation/)
- [主动段（Powered Phase）](/glossary/fundamentals/powered-phase/)
- [体坐标系（Body Frame）](/glossary/fundamentals/body-frame/)
- [空气动力系数（Aerodynamic Coefficient）](/glossary/fundamentals/aerodynamic-coefficient/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
