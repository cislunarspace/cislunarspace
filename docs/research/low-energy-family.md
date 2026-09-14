# 低能转移/弱稳定边界/弹道捕获一族词条合并前调研笔记

调研日期：2026-08-07。目的：核对「低能转移/弱稳定边界（WSB）/弹道捕获」一族 36 个现有词条的定义是否与原始论文相符，为合并成 3 个主词条（low-energy-transfer、weak-stability-boundary-transfer-trajectory、ballistic-capture）做准备。

调研范围：资料库中 22 篇论文的 md 正文（`hybrid_auto/<目录名>.md`），均完好可读。先例笔记（dro-family.md、halo-family.md、lyapunov-family.md、resonant-family.md）中已核对的徐明 2010、Wang 2025-WSB、Fantino 2010 结论直接引用，不再重复论证。

论文简称：

- B&M 1993 = Belbruno & Miller 1993, *Sun-perturbed Earth-to-Moon transfers with ballistic capture*
- Belbruno 2010 = Belbruno, Gidea & Topputo 2010, *Weak stability boundary and invariant manifolds*
- Conley 1968 = Conley, *Low energy transit orbits in the restricted three-body problem*
- Fantino 2010 = Fantino, Gómez, Masdemont & Ren 2010, *A note on libration point orbits, temporary capture and low-energy transfers*
- 徐明 2010 = 徐明《地月低能转移的发生条件及轨迹构造》（力学学报）
- Xu 2013 = Xu 等 2013, *On the construction of low-energy cislunar and trans-lunar transfers based on the libration points*（徐明工作的英文扩展版）
- Topputo 2013 = Topputo, *On optimal two-impulse Earth–Moon transfers in a four-body model*
- P&A 2014 = Parker & Anderson 2014, *Low-Energy Lunar Trajectory Design*（专著）
- A&P 2012 / A&P 2013 = Anderson & Parker 2012（月面弹道转移综述）/ 2013（与不变流形对照）
- 郑越 2023 = 郑越和赵敏《基于大幅值 Lyapunov 轨道稳定流形的地月转移方法》
- 李宸硕 2024 = 李宸硕等《基于弱稳定边界理论的低能地月转移轨道设计》
- Sousa-Silva 2018 = Sousa-Silva, Terra & Ceriotti 2018, *Fast Earth–Moon transfers with ballistic capture*
- Chao 2022 = Chao 等 2022, *Exploring more solutions for low-energy transfers to lunar distant retrograde orbits*
- Wang 2025-E = Wang 等 2025, *Mechanism analysis of the DRO low-energy transfer problem: An energy perspective*
- Wang 2025-WSB = Wang 等 2025, *Mechanism and characteristics analysis of weak stability boundary transfers to the 2:1 DRO*
- Pergola 2010 = Pergola 等 2010, *Three-body invariant manifold transition with electric propulsion*
- 乔琛远 2024 = 乔琛远和杨乐平《地月 L1 点低能转移轨道设计与优化》
- Kluever 1995 = Kluever & Pierson 1995, *Optimal low-thrust three-dimensional Earth–Moon trajectories*
- Folta 2012 / Folta 2014 = Folta 等 2012（ARTEMIS 转移设计）/ 2014（平动点轨道站保）
- Ross 2022 = Ross 等 2022, *Dynamical Systems, the Three-Body Problem, and Space Mission Design*（Koon–Lo–Marsden–Ross 学派专著扩展版）
- 另有 Alessi 2011、Ren 2012、Campana 2024、Grossi 2024、Shi 2025、Howell & Kakoi 2006、Liu 2025 按需引用。

词条引用但**不在库**的文献：Lo & Ross 1998（low-energy-transfer 词条）、Belbruno 2004 专著 *Capture Dynamics and Chaotic Motions in Celestial Mechanics*（ballistic-capture 词条；其要点被 Belbruno 2010、Topputo 2013 转引覆盖）、Campagnola 等 2014（ballistic-capture 词条）、Krish 1991 硕士论文（Belbruno-Miller 轨迹一词的出处，B&M 1993 参考文献[12]）。这些无法核对原文，下文明标。

一个文献归属问题要先说清：库内有三篇 Wang 等 2025。核对发现 **non-ballistic-capture 出自 Wang 2025-WSB（§6，Fig. 26 语境），不在 Wang 2025-E**（后者全文无 non-ballistic 一词）；而 wsb-gateway 对应的 LETG 概念确在 Wang 2025-E（§6.2）。这与 dro-family.md 的 phase-free-dro、lyapunov-family.md 的 lyapunov-like-orbital-segments 是同款姊妹篇错配。

## 1. 低能转移总述

### 1.1 「低能」的判据

文献中并存三类判据，词条合并时应并列给出：

- **代价判据（相对 Hohmann 省能）**。徐明 2010 引言：「与 Hohmann 转移相比，基于三体模型得到的弹道捕获轨道具有能量消耗较低、转移时间长的特点，又称为低能转移轨道」；郑越 2023 §0 表述相同（「有效降低了转移过程中所需的能耗，这种轨道通常被称为低能转移轨道」）。这是最常用的操作性定义，量化见 §1.3。
- **几何/能量判据（瞬时偏心率小于 1）**。徐明 2010 §1：「对于能量稍大于 LL1 或 LL2 点的能量值的探测器，可能在环绕地球或月球多圈（瞬时偏心率小于 1）后才发生逃逸。而 Hohmann 转移在到达月球附近后，具有的速度将为双曲线速度（能量远大于 LL2 点的能量值，且瞬时偏心率必大于 1），探测器绝不可能出现弹道捕获的现象」；§2.1：穿越前后「偏心率小于 1，表明该轨迹为低能转移」。Xu 2013 同一判据：the low-energy trajectories are elliptical since their osculating eccentricities are less than 1 during the flight。即「低能」等价于转移全程相对地球/月球保持椭圆（二体束缚）状态。
- **到达端能量判据（相对月球二体能量由正转负）**。Topputo 2013 定义 1：相对月球的 Kepler 能量 H₂≤0 即发生弹道捕获；P&A 2014（§1.2）：低能转移中「在某些情形，航天器接近月球时二体能量甚至为负，而未施加任何机动」。B&M 1993 的捕获轨道定义同义（捕获时刻起 H_k<0、近月点无 V_∞）。

