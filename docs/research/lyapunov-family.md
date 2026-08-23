# Lyapunov/平动点周期轨道族词条合并前调研笔记

调研日期：2026-08-07。目的：核对「Lyapunov/平动点周期轨道族」22 个现有词条（19 条待归并 + butterfly/broucke/dragonfly 3 个具名族）的定义是否与原始论文相符，为合并成 3 个主词条（lyapunov-orbit / vertical-orbit / axial-orbit）做准备。体例仿 docs/research/dro-family.md、docs/research/halo-family.md。

调研范围：资料库中 19 篇论文的 md 正文（`hybrid_auto/<目录名>.md`），均完好可读。任务清单的 12 篇优先论文全部在库；按词条参考文献补读了 Gómez 2001 Vol. I、Folta 2015、Guzzetti 2016、Grebow 2008、Zimovan-Spreen 2022、Haapala 2013、Oshima 2019、He 2026 等 8 篇。

不在库、无法核对的出处（共 8 处）：Richardson 1980（halo/Lyapunov 解析解原始论文）、Doedel 等 2007（*Elemental periodic orbits associated with the libration points*，axial/vertical/butterfly 三词条共同引用）、Guzzetti 等 2014（*A framework for efficient trajectory comparisons in the Earth-Moon design space*，lyapunov-orbit/vertical-orbit/axial-orbit 三词条参数表所据）、Gómez-Masdemont-Simó 1998（quasihalo 论文）、Koon 等 2000、Aziz 等 2019（planar-lyapunov-orbit 词条出处）、Broucke 1968（JPL TR 32-1168，周期轨道编目原文）、Qiao-Zheng-Qi 2024（L4/L5 axial 应用，经 He 2026 转引）。Guzzetti 2014 不在库，但同一 catalog 体系的后续两篇（Folta 2015 参考目录、Guzzetti 2016 星历交互目录）在库，可核对家族结构、核对不了具体参数表数字。

论文简称：

- P&A 2014 = Parker & Anderson 2014, *Low-Energy Lunar Trajectory Design*（JPL 专著）
- Belló 2010 = Belló 等 2010, *Invariant manifolds, Lagrangian trajectories and space mission design*
- Fantino 2010 = Fantino 等 2010, *A note on libration point orbits, temporary capture and low-energy transfers*
- V&H 2014 = Vaquero & Howell 2014, *Leveraging resonant-orbit manifolds to design transfers between libration-point orbits*
- Gómez 2001 = *Dynamics and Mission Design Near Libration Points, Vol. I*（共线点卷）
- Folta 2015 = *An Earth-Moon system trajectory design reference catalog*
- Guzzetti 2016 = *Rapid trajectory design in the Earth–Moon ephemeris system via an interactive catalog of periodic and quasi-periodic orbits*
- Wang 2025-E = Wang 等 2025, *Mechanism analysis of the DRO low-energy transfer problem: An energy perspective*
- Wang 2025-WSB = Wang 等 2025, *Mechanism and characteristics analysis of weak stability boundary transfers to the 2:1 DRO*
- 其余以作者加年份的方式简写，与词条参考文献一致。

一个文献事实先说清：库内两篇郑越 2023 目录（`郑越和赵敏 - 2023 - …` 与 `基于大幅值Lyapunov轨道稳定流形的地月转移方法_郑越`）是同一篇论文（文章编号均为 1006-3242(2023)05-0019-08）的两个数字化版本，按一篇计。

## 1. 平面 Lyapunov 族标准定义

各论文对平面 Lyapunov 轨道的表述，按要点归纳：

