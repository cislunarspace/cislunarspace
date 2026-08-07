# 平动点与 L4/L5 轨道一族词条合并前调研笔记

调研日期：2026-08-07。目的：核对「平动点」「平动点周期轨道（LPO）」「L4/L5 轨道」三族 21 个现有词条的定义是否与原始文献相符，为合并主词条做准备。

调研范围：资料库 13 篇文献的 md 正文（`hybrid_auto/<目录名>.md`），任务清单的重点文献全部在库，含先前预计大概率不在库的 Murray & Dermott 1999。

论文简称：

- V&A 2014 = Vellutini & Avanzini 2014, *Shape-based design of low-thrust trajectories to cislunar lagrangian point*（lagrangian-point、earth-moon-l1-point 出处）
- M&O 2017 = Meyer & Offin 2017, *Introduction to Hamiltonian Dynamical Systems and the N-Body Problem*（hills-regions 出处；§4 限制性三体问题、§12 非线性稳定性）
- M&D 1999 = Murray & Dermott 1999, *Solar System Dynamics*（tadpole-orbit 出处，§3.9；horseshoe 经典出处 §3.11–3.12）
- 彭张 2016 = 彭祺擘、张海联 2016,《载人登月地月转移轨道方案综述》（l1-transfer-corridor 出处）
- Bosanac 2026 = *Clustering natural trajectories in the Earth-moon CR3BP*（l1/l2-gateway 出处）
- C&H 2018 = Capdevila & Howell 2018, *A transfer network linking earth, moon, and the triangular libration point regions*（l4-spo/l5-spo、三角点转移网络出处）
- Gómez II = Gómez et al. 2001, *Dynamics and mission design near libration points, vol. II: the case of triangular libration points*
- He 2025 = He 等 2025, *Design of cislunar navigation constellation via orbits with a resonant period*（l4v-l5v、l2sh-l2nh 出处）
- Klonowski 2024 = *Cislunar space domain awareness architecture design and analysis for cooperative agents*（planar-orbit 出处）
- Qiao 2025 = Qiao 等 2025, *Orbital parameter characterization and objects cataloging for Earth-moon collinear libration points*（CJA，earth-moon-collinear-libration-points、libration-point-orbit-cataloging 出处）
- Ren 2012 = Ren 等 2012, *Optimal low-thrust transfers between libration point orbits*, Celest. Mech. Dyn. Astron.（libration-point-periodic-orbit 出处）
- Xu 2026 导航文 = Xu 等 2026, *Adaptive robust cubature filtering-based autonomous navigation…*（l4-planar-short-period-orbit 真实出处）
- Xu 2026 星座文 = Xu 等 2026, *Optimization and deployment method of cislunar communication and navigation constellation…*（同名同年另一篇，不含 short-period 提法，注意消歧）

词条引用但**不在库**、本轮无法核对的文献：Doedel 等 2007（horseshoe-orbit 词条第二出处）、Guzzetti 等 2014 AAS 会议文（horseshoe-orbit 第一出处，"Jacobi 常数约 2.5"的来源；库内 Guzzetti 等 2016 是另一篇）、Yarnoz 等 2013（horseshoe-orbit 第三出处）、Szebehely 1967（M&O 2017 指定的 Hill 区域完整分析出处）、Koon 等 2000 与 Gómez & Masdemont 2000（Ren 2012 转引的零代价转移出处）。Li & Zheng 2010、Bucchioni & Innocenti 2021（collinear-libration-point 与 collinear-libration-point-orbit 的出处）在库，本轮只抽查后者用词（见 §4 第 10 条）。

## 1. 平动点

### 1.1 五个点的定义与位置

- **定义与归属**。M&O 2017 §4.3：限制性三体问题有五个平衡点——三角两点在两天体连线为底边的等边三角形顶点，"attributed to Lagrange"，记 L4、L5；共线三点由 W（amended potential）在三个区间各恰一个临界点证得，"These three collinear equilibria are attributed to Euler…such equilibrium points are called libration points"。M&D 1999 §3.5–3.6 同此：L4 前导、L5 后随系约定；L1 在两质量之间、L2 在小质量外侧、L3 在负 x 轴。V&A 2014 无五点定义，只在引言区分 "collinear libration points" 与 "equilateral Lagrangian points"。
- **位置数字**。V&A 2014 全文不给任何 L1/L2 距离（坐标全部无量纲化，仅有的长度数字是 LEO 6775 km 与 GEO 42157 km）。Qiao 2025 给归一化距离（平动点到最近主天体，长度单位=地月距离）：**γ₁=0.150934288（L1 距月）、γ₂=0.167832751（L2 距月）、γ₃=0.992912060（L3 距地）**。按地月距 384,400 km 换算：L1 距月约 5.80 万 km、**距地约 32.6 万 km**；L2 距月约 6.45 万 km、**距地约 44.9 万 km**；L3 距地约 38.2 万 km。由此：earth-moon-l1-point 词条的"距地球约 32 万公里"数值成立，但 V&A 2014 不能作出处，可改引 Qiao 2025 的 γ₁；lagrangian-point 词条的"L2 位于月球背侧约六十万公里处"错误——无论距月（6.45 万）还是距地（44.9 万）都对不上 60 万。

### 1.2 稳定性：共线不稳定、三角条件稳定

