---
title: 速端曲线（Hodograph）
description: 把运动各时刻的速度矢量平移到同一起点后，其端点在速度空间中描出的曲线，端点移动的快慢与方向就是加速度。二体圆锥曲线轨道的速端曲线是半径 μ/h 的圆，圆心沿近拱点速度方向偏移 μe/h，圆轨道、椭圆、抛物线、双曲线分别对应原点在圆心、圆内、圆上、圆外。覆盖哈密顿 1846 年提出该概念的来源、逐偏心率分类的几何，以及速度 Hodograph 形状法在小推力轨迹设计中的用法。
keywords: 速端曲线, hodograph, 速度hodograph, 速端图, 速度端图, 速度空间, 二体轨道, 开普勒轨道, 圆锥曲线轨道, 偏心率, 小推力轨迹设计, 哈密顿
author: 天疆说
date: 2026-10-28
lastUpdated: 2026-10-28
wechatShare:
  title: 速端曲线（Hodograph）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 速端曲线（Hodograph）详解 | 术语定义
  description: 速度矢量端点在速度空间描出的曲线；二体轨道的速端曲线是圆，并在小推力轨迹设计中用作形状基方法的设计坐标。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 速端曲线（Hodograph）详解 | 术语定义
  description: 速度矢量端点在速度空间描出的曲线；二体轨道的速端曲线是圆，并在小推力轨迹设计中用作形状基方法的设计坐标。
  image: /logo.png
permalink: /glossary/fundamentals/hodograph/
aliases:
  - Hodograph
  - hodograph
  - velocity hodograph
  - 速端图
  - 速度端图
related:
  - ref: dynamics/shape-based-method
    relation: related
  - ref: dynamics/phase-space
    relation: broader
  - ref: fundamentals/osculating-orbital-elements
    relation: related
---

# 速端曲线（Hodograph）

> 本文作者：天疆说
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

速端曲线（hodograph）是把运动在每一时刻的速度矢量平移到同一个原点后，其端点在速度空间中随时间描出的曲线。名称取自希腊语 hodos（道路），由哈密顿于 1846 年提出，作为研究动力学问题的另一条途径\cite{gonzalezVillanuevaFromCircularPaths1998}。

它把加速度变成看得见的对象。速度端点沿速端曲线移动，移动的速度正是加速度本身：

$$
\frac{\mathrm{d}\boldsymbol{v}}{\mathrm{d}t} = \boldsymbol{a}.
$$

把代表点从曲线上一点推向下一点的，正是该时刻每单位质量的力。牛顿第二定律在速端曲线上的读法是几何的：力大，端点跑得快；力方向变，端点转向。匀速直线运动的速端曲线退化为一个固定点。

速端曲线只携带速度信息。它由速度完全决定，而同一条速端曲线对应位形空间中一族彼此平移的轨迹，位置信息在投影中丢失。

## 二体轨道的速端曲线是圆

哈密顿的经典结果：平方反比引力下，任何圆锥曲线轨道的速端曲线是一个圆\cite{gibbonsFateHamiltonsHodograph2015,gonzalezVillanuevaFromCircularPaths1998}。

推导只需展开速度分量。设中心引力参数 $\mu$，比角动量 $h$，偏心率 $e$，真近点角 $\theta$。轨道平面内取近拱点方向为 $P$ 轴、沿运动方向与之垂直为 $Q$ 轴，速度的径向与横向分量为

$$
v_r = \frac{\mu}{h}e\sin\theta, \qquad v_\theta = \frac{\mu}{h}(1+e\cos\theta),
$$

代入 $\boldsymbol{v}=v_r\hat{\boldsymbol{e}}_r+v_\theta\hat{\boldsymbol{e}}_\theta$ 并按 $P$、$Q$ 轴展开，得

$$
\boldsymbol{v} = \frac{\mu}{h}\big(-\sin\theta\,\hat{\boldsymbol{e}}_P + \cos\theta\,\hat{\boldsymbol{e}}_Q\big) + \frac{\mu e}{h}\hat{\boldsymbol{e}}_Q.
$$

