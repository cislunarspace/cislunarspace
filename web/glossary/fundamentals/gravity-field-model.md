---
title: 引力场模型（Gravity Field Model）
description: 用球谐函数展开近似描述天体非球形引力位的可计算模型。涵盖模型的数学构造、常用地球模型（EGM2008、GGM05C、WGS84）与月球模型（GRGM660PRIM、GL0660B、LP150Q、LP165P、LP100K）的来源与典型截断，以及任务设计中的阶次选取原则。
keywords: 引力场模型, 重力场模型, Gravity Field Model, 球谐模型, 地球引力场模型, 月球引力场模型, EGM2008, GGM05C, GRGM660PRIM, GL0660B, LP150Q, LP165P, LP100K, 截断阶次, 摄动模型
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 引力场模型（Gravity Field Model）
  desc: 用球谐函数展开近似描述天体非球形引力位的可计算模型。
  image: /logo.png
og:
  title: 引力场模型（Gravity Field Model）详解 | 术语定义
  description: 用球谐函数展开近似描述天体非球形引力位的可计算模型。涵盖地球/月球典型模型来源与任务设计中的阶次选取原则。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 引力场模型（Gravity Field Model）详解 | 术语定义
  description: 用球谐函数展开近似描述天体非球形引力位的可计算模型。涵盖地球/月球典型模型来源与任务设计中的阶次选取原则。
  image: /logo.png
permalink: /glossary/fundamentals/gravity-field-model/
---

# 引力场模型（Gravity Field Model）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

引力场模型（gravity field model）是用一组数值化参数近似描述天体引力位的可计算模型，最常用形式是球谐函数展开的有限阶截断：

$$U(r,\phi,\lambda) = \frac{\mu}{r} \left[ 1 + \sum_{\ell=2}^{N} \sum_{m=0}^{\ell} \left(\frac{R}{r}\right)^{\!\ell} \bar{P}_{\ell m}(\sin\phi) \bigl( \bar{C}_{\ell m} \cos m\lambda + \bar{S}_{\ell m} \sin m\lambda \bigr) \right]$$

其中 $N$ 为截断阶数，$\bar{C}_{\ell m}$、$\bar{S}_{\ell m}$ 是模型发布的一组斯托克斯系数（Stokes coefficients），$R$ 为参考半径。系数通常由人造卫星跟踪数据、GNSS、卫星测高、激光测月/测卫或专门的重力卫星任务（GRACE、GOCE、GRAIL）反演得到（尹智等 2024）。模型一旦发布，用户只需读取系数即可在轨道积分器中恢复对应的引力加速度。

引力场模型可视为"引力位"这一数学对象在工程计算中的离散实现。同一个天体有多个版本的模型，它们区别主要在于观测数据、解算策略和截断阶次。

## 常用地球引力场模型

| 模型 | 数据来源 | 典型阶次 | 主要用途 |
| :--- | :--- | :--- | :--- |
| **EGM2008** | 地面重力、卫星测高、GRACE | 2190 阶完整版，任务常用 50×50 或 70×70 截断 | 全球静态高分辨率地球引力场，精密定轨、大地水准面 |
| **GGM05C** | GRACE 与 GOCE 联合解算 | 180 阶（常见任务截断至 20×20） | 中低轨卫星轨道预报 |
| **WGS84 EGM96/EGM2008 配套模型** | GPS 跟踪与重力数据 | 任务常用 8×8、36×36 等截断 | 导航、一般轨道力学任务 |

EGM2008 是当前最常用的静态地球引力场模型之一，完整版包含 2190 阶球谐系数。工程任务很少使用完整阶次：地月转移的中段和近地段若只关心 10⁻³ m/s² 量级的轨道摄动，通常取 50×50 或 70×70 截断；低轨精密定轨才会用到更高阶次。

## 常用月球引力场模型

