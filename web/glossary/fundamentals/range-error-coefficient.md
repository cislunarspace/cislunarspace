---
title: 射程误差系数（Range Error Coefficient）
description: 详细解析射程误差系数的定义、分类、表达式及在弹道导弹精度分析中的应用
keywords: 射程误差系数, Range Error Coefficient, 纵向误差, 侧向误差, 飞行时间误差, 落点偏差
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 射程误差系数（Range Error Coefficient）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 射程误差系数详解 | 术语定义
  description: 详细解析射程误差系数的定义及在精度分析中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 射程误差系数详解 | 术语定义
  description: 详细解析射程误差系数的定义及在精度分析中的应用
  image: /logo.png
permalink: /glossary/fundamentals/range-error-coefficient/
---

# 射程误差系数（Range Error Coefficient）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

射程误差系数是被动段射程角 $\beta_{kc}$ 对主动段终点参数 $v_k$、$\Theta_k$、$r_k$ 的偏导数，描述单位主动段终点参数偏差引起的被动段射程偏差。一般情况下，忽略高阶项，被动段射程偏差可表示为：

$$\Delta\beta_{kc} = \frac{\partial\beta_{kc}}{\partial v_k}\Delta v_k + \frac{\partial\beta_{kc}}{\partial\Theta_k}\Delta\Theta_k + \frac{\partial\beta_{kc}}{\partial r_k}\Delta r_k$$

## 核心要素

### 误差系数类型

| 类型 | 符号 | 含义 |
|:---|:---|:---|
| 纵向误差系数 | $\partial\beta_{kc}/\partial v_k$ | 速度大小偏差引起的射程偏差 |
| 纵向误差系数 | $\partial\beta_{kc}/\partial\Theta_k$ | 速度倾角偏差引起的射程偏差 |
| 纵向误差系数 | $\partial\beta_{kc}/\partial r_k$ | 地心距偏差引起的射程偏差 |
| 侧向误差系数 | $\partial\zeta_c/\partial\alpha_k$ | 方位角偏差引起的侧向偏差 |
| 侧向误差系数 | $\partial\zeta_c/\partial\zeta_k$ | 位置侧向偏差引起的侧向偏差 |
| 飞行时间误差系数 | $\partial T_{kc}/\partial v_k$ | 速度偏差引起的时间偏差 |

### 一阶纵向误差系数

自由段射程误差系数的显式表达式：

$$\frac{\partial\beta_{ke}}{\partial v_k} = \frac{4}{v_k\gamma_k} \cdot \frac{1+\tan^2\Theta_k}{\tan\Theta_k} \cdot \sin^2\frac{\beta_{ke}}{2}$$

$$\frac{\partial\beta_{ke}}{\partial\Theta_k} = \frac{1}{\gamma_k} \cdot \frac{(1+\tan^2\Theta_k)(\gamma_k - 2\tan\frac{\beta_{ke}}{2}\tan\Theta_k)}{\tan\Theta_k} \cdot \sin\beta_{ke}$$

### 侧向误差系数

侧向偏差由速度方位角误差和位置侧向偏差共同引起：

$$\Delta\zeta_c = \frac{\partial\zeta_c}{\partial\alpha_k}\Delta\alpha_k + \frac{\partial\zeta_c}{\partial\zeta_k}\Delta\zeta_k$$

其中：

$$\frac{\partial\zeta_c}{\partial\alpha_k} = \sin\beta_{kc}, \quad \frac{\partial\zeta_c}{\partial\zeta_k} = \cos\beta_{kc} - \tan\Theta_k\sin\beta_{kc}$$

### 误差系数的特性

| 特性 | 说明 |
|:---|:---|
| 最佳速度倾角处 | $\partial\beta_{ke}/\partial\Theta_k = 0$，速度倾角偏差不引起射程偏差 |
| 速度大小误差系数 | $\gamma_k$ 越大，$\partial L_{ke}/\partial v_k$ 越大 |
| 二阶误差 | 远程导弹的二阶误差系数不可忽略 |

### 直角坐标描述

误差系数可在直角坐标系（发射惯性系）中表示，通过坐标变换矩阵将极坐标误差系数转换为直角坐标误差系数，便于与制导系统工具误差对接。

## 应用价值

射程误差系数是弹道导弹精度分析和制导系统设计的核心工具。通过误差系数，可以定量评估主动段终点参数偏差对落点精度的影响，为制导方法设计、工具误差分配和射击精度评估提供理论依据。选用最佳速度倾角可以消除速度倾角误差系数，提高射击精度。

## 相关概念

- [命中方程（Hit Equation）](/glossary/fundamentals/hit-equation/)
- [最佳速度倾角（Optimal Velocity Inclination）](/glossary/fundamentals/optimal-velocity-inclination/)
- [绝对射程（Absolute Range）](/glossary/fundamentals/absolute-range/)
- [能量参数（Energy Parameter）](/glossary/fundamentals/energy-parameter/)
- [自由段弹道（Free-Flight Trajectory）](/glossary/fundamentals/free-flight-trajectory/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
