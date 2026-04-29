---
title: 轨道方程（Orbital Equation）
description: 详细解析轨道方程的推导、圆锥曲线形式、偏心率与轨道形状的关系及拱点概念
keywords: 轨道方程, Orbital Equation, 圆锥曲线, 偏心率, 拱点, 近地点, 远地点, 半通径
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 轨道方程（Orbital Equation）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 轨道方程详解 | 术语定义
  description: 详细解析轨道方程的圆锥曲线形式及偏心率与轨道形状的关系
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 轨道方程详解 | 术语定义
  description: 详细解析轨道方程的圆锥曲线形式及偏心率与轨道形状的关系
  image: /logo.png
permalink: /glossary/fundamentals/orbital-equation/
---

# 轨道方程（Orbital Equation）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

轨道方程是描述二体运动中飞行器地心距 $r$ 与真近点角 $f$ 之间关系的极坐标方程，其标准形式为：

$$r = \frac{p}{1 + e\cos f} = \frac{a(1-e^2)}{1 + e\cos f}$$

其中 $p = h^2/\mu_E$ 为半通径，$e$ 为偏心率。该方程为圆锥曲线方程，是开普勒第一定律的数学描述，表明二体运动轨道为以中心天体质心为焦点的圆锥曲线。

## 核心要素

### 偏心率与轨道形状

| 偏心率 | 轨道类型 | 特点 |
|:---|:---|:---|
| $e = 0$ | 圆轨道 | $r = a$，地心距恒定 |
| $0 < e < 1$ | 椭圆轨道 | 周期性轨道，有近地点和远地点 |
| $e = 1$ | 抛物线轨道 | 逃逸轨道，远地点在无穷远 |
| $e > 1$ | 双曲线轨道 | 非周期性逃逸轨道 |

### 拱点与拱线

圆锥曲线长轴的两个顶点称为拱点。对于绕地球的轨道：
- 近拱点（近地点）：$f = 0°$ 时，$r_{\min} = a(1-e)$
- 远拱点（远地点）：$f = 180°$ 时，$r_{\max} = a(1+e)$

拱线（长轴）与偏心率矢量 $\boldsymbol{e}$ 重合，决定了轨道在轨道面内的指向。

### 真近点角与纬度幅角

- 真近点角 $f$：飞行器位置与近地点的地心角
- 纬度幅角 $u$：飞行器位置与升交点的地心角
- 两者关系：$f = u - \omega$，其中 $\omega$ 为近地点纬度幅角

## 应用价值

轨道方程是轨道力学的核心公式之一，由偏心率矢量 $\boldsymbol{e}$ 的积分推导而来。它建立了轨道形状（$e$）、尺寸（$p$ 或 $a$）与飞行器瞬时位置（$f$）之间的映射关系。通过轨道方程可计算任意真近点角对应的地心距，是轨道预报、轨道设计和弹道计算的基础工具。

## 相关概念

- [二体问题（Two-Body Problem）](/glossary/fundamentals/two-body-problem/)
- [比动量矩（Specific Angular Momentum）](/glossary/fundamentals/specific-angular-momentum/)
- [活力公式（Vis-Viva Equation）](/glossary/fundamentals/vis-viva-equation/)
- [真近点角（True Anomaly）](/glossary/fundamentals/true-anomaly/)
- [轨道根数（Orbital Elements）](/glossary/fundamentals/orbital-elements/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
