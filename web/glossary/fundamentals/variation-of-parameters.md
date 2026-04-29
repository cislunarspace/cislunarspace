---
title: 参数变分法（Variation of Parameters）
description: 详细解析参数变分法的定义、原理、历史沿革及在轨道摄动分析中的核心地位
keywords: 参数变分法, Variation of Parameters, 常数变易法, 密切轨道, 轨道根数变分方程
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 参数变分法（Variation of Parameters）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 参数变分法详解 | 术语定义
  description: 详细解析参数变分法的定义及在轨道摄动分析中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 参数变分法详解 | 术语定义
  description: 详细解析参数变分法的定义及在轨道摄动分析中的应用
  image: /logo.png
permalink: /glossary/fundamentals/variation-of-parameters/
---

# 参数变分法（Variation of Parameters）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

参数变分法（也称常数变易法）是一种轨道摄动分析方法，由欧拉于1748年首先提出，拉格朗日于1808年完善发表。该方法以轨道根数（或正则参数）为变量，认为密切轨道连续变化，与实际轨道在任意瞬间相切且速度相同，通过数值积分获得任意瞬间的密切轨道，从而确定实际轨道。其基本方程为：

$$\dot{\boldsymbol{\sigma}} = \mathrm{f}(\boldsymbol{\sigma}, t, \varepsilon)$$

其中 $\boldsymbol{\sigma}$ 为六个轨道根数或正则参数组成的向量，$\varepsilon$ 为与摄动加速度量级相当的小参数。

## 核心要素

### 与其他特殊摄动法的比较

| 方法 | 变量 | 特点 |
|:---|:---|:---|
| 科威尔法 | 位置速度 | 直接积分，原理最简单，适用范围广 |
| 恩克法 | 位置速度偏差 | 以密切轨道为基准，偏差为小量 |
| 参数变分法 | 轨道根数 | 密切轨道连续变化，步长可取较大值 |

### 核心思想

- 密切轨道（吻切轨道）在任意瞬间与实际轨道相切，速度相同
- 轨道根数或正则参数比位置速度变化慢得多，积分步长可取较大数值
- 变分参数的选择要尽量避免运动方程奇点的出现

### 典型变分方程

| 方程类型 | 适用场景 | 特点 |
|:---|:---|:---|
| 高斯型 I | 任意摄动力 | 摄动力分解为径向、周向、法向分量 |
| 高斯型 II | 大气阻力分析 | 摄动力分解为切向、主法向、副法向分量 |
| 拉格朗日型 | 保守摄动力 | 以摄动势函数偏导数表示 |

### 历史地位

参数变分法是科威尔法与恩克法出现前处理轨道摄动问题的唯一成功方法，在天体力学摄动理论中占据核心地位，至今仍是研究航天器轨道摄动的最重要方法之一。

## 应用价值

参数变分法是轨道摄动分析的基础方法。通过该方法建立的高斯型和拉格朗日型摄动方程，可以分析地球扁率、大气阻力、太阳光压、三体引力等各类摄动力对轨道的影响。在一般摄动法中，级数展开法和平均根数法都是在参数变分法方程基础上进行解析求解。

## 相关概念

- [摄动运动（Perturbation Motion）](/glossary/fundamentals/perturbation-motion/)
- [高斯型摄动方程（Gaussian Perturbation Equations）](/glossary/fundamentals/gaussian-perturbation-equations/)
- [拉格朗日型摄动方程（Lagrangian Perturbation Equations）](/glossary/fundamentals/lagrangian-perturbation-equations/)
- [轨道根数（Orbital Elements）](/glossary/fundamentals/orbital-elements/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 刘林. 航天器轨道理论[M]. 国防工业出版社.
