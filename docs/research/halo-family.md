# Halo 轨道族词条合并前调研笔记

调研日期：2026-08-07。目的：核对「Halo 轨道族」约 50 个现有词条的定义是否与原始论文相符，为合并成 3 个主词条（halo-orbit / nrho / lissajous-orbit）做准备。体例仿 docs/research/dro-family.md。

调研范围：资料库中 32 篇论文的 md 正文（`hybrid_auto/<目录名>.md`），均完好可读。任务清单的 11 篇优先论文全部在库；按词条参考文献补读了 21 篇。

不在库、无法核对的出处（共 5 处）：Richardson 1980（halo 解析解原始论文）、Howell 1984（稳定 halo 族）、Xie 等 2024（ncho 词条出处）、梁伟光等 2017（quasi-halo-orbit 词条出处）、《关于探测器定点在共线平动点附近的控制问题》（vertical-amplitude / in-plane-amplitude 词条出处）。另：halo-southern-family 标 Grebow 2006，库内只有 Grebow 等 2008《Multibody orbit architectures for lunar south pole coverage》，主题吻合，年份存疑。

论文简称：

- Parker & Born 2008 = *Direct lunar halo orbit transfers*
- Parker & Anderson 2014 = *Low-Energy Lunar Trajectory Design*（JPL 专著）
- Gordon 2008 = *Transfers to Earth-Moon L2 halo orbits using lunar proximity and invariant manifolds*（硕士论文）
- Gómez 2001 = *Dynamics and Mission Design Near Libration Points, Vol. I*（共线点卷）
- Howell 1997 = Howell 等 1997, *Application of dynamical systems theory to trajectory design for a libration point mission*
- Alessi 2009 / 2010 = *Leaving the Moon by means of invariant manifolds…* / *Two-manoeuvres transfers between LEOs and Lissajous orbits…*
- Conti 2025 = Conti & Circi 2025, *Design of halo orbit constellation for lunar global positioning and communication services*
- Gao & Hou 2020 = *Coverage analysis of lunar communication/navigation constellations based on halo orbits and DROs*
- Qi & Oguri 2023 = *Analysis of Autonomous Orbit Determination in Various Near-Moon Periodic Orbits*
- Spreen 2021 = Spreen 学位论文 *Trajectory design and targeting for applications to the exploration program in cislunar space*
- Zimovan-Spreen 2022 = *Dynamical structures nearby NRHOs with applications to transfer design in cislunar space*
- 其余按作者、年份简写，与词条参考文献一致。

## 1. Halo 轨道标准定义

各论文对 halo 轨道的表述，按要点归纳：

- **CR3BP 共线平动点附近的三维周期轨道，Lyapunov 平面族分岔产生**。Gómez 2001（§2.1.1）：A halo orbit is a spatial periodic orbit of the RTBP in synodic coordinates…its projection on the (y,z)-plane is homeomorphic to a circumference，且 obtained from the Lyapunov families…when the frequencies on the (x,y)-plane and the vertical one are identical，即面内频率与垂直频率相等时从 Lyapunov 族分岔出 halo 族。Alessi 2009（§2.2）：Halo orbits are three-dimensional periodic orbits that show up at the first bifurcation of the planar Lyapunov family.Howell 1997：a special subset of Lissajous trajectories emerges, precisely periodic solutions that have been labeled halo orbits，即 halo 是 Lissajous 轨迹中频率相等退化成的周期解。Parker & Born 2008：halo 轨道 exist about all three of the collinear Lagrange points（L1/L2/L3 都有，不止 L1/L2）。
- **关于 x-z 平面对称**。Gómez 2001（§2.1.1）：The halo orbits are symmetric with respect to the (x,z)-plane. Conti 2025（§3）同，并指出每圈两次垂直穿越 xz 平面。
- **南北两族关于 xy 平面互为镜像**。Parker & Born 2008（§Background）：Since the force field in the CRTBP is symmetric about the x-y plane, and since halo orbits are asymmetric about this plane, each halo orbit solution to the CRTBP comes in a symmetric pair with a northern and a southern variety；同一族内成员 only differ by the sign of their z and ż components。Gao & Hou 2020（§2.1）：They are symmetric to each other w.r.t. the x−y plane. 判定标准（Conti 2025 §3）：referred to as north and south, depending on whether the apolune was located above or below it，即**远拱点在 xy 平面以上者为北族**。注意两个对称性不要混：单条 halo 轨道自身关于 xz 平面对称、关于 xy 平面**不**对称；南北两族之间关于 xy 平面镜像。
- **Class I = 北族，Class II = 南族**。Alessi 2009（§2.2）：They are known as north and south class halo families or also first class and second class halo families. Howell 1997 明确写 northern (Class I)、(Class II) southern。库内另有佐证：Ross 2022 halo orbits of class I (northern) and class II (southern)；Fowler & Paley 2023 引 Richardson 原始定义：Class I 的 +z 顶部偏向 −x 方向，Class II 偏向 +x。词条的对应关系正确。
- **多数不稳定，族内有线性稳定子段**。Parker & Born 2008：Since halo orbits in the Earth-Moon system are unstable, they have associated invariant manifolds. Conti 2025（§1）：most halo orbits can be classified as unstable, and some can be classified as stable。稳定性判据（Conti 2025 §3）：由一周状态转移矩阵（单值矩阵）的非 1 特征值构造两个指数 ν1、ν2，A halo orbit is said to be stable if ν1 and ν2 are both real and have an absolute value lower than or equal to 1。稳定段数字（同处）：L1 stable halo orbits are characterized by T and Az, which are approximately 9.4 d and 74,000 km…whereas the L2 orbits are approximately 10 d and 77,600 km。Spreen 2021（§4.2.1）用 stability index 表述同一结构：L2 NRHO 段的稳定指数在 1~1.69（含 mildly unstable 成员），而 halo 族从 L2 Lyapunov 族分岔处的稳定指数高达 606.11，即族两端剧不稳定，中间有近稳定段（NRHO 即据此界定，见第 2 节）。
- **Richardson 三阶解析解与标称轨道**。Gómez 2001（§1.2.2）：Richardson 用 Lindstedt-Poincaré 方法以线性解为首项逐阶逼近，给出共线点附近周期运动的三阶解析解。工程用法（李宸硕 2024 §1）：Halo 轨道初值利用 Richardson 三阶解析解得到，经过修正后积分得到完整的周期轨道，即三阶解析解作初值、微分修正得精确轨道。李宸硕原文未用标称/nominal 一词，但解析解生成的轨道确实是计算偏离量和流形起点的基准（§3）。
- **Az 振幅参数化（三种约定并存）**：(a) Gómez 2001（§2.2.1）：解析展开中 α 为面内（x）振幅、β 为面外（z）振幅，取基频余弦项系数；halo 轨道存在的条件是频率相等化为约束关系 Δ(α,β)，且面内振幅须不小于 α_min（Δ(α,0)=0 的解，halo 族自此从 Lyapunov 族分岔）。(b) Kakoi 2014（§5.1）：The size of a periodic halo orbit is distinguished by the z amplitude, Az, of the orbit which is measured from the x-axis to the largest excursion of the orbit，即 Az = 轨道偏离 xy 平面的最大 |z|，是工程文献最常用的尺度参数（Gordon 2008 以 Az=1000~10000 km 扫描 L2 halo 族；彭坤 2016 取 Az=8000 km 北向 halo；李宸硕 2024 用法向振幅/z 向振幅 Az）。(c) Spreen 2021（§5.1）：The z-amplitude is computed by subtracting the minimum z-component along the orbit from the maximum z-component，即峰峰值约定；对南族 NRHO，z_max≈0，峰峰值数值上≈|z_min|，与 (b) 几乎不可区分，但对一般 halo 两者可差近一倍，词条必须写明约定。
- **L1/L2/L3 各自特点**。L1 halo：位于地月之间，覆盖月球正面；L2 halo：位于月球外侧，覆盖月球背面：Parker & Anderson 2014（§2.6.9.4）a satellite in a halo orbit has an unimpeded view of both the Earth and either the near-side of the Moon or the far-side of the Moon, for lunar L1 and L2 halo orbits, respectively。南族补充（同处）：a satellite in a southern orbit spends more than half of its time below the Moon's orbital plane, which gives that satellite benefits for communicating with objects in the southern hemisphere of the Moon. L3 halo：远离月球（地月 L3 在地球背月一侧），不稳定、需保持（Conti 2025）；族中稳定成员近地点低于地表不可用（the L3 orbits have perigee below the Earth's surface and were not considered），选用的不稳定 L3 halo 远地点高度约 74 万千米、周期约 26.6 天（Conti 2025 Table 3：远地点 740,626/740,043 km，周期 26.57/26.67 d，注意是**距地表高度**）。

