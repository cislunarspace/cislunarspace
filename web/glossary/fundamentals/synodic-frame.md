---
title: 会合坐标系（Synodic Frame / Rotating Frame）
description: 圆型限制性三体问题的标准参考系——原点在两主天体质心，随主天体连线同步旋转，主天体在此系中固定、运动方程自治。覆盖地月/日地/日地+月等系统实例、质心-地心-月心原点变体、以及 x 轴方向两种约定的辨析。
keywords: 会合坐标系, 旋转坐标系, synodic frame, rotating frame, 会合参考系, CR3BP, 地月旋转系, 日地旋转系, 平动点, 质心旋转坐标系
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 会合坐标系（Synodic Frame / Rotating Frame）
  desc: CR3BP 的标准参考系：原点在质心、随主天体连线同步旋转。
  image: /logo.png
og:
  title: 会合坐标系（Synodic/Rotating Frame）详解 | 术语定义
  description: 圆型限制性三体问题的标准参考系——原点在两主天体质心，随主天体连线同步旋转，主天体在此系中固定、运动方程自治。覆盖地月/日地/日地+月等系统实例、质心-地心-月心原点变体、以及 x 轴方向两种约定的辨析。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 会合坐标系（Synodic/Rotating Frame）详解 | 术语定义
  description: 圆型限制性三体问题的标准参考系——原点在两主天体质心，随主天体连线同步旋转，主天体在此系中固定、运动方程自治。覆盖地月/日地/日地+月等系统实例、质心-地心-月心原点变体、以及 x 轴方向两种约定的辨析。
  image: /logo.png
permalink: /glossary/fundamentals/synodic-frame/
---

# 会合坐标系（Synodic Frame / Rotating Frame）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

会合坐标系（synodic frame，又称旋转坐标系 rotating frame、会合参考系）是圆型限制性三体问题（CR3BP）的标准参考系。原点取在两个主天体的公共质心（barycenter），x 轴沿两主天体连线，z 轴沿系统角动量方向（垂直于主天体轨道面），三者构成右手系，整个坐标系以两主天体的公转角速度——即次天体绕主天体的平均运动 $n$——同步旋转（Vallado 2022；Szebehely 1967）。

旋转的代价是运动方程中多出科氏力项与离心力项；换回的好处是：两个主天体在此系中固定在 x 轴上不动，方程不再显含时间而成为自治系统，这是雅可比常数得以作为守恒量存在的几何根源，五个平动点也成为定常平衡点。平动点位置、零速度曲面、周期与拟周期轨道族、不变流形、庞加莱截面等 CR3BP 的一切动力学结构，都在会合系中表达和可视化。

以地月系为例：原点在地月质心（距地心约 4671 km、朝月球方向），x 轴由地球 $P_1$（较大主天体）指向月球 $P_2$，z 轴沿月球公转角动量方向。按 CR3BP 惯例无量纲化（距离单位 = 主天体间距、质量单位 = 两主天体质量之和、时间单位使 $n=1$）后，$P_1$ 位于 $(-\mu,0,0)$、$P_2$ 位于 $(1-\mu,0,0)$，其中质量参数 $\mu = m_2/(m_1+m_2)$；地月系 $\mu \approx 0.01215$。完整运动方程见 [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)。

## 轴向约定：两种并存

x 轴方向在不同文献里**并不统一**，读图、读方程前应先确认该文采用哪一种：

- **主流约定**（Szebehely 1967、Gómez 2001 及多数 CR3BP 文献）：x 轴从较大主天体指向较小主天体。地月系即地球→月球，日地系即太阳→地球。
- **反向约定**（部分文献）：x 轴从小天体指向大天体。例如某些日地系研究取 x 轴由地球指向太阳，并在文中明确声明此约定与标准限制性三体问题相反。

约定不同会反转 $L_1$、$L_2$、$L_3$ 在 x 轴上的相对位置和 halo、Lyapunov 等轨道族的朝向，但物理不变。读一篇陌生论文时，最快的判别法是看该文给出的 $P_1$、$P_2$ 坐标正负号。

## 不同主天体系统的实例

同一套定义适用于不同主天体对，工程中常按系统冠名加以区分：

- **地月会合系**（Earth-Moon rotating/synodic frame）：地月 CR3BP、平动点轨道、地月转移的标准框架，也是本词典多数词条的默认语境。
- **日地会合系**（Sun-Earth rotating frame，又称 syzygy frame）：日地 $L_1$/$L_2$ 任务（如 JWST、SOHO、Aditya-L1）、太阳帆、日地流形拼接的基准。
- **日-地+月会合系**（Sun-Earth-Moon synodic）：以太阳为参考、以地月共同质心为原点的旋转系，用于弱稳定边界（WSB）转移中流形拼接的庞加莱截面。
- **日-B1 旋转系**：x 轴指向 B1 点（近似日地 $L_1$ 方向），用于分析太阳引力对地月系的摄动。

## 原点与坐标形式的变体

- **质心、地心、月心**：标准会合系原点在系统质心。有时为刻画特定问题改取非质心原点——**地心旋转系**（原点固定在地心）能直接揭示双脉冲地月转移的控制变量与转移时间之间的关系；**月心共转系**（原点在月心、x 轴平行于地月连线）用于月面起飞与动力下降的分析。原点偏离质心后，运动方程一般不再具有雅可比积分这类守恒量。
- **极坐标形式**：地心旋转极坐标系以极径 $r$、极角 $\theta$、径向速度 $v_r$、横向速度 $v_\theta$ 描述航天器状态，适合共面地月转移的动力学分析。

## 相关概念

- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)
- [雅可比常数（Jacobi Constant）](/glossary/dynamics/jacobi-integral/)
- [平动点（Libration Point）](/glossary/fundamentals/libration-point/)

## 参考文献

- Vallado, 2022, Fundamentals of Astrodynamics and Applications（Synodic Coordinate Systems 节，地月会合系基本平面与主方向定义）
- Szebehely, 1967, Theory of Orbits: The Restricted Problem of Three Bodies（CR3BP 会合系与无量纲化的经典出处）
- Gómez et al., 2001, Dynamics and Mission Design near Libration Points — vol. II（平动点邻域动力学，x 轴大→小天体约定的采用与说明）
