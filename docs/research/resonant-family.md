# 共振轨道族词条合并前调研笔记

调研日期：2026-08-07。目的：核对「共振轨道」一族 20 个现有词条的定义是否与原始论文相符，为合并成主词条 resonant-orbit-family 做准备。体例仿 docs/research/halo-family.md。

调研范围：资料库中 19 篇论文的 md 正文（`hybrid_auto/<目录名>.md`），任务清单的优先论文除 Gupta 等 2023 外全部在库并逐篇核对。

不在库、无法核对的出处（共 2 篇，均只能经库内论文转引佐证）：

- **Gupta, Howell & Frueh 2023**, *Constellation design to support cislunar surveillance leveraging sidereal resonant orbits*（33rd AAS/AIAA Space Flight Mechanics Meeting）——sidereal-resonant-orbit 词条的首条出处。经 Klonowski 2024 参考文献[10]与 Bhadauria & Frueh 2025 参考文献[14]确认篇名与年份；内容仅知 Bhadauria & Frueh 2025 的一句转引（"a constellation of sidereal resonant orbits could enhance monitoring"）。
- **Frueh, Howell, DeMars, Bhadauria & Gupta 2021**, *Cislunar space traffic management: Surveillance through Earth-Moon resonance orbits*（8th European Conference on Space Debris）——2:1/3:1 监视共振轨道的原始出处。经 Ding 2025、Klonowski 2023、Patel 2024、Bhadauria & Frueh 2025 的引用佐证。

论文简称：

- V&H 2014 = Vaquero & Howell 2014, *Leveraging resonant-orbit manifolds to design transfers between libration-point orbits*
- P&A 2014 = Parker & Anderson 2014, *Low-Energy Lunar Trajectory Design*（JPL 专著）
- Ding 2025 = Ding 等 2025, *Cislunar space situational awareness via Earth-Moon resonant orbits*
- He 2025 = He 等 2025, *Design of cislunar navigation constellation via orbits with a resonant period*
- Vendl 2021 = Vendl & Holzinger 2021, *Cislunar periodic orbit analysis for persistent space object detection capability*
- ZS 2022 = Zimovan-Spreen 等 2022, *Dynamical structures nearby NRHOs with applications to transfer design in cislunar space*
- Spreen 2021 = Spreen 学位论文 *Trajectory design and targeting…in cislunar space*
- M&H 2023 = Muralidharan & Howell 2023, *Stretching directions in cislunar space…*
- Wang 2025-WSB = Wang 等 2025, *Mechanism and characteristics analysis of weak stability boundary transfers to the 2:1 DRO*（库内另有两篇 Wang 2025，词条出处只写"Wang 等 - 2025"，按主题为此篇）
- 孙聪 2025 = 孙聪 等 2025《地月空间态势感知技术研究现状与发展》
- 其余按"作者 年份"简写，与词条参考文献一致。

## 1. 共振轨道的标准定义与基准周期

**标准定义**：轨道周期与某参考周期成简单整数比（有理数比）的轨道。V&H 2014（§III）："Within the context of conics, a resonance exists when there is a simple integer relationship between periods"，且特指轨道-轨道共振（orbit–orbit resonance）：航天器与较小主星（月球）的周期成整数比。P&A 2014（§2.6.9.6）："Resonant orbits in the Earth–Moon three-body problem are essentially two-body orbits about the Earth that are in resonance with the Moon, and which have been significantly perturbed by the Moon"。中文定义（李星明 2024）："共振轨道指的是航天器轨道周期与次天体轨道周期为整数比关系的轨道"。两点补充：(a) 多体模型下周期比只是近似有理数，CR3BP 中需二体初值+微分修正才能闭合，星历模型中退化为准周期轨道但"近似共振比保持"（V&H 2014 §III）；(b) 共振轨道与平动点轨道不同，"are not typically associated with a particular Lagrange point"（V&H 2014）。

**基准周期有四种用法**，逐论文核清如下：

