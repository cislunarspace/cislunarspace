---
title: 推重比（Thrust-to-Weight Ratio）
description: 详细解析推重比的定义、与垂直起飞时间的关系及在火箭设计中的应用
keywords: 推重比, Thrust-to-Weight Ratio, 垂直起飞时间, 起飞加速性能, 火箭设计
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 推重比（Thrust-to-Weight Ratio）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 推重比详解 | 术语定义
  description: 详细解析推重比的定义及与垂直起飞时间的关系
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 推重比详解 | 术语定义
  description: 详细解析推重比的定义及与垂直起飞时间的关系
  image: /logo.png
permalink: /glossary/fundamentals/thrust-to-weight-ratio/
---

# 推重比（Thrust-to-Weight Ratio）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

推重比 $P_0/G_0$ 是火箭地面额定推力 $P_0$ 与起飞重量 $G_0$ 的比值，是表征火箭起飞加速能力的关键参数。推重比越大，火箭的起飞加速性能越好。

## 核心要素

### 与垂直起飞时间的关系

推重比直接决定了火箭垂直起飞段的持续时间。初步设计时，垂直起飞时间 $t_1$ 可由以下近似公式计算：

$$t_1 = \sqrt{\frac{40}{\frac{1}{\nu_0} - 1}}$$

其中 $\nu_0 = G_0/P_0$ 为推重比的倒数。

| 推重比 $P_0/G_0$ | 垂直起飞时间 $t_1$ |
| :--- | :--- |
| 1.0 | 约 17 s |
| 2.0 | 约 6 s |
| 3.0 | 约 2 s |

推重比大表示起飞加速性能好，垂直起飞时间可取得较短。

### 对飞行程序的影响

| 影响方面 | 推重比大 | 推重比小 |
| :--- | :--- | :--- |
| 垂直起飞时间 | 短 | 长 |
| 转弯段起始速度 | 高 | 低 |
| 转弯所需法向力 | 大 | 小 |
| 重力速度损失 | 小 | 大 |

### 设计约束

垂直起飞时间的选择需满足：

- 不能过长：否则增大速度的重力损失，转弯时速度过大需要较大法向力
- 不能过短：否则转弯时发动机可能未达额定工作状态，控制执行机构不能产生足够控制力

通常垂直起飞时间应至少保证延续到发动机进入额定工作状态的时刻。

## 应用价值

推重比是火箭总体设计的核心参数之一，直接影响火箭的起飞性能和飞行程序设计。推重比的选择需要在加速能力、结构质量、推进剂装载量之间进行权衡。对于大型运载火箭，推重比通常在 1.2～1.5 之间；对于弹道导弹，推重比可能更大以获得更好的机动性能。

## 相关概念

- [推力（Thrust）](/glossary/fundamentals/thrust/)
- [比冲（Specific Impulse）](/glossary/fundamentals/specific-impulse/)
- [俯仰程序角（Pitch Program Angle）](/glossary/fundamentals/pitch-program/)
- [重力转弯（Gravity Turn）](/glossary/fundamentals/gravity-turn/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