- **CR3BP 共线平动点附近的平面周期轨道族，三个共线点各有其一**。Gómez 2001（§2.1.1）：The collinear equilibrium points are unstable and every one has a family of planar hyperbolic periodic orbits (the Lyapunov families associated to it). P&A 2014（§2.6.9.1）：Lyapunov 轨道是 CR3BP 的 two-dimensional periodic solutions，exist about all three of the collinear Lagrange points；LL1/LL2 族周期 2~4 周（靠平动点越近越接近 2 周），LL3 族约 4 周，These orbits are all unstable。
- **线性化来源：中心×鞍点结构中的面内中心模**。Belló 2010（§2）：共线点线性化 Hamilton 量分解为一个双曲模（实特征值 ±λ）加两个谐振子，即面内频率 ωp、面外频率 ωv；One of the oscillations takes place in the plane of motion of the primaries and the other orthogonal to this plane. These two periodic motions are known as the planar and vertical Lyapunov periodic orbits. 即平面 Lyapunov 轨道 = 仅激发面内中心模（ωp）的周期解族。
- **命名来自数学家 Lyapunov 的中心定理，与 Lyapunov 稳定性理论无关**。Alessi 2009（§2.2）：两族周期轨道 are known as vertical Lyapunov family and planar Lyapunov family and their existence is ensured by the Lyapunov's center theorem：族的存在性由李雅普诺夫中心定理保证，族以此得名。lyapunov-orbit 词条称以俄国数学家亚历山大·李雅普诺夫命名，方向正确，宜补明经其中心定理；planar-lyapunov-orbit 词条称由 Lyapunov 稳定性理论的周期解分支衍生而来，措辞不确（是中心定理，不是稳定性理论）。另注意：Szebehely 1967 全书无 Lyapunov 轨道族概念（仅有 Lyapunov 意义下的稳定性），词条引它只能算 CR3BP 背景文献。
- **关于 x 轴对称、每圈垂直穿越 x 轴两次；穿越点速度沿 y 方向（ẋ=0）**。P&A 2014（§2.6.6.1）：简单对称周期轨道 pierce the y = 0 plane exactly twice per orbit, and pierce the plane orthogonally，halo 与 Lyapunov 是其例。Oshima 2019（§2）：关于 x 轴对称的平面周期轨道（Lyapunov、DRO）垂直穿越 x 轴（引 Koon 等 2011 第 4 章）。穿越点状态形如 [x₀, 0, 0, ẏ₀]（谭明虎 2014 §2.1、郑越 2023 §1.2、P&A §2.6.6.2）。lyapunov-orbit 词条称在穿越 x 轴时 y 方向速度为零，此句写反了：垂直穿越意味着 x 方向速度为零、速度沿 y 方向。
- **运动方向：近月侧顺行、远侧逆行**。Oshima 2019（§2，引 Lam & Whiffen 2005）:Lyapunov orbits are prograde near P2 but are retrograde at the far side。
- **不稳定，带稳定/不稳定不变流形；等雅可比时 LL1↔LL2 存在自由异宿转移**。单值矩阵特征值 λ₁=λ₂=1、λ₃=1/λ₄（谭明虎 2014 §2.2、郑越 2023 §1.2），λ₃、λ₄ 对应稳定/不稳定流形；流形在近月前呈光滑管状（P&A 2014 Fig. 2-34）。P&A 2014（§2.6.11）：同雅可比常数的两条不稳定轨道间可用庞加莱图找自由转移，算例 LL1→LL2（JC=3.13443929，两条异宿连接）。Fantino 2010：L1/L2 平面 Lyapunov 轨道的稳定流形给出 WSB 区域的边界，其不稳定流形支配对次主天体的暂时捕获（捕获圈数随轨道变小/J 变大而增多）。
- **平面 Lyapunov 轨道还有垂直不稳定模态**。Oshima 2019 专论此：垂直不稳定方向的本征向量只含面外分量，其 vertically stable/unstable 流形是面内-面外状态之间的天然输运通道，经多次月球飞越可把倾角泵上去，并以其为初值优化出多条 NRHO→DRO 低耗转移。lyapunov-orbit 词条称不稳定模态结构更简单（仅平面内），这一说法不成立。
- **与 halo 族的分岔关系：面内外频率相等（1:1 共振）时从 Lyapunov 族分岔出 halo 族**。Belló 2010（§4）：Halo orbits are periodic orbits which bifurcate from the planar Lyapunov periodic orbits when the in plane and out of plane frequencies are equal. This is a 1:1 resonance. Gómez 2001（§2.1.1）：halo 族 emanate 自 the Lyapunov orbit with critical vertical stability（垂直稳定性临界的 Lyapunov 轨道），对应解析展开中 Δ(α,0)=0 的最小面内振幅 α_min。Alessi 2009（§2.2）：Halo orbits…show up at the first bifurcation of the planar Lyapunov family. P&A 2014（§2.6.9.4）同。反向表述也成立：P&A §2.6.2.2，线性解（式 2.11）中令 Az=0，the resulting orbits are planar and are known as Lyapunov orbits。lyapunov-orbit 词条的 pitchfork 分岔一词在库内文献中未见，建议改写为上述频率相等/分岔表述。
- **与 Lissajous 的关系：平面 Lyapunov = 面外振幅为零的 Lissajous 极限；Lissajous 环面连接垂直族与平面族**。Belló 2010（§7 及引 Baoyin & McInnes）：the planar Lyapunov orbits correspond to Lissajous orbits with the vertical amplitude, α₄, equal to zero；庞加莱图（z=0 截面）上平面 Lyapunov 轨道是图的外边界，垂直轨道是中心不动点，两者之间由 Lissajous 环面族充满（§2、Fig. 4/7）。Guzzetti 2016（§5）：JC∈[3.15, 3.17] 时 L2 Lyapunov 族与 L2 vertical 族由同能量的准周期环面族连接。
- **参数化：x₀、ẏ₀、雅可比常数 C 三者任取其一标定族内成员**。P&A 2014（§2.6.6.2 及 Fig. 2-14）：对称周期轨道在正交穿越点只有 x₀、z₀、ẏ₀ 三个非零状态（平面情形 x₀、ẏ₀），族可用 x₀–ẏ₀ 或 x₀–C 曲线表示；自然参数延续时以 x₀ 为延续参数（§2.6.7）。Oshima 2019 同样以 C 索引族（幅值越大 C 越小）。Richardson 三阶解析解提供初值的做法以 halo 为主（见 halo-family.md §1），Lyapunov 族初值用线性解即可（P&A §2.6.2.2）；Richardson 1980 原文不在库。
- **EL/LL 记号：E=日地系、L=地月系**。徐明 2010 与 P&A 2014 用法一致：ELi=日地系 Li 点（的轨道），LLi=地月系 Li 点（的轨道）。徐明 2010（§3.4）：WSB 转移在平面情形下…可以理解为 EL₁-（或 EL₂-）Lyapunov 轨道不变流形与 LL₂-Lyapunov 轨道不稳定流形的拼接（即 Koon 等的双三体流形拼接）。
- **大幅值 Lyapunov 轨道：幅值大到与绕月/近月轨道相切、稳定流形直达近地轨道附近的族内成员**。谭明虎 2014（首出）：绕 L1 的大幅值 Lyapunov 轨道可与绕月轨道相切于 y=0，其稳定流形不再具有管道拓扑特性，但是相比于小幅值周期轨道的稳定流形，它们可以到达更加接近地球附近的区域；据此设计 LEO（167 km）→稳定流形→Lyapunov 轨道→切向减速进绕月轨道的两脉冲地月转移，比 Hohmann 省约 100 m/s、比 WSB 转移省时。郑越 2023（§1.2）：当 L1 点 Lyapunov 轨道取较大的幅值使其与月球停泊轨道相切于 x 轴时，一方面，通过一个切向速度脉冲可以使探测器直接从 Lyapunov 轨道进入月球停泊轨道；另一方面，Lyapunov 轨道流向地球方向的稳定流形可直接到达地球附近，即通过一条稳定流形直接连接近地轨道与近月轨道；算例 LEO 167 km、LLO 100 km，总 Δv≈3920.7 m/s、62 天（md 文本中速度单位被 OCR 误作 km/s）。郑越 2023 还给出偏差量 ε 与流形绕 Lyapunov 轨道圈数的关系（ε 越小绕圈越多、转移越长）。徐明 2010（§4.2）：与大幅值 DRO 相切的 Lyapunov 轨道：DRO Ax=90867 km 时，相切的 L1 Lyapunov Ax=32828 km、L2 Lyapunov Ax=53816 km；以 L1 相切轨道流形实现 DRO 快速进入、以 L2 Lyapunov 作 WSB 入口实现 DRO 低能进入。Oshima 2019（§2）：平面 Lyapunov 轨道与平面 DRO 在 y=0 处有平行速度的相切拼接点（引 Lam & Whiffen 2005）。
- **Lyapunov-like（类 Lyapunov）轨道**：Wang 2021：NRHO→DRO 外转移中近月飞越之后的弧段 is similar to a Lyapunov-like orbit，并解释 the planar Lyapunov orbits with large amplitude are tangent with DROs at its one side, and can closely reach the Moon at its another side. Thus, these Lyapunov-like trajectories are naturally associated with close lunar flybys；结论（§6）：近月飞越重分配速度分量、使沿 Lyapunov-like 轨道的低脉冲 DRO 入轨成为可能。该词在 Wang 2021 中追溯其文献 [20]（DRO→LLO 平面转移，即 Zhang 等 2020，在库）。Wang 2025-WSB：DRO 捕获轨迹中含 L1 点 Lyapunov-like 轨道段与 L2 Lyapunov-like 轨道段两类；When the spacecraft's Jacobi energy is relatively high upon arrival, it directly enters the near-Earth side of the DRO after lunar gravity assist. Conversely, if the Jacobi energy is relatively low upon arrival, the spacecraft enters the far-Earth side of the DRO along a more inclined and larger-amplitude Lyapunov-like segment following a lunar flyby：雅可比能量高→近地侧直接进，低→经更倾斜、更大幅值的 Lyapunov-like 段进远地侧，中等→绕月数圈后进。**注意出处归属**：Lyapunov-like orbital segments 一词只在 Wang 2025-WSB 中出现；姊妹篇 Wang 2025-E（energy perspective）全文仅引言一处提到 Lyapunov 轨道，无此术语。与 dro-family.md 第 5 节 phase-free-dro 的出处错配情形相同。