综合（主词条定义骨架）：Halo 轨道是 CR3BP 中共线平动点（L1/L2/L3）附近的三维周期轨道，当面内频率与面外频率相等时从平面 Lyapunov 族分岔产生；轨道关于 xz 平面对称；因 CR3BP 力场关于 xy 平面对称而成对出现北族（远拱点在 xy 平面以上，即 Class I）与南族（Class II）两个镜像族；族内多数成员不稳定（双曲特性带来不变流形，是低能转移的基础），中段存在线性稳定子段（地月 L1 稳定段周期约 9.4 天、Az 约 74,000 km，L2 约 10 天、77,600 km）；族内成员以面外振幅 Az 参数化，初值可由 Richardson 三阶解析解给出。

## 2. NRHO（近直线晕轨道）

- **定义：以稳定性界定的 halo 族子集，而非以振幅比界定**。Spreen 2021（§4.2.1）：The NRHOs are defined as the subset of the halo orbits with bounded linear stability, i.e., the NRHOs are stable or nearly-stable…an L2 NRHO is defined as a halo orbit between the first and third members of the family that reflect stability changes，即 L2 NRHO = 第一、第三次稳定性变化之间的 halo 轨道，对应近月点半径 1832~17390 km；L1 NRHO 为第一、第四次稳定性变化之间（晋守聪 2025 §1.2：近月点半径 900~19000 km、周期 8~10 天）。Gao 2023（§1）：NRHO correspond to the first interval of linear stability along the halo families（晕轨道族中线性稳定的第一段，halo-orbit-family 词条此句有明确出处）。形态描述（Gao 2023 §1）：a close passage to the small primary, as well as a large out-of-plane amplitude；Singh 2021（§3.1）：characterized by low periselene altitude as well as a near-stable behavior。词源（Spreen 2021 §1.3.3）：Howell & Breakwell 1983 年提出 almost rectilinear halo orbits 的近似，即今之 NRHO。词条 nrho 的 Az 远大于面内振幅 Ay、腰果形演变为近似直线在这几篇中无原文（腰果形比喻未找到出处），但数值关系成立：Spreen 2021 附录 C 给出 9:2 NRHO 三向振幅 [Amp_x, Amp_y, Amp_z] = [13090, 31925, 73197] km，Az 确为面内振幅两倍以上。建议定义以稳定性+近月点低+面外振幅大表述，振幅比作形态说明。
- **9:2 会合共振 NRHO 的精确数字**（Spreen 2021 附录 C Table C.1，CR3BP）：周期 6.5556 天、近月点**半径** 3153 km、远月点半径 71230 km、雅可比常数 3.04719。工程文献的约数：Capannolo 2023（§2.3）perilune and an apolune of 3200 km and 70000 km approximately, and an orbital period of 6.5 d；Bucchioni 2023（Table 1）rp=3225 km、ra=71170 km、T=6.56 天、Az=69959 km。词条 6.5 天/3200 km/70000 km 与 Capannolo 一致，注意论文给的是月心半径而非高度。
- **共振基准：月球会合周期，不是太阳年**。Spreen 2021（§5.3.1）：A 9:2 synodic resonant NRHO possesses a period of approximately 6.556 days such that nine revolutions along this orbit are completed over two synodic periods of the Moon，即 9 圈 / 2 个会合月（≈29.53 天）。Zimovan-Spreen 2022（§3）：The L2 southern lunar synodic resonant 9:2 NRHO is the current baseline for the Gateway. Gao 2023 确实用 Sun-resonant NRHOs 并说周期是太阳周期的有理数倍，但其 QBCP 模型里太阳的视运动周期数值上等于月球会合周期（ω_S=0.9252，T_S≈6.79 无量纲单位≈29.53 天），与太阳共振和月球会合共振是同一共振的两种表述，都不指回归年。词条 resonant-nrho 的表述有 Gao 2023 原文依据，但必须加注澄清，否则读者会以为周期与 1 年成整数比。
- **Gateway 与 CAPSTONE**。Zimovan-Spreen 2022、Spreen 2021（§5.3.2）：L2 南族 9:2 会合共振 NRHO 是 Gateway 的标称轨道（选它的原因之一是避食几何：会合共振使地-月-日几何按会合月重复）。晋守聪 2025 引言：CAPSTONE 2022 年进入 NRHO 并在轨运行至少 6 个月，评估导航与轨道保持。Qiao 2025 亦证实 CAPSTONE 在 NRHO 验证自主导航。
- **稳定性**。稳定指数 1~1.69（Spreen 2021），含近稳定成员；晋守聪 2025：稳定性指数均在±1附近。
- **ncho（近圆晕轨道）不成立**。整个论文库检索 nearly circular halo orbit/NCHO 零匹配；词条出处 Xie 等 2024 不在库。偏心率接近 1、远月点近似圆周的描述也自相矛盾（偏心率接近 1 的是近直线形态本身）。建议删除该词条或标注存疑，不并入 nrho 主词条的术语变体表。
- **NRHOI（入轨机动）**。Kikuchi 2024：NRHOI = Near-Rectilinear Halo Orbit Insertion，通用术语；词条说到达近月点时施加，这只适用于近月点交会法（PRM：NRHOI is conducted when the spacecraft reaches the perilune of the NRHO），间接转移（IDT）的 NRHOI 在真近点角 160° 处实施。燃耗对比有明确出处：the ΔV of an NRHOI is inefficient because it contains a non-velocity vector increment（IDT 的 NRHOI=240.3 m/s），PRM 中 NRHOI and PLSB are only velocity increments to the velocity vector（NRHOI 仅 55.0 m/s）。PRM 全称 perilune rendezvous method：TLI→近月点制动（PLSB）进长椭圆绕月轨道等待约两周，待轨道面与 NRHO 对齐后在近月点沿速度方向施加 NRHOI 直接进入 NRHO 并与 Gateway 交会。
- **应用**（除第 4 节转移外）：晋守聪 2025 用 L1/L2 南北族 NRHO（按近月点半径 2000~16000 km 参数化选轨，不用 9:2）构建月球全球定位星座，最优构型为四轨 16 星（L1、L2 南北族各 4 星，rp≈12000 km），极区 GDOP<3，优于同规模 halo 星座；Capannolo 2023 把 Gateway（9:2 NRHO）周围的准周期不变环面（QPT）用作 Orion 伴飞的天然有界区域，以 MPC 在环面上做相位重构（环面相对距离变化范围 102~1824 km，旋转数 46.9°/圈）。