- **共线三点不稳定（双曲/鞍型）**。M&O 2017 Lemma 4.5.1：共线点特征值"two real eigenvalues and two purely imaginary eigenvalues"→"the collinear points of Euler are unstable"；§4.4 末："the collinear points L1,2,3 are minima of W along the x1-axis, but they are saddle points in the plane"。Qiao 2025 的运动模式表述："their motion mode is characterized as **saddle × center × center**"，并反复使用 "unstable hyperbolic invariant manifolds"。V&A 2014："In spite of their instability, collinear libration points are attractive locations…"。注意词条 earth-moon-collinear-libration-points 写的"由于其**双曲稳定性**"用词颠倒——原文语境是双曲**不稳定**性（鞍方向发散）。
- **三角两点在质量比阈值下稳定**。M&O 2017 Lemma 4.5.2：0<μ<μ₁ 时纯虚特征值，"μ₁ = ½(1−√69/9)…is called **Routh's critical mass ratio**"，Table 4.1 给出 μ₁=0.038520896504551；μ₁<μ≤½ 时特征值离开虚轴，"the equilibrium is said to be hyperbolic"。M&D 1999 式 3.145 等价形式：稳定条件 "μ₂ ≤ (27−√621)/54 ≈ 0.0385"（教材无 Routh 之名，也不写 (1−2μ)²>1/27；正确的等价写法是 (1−2μ)²≥23/27）。Gómez II："stable, in the linear sense, for values of the mass ratio in the open interval (0, μ₁), where μ₁=0.038521…"。**地月系满足**：M&O Table 4.1 给 μ_EM=0.01215002<μ₁；M&D 明言该条件"is satisfied for every planet–satellite pair, with the exception of the Pluto–Charon system"。
- **非线性层面的保留**（供主词条写限定语）：平面情形除两个共振值 μ₂=0.024293…、μ₃=0.013516… 外 Lyapunov 稳定（Deprit & Deprit-Bartholomé、Markeev，Gómez II 与 M&D 均提及）；M&O §12 另有 μ_c≈0.010913667 例外由 Meyer & Schmidt 的 D₆ 补证。μ_EM 不落在任何例外值上。即"地月 L4/L5 线性稳定"是准确表述，写"稳定"不加限定在严格意义上有反例质量比。

### 1.3 零速度面与希尔区域、颈部通道

- **Hill 区域定义**。M&O 2017 §4.4：雅可比常数 C = W − ‖ẋ‖²（§4.1 式 4.7–4.8），"This inequality places a constraint on the position variable x for each value of C"，集合 ℌ(C)={x : W(x)≥C} "is known as the Hill's region for C, and its boundary where equality holds is called a **zero velocity curve**"。**词条 hills-regions 定义"限制性三体问题中由雅可比积分定义的可达区域"相符**。两点注意：(a) 教材用语是 zero velocity curve（平面问题），"零速度曲面"是空间情形的说法，教材未用；(b) M&O §4.8.1 另有 Hill's lunar equations（Hill 月球方程），与 Hill's regions 是两个概念，词典中勿混。
- **颈部通道的临界值序列**。M&D 1999 §3.6 给临界雅可比值排序 C_L1 > C_L2 > C_L3 > C_L4,5（μ₂=0.2 例：3.805/3.552/3.197/2.84），小 μ 展开 C_L1≈3+3^{4/3}μ₂^{2/3}−10μ₂/3、C_L3≈3+μ₂、C_L4,5≈3−μ₂（式 3.94–3.98）；C_J<C_L4,5 时禁区消失。M&O §4.4 只有图 4.3，明确让读者 "See Szebehely (1967) for a complete analysis"——**颈部打开次序的文字描述两本教材都不展开，主词条若写"C 降至 C1 打开 L1 通道、降至 C2 打开 L2 通道"，出处应落到彭张 2016（见下）或 Szebehely 1967（不在库）**。
- **hills-regions 词条应用价值段的出处错位**。该段"雅可比积分在不同子系统之间切换时需要能量改变……揭示电推进弧段与弹道弧段的能量交替规律"不是 M&O 2017 的内容（教材无此说），像是从低能/低推力转移文献搬来的，需另找出处或删改。

### 1.4 L1 转移走廊（彭张 2016）

原文 §3.2（标题"利用地⁃月 L1 点的转移方式"）逐句核对结果：

- **开启条件的方向**：原文"只要过渡轨道初始速度使相应的 Jacobi 常数 **C≤C₁（稍小于）**，此时原包围地球 P₁ 和月球 P₂ 的两个零速度面相接并从平动点处稍稍打开了一个狭窄走廊"。即 C=C₁ 时两面相接，**C 稍低于 C₁ 通道才打开**；词条"C 降至 C1 时相接，打开一条狭窄通道"把相接与打开并成了一步，方向需修正。
- **必要非充分**：原文有原话——"但这只是飞行器可以越过该通道后奔月的一个**必要条件，并非充分条件**，还要看转移轨道的起始状态"。
- **连接弧段与第三次脉冲**：L1 稳定流形在 C≈C₁ 时距地球最近约 0.1 个地月平均距离，到不了低高度停泊轨道，故"PQ 为连接弧段，P 点在近地停泊轨道上，Q 点在 L1 点的稳定流形上"；"一般至少要通过施加三次脉冲完成，前两次分别在 P 点和 Q 点，**第三次在近月点附近**"。词条"在近月点施加制动"基本相符，但原文未用"制动"一词，且该脉冲针对"环月轨道预先设计好"的情形——原文同段说无目标轨道要求时"飞行器进入月球引力范围之后**往往会自动被月球俘获**"，此时"比霍曼转移方式节省能量"。
- **时间与裁人评价**：算例"从 Q 点开始到经过 L1 点耗时 **362.85 天**"（连接弧段 3.33 天）；表 1"地月 L1 点走廊的转移：>4100 m/s，几十~几百天"——词条"可达数百天"相符。原文没有"不适合载人登月"的直接表述，最接近的是"此类轨道对于实施载人登月任务来说，**能量往往并不节省**"与"既耗时间又耗能量……并不可取"，因果侧重与词条不同。
- **原文叫法**："通过共线平动点 L1 走廊的转移方式"（§3 分类）/"地月 L1 点走廊的转移"（表 1）；"L1 转移走廊"这一复合名词、"低能转移"指称该类，原文均未用。