综合（主词条定义骨架）：平面 Lyapunov 轨道是 CR3BP 中环绕共线平动点（L1/L2/L3 各有一族）的平面周期轨道族，线性化下对应面内中心模（频率 ωp），其存在性由 Lyapunov 中心定理保证（族由此得名）；轨道关于会合系 x 轴对称、每圈垂直穿越 x 轴两次（穿越点 ẋ=0），近月侧顺行、远侧逆行；族以 x₀ 或雅可比常数 C 参数化；轨道不稳定（面内双曲模，部分成员另有垂直不稳定模），其稳定/不稳定不变流形构成低能转移与暂时捕获的通道，等雅可比时 LL1 与 LL2 族成员间存在自由异宿转移；当面内频率与面外频率相等（1:1 共振）时，族中垂直稳定性临界的成员分岔出 halo 族；面外振幅趋于零时它就是 Lissajous 族的退化极限；族中大幅值成员可与绕月轨道/DRO 相切、稳定流形可直达近地轨道附近，是一条流形连接近地与近月轨道式地月转移的几何基础。

## 2. 垂直（vertical）族

- **定义：共线点附近以面外（z 向）振荡为主的周期轨道族，线性化下对应面外中心模（频率 ωv）**。Belló 2010（§2）：两个简正振荡 are known as the planar and vertical Lyapunov periodic orbits，垂直者为正交于主天体运动平面的振荡。Alessi 2009（§2.2）：vertical Lyapunov family 与 planar Lyapunov family 并列，同由 Lyapunov 中心定理保证存在。P&A 2014（§2.6.9.5）：the family of vertical Lyapunov orbits, also known as vertical orbits for short. Vertical orbits oscillate out of the xy plane, piercing the plane at the Lagrange point itself. They are symmetric orbits, traversing the same route above the plane as below it.
- **vertical Lyapunov 叫法有明确出处**：Belló 2010、Alessi 2009、P&A 2014 三处均用（见上）。词条 vertical-lyapunov-orbit、vertical-lyapunov-periodic-orbit 的术语名本身成立。
- **穿过平动点本身有出处**：P&A 2014 原句即 piercing the plane at the Lagrange point itself（穿越 xy 平面的位置就在平动点）。词条表述忠实于所引文献，不算错误，建议注明这是 P&A 的表述方式。
- **xy 投影为一点只在线性化/Hill 极限成立**。Gómez 2001（§2.3.6.3，Hill 问题 μ=0）：垂直周期轨道 x₁=x₂=0、仅 x₃（z 向）运动。非线性垂直轨道有可观的面内运动：Grebow 2008（§II）：Vertical orbits are doubly symmetric orbits near the libration points and, in the y–z projection, resemble a figure eight：y-z 投影呈 8 字（y 有非常幅值）；As the family continues, larger-amplitude vertical orbits encompass both primaries…These orbits bend toward both the north and south poles of the moon. 故 vertical-periodic-orbit 词条称仅在 z 方向有运动分量、x-y 平面投影为一点，这对真实 CR3BP 垂直轨道不成立，须注明极限语境。
- **对称性：双对称**。P&A 2014（上下半平面走同一路线，即关于 xy 平面对称）+ 周期轨道惯常的 xz 平面对称（V&H 2014 §II：Lyapunov、halo 及对称共振轨道均以 xz 平面为对称面）= Grebow 2008 的 doubly symmetric。vertical-orbit 词条只写关于 xOz 平面对称，不完整。
- **与 Lissajous 的关系：Lissajous 环面围绕垂直轨道；垂直轨道是面内振幅→0 的 Lissajous 极限**。Belló 2010（Fig. 3/4、§3）：垂直轨道是庞加莱图中心不动点，surrounded by quasi-periodic motions that take place on invariant tori，低能段环面族连接垂直轨道与平面 Lyapunov 轨道。Folta 2014（§3.3）：Lissajous 是围绕垂直周期轨道的中心流形上的二维环面（见 halo-family.md §3）。vertical-orbit 词条称 Lyapunov 轨道可视为垂直轨道在 z 方向振幅趋于零时的退化形式，方向错误：垂直族零振幅极限是平动点本身；平面 Lyapunov 是**面外**振幅→0 的 Lissajous 极限、垂直轨道是**面内**振幅→0 的 Lissajous 极限，两族是平动点中心流形上的同级兄弟族，不是彼此的退化。
- **与 halo 族的关系**：Gómez 2001（§2.3.6.1）：halo 族延续过程中经过垂直轨道附近（The passage of the halo families near vertical orbits），L1 halo 族穿过垂直轨道附近延续、L2 halo 族终止于垂直碰撞轨道（Hill 问题分析）。
- **历史**：Grebow 2008 引 Moulton 1920 已指出垂直轨道存在（Since Moulton highlighted their existence in 1920），非线性垂直轨道后经 Zagouras & Kazantzis、Dichmann 等研究。
- **存在范围**：共线点 L1/L2/L3（P&A 2014、Guzzetti 2016 目录 Vi 族）与三角点 L4/L5 附近都有（Folta 2015：Out-of-plane vertical and axial families are also nearby L4/L5；V&H 2014 Fig. 7 绘出 L2、L4、L5 的 vertical 与 axial 族；He 2026：L4  emanate 短周期、长周期平面族与 vertical Lyapunov 族）。vertical-orbit 词条的 V4/V5 稳定性较好一句库内无直接出处（L4/L5 点本身线性稳定是公认事实，但垂直族成员的稳定性数字无法核对）。
- **应用**：Grebow 2008（高度 10 万 km 以下的垂直轨道弯向两极，用于月球南极覆盖星座）；Haapala 2013（L2 垂直轨道同宿连接复现，0.22 m/s/213.9 天、0.33 m/s/171.3 天；经垂直轨道流形设计 L2↔L3 转移）；Guzzetti 2016（L2 垂直族有中心子空间、环面演化时向 ŷ 方向扩展；L1 axial 与 L2 axial 反而无中心子空间）；Klonowski 2024（L1/L2 Vertical 列为 SDA 观测员候选族）。
- **词条参数表无法核对**：vertical-orbit 词条的 V1（JC 约 2.5~3.0、周期约 24 天）、V2（约 0.8~3.0、约 16 天）等数字出自 Guzzetti 2014，不在库；量级与线性化周期估计（2π/ωv，地月 L1/L2 约 11~13 天起）不冲突，但须标明出处未核。