另有代价下限作参照：Sweetser 1991 估计 CRTBP 中 167 km 地球圆轨道→100 km 月球圆轨道的全局最小 ΔV 为 3.721 km/s（A&P 2012 §III 转引；Grossi 2024 引为 3726 m/s）；计入太阳摄动的低能转移可以低于这个 CRTBP 理论下限（A&P 2012）。

### 1.2 三条技术路线的关系与边界

「低能转移」不是单一技术，而是三条相互咬合的路线：

1. **不变流形路线（地月系内）**。Conley 1968 建立平动点颈部（neck）内穿越轨道/非穿越轨道/渐近轨道的分类，穿越轨道可用来构造低能地月转移（徐明 2010 引言转引 Conley 的四类分法：周期轨道、稳定/不稳定流形、穿越轨道、非穿越轨道，流形分隔穿越与非穿越）。Koon 等 2001 把日地、地月两个 CR3BP 的流形管在庞加莱截面内拼接（位置与速度均连续的轨迹即 WSB 转移，徐明 2010 引言说这「解决了困扰天体力学界十余年的理论问题」）。纯地月系内的内转移不需要太阳摄动：Topputo 2013（§1）明确指出内部转移「大部分轨迹在月球轨道以内……太阳摄动在此不起关键作用，可在地月限制性三体问题中定义」，其能量基准是 LL1 点能量（Sweetser 最小代价估计由此而来）。
2. **WSB/外部路线**。B&M 1993：月借力飞出到地球 WSB（约 4 倍地月距离，1.5×10⁶ km），借该区域的动力学敏感性以近零机动衔接月球 WSB 上的弹道捕获轨道。郑越 2023 §0 称之为「外俘获型」并明确「WSB 理论对应于外俘获型低能转移轨道……从地月系统外部进入系统内部再被月球捕获，需要借助太阳的引力辅助」。
3. **弹道捕获是到达端机制，不是独立路线**。WSB 转移以弹道捕获收尾（B&M 1993）；流形路线同样以弹道捕获收尾，Ross 2022 §5.4 说：「瞄准地月系 L2 Lyapunov 轨道稳定流形管内部的区域，即可构造被月球弹道捕获的轨道」。徐明 2010 则把弹道捕获的发生条件当作低能转移的前提来研究（§1 的 Poincaré 映射分析）。

**统一表述**：Belbruno 2010 在平面 CR3BP 中证明，一定能量范围内，次主天体 WSB 中的点就是 L1/L2 Lyapunov 轨道稳定流形上径向速度为零、相对次主天体开普勒能量为负的点（与 García & Gómez 2007 的数值结果双向包含）；几何依据是 Lyapunov 轨道不变流形作为能量流形分界线（separatrix）的性质。同时 WSB 的算法定义不依赖流形的存在，可用于流形无定义的模型（椭圆三体、双圆四体）：WSB 是更宽的概念，流形是它在 CR3BP 一定能量区间内的实现。

**分类法对照**（各文献口径）：

- Topputo 2013（§1）按轨迹几何分 exterior/interior：外部转移远地点约 4 倍地月距离、远地点须位于日地连线（x 轴取反日方向）第二或第四象限（Belló-Mora 2000、Circi & Teofilatto 2001/2006、Ivashkin 2002）；内部转移大部分在月球轨道以内、可在地月三体模型内定义、借共振可缩短时间（Yagasaki 2004）。
- 郑越 2023（§0）按所用平动点分内/外俘获型：L1 点流形=内俘获型（始终在地月系内、时间较短）；L2 点流形=外俘获型（=WSB，需太阳引力辅助、时间长）。与 Topputo 的几何分类基本对应：外俘获型≈exterior≈WSB 转移，内俘获型≈interior≈LL1 穿越类。
- 徐明 2010 按穿越对象分：LL1 点穿越（最小能量转移）、LL1-Halo 穿越（(M,N)-圈穿越轨道，适于小推力）、LL2 点穿越（内/外侧，外侧即 WSB）、LL2-Halo 穿越（WSB 逃逸与捕获窗口）；实现方式分小推力、脉冲、WSB 三类（§5）。
- P&A 2014（§1.2 表）按任务剖面分：直接（3–6 天）、直接-staging（2–10 周）、直到地月 L1（1–5 周）、小推力（数月）、低能（2.5–4 个月，例：Hiten、GRAIL、ARTEMIS）。
- Shi 2025（综述，OCR 质量差）：直接 vs 低能两分，低能再分 LGA、SGA、不变流形、混合四类。

### 1.3 省能与耗时量级（供主词条数字核对）

- B&M 1993（Table 3）：WSB 转移比 Hohmann 省 18% ΔV（插入 100 km 月球圆轨道的总 ΔV 0.695 vs 0.848 km/s，含 0.648 km/s 圆化机动，不含地球入轨）；比双抛物线省 14%、比双椭圆省 37%；飞行时间 3–5 个月。
- 徐明 2010（§3.2 转引 Belbruno 算例）：6545 km 停泊轨道出发，140 天到达 1840 km 环月轨道，WSB 双脉冲 ΔV=3.838 km/s，比 Hohmann 省约 150 m/s。
- Sousa-Silva 2018（§5）：同端点 Hohmann 3.959 km/s、双抛物线 3.946 km/s；弹道式月球转移比 Hohmann 省约 80 m/s 但时间长得多；捕获轨迹圆化另需约 600 m/s。
- 郑越 2023（§3）：LEO 167 km→LLO 100 km，一条稳定流形直接连接，总 Δv=3920.7 m/s、62 天（Hohmann 3994.8 m/s、5.1 天；谭明虎方法 3890.2 m/s、95.8 天）：md 文本中速度单位被 OCR 误作 km/s，应为 m/s（同 lyapunov-family.md 已记）。
- Grossi 2024：最高效的外部低能转移（带出发段月借力）低于 3800 m/s，逼近 Sweetser 下限 3726 m/s，转移时间超 80 天。
- Campana 2024：双脉冲外部转移，TOF 162.05 天，优化后最优 3775 m/s（含一次月借力）。
- Topputo 2013：双脉冲全弹道解的全局最优 82.6 天、3769.3 m/s。
- 乔琛远 2024（EML1 Halo→GEO 方向）：三脉冲能量最优 1.5522 km/s/40.13 天，能量-时间最优 1.6815 km/s/16.98 天；四脉冲 1.4695 km/s/47.63 天。

## 2. 弱稳定边界

### 2.1 定义与位置

