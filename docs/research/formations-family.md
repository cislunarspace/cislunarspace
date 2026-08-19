# 编队、星座与循环轨道一族词条合并前调研笔记

调研日期：2026-08-07。目的：核对「编队飞行」「星座」「循环轨道」三族 17 个现有词条的定义是否与原始论文相符，为合并主词条做准备。

调研范围：资料库中 13 篇论文的 md 正文（`hybrid_auto/<目录名>.md`），均完好可读。任务清单的 11 篇重点论文全部在库；按词条参考文献补读了 Grebow 2008（lunar-south-pole-coverage-orbit 的第二出处）与杨驰航等 2023 中文版（航空学报）——后者才是词条所引 "Yang, Fu & Zhang 2023" 的真实所指（符弘岚 = Fu），与英文版 Yang, Wang & Zhang 2023 是同一团队的两篇姊妹论文，内容不同，不可混引。

论文简称：

- Catlin 2007 = Catlin & McLaughlin 2007, *Earth–Moon Triangular Libration Point Spacecraft Formations*（CR3BP，地月 L4 编队）
- Yang 2023-EN = Yang, Wang & Zhang 2023, *Close relative motion on distant retrograde orbits*（DRO 相对运动三模式）
- 杨驰航 2023 = 杨驰航、符弘岚、张皓 2023,《远距离逆行轨道上的近距离自然及受控编队》，航空学报 44(5):326563（自然伴飞+圆形受控绕飞）
- 孙俞 2017 = 孙俞、张进、罗亚中 2017,《基于三体 Lambert 算法的平动点交会轨道设计》
- 陈诗雨 2024 = 陈诗雨等 2024,《近月空间星座轨道设计方法》，中国空间科学技术
- Trabacchin 2025 = Trabacchin & Colombatti 2025, *Design of an Orbital Infrastructure to Guarantee Continuous Communication to the Lunar South Pole Region*（Aerospace 12:289）
- Grebow 2008 = Grebow, Ozimek, Howell & Folta 2008, *Multibody orbit architectures for lunar south pole coverage*（JSR 45(2)）
- Ozimek 2010 = Ozimek & Howell 2010, *Low-thrust transfers in the Earth–Moon system…*（南极覆盖为转引 Grebow 2008）
- Gao & Hou 2020 = *Coverage analysis of lunar communication/navigation constellations based on halo orbits and DROs*（先例 halo-family.md 已部分核）
- 彭坤杨雷 2018 = 彭坤、杨雷 2018,《利用地月间空间站的载人登月飞行模式分析》，宇航学报 39(5):471–481
- Liang 2016 = Liang 等 2016, *The classification of cislunar trajectories and its applications in the Earth–moon system*
- DeCoster 2026 = DeCoster 等 2026, *Building the future of cislunar surveillance: In-space assembly and manufacturing-enabled sensor architectures*
- Folta 2014 = Folta 等 2014（平动点轨道站保，先例 halo-family.md 已核，本轮复核 nearly planar 措辞）

词条引用但**不在库**、无法核对的文献：Howell & Marchand 2005（*Natural and non-natural spacecraft formations near the L1 and L2 libration points*, Dynamical Systems 20:149–73——formation-flight 词条第二出处；库内同作者的 Marchand & Howell 2005 JGCD《Control strategies…》是另一篇）、张文博等 2015（《地月循环轨道动力学建模与计算研究》，宇航学报 36(5)——彭坤杨雷 2018 的文献[17]，"本质是周期轨道"句与三种计算方法归纳的出处）、Casoliva 等 2010（Liang 2016 共振定义与 14 天数字的原始出处）、Barden & Howell（Folta 2014 文献[19]，准周期区域细节）。

## 1. 编队飞行

### 1.1 三角平动点编队（Catlin 2007）

论文在 CR3BP 下推导地月 L4 附近、以主星为中心的相对运动方程，把相对运动分解为长周期与短周期分量，靠初值选择滤掉其一，再分别设计编队。逐句核对结果：

