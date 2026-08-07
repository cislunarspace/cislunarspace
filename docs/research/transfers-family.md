# 转移轨道族一批概念性词条合并前调研笔记

调研日期：2026-08-07。目的：核对「转移轨道族」一批约 40 条通用轨道动力学概念词条的定义与出处，为判断各条归宿（保留独立 / 并入主词条 / 标空泛待删）做准备。

调研范围：论文库中重点核对了 Parker & Born 2008、Haapala & Howell 2016、Parker 等 2010（Chaining）、Liang 等 2016、Du 等 2023、Folta 等 2015、Welch 等 2015、Kayama 等 2022、Zimovan-Spreen 等 2022、Ross 2022、Topputo 2013。先例笔记（low-energy-family.md、halo-family.md、dro-family.md、libration-points-family.md）中已核对的徐明 2010、Xu 2013、Capdevila & Howell 2018 结论直接引用，不重复论证。

论文简称：

- P&B 2008 = Parker & Born 2008, *Direct lunar halo orbit transfers*
- H&H 2016 = Haapala & Howell 2016, *A transfer network…*（catalog 出处）
- P 2010 = Parker 等 2010, *Chaining periodic three-body orbits in the Earth–Moon system*
- Liang 2016 = Liang 等 2016, *The classification of cislunar trajectories and its applications in the Earth–Moon system*
- Du 2023 = Du 等 2023, *Two trajectory configurations for the low-thrust transfer between northern and southern halo orbits*
- Folta 2015 = Folta 等 2015, *An Earth–Moon system trajectory design reference catalog*
- Welch 2015 = Welch 等 2015, *Mission considerations for transfers to a distant retrograde orbit*
- Kayama 2022 = Kayama 等 2022, *Low-thrust trajectory design with successive convex optimization for libration point orbits*
- Z-S 2022 = Zimovan-Spreen 等 2022, *Dynamical structures nearby NRHOs with applications to transfer design in cislunar space*
- Ross 2022 = Koon–Lo–Marsden–Ross 学派专著扩展版
- 徐明 2010 = 徐明《地月低能转移的发生条件及轨迹构造》
- Xu 2013 = Xu 等 2013，徐明工作的英文扩展版
- Topputo 2013 = Topputo, *On optimal two-impulse Earth–Moon transfers in a four-body model*

词条引用但**不在库**、本轮无法核对的文献：Spreen 2021（manifold-connection 词条参考文献，未具体标注页码）、Ren 等 2020（transfer-family 词条参考文献）、Haapala & Howell 2016 词条名缩写、Scott & Spencer 2010（transfer-family 词条）、彭蕾 2024（lambert-patching-method 词条）、常笑宽 2026（hybrid-multi-conic-method 词条）、包为民 2023（lambert-transfer 词条）、Lizy-Destrez 2019（lambert-arc 词条）、Pergola 2010（manifold-leg 词条所引 Cheng 2017）、Alessi 2010（two-maneuver-transfer-design 词条）、肖业伦 2006（lambert-problem 词条）、彭坤 2018（prograde-in-perigee 词条）。其中彭坤 2018 不在库，无法核对词条定义的出处准确性。

## 1. 流形连接族（8 条）

### 1.1 manifold-connection（拟主词条）

- 现有词条定义「利用不变流形实现的轨道之间的自然转移路径」方向正确但过于空泛，参考文献仅「Spreen 2021」无具体页码。流形连接的实质：平动点周期轨道的双曲性质产生稳定/不稳定不变流形，一条轨道的不稳定流形与另一条轨道的稳定流形在相空间相交即构成转移通道（P 2010 §2.4；H&H 2016 §1）。maneuver-free 的连接即异宿/同宿连接，需要小 ΔV 的则属流形辅助转移（H&H 2016）。
- 主词条应涵盖：流形连接的动力学原理（Ross 2022 §5；P 2010 §2.3–2.4）、异宿/同宿连接的定义（P 2010 §2.4、H&H 2016 §1）、Poincaré 截面构造法（P 2010、H&H 2016）、拼接中的小 ΔV 弧（H&H 2016）。

### 1.2 manifold-insertion（并入 manifold-connection）

- 出处 P&B 2008 准确。该文定义直接晕轨道转移由两段组成——**Bridge segment**（连接 LEO 与流形段的桥梁弧段）与 **Manifold segment**（沿目标 halo 轨道稳定流形渐近飞向 halo 的弧段）；两段衔接处的脉冲记为 **ΔV_MI**（manifold insertion maneuver），为流形段上某点执行的切向脉冲（P&B 2008 §"Constructing Direct Lunar Halo Transfers"）。词条「第二次脉冲机动……500–1000 米/秒」中的量级——P&B 2008 的 open-point 方案图中 ΔV_MI 量级从数十 m/s 到约 1 km/s 不等（取决于 τ、Δt_m），「500–1000 m/s」只覆盖了高代价区间，不完整。
- 「在流形段上某点执行切向脉冲，使航天器进入流形段并沿稳定流形渐近飞向目标晕轨道」相符。该概念是 P&B 2008 直接转移方法论中的专用术语，无独立理论地位——并入 manifold-connection 主词条作为一个设计方法实例。

