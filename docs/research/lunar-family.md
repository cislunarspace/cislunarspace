# 月心轨道一族词条合并前调研笔记

调研日期：2026-08-07。目的：核对「月心轨道」一族 14 个现有词条的定义是否与原始论文相符，为合并成 2 个主词条（moon-centered-orbit、qso-quasi-satellite-orbit）及若干归并动作做准备。体例仿 docs/research/low-energy-family.md。

调研范围：资料库中 12 篇论文的 md 正文（`hybrid_auto/<目录名>.md`），任务清单的优先论文全部在库并逐篇核对。先例笔记已核对的结论直接引用：V&H 2014 的面外共振轨道（resonant-family.md §3 与第 9 条）、郑越 2023 §3 的转移数字（low-energy-family.md §1.3）。

论文简称：

- He 2026 = He 等 2026, *A review of cislunar constellation design and optimization*
- Fu 2024 = Fu 等 2024, *A high-order target phase approach for the station-keeping of periodic orbits*
- Giancotti 2012 = Giancotti, Pontani & Teofilatto 2012, *Lunar capture trajectories and homoclinic connections through isomorphic mapping*
- Q&O 2023 = Qi & Oguri 2023, *Analysis of Autonomous Orbit Determination in Various Near-Moon Periodic Orbits*
- Gómez 2001 = Gómez 等 2001, *Dynamics and Mission Design Near Libration Points, Vol. I*（共线平动点卷）
- Ross 2022 = Ross 等 2022, *Dynamical Systems, the Three-Body Problem, and Space Mission Design*
- 彭祺擘 2016 = 彭祺擘和张海联《载人登月地月转移轨道方案综述》
- Alessi 2011 = Alessi, Gómez & Masdemont 2011, *Low-energy transfers in the Earth–Moon system*
- Folta 2015 = Folta 等 2015, *An Earth–Moon system trajectory design reference catalog*
- Grebow 2008 = Grebow, Ozimek & Howell 2008, *Multibody orbit architectures for lunar south pole coverage*
- V&H 2014 = Vaquero & Howell 2014, *Leveraging resonant-orbit manifolds to design transfers between libration-point orbits*
- Cui 2025 = Cui 等 2025, *Two-impulse transfers from lunar distant retrograde orbits to resonant orbits*
- 郑越 2023 = 郑越和赵敏《基于大幅值 Lyapunov 轨道稳定流形的地月转移方法》
- 刘磊 2008 = 刘磊等《多约束条件下的地月转移轨道设计》
- 周净扬 2007 = 周净扬和周荻《月球探测器软着陆精确建模及最优轨道设计》

## 1. 月心轨道的分类学

### 1.1 He 2026 的三分：DRO / DPO / LoPO

He 2026（§2.2.2）采用 Guzzetti 的周期轨道分类（其文献[70] = Guzzetti, Bosanac & Howell 2014），把地月三体周期轨道分三类：平动点轨道、共振轨道、月心轨道（Moon-centered orbits）。月心轨道一节原文："Moon-centered orbits include orbits that encircle the Moon and can be obtained from the initial guesses of two-body orbits around the Moon, whether prograde or retrograde. Typical Moon-centered orbits include distant retrograde orbits (DROs), distant prograde orbits (DPOs), and low prograde orbits (LoPOs), which correspond to the f, g, and g′ families in Hénon's nomenclature [72], respectively"（[72] = Hénon 1969, *Numerical exploration of the restricted problem. V. Hill's case*）。三族几何：DRO 在旋转系中绕月逆行，振幅增大时从近月扩展到 L1/L2 以外；DPO 在旋转系中呈"8"字形，近月点近月、远月点沿 y 向延伸；LoPO 为顺行近圆低振幅轨道，振幅增大时远月点沿 x 向延伸。词条 moon-centered-orbit 的定义与此逐句相符。佐证：Folta 2015（§"Application"前综述段）用同样的三分——"three Moon-centered families of orbits: direct retrograde orbits, distant prograde orbits and low prograde orbits"，并把周期轨道分平动点/共振/地心/月心四类。注意 Folta 原文作 "direct retrograde orbits"（与通行的 distant retrograde orbits 混写，同指 DRO）。