- **(a) 月球恒星周期 27.32 天**（= CR3BP 主星周期 2π）。采用者：V&H 2014（DRO 族周期平台 "P = P_moon (i.e., approximately 27 days)"，此时与月球 1:1 共振）、P&A 2014（"perfectly resonant with a sidereal month"）、Ding 2025（CR3BP 中航天器与月球的平动共振 MMR）、李星明 2024、Zhou 2024（DRO 共振比 2:1/3:1/4:1）、Klonowski 2024 中明确标注 "resonance with the CR3BP period" 的 1:2、1:3、2:3、3:2 共振轨道。Frueh 2021 / Gupta 2023 的 "Earth-Moon resonance orbits / sidereal resonant orbits" 也属此类（经 Patel 2024、Bhadauria & Frueh 2025 转引；Patel 2024 附录 B 的 2:1、3:1 共振轨道全图案周期 6.45 TU≈28.0 天，即约一个恒星月内航天器分别绕 2 圈、3 圈）。
- **(b) 月球会合周期 29.53 天**。定义句（Spreen 2021 §5.3.1）："The Moon's synodic period is approximately 29.5 days, slightly longer than its sidereal period (approximately 27.3 days)"，会合周期即地-月-日方位重复的间隔。采用者：NRHO 文献（Spreen 2021；Singh 2021 ——"'synodic resonance' refers to the resonance of the NRHOs with respect to the synodic period of the Moon relative to the Sun"；Fu 2022 ——"the lunar synodic cycle (roughly 29.53 day)"；M&H 2023；ZS 2022）与 SDA 文献（Vendl 2021 §2 明确定义恒星周期 27.3 天与会合周期 29.5 天之别，共振定义 e·P_repeating = n·P_synodic；Klonowski 2023/2024 ——"resonance with the Earth-Moon synodic period (about 29.5 days)"；Visonneau 2023）。
- **(c) 太阳视运动周期**：Gao 2023 的 QBCP（准双圆问题）中 "Sun-resonant orbits remain periodic because their period is a (rational) multiple of the period of the Sun"。该"太阳周期"是太阳在地月旋转系中的视运动周期，数值上等于月球会合周期 29.53 天（halo-family.md §2 已证：ω_S=0.9252，T_S≈6.79 TU≈29.53 天）；Ding 2025 §4.2 同样给出 T_sun/T_m≈1.0809（→29.53 天）并称 "solar synodic period"。故 (c) 与 (b) 是同一基准的两种表述，"Sun-resonant" 不等于"与回归年成整数比"。
- **(d) 星座内部基准**：He 2025 的 "orbits with a resonant period" 不涉及任何天体周期——以轨道库中周期最小的轨道为基准（baseline）轨道，周期为其整数倍（resonance multiple f，p = f×p₀）的轨道收入"共振轨道集合"。这是"共振"一词的第三种用法，指星座成员周期互为整数倍、使星座整体几何周期性重复。

词条 synodic-resonant-periodic-orbit 的"日地月系统公转周期"对应 Vendl 2021 的原话 "the synodic period of the Earth–moon system rotating about the sun"，即 (b)；词条 92-synodic-resonance 的"月地连线旋转周期"字面上是惯性旋转周期（=恒星月），与 9:2 会合共振的实际基准 (b) 不符，属错误表述（见 §5 第 3 条）。

## 2. p:q 约定：两种方向并存

共振标号"A:B"的含义在文献中有两种相反方向，且与基准周期组合出多种用法。逐一核实：

