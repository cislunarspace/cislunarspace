---
title: 两节点模型（Two-node Model）
description: 详细解析两节点热力学模型的建立方法、简化假设、数学表达及其在平流层飞艇初步分析中的应用
keywords: 两节点模型, Two-node Model, 热力学模型, 简化模型, 平流层飞艇, 蒙皮, 氦气
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 两节点模型（Two-node Model）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 两节点模型（Two-node Model）详解 | 术语定义
  description: 详细解析两节点热力学模型的建立方法、简化假设、数学表达及其在平流层飞艇初步分析中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 两节点模型（Two-node Model）详解 | 术语定义
  description: 详细解析两节点热力学模型的建立方法、简化假设、数学表达及其在平流层飞艇初步分析中的应用
  image: /logo.png
permalink: /glossary/dynamics/two-node-model/
---

# 两节点模型（Two-node Model）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

两节点模型是将平流层飞艇热力学系统简化为两个集中参数节点的分析方法：蒙皮节点代表外部结构，氦气节点代表内部气体。该模型牺牲精度换取计算效率，适用于设计初期的快速迭代和控制律初步设计。

## 模型结构

### 两个节点

| 节点 | 代表组件 | 热容 | 温度 |
|:---|:---|:---|:---|
| 节点1 | 蒙皮（Envelope） | $C_{skin} = m_{skin}c_{skin}$ | $T_{skin}$ |
| 节点2 | 氦气（Helium） | $C_{He} = m_{He}c_{He}$ | $T_{He}$ |

### 热容计算

$$C_{skin} = m_{skin} c_{skin}$$

$$C_{He} = m_{He} c_{He} = \rho_{He} V_{He} c_{He}$$

典型值：

| 参数 | 蒙皮 | 氦气 |
|:---|:---|:---|
| 比热容 | ~1000 J/(kg·K) | ~5193 J/(kg·K) |
| 密度 | ~50 kg/m³ | ~0.1-0.2 kg/m³（@20km） |

## 数学方程

### 蒙皮能量平衡

$$C_{skin}\frac{dT_{skin}}{dt} = Q_{ext} - h_{int}A_{int}(T_{skin} - T_{He}) - h_{ext}A_{ext}(T_{skin} - T_{air})$$

其中 $h_{int}$ 和 $h_{ext}$ 分别为内外对流换热系数。

### 氦气能量平衡

$$C_{He}\frac{dT_{He}}{dt} = h_{int}A_{int}(T_{skin} - T_{He}) + Q_{int}$$

### 外界热流 $Q_{ext}$

$$Q_{ext} = Q_{solar} + Q_{albedo} + Q_{IR,earth} - Q_{IR,sky}$$

### 等效电路类比

```
     Q_solar           Q_albedo
        |                 |
    ----|----> 蒙皮  ----|----
        |      |           |
        |      |<--h_int-->|
        |      |           |
   Q_IR_earth   氦气    Q_IR_sky
        |                 |
    ----|----> 蒙皮  ----|----
        |                 |
     Q_conv            Q_conv
        |                 |
      T_air            T_air
```

## 模型参数

| 参数 | 符号 | 典型值（@20km） |
|:---|:---|:---|
| 蒙皮面积 | $A_{skin}$ | ~5000 m² |
| 投影面积 | $A_{proj}$ | ~300 m² |
| 内换热系数 | $h_{int}$ | 5-20 W/(m²·K) |
| 外换热系数 | $h_{ext}$ | 2-10 W/(m²·K) |
| 太阳辐射强度 | $I_{sun}$ | ~1360 W/m² |
| 大气温度 | $T_{air}$ | ~220 K |

## 应用场景

| 适用 | 不适用 |
|:---|:---|
| 设计初期快速估算 | 详细性能分析 |
| 控制律初步设计 | 极端工况分析 |
| 参数敏感性分析 | 局部热点预测 |
| 稳态平衡点计算 | 瞬态响应精细分析 |

## 相关概念

- [热力学模型（Thermodynamic Model）](/glossary/dynamics/thermodynamic-model/)

## 参考文献

- Jones J A. Simplified Thermal Model for High Altitude Airship Analysis[R]. MIT, 2023.
- 王海峰. 平流层飞艇热力学分析[J]. 航空动力学报, 2025.