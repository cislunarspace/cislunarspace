---
title: 零速度曲面（Zero-Velocity Surface）
description: 详细解析零速度曲面的定义、雅可比常数与可达区域的关系，以及在地月空间轨道设计中的应用
keywords: 零速度曲面, Zero-Velocity Surface, 雅可比常数, 可达区域, CR3BP, 平动点, 地月空间
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 零速度曲面（Zero-Velocity Surface）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 零速度曲面详解 | 雅可比常数与可达区域分析
  description: 详细解析零速度曲面的定义、雅可比常数与可达区域的关系，以及在地月空间轨道设计中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 零速度曲面详解 | 雅可比常数与可达区域分析
  description: 详细解析零速度曲面的定义、雅可比常数与可达区域的关系，以及在地月空间轨道设计中的应用
  image: /logo.png
permalink: /glossary/dynamics/zero-velocity-surface/
---

# 零速度曲面

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

零速度曲面（Zero-Velocity Surface）是圆型限制性三体问题（CR3BP）中的核心几何概念。在旋转坐标系下，雅可比积分可表示为：

$$C = 2U(x, y, z) - (\dot{x}^2 + \dot{y}^2 + \dot{z}^2)$$

令速度为零（$\dot{x} = \dot{y} = \dot{z} = 0$），即可得到零速度曲面方程 $C = 2U(x, y, z)$。该曲面将三维空间划分为可达区域（速度平方为正）和不可达区域（速度平方为负），探测器在给定雅可比常数下无法穿越零速度曲面进入不可达区域。

## 核心要素

### 雅可比常数与曲面形态

零速度曲面的形状完全由雅可比常数 $C$ 决定，随 $C$ 值从小到大变化，曲面呈现截然不同的拓扑结构：

| 雅可比常数范围 | 曲面拓扑结构 | 物理意义 |
|:---|:---|:---|
| $C < C_1$ | 两个分离的封闭曲面 | 两个主天体附近各存在一个封闭的不可达区域 |
| $C = C_1$ | 曲面在 $L_1$ 点处接触 | $L_1$ 点处可达与不可达区域边界相连 |
| $C_1 < C < C_2$ | 形成连接两个主天体的通道 | 探测器可在两主天体之间转移 |
| $C = C_2$ | 曲面在 $L_2$ 点处接触 | $L_2$ 点成为第二个通道开口 |
| $C_2 < C < C_3$ | $L_2$ 侧通道打开 | 探测器可从内部空间经 $L_2$ 进入外部空间 |
| $C = C_3$ | 曲面在 $L_3$ 点处接触 | $L_3$ 侧通道打开 |
| $C > C_5$ | 曲面收缩为三个独立区域 | 三个平动点 $L_3, L_4, L_5$ 附近各自出现可达区域 |

### 通道与转移窗口

零速度曲面在平动点处的开口为探测器提供了转移通道：

- **$L_1$ 通道**：连接两主天体附近区域，是地月转移和日地转移的关键路径
- **$L_2$ 通道**：连接内部空间与外部空间，是月球背面通信中继和深空探测的出发通道
- **$L_3$ 通道**：连接日地系统与太阳系外部空间

### 在轨道设计中的应用

零速度曲面为轨道设计提供了直观的几何约束分析工具：

1. **转移可行性判断**：根据初始和目标状态的雅可比常数，判断转移是否在能量上可行
2. **禁飞区识别**：不可达区域自然构成了探测器的禁飞区
3. **能量预算估算**：通过比较不同区域的雅可比常数，估算转移所需的最小能量

## 相关概念

- [雅可比积分（Jacobi Integral）](/glossary/dynamics/jacobi-integral/)
- [圆型限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)
- [平动点（Libration Point）](/glossary/dynamics/libration-point/)
- [Halo 轨道（Halo Orbit）](/glossary/orbits/halo-orbit/)

## 参考文献

- Szebehely V. Theory of Orbits: The Restricted Problem of Three Bodies[M]. Academic Press, 1967.
- Koon W S, Lo M W, Marsden J E, et al. Dynamical Systems, the Three-Body Problem and Space Mission Design[M]. 2011.
- 刘林, 胡松杰, 王歆. 航天器轨道理论: 地月空间探测轨道设计[M]. 国防工业出版社, 2006.

## 应用价值

零速度曲面为地月空间轨道设计提供了直观的几何约束分析工具。通过雅可比常数与曲面形态的关系，设计者能够快速判断转移轨道的能量可行性，识别可达区域与禁飞区，并估算转移所需的最小能量预算。零速度曲面在平动点处的开口还揭示了地月转移和深空探测的关键通道，为地月空间任务的轨道方案选择和能量优化提供几何层面的决策支持。