- **启发式定义（B&M 1993 §II）**：绕中心天体的「稳定运动」在足够大的径向距离处崩溃：数值上存在明确距离 r\*，r<r\* 时质点循环绕中心天体（满足回返条件），r>r\* 时被其他天体摄动拉走；r\* 随方向角 θ、φ、速度方向角 α、日地月相位角 β、偏心率 e 变化，r\* 的集合即 WSB。WSB 可看作「影响球」概念的精确化；它既是逃逸可发生的位置，也是捕获可发生的位置，捕获一般是暂时的。月球 WSB（e=0 圆轨道情形）距月约 0.08–0.39 倍地月距离，随方向剧烈变化；e→1 时 r\*→0（B&M 1993 Table 1/2）。
- **严格算法定义（Belbruno 2010 §3，定义 3.1）**：平面 CR3BP 中，沿次主天体径向线段以密切椭圆近拱点出发的轨迹，若绕次主天体转满 n 圈且不绕主天体、回到径向线时开普勒能量为负，称为 n-稳定；n-稳定与 n-不稳定之间的跃变点构成指标 n 的 WSB。WSB 类似 Cantor 集，不是不变对象、不是流形（Remark 3.2）。
- **位置**：地球 WSB（WSB(E)）约 4 倍地月距离、1.5×10⁶ km（B&M 1993 §III）；Wang 2025-E（§3，引其文献[20,40]）：太阳引力混沌 WSB 区约在 3–5 倍地月距离范围内，且并非严格限于该范围（§5.2）。
- **四象限规则**：外部转移仅当远地点位于地心系（x 轴反日方向）第二或第四象限时成立（Topputo 2013 §1 汇总的 Circi & Teofilatto 等结论）；Wang 2025-E 在 Sun–B1 旋转系给出同向结论（远地点在二、四象限时雅可比能量被太阳摄动抬高）。

### 2.2 与不变流形的关系

Belbruno 2010 的统一表述见 §1.2。补充三个层的表述差异：

- **流形界定 WSB**：Fantino 2010（§3）：同能量 L1/L2 平面 Lyapunov 轨道稳定流形上「矢径与速度正交」的点集正好围住 WSB 不稳定点集；徐明 2010 §1：「目前无法判断平动点轨道存在的区域是否等价于弱稳定边界；但 Koon 等的结果显示，该区域一定包含于 WSB」。
- **WSB 转移的流形拼接表述存在文献分歧**。徐明 2010 §2.2 称外侧转移「借助 LL2 点稳定流形与 EL1-（或 EL2-）Halo 轨道不变流形的拼接」，而 §3.2/§4.2 又称「EL1-（或 EL2-）Lyapunov 轨道不变流形与 LL2-Lyapunov 轨道不稳定流形的拼接」：同一篇文章内「LL2 稳定流形」与「LL2 不稳定流形」两说并存。Xu 2013 沿用后者（stable manifolds near EL1 (or EL2) point and the unstable manifolds near the trans-lunar LL2 point）。但 Koon 学派自家著作（Ross 2022 §5.4）明确：月球弹道捕获段瞄准的是地月 L2 Lyapunov 轨道**稳定流形管内部**（管内为穿越轨道）；Howell & Kakoi 2006、Fantino 2010（§2）、Sousa-Silva 2018（§2.3）、Topputo 2013（§1）、Wang 2025-WSB（§2）的异系统/外部转移全部使用「日地侧流形 + 地月 L2 **稳定**流形（管内穿越轨道）」的配对。合并词条时建议统一表述为「地月 L2 侧稳定流形管内的穿越轨道实现月球捕获」，并注明部分中文文献的「LL2 不稳定流形」提法与此的分歧。
- **完整路径**（Fantino 2010 Fig.1、Sousa-Silva 2018 §2.3）：航天器先沿日地 L1/L2 Lyapunov 轨道稳定流形支离开地球、接近该轨道，再沿同一轨道的不稳定流形返回地月系区域，最后进入地月 L2 Lyapunov 稳定流形管内的穿越轨道被月球捕获。

### 2.3 内/外侧转移与穿越窗口（徐明 2010、Xu 2013）

- LL1 穿越：SBCM 模型下平动点渐近结构被破坏（到达/离开时间由无穷变有限、运动方向由双向变单向）；可实现地月低能转移的窗口为 β∈[77°,109°]∪[285°,342°]（总宽度 Δβ=89°）；LL1 点能量最低，故 LL1 穿越即最小能量穿越（§2.1）。
- LL2 穿越分内侧/外侧（§2.2）：内侧转移本质是 LL1 穿越（探测器仅到达 LL2、未真正穿越），不是最小能量；外侧转移即 WSB 转移，仅 β∈[21.8°,23.3°]∪[201.5°,203°]（Δβ≈3°）可构造，且仅利用 LL2 点即可得到 WSB 最小能量转移。
- Xu 2013（§3.2）把外侧转移命名为 outer（trans-lunar）WSB trajectory：「在惯性系中与 Belbruno 理论几何形状相同」，由 EL1/EL2 附近流形与 LL2 附近流形拼接构成；并指出经 LL2-Halo 穿越可把窗口从一维 β 扩展为二维 (β,τ)（徐明 2010 §3.2 称窗口「上升为三维」：β、τ 之外原文显式参数只有这两个，第三维的说法见 halo-family.md §5 已记的辨析）。
- WSB 转移到达月球经弹道捕获后运行于大椭圆轨道，可用小推力主动耗能；但拼接的 EL1/EL2-Halo 轨道能量大，逃逸地球前不可能运行于大椭圆，故小推力渐近变轨不适用于 WSB 转移（徐明 2010 §2.2）。

### 2.4 wsb-like（Chao 2022）

Chao 2022（§1、§4.3）明确：「WSB-like 弹道转移特指利用太阳引力借力的 DRO 低能转移，以区别于（基于）月球引力捕获的 WSB」；相对经典 WSB 弧（通常指月球弹道捕获轨迹）的新特征：(1) 可绕地球一圈以上且 TOF 不超过 100 天；(2) 中途可有动力月借力（PLF），或由 PLF 连接两段 WSB-like 弧；(3) 存在退化情形：弧段不超出月球轨道之外。WSB-like 弧上地月系雅可比常数随时间增大（太阳摄动起主导）。语境：平面双圆四体模型下 LFO→DRO 转移，全局最优 ΔV=104.4 m/s。

### 2.5 wsb-gateway / LETG（Wang 2025-E）

