---
title: Lyapunov 轨道（Lyapunov Orbit）
description: 圆型限制性三体问题中共线平动点附近的平面周期轨道族，存在性由李雅普诺夫中心定理保证；轨道不稳定并带有不变流形，是低能转移、弱稳定边界拼接与暂时捕获研究的基础结构。
keywords: Lyapunov 轨道, Lyapunov Orbit, 平面周期轨道, 平动点轨道, 不变流形, 低能转移
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-07
wechatShare:
  title: Lyapunov 轨道（Lyapunov Orbit）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: Lyapunov 轨道详解 | 术语定义
  description: 圆型限制性三体问题中共线平动点附近的平面周期轨道族，存在性由李雅普诺夫中心定理保证；轨道不稳定并带有不变流形，是低能转移、弱稳定边界拼接与暂时捕获研究的基础结构。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Lyapunov 轨道详解 | 术语定义
  description: 圆型限制性三体问题中共线平动点附近的平面周期轨道族，存在性由李雅普诺夫中心定理保证；轨道不稳定并带有不变流形，是低能转移、弱稳定边界拼接与暂时捕获研究的基础结构。
  image: /logo.png
permalink: /glossary/orbits/lyapunov-orbit/
---

# Lyapunov 轨道（Lyapunov Orbit）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

Lyapunov 轨道是圆型限制性三体问题（CR3BP）中环绕共线平动点的平面周期轨道族，L1、L2、L3 各有一族（Gómez 2001、Parker & Anderson 2014）。线性化下，共线点的中心子空间分解为两个简正振荡：面内（频率 ωp）与面外（频率 ωv），仅激发面内中心模的周期解即平面 Lyapunov 轨道（Belló 2010）。族的存在性由李雅普诺夫中心定理保证，族由此得名（Alessi 2009），与Lyapunov 稳定性理论无关。

通常所说的 Lyapunov 轨道即平面 Lyapunov 轨道；另有垂直（vertical）族与它是同级兄弟族（见[垂直轨道](/glossary/orbits/vertical-orbit/)）。地月 L1/L2 族周期约 2~4 周（越靠近平动点越接近 2 周），L3 族约 4 周（Parker & Anderson 2014）。

## 几何与对称性

轨道关于旋转系 x 轴对称，每圈垂直穿越 x 轴两次；垂直穿越意味着穿越点 x 方向速度为零、速度沿 y 方向，初值形如 [x₀, 0, 0, ẏ₀]（Parker & Anderson 2014、谭明虎 2014）。运动方向在近月侧顺行、远侧逆行（Oshima 2019 引 Lam & Whiffen 2005）。

## 稳定性与流形

族内成员全部不稳定（Parker & Anderson 2014）：单值矩阵特征值 λ₁=λ₂=1、λ₃=1/λ₄，对应稳定/不稳定方向（谭明虎 2014）。流形在近月前呈光滑管状。除面内双曲模外，部分成员还有垂直不稳定模态，其面外稳定/不稳定流形是面内-面外状态之间的天然输运通道，可经多次月球飞越提升倾角（Oshima 2019）。

两个重要推论：

- 等雅可比常数时，LL1 与 LL2 族成员间存在自由（零机动）异宿转移，可用庞加莱图寻找（Parker & Anderson 2014）。
- L1/L2 平面 Lyapunov 轨道的稳定流形给出 WSB 区域的边界，不稳定流形支配对月球的暂时捕获（Fantino 2010）；日地系 EL1/EL2 与地月系 LL2 的 Lyapunov 流形拼接即弱稳定边界转移的经典构造（徐明 2010）。

## 与其他族的关系

- **分岔出晕轨道族**：当面内、面外频率相等（1:1 共振）时，族中垂直稳定性临界的成员分岔出晕轨道族（Belló 2010、Gómez 2001、Alessi 2009）。
- **分岔出轴向（axial）轨道族**，分岔位置与晕轨道族不同（He 2026）。
- **与垂直族互为兄弟族**：平面 Lyapunov 是面外振幅→0 的李萨如极限，垂直轨道是面内振幅→0 的李萨如极限；两者之间由准周期环面族连接（Belló 2010、Guzzetti 2016）。

## 参数化与记号

