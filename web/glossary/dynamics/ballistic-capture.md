---
title: 弹道捕获（Ballistic Capture）
description: 航天器在不施加减速脉冲的情况下被目标天体引力自然捕获的动力学机制。覆盖弹道捕获 Belbruno-Miller 机制、临时捕获与永久捕获的能量条件、弱稳定边界（WSB）理论、Conley 定理与不变流形的关系，以及不同模型下的捕获能量比较。
keywords: 弹道捕获, 临时捕获, 永久捕获, 弱稳定边界, 低能捕获, Ballistic Capture, Temporary Capture, Permanent Capture, WSB, Weak Stability Boundary, Belbruno, 地月捕获, 月球捕获能量, 不变流形
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 弹道捕获（Ballistic Capture）
  desc: 无需减速脉冲即可被月球引力捕获的动力学机制
  image: /logo.png
og:
  title: 弹道捕获（Ballistic Capture）详解 | 术语定义
  description: 航天器在不施加减速脉冲的情况下被目标天体引力自然捕获的动力学机制。覆盖 Belbruno-Miller 机制、临时捕获与永久捕获的能量条件、弱稳定边界理论、Conley 定理与不变流形的关系。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 弹道捕获（Ballistic Capture）详解 | 术语定义
  description: 航天器在不施加减速脉冲的情况下被目标天体引力自然捕获的动力学机制。覆盖 Belbruno-Miller 机制、临时捕获与永久捕获的能量条件。
  image: /logo.png
permalink: /glossary/dynamics/ballistic-capture/
---

# 弹道捕获（Ballistic Capture）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

弹道捕获（ballistic capture）是指航天器**不施加主动减速脉冲**、仅依靠多体引力环境的自然动力学，被目标天体（在本文语境下为月球）捕获进入其引力束缚区域的机制（Belbruno & Miller 1993；Parker & Anderson 2014）。在经典二体轨道转移框架下，从双曲线轨道变为椭圆轨道必须施加制动脉冲（月球捕获需约 0.6--0.8 km/s 量级的 $\Delta v$）。弹道捕获则利用太阳引力摄动或不变流形的自然结构，使航天器在不消耗额外推进剂的情况下进入目标天体附近。

弹道捕获不是一种确定的轨道类型，而是一种**动力学现象**：航天器的雅可比常数因第三体摄动缓慢改变，使其能量逐渐降低，最终从可逃逸状态过渡到被约束状态。在限制性三体问题框架下，这种过渡对应着航天器穿越零速度曲面（ZVS）的颈部（neck）区域，即平动点 $L_1$ 或 $L_2$ 附近的能量关卡（Koon et al. 2000）。

## 物理机制

### 能量场景与颈部开闭

在圆型限制性三体问题（CR3BP）中，航天器的运动受雅可比常数 $C$ 约束。令 $C_1, C_2, C_3$ 分别为 $L_1, L_2, L_3$ 平动点处的雅可比常数值（地月系：$C_1 \approx 3.188$, $C_2 \approx 3.172$, $C_3 \approx 3.012$，无量纲化单位）。零速度曲面的拓扑随 $C$ 变化（Szebehely 1967）：

- $C > C_1$：零速度曲面将地球与月球区域完全隔离，航天器无法跨越。

- $C_2 < C < C_1$：$L_1$ 处打开颈部，航天器可在地球区域与月球区域之间来往，这是**弹道捕获得以发生的能量区间**。

- $C_3 < C < C_2$：$L_2$ 处也打开，航天器可逃逸到外部空间。

- $C < C_3$：所有通道打开，航天器可从任意方向离开系统。

航天器进入月球区域后，若其能量通过第三体摄动（主要是太阳）进一步降低至 $C > C_1$，颈部关闭，航天器便被**永久囚禁**在月球区域（Liang et al. 2016）。若能量仅暂时进入可捕获区间，则形成**临时捕获**。

### Belbruno-Miller 机制

