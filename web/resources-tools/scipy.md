---
title: scipy - Python科学计算库
description: scipy是一个Python科学计算库，提供了大量的数值算法和工具，广泛应用于地月空间轨道设计与分析中。
keywords: scipy, 科学计算, 数值算法, 优化, 插值, 地月空间轨道
author: 天疆说
date: 2026-03-25
lastUpdated: 2026-03-25
wechatShare:
  title: scipy 科学计算库
  desc: Python科学计算库，数值算法和工具
  image: /logo.png
og:
  title: scipy - Python科学计算库
  description: scipy提供了大量的数值算法和工具
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: scipy - Python科学计算库
  description: scipy提供了大量的数值算法和工具
  image: /logo.png
permalink: /resources-tools/scipy/
---

# scipy

scipy 是一个 Python 科学计算库，提供了大量的数值算法和工具，广泛应用于地月空间轨道设计与分析中。

## 主要功能模块

| 模块 | 功能 | 地月空间应用 |
|------|------|-------------|
| `scipy.integrate` | 数值积分、微分方程求解 | 轨道积分、动力学传播 |
| `scipy.optimize` | 优化算法、非线性方程求解 | 轨道设计、参数优化 |
| `scipy.linalg` | 线性代数运算 | 矩阵计算、特征值分析 |
| `scipy.interpolate` | 插值函数 | 数据插值、平滑处理 |
| `scipy.special` | 特殊数学函数 | 球谐函数、椭圆积分 |

## 安装方式

```bash
pip install scipy
```

## 应用示例

### 轨道积分

```python
import numpy as np
from scipy.integrate import solve_ivp

def orbital_dynamics(t, state, mu):
    """CR3BP 动力学方程"""
    x, y, z, vx, vy, vz = state
    
    r1 = np.sqrt((x + mu)**2 + y**2 + z**2)**3
    r2 = np.sqrt((x - 1 + mu)**2 + y**2 + z**2)**3
    
    ax = 2*vy + x - (1 - mu)*(x + mu)/r1 - mu*(x - 1 + mu)/r2
    ay = -2*vx + y - (1 - mu)*y/r1 - mu*y/r2
    az = -(1 - mu)*z/r1 - mu*z/r2
    
    return [vx, vy, vz, ax, ay, az]

# 初始状态
state0 = [0.8, 0, 0, 0, 0.5, 0]
mu = 0.01215

# 积分
t_span = [0, 10]
sol = solve_ivp(orbital_dynamics, t_span, state0, args=(mu,))

print(f"积分完成，共 {len(sol.t)} 个时间点")
```

### 参数优化

```python
from scipy.optimize import minimize, differential_evolution

def objective(params):
    """目标函数：最小化轨道偏差"""
    x, y = params
    return (x - 1)**2 + (y - 2)**2

# 局部优化
result = minimize(objective, [0, 0], method='BFGS')
print(f"局部最优解: {result.x}")

# 全局优化（差分进化）
result = differential_evolution(objective, bounds=[(-5, 5), (-5, 5)])
print(f"全局最优解: {result.x}")
```

## 相关资源

- [scipy 官方文档](https://docs.scipy.org/)
- [scipy 教程](https://scipy-lectures.org/)