族内成员可用 x₀、ẏ₀ 或雅可比常数 C 任一标定，常用 x₀–C 特征曲线表示（Parker & Anderson 2014）。文献记号：ELi 指日地系 Li 点的轨道，LLi 指地月系 Li 点的轨道（徐明 2010、Parker & Anderson 2014）。

## 大幅值成员与地月转移

幅值大到与绕月轨道相切的成员有特殊的转移价值：其稳定流形不再具有管道拓扑，但可直达近地轨道附近：一条稳定流形直接连接近地轨道与近月轨道（谭明虎 2014 首出；郑越 2023）。据此设计的两脉冲地月转移比 Hohmann 省约 100 m/s、比 WSB 转移省时（谭明虎 2014）；郑越 2023 算例总 ΔV 约 3921 m/s、62 天。徐明 2010 给出与大幅值 DRO 相切的 Lyapunov 轨道参数（DRO Ax=90867 km 时，相切的 L1 Lyapunov Ax=32828 km），分别用于 DRO 的快速与低能进入。

**Lyapunov-like（类 Lyapunov）轨道**：NRHO→DRO 外转移中，近月飞越之后的弧段常呈大幅值 Lyapunov 形态：一侧与 DRO 相切、另一侧近月，天然伴随近月飞越，利于低脉冲 DRO 入轨（Wang 2021，术语追溯 Zhang 2020）。Wang 2025（WSB 篇）进一步把 DRO 捕获轨迹中的 L1/L2 类 Lyapunov 轨道段按到达雅可比能量分类：能量高直接进近地侧，能量低经更倾斜、更大幅值的类 Lyapunov 段进远地侧。

## 术语变体对照

| 术语 | 含义 | 出处 |
|------|------|------|
| Lyapunov 轨道族 / 周期轨道 | 即平面 Lyapunov 族 | Gómez 2001 |
| 平面 Lyapunov（周期）轨道 | 面外振幅为零、频率 ωp 的周期解族 | Belló 2010 |
| EL1/EL2/LL1/LL2 Lyapunov 轨道 | 日地系 / 地月系对应点的 Lyapunov 轨道 | 徐明 2010 |
| 大幅值 Lyapunov 轨道 | 与绕月轨道相切、稳定流形直达近地的族内成员 | 谭明虎 2014、郑越 2023 |
| Lyapunov-like 轨道 / 轨道段 | 转移弧段中呈大幅值 Lyapunov 形态的部分 | Wang 2021、Wang 2025 |

## 相关概念

- [垂直轨道（Vertical Orbit）](/glossary/orbits/vertical-orbit/)
- [轴向轨道（Axial Orbit）](/glossary/orbits/axial-orbit/)
- [晕轨道（Halo Orbit）](/glossary/orbits/halo-orbit/)
- [Lissajous 轨道（Lissajous Orbit）](/glossary/orbits/lissajous-orbit/)
- [流形连接（Manifold Connection）](/glossary/orbits/manifold-connection/)
- [弱稳定边界转移轨道（Weak Stability Boundary Transfer Trajectory）](/glossary/orbits/weak-stability-boundary-transfer-trajectory/)

## 参考文献

- Gómez et al., 2001, Dynamics and Mission Design Near Libration Points, Vol. I
- Alessi et al., 2009, Leaving the Moon by means of invariant manifolds of libration point orbits
- Belló et al., 2010, Invariant manifolds, Lagrangian trajectories and space mission design
- Fantino et al., 2010, A note on libration point orbits, temporary capture and low-energy transfers
- 徐明, 2010, 地月低能转移的发生条件及轨迹构造
- Parker & Anderson, 2014, Low-Energy Lunar Trajectory Design
- 谭明虎 等, 2014, 基于大幅值 Lyapunov 轨道的地月转移轨道设计研究
- Guzzetti et al., 2016, Rapid trajectory design in the Earth–Moon ephemeris system via an interactive catalog of periodic and quasi-periodic orbits
- Oshima, 2019, The use of vertical instability of L1 and L2 planar Lyapunov orbits for transfers from near rectilinear orbits
- Wang et al., 2021, Transfers between NRHOs and DROs in the Earth-Moon system
- 郑越、赵敏, 2023, 基于大幅值 Lyapunov 轨道稳定流形的地月转移方法
- Wang et al., 2025, Mechanism and characteristics analysis of weak stability boundary transfers to the 2:1 DRO
- He et al., 2026, A review of cislunar constellation design and optimization
