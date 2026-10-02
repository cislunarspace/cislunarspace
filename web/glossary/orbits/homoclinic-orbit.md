---
title: 同宿轨道（Homoclinic Orbit）
description: 从一条周期轨道的不稳定流形出发又回到同一周期轨道稳定流形的连接轨道，与异宿轨道共同构成限制性三体问题中低能转移的动力学基础。
keywords: 同宿轨道, Homoclinic Orbit, 不变流形, 周期轨道, 连接轨道, 三体问题
author: 天疆说
date: 2026-10-01
lastUpdated: 2026-10-01
wechatShare:
  title: 同宿轨道（Homoclinic Orbit）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 同宿轨道详解 | 术语定义
  description: 从一条周期轨道的不稳定流形出发又回到同一周期轨道稳定流形的连接轨道，与异宿轨道共同构成限制性三体问题中低能转移的动力学基础。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 同宿轨道详解 | 术语定义
  description: 从一条周期轨道的不稳定流形出发又回到同一周期轨道稳定流形的连接轨道，与异宿轨道共同构成限制性三体问题中低能转移的动力学基础。
  image: /logo.png
permalink: /glossary/orbits/homoclinic-orbit/
aliases:
  - Homoclinic Orbit
  - 同宿轨道
  - 同宿连接
  - Homoclinic Connection
related:
  - ref: dynamics/heteroclinic-orbit-transfer
    relation: related
  - ref: orbits/distant-retrograde-orbit-dro
    relation: related
  - ref: orbits/lyapunov-orbit
    relation: related
---

# 同宿轨道（Homoclinic Orbit）

> 本文作者：天疆说
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

同宿轨道是一条从给定周期轨道出发、经过绕转之后又回到同一条周期轨道的连接轨道。在动力系统语言中，它由该周期轨道不稳定流形上的渐近出发段与稳定流形上的渐近返回段拼接而成，两条流形在相空间中相交即产生同宿连接 \cite{mcgeheeSorrceHomoclinicOrbits1969,gideaGeometryHomoclinicConnections2007}。与之相对，连接两条不同周期轨道的轨道称为异宿轨道，见[异宿轨道转移](/glossary/dynamics/heteroclinic-orbit-transfer/)。

## 谱系与研究脉络

McGehee 在 1969 年的学位论文中研究了限制性三体问题的同宿轨道，指出这类轨道与平衡点邻域的双曲结构紧密相关 \cite{mcgeheeSorrceHomoclinicOrbits1969}。Gidea 与 Masdemont 给出了平面圆型限制性三体问题中同宿连接的几何刻画，将连接的存在性与流形的横截相交联系起来 \cite{gideaGeometryHomoclinicConnections2007}。数值计算方面，高维庞加莱映射方法可用于系统搜索周期轨道之间的连接轨道 \cite{callejaComputingInvariantManifolds2012}。

## 应用

在地月空间轨道设计中，同宿连接被用于构造捕获与转移路径。Giancotti 等借助圆柱同构映射研究了经 L1 Lyapunov 轨道流形实现的月球捕获轨迹与同宿连接 \cite{giancottiLunarCaptureTrajectories2012}。Parker 与 Anderson 在链式拼接地月三体周期轨道的工作中，把同宿与异宿连接作为构造大范围巡游路径的基本单元 \cite{parkerChainingPeriodicThreebody2010}。远距离逆行轨道族内部同样存在可资利用的同宿连接结构，见[远距离逆行轨道](/glossary/orbits/distant-retrograde-orbit-dro/)。

## 相关概念

- [异宿轨道转移（Heteroclinic Transfer）](/glossary/dynamics/heteroclinic-orbit-transfer/)
- [远距离逆行轨道（Distant Retrograde Orbit, DRO）](/glossary/orbits/distant-retrograde-orbit-dro/)
- [Lyapunov 轨道（Lyapunov Orbit）](/glossary/orbits/lyapunov-orbit/)