### 1.5 L1/L2 gateway（Bosanac 2026）

- **gateway 是描述性用语，无形式定义**。全文无 gateway 的定义句，典型用法："passing through the L₁ gateway to revolve around the Earth"、"departing through the L₁ or L₂ gateways, or remaining in the vicinity of the Moon"、图题 "depart through or begin outside of the L₁/L₂ gateway"。即轨迹可经此从月球附近去外部区域，或始于 gateway 之外再进月球附近——**词条"狭窄通道区域，轨迹可经此从月球附近进入外部区域或从外部进入月球附近"的含义相符，但"狭窄"一词 Bosanac 2026 无据**（彭张 2016 有"狭窄走廊"，可互引）。
- **聚类语境**：gateway 是展示聚类结果时的"high-level itineraries"标签（三类：撞月、经 L1/L2 gateway 离开、停留月球附近），不是聚类算法的输入特征。方法本身：起始于月球附近的 21 天自然轨迹，按总绝对曲率等间隔采样构造 shape/position 特征向量，HDBSCAN 粗聚类+DBSCAN 细化+图连通聚合；单能量 105 万条→2416 local/1461 global clusters，跨 19 个能量值共 2744 万条→11224 个 global cluster groups。
- **与流形/Transit 的关系**：正文无 "transit" 一词，"manifold" 仅见于参考文献条目；gateway 与不变流形的联系在该文**未建立**，词条不要替它建立。

## 2. LPO 统称

- **Ren 2012 的定义比词条窄**。原文："**Libration point orbits, a subset of unstable periodic orbits** in the three-body problem"；且"the study is limited to the **planar** case"，实际只用平面 Lyapunov 轨道。halo、vertical、axial 与 **L4/L5 三角点族在全文均未出现**——词条"围绕共线**或三角**平动点的周期轨道"的三角部分在 Ren 2012 无据，且与"不稳定周期轨道子集"的定义相左（三角点附近的周期轨道多为稳定，见 §3）。统称若取通行广义（含三角点族），出处应改用 Qiao 2025、He 2025 等，Ren 2012 只支撑共线点部分。
- **鞍-周期结构与流形通道（Ren 2012，相符）**："The three collinear equilibria are unstable points, allowing a **periodic and a saddle behavior**. The periodic component accounts for the existence of periodic motions around these points…The saddle component gives rise to motion toward and from these periodic solutions, respectively the **stable and unstable invariant manifolds**"。注意原文用 periodic/saddle，未出现 saddle-center 或 center manifold 术语；"鞍-中心"一词可由 Qiao 2025 的 "saddle × center × center" 支撑。"无代价入轨/离轨"即 "zero cost transfers between LPOs of the same energy using invariant manifolds"，系转述 Koon 2000、Gómez & Masdemont 2000 的既有成果（不在库）。
- **双圆四体问题中的替代（Ren 2012，完全相符）**："the equilibrium points and their periodic orbits are replaced respectively by **periodic orbits and invariant tori**"——两级替代：平动点→周期轨道（dynamical substitute，ε→1 延拓），周期轨道→不变环面。词条只取前一级，正确。
- **统称的实际覆盖范围**（供主词条列举）：Qiao 2025 的共线点编目族谱为 Lyapunov、vertical Lyapunov、Halo、quasi-Halo、Lissajous、quasi-Lyapunov（"quasi-Lyapunov orbits act as the demarcation between Lissajous orbits and quasi-Halo orbits"）；He 2025 轨道库 17 族，L1/L2/L3 各有 Lyapunov、南北 Halo、Vertical，L4/L5 各有 Planar、Vertical，外加 DRO；Klonowski 2024 观测者目录另有 L4/L5 的 Axial、Planar、Long 与 Dragonfly、Butterfly 等。
- **编目应用（Qiao 2025）**：词条的四件套"识别、跟踪、记录、分类"是原文对 space object cataloging 的一般定义（"the systematic process of identifying, tracking, recording, and classifying objects in orbit"），不是该文方法本身；"基于特征参数的编目方法"相符——辛变换分解三种运动模态、Lie 变换解耦双曲方向，得 **6 个特征参数 [q₁,p₁,I₂,θ₂,I₃,θ₃]** 与状态矢量一一对应（q₁/p₁ 双曲方向、I₂θ₂ 面内中心、I₃θ₃ 垂直中心），辅以 θ₃=π/2 的 Poincaré 截面作编目底图，轨道识别化为 MSE 优化、贝叶斯优化约 30 次求值收敛；星历模型下对 100 km/1 m/s 量级误差稳健。背景是地月空间态势感知与非合作目标。

## 3. L4/L5 族

### 3.1 两个频率与短/长周期族（Gómez II）

