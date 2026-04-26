---
title: scipy - Python科学计算库
description: scipy是一个Python科学计算库，提供了大量的数值算法和工具，广泛应用于地月空间轨道设计与分析中。
keywords: scipy, 科学计算, 数值算法, 优化, 插值, 地月空间轨道, 信号处理, FFT
author: 天疆说
date: 2026-03-25
lastUpdated: 2026-04-26
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

scipy 是一个开源 Python 科学计算库，建立在 NumPy 数组之上，提供了大量用于科学和工程计算的数值算法与工具。在地月空间轨道设计、动力学分析、信号处理与数据统计等领域有广泛应用。

## 主要功能模块

| 模块 | 功能 | 地月空间应用 |
|------|------|-------------|
| `scipy.integrate` | 数值积分、常微分方程（ODE）求解器 | 轨道积分、动力学传播、状态转移矩阵计算 |
| `scipy.optimize` | 优化算法、非线性方程与最小二乘求解 | 轨道设计、参数优化、Lambert问题求解 |
| `scipy.linalg` | 线性代数运算、矩阵分解 | 矩阵计算、特征值分析、协方差传播 |
| `scipy.interpolate` | 一维/多维插值与平滑样条 | 数据插值、星历平滑、观测数据补全 |
| `scipy.special` | 特殊数学函数（球谐、椭圆积分、Bessel 等） | 球谐函数展开、引力场建模 |
| `scipy.fft` | 快速傅里叶变换（FFT）与相关变换 | 轨道频谱分析、周期检测、信号滤波 |
| `scipy.signal` | 信号处理（滤波、频谱分析、窗函数） | 测距/测速信号处理、滤波器设计 |
| `scipy.stats` | 统计分布、假设检验、描述统计 | 轨道确定误差分析、蒙特卡洛仿真 |
| `scipy.spatial` | 空间数据结构（KDTree、凸包、Voronoi） | 星图匹配、空间邻近搜索、覆盖分析 |
| `scipy.sparse` | 稀疏矩阵与稀疏线性代数 | 大规模轨道网络分析、有限元建模 |
| `scipy.differentiate` | 有限差分微分工具 | 灵敏度分析、梯度计算 |
| `scipy.cluster` | 聚类算法 | 轨道分类、空间物体聚类分析 |

## 技术特性

- **语言**：Python 3.12+ 为主 API；底层核心由 C（C17）、C++（C++17）、Cython（≥3.2.0）和 Fortran 编写，确保高性能
- **构建系统**：Meson（≥1.5.0）+ meson-python，支持 Debug/Release/ASan 等多种构建模式
- **BLAS/LAPACK**：支持 OpenBLAS（默认）、MKL、Accelerate（macOS）等多种后端，提供高效的线性代数运算
- **数组接口**：全面支持 NumPy 2.0+，并正向 Array API 标准兼容
- **版本**：当前稳定版为 1.17+

## 安装方式

```bash
# 标准安装
pip install scipy

# 开发版（含测试依赖）
pip install -e ".[dev,test]"

# 通过 pixi（推荐用于 SciPy 开发）
pixi install
```

## 应用示例

### 轨道积分（CR3BP）

```python
import numpy as np
from scipy.integrate import solve_ivp

def orbital_dynamics(t, state, mu):
    """圆形限制性三体问题（CR3BP）动力学方程"""
    x, y, z, vx, vy, vz = state
    
    r1 = np.sqrt((x + mu)**2 + y**2 + z**2)
    r2 = np.sqrt((x - 1 + mu)**2 + y**2 + z**2)
    
    ax = 2*vy + x - (1 - mu)*(x + mu)/r1**3 - mu*(x - 1 + mu)/r2**3
    ay = -2*vx + y - (1 - mu)*y/r1**3 - mu*y/r2**3
    az = -(1 - mu)*z/r1**3 - mu*z/r2**3
    
    return [vx, vy, vz, ax, ay, az]

# 初始状态（L1 附近 Halo 轨道近似初值）
state0 = [0.8234, 0, 0.1009, 0, 0.1923, 0]
mu = 0.01215  # 地月系统质量比

# 积分一个周期
t_span = [0, 2.8]
sol = solve_ivp(
    orbital_dynamics, t_span, state0, 
    args=(mu,), method='RK45', rtol=1e-9, atol=1e-12
)

print(f"积分完成，共 {len(sol.t)} 个时间点，终点偏差: {np.linalg.norm(sol.y[:3, -1] - state0[:3]):.6e}")
```