Belbruno 和 Miller（1993）首先在日-地-月四体问题中发现了弹道捕获的工程可实现性。关键思路是：航天器从地球发射后，先进入一条远地点超出月球轨道的大椭圆轨道；在远地点附近，太阳引力摄动改变其角动量，使月球引力得以捕获航天器。这一机制被用于救援日本 Hiten 探测器，后者仅靠弹道捕获便成功进入绕月轨道，节省了传统方法所需的大量 $\Delta v$。

### Conley 定理与不变流形

Conley（1968）在 CR3BP 框架下证明了一个根本性的拓扑定理：**若存在穿越渐近轨道（crossing asymptotic orbit），则在该轨道任意近旁必存在捕获轨道**。这里的穿越渐近轨道即来自 $L_1$ 或 $L_2$ Lyapunov/Halo 周期轨道的不变流形上的轨道。

Giancotti 等（2012）利用圆柱同构映射（cylindrical isomorphic mapping）可视化了 Conley 定理的几何实质：稳定流形管与不稳定流形管的**同宿相交**（homoclinic intersection）构成了临时捕获与永久捕获的拓扑分界线。流形管交叠越密集，该区域的混沌程度越高，捕获时长分布越宽。

### 弱稳定边界（WSB）

弱稳定边界（Weak Stability Boundary, WSB）是 Belbruno（2004）提出的另一个捕获取向概念。WSB 定义为一个模糊区域：在该区域内，航天器的运动对初始条件极为敏感，小幅扰动即可改变其最终是捕获还是逃逸。从工程角度看，WSB 是弹道捕获发生的目标窗口。关于 WSB 与不变流形的关系，Garcia & Gómez（2007）指出，在 WSB 区域内，航天器的运动可通过平动点轨道的稳定/不稳定流形管来描述，两者是同一动力学现象的不同数学表述（李翔宇等 2021）。

## 捕获的类型

### 临时捕获（Temporary Capture）

临时捕获指航天器在第二主天体附近绕行有限圈数后最终逃逸的现象（Fantino et al. 2010）。其特征是：

- 相对第二主天体的二体开普勒能量暂时为负（$E_{\text{Kep}} < 0$），航天器局部被束缚；

- 在多体摄动下，能量逐渐转正或航天器撞上第二主天体，捕获终止；

- 捕获持续时间和绕行圈数取决于初始条件，轨道越接近平动点周期轨道（能量越低、$C$ 越大），捕获越持久。

在天体力学中，临时捕获解释了地球的临时卫星（minimoon）现象，小行星被地球引力暂时捕获数月到数年（Granvik et al. 2012）。

### 永久捕获（Permanent Capture）

永久捕获指航天器的雅可比常数**永久性**地高于 $C_1$（即 $C > C_1$），零速度曲面的颈部关闭，航天器被能量隔绝在月球区域内，在无推力情况下无法离开（Oshima et al. 2017）。

按实现手段可分为：

- **自然永久捕获**：通过纯引力机制（如太阳摄动或流形拼接）使航天器能量降至颈部关闭以下，在 CR3BP 中不可能（雅可比常数守恒），但在四体问题（日-地-月）或椭圆限制性三体问题中可以发生。

- **推力辅助永久捕获**：先利用弹道机制将航天器送入月球区域（此时 $C_2 < C < C_1$），再以小推力逐步降低能量、增大 $C$，最终关闭颈部，如 Liang 等（2016）提出的 GEO 卫星寿命末期月球处置方案。

### 弹道捕获驻留时间

临时捕获的驻留时间（time of permanence in ballistic capture）是衡量捕获深度的核心指标。通过 Poincaré 截面网格扫描，可将初始条件按捕获行为分为五类（Sousa-Silva et al. 2018）：

- **G（良好捕获）**：稳定绕行多圈，最终留在月球附近

- **L（低轨捕获）**：近月距较小、满足任务约束

- **H（高轨捕获）**：近月距偏大

- **C（撞月）**：轨迹与月面相交

- **O（逃逸）**：未被捕获，离开月球区域