Wang 2025-E（§6.1–6.2）：以 5 倍月球引力影响球半径（≈0.8598 无量纲，约 0.86 倍地月距离）为半径作「DRO 捕获投影面」，记录反向积分的 DRO 捕获轨道与投影面的**最后交点**；正向 WSB 转移轨道与反向捕获轨道在投影面上做机械能匹配，匹配子集（Σ₁∩U₁，机械能范围 [−0.3652, −0.0416]）与投影面的交点集称为**低能转移入口（low-energy transfer gateway, LETG）**。LETG 内轨道最小机械能 −0.3652 仍高于 2:1 DRO 的最大机械能（σ=0.5 处），故进入 DRO 前须借地月引力主动降能（首个月球引力辅助或在一象限长时间飞行两种机制）。以 LETG 为拼接界面的双脉冲 DRO 转移收敛率达 73.6%。注意：词条名 wsb-gateway 是本站命名，论文术语是 LETG；且「5 倍月距」系误植（详见 §4 第 18 条）。

## 3. 弹道捕获

### 3.1 定义与能量判据

- B&M 1993（§II）：t=0 时相对某天体的开普勒能量 H_k=0、其后某时刻 H_k<0，即为被该天体捕获；捕获轨道在近月点无 V_∞（消除双曲超速），故稳定化捕获所需能量大幅下降；「捕获一般是暂时的」（数值观察）。
- Topputo 2013（§2.3，定义 1）：相对次主天体的 Kepler 能量 H₂≤0 即弹道捕获；[t₁,t₂] 内 H₂≤0 而之外为正为暂时弹道捕获；某有限时刻 t₃ 之后一直 H₂≤0 为永久捕获。**「在地月转移的框架下，只能发生暂时弹道捕获；要使捕获永久，必须有耗散力作用」**（引 Winter 等 2003、De Melo & Winter 2006）。
- 操作定义（Ross 2022 §5.4）：「被月球弹道捕获」指在自然动力学下进入月球 Hill 半径（约 60,000 km）以内并绕月至少一圈；此时一个小 ΔV 即可实现稳定捕获（闭合 L1/L2 颈部）。
- P&A 2014（§1.6.1 转引 Yamakawa）：「当航天器的二体能量变负时即发生弹道捕获」。
- 暂时捕获的流形机理（Fantino 2010 §5）：LPO 不稳定流形支配对次主天体的暂时捕获，必要条件是相对次主天体的开普勒能量为负；母轨道越小（J 越大），捕获圈数越多、碰撞越少（详见 lyapunov-family.md §2）。

### 3.2 捕获弧与逃逸弧（Pergola 2010）

Pergola 2010 在**天王星卫星系统**（Oberon→Titania→Umbriel→Ariel→Miranda 巡游，非地月系）中：捕获弧用各卫星 L2 点的稳定流形构造（「这是把航天器从外侧区域引向卫星的弹道轨迹」）；在流形上停留足够久后绕卫星做多圈闭合轨道，随后自然过渡到同一卫星 L1 点的不稳定流形上离开：该过渡是 L2 稳定流形与 L1 不稳定流形的异宿连接，为下一段电推进转移提供起始条件。绕月（卫星）圈数与捕获时长强烈依赖于计算流形所用的扰动参数取值；本巡游中在各卫星附近停留数天到近一个月。

### 3.3 Conley 1968 的穿越/捕获分类

Conley 1968 有两套分类，不宜混排：(a) 定义 1 针对平衡区 R 内的穿越行为：渐近轨道（α₁α₂=0，趋向周期轨道）、穿越轨道（α₁α₂<0，穿过平衡区）、非穿越轨道（α₁α₂>0）；(b) 相对颈部区域 L 的长期行为分类：ω-/α- 振荡轨道（t→±∞ 时无穷多次穿越 L）、ω-/α- 渐近轨道（趋向不稳定周期轨道）、ω-/α- 捕获轨道（「有时穿越 L，但在某有限时刻之后（之前）不再穿越」；对位于两天体之间的平动点，「应理解为最终被其中一个天体俘获的轨道」）。定理 2：「在任何穿越 L 的渐近轨道附近存在捕获轨道」，Conley 自注：此类穿越渐近轨道当时尚未被证实存在。

### 3.4 任务实践

- **Hiten（B&M 1993 §III）**：1991-04-24 进入 Φ_I 弧，1991-10-02 到达月球，中途机动实际压到零；首个 WSB/弹道捕获转移。Ross 2022 §1 另有历史叙述（1990 年 6 月 Belbruno 与 Miller 救援方案）。
- **GRAIL（P&A 2014 §1.6.3）**：2011-09-10 发射，双星先后于 2011-12-31、2012-01-01 到月：首个以低能转移为主任务段、并直接从低能转移实施月球轨道插入的任务；Topputo 2013 的 o/p 族解与 GRAIL 轨迹相符。
- **ARTEMIS（Folta 2012、Folta 2014）**：P1/P2 经一系列近地点升轨机动（ORM）、月球借力（P1 为间隔 13 天的双借力）、深空机动（DSM）、月球瞄准机动（LTM）与修正机动（TCM），进入日地弱稳定区（最远约 150 万 km）后折返，各经一次 Lissajous 入轨机动（LOI）进入地月 L2/L1 Lissajous 轨道（2010-08-25、2010-10-22）。Folta 2014 称所用为 ballistic Sun-Earth to Earth-Moon transfers。**注意 ARTEMIS 转移并非无机动弹道**：它是「近弹道」（P&A 2014 对低能转移的定义：nearly ballistic，仅需统计修正与小确定机动）。
- **SMART-1（Belbruno 2010 §1）**：2004 年应用了 WSB；其轨道为小推力+WSB 概念的组合（徐明 2010 §4.1 以其为对照算例）。

### 3.5 月面捕获、捕获窗口与月面弹道谱系

