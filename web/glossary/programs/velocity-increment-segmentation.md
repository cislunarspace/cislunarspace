---
title: 速度增量分段（velocity increment segmentation）
description: 论文对速度增量阈值进行分段处理的策略。当速度增量大于1.7 km/s时其分布出现突变，因此以该值为分段点，并对拼接点进行平滑处理以防止评估权值跳变。该策略用于构建综合代价评估中的速度增量指标函数。
keywords: 速度增量分段, velocity increment segmentation, 任务设计, 载人航天, 月球探测
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 速度增量分段（velocity increment segmentation）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 速度增量分段详解 | 术语定义
  description: 论文对速度增量阈值进行分段处理的策略。当速度增量大于1.7 km/s时其分布出现突变，因此以该值为分段点，并对拼接点进行平滑处理以防止评估权值跳变。该策略用于构建综合代价评估中的速度增量指标函数。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 速度增量分段详解 | 术语定义
  description: 论文对速度增量阈值进行分段处理的策略。当速度增量大于1.7 km/s时其分布出现突变，因此以该值为分段点，并对拼接点进行平滑处理以防止评估权值跳变。该策略用于构建综合代价评估中的速度增量指标函数。
  image: /logo.png
permalink: /glossary/programs/velocity-increment-segmentation/
---

# 速度增量分段（velocity increment segmentation）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文来源：学术论文与专业资料整理
>
> 站长地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

论文对速度增量阈值进行分段处理的策略。当速度增量大于1.7 km/s时其分布出现突变，因此以该值为分段点，并对拼接点进行平滑处理以防止评估权值跳变。该策略用于构建综合代价评估中的速度增量指标函数。

## 应用价值

速度增量分段以 1.7 km/s 为界处理阈值跳变，对拼接点进行平滑以防止评估权值跳变。是综合代价评估中的重要处理策略。

## 相关概念

- [大气减速制动返回（Atmospheric Braking Return）](/glossary/programs/atmospheric-braking-return/)
- [任务解耦（Mission Decoupling）](/glossary/programs/mission-decoupling/)
- [系统可靠性（System Reliability）](/glossary/programs/system-reliability/)

## 参考文献

- 丁百慧 等 - 2023 - 载人月球探测任务转移轨道及月面着陆区评估分析