- **三种运动形态与轴比**。双周期并存时相对运动是复杂三维曲线，"The axis ratio is approximately 16/5 and the period is 458 days"，不适合编队；消去一个频率后成为纯椭圆：短周期分量半长轴：半短轴 ≈ 2、周期约一个月；长周期分量"the ratio (1/ᾱ₁) is close to 16/3, and the period is close to 92 days"。**词条 circular-formation 的"长周期运动的椭圆轴比约为 16/3"与原文一致**——注意是半长轴：半短轴，且与双周期情形的 16/5 不是同一个数。
- **天然圆编队不可能**。"The natural circular formation, however, turns out to be impossible to achieve for long period motion at L4; all long-period motion…occurs in an in-plane elliptical orbit with the ratio of semimajor to semiminor axes of approximately 16/3"——要圆需轴比为 1，或面外频率等于面内频率使相对运动面可偏转；共线点可做平面近似（s_z≈面内频率，见 Collange & Leitner），但三角点长周期运动 s_z 与 s₁ 相差太远。**与词条一致**。
- **短周期平面近似+主动控制**。短周期频率 s₂ 与 s_z=1 相差不到 0.05，可人为令 s=1 做平面近似，得倾角约 60° 的圆（"tilted…approximately 60 deg for the Earth–moon system"）；但"the planar approximate model is not nearly sufficient to describe the motion…additional control will be required to maintain a circular formation"，也可每圈末施加脉冲重置。**词条"仅在短周期运动中通过平面近似可近似得到，但需要主动控制来维持"与原文一致**。
- **parallel 编队定义**。"all satellites in the cluster have the same out-of-plane component at all times, but are offset in the in-plane (ξ and η) directions…equivalent to the introduction of a phase shift"——**词条"面内方向保持固定相位偏移、面外分量时刻相同"是原文原意的直译**。另有 leader–follower 编队（沿同一轨迹一前一后），现无对应词条。
- **parallel 对初值误差最宽容**。敏感性分析（Table 3，以 30 天内相对位置误差 <10% 或编队维持 <10 m 为约束）：parallel 的编队维持约束只要求初值精度 1000%、即 26 km 与 1 m/s，"changes in the initial relative state cause little departure from the parallel nature of the formation. The parallel formation thus appears to be the most robust of the formations designed here"。**词条"对初始条件误差最为宽容，是鲁棒性最好的自然编队形式"成立**。注意两件事不要混：(a) 这里的"鲁棒"指对入轨初值误差的宽容度；(b) 同一篇论文里 parallel 的解析模型与数值积分之间的误差反而是各构型中最大的（2.6%/130 m），那是线性化模型精度问题。
- **摄动与背景**。太阳点质量引力最显著（3 年内相对距离误差峰值约 110 km@2.82 年）、太阳光压次之（约 14 m@10 个月）、地球扁率 J2 可忽略（毫米级）；受摄下航天器仍会无限期绕平动点运行，每月一次小推力足以维持构型。引言："no triangular points have yet been reached by a spacecraft"（2007 年时点）、"the cost of reaching the triangular points is significantly higher than reaching the collinear points"；三角点价值为"unobstructed view of deep space objects…ideal for monitoring radiation and magnetic fields"，及未来空间站/中转站选址——**词条 triangular-libration-point-formation 的"尚无航天器实际到达""到达成本较高""深空观测、辐射监测"有据，"中继通信"无原文依据**。"与共线平动点相比，三角点附近存在稳定的准周期轨道族"是词条作者的概括，原文只有"三角点附近存在有界准周期轨道"（引 Blackburn 等）。

### 1.2 DRO 近距离相对运动三模式（Yang 2023-EN）

论文在 LVLH 系对参考 DRO（周期 13.64 天，与月球公转 2:1 共振）做线性化，经状态转移矩阵与 Floquet 分解得到六个独立解，剔除发散解 x₄ 后得五个有界解，组合为三种模式（§3.2，式 29–30）：x(t) = k₀x_pe + k₁x_p + k₂x_n。逐句核对：

- **planar periodic mode（平面周期模式）**：x_pe = x₃（周期解）"corresponds to the case that the deputy spacecraft is located on the reference DRO with a phase shift"——**是副星在参考 DRO 上相位偏移，现词条写成"主航天器在参考 DRO 上做相位偏移"，主语错了**。该模式"can only provide trajectories located on a single side (positive or negative y_L-axis) of the chief spacecraft"，"appropriate to be the parking orbit of rendezvous and docking missions"——词条"单侧""停泊轨道"两点准确。摘要中该模式又称 "natural periodic mode"，可作同义变体。
- **planar quasi-periodic mode（平面准周期模式）**：x_p = c₁x₁ + c₂x₂，两者各由两个周期分量合成（ê 周期为 T，调制项周期 2πT/α₁）；轨迹"orbits the chief spacecraft clockwise"，"within a bounded hallow [hollow] area"（有内外边界，由不变曲线多边形并交求得）；是"the basic mode to support the fly-around formation"。**词条四点（两周期分量、绕主星旋转、有界空心区域、绕飞编队）全部相符**。需补的限定：准周期运动长期几何不规则，"impossible to design a natural relative trajectory with a regular geometry during a long-time evolution"，故工程绕飞 = 一个 DRO 周期内的自然段 + 转移段拼接，每圈仅两次脉冲；1 km 尺度编队每圈燃耗 <1 cm/s（最小 1.57 mm/s）。
- **normal quasi-periodic mode（法向准周期模式）**：x_n = c₅x₅ + c₆x₆，"only has z-component"，两个周期分量；"can be applied to extend the planar formations to 3D cases""provide normal component for 3D formations"。**词条相符**。需补限定："cannot support a formation separately"——只能叠加在平面编队上，不能单独成编队。
- **安全性表述**（关系 formation-flight 主词条）：原文对有界性的表述是"The boundedness is the essential requirement to prevent the drift and collision between spacecraft"，有界解集本身就包含 1 个周期解 + 4 个准周期解，剔除的只有发散解 x₄（对应邻近不同周期的 DRO）。**现 formation-flight 词条"仅周期解分量能保证长期安全有界，对其他基础解分量的引入可能导致构型破坏或碰撞风险"与原文相悖**——准周期分量同样有界且被用于绕飞设计。安全性在原文中以"最小距离越大越安全"体现。