## 3. Lissajous 轨道与准周期轨道

- **Lissajous 定义**。Canalias 2008（§2.1）：线性化系统中心子空间的准周期解 an harmonic motion in the ecliptic xy-plane…and an uncoupled oscillation in the z-direction with a different period；（§2.2）取双曲振幅 A1=A2=0 即得 Lissajous，Ax, Az being the maximum in-plane and out-of-plane amplitudes。即**一个面内频率 + 一个不同的面外频率**，两个振幅为自由参数。Renk 2010（§2.3）：Lissajous are defined to be orbits with an in- and out-of-plane oscillation. However, the frequencies of the oscillation of the in- and out-of-plane motion differ.动力学定位（Folta 2014 §3.3）：Lissajous 是围绕**垂直（vertical）周期轨道**的中心流形上的二维环面；Alessi 2010（§2）：两基本频率在振幅趋于零时分别趋于垂直频率 ωv 与面内频率 ωp。
- **与 halo 的区分**。Renk 2010（§2.3）：Halo orbits also have an in- and out-of-plane motion, but here the frequencies are equal and therefore the orbits are periodic. 对称性一处与词条相反：Renk 2010 说 Lissajous can be seen as quasi-symmetric to the xy-plane and the xz-plane，而 halo The symmetry to the xy-plane of the primaries does not exist anymore，说明是 Lissajous 保有（准）对称性、halo 失去 xy 平面对称，词条 lissajous-orbit 的 Lissajous 不具有关于 xOz 平面的对称性与此冲突，需改。
- **square Lissajous**。Alessi 2010（§3）：We refer to square Lissajous orbits as Lissajous orbits characterized by α3 = α4（面内振幅 = 面外振幅），原文未解释 square 指什么形状。词条使轨道在 xy 平面和 z 方向的运动周期相同与原文直接矛盾（§2 明确 with diferent periods）；便于地面站跟踪未找到出处。日食规避是 Lissajous 两参数族整体的优点（the eclipse avoidance problem can be solved in a non-expensive way），不与 square 约束绑定。
- **quasi-halo（准晕轨道）**。Folta 2014（§3.3）：the quasi-halo orbits lie in the center manifold of the central halo orbit，即围绕 halo 轨道的准周期轨道（环面）。Renk 2010（§2.3）给了生成关系：Quasi-Halo orbits emerge from Lissajous orbits from a certain minimum boundary value of the out-of-plane amplitude. At this boundary amplitude the Lissajous orbits loose their symmetry with respect to the xy-plane and start to develop an exclusion zone about the line connecting the primaries，即面外振幅**超过**某下界后 Lissajous 变为 quasi-halo，与词条偏离 halo 轨道面的面外振动幅值较小的表述方向相反。Gómez 2001 第 7 章给出 halo 周期轨道族附近的准周期解的解析构造，是同一对象的早期处理（书中无 quasi-halo 一词）。
- **osculating Lissajous 六要素**。Renk 2010（§2）：[A1, A2, Ax, Az, Φxy, Φz]…similar to the osculating Kepler elements，其中 A1 不稳定振幅、A2 稳定振幅（分别对应不稳定/稳定流形方向的指数项）、Ax 面内振幅（Ay=c2·Ax 成比例，不单列）、Az 面外振幅、Φxy 面内相位、Φz 面外相位。词条与原文一致。
- **ARTEMIS**。Folta 2012（§1.1）：P1 于 2010-08-25 进入地月 L2 Lissajous 轨道，P2 于 2010-10-22 进入地月 L1 Lissajous 轨道，各经一次 Lissajous 入轨机动（LOI）；转移路径经月球重力辅助和日地平动点/弱稳定边界区域（最远约 150 万 km），属重力辅助+少量机动+末段入轨的低能量转移。Folta 2010 站保：控制点 targeting、全局角度搜索、轨道延续三类策略，星历模型含误差下延续法最优，站保下限约 15 m/s/年、预算 <25 m/s/年；ARTEMIS 的 L2 y 向振幅约 60,000 km。Folta 2014（§3.4、§6）用庞加莱图事后判定：三条 ARTEMIS 平动点轨道实为大 quasi-halo 轨道的弧段：each of the ARTEMIS orbits is a southern large quasi-halo orbit。故 ARTEMIS 用 Lissajous（Folta 2010/2012 设计口径）与 ARTEMIS 用 quasi-halo（Folta 2014 事后判定）都有出处，词条应注明两种口径。
- **high z-amplitude mode（高 z 幅值模式）**。Folta 2014（§3.2）：非线性模型中 z 幅值不再恒定，cycles between high and low z-amplitude modes；改变进入相位可选择进入环面的位置从而选择 z 幅值模式。（§3.3）quasi-halo 在庞加莱图上的穿越点位于图的上、下两个区域，分别对应高、低 z 幅值模式。（§3.4）ARTEMIS 在 L2 侧利用高 z 幅值模式适应弹道转移的面外到达条件（insertion conditions are dictated by the ballistic Sun-Earth to Earth-Moon transfers），P1 离开 L2 与 P2 在 L1 则利用低 z 幅值（近面内）相位以降低进入低倾角月球轨道的 ΔV。词条基本准确，可补低 z 相位的用途。
- **quasi-periodic-halo-orbit 词条的概念混淆**。词条定义真实星历模型下晕轨道受太阳摄动形成的准周期轨道，出处标 Gómez et al. 2001, Ch.3：该章实际是 halo 轨道邻域的 Floquet 模与不变流形数值研究，无此术语。定义本身描述的是 dynamical substitute（动力学替代轨道）概念，与 CR3BP 内 halo 周围的准周期轨道（即 quasi-halo，Gómez 2001 第 7 章）是两个不同对象，合并时需拆开归属。

