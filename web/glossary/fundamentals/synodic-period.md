---
title: 会合周期（Synodic Period）与会合频率
description: 两个运动天体相对于第三点回到相同相对几何构型所需的时间，由恒性周期表为 1/S = |1/T₁ − 1/T₂|。覆盖月球会合周期（29.53 天，月相循环）、地月旋转系中的太阳会合频率，以及卫星交会相位分析中的会合周期概念。
keywords: 会合周期, 会合频率, 月球会合周期, 太阳会合频率, 恒星周期, 月相, synodic period, 相位循环, 地月旋转系
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 会合周期（Synodic Period）与会合频率
  desc: 两个天体回到相同相对构型的时间；月球会合周期 29.53 天，是月相循环的时长。
  image: /logo.png
og:
  title: 会合周期（Synodic Period）详解 | 术语定义
  description: 两个运动天体相对于第三点回到相同相对几何构型所需的时间，由恒性周期表为 1/S = |1/T₁ − 1/T₂|。覆盖月球会合周期（29.53 天）、地月旋转系中的太阳会合频率与卫星交会相位分析。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 会合周期（Synodic Period）详解 | 术语定义
  description: 两个运动天体相对于第三点回到相同相对几何构型所需的时间，由恒性周期表为 1/S = |1/T₁ − 1/T₂|。覆盖月球会合周期（29.53 天）、地月旋转系中的太阳会合频率与卫星交会相位分析。
  image: /logo.png
permalink: /glossary/fundamentals/synodic-period/
---

# 会合周期（Synodic Period）与会合频率

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

**会合周期**（synodic period）$S$ 是两个运动天体相对于第三点（通常是主天体）回到相同相对几何构型所需的时间。设两者的恒星周期（以惯性参考方向为准）分别为 $T_1$、$T_2$，则

$$
\frac{1}{S} = \Big| \frac{1}{T_1} - \frac{1}{T_2} \Big|, \qquad S = \frac{T_1 T_2}{|T_2 - T_1|}.
$$

其倒数 $\omega_\text{syn} = 2\pi/S$ 称为**会合频率**（角频率）。会合周期与恒星周期是一对易混概念：恒星周期以惯性空间（恒星方向）为基准，会合周期以运动中的伴星为基准。

## 月球会合周期

月球的**恒星周期**（相对恒星转一圈）是 27.3217 天；此期间地球自己也绕日走了约 $27°$，月球需再多走 $27°$ 才回到同样的日-地-月夹角。由此得到**月球会合周期**，即月相循环一次的时长（一个朔望月）：

$$
\frac{1}{S_\text{月}} = \frac{1}{27.3217} - \frac{1}{365.256} \;\Longrightarrow\; S_\text{月} \approx 29.5306\ \text{天}.
$$

这是任何受日-地-月夹角驱动的现象的自然节拍：潮汐、月相照明、传感器覆盖中的太阳回避窗口、以及共振 DRO 的设计。例如 2:1 共振 DRO 的轨道周期即 $S_\text{月}/2 \approx 14.77$ 天（Welch et al. 2015）。地月空间态势感知仿真通常覆盖整数个会合周期，以保证太阳回避窗口的统计具有代表性（Vendl & Holzinger 2021）。

## 地月旋转系中的太阳会合频率

在地月会合旋转系（角速度 $n_\text{EM} = 2\pi/S_\text{月}$）中，太阳并非静止：它在旋转系中每年（地球恒星年）走完一圈。地月双星系统的太阳会合频率，即旋转系中太阳方向的角速度，记为 $\omega_\odot$。在日-地-月系统的双圆模型与拟双圆模型中，$\omega_\odot$ 是首要的外部摄动频率，调制原本自治的地月动力学，是 $L_4/L_5$ 邻域长期稳定性与弹道捕获转移行为的支配因素（Gómez 等 2001, vol. II）。

## 卫星交会中的会合周期

对共面圆轨道交会问题，同样的公式给出拦截器与目标之间的会合周期 $S_\text{ph} = 2\pi/(\omega_\text{int} - \omega_\text{tgt})$。下一次相位机会的等待时间为

$$
\tau_\text{wait} = \frac{\vartheta - \vartheta_i + 2\pi k}{\omega_\text{int} - \omega_\text{tgt}},
$$

其中 $\vartheta$ 是所要求的相位角分离，$k$ 为圈数（Vallado 2022, §6.5）。两卫星轨道越接近，会合周期越长；轨道差距越大，反而越快相位，这是发射窗口设计中的反直觉规律。

## 相关概念

- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)

- [会合坐标系（Synodic Frame）](/glossary/fundamentals/synodic-frame/)

- [雅可比常数（Jacobi Constant）](/glossary/dynamics/jacobi-integral/)

## 参考文献

- Vallado, 2022, *Fundamentals of Astrodynamics and Applications*, §6.5 与 §3.4：卫星交会中的会合周期；质心时间系统。

- Szebehely, 1967, *Theory of Orbits*, §1.5：无量纲会合系与角速度 $n$ 的定义。

- Gómez, Jorba, Llibre, Masdemont, Simó, 2001, *Dynamics and Mission Design near Libration Points*, vol. II：双圆模型中的太阳会合摄动。

- Welch, Barden, Howell, 2015, Mission Considerations for Transfers to a Distant Retrograde Orbit：2:1 共振 DRO 与半个月球会合周期。

- Vendl & Holzinger, 2021, "Cislunar periodic orbit analysis for persistent space object detection capability"：会合周期作为传感器覆盖仿真节拍。

- Thornton et al., 2022：覆盖完整会合周期的仿真基线。
