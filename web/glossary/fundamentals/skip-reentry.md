---
title: 跳跃式再入（Skip Reentry）
description: 详细解析跳跃式再入的定义、轨道特征及在航天器返回中的应用
keywords: 跳跃式再入, Skip Reentry, 升力再入, 再入轨道, 大气层出入
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 跳跃式再入（Skip Reentry）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 跳跃式再入详解 | 术语定义
  description: 详细解析跳跃式再入的定义及轨道特征
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 跳跃式再入详解 | 术语定义
  description: 详细解析跳跃式再入的定义及轨道特征
  image: /logo.png
permalink: /glossary/fundamentals/skip-reentry/
---

# 跳跃式再入（Skip Reentry）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

跳跃式再入是指航天器以较小的再入角进入大气层后，依靠升力再次冲出大气层，做一段弹道式飞行，然后再进入大气层的再入方式。航天器可以多次出入大气层，每进入一次利用大气进行一次减速。对进入大气层后虽不再跳出大气层，但靠升力使再入轨道高度有较大起伏变化的轨道，也称作跳跃式轨道。

## 核心要素

### 轨道特征

跳跃式再入轨道与弹道式、升力式轨道的主要区别：

| 轨道类型 | 高度变化 | 升力利用 | 减速方式 |
|:---|:---|:---|:---|
| 弹道式再入 | 单调下降 | 无或不控制 | 一次性大气减速 |
| 升力式再入 | 缓慢下降 | 持续利用 | 连续大气减速 |
| 跳跃式再入 | 大幅起伏 | 间歇利用 | 多次大气减速 |

### 物理机制

跳跃式再入利用升力实现轨道高度的周期性变化：
1. 以小再入角进入大气层，产生升力
2. 升力将航天器推出大气层，进入弹道式飞行段
3. 在真空段无气动力，沿椭圆弧飞行
4. 再次进入大气层，继续减速
5. 可重复多次，直至速度降至所需值

### 轨道高度起伏

跳跃式再入轨道的高度有较大起伏变化。每次出入大气层时：
- 进入大气层阶段：气动阻力减速，气动加热
- 大气层外阶段：无气动力，沿椭圆弧自由飞行
- 每次进入大气层的减速效果累积

### 与弹道式再入的对比

| 比较项 | 弹道式再入 | 跳跃式再入 |
|:---|:---|:---|
| 再入角 | 可较大 | 需较小 |
| 减速过程 | 激烈、一次完成 | 温和、分次完成 |
| 过载峰值 | 较高 | 较低 |
| 航程 | 较短 | 较长 |
| 着陆精度 | 较低 | 可通过升力调节 |

## 应用价值

跳跃式再入是利用升力实现温和减速的重要方式。通过多次出入大气层，可以将总减速量分散到多次大气通过中，降低单次过载峰值和热流峰值。这种方法适用于需要降低再入热载荷的高超声速返回任务，也适用于从月球或行星返回的高速再入场景。

## 相关概念

- [配平攻角（Trim Angle of Attack）](/glossary/fundamentals/trim-angle-of-attack/)
- [再入走廊（Reentry Corridor）](/glossary/fundamentals/reentry-corridor/)
- [零攻角再入（Zero-Angle-of-Attack Reentry）](/glossary/fundamentals/zero-angle-of-attack-reentry/)
- [驻点热流（Stagnation Heat Flux）](/glossary/fundamentals/stagnation-heat-flux/)
- [再入段（Reentry Phase）](/glossary/fundamentals/reentry-phase/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