### 1.2 工程用法：LLO 与月球停泊轨道

月心轨道的工程成员是低月轨道（LLO）/月球停泊轨道，属二体近圆轨道而非三体轨道族。郑越 2023（§1.2）："如果选择距离月球表面 100 km，即半径为 R_M = 0.00478148 的近月轨道作为月球停泊轨道"，与之相切的 L1 大幅值 Lyapunov 轨道初态 X_d = [0.983068, 0, 0, −2.35925]ᵀ，探测器在切点（x 轴上）经切向减速脉冲从 Lyapunov 轨道进入停泊轨道（§3 完整转移 3920.7 m/s、62 天，见 low-energy-family.md §1.3）。词条 lunar-parking-orbit 与此一致，但其定义开头"环绕月球的近圆形轨道，用于在转移终点等待或执行后续任务"是泛化表述，郑越原文只给"100 km 近月轨道作为月球停泊轨道"的选取与相切机制。彭祺擘 2016（§3.2–3.3）另有 200 km 近地停泊轨道/环月目标轨道的算例语境。

### 1.3 lunar-periodic-orbit：Giancotti 2012 的同构映射表述

Giancotti 2012 在平面 CR3BP 中引入圆柱同构映射：给定雅可比常数 C 时，状态 (x, y, v_x, v_y) 可约化为 (x, y, γ)（γ 为速度方向角），再经式(12)映到三维 (X, Y, Z) 空间；L1 Lyapunov 轨道的稳定/不稳定流形在该空间中呈管状，管截面（"disk"）的重复相交给出同宿连接与捕获轨道的拓扑定位（配合 Conley 定理）。§4.5 把搜索限于 C = 3.185 的单圈月球周期轨道（lunar periodic orbits，文献例见 Broucke 1968），与 L1 不稳定流形放在同一 (x, y, γ) 相空间比较；因同一 C 下同 (x, y) 点速度大小相同，最优转移即"只转动速度矢量、不改变大小"的最小脉冲：Δv = 2v·sin(Δγ/2)。结果：orbit 1 最小脉冲 924.38 m/s，orbit 2 最小 **18.71 m/s**（Fig. 16 给出从 L1 Lyapunov 轨道沿不稳定流形进入 orbit 2 的全程轨迹）。

词条 lunar-periodic-orbit 的核对结论：主干准确——"平面圆形限制性三体问题中绕月球运行的闭合轨道""圆柱同构映射下可与不变流形置于同一相空间中分析""极小速度增量从 L1 流形转入"均有出处。两处宜改：(a) "通过计算流形与月球周期轨道在 (x, y, γ) 空间中的交线"——原文是找周期轨道与流形的**交点集**（解方程组得 (x_kj, y_kj)）并沿交点集取最小脉冲，且 orbit 2 只是"接近"流形（approaches）而非相交，"交线"说法偏重；(b) 应写明用的是 L1 Lyapunov 轨道的**不稳定**流形（离开 L1 前往月球方向），且 C 固定为 3.185。

### 1.4 near-moon-periodic-orbit：统称范围比"月心"宽

Q&O 2023（§2.2）："Orbits from the families of L1/L2 Halo, L1/L2 Lyapunov, Distant Retrograde Orbit (DRO), Butterfly, and Low Prograde are generated. The orbits are chosen by their proximity to the Moon as Moon-based optical navigation is a key component of the analysis"。即"近月周期轨道"是该文按**离月远近**选出的统称，成员含平动点轨道族（Halo、Lyapunov、Butterfly）与月心轨道族（DRO、LoPO）两类，与 He 2026 分类学中的"月心轨道"不是同一层概念。词条 near-moon-periodic-orbit 的定义（"统称，包括 Halo 轨道族、Lyapunov 轨道族、远距逆行轨道、蝴蝶轨道和低顺行轨道等"）与 Q&O 2023 一致；几何特征影响定轨性能一句亦与原文相符（近月点/远月点距差决定月球视直径变化范围，进而决定 OPNAV 性能，见 Q&O §6.3–6.4）。