### 1.3 manifold-jump-transfer（并入 manifold-connection）

- 定义「通过一次小机动将航天器从一条不变流形的邻域跳跃到另一条流形的邻域」描述合理，是流形拼接中因流形不相交而施加小 ΔV 的通用操作（H&H 2016 中 low-ΔV 转移即属此类）。参考文献 Folta 2012（ARTEMIS 转移设计）在库，ARTEMIS 确实利用了 L1/L2 准 halo 轨道间的流形连接（Folta 2015 §"CLASSIFICATION"：ARTEMIS "leveraged manifold connections between L1 and L2 quasi-halo orbits"）。但「manifold-jump transfer」并非 Folta 2012 使用的形式术语；该概念只是流形连接的一种情形（流形不完全相交、需小 ΔV），可并入主词条的「流形辅助转移」部分。

### 1.4 manifold-leg（并入 manifold-connection）

- 定义「转移轨道的第一段，沿不稳定流形从平动点轨道飞向近月点」方向正确。参考文献 Cheng 2017 在库（*Study of the transfer between libration point orbits and lunar orbits in Earth–Moon system*），该文确实使用流形段构造 LPO→LLO 转移。但「manifold leg」是描述性用语，指转移轨迹中沿不变流形演化的那段弧（P&B 2008 的 Manifold segment 即一例）；无独立理论地位，并入主词条的「转移弧段构成」部分。

### 1.5 heteroclinic-connection（拟并入 manifold-connection）

- 词条位于 `orbits/` 和 `dynamics/` 两处。
- **`orbits/heteroclinic-connection`**：定义「连接两个不同周期轨道的不变流形之间的交集路径」相符（P 2010 §2.4；H&H 2016 §1）；「零速度增量」「对扰动敏感」「能量匹配约束（相同 Jacobi 常数）」三条动力学特性均准确（P 2010 §2.4：heteroclinic connection 要求两轨道有相同 Jacobi 常数）。「典型异宿连接」表格中「Butterfly 轨道内部连接」一说——butterfly 轨道（P2HO1）本身是 halo 族分岔的高阶周期轨道（Z-S 2022 §3），不是异宿连接的「体现」，需修正。「L1-L2 连接」与「L1-Lyapunov ↔ L2-Lyapunov」两行实质是同一类连接的不同表述，可合并。参考文献 Koon 2000 *Chaos* 与 Haapala 2013 均不在库但文献确实存在，前者是异宿连接的经典出处。
- **`dynamics/heteroclinic-connection`**：定义聚焦于 Ren 2011 的 PCR3BP 行星际传输语境——「太阳系中仅木星-土星和天王星-海王星两对相邻系统满足此条件」，该结论出自 Ren 等 2011 *On the mechanisms of natural transport in the solar system*（不在库）。与 `orbits/` 版本内容互补但侧重不同（一个地月系、一个行星际），合并后只需一个主词条。
- 两版合并后并入 manifold-connection 的「异宿连接」部分，保留 Conley 1968 / Koon 2000 的经典定义与 Ren 2011 的行星际推广两条线索。

### 1.6 heteroclinic-orbit-transfer（并入 manifold-connection / heteroclinic-connection）

- **`orbits/heteroclinic-orbit-transfer`**：定义「连接不同周期轨道或不同平动点附近 Lyapunov 轨道的轨道，可实现不同动力学区域之间的低能转移」与 heteroclinic-connection 高度重复，参考文献 Belbruno 2010 与该概念非直接关联（Belbruno 2010 讨论 WSB 与流形的关系，不专门讨论异宿连接）。内容空泛，直接并入。
- **`dynamics/heteroclinic-orbit-transfer`**：内容更充实（数学定义、同宿/异宿区分、星际高速公路理论）。但有若干问题：(a)「从地球转移到 L2 Halo 的路径……1. 施加初始冲量进入异宿轨道」——异宿连接在理想 CR3BP 中是零 ΔV 的，不应需要「初始冲量」（该描述与词条自述的「极低能量」矛盾，来源是郭建宇 2020 学位论文，不在库）；(b)「星际高速公路」（Martin Lo）作为概念确实存在，但 Lo 2002 的报告（参考文献）不在库，无法核对细节；(c) 表格中「周期轨道：起点平动点、终点平动点（同宿特例）」表述不准确——周期轨道不是同宿轨道的特例，同宿连接是 t→±∞ 都趋近同一条轨道。

