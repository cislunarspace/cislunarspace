---
title: 晕轨道（Halo Orbit）
description: 圆型限制性三体问题中共线平动点（L1/L2/L3）附近的三维周期轨道，关于 xz 平面对称，南北两族互为镜像；多数成员不稳定并带有不变流形，是地月空间低能转移与月球通信导航星座的基础轨道。
keywords: 晕轨道, Halo Orbit, 平动点轨道, NRHO, Lissajous, 轨道设计, 周期轨道, 不变流形
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-10-01
wechatShare:
  title: 晕轨道（Halo Orbit）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 晕轨道（Halo Orbit）详解 | 术语定义
  description: 圆型限制性三体问题中共线平动点（L1/L2/L3）附近的三维周期轨道，关于 xz 平面对称，南北两族互为镜像；多数成员不稳定并带有不变流形，是地月空间低能转移与月球通信导航星座的基础轨道。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 晕轨道（Halo Orbit）详解 | 术语定义
  description: 圆型限制性三体问题中共线平动点（L1/L2/L3）附近的三维周期轨道，关于 xz 平面对称，南北两族互为镜像；多数成员不稳定并带有不变流形，是地月空间低能转移与月球通信导航星座的基础轨道。
  image: /logo.png
permalink: /glossary/orbits/halo-orbit/
---

# 晕轨道（Halo Orbit）

> 本文作者：天疆说
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

晕轨道是圆型限制性三体问题（CR3BP）中共线平动点（L1、L2、L3）附近的三维周期轨道 \cite{parkerDirectLunarHalo2008}。当平动点附近轨道的面内频率与面外频率相等时，平面 Lyapunov 族分岔出晕轨道族 \cite{gomezDynamicsMissionDesign2001,alessiLeavingMoonMeans2009}；也可以说晕轨道是 Lissajous 轨迹中两频率相等退化出的周期解 \cite{howellApplicationDynamicalSystems1997}。轨道在 yz 平面上的投影呈环状（halo 之名由此而来），关于 xz 平面对称，每圈两次垂直穿越该平面 \cite{gomezDynamicsMissionDesign2001,contiDesignHaloOrbit2025}。

## 南北族与类别

CR3BP 的力场关于 xy 平面对称，而单条晕轨道关于 xy 平面并不对称，因此晕轨道成对出现：远拱点位于 xy 平面以上者为**北族**，以下者为**南族**，两族互为镜像，同一族内成员的差别只在 z 与 ż 分量的符号 \cite{parkerDirectLunarHalo2008,contiDesignHaloOrbit2025}。北族即 Class I、南族即 Class II \cite{howellApplicationDynamicalSystems1997,alessiLeavingMoonMeans2009}。注意区分两个对称性：单条晕轨道关于 xz 平面对称，南北两族之间关于 xy 平面镜像。

南族卫星有一半以上时间位于月球轨道平面以下，利于与月球南半球通信 \cite{parker2014low}；北族则对月球北极区覆盖更好 \cite{gao2020coverage}。

## L1/L2/L3 成员

- **L1 晕轨道**：位于地月之间，可无遮挡地同时看到地球与月球正面 \cite{parker2014low}；近月点较近、月球视直径变化小，利于光学导航 \cite{qiAnalysisAutonomousOrbit2023}。
- **L2 晕轨道**：位于月球外侧，覆盖月球背面；鹊桥中继星即工作在地月 L2 晕轨道 \cite{qiaoOrbitalParameterCharacterization2025}。
- **L3 晕轨道**：位于地球背月一侧，不稳定、需主动保持；族中稳定成员的近地点低于地表不可用，选用的不稳定成员远地点高度约 74 万千米、周期约 26.6 天 \cite{contiDesignHaloOrbit2025}。

## 稳定性

