---
title: 零控脱靶量（Zero-Effort Miss）
description: 零控脱靶量是描述追逃问题中追踪器若保持当前状态将错过目标程度的参数，广泛应用于制导律设计和威胁评估。
keywords: 零控脱靶量, Zero-Effort Miss, ZEM, 追逃博弈, 制导律, 拦截制导
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
og:
  title: 零控脱靶量（Zero-Effort Miss）| 制导术语
  description: 描述若保持当前状态将错过目标程度的参数，应用于追逃博弈和拦截制导
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 零控脱靶量（Zero-Effort Miss）| 制导术语
  description: 描述若保持当前状态将错过目标程度的参数，应用于追逃博弈和拦截制导
  image: /logo.png
permalink: /glossary/dynamics/zero-effort-miss/
---

# 零控脱靶量（Zero-Effort Miss）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文根据张乘铭(2021)《航天器追逃博弈制导策略研究》整理。

## 定义

零控脱靶量（Zero-Effort Miss, ZEM）是指在追踪-逃逸问题中，假设追踪器和目标均保持当前状态（无额外控制输入），在未来某一时刻两者之间的最近接近距离。当ZEM为零时，表示追踪器将成功捕获目标。

ZEM是追逃博弈和制导律设计中的核心参数，用于：
- 评估当前拦截/追踪方案的可行性
- 设计反馈制导律
- 实时评估追踪方受威胁程度

## 数学定义

在惯性坐标系下，$t$ 时刻的零控脱靶量定义为：
$$\text{ZEM}(t) = \boldsymbol{r}_p(t_f) - \boldsymbol{r}_e(t_f | \boldsymbol{r}_p(t), \boldsymbol{r}_e(t))$$

即假设双方保持当前状态外推至终端时刻 $t_f$ 时的位置差。

### 简化形式

对于近距离追逃问题，基于CW方程的ZEM可近似为：
$$|\text{ZEM}| \approx \sqrt{(\Delta x)^2 + (\Delta y)^2 + (\Delta z)^2}$$

其中 $\Delta x, \Delta y, \Delta z$ 为当前相对位置分量。

## 在追逃博弈中的应用

### 追逃防问题

张乘铭(2021)在航天器追逃防问题中，将ZEM与模糊综合评价方法结合：

1. **实时ZEM计算**：追踪方实时计算与逃逸方的ZEM
2. **威胁评估**：基于ZEM评估追踪方受防御方威胁程度
3. **制导决策**：根据威胁等级确定追踪方的制导策略

### 模糊综合评价

基于ZEM的模糊综合评价方法步骤：
1. 建立ZEM与威胁等级的隶属函数
2. 综合考虑多因素（ZEM、相对速度、燃料剩余等）
3. 确定追踪方受威胁程度模糊等级
4. 根据威胁等级选择相应制导策略

## 与制导律的关系

### 比例导引

比例导引法的制导指令与ZEM方向密切相关：
$$a_c \propto \dot{r} \cdot \text{ZEM}$$

其中 $\dot{r}$ 为接近速度。

### 最优制导律

在考虑零控脱靶量的最优制导律设计中，目标是使终端ZEM最小化。

## 典型取值

| ZEM范围 | 战术含义 |
|:---|:---|
| ZEM ≈ 0 | 即将成功拦截/捕获 |
| ZEM > 0 | 可能脱靶，需要修正航迹 |
| ZEM >> 拦截半径 | 大幅脱靶，需重新规划 |

## 应用场景

- **导弹拦截**：空空导弹、地空导弹的制导律设计
- **航天器交会对接**：接近过程中的碰撞避免
- **空间碎片规避**：机动规避的时机决策
- **追逃博弈**：实时威胁评估与策略选择

## 参考文献

- 张乘铭. 航天器追逃博弈制导策略研究[D]. 国防科技大学, 2021.
- Shinar J, Shima T. Non-Unique Solutions in Missile Interception Guidance[J]. Journal of Guidance, Control, and Dynamics, 1998.
- Zarch P. Guided Weapons[M]. Elsevier, 2013.
