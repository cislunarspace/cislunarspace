---
title: 庞加莱映射（Poincaré Map / Poincaré Return Map）
description: "由庞加莱截面首次回归导出的离散映射 P: Σ → Σ，把连续流的周期/准周期/混沌分析转化为离散动力学问题。覆盖平面与空间 CR3BP 中映射的维度与不动点稳定性、高维映射的字形可视化、近星点图与 Tisserand-Poincaré 图等专门化映射，及其在 heteroclinic/homoclinic 连接、转移设计中的应用。"
keywords: 庞加莱映射, 庞加莱图, Poincaré Map, First Return Map, 近星点图, periapse map, Tisserand-Poincaré 图, 不动点, 单值矩阵, heteroclinic, homoclinic
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 庞加莱映射（Poincaré Map / Poincaré Return Map）
  desc: "由庞加莱截面首次回归导出的离散映射 P: Σ → Σ；把连续流的周期/准周期/混沌分析转化为离散动力学问题。"
  image: /logo.png
og:
  title: 庞加莱映射（Poincaré Map）详解 | 术语定义
  description: "由庞加莱截面首次回归导出的离散映射 P: Σ → Σ，把连续流的周期/准周期/混沌分析转化为离散动力学问题。覆盖平面与空间 CR3BP 中映射的维度与不动点稳定性、高维映射的字形可视化、近星点图与 Tisserand-Poincaré 图等专门化映射，及其在 heteroclinic/homoclinic 连接、转移设计中的应用。"
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 庞加莱映射（Poincaré Map）详解 | 术语定义
  description: "由庞加莱截面首次回归导出的离散映射 P: Σ → Σ，把连续流的周期/准周期/混沌分析转化为离散动力学问题。覆盖平面与空间 CR3BP 中映射的维度与不动点稳定性、高维映射的字形可视化、近星点图与 Tisserand-Poincaré 图等专门化映射，及其在 heteroclinic/homoclinic 连接、转移设计中的应用。"
  image: /logo.png
permalink: /glossary/dynamics/poincare-map/
---

# 庞加莱映射（Poincaré Map / Poincaré Return Map）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

庞加莱映射（Poincaré map，又称首次回归映射 first return map）是由 [庞加莱截面](/glossary/dynamics/poincare-section/) $\Sigma$ 上的首次回归导出的离散映射 $P:\Sigma\to\Sigma$：从 $\mathbf{x}_k\in\Sigma$ 出发，沿相流积分至下一次按规定方向穿越 $\Sigma$ 的状态 $\mathbf{x}_{k+1}$，即 $P(\mathbf{x}_k)=\mathbf{x}_{k+1}$。反复迭代 $P$ 把连续流的周期/准周期/混沌分析转化为离散动力学问题（Poincaré 1892；Parker & Chua 1989）。

截面与映射紧密相关但侧重不同：

| 概念 | 侧重 | 描述对象 |
| :--- | :--- | :--- |
| **庞加莱截面** | 几何 | 记录穿越的超曲面 $\Sigma$ |
| **庞加莱映射** | 动力学 | 离散映射 $P$ 及其迭代点的分布图案 |

简言之，截面是"切面"，映射是"切面上点的回归规则"。

## 维度与可视化

在固定的 [雅可比常数](/glossary/dynamics/jacobi-integral/) $C$ 约束下，截面把流的维数降 1，映射作用于 $N-2$ 维状态上（Haapala & Howell 2014）：

- **平面 CR3BP**：映射为二维，平面投影即可完整表示状态，等值线交点直接给出连接解。

- **空间 CR3BP**：映射为四维，平面投影无法完整表示。**字形（glyph）表示法**在每个基点附加一个向量（或向量链）：基点编码位置 $(y,z)$，向量编码面内速度 $(\dot y,\dot z)$，进一步链接编码面外分量。字形图使 halo 轨道之间的 heteroclinic 连接在视觉上可辨（Haapala & Howell 2014；Whittington 2022）。

## 不动点与稳定性

周期轨道对应映射的**不动点**（或 $k$-周期点）。稳定性由不动点处线性化**单值矩阵** $DP$ 的特征值刻画：

- **中心型不动点**：稳定周期轨道，周围迭代点形成闭合环（准周期环面）。

- **鞍型不动点**：不稳定周期轨道（如 Lyapunov 轨道），迭代点沿稳定/不稳定流形排列。

迭代点形成闭合曲线对应**不变环面**（准周期运动），密集填充区域对应**混沌轨道**。从映射上定位周期轨道常是 [延拓](/glossary/dynamics/continuation/) 与多次打靶法的初值来源。

## 专门化映射

### 近星点图（periapse map）