## 3. 轴向（axial）族

- **定义（库内可核对的最完整表述，He 2026 综述 §2）**：halo orbits and axial orbits are separately bifurcated from distinct locations of the L1 planar Lyapunov orbit family… the axial orbit family is symmetric about the x-axis, dividing into the axial-1 family and the axial-2 family。共线点处 axial 族与 halo 族分别从平面 Lyapunov 族的**不同位置**分岔；axial 族关于 **x 轴**对称，分 axial-1、axial-2 两支。三角点处：the axial orbit family of L4 is bifurcated from the L4 vertical Lyapunov orbit family and no longer exhibits symmetry。L4/L5 的 axial 族从垂直 Lyapunov 族分岔、不再对称。Folta 2015（§II）：Other three-dimensional libration point orbits include northern and southern halo families, axials, and butterfly orbits，把 axial 列为标准三维平动点轨道族；Guzzetti 2016（Table 1）目录中 Li Axial（Ai）与 Lyi/Hi/Vi 并列为 LPO 类族。
- **axial-orbit 词条两处与库内文献不一致**：(a) 标准轴向轨道关于 xOz 平面对称，与 He 2026 的关于 x 轴对称、分 axial-1/axial-2 两支不一致：关于 x 轴对称（而非 xz 平面）正是它要分成两支的原因，与 halo 关于 xz 平面对称、分南北两支的结构类似，建议以 He 2026 为准改写；(b) 命名源于…轨道在 x 轴附近具有显著振荡一说无库内出处（其所据 Doedel 2007 不在库；若按 He 2026，更可能得名于 x 轴对称性）。(c) L1/L2 轴向轨道…适中的稳定性指数、适合长期驻留任务与词条自附参数表（A1 稳定指数 200~254、A2 128~168，强不稳定）自相矛盾，且 Guzzetti 2016（§3）明确 L1/L2 axial 全族无中心子空间（possess no quasi-periodic motion along the entire family），不能用于环面编队；Folta 2015 的存储轨道选址最终推荐的是 DRO 而非 axial（L3 axial 因雅可比范围不符在初筛排除）。建议改为：L1/L2 axial 强不稳定、其雅可比范围与 Lyapunov 族重叠（目录法示其或有低耗转移通道，Folta 2015 §IV 的方法论）；L4 axial 线性稳定（V&H 2014：转移末端轨道外推 120 年保持有界）。(d) 参数表（A1 JC 2.9918~3.0214、周期 17.15~17.65 天；A2 2.9671~3.0138、18.72~19.20 天；A3 0.0165~1.8588、27.19~27.21 天）出自 Guzzetti 2014，不在库、无法核对；但与 Guzzetti 2016 的定性结论（L1/L2 axial 强不稳定）和 V&H 2014（L4 axial 稳定）相容。
- **可视为 Lyapunov 轨道在三维空间中的延伸宜改为分岔关系**：He 2026 指出 axial 族从平面 Lyapunov 族分岔（分岔点与 halo 族不同），不是 z 向振幅小时趋近平面 Lyapunov 轨道的渐变关系。
- **axial 共振轨道与 3:1 axial 共振轨道（V&H 2014）**：§III 原句：asymmetric 3-D resonant orbits also exist…Such orbits are termed axial resonant orbits, and are calculated by slightly perturbing the bifurcating orbit in the z direction：三维**非对称**共振轨道、由分叉轨道沿 z 向微扰算得，axial-resonant-orbit 词条逐字有据。§VI 系统平移（system translation）：以地月系 Fig. 3f 族一条 3-D 3:1 axial 共振轨道为初解，经质量参数 μ 延拓直接迁移到土星-土卫六系（Fig. 15），无需在新系统重做二体初猜→分岔→延拓六步；31-axial-resonant-orbit 词条称可通过系统平移技术迁移到其他三体系统（如土星-土卫六系统），此点成立。**共振比约定警示**：V&H 2014 的 3:1 与 IBEX 所用共振同例（航天器绕地球 3 圈/月球 1 圈，§III）；而 P&A 2014（§2.6.9.6）与 Guzzetti 2016（§2）的 p:q 约定是月球 p 圈、航天器 q 圈。同一轨道在两种约定下记号相反，词条只写周期比为 3:1 应注明约定。另：V&H 2014（§IV）指出 EM 系 4:3 共振族全不稳定而土星-土卫六系同族大多线性稳定：共振族稳定性随质量参数而变，系统平移不保持稳定性。
- **应用**：V&H 2014（§V）：LEO→L4 axial 轨道三维转移：L2 axial 轨道稳定流形（天然经过地球附近）+ 3:2 axial 共振轨道不稳定流形拼接，ΔV 3.27 km/s、22.54 天，L4 axial 线性稳定、对地月双覆盖、通信不中断。Klonowski 2024（§6.1）：L4/L5 axial 在 SDA 架构优化中高频入选，traverse a large volume of Cislunar space，利于对平面机动目标的持续探测。Qiao, Zheng, Qi 2024（*Cislunar L4 and L5 axial orbits and their applications*，Acta Astronautica）不在库，经 He 2026 转引。