### 1.7 orbit-chain / orbit-chaining

- **orbit-chain**（保留独立或并入 manifold-connection）：出处 P 2010 准确——该文标题即 *Chaining periodic three-body orbits*，用不变流形将多条简单周期轨道串联形成「complex chains of orbit transfers」（P 2010 Abstract & §1）。定义「利用不稳定周期轨道的不变流形，将多条简单周期轨道串联形成的低能量转移路径」相符。P 2010 还证明复杂周期轨道是连续族的成员（§Abstract）。应用价值段是模板套话。该概念与 manifold-connection 有联系但有独立性（强调「链式」多条轨道的串联结构），可保留独立词条或并入 manifold-connection。
- **orbit-chaining**（并入 orbit-chain 或 manifold-connection）：出处 Kayama 2022 在库，核对结果——该文 §A（Generation of Initial Guesses）明确「the orbit chaining technique generates accurate estimates…This technique uses a family of halo orbits…In a family of halo orbits, the Jacobi constants change continuously, and the smooth initial guesses in terms of the energy are simply constructed using intermediate halo orbits between the departure and arrival orbits」。词条定义「利用晕轨道族内中间轨道连接形成初始猜测的技术」完全相符。但 orbit-chaining 在 Kayama 2022 中是初始猜测生成技术，不是转移轨道类型本身——它属于数值设计方法，与 orbit-chain（P 2010 的动力学结构串联）侧重不同。两者可合并为一个词条的两个义项。

### 1.8 orbit-family-transfer（并入 manifold-connection 或 transfer-family）

- 定义「在同类型轨道族之间进行转移的设计，如 Halo 轨道族之间或 Halo 轨道族到 DRO 轨道族的转移」方向正确但过于泛化。参考文献「王义宇 2023」在库（*一种离散轨道数据约束下的地月三体轨道脉冲转移算法*），该文确实研究不同族间的脉冲转移。应用价值段「DRO 轨道的线性稳定性使其成为月球任务目标轨道的首选方案……需要根据具体应用场景和约束条件选择合适的分析方法。」与定义无关、且末尾多一个句号，属模板套话。该概念是 transfer-family 的一个子集（族间转移 vs 族内转移），可并入 transfer-family 或 manifold-connection。

**流形连接族合并建议**：以 manifold-connection 为主词条，并入 manifold-insertion、manifold-jump-transfer、manifold-leg、heteroclinic-connection（两版）、heteroclinic-orbit-transfer（两版）；orbit-chain / orbit-chaining 可保留独立词条（链式结构有独立性），或作为 manifold-connection 的一个义项；orbit-family-transfer 并入 transfer-family。

## 2. 转移族/目录/解集/窗口（4+1 条）

### 2.1 transfer-family（拟主词条）

- 定义「具有相似动力学特征的一组转移轨道。在 DRO 设计中，转移族通过数值延拓方法系统地产生：从一个转移初始解出发，通过改变雅可比常数、停泊轨道高度或入轨点，生成覆盖整个设计空间的一族转移轨道」——数值延拓成族的描述合理，但「每族转移对应一个不稳定的地球返回周期轨道」未标注出处，参考文献 Scott & Spencer 2010 / Ren 2020 均不在库，无法核对。应用价值段是模板套话（「基于该术语在定义中描述的功能或性质……」）。该概念是通用轨道动力学常识——周期轨道族和转移族均可通过参数延拓系统产生（P&B 2008 用遗传算法+hill-climbing 搜索 (x₀, τ, Δt_m) 参数空间即为实例），主词条应给出延拓方法的通用框架。

### 2.2 transfer-catalog（并入 transfer-family）

- 定义「地月空间平动点轨道之间可用转移轨道的集合，按转移类型和约束条件分类」与 H&H 2016 和 Folta 2015 相符。H&H 2016（§Abstract）：「a methodology to search for transfers between periodic lunar libration point orbits is developed, and a **catalog** of these transfers is established」；Folta 2015（§Abstract）：「an interactive and 'dynamic' **catalog** of potential solutions in the Earth–Moon system is explored…Characterizing and compiling periodic and quasi-periodic solutions」。两文均用 catalog 指系统编目的转移/轨道解集。H&H 2016 用 Poincaré 截面法搜索 L1/L2 vertical/halo/axial 族之间的转移，含 maneuver-free（异宿/同宿）和小 ΔV 连接；Folta 2015 用交互式框架，含轨道族特征参数（尺寸、周期、能量、稳定性）+ 站保代价估计 + LEO 转移代价估计。
- 应用价值段「轨道转移设计是任务成败的关键环节……」是模板套话。可并入 transfer-family 的「转移目录」义项。