### 参数优化

```python
from scipy.optimize import minimize, differential_evolution

def objective(params):
    """目标函数：最小化轨道偏差"""
    x, y = params
    return (x - 1)**2 + (y - 2)**2

# 局部优化（BFGS）
result = minimize(objective, [0, 0], method='BFGS')
print(f"局部最优解: {result.x}, 目标值: {result.fun:.6e}")

# 全局优化（差分进化）
result = differential_evolution(objective, bounds=[(-5, 5), (-5, 5)])
print(f"全局最优解: {result.x}, 目标值: {result.fun:.6e}")
```

### FFT 频谱分析（轨道周期检测）

```python
import numpy as np
from scipy.fft import fft, fftfreq

# 模拟含噪声的轨道半径时间序列
t = np.linspace(0, 100, 1000)
r = 1.0 + 0.1 * np.sin(2 * np.pi * 0.05 * t) + 0.05 * np.random.randn(len(t))

# FFT 分析
yf = fft(r)
xf = fftfreq(len(t), t[1] - t[0])

# 找出主频
positive_freqs = xf[:len(xf)//2]
amplitude = 2.0/len(t) * np.abs(yf[:len(yf)//2])
peak_idx = np.argmax(amplitude[1:]) + 1  # 排除直流分量

print(f"主频: {positive_freqs[peak_idx]:.4f} Hz")
print(f"对应周期: {1/positive_freqs[peak_idx]:.2f} s")
```

### 稀疏矩阵（空间物体接近分析）

```python
import numpy as np
from scipy.sparse import csr_matrix
from scipy.spatial.distance import cdist

# 模拟 1000 个空间物体的位置（km）
np.random.seed(42)
positions = np.random.randn(1000, 3) * 400000  # 近地轨道尺度

# 计算两两距离，仅保留 < 100 km 的接近对（稀疏）
threshold = 100.0
dists = cdist(positions, positions)
row, col = np.where((dists < threshold) & (dists > 0))
data = dists[row, col]

# 构建稀疏距离矩阵（1000×1000 中仅少量非零元素）
sparse_dist = csr_matrix((data, (row, col)), shape=(1000, 1000))
density = sparse_dist.nnz / (1000 * 1000)

print(f"空间物体数: {1000}")
print(f"接近对数: {sparse_dist.nnz}")
print(f"矩阵密度: {density:.4%}（稀疏存储节省 {1 - density:.2%} 内存）")
```

### 统计分析（轨道确定误差）

```python
import numpy as np
from scipy import stats

# 模拟轨道确定的位置误差样本（单位：km）
errors = np.random.normal(loc=0.5, scale=2.0, size=1000)

# 描述统计
print(f"均值: {np.mean(errors):.3f} km")
print(f"标准差: {np.std(errors):.3f} km")
print(f"95% 置信区间: {stats.norm.interval(0.95, loc=np.mean(errors), scale=stats.sem(errors))}")

# 正态性检验（Shapiro-Wilk 限制 n ≤ 5000，大样本用 scipy.stats.kstest）
sample = np.random.choice(errors, size=500)
stat, p_value = stats.shapiro(sample)
print(f"Shapiro-Wilk 检验 p值: {p_value:.4f}")
```

## 相关资源

- [SciPy 官方文档](https://docs.scipy.org/doc/scipy/)
- [SciPy 教程](https://scipy-lectures.org/)
- [SciPy GitHub 仓库](https://github.com/scipy/scipy)
- [SciPy 开发者指南](https://scipy.github.io/devdocs/dev/hacking.html)
- [NumPy 文档](https://numpy.org/doc/) — SciPy 的基础依赖