**合并时的层次处理建议**：near-moon-periodic-orbit 不是月心轨道的子类，而是跨类统称。并入 moon-centered-orbit 主词条时建议放在"相关统称"位置并互指，不要把 Halo/Lyapunov/Butterfly 写进月心轨道定义。

## 2. QSO（准卫星轨道）

### 2.1 Fu 2024 的表述

Fu 2024 的语境是火星-火卫一（Phobos）三体系统的站保方法验证，不是地月系。§4.1 原文："Ever since their discovery in 1969 [25], QSOs have been a major research focus owing to their **linear stability and close proximity to the secondary body** in a restricted three-body system. QSOs have been listed as candidate science orbits for multiple deep-space missions with **close operations to celestial bodies**, including ESA's DePhine and NASA's JIMO. Furthermore, five QSOs at low altitudes around Phobos are under extensive investigation by JAXA and are qualified for the proximity phase in the upcoming MMX mission." [25] = Hénon 1969（A&A 1:223–238，Hill 情形周期轨道）。§4.3：QSO 的线性稳定性以稳定指数 ν_i = (λ_i + 1/λ_i)/2 度量，"QSOs remain linearly stable across all altitude values because the maximum norm of their stability index is found to be no greater than one"；候选 QSO-La/Lb/Lc 的火卫一近点距低至 20–30 km 量级（Table 1）。站保结果：MMX 基准 QSO 月机动预算约 1 m/s（高保真模型）。

### 2.2 与 DRO 的关系

两条线索在 Hénon 1969 汇合：Fu 2024 把 QSO 族的发现归于 Hénon 1969（其文献[25]）；He 2026 把 DRO 对应于 Hénon 命名法中的 **f 族**（其文献[72] 同为 Hénon 1969）。即 QSO 与地月系 DRO 是同一族周期轨道（Hill 问题中绕次主天体的远距离逆行轨道族）在不同应用社区的名字——小天体探测社区（火卫一 MMX、Deimos DePhine、木卫 JIMO）称 QSO，地月社区称 DRO。词条合并时可据此写一句"在地月系中对应的轨道族即 DRO（见 moon-centered-orbit / dro 主词条）"，这是两篇论文共同支撑的推论，非单一论文原句，措辞上应标明。

### 2.3 词条核对

qso 与 qso-quasi-satellite-orbit 两条**标题、定义、参考文献完全相同**（Fu 2024），确认为重复词条，合并无争议。定义三要素核对："线性稳定"✓（§4.1、§4.3）；"距离副天体很近"✓（"close proximity to the secondary body"，可到极低高度）；"适用于小行星探测等近距离操作任务"——原文是 "candidate science orbits for multiple deep-space missions with close operations to celestial bodies"，举例 DePhine（火卫二）与 JIMO（木卫），MMX 目标是火卫一。任务对象全是**天然卫星**而非小行星，"小行星探测"措辞偏窄，建议改为"小天体（卫星等）近距离探测任务"。"限制性三体问题中的一类周期轨道"✓（CRTBP 中生成的周期轨道族）。

## 3. rro 考证结论

词条 rro 现名"反射共振轨道（Reflection Resonant Orbit, RRO）"，定义"三维共振轨道的一种，关于 x-z 平面对称，类似平动点轨道中的晕轨道，通过分岔理论从平面共振轨道产生"，参考文献字段仅写"Cui 等 - 2025"。

**全库检索结论**："RRO"/"remote retrograde"/"resonant retrograde"/"reflection resonant" 在整库 md 正文中**仅出现于 Cui 2025**。库内无 remote retrograde orbit 或 resonant retrograde orbit 用法。

