---
title: 零攻角再入（Zero-Angle-of-Attack Reentry）
description: 详细解析零攻角再入的定义、运动方程简化及弹道特性
keywords: 零攻角再入, Zero-Angle-of-Attack Reentry, 弹道再入, 零升力再入, 再入弹道
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 零攻角再入（Zero-Angle-of-Attack Reentry）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 零攻角再入详解 | 术语定义
  description: 详细解析零攻角再入的定义及弹道特性
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 零攻角再入详解 | 术语定义
  description: 详细解析零攻角再入的定义及弹道特性
  image: /logo.png
permalink: /glossary/fundamentals/zero-angle-of-attack-reentry/
---

# 零攻角再入（Zero-Angle-of-Attack Reentry）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

零攻角再入是指再入飞行器的总攻角 $\eta = 0$，速度方向与飞行器纵轴重合，升力 $L = 0$ 的再入方式，也称弹道再入或零升力再入。对于静稳定的再入飞行器，当有攻角时，稳定力矩将使其减小，最终速度方向与纵轴重合，飞行器不再受到升力作用。

## 核心要素

### 运动方程

零攻角再入时，因 $L = 0$（即 $Y = Z = 0$），再入段平面运动方程简化为：

$$\left\{\begin{array}{l} \frac{\mathrm{d}v}{\mathrm{d}t} = -\frac{X}{m} - g\sin\Theta \\ \frac{\mathrm{d}\Theta}{\mathrm{d}t} = \left(\frac{v}{r} - \frac{g}{v}\right)\cos\Theta \\ \frac{\mathrm{d}r}{\mathrm{d}t} = v\sin\Theta \\ \frac{\mathrm{d}\beta_e}{\mathrm{d}t} = \frac{v}{r}\cos\Theta \end{array}\right.$$

与有升力再入相比，方程中缺少升力项 $Y/(mv)$，运动完全由初始条件和阻力决定。

### 弹道特性

| 特性 | 说明 |
| :--- | :--- |
| 落点散布大 | 再入过程中无升力控制，无法修正偏差 |
| 再入走廊狭窄 | 再入角必须严格限制在允许范围内 |
| 过载峰值高 | 无升力缓冲，减速剧烈 |
| 气动加热总量较小 | 弹道陡峭，经历航程和时间较短 |

### 与有升力再入的对比

| 比较项 | 零攻角再入 | 有升力再入 |
| :--- | :--- | :--- |
| 升力 | $L = 0$ | $L > 0$ |
| 弹道控制 | 无 | 可通过升力调节 |
| 过载峰值 | 较高 | 较低 |
| 防热设计 | 较简单 | 较复杂 |
| 落点精度 | 低 | 较高 |

### 被动段弹道差异

考虑空气阻力的被动段弹道与理想椭圆弹道存在以下区别：

- 对应点速度不等：$v_{\text{升}}(r) > v_{\text{降}}(r)$
- 降弧段比升弧段陡：$|\Theta_{\text{降}}(r)| > |\Theta_{\text{升}}(r)|$
- 速度最小值点不在弹道顶点，而在降弧段
- 被动段射程与飞行器质量有关

## 应用价值

零攻角再入是最简单的再入方式，适用于弹道导弹弹头和早期返回式航天器。虽然存在落点散布大和再入走廊狭窄等问题，但由于不产生升力或不控制升力，气动加热总量较小，防热问题较易处理，结构设计简单。弹道式再入航天器是最早发展的一类再入航天器。

## 相关概念

- [总攻角（Total Angle of Attack）](/glossary/fundamentals/total-angle-of-attack/)
- [弹道系数（Ballistic Coefficient）](/glossary/fundamentals/ballistic-coefficient/)
- [再入走廊（Reentry Corridor）](/glossary/fundamentals/reentry-corridor/)
- [配平攻角（Trim Angle of Attack）](/glossary/fundamentals/trim-angle-of-attack/)
- [再入段（Reentry Phase）](/glossary/fundamentals/reentry-phase/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
