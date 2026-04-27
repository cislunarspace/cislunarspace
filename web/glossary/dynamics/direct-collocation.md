---
title: 直接配点法（Direct Collocation）
description: 直接配点法是一种轨迹优化方法，通过将连续最优控制问题离散化为非线性规划问题来求解，广泛用于低推力转移轨迹设计
keywords: 直接配点法, Direct Collocation, 轨迹优化, 非线性规划, 低推力, Hermite-Simpson, 配点法, 最优控制, 边值问题
author: 天疆说
date: 2026-04-27
lastUpdated: 2026-04-27
og:
  title: 直接配点法（Direct Collocation）
  description: 将连续最优控制问题离散化为NLP进行求解的轨迹优化方法
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 直接配点法（Direct Collocation）
  description: 将连续最优控制问题离散化为NLP进行求解的轨迹优化方法
  image: /logo.png
permalink: /glossary/direct-collocation/
---

# 直接配点法（Direct Collocation）

## 定义

直接配点法（Direct Collocation）是一类将最优控制问题（OCP）直接离散化为非线性规划问题（NLP）进行数值求解的方法[[1]]()。与间接法（indirect method）需要解析推导共状态（costate）的一阶最优性条件不同，直接法通过**配点**（collocation）方式同时离散化状态和控制变量，将无限维连续最优控制问题转化为有限维的 NLP，是当前航天器轨迹优化领域最广泛使用的数值方法之一。

## 基本原理

### 离散化策略

在直接配点法中，转移区间 $[0, t_f]$ 被划分为 $N$ 个子区间，在每个子区间的配点处同时满足：

1. **状态动力学约束**：在配点处强制执行 $\dot{\mathbf{x}} = f(\mathbf{x}, \mathbf{u})$
2. **边界条件**：初态 $\mathbf{x}(0) = \mathbf{x}_0$ 和终端约束 $\mathbf{x}(t_f) \in \mathcal{T}$
3. **路径约束**：控制约束 $\|\mathbf{u}\| \leq 1$、避免障碍约束等

### Hermite-Simpson 配点

A2PPO 研究中采用的直接配点实现使用 Hermite-Simpson 配点格式[[2]]()：

- 在每个子区间 $[t_i, t_{i+1}]$ 上，用三次 Hermite 多项式插值状态
- 在区间中点 $t_{i+1/2}$ 处施加动力学缺陷约束（defect constraint）
- 配点处状态精度为三阶，缺陷约束精度为三阶

## 与 A2PPO 的对比

Ul Haq 等人（2026）将 A2PPO 策略产生的轨迹作为直接配点法的初始猜测，验证了两者在四个场景中的一致性[[2]]()：

| 场景 | A2PPO ToF (天) | 直接配点 ToF (天) | A2PPO 燃料 (kg) | 直接配点燃料 (kg) |
|:---|:---:|:---:|:---:|:---:|
| S1 | 4.95 | 4.99 | 2.08 | 1.28 |
| S2 | 8.38 | 7.26 | 5.00 | 5.29 |
| S3 | 7.60 | 7.63 | 5.10 | 5.11 |
| S4 | 33.6 | 33.12 | 0.97 | 0.97 |

直接配点法由于利用了完整的连续最优性条件，通常能达到更优的燃料效率，但：
- 需要良好的初始猜测（A2PPO 提供了高质量初始解）
- 计算成本高，每次转移需重新求解
- 无法实时在线计算

A2PPO 则可在训练后实时推理，提供近即时的轨迹解。

## 直接法 vs 间接法

| 特性 | 直接配点法 | 间接法 |
|:---|:---|:---|
| 推导难度 | 较低（无需解析共状态方程） | 较高（需推导 PMP） |
| 初始猜测 | 较鲁棒 | 敏感（对共状态初值） |
| 解的精度 | 较高 | 极高（满足一阶最优性） |
| 收敛性 | 较好 | 依赖初始猜测质量 |
| 计算效率 | 中等（NLP 求解器如 Ipopt） | 较高（但收敛域窄） |

## NLP 求解器

直接配点法离散化后的 NLP 通常使用序列二次规划（SQP）或内点法求解器：

- **Ipopt**：基于内点法的大规模非线性规划求解器
- **SNOPT**：序列二次规划求解器
- **CasADi**：符号计算框架，便于构建 NLP 并调用上述求解器

## 参考文献

- [[1]]() Betts J T. Survey of numerical methods for trajectory optimization[J]. Journal of Guidance, Control, and Dynamics, 1998.
- [[2]]() Ul Haq I U, Dai H, Du C. Autonomous low-thrust trajectory optimization in cislunar space via attention-augmented reinforcement learning[J]. Aerospace Science and Technology, 2026.
- [[3]]() Hargraves C R, Paris S W. Direct trajectory optimization using nonlinear programming and collocation[J]. Journal of Guidance, Control, and Dynamics, 1987.