Cui 2025（§II.D）原文："According to the bifurcation theory, when a pair of eigenvalues of the monodromy matrix of periodic orbits collides on the real axis at 1, a tangent bifurcation occurs, accompanied by the generation of three-dimensional (3D) orbits. ... By employing the Mirror Theorem, it can be observed that one type of orbit is symmetric about the x−z plane, termed as a **reflection resonant orbit (RRO)**, and is analogous to halo orbits in libration-point orbits (LPOs). Another type of orbit is symmetric about the x axis, termed as an **axial resonant orbit (ARO)**, and is analogous to axial orbits in LPOs." Cui 2025 以 Az（z 振幅）为三维共振轨道的特征参数，算例为 3:2 RRO、3:1 RRO（Az = 0.2）及对应 ARO，并计算 2:1 DRO → 3:2/3:1 RRO/ARO 的非平面双脉冲转移（最优均为月借力 LGA 转移，如 2:1 DRO→3:2 RRO 全程 88.1 天、132.2 m/s）。

**鉴定**：词条内容准确，"RRO = reflection resonant orbit"是 Cui 2025 的命名，不是臆造。它与 V&H 2014 的 **out-of-plane resonant orbit 同指**——V&H 2014（resonant-family.md §3 已核对）：平面共振族经 z 向微扰+xz 平面对称修正分岔出"out of plane resonant orbits, symmetric across the xz plane"，非对称三维者称 axial resonant orbits。Cui 2025 只是给同一对象配了 reflection/axial 的新名（其引的 [44][45][46] 即分岔理论与 Mirror Theorem 文献）。**合并建议**：rro 并入 resonant-orbit-family 主词条的"面外共振轨道"义项（该义项已核对），注明同义术语链：out-of-plane resonant orbit（V&H 2014）= reflection resonant orbit / RRO（Cui 2025），对应 axial resonant orbit / ARO；旧 URL 重定向到该锚点。词条参考文献"Cui 等 - 2025"需写全篇名。

## 4. 保留四条的快速核对

- **rescue-orbit（Alessi 2011 §5，全部符合）**。原文：将 L1/L2 halo 与 Lissajous 轨道的稳定不变流形数值延拓至月面，分析从月面哪些区域可沿稳定流形到达目标平动点轨道、出发角、出发速度与转移时间。"the modulus of the velocity at the departure from the surface of the Moon is almost equal to the escape velocity of the Moon (about 2.4 km/s), as expected from the conservation of the Jacobi constant"；"For direct trajectories, the transfer time is approximately of 10 days"；出发区在月面分布不均（Fig. 3）；绕月圈数增加可扩大救援区域，"if we allow of at least 3 minima [原文如此，疑为 OCR 讹误，义为至少 3 圈], one can reach the halo families departing from any point of the surface of the Moon"。词条四点（2.4 km/s、约 10 天、分布不均、至少 3 圈全覆盖）均有出处。定义首句"利用平动点轨道（Halo 或 Lissajous 轨道）的稳定不变流形"准确。
- **storage-orbit（Folta 2015，符合，可补具体结论）**。Folta 2015 以"为天基基础设施（推进剂仓库或长期驻留舱）选存储轨道"为参考目录的示范应用。选择标准：维持数年 → 年站保代价小；可从 L1/L2 Lyapunov 轨道（staging）到达 → 雅可比常数与 L1/L2 Lyapunov 族相当；周期不能太大（L4/L5 长周期族约 107 天被排除，"rendezvous opportunities to these orbits may be difficult"）；几何上需近月通过以支持月面活动（3:1、2:1 共振族因此被排除）。过滤后平面 DRO 族胜出："larger DROs with periods greater than 16 days can be characterized both by low transfer costs and low station-keeping costs"；面向载人可达（21 天往返限制 → 周期 ≤ 10 天）最终选定周期 **9.39 天、JC = 2.97** 的 DRO，LEO 直达 5.76 天。词条定义三点（年维持速度增量小、可达性、周期/几何不限制窗口）与"DRO 是典型候选"均有出处。另：Folta 2015 引文献[18]指出 DRO 在小行星取回任务概念中已被当作长期存储轨道候选。
- **pole-sitter（Grebow 2008，半符合）**。词条后半句有出处：Grebow 2008 研究用**两颗**卫星的平动点轨道组合（L1+L2 halo、L2 butterfly+L2 halo 等等周期组合）实现月球南极的连续覆盖（"architectures for continuous coverage of the south pole of the moon with only two spacecraft"），设施设 Shackleton 坑（89.9°S）。词条前半句"在地月系统中，极点驻留需要持续推力来对抗引力和离心力的合力"在 Grebow 2008 **无出处**——全文仅引言一处提到 pole-sitter：NASA Living with a Star 计划曾考虑地球南北极的 "pole-sitters" 用于对地大气持续监测，"Such ideas may be adaptable to the moon for feasible south pole architectures"；文中无 thrust/sail/acceleration 相关讨论。pole-sitter 需持续推力（或光压）的概念出自 Driver 1980 与 McInnes 等的 displaced orbit 文献，**不在库**，该句只能标注为无库内出处的背景表述。
- **lunar-soft-landing-trajectory（刘磊 2008，参考文献错配）**。刘磊 2008 全文为**多约束（测控、光照、飞行时间、入轨点）下的地月转移轨道设计**，无"软着陆""蚁群""庞特里亚金""附录"任何内容（仅引言提到着月轨道是探月五段轨道之一）。词条所述"论文附录引用的研究将软着陆轨迹优化问题参数化……蚁群算法……与庞特里亚金最大值原理的结果相当接近"**与所引文献不符，且库内检索"蚁群"仅 5 篇命中（宋亮俊 2025、张云燕 2014、张汉清 2011、李言俊 2015、陈虓 2025），均非软着陆轨道优化文献**——该句出处无法落实。库内与"庞特里亚金最大值原理解软着陆"对应的文献是周净扬 2007（三维精确模型、燃耗最优、极大值原理求推力开关曲线与方向角、扫描法解两点边值）。建议：参考文献改周净扬 2007，删去"蚁群算法"与"论文附录"两处无出处表述；"从环月轨道下降到月面、速度降至接近零"的常识性定义可保留。