### 1.3 DRO 自然与受控编队（杨驰航 2023，中文版）

这是词条 controlled-fly-around-formation 所引 "Yang, Fu & Zhang 2023" 的真实出处（符弘岚）。与英文版分工不同：英文版做三模式解析与"自然段+转移段"绕飞，中文版做自然伴飞与**圆形受控绕飞**。

- **自然伴飞编队**：以有界解集中的周期解 x₃(t) 为基础，"可形成一条小范围的局部伴飞轨道"，副星位于主星前方或后方几米至几百千米，适用于交会对接停泊轨道；优点是低燃耗长期伴飞，"但受限于动力学，仅能实现较慢的相对运动，且其自然构型非常有限"。
- **圆形受控绕飞编队**："考虑绕飞的参考轨迹为空间圆，在空间圆上选定一定数量的变轨点，在每个变轨点采用脉冲变轨可控制副星沿参考轨迹绕飞"，圆的法向量、圆心、半径可按需求定；算例每圈均布 10 个变轨点，时间跨度 0.01T–2T（3.54 h–29.5 d），尺度 1–100 km。燃耗规律：xy 平面内参考轨迹燃耗最大，倾斜与垂直于 xy 平面者较小；圆心应尽量在原点附近；线性化特性使不同尺度结果可放缩。**词条"可以是圆形"有据；"或其他构型"原文未分析（只有圆）；"需要持续施加控制力来维持"与原文不符——是变轨点脉冲控制，不是持续推力**。
- 另有安全转移编队（任意两点间、保证与主星最小距离的解析参考轨迹设计），现无对应词条。

### 1.4 相位差（孙俞 2017）

论文背景是地月 L2 空间站建设，用三体 Lambert 算法（遗传算法求参考轨道+同伦牛顿迭代）解两类交会：同一 Halo 轨道不同相位、不同振幅 Halo 轨道之间。§4：目标星在 Az=5×10⁶ m 的 L2 北向 Halo 上，相位差取 1°/3°/5°，"在转移时间相同的条件下，初始相位差越大，所需的速度增量越大"（表 1 数字：1° 时 3.46 天转移仅 3.40 m/s，5° 时 7.35 天转移达 49.85 m/s）；结论"在满足安全性的条件下，追踪航天器和目标航天器的相位差应尽可能小"。§5：不同振幅 Halo 间转移，幅值差越大 ΔV 越大。**词条 phase-difference 全部相符**（"同一 Halo 轨道上两个航天器之间的角度间距"中的"角度"即沿轨道的相位角，1°/3°/5°/10°）。

## 2. 星座

### 2.1 多体星座与近月空间星座

- **multi-body constellation（Trabacchin 2025）**：该文确实通篇使用这一称谓（§2 标题即 "Multi-Body Constellation Design"；"a multi-body constellation is essential"），但**没有形式定义**，只是"多星星座"的惯用表述。其实际架构：4 颗卫星——3 颗部署在 3:1 恒星共振的 L2 南族晕轨道（按真近点角 0/4/7 相位分布），1 颗 L1 南族晕轨道（远月点起步）；服务目标是月球南极区域连续**通信**（地面站设 Connecting Ridge Extension，89.1°S）。性能：天线最小仰角 60° 时年非覆盖约 44 h、最大单次间隙 7.68 h；仰角降至 59° 即达 100% CTP。NRHO 曾是候选（9.4966 天 L2 NRHO），但高精度星历下远月点振荡约 180 天后相位失守，弃用。**词条"以实现全球或极区覆盖"不准确**——该文只做南极（纬度 −60°~−90°）局部连续覆盖，"全球覆盖"仅出现于引述 Lu 等 2012 的圆极轨道方案、且被该文以星数多为由放弃。
- **近月空间星座（陈诗雨 2024）**：词条与原文逐字相符。三阶段建设：①南极极区 100% 一重覆盖（对地中继通信）→②南极极区 100% 四重覆盖（导航）+全月 100% 一重覆盖（对地通信）→③全月 100% 四重覆盖（全月导航）。最终构型"12ELFO＋4NRHO＋2Halo＋3DRO 的 21 星方案，可实现全月 100% 四重覆盖"（结论原句）；其中 2 颗 halo 为 1 颗 L1（提高月球正面四重覆盖率）+1 颗 L2（月背中继），3 颗 2:1 DRO 互差 120° 负责低纬度四重覆盖，ELFO 为 12 h 周期、近月点 300 km 的冻结轨道分南北两组覆盖两极，NRHO 为 9:2 的 L2 南族。四重覆盖率定义：至少 4 星同时可见的时间占比（RNSS 需求）；另有导航精度指标"全月面任意一点至少 72% 时间内 GDOP≤5（平均 88.5%）"。方法：月心固连系网格化覆盖统计（仰角 ≥10° 且不被月遮）+层次分析法多指标比选；原文未明言 CR3BP 框架，词条若写"基于 CR3BP"无依据。