- **月面捕获能量（徐明 2010 §1.2）**：把探测器永久捕获到近月距 r_p=1738 km（即擦月面）环月轨道所需 ΔV：二体模型 695.7 m/s、Hill 模型 656.8 m/s、CR3BP 649.2 m/s、SBCM 模型最小 642.9 m/s（β=0°）/最大 646.0 m/s（β=265.8°）：太阳摄动使月面捕获能量低于三体模型值。§1 同时指出：弹道捕获蜕变为永久捕获的代价显然小于 Hohmann 变轨。
- **捕获/逃逸窗口（徐明 2010 §3.2）**：经 LL2-Halo 穿越的 WSB 转移窗口由太阳相位角 β 与 Halo 轨道相位 τ 共同决定，分地球逃逸窗口与月球捕获窗口两张图给出；「由于流形拼接的要求苛刻，可用来构造 WSB 转移的 (τ,β) 集合很少」。
- **月面弹道谱系（A&P 2012）**：以碰撞轨道为基准，在 CRTBP、地月星历、日地月星历三个模型中系统计算地到月面的弹道轨迹：TOF 从 C=2.2 的 3.4 天（Apollo 式直接转移）到 C=3.0 的 101 天；太阳摄动使直到 C≈3.16 仍存在源自地球的轨迹（无太阳时 C=2.8 以上即无）；这些轨迹在日地旋转系中呈「驶向日地 L1、徘徊、折返落向地球/月球」的 WSB 特征几何；月面大部分区域物理可达；L1/L2 Lyapunov 流形恰好擦过月面的雅可比常数为 3.1826（2298 m/s）与 3.1612（2330 m/s）。A&P 2013 把分析推广到不同航迹角并与不稳定轨道流形对照。
- **螺旋捕获（Kluever 1995）**：小推力 LEO→LLO 最优转移采用「推力-滑行-推力」三段式：地球逃逸螺旋（12 圈、2.24 天）→ 跨月滑行段（抬出地月面）→ **月捕获螺旋**（连续小推力，10.9 小时，完成剩余 0.8° 倾角变换进入 90° 极地 LLO）。它是小推力捕获段，**不是弹道捕获**；并入 ballistic-capture 主词条时只能作「非弹道对照」。

## 4. 现有词条定义勘误（36 条全过）

### 入 low-energy-transfer（12 条）

1. **low-energy-transfer（拟主词条）**：骨架可用。两点修正：(a) 定义句「低能量转移轨道是利用三体系统动力学特性设计的低能量转移轨道」同义反复，宜按 §1.1–1.2 重写（代价/偏心率/到达端能量三判据 + 流形与 WSB 两路线 + 弹道捕获到达机制）；(b)「Genesis、GRAIL 等任务成功应用」中 Genesis 是日地 L1 任务，不是地月转移，宜改为「Genesis（日地系）与 Hiten、GRAIL、ARTEMIS（地月系）」。参考文献 Lo & Ross 1998 不在库，未核对；Koon 等专著与 B&M 1993 可用。
2. **low-energy-transfer-trajectory**：与徐明 2010 一致（瞬时偏心率<1 判据 §1/§2.1；LL1 最小能量穿越 §2.1；LL2 穿越即 WSB §2.2；Halo 穿越 (M,N)-圈 §3）。一处应补：「经由 LL2 点穿越的弱稳定边界转移」严格说是**外侧**转移，内侧转移本质是 LL1 穿越（徐明 §2.2）。
3. **low-energy-ballistic-transfer**：泛化定义，与 A&P 2013 主题（低能月面转移轨迹与不变流形对照）相符，但该文并没有给出这样的术语定义；「低能弹道转移」作为术语更直接的出处是 Parker 的学位论文与 P&A 2014（low-energy ballistic lunar transfers）。建议改写为综述性表述并换引。
4. **low-energy-earth-moon-transfer**：两处问题。(a)「相比霍曼转移可节省约 1 km/s」无出处：所引 Ren 2012 是小推力平动点轨道间转移（与地月 Hohmann 比较无关），Grossi 2024 引 Sweetser 下限 3726 m/s、高效外部转移 <3800 m/s；Sousa-Silva 2018 给 Hohmann 3959 m/s：省能量级为约 80–270 m/s（对入月轨总 ΔV），徐明 2010 转引算例省约 150 m/s，B&M 1993 为相对 Hohmann 省 18%。「1 km/s」应改。(b)「日心-地月质心系与地月系两个耦合三体系统」对应 Ren 2012/Fantino 2010 的耦合 CR3BP（SB+EM）模型，表述可用；「转移代价与雅可比常数存在明确函数关系」对应 Fantino 2010/Ren 2012 的 ΔV(J_SE, J_EM) 彩图，可用但建议写清是「两系统母轨道雅可比常数」。
5. **low-energy-exterior-transfer**：与 Campana 2024 一致（外部转移、太阳摄动、WSB 特性、TOF 162 天：「通常超过 160 天」有出处）。「经过 L2 点附近」含糊：外部转移是远地点约 4 倍地月距离、绕向日地 L1/L2 方向（Topputo 2013 §1；B&M 1993），宜改写为「经地月 L2 侧离开地月系、远地点达约 4 倍地月距离」。
6. **low-energy-lunar-transfer**：与 P&A 2014 一致（2.5–4 个月、利用太阳引力）。可补 P&A 的完整定义（nearly ballistic，仅需统计修正与小确定机动；近月点升高至月球轨道高度、以近切向轨迹遇月）与五次飞行任务记录（1991–2011：Hiten、ARTEMIS×2、GRAIL×2）。
7. **low-energy-phase-alignment**：出处 Liu 2025 在库，「low-energy phasing alignment」一词确在其 §1/§5 出现，但词条定义有两处偏差：(a) 机制不是「自然动力学流形结构」：Liu 明确指出 NRHO 缺乏良好定义的不变流形，改用 Cauchy-Green 张量最大拉伸方向构造的逃逸流/接近流求交；(b)「与脉冲调相相比可显著节省燃料」是 Liu 引言转引 Sato 的流形调相比较结论，非本文方法的验证结论。**归类建议**：该概念是 NRHO 交会对接中的调相方法，不是地月低能转移族成员，建议移出本族（或并入交会类词条），最低限度也应在定义中写明语境。
8. **let**：与 Fantino 2010 一致（日地 L2 Lyapunov 不稳定流形→地月 L2 Lyapunov 稳定流形，「实际上仅需离开 LEO 的代价」）。可补两点：完整 SE 段是先沿稳定流形支离开地球、再沿同一轨道不稳定流形折返（Fantino Fig.1、Sousa-Silva §2.3）；四种 L_i^SE–L_j^EM 连接中只有 L1/L2^SE→L2^EM 低成本（Fantino §2/§6）。
9. **four-impulse-low-energy-transfer**：与乔琛远 2024 一致（速度极小点调向、极大点减速、Lambert 弧起止各一次；总 Δv=1.4695 km/s、47.63 天；机动法则来自雅可比常数-速度增量分析）。注意语境方向是 **EML1 Halo→GEO**（从月侧回地球）。
10. **three-impulse-low-energy-transfer**：与乔琛远 2024 一致（进入扰动流形机动 + Lambert 弧起止；能量最优 1.5522 km/s/40.13 天，能量-时间最优 1.6815 km/s/16.98 天）。
11. **exterior-capture-low-energy-transfer-orbit**：与郑越 2023 §0 几乎逐字一致（L2 流形、外俘获、借太阳引力辅助、因远离地月系而时间长）。准确。
12. **interior-capture-low-energy-transfer-orbit**：与郑越 2023 §0 一致（L1 流形、始终在地月系内、三种实现：小幅值 Lyapunov 流管穿越/与停泊轨道拼接/大幅值稳定流形直接连接）。准确。

