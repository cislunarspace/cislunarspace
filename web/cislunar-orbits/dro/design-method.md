---
title: DRO 设计方法
description: 远距离逆行轨道的初始条件搜索、Floquet模态分析、星历提升与轨道维持设计。
keywords: DRO设计, 初始条件搜索, Floquet分析, 星历提升, 轨道维持
author: 天疆说
date: 2026-04-26
lastUpdated: 2026-04-26
permalink: /cislunar-orbits/dro/design-method/
---

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文编辑来源：[CislunarSpace](https://cislunarspace.cn)
>
> 来源：https://cislunarspace.cn

# DRO 设计方法

## 初始条件搜索

DRO 的初始条件搜索是轨道设计的第一步。在 CR3BP 模型中，DRO 的初始条件通常选取在轨道的近地点或远地点状态（旋转坐标系中）。

### 网格搜索法

一种直接的搜索方法是在相空间中进行网格搜索：
1. 在 $(x, \dot{x}, C_J)$ 参数空间中选取网格点
2. 对每个网格点，数值积分一个周期 $T$
3. 检验周期性条件：$\mathbf{X}(T) - \mathbf{X}(0) \approx \mathbf{0}$

该方法的计算量较大，但对于 DRO 这类具有清晰几何特征的轨道，可以利用先验知识缩小搜索范围。

### 延续法

更高效的方法是利用延续法（Continuation）从已知的周期轨道出发：
1. 从一个已知的 Lyapunov 轨道或 DRO 边界轨道开始
2. 逐步改变 $C_J$ 或振幅参数
3. 在每步中使用打靶法修正周期性条件

由于 DRO 与 Lyapunov 轨道存在同源分支关系，可以从 L1/L2 Lyapunov 轨道族逐步延续到 DRO 族。

## Floquet 模态分析

对于计算得到的 DRO，需进行 Floquet 模态分析以评估其稳定性。Floquet 理论给出单周期状态转移矩阵 $\mathbf{M}(T)$ 的特征值（Floquet 乘数）：

$$\mathbf{M}(T)\mathbf{v} = \lambda \mathbf{v}$$

DRO 的特征在于其 Floquet 乘数位于单位圆附近且呈共轭对分布，这表明 DRO 在 CR3BP 模型中具有边缘稳定性（neutral stability）。

不稳定乘数 $|\lambda| > 1$ 的存在表明该 DRO 族在摄动下会逐渐发散，需要轨道维持。

## 星历提升

从 CRTBP 模型得到的 DRO 初始条件需要"提升"到真实星历环境（JPL DE440 或更高精度）。星历提升的过程：

1. **CRTBP 传播**：在 CRTBP 模型中传播一个周期，得到精确的周期轨道
2. **状态映射**：将 CRTBP 状态映射到真实星历的时间坐标系
3. **数值验证**：在真实星历模型中验证轨道的准周期性
4. **偏差修正**：若轨道在真实星历中不满足周期性，进行迭代修正

典型的星历提升偏差量级为：轨道位置偏差 ~1-10 km，周期偏差 ~minutes/周期。

## 轨道维持设计

DRO 的 station-keeping 设计需考虑以下因素：

### 维持策略

DRO 的低维持 ΔV 预算（约 5-20 m/s/年）使得简单的脉冲式维持即可满足要求：
- **维持频率**：通常每 1-2 周进行一次小修正（$\Delta V \approx 0.5-2$ m/s）
- **修正方向**：沿轨道不稳定的 Floquet 模态方向进行修正
- **时机选择**：在轨道的速度极值点（动能最低点）进行修正

### 维持 ΔV 预算分解

| 摄动源 | 对维持 ΔV 的贡献 |
|--------|------------------|
| 太阳引力 | 3-8 m/s/年 |
| 月球非球形 | 1-3 m/s/年 |
| 太阳辐射压力 | 0.5-2 m/s/年 |
| 其他 | < 1 m/s/年 |

## 仿真实验

可在 [卫星轨道仿真实验室](/satellite-simulation/) 中设置 DRO 初始条件，观察其在摄动下的长期演化，评估轨道维持需求。