### 2.3 transfer-solution-set（并入 transfer-family）

- 定义「对某一目标 DRO，满足工程约束的所有可行转移轨道的集合。通过在离轨脉冲、入轨脉冲、离轨相位和入轨相位构成的参数空间中网格搜索获得……解集以转移时间和总脉冲的分布图展示，相邻解聚集形成转移轨道族」——参考文献「魏赞 2026 北航学报」不在库，无法直接核对。但该描述与 Wang 2021/DRO 族调研中已核对的网格搜索法一致（dro-family.md）。概念上是 transfer-family 的具体实例（网格搜索 → 解集 → 族），可并入。

### 2.4 transfer-window（并入 transfer-family）

- 定义「允许执行地月低能转移的时间区间。对于经由平动点穿越的转移，窗口由太阳相位角 β 决定；对于经由 Halo 轨道穿越的转移，窗口由太阳相位 β 和 Halo 轨道相位共同决定」与徐明 2010 一致（low-energy-family.md §2.3 已核对：LL1 穿越 β∈[77°,109°]∪[285°,342°]；LL2 外侧 Δβ≈3°；LL2-Halo (β,τ) 窗口）。「为三维窗口」的说法——徐明 2010 §3.2 原文称窗口「上升为三维」，但原文显式参数只有 β 与 τ 两个（halo-family.md §5 已辨析此点），第三维的说法存疑。应用价值段可用但泛化。该概念有独立的工程含义（发射窗口），可保留独立或并入 transfer-family。

### 2.5 multi-revolution-transfer-structure（并入 transfer-family 或保留独立）

- 定义「低推力转移轨迹的一种基本构型。航天器在连续低推力作用下，绕平动点旋转多圈后到达目标轨道。通过增加圈数 n，可在降低所需推力的同时延长飞行时间」与 Du 2023 相符——Du 2023 §Abstract：「Traditional low-thrust transfer trajectories are **multi revolution structures**, which are modeled in this problem as multiple rotations around the libration point. The characteristics of the transfer are affected by the number of revolutions」；并指出其提出的不变流形方法「involves shorter time of flight, lower fuel consumption and reduced engine thrust requirements」优于多圈结构。「圈数越多，推力增益越小，且积分误差累积使计算收敛变难」——Du 2023 未直接讨论积分误差，但该文比较了多圈结构 vs 不变流形两种初始猜测方案，后者性能更优。「存在实用上限」合理但无明确出处。
- 该概念是小推力转移设计中的构型选择，有独立技术含义，可保留独立词条或并入 transfer-family。

**转移族合并建议**：以 transfer-family 为主词条，并入 transfer-catalog、transfer-solution-set；transfer-window 可保留独立（发射窗口有独立工程含义）或并入；multi-revolution-transfer-structure 可保留独立（小推力构型有独立含义）或并入。

## 3. 保留独立词条的快速核对

### 3.1 Lambert 系列

- **lambert-problem**：定义「已知两点位置和飞行时间，确定轨道参数」是经典定义（Bate 等 1971、Battin 1999 均有），参考文献肖业伦 2006 不在库但属通用教材，定义可用。应用价值段空泛。
- **lambert-arc**：定义「在四脉冲远距离交会策略中，用于连接不稳定流形和稳定流形端点的轨道弧」——参考文献 Lizy-Destrez 2019 不在库。该定义将 Lambert 弧限定为特定交会策略中的连接弧，过窄；Lambert 弧是满足 Lambert 问题的二体圆锥曲线弧段，通用概念。需修订定义或并入 lambert-problem。
- **lambert-transfer**：定义「空间飞舌（Space Tongue）指用于轨道动力学领域的专业术语和技术表达」——**确认是垃圾内容**。「空间飞舌」不是任何轨道动力学术语，词条内容完全无意义，参考文献包为民 2023《空间在轨服务系统导论》与定义无关。**标空泛待删**。
- **lambert-patching-method**：定义「将 Lambert 转移段与主拉伸方向的逆向积分轨迹拼接，构成低能转移的混合策略」——参考文献彭蕾 2024 不在库。该描述与 Liu 2025（NRHO 逃逸流/接近流）的 Cauchy-Green 张量主拉伸方向一致（low-energy-family.md §4 第 7 条已记），但「Lambert 拼接法」是否为彭蕾 2024 的原文术语无法核实。定义方向合理但出处存疑。

### 3.2 内外侧转移系列（6 条，高度重复）

这六条全部源自徐明 2010 / Xu 2013 的 LL2 穿越分类（low-energy-family.md §2.3 已核对），本质上是同一组概念的反复拆分：

