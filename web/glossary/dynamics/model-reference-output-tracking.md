---
title: 模型参考输出跟踪（Model Reference Output Tracking）
description: 一种控制设计框架：给定参考模型生成期望输出轨迹，设计控制器使被控系统的输出渐近跟踪参考输出，即 lim(y - y_r) = 0。核心工具是求解 Sylvester 型矩阵方程以获得前馈增益矩阵 G(t)、H(t)，再叠加状态反馈增益 K(t) 抑制初始误差。与「模型参考自适应控制」的区别：前者用确定性最优增益，后者在
keywords: 模型参考输出跟踪, Model Reference Output Tracking, , 轨道动力学, 三体问题, 平动点
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 模型参考输出跟踪（Model Reference Output Tracking）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 模型参考输出跟踪详解 | 术语定义
  description: 一种控制设计框架：给定参考模型生成期望输出轨迹，设计控制器使被控系统的输出渐近跟踪参考输出，即 lim(y - y_r) = 0。核心工具是求解 Sylvester 型矩阵方程以获得前馈增益矩阵 G(t)、H(t)，再叠加状态反馈增益 K(t) 抑制初始误差。与「模型参考自适应控制」的区别：前者用确定性最优增益，后者在
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 模型参考输出跟踪详解 | 术语定义
  description: 一种控制设计框架：给定参考模型生成期望输出轨迹，设计控制器使被控系统的输出渐近跟踪参考输出，即 lim(y - y_r) = 0。核心工具是求解 Sylvester 型矩阵方程以获得前馈增益矩阵 G(t)、H(t)，再叠加状态反馈增益 K(t) 抑制初始误差。与「模型参考自适应控制」的区别：前者用确定性最优增益，后者在
  image: /logo.png
permalink: /glossary/dynamics/model-reference-output-tracking/
---

# 模型参考输出跟踪（Model Reference Output Tracking）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文来源：[地月空间入门指南](https://cislunarspace.cn)

## 定义

一种控制设计框架：给定参考模型生成期望输出轨迹，设计控制器使被控系统的输出渐近跟踪参考输出，即 lim(y - y_r) = 0。核心工具是求解 Sylvester 型矩阵方程以获得前馈增益矩阵 G(t)、H(t)，再叠加状态反馈增益 K(t) 抑制初始误差。与「模型参考自适应控制」的区别：前者用确定性最优增益，后者在线辨识参数。

## 应用价值

模型参考输出跟踪用参考模型生成期望输出，是姿态控制系统设计的经典方法。

## 相关概念

- [渐近解（Asymptotic Solution）](/glossary/dynamics/asymptotic-solution/)
- [近月点数据库（Perilune Database）](/glossary/dynamics/perilune-database/)
- [平动点轨道编目（Libration Point Orbit Cataloging）](/glossary/orbits/libration-point-orbit-cataloging/)
- [Floquet模态法（Floquet Modal Method）](/glossary/dynamics/floquet-modal-method/)

## 参考文献

- 地月空间航天器绕飞接近跟踪控制
