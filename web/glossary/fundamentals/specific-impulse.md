---
title: 比冲（Specific Impulse）
description: 详细解析比冲的定义、两种量纲、与有效排气速度的关系及作为发动机性能指标的意义
keywords: 比冲, Specific Impulse, 比推力, 比冲量, 有效排气速度, 发动机性能, 推进剂
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 比冲（Specific Impulse）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 比冲（Specific Impulse）详解 | 术语定义
  description: 详细解析比冲的定义、两种量纲及作为发动机性能指标的意义
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 比冲（Specific Impulse）详解 | 术语定义
  description: 详细解析比冲的定义、两种量纲及作为发动机性能指标的意义
  image: /logo.png
permalink: /glossary/fundamentals/specific-impulse/
---

# 比冲（Specific Impulse）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

比冲（Specific Impulse, $I_{SP}$）是衡量火箭发动机性能的核心指标，定义为发动机推力与推进剂重量流率（或质量流率）之比。比冲越高，单位质量推进剂产生的推力越大，发动机效率越高。

## 核心要素

### 两种量纲定义

| 定义 | 公式 | 单位 | 说明 |
|:---|:---|:---|:---|
| 重量比冲 | $I_{SP} = \frac{P}{\dot{m} g_0}$ | 秒（s） | 工程中最常用 |
| 质量比冲 | $I_{SP} = \frac{P}{\dot{m}}$ | m/s | 等效于有效排气速度 |

其中 $g_0 = 9.80665$ m/s² 为海平面标准重力加速度。两种定义之间可相互转换。

### 与有效排气速度的关系

将推力公式 $P = \dot{m} u_e' - S_e p_H$ 代入比冲定义：

$$I_{SP} = \frac{u_e'}{g_0} - \frac{S_e p_H}{\dot{m} g_0}$$

| 状态 | 比冲 |
|:---|:---|
| 真空比冲 | $I_{SP,v} = \frac{u_e'}{g_0}$（最大值） |
| 地面比冲 | $I_{SP,0} = \frac{u_e'}{g_0} - \frac{S_e p_0}{\dot{m} g_0}$ |

### 典型发动机比冲

| 发动机类型 | 推进剂 | 真空比冲（s） |
|:---|:---|:---|
| 液体发动机 | 液氢 + 液氧 | 430–460 |
| 液体发动机 | 偏二甲肼 + 四氧化二氮 | 300–340 |
| 固体发动机 | 复合推进剂 | 240–290 |
| 电推进 | 氙气 | 1000–5000 |

### 比冲与齐奥尔科夫斯基方程

比冲直接决定火箭的速度增量能力。由齐奥尔科夫斯基方程：

$$\Delta v = I_{SP} g_0 \ln\frac{m_0}{m_f}$$

比冲每提高 10%，在相同质量比下速度增量增加 10%。

## 应用价值

比冲是火箭发动机选型和任务分析的首要参数。高比冲意味着更高的推进效率和更大的速度增量能力。对于地月空间任务，比冲直接影响运载能力、轨道转移所需的推进剂质量以及任务的可行性。深空探测任务偏好高比冲发动机（如电推进），以减少推进剂携带量。

## 相关概念

- [推力（Thrust）](/glossary/fundamentals/thrust/)
- [齐奥尔科夫斯基方程（Tsiolkovsky Equation）](/glossary/fundamentals/tsiolkovsky-equation/)
- [主动段（Powered Phase）](/glossary/fundamentals/powered-phase/)
- [升阻比（Lift-to-Drag Ratio）](/glossary/fundamentals/lift-to-drag-ratio/)
- [空天飞行器（Aerospace Vehicle）](/glossary/fundamentals/aerospace-vehicle/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- Sutton G P, Biblarz O. Rocket Propulsion Elements[M]. 9th ed. Wiley, 2016.