## 4. 具名族去留评估

- **butterfly-orbit（蝴蝶轨道）：真实家族、多处有据，建议保留独立词条，但定义需重写**。库内出处链：Grebow 2008（§II）：The orbits bifurcate from a six-day near-rectilinear L2 halo orbit and might be described in terms of a butterfly shape。南族 L2 butterfly 族（Fig. 3）；Similar to vertical orbits, the motion in a butterfly orbit resembles a figure eight; however, these orbits wrap around both the near and far sides of the moon：8 字形、环绕月球的近侧与远侧，几乎全周期可见月球南极；与 6~7.2 天 L2 halo 成 2:1 周期比组合用于南极覆盖（14 天 butterfly + 7 天 halo 算例）。Zimovan-Spreen 2022（§2）：The P2HO1 family, also known as the butterfly family, is characterized by members possessing two lobes in a figure-eight shape, one on the L1 side of the Moon and one on the L2 side。即 P2HO1 = butterfly 族，L2 halo 族 NRHO 区段倍周期分岔产生，两瓣分处**月球的** L1 侧与 L2 侧；其流形用于 NRHO↔DRO 转移初值（§5.1.4，经 4:3 共振弧拼接，0.4961 km/s、97.41 天算例）。Bucchioni 2023 以 butterfly 族作 NRHO 相位调整的停泊轨道比较对象（见 halo-family.md §4）。Klonowski 2024 将 N./S. Butterfly 列为 SDA 观测员族（Table 3 多个聚类出现）。现词条三处要改：(a) 连接 L1 和 L2 平动点、环绕 L1 和 L2 两个平动点运动是对月球 L1 侧/L2 侧的误读：轨道环绕的是月球（两瓣分处月球两侧），不是连接两个平动点；(b) 关于 yOz 平面对称无任何库内出处；(c) Butterfly L1/L2 形似蝴蝶左翼/右翼一说表为杜撰；所引 Haapala 2013 全文无 butterfly 一词（grep 零匹配），Doedel 2007、Guzzetti 2014 不在库，参考文献应改引 Grebow 2008 与 Zimovan-Spreen 2022。
- **broucke-orbit（布鲁克轨道）：材料过薄，建议删除或降级为编目史注释**。Bosanac 2026（§5）仅一处提及：21 天内回归初始条件附近的轨迹簇中，clusters 4–9…resemble periodic orbits, including the well-known distant prograde orbits, low prograde orbits, nearby spatial orbits, and Broucke's family H₂，其文献 [40] 即 Broucke 1968 JPL TR 32-1168《Periodic Orbits in the Restricted Three-Body Problem with Earth-Moon Masses》。P&A 2014（§2.6.1）旁证：In 1968, Roger Broucke published a large catalog of families of planar periodic orbits that exist in the CRTBP with Earth–Moon masses. 词条定义圆型限制性三体问题中的一类周期轨道家族、由 Broucke 在 1968 年系统研究，不算错误但空泛：库内没有 H2 族的形态、参数、应用任何材料，Broucke 1968 原文不在库。若保留词条，只能写成 Broucke 1968 编目中的周期轨道族（如 H2 族）的一句话注释；建议删除，或并入 CR3BP 周期轨道编目相关词条的术语变体表。
- **dragonfly-orbit（龙虫轨道）：库内仅有族名、无定义，建议删除或标注存疑**。全库唯一出处是 Klonowski 2024：候选观测员族清单列 Dragonfly and Butterfly Orbits（§4.1），聚类结果中 N. Dragonfly 多次出现在 Pareto 最优架构（与 GEO、L2 Halo、L4 Axial 组合，Table 3/5），仅此而已，无形态、无参数、无得名由来。词条称因其形状似昆虫蜻蜓而得名、在 L2 点附近具有较大的周期和振幅范围，两句在库内均无出处。该族在 Purdue 系 SDA 文献中确有使用（Klonowski 2024 即一例），但原始定义文献不在库；建议删除词条，或标注存疑并待补原始出处。

## 5. 现有词条勘误

逐条对照（按拟定归并分组；词条 → 结论）。

**入 lyapunov-orbit 的 12 条：**