捕获能量（capture $\Delta v$）定义为将航天器从未被捕获的轨迹拉入捕获状态所需的最小速度增量。不同引力模型给出的月面捕获 $\Delta v$ 差异显著：二体模型约 695.7 m/s、Hill 模型约 656.8 m/s、CR3BP 约 649.2 m/s、空间双圆模型（SBCM）约 642.9 m/s（徐明 2010）。多体模型估值偏低，因为它们计入了第三体引力辅助效应。

## 逃逸方向与非逃逸方向

共线平动点附近的线性动力学由四个特征方向刻画（Renk et al. 2010）：

- **逃逸方向 $\mathbf{u}$**：位于 $xy$ 平面内，沿此方向的摄动激发指数增长项（对应不稳定流形的切向），航天器将逐渐远离平动点轨道。

- **非逃逸方向 $\mathbf{s}$**：与 $\mathbf{u}$ 正交，沿此方向的速度增量仅改变轨道振幅（对应中心流形方向），不激发指数发散。

在弹道捕获的数值构造中，从平动点轨道出发沿逃逸方向 $\mathbf{u}$ 给一个小扰动即得到不稳定流形的初始条件；沿反方向给扰动得到稳定流形。这两个方向是构造捕获/逃逸通道的数学基础。

## 相关概念

- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)

- [不变流形（Invariant Manifold）](/glossary/dynamics/invariant-manifold/)

- [弱稳定边界（WSB）](/glossary/dynamics/wsb/)

- [零速度曲面（Zero-Velocity Surface）](/glossary/dynamics/zero-velocity-surface/)

- [雅可比积分（Jacobi Integral）](/glossary/dynamics/jacobi-integral/)

- [同宿连接（Homoclinic Connection）](/glossary/dynamics/heteroclinic-orbit-transfer/)

- [庞加莱截面（Poincaré Section）](/glossary/dynamics/poincare-section/)

- [平动点（Libration Point）](/glossary/fundamentals/libration-point/)

- [会合坐标系（Synodic Frame）](/glossary/fundamentals/synodic-frame/)

- [Halo 轨道（Halo Orbit）](/glossary/orbits/halo-orbit/)

## 参考文献

- Belbruno & Miller, 1993, Sun-perturbed Earth-to-Moon transfers with ballistic capture, *J. Guidance, Control, and Dynamics*

- Belbruno, 2004, *Capture Dynamics and Chaotic Motions in Celestial Mechanics*, Princeton University Press

- Parker & Anderson, 2014, *Low-Energy Lunar Trajectory Design*, JPL Deep-Space Communications and Navigation Series

- Conley, 1968, Low energy transit orbits in the restricted three-body problem, *SIAM J. Applied Mathematics*

- Koon, Lo, Marsden, & Ross, 2000, Dynamical systems, the three-body problem and space mission design, *Celest. Mech. Dyn. Astron.*

- Giancotti, Pontani, & Teofilatto, 2012, Lunar capture trajectories and homoclinic connections through isomorphic mapping, *Celest. Mech. Dyn. Astron.*

- Sousa-Silva et al., 2018, Fast earth–moon transfers with ballistic capture, *Celest. Mech. Dyn. Astron.*

- Liang et al., 2016, Low-energy lunar transfer and permanent capture for GEO disposal, *Acta Astronautica*

- Fantino et al., 2010, Temporary capture in the Earth-Moon system, *Planetary and Space Science*

- Oshima et al., 2017, Permanent capture and escape in the Earth-Moon system, *Celest. Mech. Dyn. Astron.*

- 徐明, 2010, 地月低能转移的发生条件及轨迹构造, *中国科学*

- 李翔宇, 乔栋, 程潏, 2021, 三体轨道动力学研究进展, *力学进展*

- Szebehely, 1967, *Theory of Orbits: The Restricted Problem of Three Bodies*, Academic Press

- Renk et al., 2010, Exploration missions in the Sun-Earth-Moon system, *Acta Astronautica*