- **V&H 2014（式 7）**：p:q 中 "p is associated with the period of motion of the spacecraft, and q reflects the period of the smaller primary"，p/q = n_航天器/n_月球 = T_月球/T_航天器；"a spacecraft in a 1:2 resonance with the moon completes one revolution around Earth in the same time that the moon completes two periods"。即 **p:q = 航天器圈数 : 月球圈数**。1:2 → T = 2 个恒星月（≈54.6 天）。
- **P&A 2014（§2.6.9.6）**："an m:n resonant orbit is one where the spacecraft traverses the resonant orbit n times while the primaries orbit their barycenter m times"。即 **m:n = 主星圈数 : 航天器圈数**，与 V&H 正好相反。其 3:1 → T = 3 个恒星月（≈82 天）；其 7:3 的地月 encounters 间隔（7 个月）长于 3:2（3 个月），与原文 "far longer between lunar swingbys" 自洽。
- **Ding 2025（§3.1）**：共振条件 k_m·n_m − k·n ≈ 0，未扰半长轴 a_re = (k/k_m)^(2/3)，即 **k:k_m = T_航天器:T_月球**，方向同 P&A。其 Γ_{1:2} 族（如 e_re = 0.84/0.66 的算例）a_re ≈ 0.63，T ≈ 半个恒星月（13.66 天）——**Ding 的 1:2 就是 V&H 的 2:1**。
- **李星明 2024**："若航天器与月球的轨道共振比为 n:m，则航天器绕地球运行 n 圈的时间与月球绕地球运行 m 圈的时间相同"——方向同 V&H。Zhou 2024 的 DRO 共振比同向（4:1 DRO → T ≈ 27.32/4 ≈ 6.8 天；Wang 2025-WSB 的 2:1 DRO → T ≈ 13.7 天，M&H 2023 的 70000 km DRO 周期 13.934 天为同类参照）。
- **Spreen 2021（§5.3.1，会合基准）**："Orbital resonance is defined in terms of a p:q ratio, where p indicates the number of completed revolutions of a given periodic orbit over q periods of the Moon"——方向同 V&H，基准为会合周期；4:1 NRHO "7.375 days…four revolutions…over the duration of one synodic period (7.375×4 = 29.5)"，9:2 NRHO "6.556 days…nine revolutions…over two synodic periods"。Vendl 2021（式 20：e·P_repeating = n·P_synodic）、Klonowski 2023/2024（构型周期 = lcm(n₁,…,n_j) 个会合月；"the very long periods of 1:2 Resonant orbits" → 1:2 = 2 个会合月 ≈ 59 天）、Visonneau 2023（"Fraction of synodic period"）方向均同。
- **Gao 2023（沿 Andreu 1998 标号，会合基准）**：共振列写作 1:2、1:3、1:4，指 **T_轨道 : T_太阳**——其 1:4（L2 的 02G 轨道，T ≈ 29.53/4 ≈ 7.38 天）就是 Purdue 文献的 4:1 NRHO（Fu 2022 候选 #2：4:1，7.382 天，数字吻合）。方向与 Spreen/Purdue 相反。
- **Fu 2022（会合基准，以商表述）**："resonance ratios between the lunar synodic cycle (roughly 29.53 day) and their corresponding orbital periods"，表中 9:2 ↔ 6.563 天、4:1 ↔ 7.382 天。即共振比 = T_会合 : T_轨道 = 9:2（= 4.5）；因 p 圈耗时 q 个会合月 ⇔ T_会合/T_轨道 = p/q，此商与"圈数:月数"的计数比数值相同，两种表述自洽。

**interior/exterior 判定（V&H 2014）**：exterior resonant orbit 周期长于月球（轨道在月球轨道外侧），interior 周期短于月球。按 V&H 式（7）p/q = T_月球/T_航天器：**p > q ↔ T_航天器 < T_月球 ↔ interior；p < q ↔ exterior**。佐证：IBEX 的 3:1（p>q，T ≈ 9.1 天）在月球轨道内侧；V&H 说 exterior 共振轨道的流形"tour the entire EM space"且过地球附近、interior 共振轨道"pass near the primaries"。词条 exterior-resonant-orbit、interior-resonant-orbit 的周期关系写对了，但括号里的不等号方向写反（见 §5 第 6、7 条）。

**同标号对照表**（写词条时最容易踩的坑）：

| 标号 | 约定 | 周期 |
|---|---|---|
| 2:1 | V&H/李星明/Zhou（恒星基准，正写） | ≈13.66 天 |
| 2:1 | Vendl/Klonowski（会合基准，正写） | ≈14.77 天 |
| 1:2 | Ding/P&A（恒星基准，反写） | ≈13.66 天（= V&H 的 2:1） |
| 1:2 | Vendl/Klonowski（会合基准，正写） | ≈59.06 天 |
| 1:2 | V&H（恒星基准，正写） | ≈54.64 天 |
| 1:4 | Gao（会合基准，反写） | ≈7.38 天（= Purdue 的 4:1） |

## 3. 族的概念