## 4. 转移应用

- **直接转移（Parker & Born 2008）**。词条定义与论文一致：两脉冲：185 km 圆 LEO 上的地月转移入射（TLI）+ 流形插入点的**切向**机动（transfers with only two burns that are each performed in a direction tangential to the spacecraft's velocity vector），第二次机动把航天器送入目标 halo 的稳定流形，it asymptotically transfers onto the lunar halo orbit。数字：5 天快速转移 3.6~4.1 km/s；最低 3.59~3.65 km/s 但需三周以上；perigee-point 方案约 4.14 km/s、17.7~22.9 天。论文示例全部是 northern L1 halo 与 southern L2 halo。
- **流形转移（Gordon 2008）**。LEO→地月 L2 平面 Lyapunov 与低幅值 halo（Az=1000~10000 km）：在月球近旁施加流形入轨机动进入稳定流形；入轨机动最小 0.282 km/s（Az=1000 km、入射角 φ=0°、月高 2240 km），短转移 2.5~4.3 天、长转移 9~20 天；总 ΔV（含地球出发）比流形入轨机动大约一个数量级。引 Farquhar：到 L2 的间接转移 ΔV 远低于直接转移。彭坤 2016 是反方向（环月轨道 100 km→L2 北向 halo，Az=8000 km）：利用左向稳定流形可靠近月球的特性，零消耗转移（流形最小月心距等于环月轨道半径时入轨点无需变轨）全相位至多 2 条，环月逃逸 652.75 m/s、14.2/14.6 天；改进微分修正实现全相位两脉冲转移，9~19 天、入轨 ΔV 仅 0~8 m/s。
- **南北族间转移（Du 2023）**。地月 L2 北↔南 halo 低推力转移，PMP+同伦框架，两种初值构型：多圈构型（绕平动点多圈旋转）与流形构型（以 L2-0 平面 Lyapunov 的同宿连接为初值拼接出北南 halo 间异宿连接）；流形构型全面占优：推力低至 10 mN 仍可行，38.5 天、1.7 kg 燃料（多圈构型典型值 216 mN、40 天）。Du 2023 全文只用 northern/southern，不用 class I/II；词条 halo-orbit-classification 中异类转移 ΔV 更大、存在振幅下限两句在 Du 2023 和全库检索中均无出处，最接近的是 Haapala & Howell 2016（§7.4）编目的北南 halo 异宿连接只出现在特定雅可比常数区间（L1 halo C=3.0723~3.0787；L2 halo C=3.0686~3.0865），是存在性区间的陈述，与词条表述不等同。
- **异系统 halo-to-halo（Kakoi 2014、李宸硕 2024、Canalias 2008）**。Kakoi 2014 §5：EM halo 与 SE halo 之间的 maneuver-free halo-to-halo transfer，用超平面条件自动搜索，算例含 EML2→SEL2（EMAz=25,000 km、SEAz=163,200 km）等四种组合，并作地月平动点轨道去火星的第一段。李宸硕 2024：拼接日地 L1 南 halo（Az 20 万 km）与地月 L2 北 halo（Az 3 万 km）的不变流形，图 7 题名即异系统平动点转移轨道，词条 heterospace-system-halo-orbit 的异系统表述有该中文文献依据，但属中文论文自造术语，英文文献对应说法是 transfers between the Earth–Moon and Sun–Earth systems（Howell & Kakoi 2006 等），主词条宜用通用表述并注明该词条名的出处。Canalias 2008 做的是日地↔地月 Lissajous 轨道间的自然转移：两个 RTBP 的双曲流形在庞加莱截面上位置匹配，多重打靶细化到 JPL 星历并迭代压低耦合点机动，最好情形零 ΔV、一般 <100 m/s。
- **Halo 穿越（徐明 2010）**。LL1-Halo：Halo 轨道相对于平动点增加了一维度的选择，可供选择的发射窗口更多；但由于 Halo 轨道本身的能量大于平动点，故经由 Halo 轨道穿越得到转移轨道消耗也将大于经由平动点的转移轨道（§3，词条漏了后半句代价）；经 LL1-Halo 穿越得到 (M,N)-圈穿越轨道以构造小推力转移（算例 260 天、80.9 kg）。LL2-Halo：仅外侧转移即 WSB 转移；由于 Halo 轨道的相位成为低能转移轨道的设计维度，因而经由 LL2-Halo 轨道穿越的转移窗口将上升为三维（§3.2）；原文显式参数是 τ（halo 相位）与 β（太阳相位），词条的第三维转移类型（内侧/外侧）是合理归纳而非原文表述（原文 §2.2 把内侧/外侧作为两种转移方式讨论，未列为窗口维度）。
- **晕轨道捕获段（Zanzottera 2011 §3.2）**。两段式设计：日地模型逃逸段 + 地月模型 halo 捕获段；捕获段利用目标 L2 halo 稳定流形的**(exterior) 外部分支**，The stable manifold Ws(λ2) is integrated backwards starting from λ2 until the surface of the section is reached，即是从 halo 轨道**向后**积分至 Poincaré 截面（正演即自然漂入 halo），词条从 Poincaré 截面向后积分至 Halo 轨道把方向写反了。τ_h≥0 是沿 halo 轨道从标称点到入轨点的时间，τ_sm<0 是沿稳定流形向后积分的时间参数，词条对两个参数的描述正确。
- **交会与相位调整**。Bucchioni 2023：phasing 定义为 adjusts the relative phase of the two spacecraft to allow the transfer towards the beginning of the rendezvous and docking（三体问题中用平近点角 M=(t/T)·2π 刻画相位）；比较 Butterfly 族停泊轨道、halo 族停泊轨道、直接相位调整（Lambert+流形）三种策略，评分 21~24 分，no strategy that is drastically better；安全上瞄准目标轨道的不稳定流形而非轨道本身，交会在远月点附近（M∈[100°,180°]）进行。Perozzi & Ferraz-Mello 2010（§5.5.1）的有效相位面（EPP）是 Lissajous 轨道上两星交会与避食设计的工具（有效相位 (Φ,Ψ) 与给定振幅的 Lissajous 轨道状态一一对应）；halo-orbit-rendezvous 词条利用有效相位方法有出处，但原文对象是 Lissajous 轨道，且相位脉冲机动降低对接成本在书中未见明确表述。
- **NRHO 转移**。Singh 2021：sGTO↔南族 L2 NRHO（9:2、24:5、4:1 三条候选）低推力转移，把稳定流形当长滑行弧（9:2 算例：经流形最少燃料 93.2 天/1541 m/s，比直接最短时间方案省约 1040~1236 m/s、多飞约两个月）。Wang 2021：NRHO↔DRO 双脉冲转移（搜索+优化两步法，利用对称性只算南族 NRHO→DRO 再变换），外部转移经近月飞掠与 Lyapunov 样轨道压到 184~248 m/s（9:2 L2 NRHO→DRO 最低 248 m/s/74.9 天）。Zimovan-Spreen 2022：利用 NRHO 邻域分岔出的高周期轨道族（P2HO1 即 butterfly、P2HO2、P4HO1/2）及其流形构造 9:2 NRHO↔DRO 脉冲转移（约 20 天、约 200 m/s 量级），星历模型中以路径约束实现全程避食。Kikuchi 2024：地球→NRHO 的 IDT（5.8 天/593 m/s 含 TLI）、PRM（18.3 天/545 m/s）、WSB（>100 天/60~100 m/s）对比。Pozzi 2025：高保真星历模型下 Gateway（9:2 NRHO）↔LLO（约 36 天）、↔LEO（约 144~153 天）双向最短时间低推力转移。Ul Haq 2026：强化学习解 L2 南 halo→L2 南 NRHO 低推力转移（8.38 天、5.00 kg 推进剂）。
- **Halo2GEO（Patel 2024）**。a manifold insertion from an L1 Halo Orbit followed by a high impulse maneuver into a connecting orbit to GEO. The transfer takes ≈ 23.12 days，是地月空间态势感知语境下的假想**被监视目标**轨道，词条全部要点属实。

