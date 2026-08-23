---
title: 引力位（Gravitational Potential）
description: 天体引力场的标量势函数，其梯度给出引力加速度矢量。覆盖点质量位、球谐函数展开（带谐/田谐/扇谐三分法）、归一化约定、J 符号惯例、正常位与扰动位，以及地球和月球引力位的典型量级对比。
keywords: 引力位, 引力势, Gravitational Potential, 球谐函数, 带谐项, 田谐项, 扇谐项, J2, 扰动位, 正常位, 归一化勒让德函数, 斯托克斯系数, 引力场
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 引力位（Gravitational Potential）
  desc: 天体引力场的标量势函数，其梯度给出引力加速度。
  image: /logo.png
og:
  title: 引力位（Gravitational Potential）详解 | 术语定义
  description: 天体引力场的标量势函数，其梯度给出引力加速度矢量。覆盖点质量位、球谐函数展开、带谐/田谐/扇谐三分法、归一化约定、J 符号惯例、正常位与扰动位，以及地球和月球引力位的典型量级对比。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 引力位（Gravitational Potential）详解 | 术语定义
  description: 天体引力场的标量势函数，其梯度给出引力加速度矢量。覆盖点质量位、球谐函数展开、带谐/田谐/扇谐三分法、归一化约定、J 符号惯例。
  image: /logo.png
permalink: /glossary/fundamentals/gravitational-potential/
---

# 引力位（Gravitational Potential）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

引力位（gravitational potential，又称引力势）是描述天体引力场的标量势函数 $U(\mathbf{r})$，其梯度给出该点的引力加速度矢量：

$$\mathbf{g}(\mathbf{r}) = \nabla U(\mathbf{r})$$

引力位提供了比矢量场更紧凑的数学描述：一个标量函数便携带了引力场的全部信息（Vallado 2022）。航天器在引力场中的势能 $V$ 与引力位的关系为 $U = -V/m$，引力势能以无穷远处为零点。

**点质量位。** 将中心天体视为质点或匀质球体时，$U = \mu / r$，其中 $\mu = GM$ 为天体引力常数，$r$ 为天体质心距。这是二体问题的基础：代入 $\nabla U$ 即得牛顿万有引力加速度 $-\mu \,\hat{\mathbf{r}} / r^2$。

## 非球形引力位的球谐展开

真实天体不是匀质球体，其质量分布的不均匀和形状的非球形使实际引力偏离点质量模型。对外部空间一点 $P(r, \phi, \lambda)$（$r$ 为天体质心距，$\phi$ 为纬度，$\lambda$ 为经度），引力位可展开为球谐级数（Vallado 2022, Ch. 8.6；尹智等 2024）：

$$U(r,\phi,\lambda) = \frac{\mu}{r} \left[ 1 + \sum_{\ell=2}^{\infty} \sum_{m=0}^{\ell} \left(\frac{R}{r}\right)^{\!\ell} \bar{P}_{\ell m}(\sin\phi) \bigl( \bar{C}_{\ell m} \cos m\lambda + \bar{S}_{\ell m} \sin m\lambda \bigr) \right]$$

其中 $R$ 为天体参考半径（地球取赤道半径 $a_e$），$\bar{P}_{\ell m}$ 为归一化缔合勒让德函数，$\bar{C}_{\ell m}$ 和 $\bar{S}_{\ell m}$ 为归一化球谐系数（斯托克斯系数）。系数携带天体全部质量分布信息：低阶项描述大尺度形状（扁率等），高阶项刻画局部细节。展开从 $\ell = 2$ 开始是因为 $\ell = 0$ 项即点质量位 $\mu/r$，而 $\ell = 1$ 项在坐标系原点取在天体质心时为零。

### 三类球谐项

按阶数 $m$ 与次数 $\ell$ 的关系，球谐项分为三类（Vallado 2022；尹智等 2024）：

| 类型 | 条件 | 几何特征 | 物理含义 |
| :--- | :--- | :--- | :--- |
| 带谐项（zonal） | $m = 0$ | 仅随纬度变化，对称于极轴 | 赤道扁率（$J_2$）、梨形（$J_3$）等整体形状 |
| 扇谐项（sectoral） | $\ell = m$ | 仅随经度变化，呈橙瓣状 | 经度方向的质量集中 |
| 田谐项（tesseral） | $\ell \neq m \neq 0$ | 随纬度和经度同时变化，呈棋盘状 | 特定区域的质量异常 |