- **同一共振比连续延拓成族**（V&H 2014 §III）：二体模型取拱点初值生成单条平面共振轨道，微分修正（单重/多重打靶）在 CR3BP 中闭合，再用拟弧长延拓生成一族 p:q 共振轨道；"Each member of a family possesses characteristics in common and can be distinguished through a particular problem parameter"。三维族由平面族分岔产生：z 向小微扰+xz 平面对称修正得出 **out-of-plane resonant orbits（关于 xz 平面对称）**；非对称三维共振轨道称 **axial resonant orbits**。
- **同一共振比+同一共振相位角成族**（Ding 2025 §3.1-3.2）：共振相位角 σ 是改进 Delaunay 变量组合出的共振角（式 8：σ = [k_m λ_m − kλ + (k_m−k)p]/(k_m−k)，含月球平黄经 λ_m、航天器平黄经 λ 与近地点经度）；可积近似哈密顿量在 (e, σ) 平面上的平衡点（1:2 情形位于 σ = 0° 与 180°）对应周期共振轨道，记作 Γ^σ_{k:k_m}。"The resonant orbit family can be further obtained by changing unperturbed eccentricity e_re"——固定 k:k_m 与 σ、变未扰偏心率 e_re 延拓成族（图 4 给出八族，颜色表 e_re）；难延拓的族用质量比延拓（μ = k_μ·μ* 从 0 渐增至 1）。词条 resonant-orbit-family 的定义与此一致。
- **4:3 族全不稳定但可巡游平动点**（V&H 2014 §IV）："All members in the 4:3 resonant family in the EM system are unstable; in contrast, most of the 4:3 resonant orbits in the Saturn–Titan family are linearly stable"——稳定性依赖质量参数 μ；"these orbits offer a continuous tour of the system, and thus, these orbits are candidates for transfers to the vicinity of any of the five EM libration points"。词条 43-resonant-orbit-family 有原句支持。
- **共振相位角与初始太阳相位角是两个量**（Ding 2025）：σ 是动力学生成的共振角（决定轨道形状与族归属）；w₀ 是观测初始时刻太阳相对地月 x 轴的方位角（决定光照几何，§4.1-4.2 结论：w₀ 对单周期观测性能影响显著，通常 w₀=180° 最优；把轨道周期约束为 T = k·T_sun 可使最优 w₀ 长期保持）。
- **星历模型中的共振**：CR3BP 周期共振轨道在星历模型中成为准周期轨道，"the general orbital characteristics of these orbits as well as the approximate resonant ratio are preserved"（V&H 2014）；Wang 2025-WSB 亦称 2:1 DRO "strictly periodic only in the CR3BP, while being predominantly quasi-periodic in the BCR4BP"。

## 4. 典型成员与应用