- 三角点附近平面运动有两个模态频率（以月球平运动为单位）：**ω₁=±0.95459（短周期模态）、ω₂=0.29791（长周期模态），近共振 ω₁≈3ω₂**（Gómez II 转述 Breakwell–Pringle）。对应周期约 28.6 天与 91.6 天。
- **短周期族 L_s**：从 L4/L5 发出，"the limiting period is 6.5826838"（无量纲，≈28.6 天），"When the family grows, the period decreases monotonically"；L5 端极限 trace=−0.764423（|Tr|<2，线性稳定），增大到 Tr=2 处到达分岔轨道 B₄₅——"coinciding with a similar orbit in the short periodic family of L4…belongs to the **Lyapunov family evolving from L3**"。另有三倍周期分岔族（triplication family）。
- **长周期族 L_l**："the limiting period is 21.0700687"（≈91.6 天），随轨道增大周期先增至约 26.22 再降至 25.2943（无量纲）。
- **Gómez II 没有 vertical 族、也不用 tadpole/horseshoe 术语**（全书 0 命中）。三角点附近的垂直周期轨道族的出处应落到 He 2025（见 §3.5）等近期文献。

### 3.2 蝌蚪轨道（M&D 1999 §3.9，词条相符）

- 定义："particles started close to L4 and L5 execute a **small-amplitude libration** about the equilibrium point. By increasing the initial separation the resulting orbit becomes more **elongated in the direction of the L3 point** (tadpole orbits)"；因轨道与零速度曲线的拉长形状得名（"referred to as tadpole orbits because of the elongated shapes"）。Fig. 3.16 两例角跨度 86° 与 115°。
- **"不超过 L3"相符且可写得更硬**：临界蝌蚪轨道（critical tadpole）恰好到达 L3 方位——"This is the orbit of the critical tadpole"（θᵢ=180°、δrᵢ=0）；任何蝌蚪轨道满足 δr≤δr_crit=(8/3)^{1/2}μ₂^{1/2}（式 3.182）；临界蝌蚪的最近角距 "θmin=23.5° for all μ₂"，即最大角范围约 156.5°，止于 L3（180°）而不包围 L3；再大即转入马蹄（"will librate about L4, L3, and L5 (horseshoe orbits)"）。零速度曲线参数化同此分界：蝌蚪形曲线 −1≤γ≤+1，γ=±1 在 L4/L5，端点对应 L3 处 C_J（式 3.158–3.160）。
- 词条"在三角平动点 L4 或 L5 附近小幅振荡……幅角范围有限，通常不超过 L3 点"全部成立；"因形似蝌蚪而得名"成立。应用价值段（"满足通信仰角、覆盖范围"等）是模板套话，无出处。

### 3.3 马蹄轨道（M&D 1999；horseshoe-orbit 词条评估：保留独立词条，需局部重写）

- **经典定义（M&D §3.9/3.11/3.12）**："the resulting orbit will **encompass both L4 and L5**. These are referred to as horseshoe orbits"；天平动"about **L4, L3, and L5**"；与蝌蚪以 C_J=C_L3 为界（马蹄形零速度曲线 C_J=3+ζμ₂^{2/3}，0≤ζ≤3^{4/3}，下限对应 C_L3、上限对应 C_L1/L2）。实例：土星卫星 **Janus 与 Epimetheus**"move on horseshoe orbits"（§3.12 共轨交换），另有日地系小行星 Cruithne。
- **词条需要修的几处**：
  1. "马蹄轨道可视为**短周期轨道**在振幅增大后的演化形式"——无据。M&D 的图像是**蝌蚪轨道**振幅增大（向 L3 拉长）后过渡为马蹄；Gómez II 里短周期族振幅增大是走向 B₄₅ 分岔、与 L3 发出的 Lyapunov 族相连，不是马蹄。
  2. "Jacobi 常数约 2.5"（标 Guzzetti 2014 动态目录统计，不在库无法核）——与 M&D 的零速度曲线分析矛盾：马蹄区域对应 C_J∈[C_L3, C_L1]，地月系约 3.01~3.20；且词条自己又说"与 L4/L5 平动点的能量水平接近"（C_L4,5≈3−μ≈2.988），C_J=2.5 时禁区已消失、根本不存在马蹄几何。建议删去该数字。
  3. "L4 和 L5 平动点本身是线性稳定的（中心×中心型），因此其附近的马蹄轨道具有相对较好的稳定性"——推理不成立：马蹄轨道是大尺度共轨运动，不享有平衡点的小邻域稳定性；"稳定性介于共线平动点轨道和 DRO 之间"无出处。
  4. "马蹄轨道与短周期轨道和长周期轨道共同构成了三角平动点附近完整的周期轨道家族"——无单一出处；Gómez II 的三角点周期轨道族只有短周期、长周期两族（平面情形），马蹄在其体系外。宜写成：短/长周期族从 L4/L5 发出，蝌蚪与马蹄是共轨天平动的两种大尺度形态。
  5. 可保留的表述：大尺度、与月球共轨缓慢前后摆动、在 L4/L5 附近转折、周期数十至上百天量级（定性合理但本轮未在库内文献核到具体数字）；三条参考文献均不在库，建议参考文献换成 M&D 1999 §3.9/3.11 + 库内可核文献。

### 3.4 短周期轨道 SPO（C&H 2018，词条相符）