### 2.2 月球南极覆盖（Grebow 2008；Ozimek 2010）

核心结论：**单星不持续可见，双星接力才连续**。

- Grebow 2008（覆盖架构原始出处）：目标是"continuous coverage of the south pole of the moon with only two spacecraft"；两种架构方式——同一轨道放两颗相位错开（差半周期）的星，或选两条周期可通约的不同轨道各放一颗。候选为 9 条轨道（7–16 天的 L1/L2 近直线 halo、12 天 L1 halo、14 天 L2 halo、14/16 天 L1/L2 vertical、14 天 L2 butterfly），月面高度限 50–100,000 km；地面站设 Shackleton 坑（89.9°S），全星历+太阳摄动+月球天平动验证 180 天。单星可见时间占比：12 天 L1 halo 约 63.5%、7 天 L2 近直线 halo 约 96.4%、14 天 L2 butterfly 约 89%——均非全程；双星接力后多组组合达 100.00%（双 12 天 L1 halo、双 7 天 L2 NRHO、8 天 L1+L2 halo、双 14 天 L2 butterfly、7 天 L2 halo+14 天 butterfly）。**反例**：16 天 L1+L2 vertical 组合"no two spacecraft combination exhibits complete coverage"（接力后仍 98.41%，1.39% 时间双星均不可见）。连续覆盖的几何判据：任一时刻至少一星在地月基本面 z=0 以下。
- Ozimek 2010：主题是低推力转移设计，南极覆盖是应用出口且**全部转引 Grebow 2008**（其文献[5]）："L1 and L2 southern halo orbits possess a line of sight with the lunar south pole over the majority of the orbital period and a line of sight with the Earth along the entire orbit. Thus, two spacecraft phased in such orbits yield continuous coverage of the lunar south pole"——注意是 **southern halo**（南晕），且单星只是"majority of the orbital period"。该文本身的贡献是算到这些覆盖轨道（12 天 L1 halo Az=13,200/55,700 km、14 天 L1 vertical Az=57,000 km、16 天 L2 vertical、14 天 L2 butterfly）的低推力转移（出发半径 20,000 km、1 N 推力、84–190 天）。
- **对词条 lunar-south-pole-coverage-orbit 的核对**："地月 L1 或 L2 点晕轨道家族的部分轨道可实现与南极的持续可见"按字面（单条轨道持续可见）与论文不符，需改为：L1/L2 **南晕**（含近直线）轨道族的部分轨道，单星在大部分轨道周期内可见南极；以两颗相位错开的航天器接力可实现对南极的连续（100%）覆盖。参考文献列这两篇是恰当的（Grebow=架构出处，Ozimek=到达轨道的后续）。

### 2.3 全月面覆盖（Gao & Hou 2020，先例已核，本轮复核数字链）

论文先系统扫 halo 星座，再首次分析 DRO 覆盖，最后给混合方案。指标：CTP（区域被至少一星覆盖的时间占比，100% 即连续覆盖）、SCP（连续单重覆盖面积占全月面比例，月面网格 10° 粗/1° 细）。数字链：

- 仅 halo：2 星可对北极**或**南极极区连续单重覆盖，"but never both"；3 星可覆盖两极但非全月面；4 星在 10° 网格下若干周期达 100%，但 1° 细网格下"none of them can perfectly reach 100%"——**接近而不达**。原因：大面外振幅 halo 极区覆盖好、赤道覆盖差。
- 仅 DRO：3 星等相位平面 DRO 连续覆盖 99.8%，"with permanent coverage gaps at the polar caps"（平面 DRO 在月球轨道面内，极冠无覆盖）；4 星空间 DRO（5-/6-分岔族）1° 网格下最大 SCP 约 99.975%（周期约 64.5 天）——也是接近而不达。
- 混合：3 halo + 2 DRO 共 5 星，"can provide 100% continuous 1-fold coverage of the whole lunar surface"。