第一项的端点随 $\theta$ 描出以原点为心、半径 $\mu/h$ 的圆；第二项是与 $\theta$ 无关的常矢量。整条速端曲线因此是一个半径 $\mu/h$ 的圆，圆心相对原点偏移 $\frac{\mu e}{h}\hat{\boldsymbol{e}}_Q$。由此得到三个几何事实：

- 半径 $\mu/h$，只依赖中心体与比角动量，与偏心率无关。
- 圆心偏离速度空间原点 $\mu e/h$，方向沿 $\hat{\boldsymbol{e}}_Q$，即近拱点处速度的方向。
- 端点在圆上的方位角等于 $\theta+\pi/2$，随真近点角匀速前进，对时间的角速率是 $\dot\theta = h/r^2$，近拱点附近最快，与开普勒第二定律同源。

速度的大小就是原点到圆上动点的距离，活力公式于是有了几何形状。按原点相对圆的位置，四类圆锥曲线恰好分成四种情形：

- 圆轨道（$e=0$）：偏移为零，速端曲线是以原点为心的圆，速率恒定。
- 椭圆（$0<e<1$）：原点在圆内，端点每周期绕圆一整圈；近拱点速度 $\mu(1+e)/h$ 最大，远拱点速度 $\mu(1-e)/h$ 最小，两者位于圆的同一条直径两端。
- 抛物线（$e=1$）：圆恰好通过原点，端点随时间趋于原点，对应速度在无穷远处趋于零。
- 双曲线（$e>1$）：原点在圆外，端点只走过圆上一段以 $\theta=\pm\theta_\infty$（$\cos\theta_\infty=-1/e$）为端点的弧，弧端点到原点的距离给出无穷远剩余速度 $v_\infty=\frac{\mu}{h}\sqrt{e^2-1}$。

在多体引力（如 CR3BP）下没有这些封闭性质，速端曲线一般不再是圆，二体结果只作定性参照。

## 在小推力轨迹设计中的用法

速度 Hodograph 形状法把速端曲线当作设计坐标：不先猜轨道的几何形状，而是直接为速度矢量的分量构造满足边界条件的形状函数。Gondelach 与 Noomen 的做法是把各速度分量写成一组可解析积分的基函数之和，按时间与极角两种自变量各给出一套方案；对基函数积分得到位置，出发与交会要求的边界条件可以不经迭代直接满足，剩余自由参数用来搜索最小速度增量的解\cite{gondelachHodographicShapingMethodLowThrust2015}。

这一族方法的谱系（与指数正弦、逆多项式的关系、可行性条件、在全局搜索中的定位）见[形状基方法与速度 Hodograph](/glossary/dynamics/shape-based-method/)词条，本词条只补齐该词条缺少的对象本身。

## 与相邻概念的区别

相空间。相空间以位置与动量（或速度）为坐标，轨迹是一条随时间演化的曲线；速端曲线是这条轨迹向速度坐标的投影再配上共同的起点。速端曲线丢掉位置，换来一幅能直接读出加速度与速度大小的低维图。

特性曲线。轨道族的特性曲线按族参数（振幅、周期、雅可比常数）画出该族的截面，服务于族的延拓与分岔分析；速端曲线属于单个运动，随时间走出。两者都是曲线，坐标与对象都不同。

轨迹。轨迹在位形空间（位置空间），速端曲线在速度空间。由轨迹可以唯一重画速端曲线，反之不行：同一条速端曲线对应一族平移的轨迹。

## 相关概念

- [形状基方法与速度 Hodograph](/glossary/dynamics/shape-based-method/)
- [相空间与相空间通道（Phase Space & Phase Space Conduit）](/glossary/dynamics/phase-space/)
- [吻切轨道根数（Osculating Orbital Elements）](/glossary/fundamentals/osculating-orbital-elements/)