- 用词相符："Short Period Orbits about the triangular libration points (Deprit et al., 1967; Moulton, 1920)"；摘要即 "between lunar DRO and L4/5 short-period orbits (SPOs)"。
- **周期**：Table 1 所选代表轨道 L4 SPO 与 L5 SPO 周期均 **28.3488 天**、C=2.9132——词条"周期约 28 天"相符。写精确值须注明是所选轨道：SPO 族极限（线性）周期约 28.6 天，随振幅增大单调减小（Gómez II）；He 2025 的 L4P/L5P 族周期范围 6.2832–6.2869 t*（≈27.3 天，近恒星月），都是同一族的不同成员。
- **对称**：词条"与 L5 SPO 对称"是合理转述。原文依据：CR3BP 方程的镜像+时间反演对称性（引 Szebehely 1967）；Table 1 初值互为镜像（L4: y₀=+0.8660、ẋ₀=−0.2384；L5: y₀=−0.8660、ẋ₀=+0.2384）；§8 明确利用该对称性互换 L4/L5 构造行程。对称轴是地月连线（旋转系 x 轴）。
- **稳定性与流形**：所选 SPO "practically stable"，"there exist no stable nor unstable manifold trajectories…that could be employed as an initial guess"——这正是该文 DRO↔SPO 转移不用流形拼接、改用切面法猜初值+微分修正+伪弧长延拓的原因（约束：TOF≤350 天、总 ΔV≤1 km/s）。P3DRO（period-3 DRO）的稳定/不稳定流形只作为动力学解释（转移轨迹在相空间贴近同能量 P3DRO 流形）。
- **转移网络结构**（供 transfers 族参考，本轮不并）：以月球为中心枢纽（"the Moon is the central hub"），基础设施（deep space Gateway）假定置于 lunar DRO，所有转移腿连到 DRO；节点为 LEO（200 km）、lunar DRO、L2 NRHO、L4/L5 SPO；全部为双脉冲转移。earth-moon-triangular-libration-point-transfer-network 词条"以月球为中枢，连接地球、近地轨道与三角平动点区域"与原文相符。

### 3.5 垂直族 L4V/L5V 与 L4 平面短周期轨道（He 2025、Xu 2026 导航文）

- **l4v-l5v（He 2025）**：缩写属实（Table 1：Code L4V/L5V、Type "Vertical"）；是沿**旋转系 z 方向（垂直于地月轨道面/xy 面）**延伸的非平面周期轨道，XZ 面对称、初始 z 振幅 1000 km；族周期范围 6.5391–6.5827 t*。**词条"垂直于黄道面"错误**——全文无 "ecliptic"，参照面是地月轨道面。"在最优共振星座中表现突出"相符：摘要 "constellations combining L2 southern/northern NRHOs with vertical orbits at L4/L5 points deliver the optimal navigation performance"；综合区 Rank 1 为 L2NH-L2SH-L4V-L5V（DOP 10.72），月球区 Rank 1/2、近地区 Rank 2 也含 L4V/L5V；最优构型中周期取 6.28584 t*，为基准轨道 L2NH/L2SH（1.57146 t*）的 4 倍（共振比 1:1:4:4）。
- **l2sh-l2nh（He 2025）→ 并入 nrho 成立**：该文直接称 "L2 southern/northern **Near-Rectilinear Halo Orbits (NRHOs)**"（摘要及正文多处），即 L2 南/北 Halo 族的近直线段；族周期范围 1.3739–3.4155 t*。词条"偏心率极高、形状接近直线"不是 He 2025 的表述（全文无此类描述），但 nrho 主词条已有 Spreen 2021/Gao 2023 的形态界定可支撑。"近地区域和综合区域的首选轨道类型"相符但不完整：该文分近地区（地心 40,000 km 球面）、月球区（月心 10,000 km 球面）、综合区三个目标区，L2NH/L2SH 在三个区域的 Rank 1/2 中全部出现（近地区 Rank 1 为 L2NH-L2SH-L4P-L5P、月球区 Rank 1/2 为 L1V-L2NH-L2SH-L4V/L5V）。
- **l4-planar-short-period-orbit（Xu 2026 导航文）**：出处消歧——是 *Adaptive robust cubature filtering…* 那篇（Table 1 轨道类型栏原文 "L4 Planar Short-Period Orbit"，§5.1 "the method was applied to two scenarios: …one spacecraft in an L4 planar short-period orbit and another in a DRO"），**不是**星座文那篇（该文只称 "L4 plan / L4 vertical"，无 short-period 提法）。"在月球轨道面内"相符（初值 z=vz=0）；"偏离月球轨道面程度小"相符（"L4 orbits exhibit only small inclinations relative to the lunar plane"）；"单独与 DRO 配合时可构成近共面导航构型"相符（"two near-coplanar Earth–Moon spacecraft"，近共面时双星自主定轨误差增大是其要解决的问题）。**缺口**：原文未给该轨道的周期天数与稳定性讨论，"周期短"只有名称依据；"周期轨道"表述是合理推断（原文只给名义参考轨道与无量纲初值）。该文方法：星间测距+相对背景恒星视线测角的 LiAISON 自主定轨，AFF-ARCKF 滤波。

### 3.6 planar-orbit（Klonowski 2024，基本相符）

- 概念存在：观测者候选轨道目录含 "L4 and L5 Axial, Planar, and Long"；正文有 "L4 Planar"/"L5 Planar" 观测者。原文未给显式定义，"完全位于地月旋转系 X-Y 平面内"是合理推断（全文平面即 CR3BP 旋转系 xy 面）。
- "使用频率较低"相符但因果要按原文写：结果是 **Pareto 前沿中几乎没有平面观测者**（"the lack of planar observers in architectures in the Pareto front…(except for GEO observers)"）；机制是平面观测者观测平面 CA 转移轨迹时受**太阳指向约束**存在空窗（"planar orbits may not be able to view certain regions due to solar pointing constraints"），而非平面观测者（L4/L5 Axial 被频繁使用）有显著 z 向运动可补窗。词条把因果写成"对平面转移轨迹的观测受太阳指向约束限制较大"方向正确，建议按上句重写。
- 背景：地月 SDA 观测架构设计；观测对象是"合作 agent"（CA）从 GEO 到 L1 点或 L2 Lyapunov 入轨点的平面最优转移轨迹；探测以视星等（依赖太阳相位角）衡量。

