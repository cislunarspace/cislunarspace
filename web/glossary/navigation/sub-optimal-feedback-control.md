---
title: 次优反馈控制（Sub-Optimal Feedback Control）
description: 一种用于多圈小推力转移的近最优控制策略。基于中心引力场中非共面椭圆轨道与圆轨道之间最小时间转移问题的大量数值解，将最优推力方向角（俯仰角和偏航角）表示为瞬时轨道根数（近地点半径、远地点半径、倾角）的查表插值函数。在无摄动条件下接近平均最优解，对摄动加速度和控制误差具有鲁棒性。本文将其扩展应用于地月平动点和 Halo 轨
keywords: 次优反馈控制, Sub-Optimal Feedback Control, SOFC, 导航, 定轨
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 次优反馈控制（Sub-Optimal Feedback Control）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 次优反馈控制详解 | 术语定义
  description: 一种用于多圈小推力转移的近最优控制策略。基于中心引力场中非共面椭圆轨道与圆轨道之间最小时间转移问题的大量数值解，将最优推力方向角（俯仰角和偏航角）表示为瞬时轨道根数（近地点半径、远地点半径、倾角）的查表插值函数。在无摄动条件下接近平均最优解，对摄动加速度和控制误差具有鲁棒性。本文将其扩展应用于地月平动点和 Halo 轨
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 次优反馈控制详解 | 术语定义
  description: 一种用于多圈小推力转移的近最优控制策略。基于中心引力场中非共面椭圆轨道与圆轨道之间最小时间转移问题的大量数值解，将最优推力方向角（俯仰角和偏航角）表示为瞬时轨道根数（近地点半径、远地点半径、倾角）的查表插值函数。在无摄动条件下接近平均最优解，对摄动加速度和控制误差具有鲁棒性。本文将其扩展应用于地月平动点和 Halo 轨
  image: /logo.png
permalink: /glossary/navigation/sub-optimal-feedback-control/
---

# 次优反馈控制（Sub-Optimal Feedback Control）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种用于多圈小推力转移的近最优控制策略。基于中心引力场中非共面椭圆轨道与圆轨道之间最小时间转移问题的大量数值解，将最优推力方向角（俯仰角和偏航角）表示为瞬时轨道根数（近地点半径、远地点半径、倾角）的查表插值函数。在无摄动条件下接近平均最优解，对摄动加速度和控制误差具有鲁棒性。本文将其扩展应用于地月平动点和 Halo 轨道的小推力转移，将轨迹计算问题简化为单参数边值问题（指定初始质量时）或柯西问题（指定末质量时）。

## 应用价值

该类轨道在地月空间任务中可用作通信中继和载人登月转移轨道。该控制方法在地月空间航天器姿态与轨道控制中具有重要应用价值。

## 相关概念

- [悬停控制（Hovering Control）](/glossary/navigation/hovering-control/)
- [先验约束（Prior constraint）](/glossary/navigation/prior-constraint/)
- [绝对导航（Absolute Navigation）](/glossary/navigation/absolute-navigation/)

## 参考文献

- Petukhov, 2011, Cosmic Res., 49(2), 121-130
- Ivanyukhin and Petukhov, 2019, Cosmic Res., 57(5)