- **inner-and-outer-transfer**（伞概念）：「经由 LL2 点穿越的两类低能转移方式」——准确，是徐明 2010 §2.2 的总述。
- **inner-transfer**：「探测器仅到达 LL2 点但未能真正穿越，本质是经由 LL1 点穿越」——与 inner-and-outer-transfer 的内侧定义完全重复。
- **inner-cislunar-transfer**：「经 LL2 点转移的类型，本质是穿过 LL1 点，比 LL1 直接转移耗费更多燃料」——与 inner-transfer 实质重复，出处 Xu 2013 同一分类。「比 LL1 直接转移耗费更多燃料」是合理推论（内侧不是最小能量穿越）。
- **outer-transfer**：「借助 LL2 点稳定流形与 EL1（或 EL2）Halo 轨道不变流形的拼接来实现 WSB 转移」——与 inner-and-outer-transfer 的外侧定义重复。注意此处写「LL2 点稳定流形」，与 low-energy-family.md §2.2 已记的文献分歧（徐明 2010 §2.2 用「LL2 稳定流形」、§3.2/§4.2 用「LL2 不稳定流形」）相关，Koon 学派自家著作采用稳定流形管内穿越轨道表述。
- **exterior-transfer**：「将日地系统和地月系统的 CR3BP 解拼接，经地月 L2 点 Lyapunov 轨道的渐近轨道进入 DRO」——与 outer-transfer 的概念高度重叠，但侧重 DRO 到达端（参考文献 Tan 2014、Kakoi 2014、Topputo 2013）。exterior/outer 在 Topputo 2013 中是同一词（exterior = 远地点约 4 倍地月距离的外部转移）。
- **inner-earth-escape** / **outer-earth-escape**：「从地球势垒内/外侧方向逃逸的方式」——是内外侧转移的逃逸端描述，与 inner-transfer / outer-transfer 完全冗余，未增加新信息。

**合并建议**：六条全部并入 low-energy-transfer 主词条（或 inner-and-outer-transfer 作为独立词条），仅保留一份 inner/outer 转移的完整描述。earth-escape 两条（inner-earth-escape、outer-earth-escape）是 inner-transfer / outer-transfer 的逃逸端同义重复，标空泛待删或合并。

### 3.3 其他独立词条

