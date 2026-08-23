---
title: 三角平动点附近的长周期、短周期与双周期运动
description: 地月 $L_4/L_5$ 附近相对运动的两个自然模态——长周期模态（周期约 92 天，椭圆轴比约 16/3）与短周期模态（周期约一个朔望月，轴比约 2）。两者都可通过初速条件滤除其一；两者并存的双周期情形周期约 458 天、轴比约 16/5。覆盖编队飞行含义与初始条件敏感性。
keywords: 长周期运动, 短周期运动, 双周期运动, 三角平动点, L4, L5, 地月系统, 编队飞行, CR3BP, Catlin McLaughlin
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 三角平动点附近的长周期、短周期与双周期运动
  desc: 地月 L4/L5 附近相对运动的两个自然模态：长周期（约 92 天，16/3）与短周期（约一个月，2）；双周期约 458 天。
  image: /logo.png
og:
  title: 三角平动点附近的长短周期与双周期运动详解 | 术语定义
  description: 地月 $L_4/L_5$ 附近相对运动的两个自然模态——长周期（约 92 天，16/3）与短周期（约一个朔望月，2）；两者并存的双周期情形周期约 458 天、轴比约 16/5。覆盖编队飞行含义与初始条件敏感性。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 三角平动点附近的长短周期与双周期运动详解 | 术语定义
  description: 地月 $L_4/L_5$ 附近相对运动的两个自然模态——长周期（约 92 天，16/3）与短周期（约一个朔望月，2）；两者并存的双周期情形周期约 458 天、轴比约 16/5。覆盖编队飞行含义与初始条件敏感性。
  image: /logo.png
permalink: /glossary/dynamics/long-period-motion/
---

# 三角平动点附近的长周期、短周期与双周期运动

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

在三角平动点（$L_4$ 或 $L_5$）附近对 CR3BP 方程作线性化，得到两个面内振荡模态加一个面外简谐运动。两个面内模态分别称为**长周期模态**与**短周期模态**；两者并存的情形称为**双周期运动**。沿用 Catlin & McLaughlin（2007）的记号，面内频率为

$$
s_{1,2} = \sqrt{\tfrac{1}{2}\Big(\tfrac{1}{2} \pm \sqrt{\tfrac{1}{4} - 27\,\mu(1-\mu)}\Big)},
$$

地月系 $\mu \approx 0.0121506$，取 $s_1 < s_2$：$s_1$ 为长周期频率，$s_2$ 为短周期频率；面外频率 $s_z = \sqrt{1 - \mu + \mu^2} \approx 0.999893$ 接近 1。由此得三种情形的周期与椭圆轴比（相对运动椭圆半长轴与半短轴之比 $1/\bar\alpha$）：

| 模态 | 周期 | 椭圆轴比 $1/\bar\alpha$ |
|---|---|---|
| 长周期（仅 $s_1$） | ≈ 92 天 | ≈ 16/3 ≈ 5.33 |
| 短周期（仅 $s_2$） | ≈ 一个朔望月 | ≈ 2 |
| 双周期（$s_1 + s_2$） | ≈ 458 天 | ≈ 16/5 = 3.2 |

注意：双周期的 458 天**不是**任一单独模态的周期，而是地月 $\mu$ 下两个频率组合的共同复现时间。

## 纯长周期与纯短周期运动

通过精心选取初始速度，可分别滤掉两个模态之一（Catlin & McLaughlin 2007, Eqs. 6–7）。仅保留长周期时，相对运动是面内椭圆，轴比 ≈ 16/3，周期 ≈ 92 天，所需初始相对速度在毫米/秒量级。仅保留短周期时，轴比 ≈ 2，周期 ≈ 一个朔望月。这两种单模态解是 $L_4/L_5$ 编队飞行的实用构件：运动可重复、平面、可解析描述。

自然的圆编队（轴比为 1）在纯长周期下不可能，面内频率与面外频率相去甚远（$s_z$ 远不等于 $s_1$）；只有短周期下 $s_2$ 与 $s_z$ 相差不到 0.05 无量纲频率单位，才可做平面近似实现近圆编队。即便如此，平面近似对 CR3BP 真实动力学的描述并不准确，需有源控制才能维持圆形。

## 双周期运动为何少用

两模态并存时，相对动力学化为复杂的三维曲线（轴比 ≈ 16/5，周期 ≈ 458 天）。数学上丰富，工程上不便：从星相对主星在任何操作上有意义的时段内都不会走出闭合曲线，因此 $L_4/L_5$ 编队概念多主动滤掉其中一模态。

## 初始条件敏感性

单模态运动在 $L_4/L_5$ 处的失效不源于失稳（线性化三角点在 $\mu < \mu_\text{Routh} \approx 0.0385$ 下稳定），而源于**被滤模态的回归**：初始条件的微小误差会重新引入被抑制的频率，数周内编队即偏离设计几何。Catlin & McLaughlin 的敏感性分析（2007, Table 3）显示：要保证 30 天内总相对位置误差低于 10%，长周期与短周期编队对初始速度的精度要求在 µm/s 量级；**并行编队**（面内、相位移）则宽容得多，可容忍公里量级的初始位置误差。这是为什么无源控制的三角平动点编队难以在任务时间尺度上保形，任何实用概念都需要主动控制。

## 摄动与模型限制

以上分析基于 CR3BP。真实地月系中，太阳引力是 $L_4/L_5$ 处的首要摄动源：短周期编队传播三年，若忽略太阳引力，相对距离误差可累积 ≈ 110 km（约为未扰幅度的 1800%）。太阳光压造成的峰值误差约 14 m（约 20%）；地球扁率影响可忽略，亚毫米量级（Catlin & McLaughlin 2007, §IV）。因此真实模型至少需用双圆模型或完整历表模型，纯 CR3BP 不足以反映 $L_4/L_5$ 长期行为。

## 相关概念

- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)

- [平动点（Libration Point）](/glossary/fundamentals/libration-point/)

- [三角平动点周期轨道族](/glossary/dynamics/periodic-orbit-family-at-triangular-libration-point/)

- [雅可比常数（Jacobi Constant）](/glossary/dynamics/jacobi-integral/)

- [会合周期（Synodic Period）](/glossary/fundamentals/synodic-period/)

## 参考文献

- Catlin, K. & McLaughlin, C., 2007, Earth–Moon Triangular Libration Point Spacecraft Formations, *J. Guid. Control Dyn.*：长/短周期频率的推导、轴比、编队设计、敏感性分析与摄动评估（本文全部数值均出自此）。

- Catlin & McLaughlin, 2004, Relative motion of two spacecraft near the Earth–Moon triangular libration points，更早的平面分析。

- Szebehely, 1967, *Theory of Orbits*, §§5.2–5.4，$L_4/L_5$ 线性化、特征根与 Routh 稳定判据。

- Hou & Liu, 2010, On quasi-periodic motions around the triangular libration points of the real Earth–Moon system，历表模型下的扩展。
