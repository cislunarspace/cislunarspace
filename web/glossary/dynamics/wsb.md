---
title: 弱稳定性与弱稳定边界（Weak Stability Boundary, WSB）
description: 弱稳定边界（Weak Stability Boundary, WSB）是由太阳引力摄动导致的地月系统弹道捕获区域——航天器轨道能量处在该边界附近时，太阳的周期性引力扰动足以改变轨道形状而无需消耗燃料。覆盖Belbruno & Miller（1993）的原定义与算法、"稳定运动衰减"的检查流程、Hiten任务飞行实例、弱稳定区（WSR）的三类现象（共线走廊、三角点实用稳定区、弱稳定轨道），以及与不变流形拼接理论的对比。
keywords: 弱稳定边界, Weak Stability Boundary, WSB, 弹道捕获, ballistic capture, 弱稳定区, WSR, 弱不稳定, 低能转移, Hiten, Belbruno
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 弱稳定性与弱稳定边界（Weak Stability Boundary, WSB）
  desc: 太阳引力摄动下的地月弹道捕获区域与弱稳定性现象的完整阐述。
  image: /logo.png
og:
  title: 弱稳定性与弱稳定边界（WSB）详解 | 术语定义
  description: 弱稳定边界（Weak Stability Boundary, WSB）是由太阳引力摄动导致的地月系统弹道捕获区域。覆盖Belbruno的原始定义、Hiten任务验证、WSR/弱不稳定/实用稳定区等三类弱稳定性现象，以及与不变流形拼接理论的对比。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 弱稳定性与弱稳定边界（WSB）详解 | 术语定义
  description: 太阳引力摄动下的地月弹道捕获区域：Belbruno定义→Hiten验证→三类弱稳定现象→与不变流形的对比。
  image: /logo.png
permalink: /glossary/dynamics/wsb/
---

# 弱稳定性与弱稳定边界（Weak Stability Boundary, WSB）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

弱稳定边界（Weak Stability Boundary, WSB）是 Belbruno & Miller（1993）提出的概念：在地-月-日四体引力环境下，每个中心天体周围存在一个模糊的过渡边界，航天器位于该边界附近时其稳定绕飞运动（cycling）会突然衰减，绕行几圈后脱离中心天体。WSB 位于引力扰动的平衡区：在此区域，中心天体的引力、其他天体的扰动（对月球而言是地球和太阳）以及航天器的运动方向三者相互作用，使轨迹变得高度敏感：微小的速度改变就能产生巨大的轨道差异。

具体而言，月球 WSB（$\text{WSB}_M$）的稳定运动衰减距离 $r^*$ 在各方向约 0.08–2.95 倍地月距离（约 3 万至 110 万 km，取决于运动方向和日地月相位），地球 WSB（$\text{WSB}_E$）则延伸到约四倍地月距离（约 150 万千米）。WSB 的定义是过程性的而非几何性的：它通过数值检查从给定的径向距离和运动方向上发射出绕飞稳定的临界点，来逐点构造（Belbruno 2024）。

## 算法定义（Belbruno & Miller 1993）

以月球 WSB（$\text{WSB}_M$）为例，稳定运动的一致性定义为：

1. 选定运动方向 $(\theta, \varphi, \alpha)$（径向角、极角、速度在横向平面内的指向）和偏心率 $e$。
2. 从月心径向线上给定距离 $r$ 处发射测试粒子，初始速度方向使速度与位置径向方向正交（垂直于 $l$ 的半平面 $P$ 内）。
3. 数值积分四体运动方程（日-地-月-航天器），检查粒子能否至少完成两次对月球的完整绕行使位置再次跨越参考半平面（或绕行圈数小于最小要求即判定为稳定运动失效）。
4. 逐步增加 $r$，重复 上一步。临界距离 $r^*$ 定义为稳定运动衰减的最小距离：小于 $r^*$ 时稳定绕飞，大于 $r^*$ 时因太阳扰动而脱离。

沿不同 $(\theta, \varphi, \alpha)$ 方向重复此过程，得到 $r^*$ 的函数曲面，即 WSB 的三维包络。Belbruno 的 1993 年结果给出月球 WSB 各方向的 $r^*$ 范围为 0.08–2.95 倍地月距离（约 30000–1100000 km），这一区域远大于传统的月球影响球（约 66000 km）。

## 弹道捕获与 Hiten 任务

WSB 的应用价值在于实现**弹道捕获**：航天器到达月球附近时无需大幅减速脉冲即可自然进入绕月椭圆轨道。经典方法（双曲剩余速度 $V_\infty$ 决定捕获 $\Delta V$）需要数百 m/s 的捕获机动；而 WSB 弹道捕获零需此机动（转化为弱不稳定椭圆状态），只需后续以极小冲量稳定化。

1991 年日本的 Hiten 航天器是世界上首个使用 WSB 弹道捕获技术到达月球的探测器（Belbruno & Miller 1993）。Hiten 于 1990 年 1 月发射，初始任务设计中推进剂不足以支持经典转移方式抵达月球。Belbruno 提出了替代方案：

1. 从地球轨道出发飞越月球，获得能量飞至地球 WSB（约 $1.5 \times 10^6$ km）；
2. 在地球 WSB 处执行微量 $\Delta V$（约 14 m/s）使轨道与月球 WSB 附近的弹道捕获轨迹吻合；
3. 沿 WSB(M) 轨迹自然回归月球，无需额外捕获机动即可进入绕月椭圆轨道。

WSB 转移相比霍曼转移节省约 18% 的总 $\Delta V$，但飞行时间更长（约 3–4 个月而非 3 天）。Hiten 于 1991 年 4 月启动 WSB 转移，1991 年 10 月 2 日成功绕月，验证了该技术的可行性。

## 三维度弱稳定性现象