## 5. 现有词条勘误

逐条对照（按拟定归并分组；词条 → 结论）。

**入 halo-orbit 的 26 条：**

1. **halo-orbit**：骨架正确（三维周期、xz 平面对称、不稳定、覆盖背面/极区）。两处要改：(a) L1 点 Halo 轨道的雅可比常数为 3.04，周期为 2.740TU（约 27.6 天）：出处 Gordon 2008 全文无这两个数字（其目标轨道是 L2 halo，按 Az=1000~10000 km 参数化）；且按其附录特征时间 1 TU=4.366 天计，2.740 TU≈11.96 天，约 27.6 天换算错误，整句建议删除或更换出处。(b) 环绕 L1 或 L2 平动点宜改为 L1/L2/L3（Parker & Born：exist about all three of the collinear Lagrange points）。
2. **halo-orbit-family**：NRHOs 是晕轨道族中线性稳定的第一段有 Gao 2023 原句支持。前半共线平动点附近周期轨道的集合过简（halo 族是 Lyapunov 族分岔出的特定周期轨道族，不是附近周期轨道的泛称），建议按 Gómez/Conti 改写。
3. **halo-orbit-classification**：Class I=北、Class II=南正确（Howell 1997 出处成立）。I 类和 II 类间转移的总速度增量通常比同类间更大，且存在振幅下限一说未找到出处（Du 2023 无此说；Haapala & Howell 2016 仅有异宿连接存在的雅可比区间），建议删除或改引 Haapala & Howell 2016 并重述为存在性区间。
4. **northern-halo-orbit**：正确（镜像成对、位于 xy 平面上方）。可补判定标准（远拱点在平面以上，Conti 2025）与北极覆盖（Gao & Hou 2020）。
5. **southern-halo-orbit**：正确；一半以上时间位于月球轨道平面以下、利于南半球通信有 Parker & Anderson 2014 原句支持。
6. **northern-halo-family**：与 Gao & Hou 2020 一致（远拱点在平面以上、北极覆盖更好）。与 northern-halo-orbit 同义，合并时并为一条。
7. **southern-halo-family**：同上，与 southern-halo-orbit、halo-southern-family 三条同义，并为一条。
8. **halo-southern-family**：内容正确但与 7 重复；出处 Grebow 2006 应为 Grebow 等 2008（库内实有，主题即南族 halo 覆盖月球南极），改年份。
9. **class-i-halo-orbit**：Class I=北正确；但关于 z=0 平面对称表述错误：单条 halo 轨道关于 xz 平面对称，关于 z=0（xy）平面并不对称，是南北两族**之间**关于 z=0 平面镜像（Parker & Born 2008 明确 halo orbits are asymmetric about this plane）。需改。
10. **class-ii-halo-orbit**：同 9。
11. **l1-halo-orbit**：Qi & Oguri 2023 的机制性结论支持大方向（视直径恒定时 OPNAV 最好、离月越近位置估计越好），但无 L1 halo 近月点近、视直径变化小的逐字句；可保留，措辞建议贴机制表述。
12. **l2-halo-orbit**：后半句张冠李戴：Qi & Oguri 2023 说视直径变化范围大、对相机要求高的是 **NRHO**（该文中的 L2 Halo #2/#6），而词条把 NRHO 归为幅值较小类后、把相机问题安到较大幅值 L2 halo 头上，前后矛盾且与出处相反。需改为：NRHO 近远月点距离差大，固定视场下远月段像面浪费严重（Qi & Oguri §6.1、§7）。
13. **l3-halo-orbit**：数字与 Conti 2025 相符（远地点高度 740,626/740,043 km、周期 26.57/26.67 天、近地点低于地表者不可用、不稳定需保持）。周期约 27 天可接受；注意远地点是距地表高度。基本准确。
14. **ll1-halo**：错误两条：(a) 连续遮挡应为连续可见/无遮挡视线（Parker & Anderson 2014：unimpeded view）；(b) 覆盖对象反了：L1 halo 覆盖月球**正面**（near-side），覆盖背面的是 L2 halo（respectively）。定义需重写。
15. **ll2-halo**：覆盖背面对，连续遮挡错，应为连续可见。
16. **em-halo**：三维周期轨道、L1/L2 附近与 Kakoi 2014 一致；以大幅值 z 方向振幅为特征是词条发挥：Kakoi 只说 Az 用来标记轨道大小（The size of a periodic halo orbit is distinguished by the z amplitude），并无大幅值定义。删该句。
17. **se-halo**：与 Kakoi 2014 一致。准确。
18. **lunar-halo-orbit**：与 Parker & Born 2008 一致（CR3BP 已知解、分南北族、不稳定→稳定流形→低能转移）。可补 L3。准确。
19. **nominal-halo-orbit**：李宸硕 2024 未用标称/nominal 一词，但 Richardson 三阶解作初值、解析轨道作偏离量与流形基准的用法与词条吻合。定义可保留，注明术语是词典命名、原文只称初值/解析解生成的轨道。
20. **stable-halo-orbit-family**：ν1/ν2 定义与 L1 9.4 天/74,000 km、L2 10 天/77,600 km 全部与 Conti 2025 相符。不需主动控制即可长期维持略强：线性稳定不等于无需控制（Gao & Hou 2020 引 Davis 等：稳定 halo 年保持约 7.79 m/s），建议软化为保持消耗极低。
21. **amplitude**：定义偏离平动点所在平面的最大距离在出处李宸硕 2024 中无定义句；与 Kakoi 2014 的 Az 定义（measured from the x-axis to the largest excursion）实质一致，建议改引 Kakoi 并注明这是三种振幅约定之一。
22. **amplitude-relation**：与 Gómez 2001 §2.2.1 一致（Lindstedt-Poincaré 框架下面内振幅 α 与面外振幅 β 须满足约束 Δ(α,β)，且 α≥α_min）。准确。
23. **z-amplitude**：与 Spreen 2021 一致（z 最大值减最小值，峰峰值）。建议注明与 Kakoi 最大 |z| 约定的差异。
24. **vertical-amplitude**：α/β 记号与 halo 须满足频率约束的方向和 Gómez 2001 一致；出处《关于探测器定点在共线平动点附近的控制问题》不在库，无法核对原句，建议改引 Gómez 2001。β 独立于 α 仅在线性解成立，宜注明。
25. **in-plane-amplitude**：同 24。
26. **halo-orbit-amplitude**：Az 决定晕轨道大小有 Kakoi 2014 支持；决定月球背面通信遮蔽角无出处（词条自标暂无参考文献），且 Parker & Anderson 2014 强调 halo 轨道的特点恰是视线**无遮挡**。删遮蔽角句。

