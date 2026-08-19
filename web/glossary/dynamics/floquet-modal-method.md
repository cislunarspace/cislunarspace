---
title: Floquet模态法与平动点轨道保持（Floquet Modal Method and Libration Point Stationkeeping）
description: Floquet模态法是基于单值矩阵特征分解的平动点轨道保持策略——将状态偏差投影到Floquet模态后，仅消去指数增长的不稳定分量，忽略中心与稳定分量，实现低燃料、长脉冲间隔的控制。覆盖Floquet模态法、不稳定分量消除、轨道平衡法（延续法）三种策略的对比，以及ARTEMIS任务为何选延续法而非Floquet模态法的工程缘由。
keywords: Floquet模态法, Floquet Modal Method, 平动点轨道保持, 不稳定分量消除, 轨道平衡法, orbit balancing, 脉冲控制, ARTEMIS, 准Floquet变换, stationkeeping
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Floquet模态法与平动点轨道保持（Floquet Modal Method and Stationkeeping）
  desc: 基于Floquet理论的平动点轨道保持：从不稳定分量消除到轨道延续法的策略对比。
  image: /logo.png
og:
  title: Floquet模态法与平动点轨道保持 | 术语定义
  description: Floquet模态法是基于单值矩阵特征分解的平动点轨道保持策略，仅消去不稳定分量即可实现低燃耗长间隔控制。涵盖Floquet模态法、不稳定分量消除、轨道平衡法三策略的对比与ARTEMIS任务的工程选择。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Floquet模态法与平动点轨道保持 | 术语定义
  description: 从Floquet理论到轨道延续法：平动点轨道保持的策略谱系与工程选择。
  image: /logo.png
permalink: /glossary/dynamics/floquet-modal-method/
---

# Floquet模态法与平动点轨道保持（Floquet Modal Method and Libration Point Stationkeeping）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义与核心思想

Floquet模态法是一类基于单值矩阵特征分解的平动点轨道保持策略，核心思想是：将参考轨道附近的偏差 $\Delta X$ 分解为 6 个 Floquet 模态（不稳定、中性、稳定三类各 2 个），然后仅消去会指数增长的不稳定分量，忽略振荡的中性分量和衰减的稳定分量。由于不稳定模态支配了长期误差发散，消去它的控制代价最低，而脉冲间隔可以拉长到误差再次累积到阈值的时间尺度——通常为数天到数周。

这一原理由 Gómez et al.（1998）及后续工作（Hou et al., 2011）发展为可实际操作的平动点任务轨道保持框架，与传统的追踪标称轨道方法（每圈或每数圈校正到参考轨道）相比，燃料消耗显著降低，且脉冲间隔长，对需要减少推力器点火次数的深空探测任务（如对仪器干扰敏感）尤其有优势。

## 三种轨道保持策略

地月平动点任务的轨道保持主要有三类策略，它们的关系可以从"是否依赖参考轨道"的角度理解：

### Floquet模态法（Unstable Mode Cancellation）

**原理**：通过准Floquet变换（quasi-Floquet transformation）将偏差映射到Floquet模态基底，得出不稳定分量的瞬时幅值 $a_u$。施加脉冲 $\Delta V$ 沿不稳定方向使 $a_u \to 0$，从而消除发散驱动力。中性分量与稳定分量不干预。

**计算流程**：

1. 在参考轨道上预计算状态转移矩阵和Floquet基底（$W(t)$ 矩阵）。
2. 卫星实测状态与参考轨道比较得到偏差 $\Delta X$。
3. 将 $\Delta X$ 投影到基底：$a = W^{-1} \cdot \Delta X$。
4. 若 $|a_u| >$ 阈值，解脉冲方程：$\Delta V$ 使下一周期初的 $a_u=0$。
5. $m$ 次脉冲可间歇执行，间隔由阈值的严格控制程度决定——阈值越小、脉冲越频繁。

**优势**：燃料消耗低于追踪参考轨道方法；脉冲间隔长（数天至数周）；可选择不干预中心模态的振幅变化，保持轨道天然演化。
**劣势**：需要预先计算参考轨道及 Floquet 基底；对参考轨道精度和摄动的敏感度较高——月球偏心率和太阳引力会使模态计算偏离实际。

### Floquet策略（Floquet Strategy）

Floquet策略与Floquet模态法在数学上是同一族——核心区别在于是否在参考轨道的特定节点（如 $x$ 轴穿越点）计算 Floquet 分解。Floquet 策略在标称轨道的**节点处**计算状态转移矩阵和模态，然后消去不稳定分量。因节点是轨道穿过特定平面（如 $x$-$z$ 面）的位置，那里的动力学条件简化了模态矩阵，计算更稳定且工程适用。Hou et al.（2011）将该策略系统化为地月平动点轨道的标准保持框架——在每一次 $x$-$z$ 面穿越时计算模态矩阵并决定是否施加机动。

### 轨道平衡法（Orbit Balancing / Orbit Continuation）

