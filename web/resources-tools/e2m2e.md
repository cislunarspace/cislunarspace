---
title: e2m2e - 地月空间轨道设计库
description: e2m2e是一个基于圆型限制性三体问题（CR3BP）和历表动力学的地月空间轨道设计Python库，支持周期轨道设计、转移轨道搜索和MBSE建模。
keywords: e2m2e, CR3BP, 转移轨道, 轨道设计, 微分修正, 轨道延拓, 地月空间, 历表动力学, SPICE, MBSE, 多射击法
author: 天疆说
date: 2026-04-26
lastUpdated: 2026-04-26
wechatShare:
  title: e2m2e 地月空间轨道设计库
  desc: 基于CR3BP和历表动力学的地月空间轨道设计Python库
  image: /logo.png
og:
  title: e2m2e - 地月空间轨道设计库
  description: 基于CR3BP和历表动力学的地月空间轨道设计Python库
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: e2m2e 地月空间轨道设计库
  description: 基于CR3BP和历表动力学的地月空间轨道设计Python库
  image: /logo.png
permalink: /resources-tools/e2m2e/
---

# e2m2e — Earth to Moon, Moon to Earth

[e2m2e](https://github.com/cislunarspace/e2m2e)（Earth to Moon, Moon to Earth）是一个基于圆型限制性三体问题（CR3BP）和历表动力学（N-body + SPICE）的Python库，专注于设计和分析地月空间转移轨道。支持从理论CR3BP模型到高精度星历模型的完整轨道设计工作流。

## 核心功能

- **CR3BP 系统建模**：支持地月、日地、日木等常见天体系统
- **历表动力学**：基于 SPICE 内核的 N-body 高精度动力学
- **太阳辐射压摄动**：CR3BP 框架下的 SRP 建模
- **多种轨道类型**：DRO、ARO、RO、Halo、Lyapunov、Lissajous、Butterfly、Dragonfly
- **轨道设计算法**：策略模式微分修正、自然/伪弧长延拓、多射击法、稳定性分析
- **转移轨道搜索**：DRO/RO 转移搜索、NLP 优化、脉冲转移设计
- **MBSE 架构**：基于 Protocol 的系统建模、需求管理、架构组件

## 支持的轨道类型

| 轨道类型 | 描述 |
|---------|------|
| **DRO** | 远距离逆行轨道 (Distant Retrograde Orbit) |
| **RO** | 共振轨道 (Resonant Orbit)，支持 3:2、4:3 等多种共振 |
| **ARO** | 轴向共振轨道 (Axial Resonant Orbit) |
| **Halo** | Halo 轨道，周期轨道的一种 |
| **Lyapunov** | Lyapunov 轨道，平面周期轨道 |
| **Lissajous** | Lissajous 轨道，拟周期轨道 |
| **Butterfly** | Butterfly 轨道，关于 xy 面对称 |
| **Dragonfly** | Dragonfly 轨道，多重对称性 |

## 新增模块

### 历表动力学与 SPICE

基于 NASA SPICE 内核的高精度 N-body 动力学，支持多天体引力摄动。通过 `EphemerisSystem` 配置多体系统，`EphemerisDynamics` 进行高精度轨道传播。适合需要真实星历精度的任务设计。

```python
from e2m2e.core import EphemerisSystem, EphemerisDynamics

system = EphemerisSystem(bodies=["earth", "moon", "sun"])
dynamics = EphemerisDynamics(system=system)
```

### 太阳辐射压

在 CR3BP 框架中引入太阳辐射压摄动，适用于大面积质量比航天器（如太阳帆）的轨道分析。

```python
from e2m2e.core import CR3BP_SRP_Dynamics

srp_dynamics = CR3BP_SRP_Dynamics(system=system, area=10.0, mass=100.0, Cr=1.5)
```

### MBSE 架构

基于 Python Protocol 接口的系统建模框架，包含架构组件、需求管理和数据模型。支持轨道设计的系统工程全流程。

- `mbse/architecture/` — 系统架构组件定义
- `mbse/requirements/` — 需求管理与追溯
- `mbse/data/` — Pydantic 数据模型与枚举
- `mbse/diagrams/` — 架构图生成

### 多射击法

多段打靶法用于复杂转移轨道的高精度求解，支持多进程并行计算。

```python
from e2m2e.algorithms import MultipleShooting, sample_patch_points

patch_points = sample_patch_points(orbit, n_segments=10)
ms = MultipleShooting(dynamics=dynamics)
result = ms.solve(patch_points)
```

## 安装方式

```bash
pip install e2m2e
```

开发依赖安装：
```bash
pip install e2m2e[dev]
```

## 示例调用

```python
import e2m2e
from e2m2e.core import CR3BP_System, Orbit
from e2m2e.algorithms import DifferentialCorrection, Continuation
from e2m2e.visualization import FamilyPlotter

# 1. 创建地月系统并计算平动点
system = CR3BP_System(mu=0.01215, primary="earth", secondary="moon")
system.compute_libration_points()

# 2. 创建动力学对象
dynamics = e2m2e.core.dynamics.CR3BP_Dynamics(system=system)

# 3. 微分修正生成 DRO 轨道
corrector = DifferentialCorrection(dynamic=dynamics)
corrector.setup_2D_symmetric_x_fixed_x0(x0=0.79188556619742)
seed_orbit = Orbit(states=[[0.79188556619742, 0, 0, 0, 0.53682, 0]], times=[0])
seed_orbit.period = 3.472526005624708
seed_dro = corrector.iterate_correction(initial_guess=seed_orbit)

# 4. 自然延拓生成轨道族
continuation = Continuation(corrector=corrector)
family = continuation.natural_continuation(
    seed_orbit=seed_dro,
    param_range=(0.14, 0.9),
    step_size=0.005,
)

# 5. 可视化轨道族
plotter = FamilyPlotter(system)
plotter.plot_family_2d(family, jacobi_values=family.get_jacobi_constants())
```

## 项目结构

```
e2m2e/
├── core/                          # 核心模块
│   ├── system.py                  # CR3BP 系统定义
│   ├── dynamics.py                # CR3BP 动力学模型
│   ├── srp_dynamics.py            # 太阳辐射压摄动
│   ├── ephemeris_system.py        # 历表多体系统
│   ├── ephemeris_dynamics.py      # N-body 历表动力学
│   ├── spice.py                   # SPICE 内核管理
│   ├── orbit.py                   # 轨道数据结构
│   └── coordinate.py              # 坐标变换
├── algorithms/                    # 算法模块
│   ├── differential_correction.py # 微分修正
│   ├── continuation.py            # 轨道延拓
│   ├── stability.py               # 稳定性分析
│   ├── multiple_shooting.py       # 多射击法
│   └── strategies/                # 策略模式修正配置
│       ├── halo.py                # Halo 轨道策略
│       ├── symmetric_2d.py        # 2D 对称轨道策略
│       └── symmetric_3d.py        # 3D 对称轨道策略
├── transfer/                      # 转移轨道设计
│   ├── transfer.py                # 转移轨道类
│   ├── transfer_search.py         # DRO/RO 转移搜索
│   ├── transfer_optimization.py   # NLP 优化
│   └── search_config.py           # 搜索配置
├── mbse/                          # 系统工程建模
│   ├── architecture/              # 系统架构组件
│   ├── requirements/              # 需求管理
│   ├── data/                      # Pydantic 数据模型
│   └── diagrams/                  # 架构图生成
└── visualization/                 # 可视化
    ├── plotting.py                # 基础绘图
    ├── family.py                  # 轨道族绘图
    ├── transfer.py                # 转移轨道绘图
    ├── stability.py               # 稳定性分析图
    └── config.py                  # 绘图配置
```

## 相关资源

- [e2m2e 官方文档](https://cislunarspace.github.io/e2m2e/)
- [e2m2e GitHub 仓库](https://github.com/cislunarspace/e2m2e)
