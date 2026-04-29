---
title: 主动段转弯过程（Powered Phase Turning Process）
description: 详细解析主动段转弯过程的三个阶段、静稳定/静不稳定火箭的转弯特性及法向力的产生机制
keywords: 转弯过程, Turning Program, 垂直段, 转弯段, 瞄准段, 法向力, 攻角, 静稳定, 静不稳定
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 主动段转弯过程（Turning Process）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 主动段转弯过程详解 | 术语定义
  description: 详细解析主动段转弯过程的三个阶段及法向力的产生机制
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 主动段转弯过程详解 | 术语定义
  description: 详细解析主动段转弯过程的三个阶段及法向力的产生机制
  image: /logo.png
permalink: /glossary/fundamentals/turning-program/
---

# 主动段转弯过程（Powered Phase Turning Process）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

主动段转弯过程是飞行器从垂直起飞（$\theta = 90°$）到关机点期望速度倾角（$\theta = \theta_k^*$）的全过程。转弯通过产生垂直于速度矢量的法向力实现，法向力主要由升力和推力的法向分量提供，其大小取决于攻角 $\alpha$。

## 核心要素

### 转弯的三个阶段

| 阶段 | 俯仰程序角 | 攻角 | 特点 |
|:---|:---|:---|:---|
| 垂直段 | $\varphi_{pr} = 90°$ | $\alpha \approx 0$ | 垂直上升，快速穿越稠密大气 |
| 转弯段 | 从 90° 逐渐减小 | $\alpha \neq 0$ | 产生法向力，速度矢量转向 |
| 瞄准段 | 保持不变 | $\alpha \approx 0$ | 维持期望速度方向 |

### 法向力的产生

由法向加速度方程可知：

$$\dot{\theta} = \frac{1}{mv}(P_e + C_y^\alpha q S_M)\alpha + \frac{g}{v}\cos\theta$$

要使速度矢量方向改变，必须提供垂直于速度矢量的法向力。引力虽可使 $\theta$ 减小，但其量级小且不可独立控制，因此不能作为主要转弯力。法向力主要由升力和推力法向分量产生，其大小与攻角 $\alpha$ 成正比。

### 攻角与控制偏转角的关系

根据瞬时平衡假设，攻角由控制偏转角确定：

$$\alpha = -\frac{\sqrt{2}P(x_g - x_c)}{2Y_1^\alpha(x_g - x_p)}\delta_\varphi$$

控制偏转角 $\delta_\varphi$ 由实际俯仰角与程序角之差决定。

### 静稳定与静不稳定火箭的转弯特性

| 类型 | $x_g - x_p$ | 攻角符号 | 转弯特点 |
|:---|:---|:---|:---|
| 静稳定火箭 | $< 0$ | $\delta_\varphi$ 与 $\alpha$ 同号 | 自然稳定，转弯需持续控制 |
| 静不稳定火箭 | $> 0$ | $\delta_\varphi$ 与 $\alpha$ 异号 | 需控制系统维持稳定，转弯响应快 |

## 应用价值

转弯过程是主动段飞行程序设计的核心内容。转弯段的设计直接影响关机点参数、飞行过载、气动载荷和结构应力。转弯速率过快会导致过载超标，转弯速率过慢会增加重力损失。最优转弯程序需要在速度增量损失和结构载荷之间取得平衡。

## 相关概念

- [俯仰程序角（Pitch Program）](/glossary/fundamentals/pitch-program/)
- [速度倾角（Velocity Inclination Angle）](/glossary/fundamentals/velocity-inclination-angle/)
- [瞬时平衡假设（Instantaneous Balance）](/glossary/fundamentals/instantaneous-balance/)
- [过载（Load Factor）](/glossary/fundamentals/load-factor/)
- [主动段（Powered Phase）](/glossary/fundamentals/powered-phase/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
