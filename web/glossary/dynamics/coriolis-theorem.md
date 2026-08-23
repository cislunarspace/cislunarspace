---
title: 科氏定理（Coriolis Theorem / Transport Theorem）
description: 同一矢量在惯性系与旋转系中时间导数的关系——$(\mathrm d\vec q/\mathrm dt)_I=(\mathrm d\vec q/\mathrm dt)_R+\vec\omega\times\vec q$。本文覆盖其推导、对位置矢量的两次应用产生科氏加速度 $2\vec\omega\times\vec v_R$ 与离心加速度 $\vec\omega\times(\vec\omega\times\vec r)$ 的过程，以及在 [会合坐标系](/glossary/fundamentals/synodic-frame/) 中推导 CR3BP 运动方程、在月固系等体固系中推导软着陆精确动力学的基本用法。
keywords: 科氏定理, Coriolis Theorem, 输运定理, Transport Theorem, 科氏加速度, 离心加速度, 旋转坐标系, 会合系, 月固坐标系
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 科氏定理（Coriolis Theorem）
  desc: 惯性系与旋转系中矢量时间导数的关系，是 CR3BP 与体固系运动方程的推导根基。
  image: /logo.png
og:
  title: 科氏定理详解 | 旋转系下的运动方程推导
  description: 同一矢量在惯性系与旋转系中时间导数的关系。覆盖推导、对位置矢量两次应用产生科氏加速度与离心加速度的过程，以及在会合坐标系、月固坐标系中推导航天器运动方程的基本用法。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 科氏定理详解 | 旋转系下的运动方程推导
  description: 同一矢量在惯性系与旋转系中时间导数的关系。覆盖推导、对位置矢量两次应用产生科氏加速度与离心加速度的过程，以及在会合坐标系、月固坐标系中推导航天器运动方程的基本用法。
  image: /logo.png
permalink: /glossary/dynamics/coriolis-theorem/
---

# 科氏定理（Coriolis Theorem / Transport Theorem）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

**科氏定理**（Coriolis theorem，又称输运定理 transport theorem）描述同一矢量在惯性系 $\mathcal I$ 与相对惯性系以角速度 $\vec\omega$ 旋转的参考系 $\mathcal R$ 中时间导数的关系。对任意矢量 $\vec q$，

$$
\left(\frac{\mathrm d\vec q}{\mathrm dt}\right)_{\!\mathcal I}
=
\left(\frac{\mathrm d\vec q}{\mathrm dt}\right)_{\!\mathcal R}
+
\vec\omega\times\vec q.
$$

$\vec\omega$ 是 $\mathcal R$ 相对 $\mathcal I$ 的瞬时角速度。矢量本身与参考系无关，但其分量与对时间求导的操作随参考系而变，科氏定理正是后者的变换法则。它是 [会合坐标系](/glossary/fundamentals/synodic-frame/)、月固系、地球固系等所有旋转参考系中航天器运动方程的推导根基。

## 推导要点

设 $\mathcal R$ 的三个单位基矢量为 $\hat e_1, \hat e_2, \hat e_3$，则 $\vec q=q_1\hat e_1+q_2\hat e_2+q_3\hat e_3$。在 $\mathcal I$ 中对 $t$ 求导：

$$
\left(\frac{\mathrm d\vec q}{\mathrm dt}\right)_{\!\mathcal I}
= \sum_i \dot q_i\hat e_i + \sum_i q_i\!\left(\frac{\mathrm d\hat e_i}{\mathrm dt}\right)_{\!\mathcal I}.
$$

第一项即 $\mathcal R$ 中的导数（$\hat e_i$ 在 $\mathcal R$ 中视为常量）；第二项中单位基矢在 $\mathcal I$ 中以 $\mathrm d\hat e_i/\mathrm dt=\vec\omega\times\hat e_i$ 旋转。代回即得科氏定理。

## 两次应用：科氏加速度与离心加速度

把科氏定理用到位置矢量 $\vec r$（位于旋转系原点的物体相对该原点的位置），第一次得速度变换

$$
\vec v_I = \vec v_R + \vec\omega\times\vec r,
$$

其中 $\vec v_I, \vec v_R$ 分别为 $\vec r$ 在 $\mathcal I, \mathcal R$ 中的时间导数。再对 $t$ 求一次导数（注意 $\vec\omega$ 在 $\mathcal R$ 中可能也随时间变化），整理得加速度变换：

$$
\vec a_I
= \vec a_R
+ 2\,\vec\omega\times\vec v_R
+ \dot{\vec\omega}\times\vec r
+ \vec\omega\times(\vec\omega\times\vec r).
$$

右侧三项分别称为：