轨道平衡法（亦称 **轨道延续法**，orbit continuation method）是另一种平动点轨道保持思路，与前两种的根本区别在于**不追求回到某条预定参考轨道**，而是选择在当前轨道的特定节点（如 $x$ 轴穿越处）施加机动，以在未来数圈之后满足某个能量或速度目标，从而保持轨道持续不逃逸。

Folta et al.（2010）详细介绍了这一方法在 **ARTEMIS**（地月 $L_1$/$L_2$ 的拟周期 Lissajous 轨道）上的实际应用。ARTEMIS 之所以**未采用 Floquet 模态法**，有两个工程原因：

1. 该任务**没有预先生成的参考轨道**用于计算 Floquet 模态——拟周期 Lissajous 轨道的参数空间是连续的，没有单一的"正确"标称轨道。
2. 在完全星历模型下，月球偏心率和太阳引力使 Floquet 模态计算对扰动敏感，特别是对于无法精确匹配单个 CR3BP 周期轨道的拟周期运动，模态基底随时间剧烈变化。

轨道平衡法的典型操作：在 $x$ 轴穿越处，设定未来 $x$ 方向速度略为负值，确保轨道始终向平动点内侧卷绕而不逃逸——这一约束通过 DC（differential correction）解算机动方向和时刻得到。Folta & Vaughn（2004）给出的 ARTEMIS 轨道年维持代价约为 15–70 m/s（Lissajous）到 100–200 m/s（Halo），视轨道幅值和控制模式（$x$ 轴 vs. $y$ 轴方向）而定。

## 三策略的比较

| 特性 | Floquet 模态法 | Floquet 策略（节点法） | 轨道平衡法（延续法） |
|------|---------------|---------------------|---------------------|
| 参考轨道 | 需要 | 需要 | 不需要 |
| 控制目标 | 消去不稳定模态 | 消去不稳定模态 | 限制后续运动包络 |
| 机动位置 | 任意点或节点 | 仅在节点处 | 仅在节点处 |
| 燃料消耗 | 低（仅消不稳定分量） | 低（同上，但更稳定） | 中（需同时校正能量） |
| 对摄动的鲁棒性 | 敏感 | 中等（节点约束改善） | 较好（数值优化适应性强） |
| 典型应用 | 日地任务、纯CR3BP框架 | 地月系统、有重力的STK环境 | ARTEMIS（无参考轨道的拟周期轨道） |

## 应用要点

- **模态选择**：Floquet 模态法的关键参数是阈值设定——不稳定分量阈值越大，脉冲间隔越长但燃料效率降低。任务设计需在脉冲频次与燃料消耗间取平衡。

- **参考轨道依赖性**：Floquet 模态法要求参考轨道经过高精度数值平衡（至少 $10^{-12}$ 量级）才能可靠计算模态矩阵——对 Halo 等大幅值轨道还需在校正过程中引入自旋面约束。

- **摄动下的鲁棒性增强**：在完全星历模型中，可定期重算参考轨道和模态基底以补偿摄动累积效应，降低模态漂移误差。

- **与不变流形设计的联系**：Floquet 模态法的稳定方向 $w_s$ 与不稳定方向 $w_u$ 恰好给出了流形拼接所需的渐近方向——轨道保持和转移轨道设计共享同一套 Floquet 分析基础设施。

## 相关概念

- [单值矩阵与Floquet稳定性分析](/glossary/dynamics/monodromy-matrix/)

- [状态转移矩阵（STM）](/glossary/fundamentals/stm/)

- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)

- [流形传播（Manifold Propagation）](/glossary/dynamics/invariant-manifold/)

- [Halo轨道插入（HOI）](/glossary/orbits/hoi/)

- [Halo轨道](/glossary/orbits/halo-orbit/)

- [Lyapunov轨道](/glossary/orbits/lyapunov-orbit/)

## 参考文献

- Gómez et al., 1998, "Study of the Transfer Between Halo Orbits", Acta Astronautica（初始 Floquet 模态概念的引入）

- Hou et al., 2011, "Station-Keeping of Libration Point Orbits by the Floquet Mode Elimination Approach in the Earth-Moon System", Acta Astronautica（Floquet 策略的完整框架与其在地月系 $L_1$/$L_2$ 轨道的验证）

- Folta et al., 2010, "Applications Of Libration Point Orbit Transfers In The Earth-Moon System", AAS 10-139（ARTEMIS 任务中轨道平衡法的设计、VF13AD 优化器的使用及实际机动方案）

- Folta & Vaughn, 2004, "A Survey of Earth-Moon Libration Orbits: Stationkeeping Strategies and Intra-Orbit Transfers", AIAA-2004-4741（三类站保持策略的系统综述，含 dLQR、微分校正和 x-y 轴方向控制的年维持代价数据）

- Gao et al., 2023, "Low-Thrust Station-Keeping Control for Lunar Near Rectilinear Halo Orbits"（基于准 Floquet 变换的模态基底在低推力连续控制下的改进）

- 2024, 宇航学报, doi:10.3873/j.issn.1000-1328.2024.09.007（Floquet 模态法的最新中文综述，含 δ 阈值设定与机动频次的定量关系）