### 入 weak-stability-boundary-transfer-trajectory（9 条）

13. **weak-stability-boundary-transfer-trajectory（拟主词条）**：现为泛化定义，李宸硕 2024 可作设计方法实例（日地 L1 Halo Az 2.0×10⁵ km 与地月 L2 Halo Az 3.0×10⁴ km 流形拼接、双层优化、拼接点脉冲最小约 12.6 m/s @地月相位 90°）。主词条骨架应以 B&M 1993 + Belbruno 2010 为准（见 §5）。
14. **weak-stability-boundary-low-energy-transfer**：泛化定义，与上条同义重复，合并时不必单列义项。
15. **wsb-transfer**：与 B&M 1993 一致（约 4 倍地月距离处的地球 WSB；月借力飞出；WSB(E)→WSB(M) 近零机动衔接；比 Hohmann 省约 18%；1991 年 Hiten 首验）。准确，可直接作主词条素材。
16. **outer-wsb-transfer**：忠实于 Xu 2013 原文（惯性系几何与 Belbruno WSB 理论相同；EL1/EL2 与 LL2 流形拼接）。但「LL2 附近不稳定流形」的提法与 Koon 学派自家著作及多数文献相左：地月侧应是 L2 Lyapunov **稳定**流形管内的穿越轨道（Ross 2022 §5.4；Howell & Kakoi 2006；Fantino 2010；Sousa-Silva 2018；Topputo 2013；Wang 2025-WSB）；徐明 2010 内部亦两说（§2.2「LL2 点稳定流形」vs §3.2/§4.2「LL2-Lyapunov 轨道不稳定流形」）。合并时建议采用稳定流形表述并注明分歧。
17. **wsb-like**：与 Chao 2022 一致（利用太阳引力借力的低能转移弧，区别于基于月球引力捕获的经典 WSB 概念）。可补其三条新特征（多圈绕地、中途可含动力月借力、可不超出月球轨道）与语境（LFO→DRO、平面双圆四体）。
18. **wsb-gateway**：内容对应 Wang 2025-E 的 LETG（§6.2），但有两处错误：(a)「5 倍月距为半径」错：原文投影面半径是 **5 倍月球引力影响球半径**（≈0.8598 无量纲，约 0.86 倍地月距离，约 33 万 km），且该面叫「DRO 捕获投影面」；(b)「最后一次交点」原文是对**反向积分的 DRO 捕获轨道**记录与投影面的最后交点（§6.1），词条「转移轨道在进入 DRO 前最后一次与投影面的交点」是可接受的等价解读，但宜贴原文。「机械能始终高于 2:1 DRO 的最大机械能」与原文一致（LETG 最小机械能 −0.3652 高于 DRO 在 σ=0.5 处的最大机械能）。参考文献应写全 Wang 2025-E 篇名，并注明论文术语为 LETG。
19. **belbruno-miller-trajectory**：「零双曲超速弹道捕获」与 B&M 1993 一致（捕获轨道消除近月点双曲超速 V_∞；§II/§IV）。「Belbruno-Miller trajectories」一词见于 B&M 1993 参考文献[12]（Krish 1991 硕士论文，不在库）。词条「（暂无参考文献）」应补 B&M 1993。
20. **ll1-point-transit**：与徐明 2010 §2.1 一致（SBCM 下到达/离开时间由无穷变有限、运动方向由双向变单向；LL1 穿越即最小能量低能转移）。准确。
21. **ll2-point-transit**：与徐明 2010 §2.2 一致（内侧转移本质是 LL1 穿越；外侧转移借流形拼接实现 WSB；「仅利用 LL2 点也可以构造出 WSB 转移，并得到 WSB 最小能量转移」）。准确。

### 入 ballistic-capture（15 条）