## 5. 逐条勘误（14 条全过）

1. **moon-centered-orbit（拟主词条）**：与 He 2026 §2.2.2 一致，准确。两处工程问题：(a) 参考文献字段填的是本地绝对路径（/home/.../He 等 - 2026 ...），与 resonant-family.md 记录的同款 bug，应改为论文名；(b) "可从月球二体问题的初值猜测得到"出自原文 "obtained from the initial guesses of two-body orbits around the Moon, whether prograde or retrograde"，宜补"顺行逆行均可"。可补 Folta 2015 佐证与三族几何描述（DRO 扩至 L1/L2 以外、DPO "8"字形、LoPO 近圆）。
2. **lunar-parking-orbit**：与郑越 2023 §1.2 一致（100 km 近月轨道、相切于 x 轴、切向减速脉冲）。一处措辞：词条"从稳定流形进入停泊轨道"——郑越的机制是稳定流形→渐近接近 Lyapunov 轨道→切点减速进入停泊轨道，严格说减速脉冲发生在 Lyapunov 轨道与停泊轨道的切点上；且郑越 §1.2 先说"通过一个切向速度脉冲可以使探测器直接从 Lyapunov 轨道进入月球停泊轨道"。表述可接受，建议写成"经稳定流形渐近抵达切点后切向减速进入"。
3. **lunar-periodic-orbit**：主干与 Giancotti 2012 一致（§1.3）。两处宜改："交线"→"交点集并沿其取最小脉冲"；补"不稳定流形、C = 3.185、单圈轨道、orbit 2 仅 18.71 m/s"。
4. **near-moon-periodic-orbit**：与 Q&O 2023 一致，准确。合并时作"跨类统称"处理（§1.4），不与月心轨道混层。
5. **qso**：与 Fu 2024 一致（§2.3）。"小行星探测"建议改"小天体/卫星近距离探测"；补"1969 年发现（Hénon）"与"与地月 DRO 同族"。
6. **qso-quasi-satellite-orbit（拟主词条）**：与 qso 完全重复，保留其一即可。
7. **rro**：内容与 Cui 2025 一致、术语真实存在（§3）。参考文献写全 Cui 2025 篇名；并入 resonant-orbit-family 的面外共振轨道义项，注明 = V&H 2014 的 out-of-plane resonant orbit。
8. **translunar-station**：与 Gómez 2001 一致——§1.4.3 "a translunar station, i.e., a station near the L2 point of the Earth–Moon system in a halo orbit"（综述 Breakwell, Kamel & Ratner 1974 与 Ratner 1973 的站保工作）；§11.2.2 "placed near a halo orbit around the L2 point ... establish a permanent link between the Earth and a lunar basis placed in the hidden part"。词条定义（L2 附近 Halo 轨道、月背连续通信）准确。并入 halo-orbit 应用节时可补历史线：Apollo 时代即有在地月平动点放中继星的考虑（Gómez 2001 前言），Farquhar 1967 月球通信问题、Breakwell 等 1974 站保。注意"translunar"指地月 L2（月外方向）平动点，不是"转移轨道"。
9. **lunar-gateway-station**：与 Ross 2022 一致——§1.2 "A Lunar Gateway Station near L1 ... proposed as a 21st century hub for science and a jumping off point for deep space missions"；§5.5 "A Lunar Gateway Station at the lunar L1 has been proposed as a transportation hub"（引 Lo & Ross 2001、Condon & Pearson 2001）；站址轨道为 LL1 周围的 halo 或 Lyapunov 轨道（"a halo orbit around LL1 provides an ideal location for a 'service station' or a 'hub'"）；日地 L1/L2 与地月 L1/L2 能量差仅约 50 m/s（按机动速度计）是枢纽可行性的物理基础；LL1→EL2 转移示例仅需 14 m/s 确定性机动、约 40 天。**须加注区分**：这是 2001 年 Lo & Ross 的 LL1 提案，与 NASA 后来实际的 Gateway（9:2 近直线 halo 轨道，即 NRHO，见 resonant-family.md §4）不是同一方案；词条"NASA提议"可成立（Ross 2022 以 NASA 需求行文）。
10. **lunar-ballistic-trajectory**：与彭祺擘 2016 §3.3 逐句相符——日地系与地月系 L2 附近流形相交、先算两个 CR3BP 的 Poincaré 截面再几何拼接、完整力模型下数值改进（彭文归于 Koon 等的设计方法）、最小能量约 3787 m/s（且注明真实 WSB 轨道略高于此值）、转移时间约 100 天（算例 102.04 天、3847.70 m/s、200 km→200 km）、Belbruno 等最先给出（其文献[26] = Belbruno 1987, AIAA-87-1054）、Koon 等 2001 用不变流形解释机制。彭文明确："这类轨道通常称为月球弹道转移轨道（Lunar Ballistic Trajectories）或者弱稳定边界 WSB 转移轨道"——**该词条就是 WSB 转移的别名**，并入 low-energy-transfer（或 WSB 主词条）有据。可补彭文的任务适用性结论：对载人登月，因转移时间长、到达预定环月轨道还需额外脉冲，"采用大推力霍曼转移方式为宜"；词条"适用于时间要求不高的无人探测任务"与此自洽。
11. **rescue-orbit**：与 Alessi 2011 §5 一致（§4），保留不动，准确。
12. **storage-orbit**：与 Folta 2015 一致（§4），保留不动。可补最终推荐（9.39 天、JC 2.97 的 DRO）与筛选逻辑（排除 L4/L5 长周期族、3:1/2:1 共振族的理由）。
13. **pole-sitter**：保留不动，但"持续推力"句无库内出处（§4），建议标注或弱化；两星替代方案与 Grebow 2008 一致。
14. **lunar-soft-landing-trajectory**：参考文献错配（§4）——刘磊 2008 无软着陆内容；"蚁群算法""论文附录"两句无出处；建议改引周净扬 2007 并删改这两句。