1. **lyapunov-orbit**：骨架正确（平面周期、共线点、命名自数学家 Lyapunov、与 halo 的退化/分岔关系、x₀ 参数化、流形应用）。四处要改：(a) 在穿越 x 轴时 y 方向速度为零写反了：垂直穿越 x 轴时 **x 方向**速度为零、速度沿 y（P&A §2.6.6.1；初值 [x₀,0,0,ẏ₀]，谭明虎 2014、郑越 2023）；(b) Lyapunov 轨道的不稳定模态结构更简单（仅平面内）不成立：平面 Lyapunov 轨道还有垂直不稳定模态（Oshima 2019 全篇主题）；(c) pitchfork 分岔库内无据，建议改为面内外频率相等（1:1 共振）时从 Lyapunov 族分岔出 halo 族（Belló 2010、Gómez 2001、Alessi 2009）；(d) 参数表（Ly1 JC 3.188~2.124 等）出自 Guzzetti 2014，不在库无法核对；其中 Ly3 约 2.5 宜注明族从 L3 点的 JC=3.0121 起算（P&A Table 2-4）。命名句建议补明经 Lyapunov 中心定理（Alessi 2009）。所引 Richardson 1980、Gómez 1998 不在库；Szebehely 1967 在库但无 Lyapunov 轨道族内容，只能算 CR3BP 背景引文。
2. **lyapunov-family**：与 Gómez 2001 一致（planar hyperbolic periodic orbits (the Lyapunov families associated to it)；halo 族自 Lyapunov 族垂直稳定性临界成员 emanate）。是光轮轨道的起点一句为松散表述但方向正确。准确。
3. **lyapunov-periodic-orbit**：与彭坤和杨雷 2018 一致：其属于二维轨道、只存在地月旋转系 XY 平面内、无 Z 轴分量，Lyapunov 轨道靠近地月连线附近仍然会被月球遮挡，均为原文意思。两点注明：(a) 原文语境是**地月 L2 点**空间站的测控遮挡（图 9 即 L2 Lyapunov 轨道），不是泛指所有 Lyapunov 轨道；(b) 不适合作为空间站停泊轨道是对原文的合理压缩：原文结论是平动点空间站模式主要考虑 L1 点空间站与 L2 点 Halo 轨道空间站，并未逐字说不适合，建议贴原文措辞。
4. **planar-lyapunov-orbit**：大体准确。由 Lyapunov 稳定性理论的周期解分支衍生而来措辞不确：是 Lyapunov **中心定理**保证存在的周期解族（Alessi 2009），与稳定性理论无涉。异宿连接句有据（P&A §2.6.11：等雅可比时 LL1↔LL2 自由转移，算例 JC=3.13443929；Koon 等 2000 不在库）。Fantino 2010 在库、主题相符（平面 Lyapunov 轨道稳定流形给出 WSB 边界）。
5. **planar-lyapunov-periodic-orbit**：与 Belló 2010 一致（振幅在轨道平面内、垂直方向振幅为零，对应 planar Lyapunov orbits correspond to Lissajous orbits with the vertical amplitude equal to zero）。准确。
6. **el1-lyapunov-orbit**：与徐明 2010 一致（EL1/EL2 Lyapunov 流形与 LL2 Lyapunov 不稳定流形拼接即平面情形 WSB 转移，§3.4/图 19）。词条称在四体模型下，对应原文在平面情形下（双三体拼接），建议贴原文措辞。
7. **el2-lyapunov-orbit**：同上，一致（徐明 2010 同句）。
8. **ll1-lyapunov-orbit**：与徐明 2010 一致（稳定流形用于设计转移、Hohmann 变轨进入 LL1 稳定流形 W_E^S，§4.1）。词条称构成地月运输管的重要组成部分，其中运输管提法在徐明文中未见逐字出处，属概括表述，可保留但建议软化。
9. **ll2-lyapunov-orbit**：与徐明 2010 一致：借助 LL2 点稳定流形与 EL1-（或 EL2-）Halo 轨道不变流形的拼接，来实现 WSB 转移（§3.3 原句）；利用 L2 点 Lyapunov 轨道作为向 WSB 转移的入口，实现 DRO 的低能转移（§4.2 方式 2）。准确。
10. **large-amplitude-lyapunov-orbit**：与郑越 2023 §1.2 一致（相切于 x 轴、稳定流形直达近地、不再有管状结构、一条流形连接近地与近月轨道，均有原句）。准确。建议补谭明虎 2014 为首出（相切于 y=0、比 Hohmann 省约 100 m/s、流形无管道拓扑但可达近地）。
11. **lyapunov-like-orbit**：与 Wang 2021 一致（外转移近月飞越后弧段呈 Lyapunov-like 特征；大幅值平面 Lyapunov 一侧与 DRO 相切、另一侧近月；天然伴随近月飞越、利于低脉冲 DRO 入轨，均有原句）。准确。可补：术语在 Wang 2021 中追溯其文献 [20]（Zhang 等 2020 DRO→LLO 平面转移，在库）。
12. **lyapunov-like-orbital-segments**：内容本身与 Wang 2025-WSB 一致（L1/L2 Lyapunov-like 轨道段；雅可比能量高→近地侧直接进入、低→经更倾斜更大幅值 Lyapunov-like 段进远地侧、中等→绕月数圈）。**但出处张冠李戴**：该术语只出现在 Wang 2025-WSB（§7）；词条若指 Wang 2025-E（energy perspective）则误：该文全文仅引言一处提及 Lyapunov。需把参考文献明确为《Mechanism and characteristics analysis of weak stability boundary transfers to the 2:1 DRO》。与 dro-family.md 中 phase-free-dro 的错配同款。

**入 vertical-orbit 的 4 条：**

13. **vertical-orbit**：骨架有据（Belló 2010、P&A 2014、Grebow 2008）。三处要改：(a) Lyapunov 轨道…可视为垂直轨道在 z 方向振幅趋于零时的退化形式，方向错误：垂直族零振幅极限是平动点本身；平面 Lyapunov 与垂直轨道分别是 Lissajous 面外/面内振幅→0 的两个极限，互为兄弟族（Belló 2010、Alessi 2009、Folta 2014）；(b) 关于 xOz 平面对称不完整：P&A 2014 与 Grebow 2008 均为双对称（xz 平面+上下半平面同路）；(c) 参数表出自 Guzzetti 2014，不在库无法核对；V4/V5 稳定性较好库内无直接出处。可补：y-z 投影呈 8 字、大幅值者包围两主天体并弯向两极（Grebow 2008）、Moulton 1920 最早指出（Grebow 2008 引）、L2 垂直轨道同宿连接与 L2↔L3 转移（Haapala 2013）。
14. **vertical-lyapunov-orbit**：与 P&A 2014 §2.6.9.5 原句一致（oscillate out of the xy plane, piercing the plane at the Lagrange point itself）。穿过平动点本身有出处，不算错误；建议注明严格含义是穿越 xy 平面的点位于平动点处。
15. **vertical-lyapunov-periodic-orbit**：**错误**。Belló 2010 原文：面内、面外两个简正振荡分别 known as the planar and vertical Lyapunov periodic orbits：垂直轨道是**面外**振荡、频率 **ωv**；词条写成在轨道平面内振荡的周期轨道、频率为 ωp，把平面轨道的特征安到了垂直轨道头上，两处都反。需改为在垂直于轨道平面方向振荡的周期轨道、频率为 ωv。
16. **vertical-periodic-orbit**：线性极限成立、对真实轨道不成立：仅在 z 方向有运动分量、x-y 平面投影为一点只在 μ=0/线性化下成立（Gómez 2001 §2.3.6.3）；真实垂直轨道 y-z 投影呈 8 字、有面内运动，大幅值者甚至包围两个主天体（Grebow 2008）。Lissajous 轨道的一种特例方向可接受（面内振幅→0 的极限；Folta 2014 §3.3 环面围绕垂直轨道），建议改写为 Lissajous 族在面内振幅趋于零时的退化极限，并删去投影为一点的绝对表述。