## 4. 现有词条定义勘误

逐条对照（词条 → 结论）：

1. **lagrangian-point（主词条）**：首句定义可用。"L2 位于月球背侧约六十万公里处"**错误**——L2 距月约 6.45 万 km、距地约 44.9 万 km（Qiao 2025 γ₂=0.16783 换算）。"共线点在摄动下不稳定"可简化为"不稳定"（V&A 2014 原文无"在摄动下"限定）。halo/quasi-halo/Lissajous 三类轨道与不变流形低能转移相符（V&A 2014 §I 原话）。"L4/L5 在日地系统中是太阳观测/太阳风暴监测有利位置，已有多颗卫星运行"**无据且混淆**——日地 L1 才是太阳观测位置（SOHO、DSCOVR 在 L1，见 Bucchioni 2021），L4/L5 无此说法。鹊桥中继、"L1 天然门户"均无 V&A 2014 依据（门户说法可用 Bosanac 2026 的 gateway 语境支撑，鹊桥可用 Qiao 2025 引言的任务列举支撑）。
2. **collinear-libration-point**：定义基本可用。"L3 位于地球对面（太阳一侧）"措辞含糊——L3 在地球背月一侧（负 x 轴），"太阳一侧"易误读为日地系统；"鞍型不稳定"相符（M&O 2017）；"等边三角形、条件稳定"相符（μ<μ₁≈0.0385）。"共线平动点处存在三维周期 Halo 轨道"成立（通行事实，Gómez I 可证）。应用价值段是模板套话。参考文献 Gómez et al. 2001 Ch.2 应对应 vol. I（共线点卷），建议写清卷号。
3. **earth-moon-collinear-libration-points**："双曲稳定性"**用词颠倒**，应为"双曲不稳定性"或"鞍×中心×中心的运动模式"（Qiao 2025）。"给编目带来挑战"有据（"posing an urgent challenge to cislunar space situational awareness"）；"适合部署任务轨道"是词条发挥的因果，原文只有"成为地月空间未来发展的重要资源"+任务列举（ARTEMIS、CE5-T1、鹊桥、Capstone）。可补 γ 距离数字。
4. **earth-moon-l1-point**："距地球约 32 万公里"数值成立（32.6 万 km），但 V&A 2014 无此数字，出处应改引 Qiao 2025 γ₁。"不变稳定流形可通往近地轨道"**原文未提及**——V&A 2014 自己的方案恰是 LEO→L1 的形状法低推力螺旋、不用流形；流形用于低能转移有据，"通往近地轨道"需另找出处。"第三体受地球和月球引力共同主导""可设计晕轨道、准晕轨道作为空间站轨道"为 CR3BP 通行表述，可保留。
5. **hills-regions**：定义相符（M&O 2017 §4.4，ℌ(C)={x: W(x)≥C}，边界为零速度曲线）。应用价值段（雅可比积分在子系统切换时的能量改变、电推进/弹道弧段交替）非 M&O 内容，出处错位，需另找出处或删改。
6. **l1-transfer-corridor**：主要修正"C 降至 C1 时打开通道"的方向——C=C₁ 时两零速度面在 L1 相接，C 稍低于 C₁ 通道才"稍稍打开"（彭张 2016 原话 C≤C₁、稍小于）。"必要条件非充分条件"相符。"近月点制动"改为"在近月点附近施加第三次脉冲以进入预定环月轨道"，并补"无目标轨道要求时往往自动被月球俘获、此时比霍曼转移省能量"。"不适合载人登月"无原话，原文为"对载人登月任务能量往往并不节省""既耗时间又耗能量、并不可取"。数字可坐实：算例 362.85 天、表 1 ">4100 m/s、几十~几百天"。
7. **l1-gateway / l2-gateway**：定义含义相符（Bosanac 2026 的 gateway= L1/L2 附近连接月球附近与外部区域的通道，轨迹双向经过）；"狭窄"一词该文无据，可删或改引彭张 2016。需写明该文语境：gateway 是自然轨迹聚类结果的行程标签（撞月/经 L1 或 L2 离开/停留月球附近），文中无形式定义，也未与不变流形/Transit 概念挂钩。
8. **libration-point-periodic-orbit（主词条）**：与 Ren 2012 有两处出入——(a) Ren 的 LPO 定义是"**不稳定**周期轨道的子集"且限于平面情形，词条"围绕共线**或三角**平动点"的三角部分在 Ren 无据，统称取广义时三角点族出处改用 He 2025/Qiao 2025；(b) "鞍-中心"术语原文未用（原文 periodic/saddle；saddle × center × center 出自 Qiao 2025）。"流形提供无代价入轨/离轨通道"相符（zero cost transfers，Ren 转述 Koon 2000 等）。"非自治双圆四体问题中平动点被周期轨道替代"完全相符（可补第二级：周期轨道→不变环面；dynamical substitute 概念）。
9. **collinear-libration-point-orbit**：统称表述成立——出处 Bucchioni & Innocenti 2021 原文即用 "collinear Lagrangian point orbit of the Earth–Moon system"（摘要），并列 "Lissajous, halo, etc."。两处可改：(a) 只写 L1、L2 漏了 L3（He 2025 轨道库含 L3 各族，工程应用少不代表不存在）；(b) "具有连续通信和覆盖月球背面等优势"中"覆盖月球背面"只是 L2 轨道的性质，宜限定。
10. **libration-point-orbit-cataloging**："识别、跟踪、记录、分类"是 Qiao 2025 对空间物体编目的一般定义原文，拼接合理；"基于特征参数的编目方法"相符。可补实质内容：6 特征参数 [q₁,p₁,I₂,θ₂,I₃,θ₃]、θ₃=π/2 Poincaré 底图、族谱分界（quasi-Lyapunov 是 Lissajous 与 quasi-Halo 的分界）、贝叶斯优化识别、100 km/1 m/s 误差内稳健。
11. **tadpole-orbit（主词条）**：定义相符（M&D §3.9：绕 L4/L5 小幅天平动、向 L3 拉长、形似蝌蚪得名、临界蝌蚪止于 L3 方位）。可补：临界蝌蚪 θmin=23.5°、δr≤(8/3)^{1/2}μ₂^{1/2}（式 3.182）、Fig 3.16 例 86°/115°、振幅再大即过渡为马蹄。应用价值段是模板套话，建议重写。
12. **l4-spo / l5-spo**：相符（C&H 2018：SPO 术语、28.3488 天、C=2.9132、L4/L5 镜像对称）。可补：族极限周期约 28.6 天随振幅单调减小（Gómez II）；所选 SPO "practically stable"、无可用流形（C&H 2018，这解释了其转移设计为何不用流形法）。
13. **l4v-l5v**："垂直于黄道面"**改**为"垂直于地月轨道面（旋转系 xy 面）方向延伸"（He 2025 无 ecliptic 表述）。其余相符（L4V/L5V 缩写、非平面周期轨道、最优共振星座中表现突出）。可补：XZ 面对称、初始 z 振幅 1000 km、族周期 6.5391–6.5827 t*、最优构型取 6.28584 t*（基准 L2 NRHO 的 4 倍）。
14. **l2sh-l2nh**：并入 nrho **成立**——He 2025 原文即称 L2 southern/northern NRHOs。"偏心率极高、形状接近直线"非 He 2025 表述，并入时用 nrho 主词条已有的 Spreen 2021 形态界定替代。"近地区和综合区首选"相符但应补月球区（三区 Rank 1/2 均含 L2NH/L2SH）。可补族周期范围 1.3739–3.4155 t*。
15. **l4-planar-short-period-orbit**：定义相符但**出处需消歧**——是 Xu 2026《Adaptive robust cubature filtering…》（导航文），不是 Xu 2026《Optimization and deployment…》（星座文，该文称 L4 plan/vertical）。"周期短"无数字依据（导航文未给周期）；"周期轨道"为合理推断；"与 DRO 构成近共面导航构型"相符。可补：初值 z=vz=0 确在月轨面内；该文问题设定是近共面双星自主定轨（AFF-ARCKF）。
16. **planar-orbit**：基本相符（Klonowski 2024）。因果表述建议改为"Pareto 前沿中几乎没有平面观测者（GEO 除外），因为平面观测者观测平面转移轨迹时受太阳指向约束存在空窗"。注意与 l4-planar-short-period-orbit、He 2025 的 L4P/L5P 是同一类轨道的不同称呼，合并时在 tadpole 主词条内统一。
17. **horseshoe-orbit**：保留独立词条，需局部重写，见 §3.3（SPO 演化说无据、Jacobi≈2.5 矛盾、"稳定性较好"推理不成立、"完整周期轨道家族"无出处；补 M&D 经典定义与 Janus/Epimetheus 实例）。
18. **earth-moon-triangular-libration-point-transfer-network**：本轮只看不并。定义"以月球为中枢，连接地球、近地轨道与三角平动点区域"与 C&H 2018 相符（"the Moon is the central hub"，lunar DRO 为枢纽轨道，双脉冲转移腿）。留待 transfers 族处理。