总体判断：14 条中 11 条与论文一致或基本一致；明确问题 3 处——lunar-soft-landing-trajectory 的参考文献错配（刘磊 2008 → 应为周净扬 2007 类文献）与"蚁群算法"无出处、pole-sitter 的"持续推力"句无库内出处、moon-centered-orbit 参考文献字段填成本地绝对路径。qso/qso-quasi-satellite-orbit 确为重复词条。rro 考证落定为 Cui 2025 的 reflection resonant orbit，与 V&H 2014 面外共振轨道同指，并入共振族无概念冲突。lunar-ballistic-trajectory 经彭文原句确认为 WSB 转移别名，并入 low-energy-transfer 有据。

## 6. 主词条建议大纲与术语变体表

### 6.1 moon-centered-orbit（月心轨道）大纲

1. **定义与分类位置**：绕月运行、可由绕月二体初值猜测（顺行逆行均可）延拓得到的周期轨道（He 2026 §2.2.2）；在 Guzzetti 分类中与平动点轨道、共振轨道并列（Folta 2015 同）；对应 Hénon 1969（Hill 情形）的 f/g/g′ 族。
2. **三族成员**：DRO（旋转系逆行，振幅增大扩至 L1/L2 以外）、DPO（"8"字形，近月点近月、远月点沿 y 向）、LoPO（顺行近圆，远月点沿 x 向）（He 2026；Folta 2015）。
3. **工程成员 LLO/月球停泊轨道**：100 km 近月圆轨道作停泊轨道（郑越 2023 §1.2），与大幅值 L1 Lyapunov 轨道相切、切点切向减速进入；作低能转移终点（郑越 2023 §3：3920.7 m/s、62 天；low-energy-family.md §1.3）。
4. **月球周期轨道与流形相交的转移构造**：Giancotti 2012 的圆柱同构映射（(x,y,γ) 相空间）、C = 3.185 单圈月球周期轨道、与 L1 Lyapunov 不稳定流形的最小脉冲转移（orbit 2 仅 18.71 m/s）。
5. **相关统称**：近月周期轨道（near-moon-periodic-orbit，Q&O 2023 按离月远近的跨类统称：L1/L2 Halo、Lyapunov、DRO、Butterfly、LoPO；几何决定 OPNAV/GNSS 定轨性能）——注明它与"月心轨道"层次不同。
6. **术语变体表**：lunar-parking-orbit（月球停泊轨道，郑越 2023）、lunar-periodic-orbit（月球周期轨道，Giancotti 2012）、near-moon-periodic-orbit（近月周期轨道统称，Q&O 2023，互指但注明跨类）。lunar-ballistic-trajectory 不属本族（WSB 转移别名，入 low-energy-transfer）；translunar-station、lunar-gateway-station 入 halo-orbit 应用节；rro 入 resonant-orbit-family。