- **patched-conic**：定义「将多段圆锥曲线在特定点拼接形成完整转移轨道的经典方法……论文指出该方法在混沌动力学环境中不适用，转而采用基于不变流形的拼接三体方法」——参考文献 Campana 2024 在库，但「不适用」的说法需对照原文。Campana 2024 确实不用 patched conic，但 patched conic 是行星际转移设计的经典方法（Liang 2016 §1：the patched conic method was widely employed in Voyager, Galileo and Apollo）。定义应给出经典方法的正面描述，而非仅说「不适用」。应用价值段是模板套话。**保留独立**，需修订。
- **smart-like-transfer**：定义「以 SMART-1 任务为代表的一类低能量地月转移……雅可比能量略低于 L₁ 值，颈部区域刚好开启，通过在月球附近多次共振跳转逐次改变近共振状态，最终进入月球引力范围。属于地月转移（区别于地月外转移）」——与 Liang 2016 完全相符。Liang 2016 §1 原文：「low-energy cislunar transfers occur only if the Jacobi energy of a spacecraft is barely below that of LL1 but above LL2, which implies that the neck region around LL1 just opens…the low-energy cislunar transfers are also referred to as **SMART-like transfers**」；§3.1：「each time the spacecraft flies by LL1, its trajectory can shift into a new near-resonant state, which is repeated until the spacecraft is able to enter the Moon's sphere of influence」。「属于地月转移（区别于地月外转移）」即 Liang 2016 的 cislunar（内侧）vs translunar（外侧）区分。**保留独立，内容准确**。参考文献应改 Liang 2016（词条写 Liang 2016，但实际可能指不同出处，需核实）。
- **hybrid-gravity-assist-transfer**：定义「组合使用多种引力辅助技术的低能转移方式」泛化但方向合理。参考文献 Shi 2025 在库（OCR 质量差），low-energy-family.md §1.2 记 Shi 2025 综述将低能转移分 LGA、SGA、不变流形、混合四类。「混合」即多种技术组合。**保留独立**，但需核实 Shi 2025 是否给出明确定义。
- **hybrid-multi-conic-method**：定义「一种分段拼接多段圆锥曲线来近似复杂多体轨道的快速轨道生成方法……与伪近月点参数结合……计算效率远高于全数值打靶」——参考文献常笑宽 2026 不在库。多圆锥法（multi-conic method）是 Wilson 1970 年代提出的行星际轨道近似方法，在 `fundamentals/multi-conic-method.md` 已有词条。「hybrid」版本指与伪近月点参数等结合的改良，但出处不在库无法核对。**保留独立，待核实**。注意「应用价值」段内容是导航几何（「可见卫星少且几何分布变化大」），与多圆锥拼接法完全无关，属错误拼接的模板套话。
- **two-maneuver-transfer-design**：定义「LEO 至平动点轨道的低能转移策略，仅用两次脉冲：ΔV_LEO + ΔV_MI」——参考文献 Alessi 2010 在库（*Two-manoeuvres transfers between LEOs and lissajous orbits*），标题即 two-manoeuvre。该文确实研究 LEO→Lissajous 的双脉冲转移。定义与 P&B 2008 的直接转移方法论一致（P&B 2008 也是两次切向脉冲），但 P&B 2008 面向 halo 轨道、Alessi 2010 面向 Lissajous。**保留独立**。
- **two-phase-transfer**：定义「将地月低推力转移分为两个阶段：第一阶段 LEO→GEO 高度（第三体效应弱，经典形状函数）；第二阶段 GEO→L1（双天体引力相当，修正形状函数）」——与 V&A 2014 完全相符（libration-points-family.md 已核对 V&A 2014 用形状法设计 LEO→L1 低推力转移）。**保留独立，内容准确**。
- **continuous-transfer-trajectory**：定义「在位置和速度上均连续的多段拼接转移轨道，通过多重打靶法消除各段之间的不连续性得到」——参考文献 Vaquero & Howell 2014。该概念是数值方法中的连续化处理，非独立轨道类型。**标空泛，可并入 transfer-family 或 删除**。
- **gravity-assist-swingby**：定义「利用天体引力改变航天器轨道和速度的机动方式。在低能转移中，月球借力是实现 WSB 转移的关键环节」——经典概念，定义正确。参考文献 Perozzi 2010 不在库。**保留独立**。
- **unpowered-lunar-gravity-assist-unpowered-lga**：定义「仅依靠月球引力场改变轨道参数的飞越方式，不施加推力」——经典概念。参考文献 Shi 2025。「应用价值」段写「bang-off-bang 推力模式……月面软着陆和轨道维持」与无动力月球引力辅助完全无关，属错误拼接的模板套话。**保留独立，需修订应用价值段**。
- **prograde-in-perigee-and-retrograde-in-perilune**：定义「地心段顺行、月心段逆行的地月转移分类」——参考文献彭坤 2018 不在库，无法核对。该分类方式在自由返回轨道文献中常见（彭祺擘 2016、Liang 2016 均有类似的近地顺行/近月逆行区分），但词条具体内容是否准确对应彭坤 2018 的表述无法验证。「载人月球探测任务的自由返回轨道通常采用此类轨道」合理。**保留独立，出处待核实**。
- **exterior-phase**：定义「低能转移轨道中航天器飞出地月系统引力主导范围的阶段……是低能转移到达低地球轨道的典型特征」——参考文献 Zhang 2021 不在库。该概念是 exterior/outer transfer 的相位描述（low-energy-family.md §1.2：外部转移远地点约 4 倍地月距离），与 exterior-transfer 高度相关。**可并入 exterior-transfer 或 low-energy-transfer**。
- **earth-moon-triangular-libration-point-transfer-network**：定义「以月球为中枢，连接地球、近地轨道与三角平动点区域的转移轨道网络」——与 C&H 2018 相符（libration-points-family.md §3.4：the Moon is the central hub，lunar DRO 为枢纽，双脉冲转移腿）。**保留独立**，已由先例笔记核对。
- **direct-transfer**：定义「从 LEO 出发，仅执行两次机动即可到达 DRO，操作简单，飞行时间 5–9 天，但 ΔV 通常高于动力月球飞越」——与 Welch 2015 完全相符。Welch 2015 §Methodology：直接转移「two deterministic maneuvers: one to depart LEO and one to insert into the DRO」，设计为 5、7、9 天。§Direct Transfer Results：5 天转移平均 ΔV_Earth=3.1082 km/s；PLF（powered lunar flyby）「may be designed to use less fuel」。「对 180 度附近倾入角效率最高」——Welch 2015 Fig. 4–6 显示 τ 在 180° 附近 DRO 插入 ΔV 确有局部最优。**保留独立，内容准确**。
- **direct-transfer-trajectory**：定义「从 NRHO 直接转移至 LLO，两次脉冲：NRHO 出发 + LLO 入轨……只有一个转移弧段，飞行时间短，适合载人」——参考文献 Lu 2021 不在库。该概念是 NRHO→LLO 的专用直接转移，与 direct-transfer（LEO→DRO）场景不同但属同类设计思路（双脉冲、单弧段、短时间）。**保留独立**，但应注意两个 direct-transfer 词条的适用场景区别。
- **interior-transfer**（`orbits/interior-transfer.md`）：定义待查——该词条未在本轮清单中，但与 inner-transfer 存在命名冲突风险（inner vs interior），需消歧。

