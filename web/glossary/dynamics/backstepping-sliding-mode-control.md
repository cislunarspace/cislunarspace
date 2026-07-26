---
title: 反步滑模控制（Backstepping Sliding Mode Control）
description: 详细解析反步滑模控制的基本原理、设计步骤及其在平流层飞艇姿态控制中的应用优势
keywords: 反步滑模控制, Backstepping Sliding Mode Control, 反步法, 滑模控制, 非线性控制, 平流层飞艇
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 反步滑模控制（Backstepping Sliding Mode Control）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 反步滑模控制（Backstepping Sliding Mode Control）详解 | 术语定义
  description: 详细解析反步滑模控制的基本原理、设计步骤及其在平流层飞艇姿态控制中的应用优势
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 反步滑模控制（Backstepping Sliding Mode Control）详解 | 术语定义
  description: 详细解析反步滑模控制的基本原理、设计步骤及其在平流层飞艇姿态控制中的应用优势
  image: /logo.png
permalink: /glossary/dynamics/backstepping-sliding-mode-control/
---

# 反步滑模控制（Backstepping Sliding Mode Control）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

反步滑模控制是将反步法（Backstepping）与滑模控制相结合的复合控制策略。反步法通过递归设计虚拟控制律处理严格反馈形式的非线性系统，滑模控制则提供鲁棒性克服不确定性和扰动。

## 设计原理

### 标准反步法

对于严格反馈系统：

$$\begin{aligned}
\dot{x}_1 &= x_2 + f_1(x_1) \\
\dot{x}_2 &= x_3 + f_2(x_1, x_2) \\
&\vdots \\
\dot{x}_n &= f_n(x) + g(x)u
\end{aligned}$$

反步法设计步骤：

1. **第1步**：定义 $z_1 = x_1 - x_{1d}$，设计虚拟控制 $\alpha_1$ 使 $z_1 \to 0$
2. **第2步**：定义 $z_2 = x_2 - \alpha_1$，设计虚拟控制 $\alpha_2$ 使 $z_2 \to 0$
3. **递归**：继续直到实际控制 $u$ 出现
4. **最终**：设计 $u$ 使整个系统渐近稳定

### 滑模增强

在每一步的 Lyapunov 设计中引入滑模项：

$$V_i = V_{i-1} + \frac{1}{2}s_i^2$$

其中滑模面：

$$s_i = z_i + \beta_i \text{sgn}(z_i)$$

最终控制律结合反步与滑模的优点：

$$u = u_{backstepping} + u_{smc}$$

## 在平流层飞艇中的应用

### 姿态控制系统

平流层飞艇姿态模型（欠驱动）：

| 通道 | 模型特点 | 控制策略 |
|:---|:---|:---|
| 俯仰 | 纵向运动耦合 | 反步滑模 |
| 偏航 | 受侧风影响大 | 反步滑模 + 前馈 |
| 滚转 | 独立控制 | 滑模控制 |

### 设计优势

| 优势 | 说明 |
|:---|:---|
| 递归设计 | 适合多级串联系统 |
| 鲁棒性 | 滑模项抑制未建模动态 |
| 收敛快 | 指数收敛特性 |
| 计算量适中 | 实时可行 |

## 相关概念

- [滑模控制（Sliding Mode Control）](/glossary/dynamics/sliding-mode-control/)
- [模糊反步控制（Fuzzy Backstepping Control）](/glossary/dynamics/fuzzy-backstepping-control/)
- [区域驻留控制（Regional Station-keeping Control）](/glossary/dynamics/regional-station-keeping/)

## 参考文献

- Krstic M, et al. Nonlinear and Adaptive Control Design[M]. Wiley, 1995.
- Wang H, et al. Backstepping Sliding Mode Control for Stratospheric Airship[J]. AIAA Guidance, Navigation, and Control Conference, 2024.