**词条 full-lunar-surface-coverage"仅靠 Halo 轨道或仅靠 DRO 的星座均难以达到 100%，需混合多种轨道类型"与原文一致**。措辞上"难以"精确对应"halo 4 星与空间 DRO 4 星在细网格下接近 100% 但不完美"这一事实。

## 3. 循环轨道

### 3.1 cycler（彭坤杨雷 2018）

原文 §2.2："CYCLER 轨道是指周期性往返于地球和月球之间，并在地球和月球附近**绕飞**而不停留的轨道。其本质是地月限制性三体问题下往返地月间的一类**周期轨道**[17]。考虑登月任务需求，地月循环轨道**可采用共振型循环轨道**，其近地点和近月点高度较低，且轨道周期与地月系统周期成固定比例。"

**与词条的两处出入**：(a) 词条"本质上是…一类**共振**周期轨道"把原文两句并错了——"本质"句只说周期轨道（出处为张文博等 2015，不在库），"共振型"是面向任务的工程选择（"可采用"），不是本质属性；(b) 原文是"绕飞而不停留"，词条写成"飞越而不停留"。

数字全部相符：轨道周期约 14 天、与月球会合周期约 28 天（"在每 28 天内，一个 14 天周期与月球会合；另一个 14 天周期远离月球"）、远地距约 48 万千米（表 1：484,084 km）、近地距约 1 万千米（10,691 km）。可补：轨道要素（倾角 28°、升交点赤经 355°、近地点幅角 13°）；轨道"近似关于地月连线对称且处于月球轨道面内"；GMAT 推演 10 个周期（140 天）近地距 8,000–16,000 km、远地距 460,000–490,000 km，验证运行稳定性。该轨道直接沿用杨雷等 2013（在库，《基于地月周期重访轨道空间站的载人月球探测方案设想》——其英文题即 "earth-moon cycler orbit space station"，"周期重访轨道"与"循环轨道"是同一概念的中文两译）。应用背景：CYCLER 空间站载人登月模式，每月 1 次登月窗口，可支持全月面登月，但反复穿越外辐射带、大椭圆轨道交会对接难度高，六种模式评比中综合可靠性低。

### 3.2 resonance-cycler（Liang 2016）

该文主题是地月轨道分类（直接转移 / SMART 式低能转移），共振循环轨道作为特殊类型出现在全局近月点/近地点分布图中。定义引自 Casoliva 等 2010（不在库）："We say that the spacecraft is in a p:q resonance orbit if p·T_M = q·T_S/C…T_M and T_S/C represent the period of the Moon and the spacecraft"——**p:q = 月球圈数 : 航天器圈数**，故 1:2 即月球转一圈、航天器转两圈，周期 ≈ 27.32/2 ≈ 13.66 天；"The periods of 1:2 resonance cyclers are about 14 days after differential correction"。生成方法：二体初值猜测 a = (p/q)^(2/3)（地心二体），"p:q resonance cyclers in CR3BP can be yielded via differential correction and continuation from two-body orbits"，且"one initial guess can only generate one resonance cycler"；该文另给从 TOF–β₂ 关系图（TOF<π/2 且 β₂=0 的点）批量搜索的办法，可推广至 1:2n。由对称性推断 1:2 共振循环轨道的近月点在旋转系月球后方的 y 轴上。**词条全部要点（整数比、1:2 约 14 天、月球一圈航天器两圈、二体初值+微分修正+延拓）相符**。比值方向与先例 resonant-family.md 记的"圈数比正写"约定（V&H、Spreen 等）一致。

### 3.3 geocycler（DeCoster 2026）

该文主题是在轨制造大口径传感器支撑的地月态势感知（SSA）架构。"Eagle Geocycler"与"Vulture Geocycler"是所选七条 CR3BP 周期轨道中的两条（Table 6：周期 27.5 天与 70.5 天；其余为 L2 北晕 14.8 天、L4/L5 平面短周期 28.2/27.6 天、L1 南晕 11.9 天、DRO 24.3 天），选它们"to provide spatial and geometric diversity across the domain"，作观测平台轨道组八种架构（Table 7），名义架构中 Vulture Geocycler 部署 10 个小光学 +7 个千米级被动射频传感器。**词条两个周期数字与 Table 6 逐一相符**。但要指出：(a) 全文没有给 geocycler 下定义，它只是轨道名称；词条"一类环绕地月系统的周期或准周期轨道，航天器在其中反复穿越地月空间，实现对大范围区域的持续覆盖"是词条作者的概括，其中"准周期"无依据（原文把这七条统称周期轨道）；(b) "该轨道类别与「地月循环轨道」相关但更强调重复覆盖特性"是词条作者的联想，原文未把 geocycler 与 Earth-Moon cycler 联系起来。