- **9:2 会合共振 NRHO（Gateway 基准）**：周期 6.556 天（Spreen 2021 附录 C 精确值 6.5556 天、近月点半径 3153 km、JC 3.04719；Bhadauria & Frueh 2025 表 2：6.56 天、JC 3.0466；Singh 2021 表 1：6.573 天、近月点 3269 km；Fu 2022：6.563 天、近月点半径 3227 km）。"The L2 southern lunar synodic resonant 9:2 NRHO is the current baseline for the Gateway"（ZS 2022）。同族其他共振成员：4:1（7.322-7.382 天）、24:5（6.074 天）（Singh 2021 表 1，含各自近月点高度与稳定指数）。
- **IBEX 的 3:1 月球共振轨道**（V&H 2014）：2011 年机动进入 "a remarkably stable out-of-plane lunar resonant orbit, the first of this type"，与月球 3:1 共振；选轨三因素为辐射剂量最小化、科学观测改进、避免长食。TESS 亦设计为直接进入与月球共振的长期稳定地球轨道（同段）。孙聪 2025 亦载"2011 年 NASA 便将星际边界探测器部署于地月 3:1 共振轨道"。
- **2:1/3:1 共振轨道用于 SDA 监视**：原始出处 Frueh 2021 与 Gupta 2023 均不在库；库内佐证——Patel 2024（§1）："Frueh et al. introduced the 2:1 resonant orbit as an attractive candidate for monitoring cislunar space because of its close approaches to the Earth and Moon and because it covers the entire cislunar region in under 20 revolutions"，其整数规划最优星座把观测星放在 2:1 与 3:1 共振轨道上；Bhadauria & Frueh 2025（§1）：地基传感器不足以监视地月空间，"a constellation of sidereal resonant orbits could enhance monitoring"；孙聪 2025："地月共振轨道因轨迹重复、覆盖范围广成为候选"。
- **会合共振观测轨道**：Vendl 2021 的核心结论——"retrograde periodic orbits whose periods are m:n resonant with the moon's synodic period possess excellent characteristics for cislunar observation"，1:1 共振+约 210° 相移的 L1 Lyapunov 最优，观测性能局部峰出现在 1:1、4:3、3:2、2:1；机理是会合共振+正确相位使太阳近似持续照亮目标区域。Klonowski 2023/2024 以 12 种会合共振比（1:1…6:5）的平动点轨道、DRO 等为候选观测轨道，星座几何以 lcm(n_i) 个会合月为周期重复。Visonneau 2023 的多星架构中 1:1 会合共振 L1/L2 Lyapunov 配近零初始相位角，光照条件全程有利。Ding 2025 以视临界星等评估共振族观测性能，并提出 T = k·T_sun 的"与太阳会合周期共振"观测策略。
- **避食**：Spreen 2021 §5.3.2——会合共振使轨道在日-月、日-地旋转系中的几何按会合月重复，慎选历元可让地、月阴影从轨迹瓣（lobe）间隙穿过；9:2 NRHO 的月食穿越 <90 分钟（Gateway 可接受），4:1 NRHO 有 19 年准连续免食解（Williams 等 2017），9:2 有 15 年解（Lee 2019）；非会合共振的邻近 NRHO（7.52 天）则无此性质。ZS 2022——高周期晕轨道族中与会合周期共振的成员 "are employed in designs to avoid the shadows of the Earth and Moon"，"if resonance and epoch are selected carefully, their eclipse-avoidance properties [are maintained]"，星历模型中再加避食路径约束。
- **共振星座（He 2025）**：从周期轨道库筛选与基准轨道周期成整数倍的轨道组成共振组合，全库共生成 20366 个共振组合、1229 个四星共振星座；近地区域与月球区域导航性能最优的是 L2 南北 NRHO 与 L4/L5 垂直轨道的组合。
- **转移中间结构**：V&H 2014 用 4:3 等共振轨道及其流形构造 LEO→五个平动点的低耗转移与全系统巡游（L1→…→L3 巡游 165 天、中间机动 6 次共约 671 m/s）；P&A 2014 称共振轨道可作 staging/quarantine orbit（近月时不稳定、离月后近似稳定，几乎无需保持）；ZS 2022 用 3:4、4:3 共振轨道（ATD 目录，恒星基准）作 NRHO↔DRO 转移的中间轨道（2-3 次机动约 0.49-0.76 km/s、41-97 天）；M&H 2023 用最大拉伸方向辅助从近稳定的 9:2 NRHO 离轨，轨迹被附近共振弧与高周期结构"接住"。
- **DRO 语境**：V&H 2014——平面 DRO 族周期随 y 振幅增至月球周期平台，部分族成员与月球 1:1 共振，面外 DRO 亦 1:1。Zhou 2024——共振比 2:1 到 4:1 附近的 DRO 引力场非对称性更强、更利于星间测量自主定轨（其引文献[23]）；表 3 给出三种共振比 DRO 的极区仰角，4:1 最大（北极最大 31.96°/平均 16.76°），故选 4:1 DRO 部署环月定位星座。Wang 2025-WSB——WSB 转移到 2:1 DRO 的捕获段中存在 2:1、3:1、4:1、5:1 四类准共振轨道段，4:1 仅在雅可比能量较高时出现。

## 5. 逐条勘误（20 条）

