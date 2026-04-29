---
title: 霍曼转移（Hohmann Transfer）
description: 详细解析霍曼转移的原理、速度冲量计算及霍曼交会
keywords: 霍曼转移, Hohmann Transfer, 轨道转移, 速度冲量, 霍曼交会
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 霍曼转移（Hohmann Transfer）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 霍曼转移详解 | 术语定义
  description: 详细解析霍曼转移的原理及速度冲量计算
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 霍曼转移详解 | 术语定义
  description: 详细解析霍曼转移的原理及速度冲量计算
  image: /logo.png
permalink: /glossary/fundamentals/hohmann-transfer/
---

# 霍曼转移（Hohmann Transfer）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

霍曼转移是由德国工程师 Hohmann 提出的两冲量最省能量共面圆轨道转移方案。转移轨道为近地点与初始轨道相切、远地点与最终轨道相切的椭圆轨道，飞行器在切点处施加两次沿飞行方向的速度冲量完成转移。

## 核心要素

### 转移过程

飞行器在初始轨道近地点 $A$ 施加沿飞行方向的冲量 $\Delta v_1$，进入转移椭圆轨道；运行至远地点 $B$ 时施加第二次冲量 $\Delta v_2$，进入最终圆轨道。

### 速度冲量计算

转移轨道半长轴：

$$a_E = \frac{r_1 + r_2}{2}$$

两次速度冲量：

$$\begin{cases} \Delta v_1 = v_{c1}\left(\sqrt{\frac{2r_2}{r_1 + r_2}} - 1\right) \\ \Delta v_2 = v_{c2}\left(1 - \sqrt{\frac{2r_1}{r_1 + r_2}}\right) \end{cases}$$

其中 $v_{c1} = \sqrt{\mu/r_1}$，$v_{c2} = \sqrt{\mu/r_2}$。

### 转移时间

$$T = \frac{\pi}{\sqrt{\mu}} \left(\frac{r_1 + r_2}{2}\right)^{3/2}$$

### 霍曼交会

追踪飞行器在远地点与目标飞行器交会时，追踪飞行器落后目标飞行器的圆心角：

$$\theta_H = \pi\left[1 - \left(\frac{r_1 + r_2}{2r_2}\right)^{3/2}\right]$$

若初始相位角不满足条件，需在初始轨道等待消除偏差。

## 应用价值

霍曼转移是最经典的轨道转移方案，在共面圆轨道转移中能量最省（当 $r_2/r_1 < 11.94$ 时）。广泛应用于地球同步卫星入轨、空间站轨道转移、行星际探测的初步轨道设计等任务。

## 相关概念

- [双椭圆转移（Bi-Elliptic Transfer）](/glossary/fundamentals/bi-elliptic-transfer/)
- [特征速度（Characteristic Velocity）](/glossary/fundamentals/characteristic-velocity/)
- [调相轨道（Phasing Orbit）](/glossary/fundamentals/phasing-orbit/)
- [轨道机动（Orbital Maneuver）](/glossary/fundamentals/orbital-maneuver/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