## 4. 逐条归宿判定

### 入 manifold-connection（8 条）

| 词条 | 判定 | 说明 |
|------|------|------|
| manifold-connection | 保留独立（主词条） | 现有定义空泛需重写；以 P 2010、H&H 2016、Ross 2022 为框架 |
| manifold-insertion | 并入 | P&B 2008 的 ΔV_MI 术语，作设计方法实例 |
| manifold-jump-transfer | 并入 | 流形辅助转移的一种情形 |
| manifold-leg | 并入 | 流形段的描述性用语 |
| heteroclinic-connection（orbits） | 并入 | 与 dynamics 版合并 |
| heteroclinic-connection（dynamics） | 并入 | 行星际推广义项 |
| heteroclinic-orbit-transfer（orbits） | 并入（标空泛） | 与 heteroclinic-connection 重复 |
| heteroclinic-orbit-transfer（dynamics） | 并入 | 内容有误需修订后并 |

### 入 transfer-family（6 条）

| 词条 | 判定 | 说明 |
|------|------|------|
| transfer-family | 保留独立（主词条） | 需补延拓方法的通用框架 |
| transfer-catalog | 并入 | H&H 2016 / Folta 2015 的 catalog 概念 |
| transfer-solution-set | 并入 | 网格搜索解集，transfer-family 的实例 |
| orbit-family-transfer | 并入 | 族间转移，transfer-family 的子集 |
| multi-revolution-transfer-structure | 并入或保留独立 | Du 2023 多圈结构；小推力构型有独立含义 |
| transfer-window | 并入或保留独立 | 徐明 2010 的 (β,τ) 窗口；发射窗口有独立工程含义 |

### 保留独立（17 条）

| 词条 | 判定 | 说明 |
|------|------|------|
| patched-conic | 保留独立，需修订 | 经典方法正面描述；Campana 2024 语境需说清 |
| lambert-problem | 保留独立 | 经典定义，可用 |
| lambert-arc | 保留独立，需修订 | 定义过窄，应恢复通用含义 |
| lambert-patching-method | 保留独立，出处待核实 | 彭蕾 2024 不在库 |
| smart-like-transfer | 保留独立，内容准确 | Liang 2016 SMART-like |
| two-maneuver-transfer-design | 保留独立 | Alessi 2010 |
| two-phase-transfer | 保留独立，内容准确 | V&A 2014 |
| hybrid-gravity-assist-transfer | 保留独立，需核实 | Shi 2025 综述 |
| hybrid-multi-conic-method | 保留独立，出处待核实 | 常笑宽 2026 不在库；应用价值段错误 |
| gravity-assist-swingby | 保留独立 | 经典概念 |
| unpowered-lunar-gravity-assist-unpowered-lga | 保留独立，需修订 | 应用价值段与定义无关 |
| prograde-in-perigee-and-retrograde-in-perilune | 保留独立，出处待核实 | 彭坤 2018 不在库 |
| direct-transfer | 保留独立，内容准确 | Welch 2015，LEO→DRO |
| direct-transfer-trajectory | 保留独立 | NRHO→LLO，Lu 2021 |
| earth-moon-triangular-libration-point-transfer-network | 保留独立，已核对 | C&H 2018 |
| orbit-chain | 保留独立 | P 2010 chaining |
| orbit-chaining | 保留独立或并入 orbit-chain | Kayama 2022 初始猜测技术 |

### 并入 low-energy-transfer（8 条）

| 词条 | 判定 | 说明 |
|------|------|------|
| inner-and-outer-transfer | 并入 | 徐明 2010 LL2 穿越总述 |
| inner-transfer | 并入（与 inner-and-outer-transfer 重复） | 徐明 2010 |
| inner-cislunar-transfer | 并入（与 inner-transfer 重复） | Xu 2013 |
| outer-transfer | 并入（与 inner-and-outer-transfer 重复） | 徐明 2010 |
| exterior-transfer | 并入（与 outer-transfer 重叠） | Topputo 2013 |
| exterior-phase | 并入 | exterior transfer 的相位描述 |
| inner-earth-escape | 标空泛待删 | inner-transfer 的逃逸端同义重复 |
| outer-earth-escape | 标空泛待删 | outer-transfer 的逃逸端同义重复 |

### 标空泛待删（2 条）

| 词条 | 判定 | 说明 |
|------|------|------|
| lambert-transfer | 标空泛待删 | 「空间飞舌（Space Tongue）」垃圾内容 |
| continuous-transfer-trajectory | 标空泛待删 | 多重打靶连续化处理的描述，非独立轨道类型 |