1. **resonant-orbit-family**：与 Ding 2025 一致（同一 k:k_m + 同一 σ、变未扰偏心率 e_re 延拓成族；族为观测性能评估单元）。准确。合并时须写明 Ding 的 k:k_m = T_航天器:T_月球（反写约定），其 1:2 族 T≈13.66 天。
2. **43-resonant-orbit-family**：正确，V&H 2014 原句支持（全不稳定、可巡游五个平动点）。可补：土卫六系 4:3 族多数线性稳定（μ 依赖性）；"周期比 4:3"按 V&H 约定 = 航天器 4 圈/月球 3 圈（T ≈ 20.5 天）。
3. **92-synodic-resonance**："月地连线旋转周期"错误——9:2 会合共振的基准是月球会合周期 29.53 天（地月连线相对日地方向的旋转周期），不是月地连线的惯性旋转周期（= 恒星月 27.32 天）。出处 Kelly & Geller 2024 在库，全文只有 "9:2 synodic ratio L2 southern NRHO" 的用法、无定义句，"月地连线旋转周期"无出处；定义句应改引 Spreen 2021 §5.3.1（9 圈/2 个会合月）。中文名"共旋谐振"建议统一为"会合共振"。
4. **92-synodic-resonant-orbit**：两处问题。(a) "章动"是 synodic 的误译（章动 = nutation；synodic = 会合），标题"9比2章动共振轨道"与定义"章动周期与轨道周期满足9:2比例"都要改；改后"会合周期:轨道周期 = 9:2"的商方向与 Fu 2022 一致（数值 4.5，自洽）。(b) 参考文献字段误填本地绝对路径，按路径名论文为 M&H 2023（stretching directions，在库）——该文确以 9:2 synodic resonant L2 南族 NRHO 为 Gateway 基准轨道做离轨与转移分析，"NASA 月球门户采用 9:2" 正确。
5. **cislunar-resonant-orbit**：与出处孙聪 2025 一致（传感器部署轨道分平动点周期轨道与地月共振轨道两类；地月共振轨道轨迹重复、覆盖范围广；IBEX 3:1；2:1 与 L1 Halo 结合的架构）。准确。"如 2:1、3:1"的基准是月球（恒星）周期。
6. **exterior-resonant-orbit**："航天器周期大于主天体周期"正确；但"p:q 中 p>q"与 V&H 式（7）矛盾——p>q 时 T_航天器 < T_月球，是 interior。应改为 p<q（如 1:2、2:3）。
7. **interior-resonant-orbit**：同上，"p<q"应改为 p>q（如 3:1、4:3）。
8. **lunar-resonant-orbit**：正确（V&H 2014：IBEX 3:1、remarkably stable、此类轨道有望用于多种任务）。"与月球轨道形成共振关系的地球轨道"表述准确（IBEX/TESS 都是地球轨道）。可补选轨三因素与 TESS 例。
9. **out-of-plane-resonant-orbit**：对称面错误——V&H 2014 原文 "out of plane resonant orbits, symmetric across the xz plane"，词条写"相对于 xy 平面对称"应改为 xz 平面。可补：非对称三维共振轨道称 axial resonant orbits（初始状态 ż₀≠0）。
10. **quasi-resonant-orbital-segments**：与 Wang 2025-WSB 原句一致（"four types of resonant-like orbital segments: 2:1, 3:1, 4:1, and 5:1. Among these, the 4:1 resonantlike orbital segment exists only when the Jacobi energy is relatively high, implying a ballistic capture mechanism"）。准确。出处"Wang 等 - 2025"需补全篇名（库内有 3 篇 Wang 2025）；并注明语境是 WSB 转移到 2:1 DRO 的捕获段。
11. **resonance-ratio**：定义方向正确（4:1 = DRO 4 圈/月球 1 圈，与李星明 2024 的 n:m 约定、Zhou 2024 的用法一致）；"2:1 到 4:1 非对称性更强、利于星间测量自主定轨、4:1 极区仰角最大"与 Zhou 2024（含表 3 数字）一致。准确；但该条只覆盖 DRO 语境，作主词条变体时须注明共振比两种书写方向并存（见 §2）。
12. **resonant-period-orbit**：与 He 2025 一致——基准是轨道库内周期最小的 baseline 轨道，成员周期为其整数倍（f = 1,2,…）。准确。注意此"共振"是星座成员间周期整数倍，与天体周期无关（§1 用法 (d)），合并时必须单列，不能与 (b) 类会合共振条目混并。
13. **resonant-periodic-orbit**：与 Vendl 2021 一致（m:n 会合共振，e·P_repeating = n·P_synodic）。可补两点：Vendl 的关键限定是 retrograde（逆行）轨道；1:1 观测性能最优、局部峰在 1:1/4:3/3:2/2:1。与第 12 条的差别成立（基准不同：会合周期 vs 星座基准轨道），两条英文名仅一词之差，合并时建议都收作主词条变体并互指。
14. **sidereal-resonant-orbit**：首条出处 Gupta 等 2023 不在库，原句无法核对；经 Patel 2024、Bhadauria & Frueh 2025 佐证方向正确（2:1/3:1 共振轨道近地近月、覆盖全地月区域，用于监视星座）。"某一恒星参考周期"应具体化为"月球恒星周期 27.32 天（CR3BP 主星周期）"。"频繁接近地月"与 Patel 转引 Frueh 的 "close approaches to the Earth and Moon" 相符。
15. **sun-resonant-orbit**：与 Gao 2023 一致——"准双圆问题"即 QBCP（quasi-bicircular problem）的合理中译，"Sun-resonant orbits remain periodic because their period is a (rational) multiple of the period of the Sun" 支持"保持周期性质"。必须加注：QBCP 中太阳视运动周期 = 月球会合周期 29.53 天（halo-family.md §2），故此"太阳共振"与"月球会合共振"同义，不指回归年；Gao 的标号 1:3、1:4 是 T_轨道:T_太阳（反写），1:4 = Purdue 的 4:1。
16. **synodic-period-resonant-orbit**：与 Klonowski 2023 一致（12 种共振比、会合周期约 29.5 天、Lyapunov/Halo/轴向/垂直/L4-L5 平面与长周期轨道等候选、几何按会合周期重复——构型周期为 lcm(n_i) 个会合月）。准确。中文名"共振周期轨道"与第 12、13 条撞名，合并时统一并互指；注意 Klonowski 的 m:n = 圈数:会合月数，其 1:2 ≈ 59 天。
17. **synodic-resonance**：与 Singh 2021 一致（9:2/24:5/4:1 三候选 NRHO 的周期、近月点、稳定指数见其表 1；"synodic resonance…with respect to the synodic period of the Moon relative to the Sun"；9:2 为 LOP-G 工作轨道）。"中心天体会合周期"措辞不准——是月球相对太阳的会合周期。第二出处 Spreen 2021 §5.3.1 有定义句（p:q = p 圈/q 个月球周期；9:2 = 9 圈/2 会合月）。
18. **synodic-resonance-ratio**："月球会合周期与轨道周期的比值"与 Fu 2022 的表述方向一致（"resonance ratios between the lunar synodic cycle and their orbital periods"；9:2 ↔ 6.563 天）；数值上该商 = 圈数比 p/q，与 9:2 标号自洽，不算错误，但建议统一为"p 圈/q 个会合月"的计数表述以免方向歧义。参考文献字段误填本地绝对路径，按路径名论文为 Fu 2022（stochastic stationkeeping，在库）；"LOP-G 任务"与 Fu 原文（两个 LOP-G 候选 NRHO）一致。
19. **synodic-resonant-orbit**：主干与 ZS 2022 一致（会合共振+慎选共振比与历元可在高保真模型中保持避食；共振轨道是 NRHO↔DRO 转移的中间结构）。一处不精确：举例"3:4、4:3"在 ZS 2022 中是 ATD 目录的 CR3BP 平面共振轨道（恒星基准），不是会合共振；会合共振的例子应举 9:2 NRHO 与高周期晕族成员。中文名"日月会合共振轨道"建议改"（月球）会合共振轨道"。
20. **synodic-resonant-periodic-orbit**：与 Visonneau 2023 一致（术语承自 Vendl 2021；1:1 会合共振 L2 Lyapunov + 近零初始相位角 → 全程光照有利；多星架构的表格以"Fraction of synodic period"标注周期）。准确；"日地月系统公转周期"建议改为"地月系绕太阳视运动的会合周期（29.53 天）"。