- **科氏加速度** $2\vec\omega\times\vec v_R$：仅在物体相对旋转系运动时出现，方向垂直于 $\vec v_R$；
- **欧拉加速度** $\dot{\vec\omega}\times\vec r$：仅在旋转系角速度变化时出现，对匀速旋转系为零；
- **离心加速度** $\vec\omega\times(\vec\omega\times\vec r)$：始终指向旋转轴外，大小为 $\omega^2\rho$（$\rho$ 为到旋转轴的距离）。

## 在 CR3BP 会合系中的应用

[圆型限制性三体问题](/glossary/dynamics/cr3bp/) 的标准推导正是科氏定理的直接应用（Szebehely 1967, §1.5；Vallado 2022, §1.5）。设在 [会合坐标系](/glossary/fundamentals/synodic-frame/) 中，两主天体固定不动、整个坐标系以两主天体公转角速度 $\vec\omega=n\hat z$ 旋转。把牛顿引力 $\vec a_I=-\mu_1\vec r_1/r_1^3-\mu_2\vec r_2/r_2^3$ 移到旋转系，得

$$
\ddot{\vec r}+2\vec\omega\times\dot{\vec r}+\vec\omega\times(\vec\omega\times\vec r)
= -\frac{\mu_1}{r_1^3}\vec r_1-\frac{\mu_2}{r_2^3}\vec r_2,
$$

或写为

$$
\ddot{\vec r} = -\nabla\Omega - 2\vec\omega\times\dot{\vec r},\qquad
\Omega = \frac{\mu_1}{r_1}+\frac{\mu_2}{r_2}+\tfrac{1}{2}\omega^2(x^2+y^2).
$$

把 $\Omega$ 写成两体引力势 + 离心势的统一标量函数后，运动方程右端的科氏项 $-2\vec\omega\times\dot{\vec r}$ 是**陀螺力**（不做功、垂直于速度），由此可推出 [雅可比积分](/glossary/dynamics/jacobi-integral/) 守恒。这就是会合系方程中科氏 + 离心两项的力学根源。

## 在体固系中的应用

月球软着陆、地球再入等任务需要在月固系或地固系（与天体同步旋转的参考系）中建立动力学方程。以月固系为例（周净扬、周荻 2007）：

$$
\vec V_I = \vec V_L + \vec\omega_M\times\vec R,
$$

其中 $\vec V_I$ 是惯性系速度、$\vec V_L$ 是月固系速度、$\vec\omega_M$ 是月球自转角速度、$\vec R$ 是位置矢量。对上式求导并应用科氏定理得含科氏加速度 $2\vec\omega_M\times\vec V_L$ 与离心加速度 $\vec\omega_M\times(\vec\omega_M\times\vec R)$ 的相对运动方程，再加月球非球形引力、控制力等，就构成月球软着陆的精确动力学模型。这是工程级着陆制导律推导的基础。

## 常见误区

- **科氏力做功吗？** 不做功。科氏项 $2\vec\omega\times\vec v_R$ 始终垂直于 $\vec v_R$，对能量积分无贡献；这也是 [雅可比积分](/glossary/dynamics/jacobi-integral/) 之所以守恒的原因之一。
- **科氏加速度是相对速度的代价吗？** 是。它是惯性系观察者看来相对运动的附加旋转，物体在旋转系里运动时，其径迹在惯性系里被旋转系拖着走，二者差异即科氏加速度。
- **与科氏力口语用法的区分**：日常经验中的科氏力（北半球河流冲刷右岸、傅科摆偏转等）是把加速度项乘上质量后当虚拟力看待的结果；严格地说它是运动学效应，不是物理力。
- **$\vec\omega$ 的参考系**：科氏定理中的 $\vec\omega$ 是 $\mathcal R$ 相对 $\mathcal I$ 的角速度，不是物体相对 $\mathcal R$ 的角速度。

## 相关概念

- [会合坐标系（Synodic Frame）](/glossary/fundamentals/synodic-frame/)
- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)
- [雅可比积分（Jacobi Integral）](/glossary/dynamics/jacobi-integral/)
- [惯性参考系（Inertial Reference Frames）](/glossary/fundamentals/inertial-reference-frames/)

## 参考文献

- Szebehely, V. (1967). *Theory of Orbits: The Restricted Problem of Three Bodies*, §1.5. Academic Press.
- Vallado, D. A. (2022). *Fundamentals of Astrodynamics and Applications*, 5th ed., §1.5 (rotating frames and the transport theorem).
- Goldstein, H., Poole, C. P., & Safko, J. L. (2002). *Classical Mechanics*, 3rd ed., Chapter 4. Addison-Wesley.
- 周净扬, 周荻 (2007). 月球探测器软着陆精确建模及最优轨道设计. 宇航学报.
