---
title: 再入走廊（Reentry Corridor）
description: 详细解析再入走廊的定义、确定方法及各约束边界的物理机制
keywords: 再入走廊, Reentry Corridor, 再入角, 过载限制, 热流限制, 动压限制
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 再入走廊（Reentry Corridor）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 再入走廊详解 | 术语定义
  description: 详细解析再入走廊的定义及各约束边界
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 再入走廊详解 | 术语定义
  description: 详细解析再入走廊的定义及各约束边界
  image: /logo.png
permalink: /glossary/fundamentals/reentry-corridor/
---

# 再入走廊（Reentry Corridor）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

再入走廊是指飞行器能够实现正常再入所允许的再入角范围。再入角 $|\Theta_e|$ 过大，减速过激，过载和气动加热超过允许值；$|\Theta_e|$ 过小，空气动力不足以使飞行器深入大气层。因此，正常再入需满足：

$$|\Theta_e|_{\min} \leq |\Theta_e| \leq |\Theta_e|_{\max}$$

再入走廊宽度定义为 $\Delta\Theta_e = |\Theta_e|_{\max} - |\Theta_e|_{\min}$。

## 核心要素

### 约束边界

再入走廊由四条边界共同确定：

| 边界类型 | 约束条件 | 说明 |
|:---|:---|:---|
| 法向过载限制 | $n_y \leq n_{y\max}$ | 对应 $D = \frac{C_x}{C_L}g\,n_{y\max}$ |
| 动压限制 | $q \leq q_{\max}$ | 对应 $D = \frac{C_x S_M}{m}q_{\max}$ |
| 最大热流限制 | $q_s \leq (q_s)_{\max}$ | 对应 $D = \frac{C_x S_M}{2m}\frac{(q_s)_{\max}^2}{k_s^2 v^4}$ |
| 平衡滑翔边界 | $\mathrm{d}\Theta/\mathrm{d}t \leq 0$ | 保证再入飞行器返回地面 |

### 走廊加宽方法

| 方法 | 原理 |
|:---|:---|
| 负升力再入 | 以一定负攻角产生负升力，使轨道向内弯曲，降低 $|\Theta_e|_{\min}$ |
| 正升力再入 | 以一定正攻角产生正升力，使轨道变缓，降低过载和热流峰值 |
| 升力控制 | 通过改变滚动角调节升力分量，扩大走廊宽度 |

### 再入走廊的现代定义

现代航天器设计中，再入走廊可定义为导向预定着陆目标的"管子"，在该管子内满足所有限制条件（过载、热流、动压等）。在阻力加速度 $D$ - 速度 $v$ 平面内，走廊由四条边界围成，基准轨道需位于走廊内部。

### 与升力的关系

弹道式再入航天器走廊狭窄。具有升力的航天器可以：
- 在 $|\Theta_e| < |\Theta_e|_{\min}$ 的条件下通过负升力实现再入
- 以正升力降低过载和热流峰值，从而降低 $|\Theta_e|_{\max}$

## 应用价值

再入走廊是再入飞行器轨道设计的基础约束。走廊宽度直接影响再入任务的可行性和灵活性。弹道式再入航天器走廊狭窄，限制了着陆精度和过载控制能力；弹道-升力式和升力式再入航天器通过利用升力加宽走廊，显著提高了再入机动能力和着陆精度。

## 相关概念

- [零攻角再入（Zero-Angle-of-Attack Reentry）](/glossary/fundamentals/zero-angle-of-attack-reentry/)
- [配平攻角（Trim Angle of Attack）](/glossary/fundamentals/trim-angle-of-attack/)
- [跳跃式再入（Skip Reentry）](/glossary/fundamentals/skip-reentry/)
- [驻点热流（Stagnation Heat Flux）](/glossary/fundamentals/stagnation-heat-flux/)
- [弹道系数（Ballistic Coefficient）](/glossary/fundamentals/ballistic-coefficient/)
- [再入段（Reentry Phase）](/glossary/fundamentals/reentry-phase/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