22. **ballistic-capture（拟主词条）**：骨架可用，两处数字须改：(a)「相比霍曼转移可节省约 15% 速度增量」应为**约 18%**（B&M 1993 Table 3；wsb-transfer 词条作 18% 是对的）；(b)「弹道捕获的转移时间通常比霍曼转移长数天」量级错误：WSB/弹道捕获转移 3–5 个月（B&M 1993 §V）、2.5–4 个月（P&A 2014），Hohmann 约 3 天，应作「长一至两个量级（数十天到数月）」。WSB 定义要点（「薄层区域」句）可用，但宜换成 Belbruno 2010 的算法定义表述。参考文献中 Belbruno 2004 专著与 Campagnola 2014 不在库。
23. **ballistic-capture-arc**：与 Pergola 2010 一致（L2 稳定流形、自外侧区域引向卫星、多圈闭合轨道、扰动参数决定圈数与时长、数天到近一个月）。应注明语境是**天王星卫星巡游**（非地月）；「逐渐降低相对于卫星的速度」是合理概括而非原文表述。
24. **ballistic-capture-transfer**：泛化定义，Ross 2022 §5.4（Hiten 式转移构造、弹道捕获操作定义）可支撑。可用。
25. **ballistic-earth-to-moon-transfer**：「不施加中间机动」与所引任务的实际不符：ARTEMIS 转移实施了 ORM 系列、月球借力（P1 双借力）、DSM、LTM、TCM 与 LOI 等一串机动（Folta 2012 §1.4/§2）；P&A 2014 对低能转移的措辞是「近弹道」（仅需统计修正与小确定机动）。建议改为「不依赖大脉冲中途机动、靠初始条件与多天体引力环境完成（实际任务含小修正机动）」。引用「Folta et al., 2014, Acta Astronautica」是站保论文，转移设计内容在 Folta 2012，应改引 Folta 2012（Folta 2014 仅佐证 ballistic Sun-Earth to Earth-Moon transfers 这一称呼）。
26. **ballistic-escape-arc**：与 Pergola 2010 一致（捕获弧后经异宿连接过渡到同一卫星 L1 不稳定流形离开）。「进入行星际空间」言过其实：是离开该卫星前往下一卫星（天王星系统内），不是行星际。
27. **ballistic-lunar-surface-trajectory**：与 A&P 2012 一致（约 3 天到超 100 天谱系；CRTBP 与星历模型；月面大部分区域可达）。准确。可补：太阳摄动使 C≈3.16 仍有源自地球的轨迹（无太阳时 C=2.8 以上即无）；Sweetser CRTBP 下限 3.721 km/s。
28. **ballistic-transfer**：定义本身是通用常识表述，但所引 Shi 2025 不能支撑：该综述全文中 ballistic 一词仅出现在参考文献篇名（Belbruno & Miller 1993），正文未给弹道转移下定义。建议改引 Grossi 2024（in a totally ballistic fashion, i.e., neither mid-course maneuvers nor other means of propulsion，描述 Topputo 2013 的双脉冲解）或 Topputo 2013 本身。
29. **capture-orbit**：与 Conley 1968 基本一致（「有时穿越平衡区域 L、但在此后（或此前）某个有限时刻不再穿越」「最终被其中一个天体俘获」均为原文表述；定理 2「渐近轨道附近有捕获轨道」）。两点修正：(a)「与穿越轨道和振荡轨道构成完整的轨道拓扑分类」混排了两套分类：定义 1 是渐近/穿越/非穿越（平衡区内行为），ω-/α- 振荡/渐近/捕获是相对 L 的长期行为（§3.3）；(b) 应注明 Conley 的自注：穿越 L 的渐近轨道当时尚未被证实存在，故定理 2 的前提性存在性未闭合。
30. **captured-orbit**：与 Belbruno 2010 一致（负开普勒能量条件贯穿其 WSB/捕获分析；「WSB 可构造几乎无需燃料的月球轨道捕获」见其 §1）。「被主天体引力捕获」应作「被**次主天体**（P2，地月系中为月球）引力捕获」。
31. **non-ballistic-capture**：内容与 Wang 2025-WSB 一致（「DRO 捕获轨迹包含二体能量大于 0 的非弹道捕获轨迹，分布在 σ=0 与 σ=0.5 附近」；雅可比能量低于约 2.86 时「轨迹在最终捕获前在 DRO 外停留一段时间，以非弹道方式进入」）。**但出处错配**：该术语不在 Wang 2025-E（全文无 non-ballistic），在 Wang 2025-WSB（Fig. 26 及 §6 末段）；参考文献应改为 Wang 2025-WSB 全名。同款错配见 dro-family.md 的 phase-free-dro。
32. **permanent-ballistic-capture**：与 Topputo 2013 定义 1 一致（t≥t₃ 后一直 H₂≤0；需耗散力）。应补 Topputo 的论断：地月转移中只能发生暂时弹道捕获，永久捕获须耗散力（如大气制动或推进）。
33. **temporary-ballistic-capture**：与 Topputo 2013 定义 1 一致（[t₁,t₂] 内 H₂≤0、之外为正）。准确。
34. **lunar-capture-window**：定义部分与徐明 2010 §3.2 一致（β 与 Halo 相位 τ 共同决定；可用 (τ,β) 集合很少）。「应用价值」段问题大：「每隔数月甚至数年才出现一次」无出处（徐明给出的是具体 β/τ 区间，未谈重现周期）；「在嫦娥任务和阿蒂蜜丝计划的轨迹设计中……」无出处，应删改。
35. **lunar-surface-capture**：方向正确但单薄。「捕获到月面环月轨道」措辞含糊：徐明 2010 §1.2 的原义是永久捕获到近月距 r_p=1738 km（擦月面）环月轨道所需的 ΔV，并给出四个模型对比（695.7/656.8/649.2/642.9–646.0 m/s，SBCM 最低）；「弹道捕获蜕变为永久捕获所需 ΔV 远小于传统方式」对应徐明 §1「弹道捕获蜕变为永久捕获所付出的代价显然要小于 Hohmann 转移」。建议补具体数字并写清「月面捕获」的量是捕获脉冲 ΔV。
36. **moon-capture-spiral**：与 Kluever 1995 一致（连续小推力的月捕获螺旋段，LEO→LLO「推力-滑行-推力」三段式的末段）。两点：(a) 它是**小推力**捕获，不是弹道捕获：并入 ballistic-capture 主词条时须放在「非弹道对照」位置；(b)「与逃逸螺旋构成对称的两段式转移」漏掉了中间的跨月滑行段（原文为三段式）。

总体判断：36 条中，16 条内容与论文一致或基本一致（2、6、8、9、10、11、12、15、17、20、21、23、27、31、32、33，其中 31 需改出处）；7 条为泛化定义、无事实错误，合并时充实或换引即可（1、3、13、14、19、24、28）；13 条需修正表述或出处（4、5、7、16、18、22、25、26、29、30、34、35、36）。事实性错误集中在：ballistic-capture 的「15%」与「长数天」（两处数字错）、wsb-gateway 的「5 倍月距」（投影面半径误植，实为 5 倍月球 SOI）、non-ballistic-capture 的出处错配（Wang 2025-E→Wang 2025-WSB）、ballistic-earth-to-moon-transfer 的「不施加中间机动」与引文年份（应为 Folta 2012）、low-energy-earth-moon-transfer 的「节省约 1 km/s」（无出处，量级应为百 m/s 级）、ballistic-transfer 的引文不支持定义（Shi 2025）、low-energy-phase-alignment 的机制与归类（CGT 拉伸方向流而非不变流形；属 NRHO 交会调相而非低能转移族）、lunar-capture-window 的应用段（无出处发挥）。没有发现凭空捏造的术语；问题集中在四类：数字派生错误、同一作者同年多篇间的出处错配、文献内部分歧（LL2 稳定/不稳定流形）未注明、把任务实践理想化（ARTEMIS 无机动说）。

## 5. 主词条建议大纲与术语变体表

### 5.1 low-energy-transfer（低能转移）