## 5. 主词条建议大纲

### 5.1 manifold-connection（流形连接）

1. **定义**：平动点周期轨道的双曲性质产生稳定/不稳定不变流形；一条轨道的不稳定流形与另一条的稳定流形在相空间中相交即构成转移通道（P 2010 §2.4；H&H 2016 §1；Ross 2022 §5）。
2. **异宿/同宿连接**：maneuver-free 的特殊情形；Koon 2000 *Chaos* 经典定义（t→−∞ 趋近 P₁、t→+∞ 趋近 P₂）；能量匹配约束（相同 Jacobi 常数）；McGehee 存在性证明（P 2010 §2.4）。Ren 2011 行星际推广（太阳系仅木-土、天-海满足空间重叠条件）。
3. **构造方法**：Poincaré 截面法识别流形交点（P 2010 §2.6、H&H 2016）；多重打靶微分修正连续化（P 2010 §2.5）。
4. **流形辅助转移**：流形不完全相交时施加小 ΔV 弧（H&H 2016 low-ΔV transfers；manifold-jump-transfer 并入）。
5. **转移弧段构成**：Bridge segment + Manifold segment（P&B 2008）；ΔV_MI = manifold insertion（manifold-insertion 并入）；manifold-leg（Cheng 2017 流形段）。
6. **链式结构**：orbit-chain（P 2010 chaining：多条简单周期轨道串联为 complex chain，复杂周期轨道为连续族成员）；orbit-chaining（Kayama 2022：halo 族内中间轨道为初始猜测，Jacobi 常数连续变化）。
7. **术语变体表**：manifold-insertion、manifold-jump-transfer、manifold-leg、heteroclinic-connection、heteroclinic-orbit-transfer、orbit-chain、orbit-chaining。

### 5.2 transfer-family（转移族）

1. **定义**：具有相似动力学特征的一组转移轨道，通过参数延拓系统产生（数值延拓改变 x₀、τ、Δt_m、Jacobi 常数、停泊轨道高度等参数）。
2. **转移目录**：H&H 2016 的 catalog（Poincaré 截面搜索 L1/L2 vertical/halo/axial 族间转移，含异宿/同宿 + 小 ΔV）；Folta 2015 的交互式动态目录（轨道族特征参数 + 站保代价 + LEO 转移代价）。
3. **解集与网格搜索**：参数空间网格搜索 → 微分修正 → 解集分布图 → 族识别（transfer-solution-set、Wang 2021 DRO 网格搜索）。
4. **转移窗口**：徐明 2010 (β,τ) 窗口（transfer-window 并入）；LL1 穿越 Δβ=89°、LL2 外侧 Δβ≈3°、LL2-Halo 窗口集小。
5. **族间转移**：orbit-family-transfer 并入；不同族间（halo↔DRO、halo↔Lyapunov）的转移设计。
6. **小推力构型**：multi-revolution-transferstructure（Du 2023：多圈绕平动点旋转结构，圈数影响推力需求与飞行时间）。
7. **术语变体表**：transfer-catalog、transfer-solution-set、transfer-window、orbit-family-transfer、multi-revolution-transfer-structure、continuous-transfer-trajectory（标空泛）。

### 5.3 术语变体表（内外侧转移系列）

| 变体 | 所指 | 出处 |
|------|------|------|
| inner-and-outer-transfer / inner-transfer / inner-cislunar-transfer / inner-earth-escape | LL2 内侧转移：探测器到达 LL2 未真正穿越，本质是 LL1 穿越 | 徐明 2010 §2.2；Xu 2013 |
| outer-transfer / exterior-transfer / exterior-phase / outer-earth-escape | LL2 外侧转移：真正穿越 LL2，流形拼接实现 WSB 转移 | 徐明 2010 §2.2；Topputo 2013；Xu 2013 |
| SMART-like transfer / low-energy cislunar transfer | 雅可比能量略低于 C₁、颈部刚开启的低能地月转移（内侧） | Liang 2016 |

合并障碍评估：manifold-connection 主词条的概念层次清楚（流形连接 → 异宿/同宿 → 流形辅助转移 → 链式结构），无矛盾定义需裁决。transfer-family 主词条汇集了目录/解集/窗口/族间转移等通用概念，层次也清楚。内外侧转移系列的六条高度冗余是主要问题，合并后仅保留一份完整描述即可。lambert-transfer 是唯一确认的垃圾内容，直接删除。其余「出处待核实」的词条（lambert-patching-method、hybrid-multi-conic-method、prograde-in-perigee-and-retrograde-in-perilune）在原文不在库时不应断言定义是否准确。