**入 axial-orbit 的 3 条：**

17. **axial-orbit**：结构有据（Folta 2015、Guzzetti 2016、He 2026），多处要改：(a) 关于 xOz 平面对称与 He 2026 的关于 x 轴对称、分 axial-1/axial-2 两支不一致，建议以 He 2026 为准；(b) 命名源于 x 轴方向显著振荡无库内出处（Doedel 2007 不在库）；(c) L1/L2 轴向轨道…适中的稳定性指数、适合长期驻留任务与自附参数表（SI 128~254，强不稳定）矛盾，且 Guzzetti 2016 明确 L1/L2 axial 全族无中心子空间、Folta 2015 选址最终推荐 DRO，应改为 L1/L2 axial 强不稳定；L4 axial 线性稳定（V&H 2014）；(d) 参数表出自 Guzzetti 2014 无法核对，但与库内定性结论相容，须标注；(e) 可视为 Lyapunov 轨道在三维空间中的延伸宜改为从平面 Lyapunov 族分岔（分岔位置与 halo 族不同）、L4/L5 的 axial 族则从垂直 Lyapunov 族分岔（He 2026）。可补：LEO→L4 axial 转移算例（V&H 2014，3.27 km/s、22.5 天）、L4/L5 axial 的 SDA 应用（Klonowski 2024）。
18. **axial-resonant-orbit**：与 V&H 2014 §III 逐字一致（asymmetric 3-D resonant orbits…are termed axial resonant orbits, and are calculated by slightly perturbing the bifurcating orbit in the z direction）。准确。
19. **31-axial-resonant-orbit**：与 V&H 2014 §VI 一致（3:1 axial 共振轨道经质量参数延拓从地月系迁移到土星-土卫六系，Fig. 15）。系统平移即 system translation，成立。建议补两点：(a) 共振比约定：V&H 的 3:1 是航天器 3 圈/月球 1 圈（与 IBEX 同例），而 P&A 2014、Guzzetti 2016 的 p:q 约定为月球 p 圈、航天器 q 圈，两种约定下记号相反；(b) 系统平移不保持稳定性（V&H §IV：EM 系 4:3 族全不稳定、土星-土卫六同族大多稳定）。

**具名族 3 条**（详见第 4 节）：

20. **butterfly-orbit**：家族真实、应用文献充足，保留但定义重写：连接 L1/L2 平动点是误读（实为环绕月球、两瓣分处月球 L1 侧与 L2 侧的 8 字形轨道，Grebow 2008、Zimovan-Spreen 2022）；yOz 平面对称无据；左翼/右翼表杜撰；Haapala 2013 引文无 butterfly，改引 Grebow 2008、Zimovan-Spreen 2022。
21. **broucke-orbit**：定义空泛但不算错误（Bosanac 2026 提及 Broucke's family H2、P&A 2014 旁证 1968 编目）；库内材料撑不起独立词条，建议删除或降级。
22. **dragonfly-orbit**：全库仅 Klonowski 2024 列名，无定义材料；得名由来与特性描述均无出处。建议删除或标注存疑。

总体判断：19 条待归并词条中，13 条与论文一致或基本一致（lyapunov-family、lyapunov-periodic-orbit、planar-lyapunov-orbit、planar-lyapunov-periodic-orbit、el1/el2/ll1/ll2、large-amplitude、lyapunov-like-orbit、vertical-lyapunov-orbit、axial-resonant-orbit、31-axial-resonant-orbit），其余 6 条需修正表述、更换出处或注明无法核对。明确的事实性错误 3 处：lyapunov-orbit 的穿越 x 轴时 y 方向速度为零（应为 x 方向速度为零）、vertical-lyapunov-periodic-orbit 的在轨道平面内振荡、频率 ωp（应为面外振荡、频率 ωv）、vertical-orbit 的 Lyapunov 是垂直轨道的退化形式（退化方向弄反，两族实为同级兄弟族）。出处问题 3 处：lyapunov-like-orbital-segments 错配到 Wang 2025-E（实为 Wang 2025-WSB）、butterfly-orbit 误引 Haapala 2013（全文无 butterfly）、lyapunov-periodic-orbit 的不适合停泊需注明是 L2 测控遮挡语境下的概括。无法核对 3 组：Guzzetti 2014 的三张参数表（lyapunov/vertical/axial 词条）、Doedel 2007 的 elemental 分类与 axial 得名、dragonfly 的全部特性描述。没有发现成规模凭空捏造的定义；问题集中在：对称性与穿越方向的细节、两族间退化/分岔关系的方向、共振比约定、以及同一作者同年多篇论文间的出处错配。

## 6. 三个主词条的建议大纲

三分结构与库内文献的组织方式一致：Belló 2010 的 planar/vertical 两简正族、He 2026 的 emanate-分岔图（平面 Lyapunov 族与垂直族自平动点 emanate，halo 族与 axial 族自平面 Lyapunov 族不同位置分岔）、Guzzetti 2016 目录的 Lyi/Vi/Ai/Hi 并列。两点结构提醒：(a) 垂直族与平面 Lyapunov 族是同级兄弟族（同出 Lyapunov 中心定理），vertical-orbit 词条不要写成 Lyapunov 的子类或反向退化关系；(b) axial 与 halo 同级（都是平面 Lyapunov 族的三维分岔族），词条互链即可。

### lyapunov-orbit（平面 Lyapunov 轨道族）