地月系晕轨道多数不稳定，因此带有不变流形，这是低能转移设计的动力学基础 \cite{parkerDirectLunarHalo2008}。稳定性判据由一周状态转移矩阵（单值矩阵）的非 1 特征值构造两个指数 ν1、ν2：两者均为实数且绝对值不超过 1 时称该晕轨道稳定 \cite{contiDesignHaloOrbit2025}。族内中段存在线性稳定子段：地月 L1 稳定段周期约 9.4 天、面外振幅约 74,000 km，L2 约 10 天、77,600 km \cite{contiDesignHaloOrbit2025}；从 Lyapunov 族分岔处稳定指数可高达数百，而 L2 侧稳定指数 1~1.69 的近稳定段正是 NRHO \cite{spreenTrajectoryDesignTargeting2021}，见[近直线晕轨道（NRHO）](/glossary/orbits/nrho/)。线性稳定不等于无需保持：星历模型下稳定晕轨道的年保持消耗约 7.79 m/s（\cite{gao2020coverage} 引 Davis 等）。

## 参数化与解析构造

晕轨道以面外振幅 Az 标记大小，但 Az 有三种约定，引用时须指明：

- **展开系数约定（Gómez 2001）** \cite{gomezDynamicsMissionDesign2001}：Lindstedt-Poincaré 展开中 α 为面内振幅、β 为面外振幅（取基频余弦项系数）；晕轨道存在的频率相等条件化为约束关系 Δ(α,β)，且面内振幅须不小于 α_min，族即自此从 Lyapunov 族分岔。
- **最大偏离约定（Kakoi 2014）** \cite{kakoiAccessMarsEarth2014}：Az = 轨道偏离 xy 平面的最大 |z|，工程文献最常用（\cite{gordon2008transfers} 以 Az=1000~10000 km 扫描 L2 晕族）。
- **峰峰值约定（Spreen 2021）** \cite{spreenTrajectoryDesignTargeting2021}：Az = z 最大值减最小值。对南族 NRHO，z_max≈0，峰峰值与最大偏离约定数值接近；对一般晕轨道两者可差近一倍。

初值构造：Richardson 用 Lindstedt-Poincaré 方法给出共线点附近周期运动的三阶解析解，工程上以解析解生成初值、再经微分修正得到精确周期轨道 \cite{gomezDynamicsMissionDesign2001,LiChenShuoJiYuRuoWenDingBianJieLiLunDeDiNengDiYueZhuanYiGuiDaoSheJi2024}；解析解轨道也作为计算偏离量与流形起点的基准（即所谓标称轨道）。

## 应用与转移

- **直接转移（Parker & Born 2008）** \cite{parkerDirectLunarHalo2008}：两脉冲方案：LEO 上地月转移入射（TLI）+ 流形插入点沿速度方向的切向机动，把航天器送入目标晕轨道的稳定流形后渐近进入。5 天快速转移约 3.6~4.1 km/s；最低约 3.6 km/s 但需三周以上。
- **流形转移（Gordon 2008、彭坤 2016）** \cite{gordon2008transfers,PengKunJiYuBuBianLiuXingDeDiYueL2DianHaloGuiDaoZhuanYiGuiDaoSheJi2016}：Gordon 2008 在月球近旁施加流形入轨机动进入 L2 低幅值晕轨道稳定流形，入轨机动最小 0.282 km/s；彭坤 2016 反向从 100 km 环月轨道出发，利用稳定流形靠近月球的特性实现近零消耗的入轨。
- **南北族间转移（Du 2023）** \cite{duTwoTrajectoryConfigurations2023}：L2 北↔南晕轨道低推力转移，以 Lyapunov 同宿连接为初值拼出异宿连接的流形构型全面占优（推力 10 mN 仍可行，38.5 天、1.7 kg 燃料）。异宿连接只在特定雅可比常数区间存在 \cite{haapalaFrameworkConstructingTransfers2016}。
- **异系统晕轨道间转移（Kakoi 2014、李宸硕 2024、Canalias 2008）** \cite{kakoiAccessMarsEarth2014,LiChenShuoJiYuRuoWenDingBianJieLiLunDeDiNengDiYueZhuanYiGuiDaoSheJi2024,canaliasComputingNaturalTransfers2008}：地月系与日地系晕轨道之间可实现机动自由（maneuver-free）转移：两个三体系统的双曲流形在庞加莱截面上位置匹配，多重打靶细化后耦合点机动一般小于 100 m/s，最好情形为零。
- **晕轨道穿越（徐明 2010）** \cite{XuMingDiYueDiNengZhuanYiDeFaShengTiaoJianJiGuiJiGouZao2010}：经 LL1/LL2 晕轨道穿越比经平动点穿越多一维设计自由度（晕轨道相位），发射窗口更多，但能量更高、消耗更大；LL2 晕轨道穿越用于构造 WSB 转移时，窗口由太阳相位 β 与晕轨道相位 τ 张成。
- **捕获段（Zanzottera 2011）** \cite{zanzotteraLowenergyEarthtohaloTransfers2011}：两段式低能转移的地月段：利用目标 L2 晕轨道稳定流形的外部分支，从晕轨道向后积分至截面（正演即自然漂入），描述自然衰减进入目标晕轨道的过程。
- **交会与相位调整（Bucchioni 2023）** \cite{bucchioniPhasingRectilinearHalo2023}：比较 Butterfly 族停泊、halo 族停泊、直接相位调整三种策略，无显著最优；安全做法是瞄准目标轨道的不稳定流形而非轨道本身，交会在远月点附近进行。
- **Halo2GEO（Patel 2024）**：L1 晕轨道经流形入轨加一次脉冲转入 GEO 的连接轨道，全程约 23 天，是地月空间态势感知语境下的假想被监视目标轨道。