**入 nrho 的 6 条：**

27. **nrho**：主词条材料丰富，四处要改：(a) 定义改为以稳定性界定的 halo 族子集（Spreen 2021/Gao 2023/Singh 2021），Az 远大于 Ay 降为形态说明，腰果形比喻无出处；(b) 近月点高度极低：通常低于 100 km 一说错误：9:2 NRHO 近月点半径约 3153~3225 km，L2 NRHO 区段 1832~17390 km（均为月心半径），低于 100 km 在任何所引论文中都无依据；(c) 共振表述 T/T_M≈n/m 称为 m:n 含混，应写明 9:2=9 圈/2 个会合月（会合周期 29.53 天）；(d) 微分修正段（xz 平面取初值、垂直穿越条件）与标准做法一致但无直接出处，可保留为方法说明。Ul Haq 2026 段数字（C_J 3.1211/14.55 天→3.0395/6.99 天，8.38 天、5.00 kg）已与论文核实无误；鹊桥为 L2 halo 轨道（非 NRHO），Qiao 2025 证实，表述已注明是 halo，可保留但建议写明轨道族应用。
28. **92-resonant-nrho**：与 Capannolo 2023 一致（6.5 天、3200/70000 km）；建议补 Spreen 2021 精确值（6.5556 天、3153/71230 km、JC 3.04719）并注明是月心半径。高稳定性表述成立（稳定指数 1~1.69）。
29. **resonant-nrho**：与太阳共振有 Gao 2023 原文依据（Sun-resonant NRHOs），但必须加注：该太阳周期是太阳在地月旋转系中的视周期=月球会合周期 29.53 天，与 Purdue 文献的 lunar synodic resonant 是同一共振；不是与回归年成整数比。
30. **ncho**：库内无任何 nearly circular halo orbit 依据，出处 Xie 2024 不在库，定义自身矛盾（偏心率接近 1 与远月点近似圆周不通）。建议删除或标注存疑。
31. **nrhoi**：基本准确（Kikuchi 2024：非速度矢量分量、PRM 沿速度方向均原句支持）；一处修正：到达近月点时施加仅适用于 PRM，IDT 的 NRHOI 在真近点角 160°处实施，定义应泛化为进入 NRHO 的入轨机动。可补数字：IDT 240.3 m/s vs PRM 55.0 m/s。
32. **nrho-transfer**：定义空泛但不错；出处 Pozzi 2025 实算 Gateway↔LLO/LEO 双向低推力转移，可补实质内容。