### 3.4 三者关系

三个词条共用"在地月旋转系中周期性重访"的几何图像，但出处、术语体系和用途不同：cycler（彭坤杨雷 2018）是载人登月运输中转概念，中文又名"地月周期重访轨道"（杨雷 2013），工程上取共振型；resonance cycler（Liang 2016，定义出自 Casoliva 2010）是 CR3BP 转移轨道分类中的术语，p:q 共振（月球圈数：航天器圈数），彭坤杨雷的 14 天 CYCLER 就近似是一条 1:2 共振循环轨道；geocycler（DeCoster 2026）是 SSA 观测轨道的命名（Eagle 27.5 天、Vulture 70.5 天），与运输型 cycler 无原文层面的联系。合并进一个主词条时，三者并列为一节内的三个变体即可，不必强写继承关系。

## 4. 现有词条定义勘误

逐条对照（词条 → 结论）：

1. **formation-flight（主词条）**：泛化定义首句可用。"仅周期解分量能保证长期安全有界，对其他基础解分量的引入可能导致构型破坏或碰撞风险"与 Yang 2023-EN 相悖——有界解集含 1 周期解+4 准周期解，剔除的只有发散解；准周期分量同样被用于绕飞设计。需重写为"有界性防止漂移与碰撞；有界解由周期与准周期分量组成"。参考文献需消歧："Yang, Fu & Zhang 2023"= 航空学报中文版（杨驰航等 2023）；"Howell & Marchand 2005"（Dynamical Systems）不在库，库内 Marchand & Howell 2005（JGCD，控制策略）是另一篇。
2. **circular-formation**：准确（16/3 为长周期运动半长轴：半短轴、周期约 92 天；天然圆编队不可能；短周期平面近似+主动控制）。可补：短周期轴比约 2/周期约一个月；双周期并存时轴比约 16/5、458 天；近似圆面倾角约 60°。
3. **parallel-formation**：准确（定义是原文直译；"对初值误差最宽容"即原文 "the most robust of the formations designed here"，容差 1000%/26 km/1 m/s）。注意与"解析模型误差最大（2.6%）"区分，两者不矛盾。
4. **controlled-fly-around-formation**：半准确。圆形构型有据（杨驰航 2023：空间圆参考轨迹+变轨点脉冲）；"需要持续施加控制力来维持"与原文不符（脉冲控制，非持续推力）；"或其他构型"原文未见；"自然伴飞编队（副星与主星在同一 DRO 上相位不同）"与中文版 §3 一致。出处建议写全：航空学报 2023, 44(5):326563。
5. **triangular-libration-point-formation**：基本准确（尚无航天器到达、到达成本高、深空观测/辐射监测，Catlin 2007 引言）。"中继通信"无出处（原文为空间站/中转站选址）；"与共线平动点相比存在稳定的准周期轨道族"是概括，原文仅"有界准周期轨道"（引 Blackburn 等）。
6. **phase-difference**：准确（孙俞 2017）。可补：背景为 L2 北向 Halo（Az=5×10⁶ m）同轨交会，三体 Lambert+遗传算法；不同振幅 Halo 间"幅值差越大 ΔV 越大"是姊妹结论。
7. **planar-periodic-mode**：一处主语错误——是**副星**在参考 DRO 上相位偏移（Yang 2023-EN §3.1/3.2.1），不是"主航天器"。其余（单侧、停泊轨道）准确。可补：摘要又称 natural periodic mode；参考 DRO 为 13.64 天、2:1 共振。
8. **planar-quasi-periodic-mode**：准确（两周期分量、绕主星顺时针、有界空心区域、绕飞编队基础模式）。可补工程限定：长期纯自然绕飞构型不规则，实际绕飞=自然段+转移段、每圈两脉冲，1 km 尺度每圈 <1 cm/s。
9. **normal-quasi-periodic-mode**：基本准确。需补限定："cannot support a formation separately"——只能叠加在平面编队上（Yang 2023-EN §3.2.4）。
10. **nearly-planar-mode**：与 Folta 2014 低 z 幅值模式的同一性**确认**（"cycles between high and low z-amplitude modes…enter during the nearly planar mode"）；ARTEMIS 用途句准确（大准晕轨道同时提供高面外插入与近平面离开条件，用于 L2↔L1 转移与入轨低倾角环月轨道）。**但合并目标要修正**：Folta 2014 明确 Lissajous 轨道**不**具备近平面模式（庞加莱图中央区，"these orbits do not possess the nearly planar modes"），该模式是大准晕轨道（及一般准周期轨道）的性质——若并入 lissajous-orbit 主词条，须写明"Lissajous 除外"，否则建议并入 quasi-halo-orbit 相关小节，与 high-z-amplitude-mode（先例 halo-family.md 已核）并列为高/低 z 幅值模式。
11. **multi-body-constellation**：需修正。"以实现全球或极区覆盖"与 Trabacchin 2025 不符——该文只做月球南极（−60°~−90°）连续通信覆盖，"全球覆盖"仅见于引述他人且被放弃；该术语在原文无形式定义，是多星星座的泛称。实际架构：3 颗 3:1 恒星共振 L2 南晕+1 颗 L1 南晕共 4 星；最小仰角 60° 时年非覆盖约 44 h、最大间隙 7.68 h，59° 即 100%。
12. **near-lunar-space-constellation**：准确（三阶段、12ELFO+4NRHO+2Halo+3DRO=21 星、全月 100% 四重覆盖逐字相符）。可补：2 颗 halo=1 L1+1 L2；3 颗 2:1 DRO 互差 120°；全月任意点 ≥72% 时间 GDOP≤5；方法为月面网格化覆盖统计+AHP，原文未言 CR3BP。另：该词条"应用价值"段（"描述姿态机动中转动惯量的各向异性"）与内容无关，是模板错置，应删换。
13. **lunar-south-pole-coverage-orbit**：需加限定（见 §2.2）：限定为 L1/L2 **南晕**（含近直线）轨道族；"持续可见"单星不成立（63.5%~96.4%），连续覆盖需双星接力；16 天 vertical 组合为反例。参考文献两篇恰当。
14. **full-lunar-surface-coverage**：准确（Gao & Hou 2020，见 §2.3 数字链）。
15. **cycler**：两处修正（见 §3.1）："共振"由本质降为可选；"飞越"改回"绕飞"。数字全部相符。可补：轨道出自杨雷等 2013（在库），"周期重访轨道"为同概念两译；张文博等 2015 为"本质"句出处、不在库。
16. **resonance-cycler**：准确（Liang 2016：p:q=月球圈数:航天器圈数、1:2 约 14 天、二体初值+微分修正+延拓）。可补：定义出自 Casoliva 等 2010（不在库）；可推广 1:2n；近月点在月球后方 y 轴上。
17. **geocycler-orbit**：数字相符（Eagle 27.5 天、Vulture 70.5 天，DeCoster 2026 Table 6）；但定义句为概括，"准周期"无据、"与地月循环轨道相关"是联想；原文语境是 SSA 观测轨道（七条 CR3BP 周期轨道之二）。