1. **定义**：CR3BP 共线平动点附近平面周期轨道族（Gómez 2001、P&A 2014）；线性化面内中心模、频率 ωp（Belló 2010）；存在性由 Lyapunov 中心定理保证、由此得名（Alessi 2009）；L1/L2/L3 各有一族，LL1/LL2 周期 2~4 周、LL3 约 4 周（P&A 2014）。
2. **几何与对称性**：关于 x 轴对称、每圈垂直穿越 x 轴两次、穿越点 ẋ=0（P&A 2014、Oshima 2019）；近月侧顺行、远侧逆行（Oshima 2019 引 Lam & Whiffen 2005）；小振幅近椭圆、大振幅变形。
3. **稳定性与流形**：不稳定（P&A 2014）；单值矩阵特征值结构（谭明虎 2014、郑越 2023）；稳定/不稳定流形管状结构（P&A 2014 Fig. 2-34）；等雅可比 LL1↔LL2 自由异宿转移（P&A §2.6.11）；垂直不稳定模态与 vertically stable 流形（Oshima 2019）。
4. **与其他族的关系**：分岔出 halo 族（1:1 共振、临界垂直稳定成员；Belló 2010、Gómez 2001、Alessi 2009、P&A 2014）；分岔出 axial 族（He 2026）；与垂直族互为兄弟族、由 Lissajous 环面连接（Belló 2010、Guzzetti 2016）；Az=0 退化表述（P&A 2014）。
5. **参数化与记号**：x₀/ẏ₀/C 参数化与特征曲线（P&A 2014）；ELi/LLi 记号（E=日地、L=地月；徐明 2010、P&A 2014）。
6. **大幅值成员与地月转移**：相切几何（谭明虎 2014 绕月轨道、徐明 2010 DRO 的 Ax 数字、Oshima 2019）；稳定流形直达近地（郑越 2023、谭明虎 2014）；两脉冲地月转移数字（省约 100 m/s；3920.7 m/s、62 天）；Lyapunov-like 轨道与轨道段（Wang 2021、Wang 2025-WSB）；WSB 拼接与暂时捕获（徐明 2010、Fantino 2010、Belló 2010）。
7. **术语变体表**：Lyapunov 轨道族、Lyapunov 周期轨道、平面 Lyapunov（周期）轨道、EL1/EL2/LL1/LL2 Lyapunov 轨道、大幅值 Lyapunov 轨道、Lyapunov-like 轨道、类 Lyapunov 轨道段，旧 URL 重定向到对应锚点。

### vertical-orbit（垂直轨道族）

1. **定义**：共线点附近面外振荡为主的周期轨道族；线性化面外中心模、频率 ωv（Belló 2010）；vertical Lyapunov orbits, also known as vertical orbits（P&A 2014）；与平面族同出 Lyapunov 中心定理（Alessi 2009）；穿越 xy 平面于平动点处（P&A 2014，注明表述语境）。
2. **几何与对称性**：双对称（xz 平面+上下同路；P&A 2014、Grebow 2008）；y-z 投影 8 字形；大幅值者包围两主天体、弯向两极（Grebow 2008）；线性极限下退化为纯 z 振荡（Gómez 2001 Hill 分析），注明 xy 投影为一点只在该极限成立。
3. **与其他族的关系**：面内振幅→0 的 Lissajous 极限、Lissajous 环面围绕垂直轨道（Belló 2010、Folta 2014）；与平面 Lyapunov 族由环面族连接（Belló 2010、Guzzetti 2016 JC∈[3.15,3.17]）；halo 族延续经过垂直轨道附近（Gómez 2001）；L4/L5 的 axial 族从垂直族分岔（He 2026）。
4. **历史与存在范围**：Moulton 1920（Grebow 2008 引）；L1/L2/L3 与 L4/L5 均有族（Folta 2015、V&H 2014、He 2026）。
5. **应用**：月球南极覆盖（Grebow 2008）；同宿连接与 L2↔L3 转移（Haapala 2013）；SDA 观测员族（Klonowski 2024）；环面编队候选（Guzzetti 2016 MPLFS 例）。
6. **术语变体表**：垂直 Lyapunov 轨道、垂直 Lyapunov 周期轨道、垂直周期轨道（垂直 Lyapunov 周期轨道条需先按第 5 节第 15 条改正）。

### axial-orbit（轴向轨道族）

1. **定义**：从平面 Lyapunov 族分岔的三维周期轨道族，分岔位置与 halo 族不同（He 2026）；关于 x 轴对称、分 axial-1/axial-2 两支（He 2026）；L4/L5 axial 族从垂直 Lyapunov 族分岔、不再对称（He 2026）；目录体系中的标准 LPO 族（Folta 2015、Guzzetti 2016）。得名与 Doedel 2007 elemental 分类注明无法核对。
2. **稳定性**：L1/L2 axial 强不稳定、无中心子空间（Guzzetti 2016）；L4 axial 线性稳定、120 年有界（V&H 2014）；词条参数表标注未核（Guzzetti 2014 不在库）。
3. **轴向共振轨道**：定义（z 向微扰分叉轨道得三维非对称共振轨道；V&H 2014）；3:1 axial 共振轨道与系统平移（质量参数延拓、EM→土星-土卫六；V&H 2014）；共振比两种约定并列注明（V&H 的 3:1=航天器 3 圈/月 1 圈；P&A/Guzzetti 的 p:q=月球 p 圈/航天器 q 圈）；平移不保持稳定性（V&H 2014）。
4. **应用**：LEO→L4 axial 转移（V&H 2014，3.27 km/s、22.5 天）；L4/L5 axial 的 SDA 架构应用（Klonowski 2024）；L4/L5 axial 应用专文（Qiao 等 2024，经 He 2026 转引，不在库）。
5. **术语变体表**：轴向共振轨道、3:1 轴向共振轨道、axial-1/axial-2 支，旧 URL 重定向。

具名族处置：butterfly-orbit 保留独立词条、按第 4 节重写；broucke-orbit、dragonfly-orbit 建议删除（或标存疑），不进入三个主词条的变体表。

合并障碍评估：三个主词条概念分层清楚（平面族/垂直族/轴向族按线性化模态与分岔关系分开），没有相互矛盾的定义需要裁决。需处理三类问题：(a) 方向性错误的改正：穿越速度方向、退化关系方向、vertical-lyapunov-periodic-orbit 的面内/面外颠倒；(b) 约定并列：共振比两种 p:q 约定、垂直 Lyapunov 与垂直轨道两名并列（P&A 2014 明示等价）；(c) 出处修补：Wang 2025 两篇的错配、butterfly 的误引、Guzzetti 2014/Doedel 2007 不在库的参数表标注。中文译名建议统一为平面 Lyapunov 轨道（族）、垂直轨道（族）、轴向轨道（族），垂直 Lyapunov 轨道作为别名收入变体表。