**入 lissajous-orbit 的 8 条：**

33. **lissajous-orbit**：主干正确（两频率不同、准周期、不闭合、有界）。两处改：(a) 不具有关于 xOz 平面的对称性与 Renk 2010 相反：Lissajous 对 xy、xz 平面均准对称，失去 xy 平面对称的是 halo；(b) SOHO 运行在 Lissajous 轨道上、是 Lissajous 轨道最著名的应用一说有误：SOHO 实际在日地 L1 的 **halo** 轨道（公认事实，库内无直接出处），建议删除该例或改为 ARTEMIS（Qiao 2025 证实 ARTEMIS 在 Lissajous）。入轨更容易、维持消耗更高两句无出处，建议删或标注。
34. **lissajous-trajectory**：误引：Catlin 2007 研究地月**三角**平动点编队，全文无两个面内振动+一个面外振动的 Lissajous 定义；且两个不同频率的面内振动本身错误（共线点 Lissajous 是一个面内频率+一个面外频率，Canalias 2008 §2.1）。改引 Canalias 2008 或 Renk 2010。
35. **square-lissajous-orbit**：α3=α4（面内=面外振幅）有 Alessi 2010 原句；使运动周期相同与原文矛盾（Lissajous 两频率按定义不同），删；便于地面站跟踪无出处，删。
36. **lissajous-orbit-insertion**：与 Folta 2012 一致（P1→L2 2010-08-25、P2→L1 2010-10-22，各经一次 LOI 机动）。准确。可补 Folta 2014 的事后判定（实际为大 quasi-halo 弧段）。
37. **osculating-lissajous-elements**：与 Renk 2010 一致（六要素 A1、A2、Ax、Az、Φxy、Φz；Ay=c2·Ax 不单列）。准确。
38. **quasi-halo-orbit**：大方向对（halo 附近的准周期轨道），但偏离 halo 轨道面的面外振动幅值较小不准确：Renk 2010 说 quasi-halo 是面外振幅**超过某下界**的 Lissajous（失去 xy 平面对称、出现禁区）；Folta 2014：位于 halo 中心流形上。出处梁伟光 2017 不在库，改引 Folta 2014/Renk 2010。工程可实现性更强而成为实际任务常用选择一句可用 ARTEMIS（Folta 2014）支撑。
39. **quasi-periodic-halo-orbit**：概念混淆（见第 3 节末）：定义描述的是星历模型下的动力学替代轨道，出处章（Gómez 2001 Ch.3）无此术语。建议拆分：CR3BP 内 halo 周围准周期轨道并入 quasi-halo；真实模型准周期化表述改写并另寻出处。
40. **high-z-amplitude-mode**：与 Folta 2014 一致（庞加莱图上/下区域对应高/低 z 幅值模式；L2 插入利用高 z 幅值适应弹道转移面外到达）。准确；可补 P1 离开 L2、P2 在 L1 利用低 z 幅值相位降 ΔV。

**入 halo-orbit 转移应用节的 10 条：**

41. **halo-orbit-transfer**：定义空泛（从晕轨道出发利用不稳定流形转移）但方向不错；出处 Cheng 2017 在库未逐字核对。建议保留为节锚点、补充实例。
42. **halo-to-halo-transfer**：与 Kakoi 2014 一致（不同三体系统 halo 间的 maneuver-free 转移，EML2→SEL2 等）。准确。
43. **north-south-halo-orbit-transfer**：与 Du 2023 一致；Az 相反、周期相同是镜像对称的正确推论。可补两种构型与数字（流形构型 10 mN/38.5 天/1.7 kg）。
44. **direct-lunar-halo-orbit-transfer**：与 Parker & Born 2008 一致（两脉冲、切向、稳定流形渐近进入）。准确；可补 3.59~4.14 km/s、5~23 天数字。
45. **heterospace-system-halo-orbit**：异系统有李宸硕 2024 图题依据，定义与论文用法一致；注明属中文文献术语，英文对应 Earth–Moon and Sun–Earth systems 间转移。
46. **halo2geo**：与 Patel 2024 完全一致（L1 halo→流形入轨+脉冲→GEO，≈23.12 天，SDA 假想目标）。准确。
47. **halo-capture-stage**：基本准确；一处方向错误：原文是从 halo 轨道向后积分至 Poincaré 截面，词条写反。τ_h、τ_sm 描述正确。
48. **halo-orbit-rendezvous**：有效相位方法出自 Perozzi & Ferraz-Mello 2010（§5.5.1 EPP），但原文对象是 Lissajous 轨道交会；相位脉冲机动降低对接成本未见明确表述。建议改为以 Bucchioni 2023（NRHO phasing 定义）为主出处。
49. **ll1-halo-orbit-transit**：与徐明 2010 一致（增加一维选择、窗口更多、(M,N)-圈穿越构造小推力转移）；建议补原文后半句消耗也将大于经由平动点的转移轨道。
50. **ll2-halo-orbit-transit**：WSB 转移、三维窗口与徐明 2010 一致；三元组 (β, τ, 内侧/外侧) 是归纳：原文显式参数只有 τ（halo 相位）与 β（太阳相位），内侧/外侧是转移方式分类。微调即可。

总体判断：50 条中约 22 条与论文一致或基本一致，其余需修正表述、更换出处或并流删除。明确的事实性错误 10 处，分布在 10 个词条：halo-orbit 的 27.6 天换算错误、class-i-halo-orbit 与 class-ii-halo-orbit 的关于 z=0 平面对称、ll1-halo 的覆盖对象（应为月球正面）与连续遮挡、ll2-halo 的连续遮挡、l2-halo-orbit 的相机问题对象（应为 NRHO 而非大幅值 halo）、nrho 的近月点低于 100 km、lissajous-orbit 的 SOHO 例子与对称性表述、lissajous-trajectory 的两个面内频率、square-lissajous-orbit 的周期相同。没有发现成规模凭空捏造的定义；问题集中在：具体数字的换算与单位（月心半径/距面高度）、对称性归属（单轨道 xz 平面对称 vs 南北两族 xy 平面镜像）、共振基准（月球会合周期 vs 太阳周期措辞）、术语出处的忠实性（误引 Catlin 2007、Grebow 年份、ncho 库内无据）。