总体判断：17 条中 8 条与论文一致或基本一致（circular、parallel、phase-difference、planar-quasi-periodic、normal-quasi-periodic、nearly-planar、near-lunar-space-constellation、full-lunar-surface-coverage），4 条需修正表述（formation-flight、controlled-fly-around、multi-body-constellation、cycler），3 条需加限定或消歧（triangular-libration-point-formation、lunar-south-pole-coverage-orbit、geocycler-orbit），1 条有主语错误（planar-periodic-mode），1 条准确但合并目标需改（nearly-planar-mode，Lissajous 除外）。明确的事实性错误 2 处：formation-flight 的"仅周期解分量有界"（与原文相反）、cycler 的"本质是共振周期轨道"（可选误作本质）。没有发现凭空捏造的术语；问题集中在：姊妹论文混引风险（Yang, Fu & Zhang vs Yang, Wang & Zhang）、单星可见与双星接力的区分、"本质/可选"的措辞层级、以及词条作者概括句与原文定义句的边界。

## 5. 主词条建议大纲与术语变体表

### 5.1 formation-flight（编队飞行）

1. **定义**：多颗航天器保持特定相对构型协同飞行；三体环境下用线性化相对运动方程+Floquet 分解分析有界性（Yang 2023-EN）；有界性防止漂移与碰撞。
2. **三角平动点编队**（Catlin 2007）：长/短周期运动分离（轴比 16/3 约 92 天、约 2 约一个月；双周期 16/5、458 天）；自然构型——并行（面内相位偏移、面外相同；对初值误差最宽容）与领从（leader–follower）；受控构型——圆编队与投影圆编队（短周期平面近似、倾角约 60°、需每圈重置或持续修正）；摄动排序（太阳引力 > 光压 ≫ J2）。
3. **DRO 相对运动三模式**（Yang 2023-EN）：有界解=周期+准周期；平面周期模式（副星相位偏移、单侧、停泊轨道，又称 natural periodic mode）；平面准周期模式（两周期分量、绕主星、有界空心区域、绕飞基础模式）；法向准周期模式（仅 z 分量、须叠加、三维编队）。
4. **DRO 编队设计**（杨驰航 2023 + Yang 2023-EN）：自然伴飞（周期解、低燃耗但构型有限）；圆形受控绕飞（空间圆参考轨迹+脉冲，燃耗与法向/圆心/尺度关系）；工程绕飞（自然段+转移段、每圈两脉冲 <1 cm/s/km 尺度）；安全转移编队。
5. **相位差与交会**（孙俞 2017）：同 Halo 轨道相位差定义；同轨交会"同转移时间下相位差越大 ΔV 越大"；异轨"幅值差越大 ΔV 越大"。
6. **术语变体表**：并行编队（parallel）、领从编队（leader–follower，无现词条）、圆编队（circular）、投影圆编队（projected circular，无现词条）、三角平动点编队、平面周期模式（=natural periodic mode）、平面准周期模式、法向准周期模式、自然伴飞编队、受控绕飞编队、相位差。