1. **定义与判据**：相对 Hohmann 省能、转移时间长的地月转移（徐明 2010 引言、郑越 2023 §0）；三判据并列：总 ΔV 低于 Hohmann（量级 80–270 m/s 或 18%，依端点而定）、全程瞬时偏心率<1（徐明 §1、Xu 2013）、到达端相对月球二体能量可转负（Topputo 2013、P&A 2014）；Sweetser CRTBP 下限 3.721 km/s 作参照。
2. **省能机理与三条路线的关系**：不变流形（Conley 1968 颈部穿越、Koon 2001 拼接）、WSB（B&M 1993）、弹道捕获（到达端机制）；Belbruno 2010 的统一（WSB=Lyapunov 稳定流形上零径向速度且负开普勒能量点集）。
3. **分类**：Topputo 2013 的 exterior/interior（几何+四象限规则）；郑越 2023 的内/外俘获型（按 L1/L2）；徐明 2010 按穿越对象（LL1/LL1-Halo/LL2/LL2-Halo）；P&A 2014 按任务剖面。
4. **典型数值**：省 18%（B&M Table 3）、约 150 m/s（徐明转引算例）、80 m/s（Sousa-Silva）、逼近 Sweetser 下限（Grossi、Topputo 全局最优 3769.3 m/s/82.6 天）；时间 2.5–5 个月（P&A、B&M、Campana 162 天）。
5. **设计方法实例**：双脉冲（Topputo 2013、Campana 2024）、三/四脉冲（乔琛远 2024，EML1 Halo→GEO）、单稳定流形直连（郑越 2023）、双层优化流形拼接（李宸硕 2024）。
6. **任务**：Hiten、GRAIL、ARTEMIS（地月系）；Genesis、SMART-1（注明日地系/小推力语境）。
7. **术语变体表**：low-energy-transfer-trajectory（低能转移轨道，徐明判据）、low-energy-lunar-transfer（2.5–4 个月，P&A）、low-energy-earth-moon-transfer、low-energy-exterior-transfer（外部转移）、low-energy-ballistic-transfer、let（LET 缩写）、exterior-/interior-capture-low-energy-transfer-orbit（外/内俘获型）、three-/four-impulse-low-energy-transfer（乔琛远方案）。low-energy-phase-alignment 建议移出本族（NRHO 交会调相，Liu 2025）。

### 5.2 weak-stability-boundary-transfer-trajectory（弱稳定边界转移轨道）

1. **WSB 定义**：B&M 1993 启发式（稳定运动崩溃距离 r\*，影响球的精确化）；Belbruno 2010 算法定义（n-稳定/n-不稳定跃变点、指标 n、Cantor 集状、非不变非流形）。
2. **位置**：地侧约 4 倍地月距离（1.5×10⁶ km，B&M）、3–5 倍（Wang 2025-E 引文献）；月侧 0.08–0.39 倍地月距离随方向而变（B&M Table 1）；远地点二、四象限规则（Topputo 2013）。
3. **转移构造**：月借力→WSB(E)→近零机动→WSB(M) 弹道捕获（B&M §III）；双三体流形拼接等价表述（Koon 2001、Ross 2022 §5.4；注明 LL2 稳定/不稳定流形的文献分歧）；转移窗口（徐明：LL2 穿越 Δβ≈3°，LL2-Halo (β,τ) 窗口集很小）。
4. **内/外侧与穿越**：ll1-point-transit、ll2-point-transit（徐明 §2）；outer-wsb-transfer（Xu 2013 命名与几何）。
5. **变体与推广**：wsb-like（Chao 2022：太阳借力弧 vs 月球捕获 WSB；三条新特征）；wsb-gateway/LETG（Wang 2025-E：投影面 5 倍月球 SOI、机械能匹配、73.6% 收敛率）；belbruno-miller-trajectory（零双曲超速捕获；词出 Krish 1991）。
6. **任务验证**：Hiten 1991（首验、中途机动压到零）、SMART-1 2004、GRAIL 2011、BepiColombo（水星，Belbruno 2010 §1）。
7. **术语变体表**：weak-stability-boundary-low-energy-transfer（与主词条同义，不另立义项）、wsb-transfer、outer-wsb-transfer、wsb-like、wsb-gateway（注明论文术语 LETG）、belbruno-miller-trajectory、ll1-point-transit、ll2-point-transit。

### 5.3 ballistic-capture（弹道捕获）

1. **定义与能量判据**：B&M 1993（H_k 由零转负、无 V_∞、捕获一般暂时）；Topputo 2013 定义 1（H₂≤0）；Ross 2022 操作定义（Hill 半径约 6 万 km 内绕月至少一圈）；captured-orbit 并入（改「次主天体」）。
2. **暂时/永久**：Topputo 2013（暂时/永久定义；地月转移中只有暂时捕获；永久需耗散力）；Fantino 2010（不稳定流形支配、圈数随 J 增大）。
3. **动力学机理**：Conley 1968 两套分类与定理 2（capture-orbit 并入，注明前提未闭合）；捕获弧/逃逸弧（Pergola 2010，注明天王星语境与异宿连接）。
4. **捕获窗口与月面捕获**：徐明 2010（(β,τ) 窗口集小；月面捕获脉冲四模型对比 695.7→642.9 m/s）。
5. **谱系与任务**：A&P 2012/2013（3.4–101 天月面谱系、太阳摄动扩展能量范围）；Hiten、GRAIL、ARTEMIS（注明近弹道、含小机动）。
6. **非弹道对照**：moon-capture-spiral（Kluever 1995，连续小推力三段式末段）；non-ballistic-capture（Wang 2025-WSB，DRO 语境，二体能量>0）。
7. **术语变体表**：ballistic-capture-transfer、ballistic-capture-arc、ballistic-escape-arc、ballistic-earth-to-moon-transfer（改「近弹道」表述）、ballistic-lunar-surface-trajectory、ballistic-transfer（换引 Grossi 2024/Topputo 2013）、capture-orbit、captured-orbit、temporary-/permanent-ballistic-capture、non-ballistic-capture、lunar-capture-window、lunar-surface-capture、moon-capture-spiral。

合并障碍评估：三个主词条的概念层次清楚（转移总体 / 边界与通道 / 到达端机制），无相互矛盾的定义需要裁决；需要取舍的三处已在上文标明处理方式：(a) LL2 稳定 vs 不稳定流形的文献分歧，建议采用稳定流形管内穿越轨道表述并注明分歧；(b) 「低能」三判据并列，不必统一；(c) low-energy-phase-alignment 建议移出本族。引用规范上，所有「Wang 等 - 2025」「Folta 2014」类条目需写全篇名（库内同作者同年多篇）。