## 术语变体对照

| 术语 | 含义 | 出处 |
|------|------|------|
| 北族 / 南族（northern/southern family） | 远拱点在 xy 平面以上/以下的镜像两族 | \cite{parkerDirectLunarHalo2008} |
| Class I / Class II | 北族 / 南族的另一叫法 | \cite{howellApplicationDynamicalSystems1997} |
| L1/L2/L3 晕轨道 | 三个共线平动点各自的晕轨道族 | \cite{parkerDirectLunarHalo2008} |
| EM/SE halo | 地月系 / 日地系的晕轨道 | \cite{kakoiAccessMarsEarth2014} |
| 标称晕轨道（nominal） | Richardson 三阶解析解生成的基准轨道 | \cite{gomezDynamicsMissionDesign2001} |
| 稳定晕轨道段 | ν1、ν2 均为实数且 \|ν\|≤1 的族内子段 | \cite{contiDesignHaloOrbit2025} |
| 振幅 Az | 面外振幅，三种约定（展开系数/最大偏离/峰峰值） | \cite{gomezDynamicsMissionDesign2001} / \cite{kakoiAccessMarsEarth2014} / \cite{spreenTrajectoryDesignTargeting2021} |
| 直接转移 | TLI + 流形插入点切向机动的两脉冲方案 | \cite{parkerDirectLunarHalo2008} |
| halo-to-halo 转移 | 不同三体系统晕轨道间的机动自由转移 | \cite{kakoiAccessMarsEarth2014} |
| 南北族间转移 | 北↔南晕轨道的低推力异宿连接 | \cite{duTwoTrajectoryConfigurations2023} |
| 晕轨道穿越 | 经 LL1/LL2 晕轨道完成势阱穿越 | \cite{XuMingDiYueDiNengZhuanYiDeFaShengTiaoJianJiGuiJiGouZao2010} |
| 捕获段 | 沿稳定流形外部分支自然进入晕轨道的转移段 | \cite{zanzotteraLowenergyEarthtohaloTransfers2011} |
| Halo2GEO | L1 晕轨道→GEO 的流形+脉冲转移 | Patel 2024 |

## 相关概念

- [近直线晕轨道（NRHO）](/glossary/orbits/nrho/)
- [Lissajous 轨道（Lissajous Orbit）](/glossary/orbits/lissajous-orbit/)
- [Lyapunov 轨道（Lyapunov Orbit）](/glossary/orbits/lyapunov-orbit/)
- [远距离逆行轨道（Distant Retrograde Orbit, DRO）](/glossary/orbits/distant-retrograde-orbit-dro/)
- [流形连接（Manifold Connection）](/glossary/orbits/manifold-connection/)
- [弱稳定边界转移轨道（Weak Stability Boundary Transfer Trajectory）](/glossary/orbits/weak-stability-boundary-transfer-trajectory/)

## 参考文献

- Patel et al., 2024, Halo2GEO 转移相关研究