## 5. 主词条建议大纲与术语变体表

### 5.1 lagrangian-point（平动点/拉格朗日点）

1. 定义：CR3BP 五个平衡点；三共线（Euler，L1/L2/L3）+两三角（Lagrange，L4/L5 等边三角形顶点）（M&O 2017 §4.3；M&D 1999 §3.5）。
2. 位置与距离：Qiao 2025 γ 值换算（L1 距月 5.8 万 km/距地 32.6 万 km；L2 距月 6.45 万 km/距地 44.9 万 km；L3 距地 38.2 万 km）。
3. 稳定性：共线点不稳定（实+虚特征值，平面鞍点；M&O Lemma 4.5.1；Qiao 2025 saddle×center×center）；三角点 μ<μ₁=0.0385（Routh 临界质量比）线性稳定，地月系 μ=0.01215 满足；非线性共振例外一句话（M&O/M&D/Gómez II）。
4. 零速度面与希尔区域：ℌ(C)={x: W(x)≥C}（M&O §4.4）；临界雅可比值序列 C_L1>C_L2>C_L3>C_L4,5（M&D §3.6）；颈部通道——C=C₁ 相接、C 稍低于 C₁ 打开 L1 走廊（彭张 2016）。
5. L1 转移走廊小节：必要非充分、连接弧段 PQ、近月点第三次脉冲/自动俘获、362.85 天算例、载人评价按原文口径（彭张 2016）。
6. L1/L2 gateway 小节：Bosanac 2026 的描述性通道用语与聚类行程标签；注明与流形概念在该文未挂钩。
7. 应用价值重写：共线点不稳定但可低代价维持 halo/quasi-halo/Lissajous，流形用于低能转移（V&A 2014 §I）；任务实例（鹊桥 L2 halo、ARTEMIS、Capstone，Qiao 2025 引言）。删"L2 六十万公里"与"L4/L5 太阳观测"两句。

### 5.2 libration-point-periodic-orbit（平动点周期轨道 LPO）