总体判断：20 条中约 12 条与论文一致或基本一致。明确错误 4 处：92-synodic-resonance 的"月地连线旋转周期"（基准写错）、92-synodic-resonant-orbit 的"章动"误译（附参考文献本地路径 bug）、out-of-plane-resonant-orbit 的对称面（应为 xz 平面）、exterior/interior-resonant-orbit 的 p>q/p<q 不等号方向（与 V&H 式 7 相反）。另有两处参考文献字段填成本地绝对路径（92-synodic-resonant-orbit → M&H 2023；synodic-resonance-ratio → Fu 2022），两篇论文均在库、词条内容与其相符。Gupta 2023、Frueh 2021 不在库，相关论断只能经转引佐证，无捏造迹象。没有发现成规模凭空捏造的定义；问题集中在：共振基准的措辞（恒星月/会合月/"月地连线旋转周期"不分）、p:q 书写方向、synodic 的中文译名混乱（会合/章动/共旋/共谐/日月会合并存）。

## 6. 主词条建议大纲与术语变体表

### resonant-orbit-family（共振轨道族）大纲

1. **定义**：轨道周期与某参考周期成简单整数比（V&H 2014、P&A 2014、李星明 2024）；多体下为近似共振、星历模型中退化为准周期轨道但保持近似共振比（V&H 2014）；不依附特定平动点（V&H 2014）。
2. **基准周期**：恒星月 27.32 天（CR3BP 主星周期）与会合月 29.53 天（地-月-日几何重复周期；Spreen 2021、Vendl 2021 定义句）两种主要基准；"Sun-resonant"= 会合基准的等价表述（Gao 2023、Ding 2025 §4.2）；He 2025 的星座内部整数倍为第三种用法，单列说明。
3. **p:q 约定**：圈数比正写（V&H、Spreen、Vendl、李星明）与周期比反写（P&A、Ding、Gao/Andreu）并存，给同标号对照表（§2）；interior（p>q，月内）/exterior（p<q，月外）（V&H 式 7）。
4. **族与延拓**：同一共振比延拓成族（V&H 拟弧长）；同一共振比+共振相位角 σ 成族、变未扰偏心率（Ding 2025）；4:3 族全不稳定但可巡游五个平动点、稳定性随 μ 变化（V&H）；面外共振轨道（xz 平面对称）与 axial 共振轨道（非对称）（V&H）。
5. **典型成员**：9:2/4:1/24:5 会合共振 NRHO（Spreen、Singh、Fu）；IBEX 3:1 与 TESS（V&H）；2:1/3:1 监视轨道（Frueh 2021、Gupta 2023 不在库，经 Patel 2024、Bhadauria & Frueh 2025 转引）；DRO 共振比 2:1-4:1（Zhou 2024）；2:1 DRO 与准共振捕获段（Wang 2025-WSB）。
6. **应用**：SDA 观测（Vendl 会合共振逆行轨道 1:1 最优；Klonowski 构型周期 lcm(n_i)；Visonneau 1:1+零相位；Ding 共振族评估与 T=k·T_sun 策略）；避食（Spreen §5.3.2、ZS 2022）；共振导航星座（He 2025）；转移中间结构与系统巡游（V&H、P&A staging orbit、ZS 2022、M&H 2023）。
7. **术语变体表**（旧 URL 重定向到锚点）：
   - 核心概念：共振比（resonance-ratio，注明两种书写方向）、会合共振（synodic-resonance）、会合共振比（synodic-resonance-ratio，Fu 2022 商表述）
   - 恒星基准成员：地月共振轨道（cislunar-resonant-orbit）、月球共振轨道（lunar-resonant-orbit，IBEX 3:1）、恒星共振轨道（sidereal-resonant-orbit）、内域/外域共振轨道（interior/exterior，修正不等号）、4:3 共振轨道族、面外共振轨道（修正为 xz 平面对称）、准共振轨道段（Wang 2025-WSB）
   - 会合基准成员：会合共振轨道（synodic-resonant-orbit，修正 3:4/4:3 例子）、会合共振周期轨道（synodic-period-resonant-orbit = Klonowski；synodic-resonant-periodic-orbit = Visonneau；resonant-periodic-orbit = Vendl——三条同指、撞名统一）、9:2 会合共振（92-synodic-resonance，修正基准表述）、9:2 会合共振轨道（92-synodic-resonant-orbit，修正"章动"误译与参考文献）、太阳共振轨道（sun-resonant-orbit，加注=会合共振、标号反写）
   - 星座内部用法：共振周期轨道（resonant-period-orbit，He 2025，单列并与会合基准条目互指）

合并障碍评估：概念分层清楚（定义与基准 / 书写约定 / 族 / 成员 / 应用），需要裁决的只有三类：(a) 三条"共振周期轨道"撞名——resonant-period-orbit（星座内部整数倍，He 2025）与 resonant-periodic-orbit / synodic-period-resonant-orbit / synodic-resonant-periodic-orbit（会合共振，Vendl/Klonowski/Visonneau）基准不同，不能合并为同一定义，只能在主词条内分节并互指；(b) p:q 两种书写方向与两种基准并列注明，不必统一，但主词条示例须固定一种（建议 V&H/Spreen 正写+按成员注明基准）；(c) 中文译名统一为"会合共振"（现"章动/共旋/共谐/日月会合"均改）。两处参考文献本地路径 bug 直接改填论文名。