### 6.2 qso-quasi-satellite-orbit（准卫星轨道）大纲

1. **定义**：限制性三体问题中环绕次主天体的周期轨道族，1969 年发现（Hénon，Fu 2024 [25]）；以线性稳定（稳定指数 |ν| ≤ 1，全高度范围成立）与距离副天体极近（可到很低高度）为特征（Fu 2024 §4.1、§4.3）。
2. **与 DRO 的关系**：与地月系 DRO 同属 Hénon f 族（Fu 2024 [25] 与 He 2026 [72] 同指 Hénon 1969）——小天体探测社区称 QSO，地月社区称 DRO；互指 moon-centered-orbit 主词条。
3. **任务应用**：DePhine（火卫二）、JIMO（木卫）、MMX（火卫一，5 条低空 QSO 候选、近旁段工作轨道）等近距离操作任务（Fu 2024 §4.1）。
4. **站保性能**：MMX 基准 QSO 月机动预算约 1 m/s（TPhA 方法，高保真模型；部分候选可零机动）（Fu 2024 §4.3–§5）。
5. **术语变体表**：qso（与主词条完全重复，直接重定向）；准卫星轨道在中文文献无其他变体。

合并障碍评估：moon-centered-orbit 一支的三个并入条与主词条是"分类—工程用法—构造方法—统称"的层次关系，无定义冲突；唯一要防止的错位是把 near-moon-periodic-orbit 的平动点轨道成员（Halo/Lyapunov/Butterfly）误写进月心轨道定义。qso 一支无任何冲突。lunar-soft-landing-trajectory 的参考文献改引（刘磊 2008→周净扬 2007）是本轮唯一必须改文件的硬性问题。
