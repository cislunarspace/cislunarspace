---
title: 岁差（Precession）
description: 详细解析岁差的定义、日月岁差与行星岁差的成因、对天球坐标系的影响及在长期轨道传播中的作用
keywords: 岁差, Precession, 日月岁差, 行星岁差, 总岁差, 春分点, 天球坐标系, 轨道传播
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 岁差（Precession）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 岁差（Precession）详解 | 术语定义
  description: 详细解析岁差的定义、成因、对天球坐标系的影响及在长期轨道传播中的作用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 岁差（Precession）详解 | 术语定义
  description: 详细解析岁差的定义、成因、对天球坐标系的影响及在长期轨道传播中的作用
  image: /logo.png
permalink: /glossary/fundamentals/precession/
---

# 岁差（Precession）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

岁差（Precession）是地球自转轴在空间中缓慢进动的现象，导致春分点沿黄道缓慢西移。岁差使得天球坐标系（特别是赤道坐标系）的基准方向随时间变化，是建立精确天球参考框架必须考虑的长期效应。

## 核心要素

### 日月岁差

太阳和月球对地球赤道隆起部分的引力作用，使地球自转轴绕黄极做圆锥运动，周期约 25,800 年。日月岁差导致春分点沿黄道每年西移约 50.3"。

### 行星岁差

太阳系其他行星对地球公转轨道面的引力摄动，使黄道面本身发生缓慢变化。行星岁差导致春分点沿赤道每年东移约 12.5"。

### 总岁差

总岁差是日月岁差和行星岁差的合成效果。总岁差导致春分点沿赤道每年西移约 50.29"（约 26,000 年完成一周）。总岁差可以用三个分量描述：

- **黄经总岁差 $p$**：春分点沿黄道的位移
- **交角章动 $\Delta\varepsilon$**：黄赤交角的变化
- **赤经岁差和赤纬岁差**：天体赤道坐标的变化

### 对天球坐标系的影响

岁差导致以春分点为基准的赤道坐标系（赤经、赤纬）随时间变化。因此，天文星表和轨道根数都必须注明对应的历元（如 J2000.0）。不同历元的坐标之间需要进行岁差改正才能相互比较。

岁差改正的基本公式：

$$
\begin{pmatrix} \cos\delta\cos\alpha' \\ \cos\delta\sin\alpha' \\ \sin\delta' \end{pmatrix} = \mathbf{P}(t, t_0) \begin{pmatrix} \cos\delta\cos\alpha \\ \cos\delta\sin\alpha \\ \sin\delta \end{pmatrix}
$$

其中 $\mathbf{P}(t, t_0)$ 为岁差旋转矩阵。

## 应用价值

岁差是航天器轨道长期传播和天文导航的基本修正项。对于地月空间任务，岁差改正确保了不同时刻观测数据的一致性。高精度轨道确定和深空探测器导航必须考虑岁差影响。

## 相关概念

- [天球（Celestial Sphere）](/glossary/fundamentals/celestial-sphere/)
- [天球坐标系（Celestial Coordinate System）](/glossary/fundamentals/celestial-coordinate-system/)
- [章动（Nutation）](/glossary/fundamentals/nutation/)
- [地球椭球体（Earth Ellipsoid）](/glossary/fundamentals/earth-ellipsoid/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 任萱, 肖峰. 人造地球卫星轨道力学[M]. 国防科技大学出版社.
