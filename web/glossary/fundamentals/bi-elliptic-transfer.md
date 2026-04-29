---
title: 双椭圆转移（Bi-Elliptic Transfer）
description: 详细解析双椭圆转移的原理、三冲量方案及最优条件
keywords: 双椭圆转移, Bi-Elliptic Transfer, 三冲量转移, 轨道转移, 无限双椭圆转移
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 双椭圆转移（Bi-Elliptic Transfer）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 双椭圆转移详解 | 术语定义
  description: 详细解析双椭圆转移的原理及最优条件
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 双椭圆转移详解 | 术语定义
  description: 详细解析双椭圆转移的原理及最优条件
  image: /logo.png
permalink: /glossary/fundamentals/bi-elliptic-transfer/
---

# 双椭圆转移（Bi-Elliptic Transfer）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

双椭圆转移是一种三冲量轨道转移方案，飞行器经由两条椭圆转移轨道从初始圆轨道进入最终圆轨道。在初始轨道施加第一次冲量进入第一条椭圆轨道，在其远拱点施加第二次冲量转入第二条椭圆轨道，在第二条椭圆轨道近拱点施加第三次冲量进入最终轨道。

## 核心要素

### 转移过程

1. 在初始圆轨道 $C_1$ 的 $P_1$ 点施加切向冲量 $\Delta v_1$，进入椭圆轨道 $E_1$
2. 在 $E_1$ 远拱点 $A$ 施加第二次切向冲量 $\Delta v_2$，进入椭圆轨道 $E_2$
3. 在 $E_2$ 近拱点 $P_2$ 施加反切向冲量 $\Delta v_3$，进入最终圆轨道 $C_2$

### 三冲量计算

设 $r_a$ 为椭圆转移轨道远拱点地心距：

$$\begin{cases} \Delta v_1 = \sqrt{\frac{\mu}{r_1}}\left(\sqrt{\frac{2r_a}{r_1 + r_a}} - 1\right) \\ \Delta v_2 = \sqrt{\frac{\mu}{r_a}}\left(\sqrt{\frac{2r_2}{r_2 + r_a}} - \sqrt{\frac{2r_1}{r_1 + r_a}}\right) \\ \Delta v_3 = \sqrt{\frac{\mu}{r_2}}\left(\sqrt{\frac{2r_a}{r_2 + r_a}} - 1\right) \end{cases}$$

### 无限双椭圆转移

当 $r_a \to \infty$ 时，转移轨道趋近抛物线，$\Delta v_2 \to 0$，总特征速度：

$$\Delta v = (\sqrt{2} - 1)\left(\sqrt{\frac{\mu}{r_1}} + \sqrt{\frac{\mu}{r_2}}\right)$$

### 最优条件

当 $r_2/r_1 > 11.94$ 时，无限双椭圆转移比霍曼转移更省能量；当 $r_2/r_1 < 11.94$ 时，霍曼转移更省。一般双椭圆转移的远拱点地心距 $r_a$ 需经优化设计确定。

## 应用价值

双椭圆转移在大幅半径比的轨道转移中具有能量优势，虽然转移时间远长于霍曼转移，但对于对时间不敏感的大范围轨道转移任务（如从低轨到高轨的长期部署任务），可有效节省燃料。

## 相关概念

- [霍曼转移（Hohmann Transfer）](/glossary/fundamentals/hohmann-transfer/)
- [特征速度（Characteristic Velocity）](/glossary/fundamentals/characteristic-velocity/)
- [调相轨道（Phasing Orbit）](/glossary/fundamentals/phasing-orbit/)
- [轨道机动（Orbital Maneuver）](/glossary/fundamentals/orbital-maneuver/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
