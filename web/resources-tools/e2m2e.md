---
title: e2m2e - 地月空间转移轨道设计库
description: e2m2e是一个基于圆型限制性三体问题（CR3BP）的Python库，专注于设计和分析地月空间转移轨道。
keywords: e2m2e, CR3BP, 转移轨道, 轨道设计, 微分修正, 轨道延拓, 地月空间
author: 天疆说
date: 2026-03-25
lastUpdated: 2026-03-25
wechatShare:
  title: e2m2e 地月空间转移轨道设计库
  desc: 基于CR3BP的地月空间轨道设计Python库
  image: /logo.png
og:
  title: e2m2e - 地月空间转移轨道设计库
  description: 基于圆型限制性三体问题（CR3BP）的Python库
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: e2m2e 地月空间转移轨道设计库
  description: 基于圆型限制性三体问题（CR3BP）的Python库
  image: /logo.png
permalink: /resources-tools/e2m2e/
---

# e2m2e — Earth to Moon, Moon to Earth

[e2m2e](https://github.com/cislunarspace/e2m2e)（Earth to Moon, Moon to Earth）是一个基于圆型限制性三体问题（CR3BP）的Python库，专注于设计和分析地月空间转移轨道。

## 核心功能

- **CR3BP 系统建模**：支持地月、日地、日木等常见天体系统
- **多种轨道类型**：DRO、ARO、RO、Halo、Lyapunov、Lissajous、Butterfly 等
- **轨道设计算法**：微分修正、自然延拓、伪弧长延拓、稳定性分析
- **转移轨道搜索**：网格搜索、NLP 优化、脉冲转移设计
- **可视化工具**：2D/3D 轨道绘图、Jacobi 常数图、稳定性分析图

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

# 1. 创建地月系统并计算平动点
system = CR3BP_System(mu=0.01215, primary="earth", secondary="moon")
system.compute_libration_points()
system.info()

# 2. 创建动力学对象和种子轨道
dynamics = e2m2e.core.dynamics.CR3BP_Dynamics(system=system)
x0 = 0.79188556619742
vy0 = 0.53682
initial_state = [x0, 0.0, 0.0, 0.0, vy0, 0.0]
seed_orbit = Orbit(states=[initial_state], times=[0])
seed_orbit.period = 3.472526005624708

# 3. 微分修正生成 DRO 轨道
corrector = DifferentialCorrection(dynamic=dynamics)
corrector.setup_2D_symmetric_x_fixed_x0(x0=x0)
seed_dro = corrector.iterate_correction(initial_guess=seed_orbit)

# 4. 自然延拓生成轨道族
continuation = Continuation(corrector=corrector)
family = continuation.natural_continuation(
    seed_orbit=seed_dro,
    param_range=(0.14, 0.9),
    step_size=0.005,
)

# 5. 可视化
from e2m2e.visualization import OrbitVisualizer
viz = OrbitVisualizer(system)
viz.plot_2d_projection(seed_dro, plane='xy', color='blue')
viz.plot_primary_bodies()
viz.plot_libration_points()
viz.show()
```

## 项目结构

```
e2m2e/
├── core/                 # 核心模块
│   ├── system.py         # CR3BP 系统定义
│   ├── dynamics.py       # 动力学模型
│   ├── orbit.py          # 轨道数据结构
│   └── coordinate.py     # 坐标变换
├── algorithms/           # 算法模块
│   ├── differential_correction.py  # 微分修正
│   ├── continuation.py            # 轨道延拓
│   └── stability.py              # 稳定性分析
├── transfer/            # 转移轨道设计
│   ├── transfer_search.py         # DRO 转移搜索
│   ├── transfer_optimization.py   # NLP 优化
│   └── transfer_base.py           # 基础类
└── visualization/       # 可视化
    └── plotting.py     # 绘图工具
```

## 相关资源

- [e2m2e GitHub 仓库](https://github.com/cislunarspace/e2m2e)
- [e2m2e 官方文档](https://github.com/cislunarspace/e2m2e#readme)