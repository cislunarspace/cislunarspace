---
title: 数值历表（Numerical Ephemeris）与完整历表模型
description: 用高精度数值积分得到的天体位置/速度数据表，以 Chebyshev 多项式系数分块存储、按需插值。JPL DE 系列（DE430、DE440）是事实标准。本词条同时覆盖与分析历表的精度对比，以及由它构建的完整历表模型/高保真星历模型：把所有相关天体的真实位置引入运动方程的 n 体力学模型，是 CR3BP 设计结果走向工程验证的最终环境。
keywords: 数值历表, 分析历表, 星历, JPL DE, DE430, DE440, Chebyshev 多项式, 完整历表模型, 高保真星历模型, 地月平动点, 轨道预报
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-10-01
wechatShare:
  title: 数值历表（Numerical Ephemeris）与完整历表模型
  desc: JPL DE 系列星历、Chebyshev 分块存储、与 CR3BP 互补的 n 体高保真验证环境。
  image: /logo.png
og:
  title: 数值历表（Numerical Ephemeris）详解 | 术语定义
  description: 用高精度数值积分得到的天体位置/速度数据表，以 Chebyshev 多项式系数分块存储、按需插值。JPL DE 系列是事实标准。覆盖分析历表对比与由它构建的完整历表模型。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 数值历表（Numerical Ephemeris）详解 | 术语定义
  description: 用高精度数值积分得到的天体位置/速度数据表，以 Chebyshev 多项式系数分块存储、按需插值。JPL DE 系列是事实标准。覆盖分析历表对比与由它构建的完整历表模型。
  image: /logo.png
permalink: /glossary/fundamentals/numerical-ephemeris/
---

# 数值历表（Numerical Ephemeris）与完整历表模型

> 本文作者：天疆说
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

数值历表（numerical ephemeris）是把太阳系天体（日、月、行星）的运动方程作高精度数值积分、并拟合到观测数据后，得到的位置和速度数据表。事实标准由 NASA/JPL 的 DE 系列（Development Ephemeris）提供：现代任务用 DE430、DE440，老文献常见 DE405。与之相对的分析历表（analytical ephemeris）用轨道根数的三角级数或解析公式给出天体位置，计算快、不占存储，但精度有限。完整历表模型（full ephemeris model，又称高保真星历模型）则指把航天器运动方程与数值历表给出的真实天体位置联立积分所得到的力学模型，也就是 CR3BP 之外的 n 体工程化环境。

## 数值历表 vs. 分析历表

分析历表用解析展开（如 Newcomb、Brown 的月球理论，或 SALT、DSST 等半解析理论），把天体位置写成轨道根数的三角级数。形式紧凑、连续可导，但必须截断高频项，长时间跨度下误差累积可达米到公里量级。数值历表则把相对论性的 n 体方程直接积分，用雷达测距、激光测距（LLR）、航天器跟踪数据做最小二乘拟合，月球位置精度可达厘米级（Vallado 2022, Chap. 10）\cite{valladoFundamentalsAstrodynamicsApplications2022}。

对地月平动点轨道，这一精度差是决定性的。$L_1$/$L_2$ 附近的周期轨道、远距离逆行轨道（DRO）、弱稳定边界（WSB）转移对摄动的敏感度在 $10^{-3}$–$10^{-4}$ g 量级，分析历表的噪声已超过信号本身。因此地月平动点预报中，日月位置必须用数值历表，否则会出现定性偏差（邓辉等 2017）\cite{DengHuiDiYueXiGongXianPingDongDianTanCeQiDeXingShangGuiDaoYuBaoWenTi2017}。

## JPL DE 历表：结构与精度

JPL 用变步长数值积分（平均步长约 0.3 天）得到日、月、行星的轨道，再用 Chebyshev 多项式拟合分块存储（Standish 1990；Vallado 2022, §10.4）：

- 外行星每块 32 天。

- 太阳、地球、金星每块 16 天。

- 水星与月球天平动每块 8 天。

- 月球（运动最快）每块 4 天。

文件中只存多项式系数，用户软件按时间所在块重新计算位置。典型精度：行星约 $0.01''$。月球约 2 m（$0.001''$）。太阳约 200 m（$0.0003''$）（Vallado 2022, §10.4）\cite{valladoFundamentalsAstrodynamicsApplications2022}。DE430（2013）与 DE440（2021）为现行标准，DE440 还有时间跨度更长的 DE441 用于历史研究。

历表的自变量是质心坐标时（barycentric coordinate time），JPL 把它的速率和历元调整得与 TT（terrestrial time）一致，记作 $T_\text{eph}$。对地月空间任务，TT、TDB、$T_\text{eph}$ 三者之差不超过 1.7 ms，可以互换（Vallado 2022, §3.4）\cite{valladoFundamentalsAstrodynamicsApplications2022}。

## 完整历表模型（n 体高保真模型）

所谓完整历表模型（full ephemeris model）就是把航天器的运动方程直接写在惯性系（通常是 ICRF）下，每一积分步都从 DE440 读取太阳、地球、月球（必要时还包括其他行星）的真实位置：

$$
\ddot{\mathbf r} = -\sum_i G m_i \Big( \frac{\mathbf r - \mathbf r_i(t)}{\|\mathbf r - \mathbf r_i(t)\|^3} \Big) + \mathbf a_\text{oblat} + \mathbf a_\text{SRP} + \dots
$$

其中 $\mathbf r_i(t)$ 来自数值历表，$\mathbf a_\text{oblat}$、$\mathbf a_\text{SRP}$ 等加入地球/月球非球形引力与太阳光压。由于时间 $t$ 显式出现，完整历表模型是非自治系统，不存在雅可比积分。周期轨道理论让位于准周期不变环面和数值延拓（Baresi 2023；Liu & Liu 2025）\cite{baresiTransitionTwodimensionalQuasiperiodic2023,liuNoteComputationMultirevolution2025}。

完整历表模型是任何 CR3BP 设计结果的最终验证环境。典型流程：先在 CR3BP 中得到初设，在指定历元把初值转入完整历表模型，再用微分修正复现目标几何（NRHO 维持、多圈 DRO 等）。两套模型之差就是太阳引力、月球轨道偏心率等真实摄动对理想解的修正量（Welch et al. 2015）\cite{welchMissionConsiderationsTransfers2015a}。

## 实用要点

- 文件选择：DE440/DE441 已替代 DE430，方向与 ICRF 对齐。月球部分包含天平动与地月质量比。

- 简化策略：仿真只有几小时量级时，可把日月位置固定在中间时刻，长弧则必须用完整历表。Lv et al. 2025 讨论了在精度损失可控下的历表简化方案 \cite{lvPreciseOrbitDetermination2025}。

- LTE440（Lu et al. 2025）是与 DE440 配套的月球时间历表，用于高精度测月 \cite{luLunarTimeEphemeris2025}。

## 相关概念

- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)

- [会合坐标系（Synodic Frame）](/glossary/fundamentals/synodic-frame/)

- [Chebyshev 多项式（Chebyshev Polynomial）](/glossary/fundamentals/chebyshev-polynomial/)

## 参考文献

- Standish, 1990, "The observational basis for JPL's DE200, the planetary ephemerides of the Astronomical Almanac," *A&A* 233:252–271.