| 模型 | 数据来源 | 典型阶次 | 主要用途 |
| :--- | :--- | :--- | :--- |
| **GRGM660PRIM** | GRAIL 主任务数据 | 660 阶 | 当前最高精度静态月球引力模型，高保真轨道动力学 |
| **GL0660B** | GRAIL | 660 阶 | GRAIL 解算版本之一，工程常用截断更低 |
| **LP150Q** | Lunar Prospector | 150 阶 | 月球附近轨道分析与转移设计 |
| **LP165P** | Lunar Prospector | 165 阶 | 绕月轨道计算 |
| **LP100K** | Lunar Prospector | 100 阶 | 低月球轨道段轨道预报 |

月球引力场比地球更不规则：月面存在显著的质量瘤（mascon），导致高阶球谐系数衰减较慢。月球模型的阶次选取比地球更敏感——对低月球轨道（高度 50–100 km），若截断阶次过低会低估轨道面的长期漂移和轨道衰减（Trofimov et al. 2020）。

## 阶次选取的工程原则

引力场模型的截断阶次 $N$ 不是越大越好。选取依据通常包括（Vallado 2022）：

1. **轨道高度与摄动尺度。** 近地表或低月球轨道受高阶项影响大，$N$ 需取高；距离中心天体越远，$(R/r)^\ell$ 衰减越快，低阶模型即可满足要求。
2. **任务精度需求。** 粗略转移设计可用 8×8；精密定轨与地月低能转移拼接常取 50×50–150×150；全局大地测量才用到 200 阶以上。
3. **计算成本与实时性。** 阶次每提高，每步积分中 Legendre 函数计算量以 $O(N^2)$ 增长。星上自主导航、蒙特卡洛打靶等场景需在精度与效率之间折中。
4. **模型一致性。** 同一任务的不同阶段（如地心段、月球捕获段、平动点段）可能使用不同阶次或不同天体的模型，切换时应保证参考系、参考半径和归一化约定一致。

## 与其他模型的关系

- **简单力模型**：仅保留中心引力 $-\mu/r^2$ 和必要时 $J_2$，用于初步解析分析与快速搜索。

- **精确力模型**：除高阶引力场外，还叠加第三体引力、太阳光压、大气阻力等摄动。

- **多面体法 / 质点群法（mascon）**：当目标天体形状极不规则（小行星、彗星）时，球谐展开在天体表面附近可能发散，此时换用多面体模型或 mascon 模型（尹智等 2024）。

## 相关概念

- [引力位（Gravitational Potential）](/glossary/fundamentals/gravitational-potential/)

- [重力梯度矩阵（Gravity Gradient Matrix）](/glossary/fundamentals/gravity-gradient-matrix/)

- [J2 摄动](/glossary/dynamics/non-spherical-gravity-perturbation/)

- [第三体引力摄动](/glossary/dynamics/third-body-perturbation/)

- [非球形引力位](/glossary/fundamentals/gravitational-potential/)

## 参考文献

- Vallado, D. A., 2022, *Fundamentals of Astrodynamics and Applications*, 5th ed., Microcosm Press. Ch. 8.6.1 — 引力场模型化的数学基础与归一化。

- 尹智, 张克非, 段亚博, 刘军生, 穆庆禄, 2024, 地球科学和深空探测的引力场建模理论研究进展, *地球与行星物理论评*, 55(5): 501–512. — 地球与深空天体引力场建模理论与方法分类。

- Pavlis, N. K. et al., 2012, The development and evaluation of the Earth Gravitational Model 2008 (EGM2008), *Journal of Geophysical Research: Solid Earth*, 117(B4). — EGM2008 来源与精度。

- Konopliv, A. S. et al., 2013, The JPL lunar gravity field to spherical harmonic degree 660 from the GRAIL Primary Mission, *Journal of Geophysical Research: Planets*, 118(7): 1415–1434. — GRGM660PRIM 与 GL0660B 的理论基础。

- Trofimov, S. et al., 2020, Transfers from NRHOs to low-perilune orbits, *Acta Astronautica*, 167: 260–271. — 月球不规则引力场对低近月点轨道的影响。

- Zuber, M. T. et al., 2013, Gravity field of the Moon from the Gravity Recovery and Interior Laboratory (GRAIL) mission, *Science*, 339(6120): 668–671. — GRAIL 任务与月球引力场模型。
