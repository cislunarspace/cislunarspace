---
title: 拉格朗日型摄动方程（Lagrangian Perturbation Equations）
description: 详细解析拉格朗日型摄动方程的推导、对称性特点及在保守摄动力分析中的应用
keywords: 拉格朗日型摄动方程, Lagrangian Perturbation Equations, 摄动势函数, 对称性, 保守力
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 拉格朗日型摄动方程（Lagrangian Perturbation Equations）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 拉格朗日型摄动方程详解 | 术语定义
  description: 详细解析拉格朗日型摄动方程的推导及对称性特点
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 拉格朗日型摄动方程详解 | 术语定义
  description: 详细解析拉格朗日型摄动方程的推导及对称性特点
  image: /logo.png
permalink: /glossary/fundamentals/lagrangian-perturbation-equations/
---

# 拉格朗日型摄动方程（Lagrangian Perturbation Equations）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

拉格朗日型摄动方程是以轨道根数为变量的受摄运动方程，由拉格朗日在研究行星摄动运动时首先建立。该方程将每个轨道根数的变化率表示为6个轨道根数和摄动势函数对每个轨道根数的偏导数的函数，只适用于保守摄动力（如地球非球形引力、日月引力）。

## 核心要素

### 方程形式

$$\left\{\begin{array}{l} \dot{a} = \frac{2}{na}\frac{\partial R}{\partial M} \\ \dot{e} = \frac{1-e^2}{na^2e}\frac{\partial R}{\partial M} - \frac{\sqrt{1-e^2}}{na^2e}\frac{\partial R}{\partial\omega} \\ \dot{i} = \frac{1}{na^2\sqrt{1-e^2}\sin i}(\cos i\frac{\partial R}{\partial\omega} - \frac{\partial R}{\partial\Omega}) \\ \dot{\Omega} = \frac{1}{na^2\sqrt{1-e^2}\sin i}\frac{\partial R}{\partial i} \\ \dot{\omega} = \frac{\sqrt{1-e^2}}{na^2e}\frac{\partial R}{\partial e} - \cos i\frac{d\Omega}{dt} \\ \dot{M} = n - \frac{1-e^2}{na^2e}\frac{\partial R}{\partial e} - \frac{2}{na}\frac{\partial R}{\partial a} \end{array}\right.$$

### 对称性特点

| 轨道根数组 | 变化率依赖的偏导数 |
| :--- | :--- |
| 前三个：$\dot{a}$、$\dot{e}$、$\dot{i}$ | 仅与 $\partial R/\partial\Omega$、$\partial R/\partial\omega$、$\partial R/\partial M$ 有关 |
| 后三个：$\dot{\Omega}$、$\dot{\omega}$、$\dot{M}$ | 仅与 $\partial R/\partial a$、$\partial R/\partial e$、$\partial R/\partial i$ 有关 |

任一组轨道根数的变化率仅与势函数关于另一组轨道根数的偏导数有关，这一特性称为"对称性"。

### 与高斯型方程的比较

| 特性 | 高斯型 | 拉格朗日型 |
| :--- | :--- | :--- |
| 适用摄动力 | 任意（保守+非保守） | 仅保守力 |
| 输入量 | 摄动加速度三分量 | 摄动势函数偏导数 |
| 物理揭示 | 直接反映力的作用 | 揭示势函数与轨道变化的关系 |
| 主要用途 | 大气阻力、推力分析 | 地球非球形、日月引力分析 |

### 推导思路

从高斯型方程出发，利用 $\partial R/\partial\sigma$ 与摄动力分量 $f_r$、$f_u$、$f_h$ 之间的映射关系，通过逆变换推导得到。关键步骤是将摄动势函数对轨道根数的偏导数表示为摄动力分量的函数。

## 应用价值

拉格朗日型摄动方程是分析保守摄动力（特别是地球非球形引力）对轨道影响的标准工具。通过将地球扁率摄动函数代入方程，可以推导出 $J_2$ 长期项对各轨道根数的影响规律，为太阳同步轨道、冻结轨道等特殊轨道的设计提供理论基础。

## 相关概念

- [参数变分法（Variation of Parameters）](/glossary/fundamentals/variation-of-parameters/)
- [高斯型摄动方程（Gaussian Perturbation Equations）](/glossary/fundamentals/gaussian-perturbation-equations/)
- [地球扁率摄动（Earth Oblateness Perturbation）](/glossary/fundamentals/earth-oblateness-perturbation/)
- [轨道根数（Orbital Elements）](/glossary/fundamentals/orbital-elements/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 刘林. 航天器轨道理论[M]. 国防工业出版社.
