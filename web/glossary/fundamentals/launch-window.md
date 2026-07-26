---
title: 发射窗口（Launch Window）
description: 详细解析发射窗口的定义、确定方法及影响因素
keywords: 发射窗口, Launch Window, 发射时间, 升交点赤经, 轨道设计
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 发射窗口（Launch Window）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 发射窗口详解 | 术语定义
  description: 详细解析发射窗口的定义及确定方法
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 发射窗口详解 | 术语定义
  description: 详细解析发射窗口的定义及确定方法
  image: /logo.png
permalink: /glossary/fundamentals/launch-window/
---

# 发射窗口（Launch Window）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

发射窗口是满足任务要求的发射时间的集合，包括发射日期和发射时刻的选择。发射窗口由轨道倾角、升交点赤经、发射场位置和目标轨道要求等因素共同确定。

## 核心要素

### 发射场约束

设发射场地心纬度为 $\varphi_I$，地心经度为 $\lambda_I$，方位角为 $A_I$，则轨道倾角满足：

$$i = \arccos(\cos\varphi_I \sin A_I)$$

由此可得：

$$\varphi_I \leq i \leq \pi - \varphi_I$$

发射场离赤道越近，无需轨道机动可获得的轨道倾角范围越大。

### 升交点赤经与发射时刻的关系

$$\Omega = \overline{S}(t_I) + \lambda_I - \arctan\left(\frac{\tan\varphi_I \cos i}{\cos A_I}\right)$$

其中 $\overline{S}(t_I)$ 为发射时刻的格林尼治平恒星时。

### 发射方向与轨道类型

| 方位角范围 | 轨道类型 | 说明 |
| :--- | :--- | :--- |
| $0 < A_I < \pi$ | 顺行轨道 | $0 < i < \pi/2$ |
| $\pi < A_I < 2\pi$ | 逆行轨道 | $\pi/2 < i < \pi$ |
| $A_I = \pi/2$ | 向东发射 | $i = i_{\min} = \varphi_I$ |
| $A_I = 3\pi/2$ | 向西发射 | $i = i_{\max} = \pi - \varphi_I$ |

### 发射窗口的确定

若目标轨道的倾角 $i$ 和升交点赤经 $\Omega$ 已定，则发射时刻 $t_I$ 随之确定；若倾角 $i$ 和入轨时刻 $t_I$ 已定，则可确定升交点赤经 $\Omega$。

## 应用价值

发射窗口的选择是航天任务规划的重要环节。发射窗口受多种因素约束，包括目标轨道参数、发射场地理位置、地面测控覆盖、光照条件、空间环境等。合理选择发射窗口可以降低发射能耗、提高入轨精度、满足任务对光照和覆盖的特殊要求。

## 相关概念

- [发射方位角（Launch Azimuth）](/glossary/fundamentals/launch-azimuth/)
- [入轨条件（Orbit Insertion Conditions）](/glossary/fundamentals/orbit-insertion-conditions/)
- [轨道根数（Orbital Elements）](/glossary/fundamentals/orbital-elements/)
- [受晒因子（Solar Exposure Factor）](/glossary/fundamentals/solar-exposure-factor/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