## 6. 三个主词条的建议大纲

### halo-orbit（Halo 轨道）

1. **定义**：CR3BP 共线平动点附近三维周期轨道；面内外频率相等时从 Lyapunov 平面族分岔产生（Gómez 2001、Alessi 2009、Howell 1997）；关于 xz 平面对称；halo 形态（yz 投影呈环状，Gómez 2001）。
2. **南北族与类别**：力场 xy 平面对称→南北镜像两族（Parker & Born 2008）；远拱点在平面以上=北族（Conti 2025）；Class I=北、Class II=南（Alessi 2009、Howell 1997，Richardson 原始定义为倾斜方向）；南族利于月球南半球通信（Parker & Anderson 2014）；北/南极覆盖（Gao & Hou 2020）。
3. **L1/L2/L3 成员**：L1 覆盖正面、L2 覆盖背面（Parker & Anderson 2014）；L3 不稳定、远地点 74 万千米、周期 26.6 天（Conti 2025）；各点稳定段数字。
4. **稳定性**：多数不稳定→不变流形；ν1/ν2 判据与稳定段（Conti 2025）；稳定指数 1~1.69 的近稳定段即 NRHO（Spreen 2021，指向 nrho 词条）。
5. **参数化与解析构造**：Az 三种约定（Gómez α/β 展开系数与 Δ(α,β) 约束及 α_min；Kakoi 最大 |z|；Spreen 峰峰值）；Richardson 三阶解作初值+微分修正（Gómez 2001、李宸硕 2024）。
6. **应用与转移**：通信中继（鹊桥 L2 halo，Qiao 2025）；直接转移（Parker & Born 2008）；流形转移（Gordon 2008、彭坤 2016）；南北族间转移（Du 2023）；异系统 halo-to-halo（Kakoi 2014、李宸硕 2024、Canalias 2008）；Halo 穿越（徐明 2010）；捕获段（Zanzottera 2011）；Halo2GEO（Patel 2024）；交会（Bucchioni 2023）。
7. **术语变体表**：北族/南族（northern/southern family）、Class I/II、L1/L2/L3 halo、EM/SE halo、lunar halo orbit、nominal halo orbit、稳定 halo 族、振幅（Az/α/β/峰峰值）、直接转移、halo-to-halo、南北转移、异系统 halo、Halo 穿越（LL1/LL2）、捕获段、Halo2GEO，旧 URL 重定向到对应锚点。

### nrho（近直线晕轨道）

1. **定义**：以稳定性界定的 halo 族子集（第一/三次稳定性变化之间，Spreen 2021）；线性稳定的第一段（Gao 2023）；近月点低+面外振幅大的近直线形态（Singh 2021、Gao 2023）；词源 Howell & Breakwell 1983。
2. **9:2 会合共振**：共振基准=月球会合周期（9 圈/2 会合月），精确参数（6.5556 天、3153/71230 km 半径、JC 3.04719，Spreen 2021）；Sun-resonant 等价表述澄清（Gao 2023）；其他共振成员（4:1、11:2 等）。
3. **稳定性**：稳定指数 1~1.69；邻域分岔结构（P2HO1/butterfly 等，Zimovan-Spreen 2022）。
4. **应用**：Gateway（L2 南族 9:2）与 CAPSTONE；避食性质；月球定位星座（晋守聪 2025 四轨 16 星 GDOP<3）；QPT 伴飞（Capannolo 2023）。
5. **到达与离开**：NRHOI（Kikuchi 2024，PRM vs IDT）；sGTO↔NRHO（Singh 2021）；NRHO↔DRO（Wang 2021、Zimovan-Spreen 2022）；Gateway↔LLO/LEO（Pozzi 2025）；phasing 与交会（Bucchioni 2023）；强化学习转移（Ul Haq 2026）。
6. **术语变体表**：9:2 NRHO、resonant NRHO（注明=synodic resonant）、NRHOI、NRHO 转移；ncho 不收（无出处）。

### lissajous-orbit（李萨如轨道）

1. **定义**：共线点附近中心流形上的二维环面准周期轨道；一个面内频率+一个不同面外频率；Ax、Az 两自由振幅（Canalias 2008、Renk 2010）；围绕 vertical 轨道（Folta 2014）。
2. **与 halo 的关系**：频率相等退化为 halo（Renk 2010、Gómez 2001）；对称性对比（Lissajous 准对称 xy/xz 平面；halo 仅 xz 对称）。
3. **族内变体**：square Lissajous（α3=α4，Alessi 2010）；quasi-halo（围绕 halo 的环面；面外振幅超下界后 Lissajous→quasi-halo，Renk 2010/Folta 2014）；高/低 z 幅值模式（Folta 2014）。
4. **参数化**：osculating Lissajous 六要素（Renk 2010）；有效相位面（Perozzi & Ferraz-Mello 2010）。
5. **应用**：ARTEMIS 全程（转移 Folta 2012、站保 Folta 2010 约 15~25 m/s/年、quasi-halo 判定 Folta 2014）；日地↔地月自然转移（Canalias 2008）；CE5-T1（Qiao 2025）。
6. **术语变体表**：Lissajous 轨迹、square Lissajous、Lissajous 入轨（LOI）、quasi-halo、高 z 幅值模式、osculating Lissajous 要素。

合并障碍评估：三个主词条的概念分层清楚（周期轨道本体 / 稳定子集 NRHO / 准周期 Lissajous 与 quasi-halo），没有相互矛盾的定义需要裁决。需要处理的只有三类：(a) 同义重复条目的并流（北/南族各 3~4 条、振幅各 5~6 条），在主词条内设锚点即可；(b) 两处约定并列：振幅三种定义、Sun-resonant vs lunar synodic resonant，并列注明不必统一；(c) 少数无出处或事实错误的词条（ncho、ll1-halo 等）按第 5 节清单修正或删除。中文译名不统一（光环/晕/光轮/光晕）建议借合并统一为晕轨道（与 halo-orbit-family、nrho 现词条一致），halo-orbit 现译光环轨道、em-halo/se-halo 译光轮轨道一并改掉。quasi-halo-orbit 与 quasi-periodic-halo-orbit 概念重叠，按第 3 节拆分后分别并入 lissajous-orbit 的 quasi-halo 小节和（改写后的）星历模型表述。