在地月空间文献中，与弱稳定直接相关的概念有三类不同尺度的现象，应区分子以理解：

### 1. 共线弱稳定区（WSR）：走廊型

中文文献中的弱稳定区（WSR）通常指**沿地月连线通过三个共线平动点 $L_1, L_2, L_3$ 的一条走廊**，航天器在其中仅需微小推力即可在封闭轨道上运行。这与 Belbruno 的 WSB 有交集但不完全等价：WSR 侧重 CR3BP 框架下的平动点邻域弱引力环境，WSB 侧重太阳摄动下的四体演化。两者都表达了弱稳定这一共同主题：航天器受到的引力平衡使得运动对环境变化高度敏感，因而可以通过小冲量实现大的轨道改变。

### 2. 三角点实用稳定区（Practical Stability Region）

三角平动点（$L_4, L_5$）在 CR3BP 线性分析中为中心型稳定：特征值均为纯虚数。但实际地月系统中，太阳引力摄动会引入非可积扰动，导致三角点附近的运动呈现**弱不稳定性**（weak instability）：轨道不会被瞬间驱散，但会在较长时间尺度（数年至数十年）内缓慢漂离。这个有界的稳定区域称为**实用稳定区**（practical stability region），初始偏移可达上万公里而维持数十年不逃逸（刘林 & 刘慧根, 2008），但太阳摄动在真实力学模型中严重缩小了该区域的有效范围。

这与共线平动点的强指数不稳定性（Floquet 乘子 $\lambda_u > 1$，发散率 $\delta \approx 0.5\ \text{day}^{-1}$）形成对比：后者需要持续主动控制才能维持，而三角点弱不稳定只需数月一次的微量校正即可。

### 3. 弱稳定轨道（Weakly Stable Orbit）

广义的弱稳定轨道指动力学系统中**存在至少一个正 Lyapunov 特征指数**的轨道：初始误差会随时间指数增长，但增长速率（相比明显发散轨道）相对较小。典型的弱稳定轨道包括共线平动点附近的 Halo 轨道和拟周期轨道（钱霙婧等, 2013）。这些轨道的共同点是：误差发散不可避免，但发散较慢（相对于周期轨道的不稳定模态级联），因此轨道维持的频次和总代价低于预期。

## 与不变流形理论的对比

WSB 定理与不变流形理论是看待低能转移的两种互补框架。不变流形（稳定流形/不稳定流形）从动力系统理论出发，刻画了特定周期轨道邻域的精确流形结构，用拼接策略设计转移。WSB 则从四体数值博弈出发，刻画了太阳引力摄动塑造的全局区域，不依赖于特定周期轨道的流形。二者有交集：Belbruno et al.（2010）指出，月球 WSB 上的捕获轨迹与地月 $L_1$/$L_2$ Lyapunov 轨道的稳定流形在空间上有重叠，WSB 可以看作不变流形在四体环境下的推广。

工程上，WSB 方法的优势是对星历扰动（月偏心率、太阳引力）直接建模而不需引入 CR3BP 近似后进行修正，更接近实际操作环境。

## 应用要点

- **弹道捕获设计**：WSB 转移适用于推进剂受限的月球轨道器（如小行星采样返回的月球捕获相位）。飞行时间代价（月级而非天级）是主要的取舍因子。

- **弱不稳定性利用**：三角点附近弱不稳定意味着以极低成本（年数米/秒以下）就能长期在轨，适合低成本中继通信或导航卫星的部署区域。

- **走廊穿越**：共线 WSR 走廊的低推力特性使其成为微小卫星在不进行大冲量轨道维持的条件下利用自然动力学运行的潜在走廊。

## 相关概念

- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)

- [平动点（Libration Point）](/glossary/fundamentals/libration-point/)

- [KAM理论与长期稳定性](/glossary/dynamics/kam-theory/)

- [单值矩阵与Floquet稳定性分析](/glossary/dynamics/monodromy-matrix/)

- [稳定流形（Stable Manifold）](/glossary/dynamics/invariant-manifold/)

- [庞加莱映射（Poincaré Map）](/glossary/dynamics/poincare-map/)

- [Floquet模态法与轨道保持](/glossary/dynamics/floquet-modal-method/)

## 参考文献

- Belbruno & Miller, 1993, "Sun-Perturbed Earth-to-Moon Transfers with Ballistic Capture", J. Guidance, Control, and Dynamics（WSB 的原始定义、算法过程、Hiten 任务试飞验证）

- Belbruno, 2024, "Cantor Set Structure of the Weak Stability Boundary for Infinitely Many Cycles in the Restricted Three-Body Problem"（WSB 的 Cantor 集结构，无穷多圈稳定性衰减的精确数学图像）

- Belbruno et al., 2010, "Weak Stability Boundary and Invariant Manifolds"（WSB 与不变流形之间的几何关系：月球 WSB 轨迹与 $L_1$/$L_2$ 流形的空间重叠）

- Topputo, 2013, "On Optimal Two-Impulse Earth–Moon Transfers in a Realistic Four-Body Model", Celest. Mech. Dyn. Astron.（WSB 四体模型的数值优化框架）

- 刘林 & 刘慧根, 2008, "地月系中探测器定点在三角平动点附近的位置漂移及其控制问题"（三角点实用稳定区域的特征与太阳摄动的影响）

- 钱霙婧等, 2013, 宇航学报（弱稳定轨道及其轨道保持策略的数值分析）

- Parker & Anderson, 2014, *Low-Energy Lunar Trajectory Design*, JPL（WSB 转移设计的工程手册级处理）

- Folta & Vaughn, 2004, "A Survey of Earth-Moon Libration Orbits"（平动点站保持的弱稳定分析，含 dLQR 与数值靶向方法的对比数据）
