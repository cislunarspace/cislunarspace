---
title: 发射方位角（Launch Azimuth）
description: 详细解析发射方位角的定义、确定方法及在弹道设计中的作用
keywords: 发射方位角, Launch Azimuth, 瞄准参数, 弹道设计, 轨道倾角
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 发射方位角（Launch Azimuth）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 发射方位角详解 | 术语定义
  description: 详细解析发射方位角的定义及确定方法
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 发射方位角详解 | 术语定义
  description: 详细解析发射方位角的定义及确定方法
  image: /logo.png
permalink: /glossary/fundamentals/launch-azimuth/
---

# 发射方位角（Launch Azimuth）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

发射方位角 $A_0$ 是火箭发射方向在水平面内的投影与正北方向之间的夹角，是主动段轨迹设计的首要控制变量，也称为瞄准参数。发射方位角决定了火箭飞行的射面方向，直接影响入轨轨道的轨道倾角。

## 核心要素

### 与轨道倾角的关系

发射方位角与入轨轨道倾角 $i$ 之间存在约束关系。对于从纬度 $B_0$ 处发射的火箭：

$$\sin i = \cos B_0 \sin A_0$$

因此，给定目标轨道倾角后，发射方位角不能任意选择，需要满足上述几何约束。

### 在轨迹设计中的地位

| 设计要素 | 说明 |
| :--- | :--- |
| 首要变量 | 在所有设计变量中最先确定 |
| 决定射面 | 确定火箭飞行的平面方向 |
| 影响落点 | 直接影响弹头或载荷的落点横向偏差 |
| 迭代设计 | 通过牛顿迭代法与飞行程序角联合求解 |

### 设计方法

发射方位角通过迭代设计确定：

1. 给定初始发射方位角估计值
2. 结合飞行程序角积分动力学方程
3. 计算终端落点偏差或入轨参数偏差
4. 通过牛顿迭代法修正发射方位角
5. 直至满足终端约束

对于弹道导弹，发射方位角由发射点和目标点的地理坐标确定；对于运载火箭，发射方位角由目标轨道的轨道倾角和发射场纬度共同决定。

### 约束条件

发射方位角的设计还需考虑：

- 发射场安全走廊（避免飞越人口密集区）
- 级间分离残骸落区约束
- 测控站覆盖范围

## 应用价值

发射方位角是弹道导弹和运载火箭轨迹设计的基本参数。对于弹道导弹，它直接决定了导弹的射击方向；对于运载火箭，它决定了入轨轨道的空间方位。在星座部署和太阳同步轨道发射中，发射方位角的选择还需要考虑升交点赤经的要求。

## 相关概念

- [俯仰程序角（Pitch Program Angle）](/glossary/fundamentals/pitch-program/)
- [主动段转弯过程（Powered Phase Turning Process）](/glossary/fundamentals/turning-program/)
- [牛顿迭代法（Newton's Iteration Method）](/glossary/fundamentals/newton-iteration-method/)
- [轨迹优化（Trajectory Optimization）](/glossary/fundamentals/trajectory-optimization/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
