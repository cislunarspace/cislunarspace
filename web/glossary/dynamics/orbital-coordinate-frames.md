---
title: 航天器局部轨道坐标系（RSW / LVLH / Hill / Euler-Hill Frame）
description: 以航天器为原点、随其轨道运动而运动的局部直角坐标系：RSW（径向-横向-法向，又称 RTN/LVLH）、NTW、Hill/Euler-Hill 系及其与 Clohessy-Wiltshire 方程的关系，覆盖退化情形、编队相对运动与平动点邻域坐标系的辨析。
keywords: RSW, RTN, LVLH, NTW, Hill frame, Euler-Hill frame, 局部轨道坐标系, 相对运动, Clohessy-Wiltshire, 编队飞行, radial-transverse-normal
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 航天器局部轨道坐标系（RSW/LVLH/Hill）
  desc: RSW、NTW 与 Hill/Euler-Hill 局部轨道系的定义与辨析。
  image: /logo.png
og:
  title: 航天器局部轨道坐标系详解 | 术语定义
  description: 以航天器为原点的局部直角坐标系：RSW（RTN/LVLH）、NTW、Hill/Euler-Hill 系及其与 Clohessy-Wiltshire 方程的关系。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 航天器局部轨道坐标系详解 | 术语定义
  description: RSW、NTW 与 Hill/Euler-Hill 局部轨道系的定义与辨析。
  image: /logo.png
permalink: /glossary/dynamics/orbital-coordinate-frames/
---

# 航天器局部轨道坐标系（RSW / LVLH / Hill / Euler-Hill Frame）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

局部轨道坐标系是原点取在航天器上、随其轨道运动而运动的直角坐标系，用于把相对运动、推力方向和测量误差分解成直观的径向/横向/法向分量。不同名称（RSW、RTN、LVLH、Hill、Euler-Hill）指同一族框架，但轴定义存在约定差异，读方程前必须确认（Vallado 2022）。

## RSW（RTN / LVLH）

RSW（radial-transverse-normal）系的三个轴（Vallado 2022）：

- **R 轴**：沿从中心天体指向航天器的位置矢量方向（径向）；

- **S 轴**：在轨道面内垂直于 R、指向航天器运动方向（横向），注意 S 只在圆轨道（或椭圆轨道的拱点）才与速度矢量重合；

- **W 轴**：沿轨道角动量方向（法向）。

RSW 又称高斯坐标系，别名 RTN（radial, transverse, normal）或 LVLH（local vertical, local horizontal）。推力方向的球面控制量常在 RSW 中映射为笛卡尔分量：基矢量由航天器相对中心天体的位置与速度实时计算；当位置与速度共线时 R 与 S 退化（径向与横向不再正交可辨），须切换为笛卡尔控制变量（Aziz 等 2019）。注意各组织对 LVLH 的轴定义并不统一：有的把主轴取为垂直于位置矢量，务必先看该文的自定义（Vallado 2022）。

## NTW 与 PQW

- **NTW**（radial-tangent-normal）：T 轴始终沿速度矢量（切向），N 轴在轨道面内垂直于 T，W 沿角动量方向。阻力分析用 NTW（阻力总是沿速度反方向），它的切向位移与 RSW 的横向位移含义不同（Vallado 2022）。

- **PQW**（perifocal）：原点在天体中心、基本平面为轨道面、P 轴指向近拱点。用于二体轨道处理。

- **EQW**（equinoctial）：以轨道面为基本平面、E 轴由春分点经升交点旋转确定，规避圆/赤道轨道奇点（Vallado 2022）。

## Hill / Euler-Hill 坐标系与 CW 方程

Hill 坐标系（Euler-Hill 系）是以参考航天器（target）为原点的局部系：x 沿径向（远离中心天体为正），y 沿航迹方向，z 垂直轨道面。当两航天器距离远小于轨道半径、参考轨道近圆时，相对运动可用 Clohessy-Wiltshire（CW）方程线性化描述，即常说的 Hill 方程（Clohessy 和 Wiltshire 1960；Hill 1878）：

$\ddot{x} - 3n^2 x - 2n \dot{y} = f_x$，$\ddot{y} + 2n \dot{x} = f_y$，$\ddot{z} + n^2 z = f_z$

其中 $n$ 为参考轨道平均运动角速度。CW 方程是近距交会对接、编队相对运动分析的基础。注意两个局限：一是线性化假设（距离远小于轨道半径）；二是把参考轨道当圆轨道，故 S/y 轴与速度重合只在圆轨道成立。对 Halo 等非开普勒轨道，经典 Hill 系不再适用，需改用基于平动点的旋转坐标系（见[会合坐标系](/glossary/fundamentals/synodic-frame/)）。

## 相关变体与辨析

- **惯性系固定编队**（formation fixed relative to inertial frame）：编队主从航天器相对位置与方位在惯性系中保持恒定，与随轨道转动的 Hill 系描述相反，用于分析平动点附近的长期演化（Marchand 和 Howell 2005；Héritier 和 Howell 2014）。

- **惯性系相对运动方程**：直接在惯性系写相对运动方程，能更直接反映多体环境中的真实动力学，避免旋转系下离心/科氏项带来的混淆。

- **轨道坐标系（推力方向）**：某些论文以探测器质心为原点、一轴从中心天体指向探测器、一轴指向运动方向，用面内/面外两个角描述推力方向（周净扬和周荻 2007），本质是 RSW 的变体。

- **主轴坐标系**：以平动点（或主星）为中心、坐标轴与邻域椭圆运动主轴对齐，由会合系绕特定轴旋转得到，使面内运动解耦为两个独立方向，用于简化平动点附近的线性方程（Catlin 和 McLaughlin 2007）。

## 应用要点

局部轨道系是相对导航、编队保持、交会对接、推力建模与摄动方程（高斯型摄动运动方程把摄动力分解为 R/S/W 分量）的标准工具（Vallado 2022）。选系时要明确：RSW 适合描述沿轨道方向的误差与机动，NTW 适合沿速度方向的推力/阻力，Hill/Euler-Hill 适合线性化的近距相对运动。

## 相关概念

- [会合坐标系（Synodic Frame / Rotating Frame）](/glossary/fundamentals/synodic-frame/)

- [惯性参考系（Inertial Reference Frames）](/glossary/fundamentals/inertial-reference-frames/)

- [相对运动（Relative Motion）](/glossary/dynamics/relative-motion/)

- [惯性坐标系固定编队（Formation Fixed Relative to Inertial Frame）](/glossary/dynamics/spacecraft-formation-flying/)

## 参考文献

- Vallado, 2022, Fundamentals of Astrodynamics and Applications（RSW/NTW/EQW/PQW 定义与变换，Hill 方程）

- Clohessy 和 Wiltshire, 1960, Terminal guidance system for satellite rendezvous

- Hill, 1878, Researches in the lunar theory（Hill 方程出处）

- Aziz 等, 2019, JGCD（RSW 退化与 CRTBP 小推力优化）

- Marchand 和 Howell, 2005（惯性系固定编队）

- Héritier 和 Howell, 2014（惯性系相对运动方程）

- 周净扬 和周荻, 2007（月球探测器软着陆推力方向建模）

- Catlin 和 McLaughlin, 2007（平动点主轴坐标系）
