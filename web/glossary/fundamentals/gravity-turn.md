---
title: 重力转弯（Gravity Turn）
description: 详细解析重力转弯的定义、物理机制及在火箭大气层飞行段中的应用
keywords: 重力转弯, Gravity Turn, 零攻角转弯, 大气层飞行段, 法向过载
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 重力转弯（Gravity Turn）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 重力转弯详解 | 术语定义
  description: 详细解析重力转弯的定义及物理机制
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 重力转弯详解 | 术语定义
  description: 详细解析重力转弯的定义及物理机制
  image: /logo.png
permalink: /glossary/fundamentals/gravity-turn/
---

# 重力转弯（Gravity Turn）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

重力转弯是指火箭在大气层飞行段保持攻角为零，仅依靠重力的法向分量 $-mg\cos\theta$ 实现弹道转弯的飞行方式。由于攻角为零，火箭不产生气动升力，转弯完全由重力分量驱动。

## 核心要素

### 物理机制

重力转弯时，火箭的法向过载为：

$$n_y = \frac{v\dot{\theta} - g\cos\theta}{g_0}$$

当攻角 $\alpha = 0$ 时，气动力法向分量为零，火箭仅在重力法向分量作用下转弯。此时 $\dot{\theta} = \dot{\varphi}$，限制法向过载等价于限制 $\dot{\varphi}$。

### 与有攻角转弯的对比

| 比较项 | 重力转弯 | 有攻角转弯 |
|:---|:---|:---|
| 攻角 | $\alpha = 0$ | $\alpha \neq 0$ |
| 气动载荷 | 小 | 较大 |
| 转弯速率 | 慢（受重力限制） | 快（气动力辅助） |
| 速度损失 | 阻力损失小 | 阻力损失较大 |
| 适用阶段 | 跨音速、大动压段 | 低动压段 |

### 应用时机

在大气层飞行段的转弯过程中：
- **有攻角转弯段**（$t_1 \sim t_2$）：低动压阶段，利用攻角产生气动力快速转弯
- **大动压转弯段**（$t_2 \sim t_3$）：跨音速及大动压阶段，采用重力转弯

重力转弯主要应用于大动压阶段，原因是：
- 跨音速段气动力变化剧烈，保持攻角为零可改善控制系统工作条件
- 减小气动载荷和气动干扰
- 减少速度的阻力损失

### 设计约束

重力转弯段的设计需满足：
- 法向过载限制：$n_y \leq (n_y)_{\max}$
- 俯仰角速度限制：$|\dot{\varphi}_{pr}| \leq (\dot{\varphi}_{pr})_{\max}$
- 俯仰角加速度限制：$|\ddot{\varphi}_{pr}| \leq (\ddot{\varphi}_{pr})_{\max}$

## 应用价值

重力转弯是火箭大气层飞行段转弯设计的重要方式。通过在大动压阶段保持零攻角，可以有效降低气动载荷，保护箭体结构，改善控制系统工作条件。同时，零攻角飞行减少了阻力损失，有利于提高火箭的运载能力。重力转弯与有攻角转弯的合理配合是大气层飞行段飞行程序设计的关键。

## 相关概念

- [俯仰程序角（Pitch Program Angle）](/glossary/fundamentals/pitch-program/)
- [主动段转弯过程（Powered Phase Turning Process）](/glossary/fundamentals/turning-program/)
- [发射方位角（Launch Azimuth）](/glossary/fundamentals/launch-azimuth/)
- [推重比（Thrust-to-Weight Ratio）](/glossary/fundamentals/thrust-to-weight-ratio/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
