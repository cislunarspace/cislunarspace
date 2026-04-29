---
title: 太阳同步轨道（Sun-Synchronous Orbit）
description: 详细解析太阳同步轨道的定义、设计条件、倾角-高度关系及在遥感侦察中的应用
keywords: 太阳同步轨道, Sun-Synchronous Orbit, 轨道进动, 升交点漂移, 遥感轨道
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 太阳同步轨道（Sun-Synchronous Orbit）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 太阳同步轨道详解 | 术语定义
  description: 详细解析太阳同步轨道的设计条件及应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 太阳同步轨道详解 | 术语定义
  description: 详细解析太阳同步轨道的设计条件及应用
  image: /logo.png
permalink: /glossary/fundamentals/sun-synchronous-orbit/
---

# 太阳同步轨道（Sun-Synchronous Orbit）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

太阳同步轨道是一类特殊的逆行轨道，其轨道面的东进速度与视太阳绕地球的运动速度相同（$\dot{\Omega} = 0.9856°$/天），使得轨道面与太阳的相对位置关系基本保持不变。该轨道利用地球扁率（$J_2$ 项）引起的升交点长期漂移实现同步。

## 核心要素

### 设计条件

太阳同步轨道的倾角 $i$ 和半长轴 $a$ 满足：

$$\cos i = -0.0989\left(\frac{a}{R_E}\right)^{7/2}(1-e^2)^2$$

由于 $\cos i < 0$，太阳同步轨道的倾角始终大于 $90°$，属于逆行轨道。

### 倾角-高度关系

| 轨道高度 | 倾角 |
|:---|:---|
| 200 km | 约 96° |
| 500 km | 约 97.4° |
| 800 km | 约 98.8° |
| 1000 km | 约 100° |
| 6000 km | 约 175° |

倾角越大，对应轨道高度越大，但高度存在上限（约6600 km）。

### 轨道特点

| 特点 | 说明 |
|:---|:---|
| 光照条件稳定 | 太阳方向矢量与轨道面的夹角变化较小 |
| 地方时一致 | 以相同方向经过同一地面目标上空时，当地光照特性基本不变 |
| 无需变轨 | 利用自然摄动实现轨道面与太阳的同步 |

### 物理机制

地球赤道隆起部分的附加引力对轨道面产生力矩，引起动量矩进动。当进动角速度恰好等于地球公转角速度（$0.9856°$/天）时，轨道面与太阳的相对位置保持不变。

## 应用价值

太阳同步轨道广泛应用于遥感、侦察和气象卫星任务。由于每次经过同一地区时的光照条件基本一致，有利于图像的对比分析和变化检测。对卫星的温度控制和太阳能电池板蓄电也有利。典型应用包括资源卫星、环境监测卫星和军事侦察卫星。

## 相关概念

- [地球扁率摄动（Earth Oblateness Perturbation）](/glossary/fundamentals/earth-oblateness-perturbation/)
- [冻结轨道（Frozen Orbit）](/glossary/fundamentals/frozen-orbit/)
- [升交点赤经（Right Ascension of the Ascending Node）](/glossary/fundamentals/orbital-elements/)
- [轨道进动（Orbital Precession）](/glossary/fundamentals/perturbation-motion/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 刘林. 航天器轨道理论[M]. 国防工业出版社.