定义在 [近星点截面](/glossary/dynamics/poincare-section/) $\Sigma=\{\dot\rho=0,\ddot\rho>0\}$ 上。平面问题中，其投影到构型空间即可完整表示状态，揭示次天体附近的逃逸/捕获结构（Villac & Scheeres 2004；Paskowitz & Scheeres 2006）。按中心天体命名的变体——**近地点图**（perigee map）、**近月点图**（perilune map）、**近星点/近拱点图**（apse map）——构造等价，仅参考主天体不同；近月点图常用于筛选月球借力 + WSB 捕获的转移轨道、分析 DRO 轨道族近月点分布（Scott & Spencer 2010）。

### Tisserand-Poincaré 图（T-P graph）

Tisserand 图（基于拼接二体模型的重力辅助序列设计工具）在 CR3BP 中的推广，由 Campagnola & Russell（2010）提出。坐标轴为相对主天体的吻切近星点距离与远星点距离（或周期），Tisserand 参数 $T = 3 - V_\infty^2$ 的等值线在固定 Poincaré 穿越点（通常取负 $x$ 轴穿越）逐圈采样。T-P 图覆盖了 $T<3$（$V_\infty$ 为虚数、拼接圆锥 Tisserand 图失效）的区域，可用于行星卫星系高高度飞越序列的系统化设计（Lantoine & Russell 2010；Yang et al. 2023；Shen et al. 2026）。

## 应用要点

- **Heteroclinic / homoclinic 连接**：在 $x=1-\mu$ 映射上，某周期轨道的不稳定流形与另一周期轨道的稳定流形的交点给出无机动转移初值；平面情形即等值线相交，空间情形靠字形观察后再用微分修正收敛（Gómez et al. 2001；Haapala & Howell 2014）。

- **转移初值生成**：把高维解空间压缩到二维图上，可交互式挑选转移候选，再由 [微分修正](/glossary/dynamics/differential-correction/) 或多次打靶收敛。

- **长期捕获轨道搜索**：近星点图上 non-transit 点（长期捕获）附近存在周期轨道的种子；由"镜像构型"反推初值并延拓得到（Haapala & Howell 2014）。

- **DRO 族分析**：DRO 各成员的近月点在映射上呈现规律性曲线结构，反映族内状态随轨道参数的连续变化，用于月球借力入轨窗口识别（Scott & Spencer 2010）。

## 数值实现备注

地月系中典型映射（~1000 条流形轨迹，积分约 1.2 年）在 MATLAB + C 积分子程序下耗时约 2-3 秒；日地系约 100 年积分量级类似（Haapala & Howell 2014）。长时间积分应优先选用辛积分器以抑制能量漂移。

## 相关概念

- [庞加莱截面（Poincaré Section）](/glossary/dynamics/poincare-section/)

- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)

- [延拓（Continuation）](/glossary/dynamics/continuation/)

- [微分修正（Differential Correction）](/glossary/dynamics/differential-correction/)

- [不变流形（Invariant Manifold）](/glossary/dynamics/invariant-manifold/)

- [雅可比常数（Jacobi Constant）](/glossary/dynamics/jacobi-integral/)

## 参考文献

- Poincaré H. Les méthodes nouvelles de la mécanique céleste[M]. Gauthier-Villars, 1892.

- Parker T S, Chua L O. Practical Numerical Algorithms for Chaotic Systems[M]. Springer, 1989.

- Gómez G, Llibre J, Martínez R, Simó C. Dynamics and Mission Design near Libration Points — Vol. II[M]. World Scientific, 2001.

- Villac B F, Scheeres D J. On the concept of periapsis in Hill's problem[J]. Dynamics & Control of Systems, 2004.

- Paskowitz M E, Scheeres D J. Geometry of quasiperiodic orbits in the Hill problem[J]. Celestial Mechanics and Dynamical Astronomy, 2006.

- Campagnola S, Russell R P. The Tisserand-Poincaré graph for multi-body gravity assists[C]. AAS/AIAA Astrodynamics Specialist Conference, 2010.

- Haapala A F, Howell K C. Representations of higher-dimensional Poincaré maps with applications to spacecraft trajectory design[J]. Acta Astronautica, 2014, 96: 23-46.

- Scott C J, Spencer D B. Transfer and capture into distant retrograde orbits via Poincaré and Periapsis maps[J]. JGCD, 2010. doi:10.2514/1.47791.

- Whittington T R. Multi-body trajectory design in the Earth-moon region utilizing Poincaré maps[D]. Purdue University, 2022.

- Yang J, et al. Review of trajectory design and optimization for Jovian system exploration[J]. Acta Astronautica, 2023.
