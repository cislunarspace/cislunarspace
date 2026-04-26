---
title: 弧长延续法 (Arc-length Continuation)
description: 弧长延续法是沿参数分支追踪解曲线的数值方法，与打靶法结合可有效扩展周期轨道的求解范围。
keywords: 弧长延续法, Arc-length Continuation, 参数延续, 弧长约束, 周期轨道
author: 天疆说
date: 2026-04-26
lastUpdated: 2026-04-26
permalink: /background/math/continuation/
---

# 弧长延续法

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

弧长延续法（Arc-length Continuation）是一种沿参数分支追踪解曲线的数值方法。其核心思想是：不将参数视为自由变量直接求解，而是在参数空间中引入弧长作为约束条件，使得解曲线上的每一步迭代都沿弧长方向前进，从而能够绕过奇异点（如极限点），实现解曲线的全局追踪。

## 原理

弧长延续法通常配合打靶法使用。设参数为 $\lambda$，状态变量为 $\mathbf{x}$，打靶方程为 $\mathbf{F}(\mathbf{x}, \lambda) = 0$。弧长约束方程为：

$$G(\mathbf{x}, \lambda, s) = \|\mathbf{x} - \mathbf{x}_0\|^2 + (\lambda - \lambda_0)^2 - \Delta s^2 = 0$$

其中 $\Delta s$ 为设定的弧长步长，$(\mathbf{x}_0, \lambda_0)$ 为当前已知解。

**预测-校正步骤：**
1. **预测**：沿切向量方向前进一步得到 $(\mathbf{x}_p, \lambda_p)$
2. **校正**：以 $(\mathbf{x}_p, \lambda_p)$ 为初值，通过牛顿迭代求解打靶方程与弧长约束的联立方程组
3. **步长控制**：根据校正收敛情况自适应调整 $\Delta s$

## 在地月空间中的应用

- **Halo 轨道族延续**：从已知的平面 Lyapunov 轨道（$A_z = 0$）出发，逐步增大 $A_z$ 振幅，每步配合打靶法求解新轨道，直至达到目标振幅
- **DRO 轨道族追踪**：沿 $A_x$ 参数追踪不同构型的 DRO，绘制完整的周期轨道分支图
- **NRHO 族分析**：追踪地月 L1/L2 NRHO 随质量参数变化的分支演化

弧长延续法使得打靶法从单一轨道求解扩展为整条轨道族的系统性生成，是平动点轨道设计中的核心工具。

## 相关概念

- [打靶法（Shooting Method）](./shooting-method/)
- [远距离逆行轨道（DRO）](/glossary/orbits/dro/)
- [近直线晕轨道（NRHO）](/glossary/nrho/)
- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)

## 参考文献

- Kav movan E M. Characteristics and design strategies for near rectilinear halo orbits within the Earth-Moon system[D]. Purdue University, 2017.
- Seydel R. Practical bifurcation and stability analysis[M]. Springer, 2010.