1. 定义：狭义=三体问题中不稳定周期轨道的子集（Ren 2012）；广义统称=围绕共线或三角平动点的周期轨道族（Qiao 2025、He 2025 族谱支撑）。
2. 共线点的鞍-中心结构与族谱：periodic/saddle 行为、稳定/不稳定流形、同能量零代价转移（Ren 2012 及其转引 Koon 2000）；saddle×center×center（Qiao 2025）；族谱 Lyapunov/vertical Lyapunov/halo/quasi-halo/Lissajous/quasi-Lyapunov（Qiao 2025），L1–L3 各族与 L4/L5 planar/vertical（He 2025）。
3. 三角点族指针：链到 tadpole-orbit 主词条（短/长周期、垂直族）。
4. 四体模型中的替代：平动点→周期轨道（dynamical substitute）、周期轨道→不变环面（Ren 2012，B4BP）。
5. 编目应用小节：Qiao 2025 六特征参数方法、Poincaré 底图、贝叶斯识别、SSA 背景。

### 5.3 tadpole-orbit（蝌蚪轨道/L4–L5 族）

1. 经典蝌蚪轨道：M&D §3.9 定义、临界蝌蚪（θmin=23.5°、止于 L3 方位）、δr 判据；与马蹄的分界（C_J=C_L3），链到 horseshoe-orbit。
2. L4/L5 周期轨道族：两个模态频率 ω₁≈0.9546/ω₂≈0.2979、近 3:1 共振（Gómez II 转 Breakwell–Pringle）；短周期族（极限 28.6 天、单调减小、B₄₅ 分岔接 L3 Lyapunov 族）与长周期族（极限 91.6 天）（Gómez II）；垂直族（He 2025）。
3. SPO 小节：C&H 2018 代表轨道 28.3488 天、L4/L5 镜像对称、practically stable 无可用流形；He 2025 的 L4P/L5P 与 Xu 2026 导航文的 "L4 planar short-period orbit" 是同一族成员的不同称呼。
4. planar-orbit 小节：Klonowski 2024 SDA 语境——平面观测者在 Pareto 前沿稀少、太阳指向约束空窗。
5. L4V/L5V 小节：He 2025 垂直轨道定义（z 向、XZ 对称）、共振星座中的表现。
6. 稳定性一句话：三角点线性稳定（μ<μ₁，§1.2），但具体轨道成员稳定性各异（短周期族至 B₄₅ 失稳等）。

### 5.4 nrho（已有主词条，并入 l2sh-l2nh）

在"应用"或"术语变体"处加一小节：He 2025 的 L2NH/L2SH 即 L2 北/南族 NRHO（族周期 1.3739–3.4155 t*），在共振导航星座三区（近地/月球/综合）Rank 1/2 中均出现（综合区 Rank 1：L2NH-L2SH-L4V-L5V）。"偏心率极高、形状接近直线"的表述以主词条已有的 Spreen 2021 形态界定为准。

### 5.5 术语变体表

| 变体 | 所指 | 出处 |
|------|------|------|
| 平动点 / 拉格朗日点 / libration point / Lagrangian point | 同一组五个平衡点；libration point 为力学界称谓，Lagrangian point 为工程界常用 | M&O 2017 §4.3（"such equilibrium points are called libration points"） |
| 共线平动点 / collinear libration point / collinear Lagrangian point | L1/L2/L3；Euler 解 | M&O 2017；Bucchioni 2021 用后者 |
| 三角平动点 / triangular libration point / equilateral (Lagrange) point | L4/L5；Lagrange 解 | Gómez II；V&A 2014 用 equilateral |
| LPO / libration point orbit / libration point periodic orbit / 平动点轨道 | 平动点周期轨道统称；Ren 2012 取其狭义（不稳定子集、平面） | Ren 2012；Qiao 2025 |
| 共线平动点轨道 / collinear Lagrangian point orbit | 绕 L1/L2(/L3) 的周期或拟周期轨道（Lissajous、halo 等） | Bucchioni & Innocenti 2021 |
| L1 走廊 / L1 转移走廊 | C≤C₁ 时 L1 处打开的零速度面通道 | 彭张 2016（"地月 L1 点走廊的转移"） |
| L1/L2 gateway（门廊/门户） | L1/L2 附近连接月球附近与外部区域的通道；聚类行程标签 | Bosanac 2026 |
| 蝌蚪轨道 / tadpole orbit | 绕 L4 或 L5 的小幅共轨天平动，止于 L3 方位 | M&D 1999 §3.9 |
| 马蹄轨道 / horseshoe orbit | 包围 L4/L5、绕 L3/L4/L5 的大尺度共轨天平动 | M&D 1999 §3.9/3.11 |
| 短周期轨道 / SPO / short period orbit / L4(L5) planar short-period orbit / L4P/L5P | 三角点短周期族轨道；周期约 27.3~28.6 天随振幅变化 | C&H 2018；Gómez II；Xu 2026 导航文；He 2025 |
| 长周期轨道 / long period orbit / L4(L5) Long | 三角点长周期族轨道；极限周期约 91.6 天 | Gómez II；Klonowski 2024 |
| 三角点垂直轨道 / L4V/L5V / vertical orbit | 三角点垂直族（z 向非平面周期轨道） | He 2025 |
| L2NH/L2SH | L2 北/南族 NRHO | He 2025（并入 nrho） |
| Hill 区域 / Hill's regions | 雅可比常数界定的可达区域 {W(x)≥C}；勿与 Hill 月球方程混淆 | M&O 2017 §4.4、§4.8.1 |