### 5.2 multi-body-constellation（星座）

1. **定义**：多颗卫星部署在环月轨道与平动点轨道等多种轨道上，协同提供月面覆盖、中继通信与导航定位的星座；"multi-body constellation"为 Trabacchin 2025 等文献的惯用称谓（无形式定义）。覆盖指标：CTP/SCP（Gao & Hou 2020）、四重覆盖率与 GDOP 时间占比（陈诗雨 2024）。
2. **月球南极覆盖**：单星南晕大部分周期可见（63.5%–96.4%），双星接力连续覆盖（Grebow 2008 五种 100% 组合+vertical 反例；Shackleton 89.9°S；几何判据 z=0 以下）；低推力到达（Ozimek 2010）；四星南晕通信星座（Trabacchin 2025：3×L2 3:1 恒星共振+1×L1，59° 仰角 100%）。
3. **全月面覆盖**：单一轨道类型接近而不达 100%（halo 4 星细网格不达、平面 DRO 3 星 99.8% 极冠缺口、空间 DRO 4 星约 99.975%），混合 5 星（3 halo+2 DRO）达 100% 连续单重（Gao & Hou 2020）。
4. **近月空间星座建设路线**（陈诗雨 2024）：三阶段（极区中继→极区导航+全月通信→全月导航）；21 星最终构型与分工；≥72% 时间 GDOP≤5。
5. **术语变体表**：多体星座、近月空间星座、月球南极覆盖轨道、全月面覆盖、（可收）椭圆冻结轨道 ELFO。

### 5.3 cycler（循环轨道）

1. **定义**：周期性往返于地球和月球之间、在两者附近绕飞而不停留的轨道；本质是地月限制性三体问题下往返地月间的一类周期轨道（彭坤杨雷 2018，原句出处张文博等 2015，不在库）；工程上可采用共振型（周期与地月系统周期成固定比例）。同概念两译：周期重访轨道（杨雷 2013）。
2. **典型参数与稳定性**：14 天周期、28 天会合（每月一次近月窗口）、远地距约 48.4 万 km、近地距约 1.07 万 km、倾角 28°、近月停留约 8 天；GMAT 140 天推演稳定（彭坤杨雷 2018）。
3. **共振循环轨道**：p:q=月球圈数:航天器圈数（Liang 2016 引 Casoliva 2010，不在库）；1:2 约 14 天；二体初值+微分修正+延拓，一个初值只生成一条；可推广 1:2n。
4. **geocycler**：DeCoster 2026 的 SSA 观测轨道（Eagle 27.5 天、Vulture 70.5 天），七条 CR3BP 周期轨道之二；与运输型 cycler 命名相似、用途不同，原文未建立联系。
5. **应用**：CYCLER 空间站载人登月模式（窗口、ΔV、辐射与对接难点，彭坤杨雷 2018）；GEO 离轨与月球中继卫星系统应用（Liang 2016）。
6. **术语变体表**：地月循环轨道（CYCLER / Earth-Lunar Cycler Orbit）、地月周期重访轨道、共振循环轨道（resonance cycler）、1:2 共振循环轨道、Eagle/Vulture Geocycler。

合并障碍评估：三个主词条内部概念层次清楚（编队：运动形态→构型→设计→交会参数；星座：指标→极区→全月→建设路线；循环轨道：定义→参数→共振类→SSA 变体），没有相互矛盾的定义需要裁决。需要取舍的三处已标明处理方式：(a) nearly-planar-mode 并入 lissajous-orbit 时必须注明"Lissajous 轨道不具备该模式"（Folta 2014 明示），否则改并 quasi-halo 小节；(b) Yang 姊妹两篇（中/英文版）在参考文献中必须写全区分，二者内容互补不重复；(c) cycler 与 geocycler 的关联只能写"命名相似、用途不同"，不写继承关系。