**J 符号惯例。** 带谐项常用 $J_\ell$ 代替 $C_{\ell,0}$，约定 $J_\ell = -C_{\ell,0}$（Vallado 2022, Eq. 8-20）。地球的 $J_2 \approx 1.0826 \times 10^{-3}$，是各系数中绝对值最大的一个，比次大的 $J_3$ 约大 1000 倍，贡献了地球非球形引力摄动的主体（轨道面进动、近地点旋转等）。

**归一化。** 原始系数 $C_{\ell m}$ 和 $S_{\ell m}$ 随 $\ell$、$m$ 增大会变得极小而引入舍入误差，因此实际发布的模型均使用归一化系数 $\bar{C}_{\ell m}$、$\bar{S}_{\ell m}$：

$$\bar{C}_{\ell m} = \sqrt{\frac{(\ell+m)!}{(\ell-m)!\,k\,(2\ell+1)}} \; C_{\ell m}, \qquad k = \begin{cases} 1 & m=0 \\ 2 & m \neq 0 \end{cases}$$

对应的勒让德函数也需反向归一化以保证乘积 $\bar{C}_{\ell m} \bar{P}_{\ell m} = C_{\ell m} P_{\ell m}$ 不变（Vallado 2022, Eq. 8-22）。

### 正常位与扰动位

大地测量学将引力位分解为参考部分和偏离部分（Vallado 2022）：

$$U = V + T$$

- **正常引力位 $V$**：由一个旋转对称椭球体（正常地球）产生的引力位，只含偶阶带谐项。

- **扰动引力位 $T$**：真实位与正常位之差 $T = U - V$。扰动引力加速度 $\delta\mathbf{g} = \nabla T$ 量级约 $200\ \text{mgal}$（$10^{-5}\ \text{m/s}^2$），在精密定轨和高程测量中不可忽略。

## 地球与月球的对比

| 特性 | 地球 | 月球 |
| :--- | :--- | :--- |
| $J_2$ 量级 | $\sim 1.08 \times 10^{-3}$ | $\sim 2.03 \times 10^{-4}$ |
| 高阶场不规则程度 | 相对平滑 | **显著更强**：正面存在质量瘤（mascon），高阶系数衰减更慢 |
| 对低轨道影响 | $J_2$ 主导摄动 | 高阶项（$\ell$ 达数十阶）对 $<100\ \text{km}$ 轨道仍有显著影响 |
| 代表性模型 | EGM2008（2190 阶） | GRGM660PRIM（660 阶） |

月球引力场的不规则性是地月空间任务设计的关键约束：低月球轨道（LLO）的高度如果低于约 100 km，引力不规则性会使单脉冲难以维持稳定轨道（Trofimov et al. 2020）。

## 相关概念

- [引力场模型（Gravity Field Model）](/glossary/fundamentals/gravity-field-model/)

- [重力梯度矩阵（Gravity Gradient Matrix）](/glossary/fundamentals/gravity-gradient-matrix/)

- [J2 摄动](/glossary/dynamics/non-spherical-gravity-perturbation/)

- [第三体引力摄动](/glossary/dynamics/third-body-perturbation/)

- [CR3BP](/glossary/dynamics/cr3bp/)

- [平动点（Libration Point）](/glossary/fundamentals/libration-point/)

## 参考文献

- Vallado, D. A., 2022, *Fundamentals of Astrodynamics and Applications*, 5th ed., Microcosm Press. Ch. 8.6.1：球谐函数展开的完整推导、归一化约定、J 符号、三类谐项分类。

- 尹智, 张克非, 段亚博, 刘军生, 穆庆禄, 2024, 地球科学和深空探测的引力场建模理论研究进展, *地球与行星物理论评*, 55(5): 501–512. 引力场定义式、球谐展开、多极展开理论的系统综述。

- Chao, B. F. & Shih, S. A., 2021, Multimultipole expansion: Unifying formalism for Earth and planetary gravitational dynamics, *Surveys in Geophysics*, 42: 803–838. 复变球谐引力场表示。

- Trofimov, S. et al., 2020, Transfers from NRHOs to low-perilune orbits, *Acta Astronautica*, 167: 260–271. 月球不规则引力对低近月点轨道的影响。
